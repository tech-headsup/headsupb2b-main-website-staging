"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "40%+", label: "Share of all govt scheme installations" },
  { num: "₹3–4L", label: "Complete system price — before subsidy" },
  { num: "₹35K", label: "Farmer cost (after 90% subsidy)" },
  { num: "5 yrs", label: "Mandatory warranty and AMC period" },
];

const TOC = [
  "Why 5HP is the most popular solar pump in India",
  "5HP solar pump — complete specifications",
  "5HP solar pump price in India 2026",
  "Use cases — where 5HP solar pump is best suited",
  "5HP solar pump — submersible vs surface",
  "BLDC vs AC motor — which to choose for 5HP",
  "How to source 5HP solar pumps in bulk — B2B guide",
  "Frequently asked questions",
];

// [reason, why]
const POPULAR_ROWS = [
  ["Farm size match", "India's average farm holding is 1.08 hectares (2.7 acres). A 5HP pump delivers 200–300 LPH — exactly right for irrigating 2–5 acres efficiently."],
  ["Subsidy sweet spot", "The 5HP benchmark cost of ₹3.5 lakh × 90% subsidy = farmer pays ₹35,000. This price point is affordable for most small and marginal farmers."],
  ["Highest tender volume", "State nodal agencies issue the largest tender quantities in the 5HP category. Rajasthan RRECL tenders typically specify 60–70% of volume as 5HP units."],
  ["Widest availability", "Most manufacturers — Kirloskar, Shakti, CRI, Grundfos — have deepest inventory and fastest delivery for 5HP models. Regional distribution is strongest."],
  ["Best dealer margin structure", "Competitive procurement market for 5HP means manufacturers offer volume discounts faster. Dealers sourcing 100+ units routinely achieve 12–15% margins."],
];

// [label, value]
const SPEC_ROWS = [
  ["Motor type", "BLDC (Brushless DC) — preferred | AC Induction — alternative"],
  ["Motor power", "3.7 kW / 5 HP"],
  ["Solar panel capacity", "4 kWp to 5.5 kWp"],
  ["Number of panels", "8 to 10 panels @ 550 Wp each"],
  ["Panel type", "Mono-PERC or Polycrystalline — BIS CRS certified"],
  ["Water output", "200 to 300 litres per hour"],
  ["Total head", "Up to 70 metres (submersible) | Up to 15 metres (surface)"],
  ["Pump type", "Submersible or Surface — stainless steel body SS304/SS316"],
  ["Controller", "MPPT-based Variable Frequency Drive (VFD) — IP65 rated"],
  ["Mounting structure", "Hot-dip galvanised steel — IS 2062 grade — 15 to 25 degree tilt"],
  ["IP rating", "IP68 (motor/pump) | IP65 (controller/enclosure)"],
  ["Operating voltage", "DC: 120V–370V | AC: 220V–415V"],
  ["Pump warranty", "Minimum 5 years comprehensive"],
  ["Panel warranty", "25-year linear performance | 5-year product warranty"],
  ["AMC", "5-year annual maintenance contract — mandatory for govt projects"],
  ["Certifications", "BIS CRS (panels) | IEC 61215 | IS 8034 (submersible) | IS 9079 (surface)"],
];

// [component, economy, mid, premium, notes]
const PRICE_ROWS = [
  ["Solar panels (4–5.5 kWp)", "₹60,000–80,000", "₹80,000–1,10,000", "₹1,10,000–1,40,000", "Mono-PERC adds 10–15%"],
  ["Pump motor (BLDC 5HP)", "₹35,000–50,000", "₹50,000–75,000", "₹75,000–1,00,000", "BLDC costs more than AC"],
  ["MPPT controller / VFD", "₹12,000–18,000", "₹18,000–30,000", "₹30,000–45,000", "IP65 rating mandatory"],
  ["Mounting structure", "₹10,000–14,000", "₹14,000–18,000", "₹18,000–25,000", "HDG steel — IS 2062"],
  ["Wiring + junction box", "₹4,000–6,000", "₹6,000–9,000", "₹9,000–12,000", "BIS certified cable"],
  ["Installation", "₹6,000–10,000", "₹10,000–15,000", "₹15,000–22,000", "Rural sites cost more"],
  ["5-year AMC", "₹12,000–18,000", "₹18,000–25,000", "₹25,000–35,000", "₹3,000–7,000/year"],
  ["TOTAL SYSTEM COST", "₹1.39–1.96 L", "₹1.96–2.82 L", "₹2.82–3.79 L", "MNRE benchmark ~₹3.5L", true],
];

const USE_CASES = [
  ["Medium Farm Irrigation", "2 to 5 acres. Crops like wheat, rice, sugarcane, vegetables. Primary use case — accounts for 60%+ of 5HP installations."],
  ["Orchard and Horticulture", "Mango, banana, guava orchards. Drip irrigation compatibility. Higher value crops justify premium system investment."],
  ["Livestock Water Supply", "Dairy farms with 20–50 cattle. Continuous low-flow requirement. Pairs well with elevated storage tank setup."],
  ["Construction Site Dewatering", "Foundation pit dewatering, water supply for construction. Temporary use — surface pump type preferred."],
  ["Rural Water Supply", "Small community water supply schemes. 200–500 households. Submersible type with elevated tank distribution."],
  ["Drip Irrigation Integration", "Solar pump + drip system reduces water use by 40–50%. Increasingly specified by state horticulture departments."],
];

// [parameter, submersible, surface]
const SUBSURFACE_ROWS = [
  ["Installation", "Inside borewell — submerged in water", "Above ground — near water source"],
  ["Water source", "Borewell / tube well", "Open well, pond, canal, river"],
  ["Depth capability", "Up to 70 metres", "Water within 8–10 metres of surface"],
  ["Price difference", "15–25% more expensive", "Lower cost — simpler mechanism"],
  ["Maintenance", "Requires borewell access for servicing", "Easier access — above ground"],
  ["Water output", "200–300 LPH at 30–50m head", "200–300 LPH at low head"],
  ["Best suited for", "Rajasthan, Gujarat, UP — deep borewells", "Bihar, WB, Assam — surface water"],
  ["MNRE preference", "Widely accepted in all states", "Accepted where applicable"],
  ["Common issue", "Sand ingress in shallow borewells", "Cavitation in low-water conditions"],
];

// [parameter, bldc, ac]
const MOTOR_ROWS = [
  ["Full form", "Brushless Direct Current", "Alternating Current Induction"],
  ["Efficiency", "85–92% — best in class", "75–82% — lower efficiency"],
  ["Panel requirement", "4 kWp sufficient", "4.5–5.5 kWp needed (more panels)"],
  ["Starting current", "Smooth soft-start — no surge", "High starting current — stress on panels"],
  ["Maintenance", "No brushes — minimal wear", "Brushes wear — periodic replacement"],
  ["Price premium", "10–20% more expensive than AC", "Lower upfront cost"],
  ["Performance in shade", "Better — MPPT optimises output", "Can stall in partial shade"],
  ["Lifespan", "15–20 years typically", "10–15 years"],
  ["MNRE preference", "Preferred in most state tenders", "Accepted but less preferred"],
  ["Best for", "Government projects, long-term installs", "Cost-sensitive private market"],
];

const SOURCING_STEPS = [
  ["Define your specification before approaching suppliers", "Write a one-page spec sheet based on MNRE requirements: motor type (BLDC), pump type (submersible/surface), head requirement (in metres), certifications required (BIS, IEC, ALMM). Suppliers who receive a clear spec respond with accurate quotes faster."],
  ["Get quotes from at least 3 sources", "Compare quotes from one premium brand (Kirloskar/Shakti), one mid-range brand (CRI/Lubi), and one regional OEM. Evaluate on: certification validity, delivery timeline, payment terms, warranty scope, and AMC structure — not just headline price."],
  ["Verify certifications before committing", "Check BIS CRS registration numbers for panels at bis.gov.in. Verify IS 8034 for submersible pumps. IEC test certificates should show the specific model — not just the brand. Expired or fake certifications are common in low-price quotes."],
  ["Negotiate AMC terms separately", "AMC is a 5-year obligation — structure it as a separate line item in your supply contract. Define: what is covered, response time for breakdowns, replacement part responsibility, and annual service schedule. Vague AMC terms become disputes later."],
  ["Plan logistics for rural delivery", "5HP pump systems weigh 80–120 kg complete. Rural site delivery requires vehicle accessibility, unloading equipment, and local labour. Factor ₹5,000–15,000 per unit for last-mile delivery in remote areas. Build this into your quote upfront."],
  ["Maintain a minimum buffer stock", "For dealers active in government tenders, maintain 20–30 units of 5HP pumps as buffer. Nodal agency installation windows are often 30–45 days after order confirmation. Dealers who deliver on time receive priority allocation in the next tender cycle."],
];

const KEYWORDS = [
  "5HP Solar Pump",
  "5HP Solar Pump Price",
  "5HP Solar Pump Specifications",
  "5HP Solar Water Pump India",
  "BLDC Solar Pump",
  "Submersible Solar Pump",
  "Solar Pump B2B",
  "Solar Pump Dealer",
  "Headsup B2B",
];

const FAQS = [
  {
    q: "What is the price of a 5HP solar pump in India 2026?",
    a: "A complete 5HP solar pump system costs ₹3 lakh to ₹4 lakh before subsidy. After government subsidy of 60% (central) + 30% (state), the farmer pays approximately ₹30,000 to ₹40,000. The MNRE benchmark cost for 5HP is approximately ₹3.5 lakh.",
  },
  {
    q: "How many solar panels are needed for a 5HP solar pump?",
    a: "A 5HP solar pump requires 4 kWp to 5.5 kWp of solar panels — typically 8 to 10 panels of 550 Wp each. BLDC motor pumps need fewer panels (4 kWp) due to higher efficiency. AC motor pumps need more panels (5–5.5 kWp) to deliver the same output.",
  },
  {
    q: "What is the water output of a 5HP solar pump?",
    a: "A 5HP solar pump delivers 200 to 300 litres per hour at a head of 30 to 50 metres. Output varies with sunlight intensity — peak output occurs between 10 AM and 3 PM. Over a full sunny day of 6–7 peak hours, total output is 1,200 to 2,100 litres.",
  },
  {
    q: "Is BLDC or AC motor better for 5HP solar pump?",
    a: "BLDC is better for most applications — higher efficiency (85–92% vs 75–82%), lower panel requirement, no brushes to replace, and longer lifespan. For government projects, BLDC is increasingly mandatory. AC motor is only preferred when upfront cost is the primary constraint and the buyer understands the efficiency trade-off.",
  },
  {
    q: "What is the lifespan of a 5HP solar pump?",
    a: "A well-maintained 5HP solar pump system has a lifespan of 20–25 years (solar panels), 10–15 years (pump motor with regular servicing), and 8–12 years (MPPT controller). The 5-year mandatory AMC covers the highest-risk period for component failures.",
  },
  {
    q: "How deep can a 5HP submersible solar pump go?",
    a: "A standard 5HP submersible solar pump is rated for depths up to 70 metres. For deeper borewells (70–120 metres), a higher HP rating or a specialised deep-well pump is required. Always specify the actual borewell depth when ordering — under-rated pumps fail quickly in deep installations.",
  },
];

/* ─────────────────────────────────────────────
   SMALL PRESENTATIONAL COMPONENTS
───────────────────────────────────────────── */
function SectionHeading({ kicker, children }) {
  return (
    <div className="mt-14 mb-5">
      <div className="w-12 h-1 bg-headupb2b rounded-full mb-4" />
      {kicker && (
        <span className="text-xs font-semibold tracking-[1.5px] uppercase text-headupb2b">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl t:text-[28px] font-extrabold text-[#1a1330] leading-tight mt-1">
        {children}
      </h2>
    </div>
  );
}

function Callout({ label, title, children }) {
  return (
    <div className="bg-purple border-l-4 border-headupb2b rounded-r-xl p-6 my-8">
      {label && (
        <div className="text-xs font-bold tracking-[1px] uppercase text-headupb2b mb-2">
          {label}
        </div>
      )}
      {title && <h3 className="text-base font-bold text-[#1a1330] mb-2">{title}</h3>}
      <div className="text-[15px] text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
      {children}
    </th>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function FiveHpSolarPumpGuide() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/5hp-solar-pump-b2b-guide-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330] pt-6 t:pt-10">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title="5HP Solar Pump — Specifications, Price & B2B Sourcing Guide India 2026"
        description="The complete 5HP solar pump guide for B2B dealers and contractors — MNRE specifications, 2026 price breakdown, BLDC vs AC motor, submersible vs surface, use cases, and a step-by-step bulk sourcing process."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "5HP Solar Pump — Specifications, Price & B2B Sourcing Guide 2026",
          description:
            "MNRE specs, 2026 price list, BLDC vs AC, submersible vs surface, and a bulk B2B sourcing guide for India's most popular solar pump.",
          site_name: "Headsup B2B",
        }}
      />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#2e1f4d] px-5 t:px-12 pt-16 pb-20">
        <div className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.30) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            <span className="bg-headupb2b text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase">
              Solar Industry Guide · B2B Edition
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">11 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Updated June 2026</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            5HP Solar Pump — <br className="hidden t:block" />
            Specifications, Price &amp; B2B Sourcing Guide India 2026
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            The 5HP solar pump is India&apos;s most popular agricultural solar pump — accounting for
            over 40% of all government scheme installations. For B2B dealers and contractors,
            understanding its specifications, pricing, and procurement process in detail is essential
            for winning tenders and serving customers effectively.
          </p>

          {/* Hero stats */}
          <div className="grid grid-cols-2 l:grid-cols-4 gap-3 mt-9">
            {HERO_STATS.map((s) => (
              <div key={s.num} className="bg-white/95 rounded-2xl p-5 text-center">
                <div className="text-2xl t:text-[28px] font-black text-headupb2b leading-none mb-2">
                  {s.num}
                </div>
                <div className="text-[12px] text-gray-600 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">

        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            What&apos;s in this guide
          </div>
          <ol className="grid grid-cols-1 t:grid-cols-2 gap-x-8 gap-y-2.5">
            {TOC.map((item, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-gray-700 leading-snug">
                <span className="font-bold text-headupb2b shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* 1 */}
        <SectionHeading kicker="01">Why 5HP Is the Most Popular Solar Pump in India</SectionHeading>
        <p className={para}>
          Of all the solar pump capacities available under government schemes — 3HP, 5HP, 7.5HP, and
          10HP — the 5HP consistently accounts for the highest procurement volumes. This is not a
          coincidence. It is the result of a near-perfect match between 5HP capacity and India&apos;s
          agricultural realities.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Reason", "Why It Matters for B2B Dealers"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {POPULAR_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[32%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 */}
        <SectionHeading kicker="02">5HP Solar Pump — Complete Specifications</SectionHeading>
        <p className={para}>
          All 5HP solar pumps supplied under government schemes must meet MNRE-defined specifications.
          The table below covers every component — use this as a checklist when evaluating supplier
          quotes or verifying product compliance.
        </p>
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b">
            5HP Solar Pump — Complete Specifications
          </div>
          <span className="bg-headupb2b text-white text-[11px] font-bold px-3 py-1 rounded-full">
            MNRE Standard Compliant
          </span>
        </div>
        <div className="overflow-x-auto my-3">
          <table className="w-full border-collapse text-[14px]">
            <tbody>
              {SPEC_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[34%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Specification mismatch = tender disqualification">
          Nodal agency inspection teams check every specification at the time of installation
          verification. A pump with the correct HP but wrong IP rating, wrong motor type, or
          uncertified panels will be rejected — and subsidy payment withheld until the issue is
          resolved. Always verify spec compliance before accepting supplier stock.
        </Callout>

        {/* 3 */}
        <SectionHeading kicker="03">5HP Solar Pump Price in India 2026</SectionHeading>
        <p className={para}>
          5HP solar pump prices vary based on motor type, panel brand, pump brand, and whether the
          quote includes installation and AMC. Here is a complete breakdown of what you should expect
          to pay — and what a complete system should cost.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Component", "Economy Range", "Mid-range", "Premium Brand", "Notes"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[5] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>{row[0]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[5] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[3]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top text-[13px] ${row[5] ? "font-bold text-headupb2b" : "text-gray-500"}`}>{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Dealer margin on 5HP — how to calculate">
          MNRE benchmark cost for 5HP is ~₹3.5 lakh. If you procure a complete system (mid-range) at
          ₹2.2 lakh and bill at ₹3.5 lakh (benchmark), your gross margin is ₹1.3 lakh per unit —
          approximately 37% gross. Net margin after operations, transport, and overhead is typically
          12–18% for well-run dealers.
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">Use Cases — Where 5HP Solar Pump Is Best Suited</SectionHeading>
        <p className={para}>
          A 5HP solar pump is not a universal solution — it performs best in specific conditions.
          Recommending the right capacity builds trust with farmers and reduces after-sale complaints
          for B2B dealers.
        </p>
        <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-3 gap-4 my-7">
          {USE_CASES.map(([title, desc]) => (
            <div key={title} className="bg-purple rounded-2xl p-5 border border-[#e9e3f5]">
              <div className="w-8 h-1 bg-headupb2b rounded-full mb-3" />
              <h3 className="font-bold text-[15px] text-[#1a1330] mb-2 leading-snug">{title}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">5HP Solar Pump — Submersible vs Surface</SectionHeading>
        <p className={para}>
          Both submersible and surface variants are available in 5HP capacity. The choice depends
          entirely on the water source at the installation site — not on price or convenience.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Parameter", "5HP Submersible Pump", "5HP Surface Pump"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SUBSURFACE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">BLDC vs AC Motor — Which to Choose for 5HP</SectionHeading>
        <p className={para}>
          The motor type is the single most important technical decision in a 5HP solar pump system.
          It affects efficiency, panel requirement, price, and maintenance. Here is what every B2B
          dealer needs to know.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Parameter", "BLDC Motor (5HP)", "AC Induction Motor (5HP)"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MOTOR_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Recommendation for B2B dealers">
          For all government-subsidised projects — specify BLDC motor. Nodal agencies increasingly
          prefer BLDC in tender specifications and it reduces post-installation complaints
          significantly. For private market price-sensitive buyers — AC motor is acceptable if budget
          is the primary constraint. Never substitute motor type without informing the buyer — it
          affects warranty terms and tender compliance.
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">How to Source 5HP Solar Pumps in Bulk — B2B Guide</SectionHeading>
        <p className={para}>
          Bulk sourcing of 5HP solar pumps for government or private projects requires structured
          procurement — from specification matching to delivery logistics. Here is a step-by-step
          process that experienced dealers follow.
        </p>
        <div className="space-y-4 my-7">
          {SOURCING_STEPS.map(([title, desc], i) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-bold flex items-center justify-center text-[15px]">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[16px] text-[#1a1330] mb-1 leading-snug">{title}</h3>
                <p className="text-[15px] text-gray-700 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 8 */}
        <SectionHeading kicker="08">Frequently Asked Questions — 5HP Solar Pump</SectionHeading>
        <div className="space-y-3 my-7">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-gray-200 p-5 open:border-headupb2b">
              <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-[#1a1330] text-[15px]">
                {f.q}
                <span className="text-headupb2b text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[14px] text-gray-600 leading-relaxed mt-3">{f.a}</p>
            </details>
          ))}
        </div>

        {/* ── FINAL CTA ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              Source 5HP Solar Pumps in Bulk — Headsup B2B
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              We help B2B dealers and contractors source BIS-certified 5HP solar pumps — BLDC and AC,
              submersible and surface — at competitive bulk prices across India.
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              Talk to Headsup B2B →
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              1000+ verified suppliers · Pan-India delivery · Procurement support
            </p>
          </div>
        </div>

        {/* ── RELATED KEYWORDS ── */}
        <div className="mt-14 border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 mm:grid-cols-3 l:grid-cols-5">
            {KEYWORDS.map((k) => (
              <div
                key={k}
                className="px-6 py-5 text-[15px] text-gray-600 bg-[#f8f9fb] border-b border-r border-gray-200 flex items-center"
              >
                {k}
              </div>
            ))}
          </div>
        </div>
      </article>

      {showRequestConsultation && (
        <GetInTouch
          title="Request Consultation"
          onClose={() => setShowRequestConsultation(false)}
        />
      )}
    </div>
  );
}
