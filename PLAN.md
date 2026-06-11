# Data Standards Cheat Sheet — PLAN

**Tier:** 4 (lead-gen / reference artifact)
**Status:** Part 3 closed — Part 2 (Syndication) is the next content block

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
- [ ] 1WorldSync docs — GDSN attribute list (the ~15 rejection triggers), publication levels
- [x] NMFC tariff — freight class density breakpoints (Docket 2025-1, July 2025) ✓
- [ ] DIM weight divisors — standard (139) and carrier-specific variants
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
- [ ] Part 2 — Syndication
- [x] Part 3 — Retailer Quick-Reference table ✓ — closed June 10, 2026
- [x] Part 4 — Compliance Horizon (Sunrise 2027 + FSMA 204) ✓
- [x] Part 5 — Logistics Numbers (NMFC table ✓ · DIM/TiHi/case cube still TODO)
- [ ] GTIN anatomy SVG diagram
- [ ] GDSN flow SVG diagram
- [ ] Cross-links to portfolio tools in each section

### Phase 3 — Polish & Publish

- [ ] Print CSS review (@page, running footer, SVG rendering)
- [ ] Mobile layout pass (640px breakpoint)
- [ ] PDF generation (Python/Quarto — separate session)
- [ ] Date-stamp: "verified June 2026" in page header
- [ ] Deploy to standards.lailarallc.com (or path — see DECISIONS.md)
- [ ] Add to portfolio /work page under Free Tools
- [ ] Update project-health tracker
- [ ] LinkedIn post — hook: "Every item setup form you've ever filled out, explained on one page."

---

## Open Questions

- [ ] Subdomain (standards.lailarallc.com) vs path (lailarallc.com/standards) — lean path for SEO authority
- [ ] Gate PDF or fully open — lean open to maximize sharing
- [ ] EDI document-type section: include or keep in toolkit pieces
- [ ] Refresh cadence commitment — quarterly?
