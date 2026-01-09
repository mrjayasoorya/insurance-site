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
let gbpUrl = "https://www.google.com/maps/place/M+N+Rajendrakumar+Insurance+Services+%E2%80%93+Commercial,+Vehicle+%26+Industrial+Insurance+%7C+Sholavaram,+Karanodai,+Redhills/@13.2391084,80.1702588,17z/data=!3m1!4b1!4m6!3m5!1s0x3a527d2b1e29b5ff:0xe9b9b0049f529b6b!8m2!3d13.2391084!4d80.1728337!16s%2Fg%2F11xlhmwb8r"
let phoneE164 = "+917448324068";
let whatsappE164 = "917448324068";
let whatsappPrefill = "Hi, I need guidance on the right insurance for my business / vehicle. Please help.";

let locationsDetail = {
  // ====== PRIORITY BELT: Sholavaram ↔ Madhavaram corridor ======
sholavaram: {
    name: "Sholavaram",
    seoTitle: "Insurance Services in Sholavaram (Chennai Outskirts) – Office Support & Claim Guidance",
    seoDesc:
      "Insurance guidance anchored to our Sholavaram office: commercial transport/fleet, warehouses/property basics, contractor workflows (as applicable), and claim documentation support. Practical, claim-ready approach.",
    heroH1: "Insurance services in Sholavaram",
    heroP:
      "Anchored to our Sholavaram office support—commercial-first guidance for NH-facing and industrial activity, plus motor/health/LIC support when needed.",
    localContext: [
      "Sholavaram is our primary support base for Chennai North and corridor-connected belts.",
      "Commercial queries often involve transport documentation discipline and claim reporting steps (as applicable).",
      "For SMEs, clarity on sum insured and basic proof discipline reduces avoidable disputes (as applicable).",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Can I visit your Sholavaram office directly?",
        a: "Yes. It’s best to call or WhatsApp before visiting so we can guide the document checklist and avoid repeat trips.",
      },
      {
        q: "Do you serve only Sholavaram?",
        a: "Sholavaram is our base. We commonly support nearby Chennai North and corridor-connected areas depending on the policy and insurer requirements.",
      },
    ],
    relatedLocations: [
      { label: "Red Hills", href: EN("/locations/red-hills/") },
      { label: "Puzhal", href: EN("/locations/puzhal/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Karanodai", href: EN("/locations/karanodai/") },
    ],
    serviceAreaSignals: [
      "insurance in Sholavaram",
      "insurance agent Sholavaram",
      "insurance office Sholavaram",
      "insurance renewal Sholavaram",
      "insurance claim support Sholavaram",
    ],
  },

  "red-hills": {
    name: "Red Hills",
    seoTitle: "Insurance Services in Red Hills – NH Belt Transport, Warehouse & Claim Support",
    seoDesc:
      "Red Hills insurance guidance via Sholavaram office support: transport/fleet documentation discipline, warehouse/property basics (as applicable), MSME packages and claim documentation support.",
    heroH1: "Insurance services in Red Hills",
    heroP:
      "Commercial-first support for NH-facing movement and storage risk guidance—plus renewals and claim documentation discipline where needed.",
    localContext: [
      "NH-facing belts often involve higher third-party exposure and documentation checks during claims (as applicable).",
      "Warehouse/property risks are proof-driven: invoices/records and valuation basis matter (as applicable).",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Why are NH belt claims more document-heavy?",
        a: "Third-party involvement and compliance checks (as applicable) are more common. Clean reporting, valid documents and a clear timeline reduce avoidable delays.",
      },
    ],
    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Puzhal", href: EN("/locations/puzhal/") },
      { label: "Karanodai", href: EN("/locations/karanodai/") },
    ],
    serviceAreaSignals: [
      "insurance in Red Hills",
      "insurance agent Red Hills",
      "car insurance Red Hills",
      "commercial insurance Red Hills",
      "warehouse insurance Red Hills",
    ],
  },

  madhavaram: {
    name: "Madhavaram",
    seoTitle: "Insurance Services in Madhavaram – Motor, SME & Commercial Vehicle Support",
    seoDesc:
      "Madhavaram support via Sholavaram office: motor renewals, SME packages, commercial vehicle documentation discipline and claim documentation guidance.",
    heroH1: "Insurance services in Madhavaram",
    heroP:
      "City-edge logistics corridor support—motor renewals and SME guidance, plus commercial vehicle documentation discipline when required.",
    localContext: [
      "Mixed corridor: motor renewals + SME needs appear frequently.",
      "For commercial vehicles, document discipline (permit/fitness/RC as applicable) helps reduce claim friction.",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Madhavaram customers for renewals?", a: "Yes. Renewals and claim documentation clarity are common requests we handle." },
    ],
    relatedLocations: [
      { label: "Puzhal", href: EN("/locations/puzhal/") },
      { label: "Red Hills", href: EN("/locations/red-hills/") },
      { label: "Madhavaram Truck Terminal", href: EN("/locations/madhavaram-truck-terminal/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Madhavaram",
      "car insurance Madhavaram",
      "insurance renewal Madhavaram",
      "commercial insurance Madhavaram",
    ],
  },

  ambattur: {
    name: "Ambattur",
    seoTitle: "Insurance Services in Ambattur – Motor, SME & Claim Documentation Support",
    seoDesc:
      "Ambattur support via Sholavaram office: motor renewals, SME packages and claim documentation guidance with a practical, claim-ready approach.",
    heroH1: "Insurance services in Ambattur",
    heroP:
      "Support for Ambattur customers via Sholavaram office—renewals, coverage clarity and claim documentation guidance.",
    localContext: [
      "Mixed city-side area where motor renewals and SME packages are common needs.",
      "We focus on clean documentation and correct process steps (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Ambattur customers even though your office is in Sholavaram?", a: "Yes. We support via phone/WhatsApp and guided documentation depending on requirement." },
    ],
    relatedLocations: [
      { label: "Thiruninravur", href: EN("/locations/thiruninravur/") },
      { label: "Mogappair West", href: EN("/locations/mogappair-west/") },
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
    ],
    serviceAreaSignals: [
      "insurance in Ambattur",
      "insurance agent Ambattur",
      "car insurance Ambattur",
      "commercial insurance Ambattur",
      "insurance renewal Ambattur",
    ],
  },
  puzhal: {
    name: "Puzhal",
    seoTitle: "Insurance Services in Puzhal (Chennai North) – Motor, SME & Claim Support",
    seoDesc:
      "Insurance guidance for Puzhal customers via Sholavaram office support: motor renewals, SME packages, and claim documentation steps. Practical, claim-ready approach.",
    heroH1: "Insurance services in Puzhal",
    heroP:
      "Support for Puzhal customers through our Sholavaram office—renewals, documentation clarity, and service guidance for motor, SME and selected commercial needs.",
    localContext: [
      "City–outskirts connector area where renewals and claim documentation clarity are common needs.",
      "Motor claims and renewals are frequent; clear add-on selection and correct reporting steps reduce delays.",
      "SME and shop packages are common where stock/assets need basic proof discipline (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Do you support Puzhal customers even though your office is in Sholavaram?",
        a:
          "Yes. We support Puzhal customers via call/WhatsApp and guided documentation, depending on the policy and insurer requirements.",
      },
      {
        q: "What is the most common mistake during motor renewals?",
        a:
          "Renewing without checking IDV/NCB correctly and taking add-ons without matching real usage. We keep it simple and practical.",
      },
    ],
    relatedLocations: [
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Red Hills", href: EN("/locations/red-hills/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Puzhal",
      "car insurance Puzhal",
      "insurance renewal Puzhal",
      "insurance claim support Puzhal",
    ],
  },

  kavangarai: {
    name: "Kavangarai",
    seoTitle: "Insurance Services in Kavangarai – NH Corridor & Mixed Commercial Support",
    seoDesc:
      "Kavangarai insurance guidance via Sholavaram office support for NH movement and mixed SME needs: commercial vehicle documentation discipline, MSME packages, and claim support.",
    heroH1: "Insurance services in Kavangarai",
    heroP:
      "Support for Kavangarai customers through our Sholavaram office—commercial-first guidance for NH-facing movement and SME needs, with claim-ready documentation habits.",
    localContext: [
      "NH-facing movement zones tend to involve higher third-party exposure and documentation scrutiny during claims.",
      "Commercial vehicle renewals work best when permit/fitness/RC discipline is aligned (as applicable).",
      "SME packages benefit from simple proof discipline for stock/assets (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Do you handle only transport insurance in NH corridor areas?",
        a:
          "Transport/fleet is common, but we also support MSME packages, renewals, and claim documentation depending on the requirement.",
      },
      {
        q: "What should commercial vehicle owners keep ready?",
        a:
          "RC, previous policy copy, and permit/fitness details where applicable. Clear usage details help avoid mismatches later.",
      },
    ],
    relatedLocations: [
      { label: "Puzhal", href: EN("/locations/puzhal/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Kavangarai",
      "commercial vehicle insurance Kavangarai",
      "insurance agent near Kavangarai",
    ],
  },

  kosapaur: {
    name: "Kosapaur",
    seoTitle: "Insurance Services in Kosapaur – Motor, SME & Claim Documentation Support",
    seoDesc:
      "Kosapaur insurance guidance via Sholavaram office support: motor renewals, SME packages, and claim documentation steps with a practical approach.",
    heroH1: "Insurance services in Kosapaur",
    heroP:
      "Support for Kosapaur customers through our Sholavaram office—renewals, coverage clarity, and claim documentation guidance.",
    localContext: [
      "Mixed residential + SME pockets where renewal clarity and claim process guidance are common requirements.",
      "We focus on reducing avoidable delays by keeping documents and timelines clean (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Can you help with policy renewal and claim steps remotely?",
        a:
          "Yes. We can guide via call/WhatsApp. Final insurer requirements may vary by policy and incident type.",
      },
    ],
    relatedLocations: [
      { label: "Puzhal", href: EN("/locations/puzhal/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Kosapaur",
      "policy renewal Kosapaur",
      "car insurance Kosapaur",
    ],
  },

  surapet: {
    name: "Surapet",
    seoTitle: "Insurance Services in Surapet – Motor, SME & Industrial Pockets Support",
    seoDesc:
      "Surapet insurance guidance via Sholavaram office support: motor renewals, SME packages, claim documentation support, and guidance for industrial pockets (as applicable).",
    heroH1: "Insurance services in Surapet",
    heroP:
      "Support for Surapet customers through our Sholavaram office—practical coverage guidance for motor, SME and selected commercial needs.",
    localContext: [
      "Surapet has mixed residential activity and industrial pockets (as applicable).",
      "Common needs: motor renewals, claim documentation clarity, and SME package guidance.",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Do you provide support for Surapet customers?",
        a:
          "Yes. We assist via our Sholavaram office support and guided documentation depending on policy type and insurer requirements.",
      },
    ],
    relatedLocations: [
      { label: "Kolathur", href: EN("/locations/kolathur/") },
      { label: "Puzhal", href: EN("/locations/puzhal/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Surapet",
      "car insurance Surapet",
      "insurance renewal Surapet",
    ],
  },

  "madhavaram-milk-colony": {
    name: "Madhavaram Milk Colony",
    seoTitle: "Insurance Services in Madhavaram Milk Colony – Renewals & Claim Support",
    seoDesc:
      "Madhavaram Milk Colony support via Sholavaram office: motor renewals, health guidance, SME packages and claim documentation steps.",
    heroH1: "Insurance services in Madhavaram Milk Colony",
    heroP:
      "Support for Madhavaram Milk Colony customers—renewals, add-on clarity and claim documentation guidance via Sholavaram office support.",
    localContext: [
      "City-side motor renewals and claim process guidance are common needs.",
      "For SMEs, simple proof discipline for stock/assets helps avoid disputes (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support renewals for Madhavaram areas?", a: "Yes. Renewals and claim documentation clarity are common requests we handle." },
    ],
    relatedLocations: [
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Puzhal", href: EN("/locations/puzhal/") },
    ],
    serviceAreaSignals: [
      "insurance in Madhavaram Milk Colony",
      "car insurance Madhavaram Milk Colony",
      "policy renewal Madhavaram",
    ],
  },

  "madhavaram-truck-terminal": {
    name: "Madhavaram Truck Terminal",
    seoTitle: "Insurance Services near Madhavaram Truck Terminal – Commercial Vehicle & Fleet Support",
    seoDesc:
      "Commercial-first insurance guidance near Madhavaram Truck Terminal via Sholavaram office: commercial vehicles, goods carriers, fleet documentation discipline and claim support.",
    heroH1: "Insurance services near Madhavaram Truck Terminal",
    heroP:
      "Commercial-first support for transport operators—documentation discipline, renewal clarity and claim support via Sholavaram office guidance.",
    localContext: [
      "Transport-heavy zone where document discipline (RC/permit/fitness where applicable) reduces claim friction.",
      "Third-party exposure increases scrutiny; early reporting and a clean timeline helps.",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Do you support fleet renewals and document checklist guidance?",
        a:
          "Yes. We help verify policy alignment and prepare document checklists (RC/permit/fitness as applicable) to reduce avoidable delays.",
      },
    ],
    relatedLocations: [
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Red Hills", href: EN("/locations/red-hills/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "commercial insurance Madhavaram Truck Terminal",
      "fleet insurance Madhavaram",
      "commercial vehicle insurance Madhavaram",
    ],
  },

  // ====== PRIORITY BELT: Sholavaram ↔ Thiruvallur / industrial outskirts ======

  budur: {
    name: "Budur",
    seoTitle: "Insurance Services in Budur – NH Belt Transport & SME Guidance",
    seoDesc:
      "Budur insurance guidance via Sholavaram office support: commercial vehicles, goods carriers, fleet documentation habits and MSME packages (as applicable).",
    heroH1: "Insurance services in Budur",
    heroP:
      "NH-belt support through Sholavaram office guidance—commercial vehicle renewals, documentation discipline and claim support.",
    localContext: [
      "Outskirts movement belt where transport and SME requirements are common.",
      "Document discipline and correct disclosures are key for claim smoothness (as applicable).",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you help customers outside Chennai city limits?", a: "Yes, depending on policy type and insurer requirements. Guidance and documentation support are possible in many cases." },
    ],
    relatedLocations: [
      { label: "Periyapalayam", href: EN("/locations/periyapalayam/") },
      { label: "Karanodai", href: EN("/locations/karanodai/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Budur",
      "lorry insurance Budur",
      "commercial vehicle insurance Budur",
    ],
  },

  thiruninravur: {
    name: "Thiruninravur",
    seoTitle: "Insurance Services in Thiruninravur – Motor, SME & Commercial Vehicle Support",
    seoDesc:
      "Thiruninravur insurance guidance via Sholavaram office support: motor renewals, SME packages, commercial vehicle documentation habits and claim support.",
    heroH1: "Insurance services in Thiruninravur",
    heroP:
      "Support for Thiruninravur customers through Sholavaram office—renewals, coverage clarity, and claim documentation discipline.",
    localContext: [
      "Mixed residential + industrial adjacency where both motor renewals and SME needs appear.",
      "For commercial vehicles, permit/fitness/RC alignment (as applicable) reduces claim friction.",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support both personal and commercial policies here?", a: "Yes. Support depends on the requirement and insurer rules, but we commonly guide renewals and documentation across both." },
    ],
    relatedLocations: [
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Mogappair West", href: EN("/locations/mogappair-west/") },
    ],
    serviceAreaSignals: [
      "insurance in Thiruninravur",
      "car insurance Thiruninravur",
      "commercial insurance Thiruninravur",
    ],
  },

  veppampattu: {
    name: "Veppampattu",
    seoTitle: "Insurance Services in Veppampattu – Commercial Vehicle & SME Guidance",
    seoDesc:
      "Veppampattu insurance guidance via Sholavaram office support for commercial vehicles, goods carriers, SME packages and claim documentation help (as applicable).",
    heroH1: "Insurance services in Veppampattu",
    heroP:
      "Outskirts belt support through Sholavaram office guidance—commercial vehicle renewals, documentation discipline and claim support.",
    localContext: [
      "Outskirts belt where transport and SME activities can overlap.",
      "Claim smoothness depends heavily on correct disclosures and proof discipline (as applicable).",
    ],
    serviceLinks: [
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Can you guide claim documentation even if the incident is outside Chennai?", a: "Yes, depending on the policy/insurer process. We guide steps and document checklist wherever feasible." },
    ],
    relatedLocations: [
      { label: "Thiruvallur SIPCOT outskirts", href: EN("/locations/thiruvallur-sipcot-outskirts/") },
      { label: "Periyapalayam", href: EN("/locations/periyapalayam/") },
    ],
    serviceAreaSignals: [
      "insurance in Veppampattu",
      "commercial vehicle insurance Veppampattu",
      "policy renewal Veppampattu",
    ],
  },

  "thiruvallur-sipcot-outskirts": {
    name: "Thiruvallur SIPCOT outskirts",
    seoTitle: "Insurance Support near Thiruvallur SIPCOT (Outskirts) – Industrial & Contractor Needs",
    seoDesc:
      "Support near Thiruvallur SIPCOT outskirts via Sholavaram office guidance: industrial/property insurance basics, contractor CAR/WC guidance and claim documentation discipline (as applicable).",
    heroH1: "Insurance support near Thiruvallur SIPCOT outskirts",
    heroP:
      "Industrial/contractor-oriented guidance via Sholavaram office—coverage clarity, documentation discipline and claim support (as applicable).",
    localContext: [
      "Industrial/outskirts zones often require valuation clarity and proof discipline (stock/assets) for property risks.",
      "Contractor and workforce exposure (CAR/WC) needs correct classification and timeline discipline (as applicable).",
    ],
    serviceLinks: [
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Contractor CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle industrial policies for SIPCOT-side businesses?", a: "We can guide based on policy type and insurer requirements. Valuation and documentation discipline are core." },
    ],
    relatedLocations: [
      { label: "Veppampattu", href: EN("/locations/veppampattu/") },
      { label: "Periyapalayam", href: EN("/locations/periyapalayam/") },
    ],
    serviceAreaSignals: [
      "industrial insurance Thiruvallur SIPCOT outskirts",
      "warehouse insurance Thiruvallur",
      "contractor insurance Thiruvallur",
    ],
  },

  // ====== PRIORITY BELT: Poonamallee ↔ Sriperumbudur / industrial gold ======

  "poonamallee-bypass": {
    name: "Poonamallee bypass",
    seoTitle: "Insurance Support near Poonamallee Bypass – Transport, Contractor & Industrial Guidance",
    seoDesc:
      "Support near Poonamallee bypass via Sholavaram office guidance: transport/fleet needs, contractor CAR/WC, industrial/property basics and claim support (as applicable).",
    heroH1: "Insurance support near Poonamallee bypass",
    heroP:
      "Industrial corridor support via Sholavaram office—transport/fleet documentation discipline, contractor workflows and claim-ready guidance (as applicable).",
    localContext: [
      "Industrial corridors often see contractor activity and heavy vehicle movement.",
      "High-value policies become claim-sensitive when disclosures/documents are weak—proof discipline reduces disputes (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Contractor CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you provide support in high-industrial corridors?", a: "We can guide based on insurer requirements. Many cases can be supported via documentation and correct disclosures." },
    ],
    relatedLocations: [
      { label: "Thirumazhisai", href: EN("/locations/thirumazhisai/") },
      { label: "Sriperumbudur SIPCOT", href: EN("/locations/sriperumbudur-sipcot/") },
    ],
    serviceAreaSignals: [
      "commercial insurance Poonamallee bypass",
      "contractor insurance Poonamallee",
      "fleet insurance Poonamallee",
    ],
  },

  kuthambakkam: {
    name: "Kuthambakkam",
    seoTitle: "Insurance Support in Kuthambakkam – Industrial Corridor Guidance",
    seoDesc:
      "Kuthambakkam support via Sholavaram office guidance: transport/fleet needs, contractor CAR/WC, warehouse/property insurance basics and claim support (as applicable).",
    heroH1: "Insurance support in Kuthambakkam",
    heroP:
      "Industrial corridor support via Sholavaram office—transport, contractor and property risk guidance with claim-ready documentation habits.",
    localContext: [
      "Industrial corridor areas often involve contractor workflows and commercial vehicle movement.",
      "Claim outcomes depend on valuation proof, correct disclosures and clean reporting steps (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/") },
      { title: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support contractor and workforce-related policies?", a: "Yes. CAR/WC depends on correct classification and documentation discipline." },
    ],
    relatedLocations: [
      { label: "Poonamallee bypass", href: EN("/locations/poonamallee-bypass/") },
      { label: "Thirumazhisai", href: EN("/locations/thirumazhisai/") },
    ],
    serviceAreaSignals: [
      "insurance in Kuthambakkam",
      "contractor insurance Kuthambakkam",
      "warehouse insurance Kuthambakkam",
    ],
  },

  thirumazhisai: {
    name: "Thirumazhisai",
    seoTitle: "Insurance Support in Thirumazhisai – Transport, SME & Industrial Guidance",
    seoDesc:
      "Thirumazhisai insurance guidance via Sholavaram office support: commercial vehicles, SME packages, industrial/property basics and claim documentation discipline.",
    heroH1: "Insurance support in Thirumazhisai",
    heroP:
      "Support via Sholavaram office—transport and SME guidance with claim-ready documentation habits.",
    localContext: [
      "Industrial adjacency and transport movement can increase documentation scrutiny during claims (as applicable).",
      "Renewals and claim steps clarity are frequent needs for vehicle owners and SMEs.",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Can you help with renewal and claim guidance for Thirumazhisai?", a: "Yes. We support through Sholavaram office guidance depending on the policy and insurer rules." },
    ],
    relatedLocations: [
      { label: "Poonamallee bypass", href: EN("/locations/poonamallee-bypass/") },
      { label: "Chembarambakkam", href: EN("/locations/chembarambakkam/") },
    ],
    serviceAreaSignals: [
      "insurance in Thirumazhisai",
      "commercial insurance Thirumazhisai",
      "policy renewal Thirumazhisai",
    ],
  },

  chembarambakkam: {
    name: "Chembarambakkam",
    seoTitle: "Insurance Support in Chembarambakkam – Industrial Corridor & Vehicle Guidance",
    seoDesc:
      "Chembarambakkam insurance guidance via Sholavaram office support: commercial vehicles, SME packages, industrial/property basics and claim documentation support (as applicable).",
    heroH1: "Insurance support in Chembarambakkam",
    heroP:
      "Support via Sholavaram office—transport and SME guidance with claim-ready documentation discipline.",
    localContext: [
      "Corridor-connected area where transport movement and SME needs can overlap.",
      "Claim friction often comes from missing documents and unclear timelines; we guide a clean process (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support customers outside your immediate area?", a: "Yes. Support depends on policy type and insurer processes. We guide documentation and correct steps wherever feasible." },
    ],
    relatedLocations: [
      { label: "Thirumazhisai", href: EN("/locations/thirumazhisai/") },
      { label: "Sriperumbudur SIPCOT", href: EN("/locations/sriperumbudur-sipcot/") },
    ],
    serviceAreaSignals: [
      "insurance in Chembarambakkam",
      "commercial vehicle insurance Chembarambakkam",
    ],
  },

  "sriperumbudur-sipcot": {
    name: "Sriperumbudur SIPCOT",
    seoTitle: "Insurance Support near Sriperumbudur SIPCOT – Industrial, Contractor & Transit Guidance",
    seoDesc:
      "Support near Sriperumbudur SIPCOT via Sholavaram office guidance: industrial/property basics, contractor CAR/WC, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance support near Sriperumbudur SIPCOT",
    heroP:
      "Industrial corridor support via Sholavaram office—coverage clarity and claim-ready documentation habits for factories, contractors and transport operations (as applicable).",
    localContext: [
      "Industrial zones often involve higher-value risks where valuation and proof discipline matter.",
      "Contractor/workforce exposures need correct classification and timeline discipline (as applicable).",
      "Transit risks benefit from invoice/packing/dispatch trail discipline (as applicable).",
    ],
    serviceLinks: [
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Contractor CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support industrial and contractor risks in SIPCOT areas?", a: "We can guide depending on insurer requirements. We focus on disclosures, valuation and document discipline." },
    ],
    relatedLocations: [
      { label: "Oragadam outskirts", href: EN("/locations/oragadam-outskirts/") },
      { label: "Poonamallee bypass", href: EN("/locations/poonamallee-bypass/") },
    ],
    serviceAreaSignals: [
      "industrial insurance Sriperumbudur SIPCOT",
      "factory insurance Sriperumbudur",
      "contractor insurance Sriperumbudur",
    ],
  },

  "oragadam-outskirts": {
    name: "Oragadam outskirts",
    seoTitle: "Insurance Support near Oragadam (Outskirts) – Industrial, Contractor & Fleet Guidance",
    seoDesc:
      "Support near Oragadam outskirts via Sholavaram office guidance: contractor CAR/WC, industrial/property basics, fleet documentation discipline and claim support (as applicable).",
    heroH1: "Insurance support near Oragadam outskirts",
    heroP:
      "Industrial corridor support via Sholavaram office—structured guidance for contractor, fleet and property risks with claim-ready documentation discipline.",
    localContext: [
      "Industrial zones tend to be claim-sensitive: valuation, disclosures and documentation discipline matter.",
      "Contractor/WC exposures need correct workforce classification and clean records (as applicable).",
    ],
    serviceLinks: [
      { title: "Contractor CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you promise claim approval?", a: "No. Claim outcomes depend on insurer rules and policy terms. We guide correct steps and documentation to reduce avoidable delays." },
    ],
    relatedLocations: [
      { label: "Sriperumbudur SIPCOT", href: EN("/locations/sriperumbudur-sipcot/") },
      { label: "Chembarambakkam", href: EN("/locations/chembarambakkam/") },
    ],
    serviceAreaSignals: [
      "commercial insurance Oragadam",
      "contractor insurance Oragadam outskirts",
      "industrial insurance Oragadam",
    ],
  },

  // ====== PRIORITY BELT: Madhavaram ↔ Manali ↔ NH Manali ======

  "manali-new-town": {
    name: "Manali New Town",
    seoTitle: "Insurance Support in Manali New Town – Commercial Vehicle & Industrial Guidance",
    seoDesc:
      "Manali New Town support via Sholavaram office guidance: commercial vehicles, industrial/property basics, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance support in Manali New Town",
    heroP:
      "Commercial-first guidance via Sholavaram office—transport, property and claim documentation discipline for corridor-connected needs.",
    localContext: [
      "Industrial influence areas can involve commercial vehicles and transit-related documentation needs (as applicable).",
      "Claim clarity improves when reporting steps and proof trail are clean (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Manali area customers from Sholavaram office?", a: "Yes. Support depends on policy type and insurer requirements." },
    ],
    relatedLocations: [
      { label: "Manali Industrial Estate", href: EN("/locations/manali-industrial-estate/") },
      { label: "NH Manali Road", href: EN("/locations/nh-manali-road/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Manali New Town",
      "commercial insurance Manali New Town",
      "commercial vehicle insurance Manali",
    ],
  },

  "manali-industrial-estate": {
    name: "Manali Industrial Estate",
    seoTitle: "Insurance Support in Manali Industrial Estate – Industrial, Liability & Transit Guidance",
    seoDesc:
      "Manali Industrial Estate support via Sholavaram office guidance: industrial/property basics, liability awareness, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance support in Manali Industrial Estate",
    heroP:
      "Commercial-first guidance via Sholavaram office—industrial/property, liability and transit documentation discipline (as applicable).",
    localContext: [
      "Industrial estates typically require better valuation/proof discipline for property and stock (as applicable).",
      "Liability and transit documentation discipline may be relevant depending on operations (as applicable).",
    ],
    serviceLinks: [
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you help with property/stock proof discipline?", a: "Yes. Invoices/records and valuation basis (as applicable) are key for avoiding disputes." },
    ],
    relatedLocations: [
      { label: "Manali New Town", href: EN("/locations/manali-new-town/") },
      { label: "NH Manali Road", href: EN("/locations/nh-manali-road/") },
    ],
    serviceAreaSignals: [
      "industrial insurance Manali Industrial Estate",
      "warehouse insurance Manali",
      "liability insurance Manali",
    ],
  },

  "nh-manali-road": {
    name: "NH Manali Road",
    seoTitle: "Insurance Support near NH Manali Road – Transport, Transit & Claim Guidance",
    seoDesc:
      "NH Manali Road belt support via Sholavaram office guidance: commercial vehicles, goods carriers, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance support near NH Manali Road",
    heroP:
      "Commercial-first guidance via Sholavaram office—transport and transit documentation discipline with claim-ready reporting steps.",
    localContext: [
      "Logistics belts tend to face higher third-party exposure and documentation scrutiny during claims.",
      "Document readiness and early reporting reduce avoidable delays (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Why are logistics belt claims more document-heavy?", a: "Third-party involvement and compliance checks (as applicable) are more common, so timelines and proof matter." },
    ],
    relatedLocations: [
      { label: "Manali Industrial Estate", href: EN("/locations/manali-industrial-estate/") },
      { label: "Madhavaram Truck Terminal", href: EN("/locations/madhavaram-truck-terminal/") },
    ],
    serviceAreaSignals: [
      "fleet insurance NH Manali Road",
      "commercial vehicle insurance NH Manali Road",
      "insurance claim support NH Manali belt",
    ],
  },

  // ====== PRIORITY: Mixed residential + commercial pockets ======

  "kolathur-commercial-pockets": {
    name: "Kolathur (commercial pockets)",
    seoTitle: "Insurance Services in Kolathur (Commercial Pockets) – Motor, SME & Claim Support",
    seoDesc:
      "Kolathur commercial pockets support via Sholavaram office: motor renewals, SME packages, claim documentation steps and practical guidance.",
    heroH1: "Insurance services in Kolathur (commercial pockets)",
    heroP:
      "Support for Kolathur customers via Sholavaram office—renewals, SME guidance, and claim-ready documentation discipline.",
    localContext: [
      "Mixed-use area where SME needs and motor renewals commonly overlap.",
      "Most issues are renewal mistakes, add-on confusion, and missing claim documentation (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you help with both SME and vehicle insurance in Kolathur?", a: "Yes. We support renewals and documentation clarity depending on the requirement." },
    ],
    relatedLocations: [
      { label: "Retteri", href: EN("/locations/retteri/") },
      { label: "Villivakkam (industrial areas)", href: EN("/locations/villivakkam-industrial-areas/") },
      { label: "Mogappair West", href: EN("/locations/mogappair-west/") },
    ],
    serviceAreaSignals: [
      "insurance in Kolathur",
      "car insurance Kolathur",
      "commercial insurance Kolathur",
      "policy renewal Kolathur",
    ],
  },

  retteri: {
    name: "Retteri",
    seoTitle: "Insurance Services in Retteri – Motor Renewals & Claim Support",
    seoDesc:
      "Retteri support via Sholavaram office: car/bike renewals, add-on clarity, claim documentation steps and practical guidance.",
    heroH1: "Insurance services in Retteri",
    heroP:
      "Support for Retteri customers via Sholavaram office—renewals, claim documentation help and practical coverage guidance.",
    localContext: [
      "Residential-heavy demand: motor renewals and claim guidance.",
      "Simple discipline—policy copies, photos after incidents (as applicable), and timely reporting—prevents delays.",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support claim documentation for small motor accidents?", a: "Yes. We guide photos/timeline/reporting steps depending on case type." },
    ],
    relatedLocations: [
      { label: "Kolathur (commercial pockets)", href: EN("/locations/kolathur-commercial-pockets/") },
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
    ],
    serviceAreaSignals: [
      "car insurance Retteri",
      "insurance renewal Retteri",
      "insurance claim help Retteri",
    ],
  },

  "villivakkam-industrial-areas": {
    name: "Villivakkam (industrial areas)",
    seoTitle: "Insurance Support in Villivakkam (Industrial Areas) – SME, Property & Motor",
    seoDesc:
      "Villivakkam industrial areas support via Sholavaram office: SME packages, selected property risk guidance (as applicable), motor renewals and claim documentation help.",
    heroH1: "Insurance support in Villivakkam (industrial areas)",
    heroP:
      "Support via Sholavaram office—SME and motor guidance with claim-ready documentation discipline.",
    localContext: [
      "Industrial pockets may involve SME packages and property/stock proof discipline (as applicable).",
      "Motor renewals and claim documentation clarity remain common needs.",
    ],
    serviceLinks: [
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you help with SME packages for small units?", a: "Yes. We focus on sum insured and proof discipline where applicable." },
    ],
    relatedLocations: [
      { label: "Kolathur", href: EN("/locations/kolathur/") },
      { label: "Perambur", href: EN("/locations/perambur/") },
    ],
    serviceAreaSignals: [
      "insurance in Villivakkam",
      "business insurance Villivakkam",
      "car insurance Villivakkam",
    ],
  },

  "mogappair-west": {
    name: "Mogappair West",
    seoTitle: "Insurance Services in Mogappair West – Motor, Health & Renewal Support",
    seoDesc:
      "Mogappair West support via Sholavaram office: car/bike renewals, health policy guidance, and claim documentation steps with practical clarity.",
    heroH1: "Insurance services in Mogappair West",
    heroP:
      "Support via Sholavaram office—motor renewals and health guidance, plus claim documentation help when needed.",
    localContext: [
      "Residential demand: renewals and health policy guidance are common needs.",
      "We focus on clear add-on choices and claim-step clarity rather than generic explanations.",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Mogappair customers even though your office is in Sholavaram?", a: "Yes. We support via phone/WhatsApp and guided documentation depending on the requirement." },
    ],
    relatedLocations: [
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
      { label: "Koyambedu", href: EN("/locations/koyambedu/") },
    ],
    serviceAreaSignals: [
      "insurance in Mogappair West",
      "car insurance Mogappair West",
      "health insurance Mogappair West",
      "policy renewal Mogappair",
    ],
  },

  // ====== Existing ones you requested explicitly ======
  // manali, karanodai, periyapalayam, arani, perambur, kolathur, koyambedu, anna-nagar

  manali: {
    name: "Manali",
    seoTitle: "Insurance Services in Manali – Industrial, Transport & Transit Guidance",
    seoDesc:
      "Manali support via Sholavaram office guidance: commercial vehicles, industrial/property basics, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance services in Manali",
    heroP:
      "Support for Manali customers through Sholavaram office—commercial-first guidance for transport, industrial/property and claim documentation discipline.",
    localContext: [
      "Industrial influence area where commercial vehicles and property risks may overlap (as applicable).",
      "Transit documentation and liability awareness can matter depending on operations (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Manali industrial requirements?", a: "We can guide depending on the policy type and insurer requirements. Documentation and disclosures are core." },
    ],
    relatedLocations: [
      { label: "Manali Industrial Estate", href: EN("/locations/manali-industrial-estate/") },
      { label: "NH Manali Road", href: EN("/locations/nh-manali-road/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Manali",
      "commercial insurance Manali",
      "warehouse insurance Manali",
    ],
  },

  karanodai: {
    name: "Karanodai",
    seoTitle: "Insurance Services in Karanodai – NH Belt Transport & Claim Support",
    seoDesc:
      "Karanodai NH belt support via Sholavaram office: transport/fleet documentation discipline, goods carriers, and claim documentation guidance (as applicable).",
    heroH1: "Insurance services in Karanodai",
    heroP:
      "NH-facing belt support through Sholavaram office—transport-focused guidance and claim-ready documentation discipline.",
    localContext: [
      "NH belt movement increases third-party exposure and paperwork scrutiny during claims (as applicable).",
      "Permit/fitness/RC alignment and clean reporting reduces avoidable delays.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Is Karanodai treated like an NH belt for insurance workflows?", a: "Many cases involve NH movement and document checks. We guide documentation discipline and reporting steps based on case type." },
    ],
    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Red Hills", href: EN("/locations/red-hills/") },
      { label: "Periyapalayam", href: EN("/locations/periyapalayam/") },
    ],
    serviceAreaSignals: [
      "insurance in Karanodai",
      "lorry insurance Karanodai",
      "fleet insurance Karanodai",
    ],
  },

  periyapalayam: {
    name: "Periyapalayam",
    seoTitle: "Insurance Services in Periyapalayam – Outskirts Corridor Transport & SME Support",
    seoDesc:
      "Periyapalayam corridor support via Sholavaram office: transport/fleet guidance, SME packages and claim documentation discipline (as applicable).",
    heroH1: "Insurance services in Periyapalayam",
    heroP:
      "Outskirts corridor support through Sholavaram office—transport and SME guidance with claim-ready documentation habits.",
    localContext: [
      "Outskirts corridors often involve mixed transport movement and small business needs.",
      "Claims and approvals become smoother with correct disclosures and document readiness (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Periyapalayam customers from Sholavaram?", a: "Yes. We commonly support corridor-connected areas depending on policy and insurer requirements." },
    ],
    relatedLocations: [
      { label: "Karanodai", href: EN("/locations/karanodai/") },
      { label: "Budur", href: EN("/locations/budur/") },
    ],
    serviceAreaSignals: [
      "insurance in Periyapalayam",
      "commercial insurance Periyapalayam",
      "policy renewal Periyapalayam",
    ],
  },

  arani: {
    name: "Arani",
    seoTitle: "Insurance Support in Arani (Corridor-Connected) – Transport & Transit Guidance",
    seoDesc:
      "Arani corridor-connected support via Sholavaram office guidance: transport/fleet, transit documentation discipline and SME packages (as applicable).",
    heroH1: "Insurance support in Arani",
    heroP:
      "Support via Sholavaram office—transport and transit documentation guidance for corridor-connected requirements (as applicable).",
    localContext: [
      "Corridor-connected movement can involve transport and transit documentation needs.",
      "Claim smoothness improves with clean reporting and proof trail discipline (as applicable).",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
    ],
    faqs: [
      { q: "Can you guide documentation even if the location is outside Chennai?", a: "Sometimes yes, depending on insurer process and policy type. We guide wherever feasible." },
    ],
    relatedLocations: [
      { label: "Periyapalayam", href: EN("/locations/periyapalayam/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Arani",
      "lorry insurance Arani",
      "goods in transit insurance Arani",
    ],
  },

  perambur: {
    name: "Perambur",
    seoTitle: "Insurance Services in Perambur – Motor, Health & SME Support",
    seoDesc:
      "Perambur support via Sholavaram office: car/bike renewals, health policy guidance, SME packages and claim documentation support.",
    heroH1: "Insurance services in Perambur",
    heroP:
      "City-side support via Sholavaram office—motor renewals, health guidance, SME packages and claim documentation help.",
    localContext: [
      "City-side demand: renewals and claim-step clarity are common needs.",
      "SME packages may apply where shops/offices need coverage clarity (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Perambur customers for renewals?", a: "Yes. Renewals, add-on clarity and claim documentation guidance are common requests we handle." },
    ],
    relatedLocations: [
      { label: "Villivakkam (industrial areas)", href: EN("/locations/villivakkam-industrial-areas/") },
      { label: "Kolathur", href: EN("/locations/kolathur/") },
    ],
    serviceAreaSignals: [
      "insurance in Perambur",
      "car insurance Perambur",
      "health insurance Perambur",
      "insurance renewal Perambur",
    ],
  },

  kolathur: {
    name: "Kolathur",
    seoTitle: "Insurance Services in Kolathur – Motor Renewals, SME Packages & Claim Support",
    seoDesc:
      "Kolathur support via Sholavaram office: car/bike renewals, SME packages and claim documentation guidance with a practical approach.",
    heroH1: "Insurance services in Kolathur",
    heroP:
      "Support via Sholavaram office—motor renewals, SME packages and claim documentation guidance.",
    localContext: [
      "Mixed residential + SME demand where renewals and claim documentation clarity are frequent needs.",
      "We keep guidance practical: correct details, correct documents, clean timelines (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you help with SME packages in Kolathur?", a: "Yes. We guide sum insured and proof discipline where applicable." },
    ],
    relatedLocations: [
      { label: "Kolathur (commercial pockets)", href: EN("/locations/kolathur-commercial-pockets/") },
      { label: "Retteri", href: EN("/locations/retteri/") },
    ],
    serviceAreaSignals: [
      "insurance in Kolathur",
      "car insurance Kolathur",
      "policy renewal Kolathur",
    ],
  },

  koyambedu: {
    name: "Koyambedu",
    seoTitle: "Insurance Services in Koyambedu – Motor Renewals & Claim Documentation Support",
    seoDesc:
      "Koyambedu support via Sholavaram office: motor renewals, add-on clarity and claim documentation steps with practical guidance.",
    heroH1: "Insurance services in Koyambedu",
    heroP:
      "City connector support via Sholavaram office—motor renewals and claim documentation guidance.",
    localContext: [
      "High-movement city connector; renewals and claim-step clarity are common needs.",
      "We focus on practical coverage checks and correct reporting steps (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Can you help with quick renewal checks for Koyambedu customers?", a: "Yes. We can guide via phone/WhatsApp and help keep details clean." },
    ],
    relatedLocations: [
      { label: "Anna Nagar", href: EN("/locations/anna-nagar/") },
      { label: "Mogappair West", href: EN("/locations/mogappair-west/") },
    ],
    serviceAreaSignals: [
      "insurance in Koyambedu",
      "car insurance Koyambedu",
      "insurance renewal Koyambedu",
    ],
  },

  "anna-nagar": {
    name: "Anna Nagar",
    seoTitle: "Insurance Services in Anna Nagar – Motor, Health & Renewal Support",
    seoDesc:
      "Anna Nagar support via Sholavaram office: car/bike renewals, health policy guidance and claim documentation steps with practical clarity.",
    heroH1: "Insurance services in Anna Nagar",
    heroP:
      "City-side support via Sholavaram office—motor renewals, health guidance, and claim documentation help.",
    localContext: [
      "City residential demand with strong renewals and health policy guidance requirements.",
      "We differentiate through clarity: correct details, add-ons based on usage, and clean claim steps (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Anna Nagar customers from Sholavaram office?", a: "Yes. We support via phone/WhatsApp and guided documentation depending on requirement." },
    ],
    relatedLocations: [
      { label: "Koyambedu", href: EN("/locations/koyambedu/") },
      { label: "Mogappair West", href: EN("/locations/mogappair-west/") },
    ],
    serviceAreaSignals: [
      "insurance in Anna Nagar",
      "car insurance Anna Nagar",
      "health insurance Anna Nagar",
      "policy renewal Anna Nagar",
    ],
  },
}

// ✅ Single source of truth for index (no mismatch)
export const buildLocationsIndexFromDetail = (locationsDetail) => {
  const detail = locationsDetail || {};
  const has = (slug) => !!detail[slug];

  // Order = your business priority
  const NH_PRIORITY = [
    "sholavaram",
    "red-hills",
    "puzhal",
    "kavangarai",
    "kosapaur",
    "surapet",
    "madhavaram",
    "madhavaram-milk-colony",
    "madhavaram-truck-terminal",
    "manali",
    "manali-new-town",
    "manali-industrial-estate",
    "nh-manali-road",
    "karanodai",
    "periyapalayam",
    "budur",
    "thiruninravur",
    "veppampattu",
    "thiruvallur-sipcot-outskirts",
    "poonamallee-bypass",
    "kuthambakkam",
    "thirumazhisai",
    "chembarambakkam",
    "sriperumbudur-sipcot",
    "oragadam-outskirts",
    "arani",
  ].filter(has);

  const CITY_SIDE = [
    "perambur",
    "ambattur",
    "kolathur",
    "kolathur-commercial-pockets",
    "retteri",
    "villivakkam-industrial-areas",
    "mogappair-west",
    "koyambedu",
    "anna-nagar",
  ].filter(has);

  const mk = (slug) => ({ slug, name: detail[slug].name });

  return {
    title: "Locations We Serve (Chennai North + NH Corridors)",
    subtitle:
      "Service guidance anchored to Sholavaram office support—focused on NH-facing belts (transport, warehouses, contractors, heavy equipment) and city-side areas for motor/health/LIC and SME needs.",
    intro: [
      "Primary base: Sholavaram (Chennai outskirts).",
      "Commercial focus: NH belts and industrial movement zones (fleets, warehouses/godowns, factories, contractors, cranes/heavy equipment).",
      "City-side support: car/bike, health, LIC and SME shops/offices—renewals + claim documentation guidance.",
    ],
    groups: [
      {
        id: "nh-industrial-belts",
        title: "NH & industrial belts (commercial-first)",
        subtitle:
          "Areas with high commercial movement where policy wording + documentation discipline matters most for claims.",
        locations: NH_PRIORITY.map(mk),
      },
      {
        id: "city-areas",
        title: "Chennai city-side areas (domestic + SME support)",
        subtitle:
          "Motor, health, LIC and small office/shop support—kept practical and claim-ready.",
        locations: CITY_SIDE.map(mk),
      },
    ],
    claimReadyPrinciples: {
      title: "What improves outcomes (simple, practical)",
      points: [
        "Correct disclosures + policy wording clarity before purchase/renewal—reduces disputes later.",
        "Documentation discipline: invoices, valuation proofs, photos, permits/fitness, worker records (where applicable).",
        "Timely reporting and clean incident timeline—done correctly to reduce avoidable delays.",
        "Renewal checks: prevent coverage gaps and mismatched add-ons.",
      ],
    },
  };
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
    phoneE164,
    whatsappE164,
    whatsappPrefill,

    primaryArea: "Sholavaram (Chennai Outskirts)",
    areaChips: ["Sholavaram", "Red Hills Toll", "Madhavaram", "Chennai Outskirts"],

    // Address (GBP-consistent)
    streetAddress: "KVT AVENUE SHOZIPALAYAM, NO-39, 4TH MAIN ROAD",
    addressLocality: "Sholavaram",
    addressRegion: "Tamil Nadu",
    postalCode: "600067",
    addressCountry: "IN",

    // GBP / Maps
    gbpUrl,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.7801632048363!2d80.1702587736598!3d13.239108387101373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d2b1e29b5ff%3A0xe9b9b0049f529b6b!2sM%20N%20Rajendrakumar%20Insurance%20Services%20%E2%80%93%20Commercial%2C%20Vehicle%20%26%20Industrial%20Insurance%20%7C%20Sholavaram%2C%20Karanodai%2C%20Redhills!5e0!3m2!1sen!2sin!4v1767543679104!5m2!1sen!2sin",

    geo: { lat: 13.2391084, lng: 80.1728337 },

    hours: {
      is24x7: true,
      label: "Open 24 hours",
    },

    websiteUrl: "https://insuranceconsult.in/", // set later
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
      {
        href: EN("/insights/claim-documents-checklist"),
        chipCategory: "Claims",
        chipMap: "Documentation",
        title: "Claim documents checklist (what people forget)",
        desc: "Invoices, photos, reports and timelines—clean essentials that improve claim outcomes.",
        tags: ["#claim-process", "#documentation", "#proof"],
        readTime: "6 min read",
        levelOrFreq: "Practical",
      },
      {
        href: EN("/insights/public-liability-hidden-risk"),
        chipCategory: "Commercial",
        chipMap: "Liability",
        title: "Public liability: the hidden risk many businesses ignore",
        desc: "Small incidents become big claims. Learn what’s covered, exclusions and habits that reduce disputes.",
        tags: ["#liability", "#third-party", "#risk"],
        readTime: "9 min read",
        levelOrFreq: "Business safety",
      },
      {
        href: EN("/insights/zero-dep-explained"),
        chipCategory: "Vehicle",
        chipMap: "Motor",
        title: "Zero depreciation explained like a human",
        desc: "When it’s worth it based on vehicle age, usage and the parts replaced most often.",
        tags: ["#motor", "#zero-dep", "#addons"],
        readTime: "5 min read",
        levelOrFreq: "Explainer",
      },

      // NEW (daily problems)
      {
        href: EN("/insights/motor-claim-first-30-minutes"),
        chipCategory: "Claims",
        chipMap: "Accident",
        title: "Accident claim: first 30 minutes checklist",
        desc: "Safety → evidence → reporting. The steps that prevent disputes and delays.",
        tags: ["#accident", "#claims", "#timeline"],
        readTime: "7 min read",
        levelOrFreq: "Daily use",
      },
      {
        href: EN("/insights/vehicle-insurance-addons-cheat-sheet"),
        chipCategory: "Vehicle",
        chipMap: "Add-ons",
        title: "Vehicle add-ons cheat sheet (useful vs waste)",
        desc: "Zero dep, RSA, engine protect, RTI—choose based on usage, not hype.",
        tags: ["#addons", "#zero-dep", "#rsa"],
        readTime: "8 min read",
        levelOrFreq: "Practical",
      },
      {
        href: EN("/insights/two-wheeler-insurance-basics-real"),
        chipCategory: "Vehicle",
        chipMap: "Bike",
        title: "Bike insurance basics (what matters at claim time)",
        desc: "Own-damage vs third-party, add-ons, and claim-friendly proof habits.",
        tags: ["#bike", "#motor", "#claims"],
        readTime: "6 min read",
        levelOrFreq: "Daily use",
      },
      {
        href: EN("/insights/used-vehicle-insurance-transfer"),
        chipCategory: "Vehicle",
        chipMap: "Ownership",
        title: "Used vehicle purchase: insurance transfer checklist",
        desc: "Ownership, transfer, NCB, claim eligibility—buyers forget these steps.",
        tags: ["#used-car", "#transfer", "#ncB"],
        readTime: "7 min read",
        levelOrFreq: "Checklist",
      },
      {
        href: EN("/insights/garage-overbilling-claim-safety"),
        chipCategory: "Claims",
        chipMap: "Repairs",
        title: "Garage overbilling & claim traps: stay safe",
        desc: "Inflated estimates, towing traps, unclear documents—safe workflow for repair claims.",
        tags: ["#garage", "#repairs", "#claim-safety"],
        readTime: "9 min read",
        levelOrFreq: "Protective",
      },

      // NEW (commercial + health)
      {
        href: EN("/insights/commercial-vehicle-docs-permit-fitness"),
        chipCategory: "Transport",
        chipMap: "Docs",
        title: "Commercial vehicle docs: permit/fitness—why it affects claims",
        desc: "A simple doc checklist that reduces delays for lorry/goods vehicles and fleets.",
        tags: ["#fleet", "#permit", "#fitness"],
        readTime: "8 min read",
        levelOrFreq: "Operator",
      },
      {
        href: EN("/insights/business-insurance-avoid-underinsurance"),
        chipCategory: "Commercial",
        chipMap: "Sum insured",
        title: "Business insurance: avoid underinsurance (simple method)",
        desc: "Stock + assets clarity, valuation basis and proof discipline that supports claims.",
        tags: ["#msme", "#warehouse", "#suminsured"],
        readTime: "8 min read",
        levelOrFreq: "Claim-first",
      },
      {
        href: EN("/insights/health-claim-cashless-vs-reimbursement"),
        chipCategory: "Health",
        chipMap: "Claims",
        title: "Health claim: cashless vs reimbursement (what changes)",
        desc: "Documents, timelines and common mistakes that delay settlement.",
        tags: ["#health", "#cashless", "#reimbursement"],
        readTime: "7 min read",
        levelOrFreq: "Practical",
      },
    ],
  },


  // ✅ Areas you serve (keep only true areas)
  faqsAreas: {
    title: "Locations & Service Area (Chennai North / Outskirts)",
    intro:
      "We primarily support customers around Chennai North and nearby outskirts. If you're outside these areas, we can still guide depending on the policy and requirements.",
    primaryAreas: [
      { label: "Sholavaram", note: "Primary local support area" },
      { label: "Red Hills", note: "Warehouse + transport belt support" },
      { label: "Madhavaram", note: "Logistics corridor & city-side support" },
      { label: "Puzhal", note: "Nearby residential + vehicle owners" },
      { label: "Manali", note: "Industrial belt support (as applicable)" },
      { label: "Karanodai", note: "Outskirts movement belt support" },
      { label: "Periyapalayam", note: "Outskirts corridor support" },
      { label: "Pallavaram", note: "Support depending on need (as applicable)" },
    ],
    note:
      "Note: Final underwriting/inspection/issuance depends on the insurer’s rules and risk assessment. We can guide documentation and policy selection wherever support is feasible.",
  },

  // ✅ Office / identity facts (keep minimal, consistent with your GBP/brand object)
  officeInfo: {
    title: "Sholavaram Office & How to Reach",
    points: [
      "Our office support is based around Sholavaram and nearby Chennai North belts.",
      "For exact directions, refer to our Google Business Profile listing (map + verified location).",
      "If you’re visiting, it’s best to call/message before coming so we can keep documents ready (as applicable).",
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
    gbpUrl: gbpUrl, // optional: set to your GBP review link if you want later
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
  // ✅ servicesDetail (Category → Service) — matches your current coreServices slugs
// Uses existing EN() wrapper for internal links.
//
// Route shape assumed:
// /en/services/[category]/[service]/
//
// Example URL:
// EN(`/services/transport-fleet/${serviceSlug}/`)

servicesDetail: {
  // =====================================================
  // TRANSPORT & FLEET
  // /en/services/transport-fleet/{service}/
  // =====================================================
  "transport-fleet": {
    "lorry-insurance": {
      seoTitle: "Lorry / Heavy Vehicle Insurance Guidance – Red Hills Toll & NH Belts",
      seoDesc:
        "Claim-ready guidance for lorry owners and fleets in Sholavaram, Red Hills Toll belt, Madhavaram and NH corridors. Focus: permits, fitness, third-party exposure and documentation discipline.",
      heroH1: "Lorry / Heavy Vehicle Insurance (NH-belt Reality)",
      heroP:
        "Highway-facing operations have higher third-party exposure and stricter scrutiny. We guide coverage clarity + documentation habits that protect claims later.",
      whoFor: [
        "Single lorry owners and fleet operators",
        "Logistics businesses moving goods in NH corridors",
        "Tipper/trailer attached operations (as applicable)",
      ],
      localFit:
        "NH-facing belts see higher third-party incidents and documentation scrutiny. A clean paper trail (permit/fitness/driver basics) reduces avoidable delays.",
      keyCoverFocus: [
        "Third-party exposure clarity + accident reporting readiness",
        "Permit/fitness/RC alignment (common underwriting checks)",
        "Loading/unloading/worksite exposure (often missed)",
        "Endorsements/IMT clarity aligned to usage",
      ],
      claimDocs: [
        "RC, permit, fitness, pollution (as applicable)",
        "Driver documents (as applicable)",
        "Incident timeline + FIR/spot documents (when needed)",
        "Repair estimate + photos + incident details",
      ],
      commonMistakes: [
        "Fitness/permit lapse causing claim friction",
        "Late reporting or incomplete incident timeline",
        "Wording not aligned to loading/unloading exposure",
        "Not maintaining a ready folder for vehicle/driver docs",
      ],
      alsoKnownAs: [
        "Heavy vehicle insurance",
        "Truck insurance",
        "Goods vehicle insurance",
        "Commercial transport insurance",
      ],
      whatCanGoWrong: [
        "Fitness expired at the time of loss",
        "Permit not valid for route / usage",
        "Driver documentation mismatch (as applicable)",
        "IMT / endorsements not aligned with usage",
        "Overloading mentioned in FIR / records",
      ],
      areaRealityTitle: "Lorry insurance reality around Red Hills Toll belt",
      areaRealityText:
        "NH corridors see higher third-party exposure and stricter documentation checks. Early reporting, a clear incident timeline and valid permits/fitness reduce avoidable delays.",
      areaSignals: [
        "Red Hills Toll belt lorry insurance guidance",
        "Sholavaram heavy vehicle insurance support",
        "Madhavaram transport insurance consultant",
        "Chennai outskirts NH belt lorry insurance",
      ],
      faqs: [
        {
          q: "Why do lorry claims get delayed most often?",
          a:
            "Late reporting, missing documents, and mismatch between real operations and policy wording (especially loading/unloading and endorsements).",
        },
        {
          q: "What should I keep ready before renewal?",
          a:
            "RC, permit/fitness dates, driver details (as applicable), usual route/usage summary, and previous policy copy/endorsements if any.",
        },
      ],
      internalLinks: [
        { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
        { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
        { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
        { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      ],
    },

    "commercial-vehicle-insurance": {
      seoTitle: "Commercial Vehicle Insurance Guidance – Chennai Outskirts (NH + Industrial Belts)",
      seoDesc:
        "Commercial vehicle insurance guidance for business-use vehicles across Sholavaram, Red Hills, Madhavaram and Chennai outskirts. Focus: usage clarity, endorsements, third-party exposure and claims readiness.",
      heroH1: "Commercial Vehicle Insurance (Usage + Wording Clarity)",
      heroP:
        "Commercial-use vehicles face higher liability exposure. We guide policy wording alignment to real usage and practical documentation discipline.",
      whoFor: [
        "Businesses operating commercial-use vehicles",
        "Owners renewing without verifying usage/endorsement fit",
        "Operators needing claim-ready document discipline",
      ],
      localFit:
        "In NH + industrial belts, incidents often trigger third-party and documentation scrutiny. Usage mismatch is a common dispute driver.",
      keyCoverFocus: [
        "Usage clarity (what the vehicle actually does daily)",
        "Endorsements/IMT clarity aligned to operations",
        "Third-party exposure and reporting discipline",
        "Basic proof folder discipline for claims",
      ],
      claimDocs: [
        "RC + policy copy + endorsements",
        "Incident timeline + photos/videos (as applicable)",
        "FIR/spot documents (when needed)",
        "Repair estimate + workshop documents (as applicable)",
      ],
      commonMistakes: [
        "Usage mismatch vs proposal/policy wording",
        "Not maintaining endorsements record",
        "Late reporting or incomplete timeline",
      ],
      alsoKnownAs: ["Business vehicle insurance", "Commercial motor insurance", "Company vehicle insurance"],
      whatCanGoWrong: [
        "Usage mismatch causes disputes",
        "Late reporting weakens the timeline",
        "Missing endorsement/IMT clarity leads to gaps",
      ],
      areaRealityTitle: "Commercial vehicle claim reality in NH belts",
      areaRealityText:
        "Most friction comes from usage mismatch and weak incident timeline. Clean usage summary + early reporting improves outcomes.",
      areaSignals: [
        "Sholavaram commercial vehicle insurance",
        "Red Hills vehicle insurance guidance",
        "Madhavaram insurance support for vehicles",
        "Chennai outskirts commercial motor insurance",
      ],
      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
        { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "goods-carrying-vehicle-insurance": {
      seoTitle: "Goods Carrying Vehicle Insurance Guidance – Chennai Outskirts Logistics Belts",
      seoDesc:
        "Claim-ready guidance for pickup/goods-auto/goods carrying vehicles in Sholavaram, Red Hills, Madhavaram and NH corridors. Focus: permit/route clarity, third-party exposure and documentation discipline.",
      heroH1: "Goods Carrying Vehicle Insurance (Permit + Route Discipline)",
      heroP:
        "Goods vehicles face route/permit checks and third-party exposure. We guide coverage clarity and simple habits that protect claims later.",
      whoFor: [
        "Pickup / goods-auto / small goods carriers",
        "Local logistics and delivery operators",
        "Owners renewing without route/permit clarity",
      ],
      localFit:
        "Chennai outskirts logistics corridors see frequent checks and higher incident scrutiny. Permit/route clarity and clean reporting reduce disputes.",
      keyCoverFocus: [
        "Permit/route/usage clarity",
        "Third-party exposure and reporting discipline",
        "Loading/unloading and operational exposure alignment",
        "Document folder discipline (vehicle + driver as applicable)",
      ],
      claimDocs: [
        "RC, permit, fitness (as applicable)",
        "Driver documents (as applicable)",
        "Incident timeline + photos (as applicable)",
        "Repair estimate + incident notes",
      ],
      commonMistakes: [
        "Route/permit mismatch",
        "Late reporting and weak incident narrative",
        "Assuming basic cover matches real usage",
      ],
      alsoKnownAs: ["Pickup insurance", "Goods auto insurance", "Goods carrier insurance"],
      whatCanGoWrong: [
        "Permit/route mismatch causes disputes",
        "Missing driver docs (as applicable)",
        "Overloading mention triggers scrutiny",
      ],
      areaRealityTitle: "Goods vehicle reality around Madhavaram logistics corridor",
      areaRealityText:
        "Goods carriers get scrutinized on permit/route and incident timeline. Simple discipline improves claim momentum.",
      areaSignals: [
        "Madhavaram goods carrying vehicle insurance",
        "Sholavaram pickup insurance guidance",
        "Red Hills goods auto insurance support",
        "Chennai outskirts logistics vehicle insurance",
      ],
      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
        { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      ],
    },

    "trailer-insurance": {
      seoTitle: "Trailer Insurance Guidance – NH Corridors (Chennai Outskirts)",
      seoDesc:
        "Trailer insurance guidance for operators in NH belts around Sholavaram, Red Hills and Madhavaram. Focus: attachment usage clarity, third-party exposure, endorsements and claim-ready documentation.",
      heroH1: "Trailer Insurance (Attachment + Exposure Clarity)",
      heroP:
        "Trailers increase exposure during turns, loading/unloading and public movement. We guide wording alignment and practical claim-ready documentation.",
      whoFor: [
        "Trailer owners/operators",
        "Fleet operators using trailers across NH corridors",
        "Operators renewing without attachment/endorsement clarity",
      ],
      localFit:
        "NH movement plus loading bays increase third-party exposure. Trailer incidents often trigger scrutiny on documentation and usage disclosures.",
      keyCoverFocus: [
        "Usage clarity for trailer operations and routes",
        "Endorsements/IMT clarity aligned to operations",
        "Third-party exposure and incident reporting discipline",
        "Document folder discipline (vehicle/attachment papers as applicable)",
      ],
      claimDocs: [
        "Policy copy + endorsements",
        "RC/permit/fitness as applicable",
        "Incident timeline + photos/videos (as applicable)",
        "FIR/spot documents (when needed)",
      ],
      commonMistakes: [
        "Attachment/usage not clearly aligned in wording",
        "Late reporting and weak incident narrative",
        "Missing endorsement clarity",
      ],
      alsoKnownAs: ["Trailer cover", "Trailer vehicle insurance", "Transport trailer insurance"],
      whatCanGoWrong: [
        "Usage mismatch vs policy wording",
        "Late reporting causes timeline disputes",
        "Missing endorsement clarity leads to coverage gaps",
      ],
      areaRealityTitle: "Trailer claim reality in highway corridors",
      areaRealityText:
        "Trailer-related incidents escalate quickly due to third-party exposure. Clean reporting + correct disclosures reduce avoidable delays.",
      areaSignals: [
        "Red Hills trailer insurance guidance",
        "Sholavaram trailer policy support",
        "Chennai outskirts highway trailer insurance",
      ],
      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
        { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "fleet-insurance": {
      seoTitle: "Fleet Insurance Guidance – Chennai Outskirts (Transport Operators)",
      seoDesc:
        "Fleet insurance guidance for transport operators across Sholavaram, Red Hills Toll belt, Madhavaram and NH corridors. Focus: fleet discipline, documentation, renewals and claim workflow readiness.",
      heroH1: "Fleet Insurance (Discipline + Claim Workflow Readiness)",
      heroP:
        "Fleet success depends on discipline: documents, renewals, driver basics and incident reporting. We help align coverage to real operations.",
      whoFor: [
        "Fleet operators with multiple vehicles",
        "Logistics businesses running routes across NH corridors",
        "Owners wanting predictable renewal + claim readiness",
      ],
      localFit:
        "In NH-facing belts, claims get judged on timeline and documentation quality. Fleet discipline reduces repeated friction points.",
      keyCoverFocus: [
        "Fleet documentation and renewal discipline",
        "Third-party exposure management basics",
        "Driver/vehicle records organization (as applicable)",
        "Clear incident reporting process for teams",
      ],
      claimDocs: [
        "Vehicle list + policy copies + endorsements",
        "Basic document tracker (permit/fitness/expiry)",
        "Incident reporting checklist for drivers (as applicable)",
        "Repair estimates + photos + incident notes",
      ],
      commonMistakes: [
        "No centralized document/expiry tracking",
        "Late reporting and inconsistent incident details",
        "Different vehicles operating differently than declared",
      ],
      alsoKnownAs: ["Fleet policy", "Multiple vehicle insurance", "Transport fleet cover"],
      whatCanGoWrong: [
        "Inconsistent reporting across drivers",
        "Expiry lapses create friction",
        "Operational mismatch vs declared usage",
      ],
      areaRealityTitle: "Fleet claims reality around NH belts",
      areaRealityText:
        "Fleets win on process: expiry discipline, incident reporting clarity, and organized documents. Small gaps compound across vehicles.",
      areaSignals: [
        "Madhavaram fleet insurance support",
        "Red Hills transport fleet insurance guidance",
        "Sholavaram fleet policy consultant",
      ],
      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
        { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "tip-truck-insurance": {
      seoTitle: "Tip Truck / Tipper Insurance Guidance – Chennai Outskirts (Worksites + NH Belts)",
      seoDesc:
        "Tipper insurance guidance for operators working in worksites and NH belts around Sholavaram, Red Hills and Chennai outskirts. Focus: usage clarity, third-party exposure and claim-ready documentation.",
      heroH1: "Tip Truck / Tipper Insurance (Worksite Exposure Clarity)",
      heroP:
        "Tipper operations involve worksite exposure and public movement. We guide coverage clarity and documentation discipline to reduce claim disputes.",
      whoFor: [
        "Tip truck / tipper owners",
        "Contractors using tippers for site movement (as applicable)",
        "Operators renewing without worksite exposure clarity",
      ],
      localFit:
        "Worksite + NH movement increases third-party exposure. Claims often become documentation and usage disclosure discussions.",
      keyCoverFocus: [
        "Usage clarity (route + worksite exposure)",
        "Third-party exposure and reporting discipline",
        "Endorsements/IMT alignment to real operations",
      ],
      claimDocs: [
        "Policy copy + endorsements",
        "Incident timeline + photos (as applicable)",
        "FIR/spot documents (when needed)",
      ],
      commonMistakes: [
        "Worksite usage not aligned in wording",
        "Late reporting and weak timeline",
      ],
      alsoKnownAs: ["Tipper insurance", "Tipper truck policy", "Tip truck cover"],
      whatCanGoWrong: [
        "Usage mismatch vs policy",
        "Missing endorsements for operational exposure",
        "Late reporting causes timeline disputes",
      ],
      areaRealityTitle: "Tipper insurance reality near worksites",
      areaRealityText:
        "Worksite incidents need clean reporting and clear usage disclosure. Simple discipline reduces avoidable friction.",
      areaSignals: [
        "Sholavaram tipper insurance guidance",
        "Red Hills tip truck insurance support",
        "Chennai outskirts tipper policy consultant",
      ],
      internalLinks: [
        { label: "Construction & Contractor Insurance", href: EN("/services/construction/contractor-car-wc-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
  },

  // =====================================================
  // INDUSTRIAL & PROPERTY
  // /en/services/industrial/{service}/
  // =====================================================
  "industrial": {
    "warehouse-insurance": {
      seoTitle: "Warehouse / Godown Insurance Guidance – Chennai Outskirts Industrial Belts",
      seoDesc:
        "Warehouse insurance guidance for Sholavaram, Madhavaram, Manali/Ennore and nearby industrial belts. Focus: fire load, stock proof discipline, valuation clarity and burglary conditions.",
      heroH1: "Warehouse / Godown Insurance (Proof + Valuation Discipline)",
      heroP:
        "Warehouse claims succeed when valuation and stock proof are clean. We guide declarations, documentation habits and policy alignment to real storage risk.",
      whoFor: [
        "Warehouse and godown owners",
        "Businesses storing fluctuating stock",
        "Operators in industrial belts with higher fire/burglary exposure",
      ],
      localFit:
        "Industrial belts increase electrical fire load and storage risk. Claim outcomes depend on stock proof, valuation basis, safety habits and clear declarations.",
      keyCoverFocus: [
        "Sum insured and valuation logic (avoid underinsurance)",
        "Stock proof discipline (invoices/registers/photos as applicable)",
        "Fire load + safety conditions awareness",
        "Burglary conditions + security discipline",
      ],
      claimDocs: [
        "Stock invoices/register + periodic proof trail",
        "Premises photos + safety setup proof (as applicable)",
        "Policy copy + endorsements + declarations (if any)",
        "Incident timeline + reports (as applicable)",
      ],
      commonMistakes: [
        "No consistent proof of stock value",
        "Wrong sum insured / undervaluation",
        "Layout/stock type changed but not updated",
      ],
      alsoKnownAs: ["Godown insurance", "Warehouse fire policy", "Industrial storage insurance"],
      whatCanGoWrong: [
        "Stock proof mismatch during claim",
        "Undervaluation reduces settlement",
        "Safety/security conditions not met (as applicable)",
      ],
      areaRealityTitle: "Warehouse claim reality around Madhavaram + Manali belts",
      areaRealityText:
        "Fire/burglary claims become valuation + proof discussions. Clean invoices/registers and clear declarations improve outcomes.",
      areaSignals: [
        "Madhavaram warehouse insurance guidance",
        "Sholavaram godown insurance consultant",
        "Manali Ennore industrial insurance support",
        "Chennai outskirts warehouse insurance services",
      ],
      internalLinks: [
        { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
        { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
        { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      ],
    },

    "factory-insurance": {
      seoTitle: "Factory Insurance Guidance – Chennai Outskirts Industrial Belts",
      seoDesc:
        "Factory insurance guidance for small units and industrial belts around Sholavaram, Madhavaram, Manali/Ennore. Focus: fire load, machinery/stock valuation, and claim-ready proof discipline.",
      heroH1: "Factory Insurance (Fire Load + Valuation Clarity)",
      heroP:
        "Factory risks combine electrical fire load, stock, and machinery exposure. We guide valuation and proof discipline so claims don’t get reduced later.",
      whoFor: [
        "Small factories and industrial units",
        "Units with machinery + stock exposure",
        "Businesses renewing without valuation clarity",
      ],
      localFit:
        "Industrial belts increase fire load and storage risk. Clear declarations and proof discipline matter more than just premium.",
      keyCoverFocus: [
        "Valuation basis for building/stock/machinery",
        "Fire load + safety conditions awareness",
        "Stock proof discipline (as applicable)",
        "Declaration updates when risk changes",
      ],
      claimDocs: [
        "Asset/machinery list + valuation basis",
        "Stock invoices/register (as applicable)",
        "Safety setup proof (as applicable)",
        "Incident timeline + reports (as applicable)",
      ],
      commonMistakes: [
        "Undervaluation to save premium → reduced settlement later",
        "No proof trail for assets/stock",
        "Not updating changes in operations/layout",
      ],
      alsoKnownAs: ["Industrial unit insurance", "Factory package policy", "Industrial fire policy"],
      whatCanGoWrong: [
        "Undervaluation triggers settlement reduction",
        "Mismatch between declared operations and actual activity",
        "Safety conditions not met (as applicable)",
      ],
      areaRealityTitle: "Factory claim reality in industrial corridors",
      areaRealityText:
        "Most disputes come from valuation and declarations. Keeping clean asset/stock proof reduces avoidable delays.",
      areaSignals: [
        "Sholavaram factory insurance guidance",
        "Madhavaram industrial unit insurance support",
        "Chennai outskirts factory insurance consultant",
      ],
      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
        { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      ],
    },

    "fire-burglary-insurance": {
      seoTitle: "Fire & Burglary Insurance Guidance – Warehouses, Shops, Offices (Chennai Outskirts)",
      seoDesc:
        "Commercial property guidance for fire/burglary in Sholavaram, Red Hills and Madhavaram belts. Focus: sum insured, stock proof, safety/security conditions and claim-ready documentation.",
      heroH1: "Fire & Burglary (Commercial Property) — Guidance",
      heroP:
        "Fire/burglary claims are proof-driven. We guide valuation, stock proof discipline and condition-awareness so claims don’t get stuck later.",
      whoFor: [
        "Warehouses and godowns storing stock",
        "Shops/offices with high-value goods",
        "Units with electrical fire load exposure",
      ],
      localFit:
        "Fire claims become valuation/proof discussions. Burglary claims fail when security conditions and proof trail aren’t aligned.",
      keyCoverFocus: [
        "Sum insured + underinsurance avoidance",
        "Stock proof discipline (invoices/registers/photos as applicable)",
        "Security/safety conditions that affect claims",
        "Declaration clarity for stored goods",
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
      alsoKnownAs: ["Commercial property insurance", "Shop fire policy", "Warehouse fire + burglary policy"],
      whatCanGoWrong: [
        "Underinsurance reduces settlement",
        "Security conditions not met for burglary claims (as applicable)",
        "Weak proof trail for stock/assets",
      ],
      areaRealityTitle: "Fire/burglary claim reality in industrial belts",
      areaRealityText:
        "Most disputes come from valuation and proof. Keeping invoices/registers and basic premises photos (as applicable) improves claim acceptance.",
      areaSignals: [
        "Sholavaram fire insurance guidance",
        "Madhavaram burglary insurance support",
        "Red Hills godown fire insurance",
      ],
      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
        { label: "Business & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "stock-declaration-insurance": {
      seoTitle: "Stock Declaration Policies Guidance – Warehouses & Businesses (Chennai Outskirts)",
      seoDesc:
        "Stock declaration policy guidance for warehouses and businesses in industrial belts. Focus: stock proof discipline, declaration habits, valuation logic and claim acceptance readiness.",
      heroH1: "Stock Declaration Policies (Proof Discipline Matters)",
      heroP:
        "When stock fluctuates, declarations and proof discipline decide claim outcomes. We guide how to keep declarations clean and defensible.",
      whoFor: [
        "Warehouses with fluctuating stock levels",
        "Businesses where stock value changes month-to-month",
        "Owners facing repeated underinsurance/proof issues",
      ],
      localFit:
        "In industrial belts, stock claims get scrutinized for month-wise proof and declaration consistency. Clean habits reduce disputes.",
      keyCoverFocus: [
        "Declaration rhythm and documentation habit",
        "Invoice/register proof discipline",
        "Valuation logic and underinsurance prevention",
        "Clarity on what stock is included/excluded",
      ],
      claimDocs: [
        "Month-wise stock proof (invoices/registers)",
        "Declaration history (if applicable)",
        "Photos/records supporting storage reality (as applicable)",
      ],
      commonMistakes: [
        "Declarations not matching proof trail",
        "No clear register/invoice discipline",
        "Under-declaring to save premium → reduced settlement later",
      ],
      alsoKnownAs: ["Declaration policy", "Floating stock policy", "Stock declaration insurance"],
      whatCanGoWrong: [
        "Mismatch between declared stock and actual proof",
        "Under-declaration triggers settlement reduction",
        "Incomplete month-wise evidence weakens claim",
      ],
      areaRealityTitle: "Stock declaration reality in warehouse corridors",
      areaRealityText:
        "Stock claims are evidence-based. A clean month-wise proof trail and consistent declarations reduce settlement disputes.",
      areaSignals: [
        "Madhavaram stock declaration policy guidance",
        "Chennai outskirts warehouse stock policy support",
        "Sholavaram stock insurance consultant",
      ],
      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
        { label: "Fire & Burglary", href: EN("/services/industrial/fire-burglary-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
  },

  // =====================================================
  // CONSTRUCTION & CONTRACTOR
  // /en/services/construction/{service}/
  // =====================================================
  "construction": {
    "contractor-all-risk": {
      seoTitle: "Contractor All Risk (CAR) Guidance – Chennai Outskirts Worksites",
      seoDesc:
        "CAR guidance for active worksites in Chennai outskirts. Focus: project period alignment, site exposure clarity, incident reporting timeline, and proof discipline.",
      heroH1: "Contractor All Risk (CAR) — Worksite Reality",
      heroP:
        "CAR works when site details, project period and reporting discipline are aligned. We guide practical clarity so claims don’t fail on avoidable gaps.",
      whoFor: [
        "Contractors and subcontractors running active worksites",
        "Projects with timeline/scope changes",
        "Teams needing claim-ready reporting discipline",
      ],
      localFit:
        "Worksite claims often get disputed due to timeline/scope mismatch and late reporting. Clear site notes and early intimation reduce friction.",
      keyCoverFocus: [
        "Project period alignment (start/end/extension discipline)",
        "Site exposure clarity (what work is actually happening)",
        "Reporting timelines and incident sequence clarity",
        "Basic records: site notes, photos, and supporting documents (as applicable)",
      ],
      claimDocs: [
        "Work order / contract basics (as applicable)",
        "Project timeline notes + extension proof (as applicable)",
        "Site photos + incident timeline + reports",
        "Policy copy + endorsements",
      ],
      commonMistakes: [
        "Project timeline extensions not aligned to policy period",
        "Late reporting after incident",
        "Site exposure differs from disclosures",
      ],
      alsoKnownAs: ["CAR insurance", "Contractor all risk policy", "Construction risk insurance"],
      whatCanGoWrong: [
        "Timeline/scope mismatch vs policy period",
        "Late reporting weakens the incident narrative",
        "Missing site proof and incident sequence clarity",
      ],
      areaRealityTitle: "CAR claim reality in Chennai outskirts worksites",
      areaRealityText:
        "Site claims get judged on timeline clarity and records. Keeping basic site notes and early reporting prevents avoidable delays.",
      areaSignals: [
        "Chennai outskirts contractor all risk insurance",
        "Sholavaram CAR guidance",
        "Red Hills construction insurance support",
      ],
      internalLinks: [
        { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
        { label: "CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "workmen-compensation": {
      seoTitle: "Workmen Compensation (WC) Guidance – Contractors & Businesses (Chennai Outskirts)",
      seoDesc:
        "Workmen compensation guidance for contractors and businesses. Focus: worker classification/payroll discipline, reporting timelines, and proof habits that reduce claim disputes.",
      heroH1: "Workmen Compensation (WC) — Payroll + Classification Discipline",
      heroP:
        "WC claims often fail due to classification and payroll mismatches. We guide practical discipline that prevents avoidable disputes.",
      whoFor: [
        "Contractors and subcontractors with workforce exposure",
        "Businesses employing workers with site/operational risk",
        "Teams needing clean payroll/classification discipline",
      ],
      localFit:
        "WC disputes commonly arise from payroll mismatch, wrong worker classification, and late reporting. Simple records reduce friction.",
      keyCoverFocus: [
        "Worker classification clarity (as applicable)",
        "Payroll discipline and record consistency (as applicable)",
        "Incident reporting timeline and documentation quality",
        "Worksite exposure clarity when relevant",
      ],
      claimDocs: [
        "Worker details + classification notes (as applicable)",
        "Payroll/wage proof (as applicable)",
        "Incident timeline + basic evidence (as applicable)",
        "Policy copy + endorsements",
      ],
      commonMistakes: [
        "Payroll / classification mismatch triggers disputes",
        "Late reporting after incident",
        "Weak incident narrative and missing documents",
      ],
      alsoKnownAs: ["WC policy", "Employee compensation cover", "Workmen compensation insurance"],
      whatCanGoWrong: [
        "Wrong classification/payroll mismatch causes disputes",
        "Late intimation weakens timeline",
        "Missing supporting records at the time of claim (as applicable)",
      ],
      areaRealityTitle: "WC reality in contractor-heavy belts",
      areaRealityText:
        "WC outcomes depend on record discipline. Clean payroll/classification notes and early reporting reduce disputes.",
      areaSignals: [
        "Red Hills workmen compensation support",
        "Sholavaram WC policy guidance",
        "Chennai outskirts contractor WC insurance",
      ],
      internalLinks: [
        { label: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/") },
        { label: "CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "contractor-car-wc-insurance": {
      seoTitle: "Contractor Insurance (CAR/WC) Guidance – Chennai Outskirts",
      seoDesc:
        "Combined CAR/WC guidance for contractors in Chennai outskirts. Focus: worksite risk, workforce exposure, documentation discipline and claim timeline readiness.",
      heroH1: "Contractor CAR/WC (Worksite + Workforce Reality)",
      heroP:
        "Contractor claims fail on avoidable gaps: timeline mismatch, payroll/classification issues, and late reporting. We guide claim-ready discipline.",
      whoFor: [
        "Contractors and subcontractors",
        "Site-based teams with workforce exposure",
        "Projects with equipment + public exposure near highways",
      ],
      localFit:
        "Contractor claims often fail due to late reporting, payroll/classification mismatch, and unclear site exposure details.",
      keyCoverFocus: [
        "WC discipline (classification/payroll clarity)",
        "CAR discipline (site exposure + project period alignment)",
        "Third-party exposure awareness at active sites",
        "Incident reporting timelines + proof trail discipline",
      ],
      claimDocs: [
        "Work order / contract basics (as applicable)",
        "Workforce classification/payroll proof (as applicable)",
        "Site photos + incident timeline + reports",
        "Policy copy + endorsements",
      ],
      commonMistakes: [
        "Wrong worker classification/payroll mismatch",
        "Project period/extension not aligned",
        "Late reporting after incident",
      ],
      alsoKnownAs: ["Contractor insurance", "CAR policy", "WC policy", "Construction contractor cover"],
      whatCanGoWrong: [
        "Payroll/classification mismatch triggers disputes",
        "Site timeline/scope mismatch vs policy period",
        "Late reporting after incident",
        "Missing site proof and incident sequence clarity",
      ],
      areaRealityTitle: "Contractor insurance reality in Chennai outskirts worksites",
      areaRealityText:
        "Site claims get judged by timeline and records. Keeping basic site notes, workforce records (as applicable) and early reporting prevents delays.",
      areaSignals: [
        "Sholavaram contractor insurance guidance",
        "Red Hills contractor CAR WC support",
        "Chennai outskirts contractor policy consultant",
      ],
      internalLinks: [
        { label: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/") },
        { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
        { label: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
        { label: "Public Liability", href: EN("/services/liability/public-liability/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
  },

  // =====================================================
  // BUSINESS & MSME
  // /en/services/business-msme/{service}/
  // =====================================================
  "business-msme": {
    "shop-msme-insurance": {
      seoTitle: "Shop & MSME Package Insurance Guidance – Sholavaram (Chennai Outskirts)",
      seoDesc:
        "Claim-first guidance for shops, offices and MSMEs across Sholavaram, Red Hills Toll belt, Madhavaram and Chennai outskirts. Focus: wording, valuation and proof discipline.",
      heroH1: "Shop & MSME Package Insurance (Claim-first Guidance)",
      heroP:
        "For shops, offices and MSMEs operating in NH-facing and industrial belts—coverage clarity that matches real operations, with documentation habits that protect claims later.",
      whoFor: [
        "Local shops, offices, showrooms and service businesses",
        "Small units with stock + electrical fire load exposure",
        "Owners renewing without clarity on sum insured and inclusions",
      ],
      localFit:
        "In Chennai outskirts, business risk often combines storage + public interaction + highway movement. Small wording gaps (stock declaration, theft conditions, electrical fire) are common claim friction points.",
      keyCoverFocus: [
        "Correct sum insured and valuation logic (avoid underinsurance)",
        "Stock proof discipline (invoices, registers, photos, declarations)",
        "Burglary/fire conditions that affect claim acceptance",
        "Add-ons that matter when operations differ from standard retail",
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
      alsoKnownAs: ["Shop insurance", "MSME package insurance", "Office insurance", "Commercial package policy"],
      whatCanGoWrong: [
        "Underinsurance reduces settlement (average clause risk)",
        "No stock proof trail (invoice/register mismatch)",
        "Security/safety conditions not met (as applicable)",
        "Business activity mismatch vs policy wording",
      ],
      areaRealityTitle: "Shop/MSME insurance reality around Sholavaram + Red Hills belts",
      areaRealityText:
        "Warehouse-heavy corridors increase proof scrutiny. Clean invoices/stock records and a simple operations summary prevent avoidable disputes.",
      areaSignals: [
        "Sholavaram shop insurance guidance",
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
        { label: "Fire & Burglary", href: EN("/services/industrial/fire-burglary-insurance/") },
        { label: "Public Liability", href: EN("/services/liability/public-liability/") },
        { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
  },

  // =====================================================
  // HEAVY EQUIPMENT
  // /en/services/heavy-equipment/{service}/
  // =====================================================
  "heavy-equipment": {
    "crane-cpm-insurance": {
      seoTitle: "Crane & Heavy Equipment (CPM) Insurance Guidance – Sholavaram / Red Hills",
      seoDesc:
        "High-premium CPM insurance guidance for cranes and heavy equipment in NH and industrial worksites. Focus: declared value, third-party risk and claim documentation discipline.",
      heroH1: "Crane / Heavy Equipment (CPM) — Declared Value Discipline",
      heroP:
        "High-premium equipment claims get scrutinized on value + usage + timeline. We guide declared value logic and proof discipline to reduce disputes.",
      whoFor: [
        "Crane owners and operators",
        "Equipment rental businesses",
        "Contractors using heavy equipment at worksites",
      ],
      localFit:
        "NH belts and worksites increase third-party exposure. Wrong declared value and unclear usage details are common dispute triggers.",
      keyCoverFocus: [
        "Declared value logic (settlement depends on it)",
        "Usage/site exposure alignment (avoid wording gaps)",
        "Third-party exposure near highways and public zones",
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
      alsoKnownAs: ["CPM insurance", "Contractor’s plant & machinery insurance", "Crane insurance", "Heavy equipment insurance"],
      whatCanGoWrong: [
        "Declared value not supported by proof/valuation",
        "Usage/site exposure mismatch vs proposal",
        "Delay in intimation leading to timeline disputes",
      ],
      areaRealityTitle: "Crane / CPM reality around NH + industrial worksites",
      areaRealityText:
        "Equipment claims are proof-driven. Keeping valuation proof and basic records reduces dispute risk.",
      areaSignals: [
        "Sholavaram crane insurance support",
        "Red Hills heavy equipment insurance",
        "Chennai outskirts CPM insurance consultant",
      ],
      internalLinks: [
        { label: "Crane Third-Party Liability Basics", href: EN("/services/heavy-equipment/crane-liability/") },
        { label: "Construction (CAR/WC)", href: EN("/services/construction/contractor-car-wc-insurance/") },
        { label: "Public Liability", href: EN("/services/liability/public-liability/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "crane-liability": {
      seoTitle: "Crane Third-Party Liability Basics – NH + Worksite Exposure (Chennai Outskirts)",
      seoDesc:
        "Practical guidance on third-party liability exposure for cranes and heavy equipment operating near highways and worksites. Focus: incident reporting, evidence quality and coverage clarity.",
      heroH1: "Crane Third-Party Liability (Exposure Basics)",
      heroP:
        "Third-party incidents escalate fast around public zones. We guide evidence discipline and coverage clarity to reduce disputes.",
      whoFor: [
        "Crane operators working near highways/public movement",
        "Equipment rental businesses handling public exposure",
        "Contractors coordinating lifting operations (as applicable)",
      ],
      localFit:
        "NH belts increase public interaction and third-party risk. Liability outcomes depend on incident detail quality and timely reporting.",
      keyCoverFocus: [
        "Understanding third-party exposure around public zones",
        "Incident reporting timeline discipline",
        "Evidence quality: photos, witnesses, notes (as applicable)",
        "Clarity on what gets covered vs typical exclusions",
      ],
      claimDocs: [
        "Incident timeline + witnesses (as applicable)",
        "Photos/videos (as applicable)",
        "Notices/letters received (as applicable)",
        "Policy wording + endorsements",
      ],
      commonMistakes: [
        "Late notice/reporting after incident",
        "Poor incident details and weak evidence",
        "Operations mismatch vs wording assumptions",
      ],
      alsoKnownAs: ["Third-party liability for crane", "Crane liability cover", "Equipment liability basics"],
      whatCanGoWrong: [
        "Late reporting weakens the timeline",
        "Weak evidence creates disputes",
        "Wording assumptions cause gaps",
      ],
      areaRealityTitle: "Liability reality near highways and public zones",
      areaRealityText:
        "Small incidents become expensive disputes if reporting/evidence is weak. Clean documentation and timely notice reduce friction.",
      areaSignals: [
        "Chennai outskirts crane liability guidance",
        "Sholavaram heavy equipment third party risk",
        "Red Hills crane insurance liability support",
      ],
      internalLinks: [
        { label: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
        { label: "Public Liability", href: EN("/services/liability/public-liability/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
  },

  // =====================================================
  // LIABILITY
  // /en/services/liability/{service}/
  // =====================================================
  "liability": {
    "public-liability": {
      seoTitle: "Public Liability Insurance Guidance – Chennai Outskirts Businesses",
      seoDesc:
        "Liability guidance for businesses with public interaction, site exposure and NH-facing risk. Practical focus: what gets covered, common exclusions, and evidence discipline.",
      heroH1: "Public Liability (Third-Party Risk) — Guidance",
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
      alsoKnownAs: ["Third-party liability policy", "Public liability cover", "Liability insurance for businesses"],
      whatCanGoWrong: [
        "Operations mismatch vs wording causes disputes",
        "Late reporting weakens the timeline",
        "Weak evidence quality (as applicable)",
      ],
      areaRealityTitle: "Liability reality around NH-facing businesses",
      areaRealityText:
        "Near highways and industrial zones, small incidents escalate quickly. Clean reporting, notices handling and evidence discipline reduce disputes.",
      areaSignals: [
        "Chennai outskirts public liability insurance",
        "Red Hills third party liability support",
        "Sholavaram liability insurance guidance",
      ],
      internalLinks: [
        { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
        { label: "Construction (CAR/WC)", href: EN("/services/construction/contractor-car-wc-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
  },

  // =====================================================
  // CLAIMS SUPPORT
  // /en/services/claims-support/{service}/
  // =====================================================
  "claims-support": {
    "claim-support": {
      seoTitle: "Claim Support & Documentation Guidance – Sholavaram (Chennai Outskirts)",
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
        "Invoices/valuation/stock proof (as applicable)",
        "Reports/letters/notices (as applicable)",
      ],
      commonMistakes: [
        "Late intimation/reporting",
        "No clear incident timeline",
        "Missing valuation/stock proof",
        "Assuming forms alone are enough",
      ],
      alsoKnownAs: ["Claim assistance", "Claim documentation support", "Claim guidance"],
      whatCanGoWrong: [
        "Late reporting changes the timeline narrative",
        "Missing first-day photos/proof (as applicable)",
        "Invoice/valuation gaps reduce settlement",
        "Policy wording assumptions cause disputes",
      ],
      areaRealityTitle: "Claim reality in NH + industrial belts",
      areaRealityText:
        "The first timeline and first documents decide momentum. Clear reporting, organized proofs and correct disclosures reduce avoidable delays.",
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
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
        { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
        { label: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
        { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
        { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      ],
    },
  },

  // =====================================================
  // MARINE (for your internal links)
  // /en/services/marine/{service}/
  // =====================================================
  "marine": {
    "marine-cargo-goods-in-transit-insurance": {
      seoTitle: "Marine Cargo / Goods-in-Transit Guidance – NH Belt Transport & Logistics",
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
      alsoKnownAs: ["Goods in transit insurance", "Transit insurance", "Marine cargo policy"],
      whatCanGoWrong: [
        "Missing packing proof for damage claims",
        "Invoice / declared goods mismatch",
        "Delay in reporting affects survey workflow",
      ],
      areaRealityTitle: "Transit claim reality in NH corridors",
      areaRealityText:
        "Transit claims are proof-driven: invoice, packing, dispatch/receipt trail, and timely reporting. Clean documentation reduces avoidable delays.",
      areaSignals: [
        "Chennai marine cargo insurance support",
        "NH belt goods in transit insurance guidance",
        "Red Hills logistics transit insurance",
      ],
      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
  },

  // =====================================================
  // PERSONAL (for your serviceVehicleTypes links)
  // /en/services/personal/{service}/
  // =====================================================
  "personal": {
    "taxi-cab-insurance": {
      seoTitle: "Taxi / Cab Insurance Guidance – Chennai (Support)",
      seoDesc:
        "Practical taxi/cab insurance guidance: usage clarity, add-on fit, and basic claim-step discipline for operators across Chennai.",
      heroH1: "Taxi / Cab Insurance (Usage Clarity)",
      heroP:
        "Taxi operations face frequent usage and claim workflow situations. We guide simple clarity and documentation habits.",
      whoFor: [
        "Taxi/cab owners and operators",
        "Drivers renewing without verifying usage fit",
      ],
      localFit:
        "Taxi usage creates frequent exposure. Clean reporting and basic document discipline helps during claims.",
      keyCoverFocus: [
        "Usage clarity aligned to policy wording",
        "Basic claim-step readiness and reporting discipline",
      ],
      claimDocs: [
        "Policy copy",
        "Incident timeline + photos (as applicable)",
        "Repair estimate (as applicable)",
      ],
      commonMistakes: [
        "Usage mismatch vs policy",
        "Late reporting after incidents",
      ],
      alsoKnownAs: ["Cab insurance", "Taxi policy", "Commercial cab insurance"],
      whatCanGoWrong: ["Usage mismatch disputes", "Late reporting weakens the timeline"],
      areaRealityTitle: "Taxi claim reality (city usage)",
      areaRealityText:
        "Most issues are workflow issues. Clean reporting and basic documentation prevents avoidable delays.",
      areaSignals: ["Chennai taxi insurance support", "Cab insurance guidance Chennai"],
      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "car-insurance-support": {
      seoTitle: "Private Car Insurance Support – Chennai (Major Areas)",
      seoDesc:
        "Private car renewal support: IDV/NCB checks, add-on clarity and basic claim-step guidance across Chennai major areas.",
      heroH1: "Private Car Insurance Support (Renewal Checks + Clarity)",
      heroP:
        "Renewals are where most mistakes happen. We help you verify IDV/NCB, add-on fit and basic claim steps.",
      whoFor: [
        "Private car owners renewing policies",
        "Owners wanting clarity on add-ons and claim steps",
      ],
      localFit:
        "Across city usage, renewal mistakes (IDV/NCB/add-ons) create surprises later. Quick checks prevent that.",
      keyCoverFocus: [
        "IDV and NCB checks",
        "Add-on selection aligned to usage",
        "Basic claim-step readiness",
      ],
      claimDocs: ["Policy copy", "Incident photos (as applicable)", "Repair estimate (as applicable)"],
      commonMistakes: ["Wrong IDV/NCB assumptions", "Add-ons chosen without usage fit"],
      alsoKnownAs: ["Car policy support", "Car insurance renewal help"],
      whatCanGoWrong: ["Wrong IDV/NCB assumptions", "Delay in reporting (as applicable)"],
      areaRealityTitle: "Car renewal reality",
      areaRealityText:
        "Small renewal mistakes create big claim surprises. Simple checks reduce that risk.",
      areaSignals: ["Chennai car insurance renewal support", "Private car insurance guidance Chennai"],
      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },

    "bike-insurance-support": {
      seoTitle: "Two-Wheeler Insurance Support – Chennai (Major Areas)",
      seoDesc:
        "Two-wheeler renewal support: add-on clarity and basic claim-step guidance across Chennai major areas.",
      heroH1: "Two-Wheeler Insurance Support (Simple Clarity)",
      heroP:
        "Quick renewal checks and basic claim-step clarity help avoid surprises later.",
      whoFor: [
        "Two-wheeler owners renewing policies",
        "Owners wanting simple add-on clarity",
      ],
      localFit:
        "Most problems are avoidable: renew with clarity, keep basic documents ready, and know reporting steps.",
      keyCoverFocus: ["Add-on clarity", "Basic claim-step readiness"],
      claimDocs: ["Policy copy", "Incident photos (as applicable)"],
      commonMistakes: ["Ignoring claim steps until incident happens"],
      alsoKnownAs: ["Bike insurance support", "Two-wheeler renewal help"],
      whatCanGoWrong: ["Late reporting (as applicable)", "Add-on mismatch"],
      areaRealityTitle: "Two-wheeler policy support reality",
      areaRealityText:
        "Small clarity now prevents big confusion later.",
      areaSignals: ["Chennai bike insurance renewal support", "Two-wheeler insurance guidance Chennai"],
      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
      ],
    },
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
    "motor-claim-first-30-minutes": {
      section: "Insights",
      seoTitle: "Accident claim: what to do in the first 30 minutes",
      seoDesc:
        "A practical first-30-minutes checklist after an accident: safety, evidence, reporting steps, and what NOT to say/do that later creates claim disputes.",
      h1: "Accident claim: what to do in the first 30 minutes",
      intro:
        "Most claim delays happen because the first steps were messy: unclear timeline, weak proof, or wrong reporting. This is a simple sequence you can follow anywhere in Chennai or on NH routes.",
      blocks: [
        {
          title: "Step 1 — Safety & basics",
          bullets: [
            "Move to a safe spot (if possible) and prevent further damage",
            "Check injuries first; get medical help if needed",
            "Note exact location + time (this becomes the start of your claim timeline)",
          ],
        },
        {
          title: "Step 2 — Evidence that actually helps",
          bullets: [
            "Photos of vehicle positions, number plates, damages, and surroundings",
            "Short video walkaround (10–20 seconds is enough)",
            "If third-party involved: capture their RC/phone (only if safe)",
          ],
        },
        {
          title: "Step 3 — Reporting discipline (avoid disputes)",
          bullets: [
            "Inform insurer/agent early (don’t wait until next day)",
            "If police report is required in your situation: do it promptly",
            "Avoid statements like “I accepted fault” in haste—keep facts only",
          ],
        },
        {
          title: "Common mistakes that delay claims",
          bullets: [
            "Repairing or moving parts before photos (proof disappears)",
            "Late intimation (creates avoidable scrutiny)",
            "No clean incident timeline (what happened first, second, third)",
          ],
        },
      ],
      localSignals: [
        "Accident claim support Chennai",
        "Sholavaram vehicle claim guidance",
        "Chennai outskirts NH accident claim checklist",
      ],
      faqs: [
        { q: "Do I always need an FIR?", a: "Not always. It depends on the incident type and policy/insurer process. We guide the correct reporting steps for your case." },
      ],
    },

    "vehicle-insurance-addons-cheat-sheet": {
      section: "Insights",
      seoTitle: "Vehicle add-ons cheat sheet (what’s useful vs waste)",
      seoDesc:
        "A practical guide to vehicle insurance add-ons: zero dep, engine protect, RSA, consumables, return-to-invoice—when each helps and when it’s unnecessary.",
      h1: "Vehicle add-ons cheat sheet (what’s useful vs waste)",
      intro:
        "Add-ons are not ‘good or bad’ — they’re useful only when they match usage. This cheat sheet helps car owners, bike riders and small commercial operators choose realistically.",
      blocks: [
        {
          title: "Add-ons that often help (usage-based)",
          bullets: [
            "Zero Dep: useful for newer vehicles or frequent city usage",
            "RSA: useful if you travel often or drive outside city limits",
            "Engine Protect: useful in flood/Water-logging risk zones (monsoon reality)",
            "Consumables: useful when small repair bills are frequent",
          ],
        },
        {
          title: "Add-ons that need clear understanding",
          bullets: [
            "Return to Invoice (RTI): mainly for new vehicles; check conditions",
            "NCB Protect: useful only if you’re likely to claim for a minor event",
          ],
        },
        {
          title: "Common mistakes buyers make",
          bullets: [
            "Choosing add-ons without reading limits/exclusions",
            "Assuming add-ons apply forever regardless of vehicle age",
            "Not matching add-ons to actual driving/parking conditions",
          ],
        },
      ],
      localSignals: [
        "Chennai vehicle add-ons guidance",
        "Car bike insurance add-on selection Chennai",
      ],
      faqs: [
        { q: "Should I take all add-ons to be safe?", a: "Not needed. Add-ons should match usage and risk. We recommend only what adds real value to your situation." },
      ],
    },

    "two-wheeler-insurance-basics-real": {
      section: "Insights",
      seoTitle: "Bike insurance basics (what actually matters at claim time)",
      seoDesc:
        "Two-wheeler insurance explained practically: own-damage vs third-party, add-ons, common claim rejections, and proof habits that help.",
      h1: "Bike insurance basics (what actually matters at claim time)",
      intro:
        "Bike owners usually face small accidents, theft risk, and repair disputes. This is the practical version of bike insurance—written for real life, not brochure theory.",
      blocks: [
        {
          title: "What to choose (simple)",
          bullets: [
            "Third-party only: cheapest but limited",
            "Comprehensive: useful if you want own-damage protection",
            "Add-ons: only if your usage needs it (not default)",
          ],
        },
        {
          title: "Claim-friendly habits (small effort, big impact)",
          bullets: [
            "Keep policy + RC photos in your phone",
            "Take damage photos immediately after incident",
            "Inform early and follow the process (avoid late reporting)",
          ],
        },
        {
          title: "Where riders lose money",
          bullets: [
            "No photos/timeline",
            "Repair done before inspection (as applicable)",
            "Misunderstanding coverage limits/exclusions",
          ],
        },
      ],
      localSignals: [
        "Bike insurance support Chennai",
        "Sholavaram two wheeler insurance guidance",
      ],
      faqs: [
        { q: "Is comprehensive always needed?", a: "Not always. It depends on bike value, usage and repair risk. We suggest based on your real riding pattern." },
      ],
    },

    "commercial-vehicle-docs-permit-fitness": {
      section: "Insights",
      seoTitle: "Commercial vehicle docs: permit, fitness, RC—why it affects claims",
      seoDesc:
        "Commercial vehicle insurance moves fast when permit/fitness/RC discipline is clean. A checklist for goods vehicles, fleet operators and NH belt movement.",
      h1: "Commercial vehicle docs: permit, fitness, RC—why it affects claims",
      intro:
        "For lorries and goods vehicles, claim friction often starts with document mismatch. Keeping permits/fitness aligned reduces avoidable delays and disputes.",
      blocks: [
        {
          title: "Keep these clean (basic discipline)",
          bullets: [
            "RC validity + correct vehicle details",
            "Fitness certificate (where applicable)",
            "Permit (type/route) aligned to real usage",
            "Pollution certificate (as applicable)",
            "Hypothecation details (if financed)",
          ],
        },
        {
          title: "Why it matters at claim time",
          bullets: [
            "Insurers check whether declared usage matches actual usage",
            "Missing/expired documents can create delays and extra scrutiny",
            "Clean paperwork supports faster approvals and smoother workflow",
          ],
        },
        {
          title: "Transport operator mistakes we prevent",
          bullets: [
            "Renewing policy while permits/fitness are pending",
            "Mismatch between route/usage vs declared type",
            "No clear list of vehicles + documents during fleet renewals",
          ],
        },
      ],
      localSignals: [
        "Red Hills Toll lorry insurance documents",
        "Chennai outskirts commercial vehicle insurance guidance",
        "NH belt fleet insurance support",
      ],
      faqs: [
        { q: "Will expired fitness definitely reject a claim?", a: "It depends on situation and insurer process. But it creates avoidable risk. Keeping compliance updated is the safest path." },
      ],
    },

    "garage-overbilling-claim-safety": {
      section: "Insights",
      seoTitle: "Garage overbilling & claim traps: how to protect yourself",
      seoDesc:
        "How customers lose money during repairs: inflated estimates, unnecessary parts, towing traps, cash deals. A safe workflow for claim repairs.",
      h1: "Garage overbilling & claim traps: how to protect yourself",
      intro:
        "Most people don’t get cheated because they are careless—they get rushed. This guide is a calm workflow to protect you during repair + claim situations.",
      blocks: [
        {
          title: "Common traps",
          bullets: [
            "Inflated estimate + unnecessary part replacement",
            "Pressure to sign blank papers or unclear documents",
            "Towing coordination that becomes expensive later",
            "Cash negotiation that breaks claim transparency",
          ],
        },
        {
          title: "A safe claim repair workflow",
          bullets: [
            "Take photos/videos before repair begins",
            "Ask for a written estimate and keep copies",
            "Confirm cashless vs reimbursement path early",
            "Avoid undocumented promises; keep communication documented",
          ],
        },
        {
          title: "What to do if you suspect overbilling",
          bullets: [
            "Ask for part-wise breakup and justification",
            "Ask for old parts return (where applicable)",
            "Pause and verify with insurer/agent before approving big changes",
          ],
        },
      ],
      localSignals: [
        "Chennai insurance claim repair guidance",
        "Car claim safety checklist Chennai",
      ],
      faqs: [
        { q: "Is cashless always safer?", a: "Not always. The process matters more than the payment mode. We guide the workflow so the claim remains clean and dispute-resistant." },
      ],
    },

    "used-vehicle-insurance-transfer": {
      section: "Insights",
      seoTitle: "Used vehicle purchase: insurance transfer checklist (buyers forget this)",
      seoDesc:
        "Buying a used car/bike: insurance transfer, ownership, NCB and claim eligibility basics—simple checklist to avoid future claim problems.",
      h1: "Used vehicle purchase: insurance transfer checklist (buyers forget this)",
      intro:
        "Many claim disputes happen because ownership/insurance transfer wasn’t completed properly. This checklist helps used vehicle buyers stay safe.",
      blocks: [
        {
          title: "Checklist (simple and practical)",
          bullets: [
            "Ownership transfer process started (RC transfer)",
            "Insurance transfer aligned with owner name",
            "Confirm policy type + expiry + add-ons status",
            "Check claim history and NCB logic (as applicable)",
          ],
        },
        {
          title: "Where people get stuck later",
          bullets: [
            "Claim filed with wrong owner name or incomplete transfer",
            "Policy details not matching vehicle documents",
            "Assuming add-ons continue without confirming eligibility",
          ],
        },
      ],
      localSignals: [
        "Used car insurance transfer Chennai",
        "Used bike insurance transfer guidance Chennai",
      ],
      faqs: [
        { q: "Can I claim immediately after buying used vehicle?", a: "Eligibility depends on transfer completion and policy terms. We help you make sure nothing breaks later." },
      ],
    },

    "health-claim-cashless-vs-reimbursement": {
      section: "Insights",
      seoTitle: "Health claim: cashless vs reimbursement (what changes)",
      seoDesc:
        "Health insurance claim types explained: cashless vs reimbursement, documents, timelines, and common mistakes that delay settlement.",
      h1: "Health claim: cashless vs reimbursement (what changes)",
      intro:
        "Health claims become stressful when documentation is unclear. This guide explains cashless vs reimbursement in a simple, practical way.",
      blocks: [
        {
          title: "Cashless (what you must do right)",
          bullets: [
            "Inform early, share correct policy details",
            "Keep ID proof + policy details ready",
            "Follow hospital TPA workflow (don’t skip steps)",
          ],
        },
        {
          title: "Reimbursement (what to preserve)",
          bullets: [
            "Final bill + discharge summary",
            "Doctor notes/prescriptions (as applicable)",
            "Investigation reports and payment proof",
            "Keep a clean timeline of admission-to-discharge",
          ],
        },
        {
          title: "Common delay reasons",
          bullets: [
            "Missing discharge summary or unclear documents",
            "Late intimation",
            "Not maintaining a clean proof folder",
          ],
        },
      ],
      localSignals: [
        "Health claim support Chennai",
        "Mediclaim reimbursement checklist Chennai",
      ],
      faqs: [
        { q: "Which is better: cashless or reimbursement?", a: "Cashless reduces upfront burden. Reimbursement works when cashless network/process isn’t available. We guide the correct path for your situation." },
      ],
    },

    "business-insurance-avoid-underinsurance": {
      section: "Insights",
      seoTitle: "Business insurance: a simple method to avoid underinsurance",
      seoDesc:
        "A practical underinsurance prevention method for MSMEs: stock + assets + machinery clarity, valuation basis and proof discipline that supports claims.",
      h1: "Business insurance: a simple method to avoid underinsurance",
      intro:
        "Underinsurance is one of the fastest ways to reduce settlement. This is a simple approach MSMEs can use without complicated calculations.",
      blocks: [
        {
          title: "A simple method (no confusion)",
          bullets: [
            "Separate stock, furniture, equipment and machinery (don’t lump sum)",
            "Use invoice/valuation basis for major categories",
            "Update when business expands or stock type changes",
          ],
        },
        {
          title: "Proof discipline that prevents disputes",
          bullets: [
            "Keep invoices + basic asset list updated",
            "Maintain a simple photo proof folder (periodic)",
            "Clarify business operations so wording matches reality",
          ],
        },
      ],
      localSignals: [
        "Sholavaram MSME insurance guidance",
        "Red Hills warehouse business insurance consultant",
      ],
      faqs: [
        { q: "Can I reduce premium by lowering sum insured?", a: "You can, but it often reduces settlement later. We align sum insured to reality so claims don’t surprise you." },
      ],
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
      { label: "FAQs", href: EN("faqs") },
      { label: "Photos", href: EN("photos") },
      { label: "Contact", href: EN("contact") },
    ],
  },

  servicePopular: [
    { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), tag: "Transport" },
    { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/"), tag: "Transport" },
    { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/"), tag: "Transport" },
    { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/"), tag: "Industrial" },
    { title: "Shop & MSME Insurance", href: EN("/services/business-msme/shop-msme-insurance/"), tag: "Commercial" },
    { title: "Contractor / Construction Insurance", href: EN("/services/construction/contractor-car-wc-insurance/"), tag: "Construction" },
    { title: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/"), tag: "Heavy Equipment" },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/"), tag: "Claims" },
  ],

  serviceCategories: [
    {
      slug: "transport-fleet",
      title: "Transport & Fleet Insurance",
      desc: "For lorries, fleets and NH corridor operations—permit/fitness discipline, third-party exposure and claim readiness.",
      href: EN("/services/transport-fleet/"),
      problems: [
        "Fitness / permit expiry disputes",
        "Route / permit mismatch",
        "Overloading mentioned in FIR",
        "Driver document errors and badge mismatch",
        "IMT endorsement confusion",
        "Late reporting and incomplete incident timeline",
      ],
      children: [
        { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
        { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
        { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
        { title: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
        { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      ],
    },

    {
      slug: "industrial",
      title: "Industrial & Property Insurance",
      desc: "Warehouses, godowns, factories—fire load, stock proof discipline, valuation clarity and burglary conditions.",
      href: EN("/services/industrial/"),
      problems: [
        "Undervaluation leading to settlement reduction",
        "Stock proof mismatch during claim",
        "Electrical fire load and safety conditions",
        "Burglary conditions not met / weak proof trail",
        "Layout/stock type changed but not updated",
      ],
      children: [
        { title: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
        { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
        { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
        { title: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
      ],
    },

    {
      slug: "construction",
      title: "Construction & Contractor Insurance",
      desc: "CAR/WC discipline for active worksites—workforce risk, site exposure and claim timeline readiness.",
      href: EN("/services/construction/"),
      problems: [
        "Payroll / classification mismatch in WC",
        "Project timeline extensions not aligned",
        "Late reporting after incident",
        "Site exposure differs from disclosures",
      ],
      children: [
        { title: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/") },
        { title: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
        { title: "Contractor CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      ],
    },

    {
      slug: "business-msme",
      title: "Business & MSME Insurance",
      desc: "For shops, offices and service businesses—wording alignment, valuation, and proof discipline.",
      href: EN("/services/business-msme/"),
      problems: [
        "Sum insured chosen randomly",
        "Stock declaration confusion",
        "Theft/burglary conditions ignored",
        "No proof folder for invoices/photos",
      ],
      children: [
        { title: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
        { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      ],
    },

    {
      slug: "heavy-equipment",
      title: "Heavy Equipment / Crane Insurance",
      desc: "CPM/declared value clarity + third-party exposure for cranes and heavy equipment near highways and sites.",
      href: EN("/services/heavy-equipment/"),
      problems: [
        "Declared value set too low to save premium",
        "Usage/site exposure mismatch",
        "Weak proof trail after incident",
      ],
      children: [
        { title: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
        { title: "Crane Third-Party Liability Basics", href: EN("/services/heavy-equipment/crane-liability/") },
      ],
    },

    {
      slug: "claims-support",
      title: "Claim Support & Documentation",
      desc: "Documents + timelines + steps to reduce delays—built for real-world claim workflows.",
      href: EN("/services/claims-support/"),
      problems: [
        "Late intimation",
        "No clear incident timeline",
        "Missing invoices/valuation/stock proof",
        "Assuming forms alone are enough",
      ],
      children: [
        { title: "Claim Documents Checklist", href: EN("/insights/claim-documents-checklist/") },
        { title: "What Delays Claims (30+ years)", href: EN("/proof-experience/30-years-claim-handling/") },
      ],
    },
  ],

  serviceVehicleTypes: [
    { label: "Lorry / Truck", href: EN("/services/transport-fleet/lorry-insurance/") },
    { label: "Tip Truck", href: EN("/services/transport-fleet/tip-truck-insurance/") },
    { label: "Trailer", href: EN("/services/transport-fleet/trailer-insurance/") },
    { label: "Pickup / Goods Auto", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
    { label: "Taxi / Cab", href: EN("/services/personal/taxi-cab-insurance/") },
    { label: "Private Car", href: EN("/services/personal/car-insurance-support/") },
    { label: "Two-Wheeler", href: EN("/services/personal/bike-insurance-support/") },
  ],

  serviceAreas: [
    { label: "Red Hills Toll & Warehouse Belt", desc: "Warehouses, fleets, loading bays, NH movement", href: EN("/locations/") },
    { label: "Sholavaram Industrial Area", desc: "Units, contractors, equipment, transport operators", href: EN("/locations/") },
    { label: "Madhavaram Logistics Corridor", desc: "Transport, SMEs, city-side vehicle owners", href: EN("/locations/") },
    { label: "Chennai Outskirts (NH belts)", desc: "NH corridors and industrial belts around Chennai", href: EN("/locations/") },
  ],
// siteData.faqs = grouped + domain-specific

  faqsPage: {
    claimsDocs: {
      title: "Claims & Documentation",
      intro:
        "Real claim questions we hear in Chennai outskirts & NH-facing belts. Built to reduce delays: timelines, proofs, and clean reporting.",
      items: [
        {
          q: "What happens if claim intimation is late?",
          a:
            "Late intimation often triggers extra scrutiny. The best protection is an early message/call to the insurer/agent and a clean timeline (what happened first, second, third) with photos as applicable.",
        },
        {
          q: "Do I always need an FIR for vehicle claims?",
          a:
            "Not always. FIR requirements depend on incident type, third-party involvement, injury, theft, and insurer process. We guide the correct reporting path for your specific case.",
        },
        {
          q: "What are the top 5 documents that speed up claim approvals?",
          a:
            "Policy copy + endorsements, a clear incident timeline, first-day photos/videos (as applicable), invoices/valuation proof (as applicable), and the required report documents (police/fire/notice) when applicable.",
        },
        {
          q: "Can I repair the vehicle immediately after an accident?",
          a:
            "Avoid starting repairs before photos and insurer guidance. Early repair can remove proof. Capture photos/videos first, inform insurer, and follow survey/inspection steps if required.",
        },
        {
          q: "Why do claims get delayed even when I submitted forms?",
          a:
            "Forms alone don’t prove value or incident sequence. Delays usually happen due to missing proof (invoices/photos), unclear timeline, late reporting, or policy wording mismatches.",
        },
        {
          q: "What is a “clean incident timeline” and why does it matter?",
          a:
            "It’s a simple sequence of events with time + location + what happened. A clean timeline reduces disputes and helps survey/claim teams assess facts faster.",
        },
        {
          q: "What should I do if the garage is pressuring me to sign papers quickly?",
          a:
            "Pause. Ask for written estimate and keep copies. Avoid signing blank/unclear forms. Confirm cashless vs reimbursement with insurer/agent before approving major changes.",
        },
        {
          q: "How do I avoid claim disputes for stock or property losses?",
          a:
            "Maintain proof discipline: invoices/registers, periodic photos (as applicable), clear valuation basis, and keep declarations consistent with actual stored goods/layout.",
        },
      ],
    },

    locationsOffice: {
      title: "Locations, Office & Local Support",
      intro:
        "Practical questions about where we operate, how local support works, and what to carry when you visit.",
      items: [
        {
          q: "Do you serve only Sholavaram?",
          a:
            "Sholavaram is our primary local area. We also support nearby Chennai North and outskirts belts like Red Hills, Madhavaram, Puzhal, Manali and corridor-connected areas depending on the policy and requirements.",
        },
        {
          q: "Do you support Red Hills and nearby warehouse / transport areas?",
          a:
            "Yes, we frequently support customers around Red Hills and nearby belts where transport movement and warehouse activity are common. Support depends on insurer rules and the specific requirement.",
        },
        {
          q: "If I’m outside Chennai, can you still guide?",
          a:
            "Sometimes, yes. Guidance depends on the policy type, insurer process, and what documentation is required. For location-specific inspections, the insurer’s process applies.",
        },
        {
          q: "Where is your office located?",
          a:
            "Our support is based around Sholavaram (Chennai outskirts). For exact directions and map location, please refer to our Google Business Profile listing.",
        },
        {
          q: "Do I need an appointment to visit the Sholavaram office?",
          a:
            "An appointment is not always mandatory, but it’s better to call/message first so we can keep your policy details and document checklist ready (as applicable).",
        },
        {
          q: "What documents should I carry when visiting for vehicle insurance?",
          a:
            "Commonly needed: RC copy, previous policy copy, and basic owner details. For commercial vehicles, permit/fitness details may also be required (as applicable).",
        },
        {
          q: "What should I carry when visiting for warehouse or business insurance?",
          a:
            "Commonly needed: basic business details, premises address, a simple list of stock/assets, and invoices/valuation basis where available. Photos help in many cases (as applicable).",
        },
        {
          q: "Can you help if I only have WhatsApp photos of documents?",
          a:
            "Yes, WhatsApp photos can help for initial guidance and checklist preparation. Final insurer requirements may still require specific formats or originals depending on the case.",
        },
        {
          q: "Do you handle only commercial insurance in these areas?",
          a:
            "Commercial/industrial is our primary focus in these belts, but we also support personal motor, health guidance, and LIC servicing depending on the need.",
        },
      ],
    },

    // ✅ NEW group: Experience & trust (facts-only)
    experienceTrust: {
      title: "Experience, Work Style & What You Can Expect",
      intro:
        "What we do (and what we don’t). Clear expectations help build trust and avoid misunderstandings.",
      items: [
        {
          q: "How many years of experience do you have?",
          a:
            "We have 30+ years of insurance service experience focused on policy guidance, renewals, and claim process support.",
        },
        {
          q: "What kind of customers do you mostly work with in Chennai North belts?",
          a:
            "A large part of our work involves commercial needs such as fleets/lorries, warehouses/godowns, contractors, heavy equipment, and MSME packages. We also assist families with personal motor, health guidance, and LIC servicing.",
        },
        {
          q: "Do you promise claim approval or settlement amounts?",
          a:
            "No. Claim acceptance and settlement depend on insurer rules, policy wording, disclosures, and documentation. Our role is to guide the correct process and reduce avoidable delays.",
        },
        {
          q: "What is your work style in one line?",
          a:
            "We focus on clarity before purchase and discipline during claims—documents, timelines, and correct reporting steps.",
        },
        {
          q: "What are the most common issues you see that cause claim delays?",
          a:
            "Late intimation, unclear incident timeline, missing proof (photos/invoices as applicable), and mismatch between real operations and policy wording.",
        },
        {
          q: "Do you help after the policy is issued?",
          a:
            "Yes. We assist with renewals, documentation clarity, and claim process guidance depending on the policy and insurer process.",
        },
      ],
    },

    
    transportFleet: {
      title: "Transport / Fleet / Commercial Vehicle",
      intro:
        "NH belt realities: permits, fitness, third-party exposure, and paperwork discipline that decides claim outcomes.",
      items: [
        {
          q: "Does expired fitness or permit affect claim approval?",
          a:
            "It can create delays or disputes depending on incident context and insurer rules. Keeping RC/permit/fitness aligned is one of the strongest claim-safety habits for commercial vehicles.",
        },
        {
          q: "Why do fleet claims get delayed more often than private car claims?",
          a:
            "Fleet claims often involve third-party exposure, document checks (permit/fitness), and operations mismatch (loading/unloading, route usage). Missing or inconsistent paperwork increases scrutiny.",
        },
        {
          q: "What documents should I keep ready for fleet renewals?",
          a:
            "Vehicle list, RC, permit, fitness, pollution (as applicable), hypothecation details (if financed), usage clarity (route/type), and basic driver docs (as applicable).",
        },
        {
          q: "Will overloading mentioned in FIR create problems?",
          a:
            "It can increase scrutiny and disputes. The best approach is prevention (operational discipline) and clean documentation at claim time—especially clear incident facts and timely reporting.",
        },
        {
          q: "Is trailer insurance separate from lorry insurance?",
          a:
            "Often yes—trailer exposure and registration details can differ. The correct structure depends on how the trailer is registered/used and insurer product rules.",
        },
        {
          q: "What is the most common mistake commercial vehicle owners make at renewal?",
          a:
            "Renewing without checking permit/fitness validity and assuming the policy wording matches actual usage (route, loading/unloading exposure, driver documentation).",
        },
        {
          q: "How do I reduce third-party risk in NH-facing operations?",
          a:
            "Liability clarity + fast reporting discipline. If an incident happens, capture location/time/proof, inform insurer early, and keep the first timeline clean.",
        },
      ],
    },

    industrialProperty: {
      title: "Warehouse / Godown / Factory / Fire & Burglary",
      intro:
        "Industrial belt claims are proof-driven: valuation, stock records, safety conditions and consistency.",
      items: [
        {
          q: "Why do fire claims become valuation disputes?",
          a:
            "Because settlement depends on proving the value of stock/assets at the time of loss. If invoices/registers/declarations don’t match, disputes become likely.",
        },
        {
          q: "What proof do insurers usually ask for stock loss?",
          a:
            "Invoices, stock register/ledger (any consistent record), photos (as applicable), purchase/sales trail, and a clear method showing how stock value was arrived at.",
        },
        {
          q: "What is underinsurance and how does it reduce settlement?",
          a:
            "If sum insured is lower than actual value, settlement can reduce (average clause risk). A practical method is separating stock/assets/machinery and using invoice/valuation basis for each.",
        },
        {
          q: "Does burglary/theft claim require specific security conditions?",
          a:
            "Often yes. Many policies include conditions about locks, premises security, and reporting steps. We help you understand what applies to your premises and keep proof discipline aligned.",
        },
        {
          q: "When should I consider stock declaration policies?",
          a:
            "When stock fluctuates significantly month-to-month. Declaration policies need consistent monthly discipline and proof trail—otherwise disputes can happen during loss month.",
        },
        {
          q: "Should I update the insurer if my warehouse layout or stored goods change?",
          a:
            "Yes, risk changes can impact acceptance and claim outcomes. A mismatch between declared goods/layout and actual usage is a common dispute trigger.",
        },
      ],
    },

    constructionContractor: {
      title: "Construction / Contractor (CAR & WC)",
      intro:
        "Worksite claims often fail due to late reporting, payroll/classification mismatch, and unclear site exposure.",
      items: [
        {
          q: "Why does payroll or headcount mismatch matter in WC policies?",
          a:
            "Because pricing and risk acceptance depend on declared workforce. If declared numbers/classification don’t match reality, disputes become more likely during a claim.",
        },
        {
          q: "Do I need both CAR and WC for a project?",
          a:
            "It depends on contract requirements and site exposure. CAR typically addresses project/material risks; WC relates to workforce injury liability. We align cover to your real exposure and obligations.",
        },
        {
          q: "What is the biggest claim mistake contractors make?",
          a:
            "Late reporting after an incident and no clean incident timeline. Worksite claims need timely reporting and basic proof (site photos, incident notes, records as applicable).",
        },
        {
          q: "What happens if my project timeline extends beyond the policy period?",
          a:
            "Policy period mismatch can create complications. Extensions/endorsements may be needed depending on the policy and insurer rules—plan this early, not after an incident.",
        },
        {
          q: "How should contractors keep documentation to reduce disputes?",
          a:
            "Maintain basic workforce records (as applicable), periodic site photos, material invoices, and a simple incident timeline format ready if an event happens.",
        },
      ],
    },

    heavyEquipment: {
      title: "Crane / Heavy Equipment (CPM) & Liability",
      intro:
        "High-premium equipment claims get scrutinized on declared value + usage + timeline. Proof discipline matters.",
      items: [
        {
          q: "Why does declared value decide crane/CPM claim outcome?",
          a:
            "Because settlement is tied to the declared value and proof behind it (invoice/valuation/market basis). Undervaluation to reduce premium often reduces settlement later.",
        },
        {
          q: "Can I declare a low value to save premium?",
          a:
            "You can, but it often backfires during claims. We recommend declared value that is defensible with proof so settlements don’t get reduced unnecessarily.",
        },
        {
          q: "What details do insurers verify for crane/heavy equipment risks?",
          a:
            "Declared value basis, how/where the equipment is used (site/highway proximity), exposure to third-party risk, and incident proof quality when a loss occurs.",
        },
        {
          q: "Is third-party liability automatically included in crane policies?",
          a:
            "Not always. Coverage depends on product/wording and endorsements. We check exposure vs wording so you don’t assume coverage that isn’t there.",
        },
        {
          q: "What proof should I keep ready for heavy equipment policies?",
          a:
            "Invoice/valuation basis, equipment photos, attachment details, basic maintenance/inspection records (as applicable), and a clean incident reporting habit if something happens.",
        },
      ],
    },

    businessMsme: {
      title: "Business / MSME / Office Packages",
      intro:
        "Most MSME disputes are avoidable: wrong sum insured, operations mismatch, and weak proof trail.",
      items: [
        {
          q: "How do I choose sum insured for MSME policies without guessing?",
          a:
            "Separate stock, furniture, equipment, and machinery. Use invoices/valuation basis for major items, and review annually or when business expands.",
        },
        {
          q: "Is buying business insurance online safe?",
          a:
            "Yes, if disclosures and wording match your real operations and you maintain proof discipline. We help verify the few lines that decide claim outcomes.",
        },
        {
          q: "What is the easiest “proof folder” method for small businesses?",
          a:
            "Keep one folder with invoices, asset list, periodic photos (as applicable), policy copy/endorsements, and a short operations summary. Update when stock/layout changes.",
        },
        {
          q: "Why do MSME theft/burglary claims fail?",
          a:
            "Most failures come from security condition gaps, weak proof trail, and reporting mistakes. Aligning security habits and keeping invoices/photos reduces disputes.",
        },
        {
          q: "Should I disclose that I store goods at a different location sometimes?",
          a:
            "Yes. Location and storage patterns matter for risk acceptance and claims. Undisclosed storage changes can become a dispute trigger later.",
        },
      ],
    },

    liabilityMarineEmployeePersonal: {
      title: "Liability / Marine Transit / Employee Benefits / Personal Support",
      intro:
        "These questions come up repeatedly in NH-facing businesses and families across Chennai North.",
      items: [
        {
          q: "When should a business take public liability coverage seriously?",
          a:
            "When public/visitor movement is frequent, operations happen near roads/highways, or worksite exposure exists. Small incidents can become large demands quickly.",
        },
        {
          q: "What makes marine cargo / transit claims get disputed?",
          a:
            "Missing invoice/packing proof, unclear dispatch/receipt trail, delayed reporting, and mismatch between declared goods and actual shipment.",
        },
        {
          q: "Cashless vs reimbursement in health claims—what changes?",
          a:
            "Cashless depends on network and TPA workflow; reimbursement needs you to preserve bills, discharge summary, reports and payment proof. Timely intimation matters in both.",
        },
        {
          q: "What’s the most important thing to check in car renewals?",
          a:
            "IDV realism, correct NCB, add-ons that match usage, and basic claim-step clarity. Renewals are where most expensive assumptions happen.",
        },
        {
          q: "Used vehicle purchase—what’s the biggest insurance mistake buyers make?",
          a:
            "Not completing insurance transfer and assuming claim eligibility remains intact. Ensure ownership transfer + policy transfer alignment to avoid disputes later.",
        },
        {
          q: "LIC premium lapse—why does it cause problems later?",
          a:
            "Lapses can change continuity/benefits depending on policy terms. A reminder discipline + updated nominee/contact details prevents avoidable issues later.",
        },
      ],
    },
  },

  media: {
    googlePosts: {
      title: "Recent Google Posts (Photos)",
      subtitle:
        "Real photos from our Google Business Profile posts—coverage guidance, claim documentation, renewals, and local work.",
      images: [
        { src: "/assets/media-AF1QipM0GOZ8fQ7qzU8aWzT4tmeytKW3HDh0Z1E_.jpeg", alt: "Insurance agent in Sholavaram for commercial and transport services photo", shape: "landscape" },
        { src: "/assets/media-AF1QipM4G-xIqlb2mwBepuKSU8ygiInTBibZ1QbV.jpeg", alt: "Warehouse and godown insurance Chennai North photo", shape: "portrait" },
        { src: "/assets/media-AF1QipMEClhJvRCKeJ1ovMv1Iij0h6mDAJ8oLiPk.jpeg", alt: "Insurance consultant for MSME and shop packages Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMTGW7tSQAzT3EO6Z8fqVXWDraIHhsd_U5N.jpeg", alt: "Insurance for industrial belts and logistics Chennai photo", shape: "landscape" },
      ],
    },

    photosPage: {
      title: "Photos",
      subtitle:
        "A simple gallery of real visuals—Google posts, office-related visuals, and service guidance posters.",
      // ✅ This is for /en/photos page (can include googlePosts too, or separate)
      images: [
        { src: "/assets/media-AF1QipM0GOZ8fQ7qzU8aWzT4tmeytKW3HDh0Z1E_.jpeg", alt: "Insurance agent in Sholavaram for commercial and transport services photo", shape: "landscape" },
        { src: "/assets/media-AF1QipM4G-xIqlb2mwBepuKSU8ygiInTBibZ1QbV.jpeg", alt: "Warehouse and godown insurance Chennai North photo", shape: "portrait" },
        { src: "/assets/media-AF1QipM7wKn7wccUXBhm9ub_lA5nEKNvOYxQTD3N.jpeg", alt: "Fleet and lorry insurance Red Hills Toll belt photo", shape: "square" },
        { src: "/assets/media-AF1QipM9IIOMTp4U_c0r_2M3N57uNItuviIjaLSm.jpeg", alt: "Fire and burglary insurance guidance Madhavaram photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMEClhJvRCKeJ1ovMv1Iij0h6mDAJ8oLiPk.jpeg", alt: "Insurance consultant for MSME and shop packages Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMTGW7tSQAzT3EO6Z8fqVXWDraIHhsd_U5N.jpeg", alt: "Insurance for industrial belts and logistics Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMVYZj0WpOkNX9E1Fw2UauHJf3MCBUVMfH0.jpeg", alt: "Insurance for public liability and claim support Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMXhKee_-fjp-X-iB942783gAhbXS9vUvVE.jpeg", alt: "Insurance for Red Hills Toll and NH corridor businesses photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMd6dbnGZdk2heSh_xuoy4VqbnIGQc21-yD.jpeg", alt: "Insurance for godown, warehouse, and factory Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMf91wNQjd1uiJNchMWBAlpFI3U8fCTrePq.jpeg", alt: "Insurance for transport, fleet, and lorry Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipMfFqR0ZaGTPBAyVbMwrY5kC709t_8WmW6E.jpeg", alt: "Insurance for fire, burglary, and proof discipline Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipN-dhxmRPPsxmXJI3iIMTnHC5gtepqi8Ap5.jpeg", alt: "Insurance for claim support and documentation Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipN0wJZu1M5M_7-sk0ZMIyAQzUzOU0KVbTT_.jpeg", alt: "Insurance for commercial and industrial belts Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipN13IqRl02reLX01k6Nzch02ysAuK43ea4N.jpeg", alt: "Insurance for Sholavaram, Red Hills, Madhavaram photo", shape: "landscape" },
        { src: "/assets/media-AF1QipN7G7lp3JI2UC3-6SRM7g3XUpZ3b7cO1Z58.jpeg", alt: "Insurance for NH corridor and logistics Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipNENllrXrdTJogygDlL_-ePUqNZQe3JDeY7.jpeg", alt: "Insurance for MSME, shop, and office packages Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipNG3LqZanZoT_D0dH0KDUauAmnXH-164G2l.jpeg", alt: "Insurance for industrial zone and compliance Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipNNoB-KIKCf0PgEg9UOJJn8MgdZHaBe1lMG.jpeg", alt: "Insurance for claim workflow and support Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipNT9A4FKHOtQJAKs-ZsvAOuChjTE3uXMS0a.jpeg", alt: "Insurance for logistics, storage, and transport Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipN_uhqKQGQNgsj70KFvkWIQEc0DISifyZuW.jpeg", alt: "Insurance for public liability and claim support Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipNgD-pBDk0w33xmR5OGPeqfQ7CilY-gmRLb.jpeg", alt: "Insurance for NH corridor and logistics Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipNnCYEL6NKEgmhnEtjWNJBmZVmk-aCn-QEV.jpeg", alt: "Insurance for Sholavaram, Red Hills, Madhavaram photo", shape: "landscape" },
        { src: "/assets/media-AF1QipO-Sn5bRzZK0Gh3DYJXIaGjVHsIXxSPeJkO.jpeg", alt: "Insurance for commercial and industrial belts Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipOBpPyRloCPePJPNh_hzveo3lrhQAFZDPK9.jpeg", alt: "Insurance for MSME, shop, and office packages Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipOfSrDsy2c0-czzGmWv2h7KwaMkmkqozqeU.jpeg", alt: "Insurance for fire, burglary, and proof discipline Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipOiux4RV-GSWCAXamVgp7UzD67k-mWdrmwi.jpeg", alt: "Insurance for godown, warehouse, and factory Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipOpXpCNlnnQFT94sJntBg7Cwl6AcIRBYUpk.jpeg", alt: "Insurance for logistics, storage, and transport Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipOxsO50v5eUYAgaw8NzYo60RpJTc7n9iB1L.jpeg", alt: "Insurance for public liability and claim support Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipP-p2Yvv1XS5GKtFYxq7u8emarZbMLCltI9.jpeg", alt: "Insurance for claim workflow and support Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipP2yXhb4cRighMyDmVDfBiEiezTnvGLBqOm.jpeg", alt: "Insurance for industrial zone and compliance Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipPC-Oly_xjHPj5ddi360CNZBfK4HQTq3AkQ.jpeg", alt: "Insurance for commercial and industrial belts Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipPE8ocnmdCxJUULSKtrSRsZguHdkt2y0aBn.jpeg", alt: "Insurance for MSME and shop packages Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipPHm_DmIohzQrwsima9yj6ZtbIhJKR6Rrd7.jpeg", alt: "Insurance for fire, burglary, and proof discipline Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipPcunOod-HCYMAMbYJ0Qd8WSFk0_KsTl5qb.jpeg", alt: "Insurance for claim support and documentation Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipPlPgVO_8A9eHpwd-iQa6bK06y692vXKkJs.jpeg", alt: "Insurance for logistics, storage, and transport Chennai photo", shape: "landscape" },
        { src: "/assets/media-AF1QipPp-XKvM-ND8uU0Xm5AsZiYwxLO6iLctGpV.jpeg", alt: "Insurance for public liability and claim support Chennai photo", shape: "landscape" },
      ],
    },
  },

  // In src/content/siteData.js (inside export const siteData = { ... })

// --------------------------------------------
// LOCATIONS (hub + detail pages)
// --------------------------------------------
locationsIndex: buildLocationsIndexFromDetail(locationsDetail),


// Location detail pages (each one links to service detail pages)
locationsDetail,

nearMeIntent: {
  title: "Insurance near me (Sholavaram office support)",
  intro:
    "If you’re searching for an insurance agent near you in Chennai North / outskirts, you can contact our Sholavaram office for commercial-first guidance and policy servicing support.",
  queries: [
    "insurance near me",
    "insurance agent near me",
    "insurance office near me",
    "insurance consultant near me",
    "car insurance near me",
    "commercial insurance near me",
    "insurance renewal near me",
    "insurance claim help near me",
  ],
  localQueries: [
    "insurance agent Sholavaram",
    "insurance in Red Hills",
    "commercial insurance Madhavaram",
    "insurance agent Ambattur",
    "car insurance Ambattur",
  ],
  synonyms: {
    agent: ["insurance agent", "insurance advisor", "insurance consultant"],
    renewal: ["policy renewal", "insurance renewal", "renew insurance"],
    claims: ["claim help", "claim support", "claim documents"],
    commercial: ["commercial insurance", "business insurance", "MSME insurance"],
  },
  primaryCtas: [
    { label: "Call now", href: `tel:${phoneE164}` },
    {
      label: "WhatsApp",
      href:
        `https://wa.me/${whatsappE164}` +
        `?text=${encodeURIComponent(whatsappPrefill)}`,
    },
    { label: "View location on Google Maps", href: gbpUrl },
  ],
},

trustValidation: {
  title: "Trust & verification",
  points: [
    "Google Business Profile location and reviews are available for verification.",
    "Policies and servicing support are guided based on insurer rules and policy conditions.",
    "We do not promise claim outcomes—documentation and disclosure correctness reduces avoidable delays.",
  ],
  links: [
    { label: "Google Business Profile", href: gbpUrl },
    { label: "Reviews", href: EN("/reviews/") },
    { label: "Contact", href: EN("/contact/") },
    { label: "FAQs", href: EN("/faqs/") },
  ],
  providers: [
    {
      name: "The New India Assurance Company Limited",
      note:
        "Public sector general insurance company owned by the Government of India (policies/terms as per insurer rules).",
    },
    {
      name: "Life Insurance Corporation of India (LIC)",
      note:
        "Indian state-owned insurance group and investment company (servicing and renewal support depends on policy terms).",
    },
  ],
},


  gmbPosts: [],
};
