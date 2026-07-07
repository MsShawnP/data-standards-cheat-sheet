# The Specialty Food Data Standards Cheat Sheet — One Bookmark Instead of a Dozen Tabs

**Live:** https://lailarallc.com/standards

GTIN anatomy, GDSN syndication, retailer item-setup requirements, and freight-class logic — one reference page for specialty food operators, with a downloadable PDF. Every fact verified against primary sources (GS1 GenSpecs, GS1 US, NMFC, retailer vendor guides). Verified June 2026.

## What it covers

- **Part 1 — Identification:** GTIN-12/13/14 anatomy, indicator digits, check digit algorithm with worked example, packaging hierarchy (each → inner → case → pallet), SSCC vs GTIN-14, UPC/GTIN terminology
- **Part 2 — Syndication:** GDSN in one diagram, data pool providers (Syndigo, Salsify, 1WorldSync — post-acquisition), the 11 attributes that cause most rejections, publication states and CIC statuses
- **Part 3 — Retailer Quick-Reference:** Walmart (Supplier One — replaced Item 360, Sep 2024), Costco, Whole Foods, UNFI, KeHE, Kroger — required hierarchy, portal name, one sharp gotcha per retailer
- **Part 4 — Compliance Horizon:** GS1 Sunrise 2027 (2D barcodes / GS1 Digital Link), FSMA 204 summary
- **Part 5 — Logistics Numbers:** NMFC/freight-class density table, DIM divisors, TiHi conventions, case cube math

## Why it matters

The ops person setting up new items lives across a dozen tabs — GS1 documentation, retailer portals, freight calculators — and one wrong indicator digit or misread hierarchy requirement becomes a rejected item form or a reclassified freight bill. Consolidating the verified facts onto a single page cuts item-setup errors at the source and gives small teams the reference that larger vendors reconstruct from tribal knowledge. Because every claim cites a primary source with a verification date, it can be trusted for real submissions, not just orientation.

## Quick start

```
# No build step. Open locally:
open index.html

# Or serve with any static server:
npx serve .
python -m http.server 8000

# Render the PDF (outputs dist/lailara-data-standards-cheat-sheet.pdf):
npm install
npm run pdf
```

## Tech stack

- **Plain HTML/CSS** — single static page, no build step
- **SVG** — GTIN anatomy and GDSN flow diagrams
- **Playwright** (playwright-core + system Chrome) — downloadable PDF via `scripts/render.js`

## Project structure

```
index.html    the entire cheat sheet
styles.css    print- and screen-optimized styles
diagrams/     SVG sources
scripts/      render.js (PDF generation)
dist/         rendered PDF output
fonts/        self-hosted webfonts
```

## License

MIT

---

Built by [Lailara LLC](https://lailarallc.com) — data hygiene and analytics consulting for specialty food brands scaling into national retail.
