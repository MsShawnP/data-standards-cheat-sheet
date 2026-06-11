# Data Standards Cheat Sheet — PLAN

**Tier:** 4 (lead-gen / reference artifact)
**Status:** Parts 1–5 complete · Phase 3 pending

---

## Current Focus

Phase 2 — Content & Verification

---

## Tasks

### Phase 1 — Scaffold ✓
- [x] Brief written
- [x] Project scaffold (README, state files, HTML/CSS skeleton)
- [x] Lailara DS tokens and typography in styles.css

### Phase 2 — Content & Verification (the expensive part)

**Verify against primary sources before writing any fact:**

- [x] GS1 GenSpecs — GTIN anatomy, indicator digit table, check digit algorithm ✓
- [x] GS1 Sunrise 2027 — current status, exact requirements, enforcement date ✓
- [x] GDSN attribute list, provider comparison, publication states ✓ — verified June 11, 2026 (see verification_log.md § Part 2)
- [x] NMFC tariff — freight class density breakpoints (Docket 2025-1, July 2025) ✓
- [x] DIM weight divisors — standard (139) and carrier-specific variants ✓ — verified June 11, 2026
- [x] FSMA 204 — enforcement date July 20, 2028 (extended from Jan 2026 by Congressional directive) ✓
- [x] Retailer vendor guides — all verified, Part 3 closed June 2026 ✓
  - [x] Walmart — Supplier One (replaced Item 360 Sept 2024), hierarchy, gotcha [confirmed via search-result text]
  - [x] Costco — Vendor Hub (hub.costco.com); meta-gotcha [corroborated secondary]
  - [x] Whole Foods / UNFI — WFM: VIP + Amazon Grocery Central (US login-gated; no gotcha); UNFI: SVHarbor + GLN gotcha [primary]
  - [x] KeHE — CONNECT®, GTIN-14 hierarchy [corroborated secondary — full 18-page PDF is show-order workflow]
  - [x] Kroger — KIA (Syndigo/Salsify/1WorldSync); Our Brands + Harris Teeter = Syndigo only [primary]
  - [x] Verification log written → verification_log.md

**Write content (after verification):**

- [x] Part 1 — Identification ✓
- [x] Part 2 — Syndication ✓ — closed June 11, 2026
- [x] Part 3 — Retailer Quick-Reference table ✓ — closed June 10, 2026
- [x] Part 4 — Compliance Horizon (Sunrise 2027 + FSMA 204) ✓
- [x] Part 5 — Logistics Numbers ✓ — closed June 11, 2026
- [x] GTIN anatomy SVG diagram ✓ — June 11, 2026 (diagrams/gtin-anatomy.svg; two rows: indicator-1 case GTIN 10614140000010, padded GTIN-12 00614140000099; check digits verified via seed_config.py algorithm)
- [x] GDSN flow SVG diagram ✓ — June 11, 2026 (diagrams/gdsn-flow.svg; CIC states match §2.4 exactly)
- [x] Cross-links to portfolio tools in each section ✓ — June 11, 2026 (gtin.lailarallc.com, preflight.lailarallc.com, dimensions.lailarallc.com)

### Phase 3 — Polish & Publish

- [x] Print CSS review ✓ — June 11, 2026 (merged @page blocks, added img/break-inside rules, SVGs confirmed rendering)
- [x] Mobile layout pass ✓ — June 11, 2026 (body 15px, h3 16px, table 13px at 375px; SVGs 343px wide)
- [x] Date-stamp: "Verified June 2026" in page header ✓ (already present)
- [x] PDF generation ✓ — June 11, 2026
  - Renderer: playwright-core + system Chrome 149 (no separate browser download)
  - Command: `npm run pdf` → `dist/lailara-data-standards-cheat-sheet.pdf`
  - File size: 643 KB (0.63 MB) — email-safe
  - Text diff: 3 tokens hidden (TOC, verified-stamp); tool links visible in print with URL reveal — no unintentional content loss
- [ ] Deploy to standards.lailarallc.com (or path — see DECISIONS.md)
- [ ] Add to portfolio /work page under Free Tools
- [ ] Update project-health tracker
- [ ] LinkedIn post — hook: "Every item setup form you've ever filled out, explained on one page."

---

## Recurring maintenance

- [ ] **DIM divisor re-verification** — annually each January (carriers publish rate updates Dec–Jan)
  - Re-fetch: ups.com DIM weight page, fedex.com rate guides, pe.usps.com/text/dmm300/Notice123.htm
  - Also re-verify: USPS Ground Advantage DIM weight status (sources conflicted June 2026 — unresolved)
  - Update HTML freshness footnote and verification_log.md Part 5 DIM section

---

## Follow-up edits (cross-repo — cannot execute in this project session)

- [ ] **Reverse link: rejection article → Part 2**
  - File: `~/projects/reference/lailara-blog-engine/blog-posts/2026-06-09-gdsn-attribute-errors-retailer-rejection/article.md`
  - Section: "Find the mismatches before the pool does" (final section, before the Lailara CTA paragraph)
  - Add this sentence: "For a reference covering all GDSN rejection attributes, provider comparison, and publication states, see [Part 2 — Syndication](https://standards.lailarallc.com/#syndication) in the Data Standards Cheat Sheet."

---

## Open Questions

- [ ] Subdomain (standards.lailarallc.com) vs path (lailarallc.com/standards) — lean path for SEO authority
- [ ] Gate PDF or fully open — lean open to maximize sharing
- [ ] EDI document-type section: include or keep in toolkit pieces
- [ ] Refresh cadence commitment — quarterly?
