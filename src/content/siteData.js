export const siteData = {
brand: {
  name: "M N Rajendrakumar Insurance Services",
  legalName: "M N Rajendrakumar",
  tagline: "Commercial • Vehicle • Industrial",
  subtitle:
    "Coverage guidance for Chennai outskirts businesses — Sholavaram, Red Hills, Madhavaram & nearby industrial belts.",

  phone: "074483 24068",
  phoneE164: "+917448324068",
  whatsappE164: "917448324068",
  whatsappPrefill: "Hi, I need help choosing the right insurance plan.",

  primaryArea: "Sholavaram (Chennai Outskirts)",
  areaChips: ["Sholavaram", "Red Hills", "Madhavaram", "Chennai Outskirts"],

  // Address (GBP-consistent)
  streetAddress: "KVT AVENUE SHOZIPALAYAM, NO-39, 4TH MAIN ROAD",
  addressLocality: "Sholavaram",
  addressRegion: "Tamil Nadu",
  postalCode: "600067",
  addressCountry: "IN",

  // GBP / Maps
  gbpUrl:
    "https://www.google.com/maps/place/M+N+Rajendrakumar+Insurance+Services+%E2%80%93+Commercial,+Vehicle+%26+Industrial+Insurance+%7C+Sholavaram,+Karanodai,+Redhills/@13.2391084,80.1702588,17z/data=!3m1!4b1!4m6!3m5!1s0x3a527d2b1e29b5ff:0xe9b9b0049f529b6b!8m2!3d13.2391084!4d80.1728337!16s%2Fg%2F11xlhmwb8r?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=12a61e74-bf09-435d-9198-5b5ab86dc575",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.7801632048363!2d80.1702587736598!3d13.239108387101373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d2b1e29b5ff%3A0xe9b9b0049f529b6b!2sM%20N%20Rajendrakumar%20Insurance%20Services%20%E2%80%93%20Commercial%2C%20Vehicle%20%26%20Industrial%20Insurance%20%7C%20Sholavaram%2C%20Karanodai%2C%20Redhills!5e0!3m2!1sen!2sin!4v1767543679104!5m2!1sen!2sin",

  // Geo (important for local SEO)
  geo: { lat: 13.2391084, lng: 80.1728337 },

  // Hours
  hours: {
    is24x7: true,
    label: "Open 24 hours",
  },

  websiteUrl: "", // later when domain is ready
  logoUrl: "", // optional later
},

  // User intent: why they came + how you solve + what to do next
  pageFlow: {
    heroH1: "Commercial & Business Insurance Support in Sholavaram",
    heroP:
      "Clear policy guidance for shops, offices, vehicles and industrial setups in Chennai outskirts — with a documentation-first approach for smoother claims.",
    primaryCtaLabel: "Call Now 7448324068",
    // optional secondary CTA (later)
    secondaryCtaLabel: "WhatsApp Us",
  },

  coreServices: [
    {
      tag: "Commercial",
      title: "Shop & Office Insurance",
      desc:
        "Coverage guidance for business spaces with a documentation-first mindset.",
      tone: "teal",
      metaLabel: "Support",
      metaValue: "Fast",
      slug: "shop-office-insurance",
    },
    {
      tag: "Vehicle",
      title: "Commercial Vehicle Insurance",
      desc:
        "Policy guidance for business vehicles with claim-ready paperwork discipline.",
      tone: "black",
      metaLabel: "Guidance",
      metaValue: "Clear",
      slug: "commercial-vehicle-insurance",
    },
    {
      tag: "Industrial",
      title: "Factory & Warehouse Insurance",
      desc:
        "Industrial belt coverage support with valuation basics and compliance mindset.",
      tone: "purple",
      metaLabel: "Docs",
      metaValue: "Strong",
      slug: "factory-warehouse-insurance",
    },
    {
      tag: "Claims",
      title: "Claim Support",
      desc:
        "Step-by-step guidance during claims with clarity on documents and process.",
      tone: "lemon",
      metaLabel: "Process",
      metaValue: "Smooth",
      slug: "claim-support",
    },
  ],

  marketplaceCards: [
    {
      iconText: "C",
      title: "Commercial Coverage",
      rating: "4.8",
      desc:
        "Guidance for shops, offices & commercial setups with practical risk framing.",
      area: "Sholavaram",
      variant: "v1",
    },
    {
      iconText: "V",
      title: "Vehicle Insurance",
      rating: "4.7",
      desc:
        "Commercial vehicle coverage guidance with claim-ready documentation discipline.",
      area: "Red Hills",
      variant: "v2",
    },
    {
      iconText: "I",
      title: "Industrial Support",
      rating: "4.9",
      desc:
        "Factory/warehouse guidance for Chennai outskirts industrial belts.",
      area: "Madhavaram",
      variant: "v3",
    },
  ],

  // Semantic FAQ data (will be used in HTML + FAQPage schema)
  faqs: [
    {
      q: "Do you help with claims?",
      a:
        "Yes. We guide you through the claim process — required documents, timelines, and step-by-step clarity to reduce delays.",
    },
    {
      q: "Which areas do you cover?",
      a:
        "Chennai outskirts focus — Sholavaram, Red Hills, Madhavaram and nearby business/industrial belts.",
    },
    {
      q: "What information should I keep ready before calling?",
      a:
        "Business type (shop/office/vehicle/warehouse), approximate value of assets, location, and any existing policy details if available.",
    },
  ],

  // “How we help” as open accordion sections
  howWeHelp: [
    {
      title: "How We Help",
      items: [
        {
          strong: "Coverage Clarity",
          text:
            "We explain what coverage fits your business reality — not generic terms.",
        },
        {
          strong: "Documentation-First",
          text:
            "We prioritize paperwork clarity so claims become smoother and faster later.",
        },
        {
          strong: "Local Context",
          text:
            "Focused on Chennai outskirts business belts — practical guidance for local risks.",
        },
      ],
    },
    {
      title: "Service Areas",
      items: [
        { strong: "Sholavaram", text: "Primary service area for businesses." },
        { strong: "Red Hills", text: "Commercial + vehicle coverage guidance." },
        { strong: "Madhavaram", text: "Industrial/logistics belt support." },
      ],
    },
  ],

  testimonials: {
    title: "What Our Customers Are Saying",
    subtitle: "Real stories from people who trust us.",
    avgScore: "+4.8",
    avgText: "Average rating (49+ reviews)",
    pillHref: "/reviews",
    showControls: false,
    items: [
      {
        stars: 5,
        quote:
          "Quick, clear, and super helpful. The experience felt smooth and trustworthy from start to finish.",
        name: "Amira K.",
        role: "Customer",
      },
      {
        stars: 5,
        quote:
          "Support was fast and practical. I got exactly what I needed without back-and-forth.",
        name: "Jared L.",
        role: "Business Owner",
      },
      {
        stars: 5,
        quote:
          "Everything was explained in simple language. I felt confident making the next step.",
        name: "Raj M.",
        role: "Customer",
      },
    ],
  },

  statsStrip: {
    title: "Trusted insurance help in Sholavaram (Chennai Outskirts)",
    stats: [
      { value: "30+ yrs", label: "Experience" },
      { value: "Fast", label: "Claim guidance" },
      { value: "Local", label: "Sholavaram support" },
      { value: "Clear", label: "Policy explanation" },
    ],
  },

  footerCtas: {
    title: "Need help choosing the right insurance?",
    subtitle: "WhatsApp us for quick guidance or call directly.",
    callLabel: "Call Now 7448324068",
    brandName: "M N Rajendrakumar • New India Assurance",
    logoText: "NIA",
    copyright: "Copyright 2026 © New India Assurance (Sholavaram)",
  },
    insights: {
    title: "Insights & Guides",
    subtitle:
      "Deep, practical reads on insurance, safety, and risk — written for real situations.",
    viewAllHref: "/insights",
    viewMoreHref: "/insights",
    items: [
      {
        href: "/insights/rented-property-safety-checklist",
        chipCategory: "Commercial",
        chipMap: "Property Insurance",
        title: "Five easy ways to cover rented property & keep your team safe",
        desc:
          "A step-by-step checklist to reduce fire, theft, and liability risks in rental spaces. Includes practical documentation tips, vendor safety checks, and claim-ready photo routines.",
        tags: ["#risk-checklist", "#documents", "#claims", "#tenant-safety"],
        readTime: "7 min read",
        levelOrFreq: "Updated weekly",
      },
      {
        href: "/insights/claim-documents-checklist",
        chipCategory: "Business",
        chipMap: "Shop & Office",
        title: "What documents matter during a claim (and what people forget)",
        desc:
          "Claims don’t fail because of bad intent — they fail because of missing basics. Here’s a clean list of invoices, photos, police reports, and timelines that insurers look for.",
        tags: ["#claim-process", "#documentation", "#proof"],
        readTime: "6 min read",
        levelOrFreq: "Beginner",
      },
      {
        href: "/insights/health-plan-decision-map",
        chipCategory: "Health",
        chipMap: "Family Coverage",
        title: "How to choose a health plan without getting confused by add-ons",
        desc:
          "Room rent caps, co-pay, network hospitals, waiting periods — what actually impacts you and what is mostly marketing. A simple decision map you can follow in 10 minutes.",
        tags: ["#health-insurance", "#waiting-period", "#network-hospitals"],
        readTime: "8 min read",
        levelOrFreq: "Decision guide",
      },
      {
        href: "/insights/zero-dep-explained",
        chipCategory: "Vehicle",
        chipMap: "Two-Wheeler",
        title: "Zero depreciation explained like a human (when it’s worth it)",
        desc:
          "Not every rider needs zero-dep every year. We break down bike age, usage, parts replaced most often, and how claim settlement changes with depreciation.",
        tags: ["#bike-insurance", "#zero-dep", "#claims"],
        readTime: "5 min read",
        levelOrFreq: "Explainer",
      },
      {
        href: "/insights/public-liability-hidden-risk",
        chipCategory: "Commercial",
        chipMap: "Liability",
        title: "Public liability: the hidden risk most small businesses ignore",
        desc:
          "A small incident can become a big claim. Learn how liability works, what’s covered, typical exclusions, and simple safety habits to reduce incidents.",
        tags: ["#liability", "#third-party", "#risk"],
        readTime: "9 min read",
        levelOrFreq: "Business safety",
      },
      {
        href: "/insights/term-insurance-mistakes",
        chipCategory: "Life",
        chipMap: "Term Plan",
        title: "Term insurance mistakes: nomination, disclosure, and coverage gaps",
        desc:
          "People buy the plan, then forget the details that matter most. A practical checklist for nominees, income proof, medical disclosures, and life-stage coverage updates.",
        tags: ["#term-insurance", "#nominee", "#disclosure", "#coverage"],
        readTime: "7 min read",
        levelOrFreq: "Must know",
      },
    ],
  },
 commercialAuthorityPosts: {
    title: "Commercial Authority Posts",
    subtitle:
      "Industry-focused guidance for high-risk and business insurance needs across Chennai outskirts.",
    viewAllHref: "/commercial-authority",
    viewMoreHref: "/commercial-authority",
    categories: [
      {
        category: "Crane & Heavy Equipment Insurance",
        items: [
          {
            href: "/commercial-authority/crane-heavy-equipment-sum-insured",
            title: "Crane insurance: why correct declared value decides claim success",
            desc:
              "A simple way to estimate the right insured value for cranes and heavy equipment — and what insurers typically verify before approval.",
            chips: ["Commercial", "Heavy Equipment"],
            tags: ["#crane-insurance", "#heavy-equipment", "#sum-insured", "#claims"],
            readTime: "6 min read",
            levelOrFreq: "Practical checklist",
          },
          {
            href: "/commercial-authority/crane-third-party-liability-basics",
            title: "Third-party liability for cranes: what gets covered and what doesn’t",
            desc:
              "Understand liability exposure during operations near highways, sites, and public areas — and how to avoid common gaps.",
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
            href: "/commercial-authority/contractor-all-risk-basics",
            title: "Contractor All Risk (CAR): what it covers on real sites",
            desc:
              "A clean breakdown of what CAR policies cover, typical exclusions, and how documentation reduces claim delays.",
            chips: ["Commercial", "Construction"],
            tags: ["#contractor", "#construction", "#car-policy", "#documents"],
            readTime: "8 min read",
            levelOrFreq: "Decision guide",
          },
          {
            href: "/commercial-authority/workmen-compensation-common-mistakes",
            title: "Workmen compensation: 5 mistakes contractors make",
            desc:
              "Where payroll mismatch, classification errors, and late reporting can affect settlements — explained simply.",
            chips: ["Commercial", "Workforce"],
            tags: ["#workmen-comp", "#wc", "#compliance", "#claims"],
            readTime: "6 min read",
            levelOrFreq: "Must know",
          },
        ],
      },
      {
        category: "Warehouse / Godown / Factory Insurance",
        items: [
          {
            href: "/commercial-authority/factory-fire-theft-risk-basics",
            title: "Factory / godown fire + theft: what insurers expect you to maintain",
            desc:
              "Basic safety + documentation habits that help approvals and reduce disputes during claims.",
            chips: ["Industrial", "Property"],
            tags: ["#warehouse", "#godown", "#factory", "#fire-safety"],
            readTime: "7 min read",
            levelOrFreq: "Updated weekly",
          },
          {
            href: "/commercial-authority/stock-declaration-how-it-works",
            title: "Stock declaration policies explained (no confusion)",
            desc:
              "When your stock value changes month-to-month, how declaration works and what proof insurers usually ask.",
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
            href: "/commercial-authority/fleet-insurance-docs-checklist",
            title: "Fleet insurance checklist: documents that speed approvals",
            desc:
              "RC, permits, fitness, hypothecation, driver details — what to keep ready for faster issuance and smoother renewals.",
            chips: ["Vehicle", "Fleet"],
            tags: ["#fleet", "#transport", "#lorry", "#renewal"],
            readTime: "5 min read",
            levelOrFreq: "Checklist",
          },
          {
            href: "/commercial-authority/highway-business-risks",
            title: "Highway-area business risks (NH belt): practical cover guidance",
            desc:
              "What changes when your operations are near highways — accident exposure, liability, storage risk, and claims workflow.",
            chips: ["Commercial", "Highway"],
            tags: ["#nh-business", "#liability", "#risk"],
            readTime: "7 min read",
            levelOrFreq: "Local context",
          },
        ],
      },
      {
        category: "MSME / Business Insurance",
        items: [
          {
            href: "/commercial-authority/msme-policy-wording-simple",
            title: "Policy wording that matters for MSMEs (explained simply)",
            desc:
              "Small wording differences can decide claim outcomes. Here’s what to check before buying or renewing.",
            chips: ["Commercial", "MSME"],
            tags: ["#msme", "#policy-wording", "#claims"],
            readTime: "6 min read",
            levelOrFreq: "Must know",
          },
          {
            href: "/commercial-authority/sum-insured-why-it-matters",
            title: "Why correct sum insured matters (and how to estimate it fast)",
            desc:
              "A quick method businesses can follow to avoid underinsurance and settlement reductions.",
            chips: ["Commercial", "Claims"],
            tags: ["#sum-insured", "#underinsurance", "#settlement"],
            readTime: "6 min read",
            levelOrFreq: "Practical",
          },
        ],
      },
    ],
  },

  // =========================================================
  // SECTION 2: PROOF / EXPERIENCE POSTS (Trust + conversion)
  // =========================================================
  proofExperiencePosts: {
    title: "Proof & Experience",
    subtitle:
      "Real-world claim guidance mindset — built from 30+ years of handling insurance conversations and documentation.",
    viewAllHref: "/proof-experience",
    viewMoreHref: "/proof-experience",
    items: [
      {
        href: "/proof-experience/recently-assisted-commercial-client",
        title: "Recently assisted a commercial client (generic): what we fixed before renewal",
        desc:
          "No names. Just the exact type of issues we corrected: sum insured, stock proof, and policy wording clarity — so claims don’t get stuck later.",
        chips: ["Trust", "Commercial"],
        tags: ["#experience", "#renewal", "#policy-check"],
        readTime: "4 min read",
        levelOrFreq: "Real-world",
      },
      {
        href: "/proof-experience/30-years-claim-handling",
        title: "30+ years claim-handling experience: what actually delays claims",
        desc:
          "Claims often fail due to missing basics. Here’s a practical view of what insurers check and what people forget.",
        chips: ["Trust", "Claims"],
        tags: ["#claims", "#documents", "#timelines"],
        readTime: "5 min read",
        levelOrFreq: "Practical",
      },
      {
        href: "/proof-experience/online-vs-advisor",
        title: "Online vs advisor: where people lose money during claims",
        desc:
          "Buying online is fine — but claim success depends on documentation, disclosures, and correct wording. Here’s the difference in real life.",
        chips: ["Trust", "Guidance"],
        tags: ["#online-vs-advisor", "#claims", "#wording"],
        readTime: "6 min read",
        levelOrFreq: "Explainer",
      },
      {
        href: "/proof-experience/insurer-approval-checklist",
        title: "What insurers check before approving business policies",
        desc:
          "Location risk, valuation, past claims, KYC, compliance basics — a clear checklist businesses can prepare for.",
        chips: ["Trust", "Approvals"],
        tags: ["#underwriting", "#approval", "#checklist"],
        readTime: "6 min read",
        levelOrFreq: "Checklist",
      },
    ],
  },

  // =========================================================
  // SECTION 3: RENEWAL / LIC POSTS (maintenance traffic)
  // =========================================================
  renewalLicPosts: {
    title: "Renewal & LIC Posts",
    subtitle:
      "Renewal reminders and common mistakes — helpful, but not the main focus of this site.",
    viewAllHref: "/renewals",
    viewMoreHref: "/renewals",
    items: [
      {
        href: "/renewals/car-insurance-renewal",
        title: "Car insurance renewal: 5 things to check before paying",
        desc:
          "NCB, add-ons, IDV, claims history and policy wording — a quick renewal checklist.",
        chips: ["Renewal", "Car"],
        tags: ["#car-renewal", "#ncb", "#idv"],
        readTime: "4 min read",
        levelOrFreq: "Reminder",
      },
      {
        href: "/renewals/lorry-insurance-renewal",
        title: "Lorry insurance renewal tips for Chennai outskirts fleets",
        desc:
          "Permits, fitness, driver details, claim history, and add-ons that matter for transport businesses.",
        chips: ["Renewal", "Lorry"],
        tags: ["#lorry", "#fleet", "#renewal"],
        readTime: "5 min read",
        levelOrFreq: "Local context",
      },
      {
        href: "/renewals/lic-premium-continuity",
        title: "LIC premium continuity: why lapses create bigger problems later",
        desc:
          "What happens when a policy lapses and how to prevent it with simple reminders and nominee updates.",
        chips: ["LIC", "Premium"],
        tags: ["#lic", "#premium", "#lapse"],
        readTime: "4 min read",
        levelOrFreq: "Must know",
      },
    ],
  },

  // =========================================================
  // SERVICES + LOCATIONS + POPULAR AREA PAGES (SEO phrases)
  // =========================================================
  coverageIndex: {
    title: "Services & Locations Covered",
    subtitle:
      "Commercial, vehicle and industrial insurance guidance across Chennai outskirts — with local context.",
    services: [
      "Shop & Office Insurance",
      "MSME / Business Insurance",
      "Factory & Warehouse / Godown Insurance",
      "Crane & Heavy Equipment Insurance",
      "Construction & Contractor Insurance",
      "Transport & Fleet / Lorry Insurance",
      "Public Liability Guidance",
      "Claim Support (documents + process)",
      "Renewals (vehicle + business + LIC basics)",
    ],
    locations: [
      "Sholavaram",
      "Red Hills",
      "Madhavaram",
      "Chennai Outskirts",
      "Nearby industrial & highway belts",
    ],
    popularAreaServices: [
      "Sholavaram insurance services",
      "Red Hills insurance services",
      "Madhavaram insurance services",
      "Chennai outskirts insurance services",
      "Madhavaram lorry insurance services",
      "Red Hills commercial insurance services",
      "Sholavaram factory insurance services",
      "Chennai outskirts business insurance services",
    ],
  },

  // Optional: “Google Posts” section (manual dataset for now)
  // Later you can automate, but keep it crawlable as normal HTML cards
  gmbPosts: [
    // { title:"...", date:"2026-01-01", summary:"...", ctaLabel:"Call Now", ctaHref:"tel:+917448324068" }
  ],
};
