// src/lib/seo.js
/* ------------------------------------------------------------------
   Types (JSDoc + exported interfaces for TS users)
   - If you want TypeScript: rename this file to seo.ts.
------------------------------------------------------------------ */

/**
 * @typedef {Object} BuildMetaInput
 * @property {string} title
 * @property {string} description
 * @property {string} canonical
 * @property {string=} ogType
 * @property {string=} ogImage
 */

/**
 * @typedef {Object} BreadcrumbItem
 * @property {string} name
 * @property {string} href   // can be "/en/..." or full URL
 */

/**
 * @typedef {Object} FAQItem
 * @property {string} q
 * @property {string} a
 */

/**
 * @typedef {"home"|"servicesHub"|"serviceCategory"|"serviceDetail"|"locationsIndex"|"locationDetail"|"faqs"|"intent"|"generic"} PageType
 */

/**
 * @typedef {Object} BuildJsonLdInput
 * @property {PageType} pageType
 * @property {any} siteData
 * @property {string} canonical
 * @property {string} title
 * @property {string} description
 * @property {BreadcrumbItem[]=} breadcrumbs
 * @property {FAQItem[]=} faqs
 * @property {any=} serviceData        // used in serviceDetail
 * @property {string=} locationName    // used in locationDetail
 * @property {string[]=} intentKeywords // used in intent pages (optional)
 * @property {any[]=} extraNodes       // optional extension nodes
 */

/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------ */

export function normalizeBaseUrl(url) {
  const u = (url || "").trim();
  if (!u) return "";
  return u.replace(/\/$/, "");
}

export function absUrl(base, path = "") {
  const b = normalizeBaseUrl(base);
  if (!path) return b;
  const p = String(path).trim();
  if (p.startsWith("http://") || p.startsWith("https://")) return p.replace(/\/$/, "");
  // allow callers to pass "/en/..." etc.
  const joined = `${b}${p.startsWith("/") ? "" : "/"}${p}`;
  return joined.replace(/\/$/, "");
}

export function canonicalFromPath(base, path) {
  const url = absUrl(base, path);
  return url.endsWith("/") ? url : `${url}/`;
}

// Remove undefined/null/empty-string keys from schema nodes (keeps JSON-LD clean)
function prune(obj) {
  if (!obj || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(prune).filter(Boolean);

  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === "") continue;
    const pv = prune(v);
    if (
      pv === undefined ||
      pv === null ||
      pv === "" ||
      (typeof pv === "object" && !Array.isArray(pv) && !Object.keys(pv).length)
    ) continue;
    out[k] = pv;
  }
  return out;
}

// Safe helper: turn your faq objects into [{q,a}]
export function normalizeFaqList(faqsMaybe) {
  if (!faqsMaybe) return [];
  // already list?
  if (Array.isArray(faqsMaybe)) {
    return faqsMaybe
      .filter((x) => x && x.q && x.a)
      .map((x) => ({ q: String(x.q), a: String(x.a) }));
  }
  // faqsPage group style { title, intro, items:[{q,a}...] }
  if (faqsMaybe.items && Array.isArray(faqsMaybe.items)) {
    return faqsMaybe.items
      .filter((x) => x && x.q && x.a)
      .map((x) => ({ q: String(x.q), a: String(x.a) }));
  }
  return [];
}

/* ------------------------------------------------------------------
   META BUILDER
------------------------------------------------------------------ */

/** @param {BuildMetaInput & { geo?: { region?: string; placename?: string; position?: string; icbm?: string } }} input */
export function buildMeta(input) {
  const {
    title,
    description,
    canonical,
    ogType = "website",
    ogImage,
    geo
  } = input;

  const tags = {
    "og:title": title,
    "og:description": description,
    "og:type": ogType,
    "og:url": canonical,
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    ...(ogImage ? { "og:image": ogImage, "twitter:image": ogImage } : {}),
  };

    const nameTags = {
    ...(geo?.region ? { "geo.region": geo.region } : {}),
    ...(geo?.placename ? { "geo.placename": geo.placename } : {}),
    ...(geo?.position ? { "geo.position": geo.position } : {}),
    ...(geo?.icbm ? { ICBM: geo.icbm } : {}),
  };

  return { title, description, canonical, tags, nameTags };
}

/** @param { placenameOverride?: string } input */
export function geoMetaFromBrand(siteData, placenameOverride = "") {
  const brand = siteData?.brand || {};
  const geo = brand?.geo;

  const lat = geo?.lat;
  const lng = geo?.lng;

  // Use Sholavaram base by default; override on location pages.
  const placename =
    placenameOverride ||
    brand.addressLocality ||
    "Sholavaram";

  return prune({
    region: "IN-TN",
    placename,
    position: (lat != null && lng != null) ? `${lat};${lng}` : undefined,
    icbm: (lat != null && lng != null) ? `${lat}, ${lng}` : undefined,
  });
}


/* ------------------------------------------------------------------
   JSON-LD BUILDER
   - One consistent graph
   - Agency reach: siteData.areaServedStructData
------------------------------------------------------------------ */

/** @param {BuildJsonLdInput} input */
export function buildJsonLd(input) {
  const {
    pageType,
    siteData,
    canonical,
    title,
    description,
    breadcrumbs = [],
    faqs = [],
    serviceData,
    locationName,
    intentKeywords = [],
    extraNodes = [],
  } = input;

  const base = normalizeBaseUrl(siteData?.brand?.websiteUrl || "https://insuranceconsult.in");
  const orgId = `${base}/#org`;
  const agencyId = `${base}/#agency`;
  const siteId = `${base}/#website`;
  const webPageId = `${canonical}#webpage`;

  const brand = siteData?.brand || {};
  const geo = brand?.geo || null;

  // IMPORTANT: You already maintain this in siteData.
  const areaServedStruct = siteData?.areaServedStructData || undefined;

  // Keep these conservative: truthful, not “spammy”
  const defaultKnowsAbout = [
  // --- High-Premium Commercial & Industrial ---
  "Industrial All Risk (IAR) & Standard Fire Insurance",
  "Stock Declaration Policy for Large Warehouses",
  "Machinery Breakdown (MBD) & Business Interruption Cover",
  "Marine Cargo Open Policy (Import-Export & Coastal)",
  "Marine Hull & Transit Insurance (CIF/FOB/Inland)",
  "Contractor's Plant and Machinery (CPM) for Heavy Equipment",
  "Crane and Excavator Third-Party Liability",
  "Contractor's All Risk (CAR) & Erection All Risk (EAR)",
  "Public Liability (Industrial & Non-Industrial) Coverage",
  "Professional Indemnity and Director & Officer (D&O) Liability",
  
  // --- Transport, Lorry & Fleet ---
  "Commercial Lorry and Multi-axle Trailer Insurance",
  "Fleet Insurance Management and Renewal Automation",
  "Hazardous Goods (Tanker/Chemical) Carrying Vehicle Cover",
  "Tipper and Earthmover Package Policies",
  "Goods-in-Transit (GIT) and Carrier’s Legal Liability",
  
  // --- Statutory & SME (Business) ---
  "Workmen's Compensation (WC) Act Insurance Compliance",
  "Employer's Liability & Group Personal Accident",
  "SME Shopkeeper Package and MSME Asset Protection",
  "Money-in-Transit and Fidelity Guarantee Insurance",
  
  // --- Domestic & Retail (Personal Lines) ---
  "Private Car Insurance (Zero Depreciation & Add-on Specialist)",
  "Two-Wheeler Insurance (Long-term & Comprehensive)",
  "Used Vehicle Insurance Transfer and NCB Protection",
  "Comprehensive Health Insurance (Family Floater & Senior Citizen)",
  "Critical Illness and Super Top-up Plan Evaluation",
  "Cashless Hospital Network Coordination and Guidance",
  "Home Structure and Household Content Insurance",
  
  // --- Life & Specialist Servicing ---
  "LIC Policy Servicing, Premium Continuity & Revivals",
  "Term Insurance with High Sum Assured Analysis",
  "Insurance Claim Documentation and Advocacy",
  "Spot Claim Assistance and Surveyor Coordination",
  "Insurance Underwriting and Risk Gap Analysis"
];

  const graph = [];

  // WebSite
  graph.push(prune({
    "@type": "WebSite",
    "@id": siteId,
    url: base,
    name: brand.name,
    publisher: { "@id": orgId },
    inLanguage: "en",
  }));

  // Organization
  graph.push(prune({
    "@type": "Organization",
    "@id": orgId,
    name: brand.name,
    legalName: brand.legalName,
    url: base,
    telephone: brand.phoneE164,
    sameAs: [brand.gbpUrl].filter(Boolean),
    address: brand.addressLocality ? {
      "@type": "PostalAddress",
      streetAddress: brand.streetAddress,
      addressLocality: brand.addressLocality,
      addressRegion: brand.addressRegion,
      postalCode: brand.postalCode,
      addressCountry: brand.addressCountry || "IN",
    } : undefined,
  }));

  // InsuranceAgency (your main “local dominance” node)
  graph.push(prune({
    "@type": "InsuranceAgency",
    "@id": agencyId,
    name: brand.name,
    url: base,
    telephone: brand.phoneE164,
    sameAs: [brand.gbpUrl].filter(Boolean),
    hasMap: brand.gbpUrl || undefined,
    address: brand.addressLocality ? {
      "@type": "PostalAddress",
      streetAddress: brand.streetAddress,
      addressLocality: brand.addressLocality,
      addressRegion: brand.addressRegion,
      postalCode: brand.postalCode,
      addressCountry: brand.addressCountry || "IN",
    } : undefined,
    geo: geo ? {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    } : undefined,
    openingHoursSpecification: brand?.hours?.is24x7 ? [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    }] : undefined,

    // THIS IS WHERE YOUR “40–60km + districts + hubs” lives
    areaServed: areaServedStruct,

    // Helpful for LLMs; not harmful for Google if kept factual
    knowsAbout: defaultKnowsAbout,
    priceRange: "₹₹",
    paymentAccepted: ["Cash", "UPI", "Online Transfer"],
    currenciesAccepted: "INR",
      contactPoint: prune({
    "@type": "ContactPoint",
    telephone: brand.phoneE164,
    contactType: "customer service",
    availableLanguage: ["English", "Tamil", "Malayalam"],
    areaServed: "IN",
  }),

  }));

  // Optional Person node (ties experience to the org without over-claiming)
  // You can remove if you prefer.
  graph.push(prune({
    "@type": "Person",
    "@id": `${base}/#person`,
    name: brand.legalName || "M N Rajendrakumar",
    worksFor: { "@id": orgId },
    jobTitle: "Insurance Services",
  }));

  // WebPage
  graph.push(prune({
    "@type": "WebPage",
    "@id": webPageId,
    url: canonical,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: { "@id": siteId },
    about: { "@id": agencyId },
  }));

  // Breadcrumbs
  if (breadcrumbs.length) {
    graph.push(prune({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: absUrl(base, b.href),
      })),
    }));
  }

  // PageType-specific enhancements
  if (pageType === "home") {
    // Home usually should NOT be a massive FAQPage; keep it small if you include it.
    // (You can pass 4–6 faqs from home.)
  }

  if (pageType === "servicesHub") {
    graph.push(prune({
      "@type": "CollectionPage",
      "@id": `${canonical}#collection`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": siteId },
    }));
  }

  if (pageType === "serviceCategory") {
    graph.push(prune({
      "@type": "CollectionPage",
      "@id": `${canonical}#collection`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": siteId },
    }));
  }

  if (pageType === "serviceDetail" && serviceData) {
    // Service node (high value)
    graph.push(prune({
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: serviceData.heroH1 || title,
      description: serviceData.heroP || serviceData.seoDesc || description,
      url: canonical,
      provider: { "@id": agencyId },

      // IMPORTANT: service also carries area reach
      areaServed: areaServedStruct,

      // Optional: OfferCatalog without pricing promises
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Insurance Support",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Policy selection and issuance guidance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renewal checks and documentation readiness" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Claim documentation and reporting guidance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-site visit (as applicable)" } },
        ],
      },
    }));
  }

  if (pageType === "locationsIndex") {
    graph.push(prune({
      "@type": "CollectionPage",
      "@id": `${canonical}#collection`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": siteId },
    }));
  }

  if (pageType === "locationDetail") {
    // Location page = Place + ties to your agency reach
    graph.push(prune({
      "@type": "Place",
      "@id": `${canonical}#place`,
      name: locationName || title,
      address: {
        "@type": "PostalAddress",
        addressLocality: locationName || undefined,
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      // It is okay to mention "containedInPlace" as the City/Region conceptually
      containedInPlace: [
        { "@type": "AdministrativeArea", name: "Chennai" },
        { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      ],
    }));
  }

  if (pageType === "faqs") {
    // FAQ page often benefits from being a "CollectionPage" too
    graph.push(prune({
      "@type": "CollectionPage",
      "@id": `${canonical}#collection`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": siteId },
    }));
  }

  if (pageType === "intent") {
    // Prefer using passed serviceData (your intent page object)
    const intent = serviceData || {};

    const keywords =
      (intent.intentSignals && Array.isArray(intent.intentSignals))
        ? intent.intentSignals.slice(0, 12)
        : (intentKeywords && Array.isArray(intentKeywords))
          ? intentKeywords.slice(0, 12)
          : undefined;

    // Build a safe OfferCatalog from "whatYouGet" / "realityChecks" / "whatRemoteWorksFor" etc.
    const offerItems = [];

    if (Array.isArray(intent.whatYouGet)) {
      intent.whatYouGet.slice(0, 6).forEach((t) => {
        if (t) offerItems.push({ "@type": "Offer", itemOffered: { "@type": "Service", name: String(t) } });
      });
    }

    // Spot support page dataset
    if (intent.realityChecks?.bullets?.length) {
      intent.realityChecks.bullets.slice(0, 4).forEach((t) => {
        if (t) offerItems.push({ "@type": "Offer", itemOffered: { "@type": "Service", name: String(t) } });
      });
    }

    // Remote support page dataset
    if (intent.whatRemoteWorksFor?.bullets?.length) {
      intent.whatRemoteWorksFor.bullets.slice(0, 4).forEach((t) => {
        if (t) offerItems.push({ "@type": "Offer", itemOffered: { "@type": "Service", name: String(t) } });
      });
    }

    const hasOfferCatalog = offerItems.length
      ? { "@type": "OfferCatalog", name: "Support options", itemListElement: offerItems }
      : undefined;

    // Service node (intent pages should still have a Service to connect queries like "near me" + "renewal" + "claim help")
    graph.push(prune({
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: intent.heroH1 || title,
      description: intent.heroP || description,
      url: canonical,
      provider: { "@id": agencyId },
      areaServed: areaServedStruct,
      keywords,
      hasOfferCatalog,
    }));

    // Optional HowTo node (ONLY when your dataset provides steps)
    // Good for claim-help and near-me support workflow. Keep it factual and not “guarantee”.
    const howToSteps = [];

    if (Array.isArray(intent.howSupportWorks)) {
      intent.howSupportWorks.slice(0, 6).forEach((s, idx) => {
        if (!s?.title || !s?.text) return;
        howToSteps.push({
          "@type": "HowToStep",
          position: idx + 1,
          name: String(s.title),
          text: String(s.text),
        });
      });
    }

    if (intent.claimWorkflow?.steps?.length) {
      intent.claimWorkflow.steps.slice(0, 7).forEach((t, idx) => {
        if (!t) return;
        howToSteps.push({
          "@type": "HowToStep",
          position: idx + 1,
          name: `Step ${idx + 1}`,
          text: String(t),
        });
      });
    }

    if (howToSteps.length) {
      graph.push(prune({
        "@type": "HowTo",
        "@id": `${canonical}#howto`,
        name: intent.claimWorkflow?.title || intent.commonAreasTitle || `${title} – practical steps`,
        description: intent.heroP || description,
        step: howToSteps,
      }));
    }
  }


  // FAQPage schema (works across home/service/location/faqs pages)
  const faqList = normalizeFaqList(faqs);
  if (faqList.length) {
    graph.push(prune({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: faqList.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }));
  }

  // Extra nodes (optional extension)
  if (Array.isArray(extraNodes) && extraNodes.length) {
    for (const n of extraNodes) graph.push(prune(n));
  }

  return prune({
    "@context": "https://schema.org",
    "@graph": graph.map(prune),
  });
}
