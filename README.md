# Imaginated — Branding Agency Website
> **"let's Design the Dream"**

A high-converting, responsive single-page website for **Imaginated**, an independent strategic branding and visual identity agency. Built with pure modern web standards (**HTML5**, **CSS3**, and **Vanilla JavaScript**) without dependencies or heavy build steps.

---

## 🌟 Overview & Design Philosophy

The website's visual identity and layout are directly inspired by the studio's insignia: the union of a **glowing lightbulb** (strategic insight & bright ideas) and a **fountain pen nib** (meticulous craftsmanship & artisanal execution).

### Influences & Benchmarks
Synthesizing the best principles from leading global branding agencies:
- **[The Futur](https://thefutur.com/)**: High-impact editorial typography, structured 4-step creative methodology, and clear value communication.
- **[Brandbench](https://www.brandbench.co/)**: Sleek dark-mode aesthetic, refined card borders, subtle radiant glows, and premium luxury feel.
- **[Brandmindz](https://www.brandmindz.com/)**: Clear service taxonomies, structured deliverables, and high-conversion consultation inquiry flows.
- **[Xpressreach](https://xpressreach.com/)**: Dynamic capabilities marquee, real-time client touchpoints, and prominent WhatsApp accessibility.

---

## 📂 Project Structure

```text
Imaginated-Website/
├── index.html              # Semantic HTML5 single-page structure & schema.org JSON-LD
├── README.md               # Complete documentation and configuration reference
└── assets/
    ├── css/
    │   └── style.css       # Design tokens (CSS custom properties), responsive styles & animations
    ├── js/
    │   └── main.js         # Mobile drawer, theme toggle, WhatsApp bridge & form validation
    └── images/
        └── logo.jpg        # Official Imaginated logo emblem (provided by client)
```

---

## 📱 Key Features

1. **Fully Responsive Across All Screens**:
   - Fluid typography with CSS `clamp()` scales seamlessly from 320px mobile screens to 4K ultra-wide displays.
   - Flexible CSS Grid and Flexbox layouts.
   - Accessible mobile navigation drawer with hamburger animation and ESC key handling.
2. **Configurable Color Theming**:
   - Centralized CSS Variables (`:root`) at the very top of `style.css`.
   - Built-in Dark / Light mode toggle with `localStorage` persistence.
3. **Dedicated Contact & Lead Channels**:
   - **Email**: `contact@imaginated.in` (one-click mailto fallback)
   - **Phone**: `+91 9080364386` (direct dial)
   - **Click to WhatsApp**: Instant pre-filled chat on `+91 9080364386` (`https://wa.me/919080364386`)
   - **Social Profiles**: Direct links to official **Instagram** and **LinkedIn** channels.
   - **Floating WhatsApp Widget**: Persistent bottom-right pulsating button for instant lead generation.
   - **Direct WhatsApp Brief Compiler**: Button on the contact form that instantly formats the user's filled inputs into a formatted WhatsApp message!
4. **Comprehensive Branding Services**:
   - Brand Strategy & Positioning
   - Visual Identity & Logo Systems
   - Packaging & Print Systems
   - Digital Experience & UI/UX
   - Social Content & Launch Kits
   - Brand Evolution & Rebranding
5. **No External Build Tools Required**:
   - Zero `npm install` needed.
   - Opens immediately in any browser or static hosting environment.

---

## 🎨 Theme Customization & Configuration

All color tokens and styling variables are centralized at the beginning of [`assets/css/style.css`](assets/css/style.css).

### Default Variables (Dark Obsidian & Radiant Gold)

```css
:root {
  /* Primary Brand Accent (Matches the nib/lightbulb logo) */
  --color-primary: #F5BE0B;           /* Signature Radiant Gold */
  --color-primary-hover: #E5A505;     /* Darker gold for interaction */
  --color-primary-light: #FDE68A;     /* Soft gold for badges */
  --color-primary-glow: rgba(245, 190, 11, 0.28);
  --color-primary-subtle: rgba(245, 190, 11, 0.12);

  /* Backgrounds & Surfaces (Default: Dark Obsidian) */
  --color-bg: #0C0E14;                /* Deep Obsidian */
  --color-bg-secondary: #12151F;      /* Alternate section contrast */
  --color-surface: #171A26;           /* Cards & panels */
  --color-surface-hover: #1F2333;     /* Hover state */
  --color-surface-elevated: #24293C;  /* Elevated elements */

  /* Text & Typography */
  --color-text: #F8FAFC;              /* Clean white */
  --color-text-muted: #94A3B8;        /* Slate muted text */
  --color-text-dim: #64748B;          /* Tertiary text */
  --color-text-inverse: #0C0E14;      /* Text on primary buttons */

  /* Fonts */
  --font-heading: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```

### Alternate Palette Presets

To rebrand the site with an alternate color scheme in the future, simply update `--color-primary` and related variables in `:root`:

#### 1. Electric Cobalt Blue (Modern Tech/FinTech Branding)
```css
--color-primary: #2563EB;
--color-primary-hover: #1D4ED8;
--color-primary-glow: rgba(37, 99, 235, 0.3);
--color-primary-subtle: rgba(37, 99, 235, 0.12);
```

#### 2. Emerald Studio (Eco / Sustainable / Luxury)
```css
--color-primary: #10B981;
--color-primary-hover: #059669;
--color-primary-glow: rgba(16, 185, 129, 0.3);
--color-primary-subtle: rgba(16, 185, 129, 0.12);
```

#### 3. Crimson / Neon Coral (Bold / Fashion / Media)
```css
--color-primary: #FF3366;
--color-primary-hover: #E61E53;
--color-primary-glow: rgba(255, 51, 102, 0.3);
--color-primary-subtle: rgba(255, 51, 102, 0.12);
```

---

## 📞 Contact Information & Social Profiles

The contact details are configured consistently across the site:

| Channel | Value / URL | Location in Code |
| :--- | :--- | :--- |
| **Email** | `contact@imaginated.in` | `index.html` (header, contact card, form mailto, footer) |
| **Phone** | `+91 9080364386` | `tel:+919080364386` in header, cards, and footer |
| **WhatsApp Direct** | `+91 9080364386` | `https://wa.me/919080364386?text=...` |
| **Instagram** | `https://www.instagram.com/imaginated.in` | Social cards in contact section & footer |
| **LinkedIn** | `https://www.linkedin.com/company/imaginated` | Social cards in contact section & footer |

### How the WhatsApp Direct Feature Works:
1. **Quick Links**: All WhatsApp links use standard international format `919080364386` without spaces or plus signs:
   ```html
   <a href="https://wa.me/919080364386?text=Hi%20Imaginated,%20I'd%20like%20to%20discuss%20a%20branding%20project.">
   ```
2. **Form Bridge**: In `assets/js/main.js`, clicking **"Send Inquiry Directly Via WhatsApp"** reads the user's name, email, selected service, timeline, and message, formats them into a clean message, and opens WhatsApp automatically.

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Double click [`index.html`](index.html) or right click and choose your preferred browser (Chrome, Safari, Edge, Firefox).

### Option 2: Using Python's Built-in Server
Open your terminal in the project directory:
```bash
# For Python 3
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server Extension
1. Open the folder in VS Code.
2. Click **"Go Live"** in the status bar or right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 Deployment Options

Because this is a pure static website, it can be deployed for free on any platform in seconds:

### Deploy to GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and `/root` folder.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Deploy to Netlify
1. Drag and drop the `Imaginated-Website` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. Or connect the Git repository for automatic deployments on push.

### Deploy to Vercel
```bash
# Install Vercel CLI (optional)
npm i -g vercel
vercel
```
Or import the Git repo in the [Vercel Dashboard](https://vercel.com).

### Standard Web Hosting (cPanel / Apache / Nginx)
Upload the contents of this folder (`index.html`, `assets/`, `README.md`) directly into your server's `public_html` or web root directory.

---

## ⚡ Performance & Standards Compliance

- **Semantic HTML5**: Native tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Structured Data (Schema.org)**: Includes `ProfessionalService` JSON-LD schema for rich search engine indexing.
- **Accessibility (a11y)**: Focus indicators, high contrast text ratios, ARIA attributes (`aria-expanded`, `aria-label`, `aria-hidden`).
- **Zero Heavy Dependencies**: Pure CSS and modern vanilla JavaScript.

---

## 📄 License
© 2025 **Imaginated**. All rights reserved.  
*Let's Design the Dream.*

