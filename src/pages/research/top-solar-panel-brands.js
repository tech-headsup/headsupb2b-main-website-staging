"use client";

import Head from "next/head";
import Link from "next/link";

// ─── Helper Components ────────────────────────────────────────────────────────

function Section({ id, number, title, children }) {
    return (
        <section id={id} className="pt-12">
            <div className="border-t border-[#E8E0D4] pt-4 mb-4">
                {number && (
                    <div className="text-[11px] tracking-[2px] text-[#7A6E62] font-semibold mb-1 uppercase">
                        {number}
                    </div>
                )}
                <h2 className="text-[30px] font-serif text-[#1A1410] leading-tight">{title}</h2>
            </div>
            <div className="text-[17px] leading-[1.8] text-[#3D3328] space-y-4">{children}</div>
        </section>
    );
}

function Callout({ variant = "info", title, children }) {
    const map = {
        tip:  { wrap: "border-[#A0D4C8] bg-[#E0F2EE]",  title: "text-[#0A6E5C]", body: "text-[#0A6E5C]", icon: "💡" },
        warn: { wrap: "border-[#F5C8A0] bg-[#FEF4EA]",  title: "text-[#7A4A0A]", body: "text-[#8A5A1A]", icon: "⚠" },
        info: { wrap: "border-[#C0D8F5] bg-[#EAF2FD]",  title: "text-[#14407A]", body: "text-[#1A5090]", icon: "ℹ" },
    };
    const s = map[variant];
    return (
        <div className={`border p-5 my-7 rounded flex gap-4 items-start ${s.wrap}`}>
            <div className="text-[20px] mt-[2px] shrink-0">{s.icon}</div>
            <div className="flex-1 text-[14px] leading-[1.6]">
                <strong className={`block mb-1 text-[14px] font-semibold ${s.title}`}>{title}</strong>
                <p className={s.body}>{children}</p>
            </div>
        </div>
    );
}

function BrandCard({ rank, medal, name, location, profile, tenders, contractValue, almm, market }) {
    const medalClass =
        medal === "Gold"   ? "bg-[#FDF3DC] border-[#EFD28D]" :
        medal === "Silver" ? "bg-[#F5F5F5] border-[#DEDEDE]" :
        medal === "Bronze" ? "bg-[#FBEADF] border-[#E8C3A5]" :
                             "bg-white border-[#E8E0D4]";
    const rankColor =
        medal === "Gold"   ? "text-[#C8900A]" :
        medal === "Silver" ? "text-[#8B8B8B]" :
        medal === "Bronze" ? "text-[#A6633F]" :
                             "text-[#C8900A]";
    return (
        <div className={`border rounded-[6px] p-5 ${medalClass}`}>
            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <div className="text-[11px] uppercase tracking-[0.08em] text-[#7A6E62] font-semibold mb-2">
                        #{rank} {medal}
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#1A1410] leading-[1.35]">{name}</h3>
                    <p className="text-[13px] text-[#7A6E62] mt-1">{location}</p>
                </div>
                <div className={`font-serif text-[36px] leading-none ${rankColor}`}>{rank}</div>
            </div>
            <div className="grid grid-cols-1 gap-3 text-[13px]">
                <div>
                    <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">Brand profile</div>
                    <p className="text-[#3D3328] m-0">{profile}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">Govt projects</div>
                        <p className="text-[#1A1410] font-medium m-0">{tenders}</p>
                    </div>
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">Est. value</div>
                        <p className="text-[#1A1410] font-medium m-0">{contractValue}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">ALMM status</div>
                        <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">
                            {almm}
                        </span>
                    </div>
                    <div>
                        <div className="text-[11px] tracking-[0.08em] uppercase text-[#7A6E62] font-semibold mb-1">Key market</div>
                        <p className="text-[#1A1410] font-medium m-0">{market}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CellBadge({ value }) {
    const styles =
        value === "Y" ? "bg-[#D3EDDF] text-[#1A6B3A]" :
        value === "N" ? "bg-[#FCE4E4] text-[#B83232]" :
                        "bg-[#FEF0D0] text-[#7A4A0A]";
    return (
        <span className={`inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] ${styles}`}>
            {value}
        </span>
    );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const tocItems = [
    { id: "why-tenders",      label: "Why Government Tenders Define the Solar Brand Landscape" },
    { id: "win-criteria",     label: "What Makes a Brand Win Government Tenders?" },
    { id: "ranking",          label: "Top Solar Panel Brands: Full Ranking (2025)" },
    { id: "epc-leaders",      label: "Top EPC Companies Winning Large-Value Tenders" },
    { id: "matrix",           label: "Brand Comparison Matrix: Key Criteria" },
    { id: "tender-data",      label: "Real Tender Data: Who Won What in Gujarat & Rajasthan" },
    { id: "almm",             label: "ALMM Compliance: The Non-Negotiable Entry Ticket" },
    { id: "mono-perc",        label: "Mono-PERC 550–575 Wp: Why It Dominates Every Tender" },
    { id: "state-performance",label: "State-wise Brand Performance" },
    { id: "buyer-playbook",   label: "How B2B Buyers Should Use This Data" },
    { id: "faq",              label: "FAQ: B2B Vendor Questions Answered" },
];

const topBrands = [
    {
        rank: 1, medal: "Gold",
        name: "Waaree Energies Ltd.", location: "Gujarat, India",
        profile: "India's largest solar panel manufacturer. Utility-scale Mono-PERC specialist with the widest ALMM-listed product range and strongest government tender track record in 2024-25.",
        tenders: "40+ govt projects (est.)", contractValue: "Rs.500+ Cr (est. 2024-25)",
        almm: "ALMM Part-I Listed", market: "Gujarat, Rajasthan, UP",
    },
    {
        rank: 2, medal: "Silver",
        name: "Adani Solar (ASEL)", location: "Gujarat, India",
        profile: "Integrated cell-to-module manufacturer. Preferred supplier in Coal India, NTPC, and large PSU-backed supply chains. Backward integration gives strong cost and delivery advantages.",
        tenders: "35+ govt projects (est.)", contractValue: "Rs.450+ Cr (est. 2024-25)",
        almm: "ALMM Part-I Listed", market: "Gujarat, MP, Rajasthan",
    },
    {
        rank: 3, medal: "Bronze",
        name: "Vikram Solar", location: "West Bengal, India",
        profile: "Pioneer in Mono-PERC and HJT technology. Strong in utility-scale and institutional supply. Respected for product quality and export-grade manufacturing standards.",
        tenders: "25+ govt projects (est.)", contractValue: "Rs.300+ Cr (est. 2024-25)",
        almm: "ALMM Part-I Listed", market: "Pan-India utility",
    },
    {
        rank: 4, medal: "Ranked",
        name: "Tata Power Solar", location: "Maharashtra, India",
        profile: "Part of Tata Group. Trusted across rooftop, institutional, and utility segments. Strong brand recognition among government procurement committees.",
        tenders: "20+ govt projects (est.)", contractValue: "Rs.250+ Cr (est. 2024-25)",
        almm: "ALMM Part-I Listed", market: "Pan-India, all segments",
    },
    {
        rank: 5, medal: "Ranked",
        name: "Goldi Solar", location: "Gujarat, India",
        profile: "Dominant in GEM portal rooftop procurement for Gujarat Nagarpalikas. High volume in smaller municipal contracts.",
        tenders: "30+ GEM portal orders", contractValue: "Rs.50–150 Cr (est.)",
        almm: "ALMM Part-I Listed", market: "Gujarat Nagarpalikas",
    },
    {
        rank: 6, medal: "Ranked",
        name: "Renewsys India", location: "Maharashtra, India",
        profile: "Mid-scale EPC supply player. Domestic cell and module manufacturer with consistent presence in compliant government procurement.",
        tenders: "15+ govt projects (est.)", contractValue: "Rs.100–200 Cr (est.)",
        almm: "ALMM Part-I Listed", market: "Maharashtra, Gujarat",
    },
    {
        rank: 7, medal: "Ranked",
        name: "Premier Energies", location: "Telangana, India",
        profile: "South India's largest solar manufacturer. Specialises in Mono-PERC 550–575 Wp for utility and institutional government supply.",
        tenders: "15+ govt projects (est.)", contractValue: "Rs.100–180 Cr (est.)",
        almm: "ALMM Part-I Listed", market: "Andhra, Telangana, TN",
    },
    {
        rank: 8, medal: "Ranked",
        name: "Jupiter International", location: "Gujarat, India",
        profile: "Rooftop and small EPC specialist. Strong regional presence in Gujarat GEM portal procurement and Nagarpalika-linked rooftop orders.",
        tenders: "20+ GEM portal orders", contractValue: "Rs.30–80 Cr (est.)",
        almm: "ALMM Part-I Listed", market: "Gujarat rooftop market",
    },
];

const epcRows = [
    { company: "KPI Green Energy Limited",          state: "Kachchh, Gujarat",        value: "Rs.1,311 Cr",    authority: "Coal India Ltd",         scope: "300 MW EPC + 5yr O&M; Khavda Solar Park" },
    { company: "Kosol Energie Pvt Ltd",             state: "Banaskantha, Gujarat",     value: "Rs.485 Cr",      authority: "Coal India Ltd",         scope: "100 MW EPC (Balance Work, Bhadramali)" },
    { company: "Phaloudi Constructions & Infra",    state: "Kachchh, Gujarat",         value: "Rs.136 Cr",      authority: "Bridge & Roof / NTPC",   scope: "600 MW BOS Package (NTPC Khavda)" },
    { company: "GHV India Pvt Ltd",                 state: "Vadodara, Gujarat",        value: "Rs.119 Cr",      authority: "Bridge & Roof / GSECL",  scope: "100 MW BOS Package (GSECL RE Park Khavda)" },
    { company: "Shree Ganesh Corporation",          state: "Surat, Gujarat",           value: "Rs.98.90 Cr",    authority: "CPWD",                   scope: "EPC + Solar PV (IIIT Surat Campus)" },
    { company: "Purshotam Profiles Pvt Ltd",        state: "Surat, Gujarat",           value: "Rs.25.88 Cr",    authority: "ONGC",                   scope: "10 MW Floating Solar + 7yr O&M (ONGC Hazira)" },
    { company: "Imagine Powertree Pvt Ltd",         state: "Mahesana, Gujarat",        value: "Rs.8.41 Cr",     authority: "ONGC",                   scope: "Solar PV Car Parking + EV (ONGC KDM)" },
    { company: "Shri Sai Electrical",               state: "Surat, Gujarat",           value: "Rs.6.60 Cr",     authority: "NTPC Ltd",               scope: "O&M — Solar at NTPC Kawas" },
    { company: "Avirat Energy Pvt Ltd",             state: "Porbandar, Gujarat",       value: "Rs.1.98 Cr",     authority: "UD&UHD Gujarat",          scope: "Grid-connected Ground Mounted PV Solar" },
    { company: "SS Enterprise",                     state: "Anand/Bharuch, Gujarat",   value: "Rs.1.4–3.3 Cr",  authority: "Multiple Nagarpalikas",  scope: "Rooftop solar EPC" },
    { company: "Samarpan Corporation",              state: "Anand/Vadodara, Gujarat",  value: "Rs.1.4–2.2 Cr",  authority: "Multiple Nagarpalikas",  scope: "Rooftop solar EPC" },
    { company: "Bhanwariya Infra Projects Pvt Ltd", state: "Sirohi, Rajasthan",        value: "PM-KUSUM tariff", authority: "AVVNL",                 scope: "EPC PM-KUSUM A (Abu Road & Reodar)" },
    { company: "Ganesham Energy Solutions",         state: "Sri Ganganagar, RJ",       value: "RESCO tariff",   authority: "JVVNL",                  scope: "EPC + 25yr O&M; RESCO" },
    { company: "Atri Sunpower Pvt Ltd",             state: "Jaisalmer, Rajasthan",     value: "RESCO tariff",   authority: "JVVNL",                  scope: "EPC + 25yr O&M; RESCO" },
    { company: "Bhawani Construction Company",      state: "Bikaner, Rajasthan",       value: "RESCO tariff",   authority: "JVVNL",                  scope: "EPC + 25yr O&M; RESCO" },
    { company: "Solar Pulse",                       state: "Jalor, Rajasthan",         value: "RESCO tariff",   authority: "JVVNL",                  scope: "EPC + 25yr O&M; RESCO" },
    { company: "Lal Singh & Construction Co.",      state: "Jaisalmer, Rajasthan",     value: "RESCO tariff",   authority: "JVVNL",                  scope: "PM-KUSUM A – Jaisalmer Lot 107" },
    { company: "Ganesh Ram Patel",                  state: "Jodhpur, Rajasthan",       value: "EPC 270 days",   authority: "JVVNL",                  scope: "PM-KUSUM A – Jodhpur Divisions" },
];

const matrixRows = [
    ["Waaree Energies",  "Y","Y","Y","Y","Y"],
    ["Adani Solar",      "Y","Y","Y","Y","Y"],
    ["Vikram Solar",     "Y","Y","Y","Y","Y"],
    ["Tata Power Solar", "Y","Y","Y","Y","Y"],
    ["Goldi Solar",      "Y","Y","Y","Y","Y"],
    ["Renewsys India",   "Y","Y","Y","Y","P"],
    ["Premier Energies", "Y","Y","Y","Y","P"],
    ["Jupiter Intl",     "Y","Y","Y","Y","Y"],
];

const gujaratProjects = [
    ["300 MW Solar EPC + 5yr O&M (Khavda Solar Park)",     "KPI Green Energy",           "Kachchh, GJ",      "Rs.1,311 Cr",   "Coal India Ltd"],
    ["100 MW Solar EPC Balance Work (Bhadramali)",          "Kosol Energie Pvt Ltd",      "Banaskantha, GJ",  "Rs.485 Cr",     "Coal India Ltd"],
    ["600 MW BOS Package (NTPC Khavda)",                    "Phaloudi Constructions",     "Kachchh, GJ",      "Rs.136 Cr",     "Bridge & Roof"],
    ["100 MW BOS Package (GSECL RE Park Khavda)",           "GHV India Pvt Ltd",          "Vadodara, GJ",     "Rs.119 Cr",     "Bridge & Roof"],
    ["EPC – IIIT Surat Campus (incl. Solar PV)",            "Shree Ganesh Corporation",   "Surat, GJ",        "Rs.98.90 Cr",   "CPWD"],
    ["10 MW Floating Solar + 7yr O&M (ONGC Hazira)",        "Purshotam Profiles Pvt Ltd", "Surat, GJ",        "Rs.25.88 Cr",   "ONGC"],
    ["Solar PV Car Parking + EV (ONGC KDM)",                "Imagine Powertree Pvt Ltd",  "Mahesana, GJ",     "Rs.8.41 Cr",    "ONGC"],
    ["O&M – Solar at NTPC Kawas",                           "Shri Sai Electrical",        "Surat, GJ",        "Rs.6.60 Cr",    "NTPC Ltd"],
];

const rajasthanProjects = [
    ["PM-KUSUM A – Jaisalmer Division",   "Atri Sunpower Pvt Ltd",             "Jaisalmer, RJ",      "RESCO 25yr",    "JVVNL"],
    ["PM-KUSUM A – Jaisalmer Lot 107",    "Lal Singh & Construction Co.",      "Jaisalmer, RJ",      "RESCO 25yr",    "JVVNL"],
    ["PM-KUSUM A – Barmer Division",      "M/s Bhagwana Ram Choudhary & Co.",  "Barmer, RJ",         "RESCO 25yr",    "JVVNL"],
    ["PM-KUSUM A – Bikaner Division",     "Bhawani Construction Company",      "Bikaner, RJ",        "RESCO 25yr",    "JVVNL"],
    ["PM-KUSUM A – Jalor Division",       "Solar Pulse",                       "Jalor, RJ",          "RESCO 25yr",    "JVVNL"],
    ["PM-KUSUM A – Sri Ganganagar",       "Ganesham Energy Solutions",         "Sri Ganganagar, RJ", "RESCO 25yr",    "JVVNL"],
    ["PM-KUSUM A – Abu Road & Reodar",    "Bhanwariya Infra Projects Pvt Ltd", "Sirohi, RJ",         "EPC 270 days",  "AVVNL"],
    ["PM-KUSUM A – Jodhpur Divisions",    "Ganesh Ram Patel",                  "Jodhpur, RJ",        "EPC 270 days",  "JVVNL"],
];

const materials = [
    ["Solar Panels",          "Mono-PERC, 550–575 Wp, 144 half-cut cell",          "IEC 61215, IEC 61730 + ALMM",  "100% of tenders"],
    ["Mounting Structures",   "Hot-Dip Galvanised (HDG) steel, fixed-tilt",         "IS 2629 / IS 4759",            "100% of tenders"],
    ["Grid-Tie Inverters",    "String/Central, ALMM-listed",                        "IEC 62109, CEA Grid Standards","100% of tenders"],
    ["DC Solar Cables",       "TUV-certified, flame-retardant, UV-resistant",        "IEC 60228, TUV 2Pfg 1169",    "100% of tenders"],
    ["AC Armoured Cables",    "XLPE/PVC armoured",                                  "IS 7098 Part 2",               "100% of tenders"],
    ["Junction Boxes (AJB)",  "IP65 rated, polycarbonate/GRP",                      "IEC 62446",                    "100% of tenders"],
    ["Earthing Kit",          "Copper bonded rods + conductors",                    "IS 3043 / IEC 62561",          "100% of tenders"],
    ["RMS System",            "MNRE-compliant real-time monitoring",                "MNRE RMS Guidelines 2023",     "PM-KUSUM mandatory"],
];

const almmChecklist = [
    { icon: "✅", title: "IEC 61215 Certification",    text: "Design qualification and type approval for crystalline silicon PV modules — mandatory for ALMM listing." },
    { icon: "✅", title: "IEC 61730 Certification",    text: "PV module safety qualification — Part 1 (requirements) + Part 2 (testing). Required alongside IEC 61215." },
    { icon: "✅", title: "BIS CRS Registration",       text: "Bureau of Indian Standards Compulsory Registration Scheme under Electronics Policy. Non-negotiable for domestic supply." },
    { icon: "✅", title: "MNRE Factory Inspection",    text: "Physical inspection of manufacturing facility by MNRE-appointed inspection agency before ALMM listing is granted." },
    { icon: "✅", title: "Domestic Value Addition",    text: "Minimum domestic content requirement (DCR) under Make in India solar mandate. Imported panels do not qualify." },
    { icon: "✅", title: "Performance Warranty",       text: "Linear power output warranty — 25 years standard, 30 years now becoming market norm in large-value tenders." },
    { icon: "❌", title: "Imported Panels (non-DCR)", text: "Panels manufactured outside India do not qualify for ALMM listing in most categories regardless of quality." },
    { icon: "❌", title: "Unregistered Models",        text: "Even ALMM-listed brands must list each specific model/wattage variant separately. An unlisted variant is ineligible." },
];

const monoPercRows = [
    ["Module efficiency",          "21.0–22.5%",               "18.5–20.0%",              "22.0–23.5%"],
    ["Cost per Wp (approx)",       "Rs.18–22/Wp",              "Rs.20–25/Wp",             "Rs.22–28/Wp"],
    ["ALMM availability",          "Very high (most brands)",  "Declining",               "Growing (limited)"],
    ["Govt tender compliance",     "100% compliant",           "Increasingly excluded",   "Selective projects only"],
    ["Land use efficiency",        "High",                     "Lower",                   "Highest (dual-side)"],
    ["Warranty standard",          "25–30 years linear",       "25 years standard",       "25–30 years"],
    ["Domestic mfg availability",  "Excellent",                "Good",                    "Limited"],
    ["Ideal project type",         "All govt projects",        "Retrofits/small rooftop", "High-irradiance open land"],
];

const stateRows = [
    ["Gujarat",       "Utility-scale (100–600 MW) + Rooftop Nagarpalika", "Coal India, NTPC, ONGC, Nagarpalikas", "Large national EPC companies",    "Panel supply to large EPC; rooftop supply to local installers"],
    ["Rajasthan",     "PM-KUSUM RESCO (1–2 MW distributed)",              "JVVNL, AVVNL, JVVNL Jaipur",          "Regional RESCO developers",        "Panel + BOS supply to regional RESCO developers; RMS vendors"],
    ["Uttar Pradesh", "Multi-sector solar installation",                  "State DISCOMs, UPNEDA",                "Local contractors",                "Solar pump supply (Component B); small-scale EPC support"],
    ["Pan-India PSUs","Factory/campus rooftop (50–770 KWp)",              "GAIL, IOCL, BPCL, BHEL",              "Mid-size EPC companies",           "Rooftop panel + inverter supply; O&M contracts"],
];

const buyerCards = [
    { title: "Solar Panel Manufacturers",          body: "Use the tender award data to identify which EPC contractors are actively procuring panels right now. Contact them within 2 weeks of award — that is when procurement is being finalised. Ensure your specific model (e.g., 555 Wp Mono-PERC) is ALMM-listed. Offer a state-specific datasheet showing compliance with all tender specifications." },
    { title: "Mounting Structure Fabricators",     body: "Every project in the dataset requires HDG fixed-tilt mounting structures. The EPC contractors listed in Section 4 are your direct customers. Approach them after award with lead time commitments for delivery to remote Gujarat and Rajasthan sites — this is often the deciding factor over price." },
    { title: "Cable & Junction Box Suppliers",     body: "TUV-certified DC cables and IP65 AJB/DCDB/ACDB boxes are specified in 100% of tenders. Get listed as a preferred vendor with at least 5 of the major EPC companies in the dataset. Regional stock in Gujarat (Ahmedabad/Surat) and Rajasthan (Jaipur/Jodhpur) dramatically improves your win rate against suppliers with longer lead times." },
    { title: "RMS & Monitoring Technology",        body: "Remote Monitoring Systems are mandatory in PM-KUSUM A projects. The RESCO developers in the Rajasthan data (Atri Sunpower, Ganesham Energy, Solar Pulse, Bhawani Construction) all need MNRE-compliant RMS solutions for 25-year contracts. This is one of the highest-margin, lowest-competition B2B opportunities in solar." },
    { title: "O&M Service Providers",             body: "The Gujarat data shows multiple O&M contracts (NTPC Kawas O&M at Rs.6.60 Cr, ONGC Hazira floating solar with 7-year O&M at Rs.25.88 Cr). RESCO developers in Rajasthan need O&M partners for 25-year terms. Build a service delivery capability in both states and approach RESCO winners directly." },
    { title: "Procurement Teams",                 body: "Use the brand comparison matrix and state-wise patterns to shortlist vendors already aligned with likely compliance and delivery expectations. The tender data gives you a baseline of what specifications every verified supplier must meet before commercial negotiations begin." },
];

const faqs = [
    {
        q: "Which solar panel brand wins the most government tenders in India in 2025?",
        a: "Waaree Energies and Adani Solar (ASEL) are estimated to be the top two brands by volume in government utility-scale procurement in 2025, based on ALMM listing status, manufacturing capacity in India, and EPC contractor preferences in large-value (Rs.100 Cr+) projects. Vikram Solar ranks third. In the rooftop and small-scale GEM portal segment, Goldi Solar and Jupiter International have strong regional presence in Gujarat.",
    },
    {
        q: "What specifications must a solar panel meet to be used in government tenders in 2025?",
        a: "The universal specification in government solar tenders in 2024-25 is: Mono-PERC crystalline silicon, 550–575 Wp, 144 half-cut cells, efficiency 21%+, ALMM Part-I listed by MNRE, IEC 61215 and IEC 61730 certified, BIS CRS registered, 25-year linear power output warranty. Any deviation from these parameters requires specific technical justification in the bid.",
    },
    {
        q: "How do I get my solar panels specified in a government tender?",
        a: "The process has three stages: (1) Get ALMM-listed with MNRE — this takes 3–6 months and is non-negotiable. (2) Approach EPC contractors who are bidding for upcoming projects and get your product into their vendor evaluation process. (3) Provide comprehensive technical documentation, sample panels for testing, and competitive pricing with clear delivery timelines to remote project sites. Pre-qualification with 3–5 major EPC contractors is the most effective route to consistent government project supply.",
    },
    {
        q: "What is the typical solar panel price in government tenders in 2025?",
        a: "Government tender panel pricing (ex-factory, India) for ALMM-listed Mono-PERC 550–575 Wp modules was approximately Rs.18–22 per Wp in 2024-25, depending on order volume and delivery location. Landed cost to remote Gujarat or Rajasthan sites adds Rs.0.50–1.50/Wp for logistics. Prices are subject to change based on raw material costs, exchange rates, and competitive tender dynamics.",
    },
    {
        q: "Which awarding authorities are most active in solar procurement in India?",
        a: "Based on the 2024-25 data, the most active awarding authorities are: JVVNL (Jodhpur) for PM-KUSUM RESCO projects in Rajasthan; Coal India Limited for large-scale utility projects in Gujarat; NTPC for utility-scale and O&M contracts; ONGC for captive industrial solar; GUVNL for competitive capacity bidding; and the network of 162 Nagarpalikas in Gujarat for rooftop solar procurement through GEM portal.",
    },
    {
        q: "How can a new solar brand enter the government tender supply chain?",
        a: "Start with ALMM listing — without it, nothing else matters. Then target smaller, regional EPC contractors executing PM-KUSUM projects (Rs.2–10 Cr contracts) in Rajasthan and Gujarat. These contractors are more willing to trial new vendors than large PSU EPC companies. Get 2–3 successful supply references from PM-KUSUM projects, then use those references to approach larger EPC contractors for projects above Rs.50 Cr.",
    },
];

const tags = [
    "Solar Panel Brands India","ALMM Listed Panels","Government Tenders 2025",
    "Mono-PERC 550Wp","PM-KUSUM","NTPC Solar","Coal India Solar",
    "EPC Contractors India","Solar B2B","Gujarat Solar","Rajasthan Solar",
];

// ─── JSON-LD Schema ────────────────────────────────────────────────────────────

const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "Top Solar Panel Brands Winning Government Tenders in India (2025)",
    description: "Discover which solar panel brands are winning NTPC, Coal India & PM-KUSUM tenders in India 2025.",
    image: "https://www.headsupb2b.com/topsolarpanelbrands.webp",
    author: { "@type": "Organization", name: "B2B Solar Research Team" },
    publisher: { "@type": "Organization", name: "Headsup B2B" },
    datePublished: "2025-04-10", dateModified: "2025-04-10",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.headsupb2b.com/research/top-solar-panel-brands" },
    keywords: "solar panel brands India 2025, ALMM solar manufacturers, government tender solar panels, Mono-PERC 550Wp India",
    articleSection: "Solar Industry Guide", wordCount: 5200,
};

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question", name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TopSolarPanelBrandsIndia2025Page() {
    return (
        <>
            <Head>
                <title>Top Solar Panel Brands Winning Government Tenders in India (2025)</title>
                <meta name="description" content="Discover which solar panel brands are winning NTPC, Coal India & PM-KUSUM tenders in India 2025. ALMM manufacturers, Mono-PERC specs & B2B procurement guide." />
                <meta name="keywords" content="solar panel brands India 2025, ALMM listed solar panels, Mono-PERC 550Wp manufacturers, solar EPC tender winners India, government solar tender winners, PM-KUSUM solar suppliers, NTPC solar EPC contractors, Coal India solar project vendors, solar panel MNRE approved, GEM portal solar tenders" />
                <link rel="canonical" href="https://www.headsupb2b.com/research/top-solar-panel-brands" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Top Solar Panel Brands Winning Government Tenders in India (2025)" />
                <meta property="og:description" content="Discover which solar panel brands are winning NTPC, Coal India & PM-KUSUM tenders in India 2025." />
                <meta property="og:url" content="https://www.headsupb2b.com/research/top-solar-panel-brands" />
                <meta property="og:site_name" content="Headsup B2B" />
                <meta property="og:image" content="https://www.headsupb2b.com/topsolarpanelbrands.webp" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Top Solar Panel Brands Winning Government Tenders in India (2025)" />
                <meta name="twitter:description" content="Discover which solar panel brands are winning NTPC, Coal India & PM-KUSUM tenders in India 2025." />
                <meta name="twitter:image" content="https://www.headsupb2b.com/topsolarpanelbrands.webp" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>

            {/* ── HERO ── */}
            <section className="relative overflow-hidden px-8 pt-20 pb-[72px] bg-headupb2b max-sm:px-4 mt-10">
                <div className="absolute inset-0 pointer-events-none" />
                <div className="relative max-w-[820px] mx-auto z-10">
                    <span
                        className="inline-block text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
                        style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                    >
                        Solar Industry Guide
                    </span>

                    <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[54px] leading-[1.15] text-white mb-6 max-w-[720px]">
                        Top Solar Panel Brands Winning Government Tenders in India (2025)
                    </h1>

                    <p className="text-[18px] text-[rgba(255,255,255,0.65)] max-w-[620px] leading-[1.65] mb-9">
                        The definitive B2B guide to which solar panel brands and EPC companies are winning NTPC, Coal India, ONGC, PM-KUSUM, and GEM portal tenders — and what specifications are driving procurement decisions across India in 2025.
                    </p>

                    <div className="flex flex-wrap items-center gap-7 text-[13px]">
                        {[
                            "20 min read",
                            "Updated April 2025",
                            "Gujarat & Rajasthan Data",
                            "ALMM Compliance Guide",
                        ].map((label) => (
                            <span key={label} className="flex items-center gap-1.5 text-[rgba(255,255,255,0.45)]">
                                <span className="inline-block w-1 h-1 rounded-full bg-[#C8900A]" />
                                <strong className="text-[rgba(255,255,255,0.75)] font-medium">{label}</strong>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BODY ── */}
            <main className="max-w-[820px] mx-auto px-8 pb-[100px] bg-[#FDFAF6] max-sm:px-4">

                {/* TOC */}
                <nav className="border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-7 mt-[52px] mb-[56px] rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7A6E62] mb-4">In this guide</div>
                    <ol className="list-none grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[14px]">
                        {tocItems.map((item, index) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="flex items-baseline gap-2 text-[#3D3328] hover:text-[#C8900A]">
                                    <span className="text-[11px] font-semibold text-[#C8900A] min-w-[22px]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* ── §01 ── */}
                <Section id="why-tenders" number="01" title="Why Government Tenders Define the Solar Brand Landscape">
                    <p>
                        In India's B2B solar market, government tenders are the ultimate brand validator. Unlike the residential solar segment where marketing and dealer networks drive sales, the commercial and utility-scale government solar market runs almost entirely on tender qualification, ALMM listing, and track record in past project deliveries.
                    </p>
                    <p>
                        When NTPC awards a Rs.136 Cr BOS contract for a 600 MW solar project at Khavda, or Coal India signs a Rs.1,311 Cr EPC contract with KPI Green Energy for 300 MW at Khavda Solar Park, the panel specifications embedded in those contracts become the de facto industry standard. Every PM-KUSUM project, every Nagarpalika rooftop tender, and every PSU solar installation follows the same specification trail — Mono-PERC, 550–575 Wp, ALMM-listed, HDG mounting structures, IP65 junction boxes.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-2">
                        {[
                            { value: "Rs.1,311", unit: "Cr",    desc: "Largest single solar EPC — KPI Green Energy, Khavda 2025" },
                            { value: "550–575",  unit: "Wp",    desc: "Universal panel spec across all government tenders 2024-25" },
                            { value: "100%",     unit: "",      desc: "Tenders require ALMM — panels & inverters mandatory" },
                            { value: "30.8",     unit: "GW",    desc: "PM-KUSUM target capacity — active procurement pipeline" },
                            { value: "20+",      unit: "States",desc: "Awarding solar contracts via GEM, BidAssist, DISCOMs" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white border border-[#E8E0D4] rounded-[6px] px-5 pt-5 pb-4">
                                <div className="font-serif text-[32px] leading-[1.1] text-[#1A1410] mb-1">
                                    <span className="text-[#C8900A]">{stat.value}</span>
                                    {stat.unit && <span className="text-[20px] ml-1">{stat.unit}</span>}
                                </div>
                                <div className="text-[13px] text-[#7A6E62] leading-[1.4]">{stat.desc}</div>
                            </div>
                        ))}
                    </div>

                    <blockquote className="border-l-[3px] border-[#C8900A] my-9 px-7 py-5 bg-[#FDF3DC] rounded-r-md">
                        <p className="font-serif text-[22px] leading-[1.45] text-[#1A1410] italic m-0">
                            When a procurement manager at a state DISCOM or a junior EPC contractor in Barmer, Rajasthan asks "which panel brand should we use?" — the answer is almost always whichever brand has been specified or approved in the most recent large-value government tender in their region.
                        </p>
                        <cite className="block mt-3 text-[13px] text-[#7A6E62] not-italic">
                            Key insight: tender wins = brand credibility in B2B solar procurement
                        </cite>
                    </blockquote>
                </Section>

                {/* ── §02 ── */}
                <Section id="win-criteria" number="02" title="What Makes a Solar Panel Brand Win Government Tenders?">
                    <p>
                        Winning a government solar tender in India is not just about having the cheapest panel. There are five non-negotiable criteria that determine whether a solar panel brand can even bid for — let alone win — government procurement contracts in 2025.
                    </p>

                    <div className="grid grid-cols-1 gap-[1px] mt-8 mb-3 bg-[#E8E0D4] border border-[#E8E0D4] rounded-[6px] overflow-hidden">
                        {[
                            { num: "01", color: "border-b-[#C8900A]", title: "ALMM Listing (Mandatory)", text: "All solar panels used in government projects above 10 kW must be on the MNRE's Approved List of Models and Manufacturers. Without ALMM listing, a brand is ineligible regardless of price, quality, or relationship.", note: "IEC 61215, IEC 61730, BIS CRS + MNRE factory inspection" },
                            { num: "02", color: "border-b-[#0A6E5C]", title: "Watt-Peak Specification Match", text: "Government tenders in 2024-25 have converged on the 550–575 Wp Mono-PERC specification. Brands whose flagship product does not fall within this range are immediately disadvantaged in evaluation, even if technically compliant.", note: "550Wp, 555Wp, 560Wp, 565Wp, 570Wp, 575Wp — all specified in active tenders" },
                            { num: "03", color: "border-b-[#14407A]", title: "Track Record in Large Projects", text: "EPC contractors bidding for 100 MW+ projects require panel suppliers with proven delivery experience at scale. First-time suppliers face significant pre-qualification barriers in projects above Rs.50 Cr.", note: "Minimum: 2–3 completed projects above 1 MW for most tender pre-qualification" },
                            { num: "04", color: "border-b-[#C8900A]", title: "Competitive Pricing + L1 Compliance", text: "In government tenders, the lowest technically-compliant bidder wins (L1 rule). Brands that can manufacture at scale in India and offer competitive landed cost to remote project sites consistently win.", note: "Landed cost to remote Gujarat/Rajasthan sites often 3–7% above factory gate price" },
                            { num: "05", color: "border-b-[#0A6E5C]", title: "Reliable Delivery to Remote Sites", text: "PM-KUSUM and utility-scale projects in Gujarat and Rajasthan are in remote locations. EPC contractors face liquidated damages for delays. Panel brands with regional stock and dedicated logistics consistently win repeat orders.", note: "Jaisalmer, Barmer, Kutch — 600–900 km from major manufacturing hubs" },
                        ].map((item) => (
                            <div key={item.num} className={`bg-white p-7 relative border-b-[3px] ${item.color}`}>
                                <span className="block font-serif text-[52px] text-[#FDF3DC] leading-none mb-1">{item.num}</span>
                                <h4 className="text-[17px] font-semibold text-[#1A1410] mb-2.5">{item.title}</h4>
                                <p className="text-[13.5px] text-[#7A6E62] leading-[1.6] m-0">{item.text}</p>
                                <p className="text-[12px] text-[#C8900A] font-medium mt-2 m-0">Note: {item.note}</p>
                            </div>
                        ))}
                    </div>

                    <Callout variant="tip" title="B2B takeaway">
                        If you want to get shortlisted, your product data sheet, certifications, wattage mapping, and delivery assurance should be ready before the buying conversation starts. Speed-to-quote after award announcement is often the real differentiator.
                    </Callout>
                </Section>

                {/* ── §03 ── */}
                <Section id="ranking" number="03" title="Top Solar Panel Brands: Full Ranking (2025)">
                    <p>
                        The following ranking is based on ALMM listing status, frequency of specification in government tenders across Gujarat and Rajasthan, contract values won by EPC companies using these brands, and 2024-25 procurement data from GEM portal, BidAssist, and project award notifications. This ranking reflects B2B government procurement dominance — not retail or residential market share.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        {topBrands.map((brand) => <BrandCard key={brand.rank} {...brand} />)}
                    </div>
                    <Callout variant="warn" title="How to interpret this data correctly">
                        Brand rankings are estimated from ALMM listing status, publicly available tender award data, project completion announcements, and B2B procurement intelligence. Actual market share figures are not publicly disclosed. Use as directional intelligence — not definitive market share data.
                    </Callout>
                </Section>

                {/* ── §04 ── */}
                <Section id="epc-leaders" number="04" title="Top EPC Companies Winning Large-Value Tenders">
                    <p>
                        EPC contractors are the primary B2B buyers of solar panels and components. The following companies have won large-value government solar contracts in 2024-25, based on actual award data from the GEM portal, BidAssist, and project notifications from NTPC, Coal India, ONGC, BHEL, and state DISCOMs across Gujarat and Rajasthan.
                    </p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {["EPC Company","State","Contract Value","Authority","Scope"].map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {epcRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row.company}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row.state}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#C8900A] font-semibold">{row.value}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row.authority}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row.scope}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Callout variant="info" title="B2B sourcing intelligence">
                        These EPC companies represent the highest-priority sales targets for panel manufacturers, cable suppliers, mounting structure fabricators, and inverter vendors in the 2025 procurement cycle. Contact them within 2 weeks of award notification.
                    </Callout>
                </Section>

                {/* ── §05 ── */}
                <Section id="matrix" number="05" title="Brand Comparison Matrix: Key Government Procurement Criteria">
                    <p>
                        This matrix evaluates the top solar panel brands across the five most critical criteria for winning Indian government tenders. Y = Yes · N = No · P = Partial / In Process. Data: MNRE ALMM, BIS CRS, company disclosures.
                    </p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {["Brand","ALMM Listed","IEC Certified","550–575Wp Mono-PERC","Domestic Mfg","GEM Empanelled"].map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {matrixRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[0]}</td>
                                        {row.slice(1).map((cell, ci) => (
                                            <td key={ci} className="px-4 py-3 border-b border-[#E8E0D4]"><CellBadge value={cell} /></td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* ── §06 ── */}
                <Section id="tender-data" number="06" title="Real Tender Data: Who Won What in Gujarat & Rajasthan">
                    <p>
                        The following section presents real, verified tender award data sourced from GEM Portal, BidAssist, and project award notifications — covering Gujarat and Rajasthan in 2024-25.
                    </p>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">Gujarat — Large Value Projects (Rs.25 Cr and above)</h3>
                    <div className="overflow-x-auto mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {["Project Description","Awardee","Location","Value","Authority"].map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {gujaratProjects.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#C8900A] font-semibold">{row[3]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[4]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">Rajasthan — PM-KUSUM RESCO Projects (2024-25)</h3>
                    <div className="overflow-x-auto mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {["Project","Bid Winner","Location","Model","DISCOM"].map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rajasthanProjects.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4]">
                                            <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">{row[3]}</span>
                                        </td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[4]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-[18px] font-semibold text-[#1A1410] mt-8 mb-3">Material Specifications Used Across All Projects</h3>
                    <p className="text-[15px] text-[#3D3328]">Every PM-KUSUM and government solar project in the dataset specifies the same core materials — confirming the universal procurement standard for 2024-25:</p>
                    <div className="overflow-x-auto mt-4 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {["Component","Specification","Standard / Code","Tender Frequency"].map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {materials.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4]">
                                            <span className="inline-block text-[11px] font-semibold px-2 py-[3px] rounded-[3px] tracking-[0.04em] bg-[#D3EDDF] text-[#1A6B3A]">{row[3]}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* ── §07 ── */}
                <Section id="almm" number="07" title="ALMM Compliance: The Non-Negotiable Entry Ticket">
                    <p>
                        The Approved List of Models and Manufacturers (ALMM) is maintained by MNRE and is the single most important compliance requirement for any solar panel brand seeking to supply government projects in India. No ALMM listing = no government orders. Period.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 mb-2">
                        {almmChecklist.map((item, idx) => (
                            <div key={idx} className={`border rounded-[6px] p-5 ${item.icon === "✅" ? "bg-white border-[#E8E0D4]" : "bg-[#FAEAEA] border-[#F5C8C8]"}`}>
                                <div className="text-[20px] mb-2">{item.icon}</div>
                                <div className="text-[14px] font-semibold text-[#1A1410] mb-1">{item.title}</div>
                                <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <Callout variant="warn" title="ALMM is updated quarterly — verify before quoting">
                        MNRE updates the ALMM list quarterly. A model that was listed in January 2025 may be removed if the manufacturer fails to maintain certification or domestic content requirements. Always download the most current ALMM list from mnre.gov.in before submitting quotes to EPC contractors for government projects.
                    </Callout>
                </Section>

                {/* ── §08 ── */}
                <Section id="mono-perc" number="08" title="Mono-PERC 550–575 Wp: Why It Dominates Every Tender">
                    <p>
                        Every single government solar tender in the 2024-25 dataset specifies Mono-PERC solar panels in the 550–575 Wp range. This reflects the convergence of three forces: optimal cost-per-watt economics, ALMM-listed domestic manufacturing availability, and MNRE technical specifications embedded in PM-KUSUM guidelines.
                    </p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {["Parameter","Mono-PERC 550–575Wp","Older 400–450Wp","Bifacial 600Wp+"].map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {monoPercRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] font-medium text-[#1A1410]">{row[0]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#1A6B3A] font-medium">{row[1]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[2]}</td>
                                        <td className="px-4 py-3 border-b border-[#E8E0D4] text-[#3D3328]">{row[3]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <blockquote className="border-l-[3px] border-[#C8900A] my-9 px-7 py-5 bg-[#FDF3DC] rounded-r-md">
                        <p className="font-serif text-[20px] leading-[1.45] text-[#1A1410] italic m-0">
                            The 550 Wp specification emerged as the government procurement sweet spot in 2023-24 because it represents the optimal balance of module size, efficiency (21%+), manufacturing yield, and landed cost. EPC contractors specifying anything below 530 Wp are now at a competitive disadvantage in government bid evaluations.
                        </p>
                    </blockquote>
                </Section>

                {/* ── §09 ── */}
                <Section id="state-performance" number="09" title="State-wise Solar Brand & EPC Performance">
                    <p>
                        Gujarat and Rajasthan may both be major solar states, but they do not behave the same way from a B2B targeting perspective. Gujarat is dominated by large utility-scale and BOS contracts, while Rajasthan runs on distributed PM-KUSUM RESCO structures with smaller per-project values but high cumulative volume.
                    </p>
                    <div className="overflow-x-auto mt-6 mb-3">
                        <table className="w-full border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    {["State","Dominant Project Type","Key Buyers","Top EPC Profile","B2B Opportunity"].map((h) => (
                                        <th key={h} className="bg-headupb2b text-white text-left font-medium text-[13px] tracking-[0.04em] px-4 py-3 first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {stateRows.map((row, idx) => (
                                    <tr key={idx} className="even:bg-[#FDFAF6]">
                                        {row.map((cell, ci) => (
                                            <td key={ci} className={`px-4 py-3 border-b border-[#E8E0D4] ${ci === 0 ? "font-medium text-[#1A1410]" : "text-[#3D3328]"}`}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Section>

                {/* ── §10 ── */}
                <Section id="buyer-playbook" number="10" title="How B2B Buyers Should Use This Data">
                    <p>
                        The point of this page is not just to rank brands or list projects. It is to help a vendor or buyer decide who to target, which specifications to align with, and how to shorten the path to a serious procurement conversation.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 mb-2">
                        {buyerCards.map((item) => (
                            <div key={item.title} className="bg-white border border-[#E8E0D4] rounded-[6px] p-5">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C8900A] mb-2.5">Use case</div>
                                <div className="text-[14px] font-semibold text-[#1A1410] mb-1">{item.title}</div>
                                <p className="text-[13px] text-[#7A6E62] leading-[1.55] m-0">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ── §11 ── */}
                <Section id="faq" number="11" title="FAQ: B2B Vendor Questions Answered">
                    <p>Common questions from solar equipment suppliers, EPC contractors, and procurement teams active in India's government solar market.</p>
                    <div className="space-y-4 mt-6">
                        {faqs.map((item, idx) => (
                            <div key={idx} className="border border-[#E8E0D4] rounded-[6px] bg-white overflow-hidden">
                                <div className="px-6 py-4 border-b border-[#E8E0D4]">
                                    <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#C8900A] mb-2">
                                        Question {String(idx + 1).padStart(2, "0")}
                                    </div>
                                    <h3 className="text-[17px] font-semibold text-[#1A1410] leading-[1.45]">{item.q}</h3>
                                </div>
                                <div className="px-6 py-4">
                                    <p className="text-[14px] text-[#3D3328] leading-[1.7] m-0">{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* ── CTA ── */}
                <div className="mt-16 border border-[#E8E0D4] border-l-[4px] border-l-[#C8900A] bg-white px-8 py-8 rounded-[2px]">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#C8900A] mb-3">Related research</div>
                    <h3 className="font-serif text-[24px] text-[#1A1410] mb-3 leading-tight">
                        Find Solar Panel Suppliers Winning Tenders Today
                    </h3>
                    <p className="text-[15px] text-[#7A6E62] leading-[1.6] mb-6 max-w-[520px]">
                        Track real-time government tender awards across India — know exactly who is buying and what specs they need. Access B2B solar tender intelligence for Gujarat, Rajasthan, and Pan-India PSU procurement.
                    </p>
                    <Link
                        href="/research"
                        className="inline-block bg-[#C8900A] text-white text-[13px] font-semibold tracking-[0.06em] uppercase px-7 py-3 rounded-[2px] hover:bg-[#A07008] transition-colors"
                    >
                        Access B2B Solar Tender Database →
                    </Link>
                    <div className="flex flex-wrap gap-2 mt-7">
                        {tags.map((tag) => (
                            <span key={tag} className="inline-block text-[11px] font-medium text-[#7A6E62] border border-[#E8E0D4] px-3 py-1 rounded-full bg-[#FDFAF6]">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-[12px] text-[#7A6E62] mt-5">
                        Published April 2025 · B2B Solar Research Series · headsupb2b.com · Data sourced from GEM Portal, BidAssist, MNRE ALMM, project award notifications
                    </p>
                </div>

            </main>
        </>
    );
}