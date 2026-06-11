# The Specialty Food Data Standards Cheat Sheet

**Live:** https://standards.lailarallc.com

GTIN anatomy, GDSN syndication, retailer item-setup requirements, and freight-class logic — one reference page for specialty food operators. The ops person setting up new items lives across a dozen tabs; this is the one bookmark that replaces them. Every fact verified against primary sources (GS1 GenSpecs, 1WorldSync docs, NMFC, retailer vendor guides). Verified June 2026.

## What it covers

- **Part 1 — Identification:** GTIN-12/13/14 anatomy, indicator digits, check digit algorithm with worked example, packaging hierarchy (each → inner → case → pallet), SSCC vs GTIN-14, UPC/GTIN terminology
- **Part 2 — Syndication:** GDSN in one diagram, 1WorldSync vs IX-ONE vs Syndigo, the ~15 attributes that cause most rejections, publication levels
- **Part 3 — Retailer Quick-Reference:** Walmart (Item 360), Costco, Whole Foods/UNFI, KeHE, Kroger — required hierarchy, portal name, one sharp gotcha per retailer
- **Part 4 — Compliance Horizon:** GS1 Sunrise 2027 (2D barcodes / GS1 Digital Link), FSMA 204 summary, date-label conventions
- **Part 5 — Logistics Numbers:** NMFC/freight-class density table, DIM divisor, TiHi conventions, case cube math

## Stack

- Plain HTML/CSS — single static page, no build step
- SVG — GTIN anatomy and GDSN flow diagrams
- Python/Quarto — downloadable PDF generation (separate build)

## Run

```
# No build step. Open locally:
open index.html

# Or serve with any static server:
npx serve .
python -m http.server 8000
```

---

Built by [Lailara LLC](https://lailarallc.com) — data hygiene and analytics consulting for specialty food brands scaling into national retail.
