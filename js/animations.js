(function () {
  "use strict";

  var initialized = false;
  var reducedMotion = false;
  var mm = null;
  var matchingObserver = null;
  var viewportFallbackObservers = [];
  var gsap = null;
  var ScrollTrigger = null;

  var MOTION = {
    fast: 0.28,
    base: 0.58,
    slow: 0.86,
    cinematic: 1.15,
    ease: "power3.out",
    easeSoft: "power2.out",
    easeMaterial: "expo.out"
  };

  function all(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function canAnimate() {
    return Boolean(window.gsap && window.ScrollTrigger);
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function own(root, selector) {
    var elements = all(selector, root);
    elements.forEach(function (element) {
      element.setAttribute("data-motion-owned", "");
    });
    return elements;
  }

  function clearMotionProperties() {
    return "transform,opacity,visibility,clipPath,willChange";
  }

  function addViewportFallback(trigger, animation) {
    if (!trigger || !animation || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        window.requestAnimationFrame(function () {
          if (!document.documentElement.classList.contains("has-gsap")) return;
          if (animation.progress() <= 0.001 && !animation.isActive()) animation.play(0);
        });

        observer.disconnect();
      });
    }, { threshold: 0.01, rootMargin: "0px 0px 12% 0px" });

    observer.observe(trigger);
    viewportFallbackObservers.push(observer);
  }

  function timelineFor(section, start) {
    var timeline = gsap.timeline({
      defaults: { ease: MOTION.ease },
      scrollTrigger: {
        trigger: section,
        start: start || "top 90%",
        once: true
      }
    });
    addViewportFallback(section, timeline);
    return timeline;
  }

  function waitForFonts(callback) {
    var timeout = new Promise(function (resolve) {
      window.setTimeout(resolve, 1200);
    });
    var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([fonts, timeout]).then(callback, callback);
  }

  function showAllAnimatedContent() {
    all("[data-reveal], [data-motion]").forEach(function (element) {
      element.classList.add("is-visible");
    });

    if (gsap) {
      gsap.set("[data-reveal], [data-motion]", { clearProps: "all" });
      gsap.set(".matching-process__route path", {
        strokeDasharray: "none",
        strokeDashoffset: 0
      });
      gsap.set(".project-questions__timeline-line", { clearProps: "all" });
    }
  }

  function initializeHeaderMotion() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var timeline = gsap.timeline({ defaults: { ease: MOTION.ease }, delay: 0.04 });
    timeline
      .from(header, { autoAlpha: 0, y: -18, duration: 0.46, clearProps: clearMotionProperties() })
      .from(header.querySelector(".brand"), { autoAlpha: 0, x: -16, duration: 0.38, clearProps: clearMotionProperties() }, 0.12)
      .from(all(".desktop-nav > *", header), { autoAlpha: 0, y: -10, duration: 0.34, stagger: 0.06, clearProps: clearMotionProperties() }, 0.18)
      .from(all(".header-actions > *", header), { autoAlpha: 0, x: 16, duration: 0.36, stagger: 0.06, clearProps: clearMotionProperties() }, 0.2);

    var menuToggle = header.querySelector(".menu-toggle");
    var mobileMenu = document.querySelector(".mobile-menu");
    if (menuToggle && mobileMenu && !menuToggle.hasAttribute("data-motion-menu-bound")) {
      menuToggle.setAttribute("data-motion-menu-bound", "");
      menuToggle.addEventListener("click", function () {
        if (!mobileMenu.classList.contains("is-open")) return;
        gsap.from(all(".mobile-menu__link, .mobile-services-toggle, .mobile-menu__contact", mobileMenu), {
          autoAlpha: 0,
          y: 18,
          duration: 0.38,
          stagger: 0.055,
          ease: MOTION.ease,
          clearProps: clearMotionProperties()
        });
      });
    }

    var servicesToggle = document.querySelector(".mobile-services-toggle");
    var servicesPanel = document.querySelector(".mobile-services-panel");
    if (servicesToggle && servicesPanel && !servicesToggle.hasAttribute("data-motion-services-bound")) {
      servicesToggle.setAttribute("data-motion-services-bound", "");
      servicesToggle.addEventListener("click", function () {
        if (!servicesPanel.classList.contains("is-open")) return;
        gsap.from(all("a", servicesPanel), {
          autoAlpha: 0,
          y: 12,
          duration: 0.3,
          stagger: 0.045,
          ease: MOTION.ease,
          clearProps: clearMotionProperties()
        });
      });
    }
  }

  function initializeHeroMotion() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    own(hero, "[data-reveal]");

    waitForFonts(function () {
      if (!document.documentElement.classList.contains("has-gsap") || reducedMotion) return;
      var timeline = gsap.timeline({ defaults: { ease: MOTION.ease } });
      timeline
        .from(hero.querySelector(".hero__media img"), { scale: 1.075, duration: 1.8, ease: MOTION.easeSoft, clearProps: "transform" })
        .from(hero.querySelector("h1"), { autoAlpha: 0, y: 42, clipPath: "inset(0 0 100% 0)", duration: MOTION.cinematic, clearProps: clearMotionProperties() }, 0.12)
        .from(hero.querySelector("h1 .muted-word"), { opacity: 0.15, y: 22, duration: 0.9, clearProps: "transform,opacity" }, 0.42)
        .from(hero.querySelector(".hero__lede"), { autoAlpha: 0, y: 26, duration: MOTION.base, clearProps: clearMotionProperties() }, 0.58)
        .from(all(".hero__actions > *", hero), { autoAlpha: 0, y: 18, duration: 0.56, stagger: 0.08, clearProps: clearMotionProperties() }, 0.72)
        .from(hero.querySelector(".hero__rail"), { autoAlpha: 0, x: 38, clipPath: "inset(0 0 0 100%)", duration: MOTION.slow, clearProps: clearMotionProperties() }, 0.72);
    });
  }

  function initializeHeroScrollMotion(conditions) {
    if (!conditions.desktop) return;
    var hero = document.querySelector(".hero");
    if (!hero) return;

    gsap.to(hero.querySelector(".hero__media img"), {
      yPercent: 9,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 }
    });
    gsap.to(hero.querySelector(".hero__content"), {
      y: -34,
      opacity: 0.74,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 }
    });
    gsap.to(hero.querySelector(".hero__rail"), {
      y: -18,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 }
    });
  }

  function initializeWhyRoomwellMotion() {
    var section = document.querySelector(".why-roomwell");
    if (!section) return;
    own(section, "[data-reveal]");

    var intro = section.querySelector(".why-roomwell__intro");
    var timeline = timelineFor(section, "top 87%");
    timeline
      .from(intro, { autoAlpha: 0, y: 40, duration: MOTION.slow, clearProps: clearMotionProperties() })
      .from(section.querySelector(".why-roomwell__architecture img"), { autoAlpha: 0, scale: 1.03, duration: MOTION.slow, clearProps: clearMotionProperties() }, 0.16)
      .from(section.querySelector(".why-roomwell__intro h2"), { autoAlpha: 0, y: 26, clipPath: "inset(0 0 100% 0)", duration: 0.86, clearProps: clearMotionProperties() }, 0.24)
      .from(section.querySelector(".why-roomwell__accent-line"), { scaleX: 0, transformOrigin: "left center", duration: 0.58, clearProps: "transform" }, 0.52)
      .from(section.querySelector(".why-roomwell__description"), { autoAlpha: 0, y: 18, duration: 0.64, clearProps: clearMotionProperties() }, 0.58)
      .from(all(".why-roomwell__step", section), { autoAlpha: 0, y: 28, duration: MOTION.base, stagger: 0.1, clearProps: clearMotionProperties() }, 0.36)
      .from(all(".why-roomwell__step-icon", section), { autoAlpha: 0, scale: 0.92, duration: 0.38, stagger: 0.1, clearProps: clearMotionProperties() }, 0.44);
  }

  function initializeServicesShowcaseMotion(conditions) {
    var section = document.querySelector(".services-showcase-section");
    if (!section) return;
    own(section, "[data-reveal]");

    var complete = section.querySelector(".service-panel--complete");
    var shower = section.querySelector(".service-panel--shower");
    var cta = section.querySelector(".services-showcase__cta");
    var timeline = timelineFor(section, "top 87%");
    timeline
      .from(section.querySelector(".services-showcase__header"), { autoAlpha: 0, y: 28, duration: 0.78, clearProps: clearMotionProperties() })
      .from(complete, { autoAlpha: 0, clipPath: conditions.mobile ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)", duration: 0.82, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() }, 0.12)
      .from(complete.querySelector(".service-panel__media img"), { autoAlpha: 0, x: conditions.mobile ? 0 : 24, scale: 1.025, duration: 0.82, clearProps: clearMotionProperties() }, 0.26)
      .from(all(".service-panel__copy > *, .service-panel__tags > *", complete), { autoAlpha: 0, y: 18, duration: 0.42, stagger: 0.04, clearProps: clearMotionProperties() }, 0.3)
      .from(shower, { autoAlpha: 0, clipPath: "inset(100% 0 0 0)", duration: 0.82, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() }, 0.22)
      .from(shower.querySelector(".service-panel__media img"), { scale: 1.06, duration: 0.95, ease: MOTION.easeSoft, clearProps: "transform" }, 0.36)
      .from(all(".service-panel__copy > *, .service-panel__tags > *", shower), { autoAlpha: 0, y: 18, duration: 0.42, stagger: 0.04, clearProps: clearMotionProperties() }, 0.4)
      .from(cta, { autoAlpha: 0, y: 32, duration: 0.58, clearProps: clearMotionProperties() }, 0.52);

    if (conditions.desktop) {
      gsap.to(complete.querySelector(".service-panel__media"), {
        x: -16,
        ease: "none",
        scrollTrigger: { trigger: complete, start: "top bottom", end: "bottom top", scrub: 1 }
      });
      gsap.fromTo(shower.querySelector(".service-panel__media img"), { yPercent: -2 }, {
        yPercent: 3,
        ease: "none",
        scrollTrigger: { trigger: shower, start: "top bottom", end: "bottom top", scrub: 1 }
      });
    }
  }

  function initializeFeatureStoryMotion(conditions) {
    var section = document.querySelector(".feature-story");
    if (!section) return;
    own(section, "[data-reveal]");

    var copy = section.querySelector(".feature-story__copy");
    var media = section.querySelector(".feature-story__media");
    var timeline = timelineFor(section);
    timeline
      .from(all(":scope > *", copy), { autoAlpha: 0, x: conditions.mobile ? 0 : -32, y: conditions.mobile ? 24 : 0, duration: MOTION.base, stagger: 0.06, clearProps: clearMotionProperties() })
      .from(media, { autoAlpha: 0, clipPath: conditions.mobile ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)", duration: MOTION.slow, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() }, 0.12)
      .from(media.querySelector("img"), { scale: 1.055, duration: MOTION.slow, clearProps: "transform" }, 0.24);
  }

  function initializeWhyLayoutMotion(conditions) {
    var section = document.querySelector(".home-page .why-layout");
    if (!section) return;
    own(section, "[data-reveal]");

    var image = section.querySelector(".why-image");
    var content = section.querySelector(".why-content");
    var timeline = timelineFor(section);
    timeline
      .from(image, { autoAlpha: 0, clipPath: conditions.mobile ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)", duration: MOTION.slow, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() })
      .from(image.querySelector("img"), { scale: 1.045, duration: MOTION.slow, clearProps: "transform" }, 0.12)
      .from(all(":scope > *", content), { autoAlpha: 0, x: conditions.mobile ? 0 : 32, y: conditions.mobile ? 22 : 0, duration: MOTION.base, stagger: 0.06, clearProps: clearMotionProperties() }, 0.14)
      .from(all(".accordion-item", content), { autoAlpha: 0, y: 16, duration: 0.42, stagger: 0.05, clearProps: clearMotionProperties() }, 0.26);
  }

  function initializeMatchingProcessMotion(conditions) {
    var section = document.querySelector(".matching-process");
    if (!section) return;

    var routeSelector = conditions.desktop ? ".matching-process__route--desktop path" : ".matching-process__route--tablet path";
    var path = conditions.mobile ? null : section.querySelector(routeSelector);
    var steps = all(".matching-step", section);
    var timeline = timelineFor(section, "top 85%");

    timeline
      .from(all(".matching-process__blueprint img", section), { autoAlpha: 0, duration: MOTION.slow, stagger: 0.1, clearProps: "opacity,visibility" })
      .from(section.querySelector(".matching-process__title"), { autoAlpha: 0, y: 32, clipPath: "inset(0 0 100% 0)", duration: 0.94, clearProps: clearMotionProperties() }, 0.08)
      .from(section.querySelector(".matching-process__title em"), { autoAlpha: 0, y: 18, duration: 0.7, clearProps: clearMotionProperties() }, 0.32);

    if (path) {
      var length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      timeline.to(path, { strokeDashoffset: 0, duration: 0.86, ease: MOTION.easeSoft }, 0.2);
    }

    steps.forEach(function (step, index) {
      var position = 0.3 + (index * 0.135);
      timeline
        .from(step.querySelector(".matching-step__node"), { autoAlpha: 0, scale: 0.7, duration: 0.38, clearProps: clearMotionProperties() }, position)
        .from(step.querySelector(".matching-step__card"), { autoAlpha: 0, y: conditions.mobile ? 22 : 30, duration: 0.56, clearProps: clearMotionProperties() }, position + 0.04)
        .from(step.querySelector(".matching-step__icon"), { autoAlpha: 0, scale: 0.9, duration: 0.32, clearProps: clearMotionProperties() }, position + 0.1)
        .from(all("h3, .matching-step__divider, .matching-step__text, .matching-step__closing-line, .matching-step__status", step), { autoAlpha: 0, y: 12, duration: 0.3, stagger: 0.032, clearProps: clearMotionProperties() }, position + 0.12);
    });

    if (window.ResizeObserver && !matchingObserver) {
      var refreshQueued = false;
      matchingObserver = new ResizeObserver(function () {
        if (refreshQueued) return;
        refreshQueued = true;
        window.requestAnimationFrame(function () {
          refreshQueued = false;
          ScrollTrigger.refresh();
        });
      });
      matchingObserver.observe(section);
    }
  }

  function initializeTestimonialsMotion() {
    var stage = document.querySelector("[data-testimonial-stage]");
    if (!stage) return;
    own(stage, "[data-reveal]");

    var copy = stage.querySelector(".testimonial-stage__copy");
    var media = stage.querySelector(".testimonial-stage__media");
    var timeline = timelineFor(stage);
    timeline
      .from(stage.querySelector(".quote-mark"), { autoAlpha: 0, scale: 0.88, duration: 0.5, clearProps: clearMotionProperties() })
      .from(stage.querySelector("[data-testimonial-quote]"), { autoAlpha: 0, y: 24, duration: MOTION.base, clearProps: clearMotionProperties() }, 0.08)
      .from(all("[data-testimonial-name], [data-testimonial-detail]", copy), { autoAlpha: 0, y: 12, duration: 0.46, stagger: 0.07, clearProps: clearMotionProperties() }, 0.24)
      .from(media, { autoAlpha: 0, clipPath: "inset(0 100% 0 0)", duration: MOTION.slow, clearProps: clearMotionProperties() }, 0.08)
      .from(media.querySelector("img"), { scale: 1.05, duration: MOTION.slow, clearProps: "transform" }, 0.18);
  }

  function transitionTestimonial(stage, commit) {
    if (typeof commit !== "function") return;
    if (!gsap || reducedMotion) {
      commit();
      return;
    }
    if (stage.getAttribute("data-motion-busy") === "true") return;
    stage.setAttribute("data-motion-busy", "true");

    var targets = all("[data-testimonial-quote], [data-testimonial-name], [data-testimonial-detail]", stage);
    var image = stage.querySelector(".testimonial-stage__media img");
    var buttons = all("[data-testimonial-prev], [data-testimonial-next]", stage);
    buttons.forEach(function (button) { button.disabled = true; });

    gsap.timeline({
      defaults: { ease: MOTION.easeSoft },
      onComplete: function () {
        gsap.set(targets.concat(image ? [image] : []), { clearProps: clearMotionProperties() });
        buttons.forEach(function (button) { button.disabled = false; });
        stage.removeAttribute("data-motion-busy");
      }
    })
      .to(targets, { autoAlpha: 0, y: -12, duration: 0.18, stagger: 0.025 })
      .to(image, { opacity: 0.9, y: -2, duration: 0.18 }, 0)
      .add(commit)
      .fromTo(targets, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.035 })
      .to(image, { opacity: 1, y: 0, duration: 0.24 }, "<");
  }

  function initializeAggregatorMotion() {
    var section = document.querySelector(".aggregator-note");
    if (!section) return;
    own(section, "[data-reveal]");
    timelineFor(section)
      .from(section, { autoAlpha: 0, y: 24, duration: MOTION.base, clearProps: clearMotionProperties() })
      .from(all(":scope > *", section), { autoAlpha: 0, y: 14, duration: 0.48, stagger: 0.08, clearProps: clearMotionProperties() }, 0.14);
  }

  function initializeFaqMotion() {
    var section = document.querySelector(".faq-section");
    if (!section) return;
    var timeline = timelineFor(section);
    timeline
      .from(section.querySelector(".faq-section__heading h2"), { autoAlpha: 0, y: 26, clipPath: "inset(0 0 100% 0)", duration: 0.82, clearProps: clearMotionProperties() })
      .from(section.querySelector(".faq-section__heading p"), { autoAlpha: 0, y: 16, duration: 0.56, clearProps: clearMotionProperties() }, 0.2)
      .from(all(".faq-item", section), { autoAlpha: 0, y: 20, duration: 0.46, stagger: 0.055, clearProps: clearMotionProperties() }, 0.2);
  }

  function initializeContactMotion(conditions) {
    var section = document.getElementById("contact");
    if (!section) return;
    own(section, "[data-reveal]");

    var panel = section.querySelector(".contact-panel");
    var formWrap = section.querySelector(".lead-form-wrap");
    var timeline = timelineFor(section);
    timeline
      .from(panel, { autoAlpha: 0, x: conditions.mobile ? 0 : -34, y: conditions.mobile ? 24 : 0, duration: 0.78, clearProps: clearMotionProperties() })
      .from(all(".contact-method", panel), { autoAlpha: 0, y: 14, duration: 0.44, stagger: 0.07, clearProps: clearMotionProperties() }, 0.2)
      .from(formWrap, { autoAlpha: 0, x: conditions.mobile ? 0 : 34, y: conditions.mobile ? 24 : 0, duration: 0.78, clearProps: clearMotionProperties() }, 0.1)
      .from(all(".lead-form .field, .lead-form .form-actions", formWrap), { autoAlpha: 0, y: 12, duration: 0.36, stagger: 0.04, clearProps: clearMotionProperties() }, 0.22);
  }

  function initializeFooterMotion() {
    var footer = document.querySelector(".site-footer");
    if (!footer) return;
    var columns = all(".footer-brand, .footer-col", footer);
    var tween = gsap.from(columns, {
      autoAlpha: 0,
      y: 18,
      duration: 0.56,
      stagger: 0.07,
      ease: MOTION.ease,
      clearProps: clearMotionProperties(),
      scrollTrigger: { trigger: footer, start: "top 97%", once: true }
    });
    addViewportFallback(footer, tween);
  }

  function initializeGenericReveals() {
    all("[data-reveal]:not([data-motion-owned])").forEach(function (element) {
      var direction = element.getAttribute("data-reveal");
      var delay = Math.min(Number(element.getAttribute("data-reveal-delay") || 0), 700) / 1000;
      var vars = {
        autoAlpha: 0,
        y: direction === "left" || direction === "right" ? 0 : 30,
        x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
        duration: MOTION.base,
        delay: delay,
        ease: MOTION.ease,
        clearProps: clearMotionProperties(),
        scrollTrigger: { trigger: element, start: "top 93%", once: true }
      };
      var tween = gsap.from(element, vars);
      addViewportFallback(element, tween);
    });
  }

  function initializeProjectQuestionsMotion(conditions) {
    var section = document.querySelector(".project-questions");
    if (!section) return;
    own(section, "[data-reveal]");

    var eyebrow = section.querySelector(".project-questions__eyebrow");
    var heading = section.querySelector(".project-questions__header h2");
    var emphasis = section.querySelector(".project-questions__header h2 em");
    var intro = section.querySelector(".project-questions__intro");
    var timelineLine = section.querySelector(".project-questions__timeline-line");
    var rows = all(".question-row", section);
    var rowDetails = all(".question-row__icon, .question-row__content", section);
    var scope = section.querySelector(".question-scope");
    var scopeContent = all(".question-scope__icon, .question-scope__content h3, .question-scope__content > p", section);
    var checklistRows = all(".question-scope__checklist li", section);

    gsap.set(timelineLine, { transformOrigin: "top center" });

    var timeline = timelineFor(section, "top 88%");
    timeline
      .from(eyebrow, { autoAlpha: 0, x: -20, duration: 0.46, clearProps: clearMotionProperties() }, 0.04)
      .from(heading, { autoAlpha: 0, y: 24, clipPath: "inset(0 0 100% 0)", duration: 0.74, clearProps: clearMotionProperties() }, 0.1)
      .from(emphasis, { autoAlpha: 0, y: 10, duration: 0.4, clearProps: clearMotionProperties() }, 0.38)
      .from(intro, { autoAlpha: 0, y: 16, duration: 0.46, clearProps: clearMotionProperties() }, 0.3)
      .from(timelineLine, { scaleY: 0, duration: 0.88, ease: "power2.inOut", clearProps: "transform" }, 0.16)
      .from(rows, { autoAlpha: 0, y: conditions.mobile ? 16 : 22, duration: 0.5, stagger: 0.08, clearProps: clearMotionProperties() }, 0.18)
      .from(rowDetails, { autoAlpha: 0, x: conditions.mobile ? 8 : 14, duration: 0.38, stagger: 0.025, clearProps: clearMotionProperties() }, 0.3)
      .from(scope, { autoAlpha: 0, y: conditions.mobile ? 18 : 24, clipPath: "inset(100% 0 0 0)", duration: 0.64, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() }, 0.5)
      .from(scopeContent, { autoAlpha: 0, y: 11, duration: 0.38, stagger: 0.045, clearProps: clearMotionProperties() }, 0.7)
      .from(checklistRows, { autoAlpha: 0, y: 7, duration: 0.3, stagger: 0.035, clearProps: clearMotionProperties() }, 0.84);
  }

  function initializeProjectAnatomyMotion(conditions) {
    var section = document.querySelector(".project-anatomy");
    if (!section) return;
    own(section, "[data-reveal]");

    var eyebrow = section.querySelector(".project-anatomy__eyebrow");
    var heading = section.querySelector(".project-anatomy__header h2");
    var description = section.querySelector(".project-anatomy__description");
    var image = section.querySelector(".project-anatomy__visual > img");
    var hotspots = all(".anatomy-hotspot", section);
    var labels = all(".anatomy-hotspot__label", section);
    var panel = section.querySelector(".project-anatomy__panel");
    var timeline = timelineFor(section, "top 90%");
    timeline
      .from(eyebrow, { autoAlpha: 0, x: -16, duration: 0.38, clearProps: clearMotionProperties() }, 0.02)
      .from(heading, { autoAlpha: 0, y: 24, clipPath: "inset(0 0 100% 0)", duration: 0.72, clearProps: clearMotionProperties() }, 0.08)
      .from(description, { autoAlpha: 0, y: 16, duration: 0.44, clearProps: clearMotionProperties() }, 0.2)
      .from(image, { autoAlpha: 0, scale: conditions.mobile ? 1 : 1.025, duration: 0.82, ease: MOTION.easeSoft, clearProps: clearMotionProperties() }, 0.18)
      .from(hotspots, { autoAlpha: 0, scale: 0.88, duration: 0.36, stagger: 0.06, clearProps: clearMotionProperties() }, 0.42)
      .from(panel, { autoAlpha: 0, x: conditions.mobile ? 0 : 24, y: conditions.mobile ? 18 : 0, duration: 0.62, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() }, 0.4);

    if (conditions.desktop) {
      timeline.from(labels, { autoAlpha: 0, x: 8, duration: 0.32, stagger: 0.045, clearProps: clearMotionProperties() }, 0.58);
    }
  }

  function initializeProjectShapingMotion(conditions) {
    var section = document.querySelector(".project-shaping");
    if (!section) return;

    var eyebrow = section.querySelector(".project-shaping__eyebrow");
    var heading = section.querySelector(".project-shaping__title");
    var intro = section.querySelector(".project-shaping__intro");
    var board = section.querySelector(".comparison-board");
    var image = section.querySelector(".project-plan__image");
    var activeLayer = section.querySelector(".project-plan__layer.is-active");
    var timeline = timelineFor(section, "top 92%");

    timeline
      .from(eyebrow, { autoAlpha: 0, y: 9, duration: 0.32, clearProps: clearMotionProperties() }, 0.02)
      .from(heading, { autoAlpha: 0, y: 22, clipPath: "inset(0 0 100% 0)", duration: 0.66, clearProps: clearMotionProperties() }, 0.06)
      .from(intro, { autoAlpha: 0, y: 12, duration: 0.38, clearProps: clearMotionProperties() }, 0.22)
      .from(board, { autoAlpha: 0, y: conditions.mobile ? 16 : 24, duration: 0.62, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() }, 0.18)
      .from(image, { autoAlpha: 0, scale: conditions.mobile ? 1 : 1.018, duration: 0.68, ease: MOTION.easeSoft, clearProps: clearMotionProperties() }, 0.3)
      .from(activeLayer, { autoAlpha: 0, duration: 0.3, clearProps: clearMotionProperties() }, 0.66);
  }

  function initializeServicePageMotion(conditions) {
    var hero = document.querySelector(".page-hero");
    if (!hero) return;
    own(hero, "[data-reveal]");

    var heroTimeline = gsap.timeline({ defaults: { ease: MOTION.ease } });
    heroTimeline
      .from(hero.querySelector(".page-hero__media img"), { scale: 1.07, duration: 1.65, ease: MOTION.easeSoft, clearProps: "transform" })
      .from(all(".breadcrumb, .eyebrow", hero), { autoAlpha: 0, x: -16, duration: 0.46, stagger: 0.06, clearProps: clearMotionProperties() }, 0.1)
      .from(hero.querySelector("h1"), { autoAlpha: 0, y: 34, clipPath: "inset(0 0 100% 0)", duration: 1, clearProps: clearMotionProperties() }, 0.2)
      .from(hero.querySelector(".page-hero__summary"), { autoAlpha: 0, y: 20, duration: 0.62, clearProps: clearMotionProperties() }, 0.48);

    all("main > .section, main > .cta-band").forEach(function (section, sectionIndex) {
      own(section, "[data-reveal]");
      var targets = all("[data-reveal], .section-heading, .service-path, .detail-card, .fit-layout > *, .stat, .service-process__item, .why-layout > *, .related-card, .cta-band__inner > *", section);
      var images = all(".service-image-wide, .service-path__image", section);
      if (!targets.length && !images.length) return;

      var timeline = timelineFor(section, "top 93%");
      images.forEach(function (wrapper, imageIndex) {
        timeline
          .from(wrapper, { autoAlpha: 0, clipPath: conditions.mobile ? "inset(100% 0 0 0)" : (sectionIndex + imageIndex) % 2 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", duration: 0.92, ease: MOTION.easeMaterial, clearProps: clearMotionProperties() }, imageIndex * 0.08)
          .from(wrapper.querySelector("img"), { scale: 1.045, duration: MOTION.slow, clearProps: "transform" }, imageIndex * 0.08 + 0.08);
      });
      timeline.from(targets, {
        autoAlpha: 0,
        y: conditions.mobile ? 20 : 28,
        x: 0,
        duration: 0.62,
        stagger: 0.045,
        clearProps: clearMotionProperties()
      }, images.length ? 0.14 : 0);
    });
  }

  function initializeLegalPageMotion() {
    var hero = document.querySelector(".page-hero--compact");
    if (!hero) return;
    own(hero, "[data-reveal]");

    gsap.timeline({ defaults: { ease: MOTION.ease } })
      .from(all(".breadcrumb, .eyebrow", hero), { autoAlpha: 0, x: -12, duration: 0.38, stagger: 0.05, clearProps: clearMotionProperties() })
      .from(hero.querySelector("h1"), { autoAlpha: 0, y: 22, duration: 0.62, clearProps: clearMotionProperties() }, 0.12);

    var toc = document.querySelector(".legal-toc");
    if (toc) {
      var tween = gsap.from(toc, {
        autoAlpha: 0,
        y: 18,
        duration: 0.58,
        ease: MOTION.ease,
        clearProps: clearMotionProperties(),
        scrollTrigger: { trigger: toc, start: "top 90%", once: true }
      });
      addViewportFallback(toc, tween);
    }
  }

  function refreshAfterAssets() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
    window.addEventListener("load", function () { ScrollTrigger.refresh(); }, { once: true });

    all(".matching-process img, .project-anatomy img, .project-shaping img").forEach(function (image) {
      if (typeof image.decode !== "function") return;
      image.decode().then(function () { ScrollTrigger.refresh(); }).catch(function () {});
    });
  }

  function destroyAnimations(resetInitialization) {
    viewportFallbackObservers.forEach(function (observer) { observer.disconnect(); });
    viewportFallbackObservers = [];
    if (matchingObserver) {
      matchingObserver.disconnect();
      matchingObserver = null;
    }
    if (mm) {
      mm.revert();
      mm = null;
    }
    if (ScrollTrigger) {
      ScrollTrigger.getAll().forEach(function (trigger) { trigger.kill(); });
    }
    if (resetInitialization) initialized = false;
  }

  function initializeAnimationSystem() {
    if (initialized || !canAnimate()) return;
    initialized = true;
    gsap = window.gsap;
    ScrollTrigger = window.ScrollTrigger;

    try {
      gsap.registerPlugin(ScrollTrigger);
      document.documentElement.classList.add("has-gsap");
      reducedMotion = prefersReducedMotion();
      window.RoomwellMotion = { transitionTestimonial: transitionTestimonial };

      if (reducedMotion) {
        showAllAnimatedContent();
        return;
      }

      initializeHeaderMotion();
      initializeHeroMotion();
      initializeTestimonialsMotion();

      var page = window.location.pathname.split("/").pop() || "index.html";
      var isHome = document.body.classList.contains("home-page") || page === "index.html";
      var isServicePage = page === "complete-bathroom-remodel.html" || page === "shower-bathtub-remodeling.html";

      mm = gsap.matchMedia();
      mm.add({
        desktop: "(min-width: 1100px)",
        tablet: "(min-width: 768px) and (max-width: 1099px)",
        mobile: "(max-width: 767px)"
      }, function (context) {
        var conditions = context.conditions;
        if (isHome) {
          initializeHeroScrollMotion(conditions);
          initializeWhyRoomwellMotion();
          initializeServicesShowcaseMotion(conditions);
          initializeFeatureStoryMotion(conditions);
          initializeWhyLayoutMotion(conditions);
          initializeMatchingProcessMotion(conditions);
          initializeAggregatorMotion();
          initializeFaqMotion();
          initializeContactMotion(conditions);
        } else if (isServicePage) {
          initializeProjectQuestionsMotion(conditions);
          initializeProjectAnatomyMotion(conditions);
          initializeProjectShapingMotion(conditions);
          initializeServicePageMotion(conditions);
        } else {
          initializeLegalPageMotion();
        }
        initializeFooterMotion();
        initializeGenericReveals();
      });

      refreshAfterAssets();
    } catch (error) {
      console.warn("Animation system skipped", error);
      destroyAnimations(false);
      showAllAnimatedContent();
      document.documentElement.classList.remove("has-gsap");
    }
  }

  window.addEventListener("site:ready", initializeAnimationSystem, { once: true });

  if (document.readyState !== "loading") {
    window.setTimeout(initializeAnimationSystem, 0);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      window.setTimeout(initializeAnimationSystem, 0);
    }, { once: true });
  }

  window.addEventListener("pagehide", function () { destroyAnimations(true); });
  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) return;
    window.setTimeout(initializeAnimationSystem, 0);
  });
})();
