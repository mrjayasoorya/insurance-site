// ===========================
// SEASONAL / CALENDAR-DRIVEN PAGES
// Financial year end/start, quarterly, monsoon, festive season, tax deadlines
// Route: /en/seasonal/[seasonalSlug]/
// ===========================

const EN = (p) => `/en${p}`;

export const seasonalPages = {

  // ===========================
  // FINANCIAL YEAR END (MARCH)
  // ===========================

  "financial-year-end-insurance-renewal": {
    slug: "financial-year-end-insurance-renewal",
    seasonCategory: "financial-year",
    seasonTag: "March — FY End",
    urgency: "high",
    seoTitle: "Insurance Renewal Before March 31 — Financial Year End Checklist for Companies & Individuals",
    seoDesc: "Renew your insurance before March 31. Corporate group health, fleet, fire, and personal car/bike/health insurance — financial year end renewal checklist. Avoid policy lapse, tax deadline, and coverage gaps.",
    heroH1: "Insurance renewal before March 31 — don't let policies lapse at FY end",
    heroP: "March 31 is the busiest day in Indian insurance. Corporate group health, fleet renewals, fire policies, and personal car/bike/health — everything expires together. Here's your checklist to avoid gaps.",
    whyNow: [
      "Most corporate insurance policies (group health, fire, liability) follow the April-March financial year cycle.",
      "Personal policies bought in March/April need renewal now — lapse means losing NCB and continuity benefits.",
      "Section 80C and 80D tax deductions require premium payment BEFORE March 31 to claim in this FY.",
      "Insurers and agents are overloaded in the last week of March — delays are common if you wait.",
    ],
    whoThisHelps: [
      "Company HR/Admin teams renewing group health, fire, WC, or liability policies before FY end.",
      "Fleet operators whose commercial vehicle policies expire in March-April.",
      "Individuals whose car, bike, or health insurance renewal falls in March.",
      "Business owners who need to complete insurance purchases for Section 80C/80D tax deductions.",
    ],
    actionChecklist: [
      { title: "Check all policy expiry dates NOW", text: "Make a list of every policy expiring between March 15 and April 15. Group health, fire, vehicle fleet, personal car/bike/health." },
      { title: "Send policy copies for review", text: "WhatsApp all expiring policy copies to us. We check coverage gaps, sum insured adequacy, and renewal terms before you renew blindly." },
      { title: "Verify employee lists for group health", text: "Group health renewals need updated employee + dependent lists. Additions, deletions, age changes — send before March 28." },
      { title: "Check IDV and NCB for vehicles", text: "Vehicle renewals: verify IDV (Insured Declared Value) hasn't dropped too low. Check NCB (No Claim Bonus) percentage is correct." },
      { title: "Confirm tax-saving deadline compliance", text: "Health insurance premiums paid before March 31 qualify for Section 80D. Life insurance for Section 80C. Don't miss the deadline." },
    ],
    whatYouGet: [
      "Priority renewal processing — we handle March-end rush renewals with dedicated attention.",
      "Multi-policy coordination — if you have 5-10 policies expiring, we manage all renewals as a single project.",
      "Coverage gap check — we verify sum insured, terms, and conditions before auto-renewing at old terms.",
      "Insurer comparison at renewal — renewal is the best time to compare. We check if better options exist.",
      "Documentation ready before April 1 — clean handover into the new financial year.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Send all expiring policies", text: "WhatsApp every policy expiring in March-April. We create a master renewal tracker for you." },
      { title: "Step 2 — We review and recommend", text: "We check each policy for gaps, compare with alternatives, and recommend whether to renew or switch." },
      { title: "Step 3 — Coordinated renewal", text: "All renewals processed together. New policy documents delivered before expiry. Zero gaps." },
    ],
    comparisonTable: {
      title: "Renewing before vs. after March 31",
      intro: "The date you renew changes more than just convenience.",
      columns: ["What matters", "Renewed after lapse", "Renewed before March 31"],
      rows: [
        ["NCB (vehicles)", "Lost if lapsed", "Carried forward"],
        ["Health continuity", "Waiting periods can reset", "Continuity preserved"],
        ["Tax deduction (80C/80D)", "Missed for this financial year", "Claimable for this FY"],
      ],
    },

    recommendedServices: [
      { label: "Group Health Insurance Renewal", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Fleet Insurance Renewal", href: EN("/fleet-renewal-management-support/") },
      { label: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { label: "Car Insurance Renewal", href: EN("/policies/car-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "What happens if my policy lapses on March 31?", a: "A lapsed policy means NO coverage. For vehicles, you lose NCB (No Claim Bonus). For health, you lose continuity benefit and pre-existing condition coverage resets. For corporate policies, employees are uninsured. Renew BEFORE expiry." },
      { q: "Can I renew multiple policies at once?", a: "Yes. We specialize in coordinated multi-policy renewals. Send all policies — personal and corporate — and we manage them as a single renewal project." },
      { q: "Is March 31 the last date for tax-saving insurance?", a: "Yes. Health insurance premiums for Section 80D and life insurance for Section 80C must be PAID (not just applied) before March 31 of the financial year." },
      { q: "I have 20+ vehicles to renew. Can you handle fleet renewals?", a: "Yes. Fleet renewals are our specialty. We maintain expiry trackers, coordinate bulk renewals, and ensure zero-lapse across your entire fleet." },
      { q: "Can I compare and switch insurers at renewal?", a: "Yes. Renewal is the BEST time to compare. We check 15+ insurers and recommend whether to renew with the same company or switch for better terms." },
      { q: "Will my group health premium increase at renewal?", a: "It depends on claim ratio. If your company had high claims, expect a premium increase. We negotiate with the insurer and compare alternatives to get the best renewal terms." },
    ],
  },

  "corporate-insurance-renewal-checklist": {
    slug: "corporate-insurance-renewal-checklist",
    seasonCategory: "financial-year",
    seasonTag: "March-April — Corporate",
    urgency: "high",
    seoTitle: "Corporate Insurance Renewal Checklist — Group Health, Fire, WC, Liability | FY 2026-27",
    seoDesc: "Corporate insurance renewal checklist for FY 2026-27. Group health, fire, workmen compensation, liability, and fleet insurance. Complete renewal guide for HR, Admin, and Finance teams.",
    heroH1: "Corporate insurance renewal checklist — FY 2026-27",
    heroP: "HR, Admin, and Finance teams: your corporate insurance policies are expiring. Group health, fire, WC, public liability, professional indemnity — here's your complete renewal checklist so nothing falls through the cracks.",
    whyNow: [
      "Most corporate policies follow the April-March FY cycle — all expire together, creating a renewal surge.",
      "Group health claims data from the current year affects next year's premium — review before renewing blindly.",
      "Fire and property policy sum insured should be updated to current replacement values — inflation changes this every year.",
      "New employees added during the year need to be included in group health before renewal.",
    ],
    whoThisHelps: [
      "HR managers responsible for group health insurance and employee benefits renewal.",
      "Admin/Facility managers handling fire, property, and liability insurance for office/factory.",
      "Finance teams managing insurance budgets and ensuring tax compliance.",
      "Business owners who handle corporate insurance themselves.",
    ],
    actionChecklist: [
      { title: "Group Health Insurance", text: "Update employee + dependent list. Check claim ratio. Review room rent limits. Compare 2-3 insurers. Negotiate premium based on claims data." },
      { title: "Fire & Property Insurance", text: "Update sum insured to current replacement value. Check SFSP/IAR terms. Verify stock declaration. Update fire load assessment if any changes." },
      { title: "Workmen Compensation (WC)", text: "Update wage roll and employee count. Check for any pending or ongoing claims. Verify coverage limits match current requirements." },
      { title: "Public Liability Insurance", text: "Review turnover-based limits. Check if coverage is adequate for current operations scale. Verify territory clauses." },
      { title: "Fleet / Commercial Vehicle", text: "List all vehicles with expiry dates. Check permits, fitness certificates. Update IDV for accurate valuation. Coordinate bulk renewal." },
      { title: "Professional Indemnity / D&O", text: "Update turnover, project count, employee count. Check retroactive date. Review deductible levels." },
    ],
    whatYouGet: [
      "Dedicated corporate renewal coordinator — one person handles all your company's policies.",
      "Insurer negotiation — we use your claims data to negotiate better renewal terms.",
      "Multi-insurer comparison at renewal — check if switching gives better coverage or lower premium.",
      "Clean documentation handover — policy copies, premium certificates, tax documents all organized.",
      "Renewal calendar for next year — we set up reminders so FY 2027-28 renewals start on time.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share all corporate policies", text: "WhatsApp or email all corporate policy copies with current premium and claims data." },
      { title: "Step 2 — We create a renewal plan", text: "We review each policy, flag issues, compare alternatives, and prepare a renewal recommendation report." },
      { title: "Step 3 — Execute and deliver", text: "Renewals processed, new policies issued, documents organized by policy type and department." },
    ],
    comparisonTable: {
      title: "Auto-renewed vs. reviewed renewal",
      intro: "Corporate policies renewed without review often carry forward outdated terms.",
      columns: ["What matters", "Auto-renewed at old terms", "Reviewed before renewal"],
      rows: [
        ["Sum insured (fire/property)", "May not reflect current replacement value", "Updated to current value"],
        ["Group health premium", "Based on last year's rate, unquestioned", "Negotiated using claims data"],
        ["Employee/wage roll accuracy", "May be outdated", "Verified before renewal"],
      ],
    },

    recommendedServices: [
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { label: "Public Liability Insurance", href: EN("/services/liability/public-liability/") },
      { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") },
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
    ],
    faqs: [
      { q: "When should we start the corporate renewal process?", a: "Ideally 30-45 days before expiry. For group health with high claims, start 60 days early — you may need to negotiate or switch insurers." },
      { q: "Can you handle renewals for companies with 100+ employees?", a: "Yes. We handle group health renewals for companies of all sizes. Employee list management, claims review, and insurer negotiation are part of our process." },
      { q: "Do you provide premium certificates for tax filing?", a: "Yes. We provide organized premium certificates and payment receipts for each policy — ready for your Finance team's tax filing." },
      { q: "Can we switch insurers at renewal?", a: "Yes for most policies. Group health can be ported to another insurer with continuity benefits preserved. We compare and recommend the best option." },
    ],
  },

  "group-health-insurance-renewal": {
    slug: "group-health-insurance-renewal",
    seasonCategory: "financial-year",
    seasonTag: "March-April — Group Health",
    urgency: "high",
    seoTitle: "Group Health Insurance Renewal for Companies — FY 2026-27 | Compare, Negotiate, Renew",
    seoDesc: "Group health insurance renewal for companies in Chennai. Compare premiums, negotiate with insurers, update employee lists, and ensure zero-gap coverage for FY 2026-27. Expert guidance from a 4.9★ rated agent.",
    heroH1: "Group health insurance renewal for companies — FY 2026-27",
    heroP: "Your company's group health policy is expiring. Before you auto-renew at last year's terms, here's what to check: claims ratio, employee list changes, room rent limits, and whether a better insurer option exists.",
    whyNow: [
      "Group health premiums change every year based on your company's claim ratio — don't renew blindly.",
      "Employee additions and deletions during the year need to be updated in the renewed policy.",
      "New financial year means new budget — compare options to get the best value.",
      "Waiting until the last day creates processing delays — employees could be uninsured for days.",
    ],
    whoThisHelps: [
      "HR managers and People Ops teams handling employee health insurance renewal.",
      "Finance/Admin teams managing group health budgets and vendor negotiations.",
      "Startup founders who manage group health directly and want expert comparison.",
      "IT companies, manufacturing firms, and SMEs with 10 to 1000+ employees.",
    ],
    actionChecklist: [
      { title: "Get your claims data", text: "Request the claims summary from your current insurer — total claims amount, number of claims, and claim ratio. This data drives your renewal premium." },
      { title: "Update employee + dependent list", text: "Add new employees, remove ex-employees, update age/dependent changes. Incorrect lists cause claim rejections." },
      { title: "Review room rent limits and sub-limits", text: "Check if room rent, ICU, and surgery limits are adequate. Medical inflation means last year's limits may not be enough." },
      { title: "Compare with 2-3 alternate insurers", text: "We compare Star Health, HDFC ERGO, Care Health, ICICI Lombard quotes for your company's profile — same or better coverage at competitive premium." },
      { title: "Negotiate with current insurer", text: "If claims are low, push for premium reduction. If claims are high, negotiate instead of accepting the first quote." },
    ],
    whatYouGet: [
      "Claims data analysis — we review your company's claims pattern and explain what it means for your premium.",
      "Multi-insurer comparison — 3-4 quotes with detailed coverage comparison, not just premium.",
      "Negotiation support — we negotiate with insurers on your behalf using market data.",
      "Cashless hospital network check — we verify which insurer has better hospital networks near your office and employees' homes.",
      "Seamless transition — if switching insurers, we handle employee data migration and ensure zero-gap coverage.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share current policy and claims data", text: "WhatsApp your current policy copy, employee list, and claims summary." },
      { title: "Step 2 — We compare and negotiate", text: "We get quotes from 3-4 insurers, compare coverage details, and negotiate the best terms." },
      { title: "Step 3 — Renew or switch", text: "You decide based on our recommendation. We handle the paperwork and ensure continuous coverage." },
    ],
    comparisonTable: {
      title: "Claims ratio and what it means for your renewal",
      intro: "Your company's claims data over the past year is the main driver of the renewal premium.",
      columns: ["Claims ratio", "Typical premium change"],
      rows: [
        ["Under 60% of premium", "0–10% increase"],
        ["60–100% of premium", "10–15% increase"],
        ["Over 100% of premium", "15–40% increase — negotiation matters most here"],
      ],
    },

    recommendedServices: [
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Corporate Renewal Checklist", href: EN("/seasonal/corporate-insurance-renewal-checklist/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "How much will my group health premium increase?", a: "It depends on claims ratio. If claims were less than 60% of premium, expect 0-10% increase. If claims exceeded premium, expect 15-40% increase. We negotiate to minimize the hike." },
      { q: "Can we switch from our current insurer to another?", a: "Yes. Group health policies can be ported. Pre-existing condition continuity is preserved. We handle the entire transition including employee data migration." },
      { q: "How many employees do you need to get group health?", a: "Most insurers require minimum 7-10 employees. Some offer plans for 5+ employees. We find the right product for your company size." },
      { q: "What is the best time to start the renewal process?", a: "30-45 days before expiry for straightforward renewals. 60+ days if you want to compare multiple insurers or your claims ratio is high and negotiation is needed." },
      { q: "Do you handle mid-year employee additions?", a: "Yes. We manage mid-year additions, deletions, and endorsements throughout the policy year — not just at renewal." },
    ],
  },

  "tax-saving-insurance-before-march-31": {
    slug: "tax-saving-insurance-before-march-31",
    seasonCategory: "financial-year",
    seasonTag: "March — Tax Deadline",
    urgency: "high",
    seoTitle: "Tax Saving Insurance Before March 31 — Section 80C & 80D Last Date",
    seoDesc: "Buy tax saving insurance before March 31. Health insurance for Section 80D, life insurance for Section 80C. Last date guide — what to buy, how much tax you save, and common mistakes to avoid.",
    heroH1: "Tax saving insurance before March 31 — Section 80C & 80D last date",
    heroP: "March 31 is the last date to buy health insurance (Section 80D) and life insurance (Section 80C) for tax deductions this financial year. Here's exactly what qualifies, how much you save, and what mistakes to avoid.",
    whyNow: [
      "Health insurance premiums paid before March 31 qualify for Section 80D deduction — up to ₹1 lakh for senior citizen parents.",
      "Life insurance premiums paid before March 31 qualify for Section 80C deduction — up to ₹1.5 lakh.",
      "Buying in a rush leads to wrong plans — many people buy for tax saving and end up with inadequate coverage.",
      "The premium must be PAID (not just applied) before March 31 — don't wait until March 30.",
    ],
    whoThisHelps: [
      "Salaried professionals looking to save tax through insurance before the FY deadline.",
      "Self-employed individuals and business owners planning tax-efficient insurance purchases.",
      "People wanting to buy health insurance for parents (senior citizens) for 80D benefit.",
      "Anyone who planned to buy insurance this year but kept postponing.",
    ],
    actionChecklist: [
      { title: "Section 80D — Health Insurance", text: "Up to ₹25,000 deduction for self/family. Up to ₹50,000 for senior citizen parents. Total up to ₹1 lakh. Premium must be paid by March 31." },
      { title: "Section 80C — Life Insurance (LIC)", text: "Up to ₹1.5 lakh deduction for life insurance premium + other investments. LIC endowment, term plans qualify." },
      { title: "Don't buy just for tax — buy right", text: "Tax saving is a bonus. The real purpose is coverage. We help you pick the right plan — not just the cheapest qualifying option." },
      { title: "Pay by March 30 for safety", text: "Online payments take time to process. Pay at least 1 day before March 31 to ensure it counts in this FY." },
    ],
    whatYouGet: [
      "Quick plan recommendation — tell us your age, family size, and budget. We recommend the right plan within 1 hour.",
      "Same-day processing — for health insurance, we can get proposals processed within hours.",
      "Correct Section 80D/80C certificates — documentation ready for ITR filing.",
      "Coverage-first approach — we ensure the plan is RIGHT for you, not just tax-efficient.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us your tax-saving budget", text: "WhatsApp your age, family details, and how much you want to invest for tax saving." },
      { title: "Step 2 — We recommend the right plan", text: "We suggest health insurance (80D) or life insurance (80C) based on your actual coverage needs — not just premium amount." },
      { title: "Step 3 — Same-day processing", text: "We process the proposal and payment on the same day. Policy issued, tax certificates provided." },
    ],
    comparisonTable: {
      title: "Section 80D deduction limits",
      intro: "The exact limit depends on your and your parents' ages.",
      columns: ["Situation", "Maximum 80D deduction"],
      rows: [
        ["Self/family under 60, parents under 60", "₹50,000 (₹25,000 + ₹25,000)"],
        ["Self/family under 60, senior citizen parents", "₹75,000 (₹25,000 + ₹50,000)"],
        ["Self 60+, senior citizen parents", "₹1,00,000 (₹50,000 + ₹50,000)"],
      ],
    },

    recommendedServices: [
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Life Insurance Near Me", href: EN("/life-insurance-near-me/") },
      { label: "Affordable Insurance", href: EN("/affordable-insurance-chennai/") },
      { label: "Contact Us", href: EN("/contact/") },
    ],
    faqs: [
      { q: "How much tax can I save with health insurance?", a: "Under 60: ₹25,000 for self/family + ₹25,000 for parents = ₹50,000 total deduction. If parents are senior citizens: ₹25,000 + ₹50,000 = ₹75,000. If you're also 60+: ₹50,000 + ₹50,000 = ₹1,00,000." },
      { q: "Can I buy health insurance just for my parents for tax benefit?", a: "Yes. You can buy health insurance for your parents and claim Section 80D deduction, even if you already have your own health insurance." },
      { q: "Is the March 31 deadline for payment or policy start date?", a: "Payment date. The premium must be PAID before March 31. Policy can start on April 1 if needed, but payment must happen in the current FY." },
      { q: "Which is better for tax saving — LIC or health insurance?", a: "Both serve different purposes. Health insurance (80D) provides medical coverage. LIC (80C) provides life cover + savings. Ideally, have both. If you must choose one, health insurance is more practically useful." },
    ],
  },

  // ===========================
  // FINANCIAL YEAR START (APRIL)
  // ===========================

  "new-financial-year-insurance-planning": {
    slug: "new-financial-year-insurance-planning",
    seasonCategory: "financial-year",
    seasonTag: "April — FY Start",
    urgency: "medium",
    seoTitle: "New Financial Year Insurance Planning — April 2026 Checklist for Companies & Families",
    seoDesc: "New financial year insurance planning for April 2026. Set up company insurance budgets, personal coverage review, and renewal calendar. Start FY 2026-27 with complete insurance protection.",
    heroH1: "New financial year insurance planning — April 2026 checklist",
    heroP: "April is a fresh start. New budgets, new plans, new coverage decisions. Whether you're a company setting insurance budgets or a family reviewing protection — here's your FY 2026-27 insurance planning guide.",
    whyNow: [
      "New financial year means new budgets — allocate insurance costs early, not as an afterthought.",
      "Policies renewed in March may need mid-year review by September — plan the review cycle now.",
      "New employees joining in April-May need to be added to group health immediately.",
      "Q1 (April-June) is the best time to buy new policies — less rush than Q4 (Jan-March).",
    ],
    whoThisHelps: [
      "Finance and Admin teams setting insurance budgets for FY 2026-27.",
      "HR teams onboarding new employees who need group health coverage.",
      "Families who want to review and upgrade their insurance coverage for the new year.",
      "Business owners starting new ventures or expanding operations in the new FY.",
    ],
    actionChecklist: [
      { title: "Create an insurance calendar", text: "List ALL policies with expiry dates. Set renewal reminders 45 days before each expiry. We can create and maintain this calendar for you." },
      { title: "Review last year's claims", text: "What claims happened? What worked? What didn't? Use this data to adjust coverage for the new year." },
      { title: "Budget for new coverage needs", text: "New vehicle purchases, new office/warehouse, new employees — each needs insurance. Budget now." },
      { title: "Add new employees to group health", text: "April-May is peak hiring season. New joiners need group health coverage from day one." },
      { title: "Personal coverage review", text: "Life events in the past year? Marriage, baby, parents ageing, new car, home purchase — each changes your insurance needs." },
    ],
    whatYouGet: [
      "Annual insurance review — we review ALL your policies (personal + corporate) and flag gaps.",
      "Renewal calendar creation — we track all your policy expiry dates and send reminders.",
      "New coverage recommendations — based on your current situation, what additional protection do you need?",
      "Budget planning support — we help estimate insurance costs for the full financial year.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Send all current policies", text: "WhatsApp every active policy — personal and corporate. We create a complete insurance inventory." },
      { title: "Step 2 — We review and recommend", text: "We identify gaps, recommend new coverage, and create a renewal calendar for the entire FY." },
      { title: "Step 3 — Quarterly checkups", text: "We do quarterly mini-reviews to catch changes — new vehicles, new employees, changed risks." },
    ],
    comparisonTable: {
      title: "Q1 (April-June) vs. Q4 (Jan-March) — when to buy",
      intro: "Timing changes how much attention your policy actually gets.",
      columns: ["What matters", "Q4 (Jan-March)", "Q1 (April-June)"],
      rows: [
        ["Agent/insurer attention", "Rushed — everyone renewing at once", "Dedicated, unhurried"],
        ["Comparison time", "Limited", "Ample time to compare options"],
        ["Processing speed", "Delays common", "Faster turnaround"],
      ],
    },

    recommendedServices: [
      { label: "All Insurance Services", href: EN("/services/") },
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Car Insurance Guide", href: EN("/policies/car-insurance/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
    ],
    faqs: [
      { q: "When is the best time to buy new insurance?", a: "Q1 (April-June) is ideal. Less rush, more time for comparison, and agents can give you dedicated attention. Q4 (Jan-March) is the worst — everyone is rushing for tax-saving and FY-end renewals." },
      { q: "Can you create an insurance calendar for my company?", a: "Yes. We track all policy expiry dates, send reminders 45 days before expiry, and coordinate renewals. Single-point insurance management for your company." },
      { q: "How often should I review my insurance?", a: "Annually at minimum. Quarterly if you have a growing business with changing assets, employees, or vehicles. Any major life/business event also triggers a review." },
    ],
  },

  // ===========================
  // MONSOON SEASON (JUNE-SEPT)
  // ===========================

  "monsoon-car-insurance-chennai": {
    slug: "monsoon-car-insurance-chennai",
    seasonCategory: "monsoon",
    seasonTag: "June-Nov — Monsoon Season",
    urgency: "medium",
    seoTitle: "Monsoon Car & Bike Insurance Chennai — Flood, Waterlogging & Engine Damage Coverage",
    seoDesc: "Monsoon car insurance for Chennai. Engine protection add-on, flood damage coverage, zero depreciation, and waterlogging claim guide. Prepare your vehicle insurance before Chennai monsoon season.",
    heroH1: "Monsoon car & bike insurance — Chennai flood and waterlogging coverage",
    heroP: "Chennai monsoon means waterlogged roads, engine hydrostatic lock damage, and electrical failures. Most standard car policies DON'T cover engine damage from waterlogging. Here's how to be prepared.",
    whyNow: [
      "Chennai receives heavy rainfall from October to December (NE monsoon) — waterlogging is annual and guaranteed.",
      "Engine damage from waterlogging is the MOST EXPENSIVE repair — ₹1-5 lakh. Standard policies don't cover it without an add-on.",
      "If you buy the add-on AFTER monsoon damage, it won't cover existing claims. Buy BEFORE the rain starts.",
      "Two-wheelers on waterlogged roads face skidding and electrical damage — comprehensive coverage with zero depreciation helps.",
    ],
    whoThisHelps: [
      "Car owners in Chennai's flood-prone areas — Velachery, Nungambakkam, T. Nagar, Adyar, Mylapore, OMR.",
      "Daily commuters who drive through waterlogged roads during heavy rain.",
      "Two-wheeler owners whose bikes are parked on streets during heavy rainfall.",
      "IT corridor commuters driving through OMR/ECR waterlogging zones.",
    ],
    actionChecklist: [
      { title: "Check if you have Engine Protection add-on", text: "Look at your policy document. 'Engine Protect' or 'Hydrostatic Lock' add-on covers engine damage from water ingestion. Without this, repairs come from your pocket." },
      { title: "Add Zero Depreciation if under 5 years", text: "Without zero dep, you pay 30-50% of replacement parts cost. During monsoon claims with multiple damaged parts, this adds up fast." },
      { title: "Check your IDV is adequate", text: "Low IDV = low claim payout. If your car's IDV is below market value, you're underinsured. Fix this before monsoon." },
      { title: "Keep emergency claim documents ready", text: "Policy copy, RC, driving license, agent's number — keep these handy in your car. During flood situations, you need to act fast." },
    ],
    whatYouGet: [
      "Policy audit: we check if your current car/bike insurance has the right add-ons for monsoon protection.",
      "Add-on recommendation: engine protection, zero depreciation, roadside assistance — which ones YOU need based on your area.",
      "Claim guidance for flood damage: what to do in the first hour, how to preserve evidence, and what NOT to do.",
      "Mid-term add-on addition: if your renewal is months away, we check if add-ons can be added mid-term.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp your policy", text: "Send your current car/bike insurance policy. We check what add-ons you have and what's missing." },
      { title: "Step 2 — Monsoon readiness report", text: "We tell you exactly what add-ons to add, whether IDV is adequate, and estimated cost." },
      { title: "Step 3 — Add-on or renewal with coverage", text: "We add missing coverage immediately or set up proper coverage at your next renewal." },
    ],
    comparisonTable: {
      title: "Comprehensive alone vs. comprehensive + Engine Protection",
      intro: "This is the single most costly gap in monsoon car cover.",
      columns: ["What matters", "Comprehensive only", "+ Engine Protection add-on"],
      rows: [
        ["Exterior/interior flood damage", "Covered", "Covered"],
        ["Engine hydrostatic lock damage", "Not covered — ₹1-5 lakh out of pocket", "Covered"],
        ["When to add it", "Too late after damage occurs", "Must be added before monsoon starts"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance Guide", href: EN("/policies/car-insurance/") },
      { label: "Bike Insurance Guide", href: EN("/policies/bike-insurance/") },
      { label: "Claim Support", href: EN("/insurance-claim-help/") },
      { label: "Insurance Renewal", href: EN("/insurance-renewal-near-me/") },
    ],
    faqs: [
      { q: "Does car insurance cover flood and waterlogging damage?", a: "Comprehensive car insurance covers flood damage to exterior and interiors. But ENGINE damage from waterlogging (hydrostatic lock) requires an Engine Protection add-on, which is separate." },
      { q: "What is hydrostatic lock damage?", a: "When a car drives into deep water, water enters the engine through the air intake. If the engine is on, the pistons try to compress water (incompressible), causing catastrophic engine damage. Repair cost: ₹1-5 lakh." },
      { q: "Should I start my car if it's been in flood water?", a: "NEVER start a car that has been submerged or standing in flood water. Call for towing. Starting the engine can cause hydrostatic lock damage, and the insurer may reject the claim if engine damage was caused by human error." },
      { q: "Can I add engine protection mid-term?", a: "Some insurers allow mid-term add-ons; others require it at policy inception or renewal. We check with your specific insurer and advise." },
      { q: "Which areas in Chennai are most flood-prone?", a: "Velachery, Nungambakkam, T. Nagar basin areas, Adyar river zones, Pallikaranai marsh areas, OMR low-lying zones, and Mylapore. If you live or commute through these areas, engine protection is essential." },
    ],
  },

  // ===========================
  // MID-YEAR REVIEW (SEPTEMBER-OCTOBER)
  // ===========================

  "mid-year-insurance-review": {
    slug: "mid-year-insurance-review",
    seasonCategory: "quarterly",
    seasonTag: "September-October — Q2 Review",
    urgency: "medium",
    seoTitle: "Mid-Year Insurance Review — Check Your Coverage Before Year-End | H2 Insurance Audit",
    seoDesc: "Mid-year insurance review: check if your coverage is adequate, update sum insured, review claims experience, and prepare for year-end renewals. For companies and individuals in Chennai.",
    heroH1: "Mid-year insurance review — is your coverage still adequate?",
    heroP: "Six months into the financial year — have your circumstances changed? New vehicle, new employee, expanded warehouse, medical event? A mid-year review catches gaps before they become claim problems.",
    whyNow: [
      "Business changes in H1 (April-September) — new assets, employees, locations — may not be reflected in your insurance.",
      "If your claim ratio is high in H1, you need to plan for a potentially expensive renewal in March.",
      "Personal life changes — marriage, baby, health issue — change your insurance needs significantly.",
      "Q2 review gives you time to fix gaps BEFORE the Q3-Q4 rush.",
    ],
    whoThisHelps: [
      "Company Admin/HR who added employees, vehicles, or locations in H1 but haven't updated insurance.",
      "Business owners who expanded operations — new warehouse, new factory line, new vehicle fleet.",
      "Individuals who had a life event — marriage, childbirth, parents' health issues — and need to update coverage.",
      "Anyone who hasn't looked at their insurance policies since they were issued.",
    ],
    actionChecklist: [
      { title: "List all changes since April", text: "New vehicles? New employees? New assets? New location? Health events? Make a list of everything that changed." },
      { title: "Check if changes are reflected in policies", text: "Many changes require endorsements or new policies. Uninsured assets = uninsured losses." },
      { title: "Review claims from H1", text: "Had any claims? Were they smooth or problematic? Problems indicate documentation or coverage gaps we can fix." },
      { title: "Prepare for March renewal early", text: "If your H1 claim ratio is high, start planning now. We can negotiate early or explore alternative insurers." },
    ],
    whatYouGet: [
      "Complete insurance audit — we review all your active policies against your current situation.",
      "Gap report — specific recommendations on what's missing, what's inadequate, and what to add.",
      "Endorsement processing — we handle mid-term additions and changes with your insurer.",
      "Renewal planning — early visibility into March renewal expectations and costs.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share current policies + changes", text: "WhatsApp all active policies and tell us what changed since April." },
      { title: "Step 2 — We audit and report", text: "We compare your policies against your current situation and send a gap analysis report." },
      { title: "Step 3 — Fix gaps now", text: "We process endorsements, additions, and new policies as needed. No waiting until March." },
    ],
    comparisonTable: {
      title: "Skipping the mid-year review vs. doing it",
      intro: "Six months is long enough for real changes to slip past your coverage unnoticed.",
      columns: ["What matters", "No mid-year review", "Reviewed at H1"],
      rows: [
        ["New assets/employees since April", "May be uninsured until March renewal", "Endorsed and covered now"],
        ["High H1 claim ratio", "Discovered as a shock at March renewal", "Negotiation planned early"],
        ["Life events (marriage, baby)", "Coverage may lag behind reality", "Updated as they happen"],
      ],
    },

    recommendedServices: [
      { label: "All Services", href: EN("/services/") },
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
    ],
    faqs: [
      { q: "Do I really need a mid-year insurance review?", a: "If NOTHING changed since your last policy — no new assets, employees, vehicles, or life events — probably not. But if anything changed, yes. Uninsured changes become uninsured losses during claims." },
      { q: "Can I add a new vehicle to my fleet policy mid-term?", a: "Yes. Mid-term endorsements for new vehicle additions are standard. We handle the paperwork with your insurer." },
      { q: "What if my group health claim ratio is already high?", a: "Start planning early. We can negotiate with the current insurer, explore alternatives, or recommend plan design changes (deductibles, room rent changes) to manage the renewal premium." },
    ],
  },

  // ===========================
  // YEAR-END / CALENDAR YEAR (DECEMBER-JANUARY)
  // ===========================

  "year-end-insurance-review-checklist": {
    slug: "year-end-insurance-review-checklist",
    seasonCategory: "calendar-year",
    seasonTag: "December-January — Year-End Review",
    urgency: "medium",
    seoTitle: "Year-End Insurance Review Checklist — Annual Coverage Audit Before January | Chennai",
    seoDesc: "Year-end insurance review checklist: audit all personal and business policies, check coverage gaps, and plan next year's insurance needs. Annual coverage review guide for Chennai.",
    heroH1: "Year-end insurance review — annual coverage audit checklist",
    heroP: "December-January is reflection time. Before a new calendar year starts, review every insurance policy you hold — personal and business. Catch gaps, update values, and start the new year fully protected.",
    whyNow: [
      "Calendar year end is a natural review point — personal policies often follow calendar year cycles.",
      "Health insurance waiting periods count from policy start — buying in January means coverage starts building early.",
      "Asset values change with inflation — sum insured should be updated at least annually.",
      "Tax planning for the next FY (April) starts best in January — insurance is a key component.",
    ],
    whoThisHelps: [
      "Individuals wanting to review all personal insurance — car, bike, health, life, home.",
      "Families planning health coverage changes — adding parents, upgrading to family floater.",
      "Small business owners who haven't reviewed commercial insurance in over a year.",
      "Anyone who wants to start the new year with complete, optimized insurance coverage.",
    ],
    actionChecklist: [
      { title: "List every active policy", text: "Car, bike, health, life (LIC), home, business, fire, liability — list everything with premium, expiry date, and sum insured." },
      { title: "Check health insurance adequacy", text: "Is your health cover enough? Medical inflation is 14% per year. ₹5 lakh cover from 3 years ago may not be adequate today." },
      { title: "Review life insurance adequacy", text: "Major life changes (marriage, baby, home loan) change your life cover needs. Is your term/LIC coverage still enough?" },
      { title: "Update vehicle insurance", text: "Check IDV on car/bike policies. Sold any vehicles? Bought new ones? Update the list." },
      { title: "Plan tax-saving purchases", text: "January-March window: plan Section 80C (LIC) and 80D (health) purchases early — don't rush in March." },
    ],
    whatYouGet: [
      "Annual insurance audit — we review every policy you hold and provide a comprehensive gap report.",
      "Upgrade recommendations — where your coverage needs to increase based on current values and needs.",
      "Renewal calendar for the next year — all expiry dates tracked with 45-day advance reminders.",
      "Tax planning alignment — we ensure your insurance purchases are optimized for Section 80C/80D benefits.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share all policies", text: "WhatsApp every active policy document — personal and business. Include LIC policies too." },
      { title: "Step 2 — Complete audit", text: "We review coverage adequacy, gaps, and expiry dates. You get a clear report with specific recommendations." },
      { title: "Step 3 — Action plan", text: "We create a month-by-month action plan for the coming year — renewals, upgrades, and new purchases." },
    ],
    comparisonTable: {
      title: "Sum insured from 3 years ago vs. updated for today",
      intro: "Medical inflation alone runs around 14% a year — old figures fall behind fast.",
      columns: ["What matters", "Unreviewed for 3 years", "Reviewed annually"],
      rows: [
        ["Health sum insured", "May be inadequate against today's hospital costs", "Matched to current medical inflation"],
        ["Vehicle IDV", "May not reflect current market value", "Checked at each review"],
        ["Life cover adequacy", "May not reflect marriage/kids/loans since purchase", "Updated as circumstances change"],
      ],
    },

    recommendedServices: [
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Car Insurance Guide", href: EN("/policies/car-insurance/") },
      { label: "Life Insurance Near Me", href: EN("/life-insurance-near-me/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "How often should I review my insurance?", a: "At minimum, annually. The year-end is a natural time. But also review after any major life event — marriage, baby, home purchase, new vehicle, parents ageing." },
      { q: "Can you review LIC policies too?", a: "Yes. We review LIC policies for coverage adequacy, premium vs. benefit analysis, and whether additional term insurance is needed." },
      { q: "Is this review service free?", a: "Yes. The review and recommendations are free. We earn commission from insurers when you buy or renew through us — same premium you'd pay anywhere else." },
    ],
  },

  // ===========================
  // URGENCY × ENTITY — What HR / Admin / MSME owners actually search
  // ===========================

  "urgent-group-health-insurance-renewal-company": {
    slug: "urgent-group-health-insurance-renewal-company",
    seasonCategory: "financial-year",
    seasonTag: "March — Urgent Renewal",
    urgency: "high",
    seoTitle: "Urgent Group Health Insurance Renewal for Company — Last Minute Before March 31",
    seoDesc: "Urgent group health insurance renewal for your company before March 31. Same-day processing, employee list updates, insurer negotiation. Don't let employees go uninsured — contact now for fast renewal.",
    heroH1: "Urgent group health insurance renewal for your company — last minute? We handle it",
    heroP: "March 31 is tomorrow and your group health policy hasn't been renewed? We process urgent renewals same-day. Employee list updates, insurer negotiation, and policy issuance — all handled under deadline pressure.",
    whyNow: [
      "Employees are UNINSURED the moment the policy lapses — even one day gap means hospital bills come from your pocket.",
      "Group health policies cannot be backdated — if it lapses March 31, coverage starts only when renewed, not retroactively.",
      "Claim continuity for pre-existing conditions breaks if there's a gap — employees with ongoing treatments lose their coverage benefit.",
      "Last-minute renewals often get auto-renewed at old terms — you might be paying 20-30% more than needed because nobody negotiated.",
    ],
    whoThisHelps: [
      "HR managers who received renewal notice late and need to process before March 31.",
      "Admin teams at SMEs/MSMEs who forgot to initiate renewal and now it's urgent.",
      "Company founders handling insurance directly — no dedicated HR, deadline approaching.",
      "IT companies, manufacturing units, SMEs with 10-500 employees facing group health expiry.",
    ],
    actionChecklist: [
      { title: "Send current policy copy immediately", text: "WhatsApp your group health policy document right now. We need policy number, insurer name, sum insured, and expiry date." },
      { title: "Send employee + dependent list", text: "Excel or PDF — current employees and dependents. Additions/deletions from last year. Even a rough list works; we'll clean it up." },
      { title: "Share claims data if available", text: "Last year's claim ratio affects renewal premium. If you have the claims summary, share it. If not, we'll get it from the insurer." },
      { title: "Decide: renew same or compare?", text: "If time is very tight (1-2 days), we renew with same insurer at best negotiated terms. If 3-5 days, we can compare 2-3 alternatives." },
    ],
    whatYouGet: [
      "Same-day renewal processing — we can initiate and complete renewal within hours for existing insurers.",
      "Insurer negotiation even under time pressure — we push for better terms, not just auto-renewal.",
      "Zero-gap coverage — we ensure policy continuity with no break in coverage for employees.",
      "Post-renewal cleanup — employee list corrections, endorsements, and e-cards issued within a week.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp policy + employee list NOW", text: "Send whatever you have. Policy copy, employee list, even just the policy number. We start immediately." },
      { title: "Step 2 — We process same-day", text: "We contact the insurer, negotiate renewal terms, prepare proposal, and get approval within hours." },
      { title: "Step 3 — Renewed before deadline", text: "Policy renewed, confirmation received, and zero gap in employee coverage." },
    ],
    comparisonTable: {
      title: "Renewal timeline — same insurer vs. switching",
      intro: "If you're up against the deadline, this determines what's realistically possible.",
      columns: ["Path", "Timeline"],
      rows: [
        ["Same insurer, urgent renewal", "Same-day, sometimes within hours"],
        ["Switching to a new insurer", "3-5 days minimum"],
        ["Already lapsed", "Some insurers allow a 15-30 day grace window — act immediately"],
      ],
    },

    recommendedServices: [
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Corporate Renewal Checklist", href: EN("/seasonal/corporate-insurance-renewal-checklist/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Contact Us", href: EN("/contact/") },
    ],
    faqs: [
      { q: "Can group health be renewed same-day?", a: "Yes, with the same insurer. We contact them directly, process the renewal, and get confirmation within hours. Switching insurers takes 3-5 days minimum." },
      { q: "What if the policy already lapsed yesterday?", a: "Contact us immediately. Some insurers allow renewal within a 15-30 day grace window without breaking continuity. The sooner you act, the better." },
      { q: "My HR person left and nobody handled renewal. What now?", a: "This is common in SMEs. Send us whatever documents you have — old policy, employee list — and we take over the entire renewal. You don't need insurance expertise." },
      { q: "Will premium increase for last-minute renewal?", a: "No. The premium isn't affected by WHEN you renew (last minute vs. advanced). It depends on claim ratio, employee count, and age profile. We negotiate regardless of timing." },
    ],
  },

  "affordable-fleet-insurance-renewal-march": {
    slug: "affordable-fleet-insurance-renewal-march",
    seasonCategory: "financial-year",
    seasonTag: "March — Affordable Fleet",
    urgency: "high",
    seoTitle: "Affordable Fleet Insurance Renewal Before March 31 — Bulk Rates for Transport Companies",
    seoDesc: "Affordable fleet insurance renewal before March 31. Bulk discount rates for transport operators with 5-500 vehicles. Lorry, truck, tanker, trailer — compare premiums across insurers. Save 10-25% on fleet renewal.",
    heroH1: "Affordable fleet insurance renewal before March 31 — bulk rates for transport companies",
    heroP: "Your fleet policies are expiring in March. Renewing one-by-one at retail rates? You're overpaying. We negotiate bulk fleet rates across multiple insurers and save transport operators 10-25% on total fleet premium.",
    whyNow: [
      "Most fleet policies follow the FY cycle — all vehicles expire together in March, and bulk renewal gets better rates.",
      "Vehicle IDV depreciates each year — if the insurer hasn't updated, you're paying premium on inflated values.",
      "Permit and fitness validity should be checked against insurance — mismatch can cause claim rejection.",
      "Bulk renewal with one agent means one point of contact for claims, renewals, endorsements — no chasing 50 different people.",
    ],
    whoThisHelps: [
      "Transport company owners with 5-500 commercial vehicles (lorry, truck, tanker, trailer, bus).",
      "Fleet managers responsible for timely renewal of all vehicle insurance across the fleet.",
      "Logistics company admins managing mixed fleets — light commercial + heavy vehicles.",
      "MSME manufacturers with 3-20 delivery vehicles needing affordable renewal.",
    ],
    actionChecklist: [
      { title: "Send complete vehicle list", text: "Excel with registration number, make/model, year, current insurer, expiry date, and current premium for EVERY vehicle." },
      { title: "Check permit and fitness validity", text: "Ensure all vehicles have valid permits and fitness certificates. Lapsed permits = claim issues regardless of insurance." },
      { title: "Review IDV across fleet", text: "IDV (Insured Declared Value) should match current market value. Too high = overpaying. Too low = underinsured." },
      { title: "Claims history for each vehicle", text: "Vehicles with no claims get NCB (No Claim Bonus) — up to 50% discount. We verify NCB status for every vehicle." },
    ],
    whatYouGet: [
      "Bulk fleet negotiation — we approach 3-4 insurers with your full fleet for volume discount rates.",
      "Fleet-level IDV optimization — correct valuation for each vehicle, no overpayment on depreciated assets.",
      "NCB tracking per vehicle — maximize No Claim Bonus savings across the fleet.",
      "Single expiry tracker — all vehicles renewed together, one renewal date, one contact for everything.",
      "Claims support year-round — not just at renewal. Accident, theft, third-party — we handle it.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp vehicle list", text: "Send your full fleet list (Excel preferred). Even send photos of RC books — we'll extract the data." },
      { title: "Step 2 — We compare bulk rates", text: "We get fleet quotes from 3-4 insurers and present a comparison — premium, IDV, coverage differences." },
      { title: "Step 3 — Bulk renewal with zero gaps", text: "All vehicles renewed before expiry. Policy copies, e-copies, and fleet tracker provided." },
    ],
    comparisonTable: {
      title: "Renewing vehicle-by-vehicle vs. bulk fleet renewal",
      intro: "The gap widens as fleet size grows.",
      columns: ["What matters", "Vehicle-by-vehicle", "Bulk fleet renewal"],
      rows: [
        ["Premium", "Retail rate per vehicle", "10–25% savings typically"],
        ["IDV accuracy", "Inconsistent across vehicles", "Reviewed together, correctly valued"],
        ["Points of contact", "Potentially different agents/insurers", "One contact for the whole fleet"],
      ],
    },

    recommendedServices: [
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { label: "Commercial Vehicle Insurance Guide", href: EN("/policies/commercial-vehicle-insurance/") },
      { label: "Corporate Renewal Checklist", href: EN("/seasonal/corporate-insurance-renewal-checklist/") },
      { label: "Insurance Renewal", href: EN("/insurance-renewal-near-me/") },
    ],
    faqs: [
      { q: "How much can I save with bulk fleet renewal?", a: "Typically 10-25% compared to renewing vehicles individually. Volume discounts, NCB optimization, and correct IDV together create significant savings on large fleets." },
      { q: "Can you handle mixed fleets — lorries + cars + bikes?", a: "Yes. We handle any combination — heavy commercial vehicles, light commercial, cars, bikes. Each vehicle gets the right policy type at fleet-negotiated rates." },
      { q: "What if some vehicles in my fleet already expired?", a: "We renew expired vehicles immediately. NCB is lost if lapsed more than 90 days, but we still negotiate the best available rate." },
      { q: "Do you handle fleet claims too, or only renewal?", a: "Full-year fleet management — renewal, claims, endorsements, new vehicle additions, sold vehicle deletions. One point of contact for everything." },
    ],
  },

  "last-minute-corporate-insurance-renewal-chennai": {
    slug: "last-minute-corporate-insurance-renewal-chennai",
    seasonCategory: "financial-year",
    seasonTag: "March — Last Minute",
    urgency: "high",
    seoTitle: "Last Minute Corporate Insurance Renewal Chennai — Same Day Processing Before March 31",
    seoDesc: "Last minute corporate insurance renewal in Chennai. Group health, fire, WC, liability — same day processing before March 31. Don't let company policies lapse. IRDAI licensed agent, 30+ years experience.",
    heroH1: "Last minute corporate insurance renewal — same day processing in Chennai",
    heroP: "It's late March and your company's insurance policies are about to expire. Group health, fire, workmen compensation, liability — we process last-minute corporate renewals the same day. No judgment, just action.",
    whyNow: [
      "Corporate policy lapse = company liability. If an employee gets hospitalized or a fire happens during lapse, the company pays from its own pocket.",
      "Workmen Compensation policy lapse is a LEGAL violation — WC Act compliance requires active coverage at all times.",
      "Fire insurance lapse while stock/inventory is in the warehouse = total exposure. One incident without coverage can bankrupt an MSME.",
      "Last-minute doesn't mean you accept any terms. Even under deadline pressure, we negotiate — every percentage point saved matters on large premiums.",
    ],
    whoThisHelps: [
      "MSME owners who've been too busy running the business to handle insurance renewal.",
      "Finance/Admin managers who received renewal quotes late and need same-day processing.",
      "Startup founders managing everything themselves — insurance fell through the cracks.",
      "Manufacturing companies, IT firms, service companies — any business with expiring commercial policies.",
    ],
    actionChecklist: [
      { title: "List all expiring policies NOW", text: "Group health, fire, WC, public liability, professional indemnity, fleet — list every policy with expiry date and current premium." },
      { title: "WhatsApp all policy documents", text: "Send photos/PDFs of every expiring policy. We extract the details and start processing immediately." },
      { title: "Prioritize by risk", text: "Group health and WC are most urgent (people/legal risk). Fire next (asset risk). Liability last (but still important)." },
      { title: "Authorize payment", text: "Have cheque/NEFT/RTGS ready. Fastest processing happens when payment authorization is pre-approved by the signatory." },
    ],
    whatYouGet: [
      "Same-day processing — we initiate renewal within 1 hour of receiving your documents.",
      "Priority handling — last-minute renewals get dedicated attention, not queued behind other work.",
      "Quick negotiation — even under time pressure, we push for better terms than auto-renewal.",
      "Multi-policy coordination — all policies processed together, nothing missed.",
      "Post-deadline cleanup — any endorsements or adjustments handled after the rush.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp everything NOW", text: "Send all expiring policy documents. Even partial information works — we fill in gaps by contacting insurers directly." },
      { title: "Step 2 — Priority processing", text: "We contact insurers, negotiate terms, prepare proposals. All policies processed in parallel." },
      { title: "Step 3 — Renewed before midnight", text: "All policies renewed with zero lapse. Confirmations and documents follow." },
    ],
    comparisonTable: {
      title: "What to prioritize when time is short",
      intro: "If you can't renew everything at once, this is the order that matters most.",
      columns: ["Policy type", "Why it's urgent"],
      rows: [
        ["Group health / WC", "People risk — employees uninsured immediately on lapse"],
        ["Fire / property", "Asset risk — one incident during a gap is a full loss"],
        ["Liability", "Still important, but typically lower immediate exposure than the above"],
      ],
    },

    recommendedServices: [
      { label: "Corporate Renewal Checklist", href: EN("/seasonal/corporate-insurance-renewal-checklist/") },
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "Can you really process corporate renewal same-day?", a: "Yes, for renewals with the same insurer. Same insurer renewal can be processed within hours. Switching insurers requires 3-5 days minimum." },
      { q: "It's March 30 — is it too late?", a: "No. We handle March 30 and March 31 renewals every year. Call or WhatsApp immediately. We prioritize deadline-critical renewals." },
      { q: "What if I only have the old policy and nothing else?", a: "That's enough to start. We extract all details from the old policy, contact the insurer for renewal terms, and process everything." },
      { q: "Can I pay by UPI/NEFT for faster processing?", a: "Yes. Online payment (NEFT/RTGS/UPI) is fastest. Cheque clearance adds 1-2 days. For last-minute renewals, digital payment is recommended." },
    ],
  },

  // ===========================
  // QUALITY × ENTITY — "Best" / "Trusted" combinations
  // ===========================

  "best-group-health-insurance-sme-chennai": {
    slug: "best-group-health-insurance-sme-chennai",
    seasonCategory: "financial-year",
    seasonTag: "All Year — SME Focus",
    urgency: "medium",
    seoTitle: "Best Group Health Insurance for SME in Chennai — Compare Plans for 10-200 Employees",
    seoDesc: "Best group health insurance for SME companies in Chennai. Compare Star Health, HDFC ERGO, Care Health, ICICI Lombard plans for 10-200 employees. Room rent, cashless network, premium comparison by a 4.9★ rated agent.",
    heroH1: "Best group health insurance for SME companies in Chennai",
    heroP: "Finding group health insurance for a 10-200 employee company is confusing. Every insurer claims to be the best. Here's what actually matters — cashless hospital network near your office, room rent limits, claim settlement speed, and premium vs. coverage value.",
    whyNow: [
      "SME employees expect health insurance as a basic benefit — it's no longer optional for talent retention.",
      "Group health is 30-40% cheaper than individual health insurance — leverage your employee count for better rates.",
      "GST input credit on group health premium reduces your effective cost further.",
      "Buying during non-peak season (April-December) means more attention and better negotiation from insurers.",
    ],
    whoThisHelps: [
      "SME/MSME founders evaluating group health for the first time — 10-50 employees.",
      "HR managers at mid-size companies (50-200 employees) comparing renewal options.",
      "IT company founders offering group health as an employee benefit.",
      "Manufacturing/trading company owners who want affordable employee health coverage.",
    ],
    actionChecklist: [
      { title: "Define your employee count and budget", text: "How many employees + dependents? What can you spend per employee per year? ₹3,000-8,000/employee/year is the SME range." },
      { title: "List your office and employee locations", text: "Cashless hospital network matters. Where is your office? Where do most employees live? We match insurer networks accordingly." },
      { title: "Decide coverage structure", text: "Employee only? Employee + spouse? Employee + family? Family floater or individual sum insured? Each changes the premium." },
      { title: "Check maternity and pre-existing needs", text: "Any employees likely to need maternity coverage? Any with pre-existing conditions? These affect plan selection significantly." },
    ],
    whatYouGet: [
      "Multi-insurer comparison — we compare 4-5 insurers for your specific company profile.",
      "Cashless network mapping — which insurer has the best hospital network near YOUR office and employees' homes.",
      "Total cost analysis — premium + GST + employer/employee split options.",
      "Claim process comparison — how easy is it to make claims with each insurer (not just premium).",
      "Post-purchase management — endorsements, additions, claim support throughout the year.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share company details", text: "Employee count, age distribution, office location, budget, and any special requirements (maternity, pre-existing coverage)." },
      { title: "Step 2 — We compare 4-5 insurers", text: "Customized comparison: premium, network, room rent, sub-limits, claim process, insurer reputation." },
      { title: "Step 3 — You choose, we handle", text: "Once you select, we handle proposal submission, employee onboarding, e-card distribution, and year-round support." },
    ],
    comparisonTable: {
      title: "Typical group health cost per employee",
      intro: "A rough budget reference — exact numbers depend on age profile and coverage structure.",
      columns: ["Coverage structure", "Typical annual cost"],
      rows: [
        ["Employee only", "₹3,000–6,000/employee/year"],
        ["Employee + family", "₹8,000–15,000/employee/year"],
      ],
    },

    recommendedServices: [
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Cashless Health Insurance Chennai", href: EN("/cashless-health-insurance-chennai/") },
      { label: "Affordable Insurance Chennai", href: EN("/affordable-insurance-chennai/") },
    ],
    faqs: [
      { q: "What's the minimum employees for group health?", a: "Most insurers require 7-10 employees minimum. Some newer plans work with 5 employees. We find options that match your company size." },
      { q: "How much does group health insurance cost per employee?", a: "For an SME with average employee age 25-35: ₹3,000-6,000/employee/year (employee only). Employee + family: ₹8,000-15,000/employee/year. Exact premium depends on age profile and coverage." },
      { q: "Which is the best insurer for SME group health?", a: "There's no single best. Star Health has the largest hospital network. HDFC ERGO has good claim processing. Care Health is often most affordable. We compare all for YOUR specific company profile." },
      { q: "Can employees top-up beyond the group health sum insured?", a: "Yes. We can add super top-up plans for employees who want higher coverage. Some companies offer this as an optional employee-paid benefit." },
    ],
  },

  "factory-insurance-renewal-financial-year": {
    slug: "factory-insurance-renewal-financial-year",
    seasonCategory: "financial-year",
    seasonTag: "March-April — Manufacturing",
    urgency: "high",
    seoTitle: "Factory Insurance Renewal Financial Year End — Fire, Machinery, Stock, WC | Manufacturing",
    seoDesc: "Factory insurance renewal before FY end. Fire, machinery breakdown, stock, workmen compensation — checklist for manufacturing companies. Update sum insured, stock declaration, and fire load assessment. Chennai manufacturing insurance expert.",
    heroH1: "Factory insurance renewal — March 31 deadline for manufacturing companies",
    heroP: "Manufacturing owners: your factory's fire, machinery, stock, and WC policies are expiring with the financial year. This isn't just a renewal — it's a chance to fix coverage gaps before they become claim rejections.",
    whyNow: [
      "Fire policy sum insured MUST match current replacement cost — if you expanded or added machinery this year, old sum insured is inadequate.",
      "Stock value fluctuates — average stock declaration at renewal should reflect actual maximum stock stored, not last year's figure.",
      "Workmen Compensation coverage should reflect current wage roll — if you hired more workers, the old WC policy won't cover all of them.",
      "Machinery breakdown policy should include any new machines added this year — unlisted machines are uninsured machines.",
    ],
    whoThisHelps: [
      "Factory owners in Chennai's industrial belts — Ambattur, Guindy, Manali, Oragadam, Sriperumbudur.",
      "Manufacturing company finance/admin teams handling multi-policy renewals.",
      "MSME manufacturers with 10–500 crore asset base needing comprehensive coverage.",
      "Export-oriented manufacturers who need insurance compliance for buyer audits.",
    ],
    actionChecklist: [
      { title: "Update building + machinery valuation", text: "Get current replacement cost (not book value). Include all additions — new machines, renovations, expansion. Old valuation = under-insured = partial claim payout." },
      { title: "Update stock declaration", text: "Average stock held during peak season. Don't declare minimum if you hold 3x more during peak — underinsurance penalty applies at claim time." },
      { title: "Update worker count and wage roll", text: "WC policy covers workers on the roll. Contract workers too if applicable. Undeclared workers = uncovered workers." },
      { title: "Check fire load and safety compliance", text: "Fire NOC, hydrant system, fire extinguishers — insurers check these at renewal. Non-compliance = higher premium or coverage exclusions." },
      { title: "Review machinery breakdown coverage", text: "List all critical machines with make, year, and value. New additions need separate endorsement or mention." },
    ],
    whatYouGet: [
      "Factory insurance audit — we physically or virtually review your coverage against actual factory assets.",
      "Sum insured optimization — not too high (overpaying), not too low (underinsured).",
      "Multi-policy coordination — fire, machinery, stock, WC, PL all renewed as a comprehensive factory package.",
      "Insurer comparison for industrial risks — New India, United India, ICICI Lombard, Bajaj — who gives the best terms for YOUR factory profile.",
      "Claims year-round, not just renewal — fire, breakdown, theft, WC — we handle the documentation and follow-up.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share current factory policies", text: "All policies — fire, machinery, stock, WC, liability. Plus any factory photos, asset lists, or valuation reports." },
      { title: "Step 2 — We audit and recommend", text: "We check each policy against your current factory reality. Gaps, under-valuation, and missing coverages identified." },
      { title: "Step 3 — Coordinated renewal", text: "All factory policies renewed together. Updated valuations, correct coverage, competitive premium." },
    ],
    comparisonTable: {
      title: "Underinsured factory vs. correctly valued",
      intro: "The average clause is the single biggest reason factory fire claims settle for less than expected.",
      columns: ["What matters", "Underinsured (e.g. 40%)", "Correctly valued"],
      rows: [
        ["₹80L partial loss on ₹2Cr actual value", "Paid only 40% (₹32L)", "Paid in full up to sum insured"],
        ["WC coverage for contract workers", "Uncovered if undeclared", "Covered when properly declared"],
      ],
    },

    recommendedServices: [
      { label: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") },
      { label: "Machinery Breakdown Insurance", href: EN("/services/industrial/machinery-breakdown-boiler-insurance/") },
      { label: "Insurance Sholinganallur", href: EN("/locations/sholinganallur/") },
    ],
    faqs: [
      { q: "What's the most common factory insurance mistake?", a: "Under-declaring sum insured to save premium. When a fire happens and loss is ₹2 crore but your policy says ₹80 lakh, the insurer applies 'average clause' — you get only 40% of even that ₹80 lakh." },
      { q: "Do I need separate policies for fire, machinery, and stock?", a: "SFSP (Standard Fire & Special Perils) covers building + stock + machinery for fire/natural calamity. But machinery breakdown, electrical damage, and boiler accidents need separate Machinery Breakdown policy." },
      { q: "Is WC insurance mandatory for factories?", a: "Yes. Under the Workmen's Compensation Act, employers are legally liable. WC insurance is practically mandatory for any factory or construction activity." },
      { q: "Can contract workers be covered under our WC policy?", a: "Yes. But they must be declared with estimated wages. Undeclared contract workers are not covered, and YOU the principal employer remain liable." },
    ],
  },

  // ===========================
  // SPEED × ENTITY — "Fast" / "Quick" / "Instant" combinations
  // ===========================

  "fast-commercial-vehicle-insurance-renewal": {
    slug: "fast-commercial-vehicle-insurance-renewal",
    seasonCategory: "financial-year",
    seasonTag: "Year-Round — Fast Renewal",
    urgency: "high",
    seoTitle: "Fast Commercial Vehicle Insurance Renewal — Same Day Lorry, Truck, Tanker Policy Renewal",
    seoDesc: "Fast commercial vehicle insurance renewal. Same-day lorry, truck, tanker, bus, trailer policy renewal. Vehicle stuck without insurance? We process renewal within hours. Chennai commercial vehicle insurance expert.",
    heroH1: "Fast commercial vehicle insurance renewal — same day lorry, truck & tanker renewal",
    heroP: "Your commercial vehicle insurance expired and the vehicle is stuck — can't operate, can't load, can't cross a toll. We process commercial vehicle renewals within hours. Call or WhatsApp now, vehicle back on road today.",
    whyNow: [
      "Commercial vehicle without insurance CANNOT legally operate — it's a Motor Vehicles Act offence.",
      "If caught without insurance at a checkpoint/toll, fine is ₹2,000 + vehicle can be detained.",
      "If an accident happens during lapse — the owner is personally liable for third-party damages (unlimited liability).",
      "Every day off-road = revenue loss. A lorry earning ₹3,000-5,000/day sitting idle is expensive.",
    ],
    whoThisHelps: [
      "Lorry/truck owners whose vehicle insurance expired and the vehicle is currently off-road.",
      "Fleet operators with one or more vehicles that slipped through the renewal tracker.",
      "Transport company dispatchers who need a vehicle renewed urgently for a loading/trip.",
      "Owner-operators (single vehicle) who can't afford even one day without the vehicle operating.",
    ],
    actionChecklist: [
      { title: "WhatsApp RC + old policy NOW", text: "Send photos of Registration Certificate (RC) and last insurance policy. Front and back of RC. Full policy copy PDF." },
      { title: "Share vehicle details", text: "Registration number, chassis number, engine number, permit type, fitness certificate validity. If you don't have all, send what you have." },
      { title: "Check for pending challans", text: "Outstanding traffic challans on the vehicle can delay insurance processing. Clear them if possible." },
      { title: "Decide on coverage level", text: "Third-party only (legal minimum, cheaper) or comprehensive (full coverage including own damage). We recommend comprehensive for expensive vehicles." },
    ],
    whatYouGet: [
      "Same-day processing — renewal initiated within 30 minutes of receiving documents.",
      "Temporary cover note — while full policy is generated, you get a cover note to operate legally.",
      "Multi-insurer quotes — even under time pressure, we check 2-3 insurers for the best rate.",
      "NCB recovery — if the vehicle has claim-free years, we ensure NCB discount is applied.",
      "Annual fleet tracking — after renewal, we track expiry and remind you 30 days before next year.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp documents", text: "RC copy + old policy. Call +91-7448324068 if super urgent. We start immediately." },
      { title: "Step 2 — Quote in 30 minutes", text: "We quote from 2-3 insurers. You pick. Payment via UPI/NEFT/cheque." },
      { title: "Step 3 — Cover note same day", text: "Cover note (temporary insurance proof) issued within hours. Full policy follows in 1-2 days." },
    ],
    comparisonTable: {
      title: "Third-party vs. comprehensive for commercial vehicles",
      intro: "A quick reference while you decide under time pressure.",
      columns: ["What matters", "Third-party only", "Comprehensive"],
      rows: [
        ["Annual cost (heavy vehicle)", "₹15,000–25,000/year", "₹25,000–50,000/year"],
        ["Own-damage repair cost if uninsured", "₹1–5 lakh out of pocket", "Covered"],
      ],
    },

    recommendedServices: [
      { label: "Commercial Vehicle Insurance Guide", href: EN("/policies/commercial-vehicle-insurance/") },
      { label: "Fleet Insurance", href: EN("/services/transport-fleet/fleet-insurance/") },
      { label: "Insurance Renewal", href: EN("/insurance-renewal-near-me/") },
      { label: "Contact Us", href: EN("/contact/") },
    ],
    faqs: [
      { q: "How fast can you renew my lorry insurance?", a: "Cover note within 2-4 hours. Full policy in 1-2 business days. If documents are complete and payment is ready, we've processed renewals in under 2 hours." },
      { q: "My vehicle insurance expired 3 months ago. Can I still renew?", a: "Yes, but NCB (No Claim Bonus) is lost after 90 days of lapse. Also, the insurer may require vehicle inspection. We handle both." },
      { q: "Can I get insurance for a commercial vehicle with expired permit?", a: "Insurance can be issued, but claims may be rejected if the vehicle is operating without a valid permit. We strongly recommend renewing the permit simultaneously." },
      { q: "What's cheaper — third-party or comprehensive?", a: "Third-party is cheaper (₹15,000-25,000/year for heavy vehicles). But own damage repair for a lorry can cost ₹1-5 lakh. Comprehensive costs ₹25,000-50,000/year and covers everything." },
    ],
  },

  // ===========================
  // COST × ENTITY — "Affordable" / "Cheap" / "Low Premium"
  // ===========================

  "affordable-employee-health-insurance-small-company": {
    slug: "affordable-employee-health-insurance-small-company",
    seasonCategory: "financial-year",
    seasonTag: "All Year — Budget Friendly",
    urgency: "medium",
    seoTitle: "Affordable Employee Health Insurance for Small Company — Low Cost Group Health Plans Chennai",
    seoDesc: "Affordable employee health insurance for small companies in Chennai. Group health plans starting ₹2,500/employee/year for 7-50 employee companies. Compare low cost options from Star Health, Care Health, HDFC ERGO.",
    heroH1: "Affordable employee health insurance for small companies — starting ₹2,500/employee/year",
    heroP: "You want to provide health insurance to your employees but you're a small company — 7-50 people, tight budget. Group health doesn't have to be expensive. Here's how small companies get quality coverage at ₹2,500-6,000 per employee per year.",
    whyNow: [
      "Employee health insurance is the #1 benefit employees value — more than bonuses, gym memberships, or free lunch.",
      "Group health insurance is 30-40% cheaper than individual plans — even small companies get volume pricing.",
      "Section 80D tax benefit on employer-paid premiums reduces effective cost further.",
      "GST input credit available on group health premium — additional cost recovery.",
    ],
    whoThisHelps: [
      "Startup founders with 7-20 employees who want to offer health coverage for the first time.",
      "Small trading/manufacturing/service companies with 10-50 employees on a tight budget.",
      "Company owners who lost employees to competitors offering health insurance.",
      "SME HR managers tasked with finding the cheapest-yet-adequate group health plan.",
    ],
    actionChecklist: [
      { title: "Determine employee count and ages", text: "List employees with date of birth. Average age is the biggest premium driver. A company with average age 26 pays much less than average age 40." },
      { title: "Choose coverage structure", text: "Employee only (cheapest) → Employee + spouse → Employee + family (most expensive). Start with employee-only if budget is tight." },
      { title: "Set a sum insured", text: "₹2-3 lakh for basic. ₹5 lakh for good coverage. ₹10 lakh for premium. Balance between adequacy and budget." },
      { title: "Decide employer vs. employee cost split", text: "Some companies pay 100%. Others do 50-50 or pay for employee and let employee pay for dependents. All structures work." },
    ],
    whatYouGet: [
      "Budget-optimized plan comparison — we specifically look for the best VALUE plans, not just the cheapest premium.",
      "Small company focus — we don't treat 10-employee companies as less important than 500-employee ones.",
      "Flexible structures — employee-only, employee+spouse, full family — customized to your budget.",
      "Cashless hospital check — we ensure the selected insurer has good hospitals near your office and employees' areas.",
      "Year-round support — additions, deletions, claim help, not just at purchase time.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Share employee list", text: "Employee names and dates of birth. We calculate quotes for different coverage levels." },
      { title: "Step 2 — Budget comparison", text: "We present 3-4 options at different budget levels — you choose what fits." },
      { title: "Step 3 — Quick implementation", text: "Policy issued in 3-5 days. Employee e-cards in a week. Cashless from day one." },
    ],
    comparisonTable: {
      title: "Cash allowance vs. group health cover",
      intro: "A common small-company question — here's the real math.",
      columns: ["What matters", "Cash allowance (~₹5,000/year)", "Group health (~₹3,000/employee)"],
      rows: [
        ["Coverage for a medical emergency (₹5-10L cost)", "Doesn't come close to covering it", "₹2-5 lakh sum insured, cashless"],
        ["Employee perception", "Feels like a small extra, not real protection", "A genuine safety net"],
      ],
    },

    recommendedServices: [
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Best Group Health for SME", href: EN("/seasonal/best-group-health-insurance-sme-chennai/") },
      { label: "Affordable Insurance Chennai", href: EN("/affordable-insurance-chennai/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
    ],
    faqs: [
      { q: "What's the cheapest group health insurance for a small company?", a: "For a company with 10 employees (avg age 28), employee-only coverage at ₹2 lakh sum insured costs approximately ₹2,500-3,500 per employee per year. That's ₹25,000-35,000 total." },
      { q: "Can a 7-person company get group health?", a: "Yes. Several insurers offer group health for as few as 5-7 employees. Options are more limited than for 20+ employee companies, but good plans exist." },
      { q: "Is it better to give employees cash instead of health insurance?", a: "No. A medical emergency can cost ₹5-10 lakh. Cash allowance of ₹5,000/year won't help. Group health at ₹3,000/employee provides ₹2-5 lakh coverage — dramatically better value." },
      { q: "Can I add group health as a pre-employment benefit later?", a: "Yes. We help companies start with basic coverage and upgrade each year as the company grows and budget improves." },
    ],
  },

  // ===========================
  // MSME / STARTUP × CHECKLIST
  // ===========================

  "msme-business-insurance-renewal-checklist": {
    slug: "msme-business-insurance-renewal-checklist",
    seasonCategory: "financial-year",
    seasonTag: "March-April — MSME",
    urgency: "high",
    seoTitle: "MSME Business Insurance Renewal Checklist — Fire, WC, Health, Vehicle | Financial Year End",
    seoDesc: "MSME business insurance renewal checklist for financial year end. Fire, workmen compensation, group health, vehicle, liability — complete checklist for MSME and small business owners in Chennai.",
    heroH1: "MSME business insurance renewal checklist — don't miss anything at FY end",
    heroP: "As an MSME owner, you're busy with GST returns, bank compliance, and running operations. Insurance renewal gets pushed to the last day. This checklist ensures every policy is tracked, reviewed, and renewed — nothing slips through.",
    whyNow: [
      "MSME owners typically handle insurance themselves — no dedicated HR or Admin. Things get missed.",
      "Bank/NBFC loan conditions often require active fire and stock insurance — lapsed policy = loan covenant breach.",
      "MSME Udyam registration doesn't automatically cover you — you need actual insurance policies.",
      "A single uninsured incident (fire, employee injury, vehicle accident) can financially destroy an MSME.",
    ],
    whoThisHelps: [
      "MSME owners (manufacturing, trading, services) managing 5-200 employee businesses.",
      "Small factory and workshop owners with fire, machinery, and worker coverage needs.",
      "Trading companies with godown/warehouse stock insurance requirements.",
      "Service companies needing professional indemnity, office insurance, and employee health coverage.",
    ],
    actionChecklist: [
      { title: "Fire / Property / Stock", text: "Check sum insured against current asset + stock value. Bank may require updated valuation. Stock declaration should reflect peak holding." },
      { title: "Workmen Compensation", text: "Required by law if you have workers. Update employee count, wage roll, and include contract workers if applicable." },
      { title: "Group Health (if applicable)", text: "Update employee list. Check claim ratio. Compare premium at renewal. Even 10-employee companies can get group health." },
      { title: "Vehicle Insurance", text: "Every company vehicle — car, bike, delivery van, truck. Check expiry, IDV, NCB. Don't let any lapse." },
      { title: "Public Liability", text: "If customers or public visit your premises. Manufacturing units, shops, offices with visitor traffic." },
      { title: "Professional Indemnity", text: "IT companies, consultants, architects, engineers. Covers errors & omissions in professional services." },
      { title: "Keyman Insurance / LIC", text: "Life cover for the founder/key person whose absence would impact the business. Check premium payment for 80C." },
    ],
    whatYouGet: [
      "Complete MSME insurance audit — we review ALL your policies and identify what's missing or inadequate.",
      "Single-point renewal management — one agent handles fire, health, vehicle, WC, liability — everything.",
      "MSME-friendly pricing — we find plans that fit small business budgets, not corporate-sized premiums.",
      "Bank compliance support — if your lender requires insurance certificates, we provide them in the required format.",
      "Year-round support — claims, endorsements, additions, not just annual renewal.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp all policies", text: "Every policy you have — fire, WC, health, vehicle, liability. Even expired ones. We create your insurance inventory." },
      { title: "Step 2 — We audit and checklist", text: "What do you HAVE vs. what do you NEED? We identify gaps, prioritize by risk, and quote missing coverages." },
      { title: "Step 3 — Comprehensive renewal", text: "All policies renewed, gaps filled, bank certificates provided. Complete MSME insurance sorted for the year." },
    ],
    comparisonTable: {
      title: "Legally required vs. practically necessary",
      intro: "Not everything on your checklist is mandatory — but that doesn't mean it's optional in practice.",
      columns: ["Cover", "Status"],
      rows: [
        ["Workmen Compensation (if you have workers)", "Legally required"],
        ["Motor insurance (company vehicles)", "Legally required"],
        ["Fire/property, group health, public liability", "Not always mandatory, but often required by lenders/tenders or expected by employees"],
      ],
    },

    recommendedServices: [
      { label: "Fire & Property Insurance", href: EN("/services/industrial/fire-burglary-commercial-property-insurance/") },
      { label: "Workmen Compensation", href: EN("/services/construction/workmen-compensation/") },
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "What insurance does an MSME legally NEED?", a: "Legally: WC (if you have workers) and motor insurance (for vehicles). Practically: fire/property (especially if bank-funded), group health (for employee retention), and public liability (if public visits premises)." },
      { q: "How much does a basic MSME insurance package cost?", a: "For a typical manufacturing MSME: Fire (₹10-30K/year), WC (₹5-15K/year), Vehicle (varies), Group Health (₹3-5K/employee). Total depends on asset value and employee count." },
      { q: "Can you handle everything — all policies from one agent?", a: "Yes. Single-point insurance management is what we do. One WhatsApp number for fire, health, vehicle, WC, and liability. No running to 5 different agents." },
      { q: "My bank asked for fire insurance certificate urgently. Can you help?", a: "Yes. We process fire insurance and issue certificates within 24-48 hours. For bank compliance, we provide certificates in the specific format your bank requires." },
    ],
  },

  "startup-insurance-requirements-new-company": {
    slug: "startup-insurance-requirements-new-company",
    seasonCategory: "financial-year",
    seasonTag: "April — New Ventures",
    urgency: "medium",
    seoTitle: "Startup Insurance Requirements — New Company Insurance Checklist for Chennai Startups",
    seoDesc: "Startup insurance requirements for new companies. What insurance does a new startup need? Group health, D&O liability, professional indemnity, fire, cyber — checklist for Chennai startups and new businesses.",
    heroH1: "Startup insurance requirements — what every new company needs from day one",
    heroP: "You registered a company, hired employees, and leased an office. What insurance do you actually need? Not everything — but certain coverages are essential from day one. Here's the no-nonsense startup insurance checklist.",
    whyNow: [
      "New financial year (April) = new companies registering. Get insurance right from the start, not after the first incident.",
      "Investor/VC due diligence increasingly includes insurance verification — D&O, PI, group health.",
      "Employee offer letters often mention health insurance — you need to deliver on that promise.",
      "One employee hospitalization without group health can cost you ₹5-10 lakh out-of-pocket.",
    ],
    whoThisHelps: [
      "Tech startup founders (IT, SaaS, fintech) who've just incorporated and hired first 5-20 employees.",
      "Manufacturing startup founders setting up first factory/workshop.",
      "Service company founders (consulting, design, marketing) needing professional coverage.",
      "Second-time founders who know insurance matters but want the right setup from day one.",
    ],
    actionChecklist: [
      { title: "Group Health Insurance (Priority #1)", text: "Even 5 employees — get group health. It's the #1 benefit employees value. Costs ₹3,000-5,000/employee/year for basic coverage." },
      { title: "Directors & Officers (D&O) Liability", text: "Protects founders/directors from personal liability for company decisions. VCs and investors often require this." },
      { title: "Professional Indemnity (if services)", text: "IT companies, consultants, agencies — PI covers errors, omissions, and client disputes. Often required in client contracts." },
      { title: "Fire & Property (if physical office/factory)", text: "Covers building, contents, and stock against fire, flood, earthquake. Bank requires this if premises are loan-funded." },
      { title: "Commercial Vehicle Insurance", text: "Every company vehicle — car, bike, delivery van. Third-party cover is legally mandatory." },
      { title: "Cyber Insurance (if handling data)", text: "Tech startups handling customer data should consider cyber liability insurance. Data breach = massive liability." },
    ],
    whatYouGet: [
      "Startup-specific consultation — we don't sell you unnecessary coverages. Only what you actually need at your current stage.",
      "Staged implementation — buy essential coverages now, add others as you grow.",
      "Budget-first approach — startup budgets are tight. We find the most affordable options for each coverage.",
      "Investor-ready documentation — policy certificates formatted for VC due diligence if needed.",
      "Grow-with-you partnership — as your startup scales, your insurance scales with you.",
    ],
    howSupportWorks: [
      { title: "Step 1 — Tell us about your startup", text: "Industry, employee count, office type, funding stage, and any client/investor requirements." },
      { title: "Step 2 — Staged insurance plan", text: "We recommend what to buy NOW (essential) vs. what to add later (as you grow). With budget estimates." },
      { title: "Step 3 — Quick implementation", text: "We handle procurement of all recommended policies. One agent for everything." },
    ],
    comparisonTable: {
      title: "Buy now vs. add later — a staged approach",
      intro: "Not everything needs to happen day one.",
      columns: ["Cover", "When to get it"],
      rows: [
        ["Group health, vehicle insurance", "Day one — highest priority, lowest cost to delay"],
        ["Professional Indemnity", "As soon as you're delivering client work/advice"],
        ["D&O, cyber insurance", "Once you have external investors, a board, or handle customer data at scale"],
      ],
    },

    recommendedServices: [
      { label: "Group Health Insurance", href: EN("/services/business-msme/group-health-employee-benefits-insurance/") },
      { label: "Professional Indemnity", href: EN("/services/liability/professional-indemnity/") },
      { label: "MSME Insurance Checklist", href: EN("/seasonal/msme-business-insurance-renewal-checklist/") },
      { label: "All Services", href: EN("/services/") },
    ],
    faqs: [
      { q: "What's the minimum insurance a 5-person startup needs?", a: "At minimum: Group Health (₹15K-25K/year total for 5 people) and vehicle insurance for any company vehicles. If you're an IT/services company, add Professional Indemnity." },
      { q: "Do I need D&O insurance if I'm bootstrapped?", a: "Not immediately. D&O becomes important when you have external investors, independent directors, or significant employee count. If VC-funded, get it — most VCs require it." },
      { q: "When should a startup get cyber insurance?", a: "If you handle customer personal data, payment information, or health records. Even a small data breach can result in significant legal liability under IT Act and data protection regulations." },
      { q: "Can I start with just group health and add more later?", a: "Absolutely. Most startups start with group health (employee retention) and add fire/PI/D&O as the company grows, hires more, or gets investor requirements." },
    ],
  },

  // ===========================
  // IMMEDIATE / EXPIRED / EMERGENCY
  // ===========================

  "insurance-renewal-policy-expired-what-to-do": {
    slug: "insurance-renewal-policy-expired-what-to-do",
    seasonCategory: "quarterly",
    seasonTag: "Year-Round — Policy Expired",
    urgency: "high",
    seoTitle: "Insurance Policy Expired — What to Do Now | Renew Lapsed Car, Bike, Health, Commercial Policy",
    seoDesc: "Insurance policy expired? What to do now — car, bike, health, commercial, group health. How to renew lapsed policy, NCB recovery, continuity benefits, and inspection requirements. Urgent renewal support Chennai.",
    heroH1: "Insurance policy expired? Here's exactly what to do — step by step",
    heroP: "Your policy lapsed. Whether it's car, bike, health, commercial vehicle, or company policy — it's not too late. But every day of delay makes it worse. Here's what to do immediately, what you lose, and how we speed up renewal.",
    whyNow: [
      "Uninsured = unlimited personal liability. If anything happens during the lapse period, YOU pay from your pocket — no insurer will help.",
      "For vehicles: driving without insurance is a legal offence under Motor Vehicles Act. Fine + vehicle detention.",
      "For health: lapse breaks continuity. Pre-existing condition waiting period RESTARTS if the gap exceeds the insurer's grace period.",
      "For commercial/fleet: lapsed vehicles = idle revenue-earning assets. Every day off-road is lost income.",
    ],
    whoThisHelps: [
      "Car/bike owners who forgot to renew and just realized the policy is expired.",
      "Fleet operators with one or more vehicles that slipped through — need urgent renewal.",
      "Individuals whose health insurance lapsed — worried about losing continuity benefits.",
      "Company admin whose fire/WC/group health policy expired without notice.",
    ],
    actionChecklist: [
      { title: "Stop using the vehicle immediately", text: "If it's a vehicle, don't drive it without insurance. Park it until renewal is done. Operating = legal risk + unlimited liability." },
      { title: "Find old policy documents", text: "Old policy copy, RC (for vehicles), or policy number — anything to identify the policy. WhatsApp it to us." },
      { title: "Check how long it's been lapsed", text: "Same insurer renewal within 90 days: NCB usually preserved. After 90 days: NCB lost, may need inspection." },
      { title: "Contact us immediately", text: "The sooner we start, the sooner you're covered. We process urgently — many renewals completed same day." },
    ],
    whatYouGet: [
      "Immediate assessment — we tell you exactly what you've lost (NCB, continuity) and what can be recovered.",
      "Fastest possible renewal — same-day processing with cover note for urgent cases.",
      "NCB recovery attempt — if within grace period, we push to preserve your No Claim Bonus.",
      "Health continuity advocacy — we work with insurers to minimize continuity benefit loss.",
      "Inspection coordination — if required for lapsed vehicle policies, we coordinate surveyor inspection.",
    ],
    howSupportWorks: [
      { title: "Step 1 — WhatsApp old policy", text: "Send whatever you have — old policy, policy number, RC copy. We identify the policy and check status immediately." },
      { title: "Step 2 — Options within 1 hour", text: "We assess damage (NCB loss, inspection requirement) and present renewal options with quotes." },
      { title: "Step 3 — Renewed as fast as possible", text: "Payment processed, cover note issued (for vehicles), and you're back to being insured." },
    ],
    comparisonTable: {
      title: "Lapse duration and what it costs you",
      intro: "The longer a policy stays lapsed, the more you lose — this is the actual timeline.",
      columns: ["Lapse duration", "What happens"],
      rows: [
        ["Within 90 days (vehicle)", "NCB usually preserved, inspection often not required"],
        ["Beyond 90 days (vehicle)", "NCB resets to zero, inspection typically required"],
        ["Health insurance", "Continuity benefit at risk — varies by insurer, some allow 30-60 day grace"],
      ],
    },

    recommendedServices: [
      { label: "Car Insurance Guide", href: EN("/policies/car-insurance/") },
      { label: "Bike Insurance Guide", href: EN("/policies/bike-insurance/") },
      { label: "Health Insurance Guide", href: EN("/policies/health-insurance/") },
      { label: "Insurance Renewal", href: EN("/insurance-renewal-near-me/") },
    ],
    faqs: [
      { q: "Can I renew a policy that expired months ago?", a: "Yes. Vehicle insurance can be renewed anytime (NCB lost after 90 days, inspection may be needed). Health insurance depends on the insurer — some allow late renewal within 30-60 days without losing continuity." },
      { q: "What is NCB and do I lose it?", a: "NCB (No Claim Bonus) is a discount (20-50%) for claim-free years. If you renew within 90 days of expiry, NCB is usually preserved. After 90 days, NCB resets to zero." },
      { q: "Will I need vehicle inspection for a lapsed policy?", a: "If lapsed more than 90 days, most insurers require a pre-insurance inspection. We coordinate the inspection and fast-track the process." },
      { q: "Is it illegal to drive without insurance?", a: "Yes. Under Motor Vehicles Act, driving without at least third-party insurance is a criminal offence. Fine: ₹2,000 first offence, ₹4,000 repeat. Vehicle can be detained." },
    ],
  },
};
