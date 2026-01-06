// src/content/siteData.js
// ✅ COMPLETE siteData rewrite (authority-sequenced, WHO–WHERE–WHY driven)
// Keeps your existing theme/components, removes generic fluff, anchors experience + geo-risk.

export const EN = (href = "") => {
  if (!href) return href;
  if (href.startsWith("http")) return href;
  if (href.startsWith("/en/")) return href;
  // keep root "/" as "/en/"
  if (href === "/") return "/en/";
  // Add trailing slash if missing
  const path = href.endsWith("/") ? href : `${href}/`;
  return `/en${path.startsWith("/") ? "" : "/"}${path}`;
};

// Also add normalized fields for easy UI use.
const gmbReviewsRaw = {
  reviews: [
    {
      reviewer: { displayName: "VM SQUARE" },
      starRating: "FIVE",
      comment:
        "Found this place through Google Ads. Got insurance for my factory, staff, and godown. Clear explanation and no hidden costs. Local agent with 30+ years experience. Highly trustworthy!",
      createTime: "2025-08-05T06:40:04.404367Z",
      updateTime: "2025-08-05T06:40:04.404367Z",
      reviewReply: {
        comment:
          "Thanks for the trust! We're happy you found us through Google and chose us for your factory, godown and worker insurance. We aim to serve with honesty and fast service. Always here to support your business growth!",
        updateTime: "2025-08-05T06:45:07.843699Z",
      },
    },
    {
      reviewer: { displayName: "Sanju Dhoni" },
      starRating: "FIVE",
      comment:
        "We needed commercial insurance for our small business and workers.\nGot full support and quick policy from The New India Assurance through Mr.Rajendrakumar.\nVery Reliable service near Madhavaram.",
      createTime: "2025-08-05T06:39:56.922101Z",
      updateTime: "2025-08-05T06:39:56.922101Z",
      reviewReply: {
        comment:
          "Thank you for choosing us for your commercial and business insurance needs! We’re proud to serve small businesses and workers insurance coverage under The New India Assurance. We're always here for renewal, claims, or queries.",
        updateTime: "2025-08-05T06:44:07.712710Z",
      },
    },
    {
      reviewer: { displayName: "S. AKASH Musician" },
      starRating: "FIVE",
      comment: "Very excellent service",
      createTime: "2025-07-29T03:33:40.318508Z",
      updateTime: "2025-07-29T03:33:40.318508Z",
      reviewReply: {
        comment:
          "Thanks a lot! We're happy to provide reliable support for all your bike, car, health, and general insurance needs across Madhavaram, Ambattur, and surrounding Chennai North locations. Your satisfaction keeps us going!",
        updateTime: "2025-07-30T08:07:07.119859Z",
      },
    },
    {
      reviewer: { displayName: "Alagesan A" },
      starRating: "FIVE",
      comment: "Very good service also good explanation about insurance.",
      createTime: "2025-07-20T05:43:52.139228Z",
      updateTime: "2025-07-20T05:43:52.139228Z",
      reviewReply: {
        comment:
          "Thank you so much for your kind words! We’re committed to offering clear guidance on vehicle, health, and LIC insurance to customers in Redhills, Sholavaram, and nearby Chennai areas. Your trust means a lot to us!",
        updateTime: "2025-07-30T08:06:34.832449Z",
      },
    },
    {
      reviewer: { displayName: "D T" },
      starRating: "FIVE",
      comment:
        "Mr M N Rajendrakumar had done Excellent Support for Car Insurance Policy Issuance & Given Best Services & Guidance for Mediclaim Insurance Claims. I Appreciate his Services.\nD Thiagarajan, Madhavaram, Chennai",
      createTime: "2025-07-17T17:05:20.539010Z",
      updateTime: "2025-07-17T17:05:20.539010Z",
      reviewReply: {
        comment:
          "Thank you Mr. Thiagarajan for your kind appreciation! We’re happy to know you were satisfied with the car insurance issuance process and our guidance for mediclaim claims. We look forward to assisting you again!",
        updateTime: "2025-07-18T08:37:02.114942Z",
      },
    },
    // ...keep adding the rest of your exported reviews here
  ],
};

// ✅ Helper: starRating string -> number
const ratingToNumber = (r) => {
  switch (r) {
    case "ONE": return 1;
    case "TWO": return 2;
    case "THREE": return 3;
    case "FOUR": return 4;
    case "FIVE": return 5;
    default: return null;
  }
};

// ✅ Helper: safe date
const toISODate = (s) => (typeof s === "string" ? s : "");

// ✅ Helper: shrink long reviews for UI (keep full text in raw)
const clampText = (t, n = 220) =>
  typeof t === "string" && t.length > n ? t.slice(0, n).trim() + "…" : (t || "");

// ✅ Normalize for UI (latest first)
const gmbReviewsNormalized = (gmbReviewsRaw.reviews || [])
  .map((x) => ({
    name: x?.reviewer?.displayName || "Customer",
    stars: ratingToNumber(x?.starRating),
    quote: (x?.comment || "").trim(),
    quoteShort: clampText((x?.comment || "").trim(), 220),
    createdAt: toISODate(x?.createTime),
    replied: Boolean(x?.reviewReply?.comment),
    reply: (x?.reviewReply?.comment || "").trim(),
    replyAt: toISODate(x?.reviewReply?.updateTime),
  }))
  .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));


export const siteData = {
  brand: {
    name: "M N Rajendrakumar Insurance Services",
    legalName: "M N Rajendrakumar",
    tagline: "Commercial • Vehicle • Industrial",
    subtitle:
      "Claim-first insurance guidance for Chennai outskirts businesses — Sholavaram, Red Hills Toll belt, Madhavaram & nearby highway/industrial zones.",

    phone: "7448324068",
    phoneE164: "+917448324068",
    whatsappE164: "917448324068",
    whatsappPrefill:
      "Hi, I need guidance on the right insurance for my business / vehicle. Please help.",

    primaryArea: "Sholavaram (Chennai Outskirts)",
    areaChips: ["Sholavaram", "Red Hills Toll", "Madhavaram", "Chennai Outskirts"],

    // Address (GBP-consistent)
    streetAddress: "KVT AVENUE SHOZIPALAYAM, NO-39, 4TH MAIN ROAD",
    addressLocality: "Sholavaram",
    addressRegion: "Tamil Nadu",
    postalCode: "600067",
    addressCountry: "IN",

    // GBP / Maps
    gbpUrl:
      "https://www.google.com/maps/place/M+N+Rajendrakumar+Insurance+Services+%E2%80%93+Commercial,+Vehicle+%26+Industrial+Insurance+%7C+Sholavaram,+Karanodai,+Redhills/@13.2391084,80.1702588,17z/data=!3m1!4b1!4m6!3m5!1s0x3a527d2b1e29b5ff:0xe9b9b0049f529b6b!8m2!3d13.2391084!4d80.1728337!16s%2Fg%2F11xlhmwb8r",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.7801632048363!2d80.1702587736598!3d13.239108387101373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d2b1e29b5ff%3A0xe9b9b0049f529b6b!2sM%20N%20Rajendrakumar%20Insurance%20Services%20%E2%80%93%20Commercial%2C%20Vehicle%20%26%20Industrial%20Insurance%20%7C%20Sholavaram%2C%20Karanodai%2C%20Redhills!5e0!3m2!1sen!2sin!4v1767543679104!5m2!1sen!2sin",

    geo: { lat: 13.2391084, lng: 80.1728337 },

    hours: {
      is24x7: true,
      label: "Open 24 hours",
    },

    websiteUrl: "", // set later
    logoUrl: "", // optional later
  },

  // ✅ Above-the-fold intent (Identity + relevance)
  pageFlow: {
    heroH1:
      "Insurance Consultant for Commercial, Vehicle & Industrial Risks in Sholavaram",
    heroP:
      "30+ years guiding coverage and claim documentation for transport operators, warehouses, factories and MSME businesses across Sholavaram, Red Hills Toll belt, Madhavaram and Chennai outskirts.",
    primaryCtaLabel: "Call for Policy Clarity",
    secondaryCtaLabel: "WhatsApp for Guidance",
  },

  // ✅ Scan-friendly quick proof (chips already in UI)
  trustChips: [
    "30+ Years Field Experience",
    "Claim Guidance (Not Just Sales)",
    "Highway & Industrial Belt Focus",
    "Local Support: Sholavaram • Red Hills • Madhavaram",
  ],

  // ✅ SECTION: WHO we mainly help (industry anchoring)
  primaryIndustries: {
    title: "Who We Commonly Assist",
    subtitle:
      "We primarily support businesses operating in highway-facing and industrial risk zones across Chennai outskirts.",
    items: [
      {
        title: "Transport operators & fleet owners",
        desc: "Goods vehicles, permits/fitness discipline, third-party exposure and claim workflows.",
      },
      {
        title: "Warehouse / godown owners",
        desc: "Fire load, stock proof, burglary risk, declaration mismatch prevention.",
      },
      {
        title: "Small factories & industrial units",
        desc: "Electrical fire load, liability exposure, valuation and documentation alignment.",
      },
      {
        title: "Contractors & equipment owners",
        desc: "Worksite risk, public exposure, CAR/WC mindset and claim-ready documentation.",
      },
      {
        title: "Local MSME businesses",
        desc: "Shops/offices/service units—practical risk framing with clear policy wording.",
      },
    ],
  },

  // ✅ SECTION: WHY your geography matters (local risk intelligence)
  localRiskContext: {
    title: "Why Insurance Matters More in Chennai Outskirts",
    subtitle:
      "Sholavaram–Red Hills Toll–Madhavaram belts behave differently because of highway movement, industrial storage, and frequent third-party interactions.",
    points: [
      "Highway-side godowns see higher accident + third-party exposure",
      "Industrial belts increase electrical fire load and liability risk",
      "Transport hubs face claim disputes when policy wording doesn’t match operations",
      "Seasonal flooding/water ingress impacts stock, machinery and vehicles",
    ],
  },

  // ✅ SECTION: Experience that cannot be Googled (claim-side authority)
  claimExperience: {
    title: "From Our Claim Experience",
    subtitle:
      "We focus on the gaps that typically delay or reduce settlements—wording, valuation and proof.",
    points: [
      "Undervaluation / wrong sum insured is a common reason settlements get reduced",
      "Loading–unloading / worksite exposure is often missed in online purchases",
      "Godown fire claims fail when stock declaration and proof don’t match",
      "Third-party cases need timely reporting + correct paper trail, not just forms",
    ],
  },

  // ✅ Services summary (clean; details go to service pages)
coreServices: [
  {
    tag: "Commercial",
    title: "Business & MSME Insurance",
    desc:
      "Claim-first guidance for shops, offices, MSMEs and service units—policy wording + documentation aligned to real operations.",
    tone: "teal",
    metaLabel: "Focus",
    metaValue: "Business",
    slug: "business-msme-insurance",
    href: EN("/services/business-msme-insurance/"),
  },

  {
    tag: "Transport",
    title: "Transport / Fleet / Lorry Insurance",
    desc:
      "Guidance for operators in NH-facing belts—permits/fitness discipline, third-party exposure, claim-ready documentation.",
    tone: "black",
    metaLabel: "Docs",
    metaValue: "Ready",
    slug: "transport-fleet-lorry-insurance",
    href: EN("/services/transport-fleet-lorry-insurance/"),
  },

  {
    tag: "Industrial",
    title: "Warehouse / Godown / Factory Insurance",
    desc:
      "Fire, burglary and stock-risk guidance for industrial belts—valuation + proof discipline to avoid claim reductions.",
    tone: "purple",
    metaLabel: "Risk",
    metaValue: "High",
    slug: "warehouse-godown-factory-insurance",
    href: EN("/services/warehouse-godown-factory-insurance/"),
  },

  {
    tag: "Heavy Equipment",
    title: "Crane & Heavy Equipment (CPM) Insurance",
    desc:
      "Declared value + third-party risk alignment for cranes and heavy equipment operating near highways and worksites.",
    tone: "lemon",
    metaLabel: "Premium",
    metaValue: "High",
    slug: "crane-heavy-equipment-cpm-insurance",
    href: EN("/services/crane-heavy-equipment-cpm-insurance/"),
  },

  {
    tag: "Construction",
    title: "Construction & Contractor Insurance (CAR / WC)",
    desc:
      "Worksite risk, workforce exposure and documentation discipline—built for real contractor workflows and claim timelines.",
    tone: "teal",
    metaLabel: "Sites",
    metaValue: "Active",
    slug: "construction-contractor-car-wc-insurance",
    href: EN("/services/construction-contractor-car-wc-insurance/"),
  },

  {
    tag: "Liability",
    title: "Public Liability & Third-Party Risk",
    desc:
      "Third-party incidents become expensive fast—coverage clarity for businesses with customer/public interaction and site exposure.",
    tone: "black",
    metaLabel: "Exposure",
    metaValue: "3rd-party",
    slug: "public-liability-third-party-insurance",
    href: EN("/services/public-liability-third-party-insurance/"),
  },

  {
    tag: "Marine",
    title: "Marine Cargo / Goods-in-Transit",
    desc:
      "Transit risk guidance for NH movement—invoice, packaging proof, route clarity and claim documentation habits.",
    tone: "purple",
    metaLabel: "Transit",
    metaValue: "Cargo",
    slug: "marine-cargo-goods-in-transit-insurance",
    href: EN("/services/marine-cargo-goods-in-transit-insurance/"),
  },

  {
    tag: "Property",
    title: "Fire & Burglary (Commercial Property)",
    desc:
      "Fire load + burglary risk aligned to stock, premises and safety discipline—focused on claim acceptance basics.",
    tone: "lemon",
    metaLabel: "Property",
    metaValue: "Protection",
    slug: "fire-burglary-commercial-property-insurance",
    href: EN("/services/fire-burglary-commercial-property-insurance/"),
  },

  {
    tag: "Employee",
    title: "Group Health / Employee Benefits (SME)",
    desc:
      "Practical guidance for SMEs adding employee cover—enrolment clarity, claim process readiness, and renewal discipline.",
    tone: "teal",
    metaLabel: "Team",
    metaValue: "Benefits",
    slug: "group-health-employee-benefits-insurance",
    href: EN("/services/group-health-employee-benefits-insurance/"),
  },

  {
    tag: "Claims",
    title: "Claim Support",
    desc:
      "Step-by-step claim guidance—documents, timelines, reporting steps and proof discipline to reduce delays.",
    tone: "black",
    metaLabel: "Process",
    metaValue: "Smooth",
    slug: "claim-support",
    href: EN("/services/claim-support/"),
  },

  {
    tag: "Personal",
    title: "Car / Bike / Health (Support)",
    desc:
      "Personal policies support across Chennai major areas—renewal checks and basic claim-side guidance.",
    tone: "purple",
    metaLabel: "Support",
    metaValue: "Domestic",
    slug: "personal-car-bike-health-support",
    href: EN("/services/personal-car-bike-health-support/"),
  },
],



  // ✅ Marketplace cards (short, credible)
  marketplaceCards: [
    {
      iconText: "C",
      title: "Commercial Guidance",
      rating: "4.8",
      desc:
        "Practical business coverage framing—policy wording + documentation-first approach.",
      area: "Sholavaram",
      variant: "v1",
    },
    {
      iconText: "T",
      title: "Transport / Fleet",
      rating: "4.7",
      desc:
        "Permits, fitness, third-party exposure—guidance built for highway-facing operations.",
      area: "Red Hills Toll belt",
      variant: "v2",
    },
    {
      iconText: "I",
      title: "Industrial Support",
      rating: "4.9",
      desc:
        "Warehouse/factory risk guidance for Chennai outskirts industrial belts with proof discipline.",
      area: "Madhavaram",
      variant: "v3",
    },
  ],

  // ✅ SECTION: Services + Locations + “popular area services” phrases
// ✅ FIX: Align dataset node names with what your UI expects
// Your UI expects:
// services.commercial, services.domestic
// locations.commercialBelts, locations.chennaiCityDomestic
// popular.commercial, popular.domestic
//
// So we will normalize coverageIndex to exactly that shape.
// Also: cover BOTH (1) commercial in outskirts/NH/industrial belt (high premium)
// and (2) domestic inside Chennai major areas.
// Plus: add "Services × Areas" tagged section for SEO/LLM extraction.

  coverageIndex: {
    title: "Services & Locations Covered",
    subtitle:
      "Commercial-first guidance for Chennai outskirts (NH + industrial belts) and domestic support across key Chennai areas — with a claim-ready documentation mindset.",

    // ✅ UI expects services.commercial + services.domestic
    services: {
      commercial: [
        "Crane & Heavy Equipment (CPM) insurance guidance",
        "Warehouse / Godown / Factory (Fire, Stock, Burglary) guidance",
        "Transport / Fleet / Lorry insurance guidance",
        "Construction & Contractor (CAR / WC) guidance",
        "Import / Export & Marine Cargo (Transit) guidance",
        "Public Liability / Third-party exposure guidance",
        "MSME / Shop / Office package guidance",
        "Contractors Plant & Machinery / Equipment breakdown guidance",
        "Claim support (documents, timelines, reporting steps)",
      ],

      // ✅ rename from personalSupport → domestic
      domestic: [
        "Car insurance (new / renewal support)",
        "Two-wheeler insurance (new / renewal support)",
        "Health insurance (family guidance)",
        "Personal accident guidance",
        "Home insurance guidance",
        "Term insurance basic guidance",
        "LIC premium continuity reminders",
      ],
    },

    // ✅ UI expects locations.commercialBelts + locations.chennaiCityDomestic
    locations: {
      // Commercial: where high premium opportunities are (NH + industrial activity)
      commercialBelts: [
        "Sholavaram (base office)",
        "Red Hills Toll belt",
        "Madhavaram industrial/logistics belt",
        "Karanodai",
        "Puzhal belt (nearby)",
        "Manali / Ennore belt (industrial, nearby)",
        "Gummidipoondi SIPCOT / industrial belt (nearby)",
        "Ponneri belt (nearby)",
        "Thiruvallur belt (nearby)",
        "NH corridors & highway-facing business zones (within ~50 km)",
        "Chennai Outskirts industrial clusters",
      ],

      // Domestic: inside city major areas (volume + stability)
      chennaiCityDomestic: [
        "Madhavaram",
        "Kolathur",
        "Perambur",
        "Anna Nagar",
        "Ambattur",
        "Padi",
        "Villivakkam",
        "Ayanavaram (nearby)",
        "Retteri (nearby)",
        "Avadi (nearby)",
        "Chennai (major areas)",
      ],
    },

    // ✅ UI expects popular.commercial + popular.domestic
    // These are phrased like queries; keep them natural but location+service rich.
    popular: {
      commercial: [
        "Sholavaram commercial insurance services",
        "Red Hills commercial insurance services",
        "Madhavaram commercial insurance services",
        "Sholavaram factory insurance services",
        "Madhavaram warehouse insurance services",
        "Red Hills godown insurance services",
        "Red Hills transport insurance services",
        "Madhavaram lorry insurance services",
        "Sholavaram fleet insurance support",
        "Chennai outskirts business insurance services",
        "NH belt business insurance support",
        "Gummidipoondi industrial insurance guidance",
        "Ponneri transport insurance guidance",
        "Manali industrial insurance support",
        "Ennore industrial insurance guidance",
        "Import export insurance guidance Chennai outskirts",
        "Marine cargo insurance support Chennai",
        "Crane insurance support Sholavaram",
        "Heavy equipment insurance Red Hills",
      ],

      domestic: [
        "Sholavaram car insurance support",
        "Red Hills car insurance renewal support",
        "Madhavaram bike insurance support",
        "Madhavaram health insurance guidance",
        "Anna Nagar car insurance support",
        "Ambattur bike insurance renewal support",
        "Kolathur health insurance guidance",
        "Chennai family health insurance guidance",
        "Chennai term insurance guidance",
        "LIC premium continuity support Chennai",
      ],
    },

    // ✅ NEW: Services × Areas tagged (SEO/LLM extraction gold)
    // Use this to render a grid/list: Area → top services relevant there.
    // This creates strong WHO–WHERE–WHAT nodes for bots.
    areaServiceTags: [
      {
        area: "Sholavaram",
        focus: "Commercial + Industrial (base)",
        services: [
          "Crane & heavy equipment guidance",
          "Warehouse / godown / factory guidance",
          "Transport / fleet guidance",
          "MSME / shop / office packages",
          "Claim support",
        ],
      },
      {
        area: "Red Hills Toll belt",
        focus: "Highway-facing risk zone",
        services: [
          "Transport / lorry / fleet guidance",
          "Third-party liability guidance",
          "Godown / stock risk guidance",
          "Accident exposure risk framing",
          "Claim reporting workflow support",
        ],
      },
      {
        area: "Madhavaram",
        focus: "Logistics + industrial activity",
        services: [
          "Warehouse / factory guidance",
          "Fleet / commercial vehicle guidance",
          "Public liability guidance",
          "Marine/transit guidance",
          "Domestic support (car/bike/health) when needed",
        ],
      },
      {
        area: "Gummidipoondi / Ponneri belt",
        focus: "Industrial + fleet movement",
        services: [
          "Industrial fire + stock risk guidance",
          "Fleet / lorry guidance",
          "Contractor (CAR/WC) guidance",
          "Transit / marine cargo guidance",
        ],
      },
      {
        area: "Chennai City (major areas)",
        focus: "Domestic stability + renewals",
        services: [
          "Car / bike renewals support",
          "Family health insurance guidance",
          "Term plan basics guidance",
          "LIC continuity reminders",
        ],
      },
    ],
  },



  // ✅ Commercial Authority Posts (industry clusters) — keep your existing dataset
  commercialAuthorityPosts: {
    title: "Industry-Focused Insurance Guidance",
    subtitle:
      "Commercial authority content for high-risk and business needs across Chennai outskirts—written with local context and claim readiness in mind.",
    viewAllHref: EN("/commercial-authority"),
    viewMoreHref: EN("/commercial-authority"),
    categories: [
      {
        category: "Crane & Heavy Equipment Insurance",
        items: [
          {
            href: EN("/commercial-authority/crane-heavy-equipment-sum-insured"),
            title:
              "Crane insurance: why declared value decides claim success",
            desc:
              "A practical way to estimate insured value and the proofs insurers typically verify before approval.",
            chips: ["Commercial", "Heavy Equipment"],
            tags: ["#crane-insurance", "#cpm", "#sum-insured", "#claims"],
            readTime: "6 min read",
            levelOrFreq: "Checklist",
          },
          {
            href: "/commercial-authority/crane-third-party-liability-basics",
            title:
              "Third-party liability for cranes: what gets covered and what doesn’t",
            desc:
              "Liability exposure near highways/sites and how to avoid common wording gaps.",
            chips: ["Commercial", "Liability"],
            tags: ["#liability", "#site-risk", "#policy-wording"],
            readTime: "7 min read",
            levelOrFreq: "Explainer",
          },
        ],
      },
      {
        category: "Construction & Contractor Insurance",
        items: [
          {
            href: EN("/commercial-authority/contractor-all-risk-basics"),
            title:
              "Contractor All Risk (CAR): what it covers on real sites",
            desc:
              "What CAR covers, typical exclusions and how documentation reduces claim delays.",
            chips: ["Commercial", "Construction"],
            tags: ["#contractor", "#car-policy", "#documents"],
            readTime: "8 min read",
            levelOrFreq: "Decision guide",
          },
          {
            href: EN("/commercial-authority/workmen-compensation-common-mistakes"),
            title: "Workmen compensation: 5 mistakes contractors make",
            desc:
              "Payroll mismatch, classification errors and late reporting—simple, practical clarity.",
            chips: ["Commercial", "Workforce"],
            tags: ["#workmen-comp", "#wc", "#compliance"],
            readTime: "6 min read",
            levelOrFreq: "Must know",
          },
        ],
      },
      {
        category: "Warehouse / Godown / Factory Insurance",
        items: [
          {
            href: EN("/commercial-authority/factory-fire-theft-risk-basics"),
            title:
              "Warehouse / factory fire + theft: what insurers expect you to maintain",
            desc:
              "Safety + documentation habits that help approvals and reduce disputes during claims.",
            chips: ["Industrial", "Property"],
            tags: ["#warehouse", "#godown", "#factory", "#fire-safety"],
            readTime: "7 min read",
            levelOrFreq: "Local context",
          },
          {
            href: EN("/commercial-authority/stock-declaration-how-it-works"),
            title: "Stock declaration policies explained (no confusion)",
            desc:
              "How declaration works when stock changes month-to-month and what proof insurers ask.",
            chips: ["Industrial", "Stock"],
            tags: ["#stock-declaration", "#valuation", "#proof"],
            readTime: "6 min read",
            levelOrFreq: "Explainer",
          },
        ],
      },
      {
        category: "Transport & Fleet Insurance",
        items: [
          {
            href: EN("/commercial-authority/fleet-insurance-docs-checklist"),
            title:
              "Fleet insurance checklist: documents that speed approvals",
            desc:
              "RC, permits, fitness, hypothecation and driver basics—what to keep ready.",
            chips: ["Transport", "Fleet"],
            tags: ["#fleet", "#transport", "#lorry", "#docs"],
            readTime: "5 min read",
            levelOrFreq: "Checklist",
          },
          {
            href: EN("/commercial-authority/highway-business-risks"),
            title:
              "Highway-area business risks (NH belt): practical cover guidance",
            desc:
              "What changes near highways—accident exposure, liability, storage risk and claims workflow.",
            chips: ["Commercial", "Highway"],
            tags: ["#nh-business", "#liability", "#risk"],
            readTime: "7 min read",
            levelOrFreq: "Geo authority",
          },
        ],
      },
      {
        category: "MSME / Business Insurance",
        items: [
          {
            href: EN("/commercial-authority/msme-policy-wording-simple"),
            title:
              "Policy wording that matters for MSMEs (explained simply)",
            desc:
              "Small wording differences decide claim outcomes—what to check before purchase/renewal.",
            chips: ["Commercial", "MSME"],
            tags: ["#msme", "#policy-wording", "#claims"],
            readTime: "6 min read",
            levelOrFreq: "Must know",
          },
          {
            href: EN("/commercial-authority/sum-insured-why-it-matters"),
            title:
              "Sum insured: a quick method to avoid underinsurance",
            desc:
              "A fast estimate method businesses can follow to avoid settlement reductions.",
            chips: ["Commercial", "Claims"],
            tags: ["#sum-insured", "#underinsurance", "#settlement"],
            readTime: "6 min read",
            levelOrFreq: "Practical",
          },
        ],
      },
    ],
  },

  // ✅ Proof / Experience (independent of industry)
  proofExperiencePosts: {
    title: "Proof & Experience",
    subtitle:
      "Experience-driven guidance built from 30+ years of policy + documentation conversations—focused on preventing claim delays.",
    viewAllHref: EN("/proof-experience"),
    viewMoreHref: EN("/proof-experience"),
    items: [
      {
        href: EN("/proof-experience/recently-assisted-commercial-client"),
        title:
          "Recently assisted a commercial client (generic): what we fixed before renewal",
        desc:
          "No names—sum insured, proof alignment and wording clarity we corrected so future claims don’t get stuck.",
        chips: ["Trust", "Commercial"],
        tags: ["#experience", "#renewal", "#policy-check"],
        readTime: "4 min read",
        levelOrFreq: "Real-world",
      },
      {
        href: EN("/proof-experience/30-years-claim-handling"),
        title: "30+ years: what actually delays claims",
        desc:
          "A practical view of what insurers check and what people commonly forget in real workflows.",
        chips: ["Trust", "Claims"],
        tags: ["#claims", "#documents", "#timelines"],
        readTime: "5 min read",
        levelOrFreq: "Practical",
      },
      {
        href: EN("/proof-experience/online-vs-advisor"),
        title: "Online vs advisor: where people lose money during claims",
        desc:
          "Buying online is fine—claim success depends on disclosures, wording and proof discipline. Here’s the difference.",
        chips: ["Trust", "Guidance"],
        tags: ["#online-vs-advisor", "#claims", "#wording"],
        readTime: "6 min read",
        levelOrFreq: "Explainer",
      },
      {
        href: EN("/proof-experience/insurer-approval-checklist"),
        title: "What insurers check before approving business policies",
        desc:
          "Location risk, valuation, compliance basics and past history—clean checklist to prepare for approvals.",
        chips: ["Trust", "Approvals"],
        tags: ["#underwriting", "#approval", "#checklist"],
        readTime: "6 min read",
        levelOrFreq: "Checklist",
      },
    ],
  },

  // ✅ Renewal / LIC (maintenance only)
  renewalLicPosts: {
    title: "Renewal & LIC (Support)",
    subtitle:
      "Helpful reminders that maintain existing traffic—kept limited so commercial authority stays primary.",
    viewAllHref: EN("/renewals"),
    viewMoreHref: EN("/renewals"),
    items: [
      {
        href: EN("/renewals/car-insurance-renewal"),
        title: "Car renewal: 5 things to check before paying",
        desc:
          "NCB, add-ons, IDV and wording—quick checklist to avoid unpleasant surprises later.",
        chips: ["Renewal", "Car"],
        tags: ["#car-renewal", "#ncb", "#idv"],
        readTime: "4 min read",
        levelOrFreq: "Reminder",
      },
      {
        href: EN("/renewals/lorry-insurance-renewal"),
        title: "Lorry renewal tips for Chennai outskirts fleets",
        desc:
          "Permits, fitness, driver basics, claim history and add-ons that matter for transport businesses.",
        chips: ["Renewal", "Lorry"],
        tags: ["#lorry", "#fleet", "#renewal"],
        readTime: "5 min read",
        levelOrFreq: "Local context",
      },
      {
        href: EN("/renewals/lic-premium-continuity"),
        title: "LIC premium continuity: why lapses create problems",
        desc:
          "What a lapse changes and how simple reminders + nominee updates prevent gaps later.",
        chips: ["LIC", "Premium"],
        tags: ["#lic", "#premium", "#lapse"],
        readTime: "4 min read",
        levelOrFreq: "Must know",
      },
    ],
  },

  // ✅ Insights (keep, but it should appear AFTER authority sections)
  insights: {
    title: "Insights & Guides",
    subtitle:
      "Practical reads on insurance, safety and risk—written for real situations (not generic theory).",
    viewAllHref: EN("/insights"),
    viewMoreHref: EN("/insights"),
    items: [
      {
        href: EN("/insights/claim-documents-checklist"),
        chipCategory: "Claims",
        chipMap: "Documentation",
        title: "Claim documents checklist (what people forget)",
        desc:
          "Invoices, photos, police reports and timelines—clean essentials that improve claim outcomes.",
        tags: ["#claim-process", "#documentation", "#proof"],
        readTime: "6 min read",
        levelOrFreq: "Practical",
      },
      {
        href: EN("/insights/public-liability-hidden-risk"),
        chipCategory: "Commercial",
        chipMap: "Liability",
        title: "Public liability: the hidden risk many businesses ignore",
        desc:
          "A small incident can become a big claim. Learn what’s covered, exclusions and habits that reduce incidents.",
        tags: ["#liability", "#third-party", "#risk"],
        readTime: "9 min read",
        levelOrFreq: "Business safety",
      },
      {
        href: EN("/insights/zero-dep-explained"),
        chipCategory: "Vehicle",
        chipMap: "Motor",
        title: "Zero depreciation explained like a human",
        desc:
          "When it’s worth it based on vehicle age, usage and parts replaced most often.",
        tags: ["#motor", "#zero-dep", "#claims"],
        readTime: "5 min read",
        levelOrFreq: "Explainer",
      },
    ],
  },

  // ✅ FAQs — keep contextual (not “what is insurance”)
  faqs: [
    {
      q: "What types of businesses do you primarily support?",
      a:
        "We mainly help transport operators, warehouse/godown owners, small factories, contractors and local MSMEs across Sholavaram, Red Hills Toll belt, Madhavaram and Chennai outskirts.",
    },
    {
      q: "What improves claim outcomes in commercial policies?",
      a:
        "Correct valuation/sum insured, policy wording that matches real operations (loading/unloading, storage, worksite exposure), and a clean proof trail (invoices, photos, stock proof, timelines).",
    },
    {
      q: "Do you help during claims or only at purchase/renewal?",
      a:
        "Yes. We guide claim steps and documents—what to report, what proof matters, and how to reduce delays through documentation-first discipline.",
    },
    {
      q: "Which areas do you cover?",
      a:
        "Chennai outskirts focus—Sholavaram, Red Hills Toll belt, Madhavaram and nearby highway/industrial belts. We also support nearby Chennai areas for personal policies when needed.",
    },
  ],

  // ✅ “How we help” — rewritten to be anchored, not generic
  howWeHelp: [
    {
      title: "How You’ll Get Help",
      items: [
        {
          strong: "Industry-first coverage clarity",
          text:
            "We align coverage to your real operations—transport movement, storage, worksite exposure, public interaction and asset value.",
        },
        {
          strong: "Documentation-first discipline",
          text:
            "We help you keep claim-ready basics aligned: invoices, valuation proof, stock evidence, photos and timelines—so settlements don’t get stuck later.",
        },
        {
          strong: "Local risk context (Chennai outskirts)",
          text:
            "Highway movement + industrial fire load + third-party exposure changes what matters in policies—our guidance is built for this reality.",
        },
      ],
    },
    {
      title: "Primary Service Belts",
      items: [
        { strong: "Sholavaram", text: "Commercial + MSME focus." },
        { strong: "Red Hills Toll belt", text: "Transport + godown + highway-facing risk guidance." },
        { strong: "Madhavaram", text: "Industrial/logistics belt support." },
        { strong: "Chennai Outskirts", text: "Nearby highway (NH) & industrial belts." },
      ],
    },
  ],

    // ✅ Reviews: raw + normalized
  reviews: {
    source: "google-business-profile",
    gbpUrl: "", // optional: set to your GBP review link if you want later
    raw: gmbReviewsRaw,
    items: gmbReviewsNormalized,
  },

    testimonials: {
    title: "Google Reviews (Verified)",
    subtitle: "Recent customer feedback from our Google Business Profile.",
    avgScore: "+4.8", // optional: compute later if you want
    avgText: "Average rating (Google)",
    pillHref: EN("/reviews"),
    showControls: false,
    items: gmbReviewsNormalized.slice(0, 8).map((r) => ({
      stars: r.stars || 5,
      quote: r.quoteShort || r.quote,
      name: r.name,
      role: "Google Review",
    })),
  },

  statsStrip: {
    title: "Trusted insurance guidance in Sholavaram (Chennai Outskirts)",
    stats: [
      { value: "30+ yrs", label: "Experience" },
      { value: "Claim-first", label: "Mindset" },
      { value: "Local", label: "Belt knowledge" },
      { value: "Clear", label: "Wording & docs" },
    ],
  },

  footerCtas: {
    title: "Need clarity before buying or renewing a policy?",
    subtitle:
      "Talk to us before you commit—especially for commercial, transport and industrial risks in Chennai outskirts.",
    callLabel: "Call for Guidance",
    brandName: "M N Rajendrakumar • New India Assurance",
    logoText: "NIA",
    copyright: "Copyright 2026 © Sholavaram",
  },
  servicesDetail: {
  "business-msme-insurance": {
    seoTitle: "Business & MSME Insurance Consultant in Sholavaram (Chennai Outskirts)",
    seoDesc:
      "Claim-first guidance for shops, offices and MSMEs across Sholavaram, Red Hills Toll belt, Madhavaram and Chennai outskirts. Focus on wording, valuation and proof discipline.",
    heroH1: "Business & MSME Insurance (Claim-first Guidance)",
    heroP:
      "For shops, offices and MSMEs operating in NH-facing and industrial belts—coverage clarity that matches real operations, with documentation habits that protect claims later.",
    whoFor: [
      "Local shops, offices, showrooms and service businesses",
      "Small manufacturing / units with stock + electrical fire load",
      "Business owners renewing without clarity on sum insured and inclusions",
    ],
    localFit:
      "In Chennai outskirts, business risk often combines storage + public interaction + highway movement. Small wording gaps (stock declaration, theft conditions, electrical fire) are common claim friction points.",
    keyCoverFocus: [
      "Correct sum insured and valuation logic (avoid underinsurance)",
      "Stock proof discipline (invoices, registers, photos, declarations)",
      "Burglary/fire requirements that affect claim acceptance",
      "Add-ons that matter when operations differ from ‘standard retail’",
    ],
    claimDocs: [
      "Invoice / stock proof and valuation basis",
      "Premises photos + safety setup proof (as applicable)",
      "Policy copy + endorsements + declaration history (if any)",
      "Incident timeline + supporting documents (when claim happens)",
    ],
    commonMistakes: [
      "Sum insured selected randomly (settlement reduced later)",
      "Stock declaration mismatch (major dispute trigger)",
      "Not maintaining basic proof trail for goods / assets",
      "Assuming online purchase wording covers real operations",
    ],
    areaSignals: [
      "Sholavaram business insurance guidance",
      "Red Hills MSME insurance support",
      "Madhavaram shop office package insurance",
      "Chennai outskirts commercial insurance consultant",
    ],
    faqs: [
      {
        q: "Is this only for big companies?",
        a:
          "No. MSME and small businesses benefit most because claim issues usually happen due to missing proof or wrong valuation—not because coverage is impossible.",
      },
      {
        q: "What should I keep ready before calling?",
        a:
          "Business type, exact location, approximate stock/assets value, and existing policy details (if any). If you store stock, keep basic proof (invoices/register/photos).",
      },
    ],
    internalLinks: [
      { label: "Claim Support", href: EN("/services/claim-support") },
      { label: "Fire & Burglary", href: EN("/services/fire-burglary-commercial-property-insurance") },
      { label: "Public Liability", href: EN("/services/public-liability-third-party-insurance") },
    ],
  },

  "transport-fleet-lorry-insurance": {
    seoTitle: "Transport / Fleet / Lorry Insurance Guidance – Red Hills Toll & NH Belts",
    seoDesc:
      "Transport insurance consultant for fleets and lorry operators in Sholavaram, Red Hills Toll belt, Madhavaram and NH corridors. Claim-ready guidance: permits, fitness, third-party exposure.",
    heroH1: "Transport / Fleet / Lorry Insurance (NH-belt Reality)",
    heroP:
      "Fleet and lorry insurance guidance built for highway-facing operations—where third-party exposure and documentation discipline decide claim outcomes.",
    whoFor: [
      "Lorry owners / fleet operators",
      "Logistics businesses moving goods in NH corridors",
      "Owners renewing without checking policy wording vs real operations",
    ],
    localFit:
      "NH-facing belts see higher third-party incidents and documentation scrutiny. A clean paper trail (permits/fitness/driver basics) reduces avoidable claim delays.",
    keyCoverFocus: [
      "Third-party exposure clarity + accident reporting readiness",
      "Permit/fitness/RC alignment (common underwriting checks)",
      "Loading/unloading/worksite exposure (often missed)",
      "Fleet discipline: driver + vehicle documentation habits",
    ],
    claimDocs: [
      "RC, permit, fitness, pollution (as applicable)",
      "Driver documents (as applicable)",
      "Claim timeline + FIR/spot documents (when needed)",
      "Repair estimate + photos + incident details",
    ],
    commonMistakes: [
      "Fitness/permit lapse causing claim friction",
      "Late reporting or incomplete incident timeline",
      "Assuming ‘basic’ covers operational exposure",
      "Not keeping vehicle + driver documents organized",
    ],
    areaSignals: [
      "Red Hills Toll belt transport insurance",
      "Sholavaram lorry insurance guidance",
      "Madhavaram fleet insurance support",
      "Chennai outskirts NH belt transport insurance",
    ],
    faqs: [
      {
        q: "Why do fleet claims get delayed most often?",
        a:
          "Late reporting, missing documents, and mismatch between real operations and policy wording (especially loading/unloading and third-party exposure).",
      },
    ],
    internalLinks: [
      { label: "Marine Cargo / Transit", href: EN("/services/marine-cargo-goods-in-transit-insurance") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },

  "warehouse-godown-factory-insurance": {
    seoTitle: "Warehouse / Godown / Factory Insurance – Chennai Outskirts Industrial Belts",
    seoDesc:
      "Industrial insurance guidance for warehouses, godowns and small factories across Sholavaram, Madhavaram, Manali/Ennore and nearby industrial belts. Fire load, stock proof and claim readiness.",
    heroH1: "Warehouse / Godown / Factory Insurance (Industrial Belt Focus)",
    heroP:
      "Industrial property guidance where fire load, storage and proof discipline matter—structured for claim acceptance, not just premium.",
    whoFor: [
      "Warehouse / godown owners",
      "Small factories and units with stock + machinery",
      "Businesses in industrial belts with higher fire + burglary exposure",
    ],
    localFit:
      "Industrial belts increase electrical fire load and storage risk. Claim outcomes depend heavily on stock proof, valuation, safety habits and clear declarations.",
    keyCoverFocus: [
      "Stock declaration clarity (when stock fluctuates)",
      "Fire load + safety documentation habits",
      "Valuation basis for building/stock/machinery",
      "Burglary conditions + security discipline",
    ],
    claimDocs: [
      "Stock invoices/register + photos",
      "Safety measures proof (as applicable)",
      "Policy copy + endorsements",
      "Incident timeline + report documents (if any)",
    ],
    commonMistakes: [
      "No consistent proof of stock value",
      "Wrong sum insured / undervaluation",
      "Not updating insurer when risk changes (layout/stock type)",
    ],
    areaSignals: [
      "Madhavaram warehouse insurance guidance",
      "Sholavaram godown insurance consultant",
      "Manali Ennore industrial insurance support",
      "Chennai outskirts factory insurance services",
    ],
    faqs: [
      {
        q: "What do insurers check most for warehouse/fire policies?",
        a:
          "Stock proof, valuation basis, safety discipline, and whether declarations match the stored goods and layout.",
      },
    ],
    internalLinks: [
      { label: "Fire & Burglary", href: EN("/services/fire-burglary-commercial-property-insurance") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },

  "crane-heavy-equipment-cpm-insurance": {
    seoTitle: "Crane & Heavy Equipment (CPM) Insurance – Sholavaram / Red Hills",
    seoDesc:
      "High-premium CPM insurance guidance for cranes and heavy equipment in NH and industrial worksites. Focus on declared value, third-party risk and claim documentation discipline.",
    heroH1: "Crane & Heavy Equipment (CPM) Insurance",
    heroP:
      "High-premium equipment insurance guidance built around declared value, third-party exposure and proof discipline—especially for NH/industrial worksites.",
    whoFor: [
      "Crane owners and operators",
      "Equipment rental businesses",
      "Contractors using heavy equipment at worksites",
    ],
    localFit:
      "NH belts and worksites increase third-party exposure. Wrong declared value and unclear usage details are common claim dispute triggers.",
    keyCoverFocus: [
      "Declared value logic (settlement depends on it)",
      "Usage / site exposure alignment (avoid wording gaps)",
      "Third-party risk clarity near highways / public zones",
      "Maintenance/inspection discipline (as applicable)",
    ],
    claimDocs: [
      "Purchase value / valuation basis",
      "Equipment details + usage context",
      "Photos + maintenance/inspection records (as applicable)",
      "Incident timeline + supporting docs",
    ],
    commonMistakes: [
      "Declared value chosen too low to save premium",
      "Not clarifying how/where equipment is used",
      "Missing proof trail when incident occurs",
    ],
    areaSignals: [
      "Sholavaram crane insurance support",
      "Red Hills heavy equipment insurance",
      "Chennai outskirts CPM insurance consultant",
    ],
    internalLinks: [
      { label: "Construction & Contractor", href: EN("/services/construction-contractor-car-wc-insurance") },
      { label: "Public Liability", href: EN("/services/public-liability-third-party-insurance") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },

  "construction-contractor-car-wc-insurance": {
    seoTitle: "Construction & Contractor Insurance (CAR/WC) – Chennai Outskirts",
    seoDesc:
      "Contractor insurance guidance for active worksites: CAR/WC mindset, workforce exposure, documentation discipline and claim reporting structure.",
    heroH1: "Construction & Contractor Insurance (CAR / WC)",
    heroP:
      "Guidance for contractors working in NH/industrial belts—worksite risk, workforce exposure and claim-ready documentation habits.",
    whoFor: [
      "Contractors and subcontractors",
      "Site-based teams with workforce exposure",
      "Equipment + public exposure near highways",
    ],
    localFit:
      "Contractor claims often fail due to late reporting, payroll/classification mismatch, and unclear site exposure details.",
    keyCoverFocus: [
      "Workmen compensation discipline (classification/payroll clarity)",
      "Worksite risk clarity (CAR alignment to real work)",
      "Third-party exposure at sites near public movement",
      "Incident reporting timelines + proof trail",
    ],
    claimDocs: [
      "Work order / contract basics (as applicable)",
      "Workforce classification/payroll proof (as applicable)",
      "Site photos + incident timeline + reports",
      "Policy copy + endorsements",
    ],
    commonMistakes: [
      "Wrong worker classification/payroll mismatch",
      "Late reporting after incident",
      "Assuming site exposure is covered without endorsements",
    ],
    areaSignals: [
      "Sholavaram contractor insurance guidance",
      "Red Hills workmen compensation support",
      "Chennai outskirts CAR policy consultant",
    ],
    internalLinks: [
      { label: "Public Liability", href: EN("/services/public-liability-third-party-insurance") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },

  "public-liability-third-party-insurance": {
    seoTitle: "Public Liability / Third-Party Risk – Chennai Outskirts Businesses",
    seoDesc:
      "Liability guidance for businesses with public interaction, site exposure and NH-facing risk. Practical focus: what gets covered, what gets excluded, and proof habits.",
    heroH1: "Public Liability & Third-Party Risk",
    heroP:
      "Third-party incidents become expensive fast. We guide liability coverage clarity for businesses operating near highways, storage and public interaction zones.",
    whoFor: [
      "Warehouses and factories with visitors/vendor movement",
      "Contractors and site-based teams",
      "Businesses near highways with higher public exposure",
    ],
    localFit:
      "Highway/industrial belts see higher interaction risk. Liability claims depend on incident detail quality and timely reporting.",
    keyCoverFocus: [
      "What liability covers vs typical exclusions",
      "Where wording gaps occur (site exposure, operations mismatch)",
      "Incident reporting discipline and documentation quality",
    ],
    claimDocs: [
      "Incident timeline + witnesses (as applicable)",
      "Photos/videos (as applicable)",
      "Any notices/letters received (as applicable)",
      "Policy wording + endorsements",
    ],
    commonMistakes: [
      "Buying liability without aligning operations",
      "Late notice/reporting after incident",
      "Not maintaining incident detail quality",
    ],
    areaSignals: [
      "Chennai outskirts public liability insurance",
      "Red Hills third party liability support",
      "Sholavaram liability insurance guidance",
    ],
    internalLinks: [
      { label: "Contractor (CAR/WC)", href: EN("/services/construction-contractor-car-wc-insurance") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },

  "marine-cargo-goods-in-transit-insurance": {
    seoTitle: "Marine Cargo / Goods-in-Transit – NH Belt Transport & Logistics",
    seoDesc:
      "Transit insurance guidance for cargo movement from Chennai outskirts/NH corridors. Focus: invoice proof, packaging clarity, route documentation and claim discipline.",
    heroH1: "Marine Cargo / Goods-in-Transit (Transit Discipline)",
    heroP:
      "Transit claims succeed when invoice/packing/route proof is clean. We guide practical habits for NH movement and logistics operations.",
    whoFor: [
      "Logistics operators moving goods on NH corridors",
      "Businesses shipping high-value goods",
      "Import/export-related movement (as applicable)",
    ],
    localFit:
      "Transit losses often become documentation disputes. Invoice proof, packing condition and timely reporting decide outcomes.",
    keyCoverFocus: [
      "Invoice/packing proof discipline",
      "Route/mode clarity (avoid claim disputes)",
      "Incident reporting + survey workflow awareness",
    ],
    claimDocs: [
      "Invoice + packing list + dispatch/receipt proof",
      "Photos of packing condition (as applicable)",
      "Transport documents + incident timeline",
    ],
    commonMistakes: [
      "No packing proof for fragile/high-value goods",
      "Late reporting after transit incident",
      "Mismatch between declared goods and actual shipment",
    ],
    areaSignals: [
      "Chennai marine cargo insurance support",
      "NH belt goods in transit insurance guidance",
      "Red Hills logistics transit insurance",
    ],
    internalLinks: [
      { label: "Transport / Fleet", href: EN("/services/transport-fleet-lorry-insurance") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },

  "fire-burglary-commercial-property-insurance": {
    seoTitle: "Fire & Burglary Insurance – Warehouses, Shops, Offices (Chennai Outskirts)",
    seoDesc:
      "Commercial property risk guidance for fire/burglary—sum insured, stock proof discipline, safety habits and claim-ready documentation in Sholavaram/Red Hills/Madhavaram belts.",
    heroH1: "Fire & Burglary (Commercial Property)",
    heroP:
      "Coverage clarity for fire/burglary risks—built around valuation and proof discipline so claims don’t get stuck later.",
    whoFor: [
      "Warehouses/godowns storing stock",
      "Shops/offices with high-value goods",
      "Small factories with electrical fire load",
    ],
    localFit:
      "Fire claims often become proof/valuation disputes. Burglary claims often fail when security conditions and proof trail aren’t aligned.",
    keyCoverFocus: [
      "Sum insured + underinsurance avoidance",
      "Stock proof + declaration clarity",
      "Security/safety requirements that affect claims",
    ],
    claimDocs: [
      "Stock proof + invoices/register/photos",
      "Premises photos + security proof (as applicable)",
      "Incident timeline + police/fire documents (as applicable)",
    ],
    commonMistakes: [
      "No consistent stock proof",
      "Wrong valuation basis",
      "Ignoring policy conditions about security/safety",
    ],
    areaSignals: [
      "Sholavaram fire insurance guidance",
      "Madhavaram burglary insurance support",
      "Red Hills godown fire insurance",
    ],
    internalLinks: [
      { label: "Warehouse / Factory", href: EN("/services/warehouse-godown-factory-insurance") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },

  "group-health-employee-benefits-insurance": {
    seoTitle: "Group Health / Employee Benefits for SMEs – Chennai (Outskirts + City)",
    seoDesc:
      "Employee benefits guidance for SMEs and MSMEs—enrolment clarity, claim process readiness and renewal discipline across Chennai outskirts and major areas.",
    heroH1: "Group Health / Employee Benefits (SME)",
    heroP:
      "Practical guidance for SMEs adding employee benefits—clean enrolment, claim steps clarity, and renewal discipline.",
    whoFor: [
      "SMEs and MSMEs adding employee cover",
      "Businesses wanting predictable renewal discipline",
      "Teams needing simple claim guidance framework",
    ],
    localFit:
      "Employee benefits fail when enrolment and communication is messy. A simple process reduces disputes and frustration later.",
    keyCoverFocus: [
      "Who is covered and enrolment basics",
      "Claim submission clarity (practical steps)",
      "Renewal discipline and member updates",
    ],
    claimDocs: [
      "Employee list/enrolment details (as applicable)",
      "Policy terms summary for internal communication",
      "Claim documents checklist (when required)",
    ],
    commonMistakes: [
      "Wrong/missing employee data during enrolment",
      "No internal communication on claim steps",
      "Not updating changes before renewal",
    ],
    areaSignals: [
      "Chennai group health insurance SME",
      "Madhavaram employee benefits insurance",
      "Chennai outskirts group mediclaim support",
    ],
    internalLinks: [
      { label: "Claim Support", href: EN("/services/claim-support") },
      { label: "Business & MSME", href: EN("/services/business-msme-insurance") },
    ],
  },

  "claim-support": {
    seoTitle: "Claim Support & Claim Documentation Guidance – Sholavaram (Chennai Outskirts)",
    seoDesc:
      "Claim-first guidance: reporting steps, document checklist, timeline discipline and practical clarity to reduce delays for commercial, transport and industrial claims.",
    heroH1: "Claim Support (Documents + Timelines + Process)",
    heroP:
      "Claim success depends on documentation quality and timeline discipline. We guide practical steps to reduce avoidable delays and confusion.",
    whoFor: [
      "Commercial/industrial businesses preparing for claims",
      "Vehicle owners needing claim steps clarity",
      "People stuck due to missing proof or late reporting",
    ],
    localFit:
      "In NH/industrial belts, claims often involve third-party exposure, stock proof scrutiny and survey workflows. A clean proof trail improves outcomes.",
    keyCoverFocus: [
      "What to report and when (timeline discipline)",
      "Which proofs matter (photos/invoices/registers)",
      "How to avoid common settlement reductions",
    ],
    claimDocs: [
      "Policy copy + endorsements",
      "Incident timeline + photos/videos",
      "Invoices/valuation proof (as applicable)",
      "Reports/letters/notices (as applicable)",
    ],
    commonMistakes: [
      "Late intimation/reporting",
      "No clear incident timeline",
      "Missing valuation/stock proof",
      "Assuming forms alone are enough",
    ],
    areaSignals: [
      "Sholavaram insurance claim support",
      "Red Hills claim guidance",
      "Madhavaram commercial claim documentation help",
    ],
    faqs: [
      {
        q: "Do you handle the claim or guide the process?",
        a:
          "We provide step-by-step guidance and document clarity so you can move correctly and avoid delays. Exact handling depends on insurer process and case type.",
      },
    ],
    internalLinks: [
      { label: "Transport / Fleet", href: EN("/services/transport-fleet-lorry-insurance") },
      { label: "Warehouse / Factory", href: EN("/services/warehouse-godown-factory-insurance") },
      { label: "Crane / CPM", href: EN("/services/crane-heavy-equipment-cpm-insurance") },
    ],
  },

  "personal-car-bike-health-support": {
    seoTitle: "Car / Bike / Health Insurance Support – Chennai (Major Areas)",
    seoDesc:
      "Personal policy support across Chennai major areas—renewal checks, add-on clarity and basic claim-side guidance. Anchored to Sholavaram office support.",
    heroH1: "Personal Insurance Support (Car / Bike / Health)",
    heroP:
      "Domestic support for Chennai families—renewal checks and basic claim-side clarity while keeping commercial services primary.",
    whoFor: [
      "Car/bike owners renewing policies",
      "Families choosing health cover with clarity",
      "People wanting simple explanation of add-ons and claim steps",
    ],
    localFit:
      "We support personal policies across Chennai major areas while staying anchored to Sholavaram office operations and our commercial-first practice.",
    keyCoverFocus: [
      "Renewal checks: IDV, NCB, add-ons clarity",
      "Health cover clarity: who is covered and claim steps",
      "Avoiding claim surprises due to wording misunderstandings",
    ],
    claimDocs: [
      "Policy copy",
      "Incident or hospital documents (as applicable)",
      "Photos/invoices (as applicable)",
    ],
    commonMistakes: [
      "Choosing add-ons without usage context",
      "Not checking IDV/NCB properly during renewal",
      "Ignoring claim steps until incident happens",
    ],
    areaSignals: [
      "Chennai car insurance renewal support",
      "Anna Nagar car insurance support",
      "Ambattur bike insurance renewal",
      "Chennai family health insurance guidance",
    ],
    internalLinks: [
      { label: "Renewals", href: EN("/renewals") },
      { label: "Claim Support", href: EN("/services/claim-support") },
    ],
  },
},
postDetails: {
  // ===========================
  // COMMERCIAL AUTHORITY (10)
  // ===========================
  "crane-heavy-equipment-sum-insured": {
    section: "Commercial Authority",
    seoTitle: "Crane insurance: why declared value decides claim success",
    seoDesc:
      "Claim-first crane/CPM guidance for Chennai outskirts: declared value logic, proof discipline, and what insurers verify before claim approval.",
    h1: "Crane insurance: declared value decides claim success",
    intro:
      "In crane/heavy equipment policies, settlement outcomes are closely tied to declared value and the proof trail behind it. In NH/industrial belts, third-party exposure increases scrutiny—so we guide value + documentation discipline upfront.",
    blocks: [
      {
        title: "What insurers typically verify",
        bullets: [
          "Declared value basis (invoice / valuation / market estimate)",
          "How and where the crane is used (site / highway proximity / public exposure)",
          "Maintenance/inspection discipline (as applicable)",
          "Timeline clarity and incident proof quality during claims",
        ],
      },
      {
        title: "Practical declared value method",
        bullets: [
          "Start with purchase invoice / current replacement estimate",
          "Adjust for attachments and major components (boom, winch, etc.)",
          "Keep photos + basic records updated at renewal time",
          "Avoid undervaluation to save premium—settlements reduce later",
        ],
      },
      {
        title: "Common claim friction points",
        bullets: [
          "Declared value too low compared to actual market value",
          "Usage/operation differs from what’s assumed in the proposal",
          "No clean proof trail (photos, repair estimates, incident timeline)",
        ],
      },
    ],
    localSignals: [
      "Sholavaram crane insurance guidance",
      "Red Hills heavy equipment CPM insurance",
      "Chennai outskirts high premium equipment insurance consultant",
    ],
    faqs: [
      {
        q: "Can I declare a low value to reduce premium?",
        a:
          "You can, but it often backfires. Under-declared value is one of the fastest ways to reduce settlement or trigger disputes during claims.",
      },
    ],
  },

  "crane-third-party-liability-basics": {
    section: "Commercial Authority",
    seoTitle: "Third-party liability for cranes: what gets covered and what doesn’t",
    seoDesc:
      "Liability exposure near highways/sites: what liability usually covers, where wording gaps happen, and the documentation habits that reduce disputes.",
    h1: "Third-party liability for cranes: what gets covered and what doesn’t",
    intro:
      "Cranes often operate near public zones, highways and active sites. Third-party incidents can escalate quickly, so we focus on coverage clarity and incident reporting discipline.",
    blocks: [
      {
        title: "Where liability risk becomes real",
        bullets: [
          "Public movement near NH belts and toll stretches",
          "Worksite zones with multiple subcontractors",
          "Loading/unloading areas where people and vehicles mix",
        ],
      },
      {
        title: "Where wording gaps happen",
        bullets: [
          "Mismatch between declared operation and actual usage",
          "Site conditions and third-party exposure not reflected correctly",
          "Delayed reporting and weak incident timelines",
        ],
      },
      {
        title: "Dispute-proof habits",
        bullets: [
          "Maintain a clean incident timeline if something happens",
          "Capture photos/videos immediately (as applicable)",
          "Keep relevant notices/letters and share early",
        ],
      },
    ],
    localSignals: [
      "Red Hills toll belt crane liability",
      "Chennai outskirts third party liability guidance",
    ],
    faqs: [
      {
        q: "Is liability automatically included in every crane policy?",
        a:
          "Not always. What is included depends on the product/wording. We check the exposure vs wording so you don’t assume coverage that isn’t there.",
      },
    ],
  },

  "contractor-all-risk-basics": {
    section: "Commercial Authority",
    seoTitle: "Contractor All Risk (CAR): what it covers on real sites",
    seoDesc:
      "CAR guidance for contractors in Chennai outskirts: real site risks, what to keep documented, and how to avoid claim delays.",
    h1: "Contractor All Risk (CAR): what it covers on real sites",
    intro:
      "Contractor claims usually fail because the site reality and paperwork don’t match. We guide CAR with a practical ‘site + documentation’ mindset.",
    blocks: [
      {
        title: "What we clarify before choosing CAR",
        bullets: [
          "Nature of work, site exposure and third-party interaction",
          "Project timeline and extensions (common friction point)",
          "Material storage and safety discipline",
        ],
      },
      {
        title: "Claim-ready habits",
        bullets: [
          "Keep site photos periodically (proof of progress/condition)",
          "Maintain material invoices and storage proof",
          "Report incidents early and keep a clear event timeline",
        ],
      },
      {
        title: "Mistakes we prevent",
        bullets: [
          "Late reporting after incident",
          "Mismatch in scope/timeline compared to policy",
          "Weak proof trail for materials and damage",
        ],
      },
    ],
    localSignals: [
      "Sholavaram contractor insurance guidance",
      "Chennai outskirts CAR policy consultant",
    ],
    faqs: [
      { q: "Do you need CAR for every small job?", a: "Not always. It depends on site risk, scope, and contract obligations. We align the policy to real exposure." },
    ],
  },

  "workmen-compensation-common-mistakes": {
    section: "Commercial Authority",
    seoTitle: "Workmen compensation: 5 mistakes contractors make",
    seoDesc:
      "WC mistakes that trigger disputes: payroll mismatch, classification errors, late reporting, and weak documentation discipline.",
    h1: "Workmen compensation: 5 mistakes contractors make",
    intro:
      "Workmen compensation issues are usually documentation issues. We keep it simple: correct classification + clean proof + timely reporting.",
    blocks: [
      {
        title: "5 mistakes we see repeatedly",
        bullets: [
          "Wrong worker classification (risk mismatch)",
          "Payroll/headcount mismatch vs declarations",
          "Late reporting when incident happens",
          "No clear incident timeline + missing basics",
          "Renewal without updating workforce changes",
        ],
      },
      {
        title: "Simple discipline that prevents disputes",
        bullets: [
          "Maintain basic workforce records and updates",
          "Keep incident notes and immediate proof when needed",
          "Review classification at renewal time",
        ],
      },
    ],
    localSignals: [
      "Red Hills workmen compensation support",
      "Chennai outskirts WC guidance",
    ],
    faqs: [
      { q: "Why does payroll mismatch matter?", a: "Because insurer pricing and acceptance depends on declared risk. If declarations don’t match reality, disputes become likely." },
    ],
  },

  "factory-fire-theft-risk-basics": {
    section: "Commercial Authority",
    seoTitle: "Warehouse / factory fire + theft: what insurers expect you to maintain",
    seoDesc:
      "Industrial belt guidance: fire load, stock proof, safety discipline and claim-ready documentation for warehouses/factories.",
    h1: "Warehouse / factory fire + theft: what insurers expect you to maintain",
    intro:
      "In industrial belts, claims often become proof + valuation discussions. We focus on practical safety and documentation habits insurers expect.",
    blocks: [
      {
        title: "What typically gets checked",
        bullets: [
          "Stock proof discipline (invoices/register/photos)",
          "Valuation basis for building/stock/machinery",
          "Electrical fire load + safety measures (as applicable)",
          "Security conditions for burglary/theft claims",
        ],
      },
      {
        title: "Common claim blockers",
        bullets: [
          "No consistent stock proof trail",
          "Wrong sum insured / undervaluation",
          "Security/safety conditions not met or not documented",
        ],
      },
    ],
    localSignals: [
      "Madhavaram warehouse insurance guidance",
      "Sholavaram factory insurance consultant",
      "Manali Ennore industrial belt insurance support",
    ],
    faqs: [
      { q: "Why do stock claims get disputed?", a: "Because declarations, invoices and physical proof often don’t match. We set up proof discipline early." },
    ],
  },

  "stock-declaration-how-it-works": {
    section: "Commercial Authority",
    seoTitle: "Stock declaration policies explained (no confusion)",
    seoDesc:
      "How stock declaration works when stock changes monthly and what proof insurers typically ask during claims.",
    h1: "Stock declaration policies explained (no confusion)",
    intro:
      "Stock declaration looks simple, but claim issues happen when documentation doesn’t match declared values. We guide a clear monthly discipline.",
    blocks: [
      {
        title: "How we keep it claim-friendly",
        bullets: [
          "Use a consistent invoice/register method",
          "Keep monthly declaration logic clear and repeatable",
          "Maintain simple photo proof periodically (as applicable)",
        ],
      },
      {
        title: "Why disputes happen",
        bullets: [
          "Declarations not updated when stock fluctuates",
          "Proof trail incomplete during incident month",
          "Mismatch between stored goods and declared category",
        ],
      },
    ],
    localSignals: [
      "Chennai outskirts stock declaration insurance",
      "Madhavaram godown stock declaration guidance",
    ],
    faqs: [
      { q: "Do I need to declare every month?", a: "Depends on the product/wording. If it’s a declaration policy, consistency matters. We guide an easy monthly method." },
    ],
  },

  "fleet-insurance-docs-checklist": {
    section: "Commercial Authority",
    seoTitle: "Fleet insurance checklist: documents that speed approvals",
    seoDesc:
      "Fleet approvals and claims move faster when permits/fitness/RC and basic discipline is clean—especially in NH-facing belts.",
    h1: "Fleet insurance checklist: documents that speed approvals",
    intro:
      "Fleet insurance friction is usually paperwork friction. We use a simple checklist that supports both approvals and later claim workflows.",
    blocks: [
      {
        title: "Keep this ready (most common)",
        bullets: [
          "RC, permits, fitness, pollution (as applicable)",
          "Hypothecation details (if any)",
          "Vehicle list + usage clarity (route/type)",
          "Driver basics (as applicable)",
        ],
      },
      {
        title: "Claim-side discipline",
        bullets: [
          "Timely reporting",
          "Clear incident timeline + photos",
          "Repair estimate and supporting documents",
        ],
      },
    ],
    localSignals: [
      "Red Hills Toll fleet insurance support",
      "Chennai outskirts lorry insurance guidance",
    ],
    faqs: [
      { q: "Does missing fitness/permit affect claims?", a: "It can create delays or disputes. Keeping documents current reduces avoidable friction." },
    ],
  },

  "highway-business-risks": {
    section: "Commercial Authority",
    seoTitle: "Highway-area business risks (NH belt): practical cover guidance",
    seoDesc:
      "NH belt risks: accident exposure, liability, storage risk and the documentation habits that improve claim outcomes.",
    h1: "Highway-area business risks (NH belt): practical cover guidance",
    intro:
      "NH-facing belts behave differently: more public interaction, faster incident escalation, and higher third-party exposure. We align cover to that reality.",
    blocks: [
      {
        title: "What changes in NH-facing belts",
        bullets: [
          "Accident + third-party exposure increases",
          "Storage areas see higher movement and risk",
          "Incident reporting needs faster discipline",
        ],
      },
      {
        title: "What we align in the policy",
        bullets: [
          "Operations and exposure (avoid wording mismatch)",
          "Liability clarity for third-party events",
          "Basic proof discipline for faster claim processing",
        ],
      },
    ],
    localSignals: [
      "Red Hills Toll belt business insurance guidance",
      "NH belt commercial insurance support",
      "Sholavaram highway-facing business insurance consultant",
    ],
    faqs: [
      { q: "Is liability important for highway-side businesses?", a: "Usually yes—third-party exposure rises. We recommend liability clarity based on your operations." },
    ],
  },

  "msme-policy-wording-simple": {
    section: "Commercial Authority",
    seoTitle: "Policy wording that matters for MSMEs (explained simply)",
    seoDesc:
      "Small wording differences decide claim outcomes—what to check before purchase/renewal for MSMEs in Chennai outskirts.",
    h1: "Policy wording that matters for MSMEs (explained simply)",
    intro:
      "Most MSME losses happen because people assume wording covers their real operations. We highlight the few lines that decide claim outcomes.",
    blocks: [
      {
        title: "Wording areas we check first",
        bullets: [
          "What is considered ‘stock’ and how it must be proven",
          "Burglary/security conditions and exclusions",
          "Electrical fire load and safety conditions (as applicable)",
          "Business operations mismatch (what you do vs what’s assumed)",
        ],
      },
      {
        title: "Simple habit that prevents disputes",
        bullets: [
          "Keep a small ‘proof folder’: invoices, photos, asset list, updates",
          "Update insurer when risk changes (stock type/layout)",
        ],
      },
    ],
    localSignals: [
      "Sholavaram MSME insurance consultant",
      "Chennai outskirts business insurance guidance",
    ],
    faqs: [
      { q: "Can I buy online and still be safe?", a: "Yes, if disclosures, wording and proof discipline are correct. We help you verify the parts that matter." },
    ],
  },

  "sum-insured-why-it-matters": {
    section: "Commercial Authority",
    seoTitle: "Sum insured: a quick method to avoid underinsurance",
    seoDesc:
      "A simple method businesses can follow to avoid settlement reductions due to underinsurance.",
    h1: "Sum insured: a quick method to avoid underinsurance",
    intro:
      "Underinsurance is the most common reason settlements get reduced. We keep sum insured logic practical and proof-supported.",
    blocks: [
      {
        title: "Quick sum insured method (practical)",
        bullets: [
          "List assets/stock categories (not generic lump sum)",
          "Use invoice/valuation basis for major categories",
          "Review annually or when business expands",
        ],
      },
      {
        title: "Why underinsurance hurts",
        bullets: [
          "Settlement reductions when declared value doesn’t match actual",
          "Disputes when proof trail is weak or inconsistent",
        ],
      },
    ],
    localSignals: [
      "Chennai outskirts sum insured guidance",
      "Madhavaram warehouse underinsurance prevention",
    ],
    faqs: [
      { q: "Does higher sum insured always mean higher payout?", a: "Only when proof and valuation basis are correct. We align both." },
    ],
  },

  // ===========================
  // PROOF & EXPERIENCE (4)
  // ===========================
  "recently-assisted-commercial-client": {
    section: "Proof & Experience",
    seoTitle: "What we fixed before a commercial renewal (generic case)",
    seoDesc:
      "A claim-first renewal approach: sum insured, proof alignment and wording clarity corrected before renewal to prevent future claim friction.",
    h1: "Before renewal: what we fixed (generic commercial case)",
    intro:
      "No names. This is a common pattern we see across Chennai outskirts businesses: renewal happens without review, and claims later get stuck. Here’s what we fix early.",
    blocks: [
      {
        title: "What we corrected before renewal",
        bullets: [
          "Sum insured aligned to actual stock/assets (underinsurance risk reduced)",
          "Operations clarified to match policy wording",
          "Proof discipline checklist set up (invoices/photos/updates)",
        ],
      },
      {
        title: "Why it matters during claims",
        bullets: [
          "Settlement delays usually come from documentation gaps",
          "Wording mismatch becomes a dispute when incident happens",
        ],
      },
    ],
    localSignals: [
      "Sholavaram commercial renewal guidance",
      "Chennai outskirts claim-first renewal support",
    ],
    faqs: [
      { q: "Do you need a long audit?", a: "No. Even a short structured review catches the most expensive gaps." },
    ],
  },

  "30-years-claim-handling": {
    section: "Proof & Experience",
    seoTitle: "30+ years: what actually delays claims",
    seoDesc:
      "A practical view of what insurers check and what people commonly forget—built from claim-side conversations, not generic theory.",
    h1: "30+ years: what actually delays claims",
    intro:
      "Claims don’t get delayed because people lack intention; they get delayed because timelines, proof and wording weren’t prepared for real life.",
    blocks: [
      {
        title: "Top reasons claims get delayed",
        bullets: [
          "Late intimation/reporting",
          "Weak incident timeline + missing basic proof",
          "Underinsurance and unclear valuation basis",
          "Mismatch between operations and policy wording",
        ],
      },
      {
        title: "Claim-friendly discipline (simple)",
        bullets: [
          "Keep a small proof folder updated",
          "Report early and keep the first timeline clean",
          "Align renewals to real operations, not assumptions",
        ],
      },
    ],
    localSignals: [
      "Chennai outskirts claim documentation guidance",
      "Sholavaram claim-first insurance consultant",
    ],
    faqs: [
      { q: "What’s the best way to avoid disputes?", a: "Valuation + wording alignment + a clean proof trail." },
    ],
  },

  "online-vs-advisor": {
    section: "Proof & Experience",
    seoTitle: "Online vs advisor: where people lose money during claims",
    seoDesc:
      "Buying online is fine—claim success depends on disclosure, wording and proof discipline. Here’s the practical difference.",
    h1: "Online vs advisor: where people lose money during claims",
    intro:
      "Online purchase isn’t the problem. Missing exposure details and proof discipline is the problem. That’s what we close.",
    blocks: [
      {
        title: "Where online buyers usually miss",
        bullets: [
          "Operations mismatch (what you do vs what policy assumes)",
          "Sum insured chosen without valuation logic",
          "No clear proof discipline for stock/assets",
        ],
      },
      {
        title: "What an advisor should add (real value)",
        bullets: [
          "Wording clarity for your real operations",
          "Documentation-first discipline that prevents disputes",
          "Simple claim workflow guidance (reporting + timelines)",
        ],
      },
    ],
    localSignals: [
      "Chennai outskirts insurance advisor vs online",
      "Sholavaram claim-first guidance",
    ],
    faqs: [
      { q: "Should I avoid online policies?", a: "No. Just ensure wording + valuation + proof discipline are correct. That’s what we help with." },
    ],
  },

  "insurer-approval-checklist": {
    section: "Proof & Experience",
    seoTitle: "What insurers check before approving business policies",
    seoDesc:
      "Underwriting checks: location risk, valuation, compliance basics and history. Simple checklist to prepare for approvals.",
    h1: "What insurers check before approving business policies",
    intro:
      "Approvals become smooth when basic risk signals are clear. We keep approvals ‘clean’ by aligning your facts and proof early.",
    blocks: [
      {
        title: "Typical checks (most common)",
        bullets: [
          "Exact location and risk zone (NH/industrial belt effect)",
          "Valuation basis for stock/assets/machinery",
          "Safety conditions and basic compliance (as applicable)",
          "Past claim history and risk changes",
        ],
      },
      {
        title: "What makes approvals easier",
        bullets: [
          "Clear operations summary (simple and accurate)",
          "Photos and proof discipline for stock/assets",
          "No mismatch between declared and real risk",
        ],
      },
    ],
    localSignals: [
      "Red Hills business policy approval guidance",
      "Chennai outskirts underwriting checklist",
    ],
    faqs: [
      { q: "Do all businesses get inspected?", a: "Not always. But many high-risk cases require validation. Being prepared prevents delays." },
    ],
  },

  // ===========================
  // RENEWALS (3)
  // ===========================
  "car-insurance-renewal": {
    section: "Renewals",
    seoTitle: "Car renewal: 5 things to check before paying",
    seoDesc:
      "Renewal checklist: IDV, NCB, add-ons clarity and wording discipline—so claims don’t surprise you later.",
    h1: "Car renewal: 5 things to check before paying",
    intro:
      "Renewals are quick, but a few checks prevent expensive surprises later. This is a simple practical list.",
    blocks: [
      {
        title: "5 checks we recommend",
        bullets: [
          "IDV aligned to your vehicle condition and market reality",
          "NCB correctly applied (no mismatch)",
          "Add-ons chosen based on usage (not hype)",
          "Policy wording clarity for common claim scenarios",
          "Claim process readiness (what to do first when incident happens)",
        ],
      },
    ],
    localSignals: ["Chennai car insurance renewal support", "Anna Nagar car renewal guidance"],
    faqs: [{ q: "Do add-ons always help?", a: "Only when chosen based on vehicle age and usage. We keep it practical." }],
  },

  "lorry-insurance-renewal": {
    section: "Renewals",
    seoTitle: "Lorry renewal tips for Chennai outskirts fleets",
    seoDesc:
      "Permits, fitness, driver basics, claim history and add-ons that matter for transport operators in NH belts.",
    h1: "Lorry renewal tips for Chennai outskirts fleets",
    intro:
      "Fleet renewals become risky when permits/fitness discipline is ignored. We keep renewals claim-ready.",
    blocks: [
      {
        title: "What to verify at renewal",
        bullets: [
          "Permit/fitness/RC validity and mismatch checks",
          "Usage clarity (route/type) so wording matches operations",
          "Claim history review and necessary adjustments",
          "Basic driver/vehicle documentation discipline",
        ],
      },
    ],
    localSignals: ["Red Hills Toll lorry renewal support", "Chennai outskirts fleet renewal guidance"],
    faqs: [{ q: "Why do fleet claims get stuck?", a: "Late reporting + missing documents + mismatch between operations and wording." }],
  },

  "lic-premium-continuity": {
    section: "Renewals",
    seoTitle: "LIC premium continuity: why lapses create problems",
    seoDesc:
      "What a lapse changes and how simple reminders + nominee updates prevent avoidable issues later.",
    h1: "LIC premium continuity: why lapses create problems",
    intro:
      "LIC continuity is about discipline. Small lapses create bigger problems later, especially during claims or changes.",
    blocks: [
      {
        title: "Simple continuity habits",
        bullets: [
          "Set a reminder discipline (monthly/quarterly)",
          "Keep nominee and contact details updated",
          "Maintain payment proof and policy summary in one place",
        ],
      },
    ],
    localSignals: ["LIC premium continuity support Chennai", "Chennai outskirts LIC reminders"],
    faqs: [{ q: "Is a lapse always reversible?", a: "Depends on policy terms and timing. Avoiding lapse is simpler than fixing it later." }],
  },

  // ===========================
  // INSIGHTS (3)
  // ===========================
  "claim-documents-checklist": {
    section: "Insights",
    seoTitle: "Claim documents checklist (what people forget)",
    seoDesc:
      "Invoices, photos, reports and timeline discipline—clean essentials that improve claim outcomes.",
    h1: "Claim documents checklist (what people forget)",
    intro:
      "The fastest claim improvements usually come from better documentation, not more calls. This checklist is built for real-world use.",
    blocks: [
      {
        title: "Core items that help most",
        bullets: [
          "Policy copy + endorsements",
          "Clear incident timeline (first 30 minutes matter)",
          "Photos/videos (as applicable)",
          "Invoices/valuation proof (as applicable)",
          "Reports/letters/notices (as applicable)",
        ],
      },
      {
        title: "Why this matters",
        bullets: [
          "Insurers evaluate proof quality first",
          "Timelines and consistency reduce disputes",
        ],
      },
    ],
    localSignals: ["Sholavaram claim document guidance", "Chennai outskirts claim checklist"],
    faqs: [{ q: "Do I need everything for every claim?", a: "Not always. But having the basics ready prevents avoidable delays." }],
  },

  "public-liability-hidden-risk": {
    section: "Insights",
    seoTitle: "Public liability: the hidden risk many businesses ignore",
    seoDesc:
      "Small incidents become big claims. What’s covered, common exclusions, and habits that reduce incidents.",
    h1: "Public liability: the hidden risk many businesses ignore",
    intro:
      "Third-party incidents escalate quickly—especially near highways and industrial belts. Liability clarity prevents costly surprises.",
    blocks: [
      {
        title: "When liability becomes important",
        bullets: [
          "Customer/public interaction is frequent",
          "Sites/warehouses have vendor movement",
          "Work happens near public roads/highway belts",
        ],
      },
      {
        title: "Practical prevention habits",
        bullets: [
          "Incident reporting discipline and clarity",
          "Basic safety signage and visitor discipline (as applicable)",
          "Keep documentation clean when something happens",
        ],
      },
    ],
    localSignals: ["Chennai outskirts public liability guidance", "Red Hills third party risk"],
    faqs: [{ q: "Is liability only for big businesses?", a: "No. Even a small incident can create a large demand. Risk depends on exposure, not business size." }],
  },

  "zero-dep-explained": {
    section: "Insights",
    seoTitle: "Zero depreciation explained like a human",
    seoDesc:
      "When it’s worth it based on vehicle age, usage and the parts replaced most often.",
    h1: "Zero depreciation explained like a human",
    intro:
      "Zero dep can be valuable, but not always. The right choice depends on age, usage and expected repair patterns.",
    blocks: [
      {
        title: "When zero dep is usually worth it",
        bullets: [
          "Newer vehicles and high usage",
          "Areas where minor damages are frequent",
          "People who want predictable repair cost outcomes",
        ],
      },
      {
        title: "When it may be less useful",
        bullets: [
          "Very old vehicles where premium jump is high",
          "Very low usage situations",
        ],
      },
    ],
    localSignals: ["Chennai zero dep guidance", "Car insurance add-on clarity Chennai"],
    faqs: [{ q: "Is zero dep mandatory?", a: "No. It’s a choice. We recommend it only when the usage pattern supports it." }],
  },
},


  linksHub: {
    title: "Important Links",
    subtitle:
      "Quick access to our key service pages, industry guidance, and location-focused insurance support across Chennai outskirts.",

    sections: [
      {
        title: "Core Service Pages",
        links: [
          { label: "Business & MSME Insurance", href: EN("/services/business-msme-insurance") },
          { label: "Transport / Fleet / Lorry Insurance", href: EN("/services/transport-fleet-lorry-insurance") },
          { label: "Warehouse / Factory Insurance", href: EN("/services/warehouse-godown-factory-insurance") },
          { label: "Crane & Heavy Equipment Insurance", href: EN("/services/crane-heavy-equipment-cpm-insurance") },
          { label: "Construction & Contractor Insurance", href: EN("/services/construction-contractor-car-wc-insurance") },
          { label: "Public Liability Insurance", href: EN("/services/public-liability-third-party-insurance") },
          { label: "Marine Cargo / Transit Insurance", href: EN("/services/marine-cargo-goods-in-transit-insurance") },
          { label: "Fire & Burglary Insurance", href: EN("/services/fire-burglary-commercial-property-insurance") },
          { label: "Group Health / Employee Benefits", href: EN("/services/group-health-employee-benefits-insurance") },
          { label: "Claim Support", href: EN("/services/claim-support") },
        ],
      },

      {
        title: "Industry & Commercial Guidance",
        links: [
          { label: "Commercial Insurance Authority Hub", href: EN("/commercial-authority") },
          { label: "Crane & Heavy Equipment Insurance Insights", href: EN("/commercial-authority/crane-heavy-equipment-sum-insured") },
          { label: "Warehouse / Godown Risk Guidance", href: EN("/commercial-authority/factory-fire-theft-risk-basics") },
          { label: "Transport & Fleet Insurance Guidance", href: EN("/commercial-authority/fleet-insurance-docs-checklist") },
          { label: "Highway-Area Business Risk Insights", href: EN("/commercial-authority/highway-business-risks") },
        ],
      },

      {
        title: "Proof, Experience & Trust",
        links: [
          { label: "Proof & Experience Hub", href: EN("/proof-experience") },
          { label: "30+ Years Claim Handling Experience", href: EN("/proof-experience/30-years-claim-handling") },
          { label: "Online vs Advisor – Claim Differences", href: EN("/proof-experience/online-vs-advisor") },
          { label: "What Insurers Check Before Approval", href: EN("/proof-experience/insurer-approval-checklist") },
        ],
      },

      {
        title: "Renewals & Ongoing Support",
        links: [
          { label: "Car Insurance Renewal Guidance", href: EN("/renewals/car-insurance-renewal") },
          { label: "Lorry Insurance Renewal Tips", href: EN("/renewals/lorry-insurance-renewal") },
          { label: "LIC Premium Continuity Support", href: EN("/renewals/lic-premium-continuity") },
        ],
      },

      {
        title: "Location-Focused Insurance Support",
        links: [
          { label: "Sholavaram Commercial Insurance Services", href: EN("/services/business-msme-insurance") },
          { label: "Red Hills Transport & Fleet Insurance", href: EN("/services/transport-fleet-lorry-insurance") },
          { label: "Madhavaram Warehouse & Factory Insurance", href: EN("/services/warehouse-godown-factory-insurance") },
          { label: "Chennai Outskirts Business Insurance", href: EN("/services/business-msme-insurance") },
        ],
      },
    ],
  },

  locationsPage: {
    title: "Locations We Serve (Chennai North + NH Corridors)",
    subtitle:
      "Coverage guidance for commercial belts and city zones—built for real operations: fleets, warehouses, factories, contractors, SMEs, and families.",
    intro: [
      "Primary base: Sholavaram / Red Hills (Chennai outskirts).",
      "Commercial focus: transport, fleet, warehouses, factories, contractors, cranes/JCB/heavy equipment.",
      "City support: car/bike, health, LIC, SME shops/offices—renewals + claim guidance.",
    ],

    // ✅ Area groups (NO separate slug pages)
    groups: [
      {
        id: "commercial-belts",
        title: "Commercial belts (high premium focus)",
        subtitle:
          "NH-facing and industrial-flow belts where documentation discipline (permits, invoices, valuation proofs) matters most in claims.",
        areas: [
          {
            name: "Sholavaram",
            notes: ["Base zone", "Chennai outskirts", "Commercial + personal support"],
            serviceSlugs: [
              "business-msme-insurance",
              "transport-fleet-lorry-insurance",
              "warehouse-godown-factory-insurance",
              "fire-burglary-commercial-property-insurance",
              "public-liability-third-party-insurance",
              "marine-cargo-goods-in-transit-insurance",
              "construction-contractor-car-wc-insurance",
              "crane-heavy-equipment-cpm-insurance",
              "claim-support",
            ],
          },
          {
            name: "Red Hills",
            notes: ["Commercial movement belt", "Mixed MSME + families"],
            serviceSlugs: [
              "transport-fleet-lorry-insurance",
              "warehouse-godown-factory-insurance",
              "fire-burglary-commercial-property-insurance",
              "business-msme-insurance",
              "claim-support",
            ],
          },
          {
            name: "Madhavaram",
            notes: ["City-edge + business belt", "Motor/Health + SME offices", "Commercial vehicle support"],
            serviceSlugs: [
              "business-msme-insurance",
              "group-health-employee-benefits-insurance",
              "claim-support",
              "personal-car-bike-health-support",
            ],
          },
          {
            name: "Manali",
            notes: ["Industrial influence", "Liability + property clarity"],
            serviceSlugs: [
              "public-liability-third-party-insurance",
              "warehouse-godown-factory-insurance",
              "marine-cargo-goods-in-transit-insurance",
              "transport-fleet-lorry-insurance",
            ],
          },
          {
            name: "Puzhal",
            notes: ["City–outskirts connector", "MSME + motor support"],
            serviceSlugs: [
              "business-msme-insurance",
              "fire-burglary-commercial-property-insurance",
              "claim-support",
              "personal-car-bike-health-support",
            ],
          },
          {
            name: "Karanodai",
            notes: ["NH-facing belt", "Fleet + transit + contractor workflows"],
            serviceSlugs: [
              "transport-fleet-lorry-insurance",
              "marine-cargo-goods-in-transit-insurance",
              "construction-contractor-car-wc-insurance",
              "claim-support",
            ],
          },
          {
            name: "Periyapalayam",
            notes: ["Outskirts expansion belt", "Transport + small business support"],
            serviceSlugs: [
              "transport-fleet-lorry-insurance",
              "business-msme-insurance",
              "marine-cargo-goods-in-transit-insurance",
              "claim-support",
            ],
          },
          {
            name: "Arani",
            notes: ["District connector", "NH-linked movement support"],
            serviceSlugs: [
              "transport-fleet-lorry-insurance",
              "marine-cargo-goods-in-transit-insurance",
              "business-msme-insurance",
            ],
          },
        ],
      },

      {
        id: "city-belts",
        title: "Chennai city belts (cars, bikes, health, SME offices)",
        subtitle:
          "Support for personal policies and city SMEs—renewals, comparisons, and claim steps explained clearly.",
        areas: [
          {
            name: "Perambur",
            notes: ["Motor + health support", "SME shops/offices"],
            serviceSlugs: ["personal-car-bike-health-support", "business-msme-insurance", "claim-support"],
          },
          {
            name: "Kolathur",
            notes: ["City residential + SME pockets"],
            serviceSlugs: ["personal-car-bike-health-support", "business-msme-insurance", "claim-support"],
          },
          {
            name: "Koyambedu",
            notes: ["High movement connector", "Motor + claims support"],
            serviceSlugs: ["personal-car-bike-health-support", "business-msme-insurance", "claim-support"],
          },
          {
            name: "Anna Nagar",
            notes: ["City support zone", "Motor/health/LIC guidance"],
            serviceSlugs: ["personal-car-bike-health-support", "claim-support"],
          },
        ],
      },
    ],

    // ✅ Short “how we help here” bullets (safe + factual)
    claimReadyPrinciples: {
      title: "What changes claim outcomes (simple, practical)",
      points: [
        "Policy wording + declared value clarity before purchase—reduces disputes later.",
        "Documentation discipline: invoices, valuation proofs, photos, permits, worker registers (where applicable).",
        "Incident reporting steps and timelines—done correctly to avoid avoidable delays.",
        "Renewal checks: avoid coverage gaps and mismatched add-ons.",
      ],
    },
  },

    // ✅ Backlinks section dataset (links only, no phone inside)
  backlinks: {
    title: "Quick Links",
    links: [
      { label: "Home", href: EN("/") },
      { label: "Services", href: EN("services") },
      { label: "Reviews", href: EN("reviews") },
      { label: "Insights", href: EN("insights") },
      { label: "Locations", href: EN("locations") },
      { label: "About Us", href: EN("about") },
      { label: "Contact", href: EN("contact") },
    ],
  },

  gmbPosts: [],
};
