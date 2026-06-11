# Decisions

## 2026-06-10 — Plain HTML/CSS over Astro

Plain HTML/CSS, no build step.

**Why:** The brief calls this a "wall chart" — a single static reference page with no interactive tools, no component reuse, no dynamic data. Astro adds a build pipeline and dependency surface with zero benefit for one file. Flat HTML is faster to iterate, simpler to deploy anywhere, and has no toolchain to break.

**How to apply:** Do not add a build step, package.json, or framework unless the scope changes materially (e.g., multi-page site, interactive components).
