# Part 3 Verification Log — Retailer Quick-Reference

All claims in the retailer quick-reference table (Part 3) are documented here.
Confidence levels: **Primary** (directly read from official source) | **Corroborated secondary** (secondary source quoting official claim) | **Confirmed via search-result text** (URL/title confirmed in search, content not directly read)

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
