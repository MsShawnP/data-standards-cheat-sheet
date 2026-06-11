# Data Standards Cheat Sheet — Verification Log

All published claims documented here by section. Confidence levels:
**Primary** (directly read from official source) | **Corroborated secondary** (secondary source quoting official claim) | **Confirmed via search-result text** (URL/title confirmed in search, content not directly read) | **Removed** (excluded; reason noted)

---

# Part 5 — Logistics Numbers

Last updated: June 11, 2026

## DIM Weight Divisors

Source-upgrade attempted June 11, 2026: ups.com timed out (twice); fedex.com/rate-guides returned 403; USPS threshold confirmed primary via pe.usps.com. UPS and FedEx divisors remain corroborated secondary — primary paywalled/gated per WFM-cell convention.

| Claim | Source | Date | Confidence |
|---|---|---|---|
| UPS daily/account rates: divisor 139 (Ground, 2nd Day Air, Next Day Air) | packcalc.com/resources/dimensional-weight-dim-vs-actual-weight-guide (March 2026, directly fetched); packizon.com/carrier-dim-weight-divisors/ (directly fetched). ups.com timed out — carrier primary unreachable. | June 11, 2026 | Corroborated secondary — primary paywalled/gated |
| UPS retail/walk-in rates (no contract): divisor 166 | Same sources | June 11, 2026 | Corroborated secondary — primary paywalled/gated |
| FedEx domestic (Ground, Home Delivery, Express): divisor 139 | packcalc.com, packizon.com (both directly fetched). fedex.com returned 403. | June 11, 2026 | Corroborated secondary — primary paywalled/gated |
| USPS threshold: DIM weight applies when package exceeds 1 ft³ (1,728 in³) | **pe.usps.com/text/dmm300/Notice123.htm — directly fetched; explicit quote: "parcels that exceed one cubic foot (1728 cubic inches) are charged based on actual weight or dimensional weight, whichever is greater"** | June 11, 2026 | **Primary source** |
| USPS: divisor 166 | Pirate Ship (pirateship.com, directly fetched); cargotools.online (directly fetched); packizon.com. Not specified in pe.usps.com Notice123 content returned by fetch. | June 11, 2026 | Corroborated secondary |
| USPS services covered: Priority Mail and Priority Mail Express confirmed | Confirmed across all sources fetched | June 11, 2026 | Corroborated secondary |
| USPS Ground Advantage DIM weight status | **CONFLICT — sources disagree:** Pirate Ship (USPS partner) says subject to DIM weight; cargotools.online (2026 article) says "actual weight only." HTML row conservatively says "verify at usps.com." Do NOT upgrade this claim without fetching current USPS DMM section 280. | June 11, 2026 | Removed from HTML — conflict unresolved |
| LTL freight: does not use a DIM divisor; uses density → freight class | Multiple sources; consistent with NMFC framework already documented | June 11, 2026 | Corroborated secondary |
| August 18, 2025 change (UPS & FedEx): both carriers now round every fractional inch up before calculating DIM weight | supplychaindive.com/news/ups-dimensional-weight-rounding-change/756929/ (directly fetched, June 11, 2026); cites direct UPS website statement: "If the length of a package is 11.1 inches, that package will be deemed to have a length of 12 inches." | June 11, 2026 | Corroborated secondary (trade publication citing carrier statement) |
| Billable weight = MAX(actual weight, DIM weight) | Standard carrier billing rule; confirmed via packcalc.com and packizon.com | June 11, 2026 | Corroborated secondary |

## TiHi

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Ti = cases per layer on a pallet | Wikipedia (en.wikipedia.org/wiki/TI-HI, directly fetched); packcalc.com | June 11, 2026 | Corroborated secondary |
| Hi = number of layers stacked high | Same sources | June 11, 2026 | Corroborated secondary |
| Total cases per pallet = Ti × Hi | Same sources | June 11, 2026 | Corroborated secondary |
| Retailers validate pallet configuration (TiHi), not just case count; mismatched TiHi triggers chargebacks even when total count is correct | packcalc.com/resources/ti-hi-calculator-explained; corroborated by vimaan.ai | June 11, 2026 | Corroborated secondary |

## Case Cube

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Case Cube (ft³) = L × W × H (inches) ÷ 1,728 | sciencing.com/calculate-case-cube-box-5017059.html (directly fetched) | June 11, 2026 | Corroborated secondary |
| 1,728 = 12 × 12 × 12 (one cubic foot in cubic inches) | Same source; mathematical identity | June 11, 2026 | Corroborated secondary |
| Case cube used for warehouse slotting, pallet-build planning, TiHi calculation | Same source; consistent with industry standard usage | June 11, 2026 | Corroborated secondary |

---

# Part 2 — Syndication

Last updated: June 11, 2026

## GDSN architecture

| Claim | Source | Date | Confidence |
|---|---|---|---|
| GS1 International sets GDSN standards (GTIN formats, GLN registrations, GPC codes, mandatory attribute lists); pool operators run routing infrastructure | gs1.org/standards/gdsn (referenced in both Syndigo migration blog posts; direct fetch returned 403) | June 11, 2026 | Corroborated secondary |
| GDSN does not carry pricing, terms, or retailer-specific promotional fields | SPS Commerce (spscommerce.com/community/articles/gdsn-data-synchronization), via Syndigo migration blog posts | June 11, 2026 | Corroborated secondary |

## Provider table

### Syndigo

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Acquired 1WorldSync, September 2025 | syndigo.com/news/syndigo-acquires-1worldsync/ — directly cited in both Syndigo blog posts (already logged) | June 11, 2026 | Primary (carry-in) |
| 97% of US GLNs post-acquisition; 44% of world's GLNs | syndigo.com/blog/legacy-gdsn-challenges/ (already logged) | June 11, 2026 | Primary (carry-in) |
| Covers 90% of top 20 US retailers | syndigo.com/news/syndigo-acquires-1worldsync/ (already logged) | June 11, 2026 | Primary (carry-in) |
| Pre-merger legacy pool publication success ~70%; Syndigo claims 90% | syndigo.com/blog/legacy-gdsn-challenges/ (already logged) | June 11, 2026 | Primary (carry-in) |
| Existing 1WorldSync contracts honored; phased migration, no public dates | syndigo.com/1worldsync/syndigo-1worldsync-integration-faq/ (already logged) | June 11, 2026 | Primary (carry-in) |
| Kroger Our Brands and Harris Teeter: Syndigo only | Already in log — Part 3, June 10, 2026 | June 10, 2026 | Primary (carry-in) |
| Pricing model varies: revenue-based, SKU-count, or per-recipient tiers | SPS Commerce (already logged) | June 11, 2026 | Corroborated secondary (carry-in) |

### Salsify

| Claim | Source | Date | Confidence |
|---|---|---|---|
| GS1-certified GDSN data pool | salsify.com/pxm/gdsn — directly fetched; page states: "Salsify's GDSN Data Pool is certified by the GS1 Global Data Synchronization Network" | June 11, 2026 | **Primary source** |
| Operates own pool, independent from Syndigo | salsify.com/pxm/gdsn — "Salsify operates its own GDSN data pool" | June 11, 2026 | **Primary source** |
| Interoperable with other GDSN data pools | salsify.com/pxm/gdsn — "connect your supply chain content to any trading partner...regardless of what data pool they're using" | June 11, 2026 | **Primary source** |
| Broader PIM and product experience management platform | salsify.com/pxm/gdsn — "unified platform combining GDSN with PIM and syndication capabilities" | June 11, 2026 | **Primary source** |
| AI-powered FeedbackIQ for GDSN troubleshooting | salsify.com/pxm/gdsn | June 11, 2026 | **Primary source** |
| Kroger KIA certified provider | thekrogerco.com KIA FAQ (April 3, 2025) — carry-in from Part 3 | June 10, 2026 | Primary (carry-in) |
| Pricing: not publicly available | salsify.com/pxm/gdsn — no pricing information on page | June 11, 2026 | **Primary source** (confirmed absence) |
| ~~56,000+ GTINs created; 500+ unique destinations~~ | Web search-result snippet — salsify.com/pxm/gdsn did NOT contain this figure | — | **REMOVED** — stat appeared in search-result text only; excluded per sourcing discipline |

### 1WorldSync (now Syndigo)

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Absorbed by Syndigo, September 2025; phased migration, no public dates | syndigo.com/news/syndigo-acquires-1worldsync/ and syndigo.com/1worldsync/syndigo-1worldsync-integration-faq/ (carry-in) | June 11, 2026 | Primary (carry-in) |
| Still listed as separate Kroger KIA certified provider in April 2025 FAQ | thekrogerco.com KIA FAQ (April 3, 2025) — carry-in from Part 3 | June 10, 2026 | Primary (carry-in) |
| Kroger FAQ not updated as of June 2026 to reflect consolidation | No updated KIA FAQ found in research | June 11, 2026 | Confirmed via absence |

## Rejection attributes (§2.3)

| Attribute | Source | Date | Confidence |
|---|---|---|---|
| Brand name mismatch | lailarallc.com/blog/gdsn-attribute-errors-retailer-rejection, citing syndigo.com/blog/top-gdsn-data-errors/ | June 11, 2026 | Corroborated secondary |
| GLN missing (manufacturer, information provider, brand owner — all three) | Same | June 11, 2026 | Corroborated secondary |
| GTIN hierarchy wrong or unregistered | Same, citing spscommerce.com/community/articles/how-retailers-can-fix-supplier-item-data-at-the-source | June 11, 2026 | Corroborated secondary |
| Barcode type mismatch (gs1TradeItemIdentificationKeyValue) | Same, citing syndigo.com/blog/top-gdsn-data-errors/ | June 11, 2026 | Corroborated secondary |
| Measurement unit inconsistency | lailarallc.com/blog/gdsn-attribute-errors-retailer-rejection (no explicit external citation) | June 11, 2026 | Corroborated secondary |
| Allergen declarations missing/incomplete (food categories) | Same — "A missing allergen field doesn't just fail validation — it flags a compliance gap that some retailers escalate" | June 11, 2026 | Corroborated secondary |
| Net content missing or misformatted | Same, citing syndigo.com/blog/top-gdsn-data-errors/ | June 11, 2026 | Corroborated secondary |
| Packaging material type wrong or absent | Same, citing syndigo.com/blog/top-gdsn-data-errors/ (enumerated values noted) | June 11, 2026 | Corroborated secondary |
| Country of origin missing | Same | June 11, 2026 | Corroborated secondary |
| Effective date not advanced on republication | Same, citing syndigo.com/blog/top-gdsn-data-errors/ | June 11, 2026 | Corroborated secondary |
| Description fields incomplete or invalid characters | lailarallc.com/blog/gdsn-attribute-errors-retailer-rejection inferred from broader rejection article context; syndigo.com/blog/top-gdsn-data-errors/ not independently fetched this session — **flag for source confirmation if upgraded to primary** | June 11, 2026 | Corroborated secondary (flagged) |
| UNFI and KeHE apply own allergen validation on top of GDSN | lailarallc.com/blog/unfi-vs-kehe-item-data-requirements-comparison (live May 27, 2026) | June 11, 2026 | Corroborated secondary |

## Publication states (§2.4)

| Claim | Source | Date | Confidence |
|---|---|---|---|
| CIC statuses: Received, Review, Synchronized, Rejected | 1WorldSync Dot Foods GDSN FAQ (1worldsync.com/wp-content/uploads/2023/04/Doc__Dot_Foods_Dot_Foods_GDSN_FAQs_Feb2018.pdf); SPS Commerce — confirmed via WebSearch result text | June 11, 2026 | Confirmed via search-result text |
| Received = pool validation passed; retailer-side audit in progress; not yet loaded | Same | June 11, 2026 | Confirmed via search-result text |
| Synchronized = accepted and loaded into recipient's system (terminal success state) | Same | June 11, 2026 | Confirmed via search-result text |
| Review/Rejected = failed validation or audit; CIC999 specifies failed field | Same | June 11, 2026 | Confirmed via search-result text |
| Draft and Published as supplier-side workflow states | Standard GS1 GDSN terminology; corroborated by 1WorldSync/SPS Commerce usage (gs1.org returned 403 when fetched) | June 11, 2026 | Corroborated secondary |

---

# Part 3 — Retailer Quick-Reference

All claims in the retailer quick-reference table (Part 3) are documented here.

Last updated: June 10, 2026

---

## Walmart

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Portal: Supplier One (supplierone.walmart.com), replaced Item 360 September 2024 | supplierone.helpdocs.io — article title and URL confirmed in search results; full content NOT directly read (WebFetch returned login page) | June 10, 2026 | Confirmed via search-result text |
| Hierarchy: Each → Inner/Warehouse Pack → Case → Pallet; unique GTIN per level | supplierone.helpdocs.io/article/hzb4evah4c-supplier-vendor-and-warehouse-pack-gtins — article title confirmed in search; content not directly read | June 10, 2026 | Confirmed via search-result text |
| Gotcha: trade item hierarchy permanent after creation; changing sellable quantity requires new GTIN | supplierone.helpdocs.io/article/aeh9r37ake-trade-item-hierarchy-faqs — article title confirmed in search; WebFetch returned login page | June 10, 2026 | Confirmed via search-result text |
| GDSN-synced dimensions lock; corrections must flow through data pool | supplierone.helpdocs.io/article/rql5ghcaiz-gdsn-faqs — article title confirmed in search; content not directly read | June 10, 2026 | Confirmed via search-result text |

---

## Costco

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Portal: Vendor Hub (hub.costco.com) | hub.costco.com — page title "Welcome to Costco Vendor Hub" directly confirmed via WebFetch | June 10, 2026 | **Primary source** |
| Item setup is buyer-driven; item-setup docs not publicly available | hub.costco.com — login-gated beyond landing page; no public item-setup documentation found | June 10, 2026 | **Primary source** (absence confirmed) |
| Meta-gotcha: ASN lot codes, quantity mismatches at ~$10/carton surface at receiving | BoldVan, CrossBridge, crstl.ai — EDI integration vendor documentation | June 10, 2026 | Corroborated secondary — EDI vendor docs, not Costco primary |

---

## Whole Foods Market

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Portal: VIP (vip.wholefoods.com) for cost file maintenance | vip.wholefoods.com sign-in page confirmed accessible; vip.wholefoods.com/help/help_files/cost_file_errors.html confirmed in search | June 10, 2026 | **Primary source** (portal active) |
| New item setup via Amazon Grocery Central (grocerycentral.amazon.com) | grocerycentral.amazon.com/wfm-supplier-portal confirmed accessible; corroborated by SupplierWiki (spscommerce.com) | June 10, 2026 | Corroborated secondary — US portal accessible, content login-gated |
| Gotcha cell: "—" — US item-setup docs are supplier-login-gated; no US primary-source gotcha verifiable | No US primary source found for specific item-setup gotcha | — | N/A — no claim made |
| ~~"Don't email buyers" gotcha~~ | ~~WFM 2025 New Product Submissions Pack~~ | — | **REMOVED** — document is UK-specific (cover page: "UK \| New Product Submissions 2025"); cross-region inference not acceptable for US-audience piece |

---

## UNFI

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Portal: SVHarbor (svharbor.unfi.com) | 1WorldSync "FAQ - UNFI Image and Global Data Sync Initiative" (updated 2024-02-19) — directly read | June 10, 2026 | **Primary source** |
| Publish via GDSN to GLN 0041130079153 ("UNFI Corporate") | Same source, Q5: "send your NEW publications to GLN 0041130079153" — directly read | June 10, 2026 | **Primary source** |
| Must complete Trading Partner form before publishing | Same source, Q5 — directly read | June 10, 2026 | **Primary source** |
| GDSN publication alone does not complete item setup | Same source, Q4: "This does not replace item input into our core business systems" — directly read | June 10, 2026 | **Primary source** |
| Separate Item Proposal required in SVHarbor to activate item | Same source, Q10: "Once I've published my images to UNFI, does that mean I'm done? No" — directly read | June 10, 2026 | **Primary source** |

---

## KeHE

**Label: Corroborated secondary** — see note below.

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Portal: KeHE CONNECT® (connectsupplier.kehe.com) | connectsupplier.kehe.com — confirmed accessible via WebFetch | June 10, 2026 | **Primary source** |
| GTIN-14 required at each packaging level (item, sellable case, warehouse receiving pack) | pmidpi.com/blog/newsletter/kehe-new-aom-requirements/ — Presence Marketing newsletter quoting KeHE's official AOM requirements verbatim | June 10, 2026 | **Corroborated secondary** |
| Supplier responsible for creating GTIN-14; consumer UPC (GTIN-12) cannot serve as case GTIN | Same source | June 10, 2026 | Corroborated secondary |
| Errors surface at warehouse receiving, not at setup time | Same source | June 10, 2026 | Corroborated secondary |

**KeHE PDF audit note:** kehe.com/wp-content/uploads/2025/10/Basics-of-CONNECT-Supplier.pdf — all 18 pages read (June 10, 2026). Pages 1-9: show order access, initiating show orders, adding items, filtering/bulk ordering, SOD handling, finalizing/submitting, order cloning. Pages 10-18: "In Negotiation" order management, order negotiation, show order capture timelines, order callbacks, daily show reports, order status flags (2+ days), missing images (IX-One/RIVIR), help center, post-show reports. **No GTIN, barcode, or packaging hierarchy content anywhere in the document.** Corroborated secondary label stands; the 18-page PDF is entirely show-order workflow.

---

## Kroger

| Claim | Source | Date | Confidence |
|---|---|---|---|
| Portal: Kroger Item API (KIA); certified providers Syndigo, Salsify, 1WorldSync | "FAQ: The Kroger Item API (KIA) Strategy" — thekrogerco.com/wp-content/uploads/2025/04/FAQ_vFINAL.pdf, dated April 3, 2025 — directly read | June 10, 2026 | **Primary source** |
| Legacy VIP mid-phase-out (still functional as of April 2025) | Same source: "While VIP remains a tool in use, the introduction of KIA expands submission options and introduces the future strategy" | June 10, 2026 | **Primary source** |
| Our Brands suppliers: Syndigo only | Same source: "Our Brands suppliers may only use Syndigo at this time" — directly read | June 10, 2026 | **Primary source** |
| Harris Teeter items: Syndigo only | thekrogerco.com/vendor-suppliers/vendors/retail-vendors/ — direct read of page text confirmed Our Brands and Harris Teeter items can only be syndicated using Syndigo | June 10, 2026 | **Primary source** (upgraded from corroborated secondary, June 10, 2026) |

---

## Source confidence definitions

| Level | Definition |
|---|---|
| Primary source | Content directly read from an official source URL (WebFetch returned full page or document content) |
| Corroborated secondary | A secondary source (broker newsletter, trade publication, EDI vendor doc) quoting or summarizing an official primary source — claim is plausible and consistent with what the primary source would say, but was not independently verified by direct read |
| Confirmed via search-result text | Official URL and article title confirmed in Google search results; full article content not directly read (e.g., login-gated) |
| Removed | Claim was excluded because the source was cross-regional, unverifiable, or otherwise not applicable to a US-audience reference |
