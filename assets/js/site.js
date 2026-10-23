/* ============================================================
   Pahala Harapan Lestari — site.js
   One script for every page and language. Each feature is guarded
   by an element check, so a page only runs the behavior it needs.
   ============================================================ */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    hamburger.setAttribute("aria-label", "Toggle navigation menu");

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

  /* ---------- Hide navbar on scroll-down, reveal on scroll-up ---------- */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      navbar.style.top = currentScroll > lastScrollTop ? "-6rem" : "0";
      lastScrollTop = currentScroll;
    });
  }

  /* ---------- Hero overlay fade on scroll (skipped under reduced motion) ---------- */
  const overlay = document.querySelector(".landing-overlay");
  if (overlay && !reduceMotion) {
    const checkpoint = 800; // distance over which the overlay fades in
    window.addEventListener("scroll", function () {
      const currentScroll = window.scrollY;
      overlay.style.opacity = currentScroll <= checkpoint ? currentScroll / checkpoint : 1;
    });
  }

  /* The customer logo marquee is now a pure CSS animation (see home.css),
     which pauses on hover/focus and stops under prefers-reduced-motion. */

  /* ---------- Vessel / repair gallery tabs ---------- */
  const galleryButtons = document.querySelectorAll(".boat-text button");
  if (galleryButtons.length) {
    galleryButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const boat = this.getAttribute("data-boat-name");
        const label = this.textContent.trim();
        for (let i = 1; i <= 4; i++) {
          const img = document.getElementById("boat" + i);
          if (img) {
            img.src = "/assets/services/" + boat + "/" + i + ".png";
            img.alt = label + " by PT. Pahala Harapan Lestari (" + i + " of 4)";
          }
        }
        galleryButtons.forEach(function (btn) { btn.classList.remove("focused"); });
        this.classList.add("focused");
      });
    });
    // Default to the first category on load
    const defaultTab = document.querySelector('[data-boat-name="tug"]');
    if (defaultTab) {
      defaultTab.click();
      defaultTab.focus();
      window.scrollTo(0, 0);
    }
  }

  /* ---------- Contact form ---------- */
  const form = document.forms["contact-form"];
  if (form) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbwzBqY92EJH0AScvMwS4e4rw-UsX516iSinpnv_vP7hVu3gA3jMl_z8aMGdRLChzRRJ/exec";

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      if (name === "") { alert("Name should not be empty!"); return false; }
      else if (name.length < 3) { alert("Name must be more than 3 characters!"); return false; }
      else if (!isNaN(name)) { alert("Name should only consist of letters!"); return false; }

      const email = document.getElementById("email").value;
      if (email === "") { alert("Email should not be empty!"); return false; }
      else if (email.split("@").length > 2 || email.split("@").length === 1) { alert("Email should contain '@'!"); return false; }
      else if (!email.split("@")[1].includes(".com")) { alert("Email should contain '.com' after '@'!"); return false; }

      const phone = document.getElementById("phone").value;
      if (phone === "") { alert("Phone number should not be empty!"); return false; }
      else if (phone.length < 6) { alert("Phone number must be more than 6 numbers!"); return false; }
      else if (isNaN(phone)) { alert("Phone number should only consist of numbers!"); return false; }

      const message = document.getElementById("message").value;
      if (message === "") { alert("Message should not be empty!"); return false; }

      // Prevent double submission while the request is in flight
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) submitButton.disabled = true;

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(function () {
          alert("Your inquiry has been successfully recorded.");
          window.location.reload();
        })
        .catch(function (error) {
          console.error("Error!", error.message);
          alert("Sorry, your message could not be sent. Please check your connection and try again, or email us at office@pahalashipyard.com.");
          if (submitButton) submitButton.disabled = false; // let them retry
        });
    });
  }

  /* ---------- Language switcher ---------- */
  const languageButton = document.getElementById("languageButton");
  if (languageButton) {
    const languages = ["EN", "ID", "ZH"]; // cycle order
    const pathname = window.location.pathname;
    let currentLanguage = "EN";
    if (pathname.includes("/id/")) currentLanguage = "ID";
    else if (pathname.includes("/zh/")) currentLanguage = "ZH";
    languageButton.textContent = currentLanguage;

    languageButton.addEventListener("click", function () {
      const currentPage = window.location.pathname.split("/").pop();
      const nextIndex = (languages.indexOf(currentLanguage) + 1) % languages.length;
      const nextLanguage = languages[nextIndex].toLowerCase();
      window.location.href = window.location.origin + "/" + nextLanguage + "/" + currentPage;
    });
  }

  /* ---------- Keep the footer copyright year current ----------
     Replace only the year so each language keeps its own translated text. */
  document.addEventListener("DOMContentLoaded", function () {
    const copyrightElement = document.querySelector("footer .copyright");
    if (copyrightElement) {
      copyrightElement.textContent = copyrightElement.textContent.replace(/\b20\d{2}\b/, new Date().getFullYear());
    }
  });
})();
