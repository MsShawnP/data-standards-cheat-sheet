# Data Standards Cheat Sheet — PLAN

**Tier:** 4 (lead-gen / reference artifact)
**Status:** Shipped — lailarallc.com/standards · Phase 3 complete · June 11, 2026

---

## Current Focus

Maintenance — see Recurring maintenance section

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
- [x] Deploy to lailarallc.com/standards ✓ — June 11, 2026
  - Path deploy (not subdomain) per standing subdomain policy
  - Files live at site/public/standards/ in lailara-website repo
  - Update path: re-copy index.html, styles.css, diagrams/, and dist PDF (as data-standards-cheat-sheet.pdf) on any source change
- [x] Added to /work page — done in website repo (commit e0f4118), card under 'Compliance Guides'. NOTE: PLAN said 'Free Tools'; card landed under 'Compliance Guides' — placement TBD, separate website edit if it moves.
- [x] Update project-health tracker ✓ — June 11, 2026 (dep audit: 0 vulnerabilities; next due 2026-08-10)
- Launch post: write in chat against the live URL. Global rule: LinkedIn posts are never CC work.

---

## Deferred content (tracked, out of scope for current phase)

- [ ] **Part 4 — Date-label conventions** (Best By / Use By / Sell By / Pack Date) — verify against FDA guidance and retailer preferences before writing. Converted from an inline index.html TODO on June 12, 2026; the page carries no marker for this until the section is scoped.

---

## Recurring maintenance

- [ ] **DIM divisor re-verification** — annually each January (carriers publish rate updates Dec–Jan)
  - Re-fetch: ups.com DIM weight page, fedex.com rate guides, pe.usps.com/text/dmm300/Notice123.htm
  - Also re-verify: USPS Ground Advantage DIM weight status (sources conflicted June 2026 — unresolved)
  - Update HTML freshness footnote and verification_log.md Part 5 DIM section

---

## Follow-up edits (cross-repo — cannot execute in this project session)

- [x] **Reverse link: rejection article → Part 2** — done in website repo (commit e0f4118, June 11 2026). Sentence added before Lailara CTA in "Find the mismatches before the pool does." URL used: `/standards#syndication` (path-based, not the stale subdomain listed above).

---

## Open Questions

- [x] Subdomain vs path — RESOLVED: lailarallc.com/standards (path deploy, June 11 2026)
- [x] Gate PDF or fully open — RESOLVED: fully open, plain download link; email gate deferred until Buttondown is wired (see DECISIONS.md)
- [ ] EDI document-type section: include or keep in toolkit pieces
- [ ] Refresh cadence commitment — quarterly?
