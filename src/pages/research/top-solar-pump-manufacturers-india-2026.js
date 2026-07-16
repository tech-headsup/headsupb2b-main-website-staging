"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "12+", label: "Top solar pump manufacturers profiled" },
  { num: "MNRE", label: "All listed suppliers have govt empanelment" },
  { num: "3–10HP", label: "HP range covered by listed suppliers" },
  { num: "Pan-IN", label: "Delivery coverage across India" },
];

const TOC = [
  "How to evaluate a solar pump manufacturer for B2B procurement",
  "Top solar pump manufacturers in India — detailed profiles",
  "Headsup B2B — verified solar pump procurement partner",
  "Manufacturer comparison table — quick reference",
  "State-wise manufacturer presence",
  "How to verify a solar pump supplier before ordering",
  "Frequently asked questions",
];

// [criterion, whatToCheck, redFlags]
const EVAL_ROWS = [
  ["BIS & MNRE certification", "BIS CRS registration for panels. IS 8034/9079 for pumps. IEC 61215 test reports.", "Cannot provide certificate numbers. Reports show different model than quoted."],
  ["ALMM listing", "For government projects — panels and inverters must appear on MNRE ALMM list.", "Not listed on ALMM. Claims exemption without basis."],
  ["Production capacity", "Ask for monthly capacity in writing. Request references from 2–3 bulk orders.", "Vague answers. No factory address. No verifiable past orders."],
  ["Warranty and AMC structure", "5-year comprehensive warranty on pump. 25-year panel performance warranty.", "Only 1-year warranty. AMC terms undefined. No dedicated service network."],
  ["State nodal agency empanelment", "Empanelment letter from at least 2–3 state nodal agencies (RRECL, UPNEDA, GEDA).", "Not empanelled anywhere. Claims empanelment but cannot show letter."],
];

const MANUFACTURERS = [
  {
    no: 1,
    name: "Kirloskar Solar",
    tier: "Premium",
    location: "Pune, Maharashtra | Est. 1888",
    desc: "India's most trusted pump brand with 130+ years of engineering heritage. Kirloskar's solar pump division offers BLDC submersible and surface pumps with the most comprehensive national service network — over 1,400 service centres across India. Their after-sales support is unmatched by any domestic competitor.",
    hp: "3HP – 10HP",
    certifications: "BIS CRS, IEC 61215, IS 8034, MNRE empanelled, ALMM listed",
    bestFor: "Government tenders, large EPC contracts, premium private market",
    note: "Highest average selling price — premium margins for dealers. Best for government projects where nodal agency audits are stringent.",
  },
  {
    no: 2,
    name: "Shakti Pumps",
    tier: "Premium",
    location: "Pithampur, Madhya Pradesh | Est. 1982",
    desc: "One of India's largest dedicated solar pump manufacturers — listed on NSE/BSE. Shakti supplies directly to state nodal agencies across Rajasthan, MP, and UP through direct empanelment. Their BLDC submersible pump range is among the most widely installed under PM-KUSUM across North India.",
    hp: "3HP – 10HP",
    certifications: "BIS CRS, IEC 61215, IS 8034, IS 9079, MNRE empanelled, ALMM listed",
    bestFor: "Government scheme bulk supply — North and Central India",
    note: "Strong volume discounts for dealers ordering 50+ units. Most active in RRECL and MPUVNL tenders. Competitive benchmark pricing.",
  },
  {
    no: 3,
    name: "CRI Pumps",
    tier: "Mid-range",
    location: "Coimbatore, Tamil Nadu | Est. 1954",
    desc: "CRI is South India's dominant solar pump manufacturer with particularly strong presence in Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu. Their solar pump range covers both submersible and surface types with strong BLDC motor efficiency ratings. Service network is strongest in South and West India.",
    hp: "3HP – 10HP",
    certifications: "BIS CRS, IEC 61215, IS 8034, MNRE empanelled",
    bestFor: "Government projects — South India, private market",
    note: "Best entry point for dealers targeting AP, Telangana, Karnataka tenders. Competitive pricing vs Kirloskar with comparable certification.",
  },
  {
    no: 4,
    name: "Grundfos Solar",
    tier: "Premium",
    location: "Ahmedabad, Gujarat | Est. 1945 (India ops 1997)",
    desc: "Danish multinational with Indian manufacturing operations. Grundfos solar pumps are specified for high-reliability industrial and municipal applications where downtime cost justifies premium pricing. Their SQ Flex range is widely used in remote off-grid water supply projects funded by international agencies.",
    hp: "3HP – 10HP",
    certifications: "BIS CRS, IEC 61215, ISO 9001, MNRE empanelled",
    bestFor: "Premium commercial, industrial, export-linked projects",
    note: "Highest price point — margins depend on premium positioning. Best for projects with international funding or quality audit requirements.",
  },
  {
    no: 5,
    name: "Lubi Industries",
    tier: "Mid-range",
    location: "Ahmedabad, Gujarat | Est. 1987",
    desc: "Gujarat-based manufacturer with strong GEDA empanelment and growing national presence. Lubi's solar pump range offers competitive pricing with solid build quality — positioned between economy OEM brands and premium manufacturers. Their distribution network in Gujarat and Rajasthan is well-developed.",
    hp: "3HP – 10HP",
    certifications: "BIS CRS, IEC 61215, IS 8034, MNRE empanelled, GEDA empanelled",
    bestFor: "Gujarat, Rajasthan, Maharashtra government projects",
    note: "Best value option for Gujarat-based dealers. GEDA empanelment is established — tenders move fast.",
  },
  {
    no: 6,
    name: "Kenbrook Solar",
    tier: "Mid-range",
    location: "Delhi NCR | Est. 2010",
    desc: "North India-focused manufacturer with growing presence in UP, Haryana, and Punjab tenders. Kenbrook offers BLDC submersible pumps with competitive pricing and responsive dealer support. Known for faster delivery to North India locations compared to manufacturers based in South or West India.",
    hp: "3HP – 10HP",
    certifications: "BIS CRS, IEC 61215, IS 8034, MNRE empanelled",
    bestFor: "UP, Haryana, Punjab, Uttarakhand government tenders",
    note: "Strong option for UPNEDA and HAREDA tenders. Faster North India delivery than South-based manufacturers.",
  },
  {
    no: 7,
    name: "Tata Power Solar",
    tier: "Premium",
    location: "Mumbai, Maharashtra | Est. 2007",
    desc: "Tata group company offering integrated solar pump systems with strong brand recognition. Tata Power Solar's backing provides financial stability and warranty credibility that smaller manufacturers cannot match. Their solar pump systems are increasingly specified in large irrigation projects.",
    hp: "3HP – 10HP",
    certifications: "BIS CRS, IEC 61215, MNRE empanelled, ALMM listed",
    bestFor: "Large government tenders, corporate CSR projects",
    note: "Brand recognition commands premium pricing. Best for tenders where financial stability of the vendor is evaluated.",
  },
  {
    no: 8,
    name: "Jain Irrigation Systems",
    tier: "Mid-range",
    location: "Jalgaon, Maharashtra | Est. 1963",
    desc: "India's largest drip irrigation company has integrated solar pump systems with its irrigation product line. Jain's advantage is offering a complete solar-powered drip irrigation package — pump, panels, and drip system — which is increasingly specified by horticulture departments across Maharashtra, Gujarat, and Karnataka.",
    hp: "3HP – 7.5HP",
    certifications: "BIS CRS, IEC 61215, IS 8034, MNRE empanelled",
    bestFor: "Horticulture projects, drip irrigation integration",
    note: "Best option when tender specifies solar pump + drip irrigation together. Single-vendor for the complete system.",
  },
];

// [manufacturer, hq, hpRange, tier, bestState, almm, minOrder, isHeadsup]
const COMPARISON_ROWS = [
  ["Kirloskar Solar", "Pune, MH", "3–10HP", "Premium", "All India", "Yes", "10 units"],
  ["Shakti Pumps", "Pithampur, MP", "3–10HP", "Premium", "RJ, MP, UP", "Yes", "20 units"],
  ["CRI Pumps", "Coimbatore, TN", "3–10HP", "Mid-range", "AP, TS, KA", "Yes", "10 units"],
  ["Grundfos Solar", "Ahmedabad, GJ", "3–10HP", "Premium", "Commercial", "Yes", "5 units"],
  ["Lubi Industries", "Ahmedabad, GJ", "3–10HP", "Mid-range", "GJ, RJ, MH", "Yes", "15 units"],
  ["Kenbrook Solar", "Delhi NCR", "3–10HP", "Mid-range", "UP, HR, PB", "On request", "10 units"],
  ["Tata Power Solar", "Mumbai, MH", "3–10HP", "Premium", "Large tenders", "Yes", "20 units"],
  ["Jain Irrigation", "Jalgaon, MH", "3–7.5HP", "Mid-range", "MH, GJ, KA", "Yes", "10 units"],
  ["Headsup B2B", "Pan-India", "3–10HP", "Procurement", "All India", "Yes", "1 unit", true],
];

// [state, nodalAgency, manufacturers, why]
const STATE_ROWS = [
  ["Rajasthan", "RRECL", "Shakti Pumps, Kirloskar, Lubi", "Shakti has dedicated RRECL empanelment. Highest tender volumes in India."],
  ["Uttar Pradesh", "UPNEDA", "Kenbrook Solar, Shakti, Kirloskar", "Kenbrook's North India proximity gives faster delivery to rural UP sites."],
  ["Madhya Pradesh", "MPUVNL", "Shakti Pumps, Kirloskar", "Shakti is headquartered in MP — fastest local delivery and service."],
  ["Gujarat", "GEDA", "Lubi Industries, Grundfos", "Lubi has established GEDA empanelment and Gujarat distribution advantage."],
  ["Maharashtra", "MAHAURJA", "Kirloskar, Jain Irrigation", "Kirloskar is Pune-based — Maharashtra service network is strongest here."],
  ["Andhra Pradesh", "APEPDCL", "CRI Pumps, Kirloskar", "CRI's South India dominance makes AP/TS the natural first choice."],
  ["Karnataka", "KREDL", "CRI Pumps, Grundfos", "CRI and Grundfos both have strong Karnataka distribution networks."],
  ["Bihar", "BREDA", "Kirloskar, Kenbrook, Headsup B2B", "Limited local manufacturers — pan-India suppliers serve Bihar better."],
];

// [step, howTo, time]
const VERIFY_ROWS = [
  ["BIS CRS registration", "Visit bis.gov.in → CRS Certification → search by brand/model number", "10 minutes"],
  ["ALMM listing check", "Visit mnre.gov.in → ALMM list → search panel and inverter brand", "10 minutes"],
  ["IS certification for pump", "Ask for IS 8034 (submersible) or IS 9079 (surface) certificate — verify BIS lab name", "5 minutes"],
  ["Factory verification", "Request Google Maps factory address — verify via street view or site visit for large orders", "15 minutes"],
  ["Nodal agency empanelment", "Ask for empanelment letter from state nodal agency — dated within last 2 years", "Instant"],
  ["Reference check", "Ask for 2–3 references of comparable bulk orders — call or email directly", "30 minutes"],
  ["GST verification", "Verify GSTIN at gst.gov.in — confirms registered business and filing status", "5 minutes"],
];

const HEADSUP_BENEFITS = [
  "Verified manufacturer network — BIS & MNRE compliant products",
  "Competitive bulk pricing — 3HP to 10HP, BLDC and AC",
  "Pan-India delivery — regional hubs in Rajasthan, UP, MP, Gujarat",
  "Single point of contact for procurement, documentation and AMC",
  "B2B dealers and contractors served — not retail",
  "Building materials + solar under one platform",
];

const KEYWORDS = [
  "Solar Pump Manufacturers India",
  "Solar Pump Suppliers India 2026",
  "Best Solar Pump Company India",
  "Solar Pump B2B",
  "Kirloskar Solar Pump",
  "Shakti Solar Pump",
  "CRI Solar Pump",
  "Solar Pump Dealer",
  "Headsup B2B",
];

const FAQS = [
  {
    q: "Which is the best solar pump manufacturer in India 2026?",
    a: "For government projects requiring highest reliability — Kirloskar Solar and Shakti Pumps are the top choices with the most established nodal agency empanelment and service networks. For South India — CRI Pumps. For best value mid-range — Lubi Industries or Kenbrook Solar. For procurement support across multiple brands — Headsup B2B.",
  },
  {
    q: "Which solar pump company is MNRE approved?",
    a: "Kirloskar Solar, Shakti Pumps, CRI Pumps, Grundfos, Lubi Industries, Tata Power Solar, Jain Irrigation Systems, and Kenbrook Solar are all MNRE empanelled with state nodal agencies. MNRE approval is state-specific — a manufacturer empanelled in Rajasthan may need separate empanelment in Gujarat. Always verify the specific state empanelment.",
  },
  {
    q: "Can a B2B dealer source solar pumps from multiple manufacturers?",
    a: "Yes — and many experienced dealers do. Sourcing from multiple manufacturers allows better price negotiation, risk diversification, and the ability to serve different state tenders with locally empanelled suppliers. Headsup B2B provides access to multiple verified manufacturers under one procurement platform.",
  },
  {
    q: "What is the minimum order quantity for solar pump manufacturers?",
    a: "Most manufacturers have minimum order quantities of 10 to 20 units for standard B2B pricing. Shakti Pumps requires 20+ units for direct dealer pricing. For smaller quantities of 1 to 10 units, procurement through a B2B platform like Headsup B2B is more cost-effective than approaching manufacturers directly.",
  },
  {
    q: "How long does delivery take from solar pump manufacturers?",
    a: "Standard delivery from manufacturer to dealer warehouse takes 2 to 4 weeks for stock items. Custom specifications or large orders (200+ units) may take 4 to 8 weeks. Last-mile delivery to rural installation sites adds 3 to 7 days depending on location. Dealers maintaining regional buffer stock eliminate manufacturing lead time entirely.",
  },
  {
    q: "Is Headsup B2B a manufacturer or a procurement platform?",
    a: "Headsup B2B is a B2B procurement platform — not a manufacturer. Headsup B2B connects dealers, contractors, and companies with verified solar pump manufacturers for bulk procurement, handling sourcing, price negotiation, documentation, and delivery coordination. For buyers who need multi-brand comparison and verified supply — Headsup B2B provides a single point of contact.",
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

function TierBadge({ tier }) {
  return (
    <span className="bg-headupb2b text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
      {tier}
    </span>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function TopSolarPumpManufacturersIndia2026() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical = "https://www.headsupb2b.com/research/top-solar-pump-manufacturers-india-2026";
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
        title="Top Solar Pump Manufacturers in India 2026 — Verified B2B Supplier List"
        description="Top solar pump manufacturers and verified suppliers in India for 2026 — detailed profiles covering HP range, certifications, state presence, and B2B procurement notes for dealers, contractors and companies."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "Top Solar Pump Manufacturers in India 2026 — Verified B2B Supplier List",
          description:
            "Detailed profiles of India's top solar pump manufacturers — HP range, certifications, state presence and B2B procurement notes.",
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
              Solar Industry Guide · B2B Supplier List
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">12 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Updated 2026</span>
          </div>
          <h1 className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}>
            Top Solar Pump Manufacturers in India 2026 — <br className="hidden t:block" />
            Verified B2B Supplier List
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            India&apos;s solar pump market is growing rapidly — but not every manufacturer on the
            internet is genuinely reliable for bulk B2B procurement. This guide covers the top solar
            pump manufacturers and verified suppliers in India, with detailed profiles covering HP
            range, certifications, state presence, and B2B procurement notes — including Headsup B2B
            as a verified procurement partner.
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
        <SectionHeading kicker="01">How to Evaluate a Solar Pump Manufacturer for B2B Procurement</SectionHeading>
        <p className={para}>
          Before placing a bulk solar pump order, B2B dealers and contractors must evaluate manufacturers
          on five non-negotiable criteria. A low-price quote from an uncertified or unreliable supplier
          costs far more in the long run than a slightly higher price from a verified source.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Criterion", "What to Check", "Red Flags"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {EVAL_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[24%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2 */}
        <SectionHeading kicker="02">Top Solar Pump Manufacturers in India — Detailed Profiles</SectionHeading>
        <p className={para}>
          The manufacturers below are established players with verified MNRE empanelment, BIS-certified
          products, and documented track records in government scheme supply. Each profile includes
          B2B-specific procurement notes.
        </p>

        <div className="space-y-6 my-7">
          {MANUFACTURERS.map((m) => (
            <div key={m.no} className="flex gap-0 rounded-2xl overflow-hidden border border-[#e9e3f5]">
              <div className="shrink-0 w-14 t:w-16 bg-headupb2b text-white font-black text-2xl t:text-3xl flex items-center justify-center">
                {m.no}
              </div>
              <div className="flex-1 p-5 t:p-6 bg-white">
                <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                  <h3 className="font-extrabold text-[18px] t:text-[20px] text-[#1a1330] leading-snug">
                    {m.name}
                  </h3>
                  <TierBadge tier={m.tier} />
                </div>
                <div className="text-[13px] text-gray-500 mb-3">■ {m.location}</div>
                <p className="text-[15px] text-gray-700 leading-relaxed mb-4">{m.desc}</p>
                <div className="grid grid-cols-1 t:grid-cols-[140px_1fr] gap-y-2 gap-x-4 text-[14px] border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-500">HP Range</div>
                  <div className="font-bold text-[#1a1330]">{m.hp}</div>
                  <div className="font-semibold text-gray-500">Certifications</div>
                  <div className="font-bold text-[#1a1330]">{m.certifications}</div>
                  <div className="font-semibold text-gray-500">Best For</div>
                  <div className="font-bold text-[#1a1330]">{m.bestFor}</div>
                  <div className="font-semibold text-gray-500">B2B Note</div>
                  <div className="font-bold text-headupb2b">{m.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 */}
        <SectionHeading kicker="03">Headsup B2B — Verified Solar Pump Procurement Partner</SectionHeading>
        <p className={para}>
          For B2B buyers who need multi-brand solar pump sourcing, verified product compliance, and
          pan-India procurement support under one roof — Headsup B2B is a dedicated B2B procurement
          platform serving dealers, contractors, and construction companies.
        </p>

        <div className="rounded-2xl overflow-hidden border-2 border-headupb2b my-7">
          <div className="bg-headupb2b px-6 py-3 flex items-center justify-between flex-wrap gap-2">
            <span className="text-white text-[12px] font-bold tracking-[1.5px] uppercase">
              ■ Featured Supplier
            </span>
            <span className="text-white/80 text-[12px] font-bold tracking-[1.5px] uppercase">
              Verified B2B Platform
            </span>
          </div>
          <div className="grid grid-cols-1 t:grid-cols-2 gap-6 p-6 t:p-8 bg-purple">
            <div>
              <h3 className="text-2xl font-black text-[#1a1330] mb-2">Headsup B2B</h3>
              <div className="text-[13px] font-bold text-headupb2b mb-4">
                Pan-India B2B Procurement Platform | headsupb2b.com
              </div>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                Headsup B2B is a pan-India B2B procurement platform specialising in building materials
                and solar products. For solar pump buyers — dealers, contractors, and construction
                companies — Headsup B2B provides a single point of access to verified solar pump
                manufacturers across India, eliminating the need to manage multiple supplier
                relationships.
              </p>
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#1a1330] mb-3">
                Why source solar pumps through Headsup B2B:
              </div>
              <ul className="space-y-2.5">
                {HEADSUP_BENEFITS.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[14px] text-gray-700 leading-relaxed">
                    <span className="text-headupb2b font-bold shrink-0">■</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white px-6 py-4 flex items-center justify-between flex-wrap gap-2 border-t border-[#e9e3f5]">
            <div className="text-[13px] text-gray-600">
              ■ Contact for bulk solar pump pricing and procurement support
            </div>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="text-headupb2b font-bold text-[13px] hover:underline"
            >
              headsupb2b.com/contact →
            </button>
          </div>
        </div>

        {/* 4 */}
        <SectionHeading kicker="04">Manufacturer Comparison Table — Quick Reference</SectionHeading>
        <p className={para}>
          A quick at-a-glance reference for shortlisting manufacturers by HQ location, HP range, pricing
          tier, ALMM listing status, and minimum B2B order quantity.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                {["Manufacturer", "HQ", "HP Range", "Tier", "Best State", "ALMM", "B2B Min Order"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row[0]} className={row[7] ? "bg-purple" : i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-extrabold text-headupb2b" : "font-semibold text-[#1a1330]"}`}>
                    {row[7] ? "■ " : ""}{row[0]}
                  </td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[1]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[2]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[3]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[4]}</td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top font-bold ${row[7] ? "text-headupb2b" : "text-headupb2b"}`}>
                    ■ {row[5]}
                  </td>
                  <td className={`px-4 py-3 border-b border-gray-200 align-top ${row[7] ? "font-bold text-[#1a1330]" : "text-gray-700"}`}>{row[6]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 5 */}
        <SectionHeading kicker="05">State-wise Manufacturer Presence</SectionHeading>
        <p className={para}>
          Choosing the right manufacturer for your target state reduces delivery time, simplifies nodal
          agency empanelment, and often results in better pricing due to proximity advantages.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["State", "Nodal Agency", "Recommended Manufacturers", "Why"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STATE_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 font-bold text-headupb2b align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[2]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 6 */}
        <SectionHeading kicker="06">How to Verify a Solar Pump Supplier Before Ordering</SectionHeading>
        <p className={para}>
          With hundreds of solar pump suppliers listing online, verification before bulk ordering is
          essential. Here is a practical checklist for B2B buyers.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                {["Verification Step", "How to Do It", "Time Required"].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VERIFY_ROWS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330] align-top w-[26%]">{row[0]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700 align-top">{row[1]}</td>
                  <td className="px-4 py-3 border-b border-gray-200 font-bold text-headupb2b align-top w-[18%]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout label="Use Headsup B2B for pre-verified sourcing">
          All manufacturers listed on Headsup B2B&apos;s solar pump procurement platform have been
          pre-verified for BIS certification, MNRE empanelment, ALMM listing, and supply track record.
          B2B buyers can skip the verification process and proceed directly to getting competitive bulk
          quotes — saving 2–4 weeks of sourcing effort.
        </Callout>

        {/* 7 */}
        <SectionHeading kicker="07">Frequently Asked Questions</SectionHeading>
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
              Source Solar Pumps from Verified Manufacturers — Headsup B2B
            </h2>
            <p className="text-white/75 text-[16px] max-w-[520px] mx-auto mb-7">
              Get bulk pricing from top solar pump manufacturers — Kirloskar, Shakti, CRI and more —
              with verified certifications and pan-India delivery support.
            </p>
            <button
              onClick={() => setShowRequestConsultation(true)}
              className="inline-block bg-white text-headupb2b px-8 py-3.5 rounded-lg text-[15px] font-bold no-underline hover:bg-gray-100 transition-colors"
            >
              Talk to Headsup B2B →
            </button>
            <p className="text-[13px] text-white/55 mt-4">
              Verified suppliers · Pan-India delivery · Procurement support
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
