# Imaginated — Branding Agency Website
> **"let's Design the Dream"**

A modern, responsive, high-converting single-page website for **Imaginated**, an independent strategic branding and design agency based in **Rajapalayam, Tamil Nadu, India**. Built strictly with modern web standards (**HTML5**, **CSS3**, and **Vanilla JavaScript**) with zero backend or API dependencies.

---

## 🌟 Overview & Agency Identity

The website layout reflects Imaginated's core identity: the union of a **glowing lightbulb** (strategic insight & radiant ideas) and a **fountain pen nib** (meticulous craftsmanship & precision execution).

### Studio Address
> **Imaginated**  
> Rajapalayam – 626117,  
> Virudhunagar District,  
> Tamil Nadu, India.

---

## 📂 Project Structure

```text
Imaginated-Website/
├── index.html              # Semantic single-page HTML5 with Schema.org & OpenGraph
├── README.md               # Complete documentation and configuration reference
└── assets/
    ├── css/
    │   └── style.css       # Configurable CSS variables, responsive design tokens & layout
    ├── js/
    │   └── main.js         # Navigation drawer, theme toggle, sticky header, scroll spy
    └── images/
        └── logo.jpg        # Official Imaginated logo emblem
```

---

## 📱 Page Sections & Features

1. **Header & Navigation**:
   - Sticky navbar with glassmorphism blur backdrop (`backdrop-filter: blur(14px)`).
   - Brand logo mark with "IMAGINATED" and "let's Design the Dream".
   - Links: **About**, **Services**, **Process**, **Contact**.
   - Built-in **Light / Dark mode toggle** with local preference storage.
   - Header action button for instant WhatsApp access.
   - Mobile hamburger drawer with keyboard accessibility (ESC key to close).

2. **Hero Section**:
   - Headline: *"We turn bold visions into iconic brands."*
   - Tagline callout: `[ let's Design the Dream ]`.
   - Direct call-to-actions: **Click to WhatsApp** and **Email Us**.
   - Key agency pillars: Tailored Visual Systems, 360° Strategy, Direct Founder-Led Collaboration, Fast WhatsApp Response.
   - Emblem showcase explaining the Pen Nib & Glowing Bulb metaphor.

3. **Capabilities Marquee**:
   - Smooth infinite scroll strip featuring core capabilities (Brand Strategy, Visual Identity, Packaging, Design Systems, Digital Experiences, Typography, Social Brand Kits, Rebranding).

4. **Philosophy & About**:
   - Core pillars: Strategy First, Meticulous Craft, Scalable Impact.

5. **Core Services**:
   - 01. Brand Strategy & Positioning
   - 02. Visual Identity & Logo Systems (*Signature Offering*)
   - 03. Packaging & Print Systems
   - 04. Digital Experience & UI/UX
   - 05. Social Content & Launch Kits
   - 06. Brand Evolution & Rebranding
   - Each service card features deliverables and a direct Click-to-WhatsApp link pre-filled for that specific service!

6. **4-Step Methodology**:
   - Phase 1: Discovery & Diagnostics
   - Phase 2: Strategy & Direction
   - Phase 3: Design Craft & Systems
   - Phase 4: Delivery & Guidelines

7. **Direct Contact Hub**:
   - **Click to WhatsApp**: Instant pre-filled chat with `+91 9080364386` (`https://wa.me/919080364386`).
   - **Phone**: Direct call link to `+91 9080364386` (`tel:+919080364386`).
   - **Email**: Direct link to `contact@imaginated.in` (`mailto:contact@imaginated.in`).
   - **Office Address**: Rajapalayam 626117, Virudhunagar, Tamil Nadu, India with direct Google Maps link.
   - **Social Profiles**: Links to official **Instagram** (`@imaginated.in`) and **LinkedIn**.
   - **Floating WhatsApp Widget**: Persistent bottom-right pulsating button for effortless inquiries on all devices.

---

## 📞 Direct Contact & Social Links Reference

| Channel | Value / URL | Action |
| :--- | :--- | :--- |
| **WhatsApp** | `+91 9080364386` | [Open WhatsApp Chat](https://wa.me/919080364386?text=Hi%20Imaginated,%20I'd%20like%20to%20discuss%20a%20branding%20project.) |
| **Phone** | `+91 9080364386` | [Call +91 9080364386](tel:+919080364386) |
| **Email** | `contact@imaginated.in` | [Email contact@imaginated.in](mailto:contact@imaginated.in) |
| **Address** | Rajapalayam 626117, Virudhunagar, Tamil Nadu | [Google Maps](https://maps.google.com/?q=Rajapalayam+626117+Tamil+Nadu+India) |
| **Instagram** | `@imaginated.in` | [Instagram Profile](https://www.instagram.com/imaginated.in) |
| **LinkedIn** | `Imaginated` | [LinkedIn Page](https://www.linkedin.com/company/imaginated) |

---

## 🎨 Theme Customization (CSS Variables)

Colors are defined at the very top of [`assets/css/style.css`](assets/css/style.css) under `:root`.

```css
:root {
  /* Brand Radiant Gold (Extracted from the Lightbulb Nib Logo) */
  --color-primary: #F5BE0B;
  --color-primary-hover: #E5A505;
  --color-primary-light: #FDE68A;
  --color-primary-glow: rgba(245, 190, 11, 0.28);
  --color-primary-subtle: rgba(245, 190, 11, 0.12);

  /* Obsidian Dark Theme */
  --color-bg: #0C0E14;
  --color-bg-secondary: #12151F;
  --color-surface: #171A26;
  --color-surface-hover: #1F2333;
  --color-surface-elevated: #24293C;

  /* Typography */
  --font-heading: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

To switch or adjust the brand accent in the future, simply change `--color-primary` to your preferred hex code.

---

## 🚀 How to Run & Deploy

### Run Locally
Double-click `index.html` to open it in your browser, or run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

### Deploy to GitHub Pages / Netlify / Vercel
Because the project has no build step and no backend dependencies, simply:
- **GitHub Pages**: Push to repository and enable GitHub Pages on `main` branch.
- **Netlify**: Drag-and-drop the project folder onto [Netlify Drop](https://app.netlify.com/drop).
- **Vercel**: Import the GitHub repo in Vercel dashboard and deploy.
- **Web Hosting (cPanel / Apache / Nginx)**: Upload `index.html`, `assets/`, and `README.md` to `public_html`.

---

## 📄 License
© 2025 **Imaginated**. All rights reserved.  
*Rajapalayam 626117, Virudhunagar, Tamil Nadu, India.*  
*Let's Design the Dream.*
