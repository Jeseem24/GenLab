# GenLab™

> **The Gen Z Creator Space** — A cinematic, premium landing page built with vanilla HTML, CSS, and GSAP.

![GenLab Hero](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=black)

---

## ✨ Overview

GenLab is a high-fidelity, Awwwards-inspired landing page featuring a cinematic splash screen animation, a premium hero section, and a real-time 3D rotating tablet — all built without any frameworks or 3D libraries.

---

## 🎬 Splash Screen Animation

The splash screen delivers a carefully sequenced, timeline-driven animation:

| Step | Description |
|------|-------------|
| 1 | Pure **white screen** holds for a brief moment |
| 2 | Hero background image **fades in** behind the white overlay |
| 3 | Three nested **green square boxes** scale down unitedly from outside to center |
| 4 | The GenLab logo **reveals quadrant-by-quadrant** (top-left → top-right → bottom-left → bottom-right) using CSS `clip-path` |
| 5 | Logo **fades out**, boxes shrink to center |
| 6 | Boxes **zoom past the camera** and the white overlay dissolves |
| 7 | Hero section **fades in** with staggered element entrances |

---

## 🏠 Hero Section

- **Navigation Bar** — Menu toggle, centered GenLab icon + wordmark, contact link
- **GenLab™ Title** — Large-scale typographic heading with trademark symbol
- **Divider + Subbar** — "THE GEN Z CREATOR SPACE." with a "JOIN THE COMMUNITY" CTA
- **Tagline** — "CREATE. COLLABORATE. INNOVATE — REIMAGINED FOR THE NEXT GENERATION."
- **Bottom Section** — "For Creators. For the Future." with ecosystem description
- **3D Rotating Tablet** — Volumetric CSS 3D object with engraved logo (see below)

---

## 🧊 3D Tablet Element

A fully browser-rendered 3D object — no Three.js, no WebGL, no external models.

- **40 stacked layers** along the Z-axis create volumetric depth
- **Beveled edges** — front and back layers scale down with a quadratic curve for realistic rounded edges
- **Textured surface** — `repeating-conic-gradient` layered over a `radial-gradient` simulates matte graphite
- **Engraved GenLab logo** — SVG stamped on the front/back faces with dual `drop-shadow` filters for a CNC-milled effect
- **Continuous Y-axis rotation** — Smooth infinite spin driven by GSAP, independent of the main timeline
- **Directional lighting** — Inner layers use reduced `brightness()` to simulate shadowed edges

---

## ✳️ Pixel Hover Effect

An interactive pixel grid overlays the bottom 45% of the hero section:

- **18 × 6 grid** of square blocks, invisible by default
- Blocks **reveal near the cursor** within a 4-cell radius
- Each block's color follows a **diagonal gradient** — light green (top-right) to dark green (bottom-left)
- Smooth `opacity` + `scale` transitions for organic feel
- `pointer-events: none` ensures zero interference with UI interactions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic structure, SVG `<defs>` for reusable icon |
| **CSS3** | Layout, 3D transforms, `clip-path`, gradients, `preserve-3d` |
| **JavaScript** | DOM generation for 3D layers, pixel grid, event handlers |
| **GSAP 3.12** | Timeline-based animation sequencing with precision easing |
| **Google Fonts** | Inter typeface for clean, modern typography |

---

## 📁 Project Structure

```
GenLab/
├── index.html          # Main HTML with SVG defs, splash screen, hero section
├── style.css           # All styling — layout, 3D geometry, pixel grid, responsive
├── script.js           # GSAP timeline, 3D tablet generator, pixel hover engine
├── Background.png      # Hero section background image
├── GenLab Icon.svg      # Official GenLab vector logo
└── README.md           # This file
```

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/Jeseem24/GenLab.git
   cd GenLab
   ```

2. **Open in browser**
   
   Simply open `index.html` in any modern browser, or serve it locally:
   ```bash
   # Using Python
   python -m http.server 3500

   # Using Node.js
   npx serve -l 3500
   ```

3. **Visit** `http://localhost:3500`

> **Note:** No build step, no dependencies to install. It just works.

---

## 🎨 Design Inspiration

Inspired by the cinematic splash screen and hero section of [Farm Minerals — CropTab™ Promo](https://www.farmminerals.com/promo), reimagined for the GenLab brand identity.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>GenLab™</strong> — Create. Collaborate. Innovate.
</p>
