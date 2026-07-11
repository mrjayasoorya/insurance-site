// ===========================
// INTENT EXPANSION DATA
// Superlative, Entity, Feature/Benefit, and Product x Near-Me intent pages
// ===========================

const EN = (p) => `/en${p}`;

export const intentExpansionPages = {

  // ===========================
  // SUPERLATIVE / ENTITY TYPE
  // ===========================

  "best-insurance-company-chennai": {
    slug: "best-insurance-company-chennai",
    seoTitle: "Best Insurance Company in Chennai — Compare & Choose the Right Insurer",
    seoDesc: "Looking for the best insurance company in Chennai? Compare top insurers, understand what makes a company reliable, and get expert guidance from a 4.9★ rated, 30+ year IRDAI licensed insurance agent.",
    heroH1: "Best insurance company in Chennai — how to choose the right one",
    heroP: "There is no single 'best' insurance company — the right insurer depends on your policy type, claim track record, and local support. Here is how to evaluate companies and make the right choice with expert guidance.",
    intentSignals: ["best insurance company in Chennai", "best insurance company Chennai", "top insurance company Chennai", "best insurance provider Chennai", "best insurance brand Chennai", "insurance company near me Chennai"],
    whoThisHelps: [
      "People searching for the best insurance company but unsure how to compare beyond brand names.",
      "Vehicle owners, families, and business owners who want reliable claim settlement — not just low premium.",
      "Anyone tired of online aggregators that show the cheapest option, not the best fit.",
    ],
    whatYouGet: [
      "Understand what makes an insurance company truly 'best' — claim settlement ratio, cashless network, and local support.",
      "Comparison framework: how to evaluate New India, United India, ICICI Lombard, HDFC ERGO, Bajaj Allianz, and others for YOUR need.",
      "Expert recommendation based on your specific policy type, location, and requirements — not a generic list.",
      "We work with 15+ insurance companies — we match you to the right insurer, not push one brand.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us what you need", text: "WhatsApp or call with your insurance type (car/health/commercial/property) and what matters most to you (price, claim speed, cashless network)." },
      { title: "Step 2 — We shortlist the best options", text: "Based on 30 years of claim handling experience, we recommend 2-3 insurers that fit your exact situation. No bias — we work with all major companies." },
      { title: "Step 3 — Compare and decide", text: "We explain the differences in plain language. You choose. We handle the documentation." },
    ],
    comparisonTable: {
      title: "How to actually evaluate 'best'",
      intro: "Brand recognition isn't the same as fit — here's what matters more.",
      columns: ["What you're checking", "Weak signal", "Strong signal"],
      rows: [
        ["Claim settlement", "Marketing claims about speed", "Actual track record for your policy type"],
        ["Cashless network", "\"Wide network\" claims", "Confirmed tie-up with your specific hospital/garage"],
        ["Local support", "Call center only", "A person who knows your case, reachable directly"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance", href: EN("/policies/health-insurance/") },
      { label: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Which is the best insurance company in Chennai?", a: "It depends on your policy type. For motor claims, New India and ICICI Lombard have strong local networks. For health, Star Health and HDFC ERGO have wide cashless hospitals in Chennai. We help you pick based on YOUR specific need — not a generic ranking." },
      { q: "Why should I use an agent instead of buying directly from a company?", a: "A licensed agent like us works with 15+ insurance companies. We compare options for you, handle all documentation, and support you during claims — something no company's customer care line can match with local knowledge." },
      { q: "Do you charge extra for your service?", a: "No. The premium you pay is the same whether you buy directly or through us. Our commission is built into the premium by the insurance company. You get expert guidance at no extra cost." },
      { q: "How do I know which company will settle my claim fastest?", a: "We track claim settlement patterns across companies based on 30 years of handling. We share real data — not marketing claims — to help you decide." },
    ],
  },

  "best-insurance-agent-chennai": {
    slug: "best-insurance-agent-chennai",
    seoTitle: "Best Insurance Agent in Chennai — IRDAI Licensed, 30+ Years, 4.9★ Google Rating",
    seoDesc: "Looking for the best insurance agent in Chennai? M N Rajendrakumar Insurance Services: IRDAI licensed, 30+ years experience, 4.9★ Google rating, 15+ insurer network. Car, health, commercial, industrial insurance.",
    heroH1: "Best insurance agent in Chennai — what to look for",
    heroP: "The best insurance agent is not the one with the biggest office — it is the one who handles your claims correctly, explains your coverage honestly, and is available when you need help. Here is what makes a good agent.",
    intentSignals: ["best insurance agent in Chennai", "best insurance agent Chennai", "top insurance agent Chennai", "insurance agent near me Chennai", "good insurance agent Chennai", "trusted insurance agent Chennai"],
    whoThisHelps: [
      "People who want a reliable, experienced insurance agent — not an online aggregator or call center.",
      "Vehicle owners and families looking for someone who will actually help during claims.",
      "Business owners who need a single-point insurance advisor for all their commercial needs.",
    ],
    whatYouGet: [
      "IRDAI licensed agent with 30+ years of continuous practice — not a part-time advisor.",
      "4.9★ Google rating from 100+ verified reviews — real customer feedback, not paid testimonials.",
      "Multi-insurer network: we work with 15+ companies including New India, United India, ICICI Lombard, HDFC ERGO, Bajaj Allianz, and more.",
      "Claim support that matters: we guide documentation, coordinate with insurers, and follow up until settlement.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Contact us", text: "WhatsApp or call. Tell us your insurance need — new policy, renewal, or claim help." },
      { title: "Step 2 — Expert assessment", text: "We review your requirements, suggest the right coverage, and recommend the best-fit insurer." },
      { title: "Step 3 — Ongoing support", text: "Policy issued. Renewal reminders. Claim guidance when you need it. One agent, lifelong support." },
    ],

    personaGuideTitle: "What are you looking for?",
    personaGuide: [
      {
        label: "Individual or family (car, bike, health, life)",
        forWhom: "You want a policy that's actually right for you, explained in plain language, from someone reachable when a claim happens.",
        points: [
          "We explain coverage in whichever language is easiest for you — Tamil, English, or Malayalam — not just insurer jargon.",
          "You don't need to know insurance terms beforehand; tell us the vehicle or situation and we ask the right questions.",
          "Doorstep service and WhatsApp support for renewals, so you're not taking time off work to visit an office.",
        ],
        ctaLabel: "WhatsApp — personal insurance",
        waText: "Hi, I'm looking for the right car/bike/health insurance and want an agent who can guide me properly.",
      },
      {
        label: "Business owner (SME, factory, fleet, contractor)",
        forWhom: "You need commercial cover set up correctly the first time, since a wrong declaration or gap becomes expensive at claim time.",
        points: [
          "30+ years handling commercial cases — factory, fleet, contractor, marine cargo, liability — not just personal lines.",
          "One advisor across multiple policy types, instead of a different specialist agent for each one.",
          "Claim-first documentation approach: proof and disclosures set up correctly at issuance, not scrambled together after a loss.",
        ],
        ctaLabel: "WhatsApp — business insurance",
        waText: "Hi, I run a business and I'm evaluating insurance agents for our commercial insurance needs. Can you tell me more?",
      },
      {
        label: "Comparing agent vs. online aggregator",
        forWhom: "You've seen the online price and want to know if an agent is actually worth it, or just a markup.",
        points: [
          "The premium is identical whether you buy directly, through an aggregator, or through us — our commission is built in by the insurer, not added to your price.",
          "What differs is what happens before you buy (IDV/sum insured checks, add-on relevance) and after a claim (someone accountable, not a support ticket).",
          "We're happy to show you the same quote you'd get online — then explain what we'd check or flag before you commit to it.",
        ],
        ctaLabel: "WhatsApp — compare agent vs online",
        waText: "Hi, I want to understand the real difference between buying insurance online vs through an agent like you.",
      },
    ],

    comparisonTable: {
      title: "Agent vs. online aggregator vs. a random local agent",
      intro: "\"Best\" depends on what you're optimising for. Here's an honest three-way comparison.",
      columns: ["What matters", "Online aggregator", "A random local agent", "Us"],
      rows: [
        ["Premium", "Lowest listed price", "Same as online, sometimes marked up", "Same as online — no markup"],
        ["Coverage guidance", "Self-service filters, easy to pick wrong add-ons", "Depends entirely on that agent's experience", "30+ years across personal and commercial lines"],
        ["Claim support", "Call center / app ticket", "Varies — may not specialise in your case type", "Personal coordination, documentation-first"],
        ["Reachability", "Chatbot or queue", "Depends on the individual agent's availability", "Direct WhatsApp/phone, same advisor every time"],
        ["Language support", "English-only interface typically", "Varies", "Tamil, English, Malayalam"],
        ["Accountability if something goes wrong", "Diffuse — no single person owns your case", "Depends on the agent", "One licensed advisor, one number, answerable to you"],
      ],
    },

    guideSections: [
      {
        title: "How to actually evaluate 'best' before you choose",
        intro: "Not marketing points — a practical checklist you can use on any agent, including us.",
        points: [
          "Ask how long they've handled your specific policy type (personal auto is very different experience from factory/fleet commercial risk).",
          "Ask what happens step-by-step if you need to file a claim — a real answer sounds specific, not vague reassurance.",
          "Check if they're reachable directly (phone/WhatsApp to a person) versus routed through office staff or a call center.",
          "Ask if the premium changes based on how you buy — it shouldn't; if an agent quotes higher than the insurer's listed price, that's a red flag.",
          "Verify their IRDAI license number independently on the IRDAI website — a genuine agent will give it to you without hesitation.",
        ],
      },
      {
        title: "For business owners: what changes at commercial scale",
        intro: "Individual and commercial insurance need different things from an agent.",
        points: [
          "Documentation discipline matters more — a missing invoice or wrong worker classification can cost a claim entirely, not just delay it.",
          "You want one advisor who understands your business across policy types (factory + fleet + WC + liability), not four separate specialists who don't talk to each other.",
          "Renewal timing across multiple policies needs tracking — ask if the agent offers a consolidated view, or if you're expected to track each one yourself.",
        ],
      },
    ],

    scenarios: [
      {
        title: "Family comparing online price against an agent",
        situation: "A family found a car insurance quote online and wanted to know if going through an agent meant paying more.",
        howWeHelped: "We showed the identical premium, then flagged that their online IDV selection was set too low — corrected before purchase, same price, better protection.",
        waText: "Hi, I found an online insurance quote and want to check if an agent gives me the same price with better guidance.",
      },
      {
        title: "SME owner picking an advisor for the first time",
        situation: "A small manufacturing business had never used a dedicated insurance agent — one policy was bought years ago through a walk-in agent who was no longer reachable.",
        howWeHelped: "We reviewed their existing cover, corrected an outdated sum insured, and became their ongoing point of contact for renewals and claims.",
        waText: "Hi, I run a small business and I'm looking for a dedicated insurance advisor for the first time. Can you help?",
      },
    ],

    recommendedServices: [
      { label: "All Insurance Services", href: EN("/services/") },
      { label: "Car Insurance", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance", href: EN("/policies/health-insurance/") },
      { label: "Locations We Serve", href: EN("/locations/") },
    ],
    faqs: [
      { q: "What makes M N Rajendrakumar the best insurance agent in Chennai?", a: "30+ years of IRDAI licensed practice, 4.9★ Google rating, multi-insurer network (15+ companies), and documentation-first approach. We focus on correct coverage and claim readiness — not just selling policies." },
      { q: "Do you serve all of Chennai?", a: "Yes. Our physical office is in Sholavaram, but we serve all Chennai — North, South, Central, and West — plus Tamil Nadu industrial belts. Chennai city and its outskirts are our priority coverage area, and most work is handled via WhatsApp and phone." },
      { q: "What insurance types do you handle?", a: "Car, bike, health, life (LIC), commercial vehicle, fleet, warehouse, factory, contractor, marine cargo, fire, liability, and more. Both personal and commercial insurance." },
      { q: "How is an agent different from PolicyBazaar or online portals?", a: "Online portals show you the cheapest option. We show you the right option. We handle your documentation, support claims in person, and are accountable — you have a real person to call, not a ticket number." },
      { q: "How do I verify you're actually IRDAI licensed and not just claiming to be?", a: "Our IRDAI license number is verifiable independently on the official IRDAI website — we share it on request and it's published on our trust/verification page. Always check this before committing to any agent." },
      { q: "Do you serve locations outside Chennai city, across Tamil Nadu?", a: "Yes. Chennai city and its outskirts are our top priority, but we support customers and businesses across Tamil Nadu, particularly for commercial and high-premium cases." },
    ],
  },

  "trusted-insurance-services-chennai": {
    slug: "trusted-insurance-services-chennai",
    seoTitle: "Trusted Insurance Services in Chennai — 30+ Years, IRDAI Licensed, 4.9★ Rated",
    seoDesc: "Trusted insurance services in Chennai: IRDAI licensed agent with 30+ years experience, 15+ insurer partners, and 4.9★ Google rating. Car, health, commercial, industrial insurance with claim support.",
    heroH1: "Trusted insurance services in Chennai",
    heroP: "Trust in insurance is built by handling claims correctly — not by advertising. With 30+ years of continuous practice and 4.9★ Google rating, our trust is earned through real claim outcomes.",
    intentSignals: ["trusted insurance services Chennai", "trusted insurance company Chennai", "reliable insurance agent Chennai", "trustworthy insurance Chennai", "genuine insurance agent Chennai"],
    whoThisHelps: [
      "People who have been burned by unreliable agents or delayed claims and want someone trustworthy.",
      "First-time insurance buyers who want guidance they can trust.",
      "Business owners looking for a long-term insurance partner they can rely on.",
    ],
    whatYouGet: [
      "IRDAI license verification: our license is verifiable on the IRDAI website — full regulatory compliance.",
      "30+ years of uninterrupted practice: we have handled thousands of policies and claims across personal and commercial lines.",
      "4.9★ Google rating: read real reviews from real customers about their actual experience.",
      "15+ insurer relationships: New India, United India, ICICI Lombard, HDFC ERGO, Bajaj Allianz, Star Health, and more.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Verify our credentials", text: "Check our IRDAI license, Google reviews, and insurer partnerships before you commit. We encourage verification." },
      { title: "Step 2 — Share your requirement", text: "WhatsApp or call with your insurance need. We give honest guidance — including when insurance is NOT the right solution." },
      { title: "Step 3 — Transparent process", text: "Clear documentation, no hidden terms, and claim support you can count on." },
    ],
    comparisonTable: {
      title: "How to check if an agent is genuinely trustworthy",
      intro: "Anyone can claim to be trustworthy — here's what's actually verifiable.",
      columns: ["Trust signal", "How to verify"],
      rows: [
        ["IRDAI license", "Check the license number on the official IRDAI website — we share ours on request"],
        ["Google rating", "Read the actual reviews on Google Maps, not a screenshot"],
        ["Accountability", "Ask if you're reaching a named person or a rotating call center"],
      ],
    },

    recommendedServices: [
      { label: "All Services", href: EN("/services/") },
      { label: "Car Insurance Guide", href: EN("/policies/car-insurance/") },
      { label: "About Us", href: EN("/about/") },
      { label: "Contact", href: EN("/contact/") },
    ],
    faqs: [
      { q: "How do I verify that this is a genuine IRDAI licensed agent?", a: "We are IRDAI licensed under No. 1427274, verifiable on the official IRDAI website. We display it on our office and communications. You can also check our Google Business Profile for verified business status." },
      { q: "Why should I trust a local agent over a large company's branch?", a: "A local licensed agent has personal accountability. We know you by name, handle your claims personally, and our reputation depends on every single customer outcome. Large branches rotate staff — we don't." },
      { q: "What if I have a bad experience?", a: "We have a 4.9★ rating from 100+ reviews because we take every case seriously. If something goes wrong, you speak directly to the principal — not a complaint desk. That is the advantage of working with a trusted local agent." },
    ],
  },

  "top-rated-insurance-chennai": {
    slug: "top-rated-insurance-chennai",
    seoTitle: "Top Rated Insurance Agent in Chennai — 4.9★ Google Rating, 100+ Reviews",
    seoDesc: "Top rated insurance agent in Chennai with 4.9★ Google rating and 100+ verified reviews. IRDAI licensed, 30+ years experience. Car, health, commercial insurance with expert claim support.",
    heroH1: "Top rated insurance agent in Chennai — 4.9★ Google rating",
    heroP: "Our 4.9★ rating isn't paid for — it's earned through 30+ years of correct claim handling, honest guidance, and being available when customers need help. Read real reviews and decide for yourself.",
    intentSignals: ["top rated insurance Chennai", "highest rated insurance agent Chennai", "5 star insurance agent Chennai", "best rated insurance Chennai", "top rated insurance company Chennai", "insurance agent with best reviews Chennai"],
    whoThisHelps: [
      "People who check Google ratings and reviews before choosing an insurance provider.",
      "Customers who have had bad experiences elsewhere and want a proven, reviewed agent.",
      "Anyone who values real customer feedback over marketing promises.",
    ],
    whatYouGet: [
      "4.9★ Google rating from 100+ verified reviews — check our Google Business Profile.",
      "Reviews mention: quick response, honest advice, claim support, documentation help, and accessibility.",
      "30+ years of practice means consistent quality — not a new startup with a few good reviews.",
      "Multi-insurer network ensures recommendations are based on your need, not our commission.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Check our reviews", text: "Search 'M N Rajendrakumar Insurance' on Google Maps. Read the reviews. Then decide." },
      { title: "Step 2 — Contact us", text: "WhatsApp or call with your insurance requirement. First consultation is always free and honest." },
      { title: "Step 3 — Experience the difference", text: "See why 100+ customers rated us 4.9★ — through actual service, not sales pressure." },
    ],
    comparisonTable: {
      title: "What makes a rating actually meaningful",
      intro: "A star rating alone doesn't tell the full story — this does.",
      columns: ["What to check", "Weak signal", "Strong signal"],
      rows: [
        ["Review volume", "A handful of reviews", "100+ reviews over years, not a launch spike"],
        ["Review content", "Generic \"good service\" comments", "Specific claim/renewal experiences described"],
        ["Consistency", "High rating, but recent reviews trending down", "Rating held steady over a long period"],
      ],
    },

    recommendedServices: [
      { label: "All Services", href: EN("/services/") },
      { label: "Insurance Policy Guides", href: EN("/policies/") },
      { label: "Our Locations", href: EN("/locations/") },
      { label: "Contact Us", href: EN("/contact/") },
    ],
    faqs: [
      { q: "Is the 4.9★ rating genuine?", a: "Yes. All reviews are on Google Maps from verified Google accounts. We have never paid for or incentivized reviews. Read them yourself — they mention specific claim experiences and interactions." },
      { q: "How many reviews do you have?", a: "100+ reviews on Google Maps as of 2025. We consistently maintain 4.9★ because our service quality doesn't drop after you buy a policy." },
      { q: "What do customers say about your claim support?", a: "Most reviews highlight our claim documentation guidance, quick response time, and honest advice. Several customers mention that we helped them with claims other agents couldn't handle." },
    ],
  },

  // ===========================
  // FEATURE / BENEFIT KEYWORDS
  // ===========================

  "affordable-insurance-chennai": {
    slug: "affordable-insurance-chennai",
    seoTitle: "Affordable Insurance in Chennai — Best Value Coverage Without Compromising Claims",
    seoDesc: "Affordable insurance in Chennai that doesn't mean cheap coverage. Get the right balance of premium, coverage, and claim reliability from a 4.9★ rated agent with 15+ insurer options.",
    heroH1: "Affordable insurance in Chennai — value, not just low price",
    heroP: "The cheapest policy is rarely the best deal. Affordable insurance means the right coverage at a fair price — where your claim actually gets paid. Here's how to find real value.",
    intentSignals: ["affordable insurance Chennai", "cheap insurance Chennai", "low cost insurance Chennai", "budget insurance Chennai", "best value insurance Chennai", "cost effective insurance Chennai"],
    whoThisHelps: [
      "People comparing premiums online but unsure if the cheapest option will actually pay claims.",
      "Families and vehicle owners who want good coverage within a budget.",
      "Small business owners who need to balance insurance costs with adequate protection.",
    ],
    whatYouGet: [
      "Multi-insurer comparison: we check premiums across 15+ companies to find the best value for YOUR specific need.",
      "Coverage vs. cost analysis: we explain exactly what you lose by choosing a cheaper policy — so you decide with full information.",
      "Add-on guidance: which add-ons are worth paying for and which are unnecessary for your situation.",
      "No upselling: we recommend what you need, not what earns us the highest commission.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your requirement and budget", text: "WhatsApp or call. Tell us what insurance you need and what you can comfortably spend." },
      { title: "Step 2 — We find the best value", text: "We compare options across multiple insurers and show you 2-3 choices with clear trade-offs explained." },
      { title: "Step 3 — Decide with confidence", text: "You pick the option that fits your budget AND your coverage needs. We handle all documentation." },
    ],
    comparisonTable: {
      title: "Cheapest vs. affordable — not the same thing",
      intro: "The lowest listed price and genuine value often diverge exactly where it matters.",
      columns: ["What matters", "Cheapest option", "Affordable (right-fit) option"],
      rows: [
        ["IDV/sum insured", "Often set low to cut premium", "Set to realistic value"],
        ["Add-ons", "Stripped to the bare minimum", "Kept if genuinely relevant to your risk"],
        ["Claim payout", "Can be reduced by exclusions you didn't notice", "Matches what you actually expected"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance Guide", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Bike Insurance Guide", href: EN("/policies/bike-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Is cheap insurance a bad idea?", a: "Not always — but the cheapest option often has exclusions, lower IDV, or no add-ons that matter during claims. We help you understand what you're actually getting for the price." },
      { q: "Can you help me reduce my premium?", a: "Yes. We check NCB eligibility, voluntary deductible options, to find legitimate ways to reduce your premium without cutting important coverage." },
      { q: "Do you charge a fee for comparing options?", a: "No. Our comparison and guidance is free. The premium you pay is the same as buying directly from the insurer." },
    ],
  },

  "hassle-free-insurance-claim": {
    slug: "hassle-free-insurance-claim",
    seoTitle: "Hassle-Free Insurance Claim Support in Chennai — Documentation & Follow-Up Help",
    seoDesc: "Hassle-free insurance claim support in Chennai. We handle claim documentation, insurer coordination, and follow-up so you don't have to chase your own money. 30+ years claim handling experience.",
    heroH1: "Hassle-free insurance claims in Chennai — we handle the paperwork",
    heroP: "Insurance claims shouldn't be stressful. Most rejections and delays happen because of documentation gaps — not because the company is unfair. We make claims hassle-free by getting the paperwork right from day one.",
    intentSignals: ["hassle-free insurance claim", "easy insurance claim Chennai", "insurance claim help Chennai", "insurance claim support", "smooth insurance claim process", "no hassle insurance Chennai"],
    whoThisHelps: [
      "People whose claims were delayed or rejected because of documentation issues.",
      "Vehicle owners dealing with accident claims who don't know what to do first.",
      "Business owners with commercial claims who can't afford delays.",
    ],
    whatYouGet: [
      "Step-by-step claim documentation guidance — what to collect, when, and in what format.",
      "Insurer coordination: we communicate with the insurance company's claims team on your behalf.",
      "Follow-up discipline: we track claim status and escalate when timelines are missed.",
      "Prevention approach: we set up your policy documentation correctly so claims don't face issues later.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Report the incident", text: "Call or WhatsApp immediately after the incident. We guide you on the critical first-hour steps — FIR, photos, intimation." },
      { title: "Step 2 — We build the claim file", text: "We compile all required documents, check for gaps, and submit a clean claim file to the insurer." },
      { title: "Step 3 — Track to settlement", text: "We follow up with the insurer, coordinate surveyor visits, and keep you updated until your claim is settled." },
    ],
    comparisonTable: {
      title: "Claim timelines — documented vs. undocumented",
      intro: "The single biggest factor in claim speed is documentation quality, not insurer goodwill.",
      columns: ["Claim type", "With documentation gaps", "With clean documentation"],
      rows: [
        ["Motor own-damage", "Weeks to months", "7–15 days"],
        ["Health cashless", "Can stall at approval", "Same-day to 3 days"],
        ["Health reimbursement", "30+ days, repeated queries", "15–30 days"],
      ],
    },

    recommendedServices: [
      { label: "Claim Support Services", href: EN("/services/claims-support/") },
      { label: "Car Insurance Claims", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance Claims", href: EN("/policies/health-insurance/") },
      { label: "Commercial Claims", href: EN("/services/claims-support/claim-support/") },
    ],
    faqs: [
      { q: "Why do insurance claims get rejected?", a: "The top reasons: incomplete documentation, late intimation, undisclosed pre-existing conditions (health), policy lapse, and incorrect declared values. We prevent most of these by setting up documentation correctly from the start." },
      { q: "Can you help with a claim that was already rejected?", a: "Possibly. We review why it was rejected, check if the rejection is valid, and if there are grounds for appeal, we help you resubmit with correct documentation." },
      { q: "How long does a typical claim take?", a: "It depends on the claim type. Motor own-damage: 7-15 days. Health cashless: same-day to 3 days. Health reimbursement: 15-30 days. We can't speed up the insurer, but we can eliminate documentation delays on your end." },
    ],
  },

  "doorstep-insurance-service-chennai": {
    slug: "doorstep-insurance-service-chennai",
    seoTitle: "Doorstep Insurance Service in Chennai — Home & Office Visit for Policy & Claims",
    seoDesc: "Doorstep insurance service in Chennai. Our agent visits your home or office for policy issuance, renewals, and claim documentation. No need to visit our office — we come to you.",
    heroH1: "Doorstep insurance service in Chennai — we come to you",
    heroP: "Can't visit our office? No problem. For policy discussions, renewals, and claim documentation, we visit your home or business location across Chennai. Most initial work is handled via WhatsApp — visits are for document collection and verification.",
    intentSignals: ["doorstep insurance service Chennai", "home visit insurance agent Chennai", "insurance agent who visits home Chennai", "office visit insurance Chennai", "insurance at your doorstep Chennai"],
    whoThisHelps: [
      "Busy professionals who can't take time off to visit an insurance office.",
      "Senior citizens who find it difficult to travel for insurance paperwork.",
      "Business owners who want insurance handled at their office or site.",
    ],
    whatYouGet: [
      "Home or office visits across Chennai for policy discussions, document collection, and renewals.",
      "WhatsApp-first workflow: 80% of work is completed digitally. Visits are for signatures, original documents, and verification.",
      "Flexible scheduling: we work around your availability, including evenings and weekends for urgent requirements.",
      "Same agent every time: you deal with one experienced person, not a rotating team.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp your requirement", text: "Send us your insurance need and preferred time/location for a visit." },
      { title: "Step 2 — Digital preparation", text: "We handle most paperwork digitally first — proposals, quotes, document scans. This minimizes visit time." },
      { title: "Step 3 — In-person visit", text: "We visit for document verification, signatures, and any physical inspection coordination needed." },
    ],
    comparisonTable: {
      title: "Office visit vs. doorstep/WhatsApp",
      intro: "Both get the same policy issued — this is what actually differs.",
      columns: ["What matters", "Office visit", "Doorstep / WhatsApp"],
      rows: [
        ["Time cost", "Travel + waiting", "Minimal — most of it happens digitally"],
        ["Documentation", "Same checklist either way", "Prepared digitally first, visit only for signatures"],
        ["Cost", "No difference", "No difference — doorstep isn't a paid add-on"],
      ],
    },

    recommendedServices: [
      { label: "All Insurance Services", href: EN("/services/") },
      { label: "Insurance Renewal Help", href: EN("/insurance-renewal-near-me/") },
      { label: "Claim Support", href: EN("/services/claims-support/") },
      { label: "Contact Us", href: EN("/contact/") },
    ],
    faqs: [
      { q: "Do you charge extra for doorstep visits?", a: "No. Doorstep service is part of how we work. There is no additional charge for home or office visits within Chennai." },
      { q: "Which areas in Chennai do you cover for doorstep service?", a: "All of Chennai — North, South, Central, and West. Including Sholavaram, Red Hills, Ambattur, Anna Nagar, T. Nagar, Velachery, Tambaram, OMR, and industrial areas." },
      { q: "Can you visit my factory/warehouse for commercial insurance?", a: "Yes. For commercial insurance (fleet, warehouse, factory), site visits help us understand your exact requirements better. We can also coordinate insurer inspection visits." },
    ],
  },

  "cashless-health-insurance-chennai": {
    slug: "cashless-health-insurance-chennai",
    seoTitle: "Cashless Health Insurance in Chennai — Network Hospitals, Claim Process & Best Plans",
    seoDesc: "Cashless health insurance in Chennai: compare network hospitals, understand the cashless claim process, and choose the right plan. Expert guidance from a 4.9★ rated agent with 15+ insurer options.",
    heroH1: "Cashless health insurance in Chennai — network hospitals & claim process",
    heroP: "Cashless means the insurer pays the hospital directly — you don't pay upfront. But not every hospital accepts every insurer's cashless card. Here's how to choose a plan with the right hospital network for YOUR area in Chennai.",
    intentSignals: ["cashless health insurance Chennai", "cashless insurance Chennai", "health insurance with cashless hospitals Chennai", "cashless mediclaim Chennai", "best cashless health plan Chennai"],
    whoThisHelps: [
      "Families looking for health insurance with cashless hospitals near their Chennai locality.",
      "People confused about which insurer has the best hospital network in their area.",
      "Senior citizens who want hassle-free hospitalization without upfront payment.",
    ],
    whatYouGet: [
      "Hospital network comparison: we check which insurers have cashless tie-ups with hospitals near YOUR home or office.",
      "Cashless claim process explained: pre-authorization, document requirements, and what to do in emergencies.",
      "Plan comparison: individual vs family floater, room rent limits, co-pay, sub-limits — all explained in plain language.",
      "Insurer recommendation based on your locality's hospital network, not generic rankings.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your locality and family details", text: "WhatsApp your area in Chennai, family size, ages, and any pre-existing conditions." },
      { title: "Step 2 — Hospital network check", text: "We check which insurers have cashless hospitals near your home. This is the most important factor — not just the premium." },
      { title: "Step 3 — Plan recommendation", text: "We recommend 2-3 plans with clear comparison of coverage, limits, and nearby cashless hospitals." },
    ],
    comparisonTable: {
      title: "Planned admission vs. emergency — how cashless actually works",
      intro: "The process differs depending on whether it's planned or an emergency.",
      columns: ["Situation", "What happens"],
      rows: [
        ["Planned admission, network hospital", "Pre-authorization submitted, insurer approves before treatment, cashless settlement"],
        ["Emergency, network hospital", "Treated first, authorization processed alongside admission"],
        ["Emergency, non-network hospital", "Treated first, you pay, then claim reimbursement afterward"],
      ],
    },

    recommendedServices: [
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "All Services", href: EN("/services/") },
      { label: "Contact Us", href: EN("/contact/") },
    ],
    faqs: [
      { q: "Which insurer has the most cashless hospitals in Chennai?", a: "Star Health, HDFC ERGO, and ICICI Lombard have extensive cashless networks in Chennai. But the 'most' overall doesn't matter — what matters is which hospitals are near YOUR home. We check this specifically for your locality." },
      { q: "What happens in an emergency — can I go to any hospital?", a: "In emergencies, you can go to ANY hospital. You get treated first, then submit documents for reimbursement if the hospital isn't in the cashless network. For planned hospitalization, always use a cashless network hospital." },
      { q: "What is pre-authorization for cashless claims?", a: "Pre-authorization means the hospital sends your treatment details to the insurer for approval before treatment (for planned admissions). The insurer confirms the coverage and amount. This ensures cashless settlement." },
      { q: "Can senior citizens get cashless health insurance?", a: "Yes. Several insurers offer senior citizen plans with cashless facility. Pre-existing condition waiting periods vary by insurer. We help you find the best option based on your parent's health profile and nearby hospitals." },
    ],
  },

  // ===========================
  // PRODUCT x NEAR-ME
  // ===========================

  "car-insurance-near-me": {
    slug: "car-insurance-near-me",
    seoTitle: "Car Insurance Near Me in Chennai — Best Rates, Claim Support & Doorstep Service",
    seoDesc: "Car insurance near me in Chennai. Compare rates from 15+ insurers, get the right IDV, choose essential add-ons, and get local claim support from an IRDAI licensed agent with 30+ years experience.",
    heroH1: "Car insurance near me — local agent support in Chennai",
    heroP: "Buying car insurance online gives you a policy. Buying through a local agent gives you a policy PLUS someone who handles your claim when things go wrong. Here's why local support matters for car insurance.",
    intentSignals: ["car insurance near me", "car insurance agent near me", "car insurance near me Chennai", "motor insurance near me", "vehicle insurance near me", "four wheeler insurance near me"],
    whoThisHelps: [
      "Car owners looking for insurance with local claim support — not just an online portal.",
      "People renewing car insurance who want IDV/NCB/add-on checks before renewal.",
      "Car buyers who need first-time insurance with the right coverage for Chennai driving conditions.",
    ],
    whatYouGet: [
      "Premium comparison across 15+ insurers — we find the best rate for your exact car model and year.",
      "IDV (Insured Declared Value) check: ensure your car is insured for the right amount — not under-insured.",
      "Add-on recommendations specific to Chennai: zero depreciation, roadside assistance, engine protection for waterlogging areas.",
      "Local claim support: accident in Chennai? We guide you through FIR, surveyor, garage, and settlement — in person if needed.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp your RC copy", text: "Send your vehicle RC and existing policy (if renewal). We extract all details — you don't fill any forms." },
      { title: "Step 2 — Compare and choose", text: "We send 2-3 best options with premium, IDV, and add-on comparison. You pick." },
      { title: "Step 3 — Policy + claim-ready setup", text: "Policy issued. We set up your documentation so claims are smooth — not just the policy." },
    ],
    comparisonTable: {
      title: "Online-only vs. local agent — same premium, different support",
      intro: "The base premium is identical either way — this is what actually changes.",
      columns: ["What matters", "Online only", "Local agent"],
      rows: [
        ["IDV accuracy", "Auto-filled, easy to miss an error", "Checked against your car's real value"],
        ["Add-on relevance", "Generic upsell list", "Matched to Chennai driving conditions (waterlogging, etc.)"],
        ["Claim support", "Self-service / call center", "Someone who handles it in person if needed"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance Guide", href: EN("/policies/car-insurance/") },
      { label: "Insurance Renewal Help", href: EN("/insurance-renewal-near-me/") },
      { label: "Claim Support", href: EN("/insurance-claim-help/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Is it better to buy car insurance online or from a local agent?", a: "Online gives you the cheapest premium. A local agent gives you the right coverage AND claim support. The premium is the same — but with us, you get someone who handles your claim in person when an accident happens." },
      { q: "What add-ons do I need for a car in Chennai?", a: "We recommend: zero depreciation (for cars under 5 years), engine protection (Chennai flooding areas), and roadside assistance. Other add-ons depend on your driving pattern and car age." },
      { q: "How do I check if my IDV is correct?", a: "WhatsApp your RC and current policy. We check if the IDV matches your car's current market value. Wrong IDV = underpaid claims." },
      { q: "Can you help with car insurance claims in Chennai?", a: "Yes. Accident documentation, surveyor coordination, garage tie-ups, and settlement follow-up. We support the entire claim process — not just sell you the policy." },
    ],
  },

  "health-insurance-near-me": {
    slug: "health-insurance-near-me",
    seoTitle: "Health Insurance Near Me in Chennai — Cashless Hospitals, Best Plans & Claim Help",
    seoDesc: "Health insurance near me in Chennai. Compare plans from 15+ insurers, check cashless hospital networks near your locality, and get expert claim guidance from a 4.9★ rated agent.",
    heroH1: "Health insurance near me — local expert guidance in Chennai",
    heroP: "Health insurance is the most complex insurance product. Wrong plan, wrong hospital network, or missed pre-existing disclosures — and your claim gets rejected when you need it most. Local expert guidance prevents these problems.",
    intentSignals: ["health insurance near me", "health insurance agent near me", "health insurance near me Chennai", "mediclaim near me", "medical insurance near me", "family health insurance near me"],
    whoThisHelps: [
      "Families looking for health insurance with cashless hospitals near their locality in Chennai.",
      "Individuals confused about individual plan vs family floater vs top-up options.",
      "Senior citizens or their children looking for suitable health coverage with manageable premiums.",
    ],
    whatYouGet: [
      "Locality-specific hospital network check: we verify which insurers have cashless hospitals near YOUR home in Chennai.",
      "Plan comparison: coverage amount, room rent limits, co-pay, sub-limits, waiting periods — all explained clearly.",
      "Pre-existing condition guidance: how different insurers handle diabetes, hypertension, and other conditions.",
      "Claim support: cashless pre-authorization help, reimbursement documentation, and insurer follow-up.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share family details", text: "WhatsApp your family members' ages, any medical conditions, and your locality in Chennai." },
      { title: "Step 2 — Hospital network + plan comparison", text: "We check cashless networks near you and recommend 2-3 plans with clear trade-offs." },
      { title: "Step 3 — Policy + claim readiness", text: "Policy issued with all disclosures correctly made. We set up your documentation so claims go smoothly." },
    ],
    comparisonTable: {
      title: "Individual plan vs. family floater",
      intro: "Both are valid — the right choice depends on your family's situation.",
      columns: ["What matters", "Individual plan", "Family floater"],
      rows: [
        ["Sum insured", "Separate for each person", "One shared pool for the whole family"],
        ["Premium", "Higher combined cost", "More affordable overall"],
        ["Risk if one person claims big", "Others unaffected", "Less remains for the rest of the family that year"],
      ],
    },

    recommendedServices: [
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Cashless Health Insurance Chennai", href: EN("/cashless-health-insurance-chennai/") },
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Which health insurance is best for a family in Chennai?", a: "It depends on family size, ages, and medical history. Family floater plans from Star Health, HDFC ERGO, or Care Health are popular — but the best choice depends on cashless hospitals near your area and your specific health conditions." },
      { q: "Can I get health insurance for my parents (senior citizens)?", a: "Yes. Several insurers offer plans for ages 60-80+. Premiums are higher but the coverage is essential. We help find the best balance of coverage and premium for senior citizens." },
      { q: "What is the difference between individual and family floater?", a: "Individual: separate sum insured for each person. Family floater: one shared sum insured for the whole family. Floater is more affordable but the sum insured is shared — if one person has a big claim, less is available for others." },
    ],
  },

  "bike-insurance-near-me": {
    slug: "bike-insurance-near-me",
    seoTitle: "Bike Insurance Near Me in Chennai — Two-Wheeler Insurance with Claim Support",
    seoDesc: "Bike insurance near me in Chennai. Two-wheeler insurance with the right coverage, fair IDV, and local claim support. Compare rates from 15+ insurers. IRDAI licensed agent, 30+ years experience.",
    heroH1: "Bike insurance near me — two-wheeler coverage with local support",
    heroP: "Bike insurance is often bought quickly online for the cheapest price. But when an accident happens, you need someone who knows the claim process. That's where a local agent makes the difference.",
    intentSignals: ["bike insurance near me", "two wheeler insurance near me", "bike insurance near me Chennai", "scooter insurance near me", "two wheeler insurance agent near me", "activa insurance near me"],
    whoThisHelps: [
      "Bike and scooter owners looking for insurance with proper claim support.",
      "People renewing two-wheeler insurance who want to check if their coverage is adequate.",
      "New bike buyers who need guidance on comprehensive vs third-party only.",
    ],
    whatYouGet: [
      "Quick comparison from 15+ insurers — find the best rate for your bike model and year.",
      "Coverage guidance: comprehensive vs third-party only, zero depreciation add-on value explained.",
      "IDV check: is your bike insured for the right value? Under-insurance means underpaid claims.",
      "Local claim support: accident help, FIR guidance, surveyor coordination in Chennai.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp your RC copy", text: "Send your bike RC and existing policy (if renewal). Done in 2 minutes." },
      { title: "Step 2 — Get options", text: "We compare and send 2-3 best options. You choose. No forms to fill." },
      { title: "Step 3 — Instant policy + claim backup", text: "Policy issued digitally. Claim support available whenever you need it." },
    ],
    comparisonTable: {
      title: "Third-party only vs. comprehensive",
      intro: "Third-party is legally mandatory either way — this is about your own bike.",
      columns: ["What matters", "Third-party only", "Comprehensive"],
      rows: [
        ["Cost", "₹482–₹1,193/year (IRDAI-fixed)", "₹2,000–₹5,000/year depending on value/age"],
        ["Your own bike", "Not covered", "Covered (accident, theft, fire)"],
        ["Best for", "Very old bikes, low resale value", "Bikes under 5 years or higher value"],
      ],
    },

    recommendedServices: [
      { label: "Bike Insurance Guide", href: EN("/policies/bike-insurance/") },
      { label: "Car Insurance Near Me", href: EN("/car-insurance-near-me/") },
      { label: "Insurance Renewal Help", href: EN("/insurance-renewal-near-me/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Is third-party bike insurance enough?", a: "Third-party is the legal minimum — it covers damage you cause to others. It does NOT cover damage to your own bike. For bikes under 5 years, comprehensive coverage is strongly recommended." },
      { q: "How much does bike insurance cost?", a: "Third-party only: ₹482-₹1,193/year (fixed by IRDAI). Comprehensive: ₹2,000-₹5,000/year depending on bike value, age, and add-ons. We find the best rate across insurers." },
      { q: "Is zero depreciation worth it for a bike?", a: "For new bikes (under 2-3 years), yes. Without it, you pay 30-50% of parts cost from your pocket during claims. For older bikes, the add-on cost may not justify the benefit." },
    ],
  },

  "life-insurance-near-me": {
    slug: "life-insurance-near-me",
    seoTitle: "Life Insurance Near Me in Chennai — LIC & Term Plans, Expert Guidance",
    seoDesc: "Life insurance near me in Chennai. LIC policies, term insurance, endowment, and pension plans. Expert guidance from a licensed agent with 30+ years experience. Understand what you actually need.",
    heroH1: "Life insurance near me — LIC & term insurance guidance in Chennai",
    heroP: "Life insurance is the most important — and most mis-sold — insurance product. Endowment vs term, LIC vs private, what sum assured you actually need — we explain everything honestly without sales pressure.",
    intentSignals: ["life insurance near me", "LIC agent near me", "life insurance agent near me Chennai", "term insurance near me", "LIC near me Chennai", "life insurance advisor near me"],
    whoThisHelps: [
      "Young professionals and new parents who need life cover but don't know how much or what type.",
      "People confused between LIC endowment, term insurance, and ULIPs.",
      "Families who want to review existing LIC policies and check if coverage is adequate.",
    ],
    whatYouGet: [
      "Honest guidance: term insurance vs endowment — which is right for YOUR situation (not commission-driven advice).",
      "Sum assured calculation: how much life cover you actually need based on income, liabilities, and dependents.",
      "LIC policy review: is your existing LIC policy giving you enough protection? We check and advise.",
      "Claim nominee and documentation guidance: ensure your family can claim without legal complications.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your family situation", text: "WhatsApp or call. Tell us about your family, income, loans, and what you want to achieve with life insurance." },
      { title: "Step 2 — Needs analysis", text: "We calculate the right sum assured and recommend the most suitable plan type — not the one that pays us the highest commission." },
      { title: "Step 3 — Policy and documentation", text: "Policy issued. Nominee details properly set up. Annual premium reminders included." },
    ],
    comparisonTable: {
      title: "Term insurance vs. LIC endowment",
      intro: "Both are valid — they solve different problems.",
      columns: ["What matters", "Term insurance", "LIC endowment"],
      rows: [
        ["Cover for the premium paid", "Maximum cover, lowest cost", "Lower cover, higher cost"],
        ["Maturity payout", "None — pure protection", "Yes — money returned at maturity"],
        ["Best for", "Income replacement for dependents", "Combining savings with some protection"],
      ],
    },

    recommendedServices: [
      { label: "All Insurance Services", href: EN("/services/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Contact Us", href: EN("/contact/") },
      { label: "About Us", href: EN("/about/") },
    ],
    faqs: [
      { q: "Should I buy term insurance or LIC endowment?", a: "Term insurance gives MAXIMUM life cover at LOWEST cost — but no maturity benefit. LIC endowment gives lower cover but returns money at maturity. For pure protection, term insurance is better. For savings + protection, endowment has its place. We help you decide based on your situation." },
      { q: "How much life insurance do I need?", a: "Rule of thumb: 10-15x your annual income minus existing assets. But the exact amount depends on your loans, family dependents, lifestyle costs, and existing savings. We calculate this specifically for you." },
      { q: "Is LIC still a good option?", a: "LIC has the highest claim settlement ratio (98%+) in India. For traditional plans and pension, LIC is very strong. For pure term insurance, private insurers often offer lower premiums. We help you choose the right option — LIC or private." },
    ],
  },

  // ===========================
  // LOCATION × ENTITY (CRITICAL)
  // ===========================

  "insurance-company-anna-nagar": {
    slug: "insurance-company-anna-nagar",
    seoTitle: "Insurance Company & Agent in Anna Nagar, Chennai — All Policies, Local Claim Support",
    seoDesc: "Insurance company services in Anna Nagar, Chennai. Car, health, life, and commercial insurance from a 4.9★ rated IRDAI licensed agent. Doorstep service, multi-insurer comparison, and claim support.",
    heroH1: "Insurance company services in Anna Nagar, Chennai",
    heroP: "Need insurance services in Anna Nagar? We provide multi-insurer coverage — car, health, life, and commercial insurance — with doorstep service and local claim support. Not a branch office — a trusted local agent with 15+ insurer partnerships.",
    intentSignals: ["insurance company Anna Nagar", "insurance agent Anna Nagar", "best insurance Anna Nagar", "insurance services Anna Nagar Chennai", "insurance near Anna Nagar"],
    whoThisHelps: [
      "Anna Nagar residents looking for an insurance agent or company for personal or family coverage.",
      "Local business and shop owners needing commercial insurance guidance.",
      "Families wanting health insurance with cashless hospitals near Anna Nagar.",
    ],
    whatYouGet: [
      "Multi-insurer comparison for car, health, life, and commercial insurance — not limited to one company.",
      "Doorstep service: agent visits your home or office in Anna Nagar for document collection and policy discussion.",
      "Cashless hospital check: we verify which insurers have network hospitals near Anna Nagar (Kaveri, Billroth, Apollo, etc.).",
      "Claim support when you need it — not just policy sales.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Contact us", text: "WhatsApp or call with your insurance requirement. Mention you're in Anna Nagar." },
      { title: "Step 2 — Compare options", text: "We compare across insurers for your specific need and Anna Nagar hospital networks (for health)." },
      { title: "Step 3 — Doorstep completion", text: "We visit Anna Nagar for document collection and policy delivery if needed." },
    ],
    comparisonTable: {
      title: "What Anna Nagar residents typically ask for",
      intro: "A quick reference for the most common needs in this area.",
      columns: ["Need", "What we check"],
      rows: [
        ["Car/bike renewal", "IDV, NCB, add-ons matched to actual usage"],
        ["Health insurance", "Cashless tie-ups with Kaveri, Billroth, Apollo First Med"],
        ["Business/shop cover", "Sum insured matched to real stock/premises value"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance", href: EN("/policies/health-insurance/") },
      { label: "All Services", href: EN("/services/") },
      { label: "All Locations", href: EN("/locations/") },
    ],
    faqs: [
      { q: "Do you have an office in Anna Nagar?", a: "Our office is in Sholavaram, but we provide doorstep service across Anna Nagar. Most work is done via WhatsApp — visits are for document collection and verification." },
      { q: "Which insurance companies do you work with in Anna Nagar?", a: "All major insurers: New India, United India, ICICI Lombard, HDFC ERGO, Bajaj Allianz, Star Health, and 10+ more. We recommend the best fit for your need — not one company." },
    ],
  },

  "insurance-company-tambaram": {
    slug: "insurance-company-tambaram",
    seoTitle: "Insurance Company & Agent in Tambaram, Chennai — Car, Health & Commercial Insurance",
    seoDesc: "Insurance company services in Tambaram, Chennai. Car, health, life, commercial insurance from a 4.9★ IRDAI licensed agent. Multi-insurer comparison, doorstep service, and local claim support.",
    heroH1: "Insurance company services in Tambaram, Chennai",
    heroP: "Looking for insurance in Tambaram and surrounding areas? We serve Tambaram, Chrompet, Pallavaram, and Selaiyur with multi-insurer insurance coverage — car, health, commercial, and more — with doorstep service.",
    intentSignals: ["insurance company Tambaram", "insurance agent Tambaram", "best insurance Tambaram", "insurance services Tambaram Chennai", "insurance near Tambaram"],
    whoThisHelps: [
      "Tambaram, Chrompet, and Pallavaram residents looking for reliable insurance coverage.",
      "Small business owners in the Tambaram commercial area needing commercial insurance.",
      "Families looking for health insurance with cashless hospitals in South Chennai.",
    ],
    whatYouGet: [
      "Multi-insurer comparison across 15+ companies for the best rates and coverage.",
      "Doorstep service: agent visits Tambaram, Chrompet, Pallavaram, and nearby areas.",
      "Health insurance with cashless hospitals near Tambaram: Sundaram Medical, SRM Hospital, etc.",
      "Claim support for accidents and health emergencies — local guidance when you need it.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Contact us", text: "WhatsApp or call with your insurance need. Mention your area in Tambaram/Chrompet/Pallavaram." },
      { title: "Step 2 — Tailored comparison", text: "We compare options based on your requirement and local hospital networks." },
      { title: "Step 3 — Complete at your doorstep", text: "Document collection and policy delivery at your home or office." },
    ],
    comparisonTable: {
      title: "What Tambaram-area residents typically ask for",
      intro: "A quick reference for the most common needs in this area.",
      columns: ["Need", "What we check"],
      rows: [
        ["Car/bike renewal", "IDV, NCB, add-ons matched to actual usage"],
        ["Health insurance", "Cashless tie-ups with Sundaram Medical, SRM Hospital"],
        ["Commercial vehicle / GST Road transport", "Permit and usage disclosure alignment"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance", href: EN("/policies/health-insurance/") },
      { label: "All Services", href: EN("/services/") },
      { label: "All Locations", href: EN("/locations/") },
    ],
    faqs: [
      { q: "Do you serve all of Tambaram area?", a: "Yes — Tambaram East, West, Chrompet, Pallavaram, Pammal, and Selaiyur. Doorstep service available across all these areas." },
      { q: "Which companies do you work with?", a: "15+ insurers including New India, United India, ICICI Lombard, HDFC ERGO, Bajaj Allianz, Star Health. We recommend the best fit — not one brand." },
    ],
  },

  "insurance-company-velachery": {
    slug: "insurance-company-velachery",
    seoTitle: "Insurance Company & Agent in Velachery, Chennai — Car, Health & Commercial Insurance",
    seoDesc: "Insurance services in Velachery, Chennai. Car, health, commercial insurance from a 4.9★ IRDAI licensed agent. Multi-insurer comparison, doorstep service, and claim support for Velachery and OMR corridor.",
    heroH1: "Insurance company services in Velachery, Chennai",
    heroP: "Insurance services for Velachery, Medavakkam, Pallikaranai, and the OMR corridor. Multi-insurer comparison, doorstep service, and local claim support from a 4.9★ rated agent.",
    intentSignals: ["insurance company Velachery", "insurance agent Velachery", "best insurance Velachery", "insurance services Velachery Chennai", "insurance near Velachery"],
    whoThisHelps: [
      "Velachery, Medavakkam, and Pallikaranai residents needing personal or family insurance.",
      "IT professionals along the OMR corridor looking for convenient insurance solutions.",
      "Business owners in the Velachery commercial area needing coverage.",
    ],
    whatYouGet: [
      "Multi-insurer comparison for car, health, bike, and life insurance.",
      "Health insurance with cashless hospitals near Velachery and OMR: Global, SRM, Chettinad, etc.",
      "Doorstep service for Velachery, Medavakkam, Pallikaranai, Thoraipakkam, and OMR.",
      "Digital-first process: most work via WhatsApp — quick and convenient for working professionals.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp your requirement", text: "Send RC for vehicle insurance or family details for health insurance. Quick and simple." },
      { title: "Step 2 — Compare and choose", text: "We send options across insurers with clear comparison. You pick what works." },
      { title: "Step 3 — Policy + claim support", text: "Policy issued. Local claim support available for Velachery and surrounding areas." },
    ],
    comparisonTable: {
      title: "What Velachery-area residents typically ask for",
      intro: "A quick reference for the most common needs in this area.",
      columns: ["Need", "What we check"],
      rows: [
        ["Car/bike renewal", "IDV, NCB, add-ons — quick WhatsApp process for working professionals"],
        ["Health insurance", "Cashless tie-ups with Global, SRM, Chettinad"],
        ["Monsoon/flood-prone car cover", "Engine protection add-on, since this area floods seasonally"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance", href: EN("/policies/health-insurance/") },
      { label: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Do you provide doorstep service in Velachery?", a: "Yes. We provide doorstep service across Velachery, Medavakkam, Pallikaranai, and the OMR corridor. Most work is done via WhatsApp — visits for document verification." },
      { q: "Which health insurance has the best hospitals near Velachery?", a: "Star Health, HDFC ERGO, and ICICI Lombard have good cashless networks near Velachery. We check specific hospitals near your exact location before recommending." },
    ],
  },

  "insurance-company-t-nagar": {
    slug: "insurance-company-t-nagar",
    seoTitle: "Insurance Company & Agent in T. Nagar, Chennai — All Insurance Types, Expert Guidance",
    seoDesc: "Insurance company services in T. Nagar, Chennai. Car, health, life, commercial, and shop insurance from a 4.9★ IRDAI licensed agent. Multi-insurer comparison and claim support.",
    heroH1: "Insurance company services in T. Nagar, Chennai",
    heroP: "T. Nagar — Chennai's busiest commercial and residential hub. We serve T. Nagar, Mambalam, Nungambakkam, and surrounding areas with multi-insurer insurance solutions — personal, family, and commercial.",
    intentSignals: ["insurance company T Nagar", "insurance agent T Nagar", "best insurance T Nagar Chennai", "insurance services T Nagar", "insurance near T Nagar"],
    whoThisHelps: [
      "T. Nagar and Mambalam residents looking for personal and family insurance.",
      "Shop owners and textile business owners in T. Nagar needing commercial insurance (fire, stock, liability).",
      "Professionals in Nungambakkam and Kodambakkam looking for convenient insurance.",
    ],
    whatYouGet: [
      "All insurance types: car, health, life, fire, stock, shop, liability — multi-insurer comparison.",
      "Shop and business insurance: fire, burglary, stock, and public liability for T. Nagar commercial establishments.",
      "Health insurance with cashless hospitals near T. Nagar: Apollo, MIOT, Fortis, Kauvery nearby.",
      "Doorstep service for T. Nagar, Mambalam, Nungambakkam, and Kodambakkam.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Contact us", text: "WhatsApp or call with your insurance need. Personal, family, or business — we handle all types." },
      { title: "Step 2 — Customized comparison", text: "We compare across 15+ insurers for your specific situation. Shop insurance included." },
      { title: "Step 3 — Complete at your convenience", text: "Digital documentation or doorstep visit — your choice." },
    ],
    comparisonTable: {
      title: "What T. Nagar residents and businesses typically ask for",
      intro: "A quick reference for the most common needs in this area.",
      columns: ["Need", "What we check"],
      rows: [
        ["Shop/showroom insurance", "Stock value matched to actual inventory (textiles, jewellery, electronics)"],
        ["Health insurance", "Cashless tie-ups with Apollo, MIOT, Fortis, Kauvery"],
        ["Car/bike renewal", "IDV, NCB, add-ons matched to actual usage"],
      ],
    },

    recommendedServices: [
      { label: "All Services", href: EN("/services/") },
      { label: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { label: "Car Insurance", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance", href: EN("/policies/health-insurance/") },
    ],
    faqs: [
      { q: "Do you handle shop insurance for T. Nagar businesses?", a: "Yes. Fire, stock, burglary, and public liability insurance for shops and commercial establishments in T. Nagar. We understand textile and retail business insurance requirements." },
      { q: "Can you visit my T. Nagar office for insurance discussion?", a: "Yes. Doorstep service available for T. Nagar, Mambalam, and surrounding areas. Most preliminary work is done via WhatsApp." },
    ],
  },

  // ===========================
  // NEW SERVICE x LOCATION COMBOS
  // Ports (import/export, marine hull), industrial belts (mining, machinery
  // breakdown), IT/office corridor (office, D&O), and the home belt (land/property)
  // ===========================

  "import-export-cargo-insurance-ennore-port": {
    slug: "import-export-cargo-insurance-ennore-port",
    seoTitle: "Import/Export Cargo Insurance Near Ennore Port, Chennai",
    seoDesc: "Import and export cargo insurance for shipments moving through Kamarajar (Ennore) Port — Incoterms clarity, invoice/LC matching, and claim-ready documentation.",
    heroH1: "Import/export cargo insurance near Ennore Port",
    heroP: "Cargo moving through Kamarajar (Ennore) Port carries transit risk from the moment it leaves the exporter's dock to the moment it clears at the destination — cover that matches your actual trade lane and Incoterms, not a generic marine policy.",
    intentSignals: ["import export insurance ennore port", "cargo insurance ennore", "kamarajar port cargo insurance", "export cargo insurance chennai"],
    whoThisHelps: [
      "Importers/exporters routing shipments through Kamarajar (Ennore) Port.",
      "Freight forwarders and clearing agents coordinating cover on behalf of clients.",
      "Businesses new to EXIM who are unsure who bears risk at each shipping stage (FOB/CIF/etc.).",
    ],
    whatYouGet: [
      "Cover matched to your actual Incoterms — so you know exactly when your risk starts and ends.",
      "Invoice and letter-of-credit matching, so the insured value ties back to real trade documents.",
      "Guidance on declaring the correct shipping line/route rather than an estimate.",
      "Claim support if cargo is damaged or lost in transit, with a clear documentation trail.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share shipment details", text: "WhatsApp the Incoterm, invoice value, and route (port of loading/discharge)." },
      { title: "Step 2 — Cover matched to your trade lane", text: "We align sum insured and cover period to your actual shipment, not a generic template." },
      { title: "Step 3 — Certificate before dispatch", text: "Insurance certificate issued in time for port/customs documentation." },
    ],
    comparisonTable: {
      title: "Common Incoterms — who bears the risk, when",
      intro: "Knowing this determines what you actually need to insure.",
      columns: ["Incoterm", "When your risk starts"],
      rows: [
        ["FOB (Free on Board)", "Once goods are loaded onto the vessel at origin port"],
        ["CIF (Cost, Insurance, Freight)", "Seller insures to destination port — verify what's actually covered"],
        ["EXW (Ex Works)", "From the seller's premises — the longest exposure window for the buyer"],
      ],
    },

    recommendedServices: [
      { label: "Import / Export Cargo Insurance", href: EN("/services/marine/import-export-insurance/") },
      { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { label: "Marine Hull & Inland Vessel Insurance", href: EN("/services/marine/marine-hull-inland-vessel-insurance/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Does cargo insurance cover the whole journey or just the sea leg?", a: "Depends on the policy — warehouse-to-warehouse cover is available and usually recommended, not just port-to-port (as applicable)." },
      { q: "What documents do I need before shipment?", a: "Invoice, packing list, and the Incoterm agreed with your buyer/seller — we align the sum insured to these before issuing cover." },
    ],
  },

  "marine-hull-insurance-kattupalli-port": {
    slug: "marine-hull-insurance-kattupalli-port",
    seoTitle: "Marine Hull Insurance Near Kattupalli Port & Shipyard, Chennai",
    seoDesc: "Marine hull and inland vessel insurance for boats, barges and craft operating near Kattupalli Port and shipyard — survey-backed valuation and claim-ready documentation.",
    heroH1: "Marine hull insurance near Kattupalli Port",
    heroP: "Vessels operating around Kattupalli's port and shipyard need hull cover backed by a proper survey — most valuation disputes and claim delays trace back to not having one lined up before the policy is issued.",
    intentSignals: ["marine hull insurance kattupalli", "vessel insurance kattupalli port", "boat insurance chennai port", "inland vessel insurance chennai"],
    whoThisHelps: [
      "Owners/operators of vessels working near Kattupalli Port and shipyard.",
      "Barge and inland waterway craft operators needing hull and machinery cover.",
      "Businesses needing third-party liability cover for water-based operations.",
    ],
    whatYouGet: [
      "Hull damage cover — collision, grounding, storm, fire.",
      "Machinery and onboard equipment breakdown cover.",
      "Guidance on getting a current survey report done before quoting — this speeds up both the quote and any future claim.",
      "Third-party liability cover for water-based incidents.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share vessel details", text: "WhatsApp vessel type, age, and current survey status (if any)." },
      { title: "Step 2 — Survey-backed valuation", text: "We help line up a current survey if you don't have one, so the sum insured is defensible at claim time." },
      { title: "Step 3 — Policy issued", text: "Hull, machinery and liability cover matched to actual operation (port-based vs open water, as applicable)." },
    ],
    comparisonTable: {
      title: "With a current survey vs. without",
      intro: "This single document is what actually speeds up both the quote and any future claim.",
      columns: ["What matters", "No current survey", "Current survey on file"],
      rows: [
        ["Quoting speed", "Slower — insurer estimates conservatively", "Faster, more accurate valuation"],
        ["Claim dispute risk", "Higher — valuation questioned at claim time", "Lower — value already established"],
      ],
    },

    recommendedServices: [
      { label: "Marine Hull & Inland Vessel Insurance", href: EN("/services/marine/marine-hull-inland-vessel-insurance/") },
      { label: "Import / Export Cargo Insurance", href: EN("/services/marine/import-export-insurance/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Do I need a survey before buying hull insurance?", a: "Not always mandatory, but strongly recommended — a current survey report speeds up both the quote and any future claim (case-dependent)." },
      { q: "Is liability cover included in hull insurance, or separate?", a: "Usually a separate extension or add-on — we check what your operation actually needs before recommending it." },
    ],
  },

  "mining-heavy-industrial-insurance-manali": {
    slug: "mining-heavy-industrial-insurance-manali",
    seoTitle: "Mining & Heavy Industrial Insurance in Manali, Chennai",
    seoDesc: "Mining and heavy industrial insurance for processing and extraction operations in the Manali industrial belt — cover pieced together across categories, not sold as a single off-the-shelf policy.",
    heroH1: "Mining and heavy industrial insurance in Manali",
    heroP: "Manali's industrial estate has genuine mining and heavy processing operations — extraction, processing and transport often sit under one site, which means the insurance usually needs to be structured across categories rather than bought as a single policy.",
    intentSignals: ["mining insurance manali", "heavy industrial insurance manali", "processing plant insurance manali industrial estate"],
    whoThisHelps: [
      "Mining, quarrying and mineral-processing operations in the Manali industrial belt.",
      "Heavy industrial units combining extraction, processing and transport under one site.",
      "Operators unsure whether their existing fire/property policy actually covers processing-specific risk.",
    ],
    whatYouGet: [
      "A cover structure that maps to your actual operation — extraction, processing, and transport handled as distinct exposures, not lumped into one generic policy.",
      "Machinery breakdown cover alongside standard fire/property, since processing equipment failure isn't covered by a fire policy alone.",
      "Guidance on which parts of the operation are commonly under-insured.",
      "Claim support with engineer/surveyor coordination for industrial-scale incidents.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your operation", text: "WhatsApp what the site does — extraction, processing, storage, transport — so we can map the real exposure." },
      { title: "Step 2 — Cover structured by category", text: "We piece together the right combination (property, machinery breakdown, liability) instead of one generic industrial policy." },
      { title: "Step 3 — Documentation and claim readiness", text: "Maintenance records and safety compliance discipline set up so claims aren't delayed later." },
    ],
    comparisonTable: {
      title: "Fire policy alone vs. structured multi-category cover",
      intro: "Mixed operations (extraction + processing + transport) rarely fit under one policy type.",
      columns: ["Risk", "Fire policy alone", "Structured cover"],
      rows: [
        ["Building/stock fire", "Covered", "Covered"],
        ["Processing equipment breakdown", "Not covered", "Covered under machinery breakdown"],
        ["Third-party site incidents", "Not covered", "Covered under liability"],
      ],
    },

    recommendedServices: [
      { label: "Mining / Heavy Industrial Insurance", href: EN("/services/industrial/mining-industrial-insurance/") },
      { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/") },
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
    ],
    faqs: [
      { q: "Does a standard fire policy cover machinery breakdown at a processing plant?", a: "No — machinery breakdown is a separate cover from fire insurance. Most mining/processing sites need both." },
      { q: "Can one policy cover extraction, processing and transport together?", a: "Usually it's structured as a combination of covers rather than one policy — we help you piece it together correctly." },
    ],
  },

  "machinery-breakdown-insurance-oragadam": {
    slug: "machinery-breakdown-insurance-oragadam",
    seoTitle: "Machinery Breakdown Insurance in Oragadam Industrial Belt",
    seoDesc: "Machinery breakdown insurance for factories and industrial units in the Oragadam SIPCOT belt — mechanical/electrical failure cover, separate from fire insurance.",
    heroH1: "Machinery breakdown insurance in Oragadam",
    heroP: "A standard fire policy doesn't pay if a machine fails on its own — no fire, no burglary, just mechanical or electrical breakdown. For Oragadam's auto and engineering units, that gap is usually worth closing given how much machinery value sits on the factory floor.",
    intentSignals: ["machinery breakdown insurance oragadam", "factory insurance oragadam sipcot", "industrial insurance oragadam"],
    whoThisHelps: [
      "Auto-component and engineering factories in the Oragadam SIPCOT belt.",
      "Units with high-value CNC machines, presses or continuous-operation equipment.",
      "Factories that only carry fire insurance and assume it covers mechanical failure too.",
    ],
    whatYouGet: [
      "Cover for sudden mechanical or electrical failure — a gap a standard fire policy doesn't touch.",
      "Help figuring out which machines actually need this cover and at what value.",
      "Consequential loss of profit add-on if breakdown stops production (optional, as applicable).",
      "Guidance on maintenance-record discipline, since that's what insurers check at claim time.",
    ],
    howSupportWorks: [
      { title: "Step 1 — List your key machinery", text: "WhatsApp the machines that would hurt production most if they failed, with approximate replacement value." },
      { title: "Step 2 — Sum insured matched to replacement cost", text: "We size cover to actual replacement value, not the original purchase price." },
      { title: "Step 3 — Policy issued", text: "Machinery breakdown cover set up alongside your existing fire/property policy, not duplicating it." },
    ],
    comparisonTable: {
      title: "Fire policy vs. machinery breakdown — the coverage gap",
      intro: "Confirmed earlier across the site, but worth restating for Oragadam's equipment-heavy units.",
      columns: ["Cause of loss", "Fire policy", "Machinery Breakdown"],
      rows: [
        ["Fire, explosion", "Covered", "Not applicable"],
        ["Sudden mechanical/electrical failure", "Not covered", "Covered"],
        ["Production stoppage from breakdown", "Not covered", "Covered with consequential loss add-on"],
      ],
    },

    recommendedServices: [
      { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/") },
      { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { label: "Mining / Heavy Industrial Insurance", href: EN("/services/industrial/mining-industrial-insurance/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Is machinery breakdown the same as fire insurance?", a: "No — they're separate covers. Fire insurance doesn't pay for a machine that fails on its own without fire or burglary involved." },
      { q: "What decides a smooth machinery breakdown claim?", a: "Two things mainly: sum insured matching actual replacement cost, and basic maintenance records showing the machine wasn't neglected." },
    ],
  },

  "office-insurance-guindy": {
    slug: "office-insurance-guindy",
    seoTitle: "Office Insurance Package in Guindy, Chennai",
    seoDesc: "Office insurance package for Guindy's commercial and IT-park offices — equipment, furniture and business interruption cover, distinct from a retail shop policy.",
    heroH1: "Office insurance package in Guindy",
    heroP: "Guindy's office-heavy areas carry more equipment value than owners often realise once laptops, servers and furniture are added up — cover sized to what your office actually has, not a shop policy stretched to fit.",
    intentSignals: ["office insurance guindy", "guindy it park insurance", "office package insurance chennai"],
    whoThisHelps: [
      "Offices and IT-adjacent businesses in Guindy's commercial estate.",
      "Companies renting office space who assume the landlord's policy covers their equipment (it usually doesn't).",
      "Businesses that outgrew a generic shop policy and need proper equipment + business-interruption cover.",
    ],
    whatYouGet: [
      "Cover centred on equipment (computers, servers, furniture) and business interruption — the cost of not being able to operate.",
      "A proper equipment count instead of a guessed sum insured.",
      "Clarity on what a generic shop package would over- or under-cover for an office.",
      "Guidance on business interruption add-ons if downtime would hurt revenue.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share office details", text: "WhatsApp approximate headcount, equipment list, and whether you rent or own the space." },
      { title: "Step 2 — Right-sized modules", text: "We size equipment and business-interruption cover to what your office actually has and does." },
      { title: "Step 3 — Policy issued", text: "Clear on what's covered and what isn't, so there's no surprise at claim time." },
    ],
    comparisonTable: {
      title: "Shop package vs. office package — why they differ",
      intro: "A shop policy is built around stock; an office has almost none.",
      columns: ["What's covered", "Shop package", "Office package"],
      rows: [
        ["Stock/inventory", "Central focus", "Minimal or not applicable"],
        ["Equipment (laptops, servers)", "Often underweighted", "Sized correctly as the main asset"],
        ["Business interruption", "Sometimes bundled generically", "Matched to actual revenue-at-risk"],
      ],
    },

    recommendedServices: [
      { label: "Office Insurance Package", href: EN("/services/business-msme/office-insurance/") },
      { label: "D&O / Professional Indemnity Insurance", href: EN("/services/liability/professional-liability-do-insurance/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Does my landlord's building insurance cover my office equipment?", a: "Usually not — building insurance typically covers the structure, not your equipment, furniture or business interruption (as applicable)." },
      { q: "Is a shop insurance policy enough for an office?", a: "Not ideally — a shop policy is built around stock, which an office doesn't carry the same way. Office cover needs different modules." },
    ],
  },

  "professional-indemnity-do-insurance-sholinganallur": {
    slug: "professional-indemnity-do-insurance-sholinganallur",
    seoTitle: "D&O / Professional Indemnity Insurance in Sholinganallur (OMR IT Corridor)",
    seoDesc: "Directors & Officers and Professional Indemnity insurance for companies and consultancies along the Sholinganallur/OMR IT corridor.",
    heroH1: "D&O and Professional Indemnity insurance in Sholinganallur",
    heroP: "Companies and consultancies along the OMR IT corridor carry a different risk profile from a factory or shop — decisions, advice and services given, not physical stock — and that's exactly what D&O and Professional Indemnity cover is built for.",
    intentSignals: ["d&o insurance sholinganallur", "professional indemnity insurance omr", "director liability insurance chennai it corridor"],
    whoThisHelps: [
      "IT companies, consultancies and service businesses along the OMR/Sholinganallur corridor.",
      "Directors and officers who want personal liability protection separate from the company's general insurance.",
      "Professional service firms whose real exposure is advice or service delivered, not physical assets.",
    ],
    whatYouGet: [
      "Directors & Officers cover — protection for personal liability arising from management decisions.",
      "Professional Indemnity cover — protection if a client claims loss due to advice, error or omission in service delivery.",
      "Guidance on which cover your business actually needs — the two are often confused.",
      "Claim support with proper incident documentation from the outset.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your business", text: "WhatsApp what your company does and whether you need D&O, Professional Indemnity, or both." },
      { title: "Step 2 — Cover matched to real exposure", text: "We align cover to your actual service/advice risk, not a generic liability template." },
      { title: "Step 3 — Policy issued", text: "Clear on trigger conditions and notification requirements so a future claim isn't delayed by a technicality." },
    ],
    comparisonTable: {
      title: "D&O vs. Professional Indemnity",
      intro: "Often confused, but they protect different things.",
      columns: ["What matters", "D&O", "Professional Indemnity"],
      rows: [
        ["Who's protected", "Directors/officers personally", "The business itself"],
        ["What triggers a claim", "A management decision", "An error or omission in advice/service delivered"],
        ["Typical buyer", "Companies with a board or external investors", "Consultancies and service firms"],
      ],
    },

    recommendedServices: [
      { label: "D&O / Professional Indemnity Insurance", href: EN("/services/liability/professional-liability-do-insurance/") },
      { label: "Office Insurance Package", href: EN("/services/business-msme/office-insurance/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "What's the difference between D&O and Professional Indemnity?", a: "D&O protects directors/officers personally for management decisions; Professional Indemnity protects the business for errors or omissions in advice/service delivered to clients." },
      { q: "Does a startup need D&O insurance?", a: "Often overlooked, but yes if there are external investors or a board — personal liability exposure exists regardless of company size (as applicable)." },
    ],
  },

  "land-property-insurance-sholavaram": {
    slug: "land-property-insurance-sholavaram",
    seoTitle: "Land & Property Insurance in Sholavaram & Red Hills Outskirts",
    seoDesc: "Land and property insurance for vacant, under-construction and completed property in the Sholavaram / Red Hills outskirts belt.",
    heroH1: "Land and property insurance in Sholavaram & Red Hills",
    heroP: "The Sholavaram/Red Hills outskirts belt has a mix of vacant land, under-construction and completed property — cover matched to which stage your property is actually in, since that changes what needs insuring.",
    intentSignals: ["land insurance sholavaram", "property insurance red hills", "vacant land insurance chennai outskirts"],
    whoThisHelps: [
      "Landowners with vacant plots in the Sholavaram/Red Hills belt.",
      "Property owners with under-construction buildings needing interim cover.",
      "Completed-property owners who haven't reviewed valuation in years.",
    ],
    whatYouGet: [
      "Cover matched to your property's actual stage — vacant land, under-construction, or completed.",
      "Guidance on declared value reflecting reconstruction cost, not market/land value — this is the most common source of claim disputes.",
      "A check that title deed and property records are in order before insuring.",
      "Guidance on making sure declared usage (residential/commercial/vacant) matches the policy.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share property stage", text: "WhatsApp whether the property is vacant land, under construction, or completed, plus approximate size/value." },
      { title: "Step 2 — Valuation and usage check", text: "We align declared value to reconstruction cost and confirm usage type matches what's being insured." },
      { title: "Step 3 — Policy issued", text: "Cover set up for the property's actual current stage — not a generic template." },
    ],
    comparisonTable: {
      title: "Cover needs by property stage",
      intro: "What needs insuring changes as your property moves through these stages.",
      columns: ["Stage", "What's typically insured"],
      rows: [
        ["Vacant land", "Boundary wall/structures, limited scope"],
        ["Under construction", "Interim/CAR-style cover for the works in progress"],
        ["Completed property", "Full structure at reconstruction cost, not market value"],
      ],
    },

    recommendedServices: [
      { label: "Land & Property Insurance", href: EN("/services/industrial/land-property-insurance/") },
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Can vacant land be insured?", a: "Yes, though cover is usually limited to specific risks (e.g. boundary wall, structures on it) rather than a full property policy — as applicable." },
      { q: "What's the most common reason property claims get reduced?", a: "Declared value not matching actual reconstruction cost — getting the valuation right upfront avoids this at claim time." },
    ],
  },

  // ===========================
  // PERSONAL LINE x LOCATION COMBOS
  // Individual car/bike/auto/tempo cover for dense residential/commuter
  // zones — parity with the commercial combo-page coverage above.
  // ===========================

  "bike-insurance-tambaram": {
    slug: "bike-insurance-tambaram",
    seoTitle: "Bike Insurance in Tambaram, Chennai — Renewal & Claim Help",
    seoDesc: "Bike and two-wheeler insurance renewal, IDV/NCB checks and claim support for Tambaram, Chrompet and Pallavaram residents.",
    heroH1: "Bike insurance in Tambaram",
    heroP: "Most bike insurance problems in Tambaram come down to renewal mistakes — a wrong IDV, a missed no-claim bonus, an add-on that doesn't fit daily commute usage. Send your renewal notice and I'll check it in a few minutes.",
    intentSignals: ["bike insurance tambaram", "two wheeler insurance tambaram", "bike insurance renewal chrompet"],
    whoThisHelps: [
      "Daily commuters in Tambaram, Chrompet and Pallavaram renewing two-wheeler policies.",
      "New bike owners in the area unsure which add-ons actually matter.",
      "Anyone who's let a policy lapse and needs a clean restart.",
    ],
    whatYouGet: [
      "Renewal check: correct IDV, NCB carry-forward, and add-ons matched to actual usage.",
      "Guidance on Zero Depreciation and Roadside Assistance — only where they genuinely help.",
      "Claim-step clarity if something happens on the daily commute.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your renewal notice", text: "WhatsApp your current policy copy or renewal notice." },
      { title: "Step 2 — We check the numbers", text: "IDV, NCB and add-ons reviewed against what actually fits your bike and usage." },
      { title: "Step 3 — Renewed or fixed", text: "Policy renewed cleanly, or corrected if something was off." },
    ],
    comparisonTable: {
      title: "Renewed blind vs. renewed with a quick check",
      intro: "Most Tambaram-area renewal problems trace back to skipping this.",
      columns: ["What matters", "Renewed blind", "Renewed with a check"],
      rows: [
        ["IDV", "Carried forward unchanged", "Verified against current value"],
        ["NCB", "Assumed correct", "Confirmed and carried forward properly"],
        ["Add-ons", "Same bundle every year", "Reviewed against actual commute usage"],
      ],
    },

    recommendedServices: [
      { label: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { label: "Auto Rickshaw Insurance", href: EN("/services/personal/auto-rickshaw-insurance/") },
      { label: "Insurance Renewal Near Me", href: EN("/insurance-renewal-near-me/") },
    ],
    faqs: [
      { q: "My bike insurance lapsed a few months ago — can it still be renewed?", a: "Depends on how long it's lapsed and the insurer's rules — sometimes an inspection is needed. Send details and we'll check." },
      { q: "Is Zero Depreciation worth it for daily commuting?", a: "Usually yes for bikes under 3-5 years old with regular city usage — we can confirm based on your bike's age and value." },
    ],
  },

  "car-insurance-velachery": {
    slug: "car-insurance-velachery",
    seoTitle: "Car Insurance in Velachery, Chennai — Renewal, IDV & Claims",
    seoDesc: "Car insurance renewal and new policy support for Velachery, Adyar and Guindy residents — IDV, NCB, zero depreciation and claim guidance.",
    heroH1: "Car insurance in Velachery",
    heroP: "Most car insurance issues in Velachery aren't the policy itself — they're renewal mistakes: a wrong IDV, a missed no-claim bonus, or an add-on that doesn't fit. Send your renewal and I'll check it in about 10 minutes.",
    intentSignals: ["car insurance velachery", "car insurance renewal velachery", "car insurance adyar guindy"],
    whoThisHelps: [
      "Car owners in Velachery, Adyar and Guindy renewing or buying new policies.",
      "Families comparing add-ons (Zero Dep, engine protect, RSA) for city + occasional highway use.",
      "Anyone who's had a claim and wants to understand how it affects the next renewal.",
    ],
    whatYouGet: [
      "Renewal check: correct IDV, NCB carry-forward, and add-ons matched to actual usage.",
      "Clear comparison of add-ons that matter for city driving vs highway trips.",
      "Claim-step clarity before you need it — not after.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your renewal notice", text: "WhatsApp your current policy copy or renewal notice." },
      { title: "Step 2 — We check IDV/NCB/add-ons", text: "Reviewed against your car's actual value and usage pattern." },
      { title: "Step 3 — Renewed cleanly", text: "Policy renewed with the right cover, no overpaying for add-ons you don't need." },
    ],
    comparisonTable: {
      title: "City-only add-ons vs. city + highway trips",
      intro: "Add-on relevance changes based on how you actually drive.",
      columns: ["Add-on", "City-only driving", "Regular highway trips"],
      rows: [
        ["Zero Depreciation", "Recommended if under 5 years old", "Recommended if under 5 years old"],
        ["Engine Protect (waterlogging)", "Valuable — Velachery floods seasonally", "Still valuable"],
        ["Roadside Assistance", "Less critical", "More valuable given distance from help"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance Support", href: EN("/services/personal/car-insurance-support/") },
      { label: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { label: "Insurance Renewal Near Me", href: EN("/insurance-renewal-near-me/") },
    ],
    faqs: [
      { q: "What's the most common renewal mistake you see in Velachery?", a: "IDV set too low or too high without checking, and NCB not carried forward correctly from the previous insurer." },
      { q: "Can you help if I want to switch insurers at renewal?", a: "Yes — we compare across 15+ insurers and handle the NCB transfer paperwork." },
    ],
  },

  "auto-rickshaw-insurance-porur": {
    slug: "auto-rickshaw-insurance-porur",
    seoTitle: "Auto Rickshaw Insurance in Porur, Chennai",
    seoDesc: "Auto rickshaw insurance for personal and commercial-permit autos in Porur and Vanagaram — usage clarity, renewal checks and claim steps.",
    heroH1: "Auto rickshaw insurance in Porur",
    heroP: "An auto running on a commercial permit around Porur and Vanagaram needs the usage category on the policy to match how it's actually used — that mismatch is the single biggest reason claims get delayed.",
    intentSignals: ["auto rickshaw insurance porur", "auto insurance vanagaram", "three wheeler insurance porur"],
    whoThisHelps: [
      "Auto rickshaw owners and drivers operating in Porur and Vanagaram.",
      "Owners who rent out their auto and are unsure which usage category applies.",
    ],
    whatYouGet: [
      "Usage clarity — personal vs commercial-permit — matched to policy wording.",
      "Renewal checks on permit and fitness validity alongside the policy.",
      "Claim-step guidance in case of an accident or damage.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share permit and policy details", text: "WhatsApp your permit type and current policy copy." },
      { title: "Step 2 — Usage check", text: "We confirm the policy's usage category actually matches the permit." },
      { title: "Step 3 — Renewed or corrected", text: "Policy renewed cleanly, or corrected if the usage category was wrong." },
    ],
    comparisonTable: {
      title: "Personal vs. commercial-permit usage",
      intro: "This single declaration is what most claim disputes trace back to.",
      columns: ["Usage type", "What it means"],
      rows: [
        ["Personal", "No fare-paying passengers — limited real-world applicability for autos"],
        ["Commercial permit", "Registered for hire — must match the policy's declared usage category"],
      ],
    },

    recommendedServices: [
      { label: "Auto Rickshaw Insurance", href: EN("/services/personal/auto-rickshaw-insurance/") },
      { label: "Bike Insurance Support", href: EN("/services/personal/bike-insurance-support/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "I rent my auto out to a driver — whose name should the policy be in?", a: "The policy is typically in the owner's name regardless of who drives — but usage category (commercial permit) needs to be declared correctly." },
    ],
  },

  "tempo-insurance-poonamallee": {
    slug: "tempo-insurance-poonamallee",
    seoTitle: "Tempo & Mini Truck Insurance in Poonamallee, Chennai",
    seoDesc: "Tempo and mini-truck insurance for owner-operators in Poonamallee and the western industrial belt — load-type clarity, renewal checks and claim steps.",
    heroH1: "Tempo and mini-truck insurance in Poonamallee",
    heroP: "A tempo running local delivery routes around Poonamallee needs its policy to reflect what it actually carries — load-type mismatches are one of the most common reasons small commercial-vehicle claims get disputed.",
    intentSignals: ["tempo insurance poonamallee", "mini truck insurance poonamallee", "pickup van insurance chennai west"],
    whoThisHelps: [
      "Individual tempo and mini-truck owner-operators running local routes near Poonamallee.",
      "Small traders/transporters delivering to the western industrial belt.",
    ],
    whatYouGet: [
      "Load/goods-type declaration matched to policy wording.",
      "Renewal checks on permit and fitness validity alongside the policy.",
      "Claim-step guidance for local delivery accidents or damage.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share load and permit details", text: "WhatsApp what you carry and your current permit/policy copy." },
      { title: "Step 2 — Load-type check", text: "We confirm the declared goods type matches what's actually carried." },
      { title: "Step 3 — Renewed or corrected", text: "Policy renewed cleanly, or corrected if the load-type declaration was off." },
    ],
    comparisonTable: {
      title: "Load-type declared vs. mismatched",
      intro: "The single biggest reason small commercial-vehicle claims get disputed.",
      columns: ["What matters", "Load-type mismatch", "Correctly declared"],
      rows: [
        ["Claim risk", "High — insurer questions coverage at claim time", "Low — matches what's actually carried"],
        ["Renewal accuracy", "Carried forward from an old declaration", "Reviewed at each renewal"],
      ],
    },

    recommendedServices: [
      { label: "Tempo / Mini Truck Insurance", href: EN("/services/personal/tempo-mini-truck-insurance/") },
      { label: "Goods Carrying Vehicle Insurance", href: EN("/services/transport-fleet/goods-carrying-vehicle-insurance/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Does the policy need to list the specific goods I carry?", a: "Usually a general goods-type category is declared (e.g. general goods vs perishables) — matching this to reality avoids claim disputes." },
    ],
  },

  // ===========================
  // PERSONA-BASED INTENT PAGES
  // ===========================

  "vehicle-dealer-insurance-tieup": {
    slug: "vehicle-dealer-insurance-tieup",
    seoTitle: "Insurance Tie-Up for Vehicle Dealers & Showrooms — Chennai",
    seoDesc: "Insurance partnership for new/used vehicle dealers and showrooms near Chennai — new dealerships, additional outlets, and dealers switching agents. Bulk vehicle insurance, showroom/stock cover, one point of contact. Call 7448324068.",
    heroH1: "Insurance Tie-Up for Vehicle Dealers & Showrooms",
    heroP: "Every vehicle you sell needs insurance on day one, and your showroom needs its own cover too. Whether you're opening your first outlet, adding another, or switching from an agent who isn't keeping up — I'll set up one straightforward tie-up so your team isn't chasing a different person for every file.",
    intentSignals: ["insurance agent tie up for showroom", "dealer insurance partnership chennai", "new vehicle insurance bulk dealer", "showroom stock insurance chennai", "vehicle dealer insurance agent", "switch insurance agent dealership", "second showroom insurance"],
    whoThisHelps: [
      "New dealerships setting up their first showroom and looking for an insurance partner from day one.",
      "Existing dealers opening a second or additional outlet who want the same tie-up extended, not a fresh setup each time.",
      "Dealers switching from their current agent because of slow turnaround, poor claim support, or no single point of contact.",
      "Showroom owners who also need stock/premises cover for vehicles on display or in the yard.",
    ],
    whatYouGet: [
      "One contact for every customer's vehicle insurance at delivery — across one outlet or several.",
      "A clean handover process if you're switching from another agent, with no gap in coverage for pending deliveries.",
      "Showroom and stock insurance for vehicles on premises, sized to each outlet.",
      "Direct claim support for any customer who bought through your dealership.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us your situation", text: "New dealership, additional outlet, or switching from an existing agent — the setup differs slightly for each." },
      { title: "Step 2 — Set up the process", text: "We agree how insurance gets triggered at each sale, and handle any handover from a previous agent so nothing lapses." },
      { title: "Step 3 — Ongoing support", text: "Renewals, claims, and customer queries come back to one contact, whether you run one showroom or several." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Opening your first showroom",
        forWhom: "New dealership, first outlet, no existing insurance process in place.",
        points: [
          "We set up the delivery-day insurance process from scratch, matched to your expected volume.",
          "No paperwork backlog to untangle — a clean start with one contact from day one.",
          "We explain the process once to your sales staff so every future delivery follows it without you having to check.",
        ],
        ctaLabel: "WhatsApp — new showroom setup",
        waText: "Hi, we're opening a new vehicle showroom and need to set up insurance for customer deliveries. Can you guide us?",
      },
      {
        label: "Adding a second or new outlet",
        forWhom: "Already running one showroom, opening another location.",
        points: [
          "Same process extended to the new outlet — no separate onboarding.",
          "One contact across all your outlets instead of a different agent per location.",
          "Showroom/stock cover assessed and set up per outlet, since each location's holding differs.",
        ],
        ctaLabel: "WhatsApp — adding an outlet",
        waText: "Hi, we're opening another showroom outlet and want to extend our insurance tie-up to it. Can you help?",
      },
      {
        label: "Switching from your current agent",
        forWhom: "You have a tie-up already, but turnaround, claim support, or communication isn't working.",
        points: [
          "We coordinate the handover so deliveries already in progress aren't disrupted.",
          "Existing customer policies stay valid — switching agents doesn't mean re-issuing what's already active.",
          "You keep working with one person going forward, reachable directly by phone or WhatsApp — not a rotating call center.",
        ],
        ctaLabel: "WhatsApp — switching agents",
        waText: "Hi, we currently have an insurance tie-up with another agent and want to switch. Can you guide us through the handover?",
      },
    ],

    comparisonTable: {
      title: "Insuring every sale yourself vs. a dealer tie-up",
      intro: "Many dealerships let each customer arrange their own insurance, or route it through whichever staff member is free that day. Here's what changes with a fixed tie-up.",
      columns: ["What matters", "Customer arranges it themselves", "With a dealer tie-up"],
      rows: [
        ["Who customers deal with", "Different agent every time, or an app they don't trust", "One familiar contact your dealership already vouches for"],
        ["Delivery timeline", "Can stall handover if the customer hasn't arranged cover", "Insurance ready in step with your delivery process"],
        ["Staff effort", "Sales staff field insurance questions they aren't trained for", "One WhatsApp thread — we handle the rest"],
        ["Claim support later", "Customer is on their own with whoever they picked", "Customer comes back to the same contact your dealership introduced"],
        ["Showroom/stock cover", "Arranged separately, if at all", "Set up alongside the customer-facing tie-up"],
        ["Consistency across outlets", "Varies outlet to outlet", "Same process and contact at every location"],
      ],
    },

    guideSections: [
      {
        title: "How a dealer tie-up actually works, step by step",
        intro: "No jargon — this is the practical flow once we're set up together.",
        points: [
          "A customer buys a vehicle and is ready for delivery.",
          "Your sales staff share the customer's and vehicle's details with us over WhatsApp — a photo of the booking form is enough to start.",
          "We confirm the policy and share the copy back the same day, in time for delivery.",
          "If the customer ever has a claim, they call us directly — you don't have to get involved unless you want to.",
          "At renewal time next year, the customer is reminded directly. Your dealership isn't chasing anyone.",
        ],
      },
      {
        title: "For proprietors who prefer a phone call over an app",
        intro: "Not every dealership wants a digital-first process, and that's fine — the tie-up works the same way over a phone call.",
        points: [
          "Everything above can run entirely by phone call and physical paperwork if that's how your showroom operates.",
          "We come to your showroom for signatures or document collection when a visit is easier than sending photos.",
          "The relationship is with one person, not a support ticket system — the same voice on the phone every time.",
        ],
      },
    ],

    scenarios: [
      {
        title: "New showroom, first month of deliveries",
        situation: "A newly opened dealership had no insurance process — each of the first 6 customers was told to 'sort it out themselves' before delivery, which delayed two handovers by several days.",
        howWeHelped: "We set up a same-day WhatsApp process with their sales team. Every vehicle since has left the showroom insured on delivery day, with no handover delays.",
        waText: "Hi, we're a new showroom facing delivery delays because customers arrange their own insurance. Can you set up a process for us?",
      },
      {
        title: "Two-outlet dealer consolidating from separate agents",
        situation: "A dealer running two locations had a different insurance agent at each — different turnaround times, and no one who could answer for both outlets together.",
        howWeHelped: "We took over both outlets under one process. Same contact, same turnaround, and a single renewal calendar covering customers from both showrooms.",
        waText: "Hi, we run two showroom outlets with different insurance agents and want to consolidate under one. Can you help?",
      },
    ],

    recommendedServices: [
      { label: "Car Insurance", href: EN("/policies/car-insurance/") },
      { label: "Bike Insurance", href: EN("/policies/bike-insurance/") },
      { label: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/") },
      { label: "Fire & Burglary Insurance (showroom/stock)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "We're opening our first showroom — can you set this up from scratch?", a: "Yes. We'll walk through your expected delivery volume and set up a simple process so every vehicle you sell gets insured consistently from day one." },
      { q: "We already have a tie-up at one outlet and are opening a second — does it extend automatically?", a: "We extend the same process to the new outlet — same contact, same turnaround expectations, so you're not starting over each time you expand." },
      { q: "Can we switch to you from our current insurance agent?", a: "Yes. We coordinate the handover so pending deliveries and any active customer policies aren't disrupted during the switch." },
      { q: "Do you also cover the showroom's own stock and premises?", a: "Yes, under a fire/burglary or stock policy sized to what you actually hold — we assess each outlet on its own." },
      { q: "Is there a minimum number of vehicles for a dealer tie-up?", a: "No fixed minimum — this works for a small used-car lot or a larger multi-outlet dealership." },
      { q: "Does this work if we prefer phone calls over WhatsApp?", a: "Yes. The process is the same either way — WhatsApp is just the fastest option for most dealers. We're equally set up to work by phone and in-person visits." },
      { q: "Do you serve dealerships outside Chennai city, in Tamil Nadu more broadly?", a: "Yes. Our base is in Sholavaram (Chennai outskirts), and we support dealerships across the wider Chennai region and Tamil Nadu — Chennai city and its outskirts are our priority coverage area." },
    ],
  },

  "corporate-insurance-advisor-one-point": {
    slug: "corporate-insurance-advisor-one-point",
    seoTitle: "One Insurance Advisor for All Company Policies — Corporate Chennai",
    seoDesc: "Consolidate factory, fleet, health, liability, and property insurance under one advisor. Portfolio review, renewal calendar, and a single point of contact for company insurance near Chennai. Call 7448324068.",
    heroH1: "One Insurance Advisor for All Your Company's Policies",
    heroP: "Most companies end up with factory insurance from one agent, fleet from another, and group health from a broker who never returns calls — nobody sees the whole picture. I'll review what you currently hold, flag the gaps and overlaps, and become the single point of contact going forward.",
    intentSignals: ["insurance audit for company", "consolidate company policies one agent", "insurance portfolio review chennai", "corporate insurance advisor chennai", "one advisor for all company insurance"],
    whoThisHelps: [
      "CFOs, company administrators, and owner-operators managing multiple insurance policies across different agents or brokers.",
      "Businesses that have grown their policy count over time without ever reviewing it as a whole portfolio.",
      "Companies frustrated by renewal dates scattered across the year with no single reminder system.",
    ],
    whatYouGet: [
      "A portfolio review of your current policies — factory/property, fleet, WC, group health, liability, and any others — to spot gaps, overlaps, and underinsurance.",
      "A consolidated renewal calendar so nothing lapses because it was 'someone else's policy to track.'",
      "One advisor accountable for claims across every policy type, instead of a different contact for each one.",
      "Honest recommendations — if a current policy is well-priced and well-structured, we say so rather than replacing it just to win the business.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Send your current policy list", text: "WhatsApp copies of your active policies (or just tell us what you hold) — we don't need everything at once to start." },
      { title: "Step 2 — Portfolio review", text: "We map what's covered, what's missing, and where renewal dates fall across the year." },
      { title: "Step 3 — One consolidated plan", text: "You get a clear picture of your company's insurance position and a single point of contact for renewals and claims going forward." },
    ],

    personaGuideTitle: "Find your situation",
    personaGuide: [
      {
        label: "MSME / small business owner",
        forWhom: "You run the company and personally deal with insurance renewals between everything else — a factory or fire policy here, a WC policy there, maybe group health you set up once and forgot about.",
        points: [
          "We start with whatever you already have, even if it's just a couple of policies — no minimum size to qualify.",
          "You get one number to call when a renewal notice or claim comes in, instead of digging through old files to find which agent sold what.",
          "We flag it plainly if you're paying for cover you don't need, or missing something a tender or bank might soon ask for.",
        ],
        ctaLabel: "WhatsApp — MSME policy review",
        waText: "Hi, I run a small business and want someone to review our current insurance policies together. Can you help?",
      },
      {
        label: "Growing company, policies scattered across agents",
        forWhom: "You've added vehicles, staff, or a second unit over the years, and each addition came with its own insurance agent.",
        points: [
          "We map every policy you hold against what your business actually looks like today — not what it looked like when each policy was bought.",
          "Renewal dates get consolidated onto one calendar so nothing lapses silently.",
          "We take over coordination with your existing insurers — you don't have to cancel and rebuy anything to get organised.",
        ],
        ctaLabel: "WhatsApp — consolidate our policies",
        waText: "Hi, our company insurance is spread across a few different agents and we'd like to consolidate under one advisor. Can you help?",
      },
      {
        label: "CFO / finance team doing a formal audit",
        forWhom: "You need a structured view of coverage, gaps, and cost — for a board update, an insurer negotiation, or year-end review.",
        points: [
          "A written portfolio summary: what's covered, sum insured levels, renewal dates, and where the gaps or overlaps are.",
          "Straight answers on whether current pricing and structure are reasonable — we don't replace a well-priced policy just to win the account.",
          "Ongoing single point of accountability your team can loop in for any policy, without re-explaining the company's setup each time.",
        ],
        ctaLabel: "WhatsApp — request a portfolio review",
        waText: "Hi, I'd like to request a structured insurance portfolio review for our company. Can you outline the process?",
      },
    ],

    comparisonTable: {
      title: "Scattered agents vs. one advisor for everything",
      intro: "This is the difference most companies notice within the first renewal cycle after consolidating.",
      columns: ["What matters", "Different agent per policy", "One advisor for all policies"],
      rows: [
        ["Renewal tracking", "Each agent reminds you (or doesn't) on their own schedule", "One consolidated calendar for every policy"],
        ["Coverage gaps", "No one sees the whole picture, so gaps go unnoticed", "Reviewed together, so overlaps and gaps are visible"],
        ["Claim support", "Depends which agent picks up the phone that day", "One accountable contact regardless of policy type"],
        ["New requirement (tender, bank, hire)", "You start from scratch finding the right cover", "We already know your setup and can respond fast"],
        ["Switching cost", "Feels easier to leave things scattered than untangle them", "We do the untangling — you don't cancel anything to start"],
      ],
    },

    guideSections: [
      {
        title: "What a portfolio review actually covers",
        intro: "This isn't a sales pitch disguised as a review — here's exactly what we look at.",
        points: [
          "Property/factory: is the sum insured realistic against current stock and asset value, or is it still set from years ago?",
          "Fleet/vehicles: are all current vehicles actually on the policy, and is anything sold or retired still being paid for?",
          "Workmen Compensation: does worker classification match your actual payroll and headcount today?",
          "Group health: is the plan still matched to your current team size, or was it set up for a much smaller company?",
          "Liability (public/professional/D&O): does your risk exposure today match what was assessed when the policy was first written?",
        ],
      },
      {
        title: "Why this is especially useful for MSMEs",
        intro: "Smaller companies often lose the most to scattered insurance, simply because there's no dedicated person tracking it.",
        points: [
          "A large company has a finance team to chase renewals — an MSME usually has the owner doing it between everything else. One advisor removes that burden.",
          "MSMEs are also the ones most likely to discover a coverage gap only when a tender, bank loan, or customer contract suddenly asks for proof of insurance — a portfolio review catches this before it becomes urgent.",
          "There's no extra cost to consolidating — premiums go to the insurer either way. You're not paying more for a single advisor; you're just getting one.",
        ],
      },
    ],

    scenarios: [
      {
        title: "MSME owner juggling three agents for one small factory",
        situation: "A small manufacturing unit had fire insurance from one agent, WC from another (arranged years ago by a contractor), and no one covering their delivery vehicle at all.",
        howWeHelped: "We reviewed all three, found the vehicle gap, corrected an outdated sum insured on the fire policy, and set up one renewal calendar for everything going forward.",
        waText: "Hi, I run a small factory and our insurance is spread across different agents with possible gaps. Can you review it?",
      },
      {
        title: "Growing company needed insurance proof for a new tender",
        situation: "A mid-size contractor was bidding for a tender requiring Workmen Compensation and public liability proof, but their existing policies were outdated and didn't match current headcount.",
        howWeHelped: "We audited their existing cover, corrected the classification mismatch, and got compliant documentation ready before the tender deadline.",
        waText: "Hi, we're bidding for a tender that requires insurance proof and want our current policies reviewed quickly. Can you help?",
      },
    ],

    recommendedServices: [
      { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { label: "Group Health / Employee Benefits", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Do you replace all our existing policies, or just review them?", a: "We review first. If a current policy is priced and structured correctly, we leave it as-is. We only recommend changes where there's a real gap, overlap, or renewal risk." },
      { q: "Can you manage policies we bought from other agents?", a: "Yes. We can take over the coordination and renewal tracking for existing policies even if they were originally sold by someone else — the insurer relationship doesn't change, just who's managing it for you." },
      { q: "How often should a company review its insurance portfolio?", a: "At least once a year, and any time the business changes materially — new premises, new vehicles, headcount growth, or a new line of business. We build the renewal calendar so this review happens automatically, not by chance." },
      { q: "Is this only for large companies?", a: "No — it's most useful for any company juggling 3 or more separate policies (property, vehicle, employee health, liability) where tracking renewals and coverage has started to feel scattered. MSMEs benefit the most since there's rarely a dedicated person tracking this internally." },
      { q: "We're a small MSME with just 2-3 policies — is this worth it for us?", a: "Yes. Even a small policy count benefits from one accountable contact, especially since MSMEs are the ones most likely to discover a coverage gap only when a bank, tender, or customer contract suddenly asks for proof." },
      { q: "Do you work with companies outside Chennai city, elsewhere in Tamil Nadu?", a: "Yes. We're based in Sholavaram (Chennai outskirts) and prioritise Chennai city and its outskirts, but we support companies across Tamil Nadu with a similar consolidated-advisor approach." },
    ],
  },

  "new-business-startup-insurance-chennai": {
    slug: "new-business-startup-insurance-chennai",
    seoTitle: "Insurance for New Businesses & Startups — Chennai",
    seoDesc: "Insurance guidance for new companies, startups, and MSMEs setting up near Chennai. What's mandatory, what's commonly needed early, and how to avoid gaps as you register and hire. Call 7448324068.",
    heroH1: "Insurance for New Businesses & Startups in Chennai",
    heroP: "When you're setting up a new company, insurance is usually the last thing on the list — until a tender asks for it, or you hire your first employee, or a customer asks what happens if something goes wrong. I'll help you sort out what's actually needed now versus what can wait.",
    intentSignals: ["insurance needed for new company", "startup insurance chennai", "MSME insurance scheme", "new business insurance starter", "insurance for newly registered company"],
    whoThisHelps: [
      "Founders and small business owners setting up a new company, shop, or manufacturing unit near Chennai.",
      "Startups about to hire their first employees and unsure what's mandatory versus optional.",
      "New MSME registrations that need basic property, liability, or employee cover before they can bid on tenders or contracts.",
      "Existing small businesses running a year or more without formal insurance, now catching up before a tender, an audit, or an employee hire forces the issue.",
    ],
    whatYouGet: [
      "A clear read on what's actually mandatory at your stage (e.g. Workmen Compensation once you have employees, vehicle third-party cover if you run any vehicles) versus what's optional but sensible.",
      "Guidance on directors & officers (D&O) or professional indemnity cover if your business model carries that kind of exposure.",
      "Help setting up basic property/stock and liability cover before your first tender or contract asks for proof of insurance.",
      "A starting point that can grow with the business instead of a one-size package that gets replaced in a year.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us about the business", text: "What you do, how many people you employ (or plan to), and whether you have premises, vehicles, or stock." },
      { title: "Step 2 — We map what's needed now", text: "We separate what's legally required, what's commonly asked for in contracts/tenders, and what's genuinely optional at this stage." },
      { title: "Step 3 — Set up cleanly", text: "Policies are arranged with your actual risk in mind, not a generic startup bundle." },
    ],

    personaGuideTitle: "What stage are you at?",
    personaGuide: [
      {
        label: "Solo founder / pre-hiring",
        forWhom: "Just registered, no employees yet, maybe working from home or a shared space.",
        points: [
          "Usually nothing is mandatory yet — but if you have external investors or a formal board, early D&O cover is worth discussing.",
          "If you already hold any premises, stock, or a vehicle under the company name, that's the first thing worth insuring.",
          "We tell you plainly if it's genuinely too early to buy anything — no pressure to insure before there's something to protect.",
        ],
        ctaLabel: "WhatsApp — just starting out",
        waText: "Hi, I've just registered a new company and want to know what insurance (if any) I actually need right now.",
      },
      {
        label: "About to hire your first employees",
        forWhom: "You're moving from founder-only to a small team, and someone told you insurance becomes 'a thing' now.",
        points: [
          "Workmen Compensation liability applies as soon as you have employees, especially in any role with physical or site risk.",
          "Group health isn't legally mandatory but is commonly expected once you're hiring beyond the founding team — it also helps with retention.",
          "We set this up matched to your actual headcount, not a package sized for a company you aren't yet.",
        ],
        ctaLabel: "WhatsApp — first hires coming up",
        waText: "Hi, we're about to hire our first employees and want to know what insurance becomes necessary at that point.",
      },
      {
        label: "MSME bidding for a tender or contract",
        forWhom: "A tender, government contract, or corporate customer is asking for proof of insurance you don't currently have.",
        points: [
          "Send us the tender's insurance clause directly — we confirm exactly what's asked for, not a generic guess.",
          "Commonly requested: Workmen Compensation, Contractor All Risk (for project-based work), and sometimes public liability.",
          "We work to the tender deadline — this is the one situation where speed matters more than a leisurely policy review.",
        ],
        ctaLabel: "WhatsApp — tender needs insurance proof",
        waText: "Hi, we're bidding for a tender that requires insurance proof and need this set up quickly. Can you help?",
      },
    ],

    comparisonTable: {
      title: "No insurance vs. a minimal starter setup",
      intro: "Most new businesses don't need a large policy bundle on day one — but going in with nothing has real costs the first time something goes wrong.",
      columns: ["Situation", "No insurance yet", "Minimal starter cover"],
      rows: [
        ["Employee injured on site", "Company is personally liable for the full compensation cost", "WC policy pays the liability on your behalf"],
        ["Tender/contract asks for proof", "You scramble to arrange cover under a deadline, often paying a rush premium", "Already in place — you just send the certificate"],
        ["Stock or premises damaged", "Full loss absorbed directly by the business", "Fire/burglary cover absorbs the loss, subject to sum insured"],
        ["Director sued over a business decision", "Personal assets can be at risk without D&O cover", "D&O cover responds, if you're at that stage"],
        ["Cost while small", "₹0 premium, but full exposure", "Low premium sized to a small business, scales up as you grow"],
      ],
    },

    guideSections: [
      {
        title: "What's actually mandatory vs. genuinely optional at each stage",
        intro: "A practical, stage-by-stage read — not a checklist that assumes you're bigger than you are.",
        points: [
          "Founder-only, no premises, no vehicle: usually nothing mandatory. D&O only if you have external investors or a formal board.",
          "First employees hired: Workmen Compensation becomes relevant, especially for any physical or site-based role. Group health is optional but common.",
          "Company holds premises or stock: fire/burglary cover becomes sensible once there's real value sitting on-site.",
          "Company runs any vehicle: third-party motor cover is legally mandatory the moment a vehicle is registered in the company's name.",
          "Bidding for tenders or corporate contracts: whatever the tender specifically asks for — always confirm the exact clause rather than assuming.",
        ],
      },
      {
        title: "Why we don't sell a 'startup bundle'",
        intro: "A lot of new-business insurance is oversold as an all-in-one package. Here's why we don't do that.",
        points: [
          "A 5-person services company and a 5-person manufacturing unit have almost nothing in common in terms of risk — a bundle sized for one is wrong for the other.",
          "Buying cover you don't need yet doesn't protect you better; it just adds a renewal you'll eventually question and drop.",
          "The better approach is: insure what's real today, and add cover as the business genuinely changes — new premises, new hires, new vehicles, new contracts.",
        ],
      },
    ],

    scenarios: [
      {
        title: "Startup hiring its first two employees",
        situation: "A 3-person services startup was about to hire its first two employees and had no idea whether insurance was now required.",
        howWeHelped: "We confirmed WC was now relevant given the new hires' role, set up a right-sized policy, and left group health as an optional next step rather than pushing it immediately.",
        waText: "Hi, we're about to hire our first employees and aren't sure what insurance is now required. Can you guide us?",
      },
      {
        title: "MSME with a tender deadline in 5 days",
        situation: "A small fabrication unit was shortlisted for a government tender that required Workmen Compensation and public liability proof — with no existing cover and a tight deadline.",
        howWeHelped: "We turned around both policies inside the tender deadline, with documentation matched exactly to what the tender clause specified.",
        waText: "Hi, we have a tender deadline in a few days and need Workmen Compensation and public liability proof arranged quickly.",
      },
    ],

    recommendedServices: [
      { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { label: "Fire & Burglary Insurance", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Professional Indemnity / D&O", href: EN("/services/liability/professional-liability-do-insurance/") },
      { label: "Group Health / Employee Benefits", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Does a startup need D&O insurance?", a: "It depends on the structure — if you have external investors or a formal board, D&O is worth having early since director liability can arise even in a small company. If it's a founder-only setup with no outside investment, it's usually not urgent yet." },
      { q: "What insurance is mandatory when I hire my first employee?", a: "Workmen Compensation (Employee's Compensation) liability applies as soon as you have employees, particularly in any role with physical/site risk. Group health isn't legally mandatory but is commonly expected once you're hiring beyond founders." },
      { q: "We're bidding for a tender that asks for insurance proof — what do we need?", a: "This varies by tender, but commonly requested items are Workmen Compensation, Contractor All Risk (for project work), and sometimes public liability. Send us the tender's insurance clause and we'll confirm exactly what's needed." },
      { q: "Can we start with minimal cover and add more as the business grows?", a: "Yes — that's the right approach. We set up what's needed now and review again as you add employees, premises, or vehicles, rather than overselling a bundle you don't need yet." },
      { q: "We're an MSME registered a year ago with no insurance at all — is it too late to start?", a: "No. It's common for MSMEs to run a year or more before formalising insurance. We assess what you have today and set up cover matched to your current operations, not a backdated ideal." },
      { q: "Do you support startups and MSMEs outside Chennai city, across Tamil Nadu?", a: "Yes. We're based in Sholavaram (Chennai outskirts) and prioritise Chennai city and its outskirts, but we support new businesses and MSMEs across Tamil Nadu." },
    ],
  },

  // ===========================
  // VERTICAL / INDUSTRY PERSONA PAGES (business-audience expansion)
  // ===========================

  "export-import-business-insurance-chennai": {
    slug: "export-import-business-insurance-chennai",
    seoTitle: "Export & Import Business Insurance in Chennai — Cargo, Incoterms & Trade Risk",
    seoDesc: "Insurance for exporters and importers in Chennai — marine cargo cover matched to your Incoterms, customs-hold protection, and claim-ready documentation for cross-border trade. Call 7448324068.",
    heroH1: "Export & Import Business Insurance in Chennai",
    heroP: "Every trade lane carries a different risk profile — a first-time exporter shipping FOB has a different exposure window than an established importer bringing in machinery CIF. I'll match your cover to your actual Incoterms and trade pattern, not sell you a generic marine policy.",
    intentSignals: ["export business insurance chennai", "import business insurance chennai", "exporter insurance chennai", "importer insurance chennai", "trade credit insurance chennai", "cargo insurance for exporters"],
    whoThisHelps: [
      "Exporters and importers routing shipments through Chennai Port, Ennore, or Kattupalli.",
      "Manufacturers and traders new to EXIM who are unsure who bears risk at each shipping stage.",
      "Established trading companies reviewing whether their current cargo cover still matches their trade volume.",
    ],
    whatYouGet: [
      "Cover matched to your actual Incoterms (FOB/CIF/EXW/etc.) — so you know exactly when your risk starts and ends.",
      "Invoice and letter-of-credit matching, so insured value ties back to real trade documents, not a round estimate.",
      "Guidance on customs-hold and warehousing period cover for shipments stuck in clearance.",
      "Claim support with proper survey coordination if cargo is damaged or lost in transit.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your trade lane details", text: "WhatsApp your Incoterm, invoice value, and route (port of loading/discharge)." },
      { title: "Step 2 — Cover matched to your trade lane", text: "We align sum insured and cover period to your actual shipment pattern, not a generic template." },
      { title: "Step 3 — Certificate before dispatch", text: "Insurance certificate issued in time for port/customs documentation, every shipment." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "First-time exporter",
        forWhom: "You're new to EXIM and unsure who bears risk at each shipping stage.",
        points: [
          "We explain your Incoterm in plain terms — exactly when your risk starts and ends on this specific shipment.",
          "Cover set up matched to your invoice value, not a guessed figure.",
          "Documentation guidance so your first claim (if ever needed) isn't the first time you're learning the process.",
        ],
        ctaLabel: "WhatsApp — first export shipment",
        waText: "Hi, this is our first export shipment and we need cargo insurance guidance matched to our Incoterm.",
      },
      {
        label: "Established importer/exporter, regular shipments",
        forWhom: "You ship regularly and want a consistent process, not a one-off policy each time.",
        points: [
          "A repeatable invoice/LC-matching habit so every shipment is claim-ready by default.",
          "One contact across all your regular trade lanes, not a different arrangement per shipment.",
          "Periodic review of whether your cover still matches your current trade volume.",
        ],
        ctaLabel: "WhatsApp — regular EXIM cover",
        waText: "Hi, we ship regularly for export/import and want a consistent cargo insurance process set up.",
      },
      {
        label: "Cargo damaged or lost — filing a claim",
        forWhom: "A shipment has already been damaged, delayed at customs, or lost in transit.",
        points: [
          "We confirm what your policy actually covers for this specific loss — sea leg only, or warehouse-to-warehouse.",
          "Guidance on preserving survey evidence and gathering invoice/LC proof before the surveyor visits.",
          "Support through the claim process from report to settlement.",
        ],
        ctaLabel: "WhatsApp — cargo claim",
        waText: "Hi, our export/import shipment was damaged or delayed and we need help with the insurance claim.",
      },
    ],

    comparisonTable: {
      title: "Common Incoterms — who bears the risk, when",
      intro: "Knowing this determines what you actually need to insure and from which point.",
      columns: ["Incoterm", "When your risk starts"],
      rows: [
        ["FOB (Free on Board)", "Once goods are loaded onto the vessel at origin port"],
        ["CIF (Cost, Insurance, Freight)", "Seller insures to destination port — verify what's actually covered"],
        ["EXW (Ex Works)", "From the seller's premises — the longest exposure window for the buyer"],
      ],
    },

    guideSections: [
      {
        title: "What actually causes export/import cargo claims to stall",
        intro: "Not insurer unfairness — usually one of these, and all are avoidable with the right setup upfront.",
        points: [
          "Insured value not matching the invoice or letter of credit — the two must tie back to each other.",
          "No survey done at destination when damage is suspected — get one immediately, don't wait to dispute.",
          "Gaps in cover during customs hold or transshipment — confirm your policy covers the full warehouse-to-warehouse journey, not just port-to-port.",
          "Declared route/carrier not matching the actual shipping line used.",
        ],
      },
    ],

    scenarios: [
      {
        title: "First-time exporter confused about Incoterms",
        situation: "A manufacturer shipping their first export order didn't know whether they or the buyer were responsible for insuring the cargo under the agreed FOB terms.",
        howWeHelped: "We explained exactly where their risk ended (once loaded at the origin port) and set up cover for that specific window, avoiding both a gap and unnecessary duplicate cover.",
        waText: "Hi, we're shipping our first export order and aren't sure whether we need to insure it under our Incoterms.",
      },
      {
        title: "Importer's machinery shipment damaged at customs hold",
        situation: "A trading company's imported machinery was damaged while held at customs, and their existing policy's cover period was unclear about whether the hold period was included.",
        howWeHelped: "We confirmed the customs-hold period was covered under their policy wording, coordinated the survey, and supported the claim through to settlement.",
        waText: "Hi, our imported machinery was damaged during a customs hold and we need help understanding our claim.",
      },
    ],

    recommendedServices: [
      { label: "Import / Export Cargo Insurance", href: EN("/services/marine/import-export-insurance/") },
      { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { label: "Marine Hull & Inland Vessel Insurance", href: EN("/services/marine/marine-hull-inland-vessel-insurance/") },
      { label: "Manufacturer Export Insurance", href: EN("/manufacturer-export-insurance-chennai/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Does cargo insurance cover the whole journey or just the sea leg?", a: "Depends on the policy — warehouse-to-warehouse cover is available and usually recommended, not just port-to-port (as applicable)." },
      { q: "What documents do I need before shipment?", a: "Invoice, packing list, and the Incoterm agreed with your buyer/seller — we align the sum insured to these before issuing cover." },
      { q: "Do you cover shipments through Chennai Port, Ennore, and Kattupalli?", a: "Yes, we support cargo movement through all major Chennai-area ports and can coordinate cover for any trade lane you use." },
      { q: "Can you help if our export business is new and we've never bought cargo insurance before?", a: "Yes — this is common. We explain Incoterms in plain language and set up cover matched to your actual first shipment, not a generic policy." },
    ],
  },

  "insurance-for-professionals-consultants-chennai": {
    slug: "insurance-for-professionals-consultants-chennai",
    seoTitle: "Insurance for Professionals & Consultants in Chennai — Liability, Office & Health Cover",
    seoDesc: "Insurance for consultants, freelancers, CAs, architects, and agencies in Chennai — professional indemnity, office equipment, and health cover matched to how you actually work. Call 7448324068.",
    heroH1: "Insurance for Professionals & Consultants in Chennai",
    heroP: "If your business is advice, design, or a service delivered — not physical stock — your real exposure is different from a shop or factory. I'll help you cover what actually matters: professional liability, the equipment your work depends on, and your own health cover if you're self-employed.",
    intentSignals: ["insurance for consultants chennai", "freelancer insurance chennai", "professional indemnity for CA architects chennai", "self employed insurance chennai", "insurance for agencies chennai"],
    whoThisHelps: [
      "Independent consultants, freelancers, and self-employed professionals (CAs, architects, designers, IT consultants).",
      "Small agencies and service firms delivering advice or work product to clients.",
      "Professionals who've never had insurance beyond a personal health policy and aren't sure what a growing practice needs.",
    ],
    whatYouGet: [
      "Professional Indemnity cover — protection if a client claims loss due to advice, error, or omission in the service you delivered.",
      "Office/equipment cover for laptops, software licenses, and furniture — since a landlord's policy rarely covers your equipment.",
      "Guidance on whether D&O is relevant if you've incorporated with a board or investors.",
      "Personal health insurance guidance, since self-employed professionals don't have an employer's group policy as a fallback.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe what you do", text: "WhatsApp your practice type (consulting, design, accounting, IT, etc.) and whether you work solo or with a small team." },
      { title: "Step 2 — Cover matched to real exposure", text: "We align cover to your actual service/advice risk, not a generic liability template built for a shop." },
      { title: "Step 3 — Policy issued", text: "Clear on trigger conditions and notification requirements, so a future claim isn't delayed by a technicality you didn't know about." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Solo freelancer / self-employed professional",
        forWhom: "You work independently — no employees, no office lease, just your own advice or work product.",
        points: [
          "Professional Indemnity sized to your actual client contract values, not an inflated generic figure.",
          "Personal health insurance guidance, since you don't have an employer's group policy to fall back on.",
          "No unnecessary add-ons — we don't sell a small-business bundle you don't need as a solo operator.",
        ],
        ctaLabel: "WhatsApp — freelancer/solo cover",
        waText: "Hi, I'm a self-employed professional/freelancer and want to understand what insurance I actually need.",
      },
      {
        label: "Small agency or consulting firm",
        forWhom: "You have a small team delivering client work, possibly with an office lease.",
        points: [
          "Professional Indemnity for the firm, sized to your typical project/contract value.",
          "Office equipment cover for the team's laptops, servers, and furniture.",
          "Group health guidance if you're formalizing employee benefits as the team grows.",
        ],
        ctaLabel: "WhatsApp — agency/firm cover",
        waText: "Hi, we run a small consulting/agency team and want our professional liability and office cover reviewed.",
      },
      {
        label: "Incorporated with investors or a board",
        forWhom: "Your practice has grown into a company with external stakeholders — director liability is now a real personal exposure.",
        points: [
          "D&O cover explained clearly — this protects directors personally, separate from the company's general liability.",
          "Guidance on which cover your business genuinely needs at this stage, since D&O and PI are often confused.",
          "Documentation formatted for investor due diligence if that's ever requested.",
        ],
        ctaLabel: "WhatsApp — D&O for incorporated practice",
        waText: "Hi, our consulting practice is now incorporated with a board/investors and we want to understand if we need D&O cover.",
      },
    ],

    comparisonTable: {
      title: "Professional Indemnity vs. D&O — which applies to you",
      intro: "Often confused, but they protect different things.",
      columns: ["What matters", "Professional Indemnity", "D&O"],
      rows: [
        ["Who's protected", "The business itself", "Directors/officers personally"],
        ["What triggers a claim", "An error or omission in advice/service delivered", "A management decision"],
        ["Typical buyer", "Consultants, agencies, service firms", "Companies with a board or external investors"],
      ],
    },

    guideSections: [
      {
        title: "What most professionals get wrong about their own insurance",
        intro: "A few patterns we see repeatedly with consultants and freelancers.",
        points: [
          "Assuming a landlord's building insurance covers your office equipment — it almost never does.",
          "Not having Professional Indemnity because 'nothing's gone wrong yet' — the point of PI is that it's there before something does.",
          "Confusing Professional Indemnity (protects the business for service errors) with D&O (protects directors personally) — buying one when you actually need the other.",
          "Relying on an employer's health cover memory from a previous job, without realizing self-employment means no group policy exists anymore.",
        ],
      },
    ],

    recommendedServices: [
      { label: "D&O / Professional Indemnity Insurance", href: EN("/services/liability/professional-liability-do-insurance/") },
      { label: "Office Insurance Package", href: EN("/services/business-msme/office-insurance/") },
      { label: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { label: "Freelancer & Self-Employed Insurance", href: EN("/freelancer-self-employed-insurance-chennai/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Do freelancers really need professional indemnity insurance?", a: "If your work involves advice, design, or a deliverable a client could claim was faulty or caused them loss, yes — even as a solo freelancer. The cost is usually modest relative to the protection." },
      { q: "I work from home — do I need office insurance?", a: "If you have meaningful equipment (laptop, monitors, specialized software/hardware), it's worth covering separately from your home insurance, which often excludes business equipment or has low sub-limits for it." },
      { q: "What's the difference between Professional Indemnity and Public Liability?", a: "Professional Indemnity covers claims arising from your advice or service (an error, omission, or bad outcome from your work). Public Liability covers physical injury or property damage to a third party — relevant if clients visit your office." },
      { q: "Can you set up health insurance for a self-employed person?", a: "Yes. Since you don't have an employer's group policy, we help you choose an individual or family plan matched to your situation, with proper disclosure guidance." },
    ],
  },

  "wholesale-trader-retailer-insurance-chennai": {
    slug: "wholesale-trader-retailer-insurance-chennai",
    seoTitle: "Insurance for Wholesalers, Traders & Retailers in Chennai — Stock & Fire Cover",
    seoDesc: "Insurance for wholesale traders and retail shop owners in Chennai — stock declaration, fire and burglary cover sized to fluctuating inventory. For T. Nagar, wholesale markets, and retail belts. Call 7448324068.",
    heroH1: "Insurance for Wholesalers, Traders & Retailers in Chennai",
    heroP: "A wholesaler's stock value swings hard between seasons, and a retailer's biggest risk is usually fire or theft of exactly what's on the shelf. I'll size your cover to your actual stock pattern, not a flat figure that's wrong most of the year.",
    intentSignals: ["wholesale trader insurance chennai", "retail shop insurance chennai", "textile wholesale insurance t nagar", "trader stock insurance chennai", "retailer fire insurance chennai"],
    whoThisHelps: [
      "Wholesale traders in markets and commercial hubs (textiles, electronics, hardware, general goods).",
      "Retail shop and showroom owners with stock value that fluctuates seasonally.",
      "Distributors holding inventory for multiple brands or product lines under one roof.",
    ],
    whatYouGet: [
      "Stock declaration structure so your cover matches actual stock levels through the year, not a flat annual figure.",
      "Fire and burglary cover sized to peak stock value — the average clause punishes underinsurance at exactly the wrong moment.",
      "Guidance on security conditions required for burglary cover to actually pay out.",
      "Public liability if customers or buyers regularly visit your premises.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your stock pattern", text: "WhatsApp your typical stock value range through the year — off-season vs. peak season (festival, wedding season, etc.)." },
      { title: "Step 2 — Cover sized to peak, not average", text: "We size sum insured to your highest stock-holding point, since that's what the average clause checks against." },
      { title: "Step 3 — Policy issued", text: "Fire, burglary, and stock declaration structure set up together, with a simple habit for keeping declarations current." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Wholesale trader, seasonal stock swings",
        forWhom: "Your stock value varies significantly by season — wedding season, festival stock-up, or bulk seasonal buying.",
        points: [
          "Stock declaration policy structure so cover tracks your actual holding, not a flat figure that's wrong most months.",
          "We size cover to your peak, since that's what matters most for the average clause.",
          "Guidance on declaration rhythm — how often to update the insurer on current stock value.",
        ],
        ctaLabel: "WhatsApp — seasonal stock cover",
        waText: "Hi, we're a wholesale trader with seasonal stock swings and want the right insurance structure.",
      },
      {
        label: "Retail shop owner, fixed location",
        forWhom: "You run a shop or showroom with relatively stable stock and want straightforward fire/burglary cover.",
        points: [
          "Sum insured checked against actual current stock and premises value, not a rounded guess.",
          "Burglary security conditions reviewed against what's genuinely in place at your shop.",
          "Public liability included if customers regularly visit.",
        ],
        ctaLabel: "WhatsApp — retail shop cover",
        waText: "Hi, we run a retail shop and want our fire/burglary insurance reviewed.",
      },
      {
        label: "Filing a claim — fire, theft, or stock loss",
        forWhom: "An incident has already happened at your shop or godown.",
        points: [
          "We check what proof you have (invoices, stock register, photos) and what's still missing before the surveyor visits.",
          "Honest guidance on the average clause if your declared stock turns out to be lower than actual holding.",
          "Support through documentation and the surveyor process.",
        ],
        ctaLabel: "WhatsApp — active claim",
        waText: "Hi, we've had a fire/theft incident at our shop and need help with the insurance claim.",
      },
    ],

    comparisonTable: {
      title: "Flat annual sum insured vs. stock declaration policy",
      intro: "For traders with fluctuating stock, this distinction decides whether a claim pays out fully or gets reduced.",
      columns: ["What matters", "Flat sum insured", "Stock declaration policy"],
      rows: [
        ["Off-season cover", "Same figure whether stock is low or high", "Adjusted to reflect actual declared stock"],
        ["Peak-season claim", "Risk of underinsurance if peak wasn't accounted for", "Matched to declared peak value"],
        ["Premium fairness", "Pay the same regardless of actual average holding", "Can reflect true average exposure"],
      ],
    },

    guideSections: [
      {
        title: "The average clause, explained for traders",
        intro: "This is the single most consequential concept for wholesale and retail stock insurance.",
        points: [
          "If your actual peak stock value is ₹50 lakh but you've insured for ₹30 lakh, you're 40% underinsured at that peak.",
          "On a claim — even a small, partial one — the insurer pays only 60% of the loss, proportionate to how underinsured you are.",
          "The fix: declare your stock value honestly at peak season, and keep basic proof (invoices, stock register) on file so a claim doesn't stall on valuation disputes.",
        ],
      },
    ],

    recommendedServices: [
      { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { label: "Small Business Insurance", href: EN("/small-business-insurance-chennai/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "We're a textile wholesaler near T. Nagar — do you cover high-value stock like this?", a: "Yes. High-value inventory (textiles, jewellery, electronics) just needs accurate valuation and, for burglary cover, confirmation that your security setup meets the insurer's conditions." },
      { q: "How is sum insured calculated for fluctuating stock?", a: "Ideally on the maximum stock value at any point in the year, not an average — insuring for average value under-protects you at your riskiest (highest-value) moment." },
      { q: "Does burglary cover require specific security measures?", a: "Yes, typically — grills, locks, and sometimes a watchman or alarm system, depending on the insurer and your stock value. We check your setup against the policy's actual requirements before you buy." },
      { q: "Can a wholesale market stall or small shop get proper stock insurance?", a: "Yes, regardless of size. The insurer assesses construction type and security measures, and we help you present this accurately to get fair terms." },
    ],
  },

  "hotel-restaurant-insurance-chennai": {
    slug: "hotel-restaurant-insurance-chennai",
    seoTitle: "Hotel & Restaurant Insurance in Chennai — Property, Liability & Staff Cover",
    seoDesc: "Insurance for hotels, restaurants, and lodges in Chennai — fire and property cover, public liability for guest/customer incidents, and staff accident cover. Call 7448324068.",
    heroH1: "Hotel & Restaurant Insurance in Chennai",
    heroP: "A hotel or restaurant carries a mix of risks a standard shop policy doesn't quite fit — guests and diners on the premises, food safety exposure, kitchen fire risk, and staff working around equipment daily. I'll help you cover what's actually relevant to hospitality, not a generic commercial package.",
    intentSignals: ["hotel insurance chennai", "restaurant insurance chennai", "lodge insurance chennai", "hospitality insurance chennai", "kitchen fire insurance chennai", "guest liability insurance chennai"],
    whoThisHelps: [
      "Hotel and lodge owners needing property, fire, and guest liability cover.",
      "Restaurant, cafe, and catering business owners covering kitchen fire risk and customer liability.",
      "Hospitality businesses with staff working around kitchen equipment or guest-facing operations.",
    ],
    whatYouGet: [
      "Fire and property cover sized to your building, kitchen equipment, and furnishings.",
      "Public liability for guest or customer incidents on your premises — a slip, a food-safety complaint, or property damage claim.",
      "Guidance on Workmen Compensation for kitchen and housekeeping staff, given the physical nature of the work.",
      "Business interruption guidance if a fire or major incident would stop you from operating.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your property", text: "WhatsApp your property type (hotel/lodge/restaurant/cafe), size, and staff count." },
      { title: "Step 2 — Cover matched to hospitality risk", text: "We size fire, liability, and WC cover to your actual kitchen/guest-facing operations, not a generic shop template." },
      { title: "Step 3 — Policy issued", text: "Clear on what's covered for guest incidents, kitchen fire, and staff injury, so there's no surprise at claim time." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Restaurant or cafe owner",
        forWhom: "You run a food service business with a kitchen and dine-in or takeaway customers.",
        points: [
          "Kitchen fire risk assessed properly — cooking equipment and LPG usage change your fire load significantly.",
          "Public liability for customer incidents, from a slip on the floor to a food-safety complaint.",
          "Workmen Compensation for kitchen staff, who face real physical risk daily.",
        ],
        ctaLabel: "WhatsApp — restaurant/cafe cover",
        waText: "Hi, we run a restaurant/cafe and want our fire, liability, and staff insurance reviewed.",
      },
      {
        label: "Hotel or lodge owner",
        forWhom: "You run guest accommodation and need broader property and guest-liability cover.",
        points: [
          "Property cover sized to the building, furnishings, and any in-house dining/kitchen operations.",
          "Guest liability cover for incidents on your premises — injury, property damage, or loss claims.",
          "Staff cover across housekeeping, kitchen, and front-desk roles.",
        ],
        ctaLabel: "WhatsApp — hotel/lodge cover",
        waText: "Hi, we run a hotel/lodge and want our property and guest liability insurance reviewed.",
      },
      {
        label: "After an incident — fire, injury, or claim",
        forWhom: "A kitchen fire, guest injury, or property incident has already happened.",
        points: [
          "We check what proof you have and what's still needed before the surveyor or investigator visits.",
          "Guidance on guest/customer liability claims specifically, which have different documentation needs than a standard property claim.",
          "Support through the claim process from report to settlement.",
        ],
        ctaLabel: "WhatsApp — active hospitality claim",
        waText: "Hi, we've had an incident at our hotel/restaurant and need help with the insurance claim.",
      },
    ],

    comparisonTable: {
      title: "Generic shop policy vs. hospitality-specific cover",
      intro: "A shop policy is built for retail risk; hospitality has a different profile entirely.",
      columns: ["What's covered", "Generic shop package", "Hospitality-specific cover"],
      rows: [
        ["Kitchen fire load (LPG, cooking equipment)", "Often underweighted", "Assessed specifically as a major fire-load factor"],
        ["Guest/customer liability", "Basic public liability, if included", "Sized to actual footfall and guest-facing exposure"],
        ["Staff physical risk (kitchen, housekeeping)", "Standard WC template", "Matched to hospitality-specific roles"],
      ],
    },

    guideSections: [
      {
        title: "What makes hospitality risk different from a standard shop",
        intro: "A few things worth understanding before you buy or renew.",
        points: [
          "Kitchen operations (LPG, deep fryers, continuous flame) significantly raise your fire load compared to a typical retail shop — this affects both premium and the safety conditions insurers expect.",
          "Guest/customer liability is broader than typical retail public liability — think food safety complaints, slip-and-fall incidents, and property damage or loss claims from guests.",
          "Staff in hospitality (kitchen, housekeeping) face more physical risk day-to-day than office-based roles, which should be reflected in your WC classification.",
        ],
      },
    ],

    recommendedServices: [
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { label: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { label: "Catering & Event Business Insurance", href: EN("/catering-event-business-insurance-chennai/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Does standard fire insurance cover kitchen fires?", a: "Yes, fire from cooking operations is generally covered under a standard fire policy, but the fire load from kitchen equipment (LPG, deep fryers) affects premium and safety conditions — we make sure this is disclosed and priced correctly, not left as a gap." },
      { q: "Are we liable if a guest or customer is injured on our premises?", a: "Potentially, yes — this is exactly what public liability cover is for. Without it, you'd bear that cost directly." },
      { q: "Do we need separate cover for our kitchen staff?", a: "Workmen Compensation should reflect the actual physical risk of kitchen and housekeeping roles, which is different from office-based staff — we help classify this correctly so a claim doesn't hit a disclosure dispute." },
      { q: "Can you cover a small lodge or a large hotel property?", a: "Yes, we size cover to your actual property — whether it's a small guesthouse or a larger hotel with multiple facilities." },
    ],
  },

  "school-trust-ngo-insurance-chennai": {
    slug: "school-trust-ngo-insurance-chennai",
    seoTitle: "Insurance for Schools, Trusts & NGOs in Chennai — Property, Liability & Staff Cover",
    seoDesc: "Insurance for schools, charitable trusts, NGOs, and societies in Chennai — property, public liability for visitors/students, and staff/volunteer cover. Call 7448324068.",
    heroH1: "Insurance for Schools, Trusts & NGOs in Chennai",
    heroP: "Institutional entities — schools, trusts, NGOs, cooperative societies — carry real risk that's easy to overlook because there's no obvious 'commercial' framing: a building full of students or visitors, staff and volunteers, and property that often nobody has reviewed insurance for in years. I'll help you cover what's actually exposed.",
    intentSignals: ["school insurance chennai", "trust insurance chennai", "ngo insurance chennai", "society insurance chennai", "cooperative society insurance chennai", "institutional insurance chennai"],
    whoThisHelps: [
      "Schools and educational institutions needing property and student/visitor liability cover.",
      "Charitable trusts and NGOs with premises, staff, and public-facing programs.",
      "Cooperative societies and resident associations managing shared property.",
    ],
    whatYouGet: [
      "Property cover for buildings, furnishings, and equipment — sized to actual replacement value, not a figure nobody's revisited in years.",
      "Public liability for incidents involving students, visitors, or the public on your premises.",
      "Guidance on group personal accident cover for staff, volunteers, and in some cases students.",
      "Straightforward documentation, since many institutional bodies have limited administrative bandwidth for insurance paperwork.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your institution", text: "WhatsApp your entity type (school/trust/NGO/society), property details, and approximate staff/student/member count." },
      { title: "Step 2 — Cover matched to institutional risk", text: "We size property, liability, and accident cover to what your organization actually has and does." },
      { title: "Step 3 — Policy issued", text: "Documentation kept simple, since institutional administration often doesn't have dedicated insurance expertise in-house." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "School or educational institution",
        forWhom: "You run or administer a school and need property and student/visitor liability cover.",
        points: [
          "Property cover sized to your buildings and equipment, reviewed against actual current replacement value.",
          "Public liability for incidents involving students or visitors on campus.",
          "Group personal accident guidance for staff and, where relevant, students.",
        ],
        ctaLabel: "WhatsApp — school insurance",
        waText: "Hi, we run a school and want our property and liability insurance reviewed.",
      },
      {
        label: "Charitable trust or NGO",
        forWhom: "You run programs with staff, volunteers, and public interaction, often with limited administrative capacity for insurance paperwork.",
        points: [
          "Property and liability cover kept straightforward, matched to your actual premises and activities.",
          "Guidance on covering staff and volunteers, which is often overlooked until an incident happens.",
          "Simple, low-friction documentation given typical NGO administrative bandwidth.",
        ],
        ctaLabel: "WhatsApp — trust/NGO cover",
        waText: "Hi, we run a trust/NGO and want to set up basic property and liability insurance.",
      },
      {
        label: "Cooperative society or resident association",
        forWhom: "You manage shared property on behalf of a community — a housing society, cooperative, or similar body.",
        points: [
          "Property cover for shared/common areas and structures.",
          "Public liability for incidents involving residents, staff, or visitors.",
          "Guidance suited to committee-run administration, not a corporate-scale process.",
        ],
        ctaLabel: "WhatsApp — society/cooperative cover",
        waText: "Hi, we manage a cooperative society/resident association and want our property insurance reviewed.",
      },
    ],

    comparisonTable: {
      title: "No review in years vs. a current policy check",
      intro: "Institutional insurance is easy to set up once and forget — this is what changes with a periodic review.",
      columns: ["What matters", "Policy unreviewed for years", "Reviewed periodically"],
      rows: [
        ["Sum insured accuracy", "Often based on an outdated valuation", "Matched to current replacement cost"],
        ["Staff/volunteer cover", "May not exist or may be outdated", "Reviewed as the organization changes"],
        ["Claim readiness", "Documentation habits unclear", "Simple proof-keeping habit in place"],
      ],
    },

    guideSections: [
      {
        title: "Why institutional insurance gets overlooked",
        intro: "Not because it doesn't matter — because there's rarely a dedicated person tracking it.",
        points: [
          "Schools, trusts, and societies are usually run by committees or small admin teams without a dedicated finance/insurance function — policies get set up once and then forgotten.",
          "Because there's no obvious 'commercial' framing, institutional leaders sometimes assume general liability doesn't apply to them — it does, especially with students, visitors, or the public regularly on premises.",
          "The fix is simple: a periodic review (even every 2-3 years) catches outdated valuations and coverage gaps before an incident forces the issue.",
        ],
      },
    ],

    recommendedServices: [
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Office Insurance Package", href: EN("/services/business-msme/office-insurance/") },
      { label: "Daycare & Coaching Center Insurance", href: EN("/daycare-coaching-center-insurance-chennai/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Do schools need public liability insurance?", a: "Yes — with students, staff, and visitors regularly on premises, public liability cover protects against claims arising from injury or property damage incidents on campus." },
      { q: "Can a small NGO or trust with limited budget still get proper cover?", a: "Yes. We help institutional bodies get straightforward, right-sized cover rather than an oversold commercial package — cost is matched to what you actually have and do." },
      { q: "Does a cooperative society need separate insurance from individual residents' policies?", a: "Yes, for common/shared property and areas — individual unit owners' policies typically don't cover shared structures, common areas, or the society's liability as an entity." },
      { q: "How often should an institution review its insurance?", a: "At least every 2-3 years, and any time the property, staff count, or activities change materially. Many institutional policies go untouched for far longer than that, which is where gaps quietly appear." },
    ],
  },

  "ecommerce-online-seller-insurance-chennai": {
    slug: "ecommerce-online-seller-insurance-chennai",
    seoTitle: "Insurance for E-commerce & Online Sellers in Chennai — Stock, Transit & Warehouse Cover",
    seoDesc: "Insurance for e-commerce businesses and online sellers in Chennai — warehouse/fulfilment stock cover, goods-in-transit for deliveries, and product liability. Call 7448324068.",
    heroH1: "Insurance for E-commerce & Online Sellers in Chennai",
    heroP: "An online seller's risk sits in a few specific places — stock sitting in a warehouse or fulfilment space, goods moving to customers, and occasionally a product liability question. I'll help you cover exactly those points instead of a generic retail shop policy that doesn't quite fit an online-only business.",
    intentSignals: ["ecommerce business insurance chennai", "online seller insurance chennai", "d2c brand insurance chennai", "warehouse insurance ecommerce chennai", "online store insurance chennai"],
    whoThisHelps: [
      "D2C brands and online sellers holding stock in a warehouse or fulfilment space.",
      "E-commerce businesses shipping goods regularly to customers across Tamil Nadu and beyond.",
      "Online sellers who've grown from a side business into stock levels that need real protection.",
    ],
    whatYouGet: [
      "Warehouse/fulfilment stock cover sized to your actual inventory value, including seasonal peaks (festival sales, etc.).",
      "Goods-in-transit cover for outbound deliveries, especially for higher-value items.",
      "Guidance on product liability if a product defect could lead to a customer claim.",
      "Straightforward documentation suited to a lean, often remote-first team.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share your business details", text: "WhatsApp your product category, approximate stock value, and where you store/fulfil orders from." },
      { title: "Step 2 — Cover matched to your actual setup", text: "We size stock and transit cover to your fulfilment pattern, including seasonal sales spikes." },
      { title: "Step 3 — Policy issued", text: "Set up to work for a lean, digitally-run business — no unnecessary in-person process." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "D2C brand with own warehouse/fulfilment",
        forWhom: "You hold stock yourself and ship directly to customers.",
        points: [
          "Stock cover sized to your actual warehouse holding, including festival-season spikes.",
          "Goods-in-transit cover for outbound customer shipments, especially higher-value items.",
          "Guidance on whether product liability is relevant to your specific product category.",
        ],
        ctaLabel: "WhatsApp — D2C stock/transit cover",
        waText: "Hi, we run a D2C brand with our own warehouse and want our stock and transit insurance reviewed.",
      },
      {
        label: "Marketplace seller using third-party fulfilment",
        forWhom: "You sell through platforms and may use a marketplace's fulfilment/warehousing service.",
        points: [
          "We clarify what the marketplace's fulfilment cover actually includes — often less than sellers assume.",
          "Guidance on whether you need your own stock cover for goods awaiting dispatch to the fulfilment center.",
          "Straightforward setup that doesn't assume a physical storefront.",
        ],
        ctaLabel: "WhatsApp — marketplace seller cover",
        waText: "Hi, we sell through online marketplaces and want to understand what insurance gap we might have.",
      },
      {
        label: "Growing from side business to real stock value",
        forWhom: "What started small has grown, and your stock value now genuinely needs protecting.",
        points: [
          "An honest assessment of whether you've outgrown 'no insurance' — many sellers reach this point without noticing.",
          "Cover sized to where your business actually is now, not a large-brand template.",
          "A starting point that scales with you as the business grows further.",
        ],
        ctaLabel: "WhatsApp — growing online business",
        waText: "Hi, our online business has grown and we think it's time to set up proper stock/transit insurance.",
      },
    ],

    comparisonTable: {
      title: "No cover vs. warehouse + transit cover",
      intro: "The two points where online sellers actually carry risk — storage and shipping.",
      columns: ["Risk point", "No cover", "Warehouse + transit cover"],
      rows: [
        ["Stock damaged/lost in storage (fire, theft)", "Full loss absorbed by the business", "Covered, sized to peak stock value"],
        ["Goods damaged/lost in delivery transit", "Absorbed as a cost of doing business or disputed with courier", "Covered directly, regardless of courier fault"],
        ["Product liability claim", "Full exposure", "Covered if relevant to your product category"],
      ],
    },

    guideSections: [
      {
        title: "What a courier's liability actually covers (and doesn't)",
        intro: "A common misconception among online sellers — worth clarifying before you assume you're covered.",
        points: [
          "Courier/logistics partners typically cap their liability for lost or damaged goods at a low fixed amount, far below your actual product value — this is standard in their terms, not a special exclusion.",
          "Your own goods-in-transit cover pays based on the actual declared value of the shipment, not the courier's capped liability.",
          "For high-value or fragile products, this gap between courier liability and actual value is exactly where sellers get caught out without their own cover.",
        ],
      },
    ],

    recommendedServices: [
      { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
      { label: "Warehouse / Godown Insurance", href: EN("/services/industrial/warehouse-insurance/") },
      { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { label: "Home Business Insurance", href: EN("/home-business-insurance-chennai/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Does my courier partner's insurance already cover my goods?", a: "Usually only up to a low capped amount stated in their terms — far below actual product value for most goods. Your own goods-in-transit cover fills that gap." },
      { q: "We store stock in a rented warehouse — do we need our own insurance, or does the warehouse owner's policy cover us?", a: "The warehouse owner's policy typically covers the building, not your stock inside it. You need your own stock cover for your inventory specifically." },
      { q: "Is product liability relevant for a small online seller?", a: "It depends on your product category — items with any safety, electrical, or consumable element carry more real exposure than say, printed merchandise. We assess based on what you actually sell." },
      { q: "Can insurance handle seasonal sales spikes, like festival season stock buildup?", a: "Yes — this is exactly what stock declaration structures are for. We size cover to your peak holding period, not a flat year-round average." },
    ],
  },

  "hospital-clinic-insurance-chennai": {
    slug: "hospital-clinic-insurance-chennai",
    seoTitle: "Insurance for Hospitals & Clinics in Chennai — Property, Equipment & Professional Cover",
    seoDesc: "Insurance for hospitals, clinics, and diagnostic centers in Chennai — property and equipment breakdown cover, professional indemnity, and staff cover. Call 7448324068.",
    heroH1: "Insurance for Hospitals & Clinics in Chennai",
    heroP: "A hospital or clinic carries a genuinely different risk profile — expensive diagnostic and treatment equipment that can fail without any fire or accident involved, a professional liability exposure tied directly to patient outcomes, and staff working in a physically demanding environment. I'll help you cover what's actually at stake, not a generic office package.",
    intentSignals: ["hospital insurance chennai", "clinic insurance chennai", "diagnostic center insurance chennai", "medical equipment insurance chennai", "doctor professional indemnity chennai"],
    whoThisHelps: [
      "Hospital and nursing home owners needing property, equipment, and liability cover.",
      "Clinic and diagnostic center owners with valuable medical equipment exposure.",
      "Doctors and medical practitioners needing professional indemnity cover distinct from the facility's general policy.",
    ],
    whatYouGet: [
      "Property and fire cover for the building, sized to actual reconstruction value.",
      "Machinery/equipment breakdown cover for diagnostic and treatment equipment — a fire policy alone doesn't cover mechanical or electrical failure.",
      "Guidance on professional indemnity for practitioners, separate from the facility's general liability.",
      "Workmen Compensation guidance for medical, nursing, and support staff given the physically demanding nature of the work.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your facility", text: "WhatsApp your facility type (hospital/clinic/diagnostic center), key equipment, and staff count." },
      { title: "Step 2 — Cover matched to healthcare risk", text: "We size property, equipment breakdown, and liability cover to your actual facility and equipment value." },
      { title: "Step 3 — Policy issued", text: "Clear on what's covered for equipment failure, property loss, and professional liability, so there's no ambiguity at claim time." },
    ],

    personaGuideTitle: "Which of these is you?",
    personaGuide: [
      {
        label: "Clinic or small nursing home",
        forWhom: "You run a smaller facility with essential diagnostic/treatment equipment.",
        points: [
          "Property and equipment breakdown cover sized to your actual setup, not a large-hospital template.",
          "Guidance on professional indemnity for the practicing doctor(s), distinct from facility cover.",
          "Straightforward setup matched to a smaller administrative team.",
        ],
        ctaLabel: "WhatsApp — clinic/nursing home cover",
        waText: "Hi, we run a clinic/small nursing home and want our property and equipment insurance reviewed.",
      },
      {
        label: "Hospital or diagnostic center with significant equipment",
        forWhom: "You have high-value diagnostic or treatment equipment (imaging, lab, OT equipment) as a major asset.",
        points: [
          "Machinery breakdown cover assessed as a distinct exposure from fire — sudden equipment failure isn't a fire-policy matter.",
          "Sum insured reviewed against actual equipment replacement cost, which is often underestimated over time.",
          "Liability cover sized to your facility's actual patient volume and service scope.",
        ],
        ctaLabel: "WhatsApp — hospital/diagnostic equipment cover",
        waText: "Hi, we run a hospital/diagnostic center with significant equipment and want our insurance reviewed.",
      },
      {
        label: "Individual doctor / practitioner",
        forWhom: "You practice independently or within a facility and need your own professional cover.",
        points: [
          "Professional indemnity sized to your specialty and practice pattern, separate from the facility's own policy.",
          "Clarity on what the facility's cover includes versus what's your personal responsibility to insure.",
          "Guidance suited to a busy practice with limited time for insurance administration.",
        ],
        ctaLabel: "WhatsApp — doctor professional indemnity",
        waText: "Hi, I'm a practicing doctor and want to understand my professional indemnity insurance needs.",
      },
    ],

    comparisonTable: {
      title: "Fire policy alone vs. fire + equipment breakdown",
      intro: "This gap matters more in healthcare than almost any other sector, given equipment value.",
      columns: ["Cause of loss", "Fire policy alone", "+ Machinery Breakdown"],
      rows: [
        ["Fire, explosion damage to equipment", "Covered", "Covered"],
        ["Sudden equipment failure (no fire involved)", "Not covered", "Covered"],
        ["Diagnostic downtime from equipment failure", "Not covered", "Covered with consequential loss add-on"],
      ],
    },

    guideSections: [
      {
        title: "Why healthcare facilities need more than a standard property policy",
        intro: "The equipment and liability profile here is genuinely different from a typical commercial property.",
        points: [
          "Diagnostic and treatment equipment (imaging machines, lab analyzers, OT equipment) represents concentrated value that can fail mechanically or electrically without any fire involved — a standard fire policy doesn't respond to this.",
          "Professional liability in healthcare is tied directly to patient outcomes, which is a distinct exposure from general commercial liability and usually needs its own dedicated cover for practitioners.",
          "Staff in clinical and support roles face genuine physical and exposure risk that should be reflected accurately in Workmen Compensation classification, not treated as generic office staff.",
        ],
      },
    ],

    recommendedServices: [
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/") },
      { label: "D&O / Professional Indemnity Insurance", href: EN("/services/liability/professional-liability-do-insurance/") },
      { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { label: "Diagnostic Lab & Pharmacy Insurance", href: EN("/diagnostic-lab-pharmacy-insurance-chennai/") },
      { label: "Claim Support & Documentation", href: EN("/services/claims-support/") },
    ],
    faqs: [
      { q: "Does our hospital's fire policy cover equipment breakdown too?", a: "No — a standard fire policy covers fire, explosion, and allied perils. Equipment that fails mechanically or electrically without a fire involved needs a separate Machinery Breakdown policy." },
      { q: "Is professional indemnity for a doctor separate from the hospital's general insurance?", a: "Generally yes — the facility's property and general liability cover is distinct from a practitioner's personal professional indemnity, which covers claims tied to their individual medical decisions and care." },
      { q: "How is sum insured calculated for expensive diagnostic equipment?", a: "Based on current replacement cost, not original purchase price — equipment value and replacement cost can change substantially over the years, and this should be reviewed periodically." },
      { q: "Do you cover small clinics as well as larger hospitals?", a: "Yes — we size cover to your actual facility, whether it's a single-doctor clinic or a larger multi-specialty hospital." },
    ],
  },

  // ===========================
  // ALIAS / COMPANION PAGES (distinct angle, cross-linked to primary vertical page)
  // ===========================

  "manufacturer-export-insurance-chennai": {
    slug: "manufacturer-export-insurance-chennai",
    seoTitle: "Insurance for Manufacturers Who Export — Chennai Factory to Port Cover",
    seoDesc: "Insurance for manufacturers exporting from Chennai — factory property cover plus export cargo insurance for the same operation, coordinated together. Call 7448324068.",
    heroH1: "Insurance for Manufacturers Who Export, in Chennai",
    heroP: "If you manufacture and export, your risk sits in two places that are easy to insure separately and badly — the factory itself, and the goods once they leave for the port. I'll help you coordinate both under one view instead of two disconnected policies that don't talk to each other.",
    intentSignals: ["manufacturer export insurance chennai", "factory to port insurance chennai", "export manufacturer insurance", "manufacturing unit export cover chennai"],
    whoThisHelps: [
      "Manufacturers who both produce and export goods, not just pure trading companies.",
      "Factory owners whose export volume has grown to the point where cargo risk needs proper attention, not an afterthought.",
      "Businesses juggling factory insurance and export cargo cover from two different, uncoordinated agents.",
    ],
    whatYouGet: [
      "Factory property and machinery cover reviewed alongside your export cargo cover, so nothing falls in the gap between the two.",
      "Cargo cover matched to your actual Incoterms for export shipments, not a generic marine policy.",
      "One point of contact whether the issue is a factory claim or a cargo claim.",
      "Guidance on the handover point — where factory-side risk ends and transit risk begins.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your operation", text: "WhatsApp what you manufacture, your factory location, and your typical export destinations/Incoterms." },
      { title: "Step 2 — Coordinated cover", text: "We review factory property and export cargo cover together, so the handover point between the two is actually covered." },
      { title: "Step 3 — One point of contact", text: "Factory or cargo claim — same advisor, same process." },
    ],
    comparisonTable: {
      title: "Separate uncoordinated policies vs. reviewed together",
      intro: "Manufacturers who export often have factory and cargo cover from two different sources — this is what that gap costs.",
      columns: ["What matters", "Uncoordinated", "Reviewed together"],
      rows: [
        ["Handover point (factory to port)", "Risk of an uncovered gap", "Confirmed covered on both sides"],
        ["Claim coordination", "Two separate agents, two processes", "One point of contact regardless of claim type"],
      ],
    },
    recommendedServices: [
      { label: "Factory Insurance", href: EN("/services/industrial/factory-insurance/") },
      { label: "Export & Import Business Insurance", href: EN("/export-import-business-insurance-chennai/") },
      { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/") },
    ],
    faqs: [
      { q: "We already have factory insurance — do we need separate export cargo cover too?", a: "Yes, they cover different things. Factory insurance protects your building, machinery and stock on-site. Export cargo insurance covers goods once they're in transit to the buyer. We review both together so there's no gap at the handover point." },
      { q: "Can one agent handle both our factory and our export cargo insurance?", a: "Yes — that's exactly the point of reviewing them together. One point of contact for both, rather than chasing two different agents for two different claim types." },
    ],
  },

  "freelancer-self-employed-insurance-chennai": {
    slug: "freelancer-self-employed-insurance-chennai",
    seoTitle: "Insurance for Freelancers & Self-Employed Individuals — Chennai",
    seoDesc: "Insurance for freelancers and self-employed individuals in Chennai — health cover without an employer, and professional liability if your work involves advice or delivery. Call 7448324068.",
    heroH1: "Insurance for Freelancers & Self-Employed Individuals in Chennai",
    heroP: "Going independent means losing the safety net an employer used to quietly provide — group health, and sometimes a sense that 'the company' absorbed certain risks. I'll help you rebuild that safety net properly: your own health cover, and liability protection if your work could ever be blamed for a client's loss.",
    intentSignals: ["freelancer insurance chennai", "self employed health insurance chennai", "gig worker insurance chennai", "independent professional insurance chennai"],
    whoThisHelps: [
      "Freelancers and gig-economy workers who left a salaried job and lost employer health cover.",
      "Independent professionals (writers, designers, developers, consultants) without a registered firm.",
      "Anyone self-employed who's been putting off buying their own health/liability cover.",
    ],
    whatYouGet: [
      "Health insurance guidance for individuals without an employer group policy — the single most common gap after going independent.",
      "Professional liability guidance if your freelance work involves advice, design, or a deliverable a client could dispute.",
      "Straightforward setup — no unnecessary business-entity paperwork for a solo freelancer.",
      "Honest guidance on what's genuinely needed at this stage versus what can wait.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us your situation", text: "WhatsApp what kind of freelance/independent work you do, and whether you currently have any health cover." },
      { title: "Step 2 — Priority-first guidance", text: "We tell you what matters most right now — usually health cover first, liability cover if your work has that exposure." },
      { title: "Step 3 — Set up cleanly", text: "Policies arranged for an individual, without unnecessary business-entity complexity." },
    ],
    comparisonTable: {
      title: "Employed vs. freelance — what changes about your cover",
      intro: "The biggest shift most people don't plan for when going independent.",
      columns: ["What matters", "As an employee", "As a freelancer/self-employed"],
      rows: [
        ["Health insurance", "Employer group policy, automatic", "Your own responsibility — no automatic fallback"],
        ["Liability for your work", "Often covered under employer's policies", "Your own exposure if work is disputed"],
      ],
    },
    recommendedServices: [
      { label: "Health Insurance Support", href: EN("/services/personal/health-insurance-support/") },
      { label: "Insurance for Professionals & Consultants", href: EN("/insurance-for-professionals-consultants-chennai/") },
      { label: "D&O / Professional Indemnity Insurance", href: EN("/services/liability/professional-liability-do-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "I just left my job to freelance — what insurance should I sort out first?", a: "Health insurance is usually the priority — your employer's group cover ends the moment you leave, and a medical event without any cover is the most immediate risk. Professional liability comes next if your freelance work involves advice or deliverables clients could dispute." },
      { q: "Do I need to register a business to buy freelancer insurance?", a: "No — health insurance and even professional indemnity can typically be bought as an individual, without a registered business entity." },
    ],
  },

  "small-business-insurance-chennai": {
    slug: "small-business-insurance-chennai",
    seoTitle: "Small Business Insurance in Chennai — Shops, Traders & Local Businesses",
    seoDesc: "Small business insurance in Chennai for shops, traders, and local businesses — fire, stock, and liability cover sized to what you actually have. Call 7448324068.",
    heroH1: "Small Business Insurance in Chennai",
    heroP: "'Small business insurance' means something different for every business that searches for it — a shop, a trading counter, a small workshop, a home-based operation. I'll help you figure out what that actually means for your specific business, not sell you a generic bundle.",
    intentSignals: ["small business insurance chennai", "local business insurance chennai", "shop owner insurance chennai", "small trader insurance chennai"],
    whoThisHelps: [
      "Small shop and trading business owners unsure what insurance actually applies to them.",
      "Local business owners who've never had a formal insurance conversation before.",
      "Anyone comparing 'small business insurance' options and finding the search results too generic to be useful.",
    ],
    whatYouGet: [
      "A plain conversation about what your specific small business actually needs — not a generic package pitch.",
      "Fire, burglary, and stock cover sized to your real premises and inventory value.",
      "Public liability guidance if customers or the public visit your premises.",
      "Honest guidance on what can wait until the business grows further.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us about your business", text: "WhatsApp what your business does, whether you have a shop/premises, and roughly what you'd want protected." },
      { title: "Step 2 — We match you to the right category", text: "Trader, shop owner, service business — we point you to the specific cover that actually fits, not a generic bundle." },
      { title: "Step 3 — Set up right-sized", text: "Cover matched to your actual business size and risk, nothing oversold." },
    ],
    comparisonTable: {
      title: "Generic 'small business package' vs. matched to your actual business",
      intro: "\"Small business insurance\" searches often lead to generic bundles — here's why that's the wrong starting point.",
      columns: ["What matters", "Generic bundle", "Matched to your business"],
      rows: [
        ["Cover relevance", "One-size-fits-all modules", "Only what your specific business actually needs"],
        ["Cost", "Pay for modules you may not use", "Pay for what's relevant"],
      ],
    },
    recommendedServices: [
      { label: "Shop & MSME Package Insurance", href: EN("/services/business-msme/shop-msme-insurance/") },
      { label: "Wholesale, Trader & Retailer Insurance", href: EN("/wholesale-trader-retailer-insurance-chennai/") },
      { label: "New Business / Startup Insurance", href: EN("/new-business-startup-insurance-chennai/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
    ],
    faqs: [
      { q: "What exactly counts as 'small business insurance'?", a: "It's not one specific product — it depends on what your business is. A shop needs fire/stock/burglary cover, a service business needs liability cover, a trader needs stock cover matched to fluctuating inventory. We help you figure out which applies to you." },
      { q: "Is small business insurance expensive?", a: "It scales to your business size — a small shop's cover costs far less than a large factory's. We size it to what you actually have, so you're not paying for coverage built for a much bigger operation." },
    ],
  },

  "catering-event-business-insurance-chennai": {
    slug: "catering-event-business-insurance-chennai",
    seoTitle: "Insurance for Catering & Event Businesses in Chennai",
    seoDesc: "Insurance for catering companies and event businesses in Chennai — equipment cover, public liability for events, and food-safety exposure. Call 7448324068.",
    heroH1: "Insurance for Catering & Event Businesses in Chennai",
    heroP: "A catering or event business doesn't operate from one fixed premises the way a restaurant does — your risk moves with you, to weddings, corporate events, and venues you don't control. I'll help you cover the equipment, liability, and food-safety exposure that comes with working off-site.",
    intentSignals: ["catering business insurance chennai", "event company insurance chennai", "wedding catering insurance chennai", "banquet insurance chennai"],
    whoThisHelps: [
      "Catering companies serving weddings, corporate events, and functions across multiple venues.",
      "Event management businesses handling equipment, staff, and public liability across temporary locations.",
      "Banquet and function-hall operators combining a fixed venue with catering operations.",
    ],
    whatYouGet: [
      "Equipment cover for catering gear (cooking equipment, transport vehicles for supplies) that moves between venues.",
      "Public liability for incidents at events you're running — a guest injury, food-safety complaint, or property damage at the venue.",
      "Guidance on Workmen Compensation for kitchen and event staff working physically demanding, often off-site roles.",
      "Cover that accounts for the fact that your 'premises' changes with every event.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your operation", text: "WhatsApp your business type (catering/events), typical event scale, and staff count." },
      { title: "Step 2 — Cover matched to off-site risk", text: "We size equipment, liability, and staff cover to a business that operates across multiple venues, not one fixed premises." },
      { title: "Step 3 — Policy issued", text: "Clear on what's covered at events versus at your base kitchen/storage, so there's no gap between the two." },
    ],
    comparisonTable: {
      title: "Fixed-premises restaurant cover vs. mobile catering/event cover",
      intro: "The off-site nature of catering and events changes what actually needs covering.",
      columns: ["What matters", "Fixed restaurant policy", "Catering/event cover"],
      rows: [
        ["Where liability applies", "One premises", "Every venue you work at"],
        ["Equipment cover", "Assumed stationary", "Covered while in transit and in use off-site"],
      ],
    },
    recommendedServices: [
      { label: "Hotel & Restaurant Insurance", href: EN("/hotel-restaurant-insurance-chennai/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Workmen Compensation (WC)", href: EN("/services/construction/workmen-compensation/") },
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
    ],
    faqs: [
      { q: "Does our restaurant's fire policy cover our catering events elsewhere?", a: "Not automatically — a fixed-premises fire policy is built around your one location. Catering and event work needs liability and equipment cover that follows you to each venue." },
      { q: "Are we liable if a guest is injured at a wedding we're catering?", a: "Potentially, depending on the circumstances — this is exactly what event-specific public liability cover addresses. We help you understand your exposure at venues you don't control." },
    ],
  },

  "daycare-coaching-center-insurance-chennai": {
    slug: "daycare-coaching-center-insurance-chennai",
    seoTitle: "Insurance for Daycares & Coaching Centers in Chennai",
    seoDesc: "Insurance for daycare centers, tuition centers, and coaching institutes in Chennai — property, child/student liability, and staff cover. Call 7448324068.",
    heroH1: "Insurance for Daycares & Coaching Centers in Chennai",
    heroP: "A daycare or coaching center is smaller than a formal school but carries similar real exposure — children or students on your premises, staff responsible for their safety, and a building that's easy to under-review once it's set up. I'll help you cover what actually matters at this scale.",
    intentSignals: ["daycare insurance chennai", "coaching center insurance chennai", "tuition center insurance chennai", "preschool insurance chennai"],
    whoThisHelps: [
      "Daycare and preschool operators responsible for young children on their premises.",
      "Tuition and coaching center owners with students attending regularly.",
      "Small institutional operators who assumed formal insurance was only for larger schools.",
    ],
    whatYouGet: [
      "Property cover sized to your actual premises, right-sized for a smaller operation.",
      "Public liability for incidents involving children or students on your premises.",
      "Guidance on staff cover appropriate to your team size.",
      "A straightforward setup that doesn't assume large-school scale or administration.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your center", text: "WhatsApp your center type (daycare/coaching/tuition), premises details, and staff/student count." },
      { title: "Step 2 — Cover matched to your scale", text: "We size property, liability, and staff cover to a smaller operation, not a large-school template." },
      { title: "Step 3 — Policy issued", text: "Simple documentation suited to a small team without dedicated administrative staff for insurance." },
    ],
    comparisonTable: {
      title: "Assuming you're too small to need cover vs. right-sized cover",
      intro: "A common assumption among smaller institutional operators — worth reconsidering.",
      columns: ["What matters", "No formal cover", "Right-sized cover"],
      rows: [
        ["Child/student incident on premises", "Full exposure absorbed directly", "Covered under public liability"],
        ["Property loss (fire, theft)", "Full loss to the operator", "Covered, sized to actual premises"],
      ],
    },
    recommendedServices: [
      { label: "Schools, Trusts & NGOs Insurance", href: EN("/school-trust-ngo-insurance-chennai/") },
      { label: "Public Liability", href: EN("/services/liability/public-liability/") },
      { label: "Fire & Burglary (Commercial Property)", href: EN("/services/industrial/fire-burglary-insurance/") },
      { label: "Office Insurance Package", href: EN("/services/business-msme/office-insurance/") },
    ],
    faqs: [
      { q: "Is our coaching center too small to need public liability insurance?", a: "No — size doesn't determine whether liability exposure exists. If students are regularly on your premises, the exposure is real regardless of how many students you have." },
      { q: "Do daycares need different cover than a regular office?", a: "Yes — with young children on premises, the liability profile and safety expectations are different from a standard office, and this should be reflected in how your cover is set up." },
    ],
  },

  "home-business-insurance-chennai": {
    slug: "home-business-insurance-chennai",
    seoTitle: "Insurance for Home-Based Businesses & Makers in Chennai",
    seoDesc: "Insurance for home-based businesses, makers, and small online sellers in Chennai — stock cover for inventory kept at home, and transit cover for deliveries. Call 7448324068.",
    heroH1: "Insurance for Home-Based Businesses & Makers in Chennai",
    heroP: "If you make or sell from home — baked goods, handmade products, a small online shop run from a spare room — your home insurance (if you even have one) almost certainly doesn't cover the business side. I'll help you cover the stock and shipping risk without needing a commercial-scale setup.",
    intentSignals: ["home business insurance chennai", "home based seller insurance chennai", "maker insurance chennai", "small online shop insurance chennai"],
    whoThisHelps: [
      "Home-based makers and small business owners running operations from a residence.",
      "Small online sellers with modest stock levels who haven't reached warehouse scale.",
      "Anyone whose side business has grown enough that home insurance clearly wouldn't cover a loss.",
    ],
    whatYouGet: [
      "Stock cover for inventory kept at home, sized to your actual holding — not a warehouse-scale policy you don't need.",
      "Goods-in-transit cover for deliveries and shipments, even at a small scale.",
      "Honest guidance on whether you've reached the point where dedicated cover makes sense.",
      "A simple setup that doesn't assume a commercial premises or large team.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us about your business", text: "WhatsApp what you make/sell, roughly how much stock you hold, and how you ship to customers." },
      { title: "Step 2 — Right-sized cover", text: "We size stock and transit cover to your actual small-scale operation, not a warehouse-level policy." },
      { title: "Step 3 — Set up simply", text: "No unnecessary complexity — cover matched to a home-based operation." },
    ],
    comparisonTable: {
      title: "Home insurance vs. dedicated stock/transit cover",
      intro: "The gap most home-based sellers don't realize exists until it matters.",
      columns: ["What matters", "Home insurance alone", "Dedicated business stock/transit cover"],
      rows: [
        ["Business inventory damaged/stolen", "Typically excluded or has very low sub-limits", "Covered, sized to your actual stock"],
        ["Goods lost/damaged in delivery", "Not covered at all", "Covered directly"],
      ],
    },
    recommendedServices: [
      { label: "E-commerce & Online Seller Insurance", href: EN("/ecommerce-online-seller-insurance-chennai/") },
      { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
      { label: "Marine Cargo / Goods-in-Transit", href: EN("/services/marine/marine-cargo-goods-in-transit-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Does my home insurance cover the stock for my home-based business?", a: "Almost certainly not, or only up to a very low sub-limit — home policies are built around personal belongings, not business inventory. This is exactly the gap dedicated stock cover fills." },
      { q: "My business is still small — is it too early for insurance?", a: "If you're holding real stock value or shipping regularly, it's worth at least a conversation — cover can be sized small to match a small business, so it's not an all-or-nothing decision." },
    ],
  },

  "diagnostic-lab-pharmacy-insurance-chennai": {
    slug: "diagnostic-lab-pharmacy-insurance-chennai",
    seoTitle: "Insurance for Diagnostic Labs & Pharmacies in Chennai",
    seoDesc: "Insurance for diagnostic laboratories and pharmacies in Chennai — equipment breakdown cover, stock cover for medicines, and professional liability. Call 7448324068.",
    heroH1: "Insurance for Diagnostic Labs & Pharmacies in Chennai",
    heroP: "A diagnostic lab and a pharmacy both carry a different risk mix from a general clinic — labs depend on sensitive, expensive testing equipment, and pharmacies hold high-value, sometimes temperature-sensitive stock. I'll help you cover what's specific to your operation.",
    intentSignals: ["diagnostic lab insurance chennai", "pharmacy insurance chennai", "pathology lab insurance chennai", "medical store insurance chennai"],
    whoThisHelps: [
      "Diagnostic and pathology lab owners with equipment-heavy operations.",
      "Pharmacy and medical store owners holding significant medicine stock value.",
      "Multi-branch diagnostic or pharmacy chains needing consistent cover across locations.",
    ],
    whatYouGet: [
      "Machinery breakdown cover for lab testing equipment — separate from fire cover, since equipment failure often has nothing to do with fire.",
      "Stock cover for pharmacy inventory, including guidance on temperature-sensitive stock exposure.",
      "Professional liability guidance if lab results or pharmacy dispensing could be disputed.",
      "Consistent cover structure across multiple branches if you operate more than one location.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Describe your operation", text: "WhatsApp whether you run a diagnostic lab, pharmacy, or both, plus key equipment and stock value." },
      { title: "Step 2 — Cover matched to your specific risk", text: "We size equipment breakdown, stock, and liability cover to what a lab or pharmacy actually needs, not a generic shop template." },
      { title: "Step 3 — Policy issued", text: "Clear on what's covered for equipment failure versus fire versus stock loss, so there's no ambiguity at claim time." },
    ],
    comparisonTable: {
      title: "Generic shop cover vs. lab/pharmacy-specific cover",
      intro: "Equipment and stock profile here is different enough from a typical shop to matter.",
      columns: ["What's covered", "Generic shop policy", "Lab/pharmacy-specific cover"],
      rows: [
        ["Lab equipment mechanical/electrical failure", "Not covered under fire policy", "Covered under machinery breakdown"],
        ["High-value medicine stock", "May be underweighted in a generic policy", "Sized to actual pharmacy stock value"],
      ],
    },
    recommendedServices: [
      { label: "Hospitals & Clinics Insurance", href: EN("/hospital-clinic-insurance-chennai/") },
      { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-insurance/") },
      { label: "Stock Declaration Policies", href: EN("/services/industrial/stock-declaration-insurance/") },
      { label: "D&O / Professional Indemnity Insurance", href: EN("/services/liability/professional-liability-do-insurance/") },
    ],
    faqs: [
      { q: "Does fire insurance cover our lab testing equipment if it just breaks down?", a: "No — fire insurance only responds to fire, explosion, and similar perils. Equipment that fails mechanically or electrically on its own needs a separate Machinery Breakdown policy." },
      { q: "How is stock value calculated for a pharmacy?", a: "Based on actual medicine inventory value at your highest stock-holding point, similar to how retail stock declaration works — we help you set this accurately so a claim doesn't get reduced for underinsurance." },
    ],
  },
};
