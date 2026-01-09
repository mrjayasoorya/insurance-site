// src/lib/seo.js

/* ------------------------------------------------------------------
   Types (explicit to avoid TS inference bugs)
------------------------------------------------------------------ */

export interface BuildMetaInput {
  title: string
  description: string
  canonical: string
  ogType?: string
  ogImage?: string
}

export interface BreadcrumbItem {
  name: string
  href: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface BuildJsonLdInput {
  pageType:
    | "home"
    | "servicesHub"
    | "serviceCategory"
    | "serviceDetail"
    | "locationsHub"
    | "locationDetail"
    | "faqs"
    | "generic"
    | "locationsIndex"
    | "about"
    | "insightsIndex"
    | "post"
    | "photos"
    | "reviews"
    | "renewalsIndex"
    | "commercialAuthorityIndex"
    | "proofExperienceIndex"
    | "intent"

  siteData: any
  canonical: string
  title: string
  description: string

  breadcrumbs?: BreadcrumbItem[]
  faqs?: FAQItem[]

  serviceData?: any
  locationName?: string

  extraNodes?: any[]
}

/* ------------------------------------------------------------------
   Helpers
------------------------------------------------------------------ */

export function normalizeBaseUrl(url) {
  return (url || "").replace(/\/$/, "")
}

export function absUrl(base, path = "") {
  const b = normalizeBaseUrl(base)
  if (!path) return b
  if (path.startsWith("http")) return path.replace(/\/$/, "")
  return `${b}${path.startsWith("/") ? "" : "/"}${path}`.replace(/\/$/, "")
}

export function canonicalFromPath(base, path) {
  const url = absUrl(base, path)
  return url.endsWith("/") ? url : `${url}/`
}

function prune(obj) {
  if (!obj || typeof obj !== "object") return obj
  if (Array.isArray(obj)) return obj.map(prune).filter(Boolean)

  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === "") continue
    const pv = prune(v)
    if (
      pv === undefined ||
      (typeof pv === "object" && !Array.isArray(pv) && !Object.keys(pv).length)
    )
      continue
    out[k] = pv
  }
  return out
}

/* ------------------------------------------------------------------
   META BUILDER (FIXED)
------------------------------------------------------------------ */

export function buildMeta(input: BuildMetaInput) {
  const {
    title,
    description,
    canonical,
    ogType = "website",
    ogImage,
  } = input

  const tags = {
    "og:title": title,
    "og:description": description,
    "og:type": ogType,
    "og:url": canonical,
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    ...(ogImage
      ? { "og:image": ogImage, "twitter:image": ogImage }
      : {}),
  }

  return {
    title,
    description,
    canonical,
    tags,
  }
}

/* ------------------------------------------------------------------
   JSON-LD BUILDER (FIXED)
------------------------------------------------------------------ */

export function buildJsonLd(input: BuildJsonLdInput) {
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
    extraNodes = [],
  } = input

  const base = normalizeBaseUrl(siteData?.brand?.websiteUrl)
  const orgId = `${base}/#org`
  const siteId = `${base}/#website`

  const graph = []

  // Organization
  graph.push(
    prune({
      "@type": "Organization",
      "@id": orgId,
      name: siteData.brand.name,
      url: base,
      telephone: siteData.brand.phoneE164,
      sameAs: [siteData.brand.gbpUrl].filter(Boolean),
      address: siteData.brand.addressLocality
        ? {
            "@type": "PostalAddress",
            streetAddress: siteData.brand.streetAddress,
            addressLocality: siteData.brand.addressLocality,
            addressRegion: siteData.brand.addressRegion,
            postalCode: siteData.brand.postalCode,
            addressCountry: siteData.brand.addressCountry || "IN",
          }
        : undefined,
    })
  )

  // Website
  graph.push({
    "@type": "WebSite",
    "@id": siteId,
    url: base,
    name: siteData.brand.name,
    publisher: { "@id": orgId },
  })

  // WebPage
  graph.push({
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { "@id": siteId },
  })

  // Breadcrumbs
  if (breadcrumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: absUrl(base, b.href),
      })),
    })
  }

  // Service detail
  if (pageType === "serviceDetail" && serviceData) {
    graph.push(
      prune({
        "@type": "Service",
        name: serviceData.heroH1,
        description: serviceData.heroP || serviceData.seoDesc,
        url: canonical,
        provider: { "@id": orgId },
        areaServed: siteData.brand.areaChips?.map((a) => ({
          "@type": "Place",
          name: a,
        })),
      })
    )
  }

  // Location detail
  if (pageType === "locationDetail" && locationName) {
    graph.push({
      "@type": "Place",
      name: locationName,
      address: {
        "@type": "PostalAddress",
        addressLocality: locationName,
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
    })
  }

  // FAQ
  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    })
  }

  // Extra nodes (safe extension)
  extraNodes.forEach((n) => graph.push(prune(n)))

  return {
    "@context": "https://schema.org",
    "@graph": graph.map(prune),
  }
}
