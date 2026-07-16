"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "1.5 Cr+", label: "Diesel agricultural pumps still operating in India" },
  { num: "60%", label: "Government subsidy available on agricultural solar pumps" },
  { num: "3–10 HP", label: "Solar pump capacity range most in demand" },
  { num: "25+", label: "States actively procuring agricultural solar pumps" },
];

const TOC = [
  "What is an agricultural solar pump?",
  "Why the solar pump market is a B2B opportunity",
  "Government subsidy structure — state-wise breakdown",
  "Solar pump specifications — 3 HP to 10 HP",
  "How agricultural solar pump procurement works",
  "State-wise procurement data and nodal agencies",
  "B2B opportunities — manufacturer to installer",
  "How to enter the supply chain — step by step",
  "Compliance and certifications checklist",
  "Frequently asked questions from B2B vendors",
];

const MARKET_CHARACTERISTICS = [
  ["Bulk procurement through tenders", "Predictable, large-volume orders. One tender = 500–15,000 pumps."],
  ["Government subsidy disbursement", "Payment risk is low — subsidy flows from state treasury, not farmers."],
  ["Approved vendor list system", "Once empanelled, you receive repeat orders without fresh bidding."],
  ["Standardised specifications", "Same product specs across states — qualify once, supply everywhere."],
  ["Mandatory 5-year AMC", "Every supply creates 5 years of recurring maintenance revenue."],
  ["Regional delivery preference", "Local stock advantage — rural sites cannot wait weeks for delivery."],
];

const SUBSIDY_ROWS = [
  ["Rajasthan", "60%", "30%", "10%", "RRECL"],
  ["Gujarat", "60%", "25%", "15%", "GEDA"],
  ["Madhya Pradesh", "60%", "30%", "10%", "MPUVNL"],
  ["Uttar Pradesh", "60%", "30%", "10%", "UPNEDA"],
  ["Maharashtra", "60%", "25%", "15%", "MAHAURJA"],
  ["Haryana", "60%", "25%", "15%", "HAREDA"],
  ["Punjab", "60%", "20%", "20%", "PEDA"],
  ["Karnataka", "60%", "30%", "10%", "KREDL"],
  ["Andhra Pradesh", "60%", "30%", "10%", "APEPDCL"],
  ["Telangana", "60%", "30%", "10%", "TSREDCO"],
];

const PUMP_SPECS = [
  { hp: "3 HP", solar: "2.5–3 kWp", panels: "5–6 panels", output: "120–180 LPH", best: "Small farms", cost: "~₹2.5 L" },
  { hp: "5 HP", solar: "4–5.5 kWp", panels: "8–10 panels", output: "200–300 LPH", best: "Medium farms", cost: "~₹3.5 L" },
  { hp: "7.5 HP", solar: "6–7.5 kWp", panels: "12–14 panels", output: "300–500 LPH", best: "Large farms", cost: "~₹4.5 L" },
  { hp: "10 HP", solar: "7.5–10 kWp", panels: "15–18 panels", output: "500–800 LPH", best: "Commercial farms", cost: "~₹6.5 L" },
];

const TECH_SPECS = [
  ["Pump type", "Submersible or surface — stainless steel body"],
  ["Motor type", "BLDC (Brushless DC) or AC induction motor"],
  ["Solar panels", "Mono-PERC or poly — minimum 72 cell, BIS certified"],
  ["IP rating", "IP65 minimum for motor and controller enclosure"],
  ["Mounting structure", "Hot-dip galvanised steel, fixed tilt 15 to 25 degrees"],
  ["Controller", "MPPT-based variable frequency drive (VFD)"],
  ["Pump warranty", "Minimum 5 years comprehensive"],
  ["Panel warranty", "25-year linear performance, 5-year product warranty"],
  ["AMC obligation", "5-year annual maintenance contract mandatory with supply"],
  ["Remote monitoring", "GSM/GPRS-based data logging — recommended for govt projects"],
];

const PROCUREMENT_STAGES = [
  ["1. Budget allocation", "State government allocates funds for solar pump scheme for the financial year.", "Monitor state budget announcements — signals upcoming tender volume."],
  ["2. Tender issuance", "Nodal agency publishes tender specifying quantity, HP range, specs, and subsidy terms.", "Submit empanelment application if not already listed. Prepare bid documents."],
  ["3. Vendor empanelment", "Agency evaluates vendor applications — certifications, financials, factory capacity.", "Ensure BIS, IEC, and GST documents are in order. Submit on time."],
  ["4. Farmer registration", "Eligible farmers apply through the nodal agency portal and are allocated to vendors.", "Regional presence matters — farmers prefer vendors with local service support."],
  ["5. Supply and installation", "Empanelled vendor supplies pump, panels, structure, and installs at farm site.", "Maintain regional stock. Rural delivery speed determines repeat allocation."],
  ["6. Subsidy disbursement", "Nodal agency verifies installation and releases subsidy directly to vendor.", "Maintain proper installation documentation for claim processing."],
  ["7. AMC period begins", "5-year maintenance obligation starts from installation date.", "Service network is revenue — 1,000 pumps = ₹50 L+ AMC revenue over 5 years."],
];

const NODAL_AGENCIES = [
  ["Rajasthan", "RRECL", "Very High", "rrecl.com / BidAssist"],
  ["Gujarat", "GEDA", "High", "geda.gujarat.gov.in"],
  ["Madhya Pradesh", "MPUVNL", "High", "mpuvnl.nic.in"],
  ["Uttar Pradesh", "UPNEDA", "High", "upneda.in"],
  ["Maharashtra", "MAHAURJA", "Medium", "mahaurja.com"],
  ["Haryana", "HAREDA", "Medium", "hareda.gov.in"],
  ["Karnataka", "KREDL", "Medium", "kredlinfo.in"],
  ["Punjab", "PEDA", "Moderate", "peda.gov.in"],
  ["Andhra Pradesh", "NREDCAP", "Medium", "nredcap.in"],
  ["Bihar", "BREDA", "Moderate", "breda.bih.nic.in"],
];

const OPPORTUNITIES = [
  { tag: "MANUFACTURER", role: "Solar Pump Manufacturer", desc: "BLDC or AC submersible and surface pumps. The most direct route — nodal agencies procure from empanelled manufacturers or authorised distributors.", value: "₹1.5 L – ₹6.5 L per pump" },
  { tag: "SUPPLIER", role: "Solar Panel Supplier", desc: "Every pump set needs 2.5 kWp to 10 kWp of BIS-certified Mono-PERC panels. ALMM listing mandatory for government project supply.", value: "₹50,000 – ₹2 L per pump set" },
  { tag: "FABRICATOR", role: "Mounting Structure Maker", desc: "Hot-dip galvanised fixed-tilt structures. High volume, repeat orders. Regional manufacturers win on lead time — rural sites cannot wait weeks.", value: "₹8,000 – ₹25,000 per pump" },
  { tag: "TECHNOLOGY", role: "MPPT Controller / VFD Supplier", desc: "Every solar pump requires an MPPT-based VFD. IP65 rated, 2-year warranty minimum. Domestic manufacturers receive preference in government procurement.", value: "₹15,000 – ₹60,000 per unit" },
  { tag: "SERVICES", role: "Installation & EPC Contractor", desc: "Regional contractors handling installation under nodal agency empanelment. Strong demand in rural areas where large national contractors do not operate.", value: "₹15,000 – ₹40,000 per pump" },
  { tag: "O&M", role: "Annual Maintenance Provider", desc: "Mandatory 5-year AMC with every supply contract. 1,000 pumps under AMC = ₹50–80 lakh in recurring annual revenue with low customer acquisition cost.", value: "₹3,000 – ₹8,000 per pump/year" },
];

const STEPS = [
  ["Choose your target state and segment", "Start with one state and one role — pump manufacturer, panel supplier, or installer. Rajasthan and Madhya Pradesh offer the highest entry volume. Expand only after completing your first full tender cycle successfully."],
  ["Apply for vendor empanelment with the state nodal agency", "Each state has its own empanelment process and portal. Core documents needed: GST certificate, BIS and IEC product certifications, last 3 years of financial statements, factory photographs, and product test reports. Incomplete submissions are the leading cause of empanelment delays."],
  ["Obtain all mandatory compliance certifications", "For pumps: IS 8034 (submersible) or IS 9079 (surface). For panels: IEC 61215, IEC 61730, and BIS CRS registration. For inverters/VFDs: IEC 62109. Without these, empanelment does not proceed regardless of price or quality."],
  ["Build a PM-KUSUM-aligned product datasheet", "Prepare a single-page technical datasheet mapping your product to government specifications — HP rating, flow rate, head, IP rating, warranty period, and all certification numbers. This document is what procurement officers evaluate first."],
  ["Monitor tenders weekly and bid proactively", "Check BidAssist, the GEM portal, and your target state's nodal agency website every week. Tender response windows are typically 21 to 30 days. Weekly monitoring gives you time to prepare; last-minute discovery does not."],
  ["Establish regional stock and a service presence", "Nodal agencies score vendors on delivery capability and local service infrastructure. A warehouse in Jodhpur or Jaipur for Rajasthan, Lucknow for UP, or Bhopal for MP signals local commitment and wins allocation over cheaper but distant suppliers."],
];

const COMPLIANCE = [
  ["IS 8034", "Submersible pumps", "BIS", "Yes"],
  ["IS 9079", "Surface centrifugal pumps", "BIS", "Yes"],
  ["IEC 61215 / IEC 61730", "Solar panels", "NABL lab", "Yes"],
  ["BIS CRS Registration", "Solar panels", "BIS", "Yes"],
  ["ALMM Listing", "Solar panels & inverters", "MNRE", "Yes (govt projects)"],
  ["IEC 62109", "Inverters / VFDs", "NABL lab", "Yes"],
  ["IP65 Rating Test", "Motor, controller", "NABL lab", "Yes"],
  ["ISO 9001:2015", "Manufacturing company", "ISO body", "Strongly preferred"],
  ["GST Registration", "Company", "GST Department", "Yes"],
  ["MSME / Udyam Reg.", "Company", "MSME Ministry", "Preferred"],
];

const FAQS = [
  {
    q: "What government subsidy is available on agricultural solar pumps?",
    a: "The central government provides a 60% subsidy on the MNRE benchmark cost of the solar pump system. Most states contribute an additional 30%, leaving the farmer to pay only 10%. In states like Rajasthan, MP, Karnataka, and Telangana, this 10% farmer share creates the highest effective market demand for B2B vendors.",
  },
  {
    q: "Is ALMM listing mandatory for solar pump supply to government projects?",
    a: "ALMM listing is not mandatory for the pump motor itself, but it is mandatory for the solar panels and inverters/VFDs supplied as part of the system. Without ALMM-listed panels, a vendor cannot supply to any government-subsidised project — this is a hard eligibility block, not a preference.",
  },
  {
    q: "Which states procure the highest volumes of agricultural solar pumps?",
    a: "Rajasthan, Madhya Pradesh, and Uttar Pradesh are the highest-volume states. Rajasthan's RRECL issues quarterly tenders covering 5,000 to 15,000 pumps each. Gujarat, Maharashtra, and Karnataka follow with consistent medium-volume procurement through their respective nodal agencies throughout the year.",
  },
  {
    q: "Can small and regional manufacturers supply to government solar pump tenders?",
    a: "Yes — and regional manufacturers often have a structural advantage. Government procurement scoring favours local delivery capability and service network. MSME registration adds price preference and EMD exemption. Small manufacturers who focus on one or two states consistently outperform distant large suppliers.",
  },
  {
    q: "How long does vendor empanelment take and what documents are needed?",
    a: "Empanelment typically takes 4 to 8 weeks from submission to approval, depending on the state. Documents required include: GST certificate, BIS product certification, IEC test reports, last 3 years of audited financials, factory photos, and product performance data. Incomplete submissions are the primary cause of delays.",
  },
  {
    q: "What is the scope of the 5-year AMC that comes with every supply?",
    a: "The Annual Maintenance Contract covers routine inspection, cleaning, motor servicing, controller checks, panel cleaning, and replacement of failed components within warranty. For vendors, AMC revenue is ₹3,000 to ₹8,000 per pump per year. A portfolio of 1,000 installed pumps generates ₹30–80 lakh in annual AMC revenue — making installation volume the foundation of a sustainable service business.",
  },
];

const ACTIVITY_STYLE = {
  "Very High": "bg-headupb2b text-white",
  High: "bg-headupb2b/15 text-headupb2b",
  Medium: "bg-headupb2b/10 text-headupb2b",
  Moderate: "bg-gray-100 text-gray-600",
};

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

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarPumpB2BGuide() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/solar-pump-for-agriculture-b2b-supplier-guide-india";
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
        title="Solar Pump for Agriculture — Complete B2B Supplier Guide India 2026"
        description="A B2B supplier guide to India's agricultural solar pump market — government subsidy structure, state-wise nodal agencies, pump specifications, procurement flow, and how to enter the supply chain."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "Solar Pump for Agriculture — Complete B2B Supplier Guide India 2026",
          description:
            "Government subsidy structure, nodal agencies, pump specs, and the step-by-step path into India's agricultural solar pump procurement market.",
          site_name: "Headsup B2B",
        }}
      />

      {/* ── TOP BAR (was dark green → headsupb2b) ── */}
      <nav className="bg-headupb2b px-5 t:px-12 py-3.5 flex items-center justify-between">
        <div className="font-extrabold text-lg text-white tracking-tight">
          Headsup <span className="text-[#C9B8E8]">B2B</span>
        </div>
        <a
          href="https://www.headsupb2b.com"
          className="bg-white text-headupb2b px-5 py-2 rounded-md text-[13px] font-bold no-underline"
        >
          Get Sourcing Help →
        </a>
      </nav>

      {/* ── HERO (was dark green → deep headsupb2b) ── */}
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
            <span className="text-[13px] text-white/50">15 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Updated May 2026</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            Solar Pump for Agriculture — <br className="hidden t:block" />
            Complete B2B Supplier Guide India 2026
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            India has over 1.5 crore diesel-powered agricultural pumps still in operation. The
            government&apos;s push to replace them with solar is generating billions in procurement
            every year across 25+ states. This guide is built for B2B solar pump suppliers —
            manufacturers, distributors, installers, and O&amp;M providers — who want a clear,
            actionable path into this market.
          </p>

          {/* Hero stats (was light green boxes → light purple) */}
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

        {/* TOC (was light green panel) */}
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
        <SectionHeading kicker="01">What Is an Agricultural Solar Pump?</SectionHeading>
        <p className={para}>
          An agricultural solar pump is a water pumping system powered entirely by solar energy. It
          replaces diesel engines or grid electricity connections to deliver irrigation water
          directly to fields. Solar panels mounted on a fixed structure generate DC electricity,
          which a controller converts into the power needed to run the pump motor — no fuel, no grid
          dependency, and near-zero operating cost once installed.
        </p>
        <p className={para}>
          The two primary types used in Indian agriculture are <strong>submersible pumps</strong> —
          which sit inside a borewell and push water upward — and <strong>surface pumps</strong>,
          which draw water from open sources like ponds, canals, or shallow borewells. Both are
          available in solar variants ranging from 3 HP to 10 HP, with solar panel arrays sized to
          match each pump&apos;s power requirement.
        </p>
        <p className={para}>
          For the farmer, the economics are straightforward. A 5 HP diesel pump running through an
          irrigation season costs ₹80,000 to ₹1,20,000 in fuel. The same pump on solar costs nothing
          to run. A 5 HP solar pump system installed under government subsidy costs the farmer
          roughly ₹30,000 to ₹50,000 out of pocket — which it recovers in fuel savings within the
          first season.
        </p>
        <Callout label="Key B2B Insight">
          Farmers do not walk into a shop and buy solar pumps the way they buy seed or fertiliser.
          Agricultural solar pump procurement flows through <strong>state government nodal
          agencies</strong>, which issue bulk tenders and maintain approved vendor lists. A single
          state tender can cover hundreds to thousands of pumps. This is a structured B2B
          procurement market — not retail.
        </Callout>

        {/* 2 */}
        <SectionHeading kicker="02">Why the Solar Pump Market Is a B2B Opportunity</SectionHeading>
        <p className={para}>
          The scale of India&apos;s agricultural solar pump market is difficult to overstate. The
          government has set a target of replacing 20 lakh diesel and electric pumps with solar
          across the country. At an average system cost of ₹3 to ₹5 lakh per pump, this represents a
          procurement pipeline worth <strong>₹60,000 crore to ₹1,00,000 crore</strong> — spread
          across states, districts, and hundreds of tender cycles over the coming years.
        </p>
        <p className={para}>
          What makes this specifically a B2B market — rather than a consumer market — is the
          procurement structure. State governments provide subsidies of 75% to 90% of the total
          system cost, disbursed directly to approved vendors. Farmers on the approved list pay only
          their 10% to 25% share to the vendor, who claims the subsidy from the nodal agency. The
          vendor&apos;s customer is the state government procurement system, not the individual
          farmer.
        </p>

        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
                  Market Characteristic
                </th>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
                  What This Means for B2B Vendors
                </th>
              </tr>
            </thead>
            <tbody>
              {MARKET_CHARACTERISTICS.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{k}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout label="The Recurring Revenue Angle" title="Every pump sold is 5 years of AMC revenue">
          Every solar pump sold under a government scheme comes with a mandatory 5-year Annual
          Maintenance Contract. For a vendor who places 500 pumps in a season at ₹5,000 AMC per pump
          per year, that is <strong>₹25 lakh in recurring annual revenue</strong> — before any new
          sales. B2B vendors who understand this build pump placement as their primary strategy and
          treat AMC as a compounding revenue base.
        </Callout>

        {/* 3 */}
        <SectionHeading kicker="03">Government Subsidy Structure — State-Wise Breakdown</SectionHeading>
        <p className={para}>
          The central government contributes 60% of the benchmark cost of each solar pump system.
          State governments top this up — most contributing 30%, leaving the farmer to pay only 10%.
          Some states provide additional support through state schemes on top of the central
          subsidy. The table below shows the effective cost split across major procurement states.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["State", "Central Subsidy", "State Subsidy", "Farmer Share", "Nodal Agency"].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SUBSIDY_ROWS.map((row, i) => (
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
        <Callout label="Highest Demand for Vendors" title="States with a 10% farmer share">
          Rajasthan, Madhya Pradesh, Uttar Pradesh, Karnataka, Andhra Pradesh, and Telangana all
          have a 10% farmer contribution. At this level, even small and marginal farmers can afford a
          solar pump — which means demand is not constrained by affordability. These states should be
          the first priority for any B2B vendor entering this market.
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">Solar Pump Specifications — 3 HP to 10 HP</SectionHeading>
        <p className={para}>
          Government procurement specifications for agricultural solar pumps are standardised by
          MNRE. The four capacity categories — 3 HP, 5 HP, 7.5 HP, and 10 HP — each have defined
          solar panel requirements, flow rates, and benchmark costs. Suppliers must conform to these
          specifications exactly; products outside them are ineligible for government-subsidised
          procurement.
        </p>
        <div className="grid grid-cols-1 mm:grid-cols-2 l:grid-cols-4 gap-4 my-7">
          {PUMP_SPECS.map((p) => (
            <div key={p.hp} className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="bg-headupb2b text-white text-center py-4">
                <div className="text-[11px] uppercase tracking-wider text-white/70">Solar Pump</div>
                <div className="text-2xl font-black">{p.hp}</div>
              </div>
              <dl className="p-4 text-[13px] space-y-2.5">
                {[
                  ["Solar capacity", p.solar],
                  ["Panels required", p.panels],
                  ["Water output", p.output],
                  ["Best for", p.best],
                  ["Benchmark", p.cost],
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

        <h3 className="text-lg font-bold text-[#1a1330] mt-10 mb-4">Mandatory Technical Specifications</h3>
        <div className="overflow-x-auto my-5">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">Component</th>
                <th className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">Mandatory Specification</th>
              </tr>
            </thead>
            <tbody>
              {TECH_SPECS.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{k}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">How Agricultural Solar Pump Procurement Works</SectionHeading>
        <p className={para}>
          Understanding the procurement flow is essential for B2B vendors. The process is
          government-structured, with defined stages — and the window for vendor engagement is
          specific. Vendors who know when to act win orders; those who approach at the wrong stage
          find procurement already closed.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Stage", "What Happens", "B2B Vendor Action"].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROCUREMENT_STAGES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-headupb2b align-top whitespace-nowrap">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">State-Wise Procurement Data and Nodal Agencies</SectionHeading>
        <p className={para}>
          Each state has a designated nodal agency responsible for issuing solar pump tenders and
          maintaining the approved vendor list. Vendor empanelment must be completed separately for
          each state. The table below shows the most active states, their nodal agencies, and where
          to monitor tenders.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["State", "Nodal Agency", "Activity Level", "Tender Portal"].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NODAL_AGENCIES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200">
                    <span className={`px-2.5 py-1 rounded-full text-[12px] font-semibold ${ACTIVITY_STYLE[row[2]]}`}>
                      {row[2]}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Why Rajasthan Leads in Volume">
          Rajasthan has India&apos;s highest solar irradiance and over 90 lakh registered farmers,
          most of whom still rely on diesel. RRECL issues quarterly tenders — a single tender
          routinely covers 5,000 to 15,000 pumps. For any B2B vendor entering this market, Rajasthan
          empanelment should be the first priority, followed by Madhya Pradesh and Uttar Pradesh.
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">B2B Opportunities — Manufacturer to Installer</SectionHeading>
        <p className={para}>
          The solar pump supply chain extends well beyond the pump itself. A complete system
          installation requires panels, mounting structures, controllers, cables, civil work, and
          ongoing maintenance. Each of these represents a distinct B2B opportunity — and specialising
          in one segment well outperforms attempting to cover all of them.
        </p>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {OPPORTUNITIES.map((o) => (
            <div key={o.role} className="rounded-2xl border border-gray-200 p-5 hover:border-headupb2b transition-colors">
              <span className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-headupb2b bg-purple px-2.5 py-1 rounded mb-3">
                {o.tag}
              </span>
              <h3 className="text-base font-bold text-[#1a1330] mb-2">{o.role}</h3>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-3">{o.desc}</p>
              <div className="text-[14px] font-bold text-headupb2b">{o.value}</div>
            </div>
          ))}
        </div>

        {/* 8 */}
        <SectionHeading kicker="08">How to Enter the Supply Chain — Step by Step</SectionHeading>
        <div className="space-y-4 my-7">
          {STEPS.map(([title, body], i) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-gray-200 p-5">
              <div className="shrink-0 w-10 h-10 rounded-full bg-headupb2b text-white font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1a1330] mb-1.5">{title}</h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout label="The Most Costly Mistake B2B Vendors Make" title="Spending budget on farmer-facing marketing">
          In this market, farmers do not select their vendor — the nodal agency&apos;s approved list
          does. The only path to orders is empanelment. The only path to more orders is execution
          quality, delivery speed, and relationships with nodal agency procurement officers. Farmer
          advertising generates zero B2B returns.
        </Callout>

        {/* 9 */}
        <SectionHeading kicker="09">Compliance and Certifications — Complete Checklist</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Certification", "Applicable To", "Issuing Body", "Mandatory?"].map((h) => (
                  <th key={h} className="bg-headupb2b text-white text-left px-4 py-3 text-[12px] font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPLIANCE.map((row, i) => (
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
        <Callout label="MSME Registration — One Day, Major Advantage">
          MSME-registered vendors receive a 15–20% price preference in government solar pump tenders
          and are exempt from the Earnest Money Deposit (EMD) — which can be ₹5 to ₹25 lakh on large
          tenders. Registration on the Udyam portal is free and completes within one business day. If
          you are not registered, do it today.
        </Callout>

        {/* 10 */}
        <SectionHeading kicker="10">Frequently Asked Questions from B2B Vendors</SectionHeading>
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

        {/* ── FINAL CTA (was green banner → headsupb2b) ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              Find Your Next Solar Pump Customer
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              We track solar pump award data across Rajasthan, Gujarat, UP and 15+ states — updated
              weekly. Know which agencies are issuing tenders, who has won recent contracts, and how
              to reach procurement decision-makers.
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              Talk to Headsup B2B →
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              1000+ verified suppliers · Pan-India delivery · 60-day procurement credit
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
