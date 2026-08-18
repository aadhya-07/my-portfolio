# Aadhya Sharma — Portfolio Website

A cinematic personal portfolio site for **Aadhya Sharma** (third-year B.Tech CS student), built with **plain HTML, CSS, and JavaScript** — no framework, no build step.

## Content status

- Real details applied: name, age (19), qualification, coursework-lab projects, skills, stats.
- Projects are honestly framed as **academic coursework/labs in progress** — no invented completed projects or fake links.
- Contact: GitHub, Email, and Instagram only. Handles are clearly marked placeholders (`[github]`, `[email]`, `[instagram]`) — replace them with real URLs when available.

## Features

**Cinematic base**
- Dark cinematic theme with animated aurora gradient + vanilla-JS canvas starfield background.
- Animated hero with gradient-shimmer headline (Sora / Space Grotesk via Google Fonts) and staggered fade/slide-in on load.
- Scroll-reveal sections and cards via `IntersectionObserver` (fade + translate, staggered).
- 3D tilt-on-hover project cards with a pointer-driven glow.
- Glassmorphism panels, glowing gradient accents, animated gradient borders/underlines, hover-glow buttons.
- Active-section nav highlight with smooth scrolling; mobile nav toggle (hamburger).

**Premium interactions (Upgrade 2)**
- ★ Soft **cursor glow** that follows the mouse (desktop fine-pointer only; hidden on touch + reduced-motion).
- ★ Cinematic **preloader** overlay with progress bar that fades out on load.
- ★ **Hero typing effect** cycling roles (B.Tech CS Student / Problem Solver / C++ & Python Learner / Future Engineer) with blinking caret.
- Scroll **progress bar** at top + custom-styled scrollbar.
- Infinite **marquee/ticker** of tech skills (CSS, pause on hover).
- **Magnetic buttons** — hero CTAs pull toward the pointer.
- **Parallax** on the aurora orbs, scroll-linked and rAF-throttled.
- **Stat counters** that count up when scrolled into view.
- **Animated skill bars** that fill when scrolled into view.
- **Card hover beam sweep** + border glow layered on top of the 3D tilt.

**Accessible & responsive**: fully respects `prefers-reduced-motion` (disables canvas, cursor glow, tilt, typing, parallax, counters, bars, reveals, aurora drift), touch-safe, semantic markup, ARIA on nav.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Single-page markup (hero, about, skills, projects w/ filter, contact) |
| `styles.css` | Cinematic responsive theme, glassmorphism, reduced-motion support |
| `script.js` | Canvas starfield, scroll-reveal, 3D tilt, active-nav, mobile nav, filter |
| `vercel.json` | Vercel static deploy config |
| `netlify.toml` | Netlify static deploy config |

## Local preview

Serve the folder with any static server. Examples:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then open http://localhost:8000.

## Deploy

This site is a static bundle. Deploy configs are included but **no live deploy is performed** — you control when and where it goes live.

- **Vercel:** import the repo/folder. `vercel.json` already sets `outputDirectory: "."` (root). No build command needed.
- **Netlify:** drag-and-drop the folder, or connect the repo. `netlify.toml` publishes the root directory.

## Customizing

1. Edit `index.html` — replace the `[email]`, `[github]`, `[instagram]` placeholders with real URLs.
2. Tweak colors in `styles.css` via the `:root` CSS variables.
3. Re-test locally, then deploy when ready.
