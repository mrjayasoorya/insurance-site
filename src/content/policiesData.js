// src/content/policiesData.js
// Policy guide pages — deep-dive product guides with user-journey content

export function EN(path) {
  if (!path || path.startsWith("http")) return path;
  if (path === "/") return "/en/";
  const clean = path.startsWith("/en/") ? path : `/en${path.startsWith("/") ? "" : "/"}${path}`;
  return clean.endsWith("/") ? clean : clean + "/";
}

export const policiesDetail = {

// ===========================
// 1. CAR INSURANCE (P0)
// ===========================
"car-insurance": {
  seoTitle: "Car Insurance in Chennai — Complete Guide, Coverage Types & Claim Support",
  seoDesc: "Best car insurance in Chennai. Compare comprehensive, third-party & standalone OD. Zero depreciation, RSA, NCB explained. 4.9★ rated agent. Multi-insurer comparison. Doorstep service. Call 7448324068.",
  heroH1: "Car Insurance in Chennai — Complete Guide & Claim Support",
  heroP: "Everything you need to know about car insurance — coverage types, add-ons, claim process, and how to avoid common mistakes. We compare across 15+ insurers to find you the best coverage at the right price. 30+ years experience, doorstep service across all Chennai.",

  bestFor: ["Car owners (new & used)", "First-time buyers", "Renewal with better coverage", "Claim support needed"],
  premiumRange: "₹2,500 – ₹25,000/year depending on car value, age & add-ons",
  claimSummary: "Cashless at network garages or reimbursement — typically 7-15 days",

  whatIsIt: {
    title: "What is car insurance and why do you need it?",
    text: "Car insurance protects you financially against damage to your vehicle, theft, and third-party liability. Third-party insurance is mandatory by law in India under the Motor Vehicles Act. Without it, you face ₹2,000+ fine and personal liability for any accident damages.",
    bullets: [
      "Mandatory: Third-party liability insurance is required by law for every car on Indian roads",
      "Financial protection: Covers repair costs, theft, natural disasters, and accident damages",
      "Third-party coverage: Pays for damage/injury you cause to others (can run into lakhs)",
      "Peace of mind: Cashless repairs at 5,000+ network garages across India",
    ],
  },

  userNeeds: [
    { title: "Buying first time?", text: "New car owners need comprehensive coverage. We help you pick the right IDV, add-ons, and insurer based on your car model and driving pattern." },
    { title: "Renewing your policy?", text: "Check if your IDV is correct, NCB is properly transferred, and add-ons still match your needs. We compare renewal quotes across insurers." },
    { title: "Need to file a claim?", text: "Accident, theft, or damage? We guide you through FIR, surveyor coordination, garage selection, and document submission for fastest settlement." },
  ],

  commonProblems: [
    { title: "Wrong IDV leads to under-insurance", text: "Many policies have inflated or deflated IDV. If IDV is too low, you get less during total loss. If too high, you overpay premium. We calculate the right market-value IDV." },
    { title: "NCB lost during insurer switch", text: "When switching insurers, NCB discount (up to 50%) can get lost if not properly transferred. We ensure your NCB certificate is correctly ported." },
    { title: "Claim rejected due to drunk driving or unlicensed driver", text: "Insurers reject claims if the driver was intoxicated or didn't have a valid license. We educate policyholders on these exclusions upfront." },
    { title: "Add-ons sold that you don't need", text: "Online portals push expensive add-ons (engine protect, consumables) that may not apply to your car type or age. We recommend only what your specific situation needs." },
    { title: "Delayed claim due to missing FIR or documents", text: "Many claims get delayed because the FIR wasn't filed within time or survey photos weren't taken properly. We guide the exact steps within the first hour." },
  ],

  marketComparison: {
    title: "Online aggregator vs. local agent — what's different?",
    intro: "The base premium is the same whether you buy online or through us (it's fixed by the insurer). The difference is in what happens before purchase and after a claim.",
    rows: [
      { factor: "Premium", online: "Same base price", withUs: "Same — plus we compare 15+ companies" },
      { factor: "IDV check", online: "Auto-calculated (often wrong)", withUs: "Manually verified for your car's market value" },
      { factor: "Add-on guidance", online: "Upsell-driven", withUs: "Recommended based on your actual risk" },
      { factor: "Claim support", online: "Self-service / call center", withUs: "Personal — we coordinate with garage, surveyor, insurer" },
      { factor: "Document help", online: "None", withUs: "Pre-checked before policy issuance" },
      { factor: "Doorstep service", online: "No", withUs: "Yes — anywhere in Chennai" },
    ],
  },

  ourApproach: {
    title: "Our claim-first approach to car insurance",
    intro: "We don't just sell you a policy. We structure it so that when you need to claim, everything is already in order.",
    steps: [
      { title: "Document audit", text: "We check your RC, previous policy, NCB status, and driving license validity before issuing any new policy." },
      { title: "Multi-insurer comparison", text: "We compare quotes from New India, United India, ICICI Lombard, Bajaj Allianz, HDFC ERGO and more — same car, same coverage, best price." },
      { title: "Right IDV & add-ons", text: "We calculate IDV based on current market value (not insurer default) and recommend add-ons only if they make sense for your car age and usage." },
      { title: "Claim-ready documentation", text: "Every policy we issue has correct details — chassis number, engine number, hypothecation status, permit type — verified before, not after a claim." },
    ],
  },

  coverageTypes: [
    {
      title: "Comprehensive (Full coverage)",
      text: "Covers both own damage and third-party liability. Best for most car owners — protects against accidents, theft, fire, natural disasters, and third-party claims.",
      bullets: ["Own damage + third party", "Theft and total loss", "Natural disasters (flood, earthquake)", "Personal accident cover for owner-driver"],
    },
    {
      title: "Third-Party Only (Mandatory minimum)",
      text: "Covers only damage/injury you cause to others. Does NOT cover your own car's damage. Cheapest option but leaves your car unprotected.",
      bullets: ["Legally mandatory", "Covers third-party death/injury/property damage", "No own-damage protection", "Suitable only for very old cars"],
    },
    {
      title: "Standalone Own Damage (OD)",
      text: "Covers only your car's damage — not third-party. Must be purchased separately along with third-party policy. Useful when you want to keep third-party with one insurer and OD with another for better pricing.",
      bullets: ["Covers own car damage only", "Can be bought from different insurer than TP", "Flexible: choose add-ons separately", "Good for maximizing NCB benefits"],
    },
    {
      title: "Zero Depreciation Add-on",
      text: "Without this, insurer deducts depreciation on parts during claims (rubber, plastic, fibre parts lose 30-50%). With zero dep, you get full claim value without deductions.",
      bullets: ["Full claim without depreciation deduction", "Best for cars under 5 years old", "Most valuable add-on for expensive repairs", "Premium: typically ₹1,000–₹3,000 extra"],
    },
    {
      title: "Roadside Assistance (RSA)",
      text: "24/7 breakdown assistance — towing, flat tire, battery jumpstart, fuel delivery. Essential if you drive long distances or on highways.",
      bullets: ["Towing up to 50-100km", "Flat tire change", "Battery jumpstart", "Emergency fuel delivery"],
    },
  ],

  claimProcess: {
    title: "Car insurance claim — step by step",
    intro: "What to do immediately after an accident, theft, or damage. Following these steps correctly is the difference between a smooth claim and a rejected one.",
    steps: [
      { title: "Inform insurer immediately", text: "Call the insurer's helpline (or call us) within 24 hours. For theft, inform within 24 hours. Delay = potential rejection." },
      { title: "File FIR (if applicable)", text: "For theft, third-party injury, or major accidents — file an FIR at the nearest police station. Get a copy. This is mandatory for claim processing." },
      { title: "Don't move the vehicle (if accident)", text: "Take photos of the damage, road condition, and other vehicle involved. Moving the car before photos can weaken your claim." },
      { title: "Get surveyor assessment", text: "The insurer appoints a surveyor to assess damage. We coordinate timing so you're not waiting weeks. For cashless, this happens at the network garage." },
      { title: "Choose cashless or reimbursement", text: "Cashless: insurer pays garage directly (network garages only). Reimbursement: you pay, insurer reimburses later (any garage). We recommend cashless when possible." },
      { title: "Submit documents", text: "RC copy, policy copy, driving license, FIR (if applicable), repair estimate, photos. We prepare the complete document set." },
      { title: "Settlement", text: "Cashless: typically 3-7 days. Reimbursement: 7-15 days after document verification. Total loss: 30-45 days." },
    ],
    ourRole: "We handle surveyor coordination, document preparation, garage selection, and follow up with the insurer until settlement. You don't need to make multiple calls or visit offices.",
  },

  documents: [
    "RC (Registration Certificate) — front and back",
    "Previous policy copy (for renewal/NCB transfer)",
    "Driving license of the primary driver",
    "FIR copy (for theft or major accident claims)",
    "Photos of damage (multiple angles, timestamp if possible)",
    "Repair estimate from garage",
    "KYC documents (Aadhaar/PAN for new policies)",
  ],

  pricingFactors: [
    "Car make, model, and variant (luxury cars cost more to insure)",
    "Age of car (newer = higher IDV = higher premium)",
    "IDV (Insured Declared Value) — the maximum claim amount",
    "NCB (No Claim Bonus) — up to 50% discount for claim-free years",
    "Add-ons selected (zero dep, RSA, engine protect, etc.)",
    "City of registration (metro cities have higher premiums)",
    "Fuel type (CNG/LPG cars may have different rates)",
    "Previous claim history",
  ],

  scenarios: [
    { title: "Car flooded during Chennai rains", text: "Owner's comprehensive policy covered the damage, but engine hydrostatic lock was excluded without engine protect add-on. We helped negotiate partial settlement and added engine protect at next renewal." },
    { title: "NCB lost during insurer switch", text: "Customer switched insurer online and lost 5 years of NCB (50% discount). We retrieved the NCB certificate from the old insurer and got it applied retroactively." },
  ],

  gapQuestions: [
    { q: "Is online car insurance cheaper than buying through an agent?", a: "No. The base premium is identical — it's regulated by IRDAI. The difference is we verify your IDV, check documents, and provide claim support. Online portals don't." },
    { q: "What happens if I don't renew on time?", a: "If your policy lapses, you lose NCB and may need an insurer inspection before renewal. If the gap exceeds 90 days, you may need to buy a fresh policy. We send renewal reminders 30 days in advance." },
    { q: "Can I insure a car that's 15+ years old?", a: "Yes, but options are limited. Third-party is mandatory and available. For comprehensive cover, IDV will be very low and not all insurers accept older cars. We find the ones that do." },
  ],

  faqs: [
    { q: "What is the best car insurance in Chennai?", a: "The 'best' depends on your car age, usage, and budget. We compare New India Assurance, ICICI Lombard, Bajaj Allianz, HDFC ERGO, and more to find the best fit. Our 4.9★ Google rating comes from this no-pressure comparison approach." },
    { q: "How much does car insurance cost in Chennai?", a: "Third-party: ₹2,500–₹5,000/year. Comprehensive: ₹5,000–₹25,000/year depending on car value, age, NCB, and add-ons. We provide exact quotes within minutes." },
    { q: "What add-ons do I really need?", a: "For most Chennai car owners: Zero Depreciation (essential if car < 5 years), RSA (essential for highway drivers), and Personal Accident cover. We recommend based on your specific situation — not upselling." },
    { q: "Can you help if my car insurance claim is rejected?", a: "Yes. We review the rejection reason, check if it's valid, and guide you on grievance filing with the insurer or IRDAI if the rejection is unfair." },
    { q: "Do you provide doorstep car insurance service?", a: "Yes. We come to your home or office anywhere in Chennai for policy review, renewal, or claim documentation. No need to visit any office." },
    { q: "Is it better to buy car insurance online or through an agent?", a: "Premium is the same. Through us, you get IDV verification, document checking, claim support, and multi-insurer comparison — things online portals don't provide." },
    { q: "How does NCB (No Claim Bonus) work?", a: "You earn NCB discount for each claim-free year: 20% → 25% → 35% → 45% → 50%. This transfers even when switching insurers. We ensure your NCB is correctly applied and never lost." },
    { q: "What should I do immediately after a car accident?", a: "1) Don't move the car. 2) Take photos. 3) Call us or the insurer within 24 hours. 4) File FIR if there's injury or major damage. 5) Don't start repairs before surveyor visit. We guide you through every step." },
  ],

  relatedPolicies: [
    { label: "Bike & Two-Wheeler Insurance", href: EN("/policies/bike-insurance/"), desc: "Complete guide for two-wheeler coverage, claim process and add-ons." },
    { label: "Health Insurance", href: EN("/policies/health-insurance/"), desc: "Family floater, individual plans, cashless hospital network explained." },
    { label: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/"), desc: "Lorry, truck, fleet — permits, documentation and claim guide." },
  ],
},

// ===========================
// 2. HEALTH INSURANCE (P0)
// ===========================
"health-insurance": {
  seoTitle: "Health Insurance in Chennai — Family, Individual & Senior Plans Guide",
  seoDesc: "Best health insurance in Chennai. Compare family floater, individual & senior citizen plans across 15+ insurers. Cashless hospitals, claim process explained. 4.9★ rated. Call 7448324068.",
  heroH1: "Health Insurance in Chennai — Plans, Coverage & Claim Guide",
  heroP: "Complete guide to health insurance — individual, family floater, senior citizen plans. We compare across 15+ insurers, explain cashless vs reimbursement, pre-existing conditions, waiting periods, and help with claim documentation. 30+ years experience.",

  bestFor: ["Families needing floater plans", "Senior citizens (60+)", "Individuals wanting comprehensive cover", "Employers needing group health"],
  premiumRange: "₹5,000 – ₹50,000/year depending on age, sum insured & plan type",
  claimSummary: "Cashless at network hospitals or reimbursement within 15-30 days",

  whatIsIt: {
    title: "What is health insurance and why is it essential?",
    text: "Health insurance covers hospitalization expenses — room charges, surgery costs, medicines, diagnostics, and doctor fees. With medical inflation at 14% annually, a single hospitalization can cost ₹2-10 lakhs. One serious illness without insurance can wipe out years of savings.",
    bullets: [
      "Hospitalization cover: Room, ICU, surgery, medicines, diagnostics — all covered",
      "Tax benefit: Up to ₹25,000 deduction under Section 80D (₹50,000 for senior citizens)",
      "Cashless treatment: Walk into 10,000+ network hospitals — insurer pays directly",
      "Pre & post hospitalization: 30-60 days before and after hospital expenses covered",
    ],
  },

  userNeeds: [
    { title: "First-time buyer?", text: "Start with a family floater (covers entire family under one sum insured). We help you choose the right sum insured based on your city's hospital costs — Chennai average is ₹5-8 lakhs." },
    { title: "Existing policy review?", text: "Already have health insurance? We check if your sum insured is adequate, if waiting periods have elapsed, and if a top-up/super top-up can save you money." },
    { title: "Need to claim?", text: "Hospitalized or planning a surgery? We help with pre-authorization for cashless claims, document preparation, and follow up with the TPA/insurer for settlement." },
  ],

  commonProblems: [
    { title: "Claim rejected due to pre-existing condition", text: "Most policies have 2-4 year waiting period for pre-existing diseases. If you don't disclose conditions at purchase, claims get rejected permanently. We ensure proper disclosure upfront." },
    { title: "Room rent sub-limit eats into claim", text: "Many policies cap room rent (e.g., ₹5,000/day). If you take a ₹8,000 room, the entire claim gets proportionally reduced — not just room charges. We recommend plans without sub-limits." },
    { title: "Inadequate sum insured", text: "A ₹3 lakh policy might seem sufficient until you need cardiac surgery (₹4-8 lakhs) or cancer treatment (₹10+ lakhs). We calculate based on actual Chennai hospital costs." },
    { title: "Waiting period surprise", text: "Specific diseases (knee replacement, cataract, hernia) have separate 2-year waiting periods even after the initial waiting period. We explain these before you buy." },
    { title: "Non-network hospital = no cashless", text: "If your preferred hospital isn't in the insurer's network, you pay first and claim reimbursement later (which takes 15-30 days). We check your preferred hospitals before selecting the insurer." },
  ],

  marketComparison: {
    title: "Online portal vs. insurance agent — what you actually get",
    intro: "Health insurance is complex. Waiting periods, exclusions, sub-limits, co-payments — these details determine whether your claim gets paid or rejected. Here's why guidance matters more than price.",
    rows: [
      { factor: "Plan selection", online: "Filter by price / rating", withUs: "Selected based on your health profile & hospital preference" },
      { factor: "Pre-existing disclosure", online: "Self-declaration form", withUs: "We guide what to disclose and how — prevents future rejections" },
      { factor: "Cashless claim support", online: "Call center / app", withUs: "Personal coordination with hospital TPA desk" },
      { factor: "Sub-limit awareness", online: "Buried in policy document", withUs: "Explained before purchase — no surprises" },
      { factor: "Renewal follow-up", online: "Auto-renewal email", withUs: "30-day reminder + coverage review + insurer comparison" },
    ],
  },

  ourApproach: {
    title: "How we help you choose the right health insurance",
    intro: "Health insurance is the one policy where wrong advice costs the most — a rejected ₹5 lakh claim can't be undone. Here's our process.",
    steps: [
      { title: "Health profile review", text: "We ask about pre-existing conditions, family health history, preferred hospitals, and expected healthcare needs. This determines the right plan." },
      { title: "Hospital network check", text: "We verify that YOUR preferred hospitals (in Chennai) are in the insurer's cashless network before recommending. Not all insurers cover all hospitals." },
      { title: "Sum insured calculation", text: "Based on age group and Chennai hospital costs: ₹5 lakh minimum for individuals, ₹10-15 lakh for families. We recommend top-up plans to keep premiums affordable." },
      { title: "Disclosure discipline", text: "We ensure pre-existing conditions are properly declared. Hiding conditions saves nothing — it just guarantees claim rejection later." },
    ],
  },

  coverageTypes: [
    {
      title: "Individual Health Insurance",
      text: "Covers one person. Sum insured is exclusively for the insured individual. Best for single people or as additional cover on top of employer insurance.",
      bullets: ["Dedicated sum insured", "Own waiting period tracking", "Usually ₹3-10 lakh", "Good for young professionals"],
    },
    {
      title: "Family Floater",
      text: "Single policy covering the entire family (self, spouse, children, sometimes parents). One shared sum insured — any family member can use it. Most popular choice for families.",
      bullets: ["Shared sum insured = lower premium vs. individual policies", "Covers 2-6 family members", "Usually ₹5-25 lakh", "Most cost-effective for young families"],
    },
    {
      title: "Senior Citizen Plans",
      text: "Designed for 60+ age group. Higher premiums but essential — medical expenses increase exponentially with age. Some plans go up to 80+ years.",
      bullets: ["Usually ₹10-50 lakh sum insured", "Higher premium (age-based)", "Covers pre-existing after waiting period", "Some plans include domiciliary (home) treatment"],
    },
    {
      title: "Top-Up & Super Top-Up",
      text: "Affordable way to increase coverage. Kicks in after a deductible threshold (e.g., ₹5 lakh). If your base policy is ₹5 lakh, a ₹10 lakh super top-up covers anything above ₹5 lakh — at a fraction of the cost.",
      bullets: ["Very affordable premium", "Works above a deductible limit", "Can be bought from different insurer", "Best paired with employer/base policy"],
    },
    {
      title: "Critical Illness Cover",
      text: "Lump-sum payment on diagnosis of specified critical illnesses (cancer, heart attack, kidney failure, etc.). Unlike regular health insurance, this pays a fixed amount regardless of actual hospital bills.",
      bullets: ["Lump sum on diagnosis", "Covers 20-30 critical illnesses typically", "Can be used for non-medical expenses too", "Good supplement to regular health cover"],
    },
  ],

  claimProcess: {
    title: "Health insurance claim process — cashless & reimbursement",
    intro: "Two ways to claim: cashless (insurer pays hospital directly) or reimbursement (you pay first, get money back). Here's how each works.",
    steps: [
      { title: "Planned hospitalization (cashless)", text: "Inform insurer/TPA 48-72 hours before admission. We help fill the pre-authorization form and submit to the hospital's TPA desk." },
      { title: "Emergency hospitalization", text: "Get admitted first, inform insurer within 24 hours. Cashless can be initiated even after emergency admission at network hospitals." },
      { title: "Pre-authorization approval", text: "TPA reviews and approves/rejects within 2-4 hours. If partially approved, remaining is your co-pay. We negotiate with TPA for maximum coverage." },
      { title: "Discharge & final bill", text: "Hospital submits final bill to TPA. If amount exceeds approval, enhancement is requested. We follow up to minimize your out-of-pocket." },
      { title: "Reimbursement (if non-cashless)", text: "Collect all original bills, discharge summary, prescription copies, diagnostic reports. Submit within 15-30 days of discharge. We prepare the complete claim file." },
      { title: "Settlement", text: "Cashless: hospital settles directly. Reimbursement: typically 15-30 days after complete document submission. We follow up weekly until settled." },
    ],
    ourRole: "We handle pre-authorization forms, negotiate with TPA for maximum coverage, prepare document sets, and follow up until the last rupee is settled. You focus on recovery.",
  },

  documents: [
    "Policy copy / insurance card",
    "Photo ID (Aadhaar / PAN / Passport)",
    "Hospital admission letter / doctor's referral",
    "Pre-authorization form (for cashless claims)",
    "All original hospital bills and receipts",
    "Discharge summary from hospital",
    "Prescription copies and diagnostic reports",
    "Pharmacy bills with prescriptions",
    "Bank details for reimbursement (cancelled cheque / passbook copy)",
  ],

  pricingFactors: [
    "Age of all insured members (premium increases significantly after 45)",
    "Sum insured amount (₹5 lakh vs ₹10 lakh vs ₹25 lakh)",
    "Number of family members covered",
    "Pre-existing conditions and their waiting period status",
    "Room type (shared/single/no sub-limit)",
    "Co-payment clause (if opted for lower premium)",
    "Zone of coverage (metro cities cost more)",
    "Claims history in previous years",
  ],

  scenarios: [
    { title: "Cashless claim rejected at admission", text: "Hospital TPA desk rejected cashless due to policy number mismatch in their system. We called the TPA, got the issue resolved within 2 hours, and the patient was admitted cashless." },
    { title: "Pre-existing condition not disclosed", text: "Customer's diabetic condition was not declared in original policy (bought online). Claim for diabetic foot surgery was rejected. We helped file a grievance highlighting 6-year continuous coverage and got partial settlement." },
  ],

  gapQuestions: [
    { q: "Should I rely on my employer's group health insurance?", a: "No. Employer coverage ends when you leave the job. And it's usually ₹3-5 lakh — inadequate for most major procedures. Buy your own policy early (when premiums are lowest) as a safety net." },
    { q: "What's the right sum insured for a family of 4 in Chennai?", a: "Minimum ₹10 lakh. A cardiac surgery in Chennai costs ₹4-8 lakhs, cancer treatment ₹10+ lakhs. We recommend ₹10 lakh base + ₹15 lakh super top-up for affordable high coverage." },
    { q: "Can I switch health insurers without losing benefits?", a: "Yes, portability is allowed by IRDAI. Waiting period credits are transferred if you port within 45-60 days of renewal. We handle the entire porting process." },
  ],

  faqs: [
    { q: "What is the best health insurance plan in Chennai?", a: "It depends on your age, family size, and health profile. We compare New India Assurance, Star Health, ICICI Lombard, HDFC ERGO, Care Health, and more. Our 4.9★ rating reflects our unbiased comparison approach." },
    { q: "How much does family health insurance cost?", a: "For a family of 4 (ages 30-35, 2 kids): ₹12,000–₹25,000/year for ₹10 lakh coverage. For senior citizens (60+): ₹20,000–₹50,000/year. We find the best rate across 15+ insurers." },
    { q: "What are waiting periods in health insurance?", a: "Initial waiting period: 30 days (no claims). Pre-existing conditions: 2-4 years. Specific diseases (knee, cataract): 2 years. We explain all waiting periods before purchase so there are no surprises." },
    { q: "Is cashless claim better than reimbursement?", a: "Yes, always prefer cashless when possible. You don't pay upfront (except co-pay if applicable). We check that your preferred hospitals are in the insurer's network before recommending a plan." },
    { q: "Can I get health insurance for parents above 65?", a: "Yes. Several insurers offer senior citizen plans up to age 80+. Premiums are higher but essential — a single hospitalization for seniors easily crosses ₹3-5 lakhs. We find the best senior plans." },
    { q: "Do you help with health insurance claim filing?", a: "Yes. We help with pre-authorization, document preparation, TPA coordination, and follow up until settlement. This is where agent service makes the biggest difference vs. buying online." },
  ],

  relatedPolicies: [
    { label: "Car Insurance", href: EN("/policies/car-insurance/"), desc: "Comprehensive guide — coverage types, claim process, add-ons explained." },
    { label: "Life Insurance (LIC)", href: EN("/policies/life-insurance-lic/"), desc: "Term, endowment, pension plans — what works for your age and goals." },
    { label: "Bike Insurance", href: EN("/policies/bike-insurance/"), desc: "Two-wheeler coverage, third-party vs comprehensive, claim guide." },
  ],
},

// ===========================
// 3. BIKE INSURANCE (P0)
// ===========================
"bike-insurance": {
  seoTitle: "Bike & Two-Wheeler Insurance in Chennai — Coverage, Claim & Renewal Guide",
  seoDesc: "Best bike insurance in Chennai. Third-party vs comprehensive. Zero depreciation, personal accident cover explained. Multi-insurer comparison. 4.9★ rated agent. Call 7448324068.",
  heroH1: "Bike & Two-Wheeler Insurance in Chennai — Complete Guide",
  heroP: "Everything about two-wheeler insurance — coverage types, add-ons worth buying, claim process, and renewal tips. We compare across 15+ insurers for best price. Third-party starts from ₹482/year. Doorstep service across all Chennai.",

  bestFor: ["Bike/scooter owners", "Daily commuters", "Delivery riders", "First-time two-wheeler buyers"],
  premiumRange: "₹482 – ₹5,000/year depending on CC, age & coverage type",
  claimSummary: "Cashless or reimbursement — typically 5-10 days for minor claims",

  whatIsIt: {
    title: "What is two-wheeler insurance?",
    text: "Two-wheeler insurance covers your bike or scooter against damage, theft, and third-party liability. Third-party insurance is mandatory by law for every two-wheeler on Indian roads. The fine for riding without insurance is ₹2,000 for first offense and ₹4,000 for repeat.",
    bullets: [
      "Mandatory by law: Third-party liability insurance required for all two-wheelers",
      "Theft protection: Two-wheelers are the most stolen vehicles — insurance covers replacement",
      "Accident cover: Repair costs for own damage + third-party injury/property damage",
      "Affordable: Comprehensive coverage starts from ₹1,500-2,000/year for most bikes",
    ],
  },

  userNeeds: [
    { title: "New bike/scooter?", text: "Comprehensive insurance comes bundled with purchase. At renewal in year 2, we compare insurers to find better pricing. Don't auto-renew with the dealer's insurer." },
    { title: "Renewal due?", text: "Check if NCB is applied correctly and if you need to switch to a better insurer. If expired, we handle break-in inspection and renewal." },
    { title: "Accident or theft?", text: "We guide you through FIR filing, surveyor coordination, and claim documentation. Most two-wheeler claims are straightforward when documented properly." },
  ],

  commonProblems: [
    { title: "Riding without valid insurance", text: "Many two-wheeler owners let insurance lapse. If caught: ₹2,000-4,000 fine. If accident: you're personally liable for all damages, injuries, and legal costs." },
    { title: "Only third-party, no own damage", text: "Third-party only costs ₹482, but if your ₹1.5 lakh bike gets stolen or damaged, you get nothing. Comprehensive coverage is ₹1,500-2,000 more but covers everything." },
    { title: "Claim rejected — pillion without helmet", text: "If pillion rider is injured without a helmet, the claim for their injuries can be denied. We educate on these exclusions upfront." },
    { title: "Modified bike — insurance void", text: "Aftermarket modifications (exhaust, engine tuning) not declared in policy = claim rejection. We ensure modifications are declared if applicable." },
  ],

  marketComparison: {
    title: "Where you buy doesn't change the premium — but it changes the experience",
    intro: "Two-wheeler premium is IRDAI-regulated. Whether you buy from PolicyBazaar, directly from insurer, or through us — the base price is identical. The difference is service.",
    rows: [
      { factor: "Premium", online: "Same", withUs: "Same + multi-company comparison" },
      { factor: "Claim support", online: "Self-service", withUs: "We handle everything — FIR, surveyor, garage" },
      { factor: "Break-in renewal", online: "Complex online process", withUs: "We arrange inspection and complete renewal" },
      { factor: "Modification declaration", online: "Often missed", withUs: "Checked and declared before policy issue" },
      { factor: "Doorstep service", online: "No", withUs: "Yes — anywhere in Chennai" },
    ],
  },

  ourApproach: {
    title: "How we handle bike insurance differently",
    intro: "Most two-wheeler owners buy insurance and forget about it until something goes wrong. We make sure your policy actually works when you need it.",
    steps: [
      { title: "RC + previous policy check", text: "We verify registration details, previous insurer, NCB status, and any modifications before issuing the policy." },
      { title: "Right coverage recommendation", text: "For bikes under 5 years: comprehensive + zero dep. For commuters: add RSA. For old bikes: evaluate if comprehensive is worth it based on bike value." },
      { title: "Multi-insurer comparison", text: "We compare quotes from New India, United India, ICICI Lombard, Bajaj Allianz and more — find the best deal for your specific bike." },
      { title: "Renewal reminders", text: "We send reminders 30 days before expiry so you never ride uninsured. If expired, we handle break-in renewal with insurer inspection." },
    ],
  },

  coverageTypes: [
    {
      title: "Comprehensive (recommended for most)",
      text: "Covers everything: own damage, theft, fire, natural disasters, and third-party liability. Best value for bikes under 10 years.",
      bullets: ["Own damage + third party", "Theft coverage", "Natural disaster (flood, cyclone)", "Personal accident cover for rider"],
    },
    {
      title: "Third-Party Only (minimum legal requirement)",
      text: "Only covers damage you cause to others. Your own bike damage/theft is not covered. Costs only ₹482-1,500/year but leaves you exposed.",
      bullets: ["Legally mandatory", "Third-party death/injury/property coverage", "Zero own-damage protection", "Only suitable for very old/low-value bikes"],
    },
    {
      title: "Zero Depreciation Add-on",
      text: "Claim without depreciation deduction on parts. Without this, plastic/rubber/fiber parts are depreciated 30-50% during claims. Adds ₹300-800 to premium.",
      bullets: ["Full claim value on parts", "Best for bikes < 5 years old", "Worth it for expensive bikes (₹1 lakh+)", "Small premium addition for big claim benefit"],
    },
  ],

  claimProcess: {
    title: "Two-wheeler insurance claim process",
    intro: "Most bike claims are simpler than car claims, but the documentation steps are the same. Here's what to do.",
    steps: [
      { title: "Inform insurer within 24 hours", text: "Call the insurer helpline or call us immediately. For theft, also file FIR within 24 hours." },
      { title: "Take photos", text: "Multiple angles of the damage, road scene, other vehicle (if involved). These are critical for claim approval." },
      { title: "File FIR (if needed)", text: "For theft, third-party injury, or major accidents — FIR from nearest police station is mandatory." },
      { title: "Surveyor assessment", text: "Insurer sends surveyor to assess damage. For minor claims, photo-based assessment may be accepted." },
      { title: "Repair and settlement", text: "Cashless at network garage or reimbursement after repair. Typical timeline: 5-10 days for minor, 15-30 days for major." },
    ],
    ourRole: "We coordinate the entire claim process — from FIR to settlement. For two-wheeler claims, most can be resolved within a week with proper documentation.",
  },

  documents: [
    "RC (Registration Certificate)",
    "Previous/current insurance policy copy",
    "Driving license of rider",
    "FIR copy (for theft or accident with injury)",
    "Photos of damage",
    "Repair estimate from authorized service center",
  ],

  pricingFactors: [
    "Engine CC (higher CC = higher premium)",
    "Bike age and model",
    "IDV (Insured Declared Value)",
    "NCB discount (up to 50% for claim-free years)",
    "Add-ons (zero dep, RSA, accessories cover)",
    "City of registration",
    "Previous claim history",
  ],

  scenarios: [
    { title: "Bike stolen — no FIR filed for 3 days", text: "Customer's bike was stolen but they filed FIR after 3 days. Insurer initially resisted the claim. We helped build a case showing the delay was due to being out of station, and the claim was processed." },
    { title: "Pillion rider injury claim", text: "Pillion passenger was injured and needed hospitalization. We guided the third-party claim process and ensured medical expenses were covered through the motor accident claims tribunal process." },
  ],

  gapQuestions: [
    { q: "My bike insurance expired 3 months ago — can I still renew?", a: "Yes, through a break-in renewal process. The insurer will require a physical inspection of the bike. We arrange this and complete the renewal — usually done within 2-3 days." },
    { q: "Is comprehensive insurance worth it for a ₹60,000 bike?", a: "Yes, for bikes under 7-8 years. The premium difference between TP-only and comprehensive is just ₹800-1,500. That covers theft (very common for two-wheelers) and own damage." },
    { q: "Does my insurance cover me if I'm riding in another state?", a: "Yes, motor insurance is valid across India. No separate state-level insurance needed." },
  ],

  faqs: [
    { q: "What is the cheapest bike insurance?", a: "Third-party only starts from ₹482/year. But comprehensive (which adds own damage + theft cover) is only ₹1,500-2,500/year. We recommend comprehensive for the small additional cost." },
    { q: "Can I buy bike insurance for 5 years?", a: "Yes, long-term policies (1+5 year bundled) are available. Third-party is fixed for 5 years upfront. We compare both annual and long-term options to find the best deal." },
    { q: "What is the penalty for riding without insurance?", a: "First offense: ₹2,000 fine and/or 3 months imprisonment. Repeat offense: ₹4,000 and/or 3 months. Plus, you're personally liable for any accident damages — which can run into lakhs." },
    { q: "Does bike insurance cover accessories?", a: "Standard policies don't cover accessories (leg guard, carrier, GPS, alloy wheels). You need an accessories cover add-on. We include this if you have significant aftermarket additions." },
    { q: "How do I transfer bike insurance to a new owner?", a: "When selling your bike, insurance should be transferred to the buyer within 14 days. We help with the transfer paperwork and ensure both parties are covered during transition." },
    { q: "Do you provide doorstep bike insurance service in Chennai?", a: "Yes. We come to your location anywhere in Chennai for policy review, renewal, or claim documentation. Just WhatsApp your current policy and we'll take it from there." },
  ],

  relatedPolicies: [
    { label: "Car Insurance", href: EN("/policies/car-insurance/"), desc: "Complete guide — coverage types, IDV, add-ons, claim process." },
    { label: "Health Insurance", href: EN("/policies/health-insurance/"), desc: "Individual, family floater, cashless hospitals explained." },
    { label: "Commercial Vehicle Insurance", href: EN("/policies/commercial-vehicle-insurance/"), desc: "Lorry, truck, fleet insurance — permits, compliance, claims." },
  ],
},

// ===========================
// 4. COMMERCIAL VEHICLE INSURANCE (P0)
// ===========================
"commercial-vehicle-insurance": {
  seoTitle: "Commercial Vehicle Insurance in Chennai — Lorry, Truck, Fleet & Permit Guide",
  seoDesc: "Best commercial vehicle insurance in Chennai. Lorry, truck, trailer, fleet coverage. Permit/fitness/RC alignment. Multi-insurer comparison. 30+ years expertise. 4.9★ rated. Call 7448324068.",
  heroH1: "Commercial Vehicle Insurance in Chennai — Lorry, Truck & Fleet Guide",
  heroP: "Complete guide to commercial vehicle insurance — coverage types, permit alignment, fitness certificate requirements, fleet management, and claim process for transport operators. We specialize in commercial vehicles with 30+ years of NH-belt experience.",

  bestFor: ["Lorry/truck owners", "Fleet operators", "Goods carriers", "Transport companies", "Auto-rickshaw owners"],
  premiumRange: "₹8,000 – ₹1,00,000+/year depending on vehicle type, GVW & usage",
  claimSummary: "Own damage: 15-30 days. Third-party: Court-dependent (we guide documentation)",

  whatIsIt: {
    title: "What is commercial vehicle insurance?",
    text: "Commercial vehicle insurance covers vehicles used for commercial purposes — goods transport, passenger transport, or business use. It's mandatory and more complex than personal vehicle insurance because of permits, fitness requirements, and higher third-party liability exposure.",
    bullets: [
      "Mandatory: Third-party insurance is legally required for all commercial vehicles",
      "Higher liability: Commercial vehicles carry higher third-party risk (goods, passengers, road users)",
      "Permit-linked: Policy must match the permit type (national/state/contract carriage)",
      "Compliance-heavy: RC, fitness, permit, tax receipt must all be current for valid claims",
    ],
  },

  userNeeds: [
    { title: "Single vehicle owner?", text: "Whether it's one lorry or one auto-rickshaw — we ensure permit/RC/fitness alignment with your policy. Document mismatch is the #1 reason commercial claims get rejected." },
    { title: "Fleet operator?", text: "Managing 5-100+ vehicles? We handle bulk renewals, track expiry dates, coordinate multi-vehicle claims, and compare fleet packages across insurers for volume discounts." },
    { title: "Accident / claim?", text: "Commercial vehicle accidents are complex — FIR, fitness validity, permit status, driving license category all matter. We guide the entire documentation chain." },
  ],

  commonProblems: [
    { title: "Permit/fitness mismatch = claim rejected", text: "If your vehicle's permit type on paper doesn't match what's declared on the insurance policy, or if fitness certificate has expired — own damage claim is rejected. We verify ALL documents before policy issuance." },
    { title: "Driver doesn't have correct license category", text: "A light motor vehicle (LMV) license holder driving a heavy goods vehicle (HGV) = automatic claim rejection. We check driver license categories during policy setup." },
    { title: "Overloading not disclosed", text: "If the vehicle was overloaded at the time of accident and it's documented in the FIR, the claim gets complicated. We advise on proper GVW declaration and documentation." },
    { title: "Third-party liability underestimated", text: "Commercial vehicles have unlimited third-party liability. A single fatal accident can result in ₹50 lakh+ liability. We ensure adequate third-party cover." },
    { title: "Fleet renewals missed — multiple vehicles uninsured", text: "Managing 10+ vehicle renewal dates is chaos without a system. We maintain a renewal calendar and send advance alerts for every vehicle." },
  ],

  marketComparison: {
    title: "Why commercial vehicle insurance needs expert guidance",
    intro: "Commercial vehicle insurance is NOT like personal car insurance. The documentation requirements, permit alignments, and claim complexities require someone who has handled these vehicles for decades.",
    rows: [
      { factor: "Document verification", online: "Self-declaration only", withUs: "RC, permit, fitness, GVW — all cross-verified" },
      { factor: "Permit alignment", online: "Not checked", withUs: "Policy matches exact permit type" },
      { factor: "Claim handling", online: "Call center", withUs: "Personal — we've handled 1000+ commercial claims" },
      { factor: "Fleet management", online: "Individual policies only", withUs: "Bulk renewal, multi-vehicle tracking" },
      { factor: "Driver license check", online: "Not verified", withUs: "License category verified for each vehicle type" },
      { factor: "NH/highway expertise", online: "No", withUs: "30+ years in Chennai NH belt" },
    ],
  },

  ourApproach: {
    title: "Our 30+ year approach to commercial vehicles",
    intro: "We've handled thousands of commercial vehicle policies and claims. Here's how we ensure your vehicle is properly covered.",
    steps: [
      { title: "Complete document audit", text: "RC, permit (national/state/contract), fitness certificate, tax receipt, pollution certificate, driver license — every document verified and aligned with policy." },
      { title: "GVW & usage match", text: "Policy declared value matches actual Gross Vehicle Weight and usage type. Mismatch here = grounds for claim rejection." },
      { title: "Multi-insurer comparison", text: "Commercial vehicle premiums vary significantly between insurers. We compare New India, United India, National, Oriental, ICICI Lombard, and more." },
      { title: "Fleet coordination", text: "For multiple vehicles, we create a master tracker — renewal dates, policy numbers, premium comparison, claim history — all in one place." },
    ],
  },

  coverageTypes: [
    {
      title: "Comprehensive Package Policy",
      text: "Covers own damage + third-party liability. Essential for commercial vehicles due to high exposure on roads. Includes fire, theft, natural calamity, and accident damage.",
      bullets: ["Own damage + unlimited third-party", "Fire and theft", "Natural disasters", "Personal accident for owner-driver"],
    },
    {
      title: "Third-Party Liability Only",
      text: "Covers only injury/damage caused to third parties. For commercial vehicles, third-party premiums are fixed by IRDAI based on vehicle type and carrying capacity.",
      bullets: ["Unlimited liability cover", "Death/injury/property of third parties", "No own-damage protection", "Premium fixed by IRDAI — no comparison needed"],
    },
    {
      title: "Fleet Policy / Package",
      text: "Bulk policy covering multiple vehicles under one agreement. Offers administrative simplicity and sometimes volume discounts on OD premium.",
      bullets: ["All vehicles under one policy", "Simplified renewal management", "Potential bulk discount", "Centralized claim coordination"],
    },
    {
      title: "Goods in Transit (GIT) Add-on",
      text: "Covers the goods being transported (not just the vehicle). Essential for transport operators who are liable for cargo damage.",
      bullets: ["Covers goods carried in the vehicle", "Separate from motor policy", "Can be annual or per-trip", "Essential for contract carriers"],
    },
  ],

  claimProcess: {
    title: "Commercial vehicle claim process — what's different",
    intro: "Commercial vehicle claims are more complex than personal vehicles. Third parties involved, police investigations, permit verification — here's the process.",
    steps: [
      { title: "Inform insurer immediately", text: "Within 24 hours. For highway accidents, inform local police AND the insurer. We can handle the insurer notification." },
      { title: "Secure the accident scene", text: "Photos of vehicle damage, road conditions, load status, other vehicle involved. For fatal accidents, preserve all evidence." },
      { title: "FIR and police report", text: "Mandatory for all commercial vehicle accidents with injury/death. The FIR contents directly impact claim processing. We guide what to include." },
      { title: "Document gathering", text: "RC, fitness, permit status, driver license, insurance policy, FIR, surveyor report, repair estimate. ALL must be current and matching. This is where most claims fail." },
      { title: "Surveyor assessment", text: "For commercial vehicles, surveyors verify overloading, permit validity, and fitness status in addition to damage assessment. We prepare for this." },
      { title: "Settlement", text: "Own damage: 15-30 days. Third-party bodily injury: MACT tribunal process (can take months-years). We guide through both." },
    ],
    ourRole: "We prepare the complete documentary evidence, coordinate with surveyors, verify all compliance documents, and follow up with the insurer. For third-party claims, we guide the MACT process.",
  },

  documents: [
    "RC (Registration Certificate) — matching vehicle details",
    "Insurance policy copy",
    "Valid driving license (correct category — HGV/transport)",
    "Permit (national/state/contract carriage) — current",
    "Fitness certificate — current",
    "Tax receipt — current",
    "FIR copy (for all accident claims)",
    "Repair estimate from authorized workshop",
    "Photos of damage and accident scene",
    "Load details / delivery challan (if goods damage involved)",
  ],

  pricingFactors: [
    "Vehicle type (lorry, truck, tipper, trailer, bus, auto)",
    "Gross Vehicle Weight (GVW) — higher weight = higher premium",
    "Age of vehicle",
    "Zone of registration",
    "Carrying capacity and usage type",
    "Previous claim history",
    "NCB (if claim-free years)",
    "Fleet size (volume discounts may apply)",
    "Add-ons (GIT, driver PA, legal liability to paid driver)",
  ],

  scenarios: [
    { title: "Lorry accident — permit expired 2 days before", text: "Owner's claim was initially rejected because the permit had expired 2 days before the accident. We helped demonstrate that renewal was in process and negotiated a resolution with the insurer." },
    { title: "Fleet of 15 vehicles — 3 had lapsed insurance", text: "During a routine audit, we found 3 vehicles in a 15-vehicle fleet had lapsed insurance. We immediately arranged break-in renewals and set up a master calendar to prevent recurrence." },
  ],

  gapQuestions: [
    { q: "Is the premium same for all commercial insurers?", a: "Third-party premium is fixed by IRDAI — identical everywhere. OD (Own Damage) premium varies by insurer. We compare OD rates across 10+ insurers to find the best deal." },
    { q: "What happens if my driver causes an accident?", a: "If the driver has a valid license of correct category and wasn't intoxicated, the insurance covers everything — own damage and third-party. If license is wrong category, own-damage claim may be rejected but third-party is still paid." },
    { q: "Do I need separate insurance for goods I carry?", a: "Yes. Motor insurance covers the vehicle — not the goods inside. For goods, you need Marine Inland / Goods in Transit (GIT) insurance. We can bundle this with your motor policy." },
  ],

  faqs: [
    { q: "What is the best commercial vehicle insurance in Chennai?", a: "For commercial vehicles, New India Assurance and United India have the widest network and fastest claim processing for trucks/lorries. We also compare ICICI Lombard and Bajaj Allianz for competitive OD rates. Our 30+ years of commercial vehicle experience means your documentation is claim-ready." },
    { q: "How much does lorry insurance cost?", a: "Third-party: ₹15,000-30,000/year (based on GVW). Comprehensive: ₹25,000-1,00,000+ depending on vehicle value, age, and GVW. We compare across 10+ insurers for the best OD rate." },
    { q: "Can you manage insurance for my entire fleet?", a: "Yes. We manage fleets from 5 to 100+ vehicles — master renewal calendar, bulk processing, individual claim tracking, and annual coverage review for the entire fleet." },
    { q: "How is commercial vehicle insurance different from car insurance?", a: "Higher premiums (more risk), permit/fitness alignment required, driver license category matters (HGV/transport), GVW-based pricing, and third-party liability is potentially unlimited. Commercial claims are more document-heavy." },
    { q: "My lorry is 10 years old — can I still get comprehensive insurance?", a: "Yes, but the IDV will be low based on the vehicle's current market value. We help calculate the right IDV and compare insurers who accept older commercial vehicles." },
    { q: "What if I operate vehicles in multiple states?", a: "Your insurance is valid across India. But your permit (national/state) must match your routes. We verify route permit documentation during policy setup to prevent claim issues." },
    { q: "Do you provide insurance for auto-rickshaws?", a: "Yes. Auto-rickshaws need commercial vehicle insurance. We handle permit verification, driver license checks, and provide claim support. Same thorough approach as lorries." },
  ],

  relatedPolicies: [
    { label: "Car Insurance", href: EN("/policies/car-insurance/"), desc: "Personal vehicle coverage — types, add-ons, claim process." },
    { label: "Health Insurance", href: EN("/policies/health-insurance/"), desc: "Driver & company group health plans, cashless hospitals." },
    { label: "Bike Insurance", href: EN("/policies/bike-insurance/"), desc: "Two-wheeler coverage guide and claim process." },
  ],
},

};
