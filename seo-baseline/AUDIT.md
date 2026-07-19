# Technical SEO Audit — insuranceconsult.in
Baseline captured 2026-07-19 from `dist/` (built 2026-07-17, matches HEAD `fe78188`). **No source files were modified.**

## Artifacts in this folder
| File | What it is |
|---|---|
| `inventory.csv` | 306 URLs: title, meta description, H1, H1 count, word count, HTML KB, source template, internal links in/out |
| `duplication-report.md` | Pages ranked by % unique rendered text (8-word shingle method) |
| `double-dom-report.md` | Per-template detection of content rendered twice (desktop + mobile DOM trees) |
| `url-consolidation-map.csv` | 13 duplicate/parallel URL pairs with proposed canonical + 301 target |
| `out-of-radius-locations.csv` | Every geo-matched page with distance from Sholavaram (13.2391, 80.1728) and belt fit |
| `sitemap-0.xml`, `sitemap-index.xml` | Copy of the deployed sitemap (306 URLs, matches built pages 1:1) |

## Headline numbers
- **306 built pages**, all in the sitemap, no missing titles, only 2 missing meta descriptions, no duplicate titles.
- **Median page is only ~19% unique text.** 165 of 306 pages (54%) are <20% unique; 36 pages are <10% unique. Root causes: (a) every page carries the same large boilerplate blocks (hero, "Why work with us", "Real situations", FAQ items, WhatsApp widget), and (b) the double-DOM issue below literally doubles that boilerplate.
- **Double DOM is site-wide**: every template renders separate desktop and mobile trees. The template sample pages show 27–145 text blocks each rendered 2+ times in the same HTML; most pages also render the brand H1 ("M N Rajendrakumar Insurance Services") 2–3 times (301 of 306 pages have multiple H1s). Median HTML weight is **149 KB** (max 194 KB) — roughly double what single-DOM responsive CSS would produce.
- **13 duplicate URL pairs** in /services/: flat slugs (e.g. `/services/transport-fleet-lorry-insurance/`) coexist with nested ones (`/services/transport-fleet/lorry-insurance/`), each **self-canonicalizing** — Google sees them as competing duplicates. Internal linking overwhelmingly favors the nested URLs (40–57 links in vs 2 for flat), so the nested URLs are the proposed canonicals. Both variants are currently in the sitemap, violating the one-canonical rule.
- **61 orphan pages (0 internal links in)** — critically including the entire `/en/commercial-authority/` cluster (10 pages), which is exactly the commercial/industrial authority content for the winning niche. It is reachable only from the sitemap.
- **Geo targeting**: 8 pages are outside the 40 km radius (Hosur 260 km, Kancheepuram 68 km, Oragadam ×4 at 55 km, Maraimalai Nagar ×2 at 53 km). A further **67 pages are inside 40 km straight-line but outside the North Chennai industrial belt** (Velachery, Adyar, T-Nagar, Mylapore, Sholinganallur, Tambaram, Guindy, Porur and the ~25 generic "-chennai" consumer pages) — flagged `IN_RADIUS_BUT_OUTSIDE_TARGET_BELT` for a keep/merge/prune decision rather than automatic removal.
- One canonical bug: `/en/services/marine/marine-cargo-goods-in-transit/` canonicalizes to the `-insurance` URL **without a trailing slash**, creating a canonical→redirect hop.

## Risk-ranked fix order
1. **URL consolidation (highest SEO impact, low user-facing risk).** Apply `url-consolidation-map.csv`: keep the nested URL, 301 the flat variant directly to it (A→C, no chains), remove flat variants from the sitemap. 13 URLs. Rollback: revert redirect config + rebuild sitemap. Review flags first: the group-health and contractor-all-risk rows have no exact twin — verify before merging.
2. **Internal links to orphans (zero risk, pure gain).** Link the `/en/commercial-authority/` cluster from the homepage, relevant service pages (crane, fleet, factory, WC) and the services hub. This is the winning-niche content and it's invisible to crawlers following links. Also review the other ~50 orphans (mostly `[intentSlug]` pages).
3. **Double-DOM removal (big, template-level — do carefully).** Converge each Desktop*/Mobile* component pair into one responsive DOM per template, template by template, starting with the highest-traffic ones (`[intentSlug]` ×103, `services/[category]/[service]` ×39, `locations/[location]` ×72 — see `double-dom-report.md` for full blast radius). Halves page weight, removes duplicate H1s, and roughly doubles per-page uniqueness ratio for free. Must be verified visually on mobile + desktop per template before deploy (guardrail 2).
4. **Boilerplate dilution.** After step 3, the shared blocks (Why work with us / Real situations / FAQ reuse) still dominate thin pages. Prioritize adding unique local/service copy to pages the duplication report ranks lowest that you intend to keep; the belt/out-of-radius decision (step 5) should come first so effort isn't spent on pages that get pruned.
5. **Out-of-belt location pruning/merging (business decision required).** The 8 `OUT_OF_RADIUS` pages: 301 each to the closest same-service page in the belt (e.g. `/en/crane-insurance-oragadam/` → `/en/services/heavy-equipment/crane-cpm-insurance/`), never mass-redirect to homepage. The 67 belt-mismatch pages need a keep/consolidate call — many are the consumer-generic "-chennai" set already known to be unwinnable.
6. **Small hygiene items.** Fix the marine-cargo canonical trailing slash; add the 2 missing meta descriptions (see inventory.csv); ensure only final canonicals ship in the sitemap after step 1.

## Method notes
- Word counts and duplication are computed on rendered body text (scripts/styles stripped) — so double-DOM inflates both; treat word counts as ~2× effective content.
- "Links in" counts internal `<a href>` from other built pages only; nav rendered by JS would not be counted (spot-checked: the commercial-authority orphan finding is real — no page links to it).
- Distances are straight-line (haversine). Coordinates are approximate town centers; `arani` was matched to Arani (Thiruvallur dist., near Ponneri), not Arani/Tiruvannamalai — verify if intent differs.
