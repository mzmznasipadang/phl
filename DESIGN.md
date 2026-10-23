---
name: Pahala Harapan Lestari
description: The brand and marketing site for a national Indonesian shipyard, anchored in deep maritime navy and the weight of an industrial grotesque.
colors:
  deep-harbor-blue: "#204782"
  harbor-depth: "#0D2954"
  sea-mist: "#CCD4E0"
  tidal-gray: "#B7C2D4"
  dock-white: "#F7F7F7"
  signal-white: "#FFFFFF"
  hull-hairline: "#00000033"
typography:
  display:
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.3rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.005em"
  title:
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sharp: "0"
  micro: "2px"
  sm: "6px"
  pill: "100%"
spacing:
  gutter: "8%"
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "3rem"
  section: "9rem"
components:
  navbar:
    backgroundColor: "{colors.deep-harbor-blue}"
    textColor: "{colors.signal-white}"
    typography: "{typography.label}"
    height: "5.938rem"
  button-primary:
    backgroundColor: "{colors.deep-harbor-blue}"
    textColor: "{colors.signal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: "3rem"
    width: "10rem"
  language-toggle:
    backgroundColor: "{colors.harbor-depth}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.pill}"
    padding: "1.5rem"
  input-field:
    backgroundColor: "{colors.signal-white}"
    textColor: "{colors.harbor-depth}"
    rounded: "{rounded.sharp}"
    height: "2rem"
  section-title-block:
    backgroundColor: "{colors.tidal-gray}"
    textColor: "{colors.harbor-depth}"
    typography: "{typography.headline}"
    padding: "2%"
---

# Design System: Pahala Harapan Lestari

## 1. Overview

**Creative North Star: "The Harbor at Anchor"**

This is the visual language of a yard that has been building and repairing ships since 1982. It should feel steady, weighty, and dependable, the way a large vessel sits at anchor in deep water: settled, unhurried, in no danger of drifting. The whole system orbits one deep maritime navy, set against a near-white dock and carried by a single industrial-grotesque voice with real heft. Nothing here is trying to look new. It is trying to look like it will still be standing in twenty years.

Authority comes from evidence, not decoration. Full-bleed photographs of real hulls, real cranes, and real launches do the talking; the chrome stays out of the way. Sections announce themselves with a solid navy accent bar and a blue-gray title block, a quiet, repeatable rhythm rather than a parade of effects. The industrial grotesque gives every heading a stamped, structural weight that reads as engineering rather than fashion.

This system explicitly rejects four things, carried directly from the brand's anti-references. It is **not** generic corporate brochureware (no stock-business photography, no interchangeable icon-and-text card grids, no template look). It is **not** a flashy consumer-tech startup (no trendy gradients used as decoration, no playful illustration, no oversized rounded everything). It is **not** a cold, purely industrial spec sheet (the family-craft story and the people keep it human). And it is **not** cluttered or busy (one clear idea per view, generous breathing room, an obvious reading path for a mixed, often non-native-English audience reading in three languages).

**Key Characteristics:**
- One deep navy carries the brand; everything else supports it.
- A single industrial grotesque (Archivo) across the whole site, working through weight contrast.
- Flat surfaces. Depth comes from imagery and tonal layering, never from shadow.
- Full-bleed 100vh hero photography on every page, dimmed so type can sit on it.
- Asymmetric image showcases, not uniform card grids.
- A repeating section signature: navy accent bar plus blue-gray title block.

## 2. Colors

A committed maritime palette: one deep navy doing the heavy lifting, two blue-grays for tonal layering, and a near-white dock to let the photography breathe.

### Primary
- **Deep Harbor Blue** (#204782): The brand. It carries the fixed navbar, the footer, the primary call-to-action, every accent bar, and the section title blocks' companion line. When navy meets the eye, it is almost always this value. Its consistency is what makes the brand read as one institution across five pages and three languages.

### Secondary
- **Harbor Depth** (#0D2954): The deepest navy, reserved for the floating language toggle so it reads as a persistent, slightly heavier control sitting above the page. Also the natural ink color for text set on the pale blue-gray surfaces.

### Tertiary
- **Sea Mist** (#CCD4E0): The lighter blue-gray surface. Backs the home description band, showcase title panels, and the vessels tab block. A calm, recessive ground that signals "supporting context" without competing with navy.
- **Tidal Gray** (#B7C2D4): The deeper blue-gray surface, used for the About section title blocks. One step more present than Sea Mist, for headings that need slightly more weight.

### Neutral
- **Dock White** (#F7F7F7): The page background and the hero scroll-fade overlay. A true near-white at zero chroma, not a tinted cream. It keeps the focus on navy and photography.
- **Signal White** (#FFFFFF): Pure white. Text set on navy and over dimmed hero imagery, the contact card surface, and form-field backgrounds.
- **Hull Hairline** (#00000033): A 20% black hairline (1px) for form-field borders. The only "line" color that is not navy.

### Named Rules

**The Hull Shadow Rule.** Navy surfaces are not flat #204782; they carry a 20% black multiply layered over the navy (`linear-gradient(0deg, rgba(0,0,0,0.20), rgba(0,0,0,0.20)), #204782`). This single recurring treatment, applied to the navbar, footer, CTAs, accent bars, and the map panel, is the brand's signature. Reuse it; do not swap in a flat fill or a decorative multi-stop gradient.

**The One Navy Rule.** There is exactly one brand navy (Deep Harbor Blue) and one deeper variant (Harbor Depth). Do not introduce a second blue, a teal, or an accent hue. The palette's restraint is the seriousness.

## 3. Typography

**Display Font:** Archivo (with Helvetica Neue, then Arial / system sans fallback)
**Body Font:** Archivo (same family)
**Label/Mono Font:** none; the system is single-family

**Character:** One industrial grotesque, top to bottom, working entirely through weight. Archivo's rational, mechanical letterforms give headings a stamped, structural authority, like an engineering nameplate or a stencilled hull marking, while its regular weight stays plain and legible for long Indonesian, English, and Chinese passages. The personality is the weight jump from 400 to 700, not a second typeface.

### Hierarchy
- **Display** (700, clamp(3rem, 6vw, 4rem), line-height 1.05): The hero statement on each page's full-bleed image ("We Serve You.", "About PT. PHL"). Always Signal White over dimmed photography.
- **Headline** (700, clamp(2.3rem, 5vw, 3.5rem), line-height 1.1): Major section title blocks set on Tidal Gray ("Craftsman in heart.", "Steadfast principles."). The heaviest type that appears on a light surface.
- **Title** (600, clamp(2rem, 3.5vw, 2.7rem), line-height 1.2): Subsection headings and band titles ("Our Customers", "Forging the Future").
- **Body** (400, 1.2rem, line-height 1.6): Running prose. Hold to 65 to 75 characters per line; the current full-width paragraphs run long and should be constrained.
- **Label** (500, 1.15rem, line-height 1.4): Navigation links, CTA labels, and the small navy eyebrow that introduces vessel and repair descriptions (the eyebrow runs at 400 weight in Deep Harbor Blue).

### Named Rules

**The Weight-Not-Family Rule.** Hierarchy is built from Archivo's weight range (400 to 700), never from a second typeface. If a heading needs more presence, go heavier or larger, do not reach for a display face.

**The Stencil Width Rule.** Archivo is loaded as a variable font (`wdth` 62–125, `wght` 300–900). Page-level headings run condensed (`font-stretch: 86%`, hero display `78%`, tracking -0.01em, leading ~1.0), like a stencilled hull marking; body, labels and navigation stay at normal width. Width is the second lever after weight, still one family. Sizes come from the fluid tokens `--fs-display`, `--fs-headline`, `--fs-title` in base.css. Chinese pages fall back to PingFang SC / Noto Sans SC / Microsoft YaHei by name (`:root:lang(zh)`), since Archivo has no CJK glyphs.

**The Waterline Motion Rule.** Motion has one signature: photographs rise into view through a clip that clears from the bottom, and the navy accent bars draw out of their title blocks, both scroll-linked in CSS (`animation-timeline: view()`). Pages cross-fade (`@view-transition`) with the navbar held still; the Repairs gallery cross-fades between categories. Everything is visible by default where unsupported and switched off under `prefers-reduced-motion`. Do not add per-section entrance variety on top of this.

**The Eyebrow Exception.** The site uses a small navy eyebrow above the vessels and repairs descriptions. This is a single, deliberate, named pattern, not section scaffolding. Do not multiply it into a tracked uppercase kicker above every section; that is the AI-grammar tell this brand avoids.

## 4. Elevation

The system is flat. There are no box-shadows anywhere in the codebase, and that is correct: a shipyard brand earns depth from real photography and material weight, not from drop-shadow chrome. Depth is conveyed three ways: full-bleed hero images dimmed with `filter: brightness(75%)` so type sits on them; tonal layering of the two blue-grays (Sea Mist and Tidal Gray) against Dock White; and the Hull Shadow navy treatment that makes navy panels feel slightly recessed and solid.

### Named Rules

**The Flat Hull Rule.** Surfaces are flat at rest. Never add a decorative `box-shadow` to a card, button, or panel to "lift" it. If something needs to feel raised, give it the navy Hull Shadow treatment or set it on a contrasting blue-gray, do not float it on a shadow.

**The Brightness-Filter Rule.** Hero photographs are dimmed to roughly 75% brightness so Signal White display type stays legible. Every full-bleed image that carries text uses this; verify contrast on the brightest region of the photo, not the average.

## 5. Components

For each component, the character line comes first, then shape, color, and state.

### Buttons
- **Character:** Engineered and precise. Solid navy blocks with crisp edges, sized deliberately, no ornament.
- **Shape:** Gently squared (6px radius, `{rounded.sm}`) on the primary CTA; the language toggle is a full circle (`{rounded.pill}`).
- **Primary CTA (`.contact-us`):** Deep Harbor Blue with the Hull Shadow treatment, Signal White label at weight 500, fixed footprint 10rem by 3rem, centered label. This is the page-level "Contact us" button on the Vessels and Repairs pages.
- **Send button (form submit):** Same navy Hull Shadow fill, 6px radius. Currently undersized (about 3rem wide, 0.56rem type); it should be brought up to the primary CTA's weight and given a real hover and focus state.
- **Language toggle:** Persistent circular control, bottom-right, Harbor Depth fill, Signal White two-letter label (EN / ID / ZH), cycles language on click.
- **Tab buttons (Vessels):** Transparent, Signal White label, underline on hover, Deep Harbor Blue when focused. Used to switch boat categories.
- **Hover / Focus:** Links and tabs underline on hover. Buttons currently lack a consistent hover and a visible focus ring; add a `:focus-visible` outline (2px Signal White or Deep Harbor Blue depending on background) across all interactive controls.

### Cards / Containers
- **Contact card:** The one literal card. Signal White background, flat, holding the Google Maps panel and the form side by side. Corners square, no shadow, no border. On the map side it carries the navy Hull Shadow as a backing.
- **Section title block:** A blue-gray panel (Tidal Gray on About, Sea Mist on showcases) holding a Headline, paired with a flex-grow Deep Harbor Blue accent bar (2px radius) that fills the remaining width. This pairing is the brand's section signature.
- **Internal padding:** Containers breathe on the 8% page gutter (`{spacing.gutter}`); blocks pad at 2rem to 3rem.

### Inputs / Fields
- **Style:** Signal White background, 1px Hull Hairline border (#00000033), square corners, 2rem tall, left-padded text.
- **Focus:** Currently none. Add a Deep Harbor Blue border shift plus a soft focus ring on `:focus-visible`; the default browser outline is being suppressed by the global reset and must be replaced.
- **Placeholder:** Ensure placeholder text meets 4.5:1 against white (the browser default gray does not); set it to a Harbor Depth tint.

### Navigation
- **Style:** Fixed full-width bar, Deep Harbor Blue Hull Shadow fill, logo left, horizontal links right, weight-500 Signal White labels at 1.15rem.
- **States:** Links underline on hover; they stay Signal White on active and visited (no color shift). The bar hides on scroll-down and reappears on scroll-up (`top` transition, 0.3s).
- **Mobile:** Below 980px the links collapse behind a hamburger that morphs into an X; the menu slides in from the left as a navy panel.

### Customer Marquee (signature component)
A continuous horizontal auto-scroll of client logos (Pertamina, Pelindo, Adaro, and others) on the home page, driven by a CSS keyframe loop that pauses on hover and focus. The duplicated logo set makes the loop seamless. This is proof-over-adjectives in motion: the clients speak for the company. It must honor `prefers-reduced-motion` by pausing or replacing the scroll with a static, wrapped logo row.

## 6. Do's and Don'ts

### Do:
- **Do** carry the navy **Hull Shadow** treatment (`linear-gradient(0deg, rgba(0,0,0,0.20), rgba(0,0,0,0.20)), #204782`) on every navy surface. It is the brand signature.
- **Do** build type hierarchy from Archivo weight alone (400 to 700). One family, top to bottom.
- **Do** keep surfaces flat and earn depth from full-bleed photography and the two blue-grays.
- **Do** lead with real evidence: actual vessels, real client logos, the awards, the ISO certifications. Proof over adjectives.
- **Do** hold body copy to 65 to 75 characters per line and set a visible `:focus-visible` ring on every interactive control (the WCAG 2.1 AA bar).
- **Do** give the customer marquee, the hide-on-scroll navbar, and the hero scroll-fade a `prefers-reduced-motion: reduce` alternative.
- **Do** keep the EN / ID / ZH versions at visual and accessibility parity; a fix on one is a fix on all three.

### Don't:
- **Don't** ship **generic corporate brochureware**: no stock-business photography, no interchangeable icon-and-text card grids, no template layout.
- **Don't** drift toward a **flashy consumer-tech startup**: no decorative multi-stop gradients, no playful illustration, no oversized rounded-everything.
- **Don't** go **cold and purely industrial**: keep the family-craft story and the people visible; this is a yard with pride, not a spec sheet.
- **Don't** get **cluttered and busy**: one clear idea per view, generous spacing, an obvious path to contact.
- **Don't** introduce a second brand hue. One navy (Deep Harbor Blue) plus its deeper variant (Harbor Depth), and the blue-grays. Nothing else.
- **Don't** add a `box-shadow` to lift an element; use the Hull Shadow or a blue-gray ground instead.
- **Don't** set body or structural text below ~0.85rem. The current footer text (0.7rem) and copyright (0.5rem, dropping to 0.3rem on mobile) fail WCAG AA and must be raised.
- **Don't** use `background-clip: text` gradient headings, glassmorphism, or a `border-left` color stripe as an accent. None belong in this system.
- **Don't** multiply the navy eyebrow into a tracked uppercase kicker above every section.
