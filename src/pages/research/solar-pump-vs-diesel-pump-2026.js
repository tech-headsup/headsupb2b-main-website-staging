"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "₹1.2L+", label: "Avg diesel fuel cost per season for 5HP pump" },
  { num: "₹0", label: "Solar pump fuel cost per season" },
  { num: "3–4 yrs", label: "Solar pump payback period after subsidy" },
  { num: "₹8–10L", label: "10-year savings — solar vs diesel (5HP)" },
];

const TOC = [
  "Solar pump vs diesel pump — quick comparison",
  "Upfront cost comparison",
  "Annual running cost comparison",
  "10-year total cost of ownership",
  "Environmental and practical comparison",
  "When diesel pump is still better",
  "B2B opportunity — why dealers should push solar",
  "Frequently asked questions",
];

// [parameter, solar, diesel, winner]
const QUICK_COMPARE = [
  ["Fuel / Energy cost", "Zero — runs on sunlight", "₹80K–1.5L per season", "Solar"],
  ["Upfront cost", "₹2–7.5 lakh (before subsidy)", "₹15,000–50,000", "Diesel"],
  ["After govt subsidy", "₹20K–75K (10% farmer share)", "No subsidy available", "Solar"],
  ["Running cost / year", "₹3,000–8,000 (AMC only)", "₹80,000–1,50,000 (fuel)", "Solar"],
  ["Noise pollution", "Silent operation", "High noise — 85–100 dB", "Solar"],
  ["Air pollution", "Zero emissions", "CO₂, particulate matter", "Solar"],
  ["Availability", "Only during sunlight hours", "24/7 — any time", "Diesel"],
  ["Maintenance", "Low — annual service only", "High — frequent servicing", "Solar"],
  ["Power independence", "No grid, no fuel dependency", "Dependent on diesel supply", "Solar"],
  ["Lifespan", "20–25 years (panels)", "8–12 years", "Solar"],
  ["Payback period", "3–4 years after subsidy", "No payback — pure cost", "Solar"],
  ["Govt subsidy", "60–90% available", "No subsidy", "Solar"],
];

const UPFRONT_ROWS = [
  ["Pump unit", "₹25,000–40,000", "₹60,000–1,20,000", "₹6,000–12,000"],
  ["Engine / Panel system", "₹0 (engine incl.)", "₹1,20,000–1,80,000", "₹12,000–18,000"],
  ["Controller / Starter", "₹3,000–8,000", "₹20,000–50,000", "₹2,000–5,000"],
  ["Structure / Base", "₹2,000–5,000", "₹12,000–20,000", "₹1,200–2,000"],
  ["Installation", "₹3,000–8,000", "₹10,000–20,000", "₹1,000–2,000"],
  ["5-year AMC", "Not applicable", "₹15,000–40,000", "₹15,000–40,000"],
  ["TOTAL UPFRONT", "₹33,000–61,000", "₹2.37–4.30 lakh", "₹37,000–79,000", true],
];

const RUNNING_ROWS = [
  ["Fuel cost", "₹80,000–1,20,000", "₹0", "₹80,000–1,20,000"],
  ["Oil and lubricants", "₹5,000–10,000", "₹0", "₹5,000–10,000"],
  ["Routine maintenance", "₹8,000–15,000", "₹3,000–8,000", "₹5,000–7,000"],
  ["Spare parts (avg)", "₹10,000–20,000", "₹2,000–5,000", "₹8,000–15,000"],
  ["Labour / operator", "₹15,000–30,000", "₹0–5,000", "₹15,000–25,000"],
  ["TOTAL PER YEAR", "₹1.18–1.95 lakh", "₹5,000–18,000", "₹1.0–1.77 lakh", true],
];

const TCO_ROWS = [
  ["Year 1", "₹75,000 (upfront + AMC)", "₹1.80 lakh (pump + year 1 fuel)", "₹1.05 lakh"],
  ["Year 2", "₹82,000 (+AMC yr 2)", "₹2.80 lakh (+fuel yr 2)", "₹1.98 lakh"],
  ["Year 3", "₹89,000 (+AMC yr 3)", "₹3.80 lakh (+fuel yr 3)", "₹2.91 lakh"],
  ["Year 5", "₹1.10 lakh (+AMC complete)", "₹5.80 lakh (+fuel yrs 4-5)", "₹4.70 lakh"],
  ["Year 7", "₹1.35 lakh (routine service)", "₹8.00 lakh (+fuel + parts)", "₹6.65 lakh"],
  ["Year 10", "₹1.75 lakh (controller replace)", "₹11.50 lakh (+pump replace + fuel)", "₹9.75 lakh", true],
];

const ENV_ROWS = [
  ["CO₂ emissions", "Zero — clean energy", "2.6 kg CO₂ per litre diesel burned"],
  ["Noise level", "Silent — no mechanical engine", "85–100 dB — disruptive in rural areas"],
  ["Fuel availability", "Not required — sunlight free", "Dependent on diesel supply chain"],
  ["Grid requirement", "None — fully off-grid", "None — but needs fuel supply"],
  ["Operator needed", "No — automatic operation", "Yes — operator must start/stop"],
  ["Night pumping", "Not possible without battery", "Yes — 24/7 capability"],
  ["Monsoon season", "Reduced output on cloudy days", "Full output in all weather"],
  ["Remote areas", "Ideal — no fuel transport needed", "Fuel delivery is costly and slow"],
  ["Carbon credits", "Eligible — potential revenue", "Not eligible"],
];

const DIESEL_BETTER = [
  ["Night irrigation required", "Solar pumps cannot operate after sundown without expensive battery systems.", "Offer AC hybrid solar pump — runs on solar by day, grid at night."],
  ["Highly variable water demand", "Diesel pumps respond instantly to load changes. Solar output depends on sunlight.", "For critical applications, recommend DC solar with VFD for variable output."],
  ["Temporary or seasonal site", "If the pump will only be used for 1–2 seasons, upfront solar investment may not pay back.", "Offer rental or leasing model for solar pump — growing option in India."],
  ["Very low usage hours", "A farmer using pump only 1–2 hours/day has lower fuel cost — solar ROI stretches longer.", "Calculate break-even at site — if payback is over 7 years without subsidy, diesel may suit."],
  ["No borewell — surface water only", "Not a solar limitation, but if water source is unreliable, pump capacity matters more.", "Right-size the system — a larger HP solar pump can compensate for variable surface water."],
];

const B2B_ROWS = [
  ["Average order value", "₹25,000–50,000 per unit", "₹2–7.5 lakh per unit"],
  ["Government subsidy", "None available", "60–90% — guaranteed payment from state"],
  ["Repeat business", "Parts and fuel supply only", "Mandatory 5-year AMC per installation"],
  ["Tender opportunity", "Very limited", "PM-KUSUM — 20 lakh pumps target"],
  ["Margin per unit", "5–12%", "8–18% on benchmark cost"],
  ["Payment risk", "Direct from farmer", "Low — state treasury pays subsidy"],
  ["Market growth", "Flat to declining", "25–30% CAGR — government-backed"],
  ["Competitive advantage", "High competition", "Empanelment creates entry barrier"],
];

const FAQS = [
  {
    q: "Is solar pump better than diesel pump for Indian farmers?",
    a: "For most Indian farmers — yes. After government subsidy, a solar pump's upfront cost is comparable to diesel. But the solar pump saves ₹80,000 to ₹1.5 lakh per year in fuel costs. Over 10 years, a farmer saves ₹8 to ₹10 lakh by switching to solar.",
  },
  {
    q: "How long does it take for a solar pump to pay back its cost?",
    a: "After government subsidy in states like Rajasthan, UP, and MP, the farmer pays just 10% of the system cost — approximately ₹30,000 to ₹40,000 for a 5HP system. At ₹1 lakh annual fuel saving, payback is achieved in under one agricultural season. Even without subsidy, payback is 3 to 4 years at current diesel prices.",
  },
  {
    q: "Can a solar pump replace a diesel pump completely?",
    a: "For daytime irrigation, yes — a solar pump can fully replace a diesel pump. For night irrigation or 24/7 water supply, a battery-equipped or AC hybrid solar pump is needed. For most agricultural applications in India — where irrigation happens during daylight hours — direct replacement is practical and economical.",
  },
  {
    q: "What is the running cost of a solar pump per month?",
    a: "The monthly running cost of a solar pump is effectively zero for fuel. The only cost is annual maintenance — ₹3,000 to ₹8,000 per year — which works out to ₹250 to ₹670 per month. Compare this to ₹8,000 to ₹15,000 per month for diesel fuel.",
  },
  {
    q: "Does a solar pump work during monsoon or cloudy days?",
    a: "Yes, but at reduced capacity. Solar panels generate 20–40% of peak output on heavily cloudy days and 40–70% on lightly overcast days. For most agricultural regions in India, irrigation demand also reduces during monsoon — making this a practical match. Farmers who need full monsoon capacity should consider a slightly oversized system.",
  },
  {
    q: "Which is more reliable — solar pump or diesel pump?",
    a: "Solar pumps have fewer moving parts — no engine, no fuel system, no exhaust — which means lower breakdown frequency. Diesel pumps are more prone to fuel contamination, engine wear, and electrical starter failures. Most quality solar pump manufacturers report mean-time-between-failure of 8 to 12 years for the pump motor.",
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

function WinnerBadge({ winner }) {
  const isSolar = winner === "Solar";
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[12px] font-bold whitespace-nowrap ${
        isSolar ? "bg-headupb2b text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {isSolar ? "☀ Solar" : "⛽ Diesel"}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarVsDieselPumpGuide() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/solar-pump-vs-diesel-pump-2026";
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
        title="Solar Pump vs Diesel Pump — Cost Comparison for Indian Farmers 2026"
        description="A complete cost comparison of solar pumps vs diesel pumps for Indian farmers in 2026 — upfront cost, annual running cost, 10-year total cost of ownership, environmental impact, and the B2B opportunity for dealers and contractors."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "Solar Pump vs Diesel Pump — Cost Comparison India 2026",
          description:
            "Upfront cost, running cost, 10-year TCO, and why B2B dealers should push solar over diesel.",
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
          Source Solar Pumps →
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
              Solar Industry Guide · B2B Edition
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">12 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Updated June 2026</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            Solar Pump vs Diesel Pump — <br className="hidden t:block" />
            Cost Comparison for Indian Farmers 2026
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            A 5HP diesel pump costs a farmer ₹1 lakh or more every season just in fuel. The same farm
            runs on a solar pump at zero fuel cost. This guide gives B2B dealers and contractors the
            complete cost comparison — upfront investment, running costs, 10-year total cost of
            ownership, and when solar makes financial sense.
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
        <SectionHeading kicker="01">Solar Pump vs Diesel Pump — Quick Comparison</SectionHeading>
        <p className={para}>
          Before diving into detailed numbers, here is a side-by-side overview of the two
          technologies across the parameters that matter most to Indian farmers and the B2B dealers
          who serve them.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Parameter", "Solar Pump", "Diesel Pump", "Winner"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {QUICK_COMPARE.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200"><WinnerBadge winner={row[3]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 */}
        <SectionHeading kicker="02">Upfront Cost Comparison</SectionHeading>
        <p className={para}>
          The biggest barrier to solar pump adoption is the upfront cost — a diesel pump costs ₹15,000
          to ₹50,000 while a solar pump system costs ₹2 lakh to ₹7.5 lakh. However, government
          subsidies fundamentally change this equation.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Item", "Diesel Pump (5HP)", "Solar (5HP) Before Subsidy", "Solar (5HP) After 90% Subsidy"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {UPFRONT_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[4] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>{row[0]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-headupb2b" : "text-headupb2b font-semibold"}`}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="After subsidy — solar upfront cost is comparable to diesel">
          In states like Rajasthan, UP, and MP where farmer share is just 10%, the upfront cost of a
          5HP solar pump is ₹35,000 to ₹40,000 — only slightly more than a diesel pump. Yet the solar
          pump never needs fuel again. This is the single most powerful selling point for B2B dealers
          promoting solar to farmer groups.
        </Callout>

        {/* 3 */}
        <SectionHeading kicker="03">Annual Running Cost Comparison</SectionHeading>
        <p className={para}>
          Running costs are where solar pumps deliver their most compelling financial advantage. Every
          litre of diesel has a cost — and diesel prices in India have increased 60% over the last
          decade. Solar fuel is free.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Cost Item", "Diesel Pump (5HP) / Year", "Solar Pump (5HP) / Year", "Annual Saving"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RUNNING_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[4] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>{row[0]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-headupb2b" : "text-headupb2b font-semibold"}`}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Diesel price risk — a factor dealers must communicate">
          Diesel prices in India are not fixed — they fluctuate with crude oil prices. A farmer who
          installed a diesel pump in 2015 when diesel was ₹50/litre now pays ₹90+ per litre. The solar
          pump&apos;s running cost is ₹0 regardless of oil price movements. This price certainty is a
          powerful long-term argument for solar.
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">10-Year Total Cost of Ownership</SectionHeading>
        <p className={para}>
          Total cost of ownership (TCO) is the most honest comparison between solar and diesel pumps.
          It accounts for upfront investment, annual running costs, and replacement over a 10-year
          period. The numbers below are for a 5HP pump with average usage of 8 hours per day for 200
          days per year.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Year", "Solar Pump Cumulative Cost", "Diesel Pump Cumulative Cost", "Solar Savings"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TCO_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[4] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>{row[0]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 ${row[4] ? "font-bold text-headupb2b" : "text-headupb2b font-semibold"}`}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="10-year verdict — solar saves ₹8–10 lakh per pump">
          Over 10 years, the total cost of running a 5HP diesel pump is ₹10–12 lakh. The total cost of
          a solar pump over the same period — including upfront investment after subsidy — is ₹1.5–2.5
          lakh. The savings are ₹8 to ₹10 lakh per pump. For a farm with two pumps, that is ₹16–20
          lakh in savings over a decade.
        </Callout>

        {/* 5 */}
        <SectionHeading kicker="05">Environmental and Practical Comparison</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Parameter", "Solar Pump", "Diesel Pump"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ENV_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">When a Diesel Pump Is Still the Right Choice</SectionHeading>
        <p className={para}>
          Solar pumps win on almost every financial metric — but they are not the right solution in
          every situation. B2B dealers who understand the genuine limitations of solar are more
          trusted advisors and close more deals.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Situation", "Why Diesel May Be Better", "B2B Dealer Tip"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DIESEL_BETTER.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 7 */}
        <SectionHeading kicker="07">B2B Opportunity — Why Dealers Should Push Solar Over Diesel</SectionHeading>
        <p className={para}>
          For B2B dealers currently selling diesel pumps, the shift to solar is not just good for the
          farmer — it is a significantly better business model for the dealer.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Business Metric", "Diesel Pump Dealer", "Solar Pump Dealer"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {B2B_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="The AMC advantage — solar creates recurring revenue, diesel does not">
          A dealer who places 200 solar pumps per year builds a growing AMC book. By year 3, 600 pumps
          under AMC at ₹5,000 per pump per year = ₹30 lakh in annual recurring revenue that requires
          zero sales effort. Diesel pump dealers have no equivalent recurring model — every sale starts
          from zero.
        </Callout>

        {/* 8 */}
        <SectionHeading kicker="08">Frequently Asked Questions</SectionHeading>
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
              Source Solar Pumps for Your Customers — Headsup B2B
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              We help B2B dealers and contractors source BIS-certified solar pumps at competitive bulk
              prices — with procurement support, verified supplier details, and documentation
              assistance.
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
