# CONTENT.md — Portfolio Content Guide

This guide tells you exactly what real content to drop into the portfolio in
`index.html` to replace the `Your Name`, `you@example.com`, and placeholder
copy. Skim it, fill the blanks, tick the checklist at the bottom before going
live.

> Everything in `*`italics*` below is an **example** — replace it with your own
> facts. Nothing here invents details about you.

---

## 1. Hero (top of page)

- **Name** — your real name (shown as "Hi, I'm <name>."). Replace `Your Name`
  in the `<title>`, the brand link, the `<h1>`, and the footer.
- **Tagline** — one punchy sentence on what you do. ~8–12 words.
  - *Example: "I design and build fast, accessible websites for small teams."*

Fill in: `index.html` `<h1>`, `.tagline`, `<title>`, brand, footer year text.

---

## 2. About bio

2–3 friendly sentences. Cover: who you are, your focus area (front-end,
design, data, etc.), and what you're working on / learning now.

**Good vs weak (bio):**

> ✅ **Good:** "I'm a front-end developer who turns messy designs into calm,
> fast interfaces. I care about accessibility and web performance, and right
> now I'm learning WebGL to add subtle motion to product sites."

> ❌ **Weak:** "I am a hard-working person who loves coding and technology.
> I have many skills and want to help your company succeed."

---

## 3. Projects (3 cards)

For **each** of the three project cards, provide:

- **Title** — the project's name.
- **Description** — 2–3 sentences: what it does and the problem it solves.
- **Tech** — the stack/frameworks used (e.g. `React, TypeScript, Node`).
- **Repo link** — source code URL (or `#` if private).
- **Demo link** — live site / preview URL.
- **Impact metric** (optional but recommended) — one concrete number:
  users, load-time improvement, % conversion, etc.
  - *Example: "Cut page load from 4.2s to 1.1s."*

**Good vs weak (one project):**

> ✅ **Good — "Budget Buddy":** "A privacy-first expense tracker that categorizes
> spending with zero server storage. Built to help freelancers see where their
> money goes in under a minute a day. Shipped to 1,200 users in its first quarter."

> ❌ **Weak — "Project Two":** "A cool app that does stuff with data. It uses
> modern technologies and has many features. Click to learn more."

Fill in: each `<article class="card">` (`<h3>`, description `<p>`, `.meta`
tech, the two `View →`/`href` links).

---

## 4. Skills

A short, honest list grouped by category. Aim for 6–12 skills total — don't
pad it. Mirror what you'll show in projects so it stays consistent.

- *Languages:* JavaScript, TypeScript, Python
- *Front-end:* React, CSS, accessibility (WCAG)
- *Tools:* Git, Figma, Vercel/Netlify

> Note: `index.html` has no dedicated Skills section yet — if you want one,
> ask the site builder (Pam) to add a `#skills` section, or list skills inside
> the About copy for now.

---

## 5. Contact

- **Email** — real address replacing `you@example.com` (used in the
  `mailto:` link and the Contact paragraph).
- **GitHub** — profile URL (replace the `#` in the Contact links).
- **LinkedIn** — profile URL.
- **Twitter / X** — optional; leave out the line if you don't use it.

---

## Pre-launch checklist

- [ ] Name replaced in `<title>`, brand, `<h1>`, and footer
- [ ] Hero tagline written (not the placeholder)
- [ ] About bio is 2–3 real sentences, no "lorem"/placeholder text
- [ ] All 3 project cards have title, description, tech, and real links
- [ ] At least one project has a concrete impact metric
- [ ] Contact email is real and the `mailto:` works
- [ ] GitHub + LinkedIn links point to your profiles (Twitter line removed if unused)
- [ ] No `Placeholder` / `Your Name` / `you@example.com` strings remain in `index.html`
- [ ] Local preview opened in a browser and looks right on mobile width
