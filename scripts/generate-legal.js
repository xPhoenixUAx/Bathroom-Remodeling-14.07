const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "legal-content.md"), "utf8")
  .replace(/\r/g, "")
  .replace(/href="(?:mailto:\[[^\]]+\]|tel:\[[^\]]+\]|\[privacy request URL\])"/g, 'href="index.html#contact"')
  .replace(/href="\[website\]"/g, 'href="index.html"')
  .replace(/href="\[opt-out URL\]"/g, 'href="cookie-policy.html#7-consent-and-preference-controls"')
  .replace(/href="\[provider list URL\]"/g, 'href="privacy.html#7-how-we-disclose-personal-information"');

const pages = [
  { start: "# Privacy Policy", end: "# Terms of Service", file: "privacy.html", title: "Privacy Policy", description: "How Roomwell collects, uses, shares, and protects information across its bathroom remodeling provider-matching service." },
  { start: "# Terms of Service", end: "# Cookie Policy", file: "terms.html", title: "Terms of Service", description: "Terms governing use of the Roomwell bathroom remodeling information and independent-provider matching service." },
  { start: "# Cookie Policy", end: "# Supporting Legal and Consent Copy", file: "cookie-policy.html", title: "Cookie Policy", description: "How Roomwell uses browser storage, cookies, and similar technologies, along with the choices available to visitors." }
];

function slugify(value) {
  return value.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function inline(value) {
  return value
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function parse(markdown) {
  const lines = markdown.split("\n");
  const output = [];
  const toc = [];
  let paragraph = [];
  let listType = null;
  let sectionOpen = false;

  function flushParagraph() {
    if (!paragraph.length) return;
    const text = inline(paragraph.join(" ").trim());
    if (/^<time\b/.test(text)) output.push('<div class="legal-updated">Last updated: ' + text + "</div>");
    else output.push("<p>" + text + "</p>");
    paragraph = [];
  }

  function closeList() {
    if (!listType) return;
    output.push("</" + listType + ">");
    listType = null;
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line || line === "---") {
      flushParagraph();
      closeList();
      continue;
    }
    if (line.startsWith("# ")) continue;
    if (line.startsWith("## ")) {
      flushParagraph(); closeList();
      if (sectionOpen) output.push("</section>");
      const title = line.slice(3).trim();
      const id = slugify(title);
      toc.push({ id, title });
      output.push('<section id="' + id + '"><h2>' + inline(title) + "</h2>");
      sectionOpen = true;
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph(); closeList();
      output.push("<h3>" + inline(line.slice(4).trim()) + "</h3>");
      continue;
    }
    if (line.startsWith("|")) {
      flushParagraph(); closeList();
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i += 1;
      }
      i -= 1;
      const rows = tableLines.map(row => row.slice(1, -1).split("|").map(cell => cell.trim()));
      if (rows.length >= 2) {
        output.push('<div class="legal-table-wrap"><table class="legal-table"><thead><tr>' + rows[0].map(cell => "<th>" + inline(cell) + "</th>").join("") + "</tr></thead><tbody>");
        rows.slice(2).forEach(row => output.push("<tr>" + row.map(cell => "<td>" + inline(cell) + "</td>").join("") + "</tr>"));
        output.push("</tbody></table></div>");
      }
      continue;
    }
    const unordered = line.match(/^-\s+(.+)/);
    const ordered = line.match(/^\d+\.\s+(.+)/);
    if (unordered || ordered) {
      flushParagraph();
      const wanted = unordered ? "ul" : "ol";
      if (listType !== wanted) { closeList(); listType = wanted; output.push("<" + listType + ">"); }
      output.push("<li>" + inline((unordered || ordered)[1]) + "</li>");
      continue;
    }
    if (/^<div\b|^<aside\b|^<p\b/.test(line)) {
      flushParagraph(); closeList(); output.push(line); continue;
    }
    paragraph.push(line);
  }
  flushParagraph(); closeList();
  if (sectionOpen) output.push("</section>");
  return { html: output.join("\n"), toc };
}

function template(page, parsed) {
  const toc = parsed.toc.map((item) => '<li><a href="#' + item.id + '"><span>' + item.title.replace(/^\d+\.\s*/, "") + "</span></a></li>").join("\n");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${page.description}"><meta name="theme-color" content="#0b0b0a">
  <title>${page.title} | {company}</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet"><link rel="stylesheet" href="css/bundle.css?v=20260819j"><link rel="stylesheet" href="css/animations.css?v=20260818d">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a><div data-site-header></div>
  <main id="main">
    <section class="page-hero page-hero--compact"><div class="container page-hero__content"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Home</a><i data-lucide="chevron-right" aria-hidden="true"></i><span>${page.title}</span></nav><p class="eyebrow" data-reveal>Legal pages</p><h1 data-reveal data-reveal-delay="120">${page.title}.</h1></div></section>
    <section class="section section--white"><div class="container legal-shell">
      <aside class="legal-toc"><h2>On this page</h2><ol>${toc}</ol></aside>
      <article class="legal-content"><div class="legal-notice"><strong>Aggregator notice.</strong> <span data-company-name></span> is an information and provider-matching resource, not a remodeling contractor. Independent providers control their own services, estimates, contracts, and work.</div>${parsed.html}</article>
    </div></section>
  </main>
  <div data-site-footer></div>
<script src="https://unpkg.com/lucide@0.468.0/dist/umd/lucide.js" defer></script><script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js" defer></script><script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js" defer></script><script src="js/site-config.js?v=20260818r" defer></script><script src="js/main.js?v=20260819c" defer></script><script src="js/animations.js?v=20260819c" defer></script>
</body>
</html>`;
}

for (const page of pages) {
  const start = source.indexOf(page.start);
  const end = source.indexOf(page.end, start + page.start.length);
  if (start < 0 || end < 0) throw new Error("Could not find legal section for " + page.title);
  const body = source.slice(start + page.start.length, end).trim();
  fs.writeFileSync(path.join(root, page.file), template(page, parse(body)), "utf8");
}

console.log("Generated: " + pages.map(page => page.file).join(", "));
