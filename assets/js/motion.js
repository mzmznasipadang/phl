/* ============================================================
   Pahala Harapan Lestari — motion.js
   The GSAP layer. site.js loads it (after GSAP and ScrollTrigger) only
   when CSS cannot do the job, and only without reduced motion:
   1. Browsers without scroll-driven CSS animations get the same reveals
      as base.css: photos rise through the waterline, bars draw across,
      the hero fades to white.
   2. Vessels page, desktop: the showcase pins while the three vessels
      surface one after another through the bottom edge of the photo.
   ============================================================ */
(function () {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Pinned vessel showcase ----------
     Built from the page itself (vessel names, types and gallery photos),
     so the three languages need no extra markup. Runs first, so the
     reveal fallback below can leave the stacked photos alone. */
  const lead = document.querySelector(".showcase-title > img");
  const captions = document.querySelectorAll(".showcase-container .vessel-caption");
  const photos = Array.prototype.slice.call(captions, 1).map(function (caption) {
    const row = caption.nextElementSibling;
    return row && row.querySelector("img.long");
  });

  if (lead && photos.length && photos.every(Boolean)) {
    const panel = lead.parentNode;
    const stage = document.createElement("div");
    stage.className = "showcase-stage";
    lead.replaceWith(stage);
    stage.appendChild(lead);

    const layers = photos.map(function (photo) {
      const layer = photo.cloneNode();
      layer.className = "stage-layer";
      layer.alt = ""; // the same photo is described in the gallery below
      layer.removeAttribute("title");
      stage.appendChild(layer);
      return layer;
    });

    // Repeats the vessel headings below, so screen readers skip it
    const steps = document.createElement("ol");
    steps.className = "showcase-steps";
    steps.setAttribute("aria-hidden", "true");
    captions.forEach(function (caption) {
      const li = document.createElement("li");
      const name = document.createElement("span");
      const type = document.createElement("span");
      name.textContent = caption.querySelector(".vessel-name").textContent;
      type.textContent = caption.querySelector(".vessel-type").textContent;
      type.className = "type";
      li.append(name, type);
      steps.appendChild(li);
    });
    panel.querySelector(".title").appendChild(steps);

    gsap.matchMedia().add("(min-width: 981px)", function () {
      panel.classList.add("is-staged");
      const items = steps.children;
      const mids = []; // timeline time at which each vessel becomes the current one

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onUpdate: function () {
          const time = tl.time();
          const current = mids.filter(function (mid) { return time >= mid; }).length;
          for (let i = 0; i < items.length; i++) items[i].classList.toggle("is-current", i === current);
        },
        scrollTrigger: {
          trigger: panel,
          pin: true,
          start: "center center",
          end: function () { return "+=" + window.innerHeight * 0.9 * layers.length; },
          scrub: 0.5,
          invalidateOnRefresh: true
        }
      });

      // Hold on each vessel before the next rises over it
      tl.to({}, { duration: 0.3 });
      layers.forEach(function (layer) {
        mids.push(tl.duration() + 0.5);
        tl.fromTo(layer, { yPercent: 100 }, { yPercent: 0, duration: 1 });
        tl.to({}, { duration: 0.4 });
      });
      items[0].classList.add("is-current");

      return function () { panel.classList.remove("is-staged"); };
    });
  }

  /* ---------- Fallback for browsers without scroll-driven CSS ----------
     Mirrors the @supports blocks in base.css: same elements, same ranges,
     ease-out-quart (GSAP's power3). */
  if (!CSS.supports("animation-timeline: view()")) {
    gsap.utils.toArray(
      ".option, .tiles-border img, .boat-gallery img, .showcase-container img:not(.stage-layer), " +
      ".craftsman-content img, .vision img, .mission img, .policy-gallery img, .outstanding-image, .card"
    ).forEach(function (el) {
      gsap.fromTo(el,
        { clipPath: "inset(0% 0% 22% 0%)", y: 40, opacity: 0.6 },
        {
          clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, ease: "power3.out",
          // CSS: animation-range: entry 0% entry 45%
          scrollTrigger: { trigger: el, start: "top bottom", end: "45% bottom", scrub: true }
        });
    });

    gsap.utils.toArray(".line, .border").forEach(function (el) {
      const down = el.classList.contains("border");
      gsap.fromTo(el, down ? { scaleY: 0 } : { scaleX: 0 }, {
        scaleX: 1, scaleY: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          // CSS: animation-range: entry 10% cover 35%
          start: "10% bottom",
          end: function () { return "+=" + (0.35 * window.innerHeight + 0.25 * el.offsetHeight); },
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    });

    const overlay = document.querySelector(".landing-overlay");
    if (overlay) {
      gsap.to(overlay, { opacity: 1, ease: "none", scrollTrigger: { start: 0, end: 800, scrub: true } });
    }
  }
})();
