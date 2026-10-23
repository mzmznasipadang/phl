/* ============================================================
   Pahala Harapan Lestari — site.js
   One script for every page and language. Each feature is guarded
   by an element check, so a page only runs the behavior it needs.
   Loaded with `defer`, so the DOM is ready when this runs.
   ============================================================ */
(function () {
  "use strict";

  const lang = document.documentElement.lang || "en";
  const ui = {
    en: { menu: "Toggle navigation menu", photo: function (label, n) { return label + " by PT. Pahala Harapan Lestari (" + n + " of 4)"; } },
    id: { menu: "Buka atau tutup menu navigasi", photo: function (label, n) { return label + " oleh PT. Pahala Harapan Lestari (" + n + " dari 4)"; } },
    zh: { menu: "打开或关闭导航菜单", photo: function (label, n) { return "PT. Pahala Harapan Lestari 的" + label + "（第 " + n + " 张，共 4 张）"; } }
  };
  const text = ui[lang] || ui.en;

  /* ---------- Mobile menu toggle (keyboard accessible) ---------- */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".text");
  if (hamburger && navLinks) {
    // The markup is a <div>; give it real button semantics for keyboard + AT.
    if (!navLinks.id) navLinks.id = "primary-nav";
    hamburger.setAttribute("role", "button");
    hamburger.setAttribute("tabindex", "0");
    hamburger.setAttribute("aria-controls", navLinks.id);
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", text.menu);

    const toggleMenu = function () {
      const isOpen = hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    };

    hamburger.addEventListener("click", toggleMenu);
    hamburger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
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

  /* ---------- Pause the customer logo loop while it is offscreen ---------- */
  const marquee = document.querySelector(".marquee-images");
  if (marquee && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      // "" hands control back to the CSS (including its hover/focus pause)
      marquee.style.animationPlayState = entries[0].isIntersecting ? "" : "paused";
    }).observe(marquee.parentNode);
  }

  /* ---------- Repairs gallery tabs ---------- */
  const galleryButtons = document.querySelectorAll(".boat-text button");
  if (galleryButtons.length) {
    const imgs = [1, 2, 3, 4].map(function (i) { return document.getElementById("boat" + i); });

    const show = function (button, animate) {
      const boat = button.getAttribute("data-boat-name");
      const label = button.textContent.trim();
      const srcs = imgs.map(function (_, i) { return "/assets/services/" + boat + "/" + (i + 1) + ".jpg"; });

      galleryButtons.forEach(function (btn) {
        btn.classList.toggle("focused", btn === button);
        btn.setAttribute("aria-pressed", String(btn === button));
      });

      const swap = function () {
        imgs.forEach(function (img, i) {
          if (!img) return;
          img.src = srcs[i];
          img.alt = text.photo(label, i + 1);
        });
      };

      if (!animate || !document.startViewTransition ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        swap();
        return;
      }
      // Decode the new photos first so the cross-fade never shows a blank frame
      Promise.all(srcs.map(function (src) {
        const pre = new Image();
        pre.src = src;
        return pre.decode().catch(function () {});
      })).then(function () {
        // A skipped transition (e.g. hidden tab) still runs swap; only silence its rejection
        document.startViewTransition(swap).ready.catch(function () {});
      });
    };

    galleryButtons.forEach(function (button) {
      button.addEventListener("click", function () { show(this, true); });
    });
    show(document.querySelector('[data-boat-name="tug"]') || galleryButtons[0], false);
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
