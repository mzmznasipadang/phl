/* ============================================================
   Pahala Harapan Lestari — site.js
   One script for every page and language. Each feature is guarded
   by an element check, so a page only runs the behavior it needs.
   Loaded with `defer`, so the DOM is ready when this runs.
   ============================================================ */
(function () {
  "use strict";

  const lang = document.documentElement.lang || "en";

  /* ---------- Mobile menu toggle ----------
     The toggle is a real <button> (aria-controls, localized label in the HTML),
     so keyboard and screen-reader support come for free. */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".text");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      const isOpen = hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* ---------- Mark the current page in the navbar and footer ---------- */
  const here = window.location.pathname.split("/").pop() || "home.html";
  // Direct children only: the language links point at this same file name
  document.querySelectorAll(".text > a, .directory a").forEach(function (a) {
    const target = new URL(a.getAttribute("href") || "", window.location.href).pathname.split("/").pop() || "home.html";
    if (target === here) a.setAttribute("aria-current", "page");
  });

  /* ---------- Hide navbar on scroll-down, reveal on scroll-up ---------- */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      const y = window.scrollY;
      const menuOpen = hamburger && hamburger.classList.contains("active");
      // Stay visible near the top and while the mobile menu is open
      navbar.classList.toggle("is-hidden", y > lastScrollTop && y > 120 && !menuOpen);
      lastScrollTop = y;
    }, { passive: true });
  }

  /* The hero overlay fade and section reveals are scroll-linked CSS
     (base.css); the customer marquee is a CSS animation (home.css). */

  /* ---------- GSAP layer (motion.js) ----------
     About 46 KB compressed, so it loads only where CSS cannot do the job:
     browsers without scroll-driven animations, and the pinned vessel
     showcase on desktop. Never with reduced motion. */
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  const needsFallback = !CSS.supports("animation-timeline: view()");
  // shortcut: width is read once at load, so a narrow window widened later keeps the static showcase
  const wantsPin = document.querySelector(".showcase-title > img") && window.matchMedia("(min-width: 981px)").matches;
  if (motionOK && (needsFallback || wantsPin)) {
    ["vendor/gsap.min.js", "vendor/ScrollTrigger.min.js", "motion.js"].forEach(function (file) {
      const script = document.createElement("script");
      script.src = "/assets/js/" + file;
      script.async = false; // run in order: GSAP, its plugin, then motion.js
      document.head.appendChild(script);
    });
  }

  /* ---------- Pause the customer logo loop while it is offscreen ---------- */
  const marquee = document.querySelector(".marquee-images");
  if (marquee && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      // "" hands control back to the CSS (including its hover/focus pause)
      marquee.style.animationPlayState = entries[0].isIntersecting ? "" : "paused";
    }).observe(marquee.parentNode);
  }

  /* ---------- Contact form ----------
     Field rules live in the HTML (required, type=email, minlength, pattern),
     so the browser checks them in the visitor's own language before this runs. */
  const form = document.forms["contact-form"];
  if (form) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwzBqY92EJH0AScvMwS4e4rw-UsX516iSinpnv_vP7hVu3gA3jMl_z8aMGdRLChzRRJ/exec";
    const messages = {
      en: {
        sending: "Sending…",
        sent: "Thank you. Your message has been sent and our team will reply soon.",
        failed: "Sorry, your message could not be sent. Please try again, or email us at office@pahalashipyard.com."
      },
      id: {
        sending: "Mengirim…",
        sent: "Terima kasih. Pesan Anda telah terkirim dan tim kami akan segera membalas.",
        failed: "Maaf, pesan Anda gagal terkirim. Silakan coba lagi, atau kirim email ke office@pahalashipyard.com."
      },
      zh: {
        sending: "发送中…",
        sent: "谢谢！您的留言已发送，我们的团队会尽快回复。",
        failed: "抱歉，留言发送失败。请重试，或发送邮件至 office@pahalashipyard.com。"
      }
    };
    const t = messages[lang] || messages.en;
    const submitButton = form.querySelector('button[type="submit"]');
    const status = document.createElement("p");
    status.className = "form-status";
    status.setAttribute("role", "status");
    (submitButton ? submitButton.parentNode : form).appendChild(status);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const label = submitButton ? submitButton.textContent : "";
      if (submitButton) { submitButton.disabled = true; submitButton.textContent = t.sending; }
      status.textContent = "";

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(function (res) {
          // fetch only rejects on network failure; a 4xx/5xx must not read as success
          if (!res.ok) throw new Error("HTTP " + res.status);
          form.reset();
          status.dataset.state = "sent";
          status.textContent = t.sent;
        })
        .catch(function (error) {
          console.error("Contact form failed:", error.message);
          status.dataset.state = "error";
          status.textContent = t.failed; // the typed message stays in the form for a retry
        })
        .finally(function () {
          if (submitButton) { submitButton.disabled = false; submitButton.textContent = label; }
        });
    });
  }

  /* The language switch is plain links in each page's navbar (no script). */

  /* ---------- Keep the footer copyright year current ----------
     Replace only the year so each language keeps its own translated text. */
  const copyrightElement = document.querySelector("footer .copyright");
  if (copyrightElement) {
    copyrightElement.textContent = copyrightElement.textContent.replace(/\b20\d{2}\b/, new Date().getFullYear());
  }
})();
