// ===========================
// LOCATION EXPANSION DATA
// South Chennai, Central Chennai, West Chennai, and TN Industrial belt locations
// ===========================

const EN = (p) => `/en${p}`;

export const locationExpansionDetails = {

  // ===========================
  // SOUTH CHENNAI
  // ===========================

  tambaram: {
    name: "Tambaram",
    postalCode: "600045",
    seoTitle: "Insurance Agent in Tambaram, Chennai — Car, Health, Bike & Commercial Insurance",
    seoDesc: "Insurance services in Tambaram, Chennai. Car, health, bike, life, and commercial insurance from a 4.9★ IRDAI licensed agent. Doorstep service, multi-insurer comparison, and local claim support.",
    heroH1: "Insurance Agent in Tambaram, Chennai — Vehicle, Health & Business",
    heroP: "Tambaram, Chrompet, Pallavaram and Selaiyur are mostly families and small businesses — car, health and shop policies. Tell us what you need and we'll come to you if that's easier.",
    localContext: [
      "Tambaram is a major residential and commercial hub in South Chennai with high vehicle density.",
      "Mix of families needing health/car insurance and small businesses needing commercial coverage.",
      "Proximity to GST Road corridor creates demand for commercial vehicle and goods-in-transit insurance.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "Bike Insurance Renewal (Tambaram)", href: EN("/bike-insurance-tambaram/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide doorstep service in Tambaram?", a: "Yes. We provide doorstep service across Tambaram East, Tambaram West, Chrompet, Pallavaram, and Selaiyur. Most work is handled via WhatsApp — visits for document verification and signatures." },
      { q: "Which insurance companies do you work with?", a: "15+ insurers: New India, United India, ICICI Lombard, HDFC ERGO, Bajaj Allianz, Star Health, and more. We compare across companies to find the best fit for your need." },
      { q: "Can you help with car insurance claims in Tambaram?", a: "Yes. Accident documentation, FIR guidance, surveyor coordination, and settlement follow-up for Tambaram and surrounding areas." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Family — car, bike, or health",
        forWhom: "You live in Tambaram, Chrompet, Pallavaram, or Selaiyur and need a personal policy.",
        points: [
          "IDV/NCB checked on renewals; sum insured checked on health policies — before you pay, not after.",
          "Doorstep service if a visit is easier than WhatsApp for document verification or signatures.",
          "15+ insurers compared to find the right fit, not just the cheapest listing.",
        ],
        ctaLabel: "WhatsApp — personal insurance",
        waText: "Hi, I'm in Tambaram and need help with car/bike/health insurance.",
      },
      {
        label: "GST Road commercial transport",
        forWhom: "You run commercial vehicles or goods transport near the GST Road corridor.",
        points: [
          "Commercial vehicle and goods-in-transit cover reviewed together if you move goods regularly.",
          "Permit and usage disclosure checked to avoid claim disputes common on this corridor.",
          "Fast turnaround given how often vehicles here are on the road.",
        ],
        ctaLabel: "WhatsApp — commercial vehicle",
        waText: "Hi, I run commercial transport near GST Road/Tambaram and need insurance support.",
      },
      {
        label: "Small business / MSME",
        forWhom: "You run a shop or small business in the Tambaram area.",
        points: [
          "Shop/MSME package sized to your actual premises and stock, not a generic bundle.",
          "One contact for renewals and claims going forward.",
          "Doorstep or WhatsApp — whichever is easier for you.",
        ],
        ctaLabel: "WhatsApp — business/MSME cover",
        waText: "Hi, I run a small business in Tambaram and need insurance guidance.",
      },
    ],

    relatedLocations: [
      { label: "Chrompet", href: EN("/locations/chrompet/") },
      { label: "Velachery", href: EN("/locations/velachery/") },
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "Sholinganallur", href: EN("/locations/sholinganallur/") },
    ],
    serviceAreaSignals: [
      "insurance in Tambaram",
      "insurance agent Tambaram",
      "car insurance Tambaram",
      "health insurance Tambaram",
      "insurance renewal Tambaram",
      "best insurance Tambaram Chennai",
    ],
  },

  chrompet: {
    name: "Chrompet",
    postalCode: "600044",
    seoTitle: "Insurance Agent in Chrompet, Chennai — Car, Health & Two-Wheeler Insurance",
    seoDesc: "Insurance services in Chrompet, Chennai. Car, health, bike insurance with doorstep service and claim support from a 4.9★ rated IRDAI licensed agent. Multi-insurer comparison.",
    heroH1: "Insurance Agent in Chrompet, Chennai — Vehicle, Health & Family",
    heroP: "Chrompet, Pallavaram and Pammal are mostly families — car, health and life policies. We compare across insurers and come to you if a visit is easier than WhatsApp.",
    localContext: [
      "Chrompet is a densely populated residential area in South Chennai with high two-wheeler and car ownership.",
      "Families need health insurance with cashless hospitals nearby — Sundaram Medical Foundation, SRM Hospital.",
      "Proximity to Tambaram and Pallavaram creates a combined service zone for insurance needs.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you serve Chrompet and Pallavaram?", a: "Yes. Chrompet, Pallavaram, Pammal, and surrounding areas. Doorstep service available for document collection and policy delivery." },
      { q: "Which hospitals have cashless health insurance near Chrompet?", a: "We check specific insurer networks for hospitals near you in Chrompet/Pallavaram area. Star Health, HDFC ERGO, and Care Health have good networks in South Chennai." },
    ],
    relatedLocations: [
      { label: "Tambaram", href: EN("/locations/tambaram/") },
      { label: "Velachery", href: EN("/locations/velachery/") },
      { label: "Guindy", href: EN("/locations/guindy/") },
    ],
    serviceAreaSignals: [
      "insurance in Chrompet",
      "insurance agent Chrompet",
      "car insurance Chrompet",
      "health insurance Chrompet",
      "bike insurance Chrompet",
    ],
  },

  velachery: {
    name: "Velachery",
    postalCode: "600042",
    seoTitle: "Insurance Agent in Velachery, Chennai — Car, Health & Life Insurance",
    seoDesc: "Insurance services in Velachery, Chennai. Car, health, life insurance with doorstep service and claim support. Multi-insurer comparison from a 4.9★ IRDAI licensed agent.",
    heroH1: "Insurance Agent in Velachery, Chennai — Vehicle, Health & Family",
    heroP: "Velachery, Medavakkam, Pallikaranai and Thoraipakkam are mostly families reaching out for car, health and life cover. Send your details on WhatsApp and we'll guide you honestly.",
    localContext: [
      "Velachery is one of Chennai's largest residential hubs with a mix of IT professionals and families.",
      "High demand for health insurance with cashless hospitals — several multispecialty hospitals nearby.",
      "OMR corridor proximity means a large base of working professionals seeking convenient digital-first insurance.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Car Insurance Renewal (Velachery)", href: EN("/car-insurance-velachery/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide insurance services in Velachery?", a: "Yes. Velachery, Medavakkam, Pallikaranai, and Thoraipakkam. Doorstep service available — most work handled via WhatsApp for convenience." },
      { q: "Which health insurance has the best hospitals near Velachery?", a: "We check cashless networks specific to Velachery — Global Hospital, Chettinad Health City, and others. Insurer networks vary by locality." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "IT professional / working individual",
        forWhom: "You want insurance sorted quickly without back-and-forth, likely for car, bike, or health.",
        points: [
          "Entire process over WhatsApp — send your documents, get the check done, no office visit needed.",
          "IDV/NCB checked before renewal so you're not overpaying or under-covered without realizing it.",
          "Health policy comparisons against cashless hospital networks actually near you, not a generic list.",
        ],
        ctaLabel: "WhatsApp — quick policy check",
        waText: "Hi, I'm in Velachery and want my car/bike/health insurance checked over WhatsApp.",
      },
      {
        label: "Family with senior citizens",
        forWhom: "You're looking for health cover for parents or senior family members, which has different rules than a young adult's policy.",
        points: [
          "Honest guidance on which insurers genuinely accept senior citizen profiles, not a generic list.",
          "Pre-existing condition waiting periods explained clearly upfront.",
          "Accurate disclosure guidance — this is what actually protects a claim later, more than the premium amount.",
        ],
        ctaLabel: "WhatsApp — senior citizen health cover",
        waText: "Hi, I'm looking for health insurance for a senior citizen family member in Velachery.",
      },
      {
        label: "Car owner concerned about monsoon/flood damage",
        forWhom: "Velachery is a known flood-prone area during the Chennai monsoon — worth checking your cover now, not after.",
        points: [
          "We check whether your policy has engine protection (hydrostatic lock cover) — standard comprehensive doesn't include it by default.",
          "Guidance on what to do if your car has already been in flood water — never start it before inspection.",
          "See our dedicated monsoon car insurance guide for Chennai-specific flood coverage details.",
        ],
        ctaLabel: "WhatsApp — monsoon/flood car cover",
        waText: "Hi, I'm in Velachery and want to check if my car insurance covers monsoon flood damage.",
      },
    ],

    relatedLocations: [
      { label: "Tambaram", href: EN("/locations/tambaram/") },
      { label: "Sholinganallur", href: EN("/locations/sholinganallur/") },
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "Adyar", href: EN("/locations/adyar/") },
    ],
    serviceAreaSignals: [
      "insurance in Velachery",
      "insurance agent Velachery",
      "car insurance Velachery",
      "health insurance Velachery",
      "insurance near Velachery",
    ],
  },

  adyar: {
    name: "Adyar",
    postalCode: "600020",
    seoTitle: "Insurance Agent in Adyar, Chennai — Car, Health & Life Insurance",
    seoDesc: "Insurance services in Adyar, Chennai. Car, health, life insurance with doorstep service and claim support from a 4.9★ IRDAI licensed agent. Multi-insurer comparison for Adyar residents.",
    heroH1: "Insurance Agent in Adyar, Chennai — Vehicle, Health & Family",
    heroP: "Adyar, Besant Nagar, Thiruvanmiyur and Indira Nagar are mostly families — car, health and life policies. We'll come to you if a visit is easier than sorting it over WhatsApp.",
    localContext: [
      "Adyar is a premium residential area with families and professionals needing comprehensive health and car insurance.",
      "Several major hospitals nearby: Adyar Cancer Institute, Apollo Hospitals, Kauvery Hospital.",
      "Mix of residential and educational institutions — insurance needs span personal, family, and small business.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you serve Adyar and surrounding areas?", a: "Yes. Adyar, Besant Nagar, Thiruvanmiyur, and Indira Nagar. Doorstep service available for all personal and family insurance needs." },
      { q: "Which insurers have the best hospital network near Adyar?", a: "Star Health, HDFC ERGO, and ICICI Lombard have strong cashless networks near Adyar including Apollo, Kauvery, and several multispecialty hospitals. We check the exact list for your preferred hospitals." },
    ],
    relatedLocations: [
      { label: "Velachery", href: EN("/locations/velachery/") },
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
      { label: "Sholinganallur", href: EN("/locations/sholinganallur/") },
    ],
    serviceAreaSignals: [
      "insurance in Adyar",
      "insurance agent Adyar",
      "car insurance Adyar",
      "health insurance Adyar",
      "insurance near Adyar",
    ],
  },

  guindy: {
    name: "Guindy",
    postalCode: "600032",
    seoTitle: "Insurance Agent in Guindy, Chennai — Car, Health & Commercial Insurance",
    seoDesc: "Insurance services in Guindy, Chennai. Car, health, commercial, and industrial insurance from a 4.9★ IRDAI licensed agent. Doorstep service for Guindy Industrial Estate and surrounding areas.",
    heroH1: "Insurance Agent in Guindy, Chennai — Vehicle, Health & Business",
    heroP: "Guindy Industrial Estate is one of Chennai's oldest — factories and warehouses alongside personal policies from families in Ekkatuthangal and Alandur. Tell us which one you are and we'll take it from there.",
    localContext: [
      "Guindy Industrial Estate is one of Chennai's oldest and largest industrial hubs — factories, warehouses, and SMEs.",
      "Mix of industrial insurance (fire, machinery, stock) and personal insurance (car, health, bike) for employees.",
      "Mount Road and GST Road connectivity makes Guindy a central insurance service point for South-Central Chennai.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Machinery Breakdown Insurance", href: EN("/machinery-breakdown-insurance-guindy/") },
      { title: "Public & Professional Liability Insurance", href: EN("/liability-insurance-guindy/") },
      { title: "Office Insurance Package (Guindy)", href: EN("/office-insurance-guindy/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle factory insurance for Guindy Industrial Estate?", a: "Yes. Fire, machinery, stock, and liability insurance for factories and warehouses in Guindy Industrial Estate. We understand industrial insurance requirements for manufacturing and warehousing operations." },
      { q: "Can you visit Guindy for insurance discussions?", a: "Yes. Doorstep service for Guindy, Guindy Industrial Estate, Ekkatuthangal, and Alandur. For commercial insurance, site visits help us understand your exact requirements." },
    ],
    relatedLocations: [
      { label: "Ekkatuthangal", href: EN("/locations/ekkatuthangal/") },
      { label: "Alandur / St. Thomas Mount", href: EN("/locations/alandur-st-thomas-mount/") },
      { label: "SIDCO Thirumudivakkam", href: EN("/locations/sidco-thirumudivakkam/") },
      { label: "Adyar", href: EN("/locations/adyar/") },
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
      { label: "Velachery", href: EN("/locations/velachery/") },
      { label: "Tambaram", href: EN("/locations/tambaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Guindy",
      "insurance agent Guindy",
      "factory insurance Guindy",
      "commercial insurance Guindy",
      "insurance near Guindy Industrial Estate",
    ],
  },

  sholinganallur: {
    name: "Sholinganallur",
    postalCode: "600119",
    seoTitle: "Insurance Agent in Sholinganallur, Chennai — Car, Health & IT Corridor Insurance",
    seoDesc: "Insurance services in Sholinganallur, OMR, Chennai. Car, health, life insurance for IT professionals and families from a 4.9★ IRDAI licensed agent with 15+ insurer options.",
    heroH1: "Insurance Agent in Sholinganallur, Chennai — Vehicle, Health & Family",
    heroP: "Sholinganallur and the OMR IT corridor bring in a lot of working professionals — car, health and life cover mostly. We keep it simple and quick since you're probably doing this between meetings.",
    localContext: [
      "Sholinganallur and the OMR IT corridor house thousands of IT professionals and young families.",
      "High demand for health insurance with cashless hospitals, car insurance for daily commuters, and term life insurance.",
      "Digital-first preference — most work handled via WhatsApp, making our process a natural fit.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { title: "D&O / Professional Indemnity Insurance (OMR)", href: EN("/professional-indemnity-do-insurance-sholinganallur/") },
      { title: "All Insurance Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Do you serve the OMR/Sholinganallur IT corridor?", a: "Yes. Sholinganallur, Karapakkam, Perungudi, and the entire OMR corridor. Most interactions are via WhatsApp — quick, digital, and convenient for IT professionals." },
      { q: "What insurance do IT employees typically need?", a: "Health insurance (family floater with cashless hospitals on OMR), car insurance with proper add-ons, and term life insurance for adequate family protection. We help IT professionals set up comprehensive coverage." },
    ],
    relatedLocations: [
      { label: "Velachery", href: EN("/locations/velachery/") },
      { label: "Adyar", href: EN("/locations/adyar/") },
      { label: "Tambaram", href: EN("/locations/tambaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Sholinganallur",
      "insurance agent OMR",
      "car insurance OMR Chennai",
      "health insurance Sholinganallur",
      "insurance near OMR",
    ],
  },

  medavakkam: {
    name: "Medavakkam",
    postalCode: "600100",
    seoTitle: "Insurance Agent in Medavakkam, Chennai — Car, Health & Family Insurance",
    seoDesc: "Insurance services in Medavakkam, Chennai. Car, health, bike, and family insurance with doorstep service and claim support from a 4.9★ IRDAI licensed agent.",
    heroH1: "Insurance Agent in Medavakkam, Chennai — Vehicle, Health & Family",
    heroP: "Medavakkam, Kovilambakkam and Keelkattalai are mostly families — car, health and life policies, compared across insurers so you're not just taking the first quote you see.",
    localContext: [
      "Medavakkam is a rapidly growing residential area in South Chennai with young families and professionals.",
      "Health insurance demand is high — families need coverage with cashless hospitals accessible from Medavakkam.",
      "Vehicle insurance for daily commuters to IT corridors (OMR, Guindy) with correct add-ons is essential.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide insurance services in Medavakkam?", a: "Yes. Medavakkam, Kovilambakkam, and Keelkattalai. Doorstep service available for document collection and policy delivery." },
      { q: "Which health insurance plan is best for families in Medavakkam?", a: "We check cashless hospital networks near Medavakkam and recommend plans from Star Health, HDFC ERGO, or Care Health based on your family's specific needs." },
    ],
    relatedLocations: [
      { label: "Velachery", href: EN("/locations/velachery/") },
      { label: "Tambaram", href: EN("/locations/tambaram/") },
      { label: "Sholinganallur", href: EN("/locations/sholinganallur/") },
    ],
    serviceAreaSignals: [
      "insurance in Medavakkam",
      "insurance agent Medavakkam",
      "car insurance Medavakkam",
      "health insurance Medavakkam",
    ],
  },

  // ===========================
  // CENTRAL CHENNAI
  // ===========================

  "t-nagar": {
    name: "T. Nagar",
    postalCode: "600017",
    seoTitle: "Insurance Agent in T. Nagar, Chennai — Car, Health, Shop & Business Insurance",
    seoDesc: "Insurance services in T. Nagar, Chennai. Car, health, shop, fire, and commercial insurance from a 4.9★ IRDAI licensed agent. Doorstep service for T. Nagar, Mambalam, and surrounding areas.",
    heroH1: "Insurance Agent in T. Nagar, Chennai — Vehicle, Health & Shop Insurance",
    heroP: "T. Nagar's shops and commercial establishments need stock and property cover that actually matches what's inside, alongside the usual family policies from Mambalam and Kodambakkam. We size it to your business, not a generic template.",
    localContext: [
      "T. Nagar is Chennai's busiest commercial hub — textiles, jewellery, and retail establishments need fire, stock, and liability insurance.",
      "Residential areas in Mambalam and West Mambalam have high demand for car, health, and family insurance.",
      "Major hospitals nearby: Apollo, MIOT, Kauvery, Fortis — strong cashless network availability.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle shop insurance in T. Nagar?", a: "Yes. Fire, stock, burglary, and public liability insurance for shops, showrooms, and commercial establishments in T. Nagar. We understand retail business insurance needs — textiles, jewellery, electronics." },
      { q: "Can you visit T. Nagar for insurance work?", a: "Yes. Doorstep service for T. Nagar, Mambalam, West Mambalam, and Kodambakkam. Most paperwork is done via WhatsApp — visits for document collection and verification." },
      { q: "Which health insurance works best for T. Nagar residents?", a: "T. Nagar has excellent hospital access — Apollo, MIOT, Kauvery are all within 5-10 km. We check which insurers have cashless tie-ups with your preferred hospitals." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Shop or showroom owner",
        forWhom: "You run a retail establishment — textiles, jewellery, electronics — and need stock, fire, or liability cover.",
        points: [
          "Sum insured matched to your actual stock value, especially important for high-value inventory like jewellery or electronics.",
          "Public liability included if customers visit your premises — a common gap in generic shop policies.",
          "We understand retail-specific risk, not just a generic 'commercial property' template.",
        ],
        ctaLabel: "WhatsApp — shop/showroom insurance",
        waText: "Hi, I run a shop/showroom in T. Nagar and need fire and stock insurance sorted correctly.",
      },
      {
        label: "Family in Mambalam / West Mambalam / Kodambakkam",
        forWhom: "You need personal car, bike, or health insurance, not a business policy.",
        points: [
          "Health insurance checked against T. Nagar's excellent hospital access — Apollo, MIOT, Kauvery are all nearby.",
          "IDV/NCB checked on motor renewals before you pay.",
          "Doorstep service for document collection if a visit is easier than WhatsApp.",
        ],
        ctaLabel: "WhatsApp — personal insurance",
        waText: "Hi, I'm in the T. Nagar/Mambalam area and need help with car/bike/health insurance.",
      },
      {
        label: "Filing a claim — shop or personal",
        forWhom: "Something's already happened, whether it's a shop incident or a personal claim.",
        points: [
          "For shops: proof file guidance (stock register, invoices, photos) before the surveyor visits.",
          "For personal claims: step-by-step guidance from the first hour, whichever type of policy it is.",
          "Support through to settlement, not just the initial filing.",
        ],
        ctaLabel: "WhatsApp — claim help",
        waText: "Hi, I need help with an insurance claim in T. Nagar — shop or personal.",
      },
    ],

    relatedLocations: [
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "Egmore", href: EN("/locations/egmore/") },
      { label: "Mylapore", href: EN("/locations/mylapore/") },
    ],
    serviceAreaSignals: [
      "insurance in T Nagar",
      "insurance agent T Nagar",
      "shop insurance T Nagar",
      "fire insurance T Nagar",
      "car insurance T Nagar",
      "health insurance T Nagar",
      "insurance near T Nagar Chennai",
    ],
  },

  egmore: {
    name: "Egmore",
    postalCode: "600008",
    seoTitle: "Insurance Agent in Egmore, Chennai — Car, Health & Family Insurance",
    seoDesc: "Insurance services in Egmore, Chennai. Car, health, life, and family insurance with doorstep service from a 4.9★ IRDAI licensed agent. Multi-insurer comparison and claim support.",
    heroH1: "Insurance Agent in Egmore, Chennai — Vehicle, Health & Family",
    heroP: "Egmore, Kilpauk, Chetpet and Purasawalkam are mostly families reaching out about car, health and life cover. We compare across insurers so you actually know you're getting a fair deal.",
    localContext: [
      "Egmore is a central Chennai residential and commercial area — mix of families, businesses, and institutions.",
      "Multiple major hospitals nearby: SRMC, Government General Hospital, Apollo Hospitals — strong health insurance utility.",
      "Central location makes it a natural service hub for North-Central and South-Central Chennai insurance needs.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide insurance services in Egmore?", a: "Yes. Egmore, Kilpauk, Chetpet, and Purasawalkam. Doorstep service for document collection — most work handled via WhatsApp." },
      { q: "Can you help with health insurance in Egmore?", a: "Yes. We check cashless networks near Egmore — SRMC, Apollo, and other hospitals. We recommend plans with the best coverage for your specific health needs and age group." },
    ],
    relatedLocations: [
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
      { label: "Mylapore", href: EN("/locations/mylapore/") },
    ],
    serviceAreaSignals: [
      "insurance in Egmore",
      "insurance agent Egmore",
      "car insurance Egmore",
      "health insurance Egmore",
      "insurance near Egmore",
    ],
  },

  mylapore: {
    name: "Mylapore",
    postalCode: "600004",
    seoTitle: "Insurance Agent in Mylapore, Chennai — Car, Health & Family Insurance",
    seoDesc: "Insurance services in Mylapore, Chennai. Car, health, life insurance with doorstep service and claim support from a 4.9★ IRDAI licensed agent with 15+ insurer options.",
    heroH1: "Insurance Agent in Mylapore, Chennai — Vehicle, Health & Family",
    heroP: "Mylapore, Mandaveli, R.A. Puram and Alwarpet are mostly families — car, health and life policies. We'll come to you if that's easier than sorting it over the phone.",
    localContext: [
      "Mylapore is one of Chennai's oldest and most respected residential areas — families and senior citizens with comprehensive insurance needs.",
      "High demand for senior citizen health insurance and family floater plans.",
      "Proximity to MIOT, Apollo, and Kauvery makes health insurance with cashless facility highly relevant.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you serve Mylapore and surrounding areas?", a: "Yes. Mylapore, Mandaveli, R.A. Puram, and Alwarpet. Doorstep service available for document collection and policy delivery." },
      { q: "Do you handle senior citizen health insurance?", a: "Yes. We specialize in finding the right health insurance for senior citizens — considering pre-existing conditions, cashless hospital access near Mylapore, and premium affordability." },
    ],
    relatedLocations: [
      { label: "Adyar", href: EN("/locations/adyar/") },
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
      { label: "Egmore", href: EN("/locations/egmore/") },
    ],
    serviceAreaSignals: [
      "insurance in Mylapore",
      "insurance agent Mylapore",
      "health insurance Mylapore",
      "car insurance Mylapore",
      "insurance near Mylapore",
    ],
  },

  nungambakkam: {
    name: "Nungambakkam",
    postalCode: "600034",
    seoTitle: "Insurance Agent in Nungambakkam, Chennai — Car, Health & Business Insurance",
    seoDesc: "Insurance services in Nungambakkam, Chennai. Car, health, life, and commercial insurance from a 4.9★ IRDAI licensed agent. Multi-insurer comparison and claim support.",
    heroH1: "Insurance Agent in Nungambakkam, Chennai — Vehicle, Health & Business",
    heroP: "Nungambakkam, Thousand Lights and Teynampet bring a mix of family policies and small business cover. Tell us which one you need and we'll guide you from there.",
    localContext: [
      "Nungambakkam is a prime commercial and residential area — mix of corporate offices, residential apartments, and healthcare facilities.",
      "Apollo Hospitals Greams Road and Frontier Lifeline are nearby — cashless health insurance is a primary need.",
      "Corporate employees and business owners need comprehensive coverage — health, car, and business insurance.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you serve Nungambakkam?", a: "Yes. Nungambakkam, Thousand Lights, Teynampet, and nearby areas. Doorstep service for document collection." },
      { q: "Which health insurance has cashless hospitals near Nungambakkam?", a: "Apollo Greams Road, Frontier Lifeline, and several other hospitals near Nungambakkam have cashless tie-ups with major insurers. We check the specific network for your chosen insurer." },
    ],
    relatedLocations: [
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
      { label: "Egmore", href: EN("/locations/egmore/") },
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
    ],
    serviceAreaSignals: [
      "insurance in Nungambakkam",
      "insurance agent Nungambakkam",
      "car insurance Nungambakkam",
      "health insurance Nungambakkam",
    ],
  },

  kilpauk: {
    name: "Kilpauk",
    postalCode: "600010",
    seoTitle: "Insurance Agent in Kilpauk, Chennai — Car, Health & Family Insurance",
    seoDesc: "Insurance services in Kilpauk, Chennai. Car, health, bike, and family insurance with doorstep service from a 4.9★ IRDAI licensed agent. Multi-insurer comparison and claim support.",
    heroH1: "Insurance Agent in Kilpauk, Chennai — Vehicle, Health & Family",
    heroP: "Kilpauk, Aminjikarai and Shenoy Nagar are mostly families — car, health and life cover. Send your details on WhatsApp and we'll guide you honestly.",
    localContext: [
      "Kilpauk is a well-established residential area in North-Central Chennai with families and working professionals.",
      "Kilpauk Medical College Hospital nearby — health insurance with cashless facility is a key requirement.",
      "Connectivity to Anna Nagar and Egmore makes Kilpauk a bridge zone for insurance service coverage.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide insurance in Kilpauk?", a: "Yes. Kilpauk, Aminjikarai, and Shenoy Nagar. Doorstep service available." },
      { q: "Can you help with health insurance near Kilpauk Medical College?", a: "Yes. We check cashless networks for hospitals near Kilpauk and recommend the best plan for your family's needs." },
    ],
    relatedLocations: [
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
      { label: "Egmore", href: EN("/locations/egmore/") },
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
    ],
    serviceAreaSignals: [
      "insurance in Kilpauk",
      "insurance agent Kilpauk",
      "car insurance Kilpauk",
      "health insurance Kilpauk",
    ],
  },

  // ===========================
  // WEST CHENNAI
  // ===========================

  "anna-nagar": {
    name: "Anna Nagar",
    postalCode: "600040",
    seoTitle: "Insurance Agent in Anna Nagar, Chennai — Car, Health & Family Insurance",
    seoDesc: "Insurance services in Anna Nagar, Chennai. Car, health, life, and family insurance from a 4.9★ IRDAI licensed agent. Multi-insurer comparison, doorstep service, and local claim support.",
    heroH1: "Insurance Agent in Anna Nagar, Chennai — Vehicle, Health & Family",
    heroP: "Anna Nagar, Anna Nagar West and Thirumangalam are mostly families asking about car, health and life cover — with hospitals like Kaveri, Billroth and Apollo First Med nearby, getting cashless health insurance right matters a lot here.",
    localContext: [
      "Anna Nagar is one of Chennai's most planned and premium residential areas with high family insurance demand.",
      "Multiple hospitals within and nearby: Kaveri, Billroth, Apollo First Med — strong cashless health insurance utility.",
      "Predominantly residential with professional families — car, health, and life insurance are the primary needs.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide doorstep service in Anna Nagar?", a: "Yes. Anna Nagar, Anna Nagar East, West, Thirumangalam, and Mogappair. Doorstep service for document collection and policy delivery." },
      { q: "Which health insurance providers have cashless hospitals near Anna Nagar?", a: "Kaveri Hospital, Billroth Hospital, and Apollo First Med in Anna Nagar have cashless tie-ups with major insurers. We check the specific network based on your preferred hospitals." },
      { q: "Can you help with car insurance in Anna Nagar?", a: "Yes. Premium comparison across 15+ insurers, IDV check, add-on recommendations, and local claim support for accidents in the Anna Nagar area." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Renewing this year",
        forWhom: "Your car, bike, or health policy is due and you want it checked before you pay.",
        points: [
          "IDV/NCB checked on motor renewals; sum insured checked on health — before renewal, not after.",
          "Add-ons reviewed against your actual usage, not sold as a default bundle.",
          "Entire process over WhatsApp — send your current policy copy to start.",
        ],
        ctaLabel: "WhatsApp — renewal check",
        waText: "Hi, I'm in Anna Nagar and want my insurance renewal checked before I pay.",
      },
      {
        label: "Choosing a cashless hospital network",
        forWhom: "You want a health policy that actually works with Kaveri, Billroth, or Apollo First Med nearby.",
        points: [
          "We check the specific insurer network against your preferred hospitals, not a generic 'wide network' claim.",
          "Waiting periods and exclusions explained clearly before you commit.",
          "Family floater vs individual plans compared honestly for your household size.",
        ],
        ctaLabel: "WhatsApp — cashless hospital check",
        waText: "Hi, I'm in Anna Nagar and want to check which health insurer has cashless tie-ups with Kaveri/Billroth/Apollo First Med.",
      },
      {
        label: "Dealing with a claim",
        forWhom: "An accident or health event has already happened and you need to move correctly.",
        points: [
          "Step-by-step guidance on documentation and reporting from the first hour.",
          "If a claim was delayed or rejected, we review what happened and advise on realistic next steps.",
          "Support through to settlement, not just the initial filing.",
        ],
        ctaLabel: "WhatsApp — claim help",
        waText: "Hi, I need help with an insurance claim. I'm in Anna Nagar.",
      },
    ],

    relatedLocations: [
      { label: "Mogappair", href: EN("/locations/mogappair/") },
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
      { label: "Koyambedu", href: EN("/locations/koyambedu/") },
      { label: "Kilpauk", href: EN("/locations/kilpauk/") },
    ],
    serviceAreaSignals: [
      "insurance in Anna Nagar",
      "insurance agent Anna Nagar",
      "car insurance Anna Nagar",
      "health insurance Anna Nagar",
      "best insurance Anna Nagar Chennai",
      "insurance near Anna Nagar",
    ],
  },

  porur: {
    name: "Porur",
    postalCode: "600116",
    seoTitle: "Insurance Agent in Porur, Chennai — Car, Health & Commercial Insurance",
    seoDesc: "Insurance services in Porur, Chennai. Car, health, commercial insurance with doorstep service and claim support from a 4.9★ IRDAI licensed agent. Serving Porur, Ramapuram, and Mugalivakkam.",
    heroH1: "Insurance Agent in Porur, Chennai — Vehicle, Health & Business",
    heroP: "Porur, Ramapuram, Mugalivakkam and Valasaravakkam see a mix of families and small businesses — whichever one you are, send your details on WhatsApp and we'll guide you from there.",
    localContext: [
      "Porur is a growing hub connecting West Chennai to the Mount-Poonamallee corridor — mix of residential and commercial activity.",
      "MIOT International Hospital and Ramachandra Medical Centre are nearby — strong cashless health insurance demand.",
      "SME activity along the Mount-Poonamallee road creates demand for business and commercial vehicle insurance.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Auto Rickshaw Insurance (Porur)", href: EN("/auto-rickshaw-insurance-porur/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you serve Porur and surrounding areas?", a: "Yes. Porur, Ramapuram, Mugalivakkam, and Valasaravakkam. Doorstep service available for all insurance needs." },
      { q: "Can you handle commercial insurance for Porur businesses?", a: "Yes. Business insurance, commercial vehicle, and fire/stock coverage for businesses along the Mount-Poonamallee corridor." },
    ],
    relatedLocations: [
      { label: "Koyambedu", href: EN("/locations/koyambedu/") },
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
    ],
    serviceAreaSignals: [
      "insurance in Porur",
      "insurance agent Porur",
      "car insurance Porur",
      "health insurance Porur",
      "commercial insurance Porur",
    ],
  },

  mogappair: {
    name: "Mogappair",
    postalCode: "600037",
    seoTitle: "Insurance Agent in Mogappair, Chennai — Car, Health & Family Insurance",
    seoDesc: "Insurance services in Mogappair, Chennai. Car, health, bike insurance with doorstep service from a 4.9★ IRDAI licensed agent. Serving Mogappair East, West, and Nolambur.",
    heroH1: "Insurance Agent in Mogappair, Chennai — Vehicle, Health & Family",
    heroP: "Mogappair East, Mogappair West, Nolambur and Ambattur are mostly families — car, health and life cover, compared across insurers so you're not stuck with the first quote you got.",
    localContext: [
      "Mogappair is a large residential area adjacent to Anna Nagar — predominantly families with personal insurance needs.",
      "Proximity to Ambattur Industrial Estate creates overlap with personal and commercial insurance demand.",
      "Good hospital access: Billroth, SIMS, and other facilities nearby for health insurance utility.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { title: "All Insurance Services", href: EN("/services/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you serve Mogappair?", a: "Yes. Mogappair East, West, Nolambur, and connecting areas to Ambattur. Doorstep service available." },
      { q: "What insurance do Mogappair families typically need?", a: "Car insurance, family health insurance (floater with cashless hospitals), bike insurance, and term life insurance. We help set up comprehensive coverage for the whole family." },
    ],
    relatedLocations: [
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
      { label: "Koyambedu", href: EN("/locations/koyambedu/") },
      { label: "Porur", href: EN("/locations/porur/") },
    ],
    serviceAreaSignals: [
      "insurance in Mogappair",
      "insurance agent Mogappair",
      "car insurance Mogappair",
      "health insurance Mogappair",
    ],
  },

  koyambedu: {
    name: "Koyambedu",
    seoTitle: "Insurance Agent in Koyambedu, Chennai — Car, Health & Commercial Insurance",
    seoDesc: "Insurance services in Koyambedu, Chennai. Car, health, commercial vehicle, and business insurance from a 4.9★ IRDAI licensed agent. Serving Koyambedu, Vadapalani, and Virugambakkam.",
    heroH1: "Insurance Agent in Koyambedu, Chennai — Vehicle, Health & Business",
    heroP: "Koyambedu's wholesale market and bus terminal mean a lot of goods-in-transit and vehicle cover comes through here, alongside regular family policies from Vadapalani, Virugambakkam and Ashok Nagar. Whichever one you need, we'll guide you straight.",
    localContext: [
      "Koyambedu is Chennai's largest wholesale market hub — fruits, vegetables, and flowers. Commercial and goods-in-transit insurance is essential.",
      "Major bus terminal creates high transit and vehicle insurance activity.",
      "Mix of residential (Vadapalani, Virugambakkam) and commercial zones with diverse insurance needs.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle insurance for Koyambedu market businesses?", a: "Yes. Stock insurance, fire protection, goods-in-transit, and commercial vehicle coverage for Koyambedu wholesale market operators. We understand perishable goods and market-specific risks." },
      { q: "Can you help with transport insurance for Koyambedu?", a: "Yes. Commercial vehicle, fleet, and goods-in-transit insurance for transport operators servicing the Koyambedu market area." },
    ],
    relatedLocations: [
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
      { label: "Porur", href: EN("/locations/porur/") },
      { label: "T. Nagar", href: EN("/locations/t-nagar/") },
      { label: "Mogappair", href: EN("/locations/mogappair/") },
    ],
    serviceAreaSignals: [
      "insurance in Koyambedu",
      "insurance agent Koyambedu",
      "commercial insurance Koyambedu",
      "car insurance Koyambedu",
      "health insurance Koyambedu",
      "goods in transit insurance Koyambedu",
    ],
  },

  poonamallee: {
    name: "Poonamallee",
    postalCode: "600056",
    seoTitle: "Insurance Agent in Poonamallee, Chennai — Car, Health & Industrial Insurance",
    seoDesc: "Insurance services in Poonamallee, Chennai. Car, health, commercial vehicle, and industrial insurance from a 4.9★ IRDAI licensed agent. Doorstep service for Poonamallee and surrounding areas.",
    heroH1: "Insurance Agent in Poonamallee, Chennai — Vehicle, Health & Industrial",
    heroP: "Poonamallee and Avadi sit on the industrial corridor toward Sriperumbudur, so we see everything here — family policies, small business cover, and the occasional factory or fleet case.",
    localContext: [
      "Poonamallee is a western gateway of Chennai — connecting the city to the industrial corridors of Sriperumbudur and Oragadam.",
      "Mix of residential areas and industrial activity along the Chennai-Bangalore highway.",
      "Commercial vehicle and fleet insurance demand is high due to logistics movement on the highway corridor.",
    ],
    serviceLinks: [
      { title: "Car Insurance", href: EN("/policies/car-insurance/") },
      { title: "Health Insurance", href: EN("/policies/health-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Tempo / Mini Truck Insurance (Poonamallee)", href: EN("/tempo-insurance-poonamallee/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you serve Poonamallee and Avadi?", a: "Yes. Poonamallee, Avadi, and the highway corridor towards Sriperumbudur. Doorstep service for document collection and policy delivery." },
      { q: "Can you handle industrial insurance for Poonamallee factories?", a: "Yes. Fire, machinery, stock, and liability insurance for factories and warehouses along the Poonamallee-Sriperumbudur corridor. We handle industrial insurance documentation and claims." },
    ],
    relatedLocations: [
      { label: "Koyambedu", href: EN("/locations/koyambedu/") },
      { label: "Sriperumbudur", href: EN("/locations/sriperumbudur/") },
      { label: "Oragadam", href: EN("/locations/oragadam/") },
    ],
    serviceAreaSignals: [
      "insurance in Poonamallee",
      "insurance agent Poonamallee",
      "commercial vehicle insurance Poonamallee",
      "factory insurance Poonamallee",
      "car insurance Poonamallee",
    ],
  },

  // ===========================
  // TN INDUSTRIAL BELTS
  // ===========================

  hosur: {
    name: "Hosur",
    postalCode: "635109",
    seoTitle: "Insurance Agent in Hosur — Factory, Fleet & Commercial Insurance",
    seoDesc: "Insurance services in Hosur industrial area. Factory, fleet, commercial vehicle, warehouse, and contractor insurance from a 4.9★ IRDAI licensed agent with 30+ years experience.",
    heroH1: "Insurance Agent in Hosur — Factory, Fleet & Commercial Insurance",
    heroP: "Hosur's SIPCOT and SEZ zones are genuine manufacturing territory, so factory, fleet, warehouse and contractor cover are what we mostly handle here — set up properly before you ever need to claim.",
    localContext: [
      "Hosur is one of Tamil Nadu's most important industrial hubs — automotive, electronics, and manufacturing.",
      "SIPCOT Industrial Complex and SEZ host major factories needing comprehensive industrial insurance.",
      "Fleet and commercial vehicle insurance for logistics companies servicing Hosur-Chennai-Bangalore corridors.",
    ],
    serviceLinks: [
      { title: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide insurance services in Hosur?", a: "Yes. Factory, fleet, warehouse, and contractor insurance for Hosur SIPCOT, SEZ, and surrounding industrial areas. Most work handled via WhatsApp — site visits for complex commercial requirements." },
      { q: "Can you handle fleet insurance for Hosur logistics companies?", a: "Yes. Multi-vehicle fleet insurance, commercial vehicle, and goods-in-transit coverage for logistics operations on the Hosur-Chennai-Bangalore corridor." },
    ],
    relatedLocations: [
      { label: "Sriperumbudur", href: EN("/locations/sriperumbudur/") },
      { label: "Oragadam", href: EN("/locations/oragadam/") },
    ],
    serviceAreaSignals: [
      "insurance in Hosur",
      "factory insurance Hosur",
      "fleet insurance Hosur",
      "commercial insurance Hosur",
      "industrial insurance Hosur",
    ],
  },

  oragadam: {
    name: "Oragadam",
    postalCode: "602105",
    seoTitle: "Insurance Agent in Oragadam — Factory, Fleet & Industrial Insurance",
    seoDesc: "Insurance services in Oragadam industrial corridor. Factory, fleet, warehouse, and contractor insurance from a 4.9★ IRDAI licensed agent. SIPCOT and automotive hub coverage.",
    heroH1: "Insurance Agent in Oragadam — Factory, Fleet & Industrial Insurance",
    heroP: "Oragadam's automotive manufacturing belt means factory, fleet and contractor cover are what we mostly handle here. We understand how plant-level operations actually work, not just generic industrial policies.",
    localContext: [
      "Oragadam is India's automotive manufacturing hub — Hyundai, Renault-Nissan, Daimler, and tier-1 supplier factories.",
      "SIPCOT Oragadam hosts large-scale manufacturing with significant fire, machinery, and stock insurance needs.",
      "Heavy commercial vehicle movement and logistics operations require fleet and goods-in-transit coverage.",
    ],
    serviceLinks: [
      { title: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Crane & Heavy Equipment Insurance", href: EN("/crane-insurance-oragadam/") },
      { title: "Machinery Breakdown Insurance (Oragadam)", href: EN("/machinery-breakdown-insurance-oragadam/") },
      { title: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle insurance for Oragadam factories?", a: "Yes. Fire, machinery breakdown, stock, and liability insurance for manufacturing plants in Oragadam SIPCOT. We handle everything from policy documentation to claim support." },
      { q: "Can you insure the logistics fleet operating from Oragadam?", a: "Yes. Commercial vehicle fleet insurance for logistics companies and part suppliers operating in the Oragadam-Sriperumbudur-Chennai corridor." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "OEM / large manufacturing plant",
        forWhom: "You run a large-scale automotive manufacturing operation with significant machinery and stock exposure.",
        points: [
          "Sum insured reviewed against actual machinery and stock replacement cost at this scale.",
          "Machinery breakdown assessed as a distinct cover from fire — sudden mechanical/electrical failure isn't a fire-policy matter.",
          "Site visits available given the complexity of large plant-level risk.",
        ],
        ctaLabel: "WhatsApp — large plant insurance review",
        waText: "Hi, we run a large manufacturing plant in Oragadam and want our insurance reviewed.",
      },
      {
        label: "Tier-1 / tier-2 supplier",
        forWhom: "You're a smaller supplier to the OEMs, often with contractor-style operations alongside your factory.",
        points: [
          "Coverage sized to your actual scale, not the large-OEM template.",
          "Workmen Compensation and contractor cover addressed together if your operations involve on-site work for the OEM.",
          "Guidance on proof of insurance if the OEM requires it for supplier qualification.",
        ],
        ctaLabel: "WhatsApp — tier-1/2 supplier cover",
        waText: "Hi, we're a tier-1/2 supplier operating near Oragadam and need our insurance reviewed.",
      },
      {
        label: "Logistics / parts transport",
        forWhom: "You move parts and materials through the Oragadam-Sriperumbudur-Chennai corridor.",
        points: [
          "Commercial vehicle fleet insurance matched to your actual vehicle usage and route exposure.",
          "Goods-in-transit cover for high-value parts shipments, with documentation set up before dispatch.",
          "Consistent proof-trail habits so claims don't stall on missing paperwork.",
        ],
        ctaLabel: "WhatsApp — logistics/fleet cover",
        waText: "Hi, we run logistics/transport near Oragadam and need fleet and goods-in-transit insurance reviewed.",
      },
    ],

    relatedLocations: [
      { label: "Sriperumbudur", href: EN("/locations/sriperumbudur/") },
      { label: "Hosur", href: EN("/locations/hosur/") },
      { label: "Poonamallee", href: EN("/locations/poonamallee/") },
    ],
    serviceAreaSignals: [
      "insurance in Oragadam",
      "factory insurance Oragadam",
      "fleet insurance Oragadam",
      "industrial insurance Oragadam",
      "commercial insurance Oragadam SIPCOT",
    ],
  },

  sriperumbudur: {
    name: "Sriperumbudur",
    postalCode: "602105",
    seoTitle: "Insurance Agent in Sriperumbudur — Factory, Fleet & Industrial Insurance",
    seoDesc: "Insurance services in Sriperumbudur SIPCOT and industrial area. Factory, fleet, warehouse, and contractor insurance from a 4.9★ IRDAI licensed agent with 30+ years experience.",
    heroH1: "Insurance Agent in Sriperumbudur — Factory, Fleet & Commercial Insurance",
    heroP: "Sriperumbudur SIPCOT covers electronics, automotive and logistics, so factory, fleet and warehouse cover are what we mostly handle here. We get the documentation right before it's ever tested by a claim.",
    localContext: [
      "Sriperumbudur is a major industrial hub — Samsung, Foxconn, Nokia, and numerous electronics/automotive manufacturers.",
      "SIPCOT Sriperumbudur has extensive industrial insurance needs: fire, machinery, stock, and contractor coverage.",
      "Logistics corridor between Chennai and Oragadam with significant fleet and goods-in-transit insurance demand.",
    ],
    serviceLinks: [
      { title: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Crane & Heavy Equipment Insurance", href: EN("/crane-insurance-sriperumbudur/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle insurance for Sriperumbudur SIPCOT factories?", a: "Yes. Fire, machinery, stock, liability, and contractor insurance for manufacturing plants in Sriperumbudur SIPCOT. Site visits available for complex industrial requirements." },
      { q: "Can you handle goods-in-transit insurance for Sriperumbudur logistics?", a: "Yes. Marine cargo and goods-in-transit insurance for companies moving goods between Sriperumbudur, Chennai Port, and destinations across India." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Established manufacturer / large factory",
        forWhom: "You run a manufacturing plant in SIPCOT with significant machinery and stock value.",
        points: [
          "Sum insured reviewed against actual machinery and stock replacement cost — the average clause is unforgiving on undervaluation at this scale.",
          "Machinery breakdown cover assessed separately from fire, since they're genuinely different risks.",
          "Site visits available for complex industrial requirements — we don't do this entirely over WhatsApp when the risk warrants an in-person look.",
        ],
        ctaLabel: "WhatsApp — factory insurance review",
        waText: "Hi, we run a manufacturing plant in Sriperumbudur SIPCOT and want our insurance reviewed.",
      },
      {
        label: "Logistics / fleet operator on the corridor",
        forWhom: "You move goods between Sriperumbudur, Chennai Port, and destinations across India.",
        points: [
          "Marine cargo and goods-in-transit cover matched to your actual shipment patterns.",
          "Fleet documentation (permit, fitness, endorsements) checked together if you also run the vehicles.",
          "Consistent proof-trail habits so a transit claim doesn't stall on documentation.",
        ],
        ctaLabel: "WhatsApp — logistics/transit cover",
        waText: "Hi, we run logistics/transport out of Sriperumbudur and need goods-in-transit and fleet insurance reviewed.",
      },
      {
        label: "New MSME setting up in SIPCOT",
        forWhom: "You're a smaller supplier or MSME newly registered or setting up near the industrial hub.",
        points: [
          "We map what's mandatory at your stage versus what can wait, rather than overselling a large-factory bundle.",
          "Workmen Compensation set up correctly as soon as you hire, sized to your actual headcount.",
          "Guidance on proof of insurance if a larger manufacturer or tender requires it for supplier qualification.",
        ],
        ctaLabel: "WhatsApp — new MSME setup",
        waText: "Hi, we're a new MSME setting up near Sriperumbudur SIPCOT and need insurance guidance.",
      },
    ],

    relatedLocations: [
      { label: "Oragadam", href: EN("/locations/oragadam/") },
      { label: "Poonamallee", href: EN("/locations/poonamallee/") },
      { label: "Hosur", href: EN("/locations/hosur/") },
    ],
    serviceAreaSignals: [
      "insurance in Sriperumbudur",
      "factory insurance Sriperumbudur",
      "fleet insurance Sriperumbudur",
      "commercial insurance Sriperumbudur",
      "industrial insurance Sriperumbudur SIPCOT",
    ],
  },

  "maraimalai-nagar": {
    name: "Maraimalai Nagar",
    postalCode: "603209",
    seoTitle: "Insurance Agent in Maraimalai Nagar — Factory, Commercial & Industrial Insurance",
    seoDesc: "Insurance services in Maraimalai Nagar industrial area. Factory, fleet, warehouse, and commercial insurance from a 4.9★ IRDAI licensed agent. SIPCOT and GST Road corridor coverage.",
    heroH1: "Insurance Agent in Maraimalai Nagar — Factory & Commercial Insurance",
    heroP: "Maraimalai Nagar and the GST Road corridor bring in factory, warehouse and fleet cover mostly. We set the documentation up right from the start, so a claim doesn't stall over something avoidable.",
    localContext: [
      "Maraimalai Nagar SIPCOT hosts manufacturing plants, warehouses, and logistics operations along the GST Road.",
      "Industrial insurance needs include fire, machinery, stock, and goods-in-transit coverage.",
      "Proximity to Chengalpattu and the southern industrial corridor creates combined insurance service demand.",
    ],
    serviceLinks: [
      { title: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Contractor Insurance (CAR + WC)", href: EN("/contractor-insurance-maraimalai-nagar/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle insurance for Maraimalai Nagar factories?", a: "Yes. Fire, machinery, stock, and warehouse insurance for Maraimalai Nagar SIPCOT operations. Claim documentation and follow-up support included." },
      { q: "Can you handle fleet insurance for GST Road logistics?", a: "Yes. Commercial vehicle and fleet insurance for transport companies operating on the GST Road corridor between Chennai and Maraimalai Nagar." },
    ],
    relatedLocations: [
      { label: "Tambaram", href: EN("/locations/tambaram/") },
      { label: "Oragadam", href: EN("/locations/oragadam/") },
      { label: "Sriperumbudur", href: EN("/locations/sriperumbudur/") },
    ],
    serviceAreaSignals: [
      "insurance in Maraimalai Nagar",
      "factory insurance Maraimalai Nagar",
      "commercial insurance Maraimalai Nagar",
      "industrial insurance Maraimalai Nagar SIPCOT",
    ],
  },
};
