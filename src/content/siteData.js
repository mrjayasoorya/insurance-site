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
let geo = { lat: 13.2391084, lng: 80.1728337 }

let servicesDetail = {
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

      coverageSummary: [
        "Lorry insurance is not just a premium decision. Claim outcomes depend on disclosure accuracy (route/usage), endorsement fit, and whether your compliance documents are valid on the incident date (as applicable).",
        "In NH-facing belts (Red Hills toll, GNT road, Madhavaram logistics), most disputes come from late reporting, weak incident timelines, and mismatch between real operations and wording (loading/unloading, attachment, route exposure)."
      ],

      whoFor: [
        "Single lorry owners and fleet operators",
        "Logistics businesses moving goods in NH corridors",
        "Tipper/trailer attached operations (as applicable)",
      ],

      standardModules: {
        title: "What lorry insurance typically covers (modules)",
        bullets: [
          "Third-party liability (mandatory) and owner/driver cover (as applicable)",
          "Own damage (vehicle damage) subject to policy terms",
          "IMT / endorsements based on operations (loading/unloading/site exposure as applicable)",
          "Add-ons depending on vehicle age and insurer rules (case-dependent)",
        ],
      },

      localFit:
        "NH-facing belts see higher third-party incidents and documentation scrutiny. A clean paper trail (permit/fitness/driver basics) reduces avoidable delays.",

      keyCoverFocus: [
        "Third-party exposure clarity + accident reporting readiness",
        "Permit/fitness/RC alignment (common underwriting checks)",
        "Loading/unloading/worksite exposure (often missed)",
        "Endorsements/IMT clarity aligned to usage",
      ],

      preBuyChecklist: {
        title: "Before you buy or renew (simple checklist)",
        bullets: [
          "Confirm route/usage summary (local trips vs long-route, goods type as applicable)",
          "Check permit + fitness expiry dates and keep copies ready (as applicable)",
          "Ensure previous policy copy + endorsements are available",
          "Maintain a “driver/vehicle document folder” (as applicable) to avoid last-minute gaps",
        ],
      },

      renewalChecks: {
        title: "Renewal checks that prevent claim disputes",
        bullets: [
          "Permit/fitness validity around renewal period (avoid gaps)",
          "Endorsements/IMT reflect real operations (loading/unloading, route exposure)",
          "Avoid coverage gaps—expiry date discipline and break-in rules (case-dependent)",
          "Fleet discipline: consistent disclosures across vehicles (as applicable)",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline (why lorry claims get delayed)",
        intro:
          "For NH-belt vehicles, claims are timeline-and-document driven. A clean incident sequence + early reporting reduces disputes more than any add-on.",
        bullets: [
          "Early reporting and first-day photos/videos (as applicable) before repairs",
          "Clear incident timeline (what happened first/second/third)",
          "Keep permit/fitness/RC copies ready (as applicable)",
          "Endorsements must match exposure (loading/unloading/site use) to avoid disputes",
        ],
      },

      pricingFactors: {
        title: "What affects premium/acceptance (without prices)",
        bullets: [
          "Vehicle type, age, declared value/IDV, and claim history",
          "Route exposure (NH corridors vs local routes) and usage disclosures",
          "Permit/fitness status and compliance documentation (as applicable)",
          "Add-ons/endorsements selected based on real operations",
        ],
      },

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

      localLanding: {
        primaryLocations: ["red-hills", "sholavaram", "madhavaram", "madhavaram-truck-terminal", "nh-manali-road"],
        phrases: [
          "lorry insurance red hills",
          "heavy vehicle insurance red hills toll",
          "lorry insurance madhavaram truck terminal",
          "nh belt lorry insurance consultant",
          "sholavaram lorry insurance renewal support",
        ],
      },

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
        { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/"), desc: "Pickup/goods-auto/goods carriers: permit/route discipline + claim-ready steps." },
        { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/"), desc: "Business-use vehicle cover: usage clarity + endorsement fit." },
        { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/"), desc: "Trailer exposure: attachment disclosures + third-party risk." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps, documents, timeline discipline to reduce delays." },
        { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/"), desc: "Transit proof: invoice/packing/dispatch-receipt trail." },
      ],
    },

    "commercial-vehicle-insurance": {
      seoTitle: "Commercial Vehicle Insurance Guidance – Chennai Outskirts (NH + Industrial Belts)",
      seoDesc:
        "Commercial vehicle insurance guidance for business-use vehicles across Sholavaram, Red Hills, Madhavaram and Chennai outskirts. Focus: usage clarity, endorsements, third-party exposure and claims readiness.",
      heroH1: "Commercial Vehicle Insurance (Usage + Wording Clarity)",
      heroP:
        "Commercial-use vehicles face higher liability exposure. We guide policy wording alignment to real usage and practical documentation discipline.",

      coverageSummary: [
        "Commercial motor is highly sensitive to usage disclosures and endorsements. Many disputes happen because the proposal wording does not match real operations.",
        "This page helps you align usage, endorsements, and documentation discipline so renewals and claims don’t get stuck later."
      ],

      whoFor: [
        "Businesses operating commercial-use vehicles",
        "Owners renewing without verifying usage/endorsement fit",
        "Operators needing claim-ready document discipline",
      ],

      standardModules: {
        title: "What commercial vehicle insurance typically includes",
        bullets: [
          "Third-party liability + basic statutory compliance",
          "Own damage cover (if applicable) based on policy type",
          "Endorsements/IMT depending on business operations",
          "Optional add-ons (case-dependent)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Write a one-line usage summary (what the vehicle does daily)",
          "Keep previous policy + endorsement copies ready",
          "Confirm whether special usage needs endorsements (as applicable)",
          "Avoid gaps: keep expiry date discipline",
        ],
      },

      renewalChecks: {
        title: "Renewal checks that prevent disputes",
        bullets: [
          "Usage and endorsements match real operations",
          "No gaps between policies; follow insurer break-in rules (case-dependent)",
          "Document readiness: policy copy + endorsement file maintained",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline (what matters most)",
        intro:
          "Commercial claims are rarely about forms alone. They are about usage fit + evidence quality + reporting timeline.",
        bullets: [
          "Early reporting + clean incident timeline",
          "Photos/videos before repairs (as applicable)",
          "Keep endorsement record accessible",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle type, age, IDV, and claim history",
          "Declared usage/operations and third-party exposure",
          "Endorsements selected and compliance status (as applicable)",
        ],
      },

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

      localLanding: {
        primaryLocations: ["red-hills", "sholavaram", "madhavaram", "ambattur", "manali"],
        phrases: [
          "commercial vehicle insurance red hills",
          "company vehicle insurance madhavaram",
          "business vehicle insurance sholavaram",
          "commercial motor insurance chennai outskirts",
        ],
      },

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
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "NH-belt lorry exposures: permits/fitness/endorsements." },
        { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/"), desc: "Permit/route discipline for goods carriers." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Documents + timeline steps that reduce delays." },
      ],
    },

    "goods-carrying-vehicle-insurance": {
      seoTitle: "Goods Carrying Vehicle Insurance Guidance – Chennai Outskirts Logistics Belts",
      seoDesc:
        "Claim-ready guidance for pickup/goods-auto/goods carrying vehicles in Sholavaram, Red Hills, Madhavaram and NH corridors. Focus: permit/route clarity, third-party exposure and documentation discipline.",
      heroH1: "Goods Carrying Vehicle Insurance (Permit + Route Discipline)",
      heroP:
        "Goods vehicles face route/permit checks and third-party exposure. We guide coverage clarity and simple habits that protect claims later.",

      coverageSummary: [
        "Goods carriers are frequently scrutinized for permit/route validity and incident timeline quality.",
        "This page focuses on route/usage discipline, proof readiness, and renewals without gaps."
      ],

      whoFor: [
        "Pickup / goods-auto / small goods carriers",
        "Local logistics and delivery operators",
        "Owners renewing without route/permit clarity",
      ],

      standardModules: {
        title: "What goods carrying vehicle policies typically include",
        bullets: [
          "Third-party liability + statutory elements",
          "Own damage cover (if applicable) and operation-fit endorsements",
          "Route/usage-related disclosures (case-dependent)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Confirm route/usage and keep it consistent with policy wording",
          "Keep permit/fitness copies ready (as applicable)",
          "Maintain a simple incident reporting checklist for drivers (as applicable)",
        ],
      },

      renewalChecks: {
        title: "Renewal checks that prevent friction",
        bullets: [
          "Permit/fitness validity around the renewal date (as applicable)",
          "Disclosure fit: route/usage and endorsements aligned",
          "Avoid gaps; follow break-in/inspection rules (case-dependent)",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline for goods carriers",
        intro:
          "Goods carriers often lose time in claims due to route/permit questions and incomplete incident narratives.",
        bullets: [
          "Report early; keep a clean incident timeline",
          "Capture first-day photos/videos (as applicable)",
          "Keep permit/fitness copies accessible (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle type, age, IDV, route exposure and claim history",
          "Compliance status (permit/fitness) where applicable",
          "Endorsements/usage disclosures fit",
        ],
      },

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

      localLanding: {
        primaryLocations: ["madhavaram", "madhavaram-truck-terminal", "red-hills", "sholavaram", "karanodai"],
        phrases: [
          "goods carrying vehicle insurance madhavaram",
          "goods auto insurance red hills",
          "pickup insurance sholavaram",
          "logistics vehicle insurance madhavaram truck terminal",
        ],
      },

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
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "Lorry claims: permits/fitness/endorsement fit." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "First steps + documents checklist." },
        { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/"), desc: "Transit proof and invoice/packing discipline." },
      ],
    },

    "trailer-insurance": {
      seoTitle: "Trailer Insurance Guidance – NH Corridors (Chennai Outskirts)",
      seoDesc:
        "Trailer insurance guidance for operators in NH belts around Sholavaram, Red Hills and Madhavaram. Focus: attachment usage clarity, third-party exposure, endorsements and claim-ready documentation.",
      heroH1: "Trailer Insurance (Attachment + Exposure Clarity)",
      heroP:
        "Trailers increase exposure during turns, loading/unloading and public movement. We guide wording alignment and practical claim-ready documentation.",

      coverageSummary: [
        "Trailer incidents tend to become third-party heavy and are scrutinized for disclosures and endorsement fit.",
        "This page focuses on attachment/usage clarity, evidence readiness and reporting discipline."
      ],

      whoFor: [
        "Trailer owners/operators",
        "Fleet operators using trailers across NH corridors",
        "Operators renewing without attachment/endorsement clarity",
      ],

      standardModules: {
        title: "What trailer insurance typically requires clarity on",
        bullets: [
          "Trailer + towing operations disclosure (as applicable)",
          "Third-party liability exposure awareness",
          "Endorsements/IMT alignment to real operations",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Confirm trailer usage pattern (routes, loading/unloading points as applicable)",
          "Keep endorsement record and policy copies organized",
          "Ensure incident reporting discipline is clear to drivers/operators (as applicable)",
        ],
      },

      renewalChecks: {
        title: "Renewal checks for trailer operations",
        bullets: [
          "Endorsement/IMT fit for attachment operations",
          "No coverage gaps; expiry date discipline",
          "Incident reporting readiness for third-party heavy events",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline for trailer incidents",
        intro:
          "Trailer events often escalate due to third-party exposure. Evidence quality and early reporting matter immediately.",
        bullets: [
          "Capture photos/videos early (as applicable)",
          "Maintain a clean incident timeline",
          "Keep endorsement/wording copies ready for reference",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Trailer type, operations, route exposure and claim history",
          "Endorsement/IMT fit for attachment/usage (as applicable)",
          "Third-party risk environment (NH belts, loading bays, public access)",
        ],
      },

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

      localLanding: {
        primaryLocations: ["red-hills", "madhavaram-truck-terminal", "sholavaram", "nh-manali-road"],
        phrases: [
          "trailer insurance red hills",
          "trailer policy madhavaram truck terminal",
          "highway trailer insurance consultant",
          "sholavaram trailer insurance renewal",
        ],
      },

      areaRealityTitle: "Trailer claim reality in highway corridors",
      areaRealityText:
        "Trailer-related incidents escalate quickly due to third-party exposure. Clean reporting + correct disclosures reduce avoidable delays.",

      areaSignals: [
        "Red Hills trailer insurance guidance",
        "Sholavaram trailer policy support",
        "Chennai outskirts highway trailer insurance",
      ],

      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "Lorry + NH exposure discipline." },
        { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/"), desc: "Fleet systems: expiry discipline, incident reporting SOP." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow guidance." },
      ],
    },

    "fleet-insurance": {
      seoTitle: "Fleet Insurance Guidance – Red Hills, Madhavaram & Chennai NH Belts",
      seoDesc:
        "Fleet insurance guidance for transport operators around Red Hills Toll belt, Madhavaram logistics, Sholavaram and NH corridors. Focus: renewal discipline, centralized documentation, incident SOP and claim workflow readiness.",
      heroH1: "Fleet Insurance (Discipline + Claim Workflow Readiness)",
      heroP:
        "Fleet performance depends on process: document tracking, renewal discipline, driver reporting SOP and consistent disclosures across vehicles.",

      // This is the most important upgrade for “fleet-insurance redhills”
      coverageSummary: [
        "Fleet insurance becomes valuable when your operational discipline is consistent: renewals on time, documents centralized, and incident reporting standardized across drivers.",
        "In Red Hills / Madhavaram logistics belts, claims often involve third-party exposure and timeline scrutiny. A fleet SOP (documents + reporting) reduces repeated delays across vehicles."
      ],

      whoFor: [
        "Fleet operators with multiple vehicles (2+ vehicles)",
        "Logistics businesses running corridor routes (NH + industrial belts)",
        "Owners needing predictable renewals + claim-ready documentation discipline",
      ],

      standardModules: {
        title: "What fleet insurance typically needs (coverage + structure)",
        bullets: [
          "Policy structure may be individual policies or structured fleet arrangements (insurer-dependent)",
          "Third-party liability across vehicles + own-damage where applicable",
          "Endorsements/IMT fit across vehicle types and operations (as applicable)",
          "Driver/vehicle compliance discipline (permit/fitness as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or restructure a fleet policy",
        bullets: [
          "Prepare vehicle list + usage summary per vehicle (route/operations)",
          "Centralize policy copies + endorsement record in one folder",
          "Create expiry tracker (permit/fitness/insurance dates as applicable)",
          "Define incident SOP for drivers: who to call, what photos to take, what timeline to record",
        ],
      },

      renewalChecks: {
        title: "Fleet renewal checks (the common failure points)",
        bullets: [
          "Expiry discipline: avoid gaps across multiple vehicles",
          "Consistency: disclosures and endorsements match real usage per vehicle",
          "Permit/fitness alignment for commercial units (as applicable)",
          "NCB/claim history alignment and correction (case-dependent)",
        ],
      },

      claimDiscipline: {
        title: "Fleet claim discipline (what improves outcomes)",
        intro:
          "Fleet claims fail due to inconsistency: different drivers report differently, documents are missing, and timelines become unclear. Standardizing the process is the real advantage.",
        bullets: [
          "Standard incident reporting checklist for all drivers (as applicable)",
          "Centralized document folder per vehicle (policy + endorsements + RC etc.)",
          "Early reporting + first-day photos/videos before repairs (as applicable)",
          "Consistent usage disclosures across vehicles to avoid disputes",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance (without prices)",
        bullets: [
          "Fleet composition (vehicle types), route exposure, and claim history",
          "Operational discipline and documentation readiness (insurer confidence factor)",
          "Compliance status: permits/fitness and record quality (as applicable)",
          "Endorsement fit across operations (loading/unloading/site exposure as applicable)",
        ],
      },

      localFit:
        "In Red Hills toll belt and Madhavaram logistics pockets, claims are often third-party heavy and timeline-sensitive. Fleet discipline reduces repeated friction points.",

      keyCoverFocus: [
        "Centralized fleet documentation + renewal discipline",
        "Incident reporting SOP (drivers + office workflow)",
        "Third-party exposure readiness in NH belts",
        "Consistency in disclosures and endorsements across vehicles",
      ],

      claimDocs: [
        "Vehicle list + policy copies + endorsements (centralized)",
        "Expiry tracker (insurance/permit/fitness where applicable)",
        "Driver reporting checklist + incident timeline template (as applicable)",
        "Repair estimates + first-day photos/videos (as applicable)",
      ],

      commonMistakes: [
        "No centralized document/expiry tracking",
        "Drivers reporting differently → inconsistent incident narrative",
        "Vehicles operating differently than declared in policy",
        "Late reporting because no SOP exists",
      ],

      alsoKnownAs: ["Fleet policy", "Multiple vehicle insurance", "Transport fleet cover"],

      whatCanGoWrong: [
        "Inconsistent reporting across drivers creates timeline disputes",
        "Expiry lapses create coverage gaps and claim friction",
        "Operational mismatch vs declared usage triggers disputes",
      ],

      // Make the query match explicit
      localLanding: {
        primaryLocations: ["red-hills", "madhavaram", "madhavaram-truck-terminal", "sholavaram", "karanodai"],
        phrases: [
          "fleet insurance red hills",
          "transport fleet insurance red hills toll",
          "fleet insurance madhavaram truck terminal",
          "fleet policy sholavaram",
          "nh belt fleet insurance consultant",
        ],
      },

      areaRealityTitle: "Fleet claims reality around Red Hills + Madhavaram belts",
      areaRealityText:
        "Fleets win on process: expiry discipline, incident SOP, and organized documents. Small gaps repeat across vehicles and become costly delays.",

      areaSignals: [
        "Red Hills fleet insurance guidance",
        "Madhavaram fleet insurance support",
        "Sholavaram fleet policy consultant",
        "Chennai NH belt transport fleet insurance",
      ],

      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "NH-belt lorry exposures + compliance discipline." },
        { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/"), desc: "Trailer third-party exposure + endorsement fit." },
        { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/"), desc: "Usage + wording alignment for business vehicles." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow, documents checklist, timeline discipline." },
      ],
    },

    "tip-truck-insurance": {
      seoTitle: "Tip Truck / Tipper Insurance Guidance – Chennai Outskirts (Worksites + NH Belts)",
      seoDesc:
        "Tipper insurance guidance for operators working in worksites and NH belts around Sholavaram, Red Hills and Chennai outskirts. Focus: usage clarity, third-party exposure and claim-ready documentation.",
      heroH1: "Tip Truck / Tipper Insurance (Worksite Exposure Clarity)",
      heroP:
        "Tipper operations involve worksite exposure and public movement. We guide coverage clarity and documentation discipline to reduce claim disputes.",

      coverageSummary: [
        "Tipper claims often involve site exposure (worksite conditions) plus public road movement. The common dispute is usage mismatch and weak incident records.",
        "This page helps align site exposure disclosures and reporting discipline."
      ],

      whoFor: [
        "Tip truck / tipper owners",
        "Contractors using tippers for site movement (as applicable)",
        "Operators renewing without worksite exposure clarity",
      ],

      standardModules: {
        title: "Typical tipper risk exposures (what should be clarified)",
        bullets: [
          "Worksite exposure vs road movement (disclosure fit)",
          "Third-party risk around sites and public zones",
          "Endorsements/IMT alignment (case-dependent)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Define usage: site-only vs mixed route operations",
          "Confirm endorsements align to real operations",
          "Maintain a simple incident reporting discipline (photos + timeline)",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline for worksite incidents",
        intro:
          "Worksite claims become evidence and disclosure discussions quickly. Clear records and early reporting reduce avoidable friction.",
        bullets: [
          "First-day photos/videos and clean incident timeline (as applicable)",
          "Early reporting to avoid timeline disputes",
          "Keep policy + endorsement copy easily accessible",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle type/age, usage disclosures, claim history",
          "Worksite exposure and route environment",
          "Endorsement fit (case-dependent)",
        ],
      },

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

      localLanding: {
        primaryLocations: ["red-hills", "sholavaram", "thiruvallur-sipcot-outskirts", "thirumazhisai"],
        phrases: [
          "tipper insurance red hills",
          "tip truck insurance sholavaram",
          "worksite tipper insurance chennai outskirts",
        ],
      },

      areaRealityTitle: "Tipper insurance reality near worksites",
      areaRealityText:
        "Worksite incidents need clean reporting and clear usage disclosure. Simple discipline reduces avoidable friction.",

      areaSignals: [
        "Sholavaram tipper insurance guidance",
        "Red Hills tip truck insurance support",
        "Chennai outskirts tipper policy consultant",
      ],

      internalLinks: [
        { label: "Construction & Contractor Insurance", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "CAR/WC: worksite + workforce exposures." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow steps and evidence discipline." },
      ],
    },
  },

  // =====================================================
  // INDUSTRIAL & PROPERTY
  // /en/services/industrial/{service}/
  // =====================================================
  "industrial": {
    "warehouse-insurance": {
      seoTitle: "Warehouse / Godown Insurance Guidance – Madhavaram, Manali & Chennai Industrial Belts",
      seoDesc:
        "Warehouse insurance guidance for Sholavaram, Madhavaram, Manali/Ennore and nearby industrial belts. Focus: fire load, stock proof discipline, valuation clarity and burglary conditions.",
      heroH1: "Warehouse / Godown Insurance (Proof + Valuation Discipline)",
      heroP:
        "Warehouse claims succeed when valuation and stock proof are clean. We guide declarations, documentation habits and policy alignment to real storage risk.",

      coverageSummary: [
        "Warehouse insurance is proof-driven. When a loss happens, the settlement depends on valuation basis, invoice/register discipline, and whether the declared stock matches reality.",
        "In Madhavaram/Manali belts, the most common claim friction points are underinsurance (average clause risk), missing stock proof trail, and unreported changes in storage pattern."
      ],

      whoFor: [
        "Warehouse and godown owners",
        "Businesses storing fluctuating stock",
        "Operators in industrial belts with higher fire/burglary exposure",
      ],

      standardModules: {
        title: "Warehouse coverage modules (typical structure)",
        bullets: [
          "Fire & allied perils (building/stock/contents as applicable)",
          "Burglary/theft (subject to conditions and security requirements)",
          "Optional: stock declaration policy for fluctuating stock (case-dependent)",
          "Optional: business interruption / loss of profit (case-dependent)",
          "Optional: public liability if visitors/vendor movement exists (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Prepare a simple stock/assets list + valuation basis (invoice/valuation logic)",
          "Keep 3–6 invoice samples and register proof ready (as applicable)",
          "Take premises photos: storage layout + safety setup (as applicable)",
          "Confirm stored goods type and update changes (avoid mismatch disputes)",
        ],
      },

      renewalChecks: {
        title: "Renewal checks that protect warehouse claims",
        bullets: [
          "Sum insured matches current reality (avoid underinsurance/average clause reduction)",
          "Stock proof trail exists (invoice/register discipline) for expected claim scrutiny",
          "Burglary/security conditions understood and maintained (as applicable)",
          "Changes in layout/stock type are declared and updated",
        ],
      },

      claimDiscipline: {
        title: "Warehouse claim discipline (what prevents reductions)",
        intro:
          "Warehouse claims are valuation + evidence discussions. Clean stock proof trail and consistent declarations reduce disputes.",
        bullets: [
          "Maintain invoice/register proof and periodic records (as applicable)",
          "Keep photo record of storage layout/safety setup (as applicable)",
          "Report early; maintain clean incident timeline and preserve evidence",
          "Avoid undervaluation to save premium (settlement reductions happen later)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Stock type, fire load, and sum insured/valuation basis",
          "Location risk indicators (warehouse density, electrical load, public access)",
          "Security and safety measures (as applicable)",
          "Claim history and documentation readiness",
        ],
      },

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

      localLanding: {
        primaryLocations: ["madhavaram", "manali-industrial-estate", "manali", "red-hills", "sholavaram"],
        phrases: [
          "warehouse insurance madhavaram",
          "godown insurance manali industrial estate",
          "warehouse insurance red hills",
          "sholavaram godown insurance consultant",
        ],
      },

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
        { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/"), desc: "Property fire/burglary: proof discipline + conditions awareness." },
        { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/"), desc: "Fluctuating stock: declaration rhythm + evidence." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Timeline + documents checklist for claim momentum." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Visitor/vendor movement and third-party exposure." },
      ],
    },

    "factory-insurance": {
      seoTitle: "Factory Insurance Guidance – Chennai Outskirts Industrial Belts",
      seoDesc:
        "Factory insurance guidance for small units and industrial belts around Sholavaram, Madhavaram, Manali/Ennore. Focus: fire load, machinery/stock valuation, and claim-ready proof discipline.",
      heroH1: "Factory Insurance (Fire Load + Valuation Clarity)",
      heroP:
        "Factory risks combine electrical fire load, stock, and machinery exposure. We guide valuation and proof discipline so claims don’t get reduced later.",

      coverageSummary: [
        "Factory insurance must match your actual operations—machinery, stock, electrical load, and workflow changes.",
        "Most claim reductions happen due to undervaluation and lack of proof trail for machinery/stock."
      ],

      standardModules: {
        title: "Factory coverage modules (typical)",
        bullets: [
          "Fire & allied perils for building/stock/machinery (as applicable)",
          "Optional: machinery breakdown (case-dependent)",
          "Optional: business interruption / loss of profit (case-dependent)",
          "Optional: liability if public/vendor movement exists (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Prepare asset/machinery list and valuation basis",
          "Maintain stock proof (invoices/register) if stock exists",
          "Photograph electrical panels/safety setup (as applicable)",
          "Update policy if operations/layout change",
        ],
      },

      renewalChecks: {
        title: "Renewal checks that prevent settlement reductions",
        bullets: [
          "Valuation is realistic (avoid underinsurance penalties)",
          "Machinery list and major changes updated",
          "Safety conditions understood (as applicable)",
        ],
      },

      claimDiscipline: {
        title: "Factory claim discipline",
        intro:
          "Factory claims become valuation + declaration discussions. Clean proof trail protects settlement.",
        bullets: [
          "Avoid undervaluation to save premium",
          "Keep machinery/asset records and proof updated",
          "Maintain incident timeline + first-day photo evidence (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Industry type, fire load, electrical risk indicators",
          "Sum insured and valuation basis",
          "Safety measures and loss history",
        ],
      },

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
      localLanding: {
        primaryLocations: ["manali-industrial-estate", "ambattur", "madhavaram", "sriperumbudur-sipcot"],
        phrases: [
          "factory insurance madhavaram",
          "industrial unit insurance ambattur",
          "factory insurance manali industrial estate",
          "factory insurance sriperumbudur sipcot",
        ],
      },
      areaRealityTitle: "Factory claim reality in industrial corridors",
      areaRealityText:
        "Most disputes come from valuation and declarations. Keeping clean asset/stock proof reduces avoidable delays.",
      areaSignals: [
        "Sholavaram factory insurance guidance",
        "Madhavaram industrial unit insurance support",
        "Chennai outskirts factory insurance consultant",
      ],
      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Storage risk: stock proof discipline + valuation." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow and document readiness." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for visitor/vendor movement." },
      ],
    },

    "fire-burglary-insurance": {
      seoTitle: "Fire & Burglary Insurance Guidance – Warehouses, Shops, Offices (Chennai Outskirts)",
      seoDesc:
        "Commercial property guidance for fire/burglary in Sholavaram, Red Hills and Madhavaram belts. Focus: sum insured, stock proof, safety/security conditions and claim-ready documentation.",
      heroH1: "Fire & Burglary (Commercial Property) — Guidance",
      heroP:
        "Fire/burglary claims are proof-driven. We guide valuation, stock proof discipline and condition-awareness so claims don’t get stuck later.",

      coverageSummary: [
        "Fire and burglary policies fail at claim time when valuation/proof is weak or conditions are not met (as applicable).",
        "This page explains sum insured logic, proof discipline, and condition awareness for better claim readiness."
      ],

      standardModules: {
        title: "Typical modules (fire/burglary property)",
        bullets: [
          "Fire & allied perils for building/contents/stock (as applicable)",
          "Burglary/theft subject to security conditions (as applicable)",
          "Optional add-ons depending on business (case-dependent)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Choose realistic sum insured (avoid underinsurance/average clause risk)",
          "Keep stock proof/invoice samples and register discipline (as applicable)",
          "Understand burglary security conditions and maintain them (as applicable)",
          "Photograph premises layout and safety setup (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Sum insured and valuation basis",
          "Fire load indicators and electrical safety factors",
          "Security measures for burglary cover (as applicable)",
          "Claim history and proof readiness",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline (property claims)",
        intro:
          "Property claims become valuation + proof discussions. Proof trail and condition compliance decide speed and settlement.",
        bullets: [
          "Maintain invoices/registers and periodic records (as applicable)",
          "Keep premises photos (layout, safety/security setup as applicable)",
          "Report early; preserve evidence and timeline clarity",
        ],
      },

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
      localLanding: {
        primaryLocations: ["red-hills", "madhavaram", "kolathur-commercial-pockets", "perambur", "sholavaram"],
        phrases: [
          "fire insurance red hills",
          "burglary insurance madhavaram",
          "shop fire burglary insurance kolathur",
          "office fire insurance perambur",
        ],
      },
      areaRealityTitle: "Fire/burglary claim reality in industrial belts",
      areaRealityText:
        "Most disputes come from valuation and proof. Keeping invoices/registers and basic premises photos (as applicable) improves claim acceptance.",
      areaSignals: [
        "Sholavaram fire insurance guidance",
        "Madhavaram burglary insurance support",
        "Red Hills godown fire insurance",
      ],
      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Warehouse proof discipline and valuation." },
        { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/"), desc: "MSME modules + valuation discipline." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps + evidence discipline." },
      ],
    },

    "stock-declaration-insurance": {
      seoTitle: "Stock Declaration Policies Guidance – Warehouses & Businesses (Chennai Outskirts)",
      seoDesc:
        "Stock declaration policy guidance for warehouses and businesses in industrial belts. Focus: stock proof discipline, declaration habits, valuation logic and claim acceptance readiness.",
      heroH1: "Stock Declaration Policies (Proof Discipline Matters)",
      heroP:
        "When stock fluctuates, declarations and proof discipline decide claim outcomes. We guide how to keep declarations clean and defensible.",

      coverageSummary: [
        "Stock declaration policies are evidence-driven: month-wise declarations must match proof trail (invoices/registers).",
        "Most disputes come from mismatch between declared stock and actual evidence. This page explains the habit system that prevents that."
      ],

      standardModules: {
        title: "What declaration policies require",
        bullets: [
          "Regular declaration rhythm (monthly/periodic as applicable)",
          "Invoice/register proof discipline aligned to declarations",
          "Clarity on inclusions/exclusions (goods type and valuation basis)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or adopt declaration structure",
        bullets: [
          "Confirm your month-wise stock tracking system exists (register/invoices)",
          "Decide valuation method (invoice/market basis) consistently",
          "Prepare photos/records to support storage reality (as applicable)",
        ],
      },

      claimDiscipline: {
        title: "Declaration claim discipline (the make-or-break factors)",
        intro:
          "A declaration policy is only as strong as its proof discipline. If records do not match, settlement disputes happen.",
        bullets: [
          "Maintain month-wise evidence trail",
          "Avoid under-declaration to save premium (settlement reduction risk)",
          "Keep declaration history accessible",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Stock volatility and maximum exposure levels",
          "Quality of stock accounting/proof discipline",
          "Goods type and storage risk indicators",
        ],
      },

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
      localLanding: {
        primaryLocations: ["madhavaram", "manali", "red-hills", "sholavaram"],
        phrases: [
          "stock declaration policy madhavaram",
          "floating stock policy manali",
          "warehouse stock declaration red hills",
        ],
      },
      areaRealityTitle: "Stock declaration reality in warehouse corridors",
      areaRealityText:
        "Stock claims are evidence-based. A clean month-wise proof trail and consistent declarations reduce settlement disputes.",
      areaSignals: [
        "Madhavaram stock declaration policy guidance",
        "Chennai outskirts warehouse stock policy support",
        "Sholavaram stock insurance consultant",
      ],
      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Warehouse stock proof discipline + valuation." },
        { label: "Fire & Burglary", href: EN("/services/industrial/fire-burglary-insurance/"), desc: "Property cover and condition awareness." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim process guidance for evidence readiness." },
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
      heroH1: "Contractor All Risk (CAR) — Worksite Reality)",
      heroP:
        "CAR works when site details, project period and reporting discipline are aligned. We guide practical clarity so claims don’t fail on avoidable gaps.",

      coverageSummary: [
        "CAR is highly sensitive to project period, scope, and documentation. Claims fail when project extensions and site exposures are not aligned with policy period.",
        "This page clarifies what to disclose, what to record, and how to keep claims defensible."
      ],

      standardModules: {
        title: "CAR policy modules (typical)",
        bullets: [
          "Project works cover during active period (subject to terms)",
          "Third-party exposure awareness near public zones (case-dependent)",
          "Extensions/endorsements when project timeline changes (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy / start the project",
        bullets: [
          "Project start/end dates and realistic timeline",
          "Scope clarity: what work is included",
          "Site photos + basic notes system for proof (as applicable)",
          "Plan how incidents will be reported on day-1",
        ],
      },

      claimDiscipline: {
        title: "CAR claim discipline",
        intro:
          "CAR claims are judged on timeline clarity and records. Late reporting and missing site notes are the most avoidable failure points.",
        bullets: [
          "Maintain site notes/photos and update on scope changes",
          "Report early and keep clean incident sequence",
          "Ensure project period extensions are updated (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Project value, duration, and site exposure factors",
          "Scope complexity and third-party environment",
          "Loss history and documentation discipline",
        ],
      },

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
      localLanding: {
        primaryLocations: ["thirumazhisai", "sriperumbudur-sipcot", "oragadam-outskirts", "poonamallee-bypass"],
        phrases: [
          "contractor all risk insurance sriperumbudur",
          "car insurance oragadam outskirts worksite",
          "construction risk insurance poonamallee bypass",
        ],
      },
      areaRealityTitle: "CAR claim reality in Chennai outskirts worksites",
      areaRealityText:
        "Site claims get judged on timeline clarity and records. Keeping basic site notes and early reporting prevents avoidable delays.",
      areaSignals: [
        "Chennai outskirts contractor all risk insurance",
        "Sholavaram CAR guidance",
        "Red Hills construction insurance support",
      ],
      internalLinks: [
        { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/"), desc: "Workforce exposure: classification + payroll discipline." },
        { label: "CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "Worksite + workforce combined risk." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim-ready evidence discipline." },
      ],
    },

    "workmen-compensation": {
      seoTitle: "Workmen Compensation (WC) Guidance – Contractors & Businesses (Chennai Outskirts)",
      seoDesc:
        "Workmen compensation guidance for contractors and businesses. Focus: worker classification/payroll discipline, reporting timelines, and proof habits that reduce claim disputes.",
      heroH1: "Workmen Compensation (WC) — Payroll + Classification Discipline",
      heroP:
        "WC claims often fail due to classification and payroll mismatches. We guide practical discipline that prevents avoidable disputes.",

      coverageSummary: [
        "WC is compliance-sensitive: worker classification and wage basis must match records.",
        "Claims fail when payroll records are inconsistent or reporting is late."
      ],

      standardModules: {
        title: "WC cover basics (typical)",
        bullets: [
          "Work injury compensation as per policy structure and statutory context (insurer terms apply)",
          "Classification of worker categories (as applicable)",
          "Wage/payroll record alignment (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Confirm worker categories and nature of work",
          "Maintain wage/payroll proof system (as applicable)",
          "Define incident reporting workflow for supervisors",
        ],
      },

      claimDiscipline: {
        title: "WC claim discipline (why disputes happen)",
        intro:
          "Most disputes come from classification mismatch and missing payroll proof, not from lack of coverage intent.",
        bullets: [
          "Maintain consistent classification and wage records",
          "Report early; keep incident facts consistent",
          "Preserve supporting documents (case-dependent)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Worker type/classification and payroll basis",
          "Nature of site/work exposure",
          "Loss history and documentation quality",
        ],
      },

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
      localLanding: {
        primaryLocations: ["red-hills", "thirumazhisai", "sriperumbudur-sipcot", "ambattur-industrial-estate"],
        phrases: [
          "workmen compensation red hills",
          "wc insurance sriperumbudur sipcot",
          "contractor wc insurance thirumazhisai",
        ],
      },
      areaRealityTitle: "WC reality in contractor-heavy belts",
      areaRealityText:
        "WC outcomes depend on record discipline. Clean payroll/classification notes and early reporting reduce disputes.",
      areaSignals: [
        "Red Hills workmen compensation support",
        "Sholavaram WC policy guidance",
        "Chennai outskirts contractor WC insurance",
      ],
      internalLinks: [
        { label: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/"), desc: "Worksite risk: period/scope alignment." },
        { label: "CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "Combined discipline for project + workforce." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim timeline and evidence readiness." },
      ],
    },

    "contractor-car-wc-insurance": {
      seoTitle: "Contractor Insurance (CAR/WC) Guidance – Chennai Outskirts",
      seoDesc:
        "Combined CAR/WC guidance for contractors in Chennai outskirts. Focus: worksite risk, workforce exposure, documentation discipline and claim timeline readiness.",
      heroH1: "Contractor CAR/WC (Worksite + Workforce Reality)",
      heroP:
        "Contractor claims fail on avoidable gaps: timeline mismatch, payroll/classification issues, and late reporting. We guide claim-ready discipline.",

      coverageSummary: [
        "Contractors face two big risk buckets: worksite (CAR) + workforce (WC). Claims fail when these are managed separately without shared discipline.",
        "This page connects project period/scope discipline with payroll/classification discipline for better outcomes."
      ],

      standardModules: {
        title: "What the combined approach clarifies",
        bullets: [
          "CAR: project period/scope/site exposure clarity",
          "WC: workforce classification and wage record discipline",
          "Incident reporting workflow for both worksite and injury events",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Project dates + scope summary",
          "Workforce list + classification approach (as applicable)",
          "Basic reporting workflow: who reports what and when",
          "Site photos/notes system (as applicable)",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline (combined risks)",
        intro:
          "Contractor outcomes depend on early reporting and clear records—both for site losses and workforce events.",
        bullets: [
          "Update extensions and scope changes (CAR) promptly",
          "Maintain payroll/classification discipline (WC) consistently",
          "Capture evidence and keep clean timeline on day-1 (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Project value/duration and site exposure factors",
          "Workforce classification and payroll basis (as applicable)",
          "Loss history and documentation readiness",
        ],
      },

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
      localLanding: {
        primaryLocations: ["poonamallee-bypass", "thirumazhisai", "sriperumbudur-sipcot", "oragadam-outskirts"],
        phrases: [
          "contractor insurance sriperumbudur",
          "car wc insurance oragadam outskirts",
          "contractor car wc poonamallee bypass",
        ],
      },
      areaRealityTitle: "Contractor insurance reality in Chennai outskirts worksites",
      areaRealityText:
        "Site claims get judged by timeline and records. Keeping basic site notes, workforce records (as applicable) and early reporting prevents delays.",
      areaSignals: [
        "Sholavaram contractor insurance guidance",
        "Red Hills contractor CAR WC support",
        "Chennai outskirts contractor policy consultant",
      ],
      internalLinks: [
        { label: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/"), desc: "Worksite period and scope discipline." },
        { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/"), desc: "Payroll/classification discipline for WC." },
        { label: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/"), desc: "High-value equipment exposure." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure at sites." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow guidance." },
      ],
    },
  },

  // =====================================================
  // BUSINESS & MSME
  // /en/services/business-msme/{service}/
  // =====================================================
  "business-msme": {
    "shop-msme-insurance": {
      seoTitle: "Shop & MSME Package Insurance Guidance – Sholavaram, Red Hills & Chennai North",
      seoDesc:
        "Claim-first guidance for shops, offices and MSMEs across Sholavaram, Red Hills, Madhavaram and Chennai. Focus: wording, valuation and proof discipline to reduce claim delays.",
      heroH1: "Shop & MSME Package Insurance (Claim-first Guidance)",
      heroP:
        "For shops, offices and MSMEs operating in NH-facing and industrial belts—coverage clarity that matches real operations, with documentation habits that protect claims later.",

      coverageSummary: [
        "MSME policies fail at claim time when sum insured is unrealistic, valuation basis is unclear, or proof trail is missing.",
        "This page explains standard modules, renewal checks, and the documentation habits that reduce average-clause reductions and delays."
      ],

      whoFor: [
        "Local shops, offices, showrooms and service businesses",
        "Small units with stock + electrical fire load exposure",
        "Owners renewing without clarity on sum insured and inclusions",
      ],

      standardModules: {
        title: "Standard MSME coverage modules (typical structure)",
        bullets: [
          "Fire & allied perils (building/contents/stock as applicable)",
          "Burglary/theft (subject to security conditions)",
          "Money in transit / cash in safe (optional; business-dependent)",
          "Public liability (optional but important for visitor-facing premises)",
          "Fidelity / employee dishonesty (optional; case-dependent)",
          "Plate glass / signboard and other add-ons (case-dependent)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew (simple checklist)",
        bullets: [
          "Confirm correct business activity description (avoid wording mismatch)",
          "Create a basic stock/assets list with approximate values",
          "Keep 3–6 invoices or proof samples (as applicable) for valuation support",
          "Take a few photos of premises, storage layout and safety setup (as applicable)",
          "Decide whether visitor/public exposure requires public liability add-on",
        ],
      },

      renewalChecks: {
        title: "Renewal checks that protect MSME claims",
        bullets: [
          "Sum insured reflects real stock/assets (avoid underinsurance/average clause reduction)",
          "Stock proof discipline exists (invoices/registers/photos as applicable)",
          "Security/safety conditions understood and maintained (as applicable)",
          "Operations changed? Update policy wording (avoid activity mismatch disputes)",
        ],
      },

      claimDiscipline: {
        title: "MSME claim discipline (why small businesses lose claims)",
        intro:
          "MSME claims usually fail due to valuation/proof gaps, not because coverage is impossible. The most common settlement reduction is underinsurance (average clause risk) when sum insured is far below real value.",
        bullets: [
          "Align sum insured to current reality (avoid average clause reductions)",
          "Keep basic proof trail: invoices/registers + periodic photos (as applicable)",
          "Record changes in stored goods, layout or business activity (update policy when needed)",
          "Maintain a simple incident timeline + early reporting discipline",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance (without prices)",
        bullets: [
          "Sum insured and valuation basis (stock/contents/equipment)",
          "Business activity and disclosure accuracy (operations must match wording)",
          "Location risk indicators (fire load, warehouse density, public access, loss history)",
          "Security and safety measures (locks, shutters, extinguishers, wiring condition as applicable)",
          "Claim history and documentation readiness",
        ],
      },

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

      localLanding: {
        primaryLocations: ["kolathur-commercial-pockets", "perambur", "ambattur", "red-hills", "sholavaram"],
        phrases: [
          "msme insurance red hills",
          "shop insurance kolathur commercial pockets",
          "office insurance ambattur",
          "commercial package policy perambur",
        ],
      },

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
        { label: "Fire & Burglary", href: EN("/services/industrial/fire-burglary-insurance/"), desc: "Property cover and condition awareness." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for visitor-facing businesses." },
        { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Warehouse valuation + proof discipline." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow, documents checklist, timelines." },
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

      coverageSummary: [
        "CPM claims are value-sensitive: declared value must be defensible with proof/valuation.",
        "Worksite + NH movement increases third-party exposure; incident evidence and reporting speed matter."
      ],

      standardModules: {
        title: "Typical CPM coverage factors to clarify",
        bullets: [
          "Declared value / valuation basis (critical)",
          "Usage/site exposure disclosure (worksite vs public zones)",
          "Optional third-party liability linkage (case-dependent)",
          "Maintenance/inspection record discipline (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Keep purchase invoice/valuation proof ready",
          "Write usage summary (where operated, typical site exposure)",
          "Maintain basic maintenance/inspection file (as applicable)",
          "Define incident reporting SOP (photos + timeline)",
        ],
      },

      claimDiscipline: {
        title: "CPM claim discipline (high-premium reality)",
        intro:
          "High premium does not guarantee smooth settlement. Proof and valuation discipline do.",
        bullets: [
          "Declared value must match proof/valuation",
          "Evidence and timeline discipline on day-1",
          "Clear usage disclosure reduces disputes",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Equipment value, type and age",
          "Usage exposure (public zones, worksites, NH movement)",
          "Maintenance record discipline and loss history (as applicable)",
        ],
      },

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
      localLanding: {
        primaryLocations: ["red-hills", "sholavaram", "thirumazhisai", "sriperumbudur-sipcot"],
        phrases: [
          "crane insurance red hills",
          "cpm insurance sholavaram",
          "heavy equipment insurance sriperumbudur",
          "crane cpm insurance thirumazhisai",
        ],
      },
      areaRealityTitle: "Crane / CPM reality around NH + industrial worksites",
      areaRealityText:
        "Equipment claims are proof-driven. Keeping valuation proof and basic records reduces dispute risk.",
      areaSignals: [
        "Sholavaram crane insurance support",
        "Red Hills heavy equipment insurance",
        "Chennai outskirts CPM insurance consultant",
      ],
      internalLinks: [
        { label: "Crane Third-Party Liability Basics", href: EN("/services/heavy-equipment/crane-liability/"), desc: "Third-party risk near public zones." },
        { label: "Construction (CAR/WC)", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "Worksite + workforce combined risk." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure and notices discipline." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
      ],
    },

    "crane-liability": {
      seoTitle: "Crane Third-Party Liability Basics – NH + Worksite Exposure (Chennai Outskirts)",
      seoDesc:
        "Practical guidance on third-party liability exposure for cranes and heavy equipment operating near highways and worksites. Focus: incident reporting, evidence quality and coverage clarity.",
      heroH1: "Crane Third-Party Liability (Exposure Basics)",
      heroP:
        "Third-party incidents escalate fast around public zones. We guide evidence discipline and coverage clarity to reduce disputes.",

      coverageSummary: [
        "Liability is evidence-driven: incident details, witnesses, and timely reporting matter as much as the policy wording.",
        "This page explains what to record and how to avoid common liability disputes."
      ],

      standardModules: {
        title: "Liability basics (what is usually evaluated)",
        bullets: [
          "Incident reporting timeline and evidence quality",
          "Notices/letters handling discipline (as applicable)",
          "Operational mismatch vs wording is the biggest dispute driver",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Define where equipment is used (public zone vs controlled worksite)",
          "Set incident SOP: who reports, what evidence is captured",
          "Maintain basic contract/authorization trail when relevant (as applicable)",
        ],
      },

      claimDiscipline: {
        title: "Liability claim discipline",
        intro:
          "Liability disputes grow when evidence is weak or reporting is late. Clean reporting reduces escalation risk.",
        bullets: [
          "Keep timeline, witnesses, photos/videos (as applicable)",
          "Report early and preserve incident notes",
          "Maintain notices/letters file if received (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Public exposure intensity and operating environment",
          "Loss history and incident control discipline",
          "Scope clarity: what work is performed and where",
        ],
      },

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
      localLanding: {
        primaryLocations: ["red-hills", "sholavaram", "nh-manali-road", "sriperumbudur-sipcot"],
        phrases: [
          "crane liability red hills",
          "heavy equipment third party liability sholavaram",
          "liability insurance nh manali road",
        ],
      },
      areaRealityTitle: "Liability reality near highways and public zones",
      areaRealityText:
        "Small incidents become expensive disputes if reporting/evidence is weak. Clean documentation and timely notice reduce friction.",
      areaSignals: [
        "Chennai outskirts crane liability guidance",
        "Sholavaram heavy equipment third party risk",
        "Red Hills crane insurance liability support",
      ],
      internalLinks: [
        { label: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/"), desc: "Declared value + usage clarity discipline." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for businesses and sites." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Evidence and timeline discipline." },
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

      coverageSummary: [
        "Public liability is about third-party exposure. The biggest failures happen when business operations and visitor exposure are not properly disclosed, or incident evidence is weak.",
        "This page helps businesses understand how liability claims work and what to record when an incident happens."
      ],

      standardModules: {
        title: "Public liability basics (what is evaluated)",
        bullets: [
          "Nature of third-party exposure (visitors, vendors, public access)",
          "Incident evidence quality (timeline, witnesses, photos as applicable)",
          "Notices/letters handling discipline (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "List visitor/public interaction points (entry, loading bays, waiting areas)",
          "Maintain basic incident SOP for staff",
          "Keep contract/vendor movement notes if relevant (as applicable)",
        ],
      },

      claimDiscipline: {
        title: "Liability claim discipline",
        intro:
          "Liability disputes are evidence disputes. Clear incident facts, timely reporting, and records reduce escalation risk.",
        bullets: [
          "Collect witness details and photos/videos (as applicable)",
          "Keep a clean incident timeline",
          "Preserve notices/letters and respond correctly (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Public exposure intensity and business type",
          "Past loss history and risk controls",
          "Operational disclosure accuracy",
        ],
      },

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
      localLanding: {
        primaryLocations: ["red-hills", "madhavaram", "manali", "ambattur-industrial-estate", "kolathur-commercial-pockets"],
        phrases: [
          "public liability red hills",
          "third party liability madhavaram warehouse",
          "liability insurance manali industrial",
          "public liability ambattur industrial estate",
        ],
      },
      areaRealityTitle: "Liability reality around NH-facing businesses",
      areaRealityText:
        "Near highways and industrial zones, small incidents escalate quickly. Clean reporting, notices handling and evidence discipline reduce disputes.",
      areaSignals: [
        "Chennai outskirts public liability insurance",
        "Red Hills third party liability support",
        "Sholavaram liability insurance guidance",
      ],
      internalLinks: [
        { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/"), desc: "Visitor-facing businesses often need liability add-ons." },
        { label: "Construction (CAR/WC)", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "Site and workforce exposures." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Incident timeline and proof discipline." },
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

      coverageSummary: [
        "This is not a guarantee service. It is a guidance workflow: correct steps, correct documents, and clean timelines so claims don’t get delayed for avoidable reasons.",
        "It helps most when incidents occur in NH belts, industrial corridors, or when stock/valuation proof is required (as applicable)."
      ],

      standardModules: {
        title: "What claim support guidance typically includes",
        bullets: [
          "First steps checklist (what to do in first minutes/hours)",
          "Document checklist by case type (as applicable)",
          "Timeline discipline (incident sequence clarity)",
          "Survey/inspection workflow awareness (insurer-controlled)",
        ],
      },

      preBuyChecklist: {
        title: "Before any incident happens (prepare now)",
        bullets: [
          "Keep policy copy + endorsements accessible",
          "Maintain basic proof trail: invoices/registers/photos (as applicable)",
          "Have a simple incident reporting template ready (who/what/when/where)",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline (what decides momentum)",
        intro:
          "The first timeline and first documents decide momentum. Most delays are avoidable with basic discipline.",
        bullets: [
          "Early intimation/reporting",
          "First-day photos/videos (as applicable) before repairs",
          "Clean incident sequence and supporting records",
          "Survey/inspection steps followed where required",
        ],
      },

      pricingFactors: {
        title: "What affects claim timelines (not pricing)",
        bullets: [
          "Evidence quality and reporting time",
          "Policy wording fit and disclosure clarity",
          "Survey/inspection scheduling (insurer controlled)",
          "Proof trail quality for valuation/stock (as applicable)",
        ],
      },

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
      localLanding: {
        primaryLocations: ["sholavaram", "red-hills", "madhavaram", "manali", "sriperumbudur-sipcot"],
        phrases: [
          "insurance claim help red hills",
          "commercial claim documentation madhavaram",
          "warehouse claim documents manali",
          "claim support sholavaram",
        ],
      },
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
        { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/"), desc: "Fleet SOP: renewals + incident reporting discipline." },
        { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Stock proof and valuation discipline." },
        { label: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/"), desc: "Declared value and proof discipline." },
        { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/"), desc: "MSME modules + valuation discipline." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure and notices handling." },
      ],
    },
  },

  // =====================================================
  // MARINE
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

      coverageSummary: [
        "Transit claims succeed on documentation: invoice, packing, dispatch/receipt trail, and timely reporting.",
        "This page explains what proof matters most and how to prevent common disputes."
      ],

      standardModules: {
        title: "Transit cover modules (typical)",
        bullets: [
          "Declared goods and invoice value clarity",
          "Packing condition and proof discipline (as applicable)",
          "Dispatch/receipt and route documentation trail",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy or renew transit cover",
        bullets: [
          "Maintain invoice + packing list discipline",
          "Capture packing condition photos for fragile/high-value goods (as applicable)",
          "Keep dispatch/receipt proof process consistent",
        ],
      },

      claimDiscipline: {
        title: "Transit claim discipline",
        intro:
          "Transit losses quickly become documentation disputes. Proof trail quality decides outcomes.",
        bullets: [
          "Report quickly and preserve packaging evidence (as applicable)",
          "Maintain dispatch/receipt and route trail",
          "Keep invoice and declared goods consistent",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Goods type/value, packing, route exposure",
          "Loss history and proof discipline",
          "Mode of transport and handling processes",
        ],
      },

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
      localLanding: {
        primaryLocations: ["red-hills", "madhavaram", "manali", "sholavaram"],
        phrases: [
          "goods in transit insurance red hills",
          "marine cargo insurance madhavaram",
          "transit insurance manali logistics",
        ],
      },
      areaRealityTitle: "Transit claim reality in NH corridors",
      areaRealityText:
        "Transit claims are proof-driven: invoice, packing, dispatch/receipt trail, and timely reporting. Clean documentation reduces avoidable delays.",
      areaSignals: [
        "Chennai marine cargo insurance support",
        "NH belt goods in transit insurance guidance",
        "Red Hills logistics transit insurance",
      ],
      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "NH movement exposure and claims readiness." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Timeline and evidence discipline." },
      ],
    },
  },

  // =====================================================
  // PERSONAL
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

      coverageSummary: [
        "Cab/taxi policies are sensitive to usage disclosure. Many disputes happen when usage category does not match real operations.",
        "This page helps with renewal checks and basic claim-step discipline."
      ],

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Confirm usage category and operating area disclosure",
          "Keep previous policy copy and renewal dates ready",
          "Know basic claim steps before an incident happens",
        ],
      },

      renewalChecks: {
        title: "Renewal checks",
        bullets: [
          "Usage category and wording fit",
          "Avoid expiry gaps",
          "Basic claim-step readiness (photos + reporting)",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline",
        intro:
          "Most delays are avoidable: early reporting and basic photo evidence matters.",
        bullets: [
          "Report early and keep clean timeline",
          "Capture photos before repairs (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle type, age, claim history",
          "Usage disclosures and operating pattern",
          "Add-ons selected (case-dependent)",
        ],
      },

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
      localLanding: {
        primaryLocations: ["anna-nagar", "ambattur", "koyambedu", "mogappair-west"],
        phrases: [
          "taxi insurance anna nagar",
          "cab insurance ambattur",
          "commercial cab insurance koyambedu",
        ],
      },
      areaRealityTitle: "Taxi claim reality (city usage)",
      areaRealityText:
        "Most issues are workflow issues. Clean reporting and basic documentation prevents avoidable delays.",
      areaSignals: ["Chennai taxi insurance support", "Cab insurance guidance Chennai"],
      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
      ],
    },

    "car-insurance-support": {
      seoTitle: "Private Car Insurance Support – Chennai (Major Areas)",
      seoDesc:
        "Private car renewal support: IDV/NCB checks, add-on clarity and basic claim-step guidance across Chennai major areas.",
      heroH1: "Private Car Insurance Support (Renewal Checks + Clarity)",
      heroP:
        "Renewals are where most mistakes happen. We help you verify IDV/NCB, add-on fit and basic claim steps.",

      coverageSummary: [
        "Car renewals fail when IDV/NCB/add-ons are chosen blindly. This page explains simple checks that prevent future surprises.",
        "It is designed for renewals and claim-step clarity (no claim guarantees)."
      ],

      renewalChecks: {
        title: "Renewal checks that matter most",
        bullets: [
          "IDV realism (especially for older vehicles)",
          "NCB accuracy and claim history alignment",
          "Add-ons chosen based on usage (not default)",
          "Avoid coverage gaps around expiry date",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle age, IDV, claim history and NCB",
          "Add-ons selected",
          "Usage pattern and insurer rules (case-dependent)",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline (simple but important)",
        intro:
          "Most delays are avoidable: early reporting, photos before repair, and a clean timeline.",
        bullets: [
          "Report early; keep a clean incident narrative",
          "Capture photos/videos before repairs (as applicable)",
        ],
      },

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
      localLanding: {
        primaryLocations: ["anna-nagar", "ambattur", "kolathur", "koyambedu", "mogappair-west"],
        phrases: [
          "car insurance renewal anna nagar",
          "car insurance ambattur",
          "private car insurance koyambedu",
        ],
      },
      areaRealityTitle: "Car renewal reality",
      areaRealityText:
        "Small renewal mistakes create big claim surprises. Simple checks reduce that risk.",
      areaSignals: ["Chennai car insurance renewal support", "Private car insurance guidance Chennai"],
      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
      ],
    },

    "bike-insurance-support": {
      seoTitle: "Two-Wheeler Insurance Support – Chennai (Major Areas)",
      seoDesc:
        "Two-wheeler renewal support: add-on clarity and basic claim-step guidance across Chennai major areas.",
      heroH1: "Two-Wheeler Insurance Support (Simple Clarity)",
      heroP:
        "Quick renewal checks and basic claim-step clarity help avoid surprises later.",

      coverageSummary: [
        "Two-wheeler renewals are often done fast and blindly. This page explains the minimal checks that prevent later confusion.",
        "Focus is on renewal discipline and claim-step readiness."
      ],

      renewalChecks: {
        title: "Renewal checks",
        bullets: [
          "Coverage gaps around expiry date avoided",
          "Add-ons selected based on usage (case-dependent)",
          "Basic claim-step readiness before incidents",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle type/age and claim history",
          "Add-ons selected (case-dependent)",
          "Insurer rules and policy type",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline",
        intro:
          "Two-wheeler claims get delayed when reporting is late or photos are missing. Keep it simple and early.",
        bullets: [
          "Report early and capture photos (as applicable)",
          "Maintain clean incident timeline",
        ],
      },

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
      localLanding: {
        primaryLocations: ["kolathur", "perambur", "ambattur", "anna-nagar"],
        phrases: [
          "bike insurance renewal kolathur",
          "two wheeler insurance ambattur",
          "bike insurance perambur",
        ],
      },
      areaRealityTitle: "Two-wheeler policy support reality",
      areaRealityText:
        "Small clarity now prevents big confusion later.",
      areaSignals: ["Chennai bike insurance renewal support", "Two-wheeler insurance guidance Chennai"],
      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
      ],
    },
  },
}

let locationsDetails = {
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

// ✅ UNIQUE ENRICHMENT PER LOCATION (NO GENERIC TEMPLATE TEXT)
//
// These fields are intentionally unique for each slug.
// Keep them truthful: no fake counts, no fake branches.

const LOC_ENRICH = {
  sholavaram: {
    locationType: "hub-office",
    anchorAndCoordination: {
      title: "Sholavaram support hub (what happens here)",
      intro:
        "Sholavaram is our primary coordination point. This page exists to explain how policies, renewals and claim documentation are handled from one hub while supporting multiple nearby belts.",
      bullets: [
        "Policy servicing and document verification are handled from Sholavaram (central checklist + insurer workflow alignment).",
        "Commercial cases often require stricter usage/disclosure alignment before renewal to prevent disputes later.",
        "If an inspection/survey is required, we guide the exact sequence so the claim file doesn’t get delayed due to avoidable gaps.",
      ],
    },
    localLandmarks: {
      title: "Local reference points people search around",
      note:
        "These are reference points used in searches. Support is anchored to our Sholavaram office (not multiple branches).",
      items: [
        "Sholavaram town / junction references",
        "NH-facing belts connecting towards Red Hills / Madhavaram side",
        "Industrial-corridor connectors towards SIPCOT-side routes (as applicable)",
      ],
    },
    commonRequests: {
      title: "What people usually ask for in Sholavaram",
      items: [
        "Transport renewals: aligning RC/usage with policy wording and endorsements (as applicable).",
        "Warehouse/property guidance: valuation basis + proof readiness (as applicable).",
        "Claims: first reporting steps + document checklist discipline to reduce avoidable follow-ups.",
      ],
    },
    nextSteps: {
      title: "What to share first (fast checklist)",
      bullets: [
        "Previous policy copy + expiry date.",
        "For vehicles: RC details + usage summary; permit/fitness dates if applicable.",
        "For claim help: incident time/location + photos + short sequence of events.",
      ],
    },
    intentSearchSignals: [
      "insurance office sholavaram",
      "commercial insurance sholavaram",
      "insurance renewal sholavaram",
      "insurance claim help sholavaram",
      "fleet insurance near sholavaram",
    ],
    nearbyAreas: {
      title: "Closest service-area pages",
      items: [
        { label: "Red Hills", href: EN("/locations/red-hills/"), desc: "NH-facing movement + storage exposure guidance." },
        { label: "Madhavaram", href: EN("/locations/madhavaram/"), desc: "City-edge corridor: motor + SME + commercial vehicle mix." },
        { label: "Puzhal", href: EN("/locations/puzhal/"), desc: "Connector belt: renewals + claim steps + SME packages." },
        { label: "Karanodai", href: EN("/locations/karanodai/"), desc: "NH belt: fleet/lorry discipline + claim timeline focus." },
      ],
    },
  },

  "red-hills": {
    locationType: "nh-logistics",
    anchorAndCoordination: {
      title: "Red Hills (NH-facing belt) – why this page exists",
      intro:
        "Red Hills queries are frequently transport- and storage-linked. This page focuses on what actually changes outcomes in NH-facing belts: document discipline, incident timeline quality, and renewal alignment.",
      bullets: [
        "Fleet/commercial renewals: we help keep vehicle lists and expiry discipline clean; permit/fitness details matter where applicable.",
        "Claims: NH-facing incidents often become timeline-heavy; clean reporting and clear event sequence reduces avoidable delays.",
        "Where inspections/workshop steps apply, we guide the sequence so the file doesn’t get stuck for missing proofs.",
      ],
    },
    localLandmarks: {
      title: "Local reference points for Red Hills searches",
      note: "Reference points only; support is coordinated from Sholavaram.",
      items: [
        "Red Hills junction / market-side references (general search cue)",
        "NH-facing movement zones (logistics-side context)",
        "Warehouse/storage belts (as applicable to operations)",
      ],
    },
    commonRequests: {
      title: "Common Red Hills requests",
      items: [
        "Fleet insurance renewals + checklist discipline (RC/permit/fitness as applicable).",
        "Lorry/trailer renewals where usage mismatch can create claim disputes later.",
        "Warehouse/fire/burglary guidance where stock proof and valuation become claim-sensitive.",
      ],
    },
    nextSteps: {
      title: "If you searched fleet/lorry insurance in Red Hills",
      bullets: [
        "Share vehicle list + previous policy copy (fleet).",
        "Share RC details; permit/fitness if applicable.",
        "If claim: photos + time/location + short incident sequence.",
      ],
    },
    intentSearchSignals: [
      "fleet insurance red hills",
      "lorry insurance red hills",
      "trailer insurance red hills",
      "warehouse insurance red hills",
      "commercial insurance red hills",
      "insurance claim help red hills",
    ],
    nearbyAreas: {
      title: "Nearby belts people also mean when they say “Red Hills side”",
      items: [
        { label: "Sholavaram", href: EN("/locations/sholavaram/"), desc: "Central hub + document processing support." },
        { label: "Madhavaram Truck Terminal", href: EN("/locations/madhavaram-truck-terminal/"), desc: "Transport-heavy: fleet renewals + claim workflow." },
        { label: "Puzhal", href: EN("/locations/puzhal/"), desc: "Connector belt: renewals + claim steps." },
        { label: "Karanodai", href: EN("/locations/karanodai/"), desc: "NH belt: document scrutiny and third-party exposure." },
      ],
    },
  },

  madhavaram: {
    locationType: "city-edge-corridor",
    anchorAndCoordination: {
      title: "Madhavaram (city-edge corridor) – support pattern",
      intro:
        "Madhavaram sits at a city-edge corridor where personal motor, SME packages, and commercial vehicle queries overlap. This page prioritizes renewal accuracy and process discipline.",
      bullets: [
        "Motor renewals: IDV/NCB/add-on matching to real usage prevents renewal-time mistakes.",
        "Commercial vehicles: document alignment (permit/fitness where applicable) reduces claim friction later.",
        "SME packages: clarity on what’s insured + proof readiness reduces avoidable valuation disputes (as applicable).",
      ],
    },
    localLandmarks: {
      title: "How people refer to Madhavaram while searching",
      note: "Reference cues; service coordination is via Sholavaram.",
      items: [
        "Madhavaram corridor-side references (city-edge movement zone)",
        "Truck/transport references (when users mean terminal-side areas)",
        "Residential pockets where renewals dominate searches",
      ],
    },
    commonRequests: {
      title: "Common Madhavaram requests",
      items: [
        "Car/bike renewals with add-on clarity and NCB checks.",
        "Commercial vehicle renewals: avoiding mismatches in usage/classification (as applicable).",
        "Claim help: clean timeline + correct first steps to avoid repeat queries.",
      ],
    },
    nextSteps: {
      title: "Fast checklist for Madhavaram customers",
      bullets: [
        "Share previous policy + expiry date (renewal).",
        "For motor: RC + NCB status; for claim: photos + time/location.",
        "If commercial: permit/fitness details if applicable + usage description.",
      ],
    },
    intentSearchSignals: [
      "insurance renewal madhavaram",
      "car insurance madhavaram",
      "commercial vehicle insurance madhavaram",
      "insurance claim help madhavaram",
    ],
    nearbyAreas: {
      title: "Nearby service-area pages",
      items: [
        { label: "Madhavaram Truck Terminal", href: EN("/locations/madhavaram-truck-terminal/"), desc: "Fleet/commercial focus and document-heavy claims." },
        { label: "Puzhal", href: EN("/locations/puzhal/"), desc: "Connector belt: renewals + claim steps." },
        { label: "Red Hills", href: EN("/locations/red-hills/"), desc: "NH-facing transport + warehouse exposure." },
        { label: "Sholavaram", href: EN("/locations/sholavaram/"), desc: "Central coordination hub." },
      ],
    },
  },

  ambattur: {
    locationType: "city-side-mixed",
    anchorAndCoordination: {
      title: "Ambattur – what makes support different here",
      intro:
        "Ambattur searches typically split into two buckets: personal motor renewals and SME package questions. This page focuses on preventing renewal errors and keeping claim documentation clean.",
      bullets: [
        "Motor: renewal accuracy (IDV/NCB/add-ons) and policy continuity checks.",
        "SME/shop/office: sum insured clarity + proof discipline where applicable.",
        "Claims: what to do first and what evidence matters so the file doesn’t bounce between requests.",
      ],
    },
    localLandmarks: {
      title: "Search cues people use for Ambattur",
      note: "Reference points; coordination remains via Sholavaram.",
      items: [
        "Ambattur residential/commuter pockets (renewal-heavy intent)",
        "Small-business stretches (SME package intent)",
        "Industrial adjacency references (when users mean unit-side exposures)",
      ],
    },
    commonRequests: {
      title: "Common Ambattur requests",
      items: [
        "Car/bike renewals and correcting NCB/IDV mistakes.",
        "Health policy comparisons and renewal continuity guidance.",
        "SME package alignment for small offices/shops (as applicable).",
      ],
    },
    nextSteps: {
      title: "What to share first",
      bullets: [
        "Previous policy + RC details (motor).",
        "For health: current plan + renewal date + age/coverage needs summary.",
        "If claim: photos + incident sequence + time/location.",
      ],
    },
    intentSearchSignals: [
      "car insurance ambattur",
      "insurance renewal ambattur",
      "health insurance ambattur",
      "insurance claim help ambattur",
    ],
    nearbyAreas: {
      title: "Nearby city-side pages",
      items: [
        { label: "Mogappair West", href: EN("/locations/mogappair-west/"), desc: "Renewals + health guidance pattern." },
        { label: "Anna Nagar", href: EN("/locations/anna-nagar/"), desc: "Residential renewal + health guidance." },
        { label: "Thiruninravur", href: EN("/locations/thiruninravur/"), desc: "Mixed residential + corridor-linked commercial vehicles." },
      ],
    },
  },

  puzhal: {
    locationType: "connector-belt",
    anchorAndCoordination: {
      title: "Puzhal – connector belt support (renewals + claim steps)",
      intro:
        "Puzhal is often searched as a connector belt between city-side pockets and corridor movement. This page focuses on renewals, claim steps, and practical SME package clarity.",
      bullets: [
        "Motor renewals: add-ons only when they match usage; incorrect add-ons often create disputes later.",
        "Claims: early steps + proof discipline (photos + incident timeline) to reduce repeat queries.",
        "SME/shop: proof readiness (invoices/stock notes) where applicable to avoid valuation disputes.",
      ],
    },
    localLandmarks: {
      title: "How people refer to Puzhal while searching",
      note: "Reference cues; service coordination remains via Sholavaram.",
      items: [
        "Connector-side references (city-outskirts transition)",
        "Residential pockets where renewals dominate",
        "Commercial pockets where SME/shop packages are common (as applicable)",
      ],
    },
    commonRequests: {
      title: "Common Puzhal requests",
      items: [
        "Car/bike renewals: IDV/NCB/add-on clarity.",
        "Claim help for accidents: photos + timeline + correct reporting sequence.",
        "Shop/SME packages: sum insured clarity and basic proof readiness.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor renewal: previous policy + RC + NCB status.",
        "Claim help: photos + time/location + event sequence.",
        "SME/shop: brief asset/stock summary + any invoice/record pointers (as applicable).",
      ],
    },
    intentSearchSignals: [
      "car insurance puzhal",
      "insurance renewal puzhal",
      "insurance claim help puzhal",
      "shop insurance puzhal",
    ],
  },

  kavangarai: {
    locationType: "nh-corridor-mixed",
    anchorAndCoordination: {
      title: "Kavangarai – NH corridor behavior (where claims get stuck)",
      intro:
        "Kavangarai corridor queries are often transport-linked. This page exists to highlight the two biggest friction points: missing document alignment and unclear incident timeline during claims.",
      bullets: [
        "Commercial vehicles: RC + permit/fitness alignment where applicable; mismatches are a common delay trigger.",
        "Claims: clean incident sequence + early intimation reduces avoidable back-and-forth.",
        "SME packages: basic proof discipline (stock/assets) where applicable to prevent valuation disputes.",
      ],
    },
    localLandmarks: {
      title: "Reference points people use for Kavangarai-side searches",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "NH-facing travel references (movement belt intent)",
        "Lorry/transport references (commercial intent)",
        "Mixed residential pockets (renewal intent)",
      ],
    },
    commonRequests: {
      title: "Common Kavangarai requests",
      items: [
        "Commercial vehicle renewals: usage clarity + document readiness (as applicable).",
        "Claim help: timeline + evidence discipline.",
        "SME packages where small businesses operate (as applicable).",
      ],
    },
    nextSteps: {
      title: "What to share first",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "If claim: photos + time/location + short sequence.",
        "If SME package: brief asset/stock summary (as applicable).",
      ],
    },
    intentSearchSignals: [
      "commercial vehicle insurance kavangarai",
      "insurance renewal kavangarai",
      "insurance agent near kavangarai",
      "insurance claim help kavangarai",
    ],
  },

  kosapaur: {
    locationType: "residential-sme-pocket",
    anchorAndCoordination: {
      title: "Kosapaur – renewal-first support pattern",
      intro:
        "Kosapaur searches are typically renewal and claim-step driven. This page exists to provide practical guidance without generic filler—what to share, what matters, and how to avoid repeat queries.",
      bullets: [
        "Motor renewals: correcting IDV/NCB/add-on mistakes is the most common value add.",
        "Claims: proof discipline (photos + incident timeline) prevents repeated insurer requests.",
        "SME packages: clarity on what is insured and basic proof readiness where applicable.",
      ],
    },
    localLandmarks: {
      title: "Kosapaur search cues",
      note: "Reference cues only; service is coordinated via Sholavaram.",
      items: [
        "Residential pockets (renewal-heavy intent)",
        "Local shop/SME pockets (package policy intent)",
        "Adjacent belt references towards Puzhal/Madhavaram side",
      ],
    },
    commonRequests: {
      title: "Common Kosapaur requests",
      items: [
        "Car/bike renewal checks.",
        "Claim steps for minor/major accidents (as applicable).",
        "SME package guidance for small shops/offices (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC + expiry date.",
        "If claim: photos + time/location + short sequence.",
        "If SME: brief asset/stock note + any invoice pointers (as applicable).",
      ],
    },
    intentSearchSignals: [
      "car insurance kosapaur",
      "insurance renewal kosapaur",
      "insurance claim help kosapaur",
      "business insurance kosapaur",
    ],
  },

  surapet: {
    locationType: "city-side-with-industrial-pockets",
    anchorAndCoordination: {
      title: "Surapet – mixed residential + industrial-pocket behavior",
      intro:
        "Surapet has mixed queries: personal motor renewals and occasional commercial/SME needs. This page separates what matters for each intent so users don’t end up at a dead end.",
      bullets: [
        "Personal motor: renewal accuracy and claim step clarity (common intent).",
        "SME packages: proof and sum insured clarity where stock/assets are involved (as applicable).",
        "Commercial vehicles (as applicable): document readiness and usage alignment to reduce claim friction.",
      ],
    },
    localLandmarks: {
      title: "Surapet search cues",
      note: "Reference cues; coordination via Sholavaram remains constant.",
      items: [
        "Residential stretches (renewal-heavy intent)",
        "Industrial pocket references (SME/commercial intent)",
        "Connector references towards Kolathur / Puzhal side",
      ],
    },
    commonRequests: {
      title: "Common Surapet requests",
      items: [
        "Car/bike renewals with add-on clarity.",
        "Claim help: correct first steps + timeline discipline.",
        "SME package guidance when small units operate (as applicable).",
      ],
    },
    nextSteps: {
      title: "What to do next",
      bullets: [
        "Renewal: previous policy + RC + expiry date.",
        "Claim: photos + incident time/location + sequence.",
        "SME: brief asset/stock list + proof pointers (as applicable).",
      ],
    },
    intentSearchSignals: [
      "insurance renewal surapet",
      "car insurance surapet",
      "insurance claim help surapet",
      "business insurance surapet",
    ],
  },

  "madhavaram-milk-colony": {
    locationType: "city-residential",
    anchorAndCoordination: {
      title: "Madhavaram Milk Colony – renewals + claim steps focus",
      intro:
        "This page exists for a renewal-first audience. Most searches here are motor renewal checks, health policy clarity, and claim-step guidance when something goes wrong.",
      bullets: [
        "Motor renewals: IDV/NCB/add-on alignment to avoid renewal surprises.",
        "Health renewals: continuity and coverage clarity—avoid gaps and wrong assumptions.",
        "Claims: clear incident timeline + photo discipline reduces repeat document demands.",
      ],
    },
    localLandmarks: {
      title: "Local search references",
      note: "Reference cues only; service is coordinated via Sholavaram.",
      items: [
        "Residential references (renewal intent)",
        "City-side connector references towards Madhavaram main",
        "Nearby belt references towards Puzhal side",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Car/bike renewals and add-on clarity.",
        "Health policy renewal and plan comparison basics.",
        "Claim documentation help for accidents/hospitalization (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor: previous policy + RC + expiry date.",
        "Health: current policy + renewal date + age/coverage summary.",
        "Claim: photos/records + time/location + short narrative.",
      ],
    },
    intentSearchSignals: [
      "car insurance madhavaram milk colony",
      "insurance renewal madhavaram milk colony",
      "health insurance madhavaram milk colony",
      "insurance claim help madhavaram",
    ],
  },

  "madhavaram-truck-terminal": {
    locationType: "transport-node",
    anchorAndCoordination: {
      title: "Madhavaram Truck Terminal – fleet/commercial workflow support",
      intro:
        "Transport-node pages exist because fleet and commercial vehicle policies fail on process discipline. This page focuses on document readiness, renewal structure, and claim workflow sequence.",
      bullets: [
        "Fleet renewals: vehicle list discipline + expiry tracking; endorsements and usage alignment reduce disputes later.",
        "Claims: third-party exposure increases scrutiny; clean reporting and a tight timeline matters.",
        "If inspection/survey/workshop steps apply, we guide the sequence so the file doesn’t stall on avoidable gaps.",
      ],
    },
    localLandmarks: {
      title: "Search cues around the terminal-side intent",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "Truck terminal / transport references (fleet intent)",
        "Commercial vehicle parking/route references (renewal intent)",
        "NH-facing corridor references (movement belt intent)",
      ],
    },
    commonRequests: {
      title: "Common terminal-side requests",
      items: [
        "Fleet insurance renewals + document readiness discipline (RC/permit/fitness as applicable).",
        "Goods carrying vehicle renewals with usage alignment.",
        "Claim help where third-party involvement makes timeline discipline critical.",
      ],
    },
    nextSteps: {
      title: "What to share first for fleet/terminal-side queries",
      bullets: [
        "Vehicle list + previous policy copies (fleet).",
        "RC + permit/fitness dates if applicable.",
        "Claim help: photos + incident time/location + short sequence.",
      ],
    },
    intentSearchSignals: [
      "fleet insurance madhavaram truck terminal",
      "commercial vehicle insurance madhavaram truck terminal",
      "goods carrying vehicle insurance madhavaram",
      "insurance claim help truck terminal",
    ],
  },

  budur: {
    locationType: "outskirts-nh",
    anchorAndCoordination: {
      title: "Budur – outskirts corridor support (transport + SME mix)",
      intro:
        "Budur-side searches are often corridor-driven. This page focuses on renewals and documentation discipline that prevents delays when incidents or inspections occur.",
      bullets: [
        "Commercial vehicles: usage alignment and document readiness where applicable.",
        "SME packages: sum insured clarity + proof discipline if stock/assets are involved (as applicable).",
        "Claims: clean timeline + basic evidence discipline reduces repeat insurer requests.",
      ],
    },
    localLandmarks: {
      title: "How users describe Budur-side searches",
      note: "Reference cues only; coordination via Sholavaram.",
      items: [
        "Outskirts corridor references (movement belt intent)",
        "Transport/lorry references (commercial intent)",
        "Small business pockets (package policy intent)",
      ],
    },
    commonRequests: {
      title: "Common Budur requests",
      items: [
        "Lorry/commercial vehicle renewal discipline.",
        "Goods carrier renewals and claim steps (as applicable).",
        "MSME package guidance where operations require it (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "If claim: incident time/location + photos + short sequence.",
        "If MSME: brief asset/stock summary + proof pointers (as applicable).",
      ],
    },
    intentSearchSignals: [
      "lorry insurance budur",
      "commercial vehicle insurance budur",
      "insurance renewal budur",
      "insurance claim help budur",
    ],
  },

  thiruninravur: {
    locationType: "residential-industrial-adjacent",
    anchorAndCoordination: {
      title: "Thiruninravur – dual-intent (personal + corridor-linked commercial)",
      intro:
        "Thiruninravur pages matter because the intent splits: personal renewals and corridor-linked commercial vehicle needs. This page is structured to answer both without generic filler.",
      bullets: [
        "Personal motor: renewal accuracy and claim-step clarity.",
        "Commercial vehicles (as applicable): permit/fitness/usage alignment and document readiness.",
        "SME packages: sum insured clarity and proof discipline where applicable.",
      ],
    },
    localLandmarks: {
      title: "Thiruninravur search cues",
      note: "Reference cues only; service is coordinated from Sholavaram.",
      items: [
        "Residential pockets (renewal intent)",
        "Industrial adjacency references (SME/commercial intent)",
        "Commute corridor references (mixed intent)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Car/bike renewals and NCB/IDV corrections.",
        "Commercial vehicle renewals (as applicable) with document readiness checks.",
        "Claim help: first steps and what proof matters.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor: previous policy + RC + expiry date.",
        "Commercial: permit/fitness dates if applicable + usage summary.",
        "Claim: photos + time/location + short sequence.",
      ],
    },
    intentSearchSignals: [
      "insurance renewal thiruninravur",
      "car insurance thiruninravur",
      "commercial vehicle insurance thiruninravur",
      "insurance claim help thiruninravur",
    ],
  },

  veppampattu: {
    locationType: "outskirts-mixed",
    anchorAndCoordination: {
      title: "Veppampattu – outskirts mix (fleet + SME + claim discipline)",
      intro:
        "Veppampattu-side queries can be transport-heavy or small-business oriented. This page is designed to reduce claim friction by guiding disclosures, document readiness and reporting discipline.",
      bullets: [
        "Fleet/commercial renewals: vehicle list discipline and document readiness where applicable.",
        "SME packages: sum insured clarity and proof pointers where applicable.",
        "Claims: clear timeline and early steps prevent avoidable delays.",
      ],
    },
    localLandmarks: {
      title: "Veppampattu search cues",
      note: "Reference cues only; service is coordinated via Sholavaram hub.",
      items: [
        "Outskirts belt references (corridor intent)",
        "Transport references (fleet intent)",
        "Local SME pockets (package policy intent)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Goods carrier / fleet renewals and claim readiness discipline.",
        "Renewal checks to avoid coverage gaps and wrong add-ons.",
        "Claim documentation support for incidents outside city core (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Share previous policy + RC; permit/fitness if applicable.",
        "If fleet: vehicle list + renewal dates.",
        "If claim: photos + time/location + short narrative.",
      ],
    },
    intentSearchSignals: [
      "fleet insurance veppampattu",
      "commercial vehicle insurance veppampattu",
      "insurance renewal veppampattu",
      "insurance claim help veppampattu",
    ],
  },

  "thiruvallur-sipcot-outskirts": {
    locationType: "industrial-edge",
    anchorAndCoordination: {
      title: "Thiruvallur SIPCOT outskirts – industrial proof discipline focus",
      intro:
        "Industrial-edge pages exist because claims depend heavily on valuation and proof. This page focuses on what insurers ask for and how to keep documentation defensible.",
      bullets: [
        "Property/stock: valuation basis + proof trail discipline (invoices/records/photos as applicable).",
        "Contractor/workforce exposure: classification and clean records matter (as applicable).",
        "Claims: early reporting + clear incident notes prevent avoidable disputes.",
      ],
    },
    localLandmarks: {
      title: "SIPCOT-side search cues",
      note: "Reference cues only; coordination remains via Sholavaram.",
      items: [
        "SIPCOT-side industrial references (industrial intent)",
        "Factory/warehouse references (property intent)",
        "Contractor/workforce references (CAR/WC intent)",
      ],
    },
    commonRequests: {
      title: "Common SIPCOT-side requests",
      items: [
        "Warehouse/factory cover basics with valuation clarity.",
        "Contractor CAR/WC combined guidance where applicable.",
        "Claim documentation discipline for property/stock incidents.",
      ],
    },
    nextSteps: {
      title: "What to share first (industrial)",
      bullets: [
        "Brief activity summary + approximate values (stock/assets).",
        "Previous policy copy + any endorsements/declarations.",
        "If claim: incident notes + first-day photos + proof trail pointers (as applicable).",
      ],
    },
    intentSearchSignals: [
      "industrial insurance thiruvallur sipcot outskirts",
      "warehouse insurance thiruvallur sipcot",
      "contractor insurance thiruvallur sipcot",
      "insurance claim help sipcot thiruvallur",
    ],
  },

  "poonamallee-bypass": {
    locationType: "corridor-heavy",
    anchorAndCoordination: {
      title: "Poonamallee bypass – corridor risk alignment",
      intro:
        "Corridor pages exist because contractor activity, heavy vehicle movement and liability exposure overlap. This page focuses on aligning disclosures and keeping claim documentation sequence clean.",
      bullets: [
        "Fleet/commercial vehicles: usage alignment and renewal discipline.",
        "Contractor exposures (as applicable): CAR/WC classification and timeline discipline.",
        "Liability and property exposures: incident documentation discipline when third-party or asset loss occurs.",
      ],
    },
    localLandmarks: {
      title: "Bypass-side search cues",
      note: "Reference cues only; coordination is via Sholavaram.",
      items: [
        "Bypass/industrial corridor references (movement intent)",
        "Contractor activity references (CAR/WC intent)",
        "Warehouse/property references (asset/stock intent)",
      ],
    },
    commonRequests: {
      title: "Common corridor requests",
      items: [
        "Fleet renewals with document readiness discipline.",
        "Contractor CAR/WC questions where applicable.",
        "Liability awareness for third-party exposure (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Vehicle list + previous policy copy (fleet) OR activity summary (contractor/industrial).",
        "If contractor: project period + workforce classification notes (as applicable).",
        "If claim: incident timeline + photos + proof pointers.",
      ],
    },
    intentSearchSignals: [
      "fleet insurance poonamallee bypass",
      "contractor insurance poonamallee bypass",
      "commercial insurance poonamallee bypass",
      "insurance claim help poonamallee bypass",
    ],
  },

  kuthambakkam: {
    locationType: "corridor-industrial",
    anchorAndCoordination: {
      title: "Kuthambakkam – industrial corridor support (transport + contractor mix)",
      intro:
        "Kuthambakkam pages are built for corridor-linked risk. The core value is aligning policy wording with actual operations and keeping proof discipline defensible.",
      bullets: [
        "Transport/fleet: renewal discipline + document readiness where applicable.",
        "Contractor/workforce (as applicable): classification and clean records.",
        "Property/warehouse: valuation and proof trail discipline where applicable.",
      ],
    },
    localLandmarks: {
      title: "Kuthambakkam search cues",
      note: "Reference cues only; service is coordinated via Sholavaram hub.",
      items: [
        "Industrial corridor references (movement intent)",
        "Contractor references (CAR/WC intent)",
        "Warehouse/property references (asset intent)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Contractor CAR/WC questions where applicable.",
        "Commercial vehicle renewals with correct disclosure alignment.",
        "Warehouse/property guidance where storage/operations exist (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Activity summary + approximate values (assets/stock) if property exposure exists.",
        "Vehicle RC + previous policy if transport exposure exists.",
        "If claim: incident notes + photos + proof pointers.",
      ],
    },
    intentSearchSignals: [
      "contractor insurance kuthambakkam",
      "warehouse insurance kuthambakkam",
      "commercial vehicle insurance kuthambakkam",
      "insurance claim help kuthambakkam",
    ],
  },

  thirumazhisai: {
    locationType: "industrial-adjacent",
    anchorAndCoordination: {
      title: "Thirumazhisai – industrial adjacency (transport + SME discipline)",
      intro:
        "Thirumazhisai queries often involve transport movement plus SME needs. This page exists to prevent claim friction by focusing on disclosures, proof trail discipline, and renewal checks.",
      bullets: [
        "Commercial vehicles: renewal discipline + document readiness where applicable.",
        "SME packages: sum insured clarity + proof readiness where applicable.",
        "Claims: clear incident sequence + timely steps reduce avoidable delays.",
      ],
    },
    localLandmarks: {
      title: "Thirumazhisai search cues",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "Industrial-adjacent references (SME/commercial intent)",
        "Transport corridor references (movement intent)",
        "Residential pockets (renewal intent)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Commercial vehicle renewals with document readiness checks (as applicable).",
        "SME packages where stock/assets exist (as applicable).",
        "Claim-step guidance for vehicle/property incidents (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "If SME: brief asset/stock note + proof pointers (as applicable).",
        "If claim: photos + time/location + sequence.",
      ],
    },
    intentSearchSignals: [
      "commercial insurance thirumazhisai",
      "insurance renewal thirumazhisai",
      "warehouse insurance thirumazhisai",
      "insurance claim help thirumazhisai",
    ],
  },

  chembarambakkam: {
    locationType: "corridor-connector",
    anchorAndCoordination: {
      title: "Chembarambakkam – corridor connector (transport + SME overlap)",
      intro:
        "Chembarambakkam pages exist because transport movement and SME exposures overlap. This page focuses on avoiding the most common cause of delays: missing documents and unclear timelines.",
      bullets: [
        "Transport/fleet: renewal discipline + document readiness where applicable.",
        "SME packages: proof discipline where stock/assets exist (as applicable).",
        "Claims: clean incident narrative + early steps reduce avoidable follow-ups.",
      ],
    },
    localLandmarks: {
      title: "Chembarambakkam search cues",
      note: "Reference cues only; service is coordinated from Sholavaram.",
      items: [
        "Corridor connector references (movement intent)",
        "Fleet/transport references (commercial intent)",
        "SME pockets (package policy intent)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Commercial vehicle renewals and fleet discipline.",
        "Claim documentation support with clean timeline discipline.",
        "SME package guidance where operations require it (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "Fleet: vehicle list + expiry schedule.",
        "Claim: photos + time/location + sequence.",
      ],
    },
    intentSearchSignals: [
      "fleet insurance chembarambakkam",
      "commercial vehicle insurance chembarambakkam",
      "insurance renewal chembarambakkam",
      "insurance claim help chembarambakkam",
    ],
  },

  "sriperumbudur-sipcot": {
    locationType: "industrial-hub",
    anchorAndCoordination: {
      title: "Sriperumbudur SIPCOT – industrial hub (valuation + proof trail)",
      intro:
        "Industrial hub pages exist because insurer scrutiny increases with value and operational complexity. This page focuses on valuation logic, proof trail discipline, and correct disclosures.",
      bullets: [
        "Factory/warehouse: valuation basis and proof trail discipline (invoices/records/photos as applicable).",
        "Contractor/workforce exposures: classification and clean records where applicable.",
        "Transit exposure (as applicable): invoice/dispatch trail discipline for smoother claims.",
      ],
    },
    localLandmarks: {
      title: "SIPCOT-side search cues",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "SIPCOT industrial references (industrial intent)",
        "Factory/warehouse references (property intent)",
        "Transit/movement references (GIT/marine cargo intent)",
      ],
    },
    commonRequests: {
      title: "Common SIPCOT requests",
      items: [
        "Factory/warehouse cover basics with valuation clarity.",
        "Contractor CAR/WC guidance where applicable.",
        "Transit/GIT documentation discipline where movement risk exists.",
      ],
    },
    nextSteps: {
      title: "What to share first (industrial)",
      bullets: [
        "Activity summary + approximate values for assets/stock.",
        "Previous policy copy + declarations/endorsements if any.",
        "If claim: incident notes + first-day photos + proof pointers (as applicable).",
      ],
    },
    intentSearchSignals: [
      "factory insurance sriperumbudur sipcot",
      "warehouse insurance sriperumbudur sipcot",
      "contractor insurance sriperumbudur sipcot",
      "marine cargo insurance sriperumbudur",
    ],
  },

  "oragadam-outskirts": {
    locationType: "industrial-corridor",
    anchorAndCoordination: {
      title: "Oragadam outskirts – corridor rules (disclosures + discipline)",
      intro:
        "Oragadam outskirts pages exist because contractor and industrial exposures create claim sensitivity. This page emphasizes disclosures, records discipline and correct sequencing in claims.",
      bullets: [
        "Contractor/WC: classification and clean records where applicable.",
        "Industrial/property: valuation basis + proof discipline where applicable.",
        "Fleet/commercial vehicles (as applicable): usage alignment and document readiness.",
      ],
    },
    localLandmarks: {
      title: "Oragadam-side search cues",
      note: "Reference cues only; coordination remains via Sholavaram.",
      items: [
        "Automobile/industrial belt references (industrial intent)",
        "Contractor references (CAR/WC intent)",
        "Corridor movement references (fleet intent)",
      ],
    },
    commonRequests: {
      title: "Common Oragadam outskirts requests",
      items: [
        "CAR/WC guidance where contractor exposure exists.",
        "Warehouse/property cover basics and proof discipline.",
        "Commercial vehicle/fleet renewals where corridor movement exists.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Contractor: project period + workforce notes (as applicable).",
        "Industrial: asset/stock values + proof pointers.",
        "Claim: incident timeline + photos + initial document list.",
      ],
    },
    intentSearchSignals: [
      "contractor insurance oragadam outskirts",
      "industrial insurance oragadam",
      "fleet insurance oragadam",
      "insurance claim help oragadam",
    ],
  },

  "manali-new-town": {
    locationType: "industrial-influence",
    anchorAndCoordination: {
      title: "Manali New Town – movement + industrial influence",
      intro:
        "Manali New Town queries can involve commercial vehicles and industrial-adjacent exposures. This page focuses on transit discipline and claim workflow readiness.",
      bullets: [
        "Commercial vehicles: renewal accuracy + document readiness where applicable.",
        "Transit exposure (as applicable): invoice/dispatch trail discipline.",
        "Claims: early intimation and clean narrative to avoid repeated document demands.",
      ],
    },
    localLandmarks: {
      title: "Manali New Town search cues",
      note: "Reference cues only; coordination via Sholavaram hub.",
      items: [
        "Industrial influence references (commercial intent)",
        "Transit/movement references (transport intent)",
        "Adjacent estate/road references (belt intent)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Commercial vehicle renewals and claim readiness discipline.",
        "Transit/goods movement documentation questions (as applicable).",
        "Property/warehouse guidance when storage is involved (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "Transit: invoice/dispatch pointers if movement exposure exists (as applicable).",
        "Claim: photos + time/location + narrative sequence.",
      ],
    },
    intentSearchSignals: [
      "commercial insurance manali new town",
      "commercial vehicle insurance manali new town",
      "insurance claim help manali new town",
      "goods in transit insurance manali",
    ],
  },

  "manali-industrial-estate": {
    locationType: "industrial-estate",
    anchorAndCoordination: {
      title: "Manali Industrial Estate – industrial claim sensitivity",
      intro:
        "Industrial estate pages exist because valuation and proof trail discipline decide how smoothly claims move. This page focuses on proof readiness and disclosure alignment.",
      bullets: [
        "Property/stock: valuation basis + proof discipline (invoices/records/photos as applicable).",
        "Liability exposure (as applicable): incident notes and notice-handling discipline.",
        "Transit exposure (as applicable): dispatch/invoice trail discipline.",
      ],
    },
    localLandmarks: {
      title: "Industrial estate search cues",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "Estate-side industrial references (industrial intent)",
        "Warehouse/storage references (property intent)",
        "Transit/logistics references (movement intent)",
      ],
    },
    commonRequests: {
      title: "Common estate requests",
      items: [
        "Warehouse/factory cover basics with valuation clarity.",
        "Public liability awareness where third-party exposure exists (as applicable).",
        "Transit/GIT documentation discipline where movement risk exists (as applicable).",
      ],
    },
    nextSteps: {
      title: "What to share first",
      bullets: [
        "Activity summary + asset/stock values + proof pointers.",
        "Previous policy copy + endorsements/declarations if any.",
        "If claim: incident notes + photos + proof trail pointers.",
      ],
    },
    intentSearchSignals: [
      "warehouse insurance manali industrial estate",
      "industrial insurance manali industrial estate",
      "public liability insurance manali",
      "insurance claim help manali industrial estate",
    ],
  },

  "nh-manali-road": {
    locationType: "nh-logistics",
    anchorAndCoordination: {
      title: "NH Manali Road – logistics belt (timeline + documents)",
      intro:
        "NH belt pages exist because third-party exposure and document scrutiny are higher. This page is written to prevent avoidable claim delays by keeping the workflow clean.",
      bullets: [
        "Commercial vehicles: renewal discipline + document readiness where applicable.",
        "Transit exposure (as applicable): invoice/dispatch trail discipline for claim defensibility.",
        "Claims: clean incident timeline and early steps reduce avoidable friction.",
      ],
    },
    localLandmarks: {
      title: "NH Manali Road search cues",
      note: "Reference cues only; coordination remains via Sholavaram hub.",
      items: [
        "NH-facing movement references (logistics intent)",
        "Lorry/trailer references (commercial intent)",
        "Transit references (GIT/marine cargo intent)",
      ],
    },
    commonRequests: {
      title: "Common NH belt requests",
      items: [
        "Fleet/commercial renewals with document readiness checks.",
        "Trailer/lorry renewals where third-party exposure increases scrutiny.",
        "Claim help: timeline discipline + evidence checklist.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "If transit: invoice/dispatch pointers (as applicable).",
        "If claim: photos + time/location + sequence.",
      ],
    },
    intentSearchSignals: [
      "fleet insurance nh manali road",
      "lorry insurance nh manali road",
      "commercial vehicle insurance nh manali road",
      "insurance claim help nh manali road",
    ],
  },

  "kolathur-commercial-pockets": {
    locationType: "commercial-pocket",
    anchorAndCoordination: {
      title: "Kolathur commercial pockets – SME + motor overlap",
      intro:
        "Commercial pocket pages exist because the intent overlaps: small business packages and motor renewals. This page prevents dead ends by mapping users to the right service quickly.",
      bullets: [
        "SME/shop packages: sum insured clarity + proof pointers where applicable.",
        "Motor renewals: add-on clarity and NCB/IDV correction to avoid renewal errors.",
        "Claims: clean sequence and document checklist discipline to reduce delays.",
      ],
    },
    localLandmarks: {
      title: "Commercial pocket search cues",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "Shop/office stretches (SME intent)",
        "Residential connector pockets (renewal intent)",
        "Adjacency references towards Retteri/Villivakkam side",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "SME package renewals and correct stock/asset disclosure (as applicable).",
        "Car/bike renewals with add-on clarity.",
        "Claim help where missing documents cause repeat queries.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "SME: brief asset/stock note + proof pointers.",
        "Motor: previous policy + RC + NCB status.",
        "Claim: photos + time/location + narrative sequence.",
      ],
    },
    intentSearchSignals: [
      "shop insurance kolathur",
      "msme insurance kolathur",
      "car insurance kolathur commercial area",
      "insurance claim help kolathur",
    ],
  },

  retteri: {
    locationType: "residential-renewal",
    anchorAndCoordination: {
      title: "Retteri – renewal-heavy support (practical checks)",
      intro:
        "Retteri searches are renewal-heavy. This page exists to reduce renewal mistakes and provide clear claim-step guidance without generic filler.",
      bullets: [
        "Car/bike renewals: IDV/NCB/add-on checks matched to usage.",
        "Claims: what to do first and what photos/proofs matter (case-dependent).",
        "Health renewals: continuity checks to prevent gaps and wrong assumptions.",
      ],
    },
    localLandmarks: {
      title: "Retteri search cues",
      note: "Reference cues only; coordination remains via Sholavaram.",
      items: [
        "Residential stretches (renewal intent)",
        "Nearby connector references towards Kolathur/Anna Nagar side",
        "Common “near me” searches that still map to Sholavaram support",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Car renewal checks (IDV/NCB/add-ons).",
        "Claim help for accidents: photos + timeline + reporting steps.",
        "Health renewal guidance and plan clarity.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor: previous policy + RC + expiry date + NCB status.",
        "Claim: photos + time/location + short incident sequence.",
        "Health: current policy + renewal date + age/coverage needs summary.",
      ],
    },
    intentSearchSignals: [
      "car insurance retteri",
      "insurance renewal retteri",
      "insurance claim help retteri",
      "health insurance retteri",
    ],
  },

  "villivakkam-industrial-areas": {
    locationType: "industrial-pocket-city",
    anchorAndCoordination: {
      title: "Villivakkam industrial areas – SME/property discipline",
      intro:
        "Industrial pocket pages exist because SME and property exposures require proof discipline. This page focuses on sum insured clarity and documentation readiness.",
      bullets: [
        "SME packages: sum insured clarity and proof pointers where applicable.",
        "Property/fire/burglary (as applicable): valuation basis + record discipline.",
        "Motor renewals: practical add-on and renewal checks for owners in the same belt.",
      ],
    },
    localLandmarks: {
      title: "Industrial pocket search cues",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "Industrial pocket references (SME/property intent)",
        "Residential adjacency references (renewal intent)",
        "Nearby belt references towards Perambur/Kolathur",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Shop/SME package guidance for small units (as applicable).",
        "Fire/burglary basics when assets/stock exposure exists (as applicable).",
        "Car renewals and claim-step clarity.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "SME: brief asset/stock summary + proof pointers.",
        "Property: valuation basis notes + records pointers (as applicable).",
        "Claim: incident notes + photos + timeline sequence.",
      ],
    },
    intentSearchSignals: [
      "business insurance villivakkam industrial",
      "shop insurance villivakkam",
      "fire insurance villivakkam",
      "car insurance villivakkam",
    ],
  },

  "mogappair-west": {
    locationType: "residential-health-motor",
    anchorAndCoordination: {
      title: "Mogappair West – motor + health renewal clarity",
      intro:
        "Mogappair West searches are typically motor renewals and health policy guidance. This page is written to make decisions easier with practical checks and clear next steps.",
      bullets: [
        "Motor renewals: IDV/NCB/add-ons based on real usage, not generic suggestions.",
        "Health renewals: continuity and coverage checks to prevent gaps and surprises.",
        "Claims: what to do first and what documents matter so the file doesn’t get delayed.",
      ],
    },
    localLandmarks: {
      title: "Mogappair West search cues",
      note: "Reference cues only; coordination remains via Sholavaram.",
      items: [
        "Residential references (renewal intent)",
        "Hospital-network questions (health intent)",
        "Nearby area references towards Anna Nagar / Koyambedu",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Car/bike renewals with add-on clarity.",
        "Health policy comparisons and renewal continuity.",
        "Claim help steps for motor/health (case-dependent).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor: previous policy + RC + expiry date.",
        "Health: current plan + renewal date + age/coverage needs summary.",
        "Claim: photos/records + incident summary and dates.",
      ],
    },
    intentSearchSignals: [
      "car insurance mogappair west",
      "health insurance mogappair west",
      "insurance renewal mogappair west",
      "insurance claim help mogappair",
    ],
  },

  manali: {
    locationType: "industrial-influence",
    anchorAndCoordination: {
      title: "Manali – industrial + transport overlap support",
      intro:
        "Manali pages exist because transport movement, industrial property exposure, and transit discipline can overlap. This page focuses on aligning disclosures and keeping documentation defensible.",
      bullets: [
        "Commercial vehicles: renewal discipline and document readiness where applicable.",
        "Property/warehouse exposures (as applicable): valuation basis + proof trail discipline.",
        "Transit and liability awareness (as applicable): incident notes and dispatch/invoice trail discipline.",
      ],
    },
    localLandmarks: {
      title: "Manali search cues",
      note: "Reference cues only; coordination remains via Sholavaram hub.",
      items: [
        "Industrial influence references (industrial intent)",
        "Transport corridor references (commercial intent)",
        "Adjacent estate/road references (belt intent)",
      ],
    },
    commonRequests: {
      title: "Common Manali requests",
      items: [
        "Warehouse/property cover basics where storage exists (as applicable).",
        "Commercial vehicle renewals with document readiness checks.",
        "Transit/GIT questions where goods movement exposure exists (as applicable).",
      ],
    },
    nextSteps: {
      title: "What to share first",
      bullets: [
        "Previous policy + asset/stock values (industrial) OR RC details (transport).",
        "If transit: dispatch/invoice pointers (as applicable).",
        "If claim: incident notes + photos + timeline sequence.",
      ],
    },
    intentSearchSignals: [
      "commercial insurance manali",
      "warehouse insurance manali",
      "commercial vehicle insurance manali",
      "insurance claim help manali",
    ],
  },

  karanodai: {
    locationType: "nh-logistics",
    anchorAndCoordination: {
      title: "Karanodai – NH belt discipline (fleet/lorry focus)",
      intro:
        "Karanodai is treated as an NH belt in many workflows. This page exists to reduce claim delays by tightening renewal discipline, document readiness, and incident timeline quality.",
      bullets: [
        "Fleet/commercial renewals: vehicle list discipline + RC/permit/fitness readiness where applicable.",
        "Claims: NH-facing incidents can be scrutiny-heavy; clean reporting and clear sequence matters.",
        "Transit exposure (as applicable): invoice/dispatch trail discipline supports claim defensibility.",
      ],
    },
    localLandmarks: {
      title: "Karanodai search cues",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "NH belt movement references (logistics intent)",
        "Lorry/fleet references (commercial intent)",
        "Corridor-side references towards Periyapalayam/Budur",
      ],
    },
    commonRequests: {
      title: "Common Karanodai requests",
      items: [
        "Fleet/lorry renewals with document readiness checks.",
        "Trailer/goods carrying renewals where usage alignment matters.",
        "Claim help: timeline discipline + evidence checklist.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Vehicle list + previous policy copies (fleet).",
        "RC + permit/fitness dates if applicable.",
        "Claim: photos + time/location + narrative sequence.",
      ],
    },
    intentSearchSignals: [
      "fleet insurance karanodai",
      "lorry insurance karanodai",
      "commercial vehicle insurance karanodai",
      "insurance claim help karanodai",
    ],
  },

  periyapalayam: {
    locationType: "outskirts-corridor",
    anchorAndCoordination: {
      title: "Periyapalayam – outskirts corridor (transport + small business)",
      intro:
        "Outskirts corridor pages exist because users often search without precise area names. This page helps map transport and small-business intent into the correct service flow.",
      bullets: [
        "Commercial vehicles: renewal discipline + document readiness where applicable.",
        "SME packages: sum insured clarity + proof pointers where applicable.",
        "Claims: clean incident notes and early steps reduce avoidable delays.",
      ],
    },
    localLandmarks: {
      title: "Periyapalayam search cues",
      note: "Reference cues only; coordination is via Sholavaram hub.",
      items: [
        "Outskirts corridor references (movement intent)",
        "Transport references (commercial intent)",
        "Small business pockets (package policy intent)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Commercial vehicle renewals and claim readiness discipline.",
        "SME packages where local businesses operate (as applicable).",
        "Claim help: first steps + document checklist discipline.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "If SME: brief asset/stock summary + proof pointers (as applicable).",
        "If claim: photos + time/location + sequence.",
      ],
    },
    intentSearchSignals: [
      "commercial insurance periyapalayam",
      "lorry insurance periyapalayam",
      "insurance renewal periyapalayam",
      "insurance claim help periyapalayam",
    ],
  },

  arani: {
    locationType: "corridor-connected",
    anchorAndCoordination: {
      title: "Arani (corridor-connected) – transit discipline emphasis",
      intro:
        "Corridor-connected pages exist because goods movement and transit documentation can become the deciding factor in claim smoothness. This page focuses on proof trail discipline.",
      bullets: [
        "Transport renewals: usage clarity and document readiness where applicable.",
        "Transit/GIT (as applicable): invoice/dispatch trail discipline improves defensibility.",
        "Claims: early steps and clean narrative reduce avoidable insurer queries.",
      ],
    },
    localLandmarks: {
      title: "Arani search cues",
      note: "Reference cues only; coordination remains via Sholavaram hub.",
      items: [
        "Corridor-connected movement references (transport intent)",
        "Transit references (goods movement intent)",
        "Outskirts references (users searching without exact belt name)",
      ],
    },
    commonRequests: {
      title: "Common requests",
      items: [
        "Lorry/goods carrier renewals and discipline checks.",
        "Transit/GIT documentation questions (as applicable).",
        "Claim steps guidance when incidents happen outside city core (as applicable).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC; permit/fitness if applicable.",
        "If transit: invoice/dispatch pointers (as applicable).",
        "If claim: photos + time/location + short sequence.",
      ],
    },
    intentSearchSignals: [
      "lorry insurance arani",
      "goods in transit insurance arani",
      "commercial insurance arani",
      "insurance claim help arani",
    ],
  },

  perambur: {
    locationType: "city-side",
    anchorAndCoordination: {
      title: "Perambur – city-side renewals + claim-step clarity",
      intro:
        "Perambur searches are usually renewal-first. This page exists to prevent renewal mistakes and to make claim steps clear so the process doesn’t stall on avoidable gaps.",
      bullets: [
        "Motor renewals: IDV/NCB/add-on checks matched to real usage.",
        "Health renewals: continuity checks and plan clarity to prevent gaps.",
        "SME packages (as applicable): sum insured clarity and proof pointers for stock/assets.",
      ],
    },
    localLandmarks: {
      title: "Perambur search cues",
      note: "Reference cues only; coordination remains via Sholavaram hub.",
      items: [
        "Residential/commercial pocket references (renewal intent)",
        "SME pocket references (package policy intent)",
        "Adjacent belt references towards Villivakkam / Kolathur",
      ],
    },
    commonRequests: {
      title: "Common Perambur requests",
      items: [
        "Car/bike renewals and add-on clarity.",
        "Health policy renewal guidance and continuity checks.",
        "Claim documentation steps for accidents/hospitalization (case-dependent).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor: previous policy + RC + expiry date + NCB status.",
        "Health: current policy + renewal date + basic coverage needs summary.",
        "Claim: photos/records + timeline and short incident narrative.",
      ],
    },
    intentSearchSignals: [
      "car insurance perambur",
      "health insurance perambur",
      "insurance renewal perambur",
      "insurance claim help perambur",
    ],
  },

  kolathur: {
    locationType: "city-side-mixed",
    anchorAndCoordination: {
      title: "Kolathur – mixed residential + SME intent mapping",
      intro:
        "Kolathur pages exist because users search for both renewals and SME packages in the same area. This page is structured to route each intent to the correct service quickly.",
      bullets: [
        "Motor renewals: practical checks for IDV/NCB/add-ons to avoid renewal errors.",
        "SME packages (as applicable): sum insured clarity and proof readiness for stock/assets.",
        "Claims: first steps + document discipline to reduce avoidable delays.",
      ],
    },
    localLandmarks: {
      title: "Kolathur search cues",
      note: "Reference cues only; coordination remains via Sholavaram hub.",
      items: [
        "Residential pockets (renewal intent)",
        "Commercial pockets (SME package intent)",
        "Adjacent belt references towards Retteri / Villivakkam side",
      ],
    },
    commonRequests: {
      title: "Common Kolathur requests",
      items: [
        "Car/bike renewals and correcting add-on/NCB mistakes.",
        "SME package guidance for shops/offices (as applicable).",
        "Claim steps clarity to avoid repeat insurer queries.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor: previous policy + RC + expiry date.",
        "SME: asset/stock summary + proof pointers (as applicable).",
        "Claim: photos + time/location + sequence.",
      ],
    },
    intentSearchSignals: [
      "insurance renewal kolathur",
      "car insurance kolathur",
      "shop insurance kolathur",
      "insurance claim help kolathur",
    ],
  },

  koyambedu: {
    locationType: "city-connector",
    anchorAndCoordination: {
      title: "Koyambedu – city connector (fast renewal checks)",
      intro:
        "Koyambedu queries are usually “quick renewal” and “what to do now” oriented. This page exists to provide fast checks and correct next steps without generic explanations.",
      bullets: [
        "Motor renewals: IDV/NCB/add-on checks to avoid renewal mistakes.",
        "Claims: first steps and the minimum proof discipline that prevents repeated requests.",
        "When users search without an area name, we route them to the correct service page quickly.",
      ],
    },
    localLandmarks: {
      title: "Koyambedu search cues",
      note: "Reference cues only; coordination remains via Sholavaram hub.",
      items: [
        "Market/connector references (near-me intent)",
        "Commute corridor references (fast renewal intent)",
        "Adjacent area references towards Anna Nagar / Mogappair",
      ],
    },
    commonRequests: {
      title: "Common Koyambedu requests",
      items: [
        "Car renewals and add-on clarity.",
        "Claim-step guidance for accidents (case-dependent).",
        "Quick policy checks to avoid gaps and wrong assumptions.",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Previous policy + RC + expiry date + NCB status.",
        "Claim: photos + time/location + narrative sequence.",
        "If unsure: share your use-case and we route you to the correct policy type.",
      ],
    },
    intentSearchSignals: [
      "car insurance koyambedu",
      "insurance renewal koyambedu",
      "insurance claim help koyambedu",
      "insurance agent near koyambedu",
    ],
  },

  "anna-nagar": {
    locationType: "residential-premium",
    anchorAndCoordination: {
      title: "Anna Nagar – renewal accuracy + health policy clarity",
      intro:
        "Anna Nagar searches are typically motor renewals and health policy questions. This page is designed to improve decision quality: correct renewal checks, clear plan comparisons, and clean claim steps.",
      bullets: [
        "Motor renewals: IDV/NCB/add-ons matched to real usage—not generic bundles.",
        "Health policies: renewal continuity, coverage assumptions, and claim-step clarity.",
        "Claims: what to do first and what documents matter so the file doesn’t get delayed.",
      ],
    },
    localLandmarks: {
      title: "Anna Nagar search cues",
      note: "Reference cues only; coordination remains via Sholavaram hub.",
      items: [
        "Residential references (renewal intent)",
        "Hospital-network questions (health intent)",
        "Adjacent area references towards Koyambedu / Mogappair",
      ],
    },
    commonRequests: {
      title: "Common Anna Nagar requests",
      items: [
        "Car/bike renewals with add-on clarity.",
        "Health renewal comparisons and continuity checks.",
        "Claim help for motor/health (case-dependent).",
      ],
    },
    nextSteps: {
      title: "Fast checklist",
      bullets: [
        "Motor: previous policy + RC + expiry date + NCB status.",
        "Health: current plan + renewal date + age/coverage summary.",
        "Claim: photos/records + timeline + short narrative.",
      ],
    },
    intentSearchSignals: [
      "car insurance anna nagar",
      "health insurance anna nagar",
      "insurance renewal anna nagar",
      "insurance claim help anna nagar",
    ],
  },
};

// ✅ Merge: preserves your existing content, adds rich unique sections
export const locationsDetail = Object.fromEntries(
  Object.entries(locationsDetails).map(([slug, base]) => {
    const add = LOC_ENRICH[slug] || {};
    return [
      slug,
      {
        ...base,
        ...add,
        anchorAndCoordination: { ...(base.anchorAndCoordination || {}), ...(add.anchorAndCoordination || {}) },
        localLandmarks: { ...(base.localLandmarks || {}), ...(add.localLandmarks || {}) },
        commonRequests: { ...(base.commonRequests || {}), ...(add.commonRequests || {}) },
        nextSteps: { ...(base.nextSteps || {}), ...(add.nextSteps || {}) },
        nearbyAreas: { ...(base.nearbyAreas || {}), ...(add.nearbyAreas || {}) },
        intentSearchSignals: [...(base.intentSearchSignals || []), ...(add.intentSearchSignals || [])],
      },
    ];
  })
);


export const LOCATION_BUCKETS = {
  // 1) Core home belt (highest relevance to your “base advantage”)
  PRIMARY_SHOLAVARAM_REDHILLS_BELT: [
    "sholavaram",
    "red-hills",
    "puzhal",
    "kavangarai",
    "kosapaur",
    "karanodai",
  ],

  // 2) Madhavaram logistics + truck / warehouse cluster
  MADHAVARAM_LOGISTICS_BELT: [
    "madhavaram",
    "madhavaram-milk-colony",
    "madhavaram-truck-terminal",
  ],

  // 3) Manali / Ennore influence (industrial + transit-heavy vibe)
  MANALI_INDUSTRIAL_TRANSIT_BELT: [
    "manali",
    "manali-new-town",
    "manali-industrial-estate",
    "nh-manali-road",
  ],

  // 4) Thiruvallur / outskirts belt (corridor + contractor + mixed)
  THIRUVALLUR_OUTSKIRTS_BELT: [
    "budur",
    "periyapalayam",
    "thiruninravur",
    "veppampattu",
    "thiruvallur-sipcot-outskirts",
  ],

  // 5) Poonamallee → Sriperumbudur → Oragadam (industrial gold corridor)
  INDUSTRIAL_GOLD_CORRIDOR_WEST: [
    "poonamallee-bypass",
    "kuthambakkam",
    "thirumazhisai",
    "chembarambakkam",
    "sriperumbudur-sipcot",
    "oragadam-outskirts",
  ],

  // 6) Inner North / mixed-use “connector” pockets (useful for motor + SME)
  NORTH_CONNECTOR_POCKETS: [
    "surapet",
    "villivakkam-industrial-areas",
    "kolathur",
    "kolathur-commercial-pockets",
    "retteri",
    "perambur",
  ],

  // 7) City-side / residential + SME support
  CITY_SIDE_RESIDENTIAL_SME: [
    "ambattur",
    "mogappair-west",
    "koyambedu",
    "anna-nagar",
  ],

  // 8) “Outside-Chennai” corridor-connected (keep separate if you want tighter targeting)
  OUTSIDE_CITY_CORRIDOR_CONNECTED: [
    "arani",
  ],
};

export const SERVICE_LOCAL_SUPPORT = {
  "transport-fleet": {
    "lorry-insurance": [
      ...LOCATION_BUCKETS.PRIMARY_SHOLAVARAM_REDHILLS_BELT,
      ...LOCATION_BUCKETS.MADHAVARAM_LOGISTICS_BELT,
      ...LOCATION_BUCKETS.MANALI_INDUSTRIAL_TRANSIT_BELT,
    ],
    "trailer-insurance": [
      ...LOCATION_BUCKETS.MADHAVARAM_LOGISTICS_BELT,
      ...LOCATION_BUCKETS.PRIMARY_SHOLAVARAM_REDHILLS_BELT,
      ...LOCATION_BUCKETS.MANALI_INDUSTRIAL_TRANSIT_BELT,
    ],
    "fleet-insurance": [
      ...LOCATION_BUCKETS.PRIMARY_SHOLAVARAM_REDHILLS_BELT,
      ...LOCATION_BUCKETS.INDUSTRIAL_GOLD_CORRIDOR_WEST,
      ...LOCATION_BUCKETS.MADHAVARAM_LOGISTICS_BELT,
    ],
  },

  "industrial": {
    "warehouse-insurance": [
      ...LOCATION_BUCKETS.MADHAVARAM_LOGISTICS_BELT,
      ...LOCATION_BUCKETS.MANALI_INDUSTRIAL_TRANSIT_BELT,
      ...LOCATION_BUCKETS.INDUSTRIAL_GOLD_CORRIDOR_WEST,
    ],
    "fire-burglary-insurance": [
      ...LOCATION_BUCKETS.MADHAVARAM_LOGISTICS_BELT,
      ...LOCATION_BUCKETS.NORTH_CONNECTOR_POCKETS,
      ...LOCATION_BUCKETS.CITY_SIDE_RESIDENTIAL_SME,
    ],
  },

  "business-msme": {
    "shop-msme-insurance": [
      ...LOCATION_BUCKETS.NORTH_CONNECTOR_POCKETS,
      ...LOCATION_BUCKETS.CITY_SIDE_RESIDENTIAL_SME,
      ...LOCATION_BUCKETS.PRIMARY_SHOLAVARAM_REDHILLS_BELT,
    ],
  },
};



const NH_PRIORITY = [
   ...LOCATION_BUCKETS.PRIMARY_SHOLAVARAM_REDHILLS_BELT,
    ...LOCATION_BUCKETS.MADHAVARAM_LOGISTICS_BELT,
    ...LOCATION_BUCKETS.MANALI_INDUSTRIAL_TRANSIT_BELT,
    ...LOCATION_BUCKETS.THIRUVALLUR_OUTSKIRTS_BELT,
    ...LOCATION_BUCKETS.INDUSTRIAL_GOLD_CORRIDOR_WEST,
    // keep pockets that behave like NH-facing demand
    ...LOCATION_BUCKETS.NORTH_CONNECTOR_POCKETS,
    ...LOCATION_BUCKETS.OUTSIDE_CITY_CORRIDOR_CONNECTED,
  ]

  const CITY_SIDE = [
    ...LOCATION_BUCKETS.NORTH_CONNECTOR_POCKETS,
    ...LOCATION_BUCKETS.CITY_SIDE_RESIDENTIAL_SME,
  ]


  export const buildLocationsIndexFromDetail = (locationsDetail, EN, servicesDetail) => {
  const detail = locationsDetail || {};
  const has = (slug) => !!detail[slug];

  const mk = (slug) => ({
    slug,
    name: detail[slug]?.name || slug,
  });

  // Utility: safe list (existing slugs only)
  const pick = (slugs = []) => slugs.filter(has);

  // Utility: build service links safely (must exist)
  // Input is list of [category, serviceSlug, label?, desc?]
  const svc = (category, serviceSlug, label, desc) => {
    const ok = !!servicesDetail?.[category]?.[serviceSlug];
    if (!ok) return null;
    const d = servicesDetail[category][serviceSlug];
    return {
      href: EN(`/services/${category}/${serviceSlug}/`),
      label: label || d.heroH1 || d.seoTitle || serviceSlug,
      desc:
        desc ||
        d.seoDesc ||
        "Coverage logic + documents + common mistakes (claim-ready guidance).",
      category,
      serviceSlug,
    };
  };

  const buildServiceList = (items = []) =>
    items.map((x) => svc(...x)).filter(Boolean);

  // -----------------------------
  // ZONES (economic clusters)
  // -----------------------------
  const ZONES = [
    {
      id: "nh16-gnt-logistics",
      title: "GNT Road / NH belt (Logistics + fleet movement)",
      subtitle:
        "Frequent heavy-vehicle movement, warehouses/godowns, and incident scrutiny (documents + timeline).",
      whyThisZoneMatters:
        "This belt behaves like a logistics corridor: underwriting checks and claim workflows are often documentation-driven (permits/fitness/usage alignment, incident reporting quality).",
      commonNeeds: [
        "Lorry / heavy vehicle insurance + renewals for NH movement",
        "Fleet discipline: centralized documents + expiry tracking",
        "Warehouse / godown fire & burglary proof discipline (stock valuation + records)",
      ],
      topServices: buildServiceList([
        ["transport-fleet", "fleet-insurance", "Fleet insurance (process + discipline)"],
        ["transport-fleet", "lorry-insurance", "Lorry / heavy vehicle insurance"],
        ["industrial", "warehouse-insurance", "Warehouse / godown insurance"],
        ["claims-support", "claim-support", "Claim support (documents + timeline)"],
        ["marine", "marine-cargo-goods-in-transit-insurance", "Marine cargo / goods-in-transit"],
      ]),
      searchesPeopleUse: [
        "fleet insurance red hills",
        "lorry insurance red hills",
        "lorry insurance sholavaram",
        "warehouse insurance madhavaram",
        "insurance claim help near me",
      ],
      locations: pick([
        "sholavaram",
        "red-hills",
        "puzhal",
        "kavangarai",
        "kosapaur",
        "karanodai",
        "madhavaram",
        "madhavaram-truck-terminal",
        "madhavaram-milk-colony",
      ]).map(mk),

      // Used to generate “local value” lines without faking stats
      zoneSignals: [
        "Fleet and lorry renewals often depend on permits/fitness + usage clarity.",
        "Warehouse claims depend on valuation + stock proof discipline.",
      ],
    },

    {
      id: "manali-ennore-port-industrial",
      title: "Manali / Ennore influence (Industrial + transit-heavy)",
      subtitle:
        "Industrial exposure plus movement risk: liability awareness + evidence quality for incidents.",
      whyThisZoneMatters:
        "This belt tends to carry higher public/third-party exposure and industrial risk. Practical coverage alignment and evidence discipline affect claim momentum.",
      commonNeeds: [
        "Commercial motor + third-party exposure clarity",
        "Public liability awareness for visitor/vendor movement",
        "Industrial property proof discipline (fire load + stock/asset records)",
      ],
      topServices: buildServiceList([
        ["transport-fleet", "commercial-vehicle-insurance", "Commercial vehicle insurance"],
        ["liability", "public-liability", "Public liability (third-party risk)"],
        ["industrial", "fire-burglary-insurance", "Fire & burglary (commercial property)"],
        ["industrial", "warehouse-insurance", "Warehouse / godown insurance"],
        ["claims-support", "claim-support", "Claim support (documents + timeline)"],
      ]),
      searchesPeopleUse: [
        "public liability manali",
        "warehouse insurance manali",
        "commercial insurance manali",
        "insurance agent near me",
      ],
      locations: pick([
        "manali",
        "manali-new-town",
        "manali-industrial-estate",
        "nh-manali-road",
      ]).map(mk),
      zoneSignals: [
        "Third-party incidents escalate when incident notes/evidence are weak.",
        "Property and stock claims become proof + valuation discussions.",
      ],
    },

    {
      id: "west-industrial-corridors",
      title: "West industrial corridor (SIDCO / SIPCOT / corridor-linked belts)",
      subtitle:
        "Contractor work, factories, and corridor risks where declarations + documentation drive claim outcomes.",
      whyThisZoneMatters:
        "Corridor-connected belts often involve contractor/worksite exposure and commercial property risks. Timeline alignment and records (work orders, payroll classification, asset/stock valuation) frequently decide outcomes.",
      commonNeeds: [
        "Contractor CAR/WC discipline (timeline + payroll/classification)",
        "Factory/warehouse valuation + proof discipline",
        "Transport linkages (trailers/goods carriers) depending on movement",
      ],
      topServices: buildServiceList([
        ["construction", "contractor-car-wc-insurance", "Contractor CAR/WC combined guidance"],
        ["construction", "workmen-compensation", "Workmen compensation (WC)"],
        ["industrial", "factory-insurance", "Factory insurance (valuation + proof)"],
        ["industrial", "stock-declaration-insurance", "Stock declaration policies"],
        ["transport-fleet", "trailer-insurance", "Trailer insurance"],
      ]),
      searchesPeopleUse: [
        "contractor insurance near me",
        "workmen compensation insurance",
        "factory insurance sriperumbudur",
        "stock declaration policy warehouse",
      ],
      locations: pick([
        "poonamallee-bypass",
        "kuthambakkam",
        "thirumazhisai",
        "chembarambakkam",
        "sriperumbudur-sipcot",
        "oragadam-outskirts",
      ]).map(mk),
      zoneSignals: [
        "Contractor claims often fail due to timeline + payroll/classification mismatches.",
        "Factory/warehouse outcomes depend on valuation basis and proof trail discipline.",
      ],
    },

    {
      id: "thiruvallur-outskirts",
      title: "Outer belts (Thiruvallur-side + outskirts support)",
      subtitle:
        "Mixed risk pockets: transport movement + SME + contractor exposures depending on operations.",
      whyThisZoneMatters:
        "Outskirts belts tend to have mixed exposures. The ‘right’ policy depends on what you actually do (routes, workforce, stored goods, equipment use) rather than generic purchase.",
      commonNeeds: [
        "Transport renewals + document tracker discipline",
        "SME/shop packages for smaller businesses",
        "WC discipline when workforce exposure exists",
      ],
      topServices: buildServiceList([
        ["transport-fleet", "fleet-insurance", "Fleet insurance (process + discipline)"],
        ["business-msme", "shop-msme-insurance", "Shop & MSME package insurance"],
        ["construction", "workmen-compensation", "Workmen compensation (WC)"],
        ["claims-support", "claim-support", "Claim support (documents + timeline)"],
      ]),
      searchesPeopleUse: [
        "fleet insurance near me",
        "msme insurance near me",
        "workmen compensation near me",
      ],
      locations: pick([
        "thiruvallur-sipcot-outskirts",
        "budur",
        "periyapalayam",
        "thiruninravur",
        "veppampattu",
      ]).map(mk),
      zoneSignals: [
        "Mixed operations make ‘usage clarity’ the biggest factor in underwriting and claim acceptance.",
      ],
    },

    {
      id: "city-side-support",
      title: "Chennai city-side support (Motor + Health + SME)",
      subtitle:
        "Personal motor renewals, health/LIC support, and SME office/shop packages with documentation clarity.",
      whyThisZoneMatters:
        "City-side queries are often ‘near me’ and renewal-driven. The value is clean renewal checks, correct add-ons, and claim-step clarity—without overpromises.",
      commonNeeds: [
        "Car/bike renewals: IDV/NCB/add-ons sanity checks",
        "SME packages for offices/shops (valuation + proof discipline)",
        "Claim-step readiness for motor incidents",
      ],
      topServices: buildServiceList([
        ["personal", "car-insurance-support", "Private car insurance support"],
        ["personal", "bike-insurance-support", "Two-wheeler insurance support"],
        ["business-msme", "shop-msme-insurance", "Shop & MSME package insurance"],
        ["claims-support", "claim-support", "Claim support (documents + timeline)"],
      ]),
      searchesPeopleUse: [
        "insurance agent near me",
        "car insurance renewal near me",
        "bike insurance renewal near me",
        "shop insurance near me",
      ],
      locations: pick([
        "perambur",
        "ambattur",
        "kolathur",
        "kolathur-commercial-pockets",
        "retteri",
        "villivakkam-industrial-areas",
        "mogappair-west",
        "koyambedu",
        "anna-nagar",
      ]).map(mk),
      zoneSignals: [
        "Renewal mistakes (IDV/NCB/add-ons) are common—simple checks prevent surprises.",
      ],
    },
  ];

  // Fallback “all locations” (for View All / search)
  const allSlugs = Object.keys(detail);
  const allLocations = allSlugs.map(mk);

  return {
    title: "Locations we serve (Chennai North + corridor belts)",
    subtitle:
      "Service guidance anchored to Sholavaram office support—organized by logistics/industrial belts and city-side support areas.",
    centralHub: {
      title: "Central support hub: Sholavaram",
      text: [
        "This is not a branch-directory page. Support is coordinated from Sholavaram, and location pages explain local context and common insurance needs.",
        "Commercial-first focus: NH-facing belts and industrial movement zones (transport/fleets, warehouses/godowns, factories, contractors, heavy equipment).",
        "City-side support: renewals and policy servicing for motor, health, LIC and SME shops/offices—guided with claim-ready documentation habits.",
      ],
    },

    // Intent routing (high-value links)
    intentRouter: {
      title: "Not sure which location page to open?",
      cards: [
        {
          title: "Insurance near me",
          desc: "How local support works, what to share first, and when insurer inspections apply.",
          href: EN("/insurance-near-me/"),
        },
        {
          title: "Insurance renewal near me",
          desc: "Renewal checks that prevent gaps: IDV/NCB/add-ons, permits/fitness where applicable.",
          href: EN("/insurance-renewal-near-me/"),
        },
        {
          title: "Insurance claim help",
          desc: "What to do first, which proofs matter, and how to keep a clean incident timeline.",
          href: EN("/insurance-claim-help/"),
        },
        {
          title: "Services hub",
          desc: "Browse transport/fleet, industrial property, contractor, MSME and claim support services.",
          href: EN("/services/"),
        },
      ],
    },

    // Claim-ready principles (keep; already strong)
    claimReadyPrinciples: {
      title: "What improves outcomes (simple, practical)",
      points: [
        "Correct disclosures + policy wording clarity before purchase/renewal—reduces disputes later.",
        "Documentation discipline: invoices, valuation proofs, photos, permits/fitness, worker records (where applicable).",
        "Timely reporting and clean incident timeline—done correctly to reduce avoidable delays.",
        "Renewal checks: prevent coverage gaps and mismatched add-ons.",
      ],
    },

    // Zones (the real upgrade)
    zones: ZONES,

    // For “View all” list (optional)
    allLocations: allLocations,

    // Small “search language” section (safe)
    searchLanguage: {
      title: "Search language people use",
      note:
        "These are common phrases people type to find local support. This page exists to route you to the right location and service guidance.",
      chips: takeUnique([
        "fleet insurance red hills",
        "lorry insurance red hills",
        "warehouse insurance madhavaram",
        "insurance agent near me",
        "insurance office near me",
        "commercial insurance near me",
        "insurance renewal near me",
        "insurance claim help near me",
      ], 14),
    },
  };
};

// helper used in builder (keep outside export if you prefer)
function takeUnique(list = [], n = 12) {
  return Array.from(new Set((list || []).filter(Boolean))).slice(0, n);
}

// ✅ Single source of truth for index (no mismatch)
// export const buildLocationsIndexFromDetail = (locationsDetail) => {
//   const detail = locationsDetail || {};
//   const has = (slug) => !!detail[slug];

//   // Order = your business priority
//   NH_PRIORITY.filter(has);

//   CITY_SIDE.filter(has);

//   const mk = (slug) => ({ slug, name: detail[slug].name });

//   return {
//     title: "Locations We Serve (Chennai North + NH Corridors)",
//     subtitle:
//       "Service guidance anchored to Sholavaram office support—focused on NH-facing belts (transport, warehouses, contractors, heavy equipment) and city-side areas for motor/health/LIC and SME needs.",
//     intro: [
//       "Primary base: Sholavaram (Chennai outskirts).",
//       "Commercial focus: NH belts and industrial movement zones (fleets, warehouses/godowns, factories, contractors, cranes/heavy equipment).",
//       "City-side support: car/bike, health, LIC and SME shops/offices—renewals + claim documentation guidance.",
//     ],
//     groups: [
//       {
//         id: "nh-industrial-belts",
//         title: "NH & industrial belts (commercial-first)",
//         subtitle:
//           "Areas with high commercial movement where policy wording + documentation discipline matters most for claims.",
//         locations: NH_PRIORITY.map(mk),
//       },
//       {
//         id: "city-areas",
//         title: "Chennai city-side areas (domestic + SME support)",
//         subtitle:
//           "Motor, health, LIC and small office/shop support—kept practical and claim-ready.",
//         locations: CITY_SIDE.map(mk),
//       },
//     ],
//     claimReadyPrinciples: {
//       title: "What improves outcomes (simple, practical)",
//       points: [
//         "Correct disclosures + policy wording clarity before purchase/renewal—reduces disputes later.",
//         "Documentation discipline: invoices, valuation proofs, photos, permits/fitness, worker records (where applicable).",
//         "Timely reporting and clean incident timeline—done correctly to reduce avoidable delays.",
//         "Renewal checks: prevent coverage gaps and mismatched add-ons.",
//       ],
//     },
//   };
// };

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

    geo,

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

servicesDetail,



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
      "We serve commercial insurance needs across Sholavaram (our base), Red Hills Toll belt, Madhavaram industrial area, and nearby Chennai North locations. Our focus includes transport fleets, warehouses, factories, and contractor operations.",

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
  { 
    title: "Lorry / Heavy Vehicle Insurance", 
    href: EN("/services/transport-fleet/lorry-insurance/"), 
    tag: "Transport",
    desc: "Comprehensive coverage for goods carriers with permit compliance, third-party liability protection, and 24/7 claim support for NH corridor operations."
  },
  { 
    title: "Commercial Vehicle Insurance", 
    href: EN("/services/transport-fleet/commercial-vehicle-insurance/"), 
    tag: "Transport",
    desc: "Fleet coverage for multi-axle vehicles, tippers, and transport operators—permit/fitness discipline, accident exposure, and claim documentation support."
  },
  { 
    title: "Goods Carrying Vehicle Insurance", 
    href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/"), 
    tag: "Transport",
    desc: "Specialized policies for cargo vehicles with loading-unloading risk coverage, transit exposure, and regulatory compliance guidance for highway operations."
  },
  { 
    title: "Warehouse Insurance", 
    href: EN("/services/industrial/warehouse-insurance/"), 
    tag: "Industrial",
    desc: "Fire, stock, and burglary coverage for godowns and storage facilities—includes stock declaration support and valuation alignment for claim readiness."
  },
  { 
    title: "Shop & MSME Insurance", 
    href: EN("/services/business-msme/shop-msme-insurance/"), 
    tag: "Commercial",
    desc: "Package policies for retail shops, offices, and small businesses—covers property, stock, liability, and provides wording clarity to prevent claim disputes."
  },
  { 
    title: "Contractor / Construction Insurance", 
    href: EN("/services/construction/contractor-car-wc-insurance/"), 
    tag: "Construction",
    desc: "CAR/WC policies for active worksites—workforce risk, equipment coverage, site liability, and timeline-driven claim documentation for project-based operations."
  },
  { 
    title: "Crane / Heavy Equipment (CPM)", 
    href: EN("/services/heavy-equipment/crane-cpm-insurance/"), 
    tag: "Heavy Equipment",
    desc: "Contractors Plant & Machinery insurance for cranes, excavators, and heavy equipment—declared value clarity, third-party exposure, and breakdown coverage."
  },
  { 
    title: "Claim Support & Documentation", 
    href: EN("/services/claims-support/"), 
    tag: "Claims",
    desc: "Step-by-step guidance on claim documentation, timeline management, and reporting workflows—built to reduce delays and improve settlement outcomes."
  },
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
locationsIndex: buildLocationsIndexFromDetail(
  locationsDetail,
  EN,
  servicesDetail
),


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

// ===========================
// INTENT PAGES (Near-me, renewal, claim help, etc.)
// ===========================
intentPages: {
  // 1) insurance-near-me
  "insurance-near-me": {
    slug: "insurance-near-me",
    seoTitle: "Insurance Near Me (Agent & Office Support) – Sholavaram / Chennai North",
    seoDesc:
      "Local insurance support from Sholavaram office: renewals, claim documentation guidance, and commercial/vehicle/industrial insurance help across Chennai North and corridor belts.",
    heroH1: "Insurance near me (Sholavaram office support)",
    heroP:
      "If you searched “insurance near me”, this page explains what local support means: where we operate, how to reach us, and how we help with renewals, claims and policy guidance—without overpromises.",
    intentSignals: [
      "insurance near me",
      "insurance agent near me",
      "insurance office near me",
      "insurance agency near me",
      "insurance consultant near me",
    ],
    whoThisHelps: [
      "People looking for a nearby insurance agent/office (Sholavaram + Chennai North belts).",
      "Customers who need renewal checks, claim documentation guidance, or coverage clarity before buying.",
      "Commercial operators who prefer documentation-first guidance (transport, warehouses, contractors).",
    ],
    whatYouGet: [
      "Clear checklist of what to carry for renewals and new policies (vehicle or business).",
      "Guidance on claim steps and required documents (case-dependent).",
      "Local context: where we commonly support, and when insurer inspection rules apply.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share basics", text: "WhatsApp/call with policy type, location, and renewal/claim requirement." },
      { title: "Step 2 — Document checklist", text: "We tell you what documents are typically needed (as applicable) and what to avoid." },
      { title: "Step 3 — Policy/renewal clarity", text: "We align wording, declared values, and operational details to reduce future disputes." },
    ],
    office: {
      title: "Sholavaram office",
      bullets: [
        "Base support location: Sholavaram (Chennai outskirts).",
        "For directions: use our Google Business Profile map listing.",
        "Call/WhatsApp before visiting so you bring the correct documents (as applicable).",
      ],
      mapCtaLabel: "Open Google Maps listing",
      mapCtaHref: null, // if you want: siteData.brand.gbpUrl
    },
    commonAreasTitle: "Areas we commonly support",
    commonAreasCta: { label: "See locations page", href: EN("/locations/") },

    // Link out to structured pages (avoid stuffing)
    quickLinks: [
      { label: "Services", href: EN("/services/") },
      { label: "Locations", href: EN("/locations/") },
      { label: "FAQs", href: EN("/faqs/") },
      { label: "About", href: EN("/about/") },
    ],

    // Keep these lean; do not repeat full service content here
    recommendedServices: [
      { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
      { label: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
      { label: "Transport & Fleet", href: EN("/services/transport-fleet/") },
      { label: "Industrial & Property", href: EN("/services/industrial/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],

    faqs: [
      {
        q: "Do you serve only Sholavaram?",
        a:
          "Sholavaram is our base area. We commonly support nearby belts across Chennai North/outskirts depending on the policy type and insurer requirements.",
      },
      {
        q: "Can you help if I only have WhatsApp photos of documents?",
        a:
          "Yes. WhatsApp photos are useful for initial guidance and checklists. Final insurer requirements can vary by policy and case type.",
      },
      {
        q: "Do you guarantee claim approval?",
        a:
          "No. Claim outcomes depend on policy terms, disclosures, evidence and insurer process. Our role is to guide correct steps and reduce avoidable delays.",
      },
      {
        q: "What documents should I carry for a vehicle renewal visit?",
        a:
          "Usually RC, previous policy copy, owner details. For commercial vehicles, permit/fitness details may be needed (as applicable).",
      },
      {
        q: "What should I carry for business/warehouse insurance guidance?",
        a:
          "Business type, exact location, a simple stock/assets list and invoices/valuation basis where available. Photos help in some cases (as applicable).",
      },
    ],
    autoLink: {
  enabled: true,
  contexts: ["home", "locations", "locationDetail", "services", "serviceDetail", "generic"],
  priority: 30,
  tags: ["local", "near-me", "office", "entry"],
},
  },

  // 2) insurance-renewal-near-me
  "insurance-renewal-near-me": {
    slug: "insurance-renewal-near-me",
    seoTitle: "Insurance Renewal Near Me – Car, Commercial Vehicle & Policy Renewal Support",
    seoDesc:
      "Renewal guidance via Sholavaram office support: avoid gaps, check IDV/NCB/add-ons, and keep documentation clean for smoother claims later.",
    heroH1: "Insurance renewal near me (policy renewal support)",
    heroP:
      "Renewals are where most expensive mistakes happen—wrong IDV/NCB, missing add-ons, coverage gaps, or commercial document mismatches. This page explains a practical renewal workflow.",
    intentSignals: [
      "insurance renewal near me",
      "policy renewal near me",
      "car insurance renewal near me",
      "commercial insurance renewal near me",
      "policy renewal company near me",
    ],
    renewalChecks: {
      title: "Renewal checks that prevent claim problems",
      bullets: [
        "Correct NCB and claim history alignment (avoid mismatch).",
        "IDV realism (especially for older vehicles).",
        "Add-ons chosen based on usage (not default).",
        "Commercial documents: RC/permit/fitness alignment (as applicable).",
        "No coverage gaps: expiry dates, break-in rules (case-dependent).",
      ],
    },
    recommendedLinks: [
      { label: "Services", href: EN("/services/") },
      { label: "Claim Help", href: EN("/insurance-claim-help/") },
      { label: "Locations", href: EN("/locations/") },
      { label: "FAQs", href: EN("/faqs/") },
    ],
    faqs: [
      {
        q: "Do I need to renew before expiry?",
        a:
          "Yes, renewing on time helps avoid gaps and extra rules. The right approach depends on policy type and insurer process.",
      },
      {
        q: "What is the biggest mistake in renewals?",
        a:
          "Renewing blindly without checking IDV/NCB/add-ons and (for commercial) permit/fitness alignment (as applicable).",
      },
      {
        q: "Can you help with commercial vehicle renewal documentation?",
        a:
          "Yes. We guide the document checklist and ensure the renewal details match real usage and compliance (as applicable).",
      },
      {
        q: "Can renewal affect future claims?",
        a:
          "Yes. Coverage gaps, wrong disclosures, and mismatched details can create avoidable disputes later.",
      },
    ],
    autoLink: {
  enabled: true,
  contexts: ["home", "faqs", "services", "serviceDetail", "serviceCategory", "locations", "locationDetail", "generic"],
  priority: 25,
  tags: ["renewal", "urgent", "high-intent"],
},

  }, 

  // 3) insurance-claim-help
  "insurance-claim-help": {
    slug: "insurance-claim-help",
    seoTitle: "Insurance Claim Help – Documents, Timeline & Next Steps (Sholavaram Support)",
    seoDesc:
      "Claim guidance: what to do first, what documents matter, FIR vs non-FIR cases, and how to keep a clean incident timeline to reduce delays.",
    heroH1: "Insurance claim help (what to do first)",
    heroP:
      "Claim delays are usually caused by late reporting, missing proof, unclear timelines, or policy wording mismatches. This page explains a practical claim workflow—without promising outcomes.",
    intentSignals: [
      "insurance claim help",
      "claim rejected what to do",
      "insurance claim support near me",
      "claim documents needed",
      "insurance claim consultant",
    ],
    claimWorkflow: {
      title: "A practical claim workflow",
      steps: [
        "Safety first. Then capture photos/videos (as applicable) before repairs.",
        "Inform insurer/agent early (don’t wait until next day).",
        "Keep a clean incident timeline (what happened first/second/third).",
        "Collect documents: policy copy/endorsements, IDs, reports if applicable.",
        "Follow survey/inspection steps if required before repairs.",
      ],
    },
    whatOftenDelays: {
      title: "What commonly delays claims",
      bullets: [
        "Late intimation/reporting.",
        "No clean incident timeline or missing first-day photos (as applicable).",
        "Missing invoices/valuation proof for stock/assets (as applicable).",
        "Mismatch between operations and policy wording.",
      ],
    },
    recommendedLinks: [
      { label: "FAQ page", href: EN("/faqs/") },
      { label: "Claim Support service", href: EN("/services/claims-support/") },
      { label: "Locations", href: EN("/locations/") },
    ],
    faqs: [
      {
        q: "Do I always need an FIR?",
        a:
          "Not always. FIR requirements depend on incident type, third-party involvement, injury/theft and insurer process. We guide the correct path for your case.",
      },
      {
        q: "Can I start repairs immediately?",
        a:
          "Avoid repairs before photos and insurer guidance. Early repairs can remove proof; follow survey/inspection steps if required.",
      },
      {
        q: "Do you guarantee claim approval?",
        a:
          "No. We help you follow correct steps and keep evidence/timelines clean to reduce avoidable delays.",
      },
      {
        q: "What are the most important documents?",
        a:
          "Policy copy + endorsements, incident timeline, first-day photos/videos (as applicable), and required reports when applicable.",
      },
    ],
    autoLink: {
  enabled: true,
  contexts: ["home", "faqs", "services", "serviceDetail", "serviceCategory", "locations", "locationDetail", "generic"],
  priority: 22,
  tags: ["claim", "urgent", "high-intent"],
},

  },

  // 4) buy-insurance-guidance
  "buy-insurance-guidance": {
    slug: "buy-insurance-guidance",
    seoTitle: "Buy Insurance Guidance – How to Choose Correct Coverage (No Confusion)",
    seoDesc:
      "A decision guide: what to disclose, what wording matters, which add-ons help, and how to choose sum insured/declared values to avoid disputes later.",
    heroH1: "Buy insurance (how to choose correctly)",
    heroP:
      "Buying online or offline isn’t the real risk. The real risk is wrong disclosures, wrong declared values, and misunderstanding policy wording. This page explains how to choose correctly.",
    intentSignals: [
      "buy insurance",
      "best insurance agent",
      "insurance advisor",
      "which insurance to buy",
      "insurance consultant near me",
    ],
    decisionFramework: {
      title: "A practical decision framework",
      bullets: [
        "Start with your real usage/operations (not generic assumptions).",
        "Match disclosures to reality (route, storage, workforce, public exposure).",
        "Choose add-ons based on usage (avoid default add-ons).",
        "Keep proof discipline simple: invoices/photos/records (as applicable).",
      ],
    },
    recommendedLinks: [
      { label: "Services", href: EN("/services/") },
      { label: "Locations", href: EN("/locations/") },
      { label: "About", href: EN("/about/") },
    ],
    faqs: [
      {
        q: "Is buying insurance online safe?",
        a:
          "Yes, if disclosures and wording match your real usage and you keep proof discipline. We help verify the few things that decide claim outcomes.",
      },
      {
        q: "What matters more than premium?",
        a:
          "Wording fit, correct declared value/sum insured, and documentation readiness. Cheapest policies fail when reality doesn’t match wording.",
      },
      {
        q: "Do you help with commercial buying decisions?",
        a:
          "Yes—especially transport, warehouse/property and contractor workflows where documentation and disclosures decide outcomes later.",
      },
    ],
    autoLink: {
  enabled: true,
  contexts: ["home", "services", "serviceCategory", "generic"],
  priority: 45,
  tags: ["buyer", "guidance", "comparison"],
},

  },

  // 5) spot-insurance-support
  "spot-insurance-support": {
    slug: "spot-insurance-support",
    seoTitle: "Spot Insurance Support – On-Site Visit & Documentation Help (As Applicable)",
    seoDesc:
      "Explains what “spot/on-site insurance support” realistically means: document collection, inspection rules, when a visit is possible, and what is handled remotely.",
    heroH1: "Spot insurance support (on-site visit — as applicable)",
    heroP:
      "Some customers prefer on-site help for documents or verification. This page explains what can be done on-site, what must follow insurer inspection rules, and what can be handled remotely.",
    intentSignals: [
      "spot insurance",
      "insurance agent visit",
      "on-site insurance support",
      "insurance agent at location",
      "field insurance support",
    ],
    realityChecks: {
      title: "What on-site support can and cannot do",
      bullets: [
        "We can help with document checklist preparation and collection (as applicable).",
        "Insurer inspections are controlled by insurer rules (not by us).",
        "Some cases can be handled entirely via WhatsApp/phone; others require in-person steps.",
      ],
    },
    recommendedLinks: [
      { label: "Remote support", href: EN("/remote-insurance-support/") },
      { label: "Locations", href: EN("/locations/") },
      { label: "Claim help", href: EN("/insurance-claim-help/") },
    ],
    faqs: [
      {
        q: "Do you come to my location for insurance work?",
        a:
          "In some cases, yes—depending on the requirement and feasibility. Insurer inspections follow insurer process and rules.",
      },
      {
        q: "Is on-site visit required for every policy?",
        a:
          "No. Many renewals and guidance steps can be handled remotely. Some cases require physical verification depending on insurer rules.",
      },
    ],
    autoLink: {
  enabled: true,
  contexts: ["home", "locations", "locationDetail", "services", "generic"],
  priority: 55,
  tags: ["spot", "visit", "on-site"],
},

  },

  // 6) remote-insurance-support
  "remote-insurance-support": {
    slug: "remote-insurance-support",
    seoTitle: "Remote Insurance Support – WhatsApp, Phone & Document Guidance",
    seoDesc:
      "Remote insurance support via WhatsApp/phone: what we can do remotely, what documents to share, and what requires insurer inspection or physical steps.",
    heroH1: "Remote insurance support (WhatsApp + phone)",
    heroP:
      "Most guidance, renewals and document checklists can start remotely. This page explains what to share, how we work remotely, and when insurer rules require physical steps.",
    intentSignals: [
      "insurance support WhatsApp",
      "online insurance help",
      "remote insurance agent",
      "phone insurance support",
      "digital insurance assistance",
    ],
    whatRemoteWorksFor: {
      title: "What remote support works well for",
      bullets: [
        "Renewal checks (IDV/NCB/add-ons; permit/fitness as applicable).",
        "Document checklist guidance for claims and approvals (as applicable).",
        "Basic policy comparison and wording clarity based on your situation.",
      ],
    },
    whatMayNeedPhysical: {
      title: "What may require physical steps",
      bullets: [
        "Insurer inspection/verification in high-risk cases (insurer-controlled).",
        "Original documents when required by insurer process (case-dependent).",
      ],
    },
    recommendedLinks: [
      { label: "Insurance near me", href: EN("/insurance-near-me/") },
      { label: "Renewal support", href: EN("/insurance-renewal-near-me/") },
      { label: "Claim help", href: EN("/insurance-claim-help/") },
    ],
    faqs: [
      {
        q: "Can I start with WhatsApp photos of documents?",
        a:
          "Yes. Photos help us guide checklists and next steps. Final insurer requirements may vary by policy and case type.",
      },
      {
        q: "Will remote support work for commercial vehicles?",
        a:
          "Often, yes for renewals and documentation guidance. Insurer inspections and compliance checks depend on case type and insurer rules.",
      },
    ],
    autoLink: {
  enabled: true,
  contexts: ["home", "services", "serviceDetail", "generic"],
  priority: 35,
  tags: ["remote", "whatsapp", "convenience", "hni"],
},

  },
  // ===========================
// NEW INTENT PAGES (high CTR + high conversion)
// ===========================

"insurance-agent-not-responding": {
  slug: "insurance-agent-not-responding",
  seoTitle: "Insurance Agent Not Responding? We Help Manage Renewal, Claims & Policy Updates",
  seoDesc:
    "If your insurance agent is not responding or unavailable, we help you take control: renewal checks, claim documentation guidance, and policy clarity via WhatsApp/phone (Sholavaram / Chennai North support).",
  heroH1: "Insurance agent not responding (what to do next)",
  heroP:
    "If your agent stopped responding, moved away, or you don’t know whom to contact, you don’t need to restart from zero. This page shows how to verify your current policy status, renew safely, and get claim/document guidance—without overpromises.",

  intentSignals: [
    "insurance agent not responding",
    "insurance agent not available",
    "agent not picking call insurance",
    "my insurance agent changed",
    "who will manage my policy",
  ],

  whoThisHelps: [
    "People whose agent is not responding / stopped service / moved away.",
    "Customers holding an existing policy but unsure about renewal dates, NCB/IDV/add-ons, or endorsements.",
    "Commercial operators who need document clarity (permit/fitness/stock proof etc. as applicable).",
  ],

  whatYouGet: [
    "Policy status check: expiry date, insurer name, basic coverage sanity checks (from your documents).",
    "Renewal guidance to avoid gaps and mismatch issues (NCB/IDV/add-ons; commercial docs as applicable).",
    "Claim documentation guidance and timeline discipline (case-dependent).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Share what you have", text: "WhatsApp policy copy / previous schedule / RC or basic business details (as applicable)." },
    { title: "Step 2 — Quick checks", text: "We check expiry, obvious mismatch risks, and what documents are typically needed next (as applicable)." },
    { title: "Step 3 — Action path", text: "Renewal/switch/claim next steps with a clean checklist. Insurer rules apply (case-dependent)." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "WhatsApp/phone support first to avoid unnecessary visits.",
      "If in-person is needed, we’ll tell you what documents to carry (as applicable).",
      "We commonly support Chennai North and nearby corridor belts.",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
    { label: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
    { label: "Remote Insurance Support", href: EN("/remote-insurance-support/") },
    { label: "Transport & Fleet", href: EN("/services/transport-fleet/") },
    { label: "Industrial & Property", href: EN("/services/industrial/") },
  ],

  faqs: [
    { q: "Do I need to cancel my old policy to switch agents?", a: "Not necessarily. First we verify the policy status, renewal date and what you want (renew/switch/claim). The correct approach depends on insurer process and your case." },
    { q: "Can you help if I only have WhatsApp photos of documents?", a: "Yes. Photos help for initial checks and guidance. Final insurer requirements can vary by policy and case type." },
    { q: "Do you guarantee claim approval?", a: "No. Claim outcomes depend on policy terms, disclosures, evidence and insurer process. We guide correct steps to reduce avoidable delays." },
  ],
  autoLink: {
  enabled: true,
  contexts: ["home", "faqs", "services", "generic"],
  priority: 18,
  tags: ["agent", "unavailable", "switch", "high-intent"],
},

},

"manage-existing-insurance-policy": {
  slug: "manage-existing-insurance-policy",
  seoTitle: "Manage My Existing Insurance Policy – Renewal Tracking, Endorsements & Claim-Ready Checks",
  seoDesc:
    "Have an existing policy but no proper follow-up? We help manage basics: renewal tracking, IDV/NCB/add-on checks, endorsements, and documentation discipline (vehicle/business cases as applicable).",
  heroH1: "Manage my existing policy (renewal + clarity + documentation)",
  heroP:
    "Many people already have policies but lose money during renewal or claim time due to missing documents, coverage gaps, wrong declared values, or endorsements not matching reality. This page shows a simple management workflow.",

  intentSignals: [
    "manage my insurance policy",
    "existing policy support",
    "insurance policy follow up",
    "insurance endorsement help",
    "policy document missing",
  ],

  whoThisHelps: [
    "Policy holders who want renewal reminders/checks and clean documentation discipline.",
    "Businesses with recurring renewals across vehicles, assets or property (as applicable).",
    "Anyone who wants clarity before switching insurers or changing agent.",
  ],

  whatYouGet: [
    "Renewal check checklist (IDV/NCB/add-ons; commercial docs as applicable).",
    "Endorsement clarity: when policy wording must be updated (case-dependent).",
    "Claim readiness habits: evidence/timeline discipline to reduce friction later.",
  ],

  howSupportWorks: [
    { title: "Step 1 — Inventory", text: "Share policy copies / list of policies (vehicle/business/property as applicable)." },
    { title: "Step 2 — Risk checks", text: "We flag common mismatch risks (usage/valuation/endorsement/document gaps)." },
    { title: "Step 3 — Maintain", text: "You keep a simple folder + renewal discipline; we guide checklists when needed." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Remote support works for most policy checks and guidance.",
      "For inspections/physical steps, insurer rules apply (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Buy Insurance Guidance", href: EN("/buy-insurance-guidance/") },
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
    { label: "Claim Help", href: EN("/insurance-claim-help/") },
    { label: "Remote Support", href: EN("/remote-insurance-support/") },
  ],

  faqs: [
    { q: "Is this only for business policies?", a: "No. This helps vehicle, business and property policy holders. The checklist differs by policy type (as applicable)." },
    { q: "Can you help if my policy is close to expiry?", a: "Yes. Start with the expiry date and documents you have. We guide next steps to avoid gaps and mismatch issues." },
  ],
  autoLink: {
  enabled: true,
  contexts: ["home", "services", "generic"],
  priority: 60,
  tags: ["existing-policy", "management", "renewal"],
},

},

"switch-insurance-company": {
  slug: "switch-insurance-company",
  seoTitle: "Switch Insurance Company – Smooth Transition Without Missing Renewal / Claim-Readiness",
  seoDesc:
    "Planning to switch insurers due to poor service or high premium? We help you switch safely: renewal timing, NCB/claim history alignment, and documentation clarity (vehicle/business cases as applicable).",
  heroH1: "Switch insurance company (how to do it safely)",
  heroP:
    "Switching is easy when you time it correctly and keep disclosures clean. Most problems happen when people switch blindly—NCB mismatches, coverage gaps, or missing endorsements. This page explains a safe switching workflow.",

  intentSignals: [
    "switch insurance company",
    "change insurance provider",
    "change insurer renewal",
    "better insurance alternative",
    "switch car insurance",
  ],

  whoThisHelps: [
    "People switching due to poor claim service, poor agent support, or confusing policy terms.",
    "Vehicle owners who want clean renewal without NCB/IDV issues.",
    "Businesses switching policies after operational changes (as applicable).",
  ],

  whatYouGet: [
    "Switch timing guidance (avoid gaps and break-in rules where applicable).",
    "NCB/claim history alignment checks (common mismatch issue).",
    "Disclosure/endorsement clarity so the new policy matches real usage/operations (as applicable).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Current policy snapshot", text: "Share current policy + expiry date + what changed (usage/route/stock/assets as applicable)." },
    { title: "Step 2 — Switch safety checks", text: "We check NCB/IDV/add-ons and common mismatch risks before switching." },
    { title: "Step 3 — Execute cleanly", text: "We guide the checklist and next steps. Final acceptance depends on insurer rules." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Most switching checks can start on WhatsApp/phone.",
      "Commercial/industrial cases may need extra documents (as applicable).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
    { label: "Buy Insurance Guidance", href: EN("/buy-insurance-guidance/") },
    { label: "Remote Support", href: EN("/remote-insurance-support/") },
    { label: "Claim Help", href: EN("/insurance-claim-help/") },
  ],

  faqs: [
    { q: "Can I switch anytime?", a: "You can, but timing matters. Avoid coverage gaps and follow insurer rules (case-dependent). Most people switch at renewal for simplicity." },
    { q: "Will switching affect claims?", a: "Claims depend on policy terms and evidence. The key is clean disclosures and no coverage gaps." },
  ],
  autoLink: {
  enabled: true,
  contexts: ["home", "faqs", "services", "generic"],
  priority: 28,
  tags: ["switch", "compare", "renewal"],
},

},

"policy-expired-what-to-do": {
  slug: "policy-expired-what-to-do",
  seoTitle: "Policy Expired? What To Do Next – Avoid Gaps, Break-in Rules & Costly Mistakes",
  seoDesc:
    "If your insurance policy expired or is about to expire, act fast. We guide renewal steps, gap risks, and case-dependent insurer rules (Sholavaram / Chennai support).",
  heroH1: "Policy expired (what to do now)",
  heroP:
    "Expired policies can trigger gaps and extra rules (case-dependent). This page explains the fastest safe path: what to check first, what documents you’ll need, and how to avoid costly mistakes.",

  intentSignals: [
    "policy expired what to do",
    "insurance expired renewal",
    "car insurance expired",
    "commercial policy expired",
    "renew after expiry",
  ],

  whoThisHelps: [
    "Vehicle owners whose policy expired or is expiring today/this week.",
    "Commercial operators needing renewal without document mismatch (as applicable).",
    "Anyone who wants the fastest safe path via WhatsApp/phone.",
  ],

  whatYouGet: [
    "Immediate checklist: what to share first (policy copy/RC/basic details).",
    "Gap-risk guidance: what changes when expiry passes (case-dependent).",
    "Renewal sanity checks (IDV/NCB/add-ons; commercial docs as applicable).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Send expiry + document photo", text: "WhatsApp the policy/RC (or basic business details as applicable) and expiry date." },
    { title: "Step 2 — Quick risk check", text: "We tell you the safest next step based on gap length and insurer rules (case-dependent)." },
    { title: "Step 3 — Renew cleanly", text: "We guide the checklist and sequence to avoid avoidable disputes later." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Start remote first. Many cases don’t require a visit.",
      "If physical steps apply, insurer rules decide (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
    { label: "Remote Support", href: EN("/remote-insurance-support/") },
    { label: "Insurance Near Me", href: EN("/insurance-near-me/") },
  ],

  faqs: [
    { q: "Is it okay if my policy expired yesterday?", a: "Act immediately. What changes depends on policy type and insurer rules (case-dependent). We guide the safest next step." },
    { q: "Do you guarantee renewal acceptance?", a: "No. Acceptance depends on insurer rules and case details. We help reduce avoidable mistakes and delays." },
  ],
  autoLink: {
  enabled: true,
  contexts: ["home", "faqs", "services", "locations", "locationDetail", "generic"],
  priority: 12,
  tags: ["expired", "urgent", "renewal"],
},

},

"insurance-renewal-for-admin-teams": {
  slug: "insurance-renewal-for-admin-teams",
  seoTitle: "Insurance Renewal for Admin/Accounts Teams – Document Checklists & Renewal Discipline",
  seoDesc:
    "Admin or accounts handling renewals? We help with structured checklists: policy copies, endorsements, permit/fitness (as applicable), asset/stock proof, and renewal timing for smoother claims later.",
  heroH1: "Renewal support for admin / accounts teams",
  heroP:
    "In SMEs, renewals are usually handled by admin/accounts—not the owner. This page gives a practical workflow to keep renewals clean: documents, checklists, and a simple discipline that prevents claim disputes later.",

  intentSignals: [
    "insurance renewal company",
    "policy renewal admin",
    "insurance documents missing",
    "commercial insurance renewal help",
    "fleet renewal support",
  ],

  whoThisHelps: [
    "Admin/accounts teams managing renewals for vehicles, warehouses, MSMEs (as applicable).",
    "Teams needing document checklists and a simple renewal calendar discipline.",
    "Businesses facing recurring renewal confusion across multiple policies.",
  ],

  whatYouGet: [
    "A renewal checklist template (what to keep in one folder).",
    "Mismatch prevention checks (NCB/IDV/add-ons; commercial compliance docs as applicable).",
    "Claim-readiness discipline: how to keep evidence/timelines clean if incidents happen.",
  ],

  howSupportWorks: [
    { title: "Step 1 — Policy list", text: "Share a list of policies (vehicle/property/liability as applicable) and expiry dates." },
    { title: "Step 2 — Checklist + risk flags", text: "We send checklist items and flag common risk areas (documents, endorsements, valuation proof as applicable)." },
    { title: "Step 3 — Renewal execution", text: "Renew cleanly, avoid gaps, keep copies organized for future claims." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "WhatsApp-first support works well for admin teams.",
      "Commercial/industrial renewals may need additional proof (as applicable).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
    { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { label: "Transport & Fleet", href: EN("/services/transport-fleet/") },
    { label: "Renewal Support", href: EN("/insurance-renewal-near-me/") },
    { label: "Claim Help", href: EN("/insurance-claim-help/") },
  ],

  faqs: [
    { q: "Do you work with admin/accounts directly?", a: "Yes. Many renewals are handled by admin/accounts. WhatsApp checklists reduce confusion and rework." },
    { q: "Do you handle fleet renewals?", a: "We guide checklists and renewal discipline. Exact insurer process depends on policy type and case details." },
  ],
  autoLink: {
  enabled: true,
  contexts: ["home", "services", "serviceCategory", "serviceDetail", "generic"],
  priority: 40,
  tags: ["admin", "accounts", "b2b", "renewal", "high-premium"],
},

},

// 1) Same-day renewal (urgent / high conversion)
"same-day-insurance-renewal": {
  slug: "same-day-insurance-renewal",

  autoLink: {
    enabled: true,
    contexts: ["home", "faqs", "services", "locations", "locationDetail", "generic"],
    priority: 14,
    tags: ["renewal", "same-day", "urgent", "high-intent"],
  },

  seoTitle: "Same-Day Insurance Renewal – Fast Checklist for Car/Commercial Renewals (Chennai Support)",
  seoDesc:
    "Need renewal today? Get a practical same-day renewal checklist: what to share on WhatsApp, what slows renewals, and when insurer rules may require extra steps (case-dependent).",
  heroH1: "Same-day insurance renewal (what we can do today)",
  heroP:
    "If your renewal is urgent, the goal is simple: avoid a coverage gap and avoid renewal mistakes that create claim disputes later. Same-day renewals are possible in many cases, but timing and insurer rules matter (case-dependent). This page explains the fastest safe path.",

  intentSignals: [
    "same day insurance renewal",
    "renew insurance today",
    "car insurance renewal today",
    "commercial vehicle renewal today",
    "urgent insurance renewal",
  ],

  whoThisHelps: [
    "Vehicle owners whose policy expires today / within 1–2 days.",
    "Commercial operators needing renewal without document mismatch (RC/permit/fitness as applicable).",
    "Busy customers who want WhatsApp-first processing and clear checklists.",
  ],

  whatYouGet: [
    "Same-day checklist: what to share first to avoid back-and-forth (policy copy + RC + expiry date; permits/fitness as applicable).",
    "Renewal checks that prevent later disputes: NCB, IDV realism, add-on selection based on real usage (not defaults).",
    "Clarity on what can slow renewals: missing documents, mismatch in usage/disclosures, break-in rules if expiry has passed (case-dependent).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Send basics now", text: "WhatsApp previous policy + RC + expiry date. For commercial, share permit/fitness status (as applicable)." },
    { title: "Step 2 — Quick verification checks", text: "We check NCB/claim history alignment, IDV sanity, and obvious mismatch risks before proceeding." },
    { title: "Step 3 — Renew safely", text: "We guide the cleanest next step. Final acceptance depends on insurer process and timing (case-dependent)." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Start on WhatsApp/phone for fastest response.",
      "If physical steps are required, it depends on insurer rules and case type (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
    { label: "Policy Expired – What to do", href: EN("/policy-expired-what-to-do/") },
    { label: "Remote Insurance Support", href: EN("/remote-insurance-support/") },
    { label: "Transport & Fleet", href: EN("/services/transport-fleet/") },
  ],

  faqs: [
    { q: "Can renewal be done the same day?", a: "Often yes for many cases, but it depends on document readiness and insurer process. If expiry has passed, break-in/inspection rules can apply (case-dependent)." },
    { q: "What slows down urgent renewals most?", a: "Missing documents, mismatch in NCB/claim history, unclear usage disclosures, and expired compliance documents for commercial vehicles (as applicable)." },
    { q: "Do you guarantee same-day completion?", a: "No. We can move fast with correct inputs, but insurer rules and case type decide timelines (case-dependent)." },
  ],
},

// 2) Break-in renewal / inspection rules (high-intent confusion)
"break-in-insurance-renewal": {
  slug: "break-in-insurance-renewal",

  autoLink: {
    enabled: true,
    contexts: ["home", "faqs", "services", "generic"],
    priority: 16,
    tags: ["renewal", "break-in", "inspection", "high-intent"],
  },

  seoTitle: "Break-in Renewal / Inspection Renewal – What Changes After Policy Expiry (Practical Guide)",
  seoDesc:
    "If your policy has expired, break-in renewal rules may apply (inspection, timelines, documentation). This page explains what to do first and how to avoid mistakes that delay renewal (case-dependent).",
  heroH1: "Break-in renewal (renewing after expiry — what changes)",
  heroP:
    "When a policy expires, renewal is not always the same as renewing on time. Some insurers require additional steps such as inspection/verification and specific timelines (case-dependent). This page gives a practical workflow so you don’t waste days doing the wrong thing.",

  intentSignals: [
    "break in renewal",
    "break-in insurance renewal",
    "renew insurance after expiry",
    "inspection required for renewal",
    "lapsed policy renewal",
  ],

  whoThisHelps: [
    "Customers whose motor policy already expired (car/bike/commercial).",
    "Anyone told “inspection is required” and unsure how to proceed.",
    "Commercial operators where compliance documents matter (permit/fitness as applicable).",
  ],

  whatYouGet: [
    "A simple decision tree: expired today vs expired many days (case-dependent) and what typically changes.",
    "Document checklist to speed up the process (policy copy/RC; permits/fitness as applicable).",
    "Common mistakes that delay break-in renewals: starting repairs, hiding changes, wrong disclosures, missing compliance documents (as applicable).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Confirm expiry + policy type", text: "WhatsApp the previous policy copy and tell us when it expired." },
    { title: "Step 2 — Identify the safest path", text: "We tell you what usually changes post-expiry and what insurers commonly require (case-dependent)." },
    { title: "Step 3 — Execute with clean disclosures", text: "We guide the checklist and sequence. Final rules depend on insurer/product (case-dependent)." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Break-in renewals often start remotely with documents.",
      "Any inspection/verification is insurer-controlled (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Policy Expired – What to do", href: EN("/policy-expired-what-to-do/") },
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
    { label: "Remote Insurance Support", href: EN("/remote-insurance-support/") },
  ],

  faqs: [
    { q: "Is inspection always required for break-in renewal?", a: "Not always. It depends on insurer rules, how long the policy has lapsed, and the policy type (case-dependent)." },
    { q: "What should I avoid during break-in renewal?", a: "Avoid assumptions. Share accurate details, keep documents ready, and follow the correct sequence. For commercial vehicles, expired permits/fitness can cause friction (as applicable)." },
  ],
},

// 3) Claim rejected / repudiation help (separate from general claim help)
"claim-rejected-what-to-do": {
  slug: "claim-rejected-what-to-do",

  autoLink: {
    enabled: true,
    contexts: ["home", "faqs", "services", "generic"],
    priority: 15,
    tags: ["claim", "rejected", "repudiation", "urgent", "high-intent"],
  },

  seoTitle: "Claim Rejected? What To Do – Next Steps, Documents & Common Rejection Reasons (Guidance)",
  seoDesc:
    "If your insurance claim was rejected/repudiated, don’t panic. This page explains the typical reasons, what documents matter, and how to build a clean timeline and escalation file (case-dependent).",
  heroH1: "Claim rejected (what to do next — practical steps)",
  heroP:
    "Claim rejection usually happens due to timeline gaps, missing evidence, disclosure mismatch, or documentation issues—not because insurance is ‘impossible’. This page explains how to整理 your evidence and what to check first so you can take the next step intelligently (case-dependent).",

  intentSignals: [
    "claim rejected what to do",
    "insurance claim repudiated",
    "claim rejected reasons",
    "how to reopen insurance claim",
    "claim escalation help",
  ],

  whoThisHelps: [
    "Vehicle owners whose claim was rejected due to reporting/evidence/document gaps (case-dependent).",
    "Businesses with property/warehouse claims where proof/valuation trail is questioned (as applicable).",
    "Customers unsure whether the rejection is final or a documentation/process issue (case-dependent).",
  ],

  whatYouGet: [
    "A rejection triage: what to read first (repudiation letter / survey notes / communications timeline).",
    "Evidence file checklist: photos, first report, repair estimates, invoices/register proof for stock/assets (as applicable).",
    "Common rejection triggers explained in plain language: late intimation, inconsistent timeline, missing endorsements, usage mismatch, proof trail gaps (case-dependent).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Share rejection details", text: "WhatsApp the repudiation/rejection note, surveyor notes (if any), and your incident timeline." },
    { title: "Step 2 — Identify the gap", text: "We identify which part is missing/unclear: timeline, evidence, documents, or policy wording mismatch (case-dependent)." },
    { title: "Step 3 — Build a clean file", text: "We guide a structured checklist for your next step. Outcomes depend on insurer process and facts (case-dependent)." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Rejection analysis is easiest when documents are shared on WhatsApp first.",
      "We don’t promise outcomes; we focus on correct process and clean evidence discipline.",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
    { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    { label: "Buy Insurance Guidance", href: EN("/buy-insurance-guidance/") }, // if you prefer, replace with EN("/buy-insurance-guidance/")
  ],

  faqs: [
    { q: "Is claim rejection always final?", a: "Not always. Some cases fail due to missing proof or process errors; others depend on policy terms and facts. Start by organizing documents and a clean timeline (case-dependent)." },
    { q: "Do you guarantee claim approval?", a: "No. We guide correct steps and evidence discipline to reduce avoidable delays/disputes." },
  ],
},

// 4) Fleet renewal management (high premium)
"fleet-renewal-management-support": {
  slug: "fleet-renewal-management-support",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "serviceCategory", "serviceDetail", "generic"],
    priority: 32,
    tags: ["fleet", "b2b", "renewal", "high-premium"],
  },

  seoTitle: "Fleet Renewal Management Support – Expiry Tracker, Document Control & Claim-Ready Discipline",
  seoDesc:
    "Managing multiple vehicles? Fleet renewals fail due to gaps, missing documents, and inconsistent disclosures. This page explains a practical system: expiry tracking, document folders, and a driver incident SOP (as applicable).",
  heroH1: "Fleet renewal management (reduce gaps + reduce claim friction)",
  heroP:
    "Fleet insurance becomes expensive when renewals are late, documents are scattered, and drivers report incidents inconsistently. This page shows a simple fleet management workflow that reduces repeated delays across vehicles and keeps claim files cleaner (as applicable).",

  intentSignals: [
    "fleet insurance renewal",
    "manage fleet insurance",
    "multiple vehicle renewal",
    "fleet policy support",
    "transport fleet renewal help",
  ],

  whoThisHelps: [
    "Fleet owners/operators with 2+ vehicles (goods carriers, lorries, trailers as applicable).",
    "Admin/accounts teams managing multiple renewal dates and compliance documents.",
    "Businesses that want fewer disputes by standardizing reporting and document control.",
  ],

  whatYouGet: [
    "Fleet expiry tracker checklist (insurance + permit/fitness/pollution as applicable).",
    "Centralized document folder structure per vehicle (policy + endorsements + RC etc.).",
    "A simple driver incident SOP: who to call, what photos to take, how to note timeline (as applicable).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Share fleet list", text: "Send your vehicle list + current policy copies + expiry dates (WhatsApp is fine)." },
    { title: "Step 2 — Renewal discipline setup", text: "We help you create an expiry tracker and identify repeated friction points (documents/endorsements/usage clarity)." },
    { title: "Step 3 — Repeatable workflow", text: "Use the same checklist every month/quarter so renewals and claims are predictable (as applicable)." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Fleet support works best with WhatsApp-first document review.",
      "Commercial compliance needs depend on vehicle type and insurer rules (as applicable).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Chennai North + NH corridor fleet support areas",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Fleet Insurance (Service)", href: EN("/services/transport-fleet/fleet-insurance/") },
    { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
    { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
    { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    { label: "Renewal Support", href: EN("/insurance-renewal-near-me/") },
  ],

  faqs: [
    { q: "Why do fleets face repeated claim delays?", a: "Inconsistent reporting, missing documents, and mismatch between real operations and policy wording. Standardizing SOP + document control helps (as applicable)." },
    { q: "Do you handle 2–5 vehicles or only big fleets?", a: "Even 2–5 vehicles benefit from a simple expiry tracker and document folder discipline." },
  ],
},

// 5) Warehouse renewal support (very high premium)
"warehouse-insurance-renewal-support": {
  slug: "warehouse-insurance-renewal-support",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "serviceCategory", "serviceDetail", "generic"],
    priority: 34,
    tags: ["warehouse", "renewal", "stock-proof", "high-premium"],
  },

  seoTitle: "Warehouse Insurance Renewal Support – Sum Insured, Stock Proof & Underinsurance Checks",
  seoDesc:
    "Warehouse renewals fail at claim time due to undervaluation and weak stock proof. This page explains renewal checks: sum insured realism, stock/invoice trail, and security conditions (as applicable).",
  heroH1: "Warehouse renewal support (sum insured + stock proof discipline)",
  heroP:
    "Warehouse insurance renewals are not about paying premium and forgetting. Most settlement reductions happen due to underinsurance (sum insured far below reality) and missing stock proof trail when a loss happens. This page explains renewal checks that protect claims later (as applicable).",

  intentSignals: [
    "warehouse insurance renewal",
    "godown insurance renewal",
    "renew warehouse insurance",
    "warehouse fire policy renewal",
    "stock proof for insurance claim",
  ],

  whoThisHelps: [
    "Warehouse/godown owners renewing annually without re-checking current stock/values.",
    "Businesses with fluctuating stock where invoices/register proof matters.",
    "Admin/accounts teams who manage renewals and documents for warehouses (as applicable).",
  ],

  whatYouGet: [
    "Renewal checks: sum insured realism and underinsurance risk awareness (average clause risk).",
    "Stock proof discipline checklist: invoices/registers/valuation basis and simple photo records (as applicable).",
    "Burglary/security condition awareness: what must be maintained to avoid disputes (as applicable).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Share basics", text: "WhatsApp last policy + warehouse location + broad stock type and value range (as applicable)." },
    { title: "Step 2 — Proof/valuation checklist", text: "We guide what evidence trail is typically needed for your stock/valuation basis (as applicable)." },
    { title: "Step 3 — Renewal alignment", text: "We align renewal declarations to reality to reduce avoidable claim friction later (as applicable)." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Remote review works for most renewal checks; photos and sample invoices help (as applicable).",
      "Insurer inspection rules can apply depending on risk and case type (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Industrial/warehouse belts we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Warehouse / Godown Insurance (Service)", href: EN("/services/industrial/warehouse-insurance/") },
    { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
    { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
    { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
  ],

  faqs: [
    { q: "Why do warehouse claims get reduced?", a: "Commonly due to undervaluation/underinsurance and weak proof trail for stock/assets. Renewal checks should prevent these issues (as applicable)." },
    { q: "Do I need invoices/register proof?", a: "Usually yes for stock-related claims. The exact proof depends on stock type and valuation basis (as applicable)." },
  ],
},

// 6) Contractor documentation support (CAR/WC focus — high premium)
"contractor-insurance-documentation-support": {
  slug: "contractor-insurance-documentation-support",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "serviceCategory", "serviceDetail", "generic"],
    priority: 36,
    tags: ["contractor", "car", "wc", "documentation", "high-premium"],
  },

  seoTitle: "Contractor Insurance Documentation Support – CAR/WC Checklists, Extensions & Claim-Ready Records",
  seoDesc:
    "Contractor insurance failures happen due to missing records: project extensions not updated (CAR), worker classification/payroll mismatch (WC), late reporting and weak site notes. This page explains practical checklists (as applicable).",
  heroH1: "Contractor documentation support (CAR/WC checklists + renewal discipline)",
  heroP:
    "Contractor policies fail on paperwork gaps, not intent. CAR disputes happen when project period/extensions aren’t aligned. WC disputes happen when payroll/classification records don’t match. This page gives practical checklists and reporting discipline for cleaner outcomes (as applicable).",

  intentSignals: [
    "contractor insurance documents",
    "car insurance documents for contractor",
    "workmen compensation documents",
    "wc insurance renewal documents",
    "contractor policy renewal support",
  ],

  whoThisHelps: [
    "Contractors/subcontractors handling CAR/WC renewals and endorsements (as applicable).",
    "Admin/accounts teams managing project paperwork and workforce records.",
    "Teams who want fewer claim disputes by improving day-1 reporting and site record discipline (as applicable).",
  ],

  whatYouGet: [
    "CAR checklist: project start/end dates, extension discipline, scope clarity, basic site photo/notes system (as applicable).",
    "WC checklist: worker classification logic + payroll proof discipline (as applicable).",
    "Incident reporting discipline: who reports, what evidence to capture, timeline consistency (as applicable).",
  ],

  howSupportWorks: [
    { title: "Step 1 — Share project + workforce basics", text: "WhatsApp policy copy + project period + workforce classification approach (as applicable)." },
    { title: "Step 2 — Identify documentation gaps", text: "We flag common failure points: extension mismatch (CAR), payroll/classification mismatch (WC), late reporting habits." },
    { title: "Step 3 — Build a clean routine", text: "We guide checklists you can repeat for renewals and claims readiness (as applicable)." },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Contractor documentation review works well on WhatsApp first.",
      "Final insurer requirements vary by project type and policy structure (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Worksite/industrial belts we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  recommendedServices: [
    { label: "Contractor CAR/WC Combined", href: EN("/services/construction/contractor-car-wc-insurance/") },
    { label: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/") },
    { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
    { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
  ],

  faqs: [
    { q: "What is the #1 CAR mistake?", a: "Project extensions/scope changes not aligned to policy period/endorsements. This causes disputes later (as applicable)." },
    { q: "What is the #1 WC mistake?", a: "Classification/payroll mismatch. Claims become record-driven, so payroll discipline matters (as applicable)." },
  ],
},
"insurance-for-sme-owners": {
  slug: "insurance-for-sme-owners",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "generic"],
    priority: 42,
    tags: ["sme", "owner", "business", "high-premium"],
  },

  seoTitle: "Insurance for SME Owners – Renewal, Claims & Risk Checks That Actually Matter",
  seoDesc:
    "SME owners often lose claims due to underinsurance, wrong disclosures, or missing documents. This page explains practical insurance checks for shops, factories, warehouses and service businesses (as applicable).",

  heroH1: "Insurance for SME owners (what usually goes wrong)",
  heroP:
    "Most SME insurance problems don’t happen while buying. They happen during renewal and claims—when declared values don’t match reality or documents are missing. This page explains what SME owners should check to avoid those issues.",

  intentSignals: [
    "insurance for sme owners",
    "business insurance owner",
    "shop insurance renewal",
    "msme insurance guidance",
  ],

  whoThisHelps: [
    "Owners of shops, small factories, warehouses and service businesses.",
    "SMEs where insurance is handled casually and reviewed only at renewal time.",
    "Business owners who want fewer claim disputes, not just lower premium.",
  ],

  whatYouGet: [
    "Renewal sanity checks: sum insured realism, asset/stock valuation approach (as applicable).",
    "Disclosure clarity: what insurers actually compare during claims.",
    "Document discipline basics that reduce claim friction later.",
  ],

  howSupportWorks: [
    { title: "Step 1 — Understand your risk", text: "We discuss your business type, location, assets and stock exposure (as applicable)." },
    { title: "Step 2 — Renewal & wording checks", text: "We identify underinsurance risks, missing endorsements and disclosure gaps." },
    { title: "Step 3 — Claim readiness habits", text: "Simple document and evidence discipline to reduce disputes later." },
  ],
  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Start on WhatsApp/phone so we can share the correct checklist (as applicable).",
      "If an in-person step is needed, we’ll tell you what to bring (as applicable).",
      "We commonly support Chennai and nearby belts within reach (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null, // or siteData.brand.gbpUrl if available at this point
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
    { label: "FAQs", href: EN("/faqs/") },
    { label: "About", href: EN("/about/") },
  ],

  recommendedServices: [
    { label: "Shop & MSME Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
    { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
    { label: "Claim Support", href: EN("/insurance-claim-help/") },
  ],

  faqs: [
    { q: "Is cheaper insurance risky for SMEs?", a: "It can be if declared values or disclosures don’t match reality. Most claim reductions come from underinsurance, not fraud." },
    { q: "Should SME insurance be reviewed every year?", a: "Yes. Stock levels, asset values and operations change. Renewal without review causes problems later." },
  ],
},
"insurance-for-logistics-owners": {
  slug: "insurance-for-logistics-owners",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "serviceCategory", "generic"],
    priority: 38,
    tags: ["logistics", "transport", "fleet", "high-premium"],
  },

  seoTitle: "Insurance for Logistics & Transport Owners – Fleet, Compliance & Claim Discipline",
  seoDesc:
    "Transport and logistics insurance fails due to late reporting, document mismatch, and inconsistent driver reporting. This page explains practical insurance discipline for fleet owners (as applicable).",

  heroH1: "Insurance for logistics & transport owners",
  heroP:
    "For logistics businesses, insurance problems usually start with operational gaps—permit/fitness lapses, late reporting by drivers, and scattered documents. This page explains how to reduce those risks.",

  intentSignals: [
    "insurance for logistics company",
    "transport business insurance",
    "fleet insurance owner",
    "lorry insurance guidance",
  ],

  whoThisHelps: [
    "Owners of transport and logistics companies with owned or hired vehicles.",
    "Fleet operators struggling with renewals, permits and claim delays.",
    "Businesses operating on highways, ports or industrial corridors.",
  ],

  whatYouGet: [
    "Fleet renewal discipline: expiry tracking beyond just insurance.",
    "Permit/fitness/document alignment guidance (as applicable).",
    "Driver incident reporting SOP to avoid claim disputes.",
  ],

  howSupportWorks: [
    { title: "Step 1 — Fleet overview", text: "Share vehicle list, policy copies and compliance status (as applicable)." },
    { title: "Step 2 — Renewal & risk flags", text: "We identify repeated friction points in renewals and claims." },
    { title: "Step 3 — Repeatable system", text: "Simple SOPs that reduce delays across vehicles." },
  ],
  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Start on WhatsApp/phone so we can share the correct checklist (as applicable).",
      "If an in-person step is needed, we’ll tell you what to bring (as applicable).",
      "We commonly support Chennai and nearby belts within reach (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null, // or siteData.brand.gbpUrl if available at this point
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
    { label: "FAQs", href: EN("/faqs/") },
    { label: "About", href: EN("/about/") },
  ],

  recommendedServices: [
    { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
    { label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
    { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
    { label: "Claim Support", href: EN("/services/claims-support/") },
  ],

  faqs: [
    { q: "Why do fleet claims get delayed?", a: "Late reporting, missing documents and inconsistent incident details from drivers." },
    { q: "Is insurance enough for fleet risk?", a: "Insurance works only when compliance and reporting discipline is maintained." },
  ],
},
"insurance-for-warehouse-owners": {
  slug: "insurance-for-warehouse-owners",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "serviceCategory", "generic"],
    priority: 40,
    tags: ["warehouse", "owner", "stock", "high-premium"],
  },

  seoTitle: "Insurance for Warehouse Owners – Renewal, Stock Proof & Underinsurance Risks",
  seoDesc:
    "Warehouse insurance claims fail due to undervaluation and weak stock proof. This page explains what warehouse owners should check during renewal (as applicable).",

  heroH1: "Insurance for warehouse owners",
  heroP:
    "Warehouse insurance problems usually appear only after a loss—when stock values or proof don’t align with policy declarations. This page explains renewal and documentation checks that matter.",

  intentSignals: [
    "insurance for warehouse owners",
    "godown insurance owner",
    "warehouse fire insurance guidance",
  ],

  whoThisHelps: [
    "Owners of warehouses and godowns with fluctuating stock.",
    "Businesses storing third-party or high-value goods.",
    "Owners who want predictable claim outcomes, not surprises.",
  ],

  whatYouGet: [
    "Sum insured realism and average clause awareness.",
    "Stock proof discipline: invoices, registers and valuation approach.",
    "Security and condition awareness that affects claims.",
  ],

  howSupportWorks: [
    { title: "Step 1 — Stock overview", text: "Discuss stock type, value range and storage conditions (as applicable)." },
    { title: "Step 2 — Renewal alignment", text: "Check declared values and documentation gaps." },
    { title: "Step 3 — Claim readiness", text: "Guide simple proof and record-keeping discipline." },
  ],
office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Start on WhatsApp/phone so we can share the correct checklist (as applicable).",
      "If an in-person step is needed, we’ll tell you what to bring (as applicable).",
      "We commonly support Chennai and nearby belts within reach (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null, // or siteData.brand.gbpUrl if available at this point
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
    { label: "FAQs", href: EN("/faqs/") },
    { label: "About", href: EN("/about/") },
  ],
  recommendedServices: [
    { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
    { label: "Claim Support", href: EN("/insurance-claim-help/") },
  ],

  faqs: [
    { q: "Why are warehouse claims reduced?", a: "Underinsurance and weak stock proof are the most common reasons." },
    { q: "Should sum insured change every year?", a: "Yes, if stock levels or values change materially." },
  ],
},
"insurance-for-contractors": {
  slug: "insurance-for-contractors",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "serviceCategory", "generic"],
    priority: 44,
    tags: ["contractor", "car", "wc", "high-premium"],
  },

  seoTitle: "Insurance for Contractors – CAR, WC & Documentation That Prevent Disputes",
  seoDesc:
    "Contractor insurance disputes happen due to project extensions, worker classification mismatch and weak site records. This page explains practical insurance discipline (as applicable).",

  heroH1: "Insurance for contractors (CAR / WC explained practically)",
  heroP:
    "Most contractor insurance issues come from paperwork gaps—not intent. This page explains what contractors should track for CAR and WC policies to avoid claim disputes.",

  intentSignals: [
    "insurance for contractors",
    "contractor car insurance",
    "workmen compensation contractor",
  ],

  whoThisHelps: [
    "Contractors handling construction, installation or infrastructure projects.",
    "Businesses managing temporary labour and subcontractors.",
    "Owners responsible for compliance and worker safety insurance.",
  ],

  whatYouGet: [
    "CAR policy discipline: project period, extensions and scope clarity.",
    "WC policy discipline: worker classification and payroll proof.",
    "Incident reporting habits that matter during claims.",
  ],

  howSupportWorks: [
    { title: "Step 1 — Project basics", text: "Discuss project scope, duration and workforce structure (as applicable)." },
    { title: "Step 2 — Policy alignment", text: "Check CAR/WC coverage against real operations." },
    { title: "Step 3 — Documentation routine", text: "Guide repeatable record-keeping habits." },
  ],
office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Start on WhatsApp/phone so we can share the correct checklist (as applicable).",
      "If an in-person step is needed, we’ll tell you what to bring (as applicable).",
      "We commonly support Chennai and nearby belts within reach (case-dependent).",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null, // or siteData.brand.gbpUrl if available at this point
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
    { label: "FAQs", href: EN("/faqs/") },
    { label: "About", href: EN("/about/") },
  ],
  recommendedServices: [
    { label: "Contractor CAR Insurance", href: EN("/services/construction/contractor-all-risk/") },
    { label: "Workmen Compensation Insurance", href: EN("/services/construction/workmen-compensation/") },
    { label: "Claim Support", href: EN("/services/claims-support/") },
  ],

  faqs: [
    { q: "Why do contractor claims get disputed?", a: "Project extensions and workforce details not matching policy records." },
    { q: "Is WC mandatory?", a: "In many cases, yes. Exact requirements depend on workforce and contract terms." },
  ],
},
"insurance-documents-required": {
  slug: "insurance-documents-required",

  autoLink: {
    enabled: true,
    contexts: ["home", "faqs", "generic"],
    priority: 48,
    tags: ["documents", "checklist", "authority"],
  },

  seoTitle: "Insurance Documents Required – Practical Checklists for Claims & Renewals",
  seoDesc:
    "Insurance claims and renewals fail due to missing or weak documents. This page explains the common documents insurers expect, why they matter, and how to keep a clean record (case-dependent).",

  heroH1: "Insurance documents required (what insurers actually check)",
  heroP:
    "Most insurance delays are document-driven, not intent-driven. Across insurers—especially public-sector insurers—claims and renewals are evaluated based on document consistency, timelines and proof quality.",

  intentSignals: [
    "insurance documents required",
    "documents needed for insurance",
    "insurance claim documents",
    "insurance renewal documents",
  ],

  sections: [
    {
      title: "Common documents insurers expect",
      bullets: [
        "Policy copy and endorsements (latest version).",
        "Identity and ownership proof (RC / business ownership documents as applicable).",
        "Incident or risk timeline notes.",
        "Invoices, valuation basis or registers for assets/stock (as applicable).",
      ],
    },
    {
      title: "Why public-sector insurers are strict about documents",
      bullets: [
        "Claims are audit-driven and evidence-led.",
        "Surveyor reports are matched against documents.",
        "Post-event document creation raises red flags.",
      ],
    },
    {
      title: "Common document mistakes that cause delays",
      bullets: [
        "Late or partial document submission.",
        "Declared values not matching proof.",
        "Missing endorsements for changed usage.",
      ],
    },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "WhatsApp/phone checklist guidance first (as applicable).",
      "In-person visit only if required (case-dependent).",
      "Support across Chennai and nearby belts.",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
    { label: "FAQs", href: EN("/faqs/") },
    { label: "About", href: EN("/about/") },
  ],

  recommendedLinks: [
    { label: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
    { label: "Claim Rejected – What To Do", href: EN("/claim-rejected-what-to-do/") },
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
  ],

  // 🔑 REQUIRED BY TEMPLATE
  recommendedServices: [
    { label: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
    { label: "Claim Rejected – What To Do", href: EN("/claim-rejected-what-to-do/") },
    { label: "Insurance Renewal Support", href: EN("/insurance-renewal-near-me/") },
  ],

  faqs: [
    {
      q: "Are document requirements same for all insurers?",
      a: "Core documents are similar, but scrutiny varies by insurer and case type.",
    },
    {
      q: "Do WhatsApp photos work?",
      a: "They help initially; final submission may require clearer copies or originals.",
    },
  ],
},

"commercial-vehicle-insurance-documents": {
  slug: "commercial-vehicle-insurance-documents",

  autoLink: {
    enabled: true,
    contexts: ["services", "faqs", "generic"],
    priority: 46,
    tags: ["commercial-vehicle", "documents", "fleet"],
  },

  seoTitle: "Commercial Vehicle Insurance Documents – RC, Permit, Fitness & Claim Checklists",
  seoDesc:
    "Commercial vehicle insurance delays usually happen due to document mismatch. This page explains RC, permit, fitness and claim document discipline (as applicable).",

  heroH1: "Commercial vehicle insurance documents (what really matters)",
  heroP:
    "Commercial vehicle insurance validity depends on compliance alignment between RC, permit, fitness and policy details.",

  intentSignals: [
    "commercial vehicle insurance documents",
    "lorry insurance documents",
    "permit fitness insurance claim",
  ],

  sections: [
    {
      title: "Core documents insurers verify",
      bullets: [
        "RC with correct vehicle class.",
        "Permit validity and route alignment.",
        "Fitness certificate validity.",
        "Policy copy with matching description.",
      ],
    },
    {
      title: "Why claims get delayed",
      bullets: [
        "Expired permit or fitness.",
        "Usage mismatch vs policy.",
        "Late intimation or weak timeline.",
      ],
    },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "WhatsApp checklist review available.",
      "Physical visit only if required.",
      "Fleet and single-vehicle support.",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
    { label: "FAQs", href: EN("/faqs/") },
  ],

  recommendedLinks: [
    { label: "Fleet Renewal Management", href: EN("/fleet-renewal-management-support/") },
    { label: "Claim Help", href: EN("/insurance-claim-help/") },
    { label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
  ],

  // 🔑 REQUIRED
  recommendedServices: [
    { label: "Fleet Renewal Management", href: EN("/fleet-renewal-management-support/") },
    { label: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
    { label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
  ],

  faqs: [
    {
      q: "Is permit expiry relevant for insurance?",
      a: "Yes. Compliance documents are reviewed during claims.",
    },
  ],
},

"warehouse-insurance-documents-checklist": {
  slug: "warehouse-insurance-documents-checklist",

  autoLink: {
    enabled: true,
    contexts: ["services", "generic"],
    priority: 47,
    tags: ["warehouse", "documents", "stock-proof"],
  },

  seoTitle: "Warehouse Insurance Documents Checklist – Stock Proof, Valuation & Claim Readiness",
  seoDesc:
    "Warehouse claims fail due to underinsurance and weak stock proof. This checklist explains insurer expectations.",

  heroH1: "Warehouse insurance documents checklist",
  heroP:
    "Warehouse claims are evidence-driven. Insurers focus on valuation logic and stock proof consistency.",

  intentSignals: [
    "warehouse insurance documents",
    "godown insurance documents",
    "stock proof for insurance claim",
  ],

  sections: [
    {
      title: "Stock proof documents",
      bullets: [
        "Purchase invoices or stock registers.",
        "Declared valuation basis.",
        "Periodic stock statements.",
      ],
    },
    {
      title: "Policy & safety documents",
      bullets: [
        "Policy copy and endorsements.",
        "Safety and security compliance records.",
        "Photographic storage evidence.",
      ],
    },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "Remote checklist guidance available.",
      "On-site support if required.",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
  ],

  recommendedLinks: [
    { label: "Warehouse Renewal Support", href: EN("/warehouse-insurance-renewal-support/") },
    { label: "Claim Rejected – What To Do", href: EN("/claim-rejected-what-to-do/") },
    { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
  ],

  // 🔑 REQUIRED
  recommendedServices: [
    { label: "Warehouse Renewal Support", href: EN("/warehouse-insurance-renewal-support/") },
    { label: "Claim Rejected – What To Do", href: EN("/claim-rejected-what-to-do/") },
    { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
  ],

  faqs: [
    {
      q: "Do insurers accept estimated stock values?",
      a: "Claims rely on documentary proof and valuation logic.",
    },
  ],
},

"contractor-insurance-documents-checklist": {
  slug: "contractor-insurance-documents-checklist",

  autoLink: {
    enabled: true,
    contexts: ["services", "generic"],
    priority: 49,
    tags: ["contractor", "documents", "car", "wc"],
  },

  seoTitle: "Contractor Insurance Documents – CAR & WC Claim-Ready Checklists",
  seoDesc:
    "CAR and WC disputes usually arise from missing documents. This checklist explains insurer expectations.",

  heroH1: "Contractor insurance documents checklist (CAR / WC)",
  heroP:
    "CAR and WC claims are paperwork-driven. Insurers verify project period and workforce records.",

  intentSignals: [
    "contractor insurance documents",
    "car insurance documents",
    "workmen compensation documents",
  ],

  sections: [
    {
      title: "CAR policy documents",
      bullets: [
        "Project start and end dates.",
        "Extension endorsements.",
        "Site progress records.",
      ],
    },
    {
      title: "WC policy documents",
      bullets: [
        "Worker classification.",
        "Payroll registers.",
        "Attendance records.",
      ],
    },
  ],

  office: {
    title: "Support base (Sholavaram)",
    bullets: [
      "WhatsApp document review available.",
      "On-site visit if required.",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null,
  },

  commonAreasTitle: "Areas we commonly support",
  commonAreasCta: { label: "See locations page", href: EN("/locations/") },

  quickLinks: [
    { label: "Services", href: EN("/services/") },
    { label: "Locations", href: EN("/locations/") },
  ],

  recommendedLinks: [
    { label: "Contractor Insurance Support", href: EN("/services/construction/contractor-car-wc-insurance/") },
    { label: "Claim Help", href: EN("/insurance-claim-help/") },
  ],

  // 🔑 REQUIRED
  recommendedServices: [
    { label: "Contractor Insurance Support", href: EN("/services/construction/contractor-car-wc-insurance/") },
    { label: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
  ],

  faqs: [
    {
      q: "Why are contractor claims disputed?",
      a: "Documentation mismatch between policy records and site/workforce details.",
    },
  ],
},

"commercial-insurance-agent-near-me": {
  slug: "commercial-insurance-agent-near-me",

  autoLink: {
    enabled: true,
    contexts: ["home", "services", "locations", "locationDetail", "serviceCategory", "serviceDetail", "generic"],
    priority: 20,
    tags: ["commercial", "b2b", "fleet", "warehouse", "contractor", "high-premium"],
  },

  seoTitle: "Commercial Insurance Agent Near Me – Fleet, Warehouse, Contractor & Industrial Support",
  seoDesc:
    "Commercial-first insurance guidance from Sholavaram (Chennai North/outskirts): fleet/lorry, warehouse/godown, contractor CAR/WC, industrial property. Focus: documentation discipline and claim-ready clarity (as applicable).",

  heroH1: "Commercial insurance agent near me (commercial-first support)",
  heroP:
    "If you searched “commercial insurance agent near me”, you’re usually trying to avoid claim disputes later—wrong disclosures, missing endorsements, weak stock proof, permit/fitness mismatch, or poor incident reporting discipline. This page explains what commercial-first support means and how we work.",

  intentSignals: [
    "commercial insurance agent near me",
    "business insurance agent near me",
    "commercial insurance consultant near me",
    "industrial insurance agent near me",
    "warehouse insurance agent near me",
    "fleet insurance agent near me",
    "contractor insurance agent near me",
  ],

  whoThisHelps: [
    "Fleet and logistics operators (lorry, goods carriers, trailers) needing renewal discipline and compliance alignment (as applicable).",
    "Warehouse/godown and industrial units needing valuation + stock proof discipline to avoid underinsurance disputes (as applicable).",
    "Contractors needing CAR/WC documentation and extension/classification discipline (as applicable).",
  ],

  whatYouGet: [
    "A commercial checklist approach (documents + disclosures + renewal checks) instead of generic ‘quote-first’ selling.",
    "Guidance on what commonly delays commercial claims: weak timeline, missing proof, mismatch between operations and wording (as applicable).",
    "Clear routing to the right category pages (fleet/warehouse/contractor/industrial) without stuffing everything into one page.",
  ],

  howSupportWorks: [
    { title: "Step 1 — Share basics", text: "WhatsApp/call with business type, location, and whether it’s renewal/new/claim support." },
    { title: "Step 2 — Checklist & risk flags", text: "We share the typical checklist and flag common mismatch risks (valuation, stock proof, permits/fitness, endorsements as applicable)." },
    { title: "Step 3 — Next steps", text: "We guide the cleanest next step based on insurer rules and your case (case-dependent)." },
  ],

  office: {
    title: "Commercial support base (Sholavaram)",
    bullets: [
      "Start remotely via WhatsApp/phone for faster document review.",
      "In-person visits are only when needed; insurer inspections follow insurer rules (case-dependent).",
      "Common coverage: Chennai North + outskirts + industrial/logistics corridors within reach.",
    ],
    mapCtaLabel: "Open Google Maps listing",
    mapCtaHref: null, // can set to siteData.brand.gbpUrl
  },

  commonAreasTitle: "Commercial belts we commonly support",
  commonAreasCta: { label: "See locations", href: EN("/locations/") },

  quickLinks: [
    { label: "Transport & Fleet", href: EN("/services/transport-fleet/") },
    { label: "Industrial & Property", href: EN("/services/industrial/") },
    { label: "Construction / Contractor", href: EN("/services/construction/") },
    { label: "Claim Support", href: EN("/services/claims-support/") },
  ],

  recommendedServices: [
    { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
    { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
    { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
    { label: "Contractor CAR/WC", href: EN("/services/construction/contractor-car-wc-insurance/") },
    { label: "Claim Help", href: EN("/insurance-claim-help/") },
  ],

  faqs: [
    {
      q: "Do you only handle commercial insurance?",
      a:
        "Commercial-first is our focus (fleet/warehouse/contractor/industrial), but we also support motor and other personal lines depending on the requirement.",
    },
    {
      q: "Do you guarantee claim approval?",
      a:
        "No. Claim outcomes depend on policy terms, disclosures, evidence and insurer process. Our role is to guide correct steps and reduce avoidable delays.",
    },
    {
      q: "Can commercial work start on WhatsApp?",
      a:
        "Yes. Most commercial guidance starts with document review and checklists on WhatsApp/phone. Insurer inspections are case-dependent.",
    },
  ],
},

},


  // Intent pages (near-me / renewals / claims etc). Keep hrefs canonical and EN() will wrap.
  intentPagesURLs: {
    // Used when pageType not found
    generic: [
      { title: "Insurance near me", desc: "Office-based support from Sholavaram + nearby belts.", href: "/insurance-near-me/" },
      { title: "Insurance renewal help", desc: "Car, bike, commercial renewals + renewal checks.", href: "/insurance-renewal-near-me/" },
      { title: "Insurance claim help", desc: "Documents + timeline discipline to reduce delays.", href: "/insurance-claim-help/" },
    ],

    home: [
      { title: "Insurance near me", desc: "Find office support + WhatsApp guidance.", href: "/insurance-near-me/" },
      { title: "Policy renewal near me", desc: "Renewal checks: IDV/NCB/add-ons/permits.", href: "/insurance-renewal-near-me/" },
      { title: "Insurance claim help", desc: "Claim documents + reporting steps.", href: "/insurance-claim-help/" },
      { title: "Commercial insurance guidance", desc: "Fleet, warehouse, contractor, CPM.", href: "/commercial-insurance-agent-near-me/" },
    ],

    services: [
      { title: "Commercial insurance agent", desc: "Fleet, warehouse, contractor, liability.", href: "/commercial-insurance-agent-near-me/" },
      { title: "Insurance renewal near me", desc: "Motor + commercial renewals and checks.", href: "/insurance-renewal-near-me/" },
      { title: "Insurance claim help", desc: "Documents + timeline discipline.", href: "/insurance-claim-help/" },
    ],

    faqs: [
      { title: "Insurance claim help", desc: "First steps + documents checklist.", href: "/insurance-claim-help/" },
      { title: "Renewal support", desc: "What to check before paying.", href: "/insurance-renewal-near-me/" },
      { title: "Office & local support", desc: "Where we operate + what to bring.", href: "/insurance-near-me/" },
    ],

    locations: [
      { title: "Insurance near me", desc: "Sholavaram office support + nearby service belts.", href: "/insurance-near-me/" },
      { title: "Commercial insurance guidance", desc: "NH/industrial belt risks + documentation discipline.", href: "/commercial-insurance-agent-near-me/" },
      { title: "Claim support", desc: "Claim documents + timeline discipline.", href: "/insurance-claim-help/" },
    ],

    locationDetail: [
      { title: "Insurance renewal help", desc: "Renewal checks and clean documentation.", href: "/insurance-renewal-near-me/" },
      { title: "Insurance claim help", desc: "Claim steps + documents checklist.", href: "/insurance-claim-help/" },
    ],

    serviceCategory: [
      { title: "Insurance claim help", desc: "Reduce delays with clean proofs + timelines.", href: "/insurance-claim-help/" },
      { title: "Insurance renewal support", desc: "Avoid gaps, verify docs/endorsements.", href: "/insurance-renewal-near-me/" },
    ],

    serviceDetail: [
      { title: "Insurance claim help", desc: "Reporting steps + documents checklist.", href: "/insurance-claim-help/" },
      { title: "Visit / WhatsApp support", desc: "Office-based guidance + remote document checks.", href: "/insurance-near-me/" },
    ],
  },

areaServedStructData: [
  // Primary truth: you serve a 60 km radius in all directions from Sholavaram
  {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": geo.lat,
      "longitude": geo.lng
    },
    "geoRadius": 60000
  },

  // Official admin areas (high trust)
  { "@type": "AdministrativeArea", "name": "Chennai" },
  { "@type": "AdministrativeArea", "name": "Tiruvallur District" },
  { "@type": "AdministrativeArea", "name": "Kancheepuram District" },
  { "@type": "AdministrativeArea", "name": "Chengalpattu District" },

  // Core belt from your office (recognizable towns/areas; not micro-junctions)
  { "@type": "Place", "name": "Sholavaram" },
  { "@type": "Place", "name": "Red Hills" },
  { "@type": "Place", "name": "Puzhal" },
  { "@type": "Place", "name": "Madhavaram" },
  { "@type": "Place", "name": "Perambur" },
  { "@type": "Place", "name": "Manali" },
  { "@type": "Place", "name": "Gummidipoondi" },
  { "@type": "Place", "name": "Ambattur" },
  { "@type": "Place", "name": "Avadi" },
  { "@type": "Place", "name": "Poonamallee" },

  // Logistics / transport nodes (high premium relevance)
  { "@type": "Place", "name": "Madhavaram Truck Terminal" },
  { "@type": "Place", "name": "GNT Road (NH16) Logistics Corridor" },

  // Import-export / marine nodes (high premium relevance)
  { "@type": "Place", "name": "Kamarajar Port (Ennore Port)" },
  { "@type": "Place", "name": "Kattupalli Port" },

  // Industrial belts (high premium relevance)
  { "@type": "Place", "name": "Manali Industrial Estate" },
  { "@type": "Place", "name": "Ambattur Industrial Estate" },
  { "@type": "Place", "name": "Sriperumbudur SIPCOT" },
  { "@type": "Place", "name": "Oragadam Industrial Belt" },
  { "@type": "Place", "name": "Irungattukottai Industrial Park" },

  // Domestic hubs (keep limited but recognizable)
  { "@type": "Place", "name": "Anna Nagar" },
  { "@type": "Place", "name": "Mogappair" },
  { "@type": "Place", "name": "Porur" },
  { "@type": "Place", "name": "Vanagaram" },

  // 9) Central Chennai trade & wholesale anchors (high commercial intent)
{ "@type": "Place", "name": "Chennai Central" },
{ "@type": "Place", "name": "Parrys Corner (George Town)" },
{ "@type": "Place", "name": "Broadway Chennai" },
{ "@type": "Place", "name": "Koyambedu Wholesale Market" },

// 10) Affluent residential hubs (health + high-value car insurance signals)
{ "@type": "Place", "name": "Anna Nagar East & West" },
{ "@type": "Place", "name": "Nungambakkam" },
{ "@type": "Place", "name": "RA Puram" },
{ "@type": "Place", "name": "Adyar" },
{ "@type": "Place", "name": "Besant Nagar" },
  { "@type": "Place", "name": "Velachery"},
  // 11) Logistics highways & industrial corridors (loading, godowns, fleet, EXIM)
{ "@type": "Place", "name": "NH16 (Chennai–Kolkata Highway) Logistics Belt" },
{ "@type": "Place", "name": "NH48 (Chennai–Bengaluru Highway) Industrial Corridor" },
{ "@type": "Place", "name": "Outer Ring Road (ORR) – Chennai Logistics Belt" },
{ "@type": "Place", "name": "Chennai Peripheral Ring Road (CPRR) Corridor" },

// 12) Dedicated logistics & warehousing zones
{ "@type": "Place", "name": "GNT Road Warehouse & Logistics Cluster" },
{ "@type": "Place", "name": "Red Hills–Madhavaram Warehouse Belt" },
{ "@type": "Place", "name": "Manali–Ennore Industrial & Port Logistics Zone" }

],


  gmbPosts: [],
};
