# The Specialty Food Data Standards Cheat Sheet

**Live:** https://lailarallc.com/standards

GTIN anatomy, GDSN syndication, retailer item-setup requirements, and freight-class logic — one reference page for specialty food operators. The ops person setting up new items lives across a dozen tabs; this is the one bookmark that replaces them. Every fact verified against primary sources (GS1 GenSpecs, GS1 US, NMFC, retailer vendor guides). Verified June 2026.

## What it covers

- **Part 1 — Identification:** GTIN-12/13/14 anatomy, indicator digits, check digit algorithm with worked example, packaging hierarchy (each → inner → case → pallet), SSCC vs GTIN-14, UPC/GTIN terminology
- **Part 2 — Syndication:** GDSN in one diagram, data pool providers (Syndigo, Salsify, 1WorldSync — post-acquisition), the 11 attributes that cause most rejections, publication states and CIC statuses
- **Part 3 — Retailer Quick-Reference:** Walmart (Supplier One — replaced Item 360, Sep 2024), Costco, Whole Foods, UNFI, KeHE, Kroger — required hierarchy, portal name, one sharp gotcha per retailer
- **Part 4 — Compliance Horizon:** GS1 Sunrise 2027 (2D barcodes / GS1 Digital Link), FSMA 204 summary
- **Part 5 — Logistics Numbers:** NMFC/freight-class density table, DIM divisors, TiHi conventions, case cube math

## Stack

- Plain HTML/CSS — single static page, no build step
- SVG — GTIN anatomy and GDSN flow diagrams
- Playwright (playwright-core + system Chrome) — downloadable PDF via `scripts/render.js`

## Run

```
# No build step. Open locally:
open index.html

# Or serve with any static server:
npx serve .
python -m http.server 8000

# Render the PDF (outputs dist/lailara-data-standards-cheat-sheet.