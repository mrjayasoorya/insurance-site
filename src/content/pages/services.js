import { EN } from "./_paths";

export const servicePages = {
  "business-msme-insurance": {
    slug: "business-msme-insurance",
    href: EN("/services/business-msme-insurance"),
    h1: "Business & MSME Insurance Guidance (Sholavaram • Chennai Outskirts)",
    metaDesc:
      "Claim-first guidance for MSMEs, shops and offices across Sholavaram, Red Hills Toll belt, Madhavaram and nearby industrial belts. Wording + documentation clarity to reduce claim delays.",
    serviceType: "Business Insurance Guidance",
    scan3s: [
      "For shops, offices, MSMEs operating in Chennai outskirts belts",
      "Local advisor support (Sholavaram base) with claim-first discipline",
    ],
    proof10s: [
      "30+ years field experience (policy + documentation conversations)",
      "We focus on wording, valuation and proof trail before you buy/renew",
    ],
    action30s: {
      title: "What we do for you",
      points: [
        "Match coverage to real operations (stock/storage/public exposure)",
        "Help you avoid common wording gaps that reduce settlements",
        "Give a simple document checklist to stay claim-ready",
      ],
    },
    whoThisIsFor: [
      "Retail shops & small warehouses",
      "Small offices & service units",
      "Local MSMEs with stock + equipment",
      "Business owners renewing after a claim or incident",
    ],
    whereWeOperate: {
      primary: ["Sholavaram", "Red Hills Toll belt", "Madhavaram", "Karanodai"],
      nearby: ["Puzhal", "Manali/Ennore belt", "Gummidipoondi belt", "Ponneri belt"],
      citySupport: ["Anna Nagar", "Ambattur", "Kolathur", "Perambur", "Padi", "Villivakkam"],
    },
    localRiskNotes: [
      "Industrial belts increase electrical fire load + third-party exposure",
      "Godown/stock risk requires correct proof discipline",
      "Highway-facing business zones often see incident escalation faster",
    ],
    commonClaimFailures: [
      "Underinsurance (wrong sum insured) leading to reduced settlement",
      "Stock proof mismatch (invoices / declaration / physical evidence)",
      "Policy wording not matching actual usage or storage pattern",
    ],
    checklist: [
      "Business type + exact address",
      "Approx. value of stock + equipment",
      "Photos (front, storage area, electrical panel where applicable)",
      "Past policy copy (if renewal) + claim history (if any)",
    ],
    internalLinks: {
      relatedServices: [
        { title: "Claim Support", desc: "Claim steps + document discipline", href: EN("/services/claim-support"), chips: ["Claims"] },
        { title: "Warehouse / Godown / Factory", desc: "Fire + stock risk guidance", href: EN("/services/warehouse-godown-factory-insurance"), chips: ["Industrial"] },
      ],
      relatedArticles: [
        { title: "Policy wording that matters for MSMEs", desc: "Small wording differences decide outcomes", href: EN("/commercial-authority/msme-policy-wording-simple"), chips: ["Authority"] },
        { title: "Sum insured: avoid underinsurance quickly", desc: "Fast method for correct value", href: EN("/commercial-authority/sum-insured-why-it-matters"), chips: ["Claims"] },
      ],
      locations: [
        { title: "Sholavaram", desc: "Base office + nearby belts", href: EN("/locations/sholavaram"), chips: ["Location"] },
        { title: "Red Hills Toll belt", desc: "Highway-facing risk zone", href: EN("/locations/red-hills-toll-belt"), chips: ["NH Belt"] },
      ],
    },
    faqs: [
      { q: "Is this only for big companies?", a: "No. MSMEs, small shops and offices are a major focus—especially in outskirts belts where risk patterns differ." },
      { q: "Do you help in claim situations?", a: "Yes. We guide claim steps and documents—reporting, proof trail and timelines to reduce delays." },
      { q: "Which areas do you cover?", a: "Primary focus is Sholavaram–Red Hills Toll–Madhavaram and nearby highway/industrial belts, plus city support for personal policies when needed." },
    ],
  },

  "transport-fleet-lorry-insurance": {
    slug: "transport-fleet-lorry-insurance",
    href: EN("/services/transport-fleet-lorry-insurance"),
    h1: "Transport / Fleet / Lorry Insurance Guidance (NH Belts • Chennai Outskirts)",
    metaDesc:
      "Claim-first guidance for transport operators and fleets across Red Hills Toll belt, Sholavaram, Madhavaram and nearby NH corridors. Permits/fitness basics + wording clarity + claim-ready workflow.",
    serviceType: "Transport / Fleet Insurance Guidance",
    scan3s: [
      "For transport operators, fleet owners, goods vehicles in NH belts",
      "Documentation-first approach for smoother claims",
    ],
    proof10s: [
      "Local belt knowledge: Red Hills Toll + highway movement patterns",
      "We focus on third-party exposure and claim workflows",
    ],
    action30s: {
      title: "What we do for you",
      points: [
        "Checklist for permits/fitness/RC/hypothecation basics",
        "Wording clarity for real operations (loading/unloading exposure)",
        "Claim reporting flow: what to do first, what proof matters",
      ],
    },
    whoThisIsFor: [
      "Single lorry owners",
      "Small fleet owners",
      "Transport contractors",
      "Businesses with regular goods movement",
    ],
    whereWeOperate: {
      primary: ["Red Hills Toll belt", "Sholavaram", "Madhavaram", "NH corridors (within ~50 km)"],
      nearby: ["Ponneri", "Gummidipoondi belt", "Manali/Ennore belt", "Thiruvallur belt"],
      citySupport: ["Chennai (major areas) for renewals/support"],
    },
    localRiskNotes: [
      "Highway belts increase third-party exposure and incident escalation",
      "Claim disputes happen when wording doesn’t match operations",
    ],
    commonClaimFailures: [
      "Delayed reporting or missing timeline proof",
      "Missing/expired permits/fitness details causing disputes",
      "Wording gaps for operational risk (loading/unloading, route pattern)",
    ],
    checklist: [
      "Vehicle RC + permits + fitness details",
      "Driver basics (as applicable)",
      "Route/usage pattern summary",
      "Existing policy copy + claim history (if renewal)",
    ],
    internalLinks: {
      relatedServices: [
        { title: "Claim Support", desc: "Step-by-step claim discipline", href: EN("/services/claim-support"), chips: ["Claims"] },
        { title: "Business & MSME", desc: "For transport office/godown packages", href: EN("/services/business-msme-insurance"), chips: ["Commercial"] },
      ],
      relatedArticles: [
        { title: "Fleet insurance docs checklist", desc: "Docs that speed approvals", href: EN("/commercial-authority/fleet-insurance-docs-checklist"), chips: ["Checklist"] },
        { title: "Highway-area business risks", desc: "NH belt practical cover guidance", href: EN("/commercial-authority/highway-business-risks"), chips: ["Geo"] },
      ],
      locations: [
        { title: "Red Hills Toll belt", desc: "Primary highway-facing zone", href: EN("/locations/red-hills-toll-belt"), chips: ["NH Belt"] },
        { title: "Madhavaram", desc: "Logistics movement zone", href: EN("/locations/madhavaram"), chips: ["Logistics"] },
      ],
    },
    faqs: [
      { q: "Do you help with fleet renewals?", a: "Yes. We guide approvals with a clean document checklist and clarity on operational risk points." },
      { q: "Is this limited to Red Hills only?", a: "No. Red Hills is a key belt; we cover nearby NH/industrial corridors within ~50 km and Chennai support when needed." },
    ],
  },

  "warehouse-godown-factory-insurance": {
    slug: "warehouse-godown-factory-insurance",
    href: EN("/services/warehouse-godown-factory-insurance"),
    h1: "Warehouse / Godown / Factory Insurance Guidance (Industrial Belts • Chennai Outskirts)",
    metaDesc:
      "Industrial belt coverage guidance for warehouses, godowns and factories—fire load, stock proof, burglary risk, and claim-ready documentation across Sholavaram, Madhavaram, Manali/Ennore and nearby belts.",
    serviceType: "Industrial Property Insurance Guidance",
    scan3s: [
      "For godowns, warehouses, factories with stock + machinery risk",
      "Claim readiness depends on valuation + proof discipline",
    ],
    proof10s: [
      "Local belt risk context (industrial fire load + storage patterns)",
      "We focus on stock proof + declaration mismatch prevention",
    ],
    action30s: {
      title: "What we do for you",
      points: [
        "Map coverage to your storage reality (stock movement, fire load)",
        "Simple safety + documentation habits insurers typically expect",
        "Avoid common proof gaps that cause disputes during settlement",
      ],
    },
    whoThisIsFor: [
      "Warehouse/godown owners",
      "Small factories & industrial units",
      "Businesses storing high-value stock",
    ],
    whereWeOperate: {
      primary: ["Madhavaram belt", "Sholavaram", "Manali/Ennore belt", "Gummidipoondi belt"],
      nearby: ["Puzhal belt", "Ponneri belt", "Thiruvallur belt"],
      citySupport: ["Chennai (major areas) for domestic policies"],
    },
    localRiskNotes: [
      "Industrial zones increase electrical fire load and liability exposure",
      "Stock value changes create declaration/proof challenges",
      "Water ingress/flooding affects stock + machinery seasonally",
    ],
    commonClaimFailures: [
      "Stock declaration mismatch vs invoices/proof",
      "Underinsurance (sum insured not aligned with actual exposure)",
      "Missing photo evidence and timeline records after incident",
    ],
    checklist: [
      "Stock categories + approximate value range",
      "Machinery list (if any) and invoices (as available)",
      "Premises photos (storage, entry points, electrical panel)",
      "Past policy copy (if renewal) + incident history",
    ],
    internalLinks: {
      relatedServices: [
        { title: "Claim Support", desc: "Claim steps + proof discipline", href: EN("/services/claim-support"), chips: ["Claims"] },
        { title: "Transport / Fleet", desc: "If godown links to transport operations", href: EN("/services/transport-fleet-lorry-insurance"), chips: ["Transport"] },
      ],
      relatedArticles: [
        { title: "Warehouse fire + theft: what insurers expect", desc: "Basic habits that reduce disputes", href: EN("/commercial-authority/factory-fire-theft-risk-basics"), chips: ["Industrial"] },
        { title: "Stock declaration explained", desc: "No confusion + proof clarity", href: EN("/commercial-authority/stock-declaration-how-it-works"), chips: ["Stock"] },
      ],
      locations: [
        { title: "Madhavaram", desc: "Industrial/logistics belt", href: EN("/locations/madhavaram"), chips: ["Industrial"] },
        { title: "Manali / Ennore belt", desc: "Heavy industrial zone", href: EN("/locations/manali-ennore-belt"), chips: ["Industrial"] },
      ],
    },
    faqs: [
      { q: "Do you support monthly stock declaration policies?", a: "Yes. We explain how declaration works and what proof helps avoid mismatch disputes." },
      { q: "Is this only for large warehouses?", a: "No. Even small godowns face fire/stock risk—proof discipline is what matters." },
    ],
  },

  "claim-support": {
    slug: "claim-support",
    href: EN("/services/claim-support"),
    h1: "Claim Support (Documents • Timelines • Reporting Discipline)",
    metaDesc:
      "Step-by-step claim guidance with a documentation-first approach—what to do first, what proof matters, and how to reduce delays for commercial, transport and domestic claims.",
    serviceType: "Claim Guidance",
    scan3s: [
      "For anyone stuck or unsure during a claim",
      "Focus: reporting steps + proof trail + timeline discipline",
    ],
    proof10s: [
      "30+ years of claim-side guidance experience",
      "We focus on what typically delays or reduces settlement",
    ],
    action30s: {
      title: "What we guide during claims",
      points: [
        "First actions after incident (reporting order + proof capture)",
        "Document checklist based on policy type and situation",
        "Timeline discipline to prevent avoidable disputes",
      ],
    },
    whoThisIsFor: [
      "Commercial incidents (shops/offices/godowns)",
      "Transport incidents (vehicle/fleet/third-party)",
      "Domestic claims (car/bike/health) support where needed",
    ],
    whereWeOperate: {
      primary: ["Sholavaram", "Red Hills Toll belt", "Madhavaram", "Nearby NH/industrial belts"],
      citySupport: ["Chennai (major areas) for domestic claims support"],
      nearby: ["Puzhal belt", "Ponneri belt", "Thiruvallur belt"],
    },
    localRiskNotes: [
      "In highway belts, third-party interactions escalate fast—timelines matter",
      "In industrial belts, proof discipline matters most for settlement clarity",
    ],
    commonClaimFailures: [
      "Late reporting / missing incident timeline",
      "Incomplete proof trail (photos/invoices/stock evidence)",
      "Wording/coverage mismatch vs actual operations",
    ],
    checklist: [
      "Policy copy + claim intimation reference (if any)",
      "Incident date/time + location + brief sequence",
      "Photos/videos taken immediately (as available)",
      "Invoices/RC/permits/stock proof depending on claim type",
    ],
    internalLinks: {
      relatedServices: [
        { title: "Transport / Fleet / Lorry", desc: "NH belt fleet guidance", href: EN("/services/transport-fleet-lorry-insurance"), chips: ["Transport"] },
        { title: "Warehouse / Godown / Factory", desc: "Stock + fire risk clarity", href: EN("/services/warehouse-godown-factory-insurance"), chips: ["Industrial"] },
      ],
      relatedArticles: [
        { title: "What delays claims (30+ years)", desc: "Practical claim-side view", href: EN("/proof-experience/30-years-claim-handling"), chips: ["Experience"] },
        { title: "Claim documents checklist", desc: "What people forget", href: EN("/insights/claim-documents-checklist"), chips: ["Checklist"] },
      ],
      locations: [
        { title: "Sholavaram", desc: "Base office support", href: EN("/locations/sholavaram"), chips: ["Location"] },
      ],
    },
    faqs: [
      { q: "Can you help if the policy was bought online?", a: "Yes. Claim success depends on proof, disclosures and timelines—online purchase is fine if documentation is strong." },
      { q: "Do you share client names or claim numbers?", a: "No. We keep it privacy-safe and focus on process clarity and documentation discipline." },
    ],
  },
};
