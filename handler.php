<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function post_value(string $key): string
{
    if (!isset($_POST[$key]) || !is_string($_POST[$key])) {
        return '';
    }

    return trim($_POST[$key]);
}

function clean_line(string $value): string
{
    $value = str_replace(array("\r", "\n", "\0"), ' ', $value);
    $cleaned = preg_replace('/\s+/u', ' ', trim($value));
    return is_string($cleaned) ? $cleaned : '';
}

function clean_message(string $value): string
{
    $value = str_replace(array("\r", "\0"), array('', ''), trim($value));
    $cleaned = preg_replace('/[\t ]+/u', ' ', $value);
    return is_string($cleaned) ? $cleaned : '';
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, array('success' => false, 'message' => 'Method not allowed.'));
}

$contentLength = isset($_SERVER['CONTENT_LENGTH']) ? (int) $_SERVER['CONTENT_LENGTH'] : 0;
if ($contentLength > 51200) {
    respond(413, array('success' => false, 'message' => 'The request is too large.'));
}

if (!empty($_SERVER['HTTP_ORIGIN']) && !empty($_SERVER['HTTP_HOST'])) {
    $originHost = parse_url((string) $_SERVER['HTTP_ORIGIN'], PHP_URL_HOST);
    $requestHost = preg_replace('/:\d+$/', '', (string) $_SERVER['HTTP_HOST']);
    if (!is_string($originHost) || strcasecmp($originHost, (string) $requestHost) !== 0) {
        respond(403, array('success' => false, 'message' => 'Request origin was rejected.'));
    }
}

$configPath = __DIR__ . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'site-config.js';
$configSource = is_file($configPath) ? file_get_contents($configPath) : false;

if (!is_string($configSource) || !preg_match(
    '~\/\*\s*SITE_CONFIG_JSON_START\s*\*\/\s*window\.SITE_CONFIG\s*=\s*(\{.*?\})\s*;\s*\/\*\s*SITE_CONFIG_JSON_END\s*\*\/~s',
    $configSource,
    $configMatch
)) {
    respond(500, array('success' => false, 'message' => 'The site contact configuration is unavailable.'));
}

$siteConfig = json_decode($configMatch[1], true);
if (!is_array($siteConfig)) {
    respond(500, array('success' => false, 'message' => 'The site contact configuration is invalid.'));
}

$contact = isset($siteConfig['contact']) && is_array($siteConfig['contact']) ? $siteConfig['contact'] : array();
$company = isset($siteConfig['company']) && is_array($siteConfig['company']) ? $siteConfig['company'] : array();
$brand = isset($siteConfig['brand']) && is_array($siteConfig['brand']) ? $siteConfig['brand'] : array();

$recipient = clean_line((string) ($contact['email'] ?? ''));
$companyName = clean_line((string) ($company['name'] ?? 'Roomwell'));
$brandName = clean_line((string) ($brand['name'] ?? $companyName));
$website = clean_line((string) ($contact['website'] ?? ''));

if (!filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
    respond(500, array('success' => false, 'message' => 'The destination email is not configured correctly.'));
}

/* Quietly accept honeypot submissions so bots receive no useful feedback. */
if (post_value('_honey') !== '') {
    respond(200, array('success' => true));
}

$name = clean_line(post_value('name'));
$email = clean_line(post_value('email'));
$service = clean_line(post_value('service'));
$message = clean_message(post_value('message'));
$consent = strtolower(clean_line(post_value('consent')));

$services = array(
    'complete-bathroom-remodel' => 'Complete Bathroom Remodel',
    'shower-bathtub-remodeling' => 'Shower & Bathtub Remodeling'
);

if (text_length($name) < 2 || text_length($name) > 100) {
    respond(422, array('success' => false, 'message' => 'Please enter a valid name.'));
}

if (text_length($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, array('success' => false, 'message' => 'Please enter a valid email address.'));
}

if (!isset($services[$service])) {
    respond(422, array('success' => false, 'message' => 'Please select a valid service.'));
}

if (text_length($message) < 10 || text_length($message) > 3000) {
    respond(422, array('success' => false, 'message' => 'Project details must be between 10 and 3000 characters.'));
}

if (!in_array($consent, array('1', 'true', 'yes', 'on'), true)) {
    respond(422, array('success' => false, 'message' => 'Consent is required before submitting.'));
}

$websiteHost = parse_url($website, PHP_URL_HOST);
if (!is_string($websiteHost) || !preg_match('/^[a-z0-9.-]+$/i', $websiteHost)) {
    $websiteHost = preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? 'localhost.localdomain'));
}
$websiteHost = preg_replace('/^www\./i', '', (string) $websiteHost);
if (!preg_match('/^[a-z0-9.-]+$/i', (string) $websiteHost) || strpos((string) $websiteHost, '.') === false) {
    $websiteHost = 'localhost.localdomain';
}

$fromEmail = 'no-reply@' . $websiteHost;
$plainSubject = 'New bathroom project request — ' . ($brandName !== '' ? $brandName : $companyName);
$subject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($plainSubject, 'UTF-8', 'B', "\r\n")
    : '=?UTF-8?B?' . base64_encode($plainSubject) . '?=';

$body = implode("\n", array(
    'New bathroom project request',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Service: ' . $services[$service],
    '',
    'Project details:',
    $message,
    '',
    'Consent: Confirmed',
    'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC'
));

$headers = implode("\r\n", array(
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . ($brandName !== '' ? $brandName : $companyName) . ' Website <' . $fromEmail . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . PHP_VERSION
));

if (!mail($recipient, $subject, $body, $headers)) {
    respond(500, array('success' => false, 'message' => 'The request could not be delivered right now. Please try again later.'));
}

respond(200, array('success' => true));
