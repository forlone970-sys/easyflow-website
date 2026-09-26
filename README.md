
# EasyFlow — Official Startup Portfolio Website

> **"Turning Ideas Into Intelligent Solutions."**  
> *Innovative Technology. Simplified Experiences.*

---

## Overview

**EasyFlow** is a technology startup focused on transforming practical ideas into intuitive, intelligent digital solutions. Through a focused portfolio of applications, EasyFlow aims to simplify everyday tasks, enhance digital accessibility, and make technology effortlessly useful in people's lives.

This repository contains the complete, production-grade source code for the official EasyFlow startup portfolio website.

---

## Application Portfolio

| Application | Category | Description | Status |
| :--- | :--- | :--- | :--- |
| **MediMate** | Healthcare / Medication Management | Intelligent medication reminder & adherence tracking with Medication Passport and Caregiver Linkage. | Coming Soon |
| **RoomVault** | Digital File Management | Purpose-built digital file rooms with QR code/passcode access and organized 2 GB upload tier. | Prototype Concept |
| **Zaiqa AR** | Augmented Reality / Food & Dining | Interactive AR menus bringing regional culinary dining experiences into realistic 3D. | In Development |
| **PetroPlan** | Navigation / Fuel Planning | Map-based travel planning and fuel management for informed journeys and seamless road travel. | Prototype Concept |

---

## Core Brand Principles

1. **Innovation** — Turning practical ideas into useful digital products.
2. **Simplicity** — Designing technology around real user needs.
3. **Accessibility** — Making digital experiences easier to understand and use.

---

## Leadership

- **Basil Imran** — Founder & CEO
- **Shehzad Ali** — Co-Founder & CFO

---

## Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans & Inter
- **Deployment Target**: Static export compatible with GitHub Pages and Custom Domains

---

## Local Development

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

1. **Install dependencies**:
   ```bash
   npm install
   ```
   *(On Windows PowerShell with script execution restrictions, use `npm.cmd install`)*

2. **Start development server**:
   ```bash
   npm run dev
   # or: npm.cmd run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

---

## Production Build

To compile and bundle the production-ready static website:

```bash
npm run build
# or: npm.cmd run build
```

The compiled files will be output to the `dist/` directory:
- `dist/index.html`
- `dist/assets/` (bundled CSS, JavaScript, and optimized logo assets)

To preview the production build locally:
```bash
npm run preview
# or: npm.cmd run preview
```

---

## GitHub Pages Deployment

The build is configured with `base: './'`, ensuring all assets, scripts, and stylesheets load seamlessly whether hosted on a repository subpath (e.g. `https://<username>.github.io/easyflow-website/`) or a future custom domain (e.g. `https://easyflow.co`).

---

## Contact

- **Official Support Email**: [support.easyflow@gmail.com](mailto:support.easyflow@gmail.com)

---

&copy; 2026 EasyFlow. All rights reserved. Built with purpose & precision.



