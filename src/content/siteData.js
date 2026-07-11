// src/content/siteData.js
// ✅ COMPLETE siteData rewrite (authority-sequenced, WHO–WHERE–WHY driven)
// Keeps your existing theme/components, removes generic fluff, anchors experience + geo-risk.

import { policiesDetail } from "./policiesData.js";
import { intentExpansionPages } from "./intentExpansionData.js";
import { locationExpansionDetails } from "./locationExpansionData.js";
import { seasonalPages } from "./seasonalData.js";

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
let whatsappUrl = `https://wa.me/${whatsappE164}` + `?text=${encodeURIComponent(whatsappPrefill)}`;
let geo = { lat: 13.2391084, lng: 80.1728337 }

let servicesDetail = {
  // =====================================================
  // TRANSPORT & FLEET
  // /en/services/transport-fleet/{service}/
  // =====================================================
  "transport-fleet": {
    "lorry-insurance": {
      seoTitle: "Lorry Insurance Agent in Red Hills, Sholavaram Chennai",
      seoDesc:
        "Lorry and heavy vehicle insurance in Sholavaram, Red Hills and Madhavaram. Permit, fitness and third-party clarity. 30+ years experience. Call 7448324068 or WhatsApp for same-day policy help.",
      heroH1: "Lorry Insurance in Chennai — NH Belt, Permit & Claim Support",
      heroP:
        "Most lorry claims on the NH belt get delayed for one reason — a permit or fitness paper that wasn't checked before renewal. Send me your documents on WhatsApp and I'll tell you in a few minutes if anything's missing, before it becomes a problem at claim time.",

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
        {
          q: "What documents are needed for lorry insurance renewal?",
          a: "RC copy, previous policy, fitness certificate, permit copy, and driver licence. For NH-belt lorries, route permit alignment matters. Call 7448324068 — we check all documents before renewal.",
        },
        {
          q: "Does lorry insurance cover goods damage during transit?",
          a: "No. Lorry own-damage policy covers the vehicle only. Goods-in-transit needs a separate marine cargo policy. Many lorry owners confuse the two — we clarify which policy covers what.",
        },
        {
          q: "What happens if my lorry permit type doesn't match the policy?",
          a: "Permit-policy mismatch (e.g., national permit lorry insured as local) can void claims entirely. Insurers check this at claim time. We verify permit alignment before issuing or renewing.",
        },
        {
          q: "How is IDV calculated for a 10-year-old lorry?",
          a: "IDV for older commercial vehicles is based on manufacturer list price minus age-based depreciation. For 10+ year vehicles, IDV is negotiable. Getting it right matters because total loss or theft payout equals IDV.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Single lorry owner-operator",
          forWhom: "You own and drive one lorry, and permit/fitness renewal timing is what usually trips you up.",
          points: [
            "We check permit and fitness dates against your policy renewal so nothing lapses out of sync.",
            "Route/usage summary matched to your policy wording to prevent claim disputes over exposure.",
            "Same document folder approach every renewal — RC, permit, fitness, driver docs, all checked together.",
          ],
          ctaLabel: "WhatsApp — single lorry renewal",
          waText: "Hi, I own one lorry and want my permit/fitness/insurance dates checked before renewal.",
        },
        {
          label: "Fleet operator (multiple lorries)",
          forWhom: "You run several lorries and tracking each one's permit, fitness, and policy separately has become unmanageable.",
          points: [
            "One consolidated view of every vehicle's compliance status, not separate spreadsheets per truck.",
            "Consistent disclosures across the fleet — mismatched wording between vehicles is a common dispute trigger.",
            "Mid-term additions/removals handled without disrupting the rest of the fleet's cover.",
          ],
          ctaLabel: "WhatsApp — fleet consolidation",
          waText: "Hi, I run a fleet of lorries and want to consolidate renewal and compliance tracking.",
        },
        {
          label: "Dealing with an active claim",
          forWhom: "An incident already happened and you need to move correctly, fast.",
          points: [
            "Step-by-step guidance on incident timeline, photos, and reporting — the biggest factor in claim speed.",
            "We check permit/fitness validity on the incident date before the insurer does, so you know where you stand.",
            "If goods were damaged too, we clarify that's a separate marine cargo claim, not part of the lorry's own-damage cover.",
          ],
          ctaLabel: "WhatsApp — active claim help",
          waText: "Hi, I have a lorry insurance claim in progress and need guidance on next steps.",
        },
      ],

      comparisonTable: {
        title: "Permit/fitness unchecked vs. verified before renewal",
        intro: "This single check is behind most avoidable lorry claim disputes on the NH belt.",
        columns: ["What matters", "Renewed without checking", "Verified before renewal"],
        rows: [
          ["Permit-policy match", "Risk of mismatch discovered only at claim time", "Confirmed to align before renewal"],
          ["Fitness validity", "May lapse silently between renewals", "Checked and flagged in advance"],
          ["Endorsement fit", "May not reflect current loading/unloading exposure", "Reviewed against real operations"],
          ["Claim risk", "High — void risk if permit type mismatches usage", "Substantially reduced"],
        ],
      },

      internalLinks: [
        { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/"), desc: "Pickup/goods-auto/goods carriers: permit/route discipline + claim-ready steps." },
        { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/"), desc: "Business-use vehicle cover: usage clarity + endorsement fit." },
        { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/"), desc: "Trailer exposure: attachment disclosures + third-party risk." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps, documents, timeline discipline to reduce delays." },
        { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/"), desc: "Transit proof: invoice/packing/dispatch-receipt trail." },
      ],
    },

    "commercial-vehicle-insurance": {
      seoTitle: "Commercial Vehicle Insurance Agent – Sholavaram, Chennai",
      seoDesc:
        "Commercial vehicle insurance for business-use vehicles across Sholavaram, Red Hills, Madhavaram and Chennai outskirts. Usage clarity, endorsements and third-party cover. Call 7448324068.",
      heroH1: "Commercial Vehicle Insurance Agent in Chennai — Fleet, Permit & Claims",
      heroP:
        "Commercial vehicle claims often get questioned over how the vehicle was actually being used versus what the policy says. Send me your permit and usage details on WhatsApp and I'll check they line up — before renewal, not after a claim.",

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

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Single commercial vehicle owner",
          forWhom: "You run one business-use vehicle — a delivery van, a tempo, a single commercial car — and want the usage declared correctly.",
          points: [
            "We match your policy's declared usage to what the vehicle actually does daily, before it becomes a claim dispute.",
            "Endorsements checked against your real operations, not left as whatever the previous agent set up.",
            "Renewal handled over WhatsApp — send your permit and last policy copy.",
          ],
          ctaLabel: "WhatsApp — single vehicle check",
          waText: "Hi, I have one commercial vehicle and want my usage/endorsement details checked before renewal.",
        },
        {
          label: "Small fleet operator (2-10 vehicles)",
          forWhom: "You run a handful of vehicles and are tired of tracking renewals and endorsements manually across each one.",
          points: [
            "One consolidated renewal view across your vehicles instead of tracking each expiry separately.",
            "Mid-term additions/removals and endorsements handled without disrupting the rest of the fleet's cover.",
            "If a vehicle in your fleet has a claim, only that vehicle's record is affected — we keep documentation clean per vehicle.",
          ],
          ctaLabel: "WhatsApp — small fleet setup",
          waText: "Hi, I run a small fleet of commercial vehicles and want to consolidate renewals under one contact.",
        },
        {
          label: "Vehicle dealer selling commercial vehicles",
          forWhom: "You sell commercial vehicles to customers and need insurance sorted at every delivery.",
          points: [
            "A dealer tie-up handles insurance for every commercial vehicle you sell, not just occasional customers.",
            "Consistent turnaround so insurance doesn't hold up delivery.",
            "See the dedicated dealer page for the full tie-up process.",
          ],
          ctaLabel: "WhatsApp — dealer tie-up",
          waText: "Hi, we're a dealership selling commercial vehicles and want to set up an insurance tie-up.",
        },
      ],

      comparisonTable: {
        title: "Usage mismatch vs. usage verified before renewal",
        intro: "This is the single biggest driver of commercial motor claim disputes — how the policy describes the vehicle's use versus how it's actually used.",
        columns: ["What matters", "Usage declared once, never rechecked", "Usage verified at each renewal"],
        rows: [
          ["Claim risk", "High — mismatch discovered only during a claim", "Low — caught and corrected in advance"],
          ["Endorsements", "May not reflect current operations", "Reviewed and aligned to real usage"],
          ["Premium accuracy", "Can be wrong in either direction", "Matched to actual risk"],
          ["Renewal speed", "Fast, but risk carried forward silently", "A few extra minutes, risk addressed"],
        ],
      },

      guideSections: [
        {
          title: "What 'usage mismatch' actually means, in plain terms",
          intro: "This phrase comes up constantly in commercial motor claims — here's what it means for your specific vehicle.",
          points: [
            "If your policy says 'goods carrying' but the vehicle was being used for hire/passenger transport at the time of an incident, that mismatch can affect the claim.",
            "If your business operations changed since the policy was issued (new routes, new cargo type, added driver categories), the endorsement should reflect that.",
            "The fix is simple: a one-line usage summary reviewed at each renewal, not assumed to be unchanged year after year.",
          ],
        },
      ],

            faqs: [
        {
          q: "What is the difference between commercial and private vehicle insurance?",
          a: "Commercial vehicle insurance covers vehicles used for business (goods carrying, passenger transport, hire). It requires a commercial permit and has different premium structures, usage conditions, and claim processes compared to private vehicle insurance.",
        },
        {
          q: "Can I insure a fleet of commercial vehicles under one policy?",
          a: "Yes, fleet policies cover multiple vehicles under a single policy with unified renewal and claims management. This is more efficient for 5+ vehicles. We help set up fleet policies with proper per-vehicle IDV and permit alignment.",
        },
        {
          q: "What affects commercial vehicle insurance premium?",
          a: "Vehicle type, age, IDV, permit type, route coverage, claim history, and driver profiles. GCV vs PCV classification also changes premium. We compare options from multiple insurers to find the right fit.",
        },
      ],
      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "NH-belt lorry exposures: permits/fitness/endorsements." },
        { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/"), desc: "Permit/route discipline for goods carriers." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Documents + timeline steps that reduce delays." },
        { label: "Vehicle Dealer Insurance Tie-Up", href: EN("/vehicle-dealer-insurance-tieup/"), desc: "Run a showroom? Bulk customer insurance + stock cover, one contact." },
      ],
    },

    "goods-carrying-vehicle-insurance": {
      seoTitle: "Goods Carrying Vehicle Insurance – Red Hills, Sholavaram, Chennai",
      seoDesc:
        "Goods carrying and pickup vehicle insurance in Sholavaram, Red Hills and Madhavaram. Permit, route and third-party clarity. 30+ years experience. Call 7448324068.",
      heroH1: "Goods Vehicle Insurance in Chennai — GCV Permit, Route & Claim Help",
      heroP:
        "A goods vehicle's permit needs to match the route it's actually running — that mismatch is what usually causes trouble at claim time. Send me your GCV permit before you renew and I'll check it against your policy wording.",

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
      seoTitle: "Trailer Insurance Agent – NH Corridors, Sholavaram Chennai",
      seoDesc:
        "Trailer insurance for NH belt operators near Sholavaram and Red Hills. Attachment usage and third-party cover, endorsements and claim documentation. Call 7448324068.",
      heroH1: "Trailer Insurance in Chennai — Attachment, Permit & Claim Support",
      heroP:
        "Trailer claims often come from what happens during loading, unloading or a tight turn — not the driving itself. Send me your attachment details before you buy or renew and I'll make sure the IDV and declarations actually match.",

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
      seoTitle: "Fleet Insurance Agent – Red Hills, Madhavaram & Chennai North",
      seoDesc:
        "Fleet insurance for transport operators in Red Hills, Madhavaram and Sholavaram. Renewal discipline, centralized documentation and claim-ready workflow. Call 7448324068 for expert fleet support.",
      heroH1: "Fleet Insurance in Chennai — Multi-Vehicle Policy & Claims Management",
      heroP:
        "With a fleet, the hardest part usually isn't any single vehicle — it's keeping track of which renewal is due and which driver's papers are current. I'll set up a system that keeps all of that clean, so a claim moves fast when you need it to.",

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

            faqs: [
        {
          q: "How many vehicles do I need for a fleet insurance policy?",
          a: "Most insurers consider 5 or more vehicles as a fleet. Some start from 3. Fleet policies simplify administration, offer consolidated renewals, and may provide volume-based premium benefits.",
        },
        {
          q: "Can I add or remove vehicles from a fleet policy mid-term?",
          a: "Yes, most fleet policies allow additions and deletions during the policy year with pro-rata premium adjustment. We handle the endorsement paperwork and ensure each vehicle's IDV and permit details are correct.",
        },
        {
          q: "What happens when one vehicle in my fleet has a claim?",
          a: "Only the specific vehicle's claim record is affected. However, at renewal, the overall fleet claim ratio may influence premium. We maintain clean claim documentation per vehicle to protect your fleet's renewal terms.",
        },
        {
          q: "Can I increase the sum insured or IDV mid-term if a vehicle's value changes?",
          a: "Yes — this is done through a mid-term endorsement. It's common after adding a body upgrade, new equipment, or when the declared IDV was set too low at renewal. The insurer adjusts premium pro-rata for the remaining policy period. We handle the endorsement request so the higher value is on record before you need to claim, not after.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Small fleet (2-5 vehicles)",
          forWhom: "Just crossed from single-vehicle to a small fleet, and manual tracking is starting to break down.",
          points: [
            "We set up a centralized expiry tracker so no vehicle's permit, fitness, or policy renewal gets missed.",
            "One incident-reporting checklist for all your drivers, instead of everyone reporting differently.",
            "Renewal handled together, not vehicle-by-vehicle on different days.",
          ],
          ctaLabel: "WhatsApp — small fleet setup",
          waText: "Hi, I have a small fleet of 2-5 vehicles and want to set up centralized renewal tracking.",
        },
        {
          label: "Established fleet operator",
          forWhom: "Running a larger fleet for years, but inconsistent documentation across vehicles keeps causing claim friction.",
          points: [
            "We audit your current fleet's disclosures and endorsements for consistency — mismatches here are the most common dispute trigger.",
            "A standard driver-reporting SOP that works across your whole team, not just the vehicles you personally manage.",
            "One point of contact across the entire fleet for renewals and claims.",
          ],
          ctaLabel: "WhatsApp — fleet documentation audit",
          waText: "Hi, I run an established fleet and want our documentation and disclosures reviewed for consistency.",
        },
        {
          label: "One vehicle in the fleet just had an incident",
          forWhom: "A claim is active on one vehicle and you want to understand what happens to the rest of the fleet.",
          points: [
            "Only that specific vehicle's claim record is directly affected — we explain how the overall fleet claim ratio factors into renewal.",
            "Clean, vehicle-specific documentation so this claim doesn't create confusion with your other vehicles' records.",
            "Guidance on the incident timeline and reporting steps to move the claim forward quickly.",
          ],
          ctaLabel: "WhatsApp — active fleet claim",
          waText: "Hi, one vehicle in our fleet has an active claim and I want guidance on next steps.",
        },
      ],

      comparisonTable: {
        title: "Managing vehicles separately vs. one fleet system",
        intro: "This is the difference most operators notice within the first renewal cycle after consolidating.",
        columns: ["What matters", "Each vehicle tracked separately", "One fleet system"],
        rows: [
          ["Renewal dates", "Scattered — easy to miss one", "Consolidated tracker, nothing missed"],
          ["Driver incident reporting", "Inconsistent, depends on the driver", "Standard checklist across all drivers"],
          ["Documentation", "Spread across files/folders per vehicle", "Centralized, one place to check"],
          ["Claim impact from one vehicle", "Unclear how it affects the rest", "Explained clearly, tracked separately per vehicle"],
        ],
      },

      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "NH-belt lorry exposures + compliance discipline." },
        { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/"), desc: "Trailer third-party exposure + endorsement fit." },
        { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/"), desc: "Usage + wording alignment for business vehicles." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow, documents checklist, timeline discipline." },
        { label: "Vehicle Dealer Insurance Tie-Up", href: EN("/vehicle-dealer-insurance-tieup/"), desc: "Sell commercial vehicles to fleet operators? See the dealer tie-up process." },
      ],
    },

    "tip-truck-insurance": {
      seoTitle: "Tipper / Tip Truck Insurance – Worksites & NH Belt, Chennai",
      seoDesc:
        "Tipper and tip truck insurance for worksite and NH belt operators near Sholavaram and Red Hills. Usage clarity, third-party cover and claim documentation. Call 7448324068.",
      heroH1: "Tipper Insurance in Chennai — Worksite Cover, Permit & Claims",
      heroP:
        "Tippers move between worksite and public road, so the cover needs to hold up in both. Tell me how yours actually operates and I'll match the policy to that — not a generic template.",

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
      seoTitle: "Warehouse & Godown Insurance Agent – Madhavaram, Manali, Chennai",
      seoDesc:
        "Warehouse and godown insurance in Madhavaram, Manali and Sholavaram. Fire, burglary and stock declaration cover. 30+ years experience. Call or WhatsApp 7448324068.",
      heroH1: "Warehouse & Godown Insurance in Chennai — Stock Proof & Valuation",
      heroP:
        "If a fire or theft happens at your warehouse, the claim depends on whether your declared stock value actually matches what's stored. I'll help you set a realistic sum insured and a simple proof habit now, so you're not scrambling to prove anything after a loss.",

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

            faqs: [
        {
          q: "How is sum insured calculated for a warehouse?",
          a: "Sum insured covers building value (replacement cost) plus stock value (maximum at any point in the year). Underinsuring triggers the average clause — even partial loss settlements get proportionately reduced. We help calculate realistic figures.",
        },
        {
          q: "Does warehouse insurance cover theft?",
          a: "Standard fire policy does not cover theft. You need a separate burglary add-on or combined fire + burglary policy. Burglary cover requires specific security conditions (locks, grills, watchman) to be maintained. We check your setup against policy requirements.",
        },
        {
          q: "What proof do I need for a warehouse fire claim?",
          a: "Stock register, purchase invoices, premises photos (pre-loss), fire brigade report, and an incident timeline. Missing any of these delays settlement by weeks. We help you set up a proof system before a loss occurs.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Fixed stock, stable value",
          forWhom: "Your warehouse holds roughly the same stock value year-round.",
          points: [
            "A straightforward fire + burglary policy sized to your current stock and building value.",
            "We check the sum insured is realistic against replacement cost, not a rounded guess carried forward each year.",
            "Simple proof-folder habit — invoices and photos kept on file so a claim isn't a scramble.",
          ],
          ctaLabel: "WhatsApp — warehouse policy check",
          waText: "Hi, we run a warehouse with stable stock levels and want our fire/burglary cover reviewed.",
        },
        {
          label: "Fluctuating stock through the year",
          forWhom: "Stock value swings significantly by season — peak season holds far more than off-season.",
          points: [
            "A stock declaration policy structure so your cover matches actual stock levels, not a flat year-round figure.",
            "We size the sum insured to your peak, not your average, since the average clause punishes underinsurance at exactly the wrong moment.",
            "Guidance on the declaration rhythm — how often you should update the insurer on current stock value.",
          ],
          ctaLabel: "WhatsApp — fluctuating stock cover",
          waText: "Hi, our warehouse stock value fluctuates a lot through the year and we want the right policy structure for that.",
        },
        {
          label: "After a fire or theft — filing a claim",
          forWhom: "Something's already happened and you need to move correctly.",
          points: [
            "We check what proof you already have (invoices, photos, registers) and what's still missing before the surveyor visits.",
            "Guidance on the average clause — if you're underinsured, we explain exactly how that affects your payout, honestly.",
            "Support through the surveyor process and documentation submission.",
          ],
          ctaLabel: "WhatsApp — active warehouse claim",
          waText: "Hi, we've had a fire/theft incident at our warehouse and need help with the claim process.",
        },
      ],

      comparisonTable: {
        title: "Undervalued sum insured vs. a realistic one",
        intro: "The average clause is the single biggest reason warehouse claims settle for less than expected.",
        columns: ["What matters", "Sum insured set too low", "Sum insured set realistically"],
        rows: [
          ["Premium today", "Lower", "Reflects actual risk"],
          ["Partial loss payout", "Reduced proportionately under the average clause", "Paid in full up to the covered amount"],
          ["Peak-season stock", "Often uncovered if declared at off-season levels", "Covered if declared at peak value"],
          ["Claim dispute risk", "High", "Low — valuation matches reality"],
        ],
      },

      internalLinks: [
        { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/"), desc: "Property fire/burglary: proof discipline + conditions awareness." },
        { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/"), desc: "Fluctuating stock: declaration rhythm + evidence." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Timeline + documents checklist for claim momentum." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Visitor/vendor movement and third-party exposure." },
      ],
    },

    "factory-insurance": {
      seoTitle: "Factory Insurance Agent – Chennai Outskirts Industrial Belts",
      seoDesc:
        "Factory insurance for industrial units near Sholavaram, Madhavaram and Manali. Fire, machinery and stock coverage. 30+ years experience. Call 7448324068 for same-day help.",
      heroH1: "Factory Insurance in Chennai — Fire, Machinery & Stock Cover",
      heroP:
        "A factory's real risk is usually a mix — fire, machinery, stock — all in one place. I'll check your sum insured against what's actually there, so a real loss doesn't get reduced over a valuation gap nobody noticed.",

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

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Small MSME unit, first factory policy",
          forWhom: "A small manufacturing unit that either has no cover yet or a policy set up years ago and never revisited.",
          points: [
            "We start with a realistic valuation of your building, machinery and stock — no minimum size to qualify.",
            "Straightforward guidance on what's genuinely needed now versus what can wait as the unit grows.",
            "If a bank loan or MSME registration requires proof of insurance, we get you compliant documentation.",
          ],
          ctaLabel: "WhatsApp — small factory setup",
          waText: "Hi, we run a small manufacturing unit and need help setting up our first factory insurance policy.",
        },
        {
          label: "Established factory, reviewing sum insured",
          forWhom: "Running for years, but the sum insured hasn't kept pace with added machinery, expanded stock, or inflation.",
          points: [
            "We check your current sum insured against actual asset value — most underinsurance happens quietly, over several renewal cycles.",
            "Machinery breakdown and business interruption add-ons assessed against your real exposure, not sold as a default bundle.",
            "Renewal handled with a proper valuation review, not a same-figure rollover.",
          ],
          ctaLabel: "WhatsApp — sum insured review",
          waText: "Hi, our factory has been running for years and we want our sum insured reviewed before the next renewal.",
        },
        {
          label: "Bidding for a tender or bank loan",
          forWhom: "A tender, loan application, or corporate customer is asking for proof of factory insurance you need quickly.",
          points: [
            "Send us the exact requirement and we confirm what's needed — usually fire cover, sometimes liability or machinery breakdown too.",
            "We work to your deadline, since this is the one situation where speed matters more than a leisurely valuation exercise.",
            "Documentation matched precisely to what the tender or bank has asked for.",
          ],
          ctaLabel: "WhatsApp — need proof of insurance fast",
          waText: "Hi, we need factory insurance proof quickly for a tender or bank loan requirement. Can you help?",
        },
      ],

      comparisonTable: {
        title: "Same sum insured for years vs. a periodic valuation check",
        intro: "The average clause is the single biggest reason factory fire claims settle for less than expected — and it's almost always caused by this.",
        columns: ["What matters", "Sum insured unchanged for years", "Valuation reviewed at renewal"],
        rows: [
          ["Underinsurance risk", "High — machinery and stock value grows, sum insured doesn't", "Checked and corrected periodically"],
          ["Claim payout on partial loss", "Reduced proportionately under the average clause", "Matched to actual coverage need"],
          ["Premium accuracy", "May be paying for outdated (often lower) risk profile", "Reflects current asset value"],
          ["Tender/bank compliance", "May not meet current proof-of-insurance expectations", "Documentation stays current"],
        ],
      },

      guideSections: [
        {
          title: "The average clause, explained simply",
          intro: "This is the single most consequential concept in factory insurance, and most owners only learn about it at claim time.",
          points: [
            "If your factory's actual value is ₹1 crore but you've insured it for ₹60 lakh, you're 40% underinsured.",
            "On a claim — even a small, partial one — the insurer pays only 60% of the loss, proportionate to how underinsured you are.",
            "The fix is simple: review your sum insured at every renewal against current machinery, stock, and building replacement value — not the figure from three years ago.",
          ],
        },
      ],

            faqs: [
        {
          q: "What does factory insurance typically cover?",
          a: "Factory insurance (Standard Fire and Special Perils) covers building, plant/machinery, stock, and fixtures against fire, explosion, flood, storm, and allied perils. Machinery breakdown, electrical damage, and business interruption need separate add-ons or policies.",
        },
        {
          q: "How do I avoid underinsurance for my factory?",
          a: "Get a professional valuation for building and machinery. For stock, use maximum stock value during the year — not average. Review sum insured annually as asset values change. Underinsurance triggers the average clause, which can reduce even small claim payouts by 30-50%.",
        },
        {
          q: "Is machinery breakdown covered under factory fire insurance?",
          a: "No. Standard fire policy covers fire damage to machinery but not mechanical/electrical breakdown. You need a separate Machinery Breakdown (MB) policy for that. We advise on whether your machinery profile justifies MB cover.",
        },
      ],
      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Storage risk: stock proof discipline + valuation." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow and document readiness." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for visitor/vendor movement." },
        { label: "One Advisor for All Company Policies", href: EN("/corporate-insurance-advisor-one-point/"), desc: "Factory policy is one of several? Consolidate under one advisor." },
        { label: "New Business / Startup Insurance", href: EN("/new-business-startup-insurance-chennai/"), desc: "New factory or first-time MSME registration? What's mandatory at your stage." },
      ],
    },

    "fire-burglary-insurance": {
      seoTitle: "Fire & Burglary Insurance for Warehouses & Shops – Chennai Outskirts",
      seoDesc:
        "Fire and burglary insurance for warehouses, shops and offices in Sholavaram, Red Hills and Madhavaram. Sum insured and stock proof clarity. Call 7448324068 for a quick check.",
      heroH1: "Fire & Burglary Insurance for Chennai Shops, Warehouses & Godowns",
            heroP:
        "Fire and burglary claims come down to two things: did you declare the right value, and can you prove what was actually there. I'll help you get both right from the start — most shop and warehouse owners only find out what was missing after something's already gone wrong.",

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
        "Warehouses and godowns storing stock in Red Hills, Madhavaram and Sholavaram",
        "Shops and retail units with high-value goods or cash exposure",
        "Factories and manufacturing units with electrical fire load",
        "MSME premises with combined fire + burglary exposure",
        "Cold storage, textile units and auto dealerships storing goods",
      ],
            localFit:
        "In Sholavaram, Red Hills and Madhavaram industrial belts, most fire and burglary claims become document disputes. Godowns with poor stock registers and shops without periodic premises photos face partial settlements or rejections. Getting the sum insured right from day one avoids the average clause penalty — which can cut your settlement by 30–50% even on a partial loss.",
      keyCoverFocus: [
        "Sum insured + underinsurance avoidance",
        "Stock proof discipline (invoices/registers/photos as applicable)",
        "Security/safety conditions that affect claims",
        "Declaration clarity for stored goods",
      ],
      claimDocs: [
        "Stock statement/register and purchase invoices (as applicable)",
        "Premises photos including security fittings, electrical layout",
        "FIR copy / Fire Brigade report (as applicable to incident type)",
        "Incident timeline — who discovered it, time, sequence of events",
        "Repair estimates or replacement invoices for assets lost/damaged",
      ],
      commonMistakes: [
        "Declaring stock at cost price when policy uses market value basis (or vice versa)",
        "Not updating sum insured when stock levels grow — creates underinsurance at claim time",
        "No periodic stock register or invoice file — surveyor estimates low",
        "Ignoring burglary security conditions listed in policy schedule",
        "Not photographing premises before a loss — post-loss walk-through isn't the same",
      ],
      alsoKnownAs: ["Commercial property insurance", "Shop fire policy", "Warehouse fire + burglary policy"],
      whatCanGoWrong: [
        "Underinsurance triggers average clause — partial loss still gets proportionate cut",
        "Security conditions (locks, alarms, grills) not maintained → burglary claim rejected",
        "Weak or missing stock registers → surveyor rejects claimed stock amount",
        "Delay in police FIR (for burglary) weakens claim legitimacy",
        "Alterations to premises not declared → insurer voids or reduces settlement",
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
      areaRealityTitle: "Fire & burglary claim reality in Chennai's industrial belts",
      areaRealityText:
        "In the Red Hills–Madhavaram–Sholavaram corridor, surveyor disputes routinely reduce settlements by 30–60% due to stock proof gaps and underinsurance. A godown storing auto parts worth ₹40L but insured for ₹20L gets proportionate settlement even on a ₹10L partial fire loss. The same ₹40L stock with a clean invoice register and premises photos typically settles in 2-4 weeks. The difference is discipline, not luck.",
      areaSignals: [
        "Sholavaram fire insurance guidance",
        "Madhavaram burglary insurance support",
        "Red Hills godown fire insurance",
      ],
      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Setting up cover for the first time",
          forWhom: "A shop, warehouse, or commercial building with no fire/burglary cover yet.",
          points: [
            "We evaluate construction type and fire load honestly — pucca, semi-pucca, or kutcha structures all get assessed fairly.",
            "Sum insured set to a realistic figure — building replacement cost plus peak stock value, not a rounded guess.",
            "Fire and burglary explained separately, since burglary needs its own security conditions to be maintained.",
          ],
          ctaLabel: "WhatsApp — first fire/burglary policy",
          waText: "Hi, we want to set up fire and burglary insurance for our shop/premises for the first time.",
        },
        {
          label: "Renewing — checking for underinsurance",
          forWhom: "You have cover already, but sum insured hasn't been revisited in a while.",
          points: [
            "We check your sum insured against current stock and building value — this is where the average clause quietly hurts most owners.",
            "Security conditions for burglary cover reviewed against what's actually in place.",
            "Renewal handled with an honest valuation check, not a same-figure rollover.",
          ],
          ctaLabel: "WhatsApp — renewal valuation check",
          waText: "Hi, we want our fire/burglary sum insured checked for underinsurance before renewal.",
        },
        {
          label: "Fire or theft has happened — filing a claim",
          forWhom: "An incident's already occurred and you need to move correctly.",
          points: [
            "Call the fire brigade first if active, then report to the insurer within 24 hours — don't clear debris before the surveyor visits.",
            "We check what proof you have and what's missing before the surveyor asks.",
            "Honest guidance on how the average clause affects your payout if you're underinsured.",
          ],
          ctaLabel: "WhatsApp — active fire/burglary claim",
          waText: "Hi, we've had a fire/theft incident and need help with the insurance claim process.",
        },
      ],

      comparisonTable: {
        title: "Underinsured vs. realistic sum insured",
        intro: "The average clause is the single biggest reason fire/burglary claims in industrial estates settle for less than expected.",
        columns: ["What matters", "Underinsured", "Realistic sum insured"],
        rows: [
          ["Partial loss payout", "Reduced proportionately under the average clause", "Paid in full up to the covered amount"],
          ["Peak-stock coverage", "Often set at off-season levels", "Set to peak-season stock value"],
          ["Premium", "Lower, but exposure is real", "Reflects actual risk"],
          ["Claim dispute risk", "High", "Low — valuation matches reality"],
        ],
      },

      internalLinks: [
        { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Warehouse proof discipline and valuation." },
        { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/"), desc: "MSME modules + valuation discipline." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps + evidence discipline." },
      ],
      faqs: [
        {
          q: "What is the difference between fire insurance and burglary insurance for a shop?",
          a: "Fire insurance covers loss or damage from fire, lightning, explosion, flooding and allied perils. Burglary insurance covers theft that involves forced entry. Most commercial property policies combine both as a package — but each has its own conditions and proof requirements. We help you understand which sections apply to your specific risk.",
        },
        {
          q: "How is the sum insured calculated for stock in a warehouse or godown?",
          a: "Sum insured for stock is typically based on the maximum value of stock at any point during the policy year — not average. If your godown stores up to ₹50L worth of goods at peak season, that's the correct sum insured. Insuring for ₹25L exposes you to the average clause: even a ₹5L partial loss gets proportionately reduced. We help you pick a realistic figure before you buy.",
        },
        {
          q: "What is the average clause and how does it affect my claim?",
          a: "The average clause means: if you are underinsured (sum insured < actual value), the insurer pays only in proportion. Example: property worth ₹1L insured for ₹50K → 50% underinsured → surveyor awards only 50% of every claim, including partial losses. This is the single biggest reason fire claims in industrial estates pay much less than expected.",
        },
        {
          q: "What documents do I need to file a fire insurance claim for my shop?",
          a: "Most surveyors ask for: copy of policy schedule, stock register or purchase invoices (as applicable), fire brigade report or FIR (as applicable), premises photos pre- and post-loss, list of damaged assets with estimated values. Missing even one document typically delays settlement by weeks. We help you prepare the proof file before a loss happens.",
        },
        {
          q: "Are goods stored in small roadside shops near Sholavaram or Red Hills covered?",
          a: "Yes, commercial property insurance can cover shops of any size. The insurer will evaluate the construction type (pucca/semi-pucca), fire load (flammable goods, LPG cylinders, electrical wiring age), and claimed sum insured. Thatched-roof or kutcha structures may face higher premiums or exclusions. We help you evaluate options and disclose accurately to avoid claim rejection.",
        },
        {
          q: "How long does a fire or burglary claim typically take to settle?",
          a: "With a clean, complete proof file: 2–4 weeks for straightforward claims. With missing documents or valuation disputes: 3–6 months or longer, sometimes going to an arbitrator. The difference is almost always the quality of proof prepared before the loss. We guide you on what to keep on file so you're ready when it matters.",
        },
        {
          q: "There's been a fire in my godown — what do I do first, and who pays?",
          a: "Call the fire brigade first if the fire is active, then report to your insurer within 24 hours. Don't clear debris or start repairs until the surveyor has inspected — that's how disputes start. If your fire insurance sum insured is adequate, the insurer pays for the covered loss to building, stock and fittings as per your policy terms; if you're underinsured, the average clause reduces the payout proportionately. We can guide you through the surveyor visit and documentation.",
        },
      ],
    },

    "stock-declaration-insurance": {
      seoTitle: "Stock Declaration Insurance – Warehouses & Businesses, Chennai",
      seoDesc:
        "Stock declaration insurance for warehouses and businesses in Chennai industrial belts. Declaration discipline and claim acceptance readiness. Call 7448324068.",
      heroH1: "Stock Declaration Insurance in Chennai — Warehouses & Businesses",
      heroP:
        "If your stock levels change month to month, a fixed sum insured stops matching reality fast. I'll help you keep monthly declarations accurate, so a claim isn't reduced just because the numbers went stale.",

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

    "machinery-breakdown-insurance": {
      seoTitle: "Machinery Breakdown Insurance – Factories & Industrial Units, Chennai",
      seoDesc:
        "Machinery Breakdown insurance for factories and industrial units in Chennai. Covers mechanical and electrical failure, separate from fire insurance. Call 7448324068.",
      heroH1: "Machinery Breakdown Insurance in Chennai — Mechanical & Electrical Failure Cover",
      heroP:
        "A standard fire policy doesn't pay if a machine fails on its own — no fire, no burglary, just a mechanical or electrical breakdown. If your machinery represents real money, that gap is worth closing. I'll help you figure out which machines actually need it and at what value.",

      coverageSummary: [
        "Machinery Breakdown covers sudden, unforeseen mechanical or electrical failure — the kind of loss a standard fire policy doesn't touch at all.",
        "The two things that decide a smooth claim: whether the sum insured matches actual replacement cost, and whether basic maintenance records exist to show the machine wasn't neglected."
      ],

      standardModules: {
        title: "What Machinery Breakdown typically covers",
        bullets: [
          "Mechanical failure — sudden breakage of moving parts",
          "Electrical failure — short circuit, voltage fluctuation damage",
          "Boiler and pressure plant cover (as a separate extension, case-dependent)",
          "Consequential loss of profit due to breakdown (optional add-on)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy",
        bullets: [
          "List the machines that actually matter — not every piece of equipment needs MBD, focus on high-value or production-critical ones",
          "Get current replacement cost, not the original purchase price",
          "Start a basic maintenance log now if you don't already have one",
          "Check if your existing fire policy already excludes breakdown — most do, but confirm in writing",
        ],
      },

      claimDiscipline: {
        title: "Machinery Breakdown claim discipline",
        intro:
          "Insurers check maintenance history closely on MBD claims — a machine that was clearly neglected is an easy claim to dispute.",
        bullets: [
          "Keep maintenance and service records for covered machines",
          "Report a breakdown immediately, don't wait to see if it's serious",
          "Don't attempt repairs before the surveyor has seen the damage, where possible",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Machine age, type and current replacement value",
          "Maintenance history and service frequency",
          "Production criticality — how much downtime costs if it fails",
        ],
      },

      whoFor: [
        "Factory owners with production-critical machinery",
        "Businesses where a single machine failure stops operations",
        "Units with high-value equipment already covered under fire, but not breakdown",
      ],
      localFit:
        "Industrial belts around Guindy, Ambattur and Manali have dense, older manufacturing bases where machinery breakdown is a real, recurring risk — not a hypothetical one.",
      keyCoverFocus: [
        "Sum insured matched to actual replacement cost, not book value",
        "Maintenance record habit — insurers check this at claim time",
        "Which machines genuinely need cover versus which don't",
        "Clarity on what's excluded (wear and tear, gradual deterioration)",
      ],
      claimDocs: [
        "Maintenance and service records",
        "Machine specifications and purchase/replacement value",
        "Photos of the damage and surrounding area",
        "Operator's account of what happened before the failure",
      ],
      commonMistakes: [
        "Assuming the fire policy already covers this — it usually doesn't",
        "Sum insured based on old purchase price, not current replacement cost",
        "No maintenance records kept, making the claim harder to defend",
      ],
      alsoKnownAs: ["MBD insurance", "MB insurance", "Machinery insurance", "Plant breakdown insurance"],
      whatCanGoWrong: [
        "Claim reduced because sum insured was outdated",
        "Claim disputed due to no maintenance records",
        "Loss excluded because it was gradual wear, not sudden failure",
      ],
      localLanding: {
        primaryLocations: ["guindy", "ambattur", "manali-industrial-estate"],
        phrases: [
          "machinery breakdown insurance guindy",
          "machinery insurance ambattur industrial estate",
          "MBD insurance manali",
        ],
      },
      areaRealityTitle: "Machinery Breakdown reality in Chennai's older industrial belts",
      areaRealityText:
        "Many units here run equipment well past its original expected life. That's not a problem by itself, but it makes an honest maintenance record and a realistic sum insured more important, not less.",
      areaSignals: [
        "Guindy machinery breakdown insurance",
        "Ambattur industrial estate machinery insurance",
        "Chennai factory machinery breakdown cover",
      ],
      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Established factory, no MB cover yet",
          forWhom: "You have fire insurance but no separate cover for mechanical/electrical breakdown — a common gap.",
          points: [
            "We identify which machines actually justify MB cover based on replacement cost and how critical they are to production.",
            "Sum insured set to realistic replacement value, not a rounded guess.",
            "Basic maintenance record-keeping habit set up, since that's what insurers check first at claim time.",
          ],
          ctaLabel: "WhatsApp — first MB policy",
          waText: "Hi, we have fire insurance but no machinery breakdown cover and want to understand if we need it.",
        },
        {
          label: "Older machinery, renewing MB cover",
          forWhom: "Equipment running well past its original expected life — common in Chennai's older industrial belts.",
          points: [
            "Honest guidance on realistic sum insured for aging equipment, not an inflated figure that invites disputes.",
            "We help you keep maintenance records that show the machine wasn't neglected — this decides most claim outcomes.",
            "Renewal reviewed against any equipment changes since the last policy.",
          ],
          ctaLabel: "WhatsApp — older equipment MB renewal",
          waText: "Hi, we're renewing machinery breakdown cover for older equipment and want guidance on realistic sum insured.",
        },
        {
          label: "Machine has broken down — filing a claim",
          forWhom: "A mechanical or electrical failure has already happened.",
          points: [
            "We check whether this is genuinely an MB claim (sudden, unforeseen failure) versus wear-and-tear, which isn't covered.",
            "Guidance on gathering maintenance records and incident documentation before the surveyor visits.",
            "Support through the claim process to reduce avoidable delays.",
          ],
          ctaLabel: "WhatsApp — active MB claim",
          waText: "Hi, a machine has broken down and we need help with the machinery breakdown insurance claim.",
        },
      ],

      comparisonTable: {
        title: "Fire insurance vs. machinery breakdown — what's actually covered",
        intro: "This distinction is where most factory owners get caught out.",
        columns: ["Cause of loss", "Standard fire policy", "Machinery Breakdown"],
        rows: [
          ["Fire, explosion, lightning", "Covered", "Not applicable"],
          ["Sudden mechanical failure", "Not covered", "Covered"],
          ["Electrical breakdown", "Not covered", "Covered"],
          ["Normal wear and tear", "Not covered", "Not covered — neither policy pays for this"],
        ],
      },

      faqs: [
        { q: "Does my factory fire policy already cover machinery breakdown?", a: "No. Standard fire policies cover fire, explosion, and allied perils — not mechanical or electrical failure. Machinery Breakdown is a separate policy specifically for sudden, unforeseen equipment failure." },
        { q: "Will old machinery still qualify for MB cover?", a: "Usually yes, but insurers may ask for maintenance records and set the sum insured based on realistic current value, not original purchase price. We help you present this accurately." },
        { q: "What disqualifies a machinery breakdown claim?", a: "Wear and tear, lack of maintenance, or gradual deterioration are typically excluded — MB covers sudden, accidental failure, not neglect. Keeping basic maintenance records protects your claim." },
      ],

      internalLinks: [
        { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/"), desc: "Fire, stock and machinery cover for factories." },
        { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/"), desc: "Property cover, separate from breakdown risk." },
        { label: "Erection All Risk (EAR)", href: EN("/services/heavy-equipment/erection-all-risk-insurance/"), desc: "Cover during installation, before the machine is running." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Evidence and timeline discipline." },
      ],
    },

    "mining-industrial-insurance": {
      seoTitle: "Mining & Heavy Industrial Insurance – Chennai & Tamil Nadu",
      seoDesc:
        "Mining and heavy industrial insurance for quarries, mineral processing and heavy industrial operations in and around Chennai. Equipment, property and liability cover. Call 7448324068.",
      heroH1: "Mining & Heavy Industrial Insurance — Equipment, Property & Liability Cover",
      heroP:
        "Mining and heavy industrial operations carry a mix of risks most standard policies don't fully address — heavy equipment, property, and liability exposure that's different from a regular factory. I'll help you piece together cover that actually matches what your site does, not a generic industrial package.",

      coverageSummary: [
        "Mining and heavy industrial sites usually need a combination of covers — equipment (CPM), property, and liability — rather than one single policy, because the risk profile is genuinely different across each area of operation.",
        "Getting the declared value and operational disclosure right matters more here than in most other categories, since equipment values are high and operations are often continuous."
      ],

      standardModules: {
        title: "What mining/heavy industrial cover typically combines",
        bullets: [
          "Heavy equipment (CPM) for excavators, loaders and processing machinery",
          "Property cover for processing units, storage and site infrastructure",
          "Public and third-party liability for site operations near public areas",
          "Machinery breakdown for continuous-operation equipment (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy",
        bullets: [
          "List all major equipment separately with current value — don't lump it into one figure",
          "Clarify site operations in writing (extraction, processing, transport) so the policy wording matches reality",
          "Check liability limits against actual site and public exposure",
          "Confirm which covers are bundled and which need separate policies",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline for mining and heavy industrial risk",
        intro:
          "These claims are usually large and get scrutinized closely — a clear operational record and equipment log make the difference between a smooth settlement and a drawn-out dispute.",
        bullets: [
          "Maintain equipment logs and maintenance records for high-value machinery",
          "Keep a clear operational record of what the site does day to day",
          "Report incidents immediately with photos and a clear sequence of events",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Equipment value and operational scale",
          "Nature of extraction or processing activity",
          "Site location and proximity to public areas or other properties",
        ],
      },

      whoFor: [
        "Quarry and mineral processing operators",
        "Heavy industrial units with continuous equipment operations",
        "Contractors supplying equipment or services to mining sites",
      ],
      localFit:
        "Industrial belts around Chennai's outskirts and further into Tamil Nadu have genuine mining and heavy processing operations. This isn't cover we treat as an afterthought — it needs its own structure, not a factory policy stretched to fit.",
      keyCoverFocus: [
        "Equipment value declared accurately, item by item",
        "Operational disclosure that matches what the site actually does",
        "Liability limits sized to real public and third-party exposure",
        "Coordination across equipment, property and liability, not siloed policies",
      ],
      claimDocs: [
        "Equipment list with individual declared values",
        "Site operational records and logs",
        "Incident photos and sequence of events",
        "Maintenance records for affected equipment",
      ],
      commonMistakes: [
        "Equipment values lumped together instead of declared individually",
        "Operational disclosure too vague, causing wording mismatches",
        "Liability limits set without a real assessment of site exposure",
      ],
      alsoKnownAs: ["Mining insurance", "Heavy industrial insurance", "Quarry insurance", "Mineral processing insurance"],
      whatCanGoWrong: [
        "Claim disputed because declared operations didn't match what was actually happening on site",
        "Equipment claim reduced due to unclear individual valuation",
        "Liability claim exceeds the limit because exposure was underestimated at purchase",
      ],
      localLanding: {
        primaryLocations: ["gummidipoondi", "thiruvallur", "sriperumbudur-sipcot"],
        phrases: [
          "mining insurance chennai outskirts",
          "heavy industrial insurance gummidipoondi",
          "quarry insurance thiruvallur",
        ],
      },
      areaRealityTitle: "Mining and heavy industrial reality around Chennai's outer belts",
      areaRealityText:
        "Operations here often combine extraction, processing and transport under one site — which means the insurance usually needs to be pieced together across categories, not bought as a single off-the-shelf policy.",
      areaSignals: [
        "Gummidipoondi mining insurance",
        "Thiruvallur heavy industrial cover",
        "Chennai outskirts quarry insurance",
      ],
      internalLinks: [
        { label: "Crane & Heavy Equipment (CPM) Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/"), desc: "Equipment cover for excavators, loaders and processing machinery." },
        { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/"), desc: "Mechanical/electrical failure cover for continuous-operation equipment." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for site operations." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Evidence and timeline discipline." },
      ],
    },
    "land-property-insurance": {
      seoTitle: "Land & Property Insurance – Chennai",
      seoDesc:
        "Property and land-related insurance for owners, developers and businesses in Chennai — building, title-linked risk and asset protection cover. Call 7448324068.",
      heroH1: "Land & Property Insurance — Building & Asset Protection Cover",
      heroP:
        "Owning land or a building brings risks that a standard home policy doesn't touch — vacant plots, under-construction property, or commercial land holdings each need a different kind of cover. I'll help you figure out what actually applies to what you own.",
      coverageSummary: [
        "Building and structure cover (fire, storm, structural damage)",
        "Vacant land and under-construction property cover",
        "Commercial property and asset protection",
        "Liability cover for property owners",
      ],
      standardModules: {
        "Property/Building Cover": "Physical damage to structures from fire, storm, and other insured perils.",
        "Owner's Liability": "Third-party injury or damage liability arising from the property.",
        "Under-Construction Cover": "Cover for property and materials during the construction phase.",
      },
      preBuyChecklist: {
        "Property valuation": "Declared value should reflect actual reconstruction cost, not market/land value.",
        "Ownership documents": "Title deed and property records should be in order before insuring.",
        "Usage declared": "Residential, commercial or vacant-land use must match the policy.",
      },
      claimDiscipline: {
        "Damage documentation": "Photograph damage immediately and get an assessor's report.",
        "Ownership proof": "Keep title and property tax documents accessible for claims.",
      },
      pricingFactors: ["Property type and construction", "Location and usage", "Sum insured basis", "Security/safety measures"],
      whoFor: ["Property owners and landlords", "Developers with under-construction sites", "Businesses holding commercial land/property"],
      localFit: "Chennai and its outskirts have a mix of vacant land, under-construction and completed commercial property — I'll help you match cover to which stage your property is actually in.",
      keyCoverFocus: ["Building damage", "Under-construction cover", "Owner's liability", "Commercial property"],
      claimDocs: ["Title deed / property tax receipt", "Assessor's damage report", "Photographs", "Construction agreement (if applicable)"],
      commonMistakes: ["Insuring at land/market value instead of reconstruction cost", "No cover during the construction phase", "Usage mismatch (declared residential, used commercial)"],
      alsoKnownAs: ["Building insurance", "Property owner's insurance", "Commercial property cover"],
      whatCanGoWrong: ["Valuation disputes at claim time", "Cover gaps during construction phase"],
      localLanding: { primaryLocations: ["oragadam", "sriperumbudur-sipcot", "poonamallee"], phrases: ["property insurance chennai", "land insurance chennai", "building insurance chennai"] },
      areaRealityTitle: "Property insurance reality",
      areaRealityText: "Most disputes trace back to declared value not matching reconstruction cost — getting the valuation right upfront avoids that at claim time.",
      areaSignals: ["property insurance chennai", "building insurance chennai"],
      internalLinks: [
        { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/"), desc: "Cover for manufacturing property." },
        { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/"), desc: "Structure and stock protection." },
        { label: "Business & MSME Package", href: EN("/services/business-msme/business-msme-insurance/"), desc: "Business property and liability cover." },
      ],
      faqs: [{ q: "Can I insure a vacant plot of land?", a: "Vacant land itself typically isn't insurable the way a structure is, but boundary walls, fencing and any construction on it can be covered — we confirm what applies (case-dependent)." }],
    },
  },

  // =====================================================
  // CONSTRUCTION & CONTRACTOR
  // /en/services/construction/{service}/
  // =====================================================
  "construction": {
    "contractor-all-risk": {
      seoTitle: "Contractor All Risk (CAR) Insurance – Chennai Worksites",
      seoDesc:
        "Contractor all risk insurance for worksites across Chennai outskirts. Project period alignment, site exposure and claim documentation. Call 7448324068 for expert help.",
      heroH1: "Contractor All Risk (CAR) Insurance in Chennai — Worksite & Project Cover",
      heroP:
        "Contractor All Risk only pays out cleanly when the policy period actually matches your project timeline — that mismatch is the most common reason claims get disputed. I'll set it up to match your real project scope from the start.",

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
            faqs: [
        {
          q: "What does Contractor All Risk (CAR) insurance cover?",
          a: "CAR covers physical loss or damage to contract works during construction — including materials, labour-related damage, and third-party liability at the worksite. It does not cover defective design or wear and tear. Coverage is for the construction period plus a maintenance period.",
        },
        {
          q: "Who needs CAR insurance — contractor or project owner?",
          a: "Either can buy it, but typically the contractor is required to arrange CAR insurance and name the project owner as co-insured. Many government and large private contracts mandate CAR cover as a tender condition.",
        },
        {
          q: "What is the sum insured for a CAR policy?",
          a: "Sum insured is the full contract value including materials, labour, and contractor's profit. Underinsuring creates the same average clause risk as fire insurance — partial claims get proportionately reduced.",
        },
        {
          q: "A crane accident happened at our site — who is liable, and does CAR cover it?",
          a: "CAR's third-party liability section can cover injury or property damage caused at the worksite during the contract period, but crane operation is often better covered under a specific liability or crane/CPM add-on depending on how the incident happened. Report immediately, preserve the site as-is where safe, and get us the incident details — we'll check which section of your cover actually applies before you make any claim commitments.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Contractor bidding for a project",
          forWhom: "You need CAR cover arranged before a tender or contract award, often against a deadline.",
          points: [
            "Sum insured set to the full contract value — materials, labour, and profit — so the average clause doesn't quietly reduce a future claim.",
            "We work to your tender deadline; this is one situation where speed genuinely matters more than a leisurely review.",
            "Project owner named as co-insured where the contract requires it.",
          ],
          ctaLabel: "WhatsApp — CAR for a new project",
          waText: "Hi, we're bidding for a project and need Contractor All Risk insurance arranged quickly.",
        },
        {
          label: "Project timeline has extended",
          forWhom: "Your project is running longer than the original policy period, and the CAR cover needs to match.",
          points: [
            "We extend the policy period to match the real timeline — a common gap that only surfaces at claim time if missed.",
            "Maintenance period coverage checked against your actual handover schedule.",
            "Endorsement handled without disrupting your existing cover.",
          ],
          ctaLabel: "WhatsApp — extend project cover",
          waText: "Hi, our project timeline has extended and we need our CAR policy period updated to match.",
        },
        {
          label: "Incident at the worksite — need to claim",
          forWhom: "Something's already happened — damage to the works, a third-party injury, or a dispute over what's covered.",
          points: [
            "We check which section of your CAR policy actually applies before you make any claim commitments.",
            "Guidance on preserving the site and documentation the way a surveyor will expect to see it.",
            "If it's a crane or equipment-specific incident, we clarify whether that's covered under CAR or needs a separate liability/CPM claim.",
          ],
          ctaLabel: "WhatsApp — worksite incident",
          waText: "Hi, we've had an incident at our worksite and need guidance on our CAR insurance claim.",
        },
      ],

      comparisonTable: {
        title: "Underinsured contract value vs. full contract value",
        intro: "Same average-clause risk as fire insurance, but many contractors don't realise CAR works the same way.",
        columns: ["What matters", "Sum insured below contract value", "Sum insured at full contract value"],
        rows: [
          ["Partial loss payout", "Reduced proportionately", "Paid in full up to the covered amount"],
          ["Tender compliance", "May not satisfy the tender's insurance clause", "Meets the stated requirement"],
          ["Premium", "Lower, but exposure is real", "Reflects actual project risk"],
          ["Claim dispute risk", "High if a loss occurs", "Low — valuation matches the contract"],
        ],
      },

      internalLinks: [
        { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/"), desc: "Workforce exposure: classification + payroll discipline." },
        { label: "CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "Worksite + workforce combined risk." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim-ready evidence discipline." },
      ],
    },

    "workmen-compensation": {
      seoTitle: "Workmen Compensation Insurance for Contractors – Chennai",
      seoDesc:
        "Workmen compensation (WC) insurance for contractors and businesses across Chennai outskirts. Worker classification, payroll and claim timeline support. Call 7448324068.",
      heroH1: "Workmen Compensation Insurance in Chennai — WC Policy & Claims",
      heroP:
        "Workmen Compensation claims usually get disputed over how a worker was classified or whether payroll records back it up. I'll check both before the policy is even issued, so it isn't a surprise if you ever need to claim.",

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
            faqs: [
        {
          q: "Is Workmen Compensation (WC) insurance mandatory?",
          a: "Yes, under the Workmen's Compensation Act 1923 (now Employee's Compensation Act), employers are liable for compensation if a worker is injured or dies during employment. WC insurance transfers this liability to the insurer.",
        },
        {
          q: "How is the WC insurance premium calculated?",
          a: "Premium is based on total wage bill, occupation classification (risk category), and number of workers. High-risk occupations (construction, mining) have higher rates. Accurate payroll and classification disclosure prevents claim disputes later.",
        },
        {
          q: "Does WC insurance cover contract workers?",
          a: "Yes, if they are engaged through the principal employer. The policy must correctly classify and include contract workers. Many claim disputes arise because contract workers were not properly declared — we help verify classification before policy issuance.",
        },
        {
          q: "A worker was injured on site — who pays the compensation?",
          a: "The employer is legally liable for compensation under the Employee's Compensation Act, regardless of fault. If you hold a WC policy, the insurer pays this liability on your behalf — medical costs, disability compensation, or death benefit as applicable. Report the incident immediately and keep the worker's classification and payroll record ready; that's what determines how fast the claim settles.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "First WC policy for your site",
          forWhom: "You've started employing workers with site/physical risk and haven't set up WC cover yet.",
          points: [
            "We verify worker classification and wage basis before the policy is issued — this is where most future disputes start.",
            "Contract workers included and correctly declared if they're engaged through you as principal employer.",
            "Straightforward setup, no unnecessary add-ons for a straightforward workforce.",
          ],
          ctaLabel: "WhatsApp — first WC policy",
          waText: "Hi, we're setting up Workmen Compensation insurance for the first time and need guidance.",
        },
        {
          label: "Renewing with a changed workforce",
          forWhom: "Your worker count, wage bill, or contractor mix has changed since the last policy was issued.",
          points: [
            "We update classification and payroll basis to match your current workforce, not the numbers from last year.",
            "If you've added contract workers through subcontractors, we check they're properly declared.",
            "Premium recalculated fairly against your actual current risk, not carried forward blindly.",
          ],
          ctaLabel: "WhatsApp — WC renewal review",
          waText: "Hi, our workforce has changed and we want our Workmen Compensation policy reviewed before renewal.",
        },
        {
          label: "A worker was injured — filing a claim",
          forWhom: "An incident has already happened and you need to move correctly and quickly.",
          points: [
            "Report immediately — timing affects how smoothly the claim proceeds.",
            "We check your worker classification and payroll record are consistent and ready before the insurer asks.",
            "Guidance through medical, disability, or death benefit claims as applicable, so the family or worker isn't left waiting.",
          ],
          ctaLabel: "WhatsApp — active WC claim",
          waText: "Hi, a worker was injured on our site and we need help with the Workmen Compensation claim process.",
        },
      ],

      comparisonTable: {
        title: "Misclassified workers vs. correctly declared",
        intro: "This is the single biggest cause of WC claim disputes — and it's entirely preventable at the policy stage.",
        columns: ["What matters", "Classification/payroll mismatch", "Correctly declared"],
        rows: [
          ["Claim risk", "High — disputes common at claim time", "Low — classification already matches reality"],
          ["Contract workers", "Often undeclared, creating coverage gaps", "Included and verified through principal employer"],
          ["Premium accuracy", "May be under- or over-priced for actual risk", "Reflects real wage bill and risk category"],
          ["Claim speed", "Slowed by verification disputes", "Faster — records already consistent"],
        ],
      },

      internalLinks: [
        { label: "Contractor All Risk (CAR)", href: EN("/services/construction/contractor-all-risk/"), desc: "Worksite risk: period/scope alignment." },
        { label: "CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "Combined discipline for project + workforce." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim timeline and evidence readiness." },
      ],
    },

    "contractor-car-wc-insurance": {
      seoTitle: "Contractor Insurance (CAR + WC) – Chennai Outskirts",
      seoDesc:
        "Combined contractor insurance (CAR + Workmen Compensation) for Chennai outskirts projects. Worksite and workforce coverage in one place. Call 7448324068.",
      heroH1: "Contractor Insurance in Chennai — CAR + WC Combined Cover",
      heroP:
        "Most contractor claims that get rejected fail for avoidable reasons — a project timeline that doesn't match the policy, or worker records that don't hold up. I'll set up your CAR and WC cover properly from day one so those gaps don't come back to bite you at claim time.",

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
      seoTitle: "Shop & MSME Insurance Agent – Sholavaram, Red Hills, Chennai North",
      seoDesc:
        "Shop and MSME package insurance in Sholavaram, Red Hills and Chennai North. Coverage matched to your business, with claim-ready documentation. Call or WhatsApp 7448324068.",
      heroH1: "Shop & MSME Insurance in Chennai — Package Policy & Claims",
      heroP:
        "Most shop and office policies come with modules nobody explains, so people end up with cover they don't need and gaps in the cover they do. I'll walk you through what actually fits your kind of business.",

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
        {
          q: "What does a shop insurance package policy cover?",
          a: "A shop package (MSME package) typically bundles fire, burglary, plate glass, sign board, money-in-transit, personal accident, and public liability into one policy. The exact modules depend on the insurer and shop type. We help select the right modules.",
        },
        {
          q: "How much does shop insurance cost in Chennai?",
          a: "Premium depends on sum insured, shop type, location, fire load, and modules selected. We don't publish prices because they vary by insurer and risk assessment. Call 7448324068 for a quick ballpark based on your shop details.",
        },
        {
          q: "Can I get insurance for a small roadside shop?",
          a: "Yes. Even small shops can get fire, burglary, and public liability cover. The insurer will assess construction type (pucca/semi-pucca/kutcha), fire load (electrical wiring, flammable goods), and security measures. Kutcha structures may have limited options.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Small shop, first policy",
          forWhom: "A roadside shop or small unit with no cover yet.",
          points: [
            "We assess construction type and fire load honestly — pucca, semi-pucca, or kutcha all get evaluated fairly, not assumed uninsurable.",
            "Modules kept simple: fire, burglary, and public liability if customers visit — not an oversold bundle.",
            "No published price list because premium genuinely depends on your specific shop — we give a ballpark on a quick call.",
          ],
          ctaLabel: "WhatsApp — small shop policy",
          waText: "Hi, I run a small shop and want to set up insurance for the first time.",
        },
        {
          label: "Established MSME, reviewing cover",
          forWhom: "Running for a while, but sum insured or modules haven't been revisited since the policy was first bought.",
          points: [
            "We check sum insured against current stock/asset value — this drifts quietly over time and causes underinsurance.",
            "Modules reviewed against what your business actually needs now, not what was relevant when you first bought.",
            "If a bank loan or MSME registration now asks for proof of insurance, we get you compliant documentation.",
          ],
          ctaLabel: "WhatsApp — MSME policy review",
          waText: "Hi, our shop/MSME insurance hasn't been reviewed in a while and we want it checked before renewal.",
        },
        {
          label: "Filing a claim",
          forWhom: "Fire, burglary, or damage has already happened and you need to move correctly.",
          points: [
            "We check what proof you already have (invoices, photos, registers) and what's still missing before the surveyor visits.",
            "Honest guidance on the average clause if your sum insured turns out to be lower than actual value.",
            "Support through documentation and the surveyor process.",
          ],
          ctaLabel: "WhatsApp — active shop claim",
          waText: "Hi, we've had a fire/burglary incident at our shop and need help with the claim process.",
        },
      ],

      comparisonTable: {
        title: "Generic bundle vs. modules matched to your shop",
        intro: "Shop package policies bundle several covers — but not every shop needs every module.",
        columns: ["What matters", "Generic bundled package", "Modules matched to your shop"],
        rows: [
          ["Cost", "Pay for modules you may not need", "Pay for what's actually relevant"],
          ["Public liability", "Included by default", "Included if customers/vendors visit your premises"],
          ["Sum insured accuracy", "Often a rounded guess", "Based on your actual stock and asset value"],
          ["Claim readiness", "Depends on whether proof habits were ever explained", "Proof-folder habit set up from day one"],
        ],
      },

      internalLinks: [
        { label: "Fire & Burglary", href: EN("/services/industrial/fire-burglary-insurance/"), desc: "Property cover and condition awareness." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for visitor-facing businesses." },
        { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/"), desc: "Warehouse valuation + proof discipline." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow, documents checklist, timelines." },
        { label: "One Advisor for All Company Policies", href: EN("/corporate-insurance-advisor-one-point/"), desc: "Shop policy is one of several? Consolidate under one advisor." },
      ],
    },

    // ===========================
// MISSING SERVICE DETAIL: Business & MSME (overview detail page)
// URL: /en/services/business-msme/business-msme-insurance/
// ===========================
    "business-msme-insurance": {
  seoTitle: "MSME Business Insurance Agent – Shops, Offices & Services, Chennai",
  seoDesc:
    "MSME and business insurance for shops, offices and service businesses across Chennai. Right sum insured, correct wording and claim-ready from day one. Call 7448324068.",
  heroH1: "Business & MSME Insurance in Chennai — Sum Insured & Proof Discipline",
  heroP:
        "In 30 years, most MSME claim problems I've seen weren't about the policy — they were about a sum insured that was never updated, or proof that wasn't kept. Send me your details and I'll do a quick check before either one becomes a problem.",

  coverageSummary: [
    "MSME packages typically combine property/stock protection and optional liability modules. What matters is whether the wording matches your business reality and whether you can prove value at claim time (as applicable).",
    "A simple ‘proof folder’ (invoices, photos, registers) prevents most avoidable delays later."
  ],

  whoFor: [
    "Retail shops, small offices, clinics, workshops and service businesses",
    "Businesses storing stock or customer assets (as applicable)",
    "Owners/admin teams who want renewal discipline and documentation clarity",
  ],

  standardModules: {
    title: "What MSME packages commonly include (modules)",
    bullets: [
      "Fire & allied perils for premises/contents (as applicable)",
      "Burglary/theft modules with conditions (as applicable)",
      "Money-in-transit / fidelity options for specific cases (as applicable)",
      "Public liability where public/customer exposure exists (as applicable)",
    ],
  },

  preBuyChecklist: {
    title: "Before you buy or renew (practical checklist)",
    bullets: [
      "List your major assets + approximate value basis (invoice / estimate)",
      "If stock exists: keep basic invoice/register trail (as applicable)",
      "Take a few photos of premises + storage layout (as applicable)",
      "Declare what changed since last year (stock type, layout, new machines)",
    ],
  },

  renewalChecks: {
    title: "Renewal checks that prevent claim disputes",
    bullets: [
      "Sum insured matches current reality (avoid underinsurance reductions)",
      "Business changes are updated via endorsements (case-dependent)",
      "Conditions (security/safety) are understood and followed (as applicable)",
      "Keep latest policy copy + endorsements in one folder",
    ],
  },

  claimDiscipline: {
    title: "Claim discipline (what insurers typically verify)",
    intro:
      "MSME claims are evidence-led. Insurers verify value basis, timeline clarity, and whether declared operations match reality.",
    bullets: [
      "Invoice/register proof for stock/assets (as applicable)",
      "Photos/videos before repair/cleanup when an incident happens (as applicable)",
      "Clean incident timeline: what happened first/second/third",
      "Any endorsement/extension letters if applicable",
    ],
  },

  pricingFactors: {
    title: "What affects acceptance and premium (without prices)",
    bullets: [
      "Nature of business and hazard level",
      "Sum insured / value basis and proof readiness",
      "Location risk (density, fire load) and safety measures (as applicable)",
      "Claim history and disclosure clarity",
    ],
  },

  localFit:
    "City-side SMEs often face burglary/fire exposure and documentation friction. A simple proof discipline and correct disclosure prevents most avoidable issues.",

  keyCoverFocus: [
    "Sum insured and valuation discipline",
    "Proof folder discipline (invoices/photos/registers as applicable)",
    "Wording alignment to actual operations",
    "Conditions awareness (burglary/safety) where applicable",
  ],

  claimDocs: [
    "Policy copy + endorsements (latest)",
    "Basic ownership/identity documents (as applicable)",
    "Invoices/registers/valuation proof (as applicable)",
    "Incident timeline + first-day photos/videos (as applicable)",
  ],

  commonMistakes: [
    "Choosing sum insured randomly to reduce premium",
    "No invoice/register trail maintained",
    "Policy not updated after business changes",
    "Late reporting and unclear incident narrative",
  ],

  alsoKnownAs: ["Shop insurance", "Office insurance", "MSME package policy", "Business package insurance"],

  whatCanGoWrong: [
    "Underinsurance triggers average clause reduction",
    "Burglary conditions not met (as applicable)",
    "Mismatch between declared and actual operations",
  ],

  localLanding: {
    primaryLocations: ["anna-nagar", "koyambedu", "perambur", "kolathur"],
    phrases: ["msme insurance chennai", "shop insurance chennai", "business insurance support chennai"],
  },

  areaRealityTitle: "MSME claim reality (why proof matters more than marketing)",
  areaRealityText:
    "Most MSME claim disputes arise due to weak proof trail and underinsurance. Keeping records clean is the simplest advantage.",

  areaSignals: ["business insurance guidance chennai", "msme policy renewal support", "shop package insurance consultant"],

  internalLinks: [
    { label: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/"), desc: "Package structure + proof discipline." },
    { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for customer-facing businesses." },
    { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps + document discipline." },
    { label: "One Advisor for All Company Policies", href: EN("/corporate-insurance-advisor-one-point/"), desc: "Juggling multiple policies across agents? Consolidate under one contact." },
    { label: "New Business / Startup Insurance", href: EN("/new-business-startup-insurance-chennai/"), desc: "Just registered or about to hire? What's mandatory vs optional at your stage." },
  ],

  faqs: [
    { q: "Do MSME policies cover both stock and the building?", a: "They can, depending on what is selected and declared. Coverage and conditions depend on policy wording (case-dependent)." },
    { q: "What is the most common reason MSME claims get reduced?", a: "Underinsurance and weak proof trail (invoices/registers/photos) are the most common causes (as applicable)." },
  ],
}

    ,"office-insurance": {
      seoTitle: "Office Insurance Package – Chennai Commercial Offices",
      seoDesc:
        "Office insurance package for Chennai commercial offices: equipment, business interruption, and property cover, distinct from retail shop policies. Call 7448324068.",
      heroH1: "Office Insurance Package in Chennai — Equipment & Business Interruption Cover",
      heroP:
        "An office doesn't carry stock the way a shop does, so it needs a different package — equipment, furniture, business interruption, not a retail policy stretched to fit. I'll size the cover to what your office actually has and does.",

      coverageSummary: [
        "Office cover centres on equipment (computers, servers, furniture) and business interruption — the cost of not being able to operate — rather than stock, which is the retail-shop focus.",
        "A generic shop package often over- or under-covers an office. Getting the modules right the first time avoids paying for cover you don't need."
      ],

      standardModules: {
        title: "What an office package typically includes",
        bullets: [
          "Office equipment and furniture (fire, theft, accidental damage as applicable)",
          "Business interruption — ongoing costs if the office can't operate after a loss",
          "Public liability if clients or vendors visit the premises",
          "Portable equipment cover (laptops, devices carried outside the office)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy",
        bullets: [
          "List equipment value — computers, servers, furniture — realistically, not underestimated",
          "Check if any equipment already travels outside the office and needs portable cover",
          "Confirm whether client/vendor visits create liability exposure",
          "Decide if business interruption cover makes sense for how dependent you are on the office itself",
        ],
      },

      claimDiscipline: {
        title: "Office insurance claim discipline",
        intro:
          "Office claims are usually straightforward if equipment value and ownership are documented — the issues come from missing invoices or unclear asset lists.",
        bullets: [
          "Keep an updated equipment/asset list with approximate values",
          "Retain purchase invoices for higher-value items",
          "Report incidents (theft, fire, water damage) immediately with photos",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Total equipment and furniture value",
          "Whether business interruption cover is included and for how long",
          "Client/vendor footfall and liability exposure",
        ],
      },

      whoFor: [
        "Corporate and professional offices (consulting, IT, services)",
        "Small business offices without retail stock",
        "Businesses where equipment and continuity matter more than physical goods",
      ],
      localFit:
        "Office-heavy areas like Guindy, Anna Nagar and the OMR IT corridor have very different risk profiles from shop-heavy belts — mostly equipment and continuity risk, not stock.",
      keyCoverFocus: [
        "Equipment and furniture value, sized realistically",
        "Business interruption — worth considering if downtime would hurt",
        "Portable equipment cover if devices travel outside the office",
        "Liability cover matched to actual visitor footfall",
      ],
      claimDocs: [
        "Equipment/asset list with values",
        "Purchase invoices for higher-value items",
        "Photos of damage and incident circumstances",
        "Police report for theft claims",
      ],
      commonMistakes: [
        "Using a retail shop package that doesn't fit an office's actual risk",
        "Equipment list not updated as new devices are added",
        "No business interruption cover despite heavy dependence on office continuity",
      ],
      alsoKnownAs: ["Office package insurance", "Commercial office insurance", "Business office cover"],
      whatCanGoWrong: [
        "Equipment claim reduced because the asset list was outdated",
        "Business interruption not covered because it wasn't included at purchase",
        "Portable equipment (laptops) excluded because it wasn't declared as leaving the office",
      ],
      localLanding: {
        primaryLocations: ["guindy", "anna-nagar", "sholinganallur"],
        phrases: [
          "office insurance guindy",
          "commercial office insurance anna nagar",
          "office package insurance sholinganallur",
        ],
      },
      areaRealityTitle: "Office insurance reality in Chennai's commercial and IT belts",
      areaRealityText:
        "Offices in these areas often carry more equipment value than owners realise once laptops, servers and furniture are added up — worth a proper count rather than a guess.",
      areaSignals: [
        "Guindy office insurance",
        "Anna Nagar commercial office cover",
        "Chennai IT corridor office insurance",
      ],
      internalLinks: [
        { label: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/"), desc: "Retail-focused package for shops with stock." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure for client-facing offices." },
        { label: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/"), desc: "Broader business package overview." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Evidence and timeline discipline." },
      ],
    },

  },

  // =====================================================
  // HEAVY EQUIPMENT
  // /en/services/heavy-equipment/{service}/
  // =====================================================
  "heavy-equipment": {
    "crane-cpm-insurance": {
      seoTitle: "Crane & Heavy Equipment (CPM) Insurance – Sholavaram, Red Hills Chennai",
      seoDesc:
        "Crane and heavy equipment (CPM) insurance in Sholavaram, Red Hills and NH belt. Declared value + third-party liability clarity. 30 years experience. Call 7448324068 for expert help.",
      heroH1: "Crane & Heavy Equipment Insurance in Chennai — CPM Policy & Claims",
      heroP:
        "Crane and heavy equipment claims are high-value, so insurers look closely at the declared value and how the machine was actually being used. I'll help you get the declared value right and keep the proof a surveyor will actually accept — before you ever need to claim.",

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
      seoTitle: "Crane Third-Party Liability Insurance – NH Belt, Chennai",
      seoDesc:
        "Third-party liability insurance for crane operations near NH corridors and worksites in Chennai. Incident reporting and evidence clarity. Call 7448324068.",
      heroH1: "Crane Third-Party Liability Insurance in Chennai — Worksite Cover",
      heroP:
        "If a crane causes third-party damage or injury, it escalates fast — this is exactly where liability cover earns its cost. I'll help you set it up properly for your worksite, and keep the evidence habit that protects you if something happens.",

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

    "erection-all-risk-insurance": {
      seoTitle: "Erection All Risk (EAR) Insurance – Chennai Industrial Projects",
      seoDesc:
        "Erection All Risk insurance for plant installation and machinery erection projects in Chennai. Coverage during transit, storage and testing. Call 7448324068.",
      heroH1: "Erection All Risk (EAR) Insurance in Chennai — Plant Installation Cover",
      heroP:
        "Erection All Risk covers a plant or machine at its most vulnerable — during transit, storage, and while it's being installed and tested, not just once it's running. I'll help you get the project period and testing phase covered properly, since that's usually where a policy has quiet gaps.",

      coverageSummary: [
        "EAR is project-period cover, not annual cover — it needs to run from the moment equipment arrives on site through installation, testing and commissioning.",
        "Most disputes happen at the edges: damage during unloading, or a failure during the testing/commissioning phase that the policy wording didn't clearly cover."
      ],

      standardModules: {
        title: "What EAR typically covers",
        bullets: [
          "Physical loss or damage during transit to site, storage, erection and testing",
          "Third-party liability arising from the erection work (as an add-on, case-dependent)",
          "Testing and commissioning phase — often needs explicit extension, not assumed by default",
          "Existing surrounding property, if erection work risks damaging it (as applicable)",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy",
        bullets: [
          "Confirm the exact project start and completion dates — the cover period needs to match, with buffer for delays",
          "Get the equipment's replacement/contract value in writing, not an estimate",
          "Check whether testing and commissioning is explicitly included, not just assumed",
          "List any existing property nearby that could be damaged during erection",
        ],
      },

      claimDiscipline: {
        title: "EAR claim discipline",
        intro:
          "EAR claims are timeline and scope disputes more often than value disputes. Knowing exactly what phase the equipment was in when something happened matters a lot.",
        bullets: [
          "Record which phase the equipment was in — transit, storage, erection, or testing — when the loss happened",
          "Keep the contract value and any variation orders on file",
          "Report immediately; delays during an active project are the most common reason for disputes",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Contract/project value and equipment type",
          "Project duration and complexity of erection work",
          "Testing/commissioning scope and whether it's a standard or extended process",
        ],
      },

      whoFor: [
        "Contractors installing plant or machinery for a client",
        "Factory owners bringing in new equipment that needs erection and testing",
        "Project engineering firms managing multi-phase installations",
      ],
      localFit:
        "Industrial belts around Sriperumbudur, Oragadam and Gummidipoondi see frequent plant installation projects. Getting the project period and testing phase covered correctly avoids the most common EAR disputes.",
      keyCoverFocus: [
        "Project-period cover matched to actual timeline, with buffer for delays",
        "Testing and commissioning phase explicitly included",
        "Transit and storage cover before erection begins",
        "Third-party liability extension where erection work could affect nearby property",
      ],
      claimDocs: [
        "Contract value and any variation orders",
        "Project timeline and phase the equipment was in at loss",
        "Photos and incident report from the site",
        "Equipment specifications and installation records",
      ],
      commonMistakes: [
        "Cover period doesn't include buffer for project delays",
        "Testing/commissioning phase assumed covered but not explicitly stated",
        "Contract value not properly documented",
      ],
      alsoKnownAs: ["EAR insurance", "Erection insurance", "Plant installation insurance", "Machinery erection cover"],
      whatCanGoWrong: [
        "Loss happens after the stated project period ends, before final commissioning",
        "Damage during testing disputed as outside standard erection cover",
        "Contract value doesn't match what's actually being installed",
      ],
      localLanding: {
        primaryLocations: ["sriperumbudur-sipcot", "oragadam-outskirts", "gummidipoondi"],
        phrases: [
          "erection all risk insurance sriperumbudur",
          "EAR insurance oragadam",
          "plant installation insurance gummidipoondi",
        ],
      },
      areaRealityTitle: "EAR reality around Chennai's industrial belts",
      areaRealityText:
        "Plant installation projects in these belts often run longer than planned. Building a realistic buffer into the cover period from the start avoids a gap at the exact moment testing finally happens.",
      areaSignals: [
        "Sriperumbudur erection all risk insurance",
        "Oragadam plant installation cover",
        "Chennai industrial machinery erection insurance",
      ],
      internalLinks: [
        { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/"), desc: "Mechanical/electrical breakdown once the plant is running." },
        { label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/"), desc: "Site works cover for the construction phase." },
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Third-party exposure during erection work." },
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
      seoTitle: "Public Liability Insurance for Businesses – Chennai Outskirts",
      seoDesc:
        "Public liability insurance for businesses in Chennai outskirts. Third-party and site exposure coverage. Common exclusions and claim evidence clarity. Call 7448324068.",
      heroH1: "Public Liability Insurance in Chennai — Third-Party Risk Cover",
      heroP:
        "A single third-party injury or property damage claim can get expensive fast, especially if customers or the public regularly come onto your premises. I'll look at your business and tell you honestly what level of cover actually makes sense.",

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
            faqs: [
        {
          q: "What does public liability insurance cover?",
          a: "Public liability covers legal liability for injury to third parties or damage to their property arising from your business operations. It covers compensation, legal costs, and medical expenses. It does not cover your own employees (that's WC) or your own property.",
        },
        {
          q: "Who needs public liability insurance?",
          a: "Any business where third parties (customers, visitors, bystanders) can be affected — retail shops, restaurants, event venues, construction sites, manufacturing units. Some contracts and tenders require public liability as a condition.",
        },
        {
          q: "How is the sum insured for public liability decided?",
          a: "Based on your business type, footfall, and potential severity of incidents. A busy retail shop may need ₹10-50L cover, while a factory with hazardous operations may need ₹1Cr+. We assess your exposure and recommend realistic limits.",
        },
      ],
      internalLinks: [
        { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/"), desc: "Visitor-facing businesses often need liability add-ons." },
        { label: "Construction (CAR/WC)", href: EN("/services/construction/contractor-car-wc-insurance/"), desc: "Site and workforce exposures." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Incident timeline and proof discipline." },
      ],
    },

    "professional-liability-do-insurance": {
      seoTitle: "Professional Indemnity & D&O Insurance – Chennai Businesses",
      seoDesc:
        "Professional Indemnity and Directors & Officers (D&O) liability insurance for Chennai businesses and firms. Coverage for advice-based and management-level claims. Call 7448324068.",
      heroH1: "Professional Indemnity & Directors and Officers (D&O) Insurance in Chennai",
      heroP:
        "Public liability covers physical injury or property damage — but if a client claims your advice or service caused them a financial loss, or a director is personally named in a company dispute, that's a different kind of cover entirely. I'll help you figure out which one your business actually needs.",

      coverageSummary: [
        "Professional Indemnity covers claims that your professional advice, design, or service caused a client financial loss — relevant for consultants, engineers, architects and similar advice-based businesses.",
        "D&O covers directors and officers personally, for claims arising from management decisions — increasingly relevant as companies take on investors, larger contracts, or formal governance structures."
      ],

      standardModules: {
        title: "What these covers typically include",
        bullets: [
          "Professional Indemnity: defence costs and damages for claims of negligence, error or omission in professional service",
          "D&O: personal liability protection for directors/officers from claims tied to company decisions",
          "Retroactive cover (claims from past work, as applicable) — check this specifically when buying",
          "Legal defence costs, which can matter more than the claim amount itself",
        ],
      },

      preBuyChecklist: {
        title: "Before you buy",
        bullets: [
          "Be clear on which one you actually need — Professional Indemnity (service-based claims) or D&O (management-level claims) — some businesses need both",
          "Check if the policy includes retroactive cover for work already done",
          "Confirm the limit covers realistic legal defence costs, not just the claim amount",
          "List any contracts or investor agreements that specifically require proof of this cover",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline for PI and D&O",
        intro:
          "These claims are usually about paperwork and decisions made months or years earlier — keeping records of advice given and decisions made matters more here than almost any other cover.",
        bullets: [
          "Keep records of advice given, contracts signed, and decisions made with dates",
          "Notify the insurer as soon as you're aware of a potential claim, even before it's formal",
          "Don't admit fault or negotiate directly before speaking to the insurer",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Nature of professional services or scale of management decisions involved",
          "Contract values and client base (larger clients often mean larger claim exposure)",
          "Claims history and how the business is structured (company vs partnership)",
        ],
      },

      whoFor: [
        "Consultants, engineers, architects and other advice-based professionals",
        "Company directors, especially where investors or formal boards are involved",
        "Businesses whose contracts specifically require proof of PI or D&O cover",
      ],
      localFit:
        "As more Chennai businesses take on formal investors, larger contracts, or board structures, this cover moves from optional to something clients and investors actually ask to see proof of.",
      keyCoverFocus: [
        "Clarity on whether you need Professional Indemnity, D&O, or both",
        "Retroactive cover for work or decisions already made",
        "Legal defence cost adequacy, not just the claim limit",
        "Contract and investor requirements that specify this cover",
      ],
      claimDocs: [
        "Contracts, advice records or board minutes relevant to the claim",
        "Timeline of decisions or services provided",
        "Correspondence with the claimant before formal notice",
        "Policy wording and retroactive date confirmation",
      ],
      commonMistakes: [
        "Confusing Professional Indemnity with general public liability — they cover different things",
        "No retroactive cover, leaving past work unprotected",
        "Notifying the insurer late, after already responding to the claimant directly",
      ],
      alsoKnownAs: ["PI insurance", "Professional indemnity cover", "D&O liability insurance", "Directors and officers insurance"],
      whatCanGoWrong: [
        "Claim denied because it falls under public liability, not professional indemnity, or vice versa",
        "Retroactive date excludes the work the claim is actually about",
        "Insurer not notified promptly, complicating the defence",
      ],
      localLanding: {
        primaryLocations: ["guindy", "sholinganallur", "anna-nagar"],
        phrases: [
          "professional indemnity insurance chennai",
          "D&O insurance guindy",
          "directors liability insurance sholinganallur",
        ],
      },
      areaRealityTitle: "PI and D&O reality for growing Chennai businesses",
      areaRealityText:
        "This cover often gets bought reactively — after an investor or client asks for it — rather than proactively. Setting it up before it's demanded avoids a rushed decision under pressure.",
      areaSignals: [
        "Chennai professional indemnity insurance",
        "Guindy D&O liability cover",
        "director insurance Chennai IT corridor",
      ],
      internalLinks: [
        { label: "Public Liability", href: EN("/services/liability/public-liability/"), desc: "Physical injury and property damage exposure." },
        { label: "Office Insurance Package", href: EN("/services/business-msme/office-insurance/"), desc: "Equipment and business interruption cover for offices." },
        { label: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/"), desc: "Broader business package overview." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Evidence and timeline discipline." },
      ],
    },
  },

  // =====================================================
  // CLAIMS SUPPORT
  // /en/services/claims-support/{service}/
  // =====================================================
  "claims-support": {
    "claim-support": {
      seoTitle: "Insurance Claim Help – Documents & Support, Sholavaram Chennai",
      seoDesc:
        "Insurance claim support in Sholavaram – document checklist, reporting steps and timeline clarity. Helping commercial, transport and industrial clients. Call 7448324068.",
      heroH1: "Insurance Claim Support in Chennai — Documents, Timelines & Help",
      heroP:
        "Most claims that get stuck aren't about whether you're covered — they're about missing paperwork or a delayed report. Tell me what happened and I'll walk you through exactly what your insurer needs, in the right order.",

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
            faqs: [
        {
          q: "What should I do immediately after an insurance incident?",
          a: "Step 1: Don't disturb the scene if possible. Step 2: Take photos and video of damage. Step 3: Note the time, date, and sequence of events. Step 4: Call your insurer or agent (us — 7448324068) within 24 hours. Step 5: File FIR if required (theft, major accident). Early reporting and clean documentation are the biggest factors in claim speed.",
        },
        {
          q: "How long does an insurance claim take to settle?",
          a: "With complete documentation: 2-4 weeks for straightforward claims. Motor claims with cashless at network garage: 3-7 days. Complex claims (fire, large commercial): 4-12 weeks depending on surveyor assessment. The main delays are almost always document gaps, not insurer slowness.",
        },
        {
          q: "Can you help with a claim rejection or dispute?",
          a: "Yes. We review the rejection reason, check if it's valid, and advise on options — re-submission with missing documents, surveyor re-assessment request, or escalation to the insurance ombudsman. Many rejections happen due to simple documentation gaps that can be fixed.",
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
      seoTitle: "Marine Cargo & Goods-in-Transit Insurance – NH Belt, Chennai",
      seoDesc:
        "Marine cargo and goods-in-transit insurance for NH belt transport and logistics near Chennai. Invoice, route and claim documentation support. Call 7448324068.",
      heroH1: "Marine Cargo Insurance in Chennai — Goods-in-Transit Cover",
      heroP:
        "A transit claim moves fast or slow depending on one thing — whether your invoice, packing list and route records actually line up. I'll help you build that habit before your first shipment, not scramble for it after a loss.",

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
      faqs: [
        {
          q: "Goods were damaged in transport — who pays?",
          a: "It depends on whose custody the goods were in and what your policy covers. A goods-in-transit/marine cargo policy pays you (the goods owner) directly for transit damage or loss, regardless of who is at fault — you don't have to wait for the carrier to accept liability. Report immediately, preserve the damaged packaging, and keep your invoice and dispatch proof ready for the surveyor.",
        },
        {
          q: "Sending machinery to another state — do I need transit insurance?",
          a: "Yes. Interstate movement of machinery carries higher risk from longer transit time, multiple handling points, and road conditions. A goods-in-transit policy covers the machinery's declared value during that specific movement — get it arranged before dispatch, not after.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Regular shipper — same routes repeatedly",
          forWhom: "You move goods on the same NH corridors regularly and want a consistent process, not a one-off policy each time.",
          points: [
            "We set up a repeatable invoice/packing/dispatch proof habit so each shipment is claim-ready by default.",
            "Route and mode declared clearly to avoid disputes if a claim arises.",
            "One contact for cover across all your regular shipments.",
          ],
          ctaLabel: "WhatsApp — regular transit cover",
          waText: "Hi, we ship goods regularly on the same routes and want a consistent transit insurance process set up.",
        },
        {
          label: "One-off or occasional shipment",
          forWhom: "A single high-value shipment — machinery, equipment, or goods moving interstate — that needs cover just for that movement.",
          points: [
            "Cover arranged for that specific movement, sized to the declared value of what's being shipped.",
            "Fast turnaround so this doesn't hold up your dispatch schedule.",
            "Clear guidance on what proof to capture before and during transit for that one shipment.",
          ],
          ctaLabel: "WhatsApp — one-off shipment cover",
          waText: "Hi, we have a one-off shipment that needs transit insurance arranged before dispatch.",
        },
        {
          label: "Goods damaged — filing a claim",
          forWhom: "A shipment has already been damaged or lost in transit and you need to move correctly.",
          points: [
            "We confirm the policy pays you directly, regardless of who's at fault — you don't have to wait for the carrier to accept liability.",
            "Guidance on preserving damaged packaging and gathering invoice/dispatch proof before the surveyor visits.",
            "Support through the claim process from report to settlement.",
          ],
          ctaLabel: "WhatsApp — transit damage claim",
          waText: "Hi, our goods were damaged in transit and we need help filing the insurance claim.",
        },
      ],

      comparisonTable: {
        title: "Weak proof trail vs. clean documentation",
        intro: "Transit claims are almost entirely documentation disputes — this is what decides the outcome.",
        columns: ["What matters", "Weak proof trail", "Clean documentation"],
        rows: [
          ["Invoice/packing match", "Mismatch risks claim dispute", "Consistent, verified before dispatch"],
          ["Damage evidence", "Photos/condition not documented", "Packing condition photographed"],
          ["Reporting speed", "Delayed — weakens the case", "Reported immediately"],
          ["Claim outcome", "Higher dispute risk", "Smoother, faster settlement"],
        ],
      },

      internalLinks: [
        { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/"), desc: "NH movement exposure and claims readiness." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Timeline and evidence discipline." },
      ],
    },
    "marine-hull-inland-vessel-insurance": {
      seoTitle: "Marine Hull & Inland Vessel Insurance – Chennai",
      seoDesc:
        "Marine hull and inland vessel insurance for boats, barges and inland waterway craft near Chennai. Hull damage, machinery and liability cover. Call 7448324068.",
      heroH1: "Marine Hull & Inland Vessel Insurance — Hull, Machinery & Liability Cover",
      heroP:
        "If you own or operate a vessel — a fishing boat, barge, or inland waterway craft — the risks are physical damage to the hull, machinery breakdown, and liability if something goes wrong on the water. I'll help you match cover to what you actually operate, not a generic marine policy.",
      coverageSummary: [
        "Hull damage — collision, grounding, storm, fire",
        "Machinery and equipment breakdown on board",
        "Total loss and constructive total loss cover",
        "Third-party liability for water-based incidents",
      ],
      standardModules: {
        "Hull & Machinery": "Physical damage to the vessel's structure and onboard machinery.",
        "Liability": "Third-party injury, damage or pollution liability arising from vessel operation.",
        "Total Loss": "Cover if the vessel is damaged beyond economical repair.",
      },
      preBuyChecklist: {
        "Vessel valuation": "Declared value should match survey/market value, not a round guess.",
        "Operating area": "Confirm the policy covers your actual routes/waters.",
        "Survey report": "Recent condition survey speeds up both quoting and claims.",
      },
      claimDiscipline: {
        "Immediate reporting": "Report incidents to insurer/surveyor as soon as possible.",
        "Photo/damage record": "Document damage before repairs begin.",
      },
      pricingFactors: ["Vessel age and value", "Operating waters", "Claims history", "Safety/survey compliance"],
      whoFor: ["Boat and barge owners", "Inland waterway cargo operators", "Fishing vessel owners"],
      localFit: "Vessel insurance in and around Chennai's port and inland waterway operations needs a survey-backed valuation — I'll help you get that lined up before quoting.",
      keyCoverFocus: ["Hull damage", "Machinery breakdown", "Total loss", "Third-party liability"],
      claimDocs: ["Survey report", "Registration certificate", "Incident report", "Damage photographs"],
      commonMistakes: ["Under-declared vessel value", "No recent survey on file", "Operating outside declared waters"],
      alsoKnownAs: ["Boat insurance", "Barge insurance", "Vessel hull cover"],
      whatCanGoWrong: ["Valuation disputes without a survey", "Claim denial for undeclared operating area"],
      localLanding: { primaryLocations: ["ennore", "chennai-port", "tiruvottiyur"], phrases: ["marine hull insurance chennai", "boat insurance chennai"] },
      areaRealityTitle: "Vessel insurance reality",
      areaRealityText: "A current survey report is what actually speeds up both the quote and any future claim — most delays trace back to not having one.",
      areaSignals: ["marine hull insurance chennai", "inland vessel insurance"],
      internalLinks: [
        { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/"), desc: "Cargo movement cover." },
        { label: "Claim Support", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow discipline." },
      ],
      faqs: [{ q: "Is machinery breakdown included in hull insurance?", a: "It can be added as a module — we confirm what's standard vs optional for your specific vessel type (case-dependent)." }],
    },
    "import-export-insurance": {
      seoTitle: "Import & Export Cargo Insurance – Chennai",
      seoDesc:
        "Import and export cargo insurance for traders and businesses moving goods through Chennai port and airport. Transit, customs-hold and documentation support. Call 7448324068.",
      heroH1: "Import & Export Insurance — Cargo Cover for Cross-Border Trade",
      heroP:
        "Import/export shipments carry a different risk profile than local transit — longer transit times, customs holds, multiple handling points. I'll help you set up cover that matches your actual trade lane, and keep the documentation straight so a claim doesn't stall at the first question.",
      coverageSummary: [
        "Ocean and air freight cargo cover",
        "Customs-hold and warehousing period cover",
        "Multi-leg transit (port to warehouse) cover",
        "Documentation and claim support for cross-border shipments",
      ],
      standardModules: {
        "Transit Cover": "Cargo cover from origin to destination, including transshipment points.",
        "Customs & Warehousing": "Cover during customs clearance holds and bonded warehouse storage.",
        "All-Risk vs Named-Peril": "Choice between broader all-risk cover and specific named-peril cover based on goods type.",
      },
      preBuyChecklist: {
        "Incoterms": "Know who bears risk at each stage (FOB, CIF, etc.) before deciding what to insure.",
        "Invoice/LC matching": "Insured value should tie back to your invoice and letter of credit.",
        "Route and carrier": "Declare the actual shipping line/route, not an estimate.",
      },
      claimDiscipline: {
        "Survey on arrival": "Get a survey done immediately if damage is suspected at destination.",
        "Document trail": "Invoice, packing list, bill of lading and survey report all need to match.",
      },
      pricingFactors: ["Goods type and value", "Trade lane and mode (sea/air)", "Packaging standard", "Claims history"],
      whoFor: ["Importers and exporters", "Trading companies", "Manufacturers shipping raw material or finished goods"],
      localFit: "Chennai's port and airport handle a large share of Tamil Nadu's import/export volume — I'll help you set up cover that matches your specific trade lane and Incoterms.",
      keyCoverFocus: ["Ocean/air freight", "Customs-hold period", "Multi-leg transit", "Documentation discipline"],
      claimDocs: ["Commercial invoice", "Packing list", "Bill of lading / airway bill", "Survey report"],
      commonMistakes: ["Insured value not matching invoice/LC", "Gaps in cover during customs hold", "No survey done before disputing damage"],
      alsoKnownAs: ["Import cargo insurance", "Export cargo insurance", "Cross-border transit cover"],
      whatCanGoWrong: ["Claim disputes from mismatched documentation", "Cover gaps at transshipment points"],
      localLanding: { primaryLocations: ["chennai-port", "sriperumbudur-sipcot", "oragadam"], phrases: ["import export insurance chennai", "export cargo insurance"] },
      areaRealityTitle: "Cross-border cargo reality",
      areaRealityText: "Most claim delays on import/export shipments come from documentation mismatches, not the loss itself — getting the paper trail right upfront avoids that.",
      areaSignals: ["import export insurance chennai", "export cargo insurance chennai"],
      internalLinks: [
        { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/"), desc: "Domestic transit cover." },
        { label: "Business & MSME Package", href: EN("/services/business-msme/business-msme-insurance/"), desc: "Business property and liability cover." },
        { label: "Claim Support", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow discipline." },
      ],
      faqs: [{ q: "Do you cover goods during customs hold?", a: "Yes, this can be included as part of the transit cover period — we confirm the exact duration and terms with the insurer (case-dependent)." }],
    },
    // ===========================
// ALIAS SERVICE DETAIL: Marine cargo (short slug alias)
// URL: /en/services/marine/marine-cargo-goods-in-transit/
// ===========================
"marine-cargo-goods-in-transit" :
  {
        seoTitle: "Marine Cargo / Goods-in-Transit – Proof Trail & Claim Readiness",
        seoDesc:
          "Transit insurance guidance: invoice/packing/dispatch trail, carrier responsibility and claim documentation discipline (as applicable).",
        heroH1: "Marine Cargo Insurance — Goods-in-Transit Proof & Claims",
        heroP:
          "A transit claim moves fast or slow depending on whether your invoice, packing list and dispatch records actually line up — that's what we help you get right, before it's needed.",
        coverageSummary: [
          "If you can’t prove the movement (dispatch → transit → receipt), most disputes become documentation disputes.",
        ],
        whoFor: ["Transporters, traders, SMEs shipping goods", "Import/export and corridor movement (as applicable)"],
        standardModules: { title: "What insurers verify in transit claims", bullets: ["Invoice + packing list consistency", "Dispatch/receipt proof", "Damage notes / survey as applicable"] },
        preBuyChecklist: { title: "Before you buy", bullets: ["Define shipment pattern (one-time vs open)", "Decide valuation basis", "Keep dispatch/receipt discipline"] },
        renewalChecks: { title: "Renewal checks", bullets: ["No gaps for open covers (as applicable)", "Declared goods type matches reality"] },
        claimDiscipline: { title: "Claim discipline", intro: "Transit claims need proof trail first.", bullets: ["Early notice to carrier/insurer (as applicable)", "Photos at delivery if damage", "Preserve packaging if relevant (as applicable)"] },
        pricingFactors: { title: "What affects acceptance", bullets: ["Goods type, route exposure, packing method", "Past losses and proof discipline"] },
        localFit: "Corridor movement around Chennai ports and NH belts increases proof-trail importance.",
        keyCoverFocus: ["Proof trail", "Valuation clarity", "Timeline discipline"],
        claimDocs: ["Invoice/packing list", "LR/consignment docs", "Delivery receipt + remarks (as applicable)", "Photos and correspondence (as applicable)"],
        commonMistakes: ["Missing delivery remarks", "No dispatch/receipt consistency", "Late notice"],
        alsoKnownAs: ["Transit insurance", "GIT insurance", "Marine cargo cover"],
        whatCanGoWrong: ["Weak proof trail leads to repeated queries", "Mismatch documents delay processing"],
        localLanding: { primaryLocations: ["manali", "ennore-kamarajar-port", "kattupalli-port-shipyard"], phrases: ["marine cargo insurance chennai", "goods in transit insurance chennai"] },
        areaRealityTitle: "Transit claim reality",
        areaRealityText: "Proof trail discipline decides speed and outcome more than premium choices.",
        areaSignals: ["marine cargo chennai", "goods in transit insurance support"],
        internalLinks: [
          { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Timeline + document sequence." },
          { label: "Insurance Documents Required", href: EN("/insurance-documents-required/"), desc: "General checklist discipline." },
        ],
        faqs: [{ q: "Do insurers need invoices for transit claims?", a: "Usually yes. Invoices and proof trail are core to valuation and liability checks (case-dependent)." }],
      }
  },

  // =====================================================
  // PERSONAL
  // /en/services/personal/{service}/
  // =====================================================
  "personal": {
    "taxi-cab-insurance": {
      seoTitle: "Taxi & Cab Insurance Agent – Chennai",
      seoDesc:
        "Taxi and cab insurance for operators across Chennai. Usage category clarity, renewal support and claim steps. Call or WhatsApp 7448324068.",
      heroH1: "Taxi & Cab Insurance in Chennai — Commercial Permit & Claims",
      heroP:
        "A taxi or cab is on the road far more than a private car, so claims come up more often too. Send me your permit and renewal details and I'll make sure both are aligned before you need to use them.",

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

    "auto-rickshaw-insurance": {
      seoTitle: "Auto Rickshaw Insurance Agent – Chennai",
      seoDesc:
        "Auto rickshaw insurance for individual and commercial-permit autos in Chennai. Usage clarity, renewal checks and claim steps. Call or WhatsApp 7448324068.",
      heroH1: "Auto Rickshaw Insurance in Chennai — Permit, Renewal & Claims",
      heroP:
        "An auto running on a commercial permit needs the usage category on the policy to actually match how it's used — that mismatch is the single biggest reason auto claims get delayed. Send me your permit and policy copy and I'll check the fit.",

      coverageSummary: [
        "Auto rickshaw policies are usage-sensitive — personal-use vs commercial-permit autos need different coverage, and mixing them up causes claim disputes.",
        "This page covers renewal checks and basic claim-step discipline for both owner-driven and rented-out autos."
      ],

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Confirm whether the permit is personal or commercial, and that the policy usage category matches",
          "Keep the permit, fitness certificate and previous policy copy ready",
          "Know basic claim steps before an incident happens",
        ],
      },

      renewalChecks: {
        title: "Renewal checks",
        bullets: [
          "Usage category (personal/commercial) matches actual operation",
          "Permit and fitness validity aligned with renewal date",
          "Avoid expiry gaps between old and new policy",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline",
        intro:
          "Most delays are avoidable: early reporting and basic photo evidence matters, especially for autos that change hands between family members or are rented out.",
        bullets: [
          "Report early and keep a clean timeline",
          "Capture photos before repairs (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle age and claim history",
          "Personal vs commercial-permit usage",
          "Add-ons selected (case-dependent)",
        ],
      },

      whoFor: [
        "Auto rickshaw owners and drivers, personal or commercial-permit",
        "Owners who rent out their auto and are unsure which usage category applies",
      ],
      localFit:
        "Autos on commercial permits see frequent city-usage exposure. Clean reporting and basic document discipline helps during claims.",
      keyCoverFocus: [
        "Usage clarity aligned to policy wording (personal vs commercial permit)",
        "Basic claim-step readiness and reporting discipline",
      ],
      claimDocs: [
        "Policy copy",
        "Permit and fitness certificate",
        "Incident timeline + photos (as applicable)",
      ],
      commonMistakes: [
        "Usage mismatch vs policy (commercial permit, personal-use policy or vice versa)",
        "Late reporting after incidents",
      ],
      alsoKnownAs: ["Auto insurance", "Three-wheeler insurance", "Rickshaw insurance"],
      whatCanGoWrong: ["Usage mismatch disputes", "Late reporting weakens the timeline"],
      localLanding: {
        primaryLocations: ["tambaram", "chrompet", "poonamallee", "villivakkam-industrial-areas"],
        phrases: [
          "auto rickshaw insurance tambaram",
          "auto insurance chrompet",
          "three wheeler insurance poonamallee",
        ],
      },
      areaRealityTitle: "Auto rickshaw claim reality (city usage)",
      areaRealityText:
        "Most issues are workflow and usage-declaration issues. Clean reporting and matching the permit type to the policy prevents avoidable delays.",
      areaSignals: ["Chennai auto rickshaw insurance support", "Auto insurance guidance Chennai"],
      internalLinks: [
        { label: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/"), desc: "Two-wheeler renewal and claim guidance." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
      ],
    },

    "tempo-mini-truck-insurance": {
      seoTitle: "Tempo & Mini Truck Insurance Agent – Chennai",
      seoDesc:
        "Tempo, mini-truck and pickup insurance for individual owner-operators in Chennai. Usage and load-type clarity, renewal checks and claim steps. Call or WhatsApp 7448324068.",
      heroH1: "Tempo & Mini Truck Insurance in Chennai — Load, Renewal & Claims",
      heroP:
        "A tempo or mini-truck's policy needs to reflect what it actually carries — general goods, perishables, or a specific trade — since load-type mismatches are one of the most common reasons small commercial-vehicle claims get disputed. Send me your permit and usage details and I'll check the fit before renewal.",

      coverageSummary: [
        "Tempo and mini-truck policies (individual owner-operator, not fleet) are sensitive to declared load type and usage — mismatches are a common source of claim disputes.",
        "This page covers renewal checks and claim-step discipline for single-vehicle tempo/mini-truck owners."
      ],

      preBuyChecklist: {
        title: "Before you buy or renew",
        bullets: [
          "Confirm the declared load/goods type matches what's actually carried",
          "Keep permit, fitness certificate and previous policy copy ready",
          "Know basic claim steps before an incident happens",
        ],
      },

      renewalChecks: {
        title: "Renewal checks",
        bullets: [
          "Load-type and usage disclosure matches real operation",
          "Permit and fitness validity aligned with renewal date",
          "Avoid expiry gaps between old and new policy",
        ],
      },

      claimDiscipline: {
        title: "Claim discipline",
        intro:
          "Most delays trace back to load-type mismatch or late reporting — both avoidable with basic documentation discipline.",
        bullets: [
          "Report early and keep a clean timeline",
          "Capture photos of the load/goods and damage before repairs (as applicable)",
        ],
      },

      pricingFactors: {
        title: "What affects premium and acceptance",
        bullets: [
          "Vehicle age, load capacity and claim history",
          "Declared goods type and route/usage pattern",
          "Add-ons selected (case-dependent)",
        ],
      },

      whoFor: [
        "Individual tempo and mini-truck owner-operators (not fleet — see Fleet Insurance for multi-vehicle)",
        "Small traders/transporters running local delivery routes",
      ],
      localFit:
        "Single-vehicle tempo/mini-truck operators face frequent short-haul exposure. Clean load-type declaration and reporting discipline helps at claim time.",
      keyCoverFocus: [
        "Load/goods-type declaration matched to policy wording",
        "Basic claim-step readiness and reporting discipline",
      ],
      claimDocs: [
        "Policy copy",
        "Permit and fitness certificate",
        "Incident timeline + photos of load and damage (as applicable)",
      ],
      commonMistakes: [
        "Declared goods type not matching what's actually carried",
        "Late reporting after incidents",
      ],
      alsoKnownAs: ["Tempo insurance", "Mini truck insurance", "Pickup van insurance"],
      whatCanGoWrong: ["Load-type mismatch disputes", "Late reporting weakens the timeline"],
      localLanding: {
        primaryLocations: ["madhavaram-truck-terminal", "koyambedu", "pattabiram", "porur"],
        phrases: [
          "tempo insurance madhavaram",
          "mini truck insurance koyambedu",
          "pickup van insurance porur",
        ],
      },
      areaRealityTitle: "Tempo/mini-truck claim reality (local delivery usage)",
      areaRealityText:
        "Most issues trace back to load-type declaration mismatches. Clean reporting and matching the declared goods type to the policy prevents avoidable delays.",
      areaSignals: ["Chennai tempo insurance support", "Mini truck insurance guidance Chennai"],
      internalLinks: [
        { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/"), desc: "Larger goods-vehicle cover for fleet operators." },
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
      ],
    },

    "car-insurance-support": {
      seoTitle: "Car Insurance Agent in Chennai, Sholavaram | Renewal, New Policy & Claims",
      seoDesc:
        "Car insurance renewal and new policy support in Chennai. IDV, NCB, zero depreciation and add-on advice. 30 years experience. Call 7448324068 for same-day policy help.",
      heroH1: "Car Insurance in Chennai — Renewals, IDV, NCB, Zero Dep & Claim Help",
      heroP:
        "Most car insurance problems I see aren't from the policy itself — they're from renewal mistakes: a wrong IDV, a missed no-claim bonus, an add-on that doesn't fit. Send me your renewal and I'll check it in about 10 minutes.",

      coverageSummary: [
        "Car insurance in Chennai: we help with renewal checks (IDV, NCB, add-ons), new policy selection, and claim-step clarity.",
        "30+ years of experience in Sholavaram. Same-day policy support available."
      ],

      standardModules: {
        title: "Renewal checks that matter most",
        bullets: [
          "IDV (Insured Declared Value) — set correctly or face proportion cut at claim",
          "NCB (No Claim Bonus) — verify carry-forward and claim history before renewal",
          "Zero depreciation add-on — decides whether you get full part value or depreciated value",
          "Engine protect, consumables, road assist — only if usage justifies the premium",
          "Avoid coverage gap — renew before expiry to retain NCB and continuous cover",
        ],
      },

      pricingFactors: {
        title: "What affects car insurance premium",
        bullets: [
          "Vehicle age and current IDV (affects both premium and claim payout)",
          "NCB percentage: 20% to 50% discount for claim-free years",
          "Add-ons selected (zero dep, engine protect, etc.)",
          "Insurer rules on previous claims and vehicle modifications",
          "RTO and usage zone (private vs commercial use)",
        ],
      },

      claimDiscipline: {
        title: "What to do after a car accident — simple steps",
        intro:
          "First 30 minutes matter most. A clean incident report and photos before moving the car protect your claim.",
        bullets: [
          "Don’t move the car until photos + video are captured (as applicable)",
          "Call the insurer helpline or agent immediately — same day is best",
          "Note the other driver’s vehicle number, insurance and contact details",
          "Get a clean written statement of what happened (date, time, sequence)",
        ],
      },

      whoFor: [
        "Private car owners in Chennai renewing annual policies",
        "First-time buyers comparing comprehensive vs third-party cover",
        "Owners unsure about IDV, NCB, or which add-ons make sense",
        "Anyone who had a claim and wants to understand what went wrong",
      ],
      localFit:
        "Car owners in Ambattur, Anna Nagar, Kolathur and Mogappair frequently renew without checking IDV or NCB carry-forward. A wrong IDV on a 5-year-old car can mean receiving 30–40% less than expected at claim time. We do a quick 10-minute check call to prevent that.",
      keyCoverFocus: [
        "IDV: set to current market value, not showroom price",
        "NCB: verify percentage and protect it with NCB protect add-on if eligible",
        "Zero depreciation: worth it for cars under 5 years old",
        "Comprehensive vs third-party: understand what each covers",
        "Claim-step readiness: photos, timeline, insurer contact",
      ],
      claimDocs: [
        "Policy copy and renewal certificate",
        "RC book and driving licence",
        "Incident photos/video before repairs",
        "Repair estimate from authorised workshop",
        "FIR (for theft or major accident, as applicable)",
      ],
      commonMistakes: [
        "Renewing at old low IDV — car value drops, but people forget to check",
        "Losing NCB by not declaring previous claim accurately",
        "Buying zero dep add-on for 8-year-old car — insurer may not offer it",
        "Not capturing photos before repair — surveyor calculates independently",
        "Missing renewal by even 1 day — insurer may require fresh inspection",
      ],
      alsoKnownAs: ["Four-wheeler insurance", "Private car policy", "Car insurance renewal Chennai", "Comprehensive car insurance"],
      whatCanGoWrong: [
        "Wrong IDV — claim settled at depreciated value lower than expected",
        "NCB gap — renewal processed without carry-forward, losing 20–50% discount",
        "Lapsed policy — accident during coverage gap, no claim possible",
        "Wrong add-ons — paying for add-ons that don’t apply to the vehicle age",
      ],
      localLanding: {
        primaryLocations: ["anna-nagar", "ambattur", "kolathur", "koyambedu", "mogappair-west"],
        phrases: [
          "car insurance renewal anna nagar",
          "car insurance ambattur",
          "private car insurance koyambedu",
          "car insurance agent Chennai",
          "car insurance renewal Chennai",
        ],
      },
      areaRealityTitle: "Car insurance renewal reality in Chennai",
      areaRealityText:
        "In Chennai, most car insurance renewals happen on the last day — rushed, with no IDV or NCB check. A ₹8L car insured with IDV of ₹5L (because last year’s policy wasn’t reviewed) pays out ₹5L max on total loss. The fix is a 10-minute call before renewal. We do that check for free — call 7448324068.",
      areaSignals: [
        "Car insurance agent Sholavaram Chennai",
        "Car insurance renewal Chennai cheap",
        "IDV NCB check Chennai car insurance",
        "Zero depreciation car insurance Chennai",
      ],
      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Renewing this year",
          forWhom: "Your policy is due soon and you want it done right, not just done fast.",
          points: [
            "We check your IDV and NCB carry-forward before you renew, not after.",
            "If zero dep or another add-on no longer makes sense for your car's age, we tell you — not upsell it anyway.",
            "Renewal handled over WhatsApp in about 10 minutes once we have your current policy copy.",
          ],
          ctaLabel: "WhatsApp — renewal check",
          waText: "Hi, my car insurance is due for renewal and I want an IDV/NCB check before I renew.",
        },
        {
          label: "Buying for the first time",
          forWhom: "New car, or your first time choosing a policy without a previous one to compare against.",
          points: [
            "We explain comprehensive vs third-party in plain terms — not just insurer jargon.",
            "IDV set to your car's real market value from day one, not a default that's easy to get wrong.",
            "Add-ons recommended based on how you'll actually use the car, not a standard bundle.",
          ],
          ctaLabel: "WhatsApp — new car policy",
          waText: "Hi, I just bought a car and need help choosing the right insurance policy.",
        },
        {
          label: "Dealing with a claim or lapsed policy",
          forWhom: "Something's already gone wrong — an accident, a missed renewal, or a claim that got complicated.",
          points: [
            "Step-by-step guidance from the first hour after an accident — what to photograph, who to call, what not to do.",
            "If your policy lapsed, we handle the inspection requirement and get you back on cover with minimal friction.",
            "If a claim was rejected or delayed, we review what happened and advise on realistic next steps.",
          ],
          ctaLabel: "WhatsApp — claim or lapsed policy",
          waText: "Hi, I need help with a car insurance claim or a lapsed policy. Can you guide me?",
        },
      ],

      comparisonTable: {
        title: "Renewing blind vs. renewing with a check",
        intro: "Most renewal problems trace back to one thing: nobody looked at the numbers before hitting 'pay.'",
        columns: ["What matters", "Auto-renew / renew blind", "Renew with a quick check"],
        rows: [
          ["IDV accuracy", "Often carried forward unchanged, even as the car ages", "Verified against current market value"],
          ["NCB", "Assumed correct — sometimes lost silently on insurer switch", "Confirmed and carried forward properly"],
          ["Add-ons", "Same bundle every year regardless of car age", "Reviewed — dropped if no longer relevant"],
          ["Claim payout risk", "Discovered only when you file a claim", "Caught and fixed before you need it"],
          ["Time cost", "Fast, but risk is invisible until claim time", "About 10 minutes, before the risk becomes real"],
        ],
      },

      guideSections: [
        {
          title: "The 10-minute renewal check, explained",
          intro: "This is exactly what we look at before you renew — you can do this yourself too, but most people don't.",
          points: [
            "IDV: compare it against your car's actual current market value, not last year's number carried forward.",
            "NCB: confirm the percentage matches your claim-free years, especially if you're switching insurers.",
            "Add-ons: zero dep makes sense under 5 years old; beyond 7-8 years, most insurers won't even offer it.",
            "Claim history: make sure it's declared accurately — a mismatch here can cause problems at claim time, not renewal time.",
          ],
        },
      ],

      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
        { label: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/"), desc: "Two-wheeler IDV, NCB and claim guidance." },
        { label: "Vehicle Dealer Insurance Tie-Up", href: EN("/vehicle-dealer-insurance-tieup/"), desc: "Run a showroom? Bulk customer insurance + stock cover, one contact." },
      ],
      faqs: [
        {
          q: "How is IDV (Insured Declared Value) calculated for my car?",
          a: "IDV is the approximate current market value of your car, calculated as manufacturer’s listed selling price minus depreciation based on vehicle age. For a car over 5 years old, depreciation can be negotiated. The IDV directly affects your claim payout — if your car is totalled or stolen, you receive the IDV amount. Setting IDV too low saves a few hundred rupees in premium but costs lakhs at claim time.",
        },
        {
          q: "Can I carry forward my NCB (No Claim Bonus) if I switch insurers?",
          a: "Yes. NCB belongs to you, not the car. You carry it forward to your new insurer with a No Claim Bonus certificate from your previous insurer. NCB ranges from 20% (1 claim-free year) to 50% (5 claim-free years). If you made a claim, you lose the NCB for that renewal cycle. We verify NCB carry-forward before every renewal.",
        },
        {
          q: "Is zero depreciation (zero dep) car insurance worth buying?",
          a: "Zero dep add-on means the insurer pays the full cost of replaced parts without deducting depreciation. Without it, plastic and rubber parts are depreciated at 30–50%, and older metal parts also get depreciation cuts. Zero dep is strongly recommended for cars under 5 years old. For cars older than 7 years, most insurers don’t offer it, or the premium is not justified.",
        },
        {
          q: "What should I do immediately after a car accident in Chennai?",
          a: "Step 1: Don’t move the car. Take photos and a video of the damage, position, other vehicle, and surroundings. Step 2: Call your insurer or agent (us — 7448324068) the same day. Step 3: Note the other driver’s vehicle number, insurance details, and contact number. Step 4: Go to an authorised network garage for cashless claims (or any garage for reimbursement). Step 5: Keep a written record of what happened.",
        },
        {
          q: "Can I renew car insurance after it has lapsed?",
          a: "Yes, but after a lapse (even 1 day), the insurer may require a fresh vehicle inspection before issuing a renewal policy. If the car had an accident during the lapse period, that may not be covered. You also lose NCB continuity in some cases. Renewing even 2 weeks before expiry avoids all these complications. Call us and we handle the renewal same-day.",
        },
        {
          q: "What is the difference between comprehensive and third-party car insurance?",
          a: "Third-party (TP) covers only damage or injury to the other person/vehicle. It is mandatory by law but covers nothing for your own car. Comprehensive covers TP liability plus your own car damage from accident, theft, fire, flood, etc. Almost all car owners in Chennai should have comprehensive cover — the premium difference is usually ₹3,000–10,000 per year depending on car value.",
        },
        {
          q: "I sold my car — how do I transfer the insurance to the new owner?",
          a: "Insurance must be formally transferred to the buyer within 14 days of sale (RTO transfer), or the seller stays liable for any claim in that window. The process involves an endorsement request to the insurer with the new RC and a transfer form. We handle this along with the RC transfer so there's no liability gap on either side.",
        },
        {
          q: "Can I add a family member as a driver, or is my policy valid for anyone driving my car?",
          a: "A private car comprehensive policy generally covers the vehicle, not a named driver — anyone driving with your permission and a valid license is covered under the standard policy. You don't need to formally 'add' a driver. What you should update via endorsement is your own details if they change (address, RC number) or the vehicle itself if it's modified or replaced.",
        },
      ],
    },

    "bike-insurance-support": {
      seoTitle: "Bike Insurance Agent in Chennai | Renewal & Claim Support",
      seoDesc:
        "Bike and two-wheeler insurance renewal across Chennai. IDV, add-on and claim step clarity. Get the right cover without confusion. Call or WhatsApp 7448324068.",
      heroH1: "Bike Insurance in Chennai — Renewal, IDV & Claim Support",
      heroP:
        "A quick check before you renew catches most bike insurance surprises before they happen. Send me your policy and I'll verify the IDV, no-claim bonus and add-ons — usually takes about 5 minutes.",

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
            faqs: [
        {
          q: "How is IDV calculated for a two-wheeler?",
          a: "IDV is the ex-showroom price minus depreciation based on vehicle age. For a 5-year-old bike, depreciation can be 35-40%. The IDV is what you receive on total loss or theft — setting it too low saves a small amount on premium but costs much more at claim time.",
        },
        {
          q: "Can I renew bike insurance after it has lapsed?",
          a: "Yes, but the insurer may require vehicle inspection. During the lapse period, any accident won't be covered. You also risk losing NCB continuity. Renew before expiry — we can process same-day renewals. Call 7448324068.",
        },
        {
          q: "Is comprehensive bike insurance worth it or should I get only third-party?",
          a: "Third-party is mandatory and covers damage to others only. Comprehensive adds own-damage cover (accident, theft, flood, fire). For bikes under 5 years or worth over ₹80K, comprehensive is strongly recommended. The premium difference is usually ₹500-1500 per year.",
        },
      ],

      personaGuideTitle: "Which of these is you?",
      personaGuide: [
        {
          label: "Daily commuter renewing this year",
          forWhom: "You use the bike daily for work/college and just want the renewal done right.",
          points: [
            "IDV and NCB checked before renewal so you're not silently paying more or covered for less.",
            "Same-day renewal over WhatsApp — send your current policy copy to start.",
            "Add-ons reviewed against how much you actually ride, not sold as a default bundle.",
          ],
          ctaLabel: "WhatsApp — renewal check",
          waText: "Hi, my bike insurance is due for renewal and I want an IDV/NCB check before I renew.",
        },
        {
          label: "Delivery rider / gig worker",
          forWhom: "You use the bike for delivery or ride-hailing work, which changes what your policy needs to cover.",
          points: [
            "We flag if your current policy's declared usage matches commercial/delivery use — a mismatch here is a common claim-rejection reason.",
            "Guidance on whether a personal policy is still valid for your usage pattern, or if it needs a different structure.",
            "Faster claim support given how often delivery riders are on the road.",
          ],
          ctaLabel: "WhatsApp — delivery rider policy check",
          waText: "Hi, I use my bike for delivery/gig work and want to check if my insurance actually covers this usage.",
        },
        {
          label: "Lapsed policy or first-time buyer",
          forWhom: "No current cover — either it lapsed, or this is a new bike.",
          points: [
            "If lapsed, we handle the inspection requirement and get you back on cover with minimal friction.",
            "If new, we help you decide comprehensive vs third-party based on the bike's value and your usage.",
            "Same-day processing so you're not riding uninsured longer than necessary.",
          ],
          ctaLabel: "WhatsApp — lapsed or new policy",
          waText: "Hi, my bike insurance lapsed / I have a new bike and need a policy set up quickly.",
        },
      ],

      comparisonTable: {
        title: "Third-party only vs. comprehensive",
        intro: "Third-party is legally mandatory either way — this is about what happens to your own bike.",
        columns: ["What matters", "Third-party only", "Comprehensive"],
        rows: [
          ["Damage to others (mandatory)", "Covered", "Covered"],
          ["Damage to your own bike", "Not covered", "Covered (accident, fire, theft, flood)"],
          ["Theft", "Not covered", "Covered"],
          ["Premium difference", "Lower", "Usually ₹500–1,500/year more"],
          ["Best for", "Very old bikes with low resale value", "Bikes under 5 years or worth over ₹80K"],
        ],
      },

      internalLinks: [
        { label: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/"), desc: "Claim steps and evidence discipline." },
      ],
    },
    // Ensure this exists (only if missing)
"health-insurance-support" :{
  seoTitle: "Health Insurance Agent in Chennai | Policy, Renewal & Claims",
  seoDesc:
    "Health insurance support across Chennai – plan selection, renewal checks, cashless vs reimbursement and claim document guidance. 30 years experience. Call 7448324068.",
  heroH1: "Health Insurance in Chennai — Mediclaim, Top-Up & Claim Support",
  heroP:
    "Health policies look similar on paper but behave very differently at claim time. What actually matters is whether the plan fits your situation, your disclosures are accurate, and your documents are ready before you need them.",
  coverageSummary: [
    "We help with guidance and document checklists. Insurer decisions and hospital processes remain case-dependent.",
  ],
  whoFor: ["Families and working professionals", "Senior citizen policies (as applicable)", "People renewing without understanding changes"],
  standardModules: { title: "What matters most", bullets: ["Waiting periods and exclusions", "Network and cashless process basics (case-dependent)", "Disclosure clarity and continuity"] },
  preBuyChecklist: { title: "Before you buy", bullets: ["Disclose pre-existing conditions accurately", "Check waiting periods", "Keep policy PDFs and endorsements"] },
  renewalChecks: { title: "Renewal checks", bullets: ["Avoid lapse (continuity matters)", "Check premium changes and coverage changes", "Keep documents organized"] },
  claimDiscipline: { title: "Claim discipline", intro: "Health claims succeed when documents and timelines are clean.", bullets: ["Keep admission/discharge papers", "Bills and reports organized", "Follow insurer TPA steps (case-dependent)"] },
  pricingFactors: { title: "What affects premium", bullets: ["Age, city, sum insured, add-ons/riders (case-dependent)"] },
  localFit: "Chennai city-side users often need renewal clarity and claim-step guidance.",
  keyCoverFocus: ["Continuity", "Disclosure clarity", "Document readiness"],
  claimDocs: ["Policy copy", "Hospital reports and bills (as applicable)", "IDs and claim forms where required"],
  commonMistakes: ["Letting policy lapse", "Incomplete disclosure", "Late/partial document submission"],
  alsoKnownAs: ["Mediclaim", "Family floater", "Senior citizen policy"],
  whatCanGoWrong: ["Continuity breaks can trigger waiting period issues", "Missing reports cause repeated queries"],
  localLanding: { primaryLocations: ["anna-nagar", "mogappair-west", "koyambedu", "porur"], phrases: ["health insurance chennai", "mediclaim renewal chennai"] },
  areaRealityTitle: "Health claim reality",
  areaRealityText: "Clean reports and correct process reduce delays more than chasing shortcuts.",
  areaSignals: ["health insurance support chennai"],

  personaGuideTitle: "Which of these is you?",
  personaGuide: [
    {
      label: "Buying your first health policy",
      forWhom: "No existing cover, or relying only on an employer group policy that ends if you change jobs.",
      points: [
        "We explain individual vs family floater plainly, matched to your actual family situation.",
        "Waiting periods and exclusions explained upfront — not discovered at claim time.",
        "Sum insured recommended based on realistic hospital costs in your area, not a generic number.",
      ],
      ctaLabel: "WhatsApp — first health policy",
      waText: "Hi, I don't have health insurance yet and want guidance on choosing my first policy.",
    },
    {
      label: "Renewing or reviewing an existing plan",
      forWhom: "You have a policy already but haven't checked in a while whether it still fits.",
      points: [
        "We check if your sum insured still matches current hospital costs — premiums rise, but sum insured often doesn't get revisited.",
        "Continuity protected — we flag risk before a lapse breaks your waiting-period benefits.",
        "If a better-fit plan exists, we say so; if your current one is fine, we say that too.",
      ],
      ctaLabel: "WhatsApp — renewal review",
      waText: "Hi, I want my existing health insurance policy reviewed before I renew it.",
    },
    {
      label: "Senior citizen or pre-existing condition",
      forWhom: "Buying or renewing cover where age or a known health condition changes what's available.",
      points: [
        "We identify insurers who genuinely accept your age/condition profile — not just list every company generically.",
        "Waiting periods for pre-existing conditions explained clearly, since this is where most disputes happen later.",
        "Guidance on accurate disclosure — under-disclosing to get a lower premium is the single biggest cause of claim rejection.",
      ],
      ctaLabel: "WhatsApp — senior/pre-existing cover",
      waText: "Hi, I'm looking for health insurance for a senior citizen or with a pre-existing condition. Can you guide me?",
    },
  ],

  comparisonTable: {
    title: "Accurate disclosure vs. under-disclosing to save premium",
    intro: "This is the single biggest fork in the road for health insurance claims — most people don't realise it until it's too late.",
    columns: ["What matters", "Under-disclose to save premium", "Disclose accurately"],
    rows: [
      ["Premium today", "Slightly lower", "Reflects your real risk — sometimes marginally higher"],
      ["Claim for a related condition", "High risk of rejection for non-disclosure", "Processed on its actual merits"],
      ["Waiting period clarity", "Unclear — insurer may treat it as concealment", "Known and predictable from day one"],
      ["Policy stability", "Insurer can cancel the policy if concealment is found", "Policy stands as issued"],
      ["Peace of mind", "None — risk sits hidden until a claim", "Full — you know exactly where you stand"],
    ],
  },

  guideSections: [
    {
      title: "What actually causes health claim rejections",
      intro: "Not insurer unfairness — usually one of these three, and all three are avoidable.",
      points: [
        "Non-disclosure of a pre-existing condition, even one that seems minor or unrelated to the current claim.",
        "A lapsed policy that broke continuity, resetting waiting periods that had already been served.",
        "Missing or inconsistent documents — discharge summary, bills, and reports not matching each other.",
      ],
    },
  ],

  internalLinks: [
    { label: "Insurance Renewal Near Me", href: EN("/insurance-renewal-near-me/"), desc: "Renewal discipline and checks." },
    { label: "Claim Support", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow discipline." },
    { label: "One Advisor for All Company Policies", href: EN("/corporate-insurance-advisor-one-point/"), desc: "Setting up group health for your company? See the consolidated-advisor approach." },
  ],
  faqs: [
    { q: "Do you guarantee cashless?", a: "No. Cashless depends on insurer/TPA and hospital process. We guide documents and steps (case-dependent)." },
    { q: "I have a minor pre-existing condition — should I mention it even if it seems unrelated?", a: "Yes, always disclose it. Non-disclosure — even of something that seems minor — is the most common reason claims get rejected later, sometimes for conditions that appear unrelated on the surface. Accurate disclosure protects you." },
    { q: "What happens if I let my health policy lapse for a few days?", a: "You risk losing continuity benefits, which can reset waiting periods for pre-existing conditions. Even a short lapse can mean re-serving a waiting period you'd already completed. Renew before expiry, or contact us immediately if it's already lapsed." },
  ],
},
"lic-life-term-insurance": {
  seoTitle: "LIC & Term Life Insurance Support – Chennai",
  seoDesc:
    "LIC policy support, term insurance, and life cover guidance in Chennai — plan selection, premium comparison, nominee and claim help. Call 7448324068.",
  heroH1: "LIC & Term Life Insurance — Plan Selection, Premiums & Claim Support",
  heroP:
    "Life insurance decisions are easy to put off because the options all sound similar on a brochure. I'll walk you through LIC plans and term insurance side by side — what each actually pays out, what it costs at your age, and which one fits what your family would actually need — so you're not guessing.",
  coverageSummary: [
    "Term life insurance — pure protection, high cover at low premium",
    "LIC endowment and money-back plans — protection plus savings",
    "Nominee and beneficiary setup guidance",
    "Existing LIC policy review and premium comparison",
  ],
  standardModules: {
    "Term Insurance": "Life cover with no maturity payout — chosen for maximum cover at the lowest premium, typically to protect income during working years.",
    "LIC Plans": "Endowment, money-back and whole-life plans that combine a payout with a savings/maturity component.",
    "Riders": "Accidental death, critical illness and premium waiver riders added on top of a base policy.",
  },
  preBuyChecklist: {
    "Cover amount": "Should reflect income replacement need, not just a round number.",
    "Policy term": "Match to years of financial dependency (loans, children's education, etc.).",
    "Nominee details": "Keep updated — mismatched nominee details are a common claim delay.",
  },
  claimDiscipline: {
    "Documents ready": "Policy bond, death certificate, ID and nominee proof kept accessible.",
    "Timely intimation": "Insurer should be informed as soon as possible after the event.",
  },
  pricingFactors: ["Age at purchase", "Cover amount and policy term", "Health disclosures", "Riders selected"],
  whoFor: ["Salaried and self-employed individuals with dependents", "Anyone with an existing LIC policy unsure if it's still the right fit", "First-time buyers comparing term vs endowment"],
  localFit: "Chennai families often hold older LIC endowment policies alongside newer term plans — I'll help you see the two side by side instead of guessing which one is 'better'.",
  keyCoverFocus: ["Income replacement", "Loan/liability payoff", "Children's education", "Existing policy review"],
  claimDocs: ["Policy bond", "Death certificate", "Nominee ID proof", "Bank details for payout"],
  commonMistakes: ["Buying only an endowment plan with too little pure cover", "Outdated nominee details", "Letting an old policy lapse instead of reviewing it"],
  alsoKnownAs: ["Term plan", "LIC policy", "Life cover", "Whole life insurance"],
  whatCanGoWrong: ["Nominee mismatch delays payout", "Lapsed policy loses continuity benefits", "Under-insurance leaves family short"],
  localLanding: { primaryLocations: ["anna-nagar", "t-nagar", "velachery", "porur"], phrases: ["lic agent chennai", "term insurance chennai", "life insurance chennai"] },
  areaRealityTitle: "Life insurance reality",
  areaRealityText: "Most people are either under-insured on term cover or holding an old LIC policy they've never reviewed — a side-by-side check usually settles which one needs fixing.",
  areaSignals: ["lic chennai", "term insurance chennai", "life insurance agent near me"],
  internalLinks: [
    { label: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/"), desc: "Medical cover alongside life cover." },
    { label: "Claim Support", href: EN("/services/claims-support/claim-support/"), desc: "Claim workflow discipline." },
    { label: "Insurance Renewal Near Me", href: EN("/insurance-renewal-near-me/"), desc: "Renewal discipline and checks." },
  ],
  faqs: [{ q: "Is term insurance better than an LIC endowment plan?", a: "It depends on the goal — term gives maximum pure cover at low cost, endowment adds a savings component at higher premium. We compare both against your actual need (case-dependent)." }],
}
  },
}

let locationsDetails = {
  // ====== PRIORITY BELT: Sholavaram ↔ Madhavaram corridor ======
sholavaram: {
    name: "Sholavaram",
    postalCode: "600067",
    seoTitle: "Insurance Services in Sholavaram (Chennai Outskirts) – Office Support & Claim Guidance",
    seoDesc:
      "Insurance guidance anchored to our Sholavaram office: commercial transport/fleet, warehouses/property basics, contractor workflows (as applicable), and claim documentation support. Practical, claim-ready approach.",
    heroH1: "Insurance Agent in Sholavaram, Chennai — Vehicle, Business & Health",
    heroP:
      "Sholavaram is where our office actually is — not just an area we claim to cover. If you're nearby, walk in. If not, WhatsApp your documents and we'll guide you the same way, whether it's a lorry, a warehouse, or your family's health policy.",
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
      { title: "Crane & Heavy Equipment Insurance", href: EN("/crane-insurance-sholavaram/") },
      { title: "Contractor Insurance (CAR + WC)", href: EN("/contractor-insurance-sholavaram/") },
      { title: "Fire & Burglary Insurance", href: EN("/fire-burglary-insurance-sholavaram/") },
      { title: "Land & Property Insurance", href: EN("/land-property-insurance-sholavaram/") },
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

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Nearby resident or small business, walking distance",
        forWhom: "You're in or near Sholavaram and would rather sort things out in person.",
        points: [
          "Walk in directly — call or WhatsApp first so we can prep the document checklist and save you a repeat trip.",
          "Personal, health, and small business policies handled the same way as commercial cases, with the same attention.",
          "Same-day support for renewals when you bring your documents.",
        ],
        ctaLabel: "WhatsApp — visiting the office",
        waText: "Hi, I'm nearby in Sholavaram and want to visit the office. What should I bring?",
      },
      {
        label: "Transport or warehouse business on the corridor",
        forWhom: "You operate a lorry, fleet, or warehouse along the NH/corridor belt connected to Sholavaram.",
        points: [
          "Permit, fitness, and endorsement checks handled the same way whether you visit or send documents over WhatsApp.",
          "Warehouse and stock valuation reviewed with the same proof-discipline approach used across the corridor belt.",
          "This is our specialty — 30+ years anchored to exactly this kind of commercial risk.",
        ],
        ctaLabel: "WhatsApp — commercial/transport support",
        waText: "Hi, I run a transport/warehouse business near Sholavaram and need insurance support.",
      },
      {
        label: "Remote — not near Sholavaram but still in reach",
        forWhom: "You're further out but within our support radius, and prefer to handle everything remotely.",
        points: [
          "Full renewal, claim, and new-policy support over WhatsApp — a physical visit is rarely required.",
          "We visit your site for inspections or signatures within roughly 30 km of Sholavaram at no charge, when needed.",
          "Same advisor, same attention, regardless of whether you ever visit the office.",
        ],
        ctaLabel: "WhatsApp — remote support",
        waText: "Hi, I'm not near Sholavaram but would like remote insurance support. Can you help?",
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
    postalCode: "600052",
    seoTitle: "Insurance Services in Red Hills – NH Belt Transport, Warehouse & Claim Support",
    seoDesc:
      "Red Hills insurance guidance via Sholavaram office support: transport/fleet documentation discipline, warehouse/property basics (as applicable), MSME packages and claim documentation support.",
    heroH1: "Insurance Agent in Red Hills, Chennai — Vehicle, Business & Health",
    heroP:
      "Red Hills sits right on the NH belt, so most people here come to us about a lorry, a warehouse, or a renewal that's about to lapse. We check the details insurers actually look at before you buy or claim — not after.",
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
      { title: "Crane & Heavy Equipment Insurance", href: EN("/crane-insurance-red-hills/") },
      { title: "Contractor Insurance (CAR + WC)", href: EN("/contractor-insurance-red-hills/") },
      { title: "Fire & Burglary Insurance (Red Hills)", href: EN("/fire-burglary-insurance-red-hills/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Why are NH belt claims more document-heavy?",
        a: "Third-party involvement and compliance checks (as applicable) are more common. Clean reporting, valid documents and a clear timeline reduce avoidable delays.",
      },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Lorry or fleet operator on the NH belt",
        forWhom: "You run vehicles through the Red Hills toll/NH corridor, where documentation scrutiny is higher.",
        points: [
          "Permit and fitness checked against your policy before renewal, since NH-belt claims are unusually document-driven.",
          "Endorsements reviewed against real route/usage to avoid disputes if a third-party incident happens.",
          "Fast turnaround given how often NH-belt vehicles are on the move.",
        ],
        ctaLabel: "WhatsApp — NH belt fleet/lorry",
        waText: "Hi, I run vehicles through the Red Hills/NH belt and want my insurance documentation checked.",
      },
      {
        label: "Warehouse or godown owner",
        forWhom: "You store stock in a warehouse near Red Hills and need fire/burglary or stock declaration cover.",
        points: [
          "Sum insured checked against actual stock and building value — underinsurance is the most common claim-reduction cause here.",
          "Burglary security conditions reviewed against what's genuinely in place.",
          "Proof-folder habit set up so a claim isn't a scramble.",
        ],
        ctaLabel: "WhatsApp — warehouse cover",
        waText: "Hi, I own a warehouse near Red Hills and want to check our fire/burglary insurance.",
      },
      {
        label: "Family or individual (car, bike, health)",
        forWhom: "You live in Red Hills and need personal insurance, not commercial.",
        points: [
          "Same doorstep support as our commercial clients — renewal checks, IDV/NCB verification, claim guidance.",
          "Quick WhatsApp process for renewals; a visit is rarely needed.",
          "We're anchored in Sholavaram nearby, so local support isn't a stretch.",
        ],
        ctaLabel: "WhatsApp — personal insurance",
        waText: "Hi, I'm in Red Hills and need help with car/bike/health insurance.",
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
    postalCode: "600060",
    seoTitle: "Insurance Services in Madhavaram – Motor, SME & Commercial Vehicle Support",
    seoDesc:
      "Madhavaram support via Sholavaram office: motor renewals, SME packages, commercial vehicle documentation discipline and claim documentation guidance.",
    heroH1: "Insurance Agent in Madhavaram, Chennai — Vehicle, Business & Health",
    heroP:
      "Madhavaram sits between the city and the logistics corridor, so we see a mix here — car and bike renewals from families, and commercial vehicle paperwork from transport businesses. Whichever one you are, send your documents on WhatsApp and we'll tell you exactly what's needed.",
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
      { title: "Fire & Burglary Insurance", href: EN("/fire-burglary-insurance-madhavaram/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support Madhavaram customers for renewals?", a: "Yes. Renewals and claim documentation clarity are common requests we handle." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Family — car, bike, or health renewal",
        forWhom: "You need a personal policy renewed or reviewed, not a commercial one.",
        points: [
          "IDV/NCB checked on car and bike renewals before you pay, not after.",
          "Health policy sum insured and continuity checked so a lapse doesn't reset your waiting period.",
          "WhatsApp-first process — send your documents, we handle the rest.",
        ],
        ctaLabel: "WhatsApp — personal renewal",
        waText: "Hi, I'm in Madhavaram and need my car/bike/health insurance renewal checked.",
      },
      {
        label: "Transport business — commercial vehicle",
        forWhom: "You run goods vehicles through the Madhavaram truck terminal / logistics corridor.",
        points: [
          "Permit, fitness, and endorsement checks matched to real usage — this belt sees frequent document scrutiny.",
          "Goods-carrying and commercial vehicle cover reviewed together if you run more than one vehicle type.",
          "Fast turnaround given how often commercial vehicles here are on the move.",
        ],
        ctaLabel: "WhatsApp — commercial vehicle",
        waText: "Hi, I run commercial vehicles near Madhavaram and want my insurance documentation checked.",
      },
      {
        label: "Small business / MSME",
        forWhom: "You run a shop, office, or small unit and need business cover, not vehicle insurance.",
        points: [
          "Shop/MSME package sized to your actual stock and premises, not a generic bundle.",
          "Fire and burglary conditions explained clearly if you're setting up cover for the first time.",
          "One contact for renewals and claims going forward.",
        ],
        ctaLabel: "WhatsApp — business/MSME cover",
        waText: "Hi, I run a small business in Madhavaram and need insurance guidance.",
      },
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
    postalCode: "600053",
    seoTitle: "Insurance Services in Ambattur – Motor, SME & Claim Documentation Support",
    seoDesc:
      "Ambattur support via Sholavaram office: motor renewals, SME packages and claim documentation guidance with a practical, claim-ready approach.",
    heroH1: "Insurance Agent in Ambattur, Chennai — Vehicle, Business & Health",
    heroP:
      "Ambattur has both — families needing car, bike or health renewals, and businesses in the industrial estate needing factory or shop cover. Tell us which one you are and we'll guide you from there.",
    localContext: [
      "Mixed city-side area where motor renewals and SME packages are common needs.",
      "We focus on clean documentation and correct process steps (as applicable).",
    ],
    serviceLinks: [
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Factory & Fire Insurance (Industrial Estate)", href: EN("/factory-fire-insurance-ambattur-industrial-estate/") },
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
    postalCode: "600066",
    seoTitle: "Insurance Services in Puzhal (Chennai North) – Motor, SME & Claim Support",
    seoDesc:
      "Insurance guidance for Puzhal customers via Sholavaram office support: motor renewals, SME packages, and claim documentation steps. Practical, claim-ready approach.",
    heroH1: "Insurance Agent in Puzhal, Chennai — Vehicle, Business & Health",
    heroP:
      "Puzhal is close to our Sholavaram office, so renewals and everyday policy questions — car, bike, health, or a small business — get handled quickly, usually over WhatsApp without needing a visit.",
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
      { title: "Fleet & Lorry Insurance", href: EN("/fleet-insurance-puzhal/") },
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
    postalCode: "600066",
    seoTitle: "Insurance Services in Kavangarai – NH Corridor & Mixed Commercial Support",
    seoDesc:
      "Kavangarai insurance guidance via Sholavaram office support for NH movement and mixed SME needs: commercial vehicle documentation discipline, MSME packages, and claim support.",
    heroH1: "Insurance Agent in Kavangarai, Chennai — Vehicle & Business Cover",
    heroP:
      "Kavangarai sits on the NH corridor, so transport and small business needs come up most — we make sure the paperwork holds up before you ever need to claim, not after.",
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
    postalCode: "600060",
    seoTitle: "Insurance Services in Kosapaur – Motor, SME & Claim Documentation Support",
    seoDesc:
      "Kosapaur insurance guidance via Sholavaram office support: motor renewals, SME packages, and claim documentation steps with a practical approach.",
    heroH1: "Insurance Agent in Kosapaur, Chennai — Vehicle & Business Cover",
    heroP:
      "Kosapaur is one of the areas we support from our Sholavaram office — mostly renewals and everyday policy questions. Send your documents on WhatsApp and we'll take it from there.",
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
    postalCode: "600066",
    seoTitle: "Insurance Services in Surapet – Motor, SME & Industrial Pockets Support",
    seoDesc:
      "Surapet insurance guidance via Sholavaram office support: motor renewals, SME packages, claim documentation support, and guidance for industrial pockets (as applicable).",
    heroH1: "Insurance Agent in Surapet, Chennai — Vehicle & Business Cover",
    heroP:
      "We support Surapet from our Sholavaram office — motor policies, small business cover, and the occasional commercial case. Whatever it is, send us the details on WhatsApp and we'll guide you honestly.",
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
    postalCode: "600051",
    seoTitle: "Insurance Services in Madhavaram Milk Colony – Renewals & Claim Support",
    seoDesc:
      "Madhavaram Milk Colony support via Sholavaram office: motor renewals, health guidance, SME packages and claim documentation steps.",
    heroH1: "Insurance Agent in Madhavaram Milk Colony — Vehicle & Business Cover",
    heroP:
      "For Madhavaram Milk Colony, most people reach us about renewals — checking your add-ons are right and your claim history is properly counted. Send your current policy on WhatsApp and we'll check it in a few minutes.",
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
    postalCode: "600110",
    seoTitle: "Insurance Services near Madhavaram Truck Terminal – Commercial Vehicle & Fleet Support",
    seoDesc:
      "Commercial-first insurance guidance near Madhavaram Truck Terminal via Sholavaram office: commercial vehicles, goods carriers, fleet documentation discipline and claim support.",
    heroH1: "Insurance Agent near Madhavaram Truck Terminal — Commercial Vehicle & Fleet",
    heroP:
      "Right next to the truck terminal, most of what we handle here is commercial vehicle and fleet cover. We check permit and fitness papers before renewal so a claim doesn't get held up over something that could've been caught earlier.",
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
    postalCode: "600067",
    seoTitle: "Insurance Services in Budur – NH Belt Transport & SME Guidance",
    seoDesc:
      "Budur insurance guidance via Sholavaram office support: commercial vehicles, goods carriers, fleet documentation habits and MSME packages (as applicable).",
    heroH1: "Insurance Agent in Budur, Chennai — Vehicle & Business Cover",
    heroP:
      "Budur is on the NH belt, so commercial vehicle renewals are what we mostly help with here. We check your permit and fitness papers before you renew, so nothing catches you off guard at claim time.",
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
    postalCode: "602024",
    seoTitle: "Insurance Services in Thiruninravur – Motor, SME & Commercial Vehicle Support",
    seoDesc:
      "Thiruninravur insurance guidance via Sholavaram office support: motor renewals, SME packages, commercial vehicle documentation habits and claim support.",
    heroH1: "Insurance Agent in Thiruninravur — Vehicle & Business Cover",
    heroP:
      "We support Thiruninravur from our Sholavaram office — mainly renewals and making sure your coverage actually matches what you need. WhatsApp your policy and we'll take a look.",
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
    postalCode: "602024",
    seoTitle: "Insurance Services in Veppampattu – Commercial Vehicle & SME Guidance",
    seoDesc:
      "Veppampattu insurance guidance via Sholavaram office support for commercial vehicles, goods carriers, SME packages and claim documentation help (as applicable).",
    heroH1: "Insurance Agent in Veppampattu — Vehicle & Business Cover",
    heroP:
      "Veppampattu is on the outskirts belt, and most of what comes to us here is commercial vehicle renewals. We check your documents before you renew — that's usually what saves a claim from getting stuck later.",
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
    postalCode: "602001",
    seoTitle: "Insurance Support near Thiruvallur SIPCOT (Outskirts) – Industrial & Contractor Needs",
    seoDesc:
      "Support near Thiruvallur SIPCOT outskirts via Sholavaram office guidance: industrial/property insurance basics, contractor CAR/WC guidance and claim documentation discipline (as applicable).",
    heroH1: "Insurance Agent near Thiruvallur SIPCOT — Industrial & Vehicle Cover",
    heroP:
      "Near the Thiruvallur SIPCOT belt, most of what we see is factory and contractor cover — sites and equipment that need the paperwork right from day one, not fixed after something goes wrong.",
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
    postalCode: "600056",
    seoTitle: "Insurance Support near Poonamallee Bypass – Transport, Contractor & Industrial Guidance",
    seoDesc:
      "Support near Poonamallee bypass via Sholavaram office guidance: transport/fleet needs, contractor CAR/WC, industrial/property basics and claim support (as applicable).",
    heroH1: "Insurance Agent near Poonamallee Bypass — Vehicle & Business Cover",
    heroP:
      "Poonamallee Bypass sees a mix of transport and contractor work, so we help with both — fleet paperwork for operators, and CAR/WC cover for contractors on active sites nearby.",
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
    postalCode: "600124",
    seoTitle: "Insurance Support in Kuthambakkam – Industrial Corridor Guidance",
    seoDesc:
      "Kuthambakkam support via Sholavaram office guidance: transport/fleet needs, contractor CAR/WC, warehouse/property insurance basics and claim support (as applicable).",
    heroH1: "Insurance Agent in Kuthambakkam — Vehicle & Business Cover",
    heroP:
      "Kuthambakkam sits in the industrial corridor, so we see a mix of transport, contractor and property cover here. Whatever your situation, we set up the documentation properly from the start.",
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
    postalCode: "600124",
    seoTitle: "Insurance Support in Thirumazhisai – Transport, SME & Industrial Guidance",
    seoDesc:
      "Thirumazhisai insurance guidance via Sholavaram office support: commercial vehicles, SME packages, industrial/property basics and claim documentation discipline.",
    heroH1: "Insurance Agent in Thirumazhisai — Vehicle & Business Cover",
    heroP:
      "We support Thirumazhisai from our Sholavaram office — mostly transport and small business cover. Send your details on WhatsApp and we'll tell you what's needed.",
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
    postalCode: "602103",
    seoTitle: "Insurance Support in Chembarambakkam – Industrial Corridor & Vehicle Guidance",
    seoDesc:
      "Chembarambakkam insurance guidance via Sholavaram office support: commercial vehicles, SME packages, industrial/property basics and claim documentation support (as applicable).",
    heroH1: "Insurance Agent in Chembarambakkam — Vehicle & Business Cover",
    heroP:
      "We support Chembarambakkam from our Sholavaram office — mainly transport and small business cover. WhatsApp your details and we'll guide you from there.",
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
    postalCode: "602105",
    seoTitle: "Insurance Support near Sriperumbudur SIPCOT – Industrial, Contractor & Transit Guidance",
    seoDesc:
      "Support near Sriperumbudur SIPCOT via Sholavaram office guidance: industrial/property basics, contractor CAR/WC, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance Agent near Sriperumbudur SIPCOT — Industrial & Vehicle Cover",
    heroP:
      "Sriperumbudur SIPCOT is a genuine industrial belt, so factory, contractor and fleet cover are what we mostly handle here. We get the documentation right for each before anything goes wrong, not after.",
    localContext: [
      "Industrial zones often involve higher-value risks where valuation and proof discipline matter.",
      "Contractor/workforce exposures need correct classification and timeline discipline (as applicable).",
      "Transit risks benefit from invoice/packing/dispatch trail discipline (as applicable).",
    ],
    serviceLinks: [
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Contractor CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
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
    postalCode: "602105",
    seoTitle: "Insurance Support near Oragadam (Outskirts) – Industrial, Contractor & Fleet Guidance",
    seoDesc:
      "Support near Oragadam outskirts via Sholavaram office guidance: contractor CAR/WC, industrial/property basics, fleet documentation discipline and claim support (as applicable).",
    heroH1: "Insurance Agent near Oragadam — Industrial & Vehicle Cover",
    heroP:
      "Near Oragadam's industrial corridor, most of what we see is contractor, fleet and property cover. We set the documentation up properly from the start so it holds up if you ever need to claim.",
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
    postalCode: "600103",
    seoTitle: "Insurance Support in Manali New Town – Commercial Vehicle & Industrial Guidance",
    seoDesc:
      "Manali New Town support via Sholavaram office guidance: commercial vehicles, industrial/property basics, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance Agent in Manali New Town — Industrial & Vehicle Cover",
    heroP:
      "Manali New Town connects into the wider industrial belt, so transport and property cover are what come up most. We handle both from our Sholavaram office, close enough for a quick document check.",
    localContext: [
      "Industrial influence areas can involve commercial vehicles and transit-related documentation needs (as applicable).",
      "Claim clarity improves when reporting steps and proof trail are clean (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
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
    postalCode: "600068",
    seoTitle: "Insurance Support in Manali Industrial Estate – Industrial, Liability & Transit Guidance",
    seoDesc:
      "Manali Industrial Estate support via Sholavaram office guidance: industrial/property basics, liability awareness, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance Agent in Manali Industrial Estate — Factory & Vehicle Cover",
    heroP:
      "Manali Industrial Estate means factory and property cover, plus liability if your operations bring in visitors or goods movement. We help you figure out exactly what applies to your unit — not a generic package.",
    localContext: [
      "Industrial estates typically require better valuation/proof discipline for property and stock (as applicable).",
      "Liability and transit documentation discipline may be relevant depending on operations (as applicable).",
    ],
    serviceLinks: [
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
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
    postalCode: "600068",
    seoTitle: "Insurance Support near NH Manali Road – Transport, Transit & Claim Guidance",
    seoDesc:
      "NH Manali Road belt support via Sholavaram office guidance: commercial vehicles, goods carriers, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance Agent near NH Manali Road — Vehicle & Fleet Cover",
    heroP:
      "NH Manali Road sees heavy transport movement, so fleet and transit cover are what we mostly help with here. We keep the reporting steps clear so a claim doesn't stall over a missing detail.",
    localContext: [
      "Logistics belts tend to face higher third-party exposure and documentation scrutiny during claims.",
      "Document readiness and early reporting reduce avoidable delays (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
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
    postalCode: "600099",
    seoTitle: "Insurance Services in Kolathur (Commercial Pockets) – Motor, SME & Claim Support",
    seoDesc:
      "Kolathur commercial pockets support via Sholavaram office: motor renewals, SME packages, claim documentation steps and practical guidance.",
    heroH1: "Insurance Agent in Kolathur, Chennai — Vehicle, Shop & Business Cover",
    heroP:
      "Kolathur has a fair number of shops and small businesses alongside regular motor renewals, so we handle both — send your details on WhatsApp and we'll point you the right way.",
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
    postalCode: "600099",
    seoTitle: "Insurance Services in Retteri – Motor Renewals & Claim Support",
    seoDesc:
      "Retteri support via Sholavaram office: car/bike renewals, add-on clarity, claim documentation steps and practical guidance.",
    heroH1: "Insurance Agent in Retteri, Chennai — Vehicle & Business Cover",
    heroP:
      "We support Retteri from our Sholavaram office — mostly renewals and general coverage questions. WhatsApp us your policy and we'll take a look.",
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
    postalCode: "600049",
    seoTitle: "Insurance Support in Villivakkam (Industrial Areas) – SME, Property & Motor",
    seoDesc:
      "Villivakkam industrial areas support via Sholavaram office: SME packages, selected property risk guidance (as applicable), motor renewals and claim documentation help.",
    heroH1: "Insurance Agent in Villivakkam, Chennai — Vehicle & Business Cover",
    heroP:
      "Villivakkam's industrial pockets mean we see a lot of small business cover here alongside regular motor renewals. Tell us which one you need and we'll guide you from there.",
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
    postalCode: "600037",
    seoTitle: "Insurance Services in Mogappair West – Motor, Health & Renewal Support",
    seoDesc:
      "Mogappair West support via Sholavaram office: car/bike renewals, health policy guidance, and claim documentation steps with practical clarity.",
    heroH1: "Insurance Agent in Mogappair West, Chennai — Vehicle & Health Cover",
    heroP:
      "Mogappair West is mostly families reaching out about car, bike or health cover — renewals especially. We check what you already have before suggesting anything new.",
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
    postalCode: "600068",
    seoTitle: "Insurance Services in Manali – Industrial, Transport & Transit Guidance",
    seoDesc:
      "Manali support via Sholavaram office guidance: commercial vehicles, industrial/property basics, transit documentation discipline and claim support (as applicable).",
    heroH1: "Insurance Agent in Manali, Chennai — Industrial & Vehicle Cover",
    heroP:
      "Manali's industrial estate means most of our work here is transport and property cover for factories and warehouses. We're a short drive away in Sholavaram, so getting documents checked or a claim moving doesn't mean a long trip.",
    localContext: [
      "Industrial influence area where commercial vehicles and property risks may overlap (as applicable).",
      "Transit documentation and liability awareness can matter depending on operations (as applicable).",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Crane & Heavy Equipment Insurance", href: EN("/crane-insurance-manali/") },
      { title: "Contractor Insurance (CAR + WC)", href: EN("/contractor-insurance-manali/") },
      { title: "Industrial Fire Insurance (Refinery Belt)", href: EN("/industrial-fire-insurance-manali-refinery-belt/") },
      { title: "Mining / Heavy Industrial Insurance (Manali)", href: EN("/mining-heavy-industrial-insurance-manali/") },
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
    postalCode: "600067",
    seoTitle: "Insurance Services in Karanodai – NH Belt Transport & Claim Support",
    seoDesc:
      "Karanodai NH belt support via Sholavaram office: transport/fleet documentation discipline, goods carriers, and claim documentation guidance (as applicable).",
    heroH1: "Insurance Agent in Karanodai, Chennai — Vehicle & Business Cover",
    heroP:
      "Karanodai is on the NH belt, so most people here are transport operators — lorries and fleets that need their paperwork right before a claim, not scrambled together after one. We check that early.",
    localContext: [
      "NH belt movement increases third-party exposure and paperwork scrutiny during claims (as applicable).",
      "Permit/fitness/RC alignment and clean reporting reduces avoidable delays.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Crane & Heavy Equipment Insurance", href: EN("/crane-insurance-karanodai/") },
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
    postalCode: "601102",
    seoTitle: "Insurance Services in Periyapalayam – Outskirts Corridor Transport & SME Support",
    seoDesc:
      "Periyapalayam corridor support via Sholavaram office: transport/fleet guidance, SME packages and claim documentation discipline (as applicable).",
    heroH1: "Insurance Agent in Periyapalayam — Vehicle & Business Cover",
    heroP:
      "Periyapalayam is on the outskirts corridor, so transport and small business cover come up most. We check the details that actually matter at claim time, before you buy or renew.",
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
    heroH1: "Insurance Agent in Arani — Vehicle & Business Cover",
    heroP:
      "We support Arani from our Sholavaram office — mostly transport and transit-related cover for the corridor. Send your details on WhatsApp and we'll guide you from there.",
    localContext: [
      "Corridor-connected movement can involve transport and transit documentation needs.",
      "Claim smoothness improves with clean reporting and proof trail discipline (as applicable).",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
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
    postalCode: "600011",
    seoTitle: "Insurance Services in Perambur – Motor, Health & SME Support",
    seoDesc:
      "Perambur support via Sholavaram office: car/bike renewals, health policy guidance, SME packages and claim documentation support.",
    heroH1: "Insurance Agent in Perambur, Chennai — Vehicle & Business Cover",
    heroP:
      "Perambur is mostly families and small businesses — car and bike renewals, health cover, and the occasional shop policy. Tell us what you need and we'll take it from there.",
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
    postalCode: "600099",
    seoTitle: "Insurance Services in Kolathur – Motor Renewals, SME Packages & Claim Support",
    seoDesc:
      "Kolathur support via Sholavaram office: car/bike renewals, SME packages and claim documentation guidance with a practical approach.",
    heroH1: "Insurance Agent in Kolathur, Chennai — Vehicle & Business Cover",
    heroP:
      "We support Kolathur from our Sholavaram office — mostly motor renewals and small business cover. WhatsApp your details and we'll guide you honestly.",
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
    postalCode: "600107",
    seoTitle: "Insurance Services in Koyambedu – Motor Renewals & Claim Documentation Support",
    seoDesc:
      "Koyambedu support via Sholavaram office: motor renewals, add-on clarity and claim documentation steps with practical guidance.",
    heroH1: "Insurance Agent in Koyambedu, Chennai — Vehicle & Business Cover",
    heroP:
      "City connector support via Sholavaram office—motor renewals and claim documentation guidance. Call 7448324068 for document checklist and next steps.",
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
    postalCode: "600040",
    seoTitle: "Insurance Services in Anna Nagar – Motor, Health & Renewal Support",
    seoDesc:
      "Anna Nagar support via Sholavaram office: car/bike renewals, health policy guidance and claim documentation steps with practical clarity.",
    heroH1: "Insurance Agent in Anna Nagar, Chennai — Vehicle & Health Cover",
    heroP:
      "City-side support via Sholavaram office—motor renewals, health guidance, and claim documentation help. Call 7448324068 for document checklist and next steps.",
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
        label: "Buying for the first time",
        forWhom: "New vehicle, new health policy, or your first time choosing without a previous one to compare.",
        points: [
          "Plain-language explanation of what you're actually choosing between, not just insurer jargon.",
          "Right-sized cover for your situation, not a generic recommendation.",
          "Documentation guidance so the policy is issued correctly the first time.",
        ],
        ctaLabel: "WhatsApp — first-time policy",
        waText: "Hi, I'm buying insurance for the first time and need guidance. I'm in Anna Nagar.",
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

  // ====== NORTH CHENNAI PORT & INDUSTRIAL BELT ======

  tiruvottiyur: {
    name: "Tiruvottiyur",
    postalCode: "600019",
    seoTitle: "Insurance Services in Tiruvottiyur – Marine Cargo, Fleet & Factory Insurance",
    seoDesc: "Insurance guidance for Tiruvottiyur port and industrial businesses: marine cargo transit, lorry/fleet documentation, factory & property risk, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Tiruvottiyur",
    heroP: "Tiruvottiyur is North Chennai's port and industrial belt, so marine cargo, fleet and factory cover are what we mostly handle here. We keep the documentation clean from day one, which matters most for port-linked transit claims.",
    localContext: [
      "Tiruvottiyur is a key North Chennai industrial and port-adjacent area with marine cargo, fleet, and factory insurance concentration.",
      "Port-linked businesses need marine cargo and goods-in-transit insurance with clean documentation from Day 1.",
      "Fleet operators in Tiruvottiyur often face high third-party exposure — correct vehicle class declarations and permit compliance matter.",
    ],
    serviceLinks: [
      { title: "Marine Cargo & Goods in Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you handle marine cargo insurance for Tiruvottiyur import/export businesses?", a: "Yes. Marine cargo and goods-in-transit policies can be arranged. Documentation discipline — invoices, packing lists, transit records — is critical at claim time." },
      { q: "How do I get fleet insurance for lorries operating from Tiruvottiyur?", a: "Share the vehicle list, RC, PUC, and route details via WhatsApp. We guide you through declaration requirements based on cargo type and route." },
    ],
    relatedLocations: [
      { label: "Ennore", href: EN("/locations/ennore/") },
      { label: "Tondiarpet", href: EN("/locations/tondiarpet/") },
      { label: "Manali", href: EN("/locations/manali/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Tiruvottiyur",
      "marine cargo insurance Tiruvottiyur",
      "fleet insurance Tiruvottiyur",
      "factory insurance Tiruvottiyur",
      "lorry insurance Tiruvottiyur",
    ],
  },

  ennore: {
    name: "Ennore (Kamarajar Port Belt)",
    postalCode: "600057",
    seoTitle: "Insurance Services in Ennore – Marine Cargo, Industrial & Port Belt Insurance",
    seoDesc: "Insurance guidance for Ennore/Kamarajar Port belt: marine cargo transit, import/export risk, factory & warehouse property, and fleet documentation support via Sholavaram office.",
    heroH1: "Insurance services in Ennore (Kamarajar Port Belt)",
    heroP: "Ennore's port and industrial belt means marine cargo and goods-in-transit cover come up constantly, alongside warehouse and fleet risk. We keep the paperwork clean from the first shipment, not scrambled together after a loss.",
    localContext: [
      "Ennore (Kamarajar Port) is one of Tamil Nadu's highest-volume import/export and industrial hubs — marine cargo and liability risks are very high here.",
      "Port-connected businesses need marine all-risk or specific-peril cargo covers with proper policy wording and invoice alignment.",
      "Industrial estates near Ennore carry fire, machinery breakdown, and stock declaration risks.",
    ],
    serviceLinks: [
      { title: "Marine Cargo Insurance (Ennore Port Belt)", href: EN("/marine-cargo-insurance-ennore-port/") },
      { title: "Import / Export Cargo Insurance (Ennore Port)", href: EN("/import-export-cargo-insurance-ennore-port/") },
      { title: "Marine Hull Insurance (Kattupalli Port)", href: EN("/marine-hull-insurance-kattupalli-port/") },
      { title: "Crane & Cargo Handling Equipment Insurance", href: EN("/crane-insurance-ennore-port/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Public Liability", href: EN("/services/liability/public-liability/") },
    ],
    faqs: [
      { q: "What marine insurance covers are relevant for businesses near Ennore port?", a: "Marine all-risk or named-peril cargo insurance covers loss/damage during transit. For stored goods at port/warehouse, a fire/storage floater may also apply." },
      { q: "Do you support liability insurance for Ennore industrial units?", a: "Yes — Public Liability and Workmen Compensation are commonly needed here. Requirements depend on the nature of operations." },
    ],
    relatedLocations: [
      { label: "Tiruvottiyur", href: EN("/locations/tiruvottiyur/") },
      { label: "Tondiarpet", href: EN("/locations/tondiarpet/") },
      { label: "Manali", href: EN("/locations/manali/") },
      { label: "Manali Industrial Estate", href: EN("/locations/manali-industrial-estate/") },
    ],
    serviceAreaSignals: [
      "insurance in Ennore",
      "marine cargo insurance Ennore",
      "port insurance Ennore",
      "industrial insurance Ennore",
      "warehouse insurance Ennore",
    ],
  },

  gummidipoondi: {
    name: "Gummidipoondi (SIPCOT)",
    postalCode: "601201",
    seoTitle: "Insurance Services in Gummidipoondi SIPCOT – Factory, Fleet & Contractor Insurance",
    seoDesc: "Insurance guidance for Gummidipoondi SIPCOT industrial estate: factory & property risk, commercial fleet documentation, contractor all-risk, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Gummidipoondi (SIPCOT Industrial Estate)",
    heroP: "Gummidipoondi SIPCOT is a real industrial estate, so factory, heavy equipment and contractor cover are what we mostly handle here. We set the paperwork up properly for each, before it's ever needed at claim time.",
    localContext: [
      "Gummidipoondi SIPCOT hosts medium and heavy industries — factory property, machinery, and contractor risks are dominant insurance needs.",
      "Long-distance fleet operators based here need correct vehicle class declarations, permit alignment, and route-specific third-party risk management.",
      "Contractor activity in the estate requires Contractor All Risk, Workmen Compensation, and sometimes Contractor's CPM documentation.",
    ],
    serviceLinks: [
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") },
      { title: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") },
    ],
    faqs: [
      { q: "What insurance do Gummidipoondi factories typically need?", a: "Standard industrial property insurance (fire, explosion, flood), stock declaration, machinery breakdown, and liability. Requirements vary by industry type — we help align the right covers." },
      { q: "Do you support contractor documentation for SIPCOT projects?", a: "Yes — Contractor All Risk and WC documentation including project value declarations, site list, and manpower details if required." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Factory / industrial estate owner",
        forWhom: "You run a factory or industrial unit within Gummidipoondi SIPCOT.",
        points: [
          "Fire, stock, and machinery cover assessed together, sized to your actual asset value.",
          "Stock declaration structure if your inventory fluctuates through the year, so you're not underinsured at peak.",
          "Liability cover reviewed if vendors or visitors regularly access your site.",
        ],
        ctaLabel: "WhatsApp — factory insurance",
        waText: "Hi, we run a factory in Gummidipoondi SIPCOT and want our insurance reviewed.",
      },
      {
        label: "Long-distance fleet / lorry operator",
        forWhom: "You operate lorries or heavy vehicles running long routes out of Gummidipoondi.",
        points: [
          "Vehicle class declarations and permit alignment checked to avoid disputes on long-distance third-party incidents.",
          "Route-specific exposure discussed honestly, since long-haul operations carry different risk than local trips.",
          "Fleet documentation centralized if you run more than one vehicle.",
        ],
        ctaLabel: "WhatsApp — fleet/lorry insurance",
        waText: "Hi, we run long-distance lorries out of Gummidipoondi and need our insurance documentation checked.",
      },
      {
        label: "Contractor working on SIPCOT projects",
        forWhom: "You're a contractor with active or upcoming project work in the estate.",
        points: [
          "Contractor All Risk and Workmen Compensation documentation prepared together — project value, site list, and manpower details as required.",
          "Sum insured set to full contract value to avoid the average clause reducing a future claim.",
          "We work to tender deadlines when insurance proof is required to bid.",
        ],
        ctaLabel: "WhatsApp — contractor insurance",
        waText: "Hi, we're a contractor working on SIPCOT projects near Gummidipoondi and need CAR/WC insurance set up.",
      },
    ],

    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Ponneri", href: EN("/locations/ponneri/") },
      { label: "Minjur", href: EN("/locations/minjur/") },
      { label: "Thiruvallur (SIPCOT Outskirts)", href: EN("/locations/thiruvallur-sipcot-outskirts/") },
    ],
    serviceAreaSignals: [
      "insurance in Gummidipoondi",
      "factory insurance Gummidipoondi",
      "industrial insurance Gummidipoondi SIPCOT",
      "lorry insurance Gummidipoondi",
      "contractor insurance Gummidipoondi",
    ],
  },

  ponneri: {
    name: "Ponneri",
    postalCode: "601204",
    seoTitle: "Insurance Services in Ponneri – Lorry, Fleet & SME Insurance",
    seoDesc: "Insurance guidance for Ponneri district: lorry/fleet renewal documentation, commercial vehicle insurance, SME business packages, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Ponneri",
    heroP: "Ponneri has a mix of lorry owners, small fleet operators, and shop owners — we handle renewals and documentation for all three from our Sholavaram office.",
    localContext: [
      "Ponneri has a strong rural-commercial lorry and transport operator base that needs clean renewal documentation to avoid policy gaps.",
      "SMEs in the region include small factories, agri-storage, and distribution units — fire, stock, and business continuity packages are relevant.",
      "We support via WhatsApp and phone for most Ponneri requirements; document checklist guidance prevents last-minute surprises.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Can you handle lorry insurance renewals for Ponneri owners?", a: "Yes. Share RC, PUC, and previous policy details via WhatsApp. We guide you through IDV alignment and permit requirements before processing." },
    ],
    relatedLocations: [
      { label: "Gummidipoondi", href: EN("/locations/gummidipoondi/") },
      { label: "Minjur", href: EN("/locations/minjur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Red Hills", href: EN("/locations/red-hills/") },
    ],
    serviceAreaSignals: [
      "insurance in Ponneri",
      "lorry insurance Ponneri",
      "commercial vehicle insurance Ponneri",
      "SME insurance Ponneri",
    ],
  },

  minjur: {
    name: "Minjur",
    postalCode: "601203",
    seoTitle: "Insurance Services in Minjur – Fleet, Heavy Vehicle & Commercial Insurance",
    seoDesc: "Insurance guidance for Minjur: commercial fleet and lorry documentation, heavy vehicle renewal support, and SME risk guidance via Sholavaram office.",
    heroH1: "Insurance services in Minjur",
    heroP: "Minjur has a good number of lorry owners and small fleet operators, and that's mostly what we help with here — renewals and documentation from our Sholavaram office.",
    localContext: [
      "Minjur sits close to SIPCOT outskirts and sees significant fleet and heavy vehicle movement.",
      "Fleet operators need correct vehicle class declarations and permit checks before renewal to avoid claim rejection (as applicable).",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support fleet renewal for Minjur transport operators?", a: "Yes — via WhatsApp/phone. Share vehicle list, permit status, and expiry dates and we coordinate the renewal documentation." },
    ],
    relatedLocations: [
      { label: "Gummidipoondi", href: EN("/locations/gummidipoondi/") },
      { label: "Ponneri", href: EN("/locations/ponneri/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Minjur",
      "fleet insurance Minjur",
      "lorry insurance Minjur",
      "commercial vehicle Minjur",
    ],
  },

  thirumullaivoyal: {
    name: "Thirumullaivoyal",
    postalCode: "600062",
    seoTitle: "Insurance Services in Thirumullaivoyal – Logistics, Fleet & SME Insurance",
    seoDesc: "Insurance guidance for Thirumullaivoyal airport-adjacent logistics corridor: fleet documentation, warehouse/property risk, SME packages, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Thirumullaivoyal",
    heroP: "Being close to the airport, Thirumullaivoyal has a lot of logistics and warehouse activity, so fleet and warehouse cover are what we mostly handle here, alongside regular small business policies.",
    localContext: [
      "Thirumullaivoyal's airport proximity and logistics hub activity create high fleet, warehouse, and SME insurance demand.",
      "Logistics operators here need both motor commercial fleet and goods-in-transit covers aligned correctly.",
    ],
    serviceLinks: [
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    ],
    faqs: [
      { q: "What insurance does a logistics company near Thirumullaivoyal airport need?", a: "Typically: commercial vehicle/fleet for transport, goods-in-transit for cargo risk, and warehouse property if operating a storage facility. We help align all three." },
    ],
    relatedLocations: [
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Velappanchavadi", href: EN("/locations/velappanchavadi/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Thirumullaivoyal",
      "logistics insurance Thirumullaivoyal",
      "fleet insurance Thirumullaivoyal",
      "warehouse insurance Thirumullaivoyal",
    ],
  },

  tondiarpet: {
    name: "Tondiarpet",
    postalCode: "600081",
    seoTitle: "Insurance Services in Tondiarpet – Lorry, Fleet, Marine & Warehouse Insurance",
    seoDesc: "Insurance guidance for Tondiarpet North Chennai logistics hub: lorry/fleet documentation, marine cargo transit, warehouse property, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Tondiarpet",
    heroP: "Tondiarpet is a genuine logistics hub, so lorry, fleet, marine cargo and warehouse cover all come through here. Whatever your operation looks like, we set the documentation up to match it.",
    localContext: [
      "Tondiarpet is a major North Chennai logistics and industrial zone with high demand for lorry, fleet, marine cargo, and warehouse insurance.",
      "Fleet operators in this corridor often need NCB and IDV alignment before renewals to avoid under-insurance situations.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Marine Cargo & Goods in Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support marine cargo insurance for Tondiarpet traders?", a: "Yes — domestic goods-in-transit and marine cargo policies. Clean invoice records and transit documentation are critical for smooth claims." },
    ],
    relatedLocations: [
      { label: "Tiruvottiyur", href: EN("/locations/tiruvottiyur/") },
      { label: "Ennore", href: EN("/locations/ennore/") },
      { label: "Kodungaiyur", href: EN("/locations/kodungaiyur/") },
      { label: "Perambur", href: EN("/locations/perambur/") },
    ],
    serviceAreaSignals: [
      "insurance in Tondiarpet",
      "lorry insurance Tondiarpet",
      "fleet insurance Tondiarpet",
      "marine insurance Tondiarpet",
      "warehouse insurance Tondiarpet",
    ],
  },

  kodungaiyur: {
    name: "Kodungaiyur",
    postalCode: "600118",
    seoTitle: "Insurance Services in Kodungaiyur – Commercial Vehicle & Fleet Insurance",
    seoDesc: "Insurance guidance for Kodungaiyur logistics belt: commercial vehicle and fleet documentation, lorry renewals, and SME risk support via Sholavaram office.",
    heroH1: "Insurance services in Kodungaiyur",
    heroP: "Kodungaiyur is part of North Chennai's logistics belt, so commercial vehicle and lorry cover are what we mostly handle here, alongside SME package policies.",
    localContext: [
      "Kodungaiyur's logistics activity makes vehicle class compliance and permit alignment key insurance priorities.",
      "SME operators in the area benefit from combined business package policies that reduce documentation overhead.",
    ],
    serviceLinks: [
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
    ],
    faqs: [
      { q: "How do I renew commercial vehicle insurance for a Kodungaiyur-based truck?", a: "Share RC, PUC, previous policy, and fitness certificate via WhatsApp. We check IDV, permit status, and guide the renewal process." },
    ],
    relatedLocations: [
      { label: "Tondiarpet", href: EN("/locations/tondiarpet/") },
      { label: "Tiruvottiyur", href: EN("/locations/tiruvottiyur/") },
      { label: "Perambur", href: EN("/locations/perambur/") },
    ],
    serviceAreaSignals: [
      "insurance in Kodungaiyur",
      "commercial vehicle insurance Kodungaiyur",
      "lorry insurance Kodungaiyur",
      "fleet insurance Kodungaiyur",
    ],
  },

  erukkanchery: {
    name: "Erukkanchery",
    postalCode: "600118",
    seoTitle: "Insurance Services in Erukkanchery – SME, Transport & Commercial Insurance",
    seoDesc: "Insurance guidance for Erukkanchery North Chennai: SME business packages, commercial vehicle documentation, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Erukkanchery",
    heroP: "North Chennai SME and transport corridor support — business package guidance, commercial vehicle documentation, and renewal discipline from Sholavaram office. Call 7448324068 for document checklist and next steps.",
    localContext: [
      "Erukkanchery's transport corridor makes commercial vehicle permit alignment and correct class declarations important.",
      "SME businesses here benefit from combined fire, stock, and liability packages that align with their commercial activity.",
    ],
    serviceLinks: [
      { title: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "What SME insurance is suitable for a small business in Erukkanchery?", a: "A shop/MSME package typically combines fire, stock, electronics, and basic liability — one policy for multiple risks. We align the sum insured to actual stock value." },
    ],
    relatedLocations: [
      { label: "Tondiarpet", href: EN("/locations/tondiarpet/") },
      { label: "Kodungaiyur", href: EN("/locations/kodungaiyur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Erukkanchery",
      "SME insurance Erukkanchery",
      "commercial vehicle insurance Erukkanchery",
    ],
  },

  pattabiram: {
    name: "Pattabiram",
    postalCode: "600072",
    seoTitle: "Insurance Services in Pattabiram – Fleet, Contractor & Vehicle Insurance",
    seoDesc: "Insurance guidance for Pattabiram western corridor: fleet and lorry renewal documentation, contractor risk, personal motor, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Pattabiram",
    heroP: "Western corridor and Avadi-adjacent support — fleet documentation, contractor risk guidance, and personal motor renewals from Sholavaram office. Call 7448324068 for document checklist and next steps.",
    localContext: [
      "Pattabiram's defence and industrial adjacency creates fleet, contractor, and personal motor insurance demand.",
      "Contractor operators here often need Workmen Compensation and basic project liability documentation.",
    ],
    serviceLinks: [
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") },
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support contractor insurance for projects near Pattabiram/Avadi?", a: "Yes — Contractor All Risk and Workmen Compensation can be arranged. Share project value, site details, and manpower count to get started." },
    ],
    relatedLocations: [
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Thirumullaivoyal", href: EN("/locations/thirumullaivoyal/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Pattabiram",
      "fleet insurance Pattabiram",
      "contractor insurance Pattabiram",
      "lorry insurance Pattabiram",
    ],
  },

  velappanchavadi: {
    name: "Velappanchavadi",
    postalCode: "600077",
    seoTitle: "Insurance Services in Velappanchavadi – SME, Fleet & Motor Insurance",
    seoDesc: "Insurance guidance for Velappanchavadi: SME business packages, fleet renewal documentation, personal motor renewals, and claim support via Sholavaram office.",
    heroH1: "Insurance services in Velappanchavadi",
    heroP: "North Chennai suburb support — SME packages, commercial fleet documentation, and motor renewals from Sholavaram office. Call 7448324068 for document checklist and next steps.",
    localContext: [
      "Velappanchavadi is close to the Thirumullaivoyal logistics belt — SME and fleet insurance needs are common.",
      "Motor renewals require correct IDV declarations and add-on alignment to avoid under-insurance.",
    ],
    serviceLinks: [
      { title: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Can you handle motor insurance renewals for Velappanchavadi customers?", a: "Yes — via WhatsApp or phone. Share RC and previous policy details and we guide IDV, NCB, and add-on selection." },
    ],
    relatedLocations: [
      { label: "Thirumullaivoyal", href: EN("/locations/thirumullaivoyal/") },
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Velappanchavadi",
      "SME insurance Velappanchavadi",
      "fleet insurance Velappanchavadi",
      "car insurance Velappanchavadi",
    ],
  },

  naravarikuppam: {
    name: "Naravarikuppam",
    postalCode: "600052",
    seoTitle: "Insurance Services in Naravarikuppam – Lorry & Transport Insurance",
    seoDesc: "Insurance guidance for Naravarikuppam: lorry renwal documentation, small transport operator support, and claim guidance via Sholavaram office.",
    heroH1: "Insurance services in Naravarikuppam",
    heroP: "Naravarikuppam has a good number of lorry owners and small transport operators, and that's mostly what we handle here — renewals and claim guidance from our Sholavaram office.",
    localContext: [
      "Small lorry owners and transport operators in Naravarikuppam need clean renewal documentation — permit checks and fitness certificate alignment avoid policy gaps.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "How do lorry owners in Naravarikuppam renew insurance?", a: "WhatsApp RC, PUC, permit, and previous policy details. We check compliance and guide renewal to avoid gaps or wrong declarations." },
    ],
    relatedLocations: [
      { label: "Ponneri", href: EN("/locations/ponneri/") },
      { label: "Minjur", href: EN("/locations/minjur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Naravarikuppam",
      "lorry insurance Naravarikuppam",
      "transport insurance Naravarikuppam",
    ],
  },

  kancheepuram: {
    name: "Kancheepuram",
    postalCode: "631501",
    seoTitle: "Insurance Services in Kancheepuram – SME, Factory & Fleet Insurance",
    seoDesc: "Insurance guidance for Kancheepuram district: SME and factory property risk, commercial fleet documentation, contractor support, and claim guidance via Sholavaram office.",
    heroH1: "Insurance services in Kancheepuram",
    heroP: "District town and industrial fringe support — factory property, SME packages, fleet documentation, and contractor risk guidance from Sholavaram office. Call 7448324068 for document checklist and next steps.",
    localContext: [
      "Kancheepuram has growing industrial outskirts with factory, contractor, and SME insurance requirements.",
      "Textile and manufacturing units in Kancheepuram need fire, stock declaration, and machinery breakdown cover aligned to actual production value.",
    ],
    serviceLinks: [
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") },
    ],
    faqs: [
      { q: "Do you support Kancheepuram businesses from your Sholavaram office?", a: "Yes — via phone/WhatsApp primarily. For specific site requirements or inspections, we coordinate with the relevant insurer." },
    ],
    relatedLocations: [
      { label: "Sriperumbudur SIPCOT", href: EN("/locations/sriperumbudur-sipcot/") },
      { label: "Oragadam Outskirts", href: EN("/locations/oragadam-outskirts/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Kancheepuram",
      "factory insurance Kancheepuram",
      "SME insurance Kancheepuram",
      "fleet insurance Kancheepuram",
    ],
  },

  "chennai-north": {
    name: "Chennai (North)",
    postalCode: "600001",
    seoTitle: "Insurance Services in North Chennai – Commercial, Fleet & SME Insurance",
    seoDesc: "Insurance guidance for North Chennai belt: commercial fleet and lorry documentation, SME packages, marine cargo, and claim support from our Sholavaram office.",
    heroH1: "Insurance services in North Chennai",
    heroP: "North Chennai's commercial and industrial belt covers a lot of ground — fleet operators, small businesses, and marine cargo near the port areas. Wherever you fall in that, we're anchored right here in Sholavaram.",
    localContext: [
      "North Chennai covers Sholavaram, Manali, Ennore, Tiruvottiyur, Tondiarpet, and surrounding corridors — all with high commercial insurance demand.",
      "Fleet concentration in North Chennai means vehicle class compliance and permit alignment are critical before renewal.",
      "We are based in Sholavaram, the geographic center of this belt — documentation-first guidance for the whole North Chennai commercial zone.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Marine Cargo & Goods in Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Where is your North Chennai office?", a: "Our office is in Sholavaram — KVT Avenue, 4th Main Road. Sholavaram is the operational hub for all North Chennai belt support." },
      { q: "What commercial insurance do North Chennai businesses need most?", a: "Lorry/fleet for transport, warehouse property for storage, marine cargo for transit, and MSME packages for shops/factories — all requiring proper documentation discipline." },
    ],
    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Manali", href: EN("/locations/manali/") },
      { label: "Ennore", href: EN("/locations/ennore/") },
      { label: "Tiruvottiyur", href: EN("/locations/tiruvottiyur/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in North Chennai",
      "insurance agent North Chennai",
      "commercial insurance North Chennai",
      "fleet insurance North Chennai",
      "lorry insurance North Chennai",
      "warehouse insurance North Chennai",
    ],
  },

  thiruvallur: {
    name: "Thiruvallur",
    postalCode: "602001",
    seoTitle: "Insurance Services in Thiruvallur – Fleet, Factory & Commercial Insurance",
    seoDesc: "Insurance guidance for Thiruvallur district: lorry and fleet renewal documentation, factory and property risk, contractor support, and claim guidance via Sholavaram office.",
    heroH1: "Insurance services in Thiruvallur",
    heroP: "Thiruvallur district has a real industrial spread, so lorry, fleet, factory and contractor cover all come through here. We set the documentation up right for whichever one applies to you.",
    localContext: [
      "Thiruvallur district has significant SIPCOT industrial activity, fleet operations, and contractor movement along NH corridors.",
      "Fleet operators here often need route-specific third-party risk alignment and permit compliance checks before renewal.",
      "Factory and industrial properties in Thiruvallur need fire, machinery, and stock declaration covers calibrated to actual operations.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you support lorry insurance for Thiruvallur district operators?", a: "Yes — via WhatsApp/phone. Share RC, permit, PUC, and route details. We align IDV and vehicle class before processing renewal." },
      { q: "What factory insurance is needed in Thiruvallur SIPCOT?", a: "Standard industrial property (fire, explosion), stock declaration, and machinery breakdown are common. Requirements differ by industry type — we help identify the right covers." },
    ],
    relatedLocations: [
      { label: "Thiruvallur SIPCOT Outskirts", href: EN("/locations/thiruvallur-sipcot-outskirts/") },
      { label: "Gummidipoondi", href: EN("/locations/gummidipoondi/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Red Hills", href: EN("/locations/red-hills/") },
    ],
    serviceAreaSignals: [
      "insurance in Thiruvallur",
      "lorry insurance Thiruvallur",
      "fleet insurance Thiruvallur",
      "factory insurance Thiruvallur",
      "commercial insurance Thiruvallur",
    ],
  },

  "sidco-thirumudivakkam": {
    name: "SIDCO Industrial Estate, Thirumudivakkam",
    postalCode: "600044",
    seoTitle: "Insurance Agent near SIDCO Thirumudivakkam – Factory & Fire",
    seoDesc: "Factory, fire and machinery insurance for small and mid-size manufacturing units in SIDCO Industrial Estate, Thirumudivakkam, coordinated from our Sholavaram office.",
    heroH1: "Insurance agent for SIDCO Industrial Estate, Thirumudivakkam",
    heroP: "SIDCO Thirumudivakkam is a government-developed industrial estate with a dense mix of small and mid-size manufacturing units — factory fire, machinery and stock insurance set up with sum insured matched to actual unit size, not a generic policy template.",
    localContext: [
      "SIDCO Thirumudivakkam is a state-developed industrial estate hosting a large number of small and mid-size manufacturing units on allotted plots.",
      "Unit sizes and asset values vary significantly plot to plot — sum insured needs to be reviewed per unit, not assumed from a neighbour's policy.",
      "Many units here are first-generation manufacturing businesses that haven't reviewed their fire/property cover in years.",
    ],
    serviceLinks: [
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you cover small manufacturing units in SIDCO Thirumudivakkam?", a: "Yes. We size fire, machinery and stock cover to the actual unit — many SIDCO plot-holders are underinsured simply because sum insured was never revisited after the first policy." },
      { q: "Can you visit a unit in Thirumudivakkam for a proper valuation?", a: "Yes, for larger units a site visit helps get sum insured right. Smaller units can usually be handled over WhatsApp with photos and asset details." },
    ],
    relatedLocations: [
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "Porur", href: EN("/locations/porur/") },
      { label: "Poonamallee", href: EN("/locations/poonamallee/") },
    ],
    serviceAreaSignals: [
      "insurance SIDCO Thirumudivakkam",
      "factory insurance Thirumudivakkam",
      "fire insurance SIDCO industrial estate",
      "manufacturing unit insurance Thirumudivakkam",
    ],
  },

  ekkatuthangal: {
    name: "Ekkatuthangal",
    postalCode: "600032",
    seoTitle: "Insurance Agent in Ekkatuthangal – Print, Light Engineering & Office",
    seoDesc: "Fire, machinery and office package insurance for printing, light-engineering and commercial units in Ekkatuthangal, coordinated from our Sholavaram office.",
    heroH1: "Insurance agent in Ekkatuthangal — printing, light engineering & office",
    heroP: "Ekkatuthangal's mix of printing presses, light-engineering workshops and commercial offices near Guindy each carry different risk profiles — fire, machinery and office-package cover set up to match the actual operation, not a one-size policy.",
    localContext: [
      "Ekkatuthangal sits adjacent to Guindy and has a dense cluster of printing presses, light-engineering workshops and small commercial offices.",
      "Printing and light-engineering units carry machinery and fire risk that differs from a standard office package.",
      "Commercial offices in the belt more often need a straightforward property + liability package rather than industrial-grade cover.",
    ],
    serviceLinks: [
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Public & Professional Liability Insurance", href: EN("/liability-insurance-guindy/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you cover printing presses and light-engineering workshops in Ekkatuthangal?", a: "Yes. We size fire and machinery cover based on the actual equipment and stock involved — a printing press has a different risk profile from a light-engineering workshop, and we don't treat them the same." },
      { q: "What if my business in Ekkatuthangal is more office-based than industrial?", a: "We can set up a straightforward commercial property and liability package instead of industrial-grade cover — the right policy depends on your actual operation, not the area's general reputation." },
    ],
    relatedLocations: [
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "Adyar", href: EN("/locations/adyar/") },
      { label: "Velachery", href: EN("/locations/velachery/") },
    ],
    serviceAreaSignals: [
      "insurance in Ekkatuthangal",
      "printing press insurance Ekkatuthangal",
      "light engineering insurance Ekkatuthangal",
      "office insurance Ekkatuthangal Guindy",
    ],
  },

  "alandur-st-thomas-mount": {
    name: "Alandur / St. Thomas Mount",
    postalCode: "600016",
    seoTitle: "Insurance Agent in Alandur & St. Thomas Mount – Commercial & Office",
    seoDesc: "Fire, liability and office-package insurance for commercial establishments and offices in Alandur and St. Thomas Mount, coordinated from our Sholavaram office.",
    heroH1: "Insurance agent in Alandur and St. Thomas Mount",
    heroP: "Alandur and St. Thomas Mount sit on a Metro-connected commercial corridor near Guindy with a mix of offices, showrooms and small commercial establishments — property and liability cover set up around what each business actually needs.",
    localContext: [
      "Alandur and St. Thomas Mount form a commercial and transit-corridor belt, well connected by Metro and close to Guindy's industrial estate.",
      "The area has a mix of offices, showrooms and small commercial establishments rather than heavy manufacturing.",
      "Commercial property, public liability and shop-package insurance are the most common practical needs here.",
    ],
    serviceLinks: [
      { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Public & Professional Liability Insurance", href: EN("/liability-insurance-guindy/") },
      { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do you cover shops and offices in Alandur or St. Thomas Mount?", a: "Yes. We set up commercial property and liability cover based on your premises type and stock/asset value, not a generic shop policy." },
      { q: "Is this area treated as industrial or commercial for insurance purposes?", a: "Mostly commercial — offices and shops here typically need property + liability cover rather than industrial-grade factory insurance. We confirm based on your specific business." },
    ],
    relatedLocations: [
      { label: "Guindy", href: EN("/locations/guindy/") },
      { label: "Adyar", href: EN("/locations/adyar/") },
      { label: "Porur", href: EN("/locations/porur/") },
    ],
    serviceAreaSignals: [
      "insurance in Alandur",
      "insurance in St Thomas Mount",
      "shop insurance Alandur",
      "office insurance St Thomas Mount",
    ],
  },
}

// Merge expanded locations into locationsDetails
Object.assign(locationsDetails, locationExpansionDetails);

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

  // ====== NEW LOCATIONS — North Chennai & Industrial Belts ======

  tiruvottiyur: {
    name: "Tiruvottiyur",
    locationType: "industrial",
    seoTitle: "Insurance Services in Tiruvottiyur – Fleet, Marine Cargo & Factory Insurance",
    seoDesc:
      "Insurance guidance for Tiruvottiyur's industrial estate and port belt: fleet/lorry, marine cargo (import-export), factory/fire and claim documentation support. Coordinated from Sholavaram.",
    heroH1: "Insurance services in Tiruvottiyur",
    heroP:
      "Tiruvottiyur is North Chennai's port and industrial belt, so marine cargo, fleet and factory cover are what we mostly handle here. We keep the documentation clean from day one, which matters most for port-linked transit claims.",
    localContext: [
      "Tiruvottiyur Industrial Estate has high demand for factory fire, fleet and marine cargo insurance.",
      "Port adjacency means transit documentation discipline is critical for import/export cargo claims.",
      "Common needs: lorry insurance, goods-in-transit (marine), factory/fire coverage and workmen compensation.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Factory / Fire & Burglary Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      {
        q: "Do you serve Tiruvottiyur industrial businesses?",
        a: "Yes. We coordinate from our Sholavaram office. WhatsApp or call first with your policy/document details and we'll guide the next steps.",
      },
      {
        q: "What marine cargo insurance is needed for port-side businesses?",
        a: "For import/export businesses near Tiruvottiyur/Ennore belt, marine cargo coverage with invoice and packing list discipline is critical for claim safety.",
      },
    ],
    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Ennore", href: EN("/locations/ennore/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Tondiarpet", href: EN("/locations/tondiarpet/") },
    ],
    serviceAreaSignals: [
      "insurance in Tiruvottiyur",
      "lorry insurance Tiruvottiyur",
      "factory insurance Tiruvottiyur",
      "marine cargo insurance North Chennai",
      "fleet insurance Tiruvottiyur industrial estate",
    ],
  },

  ennore: {
    name: "Ennore (Kamarajar Port Belt)",
    locationType: "industrial",
    seoTitle: "Insurance Services in Ennore – Marine Cargo, Fleet & Industrial Insurance",
    seoDesc:
      "Ennore Kamarajar Port belt insurance guidance: marine cargo (import/export), fleet/lorry, factory fire and industrial risk support. Office coordinated from Sholavaram.",
    heroH1: "Insurance services in Ennore",
    heroP:
      "Ennore's port and industrial belt means marine cargo and goods-in-transit cover come up constantly, alongside factory fire and public liability. We keep the paperwork clean from the first shipment, not scrambled together after a loss.",
    localContext: [
      "Kamarajar Port makes Ennore one of the highest-demand zones for marine cargo and transit insurance in Tamil Nadu.",
      "Import/export businesses need invoice-level proof discipline for claim safety.",
      "Industrial operations here span petrochemical, port logistics and manufacturing — all needing specialised coverage.",
    ],
    serviceLinks: [
      { title: "Marine Cargo Insurance (Ennore Port Belt)", href: EN("/marine-cargo-insurance-ennore-port/") },
      { title: "Import / Export Cargo Insurance (Ennore Port)", href: EN("/import-export-cargo-insurance-ennore-port/") },
      { title: "Marine Hull Insurance (Kattupalli Port)", href: EN("/marine-hull-insurance-kattupalli-port/") },
      { title: "Crane & Cargo Handling Equipment Insurance", href: EN("/crane-insurance-ennore-port/") },
      { title: "Fleet / Transport Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Factory / Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { title: "Public Liability / Third Party", href: EN("/services/liability/public-liability/") },
      { title: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
    ],
    faqs: [
      {
        q: "What insurance is essential for businesses near Ennore port?",
        a: "Marine cargo (import/export transit), public liability, fleet/lorry and factory fire insurance are the primary needs for port-adjacent businesses.",
      },
    ],
    relatedLocations: [
      { label: "Tiruvottiyur", href: EN("/locations/tiruvottiyur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Manali", href: EN("/locations/manali/") },
    ],
    serviceAreaSignals: [
      "insurance in Ennore",
      "marine cargo insurance Ennore",
      "Kamarajar Port insurance",
      "fleet insurance Ennore",
      "industrial insurance Ennore",
    ],
  },

  gummidipoondi: {
    name: "Gummidipoondi (SIPCOT)",
    locationType: "industrial",
    seoTitle: "Insurance Services in Gummidipoondi SIPCOT – Factory, Fleet & Contractor Insurance",
    seoDesc:
      "Gummidipoondi SIPCOT industrial zone insurance guidance: factory/fire, fleet, contractor CAR/WC and heavy equipment. Coordinated from Sholavaram.",
    heroH1: "Insurance services in Gummidipoondi SIPCOT",
    heroP:
      "Gummidipoondi SIPCOT is a real industrial estate, so factory, fleet and contractor equipment cover — plus workmen compensation — are what we mostly handle here. We set the paperwork up properly for each, before it's ever needed at claim time.",
    localContext: [
      "Gummidipoondi SIPCOT hosts medium and heavy industry — factory fire, workmen compensation and fleet insurance are core needs.",
      "Contractor and heavy equipment operations are common here — CAR, CPM and WC coverage is critical.",
      "Outskirts proximity means fleet/lorry operations have high third-party exposure on NH belts.",
    ],
    serviceLinks: [
      { title: "Factory / Fire Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Fleet / Transport Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Contractor CAR / WC Insurance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Crane / CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    ],
    faqs: [
      {
        q: "What type of insurance do SIPCOT factories in Gummidipoondi need?",
        a: "Factory fire & burglary, workmen compensation, fleet/lorry and often marine cargo (if goods are shipped). Correct sum insured valuation is critical.",
      },
    ],
    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Ponneri", href: EN("/locations/ponneri/") },
      { label: "Minjur", href: EN("/locations/minjur/") },
      { label: "Thiruvallur", href: EN("/locations/thiruvallur/") },
    ],
    serviceAreaSignals: [
      "insurance in Gummidipoondi",
      "factory insurance Gummidipoondi SIPCOT",
      "fleet insurance Gummidipoondi",
      "contractor insurance Gummidipoondi",
      "industrial insurance North Chennai",
    ],
  },

  ponneri: {
    name: "Ponneri",
    locationType: "outer",
    seoTitle: "Insurance Services in Ponneri – Lorry, Fleet & SME Insurance",
    seoDesc:
      "Insurance guidance for Ponneri and surroundings: lorry/fleet, SME commercial package and claim documentation. Coordinated from Sholavaram.",
    heroH1: "Insurance services in Ponneri",
    heroP:
      "Ponneri has a mix of lorry owners, small fleet operators, and shop owners — we handle renewals and documentation for all three from our Sholavaram office.",
    localContext: [
      "Ponneri has a large rural-commercial catchment with many lorry owners and small fleet operators.",
      "SME shops, petrol bunks, and warehouses in the surrounding belt need commercial package coverage.",
      "Vehicle insurance (car, bike, lorry) is a daily need for residents and businesses here.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "MSME / Shop Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { title: "Car Insurance", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance", href: EN("/services/personal/bike-insurance-support/") },
    ],
    faqs: [
      {
        q: "Can I get lorry insurance help from Ponneri?",
        a: "Yes. We coordinate from Sholavaram. Share RC, permit/fitness details and previous policy on WhatsApp and we'll guide you on coverage and documents.",
      },
    ],
    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Gummidipoondi", href: EN("/locations/gummidipoondi/") },
      { label: "Minjur", href: EN("/locations/minjur/") },
    ],
    serviceAreaSignals: [
      "insurance in Ponneri",
      "lorry insurance Ponneri",
      "SME insurance Ponneri",
      "vehicle insurance Ponneri",
      "insurance agent Ponneri",
    ],
  },

  minjur: {
    name: "Minjur",
    locationType: "outer",
    seoTitle: "Insurance Services in Minjur – Lorry, Fleet & Commercial Vehicle Insurance",
    seoDesc:
      "Insurance guidance for Minjur — lorry, fleet and commercial vehicle documentation support from Sholavaram office.",
    heroH1: "Insurance services in Minjur",
    heroP:
      "Minjur has a good number of lorry owners and small fleet operators, and that's mostly what we help with here — renewals and documentation from our Sholavaram office.",
    localContext: [
      "Minjur sits between SIPCOT zones and the Ennore belt — lorry and fleet insurance demand is high.",
      "Commercial vehicles operating here often run on NH corridors with third-party exposure.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { title: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
    ],
    faqs: [
      {
        q: "Do you assist lorry owners in Minjur?",
        a: "Yes. WhatsApp or call with RC, permit details and previous policy. We guide coverage gaps and documentation needs.",
      },
    ],
    relatedLocations: [
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Ponneri", href: EN("/locations/ponneri/") },
      { label: "Gummidipoondi", href: EN("/locations/gummidipoondi/") },
      { label: "Red Hills", href: EN("/locations/red-hills/") },
    ],
    serviceAreaSignals: [
      "insurance in Minjur",
      "lorry insurance Minjur",
      "fleet insurance Minjur",
      "commercial vehicle insurance Minjur",
    ],
  },

  thirumullaivoyal: {
    name: "Thirumullaivoyal",
    locationType: "nearby",
    seoTitle: "Insurance Services in Thirumullaivoyal – Fleet, Industrial & SME Insurance",
    seoDesc:
      "Thirumullaivoyal insurance guidance: fleet/lorry, heavy equipment, SME and warehouse coverage near airport belt. Coordinated from Sholavaram.",
    heroH1: "Insurance services in Thirumullaivoyal",
    heroP:
      "Being close to the airport, Thirumullaivoyal has a lot of logistics activity, so fleet and heavy equipment cover are what we mostly handle here, alongside regular small business policies.",
    localContext: [
      "Thirumullaivoyal is part of the airport logistics corridor — fleet, warehousing and SME operations are common.",
      "Heavy equipment and contractor operations are active in this area.",
    ],
    serviceLinks: [
      { title: "Fleet / Transport Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { title: "MSME / Business Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Crane / CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    ],
    faqs: [
      {
        q: "What insurance does a warehouse near Thirumullaivoyal need?",
        a: "Fire and burglary coverage for stock is primary. Correct sum insured and stock record discipline reduce claim disputes significantly.",
      },
    ],
    relatedLocations: [
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Thirumullaivoyal",
      "fleet insurance Thirumullaivoyal",
      "warehouse insurance Thirumullaivoyal",
      "SME insurance Thirumullaivoyal",
    ],
  },

  tondiarpet: {
    name: "Tondiarpet",
    locationType: "city",
    seoTitle: "Insurance Services in Tondiarpet – Lorry, Fleet & Industrial Insurance",
    seoDesc:
      "Insurance guidance for Tondiarpet: lorry/fleet, marine cargo, warehouse and claim documentation support from Sholavaram office.",
    heroH1: "Insurance services in Tondiarpet",
    heroP:
      "Tondiarpet is a genuine logistics hub, so lorry, fleet, marine cargo and warehouse cover all come through here. Whatever your operation looks like, we set the documentation up to match it.",
    localContext: [
      "Tondiarpet is a key North Chennai logistics and industrial hub with high fleet and cargo insurance need.",
      "Port-adjacent movement makes marine cargo documentation discipline critical.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { title: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    ],
    faqs: [
      {
        q: "Can Tondiarpet businesses get marine cargo insurance?",
        a: "Yes. For goods transport near the port belt, marine cargo insurance with correct invoice and packing list documentation is essential.",
      },
    ],
    relatedLocations: [
      { label: "Tiruvottiyur", href: EN("/locations/tiruvottiyur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Tondiarpet",
      "lorry insurance Tondiarpet",
      "marine cargo insurance Tondiarpet",
      "fleet insurance Tondiarpet",
    ],
  },

  kodungaiyur: {
    name: "Kodungaiyur",
    locationType: "city",
    seoTitle: "Insurance Services in Kodungaiyur – Fleet, Lorry & Commercial Insurance",
    seoDesc:
      "Kodungaiyur insurance guidance: fleet, lorry and SME commercial coverage from Sholavaram office.",
    heroH1: "Insurance services in Kodungaiyur",
    heroP:
      "Kodungaiyur is part of North Chennai's logistics belt, so fleet and lorry cover are what we mostly handle here, alongside general commercial policies.",
    localContext: [
      "Kodungaiyur is a key logistics and transport hub in North Chennai.",
      "Fleet and lorry insurance with permit/fitness discipline is the primary need.",
    ],
    serviceLinks: [
      { title: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "MSME / Shop Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
    ],
    faqs: [
      {
        q: "What insurance do lorry owners in Kodungaiyur need?",
        a: "Third-party liability is mandatory. Comprehensive coverage with correct permit/fitness and route disclosure prevents claim disputes.",
      },
    ],
    relatedLocations: [
      { label: "Tondiarpet", href: EN("/locations/tondiarpet/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Kodungaiyur",
      "lorry insurance Kodungaiyur",
      "fleet insurance Kodungaiyur",
    ],
  },

  pattabiram: {
    name: "Pattabiram",
    locationType: "outer",
    seoTitle: "Insurance Services in Pattabiram – Fleet, Contractor & Vehicle Insurance",
    seoDesc:
      "Pattabiram area insurance guidance: fleet, contractor, lorry and personal motor from Sholavaram office.",
    heroH1: "Insurance services in Pattabiram",
    heroP:
      "Pattabiram and the belts around it see a mix of contractor sites and fleet vehicles, so that's mostly what we handle here alongside regular vehicle policies.",
    localContext: [
      "Pattabiram is near the defence corridor and Avadi belt — contractor, fleet and personal motor needs are common.",
      "Construction activity in the area drives CAR and WC insurance demand.",
    ],
    serviceLinks: [
      { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "Contractor CAR / WC Insurance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Car Insurance", href: EN("/services/personal/car-insurance-support/") },
    ],
    faqs: [
      {
        q: "Do you cover Pattabiram area for contractor insurance?",
        a: "Yes. CAR and workmen compensation for construction sites. Share project details and we'll guide the coverage and documentation needed.",
      },
    ],
    relatedLocations: [
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Thirumullaivoyal", href: EN("/locations/thirumullaivoyal/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Pattabiram",
      "contractor insurance Pattabiram",
      "lorry insurance Pattabiram",
      "fleet insurance Pattabiram",
    ],
  },

  velappanchavadi: {
    name: "Velappanchavadi",
    locationType: "nearby",
    seoTitle: "Insurance Services in Velappanchavadi – SME, Fleet & Personal Motor Insurance",
    seoDesc:
      "Velappanchavadi insurance guidance: SME, fleet and personal motor coverage from Sholavaram office.",
    heroH1: "Insurance services in Velappanchavadi",
    heroP:
      "Velappanchavadi is a mix of small businesses and regular families, so we handle both SME and personal motor cover here, alongside the occasional fleet policy.",
    localContext: [
      "Growing residential and SME zone near Thirumullaivoyal with motor and commercial insurance needs.",
    ],
    serviceLinks: [
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "MSME / Business Insurance", href: EN("/services/business-msme/business-msme-insurance/") },
      { title: "Car Insurance", href: EN("/services/personal/car-insurance-support/") },
      { title: "Bike Insurance", href: EN("/services/personal/bike-insurance-support/") },
    ],
    faqs: [
      {
        q: "Do you assist Velappanchavadi businesses?",
        a: "Yes. WhatsApp or call. We guide coverage for SME and fleet operations from our Sholavaram base.",
      },
    ],
    relatedLocations: [
      { label: "Thirumullaivoyal", href: EN("/locations/thirumullaivoyal/") },
      { label: "Ambattur", href: EN("/locations/ambattur/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Velappanchavadi",
      "SME insurance Velappanchavadi",
      "vehicle insurance Velappanchavadi",
    ],
  },

  erukkanchery: {
    name: "Erukkanchery",
    locationType: "city",
    seoTitle: "Insurance Services in Erukkanchery – SME, Fleet & Commercial Insurance",
    seoDesc:
      "Erukkanchery area insurance guidance: SME, transport and commercial vehicle coverage from Sholavaram office.",
    heroH1: "Insurance services in Erukkanchery",
    heroP:
      "Erukkanchery sits on a transport corridor, so we see both fleet vehicles and small businesses here — send your details on WhatsApp and we'll guide you the right way.",
    localContext: [
      "North Chennai transport corridor with active SME and logistics operations.",
    ],
    serviceLinks: [
      { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { title: "MSME / Shop Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
    ],
    faqs: [
      {
        q: "Can I get fleet insurance help for vehicles based in Erukkanchery?",
        a: "Yes. Share RC and permit/fitness details on WhatsApp and we'll guide the coverage, documents and renewal steps.",
      },
    ],
    relatedLocations: [
      { label: "Kodungaiyur", href: EN("/locations/kodungaiyur/") },
      { label: "Madhavaram", href: EN("/locations/madhavaram/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Erukkanchery",
      "fleet insurance Erukkanchery",
      "SME insurance Erukkanchery",
    ],
  },

  kancheepuram: {
    name: "Kancheepuram",
    locationType: "outer",
    seoTitle: "Insurance Services in Kancheepuram – SME, Contractor & Fleet Insurance",
    seoDesc:
      "Kancheepuram district insurance guidance: SME commercial package, contractor, factory and fleet insurance. Coordinated from Sholavaram.",
    heroH1: "Insurance services in Kancheepuram",
    heroP:
      "Kancheepuram district has a genuine industrial base — textiles, construction, factories — so contractor and factory cover come up alongside the usual SME and fleet policies.",
    localContext: [
      "Kancheepuram has a large industrial belt including textile, heavy industry and construction activity.",
      "Factory fire, contractor CAR/WC and fleet insurance are primary needs.",
      "SME shops and small businesses in the town need commercial package coverage.",
    ],
    serviceLinks: [
      { title: "Factory / Fire Insurance", href: EN("/services/industrial/factory-insurance/") },
      { title: "Contractor CAR / WC Insurance", href: EN("/services/construction/contractor-car-wc-insurance/") },
      { title: "Fleet / Transport Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { title: "MSME / Shop Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
    ],
    faqs: [
      {
        q: "Do you cover Kancheepuram district businesses?",
        a: "Yes. We coordinate from Sholavaram. Call or WhatsApp with your documents and we'll guide coverage for factory, SME or fleet needs.",
      },
    ],
    relatedLocations: [
      { label: "Sriperumbudur SIPCOT", href: EN("/locations/sriperumbudur-sipcot/") },
      { label: "Sholavaram", href: EN("/locations/sholavaram/") },
    ],
    serviceAreaSignals: [
      "insurance in Kancheepuram",
      "factory insurance Kancheepuram",
      "contractor insurance Kancheepuram",
      "fleet insurance Kancheepuram district",
      "SME insurance Kancheepuram",
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

  // 9) South Chennai residential belt
  SOUTH_CHENNAI_RESIDENTIAL: [
    "tambaram",
    "chrompet",
    "velachery",
    "adyar",
    "guindy",
    "sholinganallur",
    "medavakkam",
  ],

  // 10) Central Chennai residential + commercial
  CENTRAL_CHENNAI: [
    "t-nagar",
    "egmore",
    "mylapore",
    "nungambakkam",
    "kilpauk",
  ],

  // 11) West Chennai residential + commercial
  WEST_CHENNAI: [
    "anna-nagar",
    "porur",
    "mogappair",
    "koyambedu",
    "poonamallee",
  ],

  // 12) TN Industrial belts (outside Chennai)
  TN_INDUSTRIAL_BELT: [
    "hosur",
    "oragadam",
    "sriperumbudur",
    "maraimalai-nagar",
  ],

  // 13) North coastal / port belt (Ennore, Manali outskirts, Ponneri)
  NORTH_COASTAL_PORT_BELT: [
    "tiruvottiyur",
    "ennore",
    "gummidipoondi",
    "ponneri",
    "minjur",
    "thirumullaivoyal",
    "tondiarpet",
    "kodungaiyur",
    "erukkanchery",
    "pattabiram",
    "velappanchavadi",
    "naravarikuppam",
  ],

  // 14) Kancheepuram / outskirts industrial (extends the TN industrial belt)
  KANCHEEPURAM_OUTSKIRTS_BELT: [
    "kancheepuram",
    "chennai-north",
    "thiruvallur",
    "sidco-thirumudivakkam",
  ],

  // 15) South-central connector pockets (IT-corridor adjacent)
  SOUTH_CENTRAL_CONNECTOR: [
    "ekkatuthangal",
    "alandur-st-thomas-mount",
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

    {
      id: "north-coastal-port-belt",
      title: "North coastal / port belt (Ennore, Manali outskirts, Ponneri)",
      subtitle:
        "Port-adjacent industrial and coastal pockets—cargo movement, transit exposure and factory/warehouse property risk.",
      whyThisZoneMatters:
        "Proximity to Kamarajar (Ennore) Port and the SIPCOT belt means cargo, transit and industrial property risk overlap here—documentation discipline for goods-in-transit and factory cover both matter.",
      commonNeeds: [
        "Import/export cargo and goods-in-transit cover for port-linked movement",
        "Factory and warehouse fire/burglary proof discipline",
        "Commercial vehicle and third-party exposure for transit-heavy operations",
      ],
      topServices: buildServiceList([
        ["marine", "import-export-insurance", "Import / export cargo insurance"],
        ["marine", "marine-cargo-goods-in-transit-insurance", "Marine cargo / goods-in-transit"],
        ["industrial", "factory-insurance", "Factory insurance"],
        ["industrial", "warehouse-insurance", "Warehouse / godown insurance"],
        ["claims-support", "claim-support", "Claim support (documents + timeline)"],
      ]),
      searchesPeopleUse: [
        "import export insurance ennore",
        "cargo insurance ennore port",
        "factory insurance gummidipoondi",
        "warehouse insurance ponneri",
      ],
      locations: pick([
        "ennore",
        "tiruvottiyur",
        "gummidipoondi",
        "ponneri",
        "minjur",
        "tondiarpet",
        "kodungaiyur",
        "erukkanchery",
        "surapet",
        "thirumullaivoyal",
        "pattabiram",
        "velappanchavadi",
        "naravarikuppam",
        "arani",
        "chennai-north",
        "thiruvallur",
      ]).map(mk),
      zoneSignals: [
        "Port-linked cargo claims depend on dispatch/receipt proof and clean invoice trails.",
        "Factory/warehouse claims in this belt hinge on stock valuation and safety-condition proof.",
      ],
    },

    {
      id: "south-chennai-it-corridor",
      title: "South Chennai / IT corridor (Personal + SME support)",
      subtitle:
        "Dense residential and IT-commute areas—motor renewals, health guidance and shop/office SME cover.",
      whyThisZoneMatters:
        "These are primarily personal-line and small-business areas: car/bike renewals, health claims guidance, and office/shop MSME packages rather than heavy industrial risk.",
      commonNeeds: [
        "Car and bike insurance renewal checks (IDV/NCB/add-ons)",
        "Health insurance claim guidance (cashless vs reimbursement)",
        "Shop, office and small-business MSME package cover",
      ],
      topServices: buildServiceList([
        ["personal", "car-insurance-support", "Car insurance support"],
        ["personal", "bike-insurance-support", "Bike insurance support"],
        ["personal", "health-insurance-support", "Health insurance support"],
        ["business-msme", "office-insurance", "Office insurance package"],
        ["business-msme", "shop-msme-insurance", "Shop & MSME package insurance"],
      ]),
      searchesPeopleUse: [
        "car insurance velachery",
        "bike insurance tambaram",
        "health insurance adyar",
        "office insurance guindy",
        "insurance agent porur",
      ],
      locations: pick([
        "tambaram",
        "chrompet",
        "velachery",
        "adyar",
        "guindy",
        "sholinganallur",
        "medavakkam",
        "t-nagar",
        "egmore",
        "mylapore",
        "nungambakkam",
        "kilpauk",
        "porur",
        "mogappair",
        "poonamallee",
        "ekkatuthangal",
        "alandur-st-thomas-mount",
      ]).map(mk),
      zoneSignals: [
        "Motor renewal mistakes (wrong IDV/NCB/add-ons) are the most common gap here.",
        "Health claim delays usually trace back to missing or mismatched documents.",
      ],
    },

    {
      id: "southwest-industrial-outskirts",
      title: "Southwest industrial outskirts (Sriperumbudur, Oragadam, Hosur belt)",
      subtitle:
        "Auto/engineering SIPCOT belt and outskirts industrial towns—high-premium factory, contractor and heavy-equipment risk.",
      whyThisZoneMatters:
        "This belt carries genuine high-value industrial exposure: large factories, contractor worksites and heavy equipment, where declared-value clarity and stock/asset proof discipline directly affect claim outcomes.",
      commonNeeds: [
        "Factory and mining/heavy-industrial property cover",
        "Contractor CAR/WC cover for active worksites",
        "Crane/heavy-equipment (CPM) and machinery breakdown cover",
      ],
      topServices: buildServiceList([
        ["industrial", "factory-insurance", "Factory insurance"],
        ["industrial", "mining-industrial-insurance", "Mining / heavy industrial insurance"],
        ["industrial", "machinery-breakdown-insurance", "Machinery breakdown insurance"],
        ["construction", "contractor-car-wc-insurance", "Contractor CAR/WC insurance"],
        ["heavy-equipment", "crane-cpm-insurance", "Crane / heavy equipment (CPM)"],
      ]),
      searchesPeopleUse: [
        "factory insurance sriperumbudur",
        "contractor insurance oragadam",
        "crane insurance hosur",
        "machinery breakdown insurance kancheepuram",
      ],
      locations: pick([
        "sriperumbudur",
        "oragadam",
        "kancheepuram",
        "maraimalai-nagar",
        "sidco-thirumudivakkam",
        "hosur",
      ]).map(mk),
      zoneSignals: [
        "Declared value set too low is the most common issue on heavy-equipment claims here.",
        "Contractor WC claims depend on payroll/classification records being accurate.",
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
        {
          title: "Don't see your location listed?",
          desc: "Most locations not listed here are still covered—ask us directly and we'll confirm in minutes.",
          href: EN("/not-sure-if-we-cover-you/"),
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
  policiesDetail,
  seasonalPages,
  brand: {
    name: "M N Rajendrakumar Insurance Services",
    // Short suffix for <title> tags only — keeps titles under ~60 chars for SEO CTR.
    // Do NOT use for JSON-LD / on-page copy; use brand.name there.
    shortName: "MN Rajendrakumar Insurance",
    legalName: "M N Rajendrakumar",
    tagline: "Car • Lorry • Fleet • Factory • Health",
    subtitle:
      "Best insurance agent in Chennai — 30+ years, IRDAI licensed, 4.9★ Google rated. Car, bike, lorry, fleet, factory, warehouse and health insurance. Multi-insurer comparison, doorstep service across all Chennai. Call 7448324068.",

    phone: "7448324068",
    phoneE164,
    whatsappE164,
    whatsappPrefill,
    whatsappUrl,

    primaryArea: "Sholavaram (Chennai Outskirts)",
    areaChips: ["Sholavaram", "Red Hills Toll", "Madhavaram", "Manali", "Ambattur", "Chennai Outskirts"],

    // Google My Business rating (update when you have more reviews)
    ratingValue: 4.9,
    reviewCount: 47,

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

    knowsLanguages: ["Tamil", "English", "Malayalam"],

serviceCoverage: {
  primaryBase: "Red Hills / Sholavaram (Chennai North)",
  onSpotService: true,
  serviceArea: [
    "All Chennai (on-spot service)",
    "Red Hills",
    "Sholavaram",
    "Koyambedu",
    "Nungambakkam",
    "Chennai North",
    "Chennai",
  ],
},

founder: {
  name: "M. N. Rajendrakumar",
  title: "Licensed Insurance Consultant",
  yearsExperience: 30,
  bioShort:
    "30+ years of insurance consulting experience. Direct, documentation-first guidance with on-spot service across Chennai.",
  affiliations: [
    {
      org: "The New India Assurance Company Limited",
      role: "Agent / Consultant",
      branch: "Nungambakkam (Chennai)",
    },
    {
      org: "Life Insurance Corporation of India (LIC)",
      role: "Agent / Consultant",
      branch: "Chennai (servicing support)",
    },
  ],
},

insurerNetwork: [
  { name: "The New India Assurance Company Limited", type: "public", primary: true },
  { name: "United India Insurance Company Limited", type: "public" },
  { name: "National Insurance Company Limited", type: "public" },
  { name: "Oriental Insurance Company Limited", type: "public" },
  { name: "Life Insurance Corporation of India", type: "life", primary: true },
  { name: "ICICI Lombard General Insurance", type: "private" },
  { name: "Bajaj Allianz General Insurance", type: "private" },
  { name: "HDFC ERGO General Insurance", type: "private" },
  { name: "Reliance General Insurance", type: "private" },
  { name: "Tata AIG General Insurance", type: "private" },
  { name: "Future Generali India Insurance", type: "private" },
  { name: "Cholamandalam MS General Insurance", type: "private" },
  { name: "Royal Sundaram General Insurance", type: "private" },
  { name: "SBI General Insurance", type: "private" },
  { name: "Iffco Tokio General Insurance", type: "private" },
],

// Regulatory proof (fill real values)
regulatory: {
  authorityName: "IRDAI",
  authorityFullName: "Insurance Regulatory and Development Authority of India",
  licenseType: "Insurance Intermediary / Agency (as applicable)",
  licenseNumber: "1427274",
  // licenseValidThrough: "PASTE_EXPIRY_DATE_IF_AVAILABLE",
  iso6523Code: "", // optional; only if you have a valid code
},

  },

  // 2) Add at ROOT of siteData (same level as footerCtas, testimonials, etc.)
aboutPage: {
  heroSubtitle:
    "Licensed, local, claim-first guidance — no lead-selling, no spam, and direct accountability.",

  // High-intent positioning blocks
  valuePillars: [
    {
      title: "Claim-Ready Documentation",
      desc: "Correct disclosures and proof discipline before purchase. Fewer disputes during claims.",
    },
    {
      title: "Direct Licensed Expert",
      desc: "One advisor accountable end-to-end. No call center handoff.",
    },
    {
      title: "On-Spot Service Across Chennai",
      desc: "When the situation needs it, we visit on-site and guide the next steps.",
    },
    {
      title: "Tamil • English • Malayalam",
      desc: "No policy detail lost in translation—especially exclusions and claim steps.",
    },
  ],

  antiAggregator: {
    title: "We are not a lead-generation site",
    bullets: [
      "We do not sell your number or enquiry to third parties.",
      "When you call, you speak directly to our licensed team — not a call center.",
      "No spam. No multiple calls from strangers. One advisor, one file trail.",
    ],
  },

  whatWeDo: {
    title: "What we do",
    bullets: [
      "We assess risk, match insurer terms to the real situation, and document it correctly.",
      "We manage renewals and servicing with a clean policy trail.",
      "We guide claim documentation and timelines to reduce avoidable rejections.",
      "We support commercial and personal policies with a compliance-first workflow.",
    ],
  },

  howWeWork: {
    title: "How our process works",
    steps: [
      {
        title: "1) Fact capture (real usage, exposure, values)",
        desc: "We collect the facts that underwriting and claims check later: usage, location risks, declared values, endorsements.",
      },
      {
        title: "2) Coverage selection (terms that match the risk)",
        desc: "We select coverage and add-ons that align with real operational exposure and policy wording.",
      },
      {
        title: "3) Claim-ready file (proof discipline)",
        desc: "We maintain a documentation checklist: invoices, photos, registers, declarations, timelines (as applicable).",
      },
      {
        title: "4) Servicing + renewals (no last-minute chaos)",
        desc: "We maintain continuity so the policy file stays clean over time.",
      },
    ],
  },

  claimReady: {
    title: "How we prevent claim rejection: Claim-Ready Documentation",
    bullets: [
      "We eliminate mismatch between declared details and actual usage.",
      "We enforce proof discipline: documents, photos, invoices/registers, and timelines (as applicable).",
      "We reduce avoidable disputes caused by incomplete or incorrect paperwork.",
    ],
  },

  whyLocal: {
    title: "Why choose a local consultant over an online portal?",
    bullets: [
      "Online portals collect leads. We take accountability and maintain one advisor per case.",
      "Local context matters: transport belts, industrial storage, and commercial movement demand correct wording and proofs.",
      "Claims are documentation problems first. We design the file to survive scrutiny.",
    ],
  },

  trustProof: {
    title: "Legitimacy you can verify",
    bullets: [
      "Physical office and local operating base (Red Hills / Sholavaram belt).",
      "Google Business Profile listing (map, reviews, directions).",
      "IRDAI Licensed · No. 1427274.",
      "30+ years of consulting experience under a single lead advisor.",
    ],
  },

  // Expanded FAQs (LLM + near-me)
  faqs: [
    {
      q: "Do you provide on-spot insurance support anywhere in Chennai?",
      a: "Yes. We provide on-spot support across Chennai when the situation requires it—especially for commercial cases and claim documentation steps.",
    },
    {
      q: "Do you visit our site or factory, or do we have to come to your office?",
      a: "Yes, we visit — at no charge — anywhere within roughly 30 km of our Sholavaram/Red Hills base for site inspections, document collection, or policy signing. Beyond that radius, we still support high-premium commercial cases (factories, fleets, contractors); we'll confirm visit logistics on a case-by-case basis when you contact us.",
    },
    {
      q: "Do you help with claims, or only sell policies?",
      a: "We handle claim-ready documentation guidance and servicing. Documentation and timelines decide outcomes; we run a claim-first workflow from day one.",
    },
    {
      q: "Will I get multiple calls after I contact you?",
      a: "No. We are not a lead-generation site. We do not sell your data. Your enquiry stays with our licensed team.",
    },
    {
      q: "What is Claim-Ready Documentation?",
      a: "A structured file that matches real risk to policy wording: correct disclosures, clean proofs, and clear timelines so claims face fewer avoidable objections.",
    },
    {
      q: "Why should I choose a local consultant instead of buying online?",
      a: "Accountability and documentation discipline. Online purchase is easy; claim scrutiny is hard. We build the file for scrutiny.",
    },
    {
      q: "Can you explain policy details in Tamil / English / Malayalam?",
      a: "Yes. We consult in Tamil, English, and Malayalam so exclusions, endorsements, waiting periods, and claim steps remain unambiguous.",
    },
    {
      q: "Which insurers do you support—New India and LIC?",
      a: "Yes. The lead consultant works with New India Assurance (Nungambakkam branch) and supports LIC servicing as well, depending on policy requirements.",
    },
    {
      q: "Do you support commercial policies like fleet, warehouse, contractor risks in Chennai?",
      a: "Yes. Commercial and industrial policies are a primary focus where documentation scrutiny is high and claim outcomes depend on clean records.",
    },
  ],
  ctas: {
    primary: {
      title: "Talk to a licensed expert (no spam, no call center)",
      subtitle:
        "One advisor. One file trail. Clear answers in Tamil, English, or Malayalam.",
      callLabel: "Call Now",
      whatsappLabel: "WhatsApp Now",
      microdataName: "Primary Contact",
    },

    renewalAudit: {
      title: "Renewal coming up? Get a Renewal Audit before you pay",
      subtitle:
        "We check IDV/declared value, add-ons, exclusions, claim history impact, and coverage gaps. No pressure to buy.",
      bullets: [
        "Renewal reminders and clean continuity (no last-minute chaos).",
        "Coverage gap check: what changed in your risk since last year?",
        "Add-ons and exclusions explained in plain language.",
      ],
      callLabel: "Call for Renewal Audit",
      whatsappLabel: "WhatsApp Renewal Details",
      microdataName: "Renewal Support",
    },

    claimSOS: {
      title: "Claim support: what to do in the first 60 minutes",
      subtitle:
        "Most claim mistakes happen early: late intimation, missing proofs, and wrong statements. We guide the steps and documentation.",
      bullets: [
        "What to document (photos, invoices, registers, timeline).",
        "How to report and what not to delay.",
        "How survey and paperwork typically works (as applicable).",
      ],
      callLabel: "Call for Claim Guidance",
      whatsappLabel: "WhatsApp Claim Help",
      microdataName: "Claims Help",
    },

    noPressureQuote: {
      title: "Need a quote? We quote without forcing a policy",
      subtitle:
        "We explain terms, exclusions, and claim conditions first. You decide. We do not push or trap you into buying.",
      bullets: [
        "Transparent comparison based on wording, not marketing.",
        "Clear explanation of exclusions and claim process.",
        "No lead resale. No follow-up spam.",
      ],
      callLabel: "Call for Quote",
      whatsappLabel: "WhatsApp for Quote",
      microdataName: "Quotes",
    },

    proofChecklist: {
      title: "Get your Claim-Ready Checklist (free)",
      subtitle:
        "A simple checklist for documents and proof discipline. Useful for fleet, warehouse, contractor, and personal policies.",
      bullets: [
        "What proofs to maintain year-round.",
        "What insurers usually ask during claims (as applicable).",
        "How to prevent mismatch and timeline errors.",
      ],
      callLabel: "Call for Checklist",
      whatsappLabel: "WhatsApp “CHECKLIST”",
      microdataName: "Documentation Support",
    },
  },
},

  // ✅ Above-the-fold intent (Identity + relevance)
  pageFlow: {
    heroH1:
      "Best Insurance Agent in Chennai — Car, Bike, Lorry, Fleet, Factory & Health",
    // Short, benefit-led homepage <title> — kept separate from heroH1 so the
    // on-page H1 can stay descriptive while the SERP title stays under ~60 chars.
    seoTitle: "Insurance Agent in Chennai North – 30 Yrs Experience",
    seoDescription:
      "IRDAI licensed insurance agent in Sholavaram, Red Hills & Chennai North. 4.9★ rated, 30+ years experience. Car, lorry, fleet, factory & health insurance. WhatsApp for same-day help.",
    heroP:
      "I've been handling insurance for Chennai families and businesses for over 30 years, right here in Sholavaram. If your policy is confusing, your claim got stuck, or you just want someone to explain things straight — call or WhatsApp me. No call centre, no chasing you for a sale.",
    primaryCtaLabel: "Call Now",
    secondaryCtaLabel: "WhatsApp for Help",
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
      href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/"),
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
      "Renewal checklists and LIC servicing guidance from 30+ years of policy work—simple checks that prevent coverage gaps and claim surprises.",
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
  seoTitle: "30+ Years of Claim Handling – What Delays Claims (Real Patterns)",
  seoDesc:
    "Real claim-handling patterns: what delays claims, what insurers verify first, and the documentation habits that prevent avoidable disputes (case-dependent).",
  h1: "30+ years of claim handling: what delays claims (real patterns)",
  intro:
    "Across motor, business and industrial claims, delays repeat for the same reasons: late reporting, unclear incident timelines, missing proofs, and mismatch between what is written vs what is real. This note summarizes the patterns we see most often.",
  blocks: [
    {
      title: "Top 5 causes of claim delays (repeated patterns)",
      bullets: [
        "Late intimation / reporting and missing first-day evidence (as applicable).",
        "No clean incident timeline (sequence confusion creates disputes).",
        "Missing invoices/registers/valuation proof for stock or assets (as applicable).",
        "Compliance/document mismatch for commercial vehicles (permit/fitness etc. as applicable).",
        "Policy wording not aligned to real usage/operations (endorsement gaps).",
      ],
    },
    {
      title: "What insurers verify first (practical order)",
      bullets: [
        "Policy validity and endorsements (latest copy).",
        "Date/time consistency across records (timeline discipline).",
        "Evidence quality (photos/videos, survey requirements where applicable).",
        "Value basis / IDV / declared value logic (as applicable).",
        "Compliance documents where applicable (commercial motor).",
      ],
    },
    {
      title: "Claim-ready habits that prevent avoidable back-and-forth",
      bullets: [
        "Keep policy + endorsements in one folder (PDF + photos).",
        "Maintain simple proof trail (invoices/registers/photos) where relevant.",
        "Teach drivers/staff: early reporting + basic photo checklist (as applicable).",
      ],
    },
  ],
  localSignals: ["Sholavaram claim support", "Chennai outskirts claim documentation guidance"],
  faqs: [
    {
      q: "Do you guarantee claim approval?",
      a:
        "No. Outcomes depend on policy terms, disclosures, evidence and insurer process. We focus on correct steps and documentation discipline to reduce avoidable delays.",
    },
  ],
},

"stock-declaration-how-it-works": {
  section: "Insights",
  seoTitle: "Stock Declaration Policy – How It Works for Warehouses (Practical Explanation)",
  seoDesc:
    "Stock declaration policy explained: why it’s used, how monthly declarations work, and what proof trail insurers expect during claims (as applicable).",
  h1: "Stock declaration policy: how it works (warehouse reality)",
  intro:
    "Warehouses with fluctuating stock often face underinsurance risk if they insure a fixed number. Stock declaration policies exist to match stock movement—provided declarations and proof trail are disciplined.",
  blocks: [
    {
      title: "When stock declaration makes sense",
      bullets: [
        "Stock value changes significantly month to month (as applicable).",
        "You can maintain invoice/register discipline to support declarations.",
        "You want to reduce underinsurance/average clause risk at claim time.",
      ],
    },
    {
      title: "What insurers typically expect",
      bullets: [
        "Monthly stock declaration rhythm (as per policy terms).",
        "Invoice/register proof trail supporting declared values.",
        "Consistency between declared values and actual storage reality.",
      ],
    },
    {
      title: "Common mistakes",
      bullets: [
        "Declaring late or skipping months.",
        "Declaring without proof trail (invoices/registers).",
        "Treating declaration as paperwork only—claims become proof disputes later.",
      ],
    },
  ],
  localSignals: ["Warehouse insurance Chennai", "Madhavaram/Manali warehouse belts"],
  faqs: [
    { q: "Does stock declaration guarantee full claim?", a: "No. Claims depend on policy terms and proof trail. Declarations reduce underinsurance risk when done correctly (case-dependent)." },
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

    // ===========================
// INSIGHTS (experience + process credibility)
// ===========================

"30-years-claim-handling-insights": {
  section: "Insights",
  seoTitle: "30+ years of claim handling: what actually delays claims (and how to prevent it)",
  seoDesc:
    "A practical view from long-term insurance servicing: why claims get delayed, what insurers verify first, and the simple discipline that protects settlement outcomes.",
  h1: "30+ years of claim handling: what actually delays claims",
  intro:
    "Across motor, property and commercial policies, most claim delays come from a few repeat issues: late intimation, weak incident timeline, missing proof trail, and mismatches between actual operations and policy wording. This note explains the patterns we repeatedly see and the habits that reduce friction.",
  blocks: [
    {
      title: "Top reasons claims get delayed",
      bullets: [
        "Late intimation/reporting (especially after repairs start).",
        "No clean incident timeline (what happened first/second/third).",
        "Missing or inconsistent documents (endorsements, invoices, registers).",
        "Mismatch between real usage/operations and what is declared in policy wording.",
        "Weak first-day evidence (photos/videos/witness details as applicable).",
      ],
    },
    {
      title: "What insurers verify first (real-world order)",
      bullets: [
        "Policy validity on date of loss (no gaps, correct vehicle/property details).",
        "Disclosure alignment (usage / occupancy / storage / route as applicable).",
        "Basic evidence quality and timeline consistency.",
        "Document trail: endorsements, invoices, registers, and reports (case-dependent).",
      ],
    },
    {
      title: "The simplest discipline that improves outcomes",
      bullets: [
        "Keep a single folder: policy copy + endorsements + renewal receipts.",
        "Maintain basic proof trail for business risks (stock register/invoices/photos as applicable).",
        "Report early and preserve first-day evidence before repairs/cleanup.",
        "Renewals: check IDV/NCB/add-ons and document alignment (permit/fitness etc. as applicable).",
      ],
    },
  ],
  localSignals: [
    "Sholavaram claim documentation guidance",
    "Chennai outskirts claim-ready insurance support",
    "Red Hills / Madhavaram belt claim workflow discipline",
  ],
  faqs: [
    {
      q: "Do you guarantee claim approval?",
      a: "No. Claim outcomes depend on policy terms, disclosures, evidence, and insurer process. We focus on reducing avoidable delays and documentation errors.",
    },
    {
      q: "What is the one thing that helps most in claims?",
      a: "Early reporting plus a clean incident timeline with first-day evidence (as applicable).",
    },
  ],
},

"lorry-insurance-renewal-insights": {
  section: "Insights",
  seoTitle: "Lorry insurance renewal: the checks that prevent disputes later",
  seoDesc:
    "Renewal is where expensive mistakes happen for lorries and commercial vehicles—permit/fitness alignment, endorsements/IMT, gap rules and claim-readiness discipline.",
  h1: "Lorry insurance renewal: the checks that prevent disputes later",
  intro:
    "For lorries and goods vehicles, renewals are not just a premium payment. Claims later are heavily influenced by whether permit/fitness and policy wording match the real operation. This note lists the practical checks that reduce renewal-time mistakes.",
  blocks: [
    {
      title: "The renewal checks that matter most",
      bullets: [
        "Permit validity and route alignment (as applicable).",
        "Fitness certificate validity (very common claim friction point).",
        "RC details match policy (ownership, vehicle class).",
        "Endorsements/IMT fit actual operations (loading/unloading/worksite exposure as applicable).",
        "Avoid coverage gaps: understand break-in rules if renewal is late (case-dependent).",
      ],
    },
    {
      title: "Why NH-belt lorry claims get stricter scrutiny",
      bullets: [
        "Higher third-party exposure and higher severity incidents.",
        "Greater dependence on documentation consistency (permit/fitness/usage alignment).",
        "Delays happen when incident narrative is unclear or reporting is late.",
      ],
    },
    {
      title: "Simple renewal discipline for fleets",
      bullets: [
        "Maintain a tracker for insurance + permit + fitness expiry dates (as applicable).",
        "Keep one folder per vehicle: policy + endorsements + RC + compliance copies.",
        "Standardize driver reporting SOP (photos, timeline notes, immediate intimation).",
      ],
    },
  ],
  localSignals: [
    "Red Hills toll belt lorry insurance renewal guidance",
    "Madhavaram truck terminal commercial vehicle renewal support",
    "Sholavaram lorry insurance consultant",
  ],
  faqs: [
    {
      q: "What is the most common renewal mistake for lorries?",
      a: "Renewing without checking permit/fitness validity and endorsement/IMT fit to actual operations (as applicable).",
    },
    {
      q: "Can renewal issues affect claims?",
      a: "Yes. Coverage gaps, disclosure mismatch, or compliance document issues can create avoidable disputes later.",
    },
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
  {
    title: "Machinery Breakdown Insurance",
    href: EN("/services/industrial/machinery-breakdown-insurance/"),
    tag: "Industrial",
    desc: "Mechanical and electrical failure cover for factories and industrial units—separate from fire insurance, sized to actual replacement cost."
  },
  {
    title: "Office Insurance Package",
    href: EN("/services/business-msme/office-insurance/"),
    tag: "Commercial",
    desc: "Equipment, furniture and business interruption cover for commercial offices—distinct from a retail shop policy stretched to fit."
  },
  {
    title: "Marine Hull & Inland Vessel Insurance",
    href: EN("/services/marine/marine-hull-inland-vessel-insurance/"),
    tag: "Marine",
    desc: "Hull damage, machinery breakdown and liability cover for boats, barges and inland waterway craft near Chennai."
  },
  {
    title: "LIC / Term Life Insurance",
    href: EN("/services/personal/lic-life-term-insurance/"),
    tag: "Personal",
    desc: "LIC servicing and term life guidance—policy selection, premium clarity and claim support for individuals and families."
  },
],

  businessAudiences: [
    {
      title: "Vehicle Dealer Insurance Tie-Up",
      href: EN("/vehicle-dealer-insurance-tieup/"),
      tag: "Dealers",
      desc: "New showroom, additional outlet, or switching agents — bulk customer insurance and showroom/stock cover under one contact.",
    },
    {
      title: "One Advisor for All Company Policies",
      href: EN("/corporate-insurance-advisor-one-point/"),
      tag: "Corporate",
      desc: "Consolidate factory, fleet, health and liability policies scattered across agents — one portfolio review, one renewal calendar.",
    },
    {
      title: "New Business / Startup Insurance",
      href: EN("/new-business-startup-insurance-chennai/"),
      tag: "MSME",
      desc: "What's mandatory vs optional from company registration through your first hires and tenders.",
    },
    {
      title: "Export & Import Business Insurance",
      href: EN("/export-import-business-insurance-chennai/"),
      tag: "EXIM",
      desc: "Cargo cover matched to your actual Incoterms — FOB, CIF, EXW — not a generic marine policy.",
    },
    {
      title: "Insurance for Professionals & Consultants",
      href: EN("/insurance-for-professionals-consultants-chennai/"),
      tag: "Professionals",
      desc: "Professional indemnity, office equipment and health cover matched to how you actually work.",
    },
    {
      title: "Wholesale, Trader & Retailer Insurance",
      href: EN("/wholesale-trader-retailer-insurance-chennai/"),
      tag: "Traders",
      desc: "Stock cover sized to your peak holding, not a flat figure that's wrong most of the year.",
    },
    {
      title: "Hotel & Restaurant Insurance",
      href: EN("/hotel-restaurant-insurance-chennai/"),
      tag: "Hospitality",
      desc: "Fire, guest liability and staff cover matched to hospitality risk, not a generic shop policy.",
    },
    {
      title: "Schools, Trusts & NGOs Insurance",
      href: EN("/school-trust-ngo-insurance-chennai/"),
      tag: "Institutions",
      desc: "Property and liability cover for schools, trusts, NGOs and cooperative societies.",
    },
    {
      title: "E-commerce & Online Seller Insurance",
      href: EN("/ecommerce-online-seller-insurance-chennai/"),
      tag: "E-commerce",
      desc: "Warehouse stock and goods-in-transit cover for D2C brands and online sellers.",
    },
    {
      title: "Hospitals & Clinics Insurance",
      href: EN("/hospital-clinic-insurance-chennai/"),
      tag: "Healthcare",
      desc: "Equipment breakdown and professional liability cover matched to healthcare risk.",
    },
  ],

  homeComparisonTable: {
    title: "Online aggregator vs. no insurance vs. us",
    intro: "Three ways people usually approach buying insurance. Here's an honest comparison, not a sales pitch.",
    columns: ["What matters", "Skip it / delay it", "Buy online yourself", "Through us"],
    rows: [
      ["Premium", "₹0 now, full risk later", "Lowest listed price", "Same price — no markup, commission is built in by the insurer"],
      ["Coverage accuracy", "No cover at all", "Self-service filters — easy to under-insure or miss add-ons", "IDV/sum insured checked before you commit"],
      ["Claim support", "Nothing to claim against", "Call center / app ticket queue", "One accountable person, documentation-first"],
      ["Renewal tracking", "Easy to forget entirely", "Auto-renewal email you may not read carefully", "We track it and reach out before it lapses"],
      ["Language & explanation", "N/A", "English-only interface typically", "Tamil, English, Malayalam — explained plainly"],
      ["What happens if something goes wrong", "You absorb the full loss", "You navigate the claim process alone", "We coordinate documentation, insurer, and follow-up"],
    ],
  },

  homeGuideSection: {
    title: "How to actually choose the right cover",
    intro: "A short, honest checklist — whether you end up buying through us or anywhere else.",
    points: [
      "Start with what you're protecting, not the cheapest premium — a policy that doesn't pay out when it matters isn't cheap, it's a gap.",
      "For vehicles: check your IDV/sum insured is realistic, not auto-filled too low to shave off premium.",
      "For property/stock: sum insured should reflect peak value during the year, not a rounded guess — underinsurance quietly reduces every future claim.",
      "For businesses: confirm mandatory covers for your stage (Workmen Compensation once you have employees, third-party motor cover for any company vehicle).",
      "Ask how claims actually get handled before you buy — a vague answer today becomes a real problem at claim time.",
      "Keep a renewal calendar, even a simple one — most coverage gaps happen from a lapsed policy, not a wrong purchase.",
    ],
  },

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
      serviceFinder: [
        { situation: "I own one lorry or heavy vehicle", service: "Lorry / Heavy Vehicle Insurance" },
        { situation: "I manage multiple vehicles under one business", service: "Fleet Insurance" },
        { situation: "My vehicle specifically carries goods for hire", service: "Goods Carrying Vehicle Insurance" },
        { situation: "I operate a trailer attached to a prime mover", service: "Trailer Insurance" },
        { situation: "I have a general business-use vehicle, not sure which category", service: "Commercial Vehicle Insurance" },
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
        { title: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/") },
        { title: "Mining / Heavy Industrial Insurance", href: EN("/services/industrial/mining-industrial-insurance/") },
        { title: "Land & Property Insurance", href: EN("/services/industrial/land-property-insurance/") },
      ],
      serviceFinder: [
        { situation: "I store goods/stock in a warehouse or godown", service: "Warehouse / Godown Insurance" },
        { situation: "I run a manufacturing unit with machinery + stock", service: "Factory Insurance" },
        { situation: "I need fire/burglary cover for a shop or commercial building", service: "Fire & Burglary (Commercial Property)" },
        { situation: "My stock value fluctuates through the year", service: "Stock Declaration Policies" },
        { situation: "I'm worried about mechanical/electrical breakdown, not fire", service: "Machinery Breakdown Insurance" },
        { situation: "I run a quarry, mine, or heavy industrial site", service: "Mining / Heavy Industrial Insurance" },
        { situation: "I own land or a building, not currently in active use", service: "Land & Property Insurance" },
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
      serviceFinder: [
        { situation: "I need to cover the worksite/project itself", service: "Contractor All Risk (CAR)" },
        { situation: "I need to cover my workforce's injury liability", service: "Workmen Compensation (WC)" },
        { situation: "I need both worksite and workforce cover together", service: "Contractor CAR/WC Combined Guidance" },
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
        { title: "Office Insurance Package", href: EN("/services/business-msme/office-insurance/") },
      ],
      serviceFinder: [
        { situation: "I run a retail shop or small unit with stock", service: "Shop & MSME Package Insurance" },
        { situation: "Customers or vendors visit my premises regularly", service: "Public Liability for Businesses" },
        { situation: "I run an office (no stock, mostly equipment/furniture)", service: "Office Insurance Package" },
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
        { title: "Erection All Risk (EAR) Insurance", href: EN("/services/heavy-equipment/erection-all-risk-insurance/") },
        { title: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
        { title: "Crane Third-Party Liability Basics", href: EN("/services/heavy-equipment/crane-liability/") },
      ],
      serviceFinder: [
        { situation: "I'm installing/erecting equipment at a project site", service: "Erection All Risk (EAR) Insurance" },
        { situation: "I own a crane or heavy equipment used across sites", service: "Crane / Heavy Equipment (CPM)" },
        { situation: "I need to understand third-party liability basics for crane work", service: "Crane Third-Party Liability Basics" },
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

    // ===========================
// SERVICE CATEGORY ALIASES (to prevent /en/services/<slug>/ 404s)
// These are category-style landing pages that route users to real detail pages.
// ===========================

{
  slug: "warehouse-godown-factory-insurance",
  title: "Warehouse / Godown / Factory Insurance",
  desc: "Industrial property protection for warehouses, godowns and factories—fire load, burglary conditions, valuation and stock proof discipline.",
  href: EN("/services/warehouse-godown-factory-insurance/"),
  problems: [
    "Undervaluation leading to average clause reduction",
    "Weak stock proof trail (invoices / registers) during claims",
    "Electrical fire load and safety compliance gaps",
    "Burglary conditions not met (entry/exit proof, security requirements)",
    "Layout/stock type changed but not endorsed/declared",
  ],
  children: [
    { title: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
    { title: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
    { title: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") },
  ],
},

{
  slug: "crane-heavy-equipment-cpm-insurance",
  title: "Crane & Heavy Equipment (CPM) Insurance",
  desc: "CPM/contractors plant and machinery guidance—declared value logic, breakdown exposure, and third-party risk discipline for worksites and highway belts.",
  href: EN("/services/crane-heavy-equipment-cpm-insurance/"),
  problems: [
    "Declared value too low → settlement disputes later",
    "Attachments/boom/winch not reflected correctly",
    "Operation exposure mismatch (site vs highway/public zones)",
    "Breakdown incidents without clean maintenance / records (as applicable)",
    "Delay in intimation and weak incident proof",
  ],
  children: [
    { title: "Crane CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    { title: "Contractor CAR / WC Insurance", href: EN("/services/construction/contractor-car-wc-insurance/") },
    { title: "Public Liability (3rd-party risk)", href: EN("/services/liability/public-liability/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
  ],
},

{
  slug: "group-health-employee-benefits-insurance",
  title: "Group Health / Employee Benefits Insurance",
  desc: "SME employee benefits guidance—enrolment discipline, claim process readiness, renewal controls and documentation hygiene for smoother servicing.",
  href: EN("/services/group-health-employee-benefits-insurance/"),
  problems: [
    "Employee data mismatches during enrolment/additions",
    "Network / TPA process confusion during first claim",
    "Coverage assumptions not aligned to actual needs",
    "No HR/admin renewal discipline → last-minute chaos",
    "Missing records for endorsements and additions (as applicable)",
  ],
  children: [
    // Keep children as real internal pages that already exist
    { title: "Buy Insurance Guidance", href: EN("/buy-insurance-guidance/") },
    { title: "Insurance Documents Required", href: EN("/insurance-documents-required/") },
    { title: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
    { title: "Manage Existing Policies", href: EN("/manage-existing-insurance-policy/") },
  ],
},

{
  slug: "public-liability-third-party-insurance",
  title: "Public Liability & Third-Party Risk",
  desc: "Liability exposure guidance for warehouses, contractors and businesses with public/visitor movement—evidence discipline + notice handling.",
  href: EN("/services/public-liability-third-party-insurance/"),
  problems: [
    "Delayed reporting and weak incident timeline",
    "No witness / photo evidence captured early (as applicable)",
    "Mismatch between operations and disclosures",
    "Incorrect handling of legal notices/letters (as applicable)",
    "Assuming motor policy covers site liability",
  ],
  children: [
    { title: "Public Liability", href: EN("/services/liability/public-liability/") },
    { title: "Contractor CAR / WC Insurance", href: EN("/services/construction/contractor-car-wc-insurance/") },
    { title: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
  ],
},

{
  slug: "fire-burglary-commercial-property-insurance",
  title: "Fire & Burglary (Commercial Property) Insurance",
  desc: "Commercial property protection for warehouses, shops and factories—fire load, burglary conditions, valuation, and claim-ready proof discipline.",
  href: EN("/services/fire-burglary-commercial-property-insurance/"),
  problems: [
    "Wrong sum insured / underinsurance → reduced settlement",
    "Weak stock proof during fire claims",
    "Security conditions for burglary not met / not documented",
    "Electrical safety conditions not maintained (as applicable)",
    "Premises/occupancy changes not updated (endorsement gaps)",
  ],
  children: [
    { title: "Fire & Burglary Insurance (Industrial)", href: EN("/services/industrial/fire-burglary-insurance/") },
    { title: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
    { title: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") },
  ],
},

// ===========================
// ALIAS SERVICE CATEGORY PAGES (to prevent 404s)
// These slugs are referenced in locationsIndex + legacy links.
// Keep them as “routing hubs” that point into your real categories.
// ===========================

{
  slug: "warehouse-godown-factory-insurance",
  title: "Warehouse / Godown / Factory Insurance",
  desc: "Industrial property risks—fire load, stock proof discipline, valuation clarity, and burglary conditions (as applicable).",
  href: EN("/services/industrial/"),
  problems: [
    "Underinsurance (average clause) reducing claim settlement",
    "Weak stock proof trail (invoices/registers missing)",
    "Safety/security conditions not followed (as applicable)",
    "Layout/stock type changes not updated in policy",
  ],
  children: [
    { title: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { title: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
    { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
    { title: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
  ],
},

{
  slug: "crane-heavy-equipment-cpm-insurance",
  title: "Crane / Heavy Equipment (CPM) Insurance",
  desc: "High-premium equipment risks—declared value discipline, site/highway exposure and proof readiness (as applicable).",
  href: EN("/services/heavy-equipment/"),
  problems: [
    "Declared value kept low to save premium → settlement issues later",
    "Usage/site exposure mismatch vs wording",
    "Weak proof trail after incident (photos/records missing)",
  ],
  children: [
    { title: "Crane / Heavy Equipment (CPM)", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    { title: "Crane Third-Party Liability Basics", href: EN("/services/heavy-equipment/crane-liability/") },
  ],
},

{
  slug: "group-health-employee-benefits-insurance",
  title: "Group Health & Employee Benefits Insurance",
  desc: "SME employee benefits—policy structure clarity, enrollment discipline, claim process expectations and documentation flow (as applicable).",
  href: EN("/services/personal/"), // or create a dedicated /services/employee-benefits/ later
  problems: [
    "Wrong census / member data causing enrollment issues",
    "Misunderstanding waiting periods/exclusions",
    "Claim delays due to incomplete documents",
  ],
  children: [
    { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
  ],
},

{
  slug: "public-liability-third-party-insurance",
  title: "Public Liability / Third-Party Liability Insurance",
  desc: "Third-party exposure management—where claims get disputed, what insurers verify and what records matter (as applicable).",
  href: EN("/services/liability/"),
  problems: [
    "Mismatch between declared operations and real exposure",
    "Late notice / weak incident timeline",
    "Missing contracts, site records, or correspondence (as applicable)",
  ],
  children: [
    { title: "Public Liability", href: EN("/services/liability/public-liability/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
  ],
},

{
  slug: "fire-burglary-commercial-property-insurance",
  title: "Fire & Burglary (Commercial Property) Insurance",
  desc: "Commercial property protection—fire load reality, burglary conditions and documentation discipline (as applicable).",
  href: EN("/services/industrial/"),
  problems: [
    "No proof trail for stock/assets at claim time",
    "Security/safety conditions not met (as applicable)",
    "Undervaluation creating claim reductions",
  ],
  children: [
    { title: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
    { title: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
  ],
},

// --- These are already referenced in locationsIndex serviceSlugs (city belts etc.) ---
{
  slug: "business-msme-insurance",
  title: "Business & MSME Insurance (Overview)",
  desc: "SME packages and business risk coverage—sum insured discipline, valuation proof and basic claims readiness (as applicable).",
  href: EN("/services/business-msme/"),
  problems: [
    "Sum insured chosen randomly",
    "Stock/invoice proof not maintained",
    "Burglary conditions misunderstood (as applicable)",
    "Policy wording not aligned to operations",
  ],
  children: [
    { title: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
    { title: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
  ],
},

{
  slug: "claim-support",
  title: "Claim Support & Documentation (Overview)",
  desc: "Claim workflow guidance—documents, reporting steps and timeline discipline to reduce avoidable delays (case-dependent).",
  href: EN("/services/claims-support/"),
  problems: [
    "Late intimation/reporting",
    "No clear incident timeline",
    "Missing invoices/valuation/stock proof",
    "Assuming forms alone are enough",
  ],
  children: [
    { title: "Claim Support (Detailed)", href: EN("/services/claims-support/claim-support/") },
    { title: "Insurance Claim Help (Intent)", href: EN("/insurance-claim-help/") },
    { title: "Claim Rejected – What To Do", href: EN("/claim-rejected-what-to-do/") },
  ],
},

{
  slug: "construction-contractor-car-wc-insurance",
  title: "Construction / Contractor (CAR & WC) Insurance",
  desc: "Project-based risks—CAR/WC discipline, workforce classification and extension/endorsement alignment (as applicable).",
  href: EN("/services/construction/"),
  problems: [
    "Payroll / classification mismatch in WC",
    "Project timeline extensions not aligned",
    "Late reporting after incident",
    "Site exposure differs from disclosures",
  ],
  children: [
    { title: "Contractor CAR/WC Combined Guidance", href: EN("/services/construction/contractor-car-wc-insurance/") },
    { title: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
  ],
},

{
  slug: "marine-cargo-goods-in-transit-insurance",
  title: "Marine Cargo / Goods-in-Transit Insurance",
  desc: "Transit risks—invoice/packing/dispatch trail, carrier responsibility clarity and claim proof discipline (as applicable).",
  href: EN("/services/marine/"),
  problems: [
    "Weak dispatch/receipt proof trail",
    "Invoice/packing list mismatch",
    "Late notice to carrier/insurer (as applicable)",
  ],
  children: [
    { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/") },
  ],
},

{
  slug: "personal-car-bike-health-support",
  title: "Personal Insurance Support (Car / Bike / Health)",
  desc: "City-side personal policies—renewal checks, add-on clarity and clean claim steps (as applicable).",
  href: EN("/services/personal/"),
  problems: [
    "Wrong IDV/NCB/add-on assumptions during renewal",
    "Delays due to weak reporting/timeline",
    "Health claims confusion due to missing documents (as applicable)",
  ],
  children: [
    { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
    { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
    { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
  ],
},

{
  slug: "transport-fleet-lorry-insurance",
  title: "Transport / Fleet / Lorry Insurance (Overview)",
  desc: "NH corridor operations—permit/fitness discipline, third-party exposure and claim readiness habits (as applicable).",
  href: EN("/services/transport-fleet/"),
  problems: [
    "Permit/fitness expiry disputes",
    "Route/permit mismatch",
    "Late reporting and incomplete incident timeline",
  ],
  children: [
    { title: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
    { title: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
  ],
},
// ===========================
// MISSING TOP-LEVEL SERVICE HUBS (prevent /services/[slug] 404)
// ===========================

{
  slug: "liability",
  title: "Liability Insurance",
  desc: "Public/third-party exposure for businesses, contractors and sites—incident timelines, notice discipline and wording clarity (as applicable).",
  href: EN("/services/liability/"),
  problems: [
    "Delayed reporting and weak incident timeline",
    "Operations not matching disclosures (wording gaps)",
    "Poor handling of notices/letters (as applicable)",
    "Assuming motor policy covers site liability",
  ],
  children: [
    { title: "Public Liability", href: EN("/services/liability/public-liability/") },
    { title: "Public Liability & Third-Party Insurance", href: EN("/services/public-liability-third-party-insurance/") },
    { title: "D&O / Professional Indemnity Insurance", href: EN("/services/liability/professional-liability-do-insurance/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
  ],
  serviceFinder: [
    { situation: "Customers/vendors visit my premises or site", service: "Public Liability" },
    { situation: "I want the fuller third-party liability picture", service: "Public Liability & Third-Party Insurance" },
    { situation: "I'm a director/professional worried about personal liability", service: "D&O / Professional Indemnity Insurance" },
    { situation: "I already have cover and need help with a claim", service: "Claim Support & Documentation" },
  ],
},

{
  slug: "marine",
  title: "Marine Cargo / Transit Insurance",
  desc: "Goods-in-transit and marine cargo cover—dispatch/receipt proof trail, invoice/packing discipline and claim readiness (as applicable).",
  href: EN("/services/marine/"),
  problems: [
    "Weak dispatch/receipt proof trail (LR/POD mismatch)",
    "Invoice/packing list inconsistencies",
    "Late notice to carrier/insurer (as applicable)",
    "Improper damage remarks at delivery (as applicable)",
  ],
  children: [
    { title: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
    { title: "Marine Hull & Inland Vessel Insurance", href: EN("/services/marine/marine-hull-inland-vessel-insurance/") },
    { title: "Import / Export Cargo Insurance", href: EN("/services/marine/import-export-insurance/") },
    { title: "Claim Support & Documentation", href: EN("/services/claims-support/claim-support/") },
  ],
  serviceFinder: [
    { situation: "I'm moving goods within India by road/rail", service: "Marine Cargo / Goods-in-Transit" },
    { situation: "I own or operate a vessel (boat, barge)", service: "Marine Hull & Inland Vessel Insurance" },
    { situation: "I'm importing or exporting across a port/border", service: "Import / Export Cargo Insurance" },
    { situation: "I already have cover and need help with a claim", service: "Claim Support & Documentation" },
  ],
},

{
  slug: "personal",
  title: "Personal Insurance Support",
  desc: "Car, bike and health insurance guidance—renewal checks, claim steps and document discipline (as applicable).",
  href: EN("/services/personal/"),
  problems: [
    "Renewing without checking NCB/IDV/add-ons (motor)",
    "Late reporting and missing first-day evidence (as applicable)",
    "Confusion about health claim process and documents (as applicable)",
    "Coverage gaps from late renewals (case-dependent)",
  ],
  children: [
    { title: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
    { title: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
    { title: "Auto Rickshaw Insurance", href: EN("/services/personal/auto-rickshaw-insurance/") },
    { title: "Tempo / Mini Truck Insurance", href: EN("/services/personal/tempo-mini-truck-insurance/") },
    { title: "Taxi & Cab Insurance", href: EN("/services/personal/taxi-cab-insurance/") },
    { title: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
    { title: "LIC / Term Life Insurance", href: EN("/services/personal/lic-life-term-insurance/") },
    { title: "Insurance Renewal Near Me", href: EN("/insurance-renewal-near-me/") },
    { title: "Insurance Claim Help", href: EN("/insurance-claim-help/") },
  ],
  serviceFinder: [
    { situation: "I own a private car", service: "Car Insurance Support" },
    { situation: "I own a bike or scooter", service: "Bike Insurance Support" },
    { situation: "I run an auto rickshaw for hire", service: "Auto Rickshaw Insurance" },
    { situation: "I run a tempo or mini truck for local delivery", service: "Tempo / Mini Truck Insurance" },
    { situation: "I run a taxi or cab service", service: "Taxi & Cab Insurance" },
    { situation: "I need health/mediclaim cover for myself or family", service: "Health Insurance Support" },
    { situation: "I need life insurance or LIC servicing", service: "LIC / Term Life Insurance" },
    { situation: "My policy is due soon and I want it checked", service: "Insurance Renewal Near Me" },
    { situation: "I need help filing or following up a claim", service: "Insurance Claim Help" },
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
      href:whatsappUrl,
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
  // 0) not-sure-if-we-cover-you — catch-all for coverage doubt
  "not-sure-if-we-cover-you": {
    slug: "not-sure-if-we-cover-you",
    seoTitle: "Not Sure If We Cover Your Situation? – Ask Us Directly, Chennai & Tamil Nadu",
    seoDesc:
      "Don't see your exact vehicle, business, property or location listed? Most cases are still covered—send one WhatsApp message and we'll confirm in minutes.",
    heroH1: "Don't see your exact situation listed? It's still very likely we cover it.",
    heroP:
      "This site lists our most common services and locations, but real situations don't always fit neatly into a page title. If your vehicle, business, property, or location isn't named anywhere on this site, that almost never means we don't handle it—it usually just means we haven't written a page for that exact combination yet. Send us one WhatsApp message describing your situation and we'll tell you directly, within minutes, whether and how we can help—no need to keep searching for the perfect match.",
    intentSignals: [
      "do you cover my vehicle",
      "not listed on your website",
      "is this covered",
      "unusual insurance request",
      "insurance for something specific",
    ],
    whoThisHelps: [
      "Anyone whose vehicle, business type, property, or location doesn't appear anywhere on this site.",
      "People insuring something unusual or high-value: event/shooting equipment, sports gear, a new imported vehicle before registration, a one-off goods shipment, a dealer/agent vehicle deal.",
      "Businesses in industries not explicitly named here—if it involves property, stock, vehicles, contractors, liability, or people, it's very likely coverable even without a dedicated page.",
    ],
    whatYouGet: [
      "A direct answer on whether we can help—within minutes over WhatsApp, not a form you fill and wait on.",
      "If it's outside what we handle personally, honest redirection instead of a runaround.",
      "The same documentation-first, claim-ready guidance we give on every listed service, even for one-off or unusual cases.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your situation", text: "WhatsApp a short description: what you're insuring, roughly where, and why it matters (value, urgency, upcoming deadline)." },
      { title: "Step 2 — We confirm fit", text: "We tell you plainly whether it's something we handle directly, and what information we'd need next." },
      { title: "Step 3 — Next steps or an honest no", text: "If we can help, we guide you on documents and process. If it's outside our scope, we say so directly instead of wasting your time." },
    ],
    recommendedServices: [
      { label: "Browse all services", href: EN("/services/") },
      { label: "Browse all locations", href: EN("/locations/") },
      { label: "Insurance claim help", href: EN("/insurance-claim-help/") },
      { label: "Buy insurance guidance", href: EN("/buy-insurance-guidance/") },
    ],
    faqs: [
      { q: "My vehicle/business type isn't listed anywhere on the site—does that mean you don't cover it?", a: "No. This site covers our most common services and locations, but it can't list every exact combination. Most situations not explicitly listed are still covered—ask directly and we'll confirm." },
      { q: "What if I'm outside Chennai or Tamil Nadu?", a: "For high-value commercial and industrial risk, we serve clients across India, not just our home belt. Send your location and we'll confirm reach." },
      { q: "Do I need to visit in person to find out?", a: "No. A WhatsApp message describing your situation is enough for an initial answer. A visit or call is only needed for verification in specific cases (as applicable)." },
      { q: "What if it turns out you can't help with my specific case?", a: "We'll tell you directly rather than stringing you along—and where possible, point you toward what actually applies." },
    ],
  },

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

  // ====== NEW: Near-Me Specific Intent Pages ======

  "lorry-insurance-near-me": {
    slug: "lorry-insurance-near-me",
    seoTitle: "Lorry Insurance Near Me – Heavy Vehicle Renewal & Documentation (Sholavaram, Chennai North)",
    seoDesc: "Looking for lorry insurance near you? Sholavaram-based IRDAI-licensed agent: renewed lorry/HGV documentation, IDV alignment, permit checks, and claim support across Chennai North belt.",
    heroH1: "Lorry insurance near me (Sholavaram office support)",
    heroP: "If you searched 'lorry insurance near me', this page explains how we support lorry owners and fleet operators with documentation-first renewal guidance from our Sholavaram office.",
    intentSignals: ["lorry insurance near me", "heavy vehicle insurance near me", "truck insurance near me", "HGV insurance near me", "GCV insurance near me"],
    whoThisHelps: [
      "Single lorry owners needing clean renewal documentation (RC, PUC, permit alignment).",
      "Fleet transport operators managing 2–50+ vehicles across North Chennai and corridor belts.",
      "Businesses with lorries operated under hire/contract — vehicle class and route declarations matter.",
    ],
    whatYouGet: [
      "Pre-renewal checklist: RC, PUC, fitness certificate, permit, previous policy, route/cargo details.",
      "IDV alignment guidance — correct declared value reduces under-insurance risk at claim time.",
      "Third-party + own-damage or TP-only clarity based on vehicle age and business need.",
      "Claim documentation support if the vehicle has an active or past claim.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share vehicle details", text: "WhatsApp RC number, vehicle class (HGV/LGV/GCV), permit type, and expiry dates." },
      { title: "Step 2 — IDV and permit check", text: "We verify permit compliance and recommend correct IDV before renewal to avoid future claim disputes." },
      { title: "Step 3 — Policy issuance", text: "Renewal processed with correct wording and route alignment. We flag any endorsement needs." },
    ],
    office: {
      title: "Sholavaram office (lorry insurance hub)",
      bullets: [
        "Primary lorry and commercial fleet support base: Sholavaram, Chennai North.",
        "We commonly support: Red Hills, Gummidipoondi, Thiruvallur, Ponneri, Minjur, Manali, Madhavaram belts.",
        "WhatsApp or call before visiting — bring permit, RC, and previous policy copy.",
      ],
    },
    commonAreasTitle: "Areas we commonly support for lorry insurance",
    commonAreasCta: { label: "See all service locations", href: EN("/locations/") },
    quickLinks: [
      { label: "Lorry Insurance Service Page", href: EN("/services/transport-fleet/lorry-insurance/") },
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { label: "GCV Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { label: "Claim Support", href: EN("/services/claims-support/") },
    ],
    recommendedServices: [
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "What documents do I need for lorry insurance renewal?", a: "RC, PUC certificate, valid permit, fitness certificate, previous policy copy, and driver details. We send a checklist so you don't miss anything." },
      { q: "What is GCV insurance for lorries?", a: "Goods Carrying Vehicle insurance covers third-party liability and optionally own damage for vehicles declared as GCV category. Permit alignment is mandatory." },
      { q: "Can I get same-day lorry renewal?", a: "Typically yes if all documents are in order. WhatsApp the required details early in the day for same-day processing where possible." },
    ],
  },

  "godown-insurance-near-me": {
    slug: "godown-insurance-near-me",
    seoTitle: "Godown / Warehouse Insurance Near Me – Storage & Property Risk (North Chennai)",
    seoDesc: "Looking for godown or warehouse insurance near you? Sholavaram-based IRDAI-licensed agent: fire, stock, and burglary cover for warehouses across Madhavaram, Manali, Ambattur, and North Chennai belt.",
    heroH1: "Godown/warehouse insurance near me (Sholavaram office support)",
    heroP: "If you searched 'godown insurance near me', this page explains how we support warehouse owners and logistics businesses with property, stock, and fire risk guidance from Sholavaram.",
    intentSignals: ["godown insurance near me", "warehouse insurance near me", "storage insurance near me", "warehouse fire insurance near me", "stock insurance near me"],
    whoThisHelps: [
      "Warehouse and godown owners storing goods for their own business or on hire/lease.",
      "Logistics companies managing third-party stock in bonded or general warehouses.",
      "MSMEs using warehouse space for seasonal stock, machinery, or raw materials.",
    ],
    whatYouGet: [
      "Fire, explosion, and natural peril coverage for the physical warehouse structure.",
      "Stock declaration policy guidance — how to declare changing stock levels monthly.",
      "Burglary and theft add-on options for high-value stored goods.",
      "Claim discipline: what records (invoices, stock register, gate pass) you need to maintain.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share property details", text: "WhatsApp warehouse area in sq ft, construction type (RCC/sheet), and approximate stock value." },
      { title: "Step 2 — Sum insured alignment", text: "We help declare correct reinstatement value (structure) and average monthly stock peak (stock declaration policy)." },
      { title: "Step 3 — Policy issuance", text: "Policy issued with correct clauses. We advise on stock register maintenance for clean claim settlement." },
    ],
    office: {
      title: "Sholavaram office (warehouse & godown insurance support)",
      bullets: [
        "We support godown and warehouse insurance across: Madhavaram, Manali, Ambattur, Red Hills, Gummidipoondi, Ennore, Tiruvottiyur, Sriperumbudur belts.",
        "Stock declaration policies are our speciality — correct monthly declaration avoids under-insurance disputes.",
        "Call or WhatsApp before visiting — no appointment needed for initial guidance.",
      ],
    },
    commonAreasTitle: "Areas we commonly support for godown/warehouse insurance",
    commonAreasCta: { label: "See all service locations", href: EN("/locations/") },
    quickLinks: [
      { label: "Warehouse Insurance Service Page", href: EN("/services/industrial/warehouse-insurance/") },
      { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") },
      { label: "Claim Support", href: EN("/services/claims-support/") },
    ],
    recommendedServices: [
      { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") },
      { label: "Marine Cargo & Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
    ],
    faqs: [
      { q: "What is the difference between warehouse insurance and stock declaration policy?", a: "Warehouse insurance covers the physical structure. Stock declaration insurance covers stored goods on a monthly declaration basis — ideal when stock levels vary." },
      { q: "Is godown insurance mandatory?", a: "Not legally mandatory, but banks/financiers and landlords often require it. More importantly, fire or flood loss without cover can be financially devastating." },
      { q: "How is the sum insured calculated for a godown?", a: "Structure value is based on reinstatement cost per sq ft. Stock is declared monthly as peak value. We help align both correctly to avoid under-insurance." },
    ],
  },

  "irdai-licensed-agent-sholavaram": {
    slug: "irdai-licensed-agent-sholavaram",
    seoTitle: "IRDAI Licensed Insurance Agent in Sholavaram – 30 Years Experience",
    seoDesc: "M N Rajendrakumar – IRDAI licensed insurance agent in Sholavaram, Chennai. 30 years experience in commercial, fleet, warehouse, contractor, and personal insurance. Not an aggregator.",
    heroH1: "IRDAI licensed insurance agent in Sholavaram",
    heroP: "M N Rajendrakumar is an IRDAI-licensed insurance advisor anchored to Sholavaram for 30+ years. This page explains the difference between a licensed agent, a broker, and online aggregators — and why it matters for claims.",
    intentSignals: ["IRDAI licensed agent Sholavaram", "insurance agent Sholavaram", "certified insurance advisor Chennai North", "insurance advisor near me Sholavaram"],
    whoThisHelps: [
      "Business owners who want to know their agent's qualifications before trusting large premium policies.",
      "Fleet operators who've had claim issues with aggregator-sourced policies and want licensed agent guidance.",
      "Anyone comparing 'insurance agent vs broker vs aggregator' for commercial or personal insurance.",
    ],
    whatYouGet: [
      "Clear explanation of what IRDAI licensing means and what it obligates an agent to do (and not do).",
      "Documentation-first guidance: no shortcut renewals that create claim rejection risks.",
      "30 years of commercial insurance experience — transport, industrial property, construction, liability.",
      "Local Sholavaram presence: accessible by call, WhatsApp, or office visit.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your requirement", text: "Call or WhatsApp with your policy type, vehicle/property details, and what you're trying to achieve." },
      { title: "Step 2 — Honest assessment", text: "We tell you what coverage is realistic, what isn't, and what documents you'll need for clean claim settlement." },
      { title: "Step 3 — Policy issuance + support", text: "Policy wording, endorsements, and claim documentation support — not just policy sale." },
    ],
    office: {
      title: "Sholavaram office details",
      bullets: [
        "Location: KVT AVENUE SHOZIPALAYAM, No-39, 4th Main Road, Sholavaram, Chennai – 600067.",
        "Licensed: IRDAI-authorized insurance agent (30+ years).",
        "Support: Commercial, transport, industrial, contractor, health, and motor insurance.",
      ],
    },
    commonAreasTitle: "Service areas from Sholavaram",
    commonAreasCta: { label: "See all locations we support", href: EN("/locations/") },
    quickLinks: [
      { label: "About M N Rajendrakumar", href: EN("/about/") },
      { label: "Services", href: EN("/services/") },
      { label: "Commercial Insurance Agent Near Me", href: EN("/commercial-insurance-agent-near-me/") },
    ],
    recommendedServices: [
      { label: "Lorry & Fleet Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { label: "Warehouse & Property Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
      { label: "Insurance Near Me", href: EN("/insurance-near-me/") },
    ],
    faqs: [
      { q: "What is an IRDAI licensed agent?", a: "An IRDAI-licensed agent is authorised by India's insurance regulator to sell and service insurance policies. They are accountable to IRDAI regulations and must follow fair disclosure and claim support requirements." },
      { q: "How is a licensed agent different from an online aggregator?", a: "Aggregators compare and sell policies digitally but rarely support claim documentation. A licensed agent is personally accountable for policy correctness and is present during claim disputes." },
      { q: "How long has M N Rajendrakumar been in insurance?", a: "30+ years, based in Sholavaram. Primary focus: commercial transport, industrial property, contractor, and allied insurance categories." },
    ],
  },

  // ====== NEW: Service × Location Combo Pages ======

  "lorry-insurance-sholavaram": {
    slug: "lorry-insurance-sholavaram",
    seoTitle: "Lorry Insurance in Sholavaram – Heavy Vehicle Renewal & Documentation",
    seoDesc: "Lorry/HGV insurance in Sholavaram: office-based renewal support, IDV alignment, permit compliance, and claim documentation by IRDAI-licensed agent M N Rajendrakumar.",
    heroH1: "Lorry insurance in Sholavaram",
    heroP: "Office-based lorry insurance support in Sholavaram — renewal documentation, IDV alignment, permit compliance checks, and claim guidance by a licensed agent with 30 years of commercial transport experience.",
    intentSignals: ["lorry insurance Sholavaram", "heavy vehicle insurance Sholavaram", "truck insurance Sholavaram", "GCV renewal Sholavaram"],
    whoThisHelps: ["Lorry owners based in or operating through Sholavaram.", "Fleet transport companies with vehicles registered in Sholavaram/Chennai North belt.", "Owner-operators who want local agent support for renewals and claims."],
    whatYouGet: ["Pre-renewal document checklist (RC, PUC, permit, fitness, previous policy).", "IDV and NCB alignment before renewal submission.", "Claim documentation support — FIR copy, claim form, repair estimate guidance.", "Same-day renewal processing where documents are complete."],
    howSupportWorks: [
      { title: "Step 1 — Share vehicle details", text: "WhatsApp the RC number, vehicle class (HGV/LGV/GCV), permit type, and renewal date." },
      { title: "Step 2 — Document check", text: "We verify permit compliance and IDV, then issue a document checklist specific to your vehicle." },
      { title: "Step 3 — Renewal processed", text: "Policy issued digitally. We retain details for claim support if needed." },
    ],
    office: { title: "Sholavaram office – lorry insurance base", bullets: ["KVT Avenue, Sholavaram – our primary office for lorry/fleet renewal support.", "Walk-in or WhatsApp – bring RC, PUC, permit, and previous policy.", "Same-day processing for complete documentation."] },
    commonAreasTitle: "We also serve nearby lorry insurance areas",
    commonAreasCta: { label: "See lorry insurance near me", href: EN("/lorry-insurance-near-me/") },
    quickLinks: [
      { label: "Lorry Insurance Service", href: EN("/services/transport-fleet/lorry-insurance/") },
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
    ],
    recommendedServices: [
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { label: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Can I renew lorry insurance from your Sholavaram office?", a: "Yes — walk in or WhatsApp documents. We process renewal same-day for complete documentation." },
      { q: "What permit documents are needed for lorry renewal in Sholavaram?", a: "National/state permit, RC, PUC, fitness certificate, and previous policy copy. We send a checklist via WhatsApp before you arrive." },
    ],
  },

  "lorry-insurance-red-hills": {
    slug: "lorry-insurance-red-hills",
    seoTitle: "Lorry Insurance in Red Hills – NH Belt Heavy Vehicle & Fleet Renewal",
    seoDesc: "Lorry/heavy vehicle insurance support for Red Hills NH belt operators: documentation-first renewal, IDV alignment, permit compliance, and claim guidance via Sholavaram office.",
    heroH1: "Lorry insurance in Red Hills",
    heroP: "Red Hills lorry and heavy vehicle support via Sholavaram office — NH belt document discipline, IDV alignment, and claim-ready renewal for lorry and GCV operators.",
    intentSignals: ["lorry insurance Red Hills", "heavy vehicle insurance Red Hills", "truck insurance Red Hills", "GCV renewal Red Hills"],
    whoThisHelps: ["Lorry and tipper operators running Red Hills–Chennai routes.", "Transport companies with vehicles registered or operating through Red Hills NH belt.", "Individual lorry owners seeking renewal clarity and claim documentation support."],
    whatYouGet: ["NH belt–specific IDV and vehicle class alignment.", "Permit compliance check before renewal — avoids claim rejection.", "Claim documentation guidance if a roadside accident or theft occurs.", "WhatsApp-first support — no need to drive to Sholavaram for initial guidance."],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp vehicle details", text: "RC, GCV permit type, route (NH corridor), and renewal date." },
      { title: "Step 2 — IDV & permit check", text: "We align IDV to current market value and confirm permit category before renewal." },
      { title: "Step 3 — Policy renewal", text: "Issued digitally. We retain policy for claim support if required." },
    ],
    office: { title: "Sholavaram office (Red Hills belt support)", bullets: ["Sholavaram is 12–15 km from Red Hills on the NH route.", "WhatsApp or call first — bring permit and RC for office visit.", "Same-day renewal for complete documents."] },
    commonAreasTitle: "Other lorry insurance areas nearby",
    commonAreasCta: { label: "See lorry insurance near me", href: EN("/lorry-insurance-near-me/") },
    quickLinks: [{ label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Red Hills location page", href: EN("/locations/red-hills/") }],
    recommendedServices: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") }, { label: "Claim Support", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Are NH belt lorry claims more complex?", a: "Yes — third-party involvement, multiple insurer coordination, and FIR requirements make documentation discipline critical. We guide you from Day 1." },
      { q: "How do I reach you from Red Hills?", a: "Call or WhatsApp first. For office visits: Sholavaram KVT Avenue — approximately 12–15 km from Red Hills on the NH." },
    ],
  },

  "lorry-insurance-gummidipoondi": {
    slug: "lorry-insurance-gummidipoondi",
    seoTitle: "Lorry Insurance in Gummidipoondi – SIPCOT Belt Heavy Vehicle & Fleet Support",
    seoDesc: "Lorry/HGV insurance for Gummidipoondi SIPCOT belt operators: renewal documentation, permit compliance, IDV alignment, and claim support via Sholavaram office.",
    heroH1: "Lorry insurance in Gummidipoondi",
    heroP: "Gummidipoondi SIPCOT belt lorry and heavy vehicle support — renewal documentation, IDV alignment, and claim guidance from our Sholavaram office with 30 years of heavy transport experience.",
    intentSignals: ["lorry insurance Gummidipoondi", "heavy vehicle insurance Gummidipoondi", "truck insurance Gummidipoondi SIPCOT"],
    whoThisHelps: ["Lorry operators on Gummidipoondi–Chennai and Gummidipoondi–Thiruvallur routes.", "SIPCOT belt transport companies with industrial cargo movements.", "Individual lorry owners and small fleet operators in Gummidipoondi area."],
    whatYouGet: ["SIPCOT route-specific IDV and vehicle class alignment.", "Long-haul and industrial cargo lorry renewal guidance.", "Permit compliance check — industrial zones have specific permit categories.", "Claim documentation support if damage occurs during SIPCOT transit."],
    howSupportWorks: [
      { title: "Step 1 — Share vehicle and route details", text: "WhatsApp RC, permit type, cargo category, and typical route (SIPCOT outbound/inbound)." },
      { title: "Step 2 — Permit and IDV alignment", text: "We verify permit category and IDV before renewal — critical for industrial cargo lorries." },
      { title: "Step 3 — Policy issued", text: "Renewal processed. We flag any endorsement needs (towing attachment, multi-axle, etc.)." },
    ],
    office: { title: "Sholavaram office (Gummidipoondi belt support)", bullets: ["We support Gummidipoondi operators via WhatsApp/phone primarily.", "For office visits: Sholavaram KVT Avenue — 30–35 km from Gummidipoondi.", "Call before visiting to avoid repeat trips."] },
    commonAreasTitle: "Other areas we support for lorry insurance",
    commonAreasCta: { label: "See lorry insurance near me", href: EN("/lorry-insurance-near-me/") },
    quickLinks: [{ label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Gummidipoondi location page", href: EN("/locations/gummidipoondi/") }],
    recommendedServices: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Goods Carrying Vehicle", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") }, { label: "Claim Support", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Do you handle lorry insurance for SIPCOT industrial cargo operators?", a: "Yes. SIPCOT belt lorries often carry high-value cargo — vehicle class, declared goods type, and route matching are critical for valid claims." },
    ],
  },

  "lorry-insurance-thiruvallur": {
    slug: "lorry-insurance-thiruvallur",
    seoTitle: "Lorry Insurance in Thiruvallur – District Transport & Fleet Renewal Support",
    seoDesc: "Lorry and heavy vehicle insurance for Thiruvallur district operators: renewal documentation, IDV alignment, permit compliance, and claim support via Sholavaram office.",
    heroH1: "Lorry insurance in Thiruvallur",
    heroP: "Thiruvallur district lorry and transport operator support — renewal documentation, IDV alignment, and claim guidance from Sholavaram office via WhatsApp and phone.",
    intentSignals: ["lorry insurance Thiruvallur", "heavy vehicle insurance Thiruvallur", "truck insurance Thiruvallur district", "GCV renewal Thiruvallur"],
    whoThisHelps: ["Lorry owners in Thiruvallur district running Chennai and outward routes.", "Transport companies based in Thiruvallur industrial belt.", "Individual lorry and tractor-trailer operators needing renewal support."],
    whatYouGet: ["Thiruvallur corridor route-specific IDV alignment.", "Permit compliance check — state vs national permit for long routes.", "Claim documentation support for accidents on corridor highways.", "WhatsApp-first renewal — no need to travel to Sholavaram for documentation."],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp RC and permit", text: "Share RC number, permit category, route, and renewal date." },
      { title: "Step 2 — IDV and permit verification", text: "We confirm vehicle class, permit type, and IDV before renewal processing." },
      { title: "Step 3 — Renewal issued", text: "Policy processed. Retain our contact for claims or endorsement needs." },
    ],
    office: { title: "Sholavaram office (Thiruvallur belt support)", bullets: ["We support Thiruvallur operators via WhatsApp/phone.", "For urban corridor routes, permit and route declaration alignment is handled before renewal.", "Office visit: Sholavaram KVT Avenue — Thiruvallur is approx 30 km."] },
    commonAreasTitle: "Other lorry insurance coverage areas",
    commonAreasCta: { label: "See lorry insurance near me", href: EN("/lorry-insurance-near-me/") },
    quickLinks: [{ label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Thiruvallur location page", href: EN("/locations/thiruvallur/") }],
    recommendedServices: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Goods Carrying Vehicle", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") }],
    faqs: [
      { q: "Do you support same-day lorry insurance renewal for Thiruvallur operators?", a: "Yes — WhatsApp documents early in the day. Same-day renewal is typically possible when all documents are complete." },
    ],
  },

  "warehouse-insurance-madhavaram": {
    slug: "warehouse-insurance-madhavaram",
    seoTitle: "Warehouse Insurance in Madhavaram – Stock, Fire & Property Risk Coverage",
    seoDesc: "Warehouse and godown insurance in Madhavaram: fire and stock declaration policies, property risk alignment, and claim documentation support via Sholavaram office.",
    heroH1: "Warehouse insurance in Madhavaram",
    heroP: "Madhavaram logistics hub warehouse insurance — fire & stock declaration policies, correct sum insured alignment, and claim documentation discipline from Sholavaram office.",
    intentSignals: ["warehouse insurance Madhavaram", "godown insurance Madhavaram", "stock insurance Madhavaram", "fire insurance Madhavaram warehouse"],
    whoThisHelps: ["Godown and warehouse owners in Madhavaram Milk Colony, Truck Terminal, and industrial pockets.", "Logistics companies storing third-party goods in Madhavaram warehouses.", "Owners who rent out warehouse space and need third-party stock cover."],
    whatYouGet: ["Fire, flood, and explosion cover for the warehouse structure.", "Stock declaration policy — declare monthly peak stock, pay proportionate premium.", "Burglary add-on for high-value goods storage.", "Claim documentation guidance: stock register, invoices, gate entry records."],
    howSupportWorks: [
      { title: "Step 1 — Share property details", text: "WhatsApp warehouse sq ft, construction type (RCC/sheet/mix), and average monthly stock value." },
      { title: "Step 2 — Sum insured alignment", text: "We align structure reinstatement value and stock declaration basis to avoid under-insurance at claim time." },
      { title: "Step 3 — Policy issued", text: "Policy wording reviewed for key clauses. Stock register maintenance advised for clean claims." },
    ],
    office: { title: "Sholavaram office (Madhavaram warehouse support)", bullets: ["Madhavaram is 8–10 km from our Sholavaram office.", "Primary support via WhatsApp — office visit for high-value property inspection queries.", "We support Madhavaram Milk Colony, Truck Terminal, and corridor warehouse clusters."] },
    commonAreasTitle: "Other warehouse insurance areas we support",
    commonAreasCta: { label: "See godown insurance near me", href: EN("/godown-insurance-near-me/") },
    quickLinks: [{ label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Madhavaram location page", href: EN("/locations/madhavaram/") }],
    recommendedServices: [{ label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") }, { label: "Marine Cargo & Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") }],
    faqs: [
      { q: "Do Madhavaram Truck Terminal warehouses need special insurance?", a: "Yes — high-value goods transit and storage risk means stock declaration value must match peak storage levels. We help align this correctly." },
      { q: "What is a stock declaration insurance policy?", a: "You declare the value of goods stored at month-end (or as agreed). Premium is calculated proportionally — ideal for variable stock levels common in Madhavaram logistics warehouses." },
    ],
  },

  "warehouse-insurance-manali": {
    slug: "warehouse-insurance-manali",
    seoTitle: "Warehouse Insurance in Manali – Industrial Estate Fire & Stock Coverage",
    seoDesc: "Warehouse and industrial property insurance in Manali: fire, stock declaration, and equipment risk for Manali Industrial Estate via Sholavaram office.",
    heroH1: "Warehouse insurance in Manali",
    heroP: "Manali industrial estate warehouse and property insurance — fire, stock declaration, and heavy equipment risk guidance from Sholavaram office.",
    intentSignals: ["warehouse insurance Manali", "godown insurance Manali", "industrial property insurance Manali", "fire insurance Manali"],
    whoThisHelps: ["Godown and warehouse operators in Manali Industrial Estate and New Town.", "Chemical, petroleum-adjacent, and heavy goods storage units.", "Logistics operators handling bonded or free-trade zone goods near Ennore/Manali belt."],
    whatYouGet: ["Fire, explosion, and chemical risk property cover aligned to Manali industrial activity.", "Stock declaration cover for variable goods storage.", "Machinery breakdown guidance for warehouses with automated picking/conveyor systems.", "Claim documentation discipline for high-value industrial claim settlements."],
    howSupportWorks: [
      { title: "Step 1 — Share warehouse type and use", text: "WhatsApp property type (BWSR/dry/bonded), sq ft, construction, and stored goods category." },
      { title: "Step 2 — Risk alignment", text: "Manali industrial properties may have specific peril clauses (chemical, explosion) — we align policy wording." },
      { title: "Step 3 — Policy and documentation", text: "Policy issued. We advise on endorsements needed as stored goods categories change." },
    ],
    office: { title: "Sholavaram office (Manali belt support)", bullets: ["Manali is 15–20 km from Sholavaram via NH.", "Primary support via WhatsApp/phone — industrial property inspection queries handled as needed.", "We support Manali Industrial Estate, Manali New Town, and NH-Manali road corridors."] },
    commonAreasTitle: "Other warehouse insurance locations nearby",
    commonAreasCta: { label: "See godown insurance near me", href: EN("/godown-insurance-near-me/") },
    quickLinks: [{ label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Manali location page", href: EN("/locations/manali/") }],
    recommendedServices: [{ label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Marine Cargo Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }],
    faqs: [
      { q: "Do chemical or petroleum-adjacent warehouses in Manali need special insurance?", a: "Yes — standard fire policies may exclude certain chemical perils. We review the stored goods category and recommend specific peril includes or exclusion management." },
    ],
  },

  "warehouse-insurance-ambattur": {
    slug: "warehouse-insurance-ambattur",
    seoTitle: "Warehouse Insurance in Ambattur – Industrial & MSME Stock/Fire Coverage",
    seoDesc: "Warehouse and godown insurance in Ambattur industrial estate: fire, stock declaration, MSME property risk, and claim support via Sholavaram office.",
    heroH1: "Warehouse insurance in Ambattur",
    heroP: "Ambattur industrial estate warehouse and property insurance — fire, stock, and MSME risk guidance with correct sum insured alignment from Sholavaram office.",
    intentSignals: ["warehouse insurance Ambattur", "godown insurance Ambattur", "stock insurance Ambattur", "factory insurance Ambattur"],
    whoThisHelps: ["MSME factory and warehouse owners in Ambattur Industrial Estate.", "Logistics companies using Ambattur as a hub for redistribution.", "SME businesses with combined office-warehouse-stock insurance requirements."],
    whatYouGet: ["Ambattur IE fire and explosion cover for industrial properties.", "Stock declaration policy for variable goods inventory.", "Combined MSME package (fire + stock + electronics + liability) single-policy option.", "Claim discipline guidance for Ambattur complex multi-tenant insurance situations."],
    howSupportWorks: [
      { title: "Step 1 — Share property and business details", text: "WhatsApp warehouse sq ft, goods type, stock value range, and business activity." },
      { title: "Step 2 — Coverage alignment", text: "We align fire reinstatement value, stock declaration basis, and recommend add-ons based on goods type." },
      { title: "Step 3 — Policy issued", text: "Policy reviewed for Ambattur IE–specific clauses (machinery, employee liability if applicable)." },
    ],
    office: { title: "Sholavaram office (Ambattur support)", bullets: ["Ambattur is 20–25 km from Sholavaram.", "Primary support via WhatsApp — policy and documentation handled remotely.", "Office visit option for complex multi-location warehouse setups."] },
    commonAreasTitle: "Other warehouse insurance areas",
    commonAreasCta: { label: "See godown insurance near me", href: EN("/godown-insurance-near-me/") },
    quickLinks: [{ label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Ambattur location page", href: EN("/locations/ambattur/") }],
    recommendedServices: [{ label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Shop & MSME Package", href: EN("/services/business-msme/shop-msme-insurance/") }, { label: "Stock Declaration", href: EN("/services/industrial/stock-declaration-insurance/") }],
    faqs: [
      { q: "Can I combine warehouse and factory insurance in Ambattur into one policy?", a: "Yes — a commercial package policy can cover the building, plant/machinery, stock, and liability. We structure it based on your actual operations." },
    ],
  },

  "fleet-insurance-manali": {
    slug: "fleet-insurance-manali",
    seoTitle: "Fleet Insurance in Manali – Industrial Transport & Commercial Vehicle Coverage",
    seoDesc: "Fleet and commercial vehicle insurance for Manali industrial estate operators: multi-vehicle renewal, IDV alignment, permit compliance, and claim support via Sholavaram office.",
    heroH1: "Fleet insurance in Manali",
    heroP: "Manali industrial and port-adjacent fleet insurance — multi-vehicle renewal documentation, IDV alignment, and claim-ready guidance from Sholavaram office.",
    intentSignals: ["fleet insurance Manali", "commercial vehicle insurance Manali", "lorry fleet Manali", "heavy vehicle fleet Manali industrial"],
    whoThisHelps: ["Transport companies with vehicles based in Manali Industrial Estate and New Town.", "Logistics operators serving Manali–Ennore–Tiruvottiyur port corridor routes.", "Companies with mixed fleets (lorry + LMV + tipper) needing consolidated insurance."],
    whatYouGet: ["Multi-vehicle fleet policy: single renewal date, consolidated documentation.", "Manali corridor route-specific IDV and vehicle class alignment.", "Permit compliance check for port-route vehicles (national/inter-state permits).", "Claim documentation support for heavy industrial fleet claims."],
    howSupportWorks: [
      { title: "Step 1 — Share fleet list", text: "WhatsApp vehicle registration numbers, classes, permit types, and expiry dates." },
      { title: "Step 2 — Fleet audit", text: "We audit permit compliance, IDV alignment, and vehicle class declarations before renewal." },
      { title: "Step 3 — Policy issued", text: "Fleet policy consolidated. We set renewal reminders and retain documents for claim support." },
    ],
    office: { title: "Sholavaram office (Manali fleet support)", bullets: ["Manali is 15–20 km from Sholavaram.", "Fleet renewal primarily handled via WhatsApp — no need to visit for standard renewals.", "Call for site-level endorsement or claim coordination needs."] },
    commonAreasTitle: "Other fleet insurance areas we support",
    commonAreasCta: { label: "See fleet insurance page", href: EN("/services/transport-fleet/fleet-insurance/") },
    quickLinks: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Manali location page", href: EN("/locations/manali/") }],
    recommendedServices: [{ label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Marine Cargo Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") }, { label: "Claim Support", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "What is fleet insurance and how is it different from individual vehicle insurance?", a: "Fleet insurance covers multiple vehicles under one policy. It simplifies renewal tracking, can reduce per-vehicle premium, and allows claims management under a single policy number." },
      { q: "Do port-route vehicles in Manali need special permits?", a: "Yes — vehicles operating to Kamarajar Port may need national or inter-state permits. We check permit category compliance before every fleet renewal." },
    ],
  },

  "fleet-insurance-sholavaram": {
    slug: "fleet-insurance-sholavaram",
    seoTitle: "Fleet Insurance in Sholavaram – Office-Based Multi-Vehicle Renewal & Support",
    seoDesc: "Fleet insurance in Sholavaram: multi-vehicle renewal documentation, IDV alignment, permit compliance, and claim support direct from our Sholavaram office.",
    heroH1: "Fleet insurance in Sholavaram",
    heroP: "Sholavaram office fleet insurance — multi-vehicle renewal, IDV alignment, and claim-ready documentation by a 30-year licensed agent in your local area.",
    intentSignals: ["fleet insurance Sholavaram", "commercial vehicle fleet Sholavaram", "multi-vehicle insurance Sholavaram"],
    whoThisHelps: ["Transport operators with vehicles based in Sholavaram.", "Small and medium fleet owners (2–50 vehicles) seeking consolidated renewal.", "Owner-operators who want local agent access for fleet claims and endorsements."],
    whatYouGet: ["Fleet audit: permit, IDV, vehicle class compliance across all vehicles.", "Consolidated renewal date alignment where possible.", "Claim support: single point of contact for multi-vehicle claims.", "Endorsement guidance as vehicles are added or retired from the fleet."],
    howSupportWorks: [
      { title: "Step 1 — Share fleet register", text: "WhatsApp vehicle list with RCs, permit types, and current policy expiry dates." },
      { title: "Step 2 — Fleet compliance audit", text: "We check IDV alignment, permit compliance, and vehicle class before renewal submission." },
      { title: "Step 3 — Fleet renewal processed", text: "Consolidated renewal. We track renewals and contact you 30 days before each expiry." },
    ],
    office: { title: "Sholavaram office – fleet insurance base", bullets: ["KVT Avenue, Sholavaram — direct access for fleet operators in the local belt.", "Walk-in or WhatsApp — bring fleet register and permits.", "Primary office for North Chennai, Madhavaram, Manali, Red Hills belt fleet support."] },
    commonAreasTitle: "Other fleet insurance areas we serve",
    commonAreasCta: { label: "See all locations", href: EN("/locations/") },
    quickLinks: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Sholavaram location page", href: EN("/locations/sholavaram/") }],
    recommendedServices: [{ label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Commercial Vehicle Insurance", href: EN("/services/transport-fleet/commercial-vehicle-insurance/") }, { label: "Claim Support", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "How many vehicles qualify as a 'fleet' for fleet insurance?", a: "Typically 5+ vehicles, but some insurers offer fleet terms from 3 vehicles. We assess your fleet size and get the best consolidated terms." },
    ],
  },

  "fleet-insurance-red-hills": {
    slug: "fleet-insurance-red-hills",
    seoTitle: "Fleet Insurance in Red Hills – NH Belt Commercial Vehicle & Lorry Renewal",
    seoDesc: "Fleet insurance for Red Hills NH belt operators: multi-vehicle documentation, IDV alignment, permit compliance, and claim support via Sholavaram office.",
    heroH1: "Fleet insurance in Red Hills",
    heroP: "Red Hills NH belt fleet insurance support — multi-vehicle renewal, IDV alignment, and claim documentation from Sholavaram office.",
    intentSignals: ["fleet insurance Red Hills", "lorry fleet Red Hills", "commercial vehicle fleet Red Hills"],
    whoThisHelps: ["NH corridor fleet operators based in or passing through Red Hills.", "Companies with lorries and tippers on Red Hills–Chennai and Red Hills–Thiruvallur routes.", "Small fleet (3–20 vehicle) owner-operators in Red Hills area."],
    whatYouGet: ["NH route–specific IDV alignment and vehicle class verification.", "Permit audit before renewal — national vs state permit compliance.", "Consolidated fleet renewal — single policy or coordinated renewal dates.", "Claim support for NH belt accidents: FIR, claim form, repair documentation."],
    howSupportWorks: [
      { title: "Step 1 — Share fleet details", text: "WhatsApp vehicle list, permit types, and expiry dates." },
      { title: "Step 2 — NH compliance check", text: "Route-specific permit compliance verified before renewal." },
      { title: "Step 3 — Fleet renewed", text: "Policy issued. We flag endorsement needs for newly added or removed vehicles." },
    ],
    office: { title: "Sholavaram office (Red Hills fleet support)", bullets: ["Sholavaram is on the Red Hills NH approach — approx 12–15 km.", "WhatsApp-first support for Red Hills operators.", "Office access for complex multi-vehicle fleet queries."] },
    commonAreasTitle: "Other fleet insurance areas",
    commonAreasCta: { label: "See fleet insurance page", href: EN("/services/transport-fleet/fleet-insurance/") },
    quickLinks: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Red Hills location page", href: EN("/locations/red-hills/") }],
    recommendedServices: [{ label: "Lorry Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") }],
    faqs: [{ q: "Are Red Hills NH accidents harder to claim?", a: "Claims on NH belts often involve third-party vehicles and multiple insurers. Documentation discipline (FIR timing, independent witness statements, repair estimates) is critical." }],
  },

  "marine-cargo-insurance-ennore": {
    slug: "marine-cargo-insurance-ennore",
    seoTitle: "Marine Cargo Insurance in Ennore – Kamarajar Port Transit & Import/Export Cover",
    seoDesc: "Marine cargo insurance for Ennore (Kamarajar Port) import/export businesses: goods-in-transit policies, port risk, and claim documentation guidance via Sholavaram office.",
    heroH1: "Marine cargo insurance in Ennore (Kamarajar Port)",
    heroP: "Ennore/Kamarajar Port belt marine cargo insurance — goods-in-transit, import/export risk, and port-linked marine claim documentation from Sholavaram office.",
    intentSignals: ["marine cargo insurance Ennore", "port insurance Ennore", "goods in transit insurance Ennore", "import export insurance Ennore Kamarajar"],
    whoThisHelps: ["Import/export businesses operating through Kamarajar Port, Ennore.", "Freight forwarders and CFS operators handling cargo transit risk.", "Manufacturers with raw material or finished goods transit through Ennore port."],
    whatYouGet: ["Marine all-risk or named-peril cargo cover for sea/inland transit.", "Transit document alignment: invoice, packing list, B/L, and policy wording match.", "Port-stage coverage options (warehouse-to-warehouse or port-to-port).", "Claim documentation: survey appointment, cargo condition report, insurer co-ordination."],
    howSupportWorks: [
      { title: "Step 1 — Share cargo details", text: "WhatsApp cargo type, transit route (origin–destination), commodity value, and transit frequency." },
      { title: "Step 2 — Policy wording alignment", text: "Marine policy clause review — ensure exclusions are understood before the first shipment." },
      { title: "Step 3 — Policy issued", text: "Open marine cover or voyage-wise cover arranged. We advise on declaration discipline for regular shipments." },
    ],
    office: { title: "Sholavaram office (Ennore marine support)", bullets: ["Ennore is 20–25 km from Sholavaram via NH.", "Marine policies are handled primarily via phone/WhatsApp and document email.", "Claim support: we coordinate surveyor appointment and document submission on your behalf."] },
    commonAreasTitle: "Other marine cargo insurance areas",
    commonAreasCta: { label: "Marine Cargo Insurance service page", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
    quickLinks: [{ label: "Marine Cargo Insurance", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") }, { label: "Ennore location page", href: EN("/locations/ennore/") }],
    recommendedServices: [{ label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Claim Support", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Does marine cargo insurance cover goods stored at Ennore port before clearance?", a: "Transit policies typically cover goods during active transit. For port storage risk, a warehouse or marine storage extension clause is needed — we advise based on your specific situation." },
      { q: "What cargo documents are required for marine claim settlement?", a: "Invoice, packing list, bill of lading, survey report, and damage photos. Timely communication with the insurer before cargo is moved is critical." },
    ],
  },

  "marine-cargo-insurance-tiruvottiyur": {
    slug: "marine-cargo-insurance-tiruvottiyur",
    seoTitle: "Marine Cargo Insurance in Tiruvottiyur – Port-Adjacent Transit & Goods Cover",
    seoDesc: "Marine cargo and goods-in-transit insurance for Tiruvottiyur businesses: port-adjacent risk, import/export coverage, and claim documentation via Sholavaram office.",
    heroH1: "Marine cargo insurance in Tiruvottiyur",
    heroP: "Tiruvottiyur port-adjacent marine cargo and goods-in-transit insurance — risk alignment, transit documentation, and claim support from Sholavaram office.",
    intentSignals: ["marine cargo insurance Tiruvottiyur", "goods in transit insurance Tiruvottiyur", "port insurance Tiruvottiyur"],
    whoThisHelps: ["Traders and manufacturers in Tiruvottiyur with import/export activity.", "Freight forwarders and logistics operators handling Tiruvottiyur area transit.", "Businesses transporting goods between Tiruvottiyur industrial estates and customer locations."],
    whatYouGet: ["Marine all-risk and goods-in-transit policies for domestic and sea cargo.", "Invoice and B/L alignment — correct values declared to avoid under-insurance claims.", "Survey appointment coordination for port-stage cargo damage.", "Open cover or voyage-wise policy options based on transit frequency."],
    howSupportWorks: [
      { title: "Step 1 — Share cargo and route", text: "WhatsApp cargo type, route, value, and transit frequency." },
      { title: "Step 2 — Policy structure", text: "We recommend open cover for regular shippers or voyage policy for one-off consignments." },
      { title: "Step 3 — Policy and claims", text: "Policy arranged. We coordinate claim documentation if cargo is damaged in transit." },
    ],
    office: { title: "Sholavaram office (Tiruvottiyur support)", bullets: ["Tiruvottiyur is 18–22 km from Sholavaram.", "Marine policy support via phone/WhatsApp and document email.", "Claim coordination handled remotely — surveyor appointment arranged on your behalf."] },
    commonAreasTitle: "Other marine cargo insurance areas",
    commonAreasCta: { label: "Marine Cargo Insurance page", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
    quickLinks: [{ label: "Marine Cargo Insurance", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") }, { label: "Tiruvottiyur location page", href: EN("/locations/tiruvottiyur/") }],
    recommendedServices: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }],
    faqs: [{ q: "Is marine insurance mandatory for goods shipped from Tiruvottiyur?", a: "Not legally mandatory for domestic transit, but strongly advised. One uninsured consignment loss can exceed years of premium savings." }],
  },

  "factory-insurance-gummidipoondi": {
    slug: "factory-insurance-gummidipoondi",
    seoTitle: "Factory Insurance in Gummidipoondi SIPCOT – Industrial Property & Machinery Cover",
    seoDesc: "Factory and industrial property insurance for Gummidipoondi SIPCOT estate: fire, machinery breakdown, stock declaration, and contractor risk via Sholavaram office.",
    heroH1: "Factory insurance in Gummidipoondi (SIPCOT)",
    heroP: "Gummidipoondi SIPCOT industrial estate factory insurance — fire, machinery breakdown, stock risk, and contractor documentation from Sholavaram office with 30 years of industrial experience.",
    intentSignals: ["factory insurance Gummidipoondi", "industrial insurance Gummidipoondi SIPCOT", "property insurance Gummidipoondi"],
    whoThisHelps: ["Factory owners in Gummidipoondi SIPCOT industrial estate.", "Medium and heavy industry manufacturers with plant, machinery, and stock risk.", "Companies expanding with new factory units needing project-phase contractor insurance."],
    whatYouGet: ["Industrial property cover: fire, explosion, flood, earthquake (standard and special perils).", "Machinery breakdown insurance for production-critical equipment.", "Stock declaration policy for raw materials and finished goods.", "Contractor All Risk coverage for new factory construction phases."],
    howSupportWorks: [
      { title: "Step 1 — Share factory details", text: "WhatsApp factory area (sq ft), construction type, machinery list, and stock value range." },
      { title: "Step 2 — Sum insured alignment", text: "We align reinstatement value for structure, replacement value for machinery, and peak stock for declaration." },
      { title: "Step 3 — Policy issued", text: "Comprehensive industrial package arranged. We advise on claim procedure and record-keeping." },
    ],
    office: { title: "Sholavaram office (Gummidipoondi SIPCOT support)", bullets: ["We support Gummidipoondi SIPCOT factories via WhatsApp/phone.", "Complex industrial site assessments coordinated with insurer inspection teams.", "Office visit: Sholavaram KVT Avenue — 30–35 km from Gummidipoondi."] },
    commonAreasTitle: "Other factory insurance areas we support",
    commonAreasCta: { label: "Factory Insurance service page", href: EN("/services/industrial/factory-insurance/") },
    quickLinks: [{ label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") }, { label: "Gummidipoondi location page", href: EN("/locations/gummidipoondi/") }],
    recommendedServices: [{ label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }],
    faqs: [
      { q: "What industrial insurance does a Gummidipoondi SIPCOT factory need?", a: "Typically: standard fire & special perils for structure, machinery breakdown for plant, stock declaration for inventory, and WC for employees. Requirements vary by industry type." },
      { q: "Do SIPCOT units have specific insurance requirements?", a: "Some SIPCOT allottees have bank or SIPCOT mortgage conditions requiring property insurance. We help align sum insured to satisfy these conditions." },
    ],
  },

  "contractor-insurance-sriperumbudur": {
    slug: "contractor-insurance-sriperumbudur",
    seoTitle: "Contractor Insurance in Sriperumbudur SIPCOT – All Risk, WC & CPM Cover",
    seoDesc: "Contractor All Risk, Workmen Compensation, and CPM insurance for Sriperumbudur SIPCOT contractors: project documentation, sum insured alignment, and claim support via Sholavaram office.",
    heroH1: "Contractor insurance in Sriperumbudur (SIPCOT)",
    heroP: "Sriperumbudur SIPCOT contractor insurance — Contractor All Risk, Workmen Compensation, and CPM documentation from Sholavaram office with 30 years of construction insurance experience.",
    intentSignals: ["contractor insurance Sriperumbudur", "CAR insurance Sriperumbudur", "WC insurance Sriperumbudur SIPCOT", "contractor all risk Sriperumbudur"],
    whoThisHelps: ["Civil contractors working on SIPCOT Sriperumbudur projects.", "Subcontractors needing WC cover for daily/contract workers.", "EPC companies with plant machinery and CPM cover requirements."],
    whatYouGet: ["Contractor All Risk: project period cover with third-party liability extension.", "Workmen Compensation: MCA/WIBA-compliant worker cover for contract worksites.", "CPM (Contractor's Plant & Machinery) insurance for cranes, excavators, and site equipment.", "Project value declaration guidance — under-declaration is the most common claim dispute trigger."],
    howSupportWorks: [
      { title: "Step 1 — Share project details", text: "WhatsApp project type (civil/electrical/EPC), project value, timeline, and manpower count." },
      { title: "Step 2 — Sum insured and coverage alignment", text: "We align project value declarations, WC wage roll, and CPM equipment list to avoid under-insurance." },
      { title: "Step 3 — Policy and documentation", text: "Policy issued. We advise on site-level record-keeping for clean claim settlement." },
    ],
    office: { title: "Sholavaram office (Sriperumbudur contractor support)", bullets: ["Sriperumbudur SIPCOT is 35–40 km from Sholavaram.", "Contractor documentation primarily handled via WhatsApp and site inspection coordination.", "Call/WhatsApp before visiting — we prepare a document checklist for your specific project type."] },
    commonAreasTitle: "Other contractor insurance areas we support",
    commonAreasCta: { label: "Contractor All Risk service page", href: EN("/services/construction/contractor-all-risk/") },
    quickLinks: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") }, { label: "Sriperumbudur location page", href: EN("/locations/sriperumbudur-sipcot/") }],
    recommendedServices: [{ label: "Crane/CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") }],
    faqs: [
      { q: "Is WC insurance mandatory for SIPCOT contractors?", a: "Yes — Workmen Compensation is legally mandatory when employing workers. SIPCOT clients also typically require contractor insurance as a pre-condition for site access." },
      { q: "What is CPM insurance for construction equipment?", a: "CPM (Contractor's Plant & Machinery) insurance covers physical damage to owned or rented site machinery (cranes, excavators, mixers) during the project period." },
    ],
  },

  "crane-insurance-manali": {
    slug: "crane-insurance-manali",
    seoTitle: "Crane & Heavy Equipment Insurance in Manali – CPM & Liability Cover",
    seoDesc: "Crane CPM and heavy equipment insurance for Manali industrial estate operators: physical damage, liability cover, and claim documentation via Sholavaram office.",
    heroH1: "Crane and heavy equipment insurance in Manali",
    heroP: "Manali industrial estate crane and CPM insurance — physical damage, operational liability, and claim documentation by a licensed agent with 30 years of heavy equipment experience.",
    intentSignals: ["crane insurance Manali", "CPM insurance Manali", "heavy equipment insurance Manali", "crane liability Manali"],
    whoThisHelps: ["Crane owners and operators in Manali Industrial Estate.", "Port-equipment operators near Ennore/Manali belt.", "Construction companies renting cranes for Manali area projects."],
    whatYouGet: ["CPM (Contractor's Plant & Machinery) insurance: physical damage during operation, transit, and storage.", "Crane Liability insurance: third-party bodily injury and property damage coverage.", "Boom and undercarriage endorsement options for high-value cranes.", "Claim support: breakdown report, independent engineer assessment coordination."],
    howSupportWorks: [
      { title: "Step 1 — Share equipment details", text: "WhatsApp crane make/model, year, current market value, and primary operating location." },
      { title: "Step 2 — CPM valuation alignment", text: "We align sum insured to current replacement/market value — not original purchase price — to avoid under-insurance." },
      { title: "Step 3 — Policy and liability cover", text: "CPM issued + liability extension recommended for cranes operating near public areas or industrial sites." },
    ],
    office: { title: "Sholavaram office (Manali heavy equipment support)", bullets: ["Manali is 15–20 km from Sholavaram.", "Crane and CPM insurance handled via WhatsApp — no need to move equipment for documentation.", "Claim coordination: engineer inspection and repair estimate support available."] },
    commonAreasTitle: "Other crane/CPM insurance areas",
    commonAreasCta: { label: "Crane/CPM Insurance page", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    quickLinks: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Crane Liability Insurance", href: EN("/services/heavy-equipment/crane-liability/") }, { label: "Manali location page", href: EN("/locations/manali/") }],
    recommendedServices: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }],
    faqs: [
      { q: "What is CPM insurance for cranes in Manali?", a: "CPM (Contractor's Plant & Machinery) covers your crane or equipment against sudden physical damage during operation, loading, transit, and storage — essential for any high-value mobile equipment." },
      { q: "Is crane liability insurance mandatory?", a: "Not legally mandatory, but any crane operating near public roads, ports, or within industrial estates can cause significant third-party damage. Crane liability cover protects against those claims." },
    ],
  },

  "crane-insurance-sholavaram": {
    slug: "crane-insurance-sholavaram",
    seoTitle: "Crane & Heavy Equipment Insurance in Sholavaram – CPM & Liability",
    seoDesc: "Crane CPM and liability insurance for Sholavaram-based crane owners and NH-corridor equipment operators, coordinated directly from our Sholavaram office with claim documentation support.",
    heroH1: "Crane and heavy equipment insurance in Sholavaram",
    heroP: "Sholavaram is our home office — crane and CPM insurance for equipment operating on NH corridors, industrial belts and construction sites nearby, handled directly by a licensed agent with 30 years of heavy equipment claim experience.",
    intentSignals: ["crane insurance Sholavaram", "CPM insurance Sholavaram", "heavy equipment insurance Sholavaram", "crane liability Sholavaram"],
    whoThisHelps: ["Crane owners and small fleet operators based in or near Sholavaram.", "Equipment rented out to construction sites along the NH corridor.", "Contractors who need liability cover in addition to physical damage cover for hired cranes."],
    whatYouGet: ["CPM (Contractor's Plant & Machinery) insurance: physical damage during operation, transit, and storage.", "Crane Liability insurance: third-party bodily injury and property damage coverage for site and road use.", "Sum insured aligned to current market value, not depreciated purchase price.", "Claim support: breakdown report, independent engineer assessment coordination — done from our own office, not a call centre."],
    howSupportWorks: [
      { title: "Step 1 — Share equipment details", text: "WhatsApp crane make/model, year, current market value, and where it's mainly deployed." },
      { title: "Step 2 — CPM valuation alignment", text: "We check sum insured against current replacement value so a claim isn't reduced by under-insurance." },
      { title: "Step 3 — Policy and liability cover", text: "CPM issued with liability extension recommended for any crane working near public roads or shared industrial sites." },
    ],
    office: { title: "Sholavaram office (crane & heavy equipment support)", bullets: ["Our office is in Sholavaram — no travel needed for documentation, we come to the equipment if required.", "Crane and CPM insurance handled via WhatsApp for owners on NH corridor and industrial belt sites.", "Claim coordination: engineer inspection and repair estimate support available."] },
    commonAreasTitle: "Other crane/CPM insurance areas",
    commonAreasCta: { label: "Crane/CPM Insurance page", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    quickLinks: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Crane Liability Insurance", href: EN("/services/heavy-equipment/crane-liability/") }, { label: "Sholavaram location page", href: EN("/locations/sholavaram/") }],
    recommendedServices: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }],
    faqs: [
      { q: "Do you cover cranes based right in Sholavaram?", a: "Yes — Sholavaram is our office location, so equipment based here gets the most direct support: fastest document turnaround and easiest coordination for claims or inspections." },
      { q: "Is crane liability insurance necessary for site work near Sholavaram?", a: "If the crane operates near public roads, industrial plots or shared construction sites, liability cover is strongly recommended — physical damage cover alone won't pay for third-party injury or property damage claims." },
    ],
  },

  "crane-insurance-red-hills": {
    slug: "crane-insurance-red-hills",
    seoTitle: "Crane & Heavy Equipment Insurance in Red Hills – CPM & Liability",
    seoDesc: "Crane CPM and liability insurance for Red Hills NH-belt equipment operators and construction sites, coordinated from our Sholavaram office with claim documentation support.",
    heroH1: "Crane and heavy equipment insurance in Red Hills",
    heroP: "Red Hills is an NH-facing belt with frequent construction and heavy-equipment movement — CPM and crane liability insurance handled from our nearby Sholavaram office, with claim documentation that accounts for the higher third-party exposure on NH-adjacent sites.",
    intentSignals: ["crane insurance Red Hills", "CPM insurance Red Hills", "heavy equipment insurance Red Hills", "crane liability Red Hills"],
    whoThisHelps: ["Crane and heavy equipment owners operating on the Red Hills NH belt.", "Contractors running construction sites along the toll/NH corridor.", "Equipment rental operators serving multiple sites in the Red Hills–Sholavaram stretch."],
    whatYouGet: ["CPM insurance: physical damage during operation, transit and storage.", "Crane Liability insurance: third-party bodily injury and property damage — important on NH-facing sites with more public exposure.", "Sum insured aligned to current market value to avoid under-insurance.", "Claim support with engineer assessment coordination for breakdown or accident claims."],
    howSupportWorks: [
      { title: "Step 1 — Share equipment details", text: "WhatsApp crane make/model, year, current market value, and the site(s) it operates on." },
      { title: "Step 2 — CPM valuation alignment", text: "We align sum insured to current replacement value, not original purchase price." },
      { title: "Step 3 — Policy and liability cover", text: "CPM issued with liability extension — recommended for any equipment working close to NH traffic or shared sites." },
    ],
    office: { title: "Sholavaram office (Red Hills crane & heavy equipment support)", bullets: ["Red Hills is a short distance from our Sholavaram office — fast document turnaround for NH-belt operators.", "Crane and CPM insurance handled via WhatsApp; on-site visit available for larger equipment.", "Claim coordination: engineer inspection and repair estimate support available."] },
    commonAreasTitle: "Other crane/CPM insurance areas",
    commonAreasCta: { label: "Crane/CPM Insurance page", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    quickLinks: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Crane Liability Insurance", href: EN("/services/heavy-equipment/crane-liability/") }, { label: "Red Hills location page", href: EN("/locations/red-hills/") }],
    recommendedServices: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }],
    faqs: [
      { q: "Why does crane liability matter more on the Red Hills NH belt?", a: "NH-facing sites have more passing traffic and public exposure than interior plots, so the chance of a third-party injury or property damage claim is higher — liability cover fills the gap that physical damage (CPM) cover doesn't." },
      { q: "Can you support cranes moving between multiple Red Hills sites?", a: "Yes — for operators running equipment across more than one site in the belt, we coordinate a single policy and keep documentation consistent so claims aren't delayed by site-to-site paperwork gaps." },
    ],
  },

  "crane-insurance-karanodai": {
    slug: "crane-insurance-karanodai",
    seoTitle: "Crane & Heavy Equipment Insurance in Karanodai – CPM & Liability",
    seoDesc: "Crane CPM and liability insurance for equipment operating on the Karanodai NH belt, coordinated from our Sholavaram office with claim documentation support.",
    heroH1: "Crane and heavy equipment insurance in Karanodai",
    heroP: "Karanodai sits on an NH-facing belt where transport and equipment movement bring more third-party exposure — crane CPM and liability insurance handled from our nearby Sholavaram office, with documentation discipline built for NH-belt claim scrutiny.",
    intentSignals: ["crane insurance Karanodai", "CPM insurance Karanodai", "heavy equipment insurance Karanodai", "crane liability Karanodai"],
    whoThisHelps: ["Crane and heavy equipment owners operating along the Karanodai NH stretch.", "Contractors and transport operators who also run lifting equipment on the same sites.", "Businesses needing liability cover for equipment working near NH traffic."],
    whatYouGet: ["CPM insurance: physical damage during operation, transit and storage.", "Crane Liability insurance: third-party bodily injury and property damage cover for NH-adjacent work.", "Sum insured aligned to current market value to avoid under-insurance.", "Claim support with engineer assessment coordination for breakdown or accident claims."],
    howSupportWorks: [
      { title: "Step 1 — Share equipment details", text: "WhatsApp crane make/model, year, current market value, and the site(s) it operates on." },
      { title: "Step 2 — CPM valuation alignment", text: "We align sum insured to current replacement value, not original purchase price." },
      { title: "Step 3 — Policy and liability cover", text: "CPM issued with liability extension — recommended given the NH-belt exposure typical of Karanodai sites." },
    ],
    office: { title: "Sholavaram office (Karanodai crane & heavy equipment support)", bullets: ["Karanodai is close to our Sholavaram office — fast turnaround for NH-belt equipment owners.", "Crane and CPM insurance handled via WhatsApp; on-site visit available for larger equipment.", "Claim coordination: engineer inspection and repair estimate support available."] },
    commonAreasTitle: "Other crane/CPM insurance areas",
    commonAreasCta: { label: "Crane/CPM Insurance page", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    quickLinks: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Crane Liability Insurance", href: EN("/services/heavy-equipment/crane-liability/") }, { label: "Karanodai location page", href: EN("/locations/karanodai/") }],
    recommendedServices: [{ label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }],
    faqs: [
      { q: "Do you cover cranes that also do transport work in Karanodai?", a: "Yes — many operators here run both lifting equipment and goods vehicles. We can coordinate CPM/crane liability alongside fleet cover so renewal dates and documentation stay aligned." },
      { q: "Is crane liability cover important on the Karanodai NH stretch?", a: "Yes — NH-facing work means more public exposure than an interior plot, so liability cover matters more here than on a closed site." },
    ],
  },

  "contractor-insurance-sholavaram": {
    slug: "contractor-insurance-sholavaram",
    seoTitle: "Contractor Insurance (CAR + WC) in Sholavaram – Site Cover",
    seoDesc: "Contractor All Risk and Workmen Compensation insurance for construction sites in and around Sholavaram, handled directly from our home office with claim-ready documentation.",
    heroH1: "Contractor insurance (CAR + WC) in Sholavaram",
    heroP: "Sholavaram is our office base — Contractor All Risk and Workmen Compensation insurance for construction and site work nearby, set up with project-period alignment and payroll documentation done right from day one.",
    intentSignals: ["contractor insurance Sholavaram", "CAR insurance Sholavaram", "workmen compensation Sholavaram", "contractor all risk Sholavaram"],
    whoThisHelps: ["Contractors running construction or civil work sites in or near Sholavaram.", "Small builders who need both CAR and WC but don't want two separate uncoordinated policies.", "Site owners who need proof of contractor insurance before work begins."],
    whatYouGet: ["Contractor All Risk (CAR): covers the site works against fire, damage and specified perils during the project period.", "Workmen Compensation (WC): statutory cover for site labour, based on correct worker classification and payroll records.", "Project-period alignment so cover doesn't lapse mid-construction.", "Claim support: incident reporting discipline and evidence capture guidance from day one, not after something goes wrong."],
    howSupportWorks: [
      { title: "Step 1 — Share project details", text: "WhatsApp project value, duration, site address and rough labour headcount." },
      { title: "Step 2 — CAR + WC structuring", text: "We align both covers to the same project period and check payroll/classification records match what WC requires." },
      { title: "Step 3 — Policy issued, site-ready", text: "Documents kept in order from the start — site incident reporting steps explained so evidence is captured correctly if something happens." },
    ],
    office: { title: "Sholavaram office (contractor insurance support)", bullets: ["Our office is in Sholavaram — direct coordination, no call centre in between.", "Site visit possible for larger projects; smaller sites handled over WhatsApp and phone.", "Claim support if a site incident occurs — we guide reporting and documentation as it happens."] },
    commonAreasTitle: "Other contractor insurance areas",
    commonAreasCta: { label: "Contractor / Construction Insurance page", href: EN("/services/construction/contractor-car-wc-insurance/") },
    quickLinks: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") }, { label: "Sholavaram location page", href: EN("/locations/sholavaram/") }],
    recommendedServices: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }],
    faqs: [
      { q: "Can CAR and WC be combined into one process for a Sholavaram site?", a: "They're separate policies, but we coordinate both together — same project period, matching documentation — so you're not managing two unrelated renewal dates." },
      { q: "What payroll records do I need for WC cover?", a: "Worker names, roles/classification and wage records for the project period. We check these before issuing so the cover isn't challenged later on a claim." },
    ],
  },

  "contractor-insurance-red-hills": {
    slug: "contractor-insurance-red-hills",
    seoTitle: "Contractor Insurance (CAR + WC) in Red Hills – Site Cover",
    seoDesc: "Contractor All Risk and Workmen Compensation insurance for construction sites on the Red Hills NH belt, coordinated from our Sholavaram office with claim-ready documentation.",
    heroH1: "Contractor insurance (CAR + WC) in Red Hills",
    heroP: "Red Hills has steady construction activity along the NH belt — Contractor All Risk and Workmen Compensation insurance set up from our nearby Sholavaram office, with the documentation discipline that NH-adjacent sites tend to need for a clean claim.",
    intentSignals: ["contractor insurance Red Hills", "CAR insurance Red Hills", "workmen compensation Red Hills", "contractor all risk Red Hills"],
    whoThisHelps: ["Contractors building on Red Hills NH-belt sites.", "Builders who need proof of CAR/WC cover before a client or authority allows work to start.", "Site owners managing labour across more than one Red Hills project."],
    whatYouGet: ["Contractor All Risk (CAR): site works covered against fire, damage and specified perils for the project period.", "Workmen Compensation (WC): statutory cover for site labour, matched to correct classification and payroll.", "Project-period alignment so cover runs the full duration of NH-belt projects, which can extend longer than city-side jobs.", "Claim support with clear incident-reporting steps, useful given the higher third-party visibility of NH-facing sites."],
    howSupportWorks: [
      { title: "Step 1 — Share project details", text: "WhatsApp project value, duration, site address and labour headcount." },
      { title: "Step 2 — CAR + WC structuring", text: "We align both covers to the project period and confirm payroll/classification records support the WC cover." },
      { title: "Step 3 — Policy issued, site-ready", text: "Reporting steps explained upfront so evidence is captured correctly if an incident happens on-site." },
    ],
    office: { title: "Sholavaram office (Red Hills contractor insurance support)", bullets: ["Red Hills is a short distance from our office — fast document turnaround.", "Site visits available for larger NH-belt projects.", "Claim support if a site incident occurs, including guidance on reporting to keep the claim clean."] },
    commonAreasTitle: "Other contractor insurance areas",
    commonAreasCta: { label: "Contractor / Construction Insurance page", href: EN("/services/construction/contractor-car-wc-insurance/") },
    quickLinks: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") }, { label: "Red Hills location page", href: EN("/locations/red-hills/") }],
    recommendedServices: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }],
    faqs: [
      { q: "Do NH-belt sites need anything extra beyond standard CAR/WC?", a: "Not a different policy, but documentation discipline matters more — clear site records and prompt incident reporting reduce the chance of disputes given the higher public exposure on Red Hills NH-facing sites." },
      { q: "Can you handle multiple Red Hills sites under one contractor policy setup?", a: "We coordinate CAR/WC across multiple sites so renewal dates and paperwork stay consistent, even if each site has its own project period." },
    ],
  },

  "contractor-insurance-manali": {
    slug: "contractor-insurance-manali",
    seoTitle: "Contractor Insurance (CAR + WC) in Manali – Site Cover",
    seoDesc: "Contractor All Risk and Workmen Compensation insurance for construction and industrial-site projects in Manali, coordinated from our Sholavaram office with claim-ready documentation.",
    heroH1: "Contractor insurance (CAR + WC) in Manali",
    heroP: "Manali's industrial estate brings a mix of construction and plant-adjacent site work — Contractor All Risk and Workmen Compensation insurance set up from our Sholavaram office, aligned to the property and liability exposure typical of industrial-belt projects.",
    intentSignals: ["contractor insurance Manali", "CAR insurance Manali", "workmen compensation Manali", "contractor all risk Manali"],
    whoThisHelps: ["Contractors working construction or fit-out projects inside Manali Industrial Estate.", "Builders whose sites sit close to existing factories or warehouses, where property exposure is higher.", "Site owners who need WC cover in place before labour starts on an industrial-belt project."],
    whatYouGet: ["Contractor All Risk (CAR): site works covered against fire, damage and specified perils for the project period.", "Workmen Compensation (WC): statutory cover for site labour, matched to correct classification and payroll.", "Guidance on how CAR interacts with neighbouring factory/warehouse property risk on industrial-belt sites.", "Claim support with incident-reporting discipline suited to industrial-estate sites."],
    howSupportWorks: [
      { title: "Step 1 — Share project details", text: "WhatsApp project value, duration, site address and labour headcount." },
      { title: "Step 2 — CAR + WC structuring", text: "We align both covers to the project period and check payroll/classification records support the WC cover." },
      { title: "Step 3 — Policy issued, site-ready", text: "We explain reporting steps upfront — important on industrial-estate sites where an incident can also affect neighbouring property." },
    ],
    office: { title: "Sholavaram office (Manali contractor insurance support)", bullets: ["Manali is 15–20 km from our Sholavaram office — documentation handled via WhatsApp, site visit available for larger projects.", "We're familiar with Manali Industrial Estate's mix of construction and plant-adjacent risk.", "Claim support if a site incident occurs, including coordination with property/liability angles if a neighbouring facility is involved."] },
    commonAreasTitle: "Other contractor insurance areas",
    commonAreasCta: { label: "Contractor / Construction Insurance page", href: EN("/services/construction/contractor-car-wc-insurance/") },
    quickLinks: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") }, { label: "Manali location page", href: EN("/locations/manali/") }],
    recommendedServices: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }],
    faqs: [
      { q: "Does contractor insurance in Manali need to account for nearby factories?", a: "It's worth checking — if your site sits close to an operating factory or warehouse, we look at whether public liability cover should be added alongside CAR/WC to cover any impact on neighbouring property." },
      { q: "Can you set up WC cover quickly before labour starts on a Manali site?", a: "Yes — share payroll and classification details early and we can have WC in place before work begins, avoiding a gap in statutory cover." },
    ],
  },

  "fire-burglary-insurance-sholavaram": {
    slug: "fire-burglary-insurance-sholavaram",
    seoTitle: "Fire & Burglary Insurance in Sholavaram – Shops & Warehouses",
    seoDesc: "Fire and burglary insurance for shops, godowns and small industrial units in Sholavaram, set up directly from our home office with correct sum insured and security compliance checks.",
    heroH1: "Fire and burglary insurance in Sholavaram",
    heroP: "Sholavaram is our office base — fire and burglary cover for shops, godowns and small industrial units nearby, set up with correct sum insured and the security compliance detail insurers actually check at claim time.",
    intentSignals: ["fire insurance Sholavaram", "burglary insurance Sholavaram", "shop insurance Sholavaram", "godown fire insurance Sholavaram"],
    whoThisHelps: ["Shop owners and small traders in and around Sholavaram.", "Godown/warehouse operators storing stock locally.", "Small industrial unit owners who need both fire and burglary cover under one policy."],
    whatYouGet: ["Fire cover: building, stock and machinery against fire and specified perils.", "Burglary cover: theft/break-in protection, checked against your actual security setup so a claim isn't reduced for non-compliance.", "Sum insured aligned to actual stock/asset value — avoids the Average Clause penalty that cuts payouts on underinsured claims.", "Claim support: documentation and valuation-proof guidance from the start, not after a loss happens."],
    howSupportWorks: [
      { title: "Step 1 — Share property details", text: "WhatsApp property type, approximate stock/asset value, and existing security measures (locks, grills, CCTV if any)." },
      { title: "Step 2 — Sum insured check", text: "We check declared value against actual stock/asset value so the Average Clause doesn't reduce a future claim." },
      { title: "Step 3 — Policy issued with clear terms", text: "Security compliance conditions explained upfront so nothing is a surprise if you ever need to claim." },
    ],
    office: { title: "Sholavaram office (fire & burglary insurance support)", bullets: ["Our office is in Sholavaram — direct coordination for local shop and godown owners.", "We can visit the property for larger stock/asset valuations if needed.", "Claim support: proof trail (invoices, photos, valuation basis) guided from day one."] },
    commonAreasTitle: "Other fire & burglary insurance areas",
    commonAreasCta: { label: "Fire & Burglary Insurance page", href: EN("/services/industrial/fire-burglary-insurance/") },
    quickLinks: [{ label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Sholavaram location page", href: EN("/locations/sholavaram/") }],
    recommendedServices: [{ label: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") }, { label: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "What happens if my declared stock value is lower than actual stock in Sholavaram?", a: "The Average Clause can reduce your claim payout proportionally. We check this before issuing the policy so a real loss isn't underpaid." },
      { q: "Does burglary cover need specific security measures in place?", a: "Insurers often specify minimum security (locks, grills, sometimes CCTV) for burglary cover to apply fully. We confirm what's required for your setup before the policy is issued." },
    ],
  },

  "fire-burglary-insurance-red-hills": {
    slug: "fire-burglary-insurance-red-hills",
    seoTitle: "Fire & Burglary Insurance in Red Hills – Shops & Warehouses",
    seoDesc: "Fire and burglary insurance for shops, godowns and storage units on the Red Hills belt, coordinated from our Sholavaram office with correct sum insured and security compliance checks.",
    heroH1: "Fire and burglary insurance in Red Hills",
    heroP: "Red Hills has a growing mix of shops, godowns and storage units along the NH belt — fire and burglary cover set up from our nearby Sholavaram office, with sum insured and security-compliance checks done properly upfront.",
    intentSignals: ["fire insurance Red Hills", "burglary insurance Red Hills", "godown insurance Red Hills", "warehouse fire insurance Red Hills"],
    whoThisHelps: ["Shop and godown owners on the Red Hills NH belt.", "Storage/warehouse operators holding goods in transit or for local distribution.", "Small industrial unit owners who need combined fire + burglary cover."],
    whatYouGet: ["Fire cover: building, stock and machinery against fire and specified perils.", "Burglary cover: theft/break-in protection matched to your actual security setup.", "Sum insured aligned to real stock/asset value to avoid Average Clause reduction on a claim.", "Claim support: documentation and valuation-proof guidance set up before any loss, not scrambled together after."],
    howSupportWorks: [
      { title: "Step 1 — Share property details", text: "WhatsApp property type, approximate stock/asset value, and current security measures." },
      { title: "Step 2 — Sum insured check", text: "We check declared value against actual stock/asset value so a future claim isn't reduced by underinsurance." },
      { title: "Step 3 — Policy issued with clear terms", text: "Security compliance conditions explained upfront, particularly relevant for godowns storing goods near the NH belt." },
    ],
    office: { title: "Sholavaram office (Red Hills fire & burglary support)", bullets: ["Red Hills is a short distance from our office — fast turnaround for shop/godown owners.", "Property visit available for larger stock valuations.", "Claim support: proof trail guidance from day one, before any loss happens."] },
    commonAreasTitle: "Other fire & burglary insurance areas",
    commonAreasCta: { label: "Fire & Burglary Insurance page", href: EN("/services/industrial/fire-burglary-insurance/") },
    quickLinks: [{ label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Red Hills location page", href: EN("/locations/red-hills/") }],
    recommendedServices: [{ label: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") }, { label: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Are godowns near the Red Hills NH belt at higher fire/theft risk?", a: "Not inherently, but higher goods movement means stock values can fluctuate more — keeping declared sum insured updated matters more here than for a static city shop." },
      { q: "Can fire and burglary cover be combined into one policy for a Red Hills godown?", a: "Yes — most commercial property policies combine both. We check your specific stock and security setup before recommending sum insured and terms." },
    ],
  },

  "fire-burglary-insurance-madhavaram": {
    slug: "fire-burglary-insurance-madhavaram",
    seoTitle: "Fire & Burglary Insurance in Madhavaram – Shops & Warehouses",
    seoDesc: "Fire and burglary insurance for shops, godowns and logistics-adjacent storage in Madhavaram, coordinated from our Sholavaram office with correct sum insured and security compliance checks.",
    heroH1: "Fire and burglary insurance in Madhavaram",
    heroP: "Madhavaram's logistics-corridor location means many shops and godowns hold higher stock turnover — fire and burglary cover set up from our Sholavaram office, with sum insured kept realistic against actual stock levels.",
    intentSignals: ["fire insurance Madhavaram", "burglary insurance Madhavaram", "godown insurance Madhavaram", "shop insurance Madhavaram"],
    whoThisHelps: ["Shop owners in Madhavaram's city-edge commercial areas.", "Godown operators near Madhavaram Truck Terminal handling frequent stock movement.", "SME businesses needing combined fire + burglary cover for a single premises."],
    whatYouGet: ["Fire cover: building, stock and machinery against fire and specified perils.", "Burglary cover: theft/break-in protection matched to your actual security setup.", "Sum insured guidance that accounts for stock turnover near the truck terminal, where declared value can go stale quickly if not updated.", "Claim support: documentation and valuation-proof guidance from the start."],
    howSupportWorks: [
      { title: "Step 1 — Share property details", text: "WhatsApp property type, approximate stock/asset value, and current security measures." },
      { title: "Step 2 — Sum insured check", text: "We check declared value against actual stock/asset value — particularly important if your stock turns over fast." },
      { title: "Step 3 — Policy issued with clear terms", text: "Security compliance conditions explained upfront so nothing is a surprise at claim time." },
    ],
    office: { title: "Sholavaram office (Madhavaram fire & burglary support)", bullets: ["Madhavaram is a short distance from our Sholavaram office.", "Property visit available for larger stock valuations, especially near the truck terminal belt.", "Claim support: proof trail guidance from day one."] },
    commonAreasTitle: "Other fire & burglary insurance areas",
    commonAreasCta: { label: "Fire & Burglary Insurance page", href: EN("/services/industrial/fire-burglary-insurance/") },
    quickLinks: [{ label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Madhavaram location page", href: EN("/locations/madhavaram/") }],
    recommendedServices: [{ label: "Stock Declaration Insurance", href: EN("/services/industrial/stock-declaration-insurance/") }, { label: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Why does stock turnover matter for fire/burglary cover near Madhavaram Truck Terminal?", a: "If stock value swings with frequent movement, a fixed sum insured set once and forgotten can fall behind actual value — leading to an Average Clause reduction on a claim. We recommend periodic reviews for high-turnover godowns." },
      { q: "Do you cover shops as well as godowns in Madhavaram?", a: "Yes — both are common here. We size the policy to the actual premises, whether it's a retail shop or a storage godown." },
    ],
  },

  "fleet-insurance-puzhal": {
    slug: "fleet-insurance-puzhal",
    seoTitle: "Fleet & Lorry Insurance in Puzhal – Multi-Vehicle Cover",
    seoDesc: "Fleet and lorry insurance for transport operators based in Puzhal, coordinated from our Sholavaram office with permit/fitness documentation and claim support.",
    heroH1: "Fleet and lorry insurance in Puzhal",
    heroP: "Puzhal sits close to our Sholavaram office — fleet and lorry insurance for local transport operators, set up with permit/fitness documentation discipline and renewal-date tracking so multi-vehicle cover doesn't fall out of sync.",
    intentSignals: ["fleet insurance Puzhal", "lorry insurance Puzhal", "commercial vehicle insurance Puzhal", "multi-vehicle insurance Puzhal"],
    whoThisHelps: ["Transport operators running more than one commercial vehicle from Puzhal.", "Lorry owners who currently juggle separate renewal dates across vehicles.", "Businesses expanding from single-vehicle to fleet cover."],
    whatYouGet: ["Fleet insurance: multiple vehicles under one coordinated policy structure.", "Permit, fitness and RC compliance checks per vehicle — reduces claim rejection risk.", "Renewal-date alignment so you're not tracking separate expiry dates for each vehicle.", "Claim support: incident reporting steps and documentation guidance if any vehicle is involved in an accident."],
    howSupportWorks: [
      { title: "Step 1 — Share fleet details", text: "WhatsApp the vehicle list — RC, permit type and current insurer/expiry for each." },
      { title: "Step 2 — Compliance and IDV check", text: "We check permit/fitness status and set realistic IDV per vehicle to avoid under-insurance." },
      { title: "Step 3 — Coordinated policy issued", text: "Renewal dates aligned where possible, with a document checklist for each vehicle kept on file." },
    ],
    office: { title: "Sholavaram office (Puzhal fleet insurance support)", bullets: ["Puzhal is close to our Sholavaram office — quick turnaround for document checks.", "We track renewal dates across your fleet so nothing lapses unnoticed.", "Claim coordination available if any vehicle in the fleet is involved in an incident."] },
    commonAreasTitle: "Other fleet & lorry insurance areas",
    commonAreasCta: { label: "Fleet Insurance page", href: EN("/services/transport-fleet/fleet-insurance/") },
    quickLinks: [{ label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") }, { label: "Lorry / Heavy Vehicle Insurance", href: EN("/services/transport-fleet/lorry-insurance/") }, { label: "Puzhal location page", href: EN("/locations/puzhal/") }],
    recommendedServices: [{ label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") }, { label: "Trailer Insurance", href: EN("/services/transport-fleet/trailer-insurance/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Can you manage renewal dates across a small fleet based in Puzhal?", a: "Yes — we track expiry dates per vehicle and remind you ahead of renewal, so cover doesn't lapse on any single vehicle in the fleet." },
      { q: "What if my fleet vehicles have different current insurers?", a: "That's common. We review each vehicle's existing policy and permit/fitness status, then coordinate a consistent structure going forward — no need to switch everything at once." },
    ],
  },

  "crane-insurance-oragadam": {
    slug: "crane-insurance-oragadam",
    seoTitle: "Crane & Heavy Equipment Insurance in Oragadam – CPM & Liability",
    seoDesc: "Crane CPM and liability insurance for equipment operating in the Oragadam auto and OEM industrial belt, with documentation support for plant, port-linked and site movement.",
    heroH1: "Crane and heavy equipment insurance in Oragadam",
    heroP: "Oragadam's auto and OEM manufacturing belt runs heavy equipment for plant construction, expansion projects and logistics handling — CPM and crane liability cover set up with documentation that matches how equipment actually moves between site, plant and port.",
    intentSignals: ["crane insurance Oragadam", "CPM insurance Oragadam", "heavy equipment insurance Oragadam", "crane liability Oragadam industrial"],
    whoThisHelps: ["Crane and heavy equipment operators working OEM/auto plant construction or expansion in Oragadam.", "Equipment rental companies serving multiple factories inside the Oragadam industrial corridor.", "Contractors handling plant-adjacent lifting work where liability exposure is higher than a standalone construction site."],
    whatYouGet: ["CPM (Contractor's Plant & Machinery) insurance: physical damage during operation, transit and storage.", "Crane Liability insurance: third-party bodily injury and property damage — relevant where equipment operates close to active plant operations.", "Sum insured aligned to current market value, not depreciated purchase price.", "Claim support: engineer assessment coordination and documentation discipline suited to industrial-plant claims."],
    howSupportWorks: [
      { title: "Step 1 — Share equipment and project details", text: "WhatsApp crane make/model, current value, and which plant/site it's deployed at." },
      { title: "Step 2 — CPM valuation and liability review", text: "We check sum insured against replacement value and assess whether liability cover needs extending given plant-adjacent exposure." },
      { title: "Step 3 — Policy issued, site-ready", text: "Documentation aligned to what OEM plant contractors typically need to show before equipment is allowed on site." },
    ],
    office: { title: "Coordinated support for Oragadam industrial belt", bullets: ["We coordinate directly with equipment owners and contractors working the Oragadam corridor — site visits arranged as needed for larger equipment.", "Documentation built around what plant/OEM site access typically requires.", "Claim coordination: engineer inspection and repair estimate support available."] },
    commonAreasTitle: "Other crane/CPM insurance areas",
    commonAreasCta: { label: "Crane/CPM Insurance page", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    quickLinks: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Crane Liability Insurance", href: EN("/services/heavy-equipment/crane-liability/") }, { label: "Oragadam location page", href: EN("/locations/oragadam/") }],
    recommendedServices: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }],
    faqs: [
      { q: "Do OEM/auto plants in Oragadam require proof of crane liability cover before site access?", a: "Many plants require contractors and equipment operators to show valid liability cover before allowing access — we help get documentation ready in the format typically expected." },
      { q: "Is crane insurance different for plant-adjacent work versus a standalone construction site?", a: "The core CPM cover is similar, but liability exposure is often higher near active plant operations, so we review whether the liability limit should be higher than a standard site policy." },
    ],
  },

  "crane-insurance-sriperumbudur": {
    slug: "crane-insurance-sriperumbudur",
    seoTitle: "Crane & Heavy Equipment Insurance in Sriperumbudur – CPM Cover",
    seoDesc: "Crane CPM and liability insurance for equipment operating in the Sriperumbudur SIPCOT industrial belt, with documentation support for construction and plant expansion work.",
    heroH1: "Crane and heavy equipment insurance in Sriperumbudur",
    heroP: "Sriperumbudur SIPCOT has continuous factory construction and plant-expansion activity — crane CPM and liability insurance set up for equipment working across multiple industrial sites in the belt.",
    intentSignals: ["crane insurance Sriperumbudur", "CPM insurance Sriperumbudur", "heavy equipment insurance Sriperumbudur SIPCOT", "crane liability Sriperumbudur"],
    whoThisHelps: ["Crane and heavy equipment owners working construction or expansion projects inside Sriperumbudur SIPCOT.", "Equipment rental operators serving multiple factories in the belt.", "Contractors who need liability cover in addition to physical damage cover on active industrial sites."],
    whatYouGet: ["CPM insurance: physical damage during operation, transit and storage.", "Crane Liability insurance: third-party bodily injury and property damage cover for industrial-site work.", "Sum insured aligned to current market value to avoid under-insurance.", "Claim support: engineer assessment coordination for breakdown or accident claims."],
    howSupportWorks: [
      { title: "Step 1 — Share equipment and site details", text: "WhatsApp crane make/model, current value, and which SIPCOT site(s) it's deployed at." },
      { title: "Step 2 — CPM valuation alignment", text: "We align sum insured to current replacement value, not original purchase price." },
      { title: "Step 3 — Policy and liability cover", text: "CPM issued with liability extension — recommended for equipment operating across shared industrial plots." },
    ],
    office: { title: "Coordinated support for Sriperumbudur SIPCOT", bullets: ["We coordinate with contractors and equipment owners working the SIPCOT belt — site visits arranged for larger equipment.", "Familiar with the documentation industrial sites in this belt typically expect from equipment operators.", "Claim coordination: engineer inspection and repair estimate support available."] },
    commonAreasTitle: "Other crane/CPM insurance areas",
    commonAreasCta: { label: "Crane/CPM Insurance page", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    quickLinks: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Crane Liability Insurance", href: EN("/services/heavy-equipment/crane-liability/") }, { label: "Sriperumbudur location page", href: EN("/locations/sriperumbudur/") }],
    recommendedServices: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }],
    faqs: [
      { q: "Can one crane policy cover equipment moving between multiple SIPCOT sites?", a: "Yes — for operators running equipment across more than one site in the belt, we coordinate a single policy and keep documentation consistent." },
      { q: "Is crane liability cover necessary inside an industrial estate like Sriperumbudur SIPCOT?", a: "Yes — shared industrial plots mean equipment often works near other companies' property and staff, so liability cover matters more than on an isolated site." },
    ],
  },

  "crane-insurance-ennore-port": {
    slug: "crane-insurance-ennore-port",
    seoTitle: "Crane & Cargo Handling Equipment Insurance – Ennore Port Belt",
    seoDesc: "Crane and cargo-handling equipment insurance for operators working the Ennore–Kattupalli port belt, covering physical damage, liability and port-linked documentation needs.",
    heroH1: "Crane and cargo-handling equipment insurance near Ennore Port",
    heroP: "Port-linked crane and cargo-handling equipment insurance for the Ennore–Kattupalli belt — physical damage and liability cover set up around how equipment actually operates on port-adjacent sites, not a generic construction-site policy.",
    intentSignals: ["crane insurance Ennore port", "cargo handling equipment insurance Kattupalli", "port equipment insurance Ennore", "crane liability Ennore port belt"],
    whoThisHelps: ["Crane and cargo-handling equipment owners working port-adjacent sites near Ennore or Kattupalli.", "Logistics and warehousing operators who also run lifting equipment for container or cargo handling.", "Contractors on port-linked infrastructure or expansion projects."],
    whatYouGet: ["CPM insurance: physical damage cover for cranes and cargo-handling equipment during operation, transit and storage.", "Crane Liability insurance: third-party bodily injury and property damage cover — important given the higher-value cargo and traffic density around port zones.", "Sum insured aligned to current market value for accurate claim payout.", "Claim support with documentation suited to port-linked incident reporting."],
    howSupportWorks: [
      { title: "Step 1 — Share equipment and site details", text: "WhatsApp equipment type, value, and where it operates — port-adjacent yard, warehouse, or road-side handling." },
      { title: "Step 2 — CPM and liability review", text: "We check sum insured against current value and review whether liability limits should reflect port-zone cargo values." },
      { title: "Step 3 — Policy issued", text: "Documentation set up to match what port-adjacent operators are typically asked to show." },
    ],
    office: { title: "Coordinated support for the Ennore–Kattupalli belt", bullets: ["We support equipment owners and logistics operators working port-adjacent sites in this belt.", "Documentation built for cargo-handling and port-linked operations, not generic construction sites.", "Claim coordination: engineer inspection and repair estimate support available."] },
    commonAreasTitle: "Other crane/CPM insurance areas",
    commonAreasCta: { label: "Crane/CPM Insurance page", href: EN("/services/heavy-equipment/crane-cpm-insurance/") },
    quickLinks: [{ label: "Crane & CPM Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Marine Cargo Insurance near Ennore Port", href: EN("/marine-cargo-insurance-ennore-port/") }, { label: "Ennore location page", href: EN("/locations/ennore/") }],
    recommendedServices: [{ label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }],
    faqs: [
      { q: "Is cargo-handling equipment insurance different from standard crane insurance?", a: "The core CPM structure is similar, but sum insured and liability limits are reviewed differently given the higher cargo values and traffic typically found around port zones." },
      { q: "Do you cover equipment that moves between a warehouse and the port yard?", a: "Yes — we set up cover based on where and how the equipment actually operates, including transit between storage and port-adjacent handling areas." },
    ],
  },

  "marine-cargo-insurance-ennore-port": {
    slug: "marine-cargo-insurance-ennore-port",
    seoTitle: "Marine Cargo Insurance – Ennore & Kattupalli Port Belt",
    seoDesc: "Marine cargo and goods-in-transit insurance for import/export shipments moving through the Ennore–Kattupalli port belt, with documentation support for invoice, packing list and dispatch proof.",
    heroH1: "Marine cargo insurance for the Ennore–Kattupalli port belt",
    heroP: "Import and export cargo moving through Ennore and Kattupalli carries transit risk from port to warehouse and back — marine cargo insurance set up around the actual documentation trail (invoice, packing list, dispatch records) that a port-linked claim depends on.",
    intentSignals: ["marine cargo insurance Ennore port", "import export insurance Kattupalli", "goods in transit insurance Ennore", "port cargo insurance Chennai north"],
    whoThisHelps: ["Import/export businesses moving cargo through Ennore or Kattupalli port.", "Logistics and freight-forwarding operators handling port-to-warehouse transit.", "Warehouse owners near the port belt storing goods in transit before onward dispatch."],
    whatYouGet: ["Marine cargo cover for inland transit and import/export shipments moving through the port belt.", "Guidance on the proof trail insurers expect: invoice, packing list, bill of lading and dispatch records.", "Cover structured around actual shipment value and frequency, not a flat annual guess.", "Claim support: documentation discipline set up before a loss, so a transit claim isn't delayed by missing paperwork."],
    howSupportWorks: [
      { title: "Step 1 — Share shipment pattern", text: "WhatsApp typical cargo type, value range and how often shipments move through the port." },
      { title: "Step 2 — Cover structuring", text: "We recommend single-transit or open-cover policy structure depending on shipment frequency." },
      { title: "Step 3 — Policy issued with clear documentation checklist", text: "We explain exactly what proof is needed at claim time — invoice, packing list, dispatch record — before any shipment moves." },
    ],
    office: { title: "Coordinated support for Ennore–Kattupalli cargo movement", bullets: ["We support import/export and logistics businesses moving cargo through this port belt.", "Documentation checklist matched to what marine cargo claims actually require.", "Claim support: proof-trail guidance from the first shipment, not after a loss."] },
    commonAreasTitle: "Other marine cargo insurance areas",
    commonAreasCta: { label: "Marine Cargo Insurance page", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
    quickLinks: [{ label: "Marine Cargo / Goods-in-Transit Insurance", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") }, { label: "Crane & Cargo Handling Equipment (Ennore Port)", href: EN("/crane-insurance-ennore-port/") }, { label: "Ennore location page", href: EN("/locations/ennore/") }],
    recommendedServices: [{ label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }],
    faqs: [
      { q: "What documents does a marine cargo claim near Ennore port typically need?", a: "Invoice, packing list, bill of lading or dispatch record, and clear evidence of the loss or damage. We set the documentation habit up before the first shipment so a claim isn't delayed later." },
      { q: "Is open-cover marine insurance better than single-shipment policies for regular port cargo?", a: "If shipments are frequent, an open-cover (annual) policy is usually more practical than buying a fresh policy per shipment — we assess based on your actual shipment frequency." },
    ],
  },

  "industrial-fire-insurance-manali-refinery-belt": {
    slug: "industrial-fire-insurance-manali-refinery-belt",
    seoTitle: "Industrial Fire Insurance – Manali Refinery & Process Industry Belt",
    seoDesc: "Industrial fire and specific-perils insurance for process-industry and refinery-adjacent units in the Manali belt, with sum insured and machinery cover aligned to actual plant risk.",
    heroH1: "Industrial fire insurance for the Manali refinery and process-industry belt",
    heroP: "Manali's refinery-adjacent belt has a different risk profile from a typical warehouse or shop — process-industry fire cover set up with sum insured, machinery and business-interruption considerations that match plant-level exposure, not a generic commercial-property policy.",
    intentSignals: ["industrial fire insurance Manali refinery belt", "process industry insurance Manali", "factory fire insurance Manali", "machinery insurance Manali refinery"],
    whoThisHelps: ["Process-industry and manufacturing units operating in or adjacent to the Manali refinery belt.", "Factory owners whose fire risk profile is different from a standard warehouse due to plant machinery and chemical/process handling.", "Businesses needing machinery breakdown cover alongside standard fire and burglary insurance."],
    whatYouGet: ["Standard Fire and Special Perils (SFSP) or Industrial All Risk (IAR) cover matched to process-industry exposure.", "Machinery Breakdown (MBD) cover considered alongside fire, where plant machinery represents a large share of asset value.", "Sum insured aligned to actual replacement value of building, stock and machinery — avoids Average Clause reduction on a claim.", "Claim support: documentation and valuation-proof guidance suited to industrial/process-plant claims."],
    howSupportWorks: [
      { title: "Step 1 — Share plant and asset details", text: "WhatsApp the type of operation, approximate asset/machinery value, and any process/chemical handling involved." },
      { title: "Step 2 — Cover structuring", text: "We assess whether SFSP, IAR or a combined fire + machinery breakdown structure fits your actual risk." },
      { title: "Step 3 — Policy issued with clear terms", text: "Security and maintenance compliance conditions explained upfront so a claim isn't challenged on a technicality." },
    ],
    office: { title: "Coordinated support for the Manali industrial/refinery belt", bullets: ["We work with process-industry and manufacturing units in this belt, not just standard shops or godowns.", "Site visit available for larger plant valuations.", "Claim support: proof trail and valuation guidance set up before any loss happens."] },
    commonAreasTitle: "Other industrial fire insurance areas",
    commonAreasCta: { label: "Fire & Burglary (Commercial Property) page", href: EN("/services/industrial/fire-burglary-insurance/") },
    quickLinks: [{ label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") }, { label: "Manali location page", href: EN("/locations/manali/") }],
    recommendedServices: [{ label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Public Liability for Businesses", href: EN("/services/liability/public-liability/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Is fire insurance different for a process-industry unit compared to a regular warehouse?", a: "Yes — machinery value, business interruption exposure and sometimes chemical/process handling change what cover and sum insured actually make sense. We review this rather than applying a standard warehouse policy." },
      { q: "Should machinery breakdown cover be bundled with fire insurance for a Manali-belt plant?", a: "If machinery represents a significant share of your asset value, it's worth reviewing together — a fire policy alone doesn't cover mechanical or electrical breakdown that isn't caused by fire." },
    ],
  },

  "machinery-breakdown-insurance-guindy": {
    slug: "machinery-breakdown-insurance-guindy",
    seoTitle: "Machinery Breakdown Insurance in Guindy Industrial Estate",
    seoDesc: "Machinery breakdown insurance for factories and manufacturing units in Guindy Industrial Estate, covering mechanical and electrical breakdown separate from fire cover.",
    heroH1: "Machinery breakdown insurance in Guindy Industrial Estate",
    heroP: "Guindy Industrial Estate's factories and manufacturing units carry real machinery value — breakdown insurance covers mechanical and electrical failure that a standard fire policy doesn't, set up with proof of maintenance and usage records that matter at claim time.",
    intentSignals: ["machinery breakdown insurance Guindy", "machinery insurance Guindy Industrial Estate", "factory machinery insurance Guindy", "MBD insurance Chennai"],
    whoThisHelps: ["Factory and manufacturing unit owners in Guindy Industrial Estate.", "Businesses that already have fire insurance but haven't covered mechanical/electrical breakdown separately.", "Operations where machinery downtime has a direct cost — not just repair, but lost production."],
    whatYouGet: ["Machinery Breakdown (MBD) cover: mechanical and electrical failure, separate from fire and burglary perils.", "Guidance on which machines to cover and at what sum insured, based on replacement cost.", "Maintenance and usage record guidance — insurers check this at claim time, so we set the habit up early.", "Claim support if a machine fails: documentation and assessment coordination."],
    howSupportWorks: [
      { title: "Step 1 — Share machinery details", text: "WhatsApp the list of key machines, approximate age and replacement value." },
      { title: "Step 2 — Sum insured and scope check", text: "We recommend which machines genuinely need MBD cover and at what value, avoiding both under- and over-insurance." },
      { title: "Step 3 — Policy issued with maintenance guidance", text: "We explain what maintenance/usage records to keep so a future claim isn't disputed." },
    ],
    office: { title: "Coordinated support for Guindy Industrial Estate", bullets: ["We work with Guindy factories and manufacturing units on machinery-specific cover, not just standard fire/property policies.", "Site visit available to assess machinery value and condition.", "Claim support: assessment coordination if a covered machine breaks down."] },
    commonAreasTitle: "Other industrial insurance in Guindy",
    commonAreasCta: { label: "Guindy location page", href: EN("/locations/guindy/") },
    quickLinks: [{ label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") }, { label: "Guindy location page", href: EN("/locations/guindy/") }],
    recommendedServices: [{ label: "Liability Insurance (Guindy)", href: EN("/liability-insurance-guindy/") }, { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Does my existing fire insurance already cover machinery breakdown in Guindy?", a: "Usually not — standard fire policies cover fire and specified perils, not mechanical or electrical failure. Machinery Breakdown is a separate cover worth reviewing if machinery is a significant part of your asset value." },
      { q: "What records do I need to keep for a machinery breakdown claim?", a: "Maintenance logs and usage records help support a claim — insurers can question payouts on poorly maintained equipment, so we recommend keeping basic service records from the start." },
    ],
  },

  "liability-insurance-guindy": {
    slug: "liability-insurance-guindy",
    seoTitle: "Public & Professional Liability Insurance in Guindy",
    seoDesc: "Public liability and professional indemnity insurance for factories, offices and commercial units in Guindy Industrial Estate and the Guindy–Alandur commercial belt.",
    heroH1: "Public and professional liability insurance in Guindy",
    heroP: "Guindy's mix of factories, offices and commercial units each carry different liability exposure — public liability for factory/industrial premises, professional indemnity for office-based businesses, set up based on what your specific operation actually needs.",
    intentSignals: ["public liability insurance Guindy", "professional indemnity insurance Guindy", "liability insurance Guindy Industrial Estate", "third party liability Guindy"],
    whoThisHelps: ["Factory and manufacturing unit owners in Guindy Industrial Estate needing public liability cover.", "Office-based and professional service businesses in the Guindy–Alandur commercial belt needing professional indemnity.", "Businesses that need liability cover as a condition for a client contract or site access."],
    whatYouGet: ["Public Liability insurance: third-party bodily injury and property damage claims arising from your premises or operations.", "Professional Indemnity basics: cover for claims arising from professional advice or services, where applicable.", "Guidance on liability limits appropriate to your operation size and risk exposure.", "Claim support: documentation guidance if a third-party claim arises."],
    howSupportWorks: [
      { title: "Step 1 — Share your operation type", text: "WhatsApp whether you're factory/industrial, office-based, or a mix, along with rough footfall or client interaction level." },
      { title: "Step 2 — Liability scope and limit review", text: "We recommend public liability, professional indemnity, or both, and a realistic limit based on your exposure." },
      { title: "Step 3 — Policy issued", text: "Documentation kept ready in case a client or site requires proof of cover." },
    ],
    office: { title: "Coordinated support for Guindy liability insurance", bullets: ["We work with both industrial and office-based businesses in the Guindy belt.", "Guidance on which type of liability cover actually applies to your operation.", "Claim support if a third-party claim arises."] },
    commonAreasTitle: "Other liability insurance guidance",
    commonAreasCta: { label: "Public Liability Insurance page", href: EN("/services/liability/public-liability/") },
    quickLinks: [{ label: "Public Liability Insurance", href: EN("/services/liability/public-liability/") }, { label: "Machinery Breakdown Insurance (Guindy)", href: EN("/machinery-breakdown-insurance-guindy/") }, { label: "Guindy location page", href: EN("/locations/guindy/") }],
    recommendedServices: [{ label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Business & MSME Insurance", href: EN("/services/business-msme/business-msme-insurance/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "Do I need public liability or professional indemnity for my Guindy business?", a: "Public liability covers injury/property damage claims from your premises or operations — relevant for factories and shops. Professional indemnity covers claims arising from advice or services — relevant for consultancies and service businesses. Many businesses need only one; we confirm which applies." },
      { q: "Is liability insurance required to bid for contracts or access certain sites in Guindy Industrial Estate?", a: "Some clients and site operators require proof of liability cover before allowing work to begin. We help get documentation ready in the format typically requested." },
    ],
  },

  "contractor-insurance-maraimalai-nagar": {
    slug: "contractor-insurance-maraimalai-nagar",
    seoTitle: "Contractor Insurance (CAR + WC) in Maraimalai Nagar SIPCOT",
    seoDesc: "Contractor All Risk and Workmen Compensation insurance for construction and plant-expansion projects in Maraimalai Nagar SIPCOT and the GST Road industrial corridor.",
    heroH1: "Contractor insurance (CAR + WC) in Maraimalai Nagar",
    heroP: "Maraimalai Nagar SIPCOT has continuous factory construction and expansion work along the GST Road corridor — Contractor All Risk and Workmen Compensation insurance set up with project-period alignment and payroll documentation for industrial-site projects.",
    intentSignals: ["contractor insurance Maraimalai Nagar", "CAR insurance Maraimalai Nagar SIPCOT", "workmen compensation Maraimalai Nagar", "contractor all risk GST Road"],
    whoThisHelps: ["Contractors building or expanding factories inside Maraimalai Nagar SIPCOT.", "Builders working GST Road corridor sites who need proof of CAR/WC before work begins.", "Site owners managing labour across an industrial-estate construction project."],
    whatYouGet: ["Contractor All Risk (CAR): site works covered against fire, damage and specified perils for the project period.", "Workmen Compensation (WC): statutory cover for site labour, matched to correct classification and payroll.", "Guidance on how CAR interacts with neighbouring factory property risk, common on SIPCOT expansion sites.", "Claim support with incident-reporting discipline suited to industrial-estate construction."],
    howSupportWorks: [
      { title: "Step 1 — Share project details", text: "WhatsApp project value, duration, site address inside SIPCOT, and labour headcount." },
      { title: "Step 2 — CAR + WC structuring", text: "We align both covers to the project period and check payroll/classification records support the WC cover." },
      { title: "Step 3 — Policy issued, site-ready", text: "Reporting steps explained upfront — useful on SIPCOT sites where an incident can also affect neighbouring plant property." },
    ],
    office: { title: "Coordinated support for Maraimalai Nagar SIPCOT", bullets: ["We support contractors working construction and expansion projects across the SIPCOT/GST Road corridor.", "Site visit available for larger projects; smaller sites handled over WhatsApp and phone.", "Claim support if a site incident occurs, including coordination with property/liability angles if a neighbouring facility is involved."] },
    commonAreasTitle: "Other contractor insurance areas",
    commonAreasCta: { label: "Contractor / Construction Insurance page", href: EN("/services/construction/contractor-car-wc-insurance/") },
    quickLinks: [{ label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") }, { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") }, { label: "Maraimalai Nagar location page", href: EN("/locations/maraimalai-nagar/") }],
    recommendedServices: [{ label: "Crane & Heavy Equipment Insurance", href: EN("/services/heavy-equipment/crane-cpm-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") }],
    faqs: [
      { q: "Does contractor insurance in Maraimalai Nagar need to account for nearby factories?", a: "It's worth checking — if your project site sits close to an operating factory, we look at whether public liability cover should be added alongside CAR/WC to cover any impact on neighbouring property." },
      { q: "Can WC cover be set up quickly before labour starts on a SIPCOT site?", a: "Yes — share payroll and classification details early and we can have WC in place before work begins, avoiding a gap in statutory cover." },
    ],
  },

  "factory-fire-insurance-ambattur-industrial-estate": {
    slug: "factory-fire-insurance-ambattur-industrial-estate",
    seoTitle: "Factory & Fire Insurance in Ambattur Industrial Estate",
    seoDesc: "Fire, machinery and stock insurance for manufacturing units in Ambattur Industrial Estate, one of Chennai's oldest industrial zones, with sum insured aligned to actual asset value.",
    heroH1: "Factory and fire insurance in Ambattur Industrial Estate",
    heroP: "Ambattur Industrial Estate is one of Chennai's oldest and densest manufacturing zones — factory fire, machinery and stock insurance set up with sum insured checked against actual asset value, not a copy-paste of last year's policy.",
    intentSignals: ["factory insurance Ambattur Industrial Estate", "fire insurance Ambattur Industrial Estate", "manufacturing unit insurance Ambattur", "machinery insurance Ambattur"],
    whoThisHelps: ["Small and mid-size manufacturing unit owners inside Ambattur Industrial Estate.", "Factory operators who've been renewing the same policy for years without reviewing sum insured against current asset value.", "Businesses that need fire cover plus machinery breakdown considered together, not as an afterthought."],
    whatYouGet: ["Standard Fire and Special Perils (SFSP) cover for building, stock and machinery.", "Machinery Breakdown (MBD) cover considered where plant equipment is a significant share of asset value.", "Sum insured review against actual replacement value — avoids Average Clause reduction on a real claim.", "Claim support: documentation and valuation-proof guidance set up before any loss."],
    howSupportWorks: [
      { title: "Step 1 — Share unit and asset details", text: "WhatsApp unit type, approximate building/stock/machinery value, and how long you've held the current policy." },
      { title: "Step 2 — Sum insured and scope check", text: "We check declared value against actual current value — many long-running policies fall behind without anyone noticing." },
      { title: "Step 3 — Policy issued or renewed with correct terms", text: "Security and maintenance compliance conditions explained so nothing is a surprise at claim time." },
    ],
    office: { title: "Coordinated support for Ambattur Industrial Estate", bullets: ["We work with manufacturing units across Ambattur Industrial Estate, not just personal motor/health policies.", "Site visit available for asset valuation on larger units.", "Claim support: proof trail guidance from day one, before any loss happens."] },
    commonAreasTitle: "Other factory & fire insurance areas",
    commonAreasCta: { label: "Factory Insurance page", href: EN("/services/industrial/factory-insurance/") },
    quickLinks: [{ label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") }, { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") }, { label: "Ambattur location page", href: EN("/locations/ambattur/") }],
    recommendedServices: [{ label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") }, { label: "Public Liability", href: EN("/services/liability/public-liability/") }, { label: "Claim Support & Documentation", href: EN("/services/claims-support/") }],
    faqs: [
      { q: "My factory in Ambattur has had the same insurer for years — is that a problem?", a: "Not by itself, but sum insured often falls behind actual asset value over time if it's never reviewed. We check this on renewal so a real claim isn't reduced under the Average Clause." },
      { q: "Does fire insurance cover machinery breakdown too?", a: "No — standard fire cover pays for fire and specified perils, not mechanical or electrical failure. If machinery is a large part of your asset value, Machinery Breakdown cover is worth adding separately." },
    ],
  },

  "commercial-insurance-chennai-north": {
    slug: "commercial-insurance-chennai-north",
    seoTitle: "Commercial Insurance in North Chennai – Fleet, Warehouse & Factory Insurance Agent",
    seoDesc: "Commercial insurance for North Chennai belt: lorry/fleet, warehouse/factory, contractor, marine cargo, and claim support from IRDAI-licensed agent M N Rajendrakumar, Sholavaram.",
    heroH1: "Commercial insurance in North Chennai",
    heroP: "North Chennai's primary commercial insurance support hub — fleet, warehouse, factory, contractor, and marine cargo documentation from our Sholavaram office with 30 years of commercial experience.",
    intentSignals: ["commercial insurance North Chennai", "commercial insurance agent North Chennai", "business insurance Chennai North", "industrial insurance Chennai North", "fleet insurance Chennai North"],
    whoThisHelps: [
      "Transport and logistics companies in the Sholavaram–Manali–Ennore–Madhavaram corridor.",
      "Warehouse and factory owners across North Chennai industrial estates.",
      "Contractors and MSME businesses needing comprehensive commercial coverage.",
    ],
    whatYouGet: [
      "Commercial vehicle and fleet insurance with permit and IDV compliance checks.",
      "Industrial property (fire, stock, machinery) aligned to actual operations.",
      "Marine cargo and goods-in-transit cover for port-linked businesses.",
      "Contractor All Risk, WC, and CPM for construction and industrial project phases.",
      "30 years of North Chennai commercial insurance experience — no generic advice.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us your business type", text: "WhatsApp your business category (transport/warehouse/contractor/factory) and primary location." },
      { title: "Step 2 — Documentation checklist", text: "We send a specific document checklist for your insurance type — no blank forms." },
      { title: "Step 3 — Policy and ongoing support", text: "Policy issued with correct wording. Claim support and renewal reminders included." },
    ],
    office: {
      title: "Sholavaram office – North Chennai commercial insurance hub",
      bullets: [
        "KVT Avenue, Sholavaram — the geographic hub of North Chennai commercial activity.",
        "We support: Manali, Ennore, Tiruvottiyur, Tondiarpet, Madhavaram, Red Hills, Gummidipoondi, Thiruvallur, Ambattur belts.",
        "WhatsApp or call first. Office visit for complex multi-site insurance queries.",
      ],
    },
    commonAreasTitle: "North Chennai areas we support",
    commonAreasCta: { label: "See all service locations", href: EN("/locations/") },
    quickLinks: [
      { label: "Services Overview", href: EN("/services/") },
      { label: "Locations", href: EN("/locations/") },
      { label: "Commercial Insurance Agent Near Me", href: EN("/commercial-insurance-agent-near-me/") },
    ],
    recommendedServices: [
      { label: "Lorry & Fleet Insurance", href: EN("/services/transport-fleet/lorry-insurance/") },
      { label: "Warehouse Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { label: "Marine Cargo Insurance", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { label: "Contractor All Risk", href: EN("/services/construction/contractor-all-risk/") },
      { label: "Claim Support", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Why choose a local Sholavaram agent for North Chennai commercial insurance?", a: "A local licensed agent knows route-specific permit nuances, industrial estate claim patterns, and documentation discipline specific to North Chennai. We're not an aggregator — we're accountable." },
      { q: "Do you handle multi-location commercial insurance in North Chennai?", a: "Yes — single-point coordination for businesses with multiple warehouses, vehicles, or sites across the North Chennai belt. We align all covers to renewal dates and maintain a single document repository." },
    ],
  },

  // ===========================
  // EXPANDED INTENT PAGES (superlative, entity, feature, product x near-me)
  // ===========================
  ...intentExpansionPages,

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
{ "@type": "Place", "name": "Manali–Ennore Industrial & Port Logistics Zone" },

// 13) EXIM / Export-Import corridors & zones
{ "@type": "Place", "name": "Chennai Port Trust (Chennai Harbour)" },
{ "@type": "Place", "name": "Tondiarpet Export Zone" },
{ "@type": "Place", "name": "MEPZ – Tambaram Export Processing Zone" },
{ "@type": "Place", "name": "Kattupalli Shipyard & EXIM Zone" },
{ "@type": "Place", "name": "Ennore–Manali EXIM Logistics Corridor" },

// 14) Additional industrial estates & corridors (30km 360° radius)
{ "@type": "Place", "name": "Guindy Industrial Estate" },
{ "@type": "Place", "name": "Thirumudivakkam Industrial Area" },
{ "@type": "Place", "name": "Maraimalai Nagar SIPCOT" },
{ "@type": "Place", "name": "Thiruvottiyur Industrial Belt" },
{ "@type": "Place", "name": "Vallalar Nagar Industrial Area" },

// 15) NH corridor towns within 30km radius
{ "@type": "Place", "name": "Tiruvallur" },
{ "@type": "Place", "name": "Arakkonam" },
{ "@type": "Place", "name": "Uthukottai" },
{ "@type": "Place", "name": "Minjur" },
{ "@type": "Place", "name": "Ponneri" },
{ "@type": "Place", "name": "Kadambathur" },
{ "@type": "Place", "name": "Karanodai" },
{ "@type": "Place", "name": "Thiruninravur" },
{ "@type": "Place", "name": "Thiruverkadu" },
{ "@type": "Place", "name": "Kundrathur" },

// 16) Additional key Chennai areas (360° coverage)
{ "@type": "Place", "name": "Tambaram" },
{ "@type": "Place", "name": "Chrompet" },
{ "@type": "Place", "name": "Pallavaram" },
{ "@type": "Place", "name": "Guindy" },
{ "@type": "Place", "name": "T. Nagar" },
{ "@type": "Place", "name": "Mylapore" },
{ "@type": "Place", "name": "Egmore" },
{ "@type": "Place", "name": "Kilpauk" },
{ "@type": "Place", "name": "Kolathur" },
{ "@type": "Place", "name": "Villivakkam" },
{ "@type": "Place", "name": "Korattur" },
{ "@type": "Place", "name": "Perungalathur" },
{ "@type": "Place", "name": "Medavakkam" },
{ "@type": "Place", "name": "Sholinganallur" },
{ "@type": "Place", "name": "Thiruvanmiyur" },
{ "@type": "Place", "name": "Washermanpet" }

],

// ===========================
// CONVERSION BLOCKS (HIGH-INTENT ACTION)
// ===========================
conversionBlocks: {
  default: {
    title: "What should you do right now?",
    steps: [
      "WhatsApp your current policy copy (or document photos)",
      "Mention your location and policy type",
      "We review and tell you:",
    ],
    outcomes: [
      "Whether renewal is safe",
      "If documents are missing or weak",
      "If insurer inspection or extra steps apply",
    ],
    primaryCTA: {
      label: "Send policy on WhatsApp ",
      type: "whatsapp",
    },
    secondaryCTA: {
      label: "Call if urgent",
      type: "call",
    },
    trustNote:
      "Initial guidance is document-based. No commitments or guarantees.",
  },

  // High-risk / high-premium variant
  commercial: {
    title: "Before you pay or renew — do this first",
    steps: [
      "Send policy copy / RC / stock details on WhatsApp",
      "Share location and nature of operations",
      "We check insurer-side risks:",
    ],
    outcomes: [
      "Underinsurance / valuation gaps",
      "Disclosure or endorsement mismatch",
      "Claim-readiness and inspection risk",
    ],
    primaryCTA: {
      label: "WhatsApp documents for risk check",
      type: "whatsapp",
    },
    secondaryCTA: {
      label: "Talk to us",
      type: "call",
    },
    trustNote:
      "We explain risks and insurer rules. Final decisions depend on policy terms.",
  },

  expired: {
    title: "Policy expired or expiring today?",
    steps: [
      "Send expiry date + policy copy immediately",
      "Tell us vehicle / business type",
      "We guide the safest next step",
    ],
    outcomes: [
      "Avoid coverage gaps",
      "Understand break-in rules",
      "Prevent future claim disputes",
    ],
    primaryCTA: {
      label: "WhatsApp expiry details now",
      type: "whatsapp",
    },
    secondaryCTA: {
      label: "Urgent call",
      type: "call",
    },
    trustNote:
      "Action depends on insurer rules and gap duration.",
  },
},

assistPopups: {
  exit: {
    enabled: true,
    cooldownHours: 48,

    title: "Before you go — quick policy check?",

    message: [
      "Many insurance issues happen because of small document or renewal gaps that aren’t obvious upfront.",
      "If you want, you can share your policy once and get a clear, honest check."
    ],

    bullets: [
      "Is your renewal or claim process actually safe?",
      "Are any documents missing, weak, or outdated?",
      "Will inspection or extra steps be required later?"
    ],

    primaryCTA: {
      label: "Send policy on WhatsApp",
      type: "whatsapp"
    },

    secondaryCTA: {
      label: "Skip for now",
      type: "dismiss"
    },

    trustNote:
      "Document-based guidance only. No sales pressure. No commitments."
  },

  scroll: {
    enabled: true,

    // percentage of page scroll
    triggerPercent: 85,

    title: "Want a quick sanity check before you decide?",

    message: [
      "If this page matches your situation, a quick document check can prevent mistakes later.",
    ],

    bullets: [
      "Renewal safety and coverage gaps",
      "Missing or mismatched documents",
      "Whether insurer inspection applies"
    ],

    primaryCTA: {
      label: "WhatsApp policy for check",
      type: "whatsapp"
    },

    secondaryCTA: {
      label: "Continue reading",
      type: "dismiss"
    },

    trustNote:
      "We only review documents and explain insurer-side risks."
  }
},


  gmbPosts: [],


  // ══════════════════════════════════════════════════════════════════
  // CONFIDENCE CONTENT — scenarios, gap-fillers, why-us
  // ══════════════════════════════════════════════════════════════════

  confidenceContent: {

    // ── Inline Q&A answering "before I contact" user fears ──
    // Used on every page via UserQuestionsBlock component
    userQuestions: [
      { icon: "📍", q: "I'm 20–30km from Sholavaram — will you serve me?", a: "Yes. Most commercial and vehicle policies can be handled fully via WhatsApp and phone — no visit needed. For site inspections or physical surveys (required by some insurers), we coordinate based on location and policy type. We cover the full 30km belt: Red Hills, Puzhal, Ponneri, Madhavaram, Ambattur, Sriperumbudur, Oragadam corridors and more." },
      { icon: "🗣️", q: "Do you speak Tamil? What about Malayalam or English?", a: "Tamil is our primary working language. We also communicate in English and Malayalam. You can WhatsApp in any of these — we'll respond in the language you're comfortable with." },
      { icon: "🏭", q: "Do you handle import/export and manufacturing businesses?", a: "Yes. We cover Marine Cargo (goods in transit, import/export shipments), factory and warehouse fire insurance, machinery insurance (CPM), contractor all-risk, and public liability — all common for manufacturing and trading units in the industrial belts around Chennai." },
      { icon: "🚛", q: "I have lorries / fleet — do you handle commercial vehicles?", a: "Transport and fleet insurance is one of our core focuses. Single lorry owner, 20-vehicle fleet, goods carriers, trailers — we handle all. We also help with permit and fitness document discipline to avoid claim issues." },
      { icon: "🏥", q: "Do you also handle personal insurance — car, bike, health?", a: "Yes. Car, bike, health/mediclaim and LIC policies are handled alongside commercial lines. Many of our clients take personal and commercial policies together." },
      { icon: "🏗️", q: "I'm running a construction project — is that covered?", a: "Yes. Contractors All Risk (CAR) and Workmen Compensation (WC) are standard for construction projects. We also cover hired plant/equipment and public liability for contractor sites." },
      { icon: "🕒", q: "My policy expired — can I still renew or am I stuck?", a: "You can still renew after expiry, but act fast. The grace window and NCB retention depend on how long the lapse has been. WhatsApp your old policy copy and we'll check what's possible." },
      { icon: "🤝", q: "Will you be available after I buy the policy?", a: "Yes. We stay reachable after sale — for claim guidance, renewal reminders, document checks and any questions that come up. We're not a one-time sale office." },
    ],


    // ── "Why work with us" differentiators ──
    whyUs: [
      { icon: "🏢", title: "Real local office — not a call centre", desc: "Walk-in office in Sholavaram. You meet the same person who handles your policy and claim support." },
      { icon: "📋", title: "Documentation-first approach", desc: "We check your documents, sum insured and wording before you sign. This reduces avoidable claim rejections." },
      { icon: "⏳", title: "30+ years of field experience", desc: "Not just selling policies — we've guided claims, renewals and disputes across transport, industrial and personal lines." },
      { icon: "🔍", title: "We explain before you buy", desc: "No jargon-heavy pitches. We tell you what's covered, what's not, and what documents to keep ready." },
      { icon: "🚫", title: "No hidden agenda", desc: "We work with multiple insurers. We recommend based on your need and risk profile — not commissions." },
      { icon: "📞", title: "Post-policy support", desc: "Policy bought or renewed? We stay reachable for claim guidance, renewal reminders and document checks." },
    ],

    // ── Homepage scenarios — broad, covers all categories ──
    homeScenarios: [
      {
        title: "Importing a crane — needed CPM + transit insurance before unloading",
        situation: "A contractor importing a crane from another state needed Contractors Plant & Machinery (CPM) insurance plus transit coverage. The crane was arriving by trailer and he needed proof of insurance before the transport company would release it.",
        howWeHelped: "We arranged CPM insurance with the correct sum insured based on invoice value, added transit cover for the movement, and got the certificate issued before the delivery date. Documents were shared on WhatsApp for quick verification at the unloading point.",
        waText: "Hi, I need insurance for heavy equipment / crane. Similar to the crane import scenario on your website. Please guide me.",
      },
      {
        title: "Fleet of 12 lorries — one had an accident on NH, needed claim filed fast",
        situation: "A fleet owner with 12 lorries had one vehicle involved in a road accident on the NH belt near Red Hills. The driver was injured, third-party damage was significant, and the police complaint had to be registered. He didn't know what to do first.",
        howWeHelped: "We guided the immediate steps: FIR copy, hospital records, spot photos, and insurer intimation within 24 hours. We prepared the claim documents in the right order so the surveyor could process without back-and-forth. The claim was settled without unnecessary delays.",
        waText: "Hi, I have a fleet / transport insurance situation. One of my vehicles had an accident. Please guide me on claim steps.",
      },
      {
        title: "Warehouse fire — stock proof was wrong, guided correct documentation",
        situation: "A warehouse owner near Manali industrial area had a fire incident. When the claim was filed, the insurer found that the stock declaration didn't match the actual stock. The sum insured was also lower than actual value. The claim was at risk of being reduced significantly.",
        howWeHelped: "We helped reconstruct the stock proof trail (purchase invoices, delivery challans, stock register) and explained the shortfall to the owner. For the renewal, we corrected the sum insured and set up a proper stock declaration discipline so future claims would not face this issue.",
        waText: "Hi, I need warehouse / factory insurance guidance. I want to make sure my stock and sum insured are correct. Please help.",
      },
      {
        title: "First-time car insurance buyer — confused between third-party and comprehensive",
        situation: "A young professional in Sholavaram was buying his first car. He was confused about whether third-party insurance was enough, what zero depreciation means, and whether add-ons like roadside assistance are worth it. He had read multiple conflicting articles online.",
        howWeHelped: "We explained the difference in simple terms: third-party covers others, comprehensive covers your car too. We showed him exactly what happens during a claim with and without add-ons, and helped him choose based on his car value and usage pattern — not upselling.",
        waText: "Hi, I'm buying a new car and need guidance on car insurance — comprehensive vs third-party, add-ons etc. Please help.",
      },
      {
        title: "Contractor needed both CAR + WC insurance for a construction site",
        situation: "A contractor starting a new construction project in the Poonamallee belt was told by the project owner that he needs Contractors All Risk (CAR) and Workmen Compensation (WC) insurance. He had no idea what these policies actually cover or what documents are needed.",
        howWeHelped: "We explained CAR covers the project works and materials, WC covers worker injuries. We helped him get the right sum insured for both based on project value and worker count, issued certificates before the project start date, and set up a document checklist for any on-site incidents.",
        waText: "Hi, I need CAR + Workmen Compensation insurance for a construction project. Please guide me on coverage and documents needed.",
      },
      {
        title: "Policy expired 3 months ago — worried about losing NCB and starting fresh",
        situation: "A lorry owner's policy had expired 3 months back. He was worried that he'd lost his No Claim Bonus (NCB) and would have to pay full premium again. He also wasn't sure if the expired period created any legal issues for the vehicle on road.",
        howWeHelped: "We checked his NCB status with the previous insurer, clarified the grace period rules, and arranged renewal with NCB protection where applicable. We also flagged the third-party liability gap during the expired period and got the new policy started immediately.",
        waText: "Hi, my vehicle policy expired a few months back. I need to renew it. Please check if I can retain my NCB.",
      },
    ],

    // ── Homepage gap-filler questions — process/trust/fear ──
    homeGapQuestions: [
      { q: "What if I've never bought this type of insurance before?", a: "That's exactly when guidance matters most. We explain what the policy covers, what documents you need, and what common mistakes to avoid — before you commit to anything. You don't need to be an expert. That's our job." },
      { q: "What happens when I send a WhatsApp message?", a: "You'll get a reply (usually within a few hours during business hours). We'll ask a few questions about your situation — vehicle details, property type, etc. Then we'll explain your options honestly, including what's covered and what's not. No pressure to buy immediately." },
      { q: "Will you try to sell me the most expensive policy?", a: "No. We work with multiple insurers and recommend based on your actual need and risk. A lorry owner on NH needs different coverage than a car owner in the city. We explain the trade-offs and you decide." },
      { q: "Do I need to visit your office or can everything be done online?", a: "Most things can be done via WhatsApp and phone — document sharing, policy issuance, renewal checks. For some cases (vehicle inspection, complex claims), an office visit or on-site check may be needed. We'll tell you upfront." },
      { q: "What if my claim gets rejected? Can you help then?", a: "We guide the claim process from day one — correct documentation, timely intimation, proper proof trail. If there's a rejection, we help you understand why and what options remain. But our focus is preventing rejection by getting it right the first time." },
      { q: "How is this different from buying insurance online directly?", a: "Online portals sell policies fast but don't guide you on sum insured accuracy, wording gaps, or claim documentation. We fill that gap — especially for commercial policies where one wrong detail can reduce your claim settlement by lakhs." },
    ],

    // ── Service-specific scenarios (keyed by category/service) ──
    serviceScenarios: {
      "transport-fleet": {
        "lorry": [
          { title: "Lorry overturned on NH — driver injured, cargo damaged", situation: "A lorry loaded with steel coils overturned near Red Hills toll. The driver had injuries, cargo was partially damaged, and the road was blocked. The owner needed to file FIR, insurance claim for vehicle + cargo, and handle third-party liability simultaneously.", howWeHelped: "We prioritized: hospital first, FIR second, insurer intimation within 6 hours. We prepared the document set in order — FIR copy, hospital records, RC, permit, fitness certificate, loading invoice. The surveyor visit was arranged next day and claim processing started without delays.", waText: "Hi, my lorry had an accident on the highway. I need claim guidance urgently." },
          { title: "New lorry purchase — confused about own damage vs third-party", situation: "A first-time lorry owner near Madhavaram bought a new vehicle on loan. The financer required comprehensive insurance but the owner wanted to save money with third-party only. He didn't understand the financial risk.", howWeHelped: "We explained that third-party only covers others — his ₹18 lakh lorry would have zero coverage for own damage, fire or theft. We helped choose comprehensive with the right IDV, tied the policy to the hypothecation requirement, and set up renewal reminders.", waText: "Hi, I'm buying a new lorry and need guidance on insurance — comprehensive vs third-party." },
        ],
        "fleet": [
          { title: "Fleet of 20 trucks — renewal chaos, different expiry dates", situation: "A transport operator in the NH belt had 20 vehicles with policies expiring on different dates across 3 insurers. Some had lapsed, NCB was unclear, and two vehicles had pending claims. Managing renewals was a nightmare.", howWeHelped: "We audited all 20 policies, created a master sheet with expiry dates, NCB status, and claim history. We consolidated renewals where possible, flagged lapsed vehicles for immediate action, and set up a staggered renewal calendar so he'd never miss a date again.", waText: "Hi, I have a fleet of vehicles and need help organizing policies and renewals. Please guide me." },
        ],
        "commercial-vehicle": [
          { title: "Commercial vehicle permit issue — policy rejected at checkpoint", situation: "A goods vehicle was stopped at a state border checkpoint because the insurance certificate didn't match the permit type. The driver was fined and the vehicle was held until the documentation was corrected.", howWeHelped: "We verified the permit category (national/state/contract carriage), matched it with the policy declaration, and got a corrected certificate issued same-day. We also checked the fitness certificate and RC to prevent similar issues.", waText: "Hi, I have a commercial vehicle insurance issue related to permit/document mismatch. Please help." },
        ],
      },
      "industrial": {
        "warehouse": [
          { title: "Godown flooded — stock damaged but declaration was outdated", situation: "A warehouse near Manali had flooding during heavy rains. Stock worth ₹35 lakh was damaged but the policy had stock declared at ₹15 lakh (from the last renewal). The insurer applied the average clause and offered to pay only proportional to declared value.", howWeHelped: "We explained the average clause impact, helped with whatever proof was available for the actual stock, and negotiated the best possible outcome. For renewal, we set up quarterly stock declarations and correct sum insured to prevent this from happening again.", waText: "Hi, I need warehouse insurance guidance. I want to make sure my stock declaration and sum insured are correct." },
        ],
        "factory": [
          { title: "Factory electrical fire — claim delayed due to missing maintenance logs", situation: "A small factory in the industrial belt had an electrical fire. The insurer asked for electrical maintenance and inspection records as part of the claim process. The factory owner had never maintained these records.", howWeHelped: "We helped gather whatever records were available (electrician bills, AMC contracts, audit reports) and presented them properly. For the renewed policy, we set up a basic maintenance log template and quarterly check reminders so future claims would have proper documentation.", waText: "Hi, I need factory insurance guidance. I want to make sure I have proper documentation for fire coverage." },
        ],
      },
      "heavy-equipment": {
        "crane-cpm": [
          { title: "Crane hired for a project — who insures it, owner or hirer?", situation: "A crane was hired for a 6-month construction project. The project contractor assumed the crane owner's insurance would cover it. The crane owner assumed the contractor's CAR policy would cover it. Neither had checked — and both were partially wrong.", howWeHelped: "We clarified: the crane owner needs CPM insurance on the crane itself. The contractor's CAR policy covers the project works, not hired equipment. We helped the crane owner get CPM coverage and the contractor add hired plant coverage to his CAR policy.", waText: "Hi, I need guidance on crane / CPM insurance — who should insure hired equipment and what coverage is needed." },
        ],
        "crane-liability": [
          { title: "Crane lifting accident at site — third-party injury and property damage", situation: "During a lifting operation, a crane's load slipped and damaged a neighbouring property wall. A worker was also injured. The crane operator had CPM but no liability coverage. The property owner and worker both filed claims.", howWeHelped: "We assessed the situation: CPM covers the crane machine, but liability (injury + property damage to third parties) needs separate Public Liability or Crane Liability coverage. We helped the operator understand the gap, arranged emergency medical support documentation, and set up proper liability coverage for future operations.", waText: "Hi, I need crane liability insurance guidance. I want to understand what coverage I need for third-party risks during crane operations." },
        ],
      },
      "construction": {
        "contractor-all-risk": [
          { title: "Construction site theft — materials stolen overnight, no watchman proof", situation: "Construction materials worth ₹8 lakh were stolen from a project site overnight. The contractor had CAR insurance but the claim was questioned because there was no watchman log, no CCTV, and the FIR was filed 3 days late.", howWeHelped: "We guided the FIR process (better late than never with documented reasons), helped prepare an inventory of stolen items with purchase invoices, and submitted the claim with a clear timeline. For future projects, we set up basic site security documentation requirements as part of the insurance setup.", waText: "Hi, I need CAR insurance guidance for a construction project. I want to understand theft coverage and documentation requirements." },
        ],
      },
      "marine": {
        "marine-cargo-goods-in-transit": [
          { title: "Goods damaged during interstate transit — who files the claim?", situation: "A shipment of machinery parts from Mumbai to Chennai was damaged during transit. The buyer in Chennai discovered the damage upon unpacking. Neither the buyer nor seller was sure who should file the insurance claim — the sender who shipped it, or the receiver who owned the goods.", howWeHelped: "We clarified: the policy holder (usually the one who arranged the marine cargo insurance) files the claim. We helped identify the policy, gather transit documents (lorry receipt, packing list, invoice), documented the damage with photos on arrival, and filed the claim with proper proof of transit damage vs pre-existing damage.", waText: "Hi, I need marine cargo / goods-in-transit insurance guidance. I have goods that were damaged during transportation." },
        ],
      },
      "personal": {
        "car-insurance": [
          { title: "Car accident at junction — other driver at fault but no witnesses", situation: "A car owner had an accident at a junction in Sholavaram. The other driver was at fault, but there were no witnesses and the other driver denied responsibility. The car owner wanted to file a claim but didn't know if he could claim without proving fault.", howWeHelped: "We explained: for own damage under comprehensive policy, fault doesn't matter — your insurer pays for your car repair. For third-party recovery (from the other driver's insurer), you need proof. We helped file the own-damage claim with police complaint, spot photos, and garage estimate. Clean documentation meant quick settlement.", waText: "Hi, I had a car accident and need help filing an insurance claim. Please guide me on the process and documents needed." },
        ],
        "health-insurance": [
          { title: "Planned surgery — hospital says insurance won't cover it", situation: "A family in Sholavaram had health insurance but when they planned a knee surgery, the hospital's insurance desk said the procedure wasn't covered under their plan. The family was confused because they'd been paying premiums for 5 years.", howWeHelped: "We reviewed their policy wording and found the procedure was actually covered — but had a specific waiting period clause that had already passed. The hospital desk had given incorrect information. We connected with the TPA directly, got pre-authorization approved, and the surgery was covered as per policy terms.", waText: "Hi, I need health insurance guidance. I have a question about whether my planned medical procedure is covered under my policy." },
        ],
      },
    },

    // ── Service-specific gap questions ──
    serviceGapQuestions: {
      "transport-fleet": [
        { q: "What if my lorry/vehicle is older than 5 years — will I get good coverage?", a: "Yes, but IDV (Insured Declared Value) matters a lot for older vehicles. We calculate the right IDV based on current market value so you're neither overpaying premiums nor underinsured at claim time." },
        { q: "My driver doesn't have a proper license — does that affect the claim?", a: "Yes, significantly. If the driver doesn't have a valid license matching the vehicle type at the time of an accident, the own-damage claim can be rejected. We check these basics during policy setup itself." },
        { q: "I run vehicles across states — do I need different insurance for each state?", a: "No, the motor insurance policy is valid across India. But permits (national/state/contract carriage) must match what's declared on the policy. We verify this during setup." },
      ],
      "industrial": [
        { q: "My godown stores different types of goods at different times — how do I insure that?", a: "Stock declaration should reflect the maximum value typically stored, not just what's there today. We help you set the right sum insured and show you how to maintain declaration discipline that holds up during claims." },
        { q: "Do I need separate fire insurance and burglary insurance?", a: "Some policies bundle both (Standard Fire & Special Perils + Burglary). We check what risks your specific location and stock type actually face and recommend accordingly — no unnecessary add-ons, no dangerous gaps." },
      ],
      "heavy-equipment": [
        { q: "I'm hiring a crane for 3 months — do I need annual insurance?", a: "Short-term CPM policies can cover specific project durations. If you hire equipment frequently, annual coverage may be more economical. We compare both options for you." },
        { q: "Does CPM insurance cover the operator/driver too?", a: "CPM covers the machine — not the operator's injuries. For operator/worker injuries, you need Workmen Compensation insurance. We help you set up both together." },
      ],
      "construction": [
        { q: "The project owner is asking for insurance certificates — what exactly do they want?", a: "Usually they need: CAR (Contractors All Risk) certificate showing project value and period, and WC (Workmen Compensation) certificate showing worker count and coverage. We help generate these in the format project owners typically accept." },
      ],
      "personal": [
        { q: "I'm comparing insurance online and your quotes — will the premium be the same?", a: "The base premium is fixed by the insurer regardless of where you buy. The difference is in guidance: we check if the IDV is right, if the add-ons match your risk, and if the documentation will hold during a claim. Online portals don't do that." },
        { q: "Can I switch my insurer at renewal without losing anything?", a: "Yes, you can port your motor or health insurance to a different insurer. We help you compare options, transfer NCB, and ensure no coverage gap during the switch." },
      ],
    },
  },
};
