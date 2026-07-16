"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "₹2–7.5L", label: "Price range — 3HP to 10HP system" },
  { num: "60–90%", label: "Govt subsidy available" },
  { num: "12%", label: "GST on solar pumps and panels" },
  { num: "₹0", label: "Monthly running cost after install" },
];

const TOC = [
  "Solar pump price list — HP-wise 2026",
  "Price after government subsidy — state-wise",
  "What is included in the price?",
  "Brand-wise price comparison",
  "Factors that affect solar pump price",
  "Bulk buying guide for B2B dealers",
  "GST and tax structure",
  "Frequently asked questions",
];

const PRICE_CARDS = [
  { hp: "3 HP", price: "₹2.0–2.8 lakh", subsidy: "₹20,000–28,000", popular: false, solar: "2.5–3 kWp", output: "120–180 LPH", best: "Small farms", bench: "~₹2.5 lakh" },
  { hp: "5 HP", price: "₹3.0–4.0 lakh", subsidy: "₹30,000–40,000", popular: true, solar: "4–5.5 kWp", output: "200–300 LPH", best: "Medium farms", bench: "~₹3.5 lakh" },
  { hp: "7.5 HP", price: "₹4.0–5.5 lakh", subsidy: "₹40,000–55,000", popular: false, solar: "6–7.5 kWp", output: "300–500 LPH", best: "Large farms", bench: "~₹4.5 lakh" },
  { hp: "10 HP", price: "₹5.5–7.5 lakh", subsidy: "₹55,000–75,000", popular: false, solar: "7.5–10 kWp", output: "500–800 LPH", best: "Commercial farms", bench: "~₹6.5 lakh" },
];

const BENCHMARK_ROWS = [
  ["3 HP", "₹2.0–2.8 lakh", "~₹2.5 lakh", "₹2.25 lakh", "~₹25,000", "8–15%"],
  ["5 HP", "₹3.0–4.0 lakh", "~₹3.5 lakh", "₹3.15 lakh", "~₹35,000", "8–15%"],
  ["7.5 HP", "₹4.0–5.5 lakh", "~₹4.5 lakh", "₹4.05 lakh", "~₹45,000", "8–15%"],
  ["10 HP", "₹5.5–7.5 lakh", "~₹6.5 lakh", "₹5.85 lakh", "~₹65,000", "8–15%"],
];

const STATE_ROWS = [
  ["Rajasthan", "60%", "30%", "10%", "~₹35,000"],
  ["Madhya Pradesh", "60%", "30%", "10%", "~₹35,000"],
  ["Uttar Pradesh", "60%", "30%", "10%", "~₹35,000"],
  ["Gujarat", "60%", "25%", "15%", "~₹52,500"],
  ["Maharashtra", "60%", "25%", "15%", "~₹52,500"],
  ["Karnataka", "60%", "30%", "10%", "~₹35,000"],
  ["Haryana", "60%", "25%", "15%", "~₹52,500"],
  ["Punjab", "60%", "20%", "20%", "~₹70,000"],
];

const INCLUSION_ROWS = [
  ["Solar panels (BIS certified)", "Yes", "Usually yes", "₹25,000–60,000"],
  ["Pump motor (BLDC/AC)", "Yes", "Usually yes", "₹30,000–1,20,000"],
  ["MPPT controller / VFD", "Yes", "Usually yes", "₹15,000–50,000"],
  ["Mounting structure (HDG)", "Yes", "Usually yes", "₹10,000–25,000"],
  ["Wiring and junction box", "Yes", "Sometimes", "₹5,000–15,000"],
  ["Installation & commissioning", "Yes", "Sometimes extra", "₹8,000–25,000"],
  ["5-year AMC", "Mandatory", "Usually extra", "₹15,000–40,000 (5yr)"],
  ["Civil work / borewell", "Not included", "Extra", "₹10,000–50,000"],
  ["Battery backup", "Not included", "Extra", "₹40,000–1,20,000"],
];

const BRANDS = [
  { name: "Kirloskar Solar", tier: "Premium", price: "5HP: ₹3.8–4.2 lakh", desc: "India's most established pump brand. Nationwide service network, strong nodal agency acceptance. Best for large government tenders where after-sales support is audited." },
  { name: "Grundfos Solar", tier: "Premium", price: "5HP: ₹4.0–4.5 lakh", desc: "International brand with premium pricing. Superior build quality and longest warranty. Preferred for commercial and industrial applications where downtime cost is high." },
  { name: "CRI Pumps", tier: "Mid-range", price: "5HP: ₹3.2–3.8 lakh", desc: "Strong presence in South India. Good quality at competitive pricing. BIS certified, widely accepted in AP, Telangana, and Karnataka state government projects." },
  { name: "Shakti Pumps", tier: "Mid-range", price: "5HP: ₹3.0–3.5 lakh", desc: "One of India's largest solar pump manufacturers. MNRE empanelled, ALMM compliant. Strong presence in Rajasthan and MP projects with competitive dealer margins." },
  { name: "Lubi Solar", tier: "Mid-range", price: "5HP: ₹2.9–3.4 lakh", desc: "Growing brand with competitive pricing. Gujarat-based manufacturer with strong GEDA empanelment. Good for dealers targeting Gujarat and Western India procurement." },
  { name: "OEM / Regional Brands", tier: "Economy", price: "5HP: ₹2.5–3.0 lakh", desc: "Lowest price point with higher margins. BIS certification must be verified individually. Suitable for private market sales — not recommended for government projects." },
];

const TIER_STYLE = {
  Premium: "bg-headupb2b text-white",
  "Mid-range": "bg-headupb2b/15 text-headupb2b",
  Economy: "bg-gray-100 text-gray-600",
};

const FACTOR_ROWS = [
  ["Panel type", "Polycrystalline panels", "Mono-PERC panels", "₹15,000–25,000"],
  ["Motor type", "AC induction motor", "BLDC motor (20–30% efficient)", "₹8,000–20,000"],
  ["Pump depth rating", "30-metre rated submersible", "100-metre rated submersible", "₹15,000–35,000"],
  ["Brand tier", "OEM / regional brand", "Kirloskar / Grundfos", "₹30,000–80,000"],
  ["Warranty period", "1-year warranty", "5-year comprehensive warranty", "₹10,000–25,000"],
  ["Delivery terms", "Ex-factory — you arrange", "Delivered at site", "₹5,000–20,000"],
];

const BULK_ROWS = [
  ["1–10 units", "0–5%", "100% advance", "2–4 weeks"],
  ["11–50 units", "5–10%", "50% advance, 50% on delivery", "3–5 weeks"],
  ["51–200 units", "10–15%", "30% advance, 70% on delivery", "4–6 weeks"],
  ["200+ units", "15–20%", "Negotiable — credit terms possible", "Phased delivery"],
];

const GST_ROWS = [
  ["Solar pump (complete system)", "12%", "8413", "Included in MNRE benchmark cost"],
  ["Solar panels", "12%", "8541", "ALMM listing mandatory for govt supply"],
  ["MPPT controller / VFD", "18%", "8504", "Check vendor GST treatment in quote"],
  ["Mounting structure", "18%", "7308", "Hot-dip galvanised steel structure"],
  ["Installation services", "18%", "9954", "Often quoted separately by vendors"],
  ["AMC services", "18%", "9987", "Recurring annual invoice — ITC claimable"],
];

const FAQS = [
  {
    q: "What is the price of a 5HP solar pump in India 2026?",
    a: "A complete 5HP solar pump system costs ₹3 lakh to ₹4 lakh before subsidy in 2026. After 60% central and 30% state subsidy (Rajasthan, UP, MP), the farmer pays approximately ₹30,000 to ₹40,000. The MNRE benchmark cost for 5HP is approximately ₹3.5 lakh.",
  },
  {
    q: "What is the price of a 3HP solar pump in India?",
    a: "A complete 3HP solar pump system costs ₹2 lakh to ₹2.8 lakh before subsidy. After government subsidy of up to 90%, the farmer pays ₹20,000 to ₹28,000. The MNRE benchmark cost for 3HP is approximately ₹2.5 lakh.",
  },
  {
    q: "Does solar pump price include installation?",
    a: "For government-subsidised projects, the MNRE benchmark price includes panels, pump motor, controller, structure, wiring, and installation. The 5-year AMC is also mandatory and included. For private market purchases, always ask specifically — many vendors quote ex-works prices that exclude installation and AMC.",
  },
  {
    q: "Which brand solar pump is best value in India?",
    a: "For government projects, Shakti Pumps and CRI offer the best value — competitive pricing with strong nodal agency acceptance. For private market, regional OEM brands with verified BIS certification offer the best dealer margins. For premium commercial applications, Kirloskar or Grundfos justify higher prices with superior warranty.",
  },
  {
    q: "How much does a solar pump cost per month to run?",
    a: "A solar pump costs virtually nothing per month — zero fuel, zero electricity bill. The only cost is annual maintenance: ₹3,000 to ₹8,000 per year depending on pump capacity and AMC terms — just ₹250 to ₹670 per month.",
  },
  {
    q: "What is the GST rate on solar pumps in India?",
    a: "Solar pumps attract 12% GST under HSN code 8413. Solar panels also attract 12% GST. Controllers and mounting structures attract 18%. Registered B2B dealers can claim input tax credit on all purchases — ensure correct GSTIN and HSN codes on all invoices.",
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
export default function SolarPumpPriceGuide() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/solar-pump-price-india-2026";
  const para = "text-[17px] leading-[1.8] text-gray-700 mb-5";

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="bg-white text-[#1a1330]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title="Solar Pump Price in India 2026 — 3HP, 5HP, 7.5HP, 10HP Complete Price List"
        description="Complete 2026 solar pump price list for India — HP-wise system prices, price after government subsidy state-wise, brand comparison, GST structure, and a bulk buying guide for B2B dealers and contractors."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "Solar Pump Price in India 2026 — Complete Price List",
          description:
            "HP-wise prices, subsidy impact, brand comparison, GST structure, and bulk buying guidance for B2B dealers and procurement teams.",
          site_name: "Headsup B2B",
        }}
      />

      {/* ── TOP BAR ── */}
      <nav className="bg-headupb2b px-5 t:px-12 py-3.5 flex items-center justify-between">
        <div className="font-extrabold text-lg text-white tracking-tight">
          Headsup <span className="text-[#C9B8E8]">B2B</span>
        </div>
        <button
          onClick={() => setShowRequestConsultation(true)}
          className="bg-white text-headupb2b px-5 py-2 rounded-md text-[13px] font-bold no-underline hover:bg-gray-100 transition-colors"
        >
          Get Bulk Prices →
        </button>
      </nav>

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#2e1f4d] px-5 t:px-12 pt-16 pb-20">
        <div className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 65%)" }} />
        <div className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(94,63,153,0.30) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            <span className="bg-headupb2b text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase">
              Solar Price Guide · B2B Edition
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">12 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Updated June 2026</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            Solar Pump Price in India 2026 — <br className="hidden t:block" />
            3HP, 5HP, 7.5HP, 10HP Complete Price List
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            Solar pump prices in India have become more competitive in 2026 as domestic
            manufacturing scales up and government subsidies make systems accessible to most farmers.
            This guide gives B2B dealers, contractors, and procurement teams the complete picture —
            system prices, subsidy impact, brand comparison, and bulk buying guidance.
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
        <SectionHeading kicker="01">Solar Pump Price List — HP-wise 2026</SectionHeading>
        <p className={para}>
          The prices below represent complete solar pump system costs in India for 2026 — including
          solar panels, pump motor, MPPT controller, mounting structure, wiring, and installation.
          These are indicative market prices before any government subsidy.
        </p>
        <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-4 gap-4 my-7">
          {PRICE_CARDS.map((p) => (
            <div key={p.hp} className={`relative rounded-2xl border overflow-hidden ${p.popular ? "border-headupb2b shadow-lg" : "border-gray-200"}`}>
              {p.popular && (
                <div className="absolute top-3 right-3 bg-white text-headupb2b text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide z-10">
                  ★ Most Popular
                </div>
              )}
              <div className="bg-headupb2b text-white text-center py-4">
                <div className="text-[11px] uppercase tracking-wider text-white/70">Solar Pump</div>
                <div className="text-2xl font-black">{p.hp}</div>
                <div className="text-[15px] font-bold mt-1">{p.price}</div>
                <div className="text-[11px] text-white/75 mt-1">After subsidy: {p.subsidy}</div>
              </div>
              <dl className="p-4 text-[13px] space-y-2.5">
                {[
                  ["Solar panels", p.solar],
                  ["Water output", p.output],
                  ["Best for", p.best],
                  ["Benchmark", p.bench],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2">
                    <dt className="text-gray-500">{k}</dt>
                    <dd className="font-semibold text-[#1a1330] text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <Callout label="What is MNRE benchmark cost?">
          MNRE sets a benchmark cost for each HP category every year. This is the maximum amount a
          government-empanelled vendor can bill for a solar pump system under any subsidised scheme.
          Vendors who procure below benchmark earn higher margins — hence the importance of efficient
          B2B sourcing.
        </Callout>

        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Capacity", "Market Price Range", "MNRE Benchmark", "Subsidy (90%)", "Farmer Pays (10%)", "Dealer Margin"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BENCHMARK_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 border-b border-gray-200 ${j === 0 ? "font-semibold text-[#1a1330]" : "text-gray-700"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 */}
        <SectionHeading kicker="02">Solar Pump Price After Government Subsidy — State-wise</SectionHeading>
        <p className={para}>
          The final price a farmer pays depends on the state. Central government provides 60% subsidy
          on MNRE benchmark cost. States add 25–30% more — so the farmer pays just 10–15% of the full
          system cost.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["State", "Central Subsidy", "State Subsidy", "Farmer Pays", "Farmer Cost — 5HP"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STATE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-3 border-b border-gray-200 ${j === 0 ? "font-semibold text-[#1a1330]" : "text-gray-700"} ${j === 3 && cell === "10%" ? "text-headupb2b font-bold" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="How subsidy reaches the vendor — not the farmer">
          Under government schemes, the farmer pays only their share (10–20%) directly to the
          empanelled vendor. The vendor installs the system, submits verification to the nodal
          agency, and receives the balance subsidy from the state treasury within 30–60 days. Payment
          risk for B2B vendors is very low compared to private market sales.
        </Callout>

        {/* 3 */}
        <SectionHeading kicker="03">What Is Included in the Solar Pump Price?</SectionHeading>
        <p className={para}>
          A common source of confusion is what exactly is included in the quoted price. For government
          projects, the MNRE benchmark cost covers a specific set of components. For private market
          procurement, inclusions vary by vendor — always clarify before signing.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Component", "Govt Price?", "Private Quote?", "Approx. Cost if Separate"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INCLUSION_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Always ask for itemised quotation">
          When requesting quotes for bulk solar pump procurement, ask for an itemised breakup —
          panels, pump, controller, structure, wiring, installation, and AMC listed separately. This
          makes comparison accurate and prevents hidden cost surprises at invoicing stage.
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">Brand-wise Solar Pump Price Comparison India 2026</SectionHeading>
        <p className={para}>
          Solar pump prices vary significantly by brand. For government projects requiring nodal
          agency inspection, established brands are preferred. For private market, price-sensitive
          buyers lean toward mid-range or economy options.
        </p>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {BRANDS.map((b) => (
            <div key={b.name} className="rounded-2xl border border-gray-200 p-5 hover:border-headupb2b transition-colors">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-base font-bold text-[#1a1330]">{b.name}</h3>
                <span className={`text-[10px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded ${TIER_STYLE[b.tier]}`}>
                  {b.tier}
                </span>
              </div>
              <div className="text-[15px] font-bold text-headupb2b mb-2">{b.price}</div>
              <p className="text-[13px] text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <Callout label="Govt vs private market — choose brand accordingly">
          For government projects — Kirloskar, Shakti, or CRI. Nodal agency inspections pass faster
          with established brands. For private market — OEM or regional brands give better margins.
          For premium commercial projects — Grundfos. Match brand selection to the end market, not
          personal preference.
        </Callout>

        {/* 5 */}
        <SectionHeading kicker="05">Factors That Affect Solar Pump Price</SectionHeading>
        <p className={para}>
          Two quotes for the same 5HP solar pump can vary by ₹50,000 to ₹1 lakh. Understanding what
          drives price differences helps B2B buyers evaluate quotes accurately and avoid paying for
          specifications they do not need.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Factor", "Lower Price Option", "Higher Price Option", "Price Difference"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FACTOR_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-semibold">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">Bulk Buying Guide — Solar Pump Price for B2B Dealers</SectionHeading>
        <p className={para}>
          B2B dealers and contractors procuring solar pumps in bulk can negotiate prices significantly
          below standard market rates. Volume-based discounts and payment terms directly impact dealer
          margins.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Order Volume", "Expected Discount vs MRP", "Payment Terms", "Delivery Timeline"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BULK_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-semibold">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Never compromise on certifications to save cost">
          The most common mistake B2B dealers make is sourcing cheaper pumps with missing or expired
          BIS/IEC certifications to improve margins. Nodal agency inspections check certification
          numbers on every installation. Failed inspections delay subsidy payment by months —
          completely wiping out the margin saved on procurement.
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">GST and Tax Structure on Solar Pumps</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Item", "GST Rate", "HSN Code", "Notes"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GST_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-semibold">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Input tax credit — important for registered B2B dealers">
          For registered B2B dealers, ITC on purchases offsets GST liability on sales. Ensure all
          supplier invoices carry valid GSTIN and correct HSN codes — this is critical for ITC claims
          during GST filing. Missing HSN codes are the leading cause of ITC rejection.
        </Callout>

        {/* 8 */}
        <SectionHeading kicker="08">Frequently Asked Questions — Solar Pump Price India 2026</SectionHeading>
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
              Get Bulk Solar Pump Prices — Contact Headsup B2B
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              We source BIS-certified solar pumps at competitive B2B prices for dealers, contractors,
              and companies. Get itemised quotes, verified supplier details, and procurement support
              across India.
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              Talk to Headsup B2B →
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              1000+ verified suppliers · Pan-India delivery · Itemised B2B quotes
            </p>
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
