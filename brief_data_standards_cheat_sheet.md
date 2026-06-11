# Portfolio Project Brief: Specialty Food Data Standards Cheat Sheet

**Created:** June 10, 2026
**Source:** `portfolio_priority_list_gtd.md` Next list
**Template:** `portfolio_brief_template.md`

**Status:** Brief stage
**Tier:** 4 (lead-gen / reference artifact)
**Priority:** Next #4 — deliberately small; the palate cleanser between two large builds and the Question Engine. Pure SEO/shareability play.

### 1. The Pain

Not a margin pain — a friction pain. The ops person setting up items lives across a dozen tabs: GS1 GenSpecs, 1WorldSync help docs, retailer vendor guides, a freight class PDF from 2019. The basics — GTIN check digit math, which GTIN level goes on which form, GDSN attribute names, what Sunrise 2027 actually requires, how density maps to NMFC class — are scattered and wrapped in vendor marketing. There is no single, accurate, free reference written for a food brand operator.

- **Who feels it:** the item-setup person, EDI coordinator, ops manager. Not the CEO — and that's fine; this piece recruits the *influencer*, not the buyer.
- **When:** constantly, at every brand size.

#### The Status Quo

Bookmarks, tribal knowledge, asking the broker, copying last time's form.

### 2. Why This Piece

- Compounds every shipped piece: it's the reference layer under GTIN Validator, Pre-flight (both), Dimension & Weight, and the Product Master model — and links to all of them contextually.
- SEO surface: operators Google exactly these questions ("GTIN-12 vs GTIN-14," "check digit calculator," "Sunrise 2027 requirements," "freight class for sauces"). GTIN Validator already proved this inbound channel works.
- Near-zero build cost; high shareability; fills the gap between large builds without losing momentum.

### 3. The Portfolio Piece

**Working title:** *The Specialty Food Data Standards Cheat Sheet* (it's a reference — the title should be literal and searchable)

A single, dense, beautifully organized reference page + downloadable PDF. Not an article — a wall chart.

#### Structure

- **Part 1 — Identification:** GTIN anatomy (GTIN-12/13/14, indicator digits, check digit algorithm with worked example), the packaging hierarchy (each/inner/case/pallet, which GTIN where), SSCC vs GTIN-14, UPC vs GTIN terminology cleanup.
- **Part 2 — Syndication:** GDSN in one diagram, 1WorldSync vs IX-ONE vs Syndigo (what each actually is), the ~15 attributes that cause most rejections, publication levels.
- **Part 3 — Retailer quick-reference:** a table — Walmart (Item 360), Costco, Whole Foods/UNFI, KeHE, Kroger — keyed unit, required hierarchy, portal/system name, notorious gotcha for each.
- **Part 4 — Compliance horizon:** GS1 Sunrise 2027 (2D barcodes/GS1 Digital Link), FSMA 204 one-paragraph summary (link forward to Recall Blast Radius), date-label conventions.
- **Part 5 — Logistics numbers:** NMFC/freight class density table, DIM divisor explainer, TiHi conventions, case cube math. (Cross-link Dimension & Weight Integrity.)

Every section ends with a "tool for this" link into the portfolio.

#### The Margin Math

Indirect — this piece's currency is bookmarks and backlinks, not dollar claims. The one number worth including: a rejected item setup ≈ 2–6 weeks launch delay (link to Cost of Saying Yes for the cash translation).

#### Before / After

- **Before:** twelve tabs and a 2019 PDF.
- **After:** one bookmark.

#### Who Else Sees This?

- **Primary:** ops/item-setup people (the sharers).
- **Secondary:** their bosses — the actual buyers — when the footer and tool links do their work.
- **Shared:** Slack-pasted between ops people; linked from forums/communities.

### 4. Technical Specification

- **Repo:** `food-data-standards-cheatsheet` — "GTIN, GDSN, retailer item setup, and freight class — one reference page for specialty food operators."

| Tool | Role |
|------|------|
| Astro (or plain HTML/CSS) | The reference page |
| Python/Quarto | PDF generation from the same source |
| SVG/D3 | GTIN anatomy + GDSN flow diagrams |

#### Deliverables

| Deliverable | Format | Purpose |
|------------|--------|---------|
| Reference page | Web, anchor-linked sections | SEO + bookmark target |
| Wall-chart PDF | Download | The shareable; print-friendly |
| Diagrams | SVG | Reusable across LinkedIn/site |

#### Deployment

`standards.lailarallc.com` or `lailarallc.com/standards` (path on main domain better for SEO authority — decide). Found organically; cross-linked from every tool.

#### Simulated Data Sources

None — pure reference content. **Every fact verified against primary sources at build time:** gs1.org GenSpecs, 1WorldSync docs, retailer vendor guides, NMFC. This piece lives or dies on accuracy.

### 5. Skills Demonstrated

Domain mastery, the judgment to compress it, and information design. (Subtle but real: practitioners judge consultants by their reference materials.)

### 6. Foot-in-the-Door Offering

None directly — this is top-of-funnel. Its job is routing: every section links to the relevant tool, and the tools route to engagements. Footer carries the standard consulting pitch.

#### Client Lift / DIY Defense

N/A — it's free and meant to be used. The "defense" is that the cheat sheet demonstrates the depth behind the paid work.

### 7. Marketing / Distribution

- **Portfolio:** listed under Free Tools on /work.
- **LinkedIn:** post the GTIN-anatomy diagram. Hook: "Every item setup form you've ever filled out, explained on one page."
- **SEO:** this IS the SEO play — target the question-shaped queries. Anchor-linked sections rank individually.
- **Lead capture:** keep the page fully open; optionally email-gate only the print PDF. Decide against gating if it suppresses sharing.

### 8. Competitor / Existing Content Scan

GS1's own materials (authoritative, unreadable), vendor blogs (Salsify/Syndigo — marketing first), random consultant LinkedIn posts (shallow). **Gap:** practitioner-grade, vendor-neutral, food-specific, one page. **Angle:** written by someone who fills these forms, not someone selling the PIM.

### 9. Cinderhaven Integration

Light — use CHP-0009 as the worked example throughout (its GTIN for the check-digit walkthrough, its dims for the freight-class example). Continuity with Dimension & Weight's hero SKU.

### 10. Tactical Notes

- **Accuracy over completeness.** One wrong check digit or stale Sunrise date kills it. Verify everything; date-stamp the page ("verified June 2026") and commit to refreshing it.
- Resist scope creep into an article. It's a chart.
- The retailer gotcha column is the personality — one sharp, true sentence per retailer.

#### The Credibility Marker

The indicator-digit explanation done correctly, and the retailer gotcha column — both unfakeable without having done the work.

#### Data Paranoia / Security

None.

### 11. Open Questions

- [ ] Subdomain vs main-domain path (SEO question — lean main domain)
- [ ] Gate the PDF or not
- [ ] Include EDI document-type quick reference (one more section) or keep EDI in the toolkit pieces
- [ ] Refresh cadence commitment (quarterly?)

### 12. Build Estimate

- **Effort:** Small (1 session; the cost is verification, not code)
- **Dependencies:** none
- **New skills:** none

#### Out of Scope

- No interactive tools embedded (link to them instead)
- No retailer-by-retailer full requirement dumps (that's Pre-flight's schema library)
- No blog-style narrative


---
## Cross-brief notes

- **Canonical governance applies to all five.** Briefs 2 and 3 generate new data (genealogy, X12 corpus): new isolated seeds, registered in `CINDERHAVEN_CANONICAL.md`, drift-guard coverage, injected-error ledgers as validation ground truth. Briefs 1, 4, 5 generate none and must reconcile exactly.
- **Hero SKU continuity:** CHP-0009 is the worked example in briefs 1 and 4; candidate hero lot for brief 2.
- **Research tasks before any build:** FSMA 204 current enforcement dates + retailer mandates (brief 2); GS1 Sunrise 2027 current status (brief 4). Both verified at build time, not from memory.
- **Sequencing within the five:** 1 → 2 → 3 → 4 → 5 as listed. Brief 4 can float anywhere as filler. Brief 5 wants 2 and 3 done first or ships with two stubbed questions.
