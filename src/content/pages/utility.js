import { EN } from "./_paths";

export const utilityPages = {
  about: {
    href: EN("/about"),
    h1: "About — M N Rajendrakumar Insurance Services (Sholavaram)",
    metaDesc:
      "Sholavaram-based insurance consultant with 30+ years field experience supporting commercial, transport and industrial risks across Chennai outskirts belts.",
    blocks: [
      {
        title: "Who we are",
        text:
          "We provide claim-first insurance guidance anchored to real operations in NH and industrial belts across Chennai outskirts.",
      },
      {
        title: "What we focus on",
        bullets: [
          "Commercial, transport and industrial risks (primary)",
          "Domestic support for key Chennai areas (secondary)",
          "Policy wording + valuation + proof discipline (claim readiness)",
        ],
      },
      {
        title: "Where we operate",
        bullets: [
          "Sholavaram base office",
          "Red Hills Toll belt, Madhavaram, nearby NH/industrial clusters",
          "Chennai major areas for domestic support",
        ],
      },
    ],
  },

  contact: {
    href: EN("/contact"),
    h1: "Visit & Contact",
    metaDesc:
      "Contact M N Rajendrakumar Insurance Services in Sholavaram. WhatsApp or call for claim-first guidance in Chennai outskirts belts.",
  },

  reviews: {
    href: EN("/reviews"),
    h1: "Customer Reviews",
    metaDesc:
      "Customer feedback highlighting clarity, responsiveness and documentation-first guidance.",
  },
};
