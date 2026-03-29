# Insurance Website Coverage & Content Mapping Template

## 1. Location & Area Coverage

| District/Area         | Sub-Area/Locality         | Industrial/Export/Import Hub? | Covered (Y/N) | Page URL/Slug                | Notes (e.g., GMB, 20km radius, etc.)         |
|-----------------------|--------------------------|-------------------------------|---------------|------------------------------|----------------------------------------------|
| Chennai               | Ambattur                 | Yes                           |               | /locations/ambattur          | Industrial Estate                            |
| Chennai               | Sriperumbudur            | Yes                           |               | /locations/sriperumbudur     | SIPCOT, Auto Hub                             |
| Chennai               | Oragadam                 | Yes                           |               | /locations/oragadam          | Manufacturing Cluster                        |
| Chennai               | Ennore                   | Yes                           |               | /locations/ennore            | Port, Logistics                              |
| Thiruvallur           | Gummidipoondi            | Yes                           |               | /locations/gummidipoondi     | Industrial Belt                              |
| Chennai               | Sholavaram               | No                            |               | /locations/sholavaram        | GMB, Residence, 20km radius                  |
| Chennai               | Redhills                 | No                            |               | /locations/redhills          | GMB, 20km radius                             |
| ...                   | ...                      | ...                           |               | ...                          | ...                                          |

*Expand this table for all districts, suburbs, and industrial/business hubs.*

---

## 2. Service/Use Case/Problem-Based Pages

| Service/Product           | Target Area(s)         | User Problem/Intent                        | Covered (Y/N) | Page URL/Slug                        | Notes (e.g., FAQ, calculator, etc.)         |
|--------------------------|------------------------|--------------------------------------------|---------------|--------------------------------------|---------------------------------------------|
| Transit Insurance        | Chennai Ports          | “How to insure export goods from Chennai”  |               | /services/transit-insurance/chennai  | Add export/import FAQ                       |
| Machinery Insurance      | Sriperumbudur, Oragadam| “Protecting factory equipment”             |               | /services/machinery/sriperumbudur    | Calculator for premium                      |
| SME Business Insurance   | Ambattur, Gummidipoondi| “Best insurance for SMEs”                  |               | /services/sme/ambattur               | Local testimonials                          |
| Health Insurance         | All                    | “Family health cover in Redhills”          |               | /services/health/redhills            | Tamil/English toggle                        |
| ...                      | ...                    | ...                                        |               | ...                                  | ...                                         |

---

## 3. Intent-Based & FAQ Pages

| Intent/Query                                 | Target Area(s)         | Covered (Y/N) | Page URL/Slug                        | Notes (e.g., schema, blog, etc.)            |
|----------------------------------------------|------------------------|---------------|--------------------------------------|---------------------------------------------|
| “Buy insurance in [area]”                    | All                    |               | /buy/[area]                          | Intent landing page                         |
| “Renew insurance in [area]”                  | All                    |               | /renew/[area]                        |                                             |
| “Best insurance for logistics companies”     | Chennai, Thiruvallur   |               | /best/logistics-insurance/chennai    |                                             |
| “How to claim insurance in [area]”           | All                    |               | /claim/[area]                        | FAQ, step-by-step guide                     |
| ...                                          | ...                    |               | ...                                  | ...                                         |

---

## 4. User Experience & Conversion Features

| Feature/Component         | Implemented (Y/N) | Location/Component File         | Notes (e.g., sticky, popup, WhatsApp) |
|--------------------------|-------------------|---------------------------------|---------------------------------------|
| Sticky WhatsApp CTA      |                   | /src/components/StickyFooter.astro| Always visible, prefilled message     |
| Lead Generation Popups   |                   | /src/components/LeadPopup.astro | Exit intent, scroll, inactivity       |
| Calculators/Checkers     |                   | /src/components/Calculator.astro| For premium, eligibility              |
| Local Language Support   |                   | /src/components/LanguageToggle.astro| Tamil/English                        |
| Testimonials/Trust Badges|                   | /src/components/Testimonials.astro| Local stories, awards                 |
| ...                      |                   | ...                             | ...                                   |

---

## 5. SEO & GEO Elements

| Element                  | Implemented (Y/N) | Location/Component File         | Notes                                 |
|--------------------------|-------------------|---------------------------------|---------------------------------------|
| Dynamic Meta Tags        |                   | /src/components/SeoHead.astro   | Per page/service/location             |
| LD+JSON Schema           |                   | /src/components/SeoHead.astro   | LocalBusiness, Product, FAQ           |
| Internal Linking         |                   | /src/components/Breadcrumbs.astro| Contextual, service-location links    |
| Sitemap                  |                   | /public/sitemap.xml             | Auto-generated                        |
| GMB Optimization         |                   | GMB dashboard                   | Sholavaram, Redhills, 20km radius     |
| ...                      |                   | ...                             | ...                                   |

---

**How to use:**  
- Fill out and update this template as you build or audit your site.
- Use it to track coverage, spot gaps, and prioritize new content/features.
- Store as `coverage-mapping.md` or similar in your project root.

Let me know if you want this in a different format (spreadsheet, JSON, etc.) or need help auto-generating any of these tables!