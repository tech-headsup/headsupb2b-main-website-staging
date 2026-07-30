"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "90%", label: "Solar pumps work without batteries" },
  { num: "30–40%", label: <>Extra cost for battery<br />system</> },
  { num: "0%", label: "Govt subsidy on battery component" },
  { num: "₹0", label: "Running cost without battery" },
];

const TOC = [
  "How each system works",
  "Pros and cons — side-by-side",
  "Complete cost comparison",
  "When to choose battery vs without battery",
  "Types of battery systems available in India",
  "Government subsidy — what is and is not covered",
  "Elevated tank — the cheaper alternative to battery",
  "Frequently asked questions",
];

// [component, without battery, with battery]
const HOW_IT_WORKS = [
  ["Solar panels", "Generate DC electricity", "Generate DC electricity — same"],
  ["Controller", "MPPT feeds power directly to pump", "MPPT charges battery + runs pump"],
  ["Battery", "Not present", "Stores excess solar energy"],
  ["Pump operation", "Runs only when sun is shining", "Runs on solar + stored battery power"],
  ["Night use", "Not possible", "Possible — battery discharges"],
  ["Cloudy day", "Reduced speed — pump slows down", "Battery compensates — steadier output"],
  ["System cost", "Lower — fewer components", "Higher — battery + BMS + inverter"],
  ["Complexity", "Simple — fewer failure points", "Complex — battery management needed"],
];

const PROS_WITHOUT = [
  "No extra battery cost",
  "Full 60–90% government subsidy eligible",
  "Simple — fewer components to fail",
  "No battery replacement every 4–7 years",
  "Approved for all PM-KUSUM tenders",
  "Widest manufacturer availability",
];

const CONS_WITHOUT = [
  "Cannot pump at night or before sunrise",
  "Reduced output on heavily cloudy days",
];

const PROS_WITH = [
  "Can pump at night and early morning",
  "Consistent output on overcast days",
  "Suitable for 24/7 water supply needs",
  "No dependency on real-time sunlight",
];

const CONS_WITH = [
  "30–40% higher system cost",
  "Battery NOT covered by govt subsidy",
  "Battery replacement: ₹60K–1.5L every 4–7 yrs",
  "More complex — BMS and inverter needed",
];

const COST_ROWS = [
  ["Solar panels (5HP)", "₹80,000–1,10,000", "₹1,00,000–1,40,000", "₹20,000–30,000"],
  ["Battery bank", "Not required", "₹60,000–1,50,000", "₹60,000–1,50,000"],
  ["Battery controller / BMS", "Not required", "₹8,000–20,000", "₹8,000–20,000"],
  ["Inverter (if AC hybrid)", "Included in VFD", "₹15,000–40,000", "₹15,000–40,000"],
  ["Installation", "₹10,000–20,000", "₹15,000–30,000", "₹5,000–10,000"],
  ["5-year AMC", "₹15,000–25,000", "₹25,000–45,000", "₹10,000–20,000"],
  ["TOTAL COST", "₹1.95–2.85 lakh", "₹3.23–5.25 lakh", "₹1.28–2.40 lakh", true],
  ["After govt subsidy", "Farmer pays ~₹35,000", "Battery not subsidised", "Farmer pays full battery cost"],
];

const WHEN_TO_CHOOSE = [
  ["Agricultural irrigation — daily schedule", "Without Battery", "Daytime solar output is sufficient for morning and afternoon irrigation."],
  ["Irrigation needed at night or pre-dawn", "With Battery", "Night pumping requires battery. Consider elevated tank as cheaper alternative."],
  ["Rural community water supply — 24/7", "With Battery", "Households need water at all hours. Battery + overhead tank enables 24/7 supply."],
  ["Orchard/horticulture — drip system", "Without Battery", "Drip irrigation runs during the day. Solar directly feeds drip. No battery needed."],
  ["Hospital — critical water supply", "With Battery", "Zero downtime required. Battery backup + grid hybrid ensures uninterrupted supply."],
  ["Remote area — no grid, no diesel", "With Battery", "No alternative energy. Battery buffers cloudy days and early morning demand."],
  ["Low-irradiance region — frequent clouds", "With Battery", "Northeast India, hilly regions. Battery compensates for variable solar hours."],
  ["Construction site — flexible hours", "With Battery", "Water needed outside daylight hours. Battery or grid-hybrid solar is appropriate."],
];

const BATTERY_TYPES = [
  ["Lead Acid (VRLA)", "3–5 years", "₹40,000–80,000", "Monthly check needed", "Budget-sensitive buyers"],
  ["Lithium Iron Phosphate (LiFePO4)", "8–12 years", "₹80,000–1,50,000", "Minimal — BMS managed", "Long-term, low-maintenance"],
  ["Tubular Battery", "4–6 years", "₹50,000–90,000", "Monthly topping needed", "Rural areas — repairable locally"],
];

const SYSTEM_CONFIGS = [
  ["DC Battery + BLDC pump", "Panels charge battery. BLDC pump runs on stored DC.", "Small farms, remote areas, 3HP–5HP", "₹60,000–1 lakh extra"],
  ["AC Hybrid (Solar + Battery + Grid)", "Solar primary, battery backup, grid tertiary. Auto-switching.", "Institutions, commercial, 24/7 use", "₹1–2 lakh extra"],
  ["Solar + Overhead Tank (No battery)", "Pump fills tank during day. Gravity feeds at all hours.", "Agriculture, rural water supply", "₹15,000–30,000 only"],
];

const SUBSIDY_ROWS = [
  ["Solar panels", true, "60–90% of MNRE benchmark cost"],
  ["Pump motor (BLDC)", true, "60–90% of MNRE benchmark cost"],
  ["MPPT Controller/VFD", true, "60–90% of MNRE benchmark cost"],
  ["Mounting structure", true, "60–90% of MNRE benchmark cost"],
  ["Installation", true, "Included in benchmark"],
  ["5-year AMC", true, "Mandatory and included"],
  ["Battery bank", false, "0% — full cost paid by farmer/buyer"],
  ["Battery BMS", false, "0% — full cost paid by farmer/buyer"],
  ["Additional inverter", false, "0% — full cost paid by farmer/buyer"],
];

const TANK_VS_BATTERY = [
  ["Cost", "₹80,000–1,50,000 extra", "₹15,000–30,000 only"],
  ["Govt subsidy", "Not covered", "No impact — pump fully subsidised"],
  ["Night water access", "Yes — direct pump", "Yes — gravity flow from tank"],
  ["Lifespan", "3–12 years — needs replacement", "20+ years — no moving parts"],
  ["Maintenance", "Monthly battery check / BMS", "Annual cleaning — minimal"],
  ["Failure risk", "Battery failure, BMS fault", "Very low — passive storage"],
  ["Suitable for", "24/7 pump-on-demand need", "Stored water for flexible use"],
  ["Recommended when", "Continuous pump access needed", "Stored volume is sufficient"],
];

const KEYWORDS = [
  "Solar Pump Battery",
  "Solar Pump with Battery",
  "Solar Pump Without Battery",
  "Solar Pump Battery Comparison",
  "Solar Pump India 2026",
  "Solar Pump Subsidy",
  "Solar Pump Cost India",
  "Solar Water Pump",
  "Headsup B2B",
];

const FAQS = [
  {
    q: "Is solar pump with battery better than without battery?",
    a: "For most agricultural applications in India — no. Without battery solar pumps are cheaper, fully eligible for government subsidy, and sufficient for daytime irrigation. Battery systems are the right choice only where night pumping or 24/7 water supply is a genuine requirement.",
  },
  {
    q: "Does solar pump work at night without battery?",
    a: "No — a standard solar pump cannot operate at night without battery. The practical solution is an elevated storage tank, which stores water pumped during the day for use at any hour. A 10,000-litre tank costs ₹20,000–35,000 compared to ₹80,000–1,50,000 for a battery — and solves the same problem for most farms.",
  },
  {
    q: "How much does a solar pump battery cost in India 2026?",
    a: "A battery bank for a 5HP solar pump costs ₹60,000 to ₹1,50,000 depending on technology. Lead acid: ₹40,000–80,000 (3–5 year life). LiFePO4: ₹80,000–1,50,000 (8–12 year life). Battery cost is NOT covered by government subsidy under PM-KUSUM or any other central scheme.",
  },
  {
    q: "Is battery covered under solar pump government subsidy?",
    a: "No. The MNRE benchmark cost for PM-KUSUM Component B does not include battery storage. Subsidy covers panels, pump motor, MPPT controller, mounting structure, installation, and 5-year AMC only. Any battery component is an additional private cost paid entirely by the buyer.",
  },
  {
    q: "How long does a solar pump battery last?",
    a: "Lead acid batteries last 3–5 years. Tubular batteries last 4–6 years. Lithium iron phosphate (LiFePO4) batteries last 8–12 years. Battery replacement is a significant recurring cost — factor it into the total 10-year cost of ownership before deciding whether a battery system is worth it.",
  },
  {
    q: "Can a solar pump run on cloudy days without battery?",
    a: "Yes — solar pumps run on cloudy days at reduced speed. On a lightly overcast day, output is typically 40–70% of peak. On heavily cloudy days, 15–40%. The pump runs slower but still operates. For most agricultural seasons in India, total pumping output across daylight hours is sufficient even with cloud cover.",
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

function ChoiceBadge({ choice }) {
  const isWithout = choice === "Without Battery";
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[12px] font-bold whitespace-nowrap ${
        isWithout ? "bg-headupb2b text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {isWithout ? "☀ Without Battery" : "🔋 With Battery"}
    </span>
  );
}

function YesNoBadge({ yes }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[12px] font-bold whitespace-nowrap ${
        yes ? "bg-headupb2b text-white" : "bg-slate-200 text-slate-700"
      }`}
    >
      {yes ? "✓ Yes" : "✗ No"}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarPumpBatteryVsWithoutBatteryGuide() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/solar-pump-battery-vs-without-battery-2026";
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
        title="Solar Pump with Battery vs Without Battery — Complete Comparison Guide India 2026"
        description="Complete comparison of solar pump with battery vs without battery for India 2026 — how each system works, cost difference, subsidy coverage, types of batteries, and when battery makes sense vs an elevated tank."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "Solar Pump with Battery vs Without Battery — India 2026",
          description:
            "How each system works, the full cost difference, when battery makes sense — and when it does not.",
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
              Solar Pump Guide · Complete Comparison
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">11 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Updated June 2026</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            Solar Pump with Battery vs Without Battery — <br className="hidden t:block" />
            Complete Comparison Guide India 2026
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            90% of solar pumps installed under government schemes in India operate without batteries —
            and for good reason. But there are specific situations where a battery-backed solar pump is
            the right answer. This guide covers everything you need to know — how each system works,
            the full cost difference, when battery makes sense, and when it does not.
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
        <SectionHeading kicker="01">How Each System Works</SectionHeading>
        <p className={para}>
          The core difference between a battery and non-battery solar pump is not the pump itself — it
          is what happens to solar energy when the pump is not running.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Component", "Without Battery", "With Battery"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HOW_IT_WORKS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Simple way to understand it">
          Without battery: solar pump works like a diesel pump — but uses sun as fuel. It pumps during
          daylight hours and stops at night. With battery: solar pump works like a grid pump with a
          power backup. It can pump at any time. For 90% of farm irrigation in India — daytime pumping
          is all that is needed.
        </Callout>

        {/* 2 */}
        <SectionHeading kicker="02">Pros and Cons — Side-by-Side Comparison</SectionHeading>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-5 my-7">
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-headupb2b text-white px-5 py-3 font-bold text-[15px] text-center">
              Without Battery
            </div>
            <ul className="p-5 space-y-2.5">
              {PROS_WITHOUT.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-700 leading-snug">
                  <span className="text-headupb2b font-bold shrink-0">+</span>
                  <span>{p}</span>
                </li>
              ))}
              {CONS_WITHOUT.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-600 leading-snug">
                  <span className="text-gray-400 font-bold shrink-0">−</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
            <div className="bg-[#2e1f4d] text-white px-5 py-3 font-bold text-[15px] text-center">
              With Battery
            </div>
            <ul className="p-5 space-y-2.5">
              {PROS_WITH.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-700 leading-snug">
                  <span className="text-headupb2b font-bold shrink-0">+</span>
                  <span>{p}</span>
                </li>
              ))}
              {CONS_WITH.map((p) => (
                <li key={p} className="flex gap-3 text-[14px] text-gray-600 leading-snug">
                  <span className="text-gray-400 font-bold shrink-0">−</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3 */}
        <SectionHeading kicker="03">Complete Cost Comparison — 5HP System</SectionHeading>
        <p className={para}>
          The cost difference between a battery and non-battery solar pump system is significant — and
          the battery is NOT covered by government subsidy.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Component", "Without Battery", "With Battery", "Extra Cost"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((row, i) => (
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
        <Callout label="The subsidy gap — most important factor">
          Government subsidy covers 60–90% of the standard solar pump cost. Batteries are NOT in the
          MNRE benchmark. So: standard pump — farmer pays ₹35,000. With battery — farmer pays ₹35,000
          (subsidised) + ₹80,000–1,50,000 (battery, no subsidy) = ₹1.15L–1.85L total. For most farmers
          under a government scheme, the no-battery system is the financially correct choice.
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">When to Choose Battery vs Without Battery</SectionHeading>
        <p className={para}>
          The right choice depends entirely on your water use requirements. Here is a practical guide
          for farmers, contractors, and project planners.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Use Case", "Recommended", "Reason"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {WHEN_TO_CHOOSE.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 align-top"><ChoiceBadge choice={row[1]} /></td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">Types of Battery Systems Available in India</SectionHeading>
        <p className={para}>
          Three battery technologies are commonly used with solar pumps in India. Each has a different
          cost, lifespan, and maintenance requirement.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Battery Type", "Lifespan", "Cost (5HP System)", "Maintenance", "Best For"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BATTERY_TYPES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["System Configuration", "How It Works", "Best Suited For", "Price Range"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SYSTEM_CONFIGS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">Government Subsidy — What Is and Is Not Covered</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Component", "Covered by Subsidy?", "Subsidy Amount"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SUBSIDY_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200"><YesNoBadge yes={row[1]} /></td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 7 */}
        <SectionHeading kicker="07">Elevated Tank — The Cheaper Alternative to Battery</SectionHeading>
        <p className={para}>
          For farmers who need water flexibility beyond daylight hours, an elevated storage tank is
          often a far better solution than a battery. It solves the same problem at a fraction of the
          cost.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Comparison Point", "Battery System", "Elevated Tank + No Battery"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TANK_VS_BATTERY.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="For most agricultural needs — tank wins over battery">
          A 10,000-litre overhead tank costs ₹20,000–35,000 and stores enough water for overnight and
          early-morning irrigation. Compare this to ₹80,000–1,50,000 for a battery with a 5-year
          replacement cycle. Unless the specific need is for the pump itself to run at night — not
          just water access — the elevated tank delivers the same outcome at 80% lower cost.
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
              Get Solar Pump Pricing — With or Without Battery
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              Headsup B2B supplies both standard and battery-equipped solar pump systems across India.
              Get bulk pricing, verified certifications, and procurement support.
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
