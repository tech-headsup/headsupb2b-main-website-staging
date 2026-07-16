"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "90%", label: "Maximum subsidy available on solar pumps" },
  { num: "20 L", label: "Solar pumps targeted under PM-KUSUM" },
  { num: "₹35K", label: "Farmer cost for 5HP system (10% share)" },
  { num: "25+", label: "States actively disbursing subsidy" },
];

const TOC = [
  "What is the solar pump subsidy in India?",
  "PM-KUSUM scheme — how the subsidy works",
  "State-wise subsidy breakdown — 15 states",
  "Who is eligible for solar pump subsidy?",
  "What is covered and what is not",
  "How to apply — step-by-step process",
  "Common reasons for subsidy rejection",
  "Frequently asked questions",
];

const SCHEME_ROWS = [
  ["Scheme name", "PM-KUSUM — Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan"],
  ["Relevant component", "Component B — standalone solar pumps for agriculture"],
  ["National target", "20 lakh solar pumps across India"],
  ["Central subsidy", "60% of MNRE benchmark cost — fixed for all states"],
  ["State subsidy", "30% in most states — varies by state"],
  ["Farmer contribution", "10% in most states — varies 10% to 40%"],
  ["Pump capacity", "3 HP to 10 HP — submersible and surface types"],
  ["Implementing body", "State Nodal Agencies under MNRE"],
  ["Vendor payment", "Subsidy paid directly to empanelled vendor — not to farmer"],
  ["Primary eligibility", "Small and marginal farmers up to 2 hectares land holding"],
];

const MONEY_FLOW = [
  {
    title: "MNRE releases central funds to state government",
    body: "Central government allocates 60% subsidy funds to state government for the financial year. State adds its own 30% share.",
  },
  {
    title: "State nodal agency issues tender to empanelled vendors",
    body: "The nodal agency (RRECL, UPNEDA, GEDA etc.) issues tender for solar pumps. Only empanelled vendors with BIS-certified products can participate.",
  },
  {
    title: "Farmer registers and gets allocated to a vendor",
    body: "Eligible farmer applies on state portal. Nodal agency verifies eligibility and allocates farmer to an empanelled vendor in their district.",
  },
  {
    title: "Farmer pays 10% directly to the vendor",
    body: "Farmer pays their share (typically ₹35,000 for 5HP) directly to the vendor. Vendor proceeds with supply and installation.",
  },
  {
    title: "Vendor installs and submits verification",
    body: "Vendor installs the complete system. Nodal agency field team inspects and verifies installation quality and specification compliance.",
  },
  {
    title: "Vendor receives 90% subsidy from nodal agency",
    body: "After successful verification, nodal agency releases the 90% subsidy portion directly to the vendor's bank account within 30 to 60 days.",
  },
];

const STATES = [
  { state: "Rajasthan", level: "Very High", agency: "RRECL", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Madhya Pradesh", level: "Very High", agency: "MPUVNL", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Uttar Pradesh", level: "Very High", agency: "UPNEDA", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Gujarat", level: "High", agency: "GEDA", split: "Central: 60% | State: 25% | Farmer: 15%", cost: "~₹52,500" },
  { state: "Maharashtra", level: "High", agency: "MAHAURJA", split: "Central: 60% | State: 25% | Farmer: 15%", cost: "~₹52,500" },
  { state: "Karnataka", level: "High", agency: "KREDL", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Andhra Pradesh", level: "High", agency: "APEPDCL", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Telangana", level: "High", agency: "TSREDCO", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Haryana", level: "Medium", agency: "HAREDA", split: "Central: 60% | State: 25% | Farmer: 15%", cost: "~₹52,500" },
  { state: "Punjab", level: "Medium", agency: "PEDA", split: "Central: 60% | State: 20% | Farmer: 20%", cost: "~₹70,000" },
  { state: "Bihar", level: "Medium", agency: "BREDA", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Jharkhand", level: "Medium", agency: "JREDA", split: "Central: 60% | State: 25% | Farmer: 15%", cost: "~₹52,500" },
  { state: "Chhattisgarh", level: "Medium", agency: "CREDA", split: "Central: 60% | State: 30% | Farmer: 10%", cost: "~₹35,000" },
  { state: "Odisha", level: "Medium", agency: "OREDA", split: "Central: 60% | State: 25% | Farmer: 15%", cost: "~₹52,500" },
  { state: "Tamil Nadu", level: "Medium", agency: "TEDA", split: "Central: 60% | State: 20% | Farmer: 20%", cost: "~₹70,000" },
];

const ELIGIBILITY_ROWS = [
  ["Land holding", "Farmer must have agricultural land", "No minimum size — even small holdings qualify"],
  ["Priority category", "Small & marginal farmers (up to 2 hectares) get priority", "Larger holdings can apply but may be waitlisted"],
  ["Water source", "Borewell, open well, pond, or canal on/near farm", "Surface water farmers can apply for surface pump"],
  ["Existing pump", "Diesel or electric pump preferred", "Converting from diesel strengthens application"],
  ["State residency", "Must be resident of the state applying in", "Aadhar-linked address verification required"],
  ["Bank account", "Active bank account linked to Aadhar", "Subsidy verification uses Aadhar-bank linkage"],
  ["No duplicate", "Must not have received solar pump under any previous scheme", "Checked against state database"],
  ["Land documents", "Khasra, Khatauni, or equivalent land record", "Required at time of application"],
];

const COVERAGE_ROWS = [
  ["Solar panels", true, "60–90% of benchmark", "BIS CRS certified only"],
  ["Pump motor (BLDC/AC)", true, "60–90% of benchmark", "IS 8034/9079 certified"],
  ["MPPT controller/VFD", true, "60–90% of benchmark", "IP65 rated"],
  ["Mounting structure", true, "60–90% of benchmark", "Hot-dip galvanised steel"],
  ["Wiring and cabling", true, "Included in benchmark", "Within system scope"],
  ["Installation charges", true, "Included in benchmark", "Up to site commissioning"],
  ["5-year AMC", true, "Mandatory inclusion", "Covers service and parts"],
  ["Battery storage", false, "0% — buyer pays full", "Not in MNRE benchmark"],
  ["Borewell drilling", false, "0% — buyer pays full", "Site preparation excluded"],
  ["Civil work / tank", false, "0% — buyer pays full", "Storage infrastructure excluded"],
  ["Transportation", true, "Within installation cost", "Up to site only"],
];

const STEPS = [
  {
    title: "Check your state nodal agency portal",
    body: "Visit your state's nodal agency website — RRECL for Rajasthan, UPNEDA for UP, GEDA for Gujarat. Look for 'PM-KUSUM Component B' or 'Solar Pump Scheme' registration link. Application windows open periodically — bookmark the page and check monthly.",
  },
  {
    title: "Register as a farmer beneficiary",
    body: "Fill the online registration form with: Aadhar number, mobile number, land details (khasra/khatauni number), bank account details, existing pump details (if any), and borewell/water source information. Most states require Aadhar-OTP verification.",
  },
  {
    title: "Upload required documents",
    body: "Documents typically required: Aadhar card, land ownership proof (khasra/khatauni), bank passbook copy, passport photo, and caste certificate (for SC/ST priority). Some states also require a water source photo or borewell depth certificate.",
  },
  {
    title: "Wait for empanelment and vendor allocation",
    body: "Nodal agency reviews applications and allocates eligible farmers to empanelled vendors in their district. This process takes 2 to 8 weeks depending on the state and current application load. You receive an SMS or portal notification when allocated.",
  },
  {
    title: "Pay your contribution (10%) to the allocated vendor",
    body: "Once allocated, contact the assigned vendor. Pay your 10% share (typically ₹35,000 for 5HP) before installation begins. Get a receipt — you will need this for any future subsidy-related queries. Do not pay before receiving official vendor allocation.",
  },
  {
    title: "Installation and inspection",
    body: "The vendor installs the complete solar pump system at your farm. A nodal agency field inspector verifies the installation against specifications. Keep your land and Aadhar documents ready for the inspection visit.",
  },
  {
    title: "Receive installation certificate",
    body: "After successful inspection, you receive an installation certificate from the nodal agency. This document confirms your solar pump is under the government scheme and activates your 5-year warranty and AMC coverage. Store it safely.",
  },
];

const REJECTION_ROWS = [
  ["Aadhar-bank mismatch", "Name or date of birth in bank records does not match Aadhar.", "Visit your bank to update records to match Aadhar before applying."],
  ["Duplicate application", "Same Aadhar already linked to a previous solar pump scheme installation.", "Check state portal for existing registrations before applying."],
  ["Land record mismatch", "Khasra number on application does not match state land records database.", "Verify your khasra number at the tehsil office before submitting."],
  ["Incorrect product specification", "Installed pump does not match MNRE specification — wrong HP, missing certification.", "Verify vendor's product BIS and MNRE certifications before installation."],
  ["Inspection failure", "Nodal agency inspector finds discrepancy between installed system and specification.", "Request specification sheet from vendor and compare before accepting installation."],
  ["Vendor empanelment lapsed", "Allocated vendor's empanelment expired before installation was completed.", "Verify vendor empanelment validity date before paying your contribution."],
  ["Delayed disbursement — not rejection", "State treasury releases subsidy in batches — individual delays are common.", "Follow up with nodal agency after 60 days if subsidy payment to vendor delayed."],
];

const NODAL_AGENCIES = [
  ["Rajasthan", "RRECL", "rrecl.com"],
  ["Uttar Pradesh", "UPNEDA", "upneda.in"],
  ["Madhya Pradesh", "MPUVNL", "mpuvnl.nic.in"],
  ["Gujarat", "GEDA", "geda.gujarat.gov.in"],
  ["Maharashtra", "MAHAURJA", "mahaurja.com"],
  ["Karnataka", "KREDL", "kredlinfo.in"],
  ["Haryana", "HAREDA", "hareda.gov.in"],
  ["Punjab", "PEDA", "peda.gov.in"],
  ["Andhra Pradesh", "NREDCAP", "nredcap.in"],
  ["Telangana", "TSREDCO", "tsredco.telangana.gov.in"],
  ["Bihar", "BREDA", "breda.bih.nic.in"],
  ["Chhattisgarh", "CREDA", "creda.in"],
  ["Jharkhand", "JREDA", "jreda.com"],
  ["Odisha", "OREDA", "oreda.gov.in"],
  ["Tamil Nadu", "TEDA", "teda.in"],
];

const KEYWORDS = [
  "Solar Pump Subsidy",
  "Solar Pump Subsidy India 2026",
  "Solar Pump Government Scheme",
  "Solar Pump Subsidy State-wise",
  "RRECL Solar Pump",
  "UPNEDA Solar Pump",
  "Solar Pump Free India",
  "Solar Pump Yojana 2026",
  "Headsup B2B",
];

const FAQS = [
  {
    q: "How much subsidy is available on solar pumps in India 2026?",
    a: "Under PM-KUSUM Component B, the central government provides 60% subsidy on the MNRE benchmark cost. Most states add a further 30%, giving a total subsidy of 90%. The farmer pays only 10% — approximately ₹35,000 for a 5HP system benchmarked at ₹3.5 lakh. Some states like Punjab contribute only 20%, requiring a 20% farmer share.",
  },
  {
    q: "How to get solar pump subsidy in India?",
    a: "Apply directly on your state nodal agency's official website — RRECL for Rajasthan, UPNEDA for UP, GEDA for Gujarat, MPUVNL for MP, and so on. Registration is free. You will need your Aadhar card, land records (khasra/khatauni), and bank account linked to Aadhar. After approval, you are allocated to an empanelled vendor and pay your 10% share directly to them.",
  },
  {
    q: "Is solar pump subsidy available in all states of India?",
    a: "Yes — PM-KUSUM Component B is a central scheme active in all states. However, the state's additional contribution (10–30%) varies. States like Rajasthan, MP, UP, Karnataka, and Bihar offer the maximum 90% subsidy. Some northeastern states and UTs may have different implementation timelines or limited tender cycles.",
  },
  {
    q: "Can I apply for solar pump subsidy online?",
    a: "Yes — all state nodal agencies have online portals for farmer registration. The application, document upload, and allocation process is entirely online. Physical visits to the nodal agency office are not required for the application. However, a field inspection visit does happen at the time of installation verification.",
  },
  {
    q: "What documents are required for solar pump subsidy?",
    a: "Standard documents required: Aadhar card, mobile number linked to Aadhar, land ownership proof (khasra/khatauni or patta), bank passbook copy showing Aadhar-linked account, passport-size photograph, and caste certificate for SC/ST category applicants. Some states additionally require borewell depth certificate or water source photograph.",
  },
  {
    q: "How long does it take to get the solar pump after applying for subsidy?",
    a: "Timeline from application to installation varies by state and current demand. In active states like Rajasthan and MP during peak tender cycles, allocation happens in 4 to 8 weeks after successful registration. Installation follows within 2 to 4 weeks of vendor allocation and farmer payment. Total timeline from application to commissioning is typically 2 to 4 months.",
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

function LevelBadge({ level }) {
  const map = {
    "Very High": "bg-headupb2b text-white",
    High: "bg-[#7a5dbf] text-white",
    Medium: "bg-slate-200 text-slate-700",
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${map[level]}`}>
      {level}
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

function NumberedStep({ index, title, body }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200">
      <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-black text-[15px] flex items-center justify-center">
        {index}
      </div>
      <div>
        <h3 className="font-bold text-[#1a1330] text-[15px] mb-1.5">{title}</h3>
        <p className="text-[14px] text-gray-600 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function SolarPumpSubsidyIndiaGuide() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/solar-pump-subsidy-india-2026";
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
        title="Solar Pump Subsidy India 2026 — Complete State-wise Guide"
        description="Complete state-wise guide to solar pump subsidy in India 2026 — PM-KUSUM scheme details, 15-state subsidy breakdown, eligibility criteria, step-by-step application process, what is covered, and common reasons for rejection."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "Solar Pump Subsidy India 2026 — Complete State-wise Guide",
          description:
            "PM-KUSUM scheme details, state-wise subsidy breakdown, eligibility, how to apply, and what to watch out for.",
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
              Solar Pump Guide · Govt Subsidy 2026
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">13 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Updated June 2026</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            Solar Pump Subsidy India 2026 — <br className="hidden t:block" />
            Complete State-wise Guide
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            The Indian government provides up to 90% subsidy on solar pumps under the PM-KUSUM scheme
            — making a ₹3.5 lakh system available to a farmer for just ₹35,000. But subsidy amounts,
            application processes, and eligibility criteria vary significantly from state to state.
            This guide covers everything you need to know — scheme details, state-wise breakdown,
            how to apply, and what to watch out for.
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
        <SectionHeading kicker="01">What Is the Solar Pump Subsidy in India?</SectionHeading>
        <p className={para}>
          The solar pump subsidy in India is a government financial support programme that reduces the
          cost of installing a solar-powered water pump for farmers. Under this programme, the
          government pays 60% to 90% of the total system cost — including solar panels, pump motor,
          controller, structure, installation, and 5-year maintenance — leaving the farmer to pay only
          10% to 40% depending on the state.
        </p>
        <p className={para}>
          The primary national scheme delivering this subsidy is PM-KUSUM (Pradhan Mantri Kisan Urja
          Suraksha evam Utthaan Mahabhiyan). Launched by the Ministry of New and Renewable Energy
          (MNRE), PM-KUSUM Component B specifically targets the replacement of diesel and electric
          agricultural pumps with solar pumps across India, with a national target of 20 lakh
          installations.
        </p>
        <Callout label="Why the subsidy matters in real numbers">
          A 5HP solar pump system costs ₹3 to ₹4 lakh in the open market. Under PM-KUSUM with 90%
          subsidy, the same system reaches a farmer for ₹30,000 to ₹40,000. The annual fuel saving is
          ₹80,000 to ₹1,20,000. A farmer who installs a subsidised solar pump recovers the entire
          out-of-pocket cost within the first irrigation season.
        </Callout>

        {/* 2 */}
        <SectionHeading kicker="02">PM-KUSUM Scheme — How the Subsidy Works</SectionHeading>
        <p className={para}>
          PM-KUSUM operates through a three-tier subsidy structure. Understanding how money flows from
          the central government to the farmer is important — especially for dealers and contractors
          who receive subsidy payments directly from the state nodal agency.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Aspect", "Details"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEME_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] w-1/3">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-[#1a1330] mt-10 mb-5">How the money actually flows:</h3>
        <div className="space-y-3 my-5">
          {MONEY_FLOW.map((s, i) => (
            <NumberedStep key={s.title} index={i + 1} title={s.title} body={s.body} />
          ))}
        </div>

        {/* 3 */}
        <SectionHeading kicker="03">State-wise Subsidy Breakdown — 15 States</SectionHeading>
        <p className={para}>
          Solar pump subsidy percentage and eligibility criteria vary by state. Some states top up the
          central 60% with an additional 30%, making the farmer&apos;s share just 10%. Others
          contribute less, requiring farmers to pay more.
        </p>
        <div className="grid grid-cols-1 t:grid-cols-2 l:grid-cols-3 gap-4 my-7">
          {STATES.map((s) => (
            <div key={s.state} className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#faf9fd] border-b border-gray-200">
                <div className="font-extrabold text-[#1a1330] text-[15px] leading-tight">{s.state}</div>
                <LevelBadge level={s.level} />
              </div>
              <div className="p-4 space-y-1.5">
                <div className="text-[12px] text-gray-600">Nodal Agency: <span className="font-semibold text-[#1a1330]">{s.agency}</span></div>
                <div className="text-[12px] text-gray-600">{s.split}</div>
                <div className="text-[13px] font-bold text-headupb2b mt-2">Farmer pays (5HP): {s.cost}</div>
              </div>
            </div>
          ))}
        </div>
        <Callout label="States with 10% farmer share — maximum affordability">
          Rajasthan, MP, UP, Karnataka, AP, Telangana, Bihar, and Chhattisgarh all have a 10% farmer
          contribution. For a 5HP pump at ₹3.5 lakh benchmark, the farmer pays just ₹35,000. This
          price point is affordable for small and marginal farmers across most income levels — which
          is why these states see the highest application volumes and fastest tender cycles.
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04">Who Is Eligible for Solar Pump Subsidy?</SectionHeading>
        <p className={para}>
          Eligibility criteria for PM-KUSUM Component B are defined by MNRE and implemented by state
          nodal agencies. Meeting the basic criteria is necessary but not sufficient — states also
          prioritise applications based on additional local criteria.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Eligibility Criterion", "Requirement", "Notes"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ELIGIBILITY_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="SC/ST and women farmers — additional priority">
          Most states give priority allocation to SC/ST farmers and women farmers — particularly
          female heads of household. In Rajasthan and MP, dedicated quotas are reserved for these
          categories in each tender cycle. If you fall in these categories, mention it specifically
          in your application.
        </Callout>

        {/* 5 */}
        <SectionHeading kicker="05">What Is Covered and What Is Not</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Component", "Covered?", "Subsidy Amount", "Notes"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COVERAGE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200"><YesNoBadge yes={row[1]} /></td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">How to Apply — Step-by-Step Process</SectionHeading>
        <p className={para}>
          The application process for solar pump subsidy in India is managed entirely by the state
          nodal agency. There is no direct application to MNRE. Here is the process for most states.
        </p>
        <div className="space-y-3 my-5">
          {STEPS.map((s, i) => (
            <NumberedStep key={s.title} index={i + 1} title={s.title} body={s.body} />
          ))}
        </div>
        <Callout label="Apply directly on state portal — avoid middlemen">
          Fraudsters in rural areas often charge ₹2,000 to ₹10,000 to &apos;help&apos; farmers apply
          for PM-KUSUM. The application is completely free on the state portal. If anyone asks for
          money to facilitate your solar pump subsidy application — it is a scam. Apply directly at
          your state nodal agency&apos;s official website.
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">Common Reasons for Subsidy Rejection or Delay</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Issue", "Why It Happens", "How to Avoid"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {REJECTION_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

        {/* Nodal agency quick reference */}
        <SectionHeading>State Nodal Agency Quick Reference</SectionHeading>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["State", "Nodal Agency", "Official Portal", "Apply For"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {NODAL_AGENCIES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-medium">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">PM-KUSUM Component B</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              Get a Subsidised Solar Pump — Headsup B2B
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              Headsup B2B supplies BIS-certified solar pumps through empanelled vendor networks
              across India. We assist dealers, contractors, and farmers with procurement
              documentation and nodal agency coordination.
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
