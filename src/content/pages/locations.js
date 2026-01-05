import { EN } from "./_paths";

export const locationPages = {
  sholavaram: {
    slug: "sholavaram",
    href: EN("/locations/sholavaram"),
    h1: "Insurance guidance in Sholavaram (Chennai Outskirts) — Commercial-first",
    metaDesc:
      "Sholavaram-based insurance consultant. Commercial, transport and industrial guidance for nearby NH/industrial belts with claim-ready documentation discipline.",
    geoSignals: ["Sholavaram", "Karanodai", "Red Hills Toll belt", "Madhavaram"],
    whyThisArea: [
      "Surrounded by continuous transport and industrial movement",
      "High exposure to storage + third-party interactions",
    ],
    servicesFocus: [
      "Transport / fleet guidance",
      "Warehouse / godown / factory guidance",
      "MSME / shop / office packages",
      "Claim support",
    ],
    recommendedLinks: [
      { title: "Transport / Fleet / Lorry", desc: "NH belt operational coverage", href: EN("/services/transport-fleet-lorry-insurance"), chips:["Service"] },
      { title: "Warehouse / Godown / Factory", desc: "Fire + stock risk clarity", href: EN("/services/warehouse-godown-factory-insurance"), chips:["Service"] },
      { title: "Highway belt risks", desc: "Why NH areas behave differently", href: EN("/commercial-authority/highway-business-risks"), chips:["Authority"] },
    ],
    faqs: [
      { q:"Are you physically based in Sholavaram?", a:"Yes. Sholavaram is our base office area and we support nearby belts within practical reach." },
    ],
  },

  "red-hills-toll-belt": {
    slug: "red-hills-toll-belt",
    href: EN("/locations/red-hills-toll-belt"),
    h1: "Red Hills Toll belt — NH-facing transport & commercial risk guidance",
    metaDesc:
      "NH belt insurance guidance for transport operators, roadside businesses and godowns around Red Hills Toll. Focus: third-party exposure, wording alignment and claim workflow discipline.",
    geoSignals: ["Red Hills Toll belt", "NH corridors", "Sholavaram", "Madhavaram"],
    whyThisArea: [
      "NH-facing incident probability + third-party involvement is higher",
      "Claim workflow discipline and timelines matter more here",
    ],
    servicesFocus: [
      "Transport / lorry / fleet guidance",
      "Third-party liability exposure guidance",
      "Godown/stock risk support",
      "Claim reporting workflow guidance",
    ],
    recommendedLinks: [
      { title: "Transport / Fleet / Lorry", desc: "Operational coverage clarity", href: EN("/services/transport-fleet-lorry-insurance"), chips:["Service"] },
      { title: "Fleet docs checklist", desc: "Docs that speed approvals", href: EN("/commercial-authority/fleet-insurance-docs-checklist"), chips:["Checklist"] },
    ],
    faqs: [
      { q:"Why is NH belt risk different?", a:"More third-party interaction, faster escalation, and higher chance of wording/proof disputes if documentation is weak." },
    ],
  },

  madhavaram: {
    slug: "madhavaram",
    href: EN("/locations/madhavaram"),
    h1: "Madhavaram — logistics & industrial belt insurance guidance",
    metaDesc:
      "Insurance guidance for Madhavaram logistics/industrial movement: warehouse/factory risk, fleet exposure and claim-ready documentation discipline.",
    geoSignals: ["Madhavaram", "Logistics belt", "Sholavaram", "Red Hills Toll"],
    whyThisArea: [
      "Logistics movement + storage exposure",
      "Industrial fire load + water ingress risk seasonally",
    ],
    servicesFocus: [
      "Warehouse / factory guidance",
      "Fleet / commercial vehicle guidance",
      "Public liability guidance",
      "Domestic support when needed",
    ],
    recommendedLinks: [
      { title: "Warehouse / Godown / Factory", desc: "Stock + fire risk clarity", href: EN("/services/warehouse-godown-factory-insurance"), chips:["Industrial"] },
      { title: "Stock declaration explained", desc: "Proof clarity", href: EN("/commercial-authority/stock-declaration-how-it-works"), chips:["Authority"] },
    ],
    faqs: [
      { q:"Do you cover both commercial and domestic here?", a:"Yes. Commercial/industrial is primary; domestic support is available when needed." },
    ],
  },

  "manali-ennore-belt": {
    slug: "manali-ennore-belt",
    href: EN("/locations/manali-ennore-belt"),
    h1: "Manali / Ennore belt — industrial risk guidance (warehouse • factory • liability)",
    metaDesc:
      "Industrial belt guidance for Manali/Ennore: electrical fire load, storage exposure, liability risk and documentation discipline for claim readiness.",
    geoSignals: ["Manali", "Ennore", "Industrial zone", "Chennai outskirts"],
    whyThisArea: ["Heavy industrial activity", "Higher compliance + safety expectation patterns"],
    servicesFocus: ["Warehouse/factory guidance", "Public liability", "Transit/marine guidance", "Claim support"],
    recommendedLinks: [
      { title: "Warehouse / Godown / Factory", desc: "Industrial property risk clarity", href: EN("/services/warehouse-godown-factory-insurance"), chips:["Service"] },
      { title: "Claim Support", desc: "Timelines + proof discipline", href: EN("/services/claim-support"), chips:["Claims"] },
    ],
    faqs: [],
  },
};
