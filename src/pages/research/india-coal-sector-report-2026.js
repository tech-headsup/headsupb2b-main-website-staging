"use client";

import { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import GetInTouch from "@/component/Form/Contact/GetInTouch";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const HERO_STATS = [
  { num: "210.46 MT", label: "Captive & commercial output, FY26" },
  { num: "+10.22%", label: "Year-on-year growth" },
  { num: "12", label: "Blocks opened in FY26" },
];

const MATERIAL_CATEGORIES = [
  "TMT & Structural Steel",
  "Crash Barriers",
  "HDPE Pipes",
  "Solar & High Mast",
  "CHP & Material Handling",
];

const TOC = [
  "A watershed year — India crosses a threshold",
  "Speed, not just scale — execution accelerates",
  "The allocation engine — six years of commercial mining",
  "The producing base — 72 mines carrying the load",
  "Beyond tonnage — five programmes reshaping the sector",
  "The build-out — a construction pipeline ready to move",
  "Material package for every new coal block",
  "Why Headsup B2B is built for this build-out",
];

const HEADLINE_STATS = [
  ["210.46 MT", "Captive & commercial, FY26", "+10.22% year on year"],
  ["204.61 MT", "Dispatches, FY26", "+7.35% year on year"],
  ["88%", "Growth since FY23", "From 115.78 MT in three years"],
  ["1 bn T", "National production", "Crossed in FY 2024-25"],
];

const TOP_ALLOTTEES = [
  ["NTPC Mining Ltd. (NML)", "63.00"],
  ["West Bengal Power Development Corporation (WBPDCL)", "33.00"],
  ["NLC India Ltd.", "29.00"],
  ["MAHAGENCO", "23.60"],
  ["Rajasthan Rajya Vidyut Utpadan Nigam (RRVUNL)", "23.00"],
  ["Sasan Power", "18.00"],
  ["Odisha Coal & Power Ltd. (OCPL)", "16.00"],
  ["Jindal Power Limited", "13.45"],
  ["Jindal Steel Ltd.", "12.37"],
  ["The Singareni Collieries Co. Ltd. (SCCL)", "10.00"],
];

const PROGRAMMES = [
  {
    title: "Coal gasification",
    body: "A national mission targeting 100 MT by 2030, backed by an incentive scheme of approximately ₹8,500 crore, moving coal from a combustion feedstock towards a chemical one.",
  },
  {
    title: "Underground Coal Gasification (UCG)",
    body: "In April 2026 the Ministry signed India's first-ever coal mine development agreements carrying UCG provisions, opening a route to deep-seated reserves that conventional mining cannot economically reach.",
  },
  {
    title: "Underground mining expansion",
    body: "A plan to roughly triple underground output towards 100 MT a year, shifting the mix away from opencast and reducing surface impact per tonne.",
  },
  {
    title: "Mission Coking Coal",
    body: "Domestic raw coking coal production targeted at 140 MT by FY 2029-30, with washing capacity rising to 58 MT, directly reducing steel-sector import dependence.",
  },
  {
    title: "Coal PSU renewables",
    body: "Coal public sector undertakings are targeting 15 GW of renewable capacity by 2030, making the sector a contributor to the energy transition rather than only a subject of it.",
  },
];

const AWAITING_BLOCKS = [
  ["Utkal A", "Mahanadi Coalfields Ltd (MCL)", "25.00"],
  ["Kuraloi A (North)", "Vedanta Ltd.", "8.00"],
  ["Bandha", "EMIL Mines and Mineral Resources Ltd.", "5.00"],
  ["Gondbahera Ujheni", "MP Natural Resources Pvt. Ltd.", "4.12"],
  ["Badam", "NTPC Mining Ltd. (NML)", "3.00"],
  ["Tokisud North", "NMDC Ltd.", "2.32"],
  ["Gondkhari", "Adani Power Maharashtra Ltd.", "2.00"],
  ["Mandla North", "Dalmia Cement (Bharat) Ltd.", "1.50"],
  ["Moitra", "JSW Steel Ltd.", "1.00"],
  ["Sahapur West", "Sarda Energy and Minerals Ltd.", "0.60"],
  ["Urtan North", "JMS Mining Pvt. Ltd.", "0.60"],
  ["Brahmdiha", "AP Mineral Development Corpn. (APMDCL)", "0.50"],
];

const MATERIAL_PACKAGE = [
  {
    num: "01",
    title: "TMT & Structural Steel",
    body: "Coal handling plant civils, conveyor gantries and trestles, crusher house and workshop structures, junction towers and silo supports. The largest single steel call on a new block.",
  },
  {
    num: "02",
    title: "HDPE Pipes (PE100)",
    body: "Mine dewatering, dust suppression networks, settling pond transfer lines and colony water supply. PN6 to PN16 across long runs, needed before the first box cut.",
  },
  {
    num: "03",
    title: "Crash Barriers & Road Furniture",
    body: "Haul roads, approach roads and dump-yard edges carry heavy earthmoving traffic. W-beam barriers, delineators and signage are recurring safety spend, not one-time supply.",
  },
  {
    num: "04",
    title: "High Mast & Site Solar",
    body: "Pit, stockyard and weighbridge lighting on high masts, plus rooftop and ground-mount solar for colony and office load, written into the mine's own decarbonisation commitment.",
  },
  {
    num: "05",
    title: "CHP & Material Handling",
    body: "Belt conveyors, crushers, stackers and reclaimers, with condition monitoring and SCADA integration to hold throughput at rated capacity.",
  },
  {
    num: "06",
    title: "Weighbridges & Dispatch",
    body: "Dispatch reached 204.61 MT in FY26. Weighment, sampling and dispatch automation is what keeps offtake matched to production.",
  },
];

const KEYWORDS = [
  "India Coal Production 2026",
  "Ministry of Coal FY 2025-26",
  "Captive & Commercial Coal Mines",
  "Coal Block Auction India",
  "PM-KUSUM Coal Reform",
  "Coal Handling Plant Procurement",
  "TMT for Coal Blocks",
  "HDPE Pipes Coal Mines",
  "Headsup B2B Coal Sector",
];

const FAQS = [
  {
    q: "How much coal did India's captive and commercial mines produce in FY 2025-26?",
    a: "Captive and commercial coal mines produced 210.46 million tonnes in FY 2025-26 — the first time the segment crossed the 200 MT threshold. That is 10.22% growth over the 190.95 MT recorded in the previous year, and an increase of over 88% since FY 2022-23 when the same segment produced 115.78 MT.",
  },
  {
    q: "How many coal blocks were granted Mine Opening Permission in FY 2025-26?",
    a: "The Ministry of Coal granted Mine Opening Permission to twelve captive and commercial coal blocks in FY 2025-26, adding more than 86 MT of annual production capacity to the operational base in a single year. Seven of those twelve blocks commenced production within the same financial year.",
  },
  {
    q: "How many coal mines have been allocated under commercial coal mining since 2020?",
    a: "Commercial coal mining was opened to the private sector in June 2020. Six years on, fourteen completed auction rounds have successfully allocated 141 coal mines. In calendar year 2025 alone, allocation orders were issued for 33 coal mines with a combined peak rated capacity of 49.54 MTPA.",
  },
  {
    q: "Which allottee has the largest producing capacity from allocated coal blocks?",
    a: "NTPC Mining Ltd. (NML) leads with 63.00 MT/yr of producing peak rated capacity, followed by West Bengal Power Development Corporation (WBPDCL) at 33.00 MT and NLC India Ltd. at 29.00 MT. Public sector allottees together produce 252.70 MT of the 328.46 MT in operation — 77% of all producing capacity from allocated blocks.",
  },
  {
    q: "What is the size of the coal block construction pipeline in India?",
    a: "Twelve blocks holding a combined 53.64 MT of annual capacity have already obtained Mine Opening Permission but have yet to commence production. These are not speculative allocations — they are sites with clearances in hand, moving into construction. Every one of these sites will call for TMT, structural steel, HDPE pipes, crash barriers, high masts, and coal handling plant equipment.",
  },
  {
    q: "What material categories does a new coal block procure?",
    a: "A newly opened coal block procures TMT and structural steel (coal handling plant, conveyor gantries, silo supports), HDPE PE100 pipes (mine dewatering, dust suppression, colony water), crash barriers and road furniture (haul roads and dump-yard edges), high mast lighting and site solar (pit and stockyard lighting, colony decarbonisation), coal handling plant and material handling systems, and weighbridge and dispatch automation.",
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
export default function IndiaCoalSectorReportFY2026() {
  const [showRequestConsultation, setShowRequestConsultation] = useState(false);
  const canonical =
    "https://www.headsupb2b.com/research/india-coal-sector-report-2026";
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
        title="India's Coal Decade Delivers 210 MT — FY 2025-26 Sector Report | Headsup B2B"
        description="Ministry of Coal FY 2025-26 performance review — captive and commercial mines crossed 200 MT for the first time at 210.46 MT (+10.22% YoY), 12 blocks opened, 53.64 MT construction pipeline, and the material package for every new coal block."
        canonical={canonical}
        openGraph={{
          type: "article",
          url: canonical,
          title: "India's Coal Decade Delivers 210 MT — FY 2025-26 Sector Report",
          description:
            "Captive and commercial coal mines crossed 200 MT for the first time. Six years of reform, a widening producing base, and a construction pipeline infrastructure suppliers should be reading closely.",
          site_name: "Headsup B2B",
        }}
      />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#2e1f4d] px-5 t:px-12 pt-16 pb-20">
        <div
          className="absolute -top-24 -left-16 w-[460px] h-[460px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(94,63,153,0.45) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-24 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(94,63,153,0.30) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto">
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            <span className="bg-headupb2b text-white text-[11px] font-bold px-3.5 py-1 rounded-full tracking-wider uppercase">
              Sector Report · Ministry of Coal · FY 2025-26
            </span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">10 min read</span>
            <span className="text-white/30">·</span>
            <span className="text-[13px] text-white/50">Published July 2026</span>
          </div>
          <h1
            className="text-white font-black leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: "clamp(28px,4.5vw,48px)" }}
          >
            India&apos;s coal decade delivers <br className="hidden t:block" />
            210 MT. A record year.
          </h1>
          <p className="text-[17px] text-white/65 leading-relaxed max-w-[680px]">
            Captive and commercial coal mines crossed 200 million tonnes for the
            first time in FY 2025-26. Behind that milestone sits six years of
            reform, a fast-widening producing base, and a construction pipeline
            that infrastructure suppliers should be reading closely.
          </p>

          {/* Hero stats */}
          <div className="grid grid-cols-1 mm:grid-cols-3 gap-3 mt-9">
            {HERO_STATS.map((s) => (
              <div key={s.num} className="bg-white/95 rounded-2xl p-5 text-center">
                <div className="text-2xl t:text-[28px] font-black text-headupb2b leading-none mb-2">
                  {s.num}
                </div>
                <div className="text-[12px] text-gray-600 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Material category strip */}
          <div className="mt-8 rounded-xl bg-headupb2b/90 border border-white/10 px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {MATERIAL_CATEGORIES.map((c) => (
              <span
                key={c}
                className="text-[11px] t:text-[12px] font-bold uppercase tracking-[1.2px] text-white"
              >
                {c}
              </span>
            ))}
          </div>

          <p className="text-[12px] text-white/45 mt-6">
            Headsup B2B Research Desk · 28 July 2026 · Source: Ministry of Coal
          </p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article className="max-w-[900px] mx-auto px-5 t:px-12 py-14">
        {/* TOC */}
        <div className="bg-purple rounded-2xl p-6 t:p-8 mb-12">
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b mb-4">
            What&apos;s in this report
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
        <SectionHeading kicker="01 · A Watershed Year">
          Indian coal crosses a threshold five years in the making
        </SectionHeading>
        <p className={para}>
          On 2 April 2026, the Ministry of Coal confirmed the number the sector
          had been working towards. Coal production from captive and commercial
          mines reached <strong>210.46 million tonnes</strong> in FY 2025-26,
          crossing the 200 MT mark for the first time and posting{" "}
          <strong>10.22% growth</strong> over the 190.95 MT recorded the previous
          year. Dispatches kept pace at <strong>204.61 MT</strong>, up 7.35%.
        </p>
        <p className={para}>
          The trajectory is the real story. In FY 2022-23, the same segment
          produced 115.78 MT. Three years later it is producing 210.46 MT — an
          increase of over <strong>88%</strong>. Very few industrial sectors
          anywhere have added that proportion of output in that time, and none
          while simultaneously restructuring how the resource is allocated.
        </p>
        <p className={para}>
          This sits inside a national performance that crossed{" "}
          <strong>one billion tonnes</strong> of coal production in FY 2024-25,
          reducing import dependence and holding power supply stable through
          consecutive years of record electricity demand.
        </p>

        <div className="grid grid-cols-2 l:grid-cols-4 gap-3 my-8">
          {HEADLINE_STATS.map(([num, label, sub]) => (
            <div key={num} className="rounded-2xl border border-gray-200 p-5 bg-[#faf9fd]">
              <div className="text-xl t:text-[24px] font-black text-headupb2b leading-none mb-2">
                {num}
              </div>
              <div className="text-[12px] font-bold uppercase tracking-wide text-[#1a1330] mb-1">
                {label}
              </div>
              <div className="text-[12px] text-gray-600 leading-snug">{sub}</div>
            </div>
          ))}
        </div>

        {/* 2 */}
        <SectionHeading kicker="02 · Speed, Not Just Scale">
          Execution has accelerated sharply
        </SectionHeading>
        <p className={para}>
          The most telling indicator is not tonnage but pace. During FY 2025-26
          the Ministry granted Mine Opening Permission to{" "}
          <strong>twelve captive and commercial coal blocks</strong>, adding more
          than <strong>86 MT of annual production capacity</strong> to the
          operational base in a single year. Of those twelve,{" "}
          <strong>seven commenced production within the same financial year</strong>.
        </p>
        <p className={para}>
          That is a materially different clearance culture from the one the
          sector operated under a decade ago, and the Ministry has attributed it
          directly to faster approvals, stronger regulatory coordination and
          improved logistics across the mining value chain. A block moving from
          permission to first coal inside twelve months is now a demonstrated
          outcome rather than an aspiration.
        </p>

        {/* 3 */}
        <SectionHeading kicker="03 · The Allocation Engine">
          Six years of commercial mining, running at scale
        </SectionHeading>
        <p className={para}>
          Commercial coal mining was opened to the private sector in June 2020.
          Six years on, <strong>fourteen completed auction rounds have
          successfully allocated 141 coal mines</strong>, under terms deliberately
          liberalised to widen participation: no end-use restriction, reduced
          upfront amounts, adjustment of upfront against royalty, 100% FDI
          through the automatic route, and a revenue-sharing model indexed to
          the National Coal Index.
        </p>
        <p className={para}>
          In calendar year 2025 alone, allocation orders were issued for{" "}
          <strong>33 coal mines</strong> with a combined peak rated capacity of{" "}
          <strong>49.54 MTPA</strong>. Once fully operational, the Ministry
          estimates these mines will generate employment for approximately{" "}
          <strong>66,980 people</strong> and attract capital investment of more
          than <strong>₹7,430 crore</strong>.
        </p>
        <Callout label="15th Auction Round · Mumbai, April 2026">
          Launched at a stakeholder consultation on 17 April 2026 under the theme{" "}
          <em>&quot;Atmanirbhar Bharat: Coal for Energy Security&quot;</em>, the
          round drew 21 bids from 16 companies when bids were opened in July —
          including <strong>four first-time entrants</strong> to commercial coal
          mining. Six years into the reform, the framework is still bringing new
          participants into a sector that was closed to them entirely before
          2020.
        </Callout>

        {/* 4 */}
        <SectionHeading kicker="04 · The Producing Base">
          Seventy-two mines, and a public sector carrying the load
        </SectionHeading>
        <p className={para}>
          The Ministry&apos;s register of allocated coal mines, updated to 28
          July 2026, lists <strong>214 blocks carrying 828.35 MT of peak rated
          capacity</strong>. Of these, <strong>72 mines are in production</strong>,
          accounting for <strong>328.46 MT of rated capacity</strong> — a
          producing base that did not exist at this scale five years ago.
        </p>
        <p className={para}>
          Captive blocks are the standout performers, converting{" "}
          <strong>61% of allocated capacity into production</strong> across a
          portfolio of 475.42 MT allocated and 290.06 MT producing. Where
          offtake is secured and a parent&apos;s generation depends on the mine,
          Indian developers are opening blocks and running them. Public sector
          allottees lead decisively, producing <strong>252.70 MT of the 328.46
          MT in operation</strong> — 77% of all producing capacity from allocated
          blocks.
        </p>

        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>Allottee</Th>
                <Th>Producing PRC (MT/yr)</Th>
              </tr>
            </thead>
            <tbody>
              {TOP_ALLOTTEES.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">
                    {row[0]}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold text-right">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">
            Top ten allottees by producing capacity. Together they account for
            54.8% of all producing capacity on the register.
          </p>
        </div>

        {/* 5 */}
        <SectionHeading kicker="05 · Beyond Tonnage">
          The sector is changing what coal is for
        </SectionHeading>
        <p className={para}>
          The current phase of reform is not simply about mining more. Five
          programmes are reshaping the sector&apos;s technical profile at the
          same time.
        </p>
        <div className="space-y-3 my-7">
          {PROGRAMMES.map((p, i) => (
            <div
              key={p.title}
              className="flex gap-4 p-5 rounded-2xl bg-[#faf9fd] border border-gray-200"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-headupb2b text-white font-black text-[15px] flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[#1a1330] text-[15px] mb-1.5">
                  {p.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 */}
        <SectionHeading kicker="06 · The Build-out">
          A construction pipeline ready to move
        </SectionHeading>
        <p className={para}>
          For contractors, EPC firms and materials suppliers, the register
          carries one figure worth marking:{" "}
          <strong>twelve blocks holding 53.64 MT of capacity have already
          obtained Mine Opening Permission</strong>. These are not speculative
          allocations. They are sites with clearances in hand, moving to
          construction.
        </p>
        <div className="overflow-x-auto my-7">
          <table className="w-full border-collapse text-[14px]">
            <thead>
              <tr>
                <Th>Block awaiting first coal</Th>
                <Th>Allottee</Th>
                <Th>PRC (MT/yr)</Th>
              </tr>
            </thead>
            <tbody>
              {AWAITING_BLOCKS.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? "bg-[#faf9fd]" : "bg-white"}>
                  <td className="px-4 py-3 border-b border-gray-200 font-semibold text-[#1a1330]">
                    {row[0]}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                    {row[1]}
                  </td>
                  <td className="px-4 py-3 border-b border-gray-200 text-headupb2b font-bold text-right">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[12px] text-gray-500 italic mt-3">
            Blocks with Mine Opening Permission granted, production yet to
            commence. Combined capacity 53.64 MT/yr.
          </p>
        </div>

        {/* 7 */}
        <SectionHeading kicker="07 · The Material Package">
          Every one of these sites will call for the same material package
        </SectionHeading>
        <div className="grid grid-cols-1 t:grid-cols-2 gap-4 my-7">
          {MATERIAL_PACKAGE.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="px-5 pt-5">
                <div className="text-xs font-bold tracking-[1.5px] uppercase text-headupb2b">
                  / {m.num}
                </div>
                <h3 className="text-lg font-extrabold text-[#1a1330] mt-2">
                  {m.title}
                </h3>
              </div>
              <div className="px-5 pb-5 pt-2">
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Callout label="Sources">
          Ministry of Coal, List of 214 Allocated Coal Mines as on 28.07.2026;
          Ministry of Coal press releases dated 2 April 2026 (FY 2025-26
          production and dispatch), 16-17 April 2026 (15th auction round) and 28
          April 2026 (UCG development agreements); Ministry of Coal Year End
          Review 2025 (CY2025 allocation orders, employment and investment
          estimates); Ministry of Coal auction portal (rounds and mines
          auctioned). Register-derived figures are computed from 193 entries
          covering 214 mines; entries carrying multiple mines under one capacity
          figure are counted by serial range for mine counts and by entry for
          capacity.
        </Callout>

        {/* 8 */}
        <SectionHeading kicker="08 · Headsup B2B">
          Built for this build-out
        </SectionHeading>
        <p className={para}>
          The challenge in coal-sector procurement is not demand. It is{" "}
          <strong>speed, reliability and credit</strong>. A contractor executing
          a coal handling plant package at a newly opened block needs pricing
          confirmed in one call, steel delivered against a site schedule, and
          payment terms that do not choke working capital while the mine ramps.
        </p>
        <p className={para}>
          Headsup B2B is India&apos;s dedicated B2B marketplace for
          infrastructure materials — TMT bars, structural steel, crash barriers,
          HDPE pipes, solar equipment and more — connecting contractors, EPC
          firms and project buyers directly to verified manufacturers and
          distributors. With integrated channel finance, fast supplier payment
          and a pan-India network, we remove the friction that slows mine-site
          procurement. Our group has executed for Coal India subsidiaries
          directly, including a completed{" "}
          <strong>89-unit high mast package for Bharat Coking Coal Limited</strong>,
          alongside a live GeM contract portfolio across lighting, electrical
          and high-mast categories.
        </p>

        {/* FAQ */}
        <SectionHeading kicker="FAQ">Frequently Asked Questions</SectionHeading>
        <div className="space-y-3 my-7">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-gray-200 p-5 open:border-headupb2b"
            >
              <summary className="flex justify-between items-start gap-4 cursor-pointer list-none font-bold text-[#1a1330] text-[15px]">
                {f.q}
                <span className="text-headupb2b text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[14px] text-gray-600 leading-relaxed mt-3">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        {/* ── FINAL CTA ── */}
        <div className="relative overflow-hidden bg-headupb2b rounded-3xl px-8 t:px-12 py-12 text-center mt-14">
          <div
            className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl t:text-[28px] font-black text-white mb-3">
              Supplying a coal block this year?
            </h2>
            <p className="text-white/75 text-[16px] max-w-[560px] mx-auto mb-7">
              Get verified pricing on TMT, structural steel, HDPE, crash
              barriers and solar in one place. Pan-India delivery, integrated
              channel finance, and procurement support for coal-block build-outs.
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
