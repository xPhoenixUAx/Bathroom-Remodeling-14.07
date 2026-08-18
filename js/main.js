(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};
  var pageTitle = config.pageTitle || "Bathroom Remodeling, Made Clear";
  var company = config.company || {};
  var brand = config.brand || {};
  var contact = config.contact || {};
  var companyName = company.name || "Roomwell Bath Network";
  var companyLegalName = company.legalName || companyName;
  var companyId = company.id || "";
  var brandName = brand.name || companyName;
  var brandDescriptor = brand.descriptor || "";
  var contactEmail = contact.email || "";
  var privacyEmail = contact.privacyEmail || contactEmail;
  var website = contact.website || "";
  var operatorNames = companyName + (companyLegalName !== companyName ? " and " + companyLegalName : "");
  var siteSettings = {
    formEndpoint: contactEmail ? "https://formsubmit.co/ajax/" + contactEmail : "",
    privacyRequestUrl: "index.html#contact",
    doNotSellShareUrl: "cookie-policy.html#7-consent-and-preference-controls",
    providerListUrl: "privacy.html#7-how-we-disclose-personal-information",
    maxProviderCount: 4,
    governingLaw: "Illinois",
    disputeVenue: "Cook County, Illinois",
    footerCompanyLine: companyId ? companyName + " · ID " + companyId : companyName,
    footerTextPrimary: "A homeowner-first bathroom remodeling directory built to make early project planning simpler.",
    footerTextSecondary: brandName + " helps you explore project types and request introductions to independent local providers; " + brandName + " does not perform remodeling work.",
    disclaimerShort: brandName + " is a free matching resource, not a remodeling contractor. Providers in our network are independent businesses.",
    disclaimerFull: "Disclaimer: This site is a free service that assists homeowners in connecting with local bathroom remodeling service providers. " + operatorNames + " do not perform, supervise, or guarantee remodeling work. All contractors and providers are independent, and this site does not warrant or guarantee estimates, availability, workmanship, project outcomes, or services performed. It is the homeowner’s responsibility to verify that any hired provider carries the licenses, insurance, permits, certifications, and other credentials required for the work. All persons depicted in a photo or video are actors or models and are not contractors or providers listed on this site.",
    footerDisclaimer: brandName + " is an informational and referral resource. Contractor availability, pricing, qualifications, and project terms are determined independently between the homeowner and the selected provider.",
    copyrightLine: "© " + new Date().getFullYear() + " " + companyLegalName + ". All rights reserved.",
    ctaPrimary: "Request a Free Match",
    ctaSecondary: "Explore Services",
    formSuccessTitle: "Your project request is in",
    formSuccessMessage: "Thank you for contacting " + companyName + ". We’ll review your bathroom project details and follow up using the contact information you provided. Questions in the meantime? Email " + contactEmail + ".",
    cookieStorageKey: "roomwell-cookie-preference",
    cookiePreferenceDuration: "Until you clear browser storage or change your choice",
    cookieMessage: "We use essential browser storage to remember your privacy choice. You can accept or decline optional technologies.",
    legalLastUpdated: "July 14, 2026",
    formSending: "Sending…"
  };
  var serviceGroups = [
    {
      title: "Full Bathroom Planning",
      icon: "drafting-compass",
      services: [
        { slug: "complete-bathroom-remodel", title: "Complete Bathroom Remodel" }
      ]
    },
    {
      title: "Showers & Baths",
      icon: "bath",
      services: [
        { slug: "shower-bathtub-remodeling", title: "Shower & Bathtub Remodeling" }
      ]
    }
  ];
  var services = serviceGroups.reduce(function (all, group) {
    return all.concat(group.services);
  }, []);
  var selectors = {
    header: "[data-site-header]",
    footer: "[data-site-footer]"
  };

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function serviceUrl(slug) {
    return slug + ".html";
  }

  function getCurrentPage() {
    var file = window.location.pathname.split("/").pop() || "index.html";
    return file.toLowerCase();
  }

  function isCurrent(name) {
    var file = getCurrentPage();
    if (name === "home") return file === "" || file === "index.html";
    if (name === "services") {
      return services.some(function (service) {
        return file === service.slug + ".html";
      });
    }
    return file === name + ".html";
  }

  function brandMarkup() {
    var logoMarkup = brand.logoUrl
      ? '<img class="brand__logo" src="' + escapeHtml(brand.logoUrl) + '" alt="">'
      : '<span class="brand__mark" aria-hidden="true"></span>';
    return [
      logoMarkup,
      '<span class="brand__text">',
      '<span data-company-brand-name>' + escapeHtml(brandName) + "</span>",
      '<span class="brand__descriptor" data-company-brand-descriptor>' + escapeHtml(brandDescriptor) + "</span>",
      "</span>"
    ].join("");
  }

  function groupedServicesMarkup(mode) {
    return serviceGroups.map(function (group) {
      if (mode === "mobile") {
        return [
          '<div class="mobile-service-group">',
          "<strong>" + escapeHtml(group.title) + "</strong>",
          group.services.map(function (service) {
            return '<a href="' + serviceUrl(service.slug) + '">' + escapeHtml(service.title) + "</a>";
          }).join(""),
          "</div>"
        ].join("");
      }
      return [
        '<div class="mega-group">',
        '<div class="mega-group__heading"><i data-lucide="' + escapeHtml(group.icon || "grid-2x2") + '" aria-hidden="true"></i><span>' + escapeHtml(group.title) + "</span></div>",
        '<ul class="mega-group__list">',
        group.services.map(function (service) {
          return '<li><a href="' + serviceUrl(service.slug) + '">' + escapeHtml(service.title) + "</a></li>";
        }).join(""),
        "</ul></div>"
      ].join("");
    }).join("");
  }

  function injectHeader() {
    var mount = document.querySelector(selectors.header);
    if (!mount) return;
    var lightTheme = document.body.getAttribute("data-header-theme") === "light";
    mount.outerHTML = [
      '<header class="site-header' + (lightTheme ? '" data-theme="light' : "") + '" data-site-header>',
      '<div class="site-header__inner">',
      '<a class="brand" href="index.html" aria-label="' + escapeHtml(companyName) + ' home">' + brandMarkup() + "</a>",
      '<nav class="desktop-nav" aria-label="Primary navigation">',
      '<a class="nav-link' + (isCurrent("home") ? " is-current" : "") + '" href="index.html" data-nav-section="home">Home</a>',
      '<div class="nav-dropdown-wrap">',
      '<button class="nav-trigger' + (isCurrent("services") ? " is-current" : "") + '" type="button" aria-expanded="false" aria-controls="services-mega" data-nav-section="services">Services <i data-lucide="chevron-down" aria-hidden="true"></i></button>',
      '<div class="services-mega" id="services-mega">',
      '<div class="services-mega__top"><strong>Choose a project guide</strong><a class="icon-link" href="index.html#services">Service overview <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>',
      '<div class="services-mega__grid">' + groupedServicesMarkup("desktop") + "</div>",
      "</div></div>",
      '<a class="nav-link" href="index.html#about" data-nav-section="about">About</a>',
      '<a class="nav-link" href="index.html#contact" data-nav-section="contact">Contact</a>',
      "</nav>",
      '<div class="header-actions">',
      '<a class="header-email" data-email-link href="#"><i data-lucide="mail" aria-hidden="true"></i><span data-email-text></span></a>',
      '<a class="header-cta" href="index.html#contact"><span data-cta-primary></span><span class="header-cta__icon" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span></a>',
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation"><i data-lucide="menu" aria-hidden="true"></i></button>',
      "</div></div></header>",
      '<div class="mobile-menu" id="mobile-menu" aria-hidden="true">',
      '<div class="mobile-menu__inner">',
      '<a class="mobile-menu__link" href="index.html" data-nav-section="home">Home <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>',
      '<button class="mobile-services-toggle" type="button" aria-expanded="false" aria-controls="mobile-services-panel" data-nav-section="services">Services <i data-lucide="chevron-down" aria-hidden="true"></i></button>',
      '<div class="mobile-services-panel" id="mobile-services-panel" aria-hidden="true">' + groupedServicesMarkup("mobile") + '<a class="icon-link" href="index.html#services">Service overview <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>',
      '<a class="mobile-menu__link" href="index.html#about" data-nav-section="about">About <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>',
      '<a class="mobile-menu__link" href="index.html#contact" data-nav-section="contact">Contact <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>',
      '<div class="mobile-menu__contact">',
      '<a data-email-link href="#"><i data-lucide="mail" aria-hidden="true"></i><span data-email-text></span></a>',
      "</div></div></div>"
    ].join("");
  }

  function injectFooter() {
    var mount = document.querySelector(selectors.footer);
    if (!mount) return;
    var featured = services;
    mount.outerHTML = [
      '<footer class="site-footer" data-site-footer>',
      '<div class="container">',
      '<div class="footer-grid">',
      '<div class="footer-brand">',
      '<a class="brand" href="index.html">' + brandMarkup() + "</a>",
      '<p data-footer-text-primary></p>',
      '<p class="footer-brand__secondary" data-footer-text-secondary></p>',
      '<p class="footer-brand__note" data-disclaimer-short></p>',
      '<a class="icon-link" href="index.html#contact">Start your request <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>',
      '<div class="footer-socials" aria-label="Social links">',
      '<a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook"><i data-lucide="facebook" aria-hidden="true"></i></a>',
      '<a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram"><i data-lucide="instagram" aria-hidden="true"></i></a>',
      '<a href="https://www.pinterest.com/" target="_blank" rel="noopener" aria-label="Pinterest"><i data-lucide="pin" aria-hidden="true"></i></a>',
      "</div></div>",
      '<div class="footer-col footer-col--services"><h3>Services</h3><ul class="footer-links">',
      featured.map(function (service) {
        return '<li><a href="' + serviceUrl(service.slug) + '">' + escapeHtml(service.title) + "</a></li>";
      }).join(""),
      '<li><a href="index.html#services">Service overview</a></li></ul></div>',
      '<div class="footer-col"><h3>Contact</h3>',
      '<div class="footer-contact">',
      '<div class="footer-contact__item"><i data-lucide="mail" aria-hidden="true"></i><a data-email-link href="#" data-email-text></a></div>',
      '<div class="footer-contact__item"><i data-lucide="globe-2" aria-hidden="true"></i><a data-website-link href="#" target="_blank" rel="noopener" data-website-text></a></div>',
      "</div></div>",
      '<div class="footer-col"><h3>Legal pages</h3><ul class="footer-links">',
      '<li><a href="privacy.html">Privacy Policy</a></li><li><a href="terms.html">Terms of Service</a></li><li><a href="cookie-policy.html">Cookie Policy</a></li>',
      '<li><button class="footer-cookie-settings" type="button" data-cookie-settings>Cookie Settings</button></li>',
      "</ul></div></div>",
      '<p class="footer-disclaimer" data-footer-disclaimer></p>',
      '<p class="footer-disclaimer" data-disclaimer-full></p>',
      '<div class="footer-bottom"><span data-footer-company-line></span><span data-copyright-line></span></div>',
      "</div></footer>",
      '<aside class="cookie-banner" data-cookie-banner aria-label="Cookie choices" aria-live="polite">',
      '<h2>Your privacy choices</h2><p><span data-cookie-message></span> <a href="cookie-policy.html">Cookie Policy</a>.</p>',
      '<div class="cookie-banner__actions"><button type="button" data-cookie-accept>Accept</button><button type="button" data-cookie-decline>Decline</button></div>',
      "</aside>"
    ].join("");
  }

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.textContent = value == null ? "" : value;
    });
  }

  function setHref(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.setAttribute("href", value);
    });
  }

  function hydrateConfig() {
    var websiteLabel = String(website).replace(/^https?:\/\//, "").replace(/\/$/, "");
    setText("[data-company-name]", companyName);
    setText("[data-company-brand-name]", brandName);
    setText("[data-company-brand-descriptor]", brandDescriptor);
    setText("[data-company-legal-name]", companyLegalName);
    setText("[data-company-id]", companyId);
    setText("[data-email-text]", contactEmail);
    setText("[data-website-text]", websiteLabel);
    setText("[data-business-hours]", contact.businessHours);
    setText("[data-cta-primary]", siteSettings.ctaPrimary);
    setText("[data-cta-secondary]", siteSettings.ctaSecondary);
    setText("[data-footer-text-primary]", siteSettings.footerTextPrimary);
    setText("[data-footer-text-secondary]", siteSettings.footerTextSecondary);
    setText("[data-disclaimer-short]", siteSettings.disclaimerShort);
    setText("[data-disclaimer-full]", siteSettings.disclaimerFull);
    setText("[data-footer-disclaimer]", siteSettings.footerDisclaimer);
    setText("[data-footer-company-line]", siteSettings.footerCompanyLine);
    setText("[data-copyright-line]", siteSettings.copyrightLine);
    setText("[data-year]", new Date().getFullYear());
    setText("[data-cookie-message]", siteSettings.cookieMessage);
    setText("[data-legal-last-updated]", siteSettings.legalLastUpdated);
    setText("[data-privacy-email-text]", privacyEmail);
    setText("[data-max-provider-count]", siteSettings.maxProviderCount);
    setText("[data-governing-law]", siteSettings.governingLaw);
    setText("[data-dispute-venue]", siteSettings.disputeVenue);
    setText("[data-cookie-storage-key]", siteSettings.cookieStorageKey);
    setText("[data-cookie-preference-duration]", siteSettings.cookiePreferenceDuration);
    setHref("[data-email-link]", "mailto:" + contactEmail);
    setHref("[data-privacy-email-link]", "mailto:" + privacyEmail);
    setHref("[data-website-link]", website);
    setHref("[data-privacy-request-link]", siteSettings.privacyRequestUrl);
    setHref("[data-do-not-sell-share-link]", siteSettings.doNotSellShareUrl);
    setHref("[data-provider-list-link]", siteSettings.providerListUrl);

    document.querySelectorAll("[data-email-link]").forEach(function (element) {
      if (!element.getAttribute("aria-label")) element.setAttribute("aria-label", "Email " + contactEmail);
    });
    document.querySelectorAll("[data-website-link]").forEach(function (element) {
      if (!element.getAttribute("aria-label")) element.setAttribute("aria-label", "Visit " + websiteLabel);
    });

    document.title = document.title
      .replace("{page-title}", pageTitle)
      .replace("{company}", companyName);
  }

  function initializeIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      try {
        window.lucide.createIcons({ attrs: { "stroke-width": 1.65 } });
      } catch (error) {
        console.warn("Icon initialization skipped", error);
      }
    }
  }

  function initializeHeader() {
    var header = document.querySelector(".site-header");
    var menuToggle = document.querySelector(".menu-toggle");
    var mobileMenu = document.querySelector(".mobile-menu");
    var mobileServicesToggle = document.querySelector(".mobile-services-toggle");
    var mobilePanel = document.querySelector(".mobile-services-panel");
    var desktopTrigger = document.querySelector(".nav-trigger");
    var megaMenu = document.querySelector(".services-mega");
    var navSectionItems = Array.prototype.slice.call(document.querySelectorAll("[data-nav-section]"));
    if (!header) return;

    var lightTheme = header.getAttribute("data-theme") === "light";
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle("is-solid", lightTheme || y > 55);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    function setActiveSection(section, currentType) {
      navSectionItems.forEach(function (item) {
        var active = item.getAttribute("data-nav-section") === section;
        item.classList.toggle("is-current", active);
        if (active) item.setAttribute("aria-current", currentType || "location");
        else item.removeAttribute("aria-current");
      });
    }

    if (isCurrent("services")) {
      setActiveSection("services", "page");
    } else if (isCurrent("home")) {
      var trackedSections = ["about", "services", "contact"].map(function (id) {
        return { id: id, element: document.getElementById(id) };
      }).filter(function (entry) { return entry.element; });
      var sectionUpdateQueued = false;

      function updateActiveSection() {
        var activationLine = header.offsetHeight + 20;
        var activeSection = "home";
        trackedSections.forEach(function (entry) {
          if (entry.element.getBoundingClientRect().top <= activationLine) activeSection = entry.id;
        });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) activeSection = "contact";
        setActiveSection(activeSection, "location");
        sectionUpdateQueued = false;
      }

      function queueActiveSectionUpdate() {
        if (sectionUpdateQueued) return;
        sectionUpdateQueued = true;
        window.requestAnimationFrame(updateActiveSection);
      }

      window.addEventListener("scroll", queueActiveSectionUpdate, { passive: true });
      window.addEventListener("resize", queueActiveSectionUpdate);
      window.addEventListener("hashchange", queueActiveSectionUpdate);
      queueActiveSectionUpdate();
    }

    function setMobilePanel(open) {
      if (!mobileServicesToggle || !mobilePanel) return;
      mobilePanel.classList.toggle("is-open", open);
      mobilePanel.setAttribute("aria-hidden", String(!open));
      mobilePanel.inert = !open;
      mobileServicesToggle.setAttribute("aria-expanded", String(open));
    }

    function setMobileMenu(open) {
      if (!menuToggle || !mobileMenu) return;
      mobileMenu.classList.toggle("is-open", open);
      mobileMenu.setAttribute("aria-hidden", String(!open));
      mobileMenu.inert = !open;
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      menuToggle.innerHTML = '<i data-lucide="' + (open ? "x" : "menu") + '" aria-hidden="true"></i>';
      document.body.classList.toggle("menu-open", open);
      if (!open) setMobilePanel(false);
      initializeIcons();
    }

    if (menuToggle && mobileMenu) {
      mobileMenu.inert = true;
      menuToggle.addEventListener("click", function () {
        setMobileMenu(!mobileMenu.classList.contains("is-open"));
      });
      mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { setMobileMenu(false); });
      });
    }

    if (mobileServicesToggle && mobilePanel) {
      mobilePanel.inert = true;
      mobileServicesToggle.addEventListener("click", function () {
        setMobilePanel(!mobilePanel.classList.contains("is-open"));
      });
    }

    function setMegaMenu(open) {
      if (!desktopTrigger || !megaMenu) return;
      megaMenu.classList.toggle("is-open", open);
      desktopTrigger.setAttribute("aria-expanded", String(open));
    }

    if (desktopTrigger && megaMenu) {
      desktopTrigger.addEventListener("click", function () {
        setMegaMenu(!megaMenu.classList.contains("is-open"));
      });
      document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-dropdown-wrap")) setMegaMenu(false);
      });
      desktopTrigger.closest(".nav-dropdown-wrap").addEventListener("focusout", function () {
        window.setTimeout(function () {
          if (!document.activeElement.closest || !document.activeElement.closest(".nav-dropdown-wrap")) setMegaMenu(false);
        }, 0);
      });
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1120 && mobileMenu && mobileMenu.classList.contains("is-open")) setMobileMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (mobileMenu && mobileMenu.classList.contains("is-open")) {
        setMobileMenu(false);
        menuToggle.focus();
      }
      if (megaMenu && (megaMenu.classList.contains("is-open") || megaMenu.contains(document.activeElement))) {
        setMegaMenu(false);
        desktopTrigger.focus();
      }
    });
  }

  function initializeAccordions() {
    document.querySelectorAll("[data-accordion-trigger]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var panelId = trigger.getAttribute("aria-controls");
        var panel = document.getElementById(panelId);
        if (!panel) return;
        var open = trigger.getAttribute("aria-expanded") === "true";
        var group = trigger.closest("[data-accordion-group]");
        if (group && !open) {
          group.querySelectorAll("[data-accordion-trigger]").forEach(function (other) {
            if (other === trigger) return;
            other.setAttribute("aria-expanded", "false");
            var otherPanel = document.getElementById(other.getAttribute("aria-controls"));
            if (otherPanel) otherPanel.classList.remove("is-open");
          });
        }
        trigger.setAttribute("aria-expanded", String(!open));
        panel.classList.toggle("is-open", !open);
      });
    });
  }

  function initializeReveal() {
    var elements = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;
    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (element) { element.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var delay = Number(entry.target.getAttribute("data-reveal-delay") || 0);
        entry.target.style.transitionDelay = Math.min(delay, 700) + "ms";
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px" });
    elements.forEach(function (element) { observer.observe(element); });
  }

  function initializeCounters() {
    var counters = Array.prototype.slice.call(document.querySelectorAll("[data-counter]"));
    if (!counters.length || !("IntersectionObserver" in window)) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var element = entry.target;
        var end = Number(element.getAttribute("data-counter"));
        var suffix = element.getAttribute("data-counter-suffix") || "";
        var duration = 1600;
        var startTime = performance.now();
        function update(now) {
          var progress = Math.min(1, (now - startTime) / duration);
          var eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = Math.round(end * eased).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(element);
      });
    }, { threshold: 0.45 });
    counters.forEach(function (counter) { observer.observe(counter); });
  }

  function initializeCookieBanner() {
    var banner = document.querySelector("[data-cookie-banner]");
    if (!banner) return;
    var key = siteSettings.cookieStorageKey;
    var preference = null;
    try { preference = window.localStorage.getItem(key); } catch (error) { preference = null; }
    banner.inert = true;

    function showSettings(moveFocus) {
      banner.classList.add("is-visible");
      banner.inert = false;
      document.body.classList.add("cookie-visible");
      if (moveFocus) {
        var firstAction = banner.querySelector("button");
        if (firstAction) window.setTimeout(function () { firstAction.focus(); }, 30);
      }
    }

    if (!preference) {
      window.setTimeout(function () { showSettings(false); }, 650);
    }
    function choose(value) {
      try { window.localStorage.setItem(key, value); } catch (error) { /* storage can be blocked */ }
      banner.classList.remove("is-visible");
      banner.inert = true;
      document.body.classList.remove("cookie-visible");
      window.dispatchEvent(new CustomEvent("site:cookie-preference", { detail: { value: value } }));
    }
    var accept = banner.querySelector("[data-cookie-accept]");
    var decline = banner.querySelector("[data-cookie-decline]");
    if (accept) accept.addEventListener("click", function () { choose("accepted"); });
    if (decline) decline.addEventListener("click", function () { choose("declined"); });
    document.querySelectorAll("[data-cookie-settings]").forEach(function (control) {
      control.addEventListener("click", function (event) {
        event.preventDefault();
        try { window.localStorage.removeItem(key); } catch (error) { /* storage can be blocked */ }
        showSettings(true);
      });
    });
  }

  function initializeForms() {
    var modal = document.querySelector("[data-success-modal]");
    var lastFocusedElement = null;

    function openSuccessModal() {
      if (!modal) return;
      lastFocusedElement = document.activeElement;
      setText("[data-success-title]", siteSettings.formSuccessTitle);
      setText("[data-success-message]", siteSettings.formSuccessMessage);
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      modal.inert = false;
      document.body.classList.add("modal-open");
      var close = modal.querySelector("[data-modal-close]");
      if (close) window.setTimeout(function () { close.focus(); }, 50);
    }

    function closeSuccessModal() {
      if (!modal) return;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      modal.inert = true;
      document.body.classList.remove("modal-open");
      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
    }

    if (modal) {
      modal.inert = true;
      modal.querySelectorAll("[data-modal-close]").forEach(function (button) {
        button.addEventListener("click", closeSuccessModal);
      });
      modal.addEventListener("click", function (event) {
        if (event.target === modal) closeSuccessModal();
      });
      modal.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeSuccessModal();
          return;
        }
        if (event.key !== "Tab") return;
        var focusable = Array.prototype.slice.call(modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(function (element) {
          return !element.disabled && element.offsetParent !== null;
        });
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      });
    }

    document.querySelectorAll("[data-lead-form]").forEach(function (form) {
      var status = form.querySelector("[data-form-status]");
      if (!status) {
        status = document.createElement("p");
        status.className = "form-status";
        status.setAttribute("data-form-status", "");
        status.setAttribute("aria-live", "polite");
        status.tabIndex = -1;
        form.appendChild(status);
      }
      if (siteSettings.formEndpoint) {
        form.setAttribute("action", siteSettings.formEndpoint);
        form.setAttribute("method", "post");
      }

      form.querySelectorAll("[required]").forEach(function (field) {
        var error = form.querySelector('[data-error-for="' + field.name + '"]');
        if (error) {
          if (!error.id) error.id = "error-" + (field.id || field.name);
          field.setAttribute("aria-describedby", error.id);
        }
        ["input", "change"].forEach(function (eventName) {
          field.addEventListener(eventName, function () {
            field.setAttribute("aria-invalid", "false");
            if (error) error.textContent = "";
          });
        });
      });

      function validate() {
        var valid = true;
        form.querySelectorAll("[required]").forEach(function (field) {
          var error = form.querySelector('[data-error-for="' + field.name + '"]');
          var empty = field.type === "checkbox" ? !field.checked : !String(field.value || "").trim();
          var invalidEmail = field.type === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
          var message = empty ? (field.type === "checkbox" ? "Please confirm that you agree before submitting." : "This field is required.") : invalidEmail ? "Enter a valid email address." : "";
          field.setAttribute("aria-invalid", message ? "true" : "false");
          if (error) error.textContent = message;
          if (message) valid = false;
        });
        if (!valid) {
          var first = form.querySelector('[aria-invalid="true"]');
          if (first) first.focus();
        }
        return valid;
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        status.textContent = "";
        status.classList.remove("is-error", "is-success");
        if (!validate()) return;

        var endpoint = siteSettings.formEndpoint || form.getAttribute("action");
        if (!endpoint) {
          status.classList.add("is-error");
          status.textContent = "Online delivery is not configured yet. Please email " + contactEmail + ".";
          return;
        }

        var submit = form.querySelector('[type="submit"]');
        var originalLabel = submit ? submit.textContent : "";
        if (submit) {
          submit.disabled = true;
          submit.textContent = siteSettings.formSending;
        }
        status.textContent = "Sending your request…";

        var data = new FormData(form);
        data.append("_subject", "Bathroom project request — " + companyName);
        data.append("_template", "table");
        data.append("_captcha", "false");

        window.fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        }).then(function (response) {
          return response.json().catch(function () { return {}; }).then(function (payload) {
            if (!response.ok || payload.success === false) throw new Error("Submission rejected");
            return payload;
          });
        }).then(function () {
          form.reset();
          status.classList.add("is-success");
          status.textContent = "Request sent successfully.";
          openSuccessModal();
        }).catch(function () {
          status.classList.add("is-error");
          status.textContent = "We could not send the request right now. Please email " + contactEmail + ".";
          status.focus();
        }).then(function () {
          if (submit) {
            submit.disabled = false;
            submit.textContent = originalLabel;
          }
        });
      });
    });
  }

  function initializeTestimonials() {
    document.querySelectorAll("[data-testimonial-stage]").forEach(function (stage) {
      var quotes = [];
      try { quotes = JSON.parse(stage.getAttribute("data-testimonials") || "[]"); } catch (error) { quotes = []; }
      if (!quotes.length) return;
      var index = 0;
      var quote = stage.querySelector("[data-testimonial-quote]");
      var name = stage.querySelector("[data-testimonial-name]");
      var detail = stage.querySelector("[data-testimonial-detail]");
      function render() {
        quote.textContent = quotes[index].quote;
        name.textContent = quotes[index].name;
        detail.textContent = quotes[index].detail;
      }
      var prev = stage.querySelector("[data-testimonial-prev]");
      var next = stage.querySelector("[data-testimonial-next]");
      if (prev) prev.addEventListener("click", function () { index = (index - 1 + quotes.length) % quotes.length; render(); });
      if (next) next.addEventListener("click", function () { index = (index + 1) % quotes.length; render(); });
      render();
    });
  }

  function initializeServiceSelection() {
    var slug = new URLSearchParams(window.location.search).get("service");
    if (!slug) return;
    document.querySelectorAll("select[data-service-select]").forEach(function (select) {
      if (Array.prototype.some.call(select.options, function (option) { return option.value === slug; })) {
        select.value = slug;
      }
    });
  }

  function initialize() {
    injectHeader();
    injectFooter();
    hydrateConfig();
    initializeIcons();
    initializeHeader();
    initializeAccordions();
    initializeReveal();
    initializeCounters();
    initializeCookieBanner();
    initializeServiceSelection();
    initializeForms();
    initializeTestimonials();
    window.dispatchEvent(new CustomEvent("site:ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
