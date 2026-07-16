"use client";

import GetInTouch from "@/component/Form/Contact/GetInTouch";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

/* ─── Reusable Section wrapper ─── */
function Section({ id, num, title, children }) {
  return (
    <section id={id}>
      <hr style={{ border: "none", borderTop: "1px solid #D0D7DE", margin: "0" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20, paddingTop: 52 }}>
        <span
          style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
            color: "#FF6B35", background: "#FFF1E5",
            border: "1px solid rgba(255,107,53,0.2)",
            padding: "4px 10px", borderRadius: 4, whiteSpace: "nowrap",
          }}
        >
          {num}
        </span>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 26, lineHeight: 1.2,
            color: "#0C2340", fontWeight: 700, margin: 0, padding: 0,
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/* ─── Callout variants ─── */
function Callout({ variant = "tip", icon, title, children }) {
  const map = {
    warn: {
      wrap: { background: "#FFF8E1", border: "1px solid #F5D48A", borderRadius: 8 },
      icon: { background: "#FDE68A", color: "#92700A" },
      title: { color: "#92700A" },
      body: { color: "#92700A" },
    },
    tip: {
      wrap: { background: "#E0F4FB", border: "1px solid #A8D8E8", borderRadius: 8 },
      icon: { background: "#BAE6F7", color: "#055470" },
      title: { color: "#055470" },
      body: { color: "#0A7EA4" },
    },
    danger: {
      wrap: { background: "#FFEBE9", border: "1px solid #FCA5A5", borderRadius: 8 },
      icon: { background: "#FEE2E2", color: "#CF222E" },
      title: { color: "#CF222E" },
      body: { color: "#CF222E" },
    },
    success: {
      wrap: { background: "#DCFFE4", border: "1px solid #86EFAC", borderRadius: 8 },
      icon: { background: "#BBF7D0", color: "#0A4423" },
      title: { color: "#0A4423" },
      body: { color: "#1A7F37" },
    },
  };
  const s = map[variant];
  return (
    <div style={{ display: "flex", gap: 14, padding: "18px 22px", margin: "24px 0", alignItems: "flex-start", ...s.wrap }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, ...s.icon }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <strong style={{ display: "block", fontSize: 13.5, marginBottom: 5, ...s.title }}>{title}</strong>
        <p style={{ fontSize: 13, lineHeight: 1.6, margin: 0, ...s.body }}>{children}</p>
      </div>
    </div>
  );
}

/* ─── Checklist Section wrapper ─── */
function ChecklistSection({ title, badge, badgeColor, children }) {
  const badgeColors = {
    mandatory: { background: "#FF6B35", color: "#FFFFFF" },
    critical: { background: "#CF222E", color: "#FFFFFF" },
    important: { background: "#0A7EA4", color: "#FFFFFF" },
    recommended: { background: "#1A7F37", color: "#FFFFFF" },
  };
  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderRadius: 10, overflow: "hidden", margin: "24px 0" }}>
      <div className="bg-headupb2b" style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF", margin: 0 }}>{title}</h3>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, ...badgeColors[badgeColor] }}>
          {badge}
        </span>
      </div>
      {children}
    </div>
  );
}

/* ─── Single Checklist Item ─── */
function CheckItem({ icon, iconVariant, title, tag, tagVariant, desc }) {
  const iconMap = {
    green: { background: "#DCFFE4", color: "#1A7F37" },
    red: { background: "#FFEBE9", color: "#CF222E" },
    amber: { background: "#FFF8E1", color: "#92700A" },
    blue: { background: "#E0F4FB", color: "#0A7EA4" },
  };
  const tagMap = {
    almm: { background: "#FFF0E5", color: "#FF6B35" },
    iec: { background: "#E0F4FB", color: "#055470" },
    mnre: { background: "#E8F5E9", color: "#0A4423" },
    bis: { background: "#EDE7F6", color: "#4A148C" },
  };
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 24px", borderBottom: "1px solid #D0D7DE" }}>
      <div style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, ...iconMap[iconVariant] }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#1C2128", marginBottom: 3 }}>
          {title}
          {tag && (
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "2px 8px", borderRadius: 3, marginLeft: 6, verticalAlign: "middle", ...tagMap[tagVariant] }}>
              {tag}
            </span>
          )}
        </div>
        <div style={{ fontSize: 13, color: "#768390", lineHeight: 1.55 }}>{desc}</div>
      </div>
    </div>
  );
}

/* ─── Inline CTA Strip ─── */
function InlineCta({ title, desc, btnText, btnHref }) {
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  return (
    <div className="bg-headupb2b" style={{

      borderRadius: 10, padding: "28px 32px", margin: "40px 0",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 20, flexWrap: "wrap", borderLeft: "4px solid #FF6B35",
    }}>
      <div>
        <h4 style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", marginBottom: 5 }}>{title}</h4>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.5 }}>{desc}</p>
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button
          type="button"
          className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
          onClick={() => setShowRequestQuote(true)}
          style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
        >
          Request a Quote →
        </button>
      </div>

      {showRequestQuote && (
        <GetInTouch onClose={() => setShowRequestQuote(false)} />
      )}
    </div>
  );
}

/* ─── FAQ Item ─── */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid #D0D7DE", borderRadius: 8, marginBottom: 8, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", padding: "16px 20px",
          background: open ? "#F6F8FA" : "#FFFFFF",
          border: "none", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 15, fontWeight: 600, color: "#1C2128", lineHeight: 1.4,
        }}
      >
        {question}
        <span style={{ fontSize: 20, color: "#FF6B35", flexShrink: 0, marginLeft: 16 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ padding: "0 20px 16px", fontSize: 14, color: "#444C56", lineHeight: 1.65 }}>
          {answer}
        </div>
      )}
    </div>
  );
}

/* ─── Shared styles ─── */
const p = { marginBottom: 18, color: "#444C56", lineHeight: 1.78, fontSize: 17 };

export default function SolarPanelQualityChecklistPage() {
  const [showRequestQuote, setShowRequestQuote] = useState(false);

  return (
    <>
      <Head>
        <title>Solar Panel Quality Checklist for B2B in India</title>
        <meta
          name="description"
          content="The complete, field-tested quality checklist for procurement teams, EPC contractors, and project developers sourcing solar panels for government and commercial projects in India — covering ALMM compliance, certifications, specifications, vendor evaluation, and delivery terms."
        />
        <meta
          name="keywords"
          content="solar panel quality checklist India, B2B solar procurement, ALMM certified panels, IEC 61215 solar panels, Mono-PERC 550Wp procurement, solar panel specifications India, solar EPC vendor evaluation, government tender solar panels 2025"
        />
        <meta name="author" content="HeadsUp B2B Solar Research" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.headsupb2b.com/research/solar-panel-quality-checklist-b2b-procurement-india" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Solar Panel Quality Checklist for B2B Procurement in India (2025)" />
        <meta property="og:description" content="The complete B2B solar panel quality checklist — ALMM, IEC certifications, Mono-PERC specs, delivery terms and vendor evaluation for EPC contractors procuring for government projects in India." />
        <meta property="og:url" content="https://www.headsupb2b.com/research/solar-panel-quality-checklist-b2b-procurement-india" />
        <meta property="og:site_name" content="HeadsUp B2B" />
        <meta property="og:image" content="https://www.headsupb2b.com/solarPanelQualityChecklist.webp" />
        <meta property="article:published_time" content="2025-04-15" />
        <meta property="article:modified_time" content="2025-04-15" />
        <meta property="article:section" content="Solar Industry Guide" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Panel Quality Checklist for B2B Procurement in India (2025)" />
        <meta name="twitter:description" content="The complete B2B solar panel quality checklist — ALMM, IEC certifications, Mono-PERC specs, delivery terms and vendor evaluation." />
        <meta name="twitter:image" content="https://www.headsupb2b.com/solarPanelQualityChecklist.webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F6F8FA", color: "#1C2128", fontSize: 17, lineHeight: 1.75 }}>



        {/* ── HERO ── */}
        <section className="bg-headupb2b" style={{ position: "relative", overflow: "hidden", padding: "92px 0 64px" }}>

          <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "0 32px" }}>
            <div >
              <span className="inline-block bg-blue-500 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
                style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
              >
                Solar B2B Procurement Guide · India 2025
              </span>
            </div>

            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.12, color: "#FFFFFF", marginBottom: 22, maxWidth: 760, fontWeight: 700 }}>
              Solar Panel <em style={{ fontStyle: "italic", color: "#FF8C5A" }}>Quality Checklist</em> for B2B Procurement in India
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.62)", maxWidth: 620, marginBottom: 36, fontWeight: 300 }}>
              The complete, field-tested quality checklist for procurement teams, EPC contractors, and project developers sourcing solar panels for government and commercial projects in India — covering ALMM compliance, certifications, specifications, vendor evaluation, and delivery terms.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
              {["20 min read", "Updated April 2025", "For EPC Contractors & Procurement Managers", "Government Tender Compliant"].map((label) => (
                <span key={label} style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)", padding: "5px 14px", borderRadius: 100, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF6B35", flexShrink: 0 }} />
                  {label}
                </span>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, overflow: "hidden" }}>
              {[
                { num: "8", label: "Quality Checklists covering every procurement stage" },
                { num: "47", label: "Individual checklist items to verify before purchase" },
                { num: "100%", label: "Of govt tenders require ALMM-listed panels" },
                { num: "550–575", label: "Wp spec in every government solar tender 2024-25" },
              ].map(({ num, label }) => (
                <div key={num} style={{ background: "rgba(255,255,255,0.04)", padding: "18px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 26, fontWeight: 700, color: "#FFFFFF", lineHeight: 1, marginBottom: 4 }}>
                    <span style={{ color: "#FF8C5A" }}>{num}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAGE BODY ── */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 32px 100px" }}>

          {/* ── TOC ── */}
          <nav style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderTop: "4px solid #FF6B35", borderRadius: "0 0 8px 8px", padding: "28px 32px", margin: "48px 0 52px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#768390", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              What&apos;s inside this checklist guide
              <span style={{ flex: 1, height: 1, background: "#D0D7DE" }} />
            </div>
            <ol style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 40px", listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["#s1", "Why quality matters in B2B solar procurement"],
                ["#s2", "Checklist 1 — ALMM & regulatory compliance"],
                ["#s3", "Checklist 2 — Technical specifications"],
                ["#s4", "Checklist 3 — Physical & visual inspection"],
                ["#s5", "Checklist 4 — Performance & efficiency"],
                ["#s6", "Checklist 5 — Warranty & after-sales"],
                ["#s7", "Checklist 6 — Vendor evaluation"],
                ["#s8", "Checklist 7 — Delivery & logistics"],
                ["#s9", "Checklist 8 — Pre-shipment inspection"],
                ["#s10", "Mono-PERC vs Bifacial comparison"],
                ["#s11", "Red flags: when to reject a supplier"],
                ["#s12", "FAQ — B2B procurement questions"],
              ].map(([href, label], i) => (
                <li key={href}>
                  <a href={href} style={{ textDecoration: "none", fontSize: 13.5, color: "#444C56", display: "flex", alignItems: "baseline", gap: 10, padding: "6px 0" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#FF6B35", minWidth: 20, flexShrink: 0 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── S1: WHY QUALITY MATTERS ── */}
          <Section id="s1" num="SECTION 01" title="Why Quality Matters in B2B Solar Procurement">
            <p style={p}>
              In India&apos;s B2B solar market, <strong>a wrong procurement decision costs far more than the price difference between a good and a mediocre panel.</strong> A solar plant rated at 100 MW that underperforms by just 2% due to substandard panels loses approximately Rs.1.2–1.8 Cr in annual revenue over a 25-year asset life. Multiply that across a portfolio of RESCO projects, and the financial damage is catastrophic.
            </p>
            <p style={p}>
              Yet procurement decisions in solar are often made under extreme time pressure — EPC contractors face liquidated damage clauses for project delays, RESCO developers are under pressure from DISCOM deadlines, and procurement managers from Nagarpalika to Coal India are working with fixed tender timelines. This pressure is exactly when quality shortcuts happen.
            </p>
            <p style={p}>
              This checklist was built to eliminate those shortcuts. It covers every stage of the procurement process — from vendor onboarding to pre-shipment inspection — and is specifically calibrated for <strong>India&apos;s government tender environment in 2025</strong>, where ALMM compliance, MNRE specifications, and CEA standards are non-negotiable.
            </p>

            <div style={{ borderLeft: "4px solid #FF6B35", background: "#FFF1E5", padding: "22px 28px", margin: "32px 0", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 19, lineHeight: 1.5, color: "#0C2340", fontStyle: "italic", margin: 0 }}>
                &ldquo;A solar panel that costs Rs.1/Wp less but degrades 0.1% faster annually costs more over 25 years than the panel priced Rs.2/Wp higher. B2B procurement is a lifetime value decision, not a spot price decision.&rdquo;
              </p>
              <cite style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FF6B35", marginTop: 10, fontStyle: "normal" }}>
                — HeadsUp B2B Solar Research, 2025
              </cite>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, margin: "24px 0" }}>
              {[
                { num: "₹1.8 Cr", label: "Revenue loss per year", desc: "From 2% underperformance on a 100 MW RESCO project at Rs.3.10/kWh PPA tariff", type: "critical" },
                { num: "0.45%", label: "Acceptable annual degradation", desc: "Industry standard for Mono-PERC panels. Anything above 0.55%/yr is a rejection criterion for quality procurement", type: "important" },
                { num: "47", label: "Checklist items in this guide", desc: "Covering compliance, specifications, physical quality, performance, warranty, vendor, logistics, and inspection", type: "standard" },
              ].map(({ num, label, desc, type }) => {
                const colorMap = { critical: "#CF222E", important: "#0A7EA4", standard: "#1A7F37" };
                const borderMap = { critical: "#CF222E", important: "#0A7EA4", standard: "#1A7F37" };
                return (
                  <div key={num} style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderTop: `3px solid ${borderMap[type]}`, borderRadius: 8, padding: 20 }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 36, fontWeight: 700, lineHeight: 1, marginBottom: 4, color: colorMap[type] }}>{num}</div>
                    <div style={{ fontSize: 12, color: "#768390", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
                    <div style={{ fontSize: 13, color: "#444C56", marginTop: 10, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                );
              })}
            </div>
          </Section>

          <InlineCta
            title="Know which EPC companies are procuring panels right now?"
            desc="HeadsUp B2B tracks live solar tender awards across India — get the procurement contact before your competitor does."

          />

          {/* ── S2: ALMM COMPLIANCE ── */}
          <Section id="s2" num="SECTION 02" title="Checklist 1 — ALMM & Regulatory Compliance">
            <p style={p}>
              This is the most critical checklist for any procurement team sourcing panels for Indian government projects. Every item here is a <strong>binary pass/fail</strong> — there is no partial credit. A panel that fails any of these criteria cannot be used in government solar projects, regardless of price or quality.
            </p>
            <Callout variant="danger" icon="⚠" title="Zero-tolerance zone: ALMM non-compliance = contract termination">
              EPC contractors and RESCO developers who install non-ALMM panels in government projects face contract termination, recovery of government subsidies disbursed, and blacklisting from future tenders. Verify ALMM status on the MNRE website — not just the vendor&apos;s claim — before placing any order.
            </Callout>
            <ChecklistSection title="ALMM & Regulatory Compliance" badge="Mandatory — All Items" badgeColor="mandatory">
              <CheckItem icon="✓" iconVariant="green" title="ALMM Part-I Listing Verified" tag="ALMM" tagVariant="almm" desc="Specific model number AND watt-peak variant (e.g. 555 Wp, 560 Wp) must be on the current MNRE ALMM list. Download the latest list from mnre.gov.in — do not rely on vendor's claim or outdated documentation." />
              <CheckItem icon="✓" iconVariant="green" title="IEC 61215 Certificate Valid" tag="IEC" tagVariant="iec" desc="Design qualification and type approval for crystalline silicon PV modules. Certificate must be current (not expired) and issued by a NABL-accredited or internationally recognised testing laboratory. Check expiry date." />
              <CheckItem icon="✓" iconVariant="green" title="IEC 61730 Certificate Valid (Part 1 + Part 2)" tag="IEC" tagVariant="iec" desc="Safety qualification standard — Part 1 covers requirements, Part 2 covers testing procedures. Both parts must be certified. A panel with only Part 1 is non-compliant." />
              <CheckItem icon="✓" iconVariant="green" title="BIS CRS Registration Current" tag="BIS" tagVariant="bis" desc="Bureau of Indian Standards Compulsory Registration Scheme registration under Electronics & IT Goods (Requirements for Compulsory Registration) Order 2012. Must be in the manufacturer's name, not a distributor or trader." />
              <CheckItem icon="✓" iconVariant="green" title="Domestic Manufacturing Confirmed" tag="MNRE" tagVariant="mnre" desc="For DCR (Domestic Content Requirement) projects, the panel must be manufactured in India with minimum domestic value addition as per MNRE guidelines. Verify factory address on ALMM listing against delivery invoice." />
              <CheckItem icon="✓" iconVariant="green" title="Model Matches Tender Specification Exactly" desc="The model number, watt-peak, cell technology (Mono-PERC), and number of cells specified in the tender must exactly match the ALMM-listed model being procured. Any variation requires written technical justification in the bid documentation." />
              <CheckItem icon="!" iconVariant="amber" title="ALMM Listing Valid for Full Project Duration" desc="ALMM is updated quarterly. If your project delivery spans 6+ months, verify that the panel model will remain ALMM-listed through the full delivery window. Some manufacturers have had models delisted mid-project." />
            </ChecklistSection>
          </Section>

          {/* ── S3: TECHNICAL SPECIFICATIONS ── */}
          <Section id="s3" num="SECTION 03" title="Checklist 2 — Technical Specifications">
            <p style={p}>
              India&apos;s government solar tenders have converged on a remarkably consistent set of technical specifications in 2024-25. Use this section as both a procurement checklist and a supplier evaluation tool. Any deviation from these specifications requires written technical justification in the bid documentation.
            </p>

            {/* Spec Table */}
            <div style={{ background: "#FFFFFF", border: "1px solid #D0D7DE", borderRadius: 10, overflow: "hidden", margin: "24px 0" }}>
              {[
                { key: "Technology", val: <><span style={{ fontWeight: 700, color: "#FF6B35" }}>Mono-PERC</span> crystalline silicon — Half-cut cells (144 cells for 550–575 Wp)</> },
                { key: "Watt-Peak Range", val: <><span style={{ fontWeight: 700, color: "#FF6B35" }}>550–575 Wp</span> — Universal specification in all government tenders 2024-25</> },
                { key: "Cell Configuration", val: <><span style={{ fontWeight: 700, color: "#FF6B35" }}>144 half-cut cells</span>(6×24 configuration) — reduces resistive losses</> },
                { key: "Open Circuit Voltage (Voc)", val: <>Typically <span style={{ fontWeight: 700, color: "#FF6B35" }}>49.5–51.5 V</span> — verify against inverter string design</> },
                { key: "Short Circuit Current (Isc)", val: <>Typically <span style={{ fontWeight: 700, color: "#FF6B35" }}>13.8–14.5 A</span> — critical for AJB and cable sizing</> },
                { key: "Module Efficiency", val: <>Minimum <span style={{ fontWeight: 700, color: "#FF6B35" }}>21.0%</span> at STC (Standard Test Conditions)</> },
                { key: "Temperature Coefficient", val: <>Maximum <span style={{ fontWeight: 700, color: "#FF6B35" }}>−0.35%/°C</span> (Pmax) — critical for Rajasthan & Gujarat climate</> },
                { key: "Operating Temperature", val: "−40°C to +85°C — verify for desert conditions" },
                { key: "Frame Material", val: <><span style={{ fontWeight: 700, color: "#FF6B35" }}>Anodised aluminium alloy</span> — minimum 35mm depth for ground-mount wind loads</> },
                { key: "Glass Type", val: <><span style={{ fontWeight: 700, color: "#FF6B35" }}>3.2mm tempered low-iron</span> anti-reflective coated glass</> },
                { key: "Backsheet", val: <><span style={{ fontWeight: 700, color: "#FF6B35" }}>White PVF/PVDF composite</span> — dual-layer preferred for 25yr outdoor exposure</> },
                { key: "Connector Type", val: <><span style={{ fontWeight: 700, color: "#FF6B35" }}>MC4 or MC4-compatible</span> — must match DC cable and AJB connectors on site</> },
                { key: "Wind / Snow Load", val: <>Minimum <span style={{ fontWeight: 700, color: "#FF6B35" }}>2400 Pa front / 2400 Pa rear</span> — verify against site wind zone</> },
              ].map(({ key, val }, i) => (
                <div key={key} style={{ display: "grid", gridTemplateColumns: "200px 1fr", borderBottom: "1px solid #D0D7DE", background: i % 2 === 1 ? "#F8FAFC" : "#FFFFFF" }}>
                  <div style={{ padding: "13px 18px", fontSize: 13, fontWeight: 600, color: "#444C56", borderRight: "1px solid #D0D7DE", display: "flex", alignItems: "center" }}>{key}</div>
                  <div style={{ padding: "13px 18px", fontSize: 13.5, color: "#1C2128", display: "flex", alignItems: "center", gap: 8 }}>{val}</div>
                </div>
              ))}
            </div>

            <ChecklistSection title="Technical Specification Checklist" badge="Critical — Reject on Failure" badgeColor="critical">
              <CheckItem icon="✓" iconVariant="green" title="Wattage within specified range (550–575 Wp)" desc="Verify STC (Standard Test Conditions) rating. Reject panels rated below the specified Wp. Also verify that power tolerance is stated as 0/+5W — never accept negative tolerance panels for government projects." />
              <CheckItem icon="✓" iconVariant="green" title="Module efficiency ≥ 21.0% at STC" desc="Higher efficiency = fewer panels needed for same output = lower BOS cost. Anything below 20.5% should be rejected for utility-scale procurement in 2025." />
              <CheckItem icon="✓" iconVariant="green" title="Temperature coefficient (Pmax) ≤ -0.35%/°C" desc="In Gujarat and Rajasthan, panel temperatures regularly reach 65–75°C in summer. A panel with -0.40%/°C vs -0.35%/°C loses an additional 0.5% output per degree — significant at scale." />
              <CheckItem icon="✓" iconVariant="green" title="Connector compatibility confirmed with on-site BOS" desc="MC4 connector compatibility must be verified against the specific cable and AJB connectors already specified or procured. Mixing connector brands without verification causes micro-arcing and fire risk." />
              <CheckItem icon="!" iconVariant="amber" title="Power sorting / binning tolerance ≤ ±2.5 Wp" desc="For large arrays, loose binning (±5 Wp) causes string mismatch losses. Specify tight binning (±2.5 Wp or better) for strings above 25 panels." />
            </ChecklistSection>
          </Section>

          {/* ── S4: PHYSICAL INSPECTION ── */}
          <Section id="s4" num="SECTION 04" title="Checklist 3 — Physical & Visual Inspection">
            <p style={p}>
              Physical inspection at the factory or at goods receipt is the last line of defence before installation. Many quality defects that cause premature panel failure — micro-cracks, delamination, poor soldering — are invisible to the naked eye at goods receipt but detectable through EL (electroluminescence) imaging. Insist on it for orders above 500 panels.
            </p>
            <Callout variant="tip" icon="💡" title="Always request EL imaging for orders above 500 panels">
              Electroluminescence (EL) imaging reveals micro-cracks, broken cells, and soldering defects that are completely invisible to visual inspection. EL testing adds Rs.2–5 per panel but can prevent a 2–5% lifetime yield loss from undetected defects. For PM-KUSUM and utility-scale projects, EL testing is essential — not optional.
            </Callout>
            <ChecklistSection title="Physical & Visual Inspection Checklist" badge="Critical — Inspect Every Pallet" badgeColor="critical">
              <CheckItem icon="✓" iconVariant="green" title="No visible cracks, chips or breakage in glass" desc="Use a strong torch at a 45° angle across the glass surface. Even hairline cracks that don't affect initial output will propagate under thermal cycling and wind load, causing accelerated failure." />
              <CheckItem icon="✓" iconVariant="green" title="No cell cracks visible through glass" desc="Cracked cells cause hot spots that reduce output and can cause backsheet burning. Check under bright light. Request EL images from manufacturer's factory QC for any lot with visible concern." />
              <CheckItem icon="✓" iconVariant="green" title="No delamination, bubbles or yellowing in encapsulant" desc="Delamination creates moisture ingress pathways that cause corrosion and power loss. Any visible bubbles, waves, or yellowing in the EVA encapsulant layer is an immediate rejection criterion." />
              <CheckItem icon="✓" iconVariant="green" title="Frame welds intact, no cracks or gaps at corners" desc="Inspect all four frame corners. Poor corner welds are a structural failure point under wind load. Also check that the frame is flush with the glass edge — gaps indicate manufacturing tolerance issues." />
              <CheckItem icon="✓" iconVariant="green" title="Junction box sealed, no cracks or deformation" desc="The junction box must be fully sealed against water ingress (IP68). Check the silicone seal around the box perimeter. Any gap, crack, or deformation is a rejection criterion for outdoor ground-mounted installations." />
              <CheckItem icon="✓" iconVariant="green" title="Cable connectors undamaged and correctly polarised" desc="Check that + and − connectors are clearly marked and correctly oriented. Verify connector locking mechanism works smoothly. Damaged or mismarked connectors cause installation errors and reverse polarity faults." />
              <CheckItem icon="✓" iconVariant="green" title="Serial number and model label intact and legible" desc="Every panel must have a clearly legible label with model number, serial number, electrical specifications, and manufacturing date. Missing or illegible labels make warranty claims impossible and ALMM traceability invalid." />
              <CheckItem icon="!" iconVariant="amber" title="Backsheet undamaged — no scratches, punctures or discolouration" desc="The backsheet is the last barrier against moisture ingress from the rear. Any puncture or deep scratch is a rejection criterion. Surface scratches may be acceptable if they don't penetrate through the outer layer." />
              <CheckItem icon="!" iconVariant="amber" title="Packaging intact — no impact damage to boxes" desc="Inspect pallets for forklift damage, corner impacts, and moisture staining before unboxing. Damaged packaging should be photographed and documented before any panels are accepted into the inventory." />
            </ChecklistSection>
          </Section>

          {/* ── S5: PERFORMANCE ── */}
          <Section id="s5" num="SECTION 05" title="Checklist 4 — Performance & Efficiency Verification">
            <p style={p}>
              Panel performance cannot be verified by inspection alone. Use flash testing (I-V curve tracer) at goods receipt to verify actual output against the nameplate rating. For large procurement above 1,000 panels, conduct flash testing on a statistically significant sample — minimum 10% of the lot.
            </p>
            <ChecklistSection title="Performance & Efficiency Checklist" badge="Important — Sample Test" badgeColor="important">
              <CheckItem icon="✓" iconVariant="green" title="Factory flash test report verified for each batch" desc="Request the I-V curve flash test report for each production batch (typically identified by a batch or lot number on the panel label). The flash test report should show Pmax, Voc, Isc, Vmp, and Imp values at STC for every panel in the batch." />
              <CheckItem icon="✓" iconVariant="green" title="On-site spot flash test conducted on 10% sample" desc="For orders above 1,000 panels, conduct independent flash testing at goods receipt. Use a calibrated I-V curve tracer. Reject the lot if more than 1% of sampled panels measure more than 3% below their nameplate Wp rating." />
              <CheckItem icon="✓" iconVariant="green" title="Performance ratio (PR) baseline established" desc="For RESCO projects, establish a PR baseline measurement within 30 days of commissioning. This creates a documented reference against which future degradation can be measured — critical for warranty claims in Year 10+." />
              <CheckItem icon="!" iconVariant="amber" title="EL imaging conducted on minimum 5% of lot" desc="EL (electroluminescence) imaging reveals micro-cracks and soldering defects that reduce long-term performance. Request EL images from the manufacturer's QC process. Any panel showing defects on more than 3% of cell area should be rejected." />
            </ChecklistSection>
          </Section>

          {/* ── S6: WARRANTY ── */}
          <Section id="s6" num="SECTION 06" title="Checklist 5 — Warranty & After-Sales Terms">
            <p style={p}>
              For PM-KUSUM RESCO projects with 25-year lifetimes and utility-scale projects above 100 MW, the warranty terms are as important as the panel price. A vendor who cannot support a warranty claim in Year 18 is effectively offering no warranty at all. Evaluate warranty terms with the same rigour as technical specifications.
            </p>
            <ChecklistSection title="Warranty & After-Sales Checklist" badge="Important — Verify Documentation" badgeColor="important">
              <CheckItem icon="✓" iconVariant="green" title="Product warranty minimum 12 years (30 years preferred)" desc="Product warranty covers defects in materials and workmanship. 12 years is the minimum acceptable. For RESCO projects, demand 30-year product warranty where available — market-leading manufacturers now offer this." />
              <CheckItem icon="✓" iconVariant="green" title="Performance warranty — 25 years linear, 80% at end of life" desc="Standard linear performance warranty: max 2.5% degradation in Year 1, then max 0.45%/year, with minimum 80% of rated power at Year 25. Verify these exact numbers are in the warranty document — not just marketing material." />
              <CheckItem icon="✓" iconVariant="green" title="Warranty registered in India — Indian law governing" desc="Warranty agreements must be enforceable under Indian law. Avoid agreements that specify foreign arbitration only — they are practically unenforceable for field warranty claims in India." />
              <CheckItem icon="✓" iconVariant="green" title="Replacement/repair response time committed in writing" desc="Insist on a written service level agreement: maximum 30 days for replacement panel delivery to site, maximum 7 days for technical assessment response. Without written SLA, warranty claims become open-ended disputes." />
              <CheckItem icon="!" iconVariant="amber" title="Manufacturer financial stability checked" desc="A panel warranty from a company that no longer exists is worthless. Review the manufacturer's audited financial statements or credit rating. For 25-year RESCO projects, consider requiring a warranty insurance policy from a third party." />
            </ChecklistSection>
          </Section>

          {/* ── S7: VENDOR EVALUATION ── */}
          <Section id="s7" num="SECTION 07" title="Checklist 6 — Vendor Evaluation">
            <p style={p}>
              Before placing your first order with any solar panel manufacturer, conduct a structured vendor evaluation. The following checklist ensures you are not relying on marketing claims — you are evaluating verifiable facts about the vendor&apos;s capability, track record, and financial health.
            </p>
            <ChecklistSection title="Vendor Evaluation Checklist" badge="Important — Complete Before First Order" badgeColor="important">
              <CheckItem icon="✓" iconVariant="green" title="Manufacturing capacity ≥ 2× your annual order volume" desc="A manufacturer whose total capacity is barely 2× your order cannot absorb production disruptions without delaying your delivery. Ask for the MNRE-reported annual manufacturing capacity figure." />
              <CheckItem icon="✓" iconVariant="green" title="Factory location verified — Domestic manufacturing confirmed" desc="The factory address on the ALMM listing must match the address on the invoice and delivery challan. Some distributors misrepresent imported panels as domestically manufactured. Request a factory inspection or third-party audit report." />
              <CheckItem icon="✓" iconVariant="green" title="Delivery track record to remote project sites verified" desc="Ask for 3 references from EPC contractors who have received delivery to remote sites (Kutch, Jaisalmer, Barmer, Chambal, etc.). Verify delivery timelines and damage-in-transit rates from references — not from the manufacturer's sales team." />
              <CheckItem icon="✓" iconVariant="green" title="Government project track record confirmed" desc="Verify at least 3 completed government projects where the vendor's panels were specified and installed. Cross-check against public tender award data (BidAssist, GEM portal). Recent project references are more valuable than references from 5+ years ago." />
              <CheckItem icon="✓" iconVariant="green" title="Payment terms consistent with market norms" desc="Market standard is 20–30% advance, 60–70% on pre-shipment inspection clearance, and 10% on commissioning or after 90 days. Any demand for 100% advance is a significant red flag and procurement risk." />
              <CheckItem icon="!" iconVariant="amber" title="Sample panel provided and tested before bulk order" desc="Always request a sample panel before placing a bulk order. Test the sample against your full technical specification checklist — and flash test it if possible. A vendor who refuses to provide a sample panel for testing has something to hide." />
            </ChecklistSection>
          </Section>

          {/* ── S8: DELIVERY & LOGISTICS ── */}
          <Section id="s8" num="SECTION 08" title="Checklist 7 — Delivery & Logistics">
            <p style={p}>
              Solar panel delivery to remote project sites in India is where many procurement processes break down. EPC contractors in Kutch, Gujarat face challenges that do not exist in Pune or Chennai — summer temperatures above 48°C affect packaging integrity, road conditions to Khavda Solar Park are demanding, and a delay of 2 weeks can trigger liquidated damages clauses worth crores.
            </p>
            <ChecklistSection title="Delivery & Logistics Checklist" badge="Important — Confirm Before Order" badgeColor="important">
              <CheckItem icon="✓" iconVariant="green" title="Committed delivery date in purchase order" desc="Delivery date must be a specific calendar date — not '6–8 weeks from order.' For projects with 270-day contract periods, every week of panel delivery delay cascades into installation delays and LD exposure." />
              <CheckItem icon="✓" iconVariant="green" title="Packaging standards for outdoor summer transport" desc="Panels transported in open trucks through Rajasthan or Gujarat in May-June are exposed to 50°C+ ambient temperatures. Verify that the vendor uses corrugated cardboard interleaving, corner protectors, and moisture-resistant outer wrapping." />
              <CheckItem icon="✓" iconVariant="green" title="Insurance coverage confirmed — all-risk transit insurance" desc="Insist on all-risk transit insurance (not just basic carrier liability) from manufacturer's warehouse to project site. The transit risk on a Rs.5 Cr panel order to Khavda is substantial — standard carrier liability covers only Rs.10,000 per panel at most." />
              <CheckItem icon="✓" iconVariant="green" title="Delivery phasing aligned with installation schedule" desc="For projects above 5 MW, request phased delivery — 30% upfront, then weekly batches aligned with the installation crew's daily capacity. Bulk delivery of all panels at once creates storage challenges and increases damage risk at site." />
              <CheckItem icon="!" iconVariant="amber" title="Penalty clause for late delivery in purchase order" desc="Mirror the LD clause in your project contract with the awarding authority into your panel supply purchase order. If your project contract has 0.5%/week LD for delays, include a proportionate penalty for panel delivery delays to protect your commercial position." />
            </ChecklistSection>
          </Section>

          {/* ── S9: PRE-SHIPMENT INSPECTION ── */}
          <Section id="s9" num="SECTION 09" title="Checklist 8 — Pre-Shipment Inspection Protocol">
            <p style={p}>
              Pre-shipment inspection (PSI) at the manufacturer&apos;s factory is the most cost-effective quality intervention in the solar procurement process. A third-party PSI costs Rs.2–8 per panel but prevents the far greater cost of receiving and installing defective panels on a remote project site — where rejection, return, and replacement logistics become a Rs.50–100 Wp nightmare.
            </p>
            <ChecklistSection title="Pre-Shipment Inspection Checklist" badge="Recommended — All Orders Above 500 Panels" badgeColor="recommended">
              <CheckItem icon="i" iconVariant="blue" title="Engage a third-party inspection agency (SGS, Bureau Veritas, TÜV)" desc="Use an internationally recognised inspection agency for orders above Rs.50 L. Provide them with your full technical specification checklist and a clear accept/reject protocol. Never rely on manufacturer's own QC team as the sole inspection authority." />
              <CheckItem icon="i" iconVariant="blue" title="AQL (Acceptable Quality Level) sampling plan agreed" desc="Agree on AQL level II, 1.0 (critical defects) sampling plan before inspection. For 1,000 panels, this requires inspecting approximately 80 panels with zero critical defects allowed and maximum 1 major defect." />
              <CheckItem icon="i" iconVariant="blue" title="EL (electroluminescence) imaging on minimum 5% sample" desc="EL imaging reveals micro-cracks, broken fingers, and soldering defects. Request factory EL images for all sampled panels. Any panel showing cracks covering more than 3% of cell area should be rejected." />
              <CheckItem icon="i" iconVariant="blue" title="Flash test at factory confirmed against sample certificates" desc="The inspector should witness live flash tests on selected panels and compare I-V curve results against the factory's own flash certificates. Significant variation between claimed and measured output triggers a 100% lot rejection." />
              <CheckItem icon="i" iconVariant="blue" title="ALMM and certification documents verified original — not photocopies" desc="Inspect original certification documents with issuing laboratory signatures. Cross-reference certificate numbers on the IEC testing body's online registry. Certificate fraud — while uncommon — has been documented in the Indian solar supply chain." />
              <CheckItem icon="i" iconVariant="blue" title="Packing inspection before loading — all cartons" desc="The inspector must supervise the packing of inspected lots into cartons and pallet sealing. A 'passed' lot that is subsequently damaged in poor packing voids the inspection value. Insist on sealed cartons with inspection stickers before any truck loading." />
            </ChecklistSection>
          </Section>

          {/* ── S10: MONO-PERC VS BIFACIAL ── */}
          <Section id="s10" num="SECTION 10" title="Mono-PERC vs Bifacial: Which to Procure in 2025?">
            <p style={p}>
              The most common specification question from EPC contractors and procurement teams in 2025 is whether to specify Mono-PERC or bifacial Mono-PERC panels for large ground-mounted government projects. Here is the definitive B2B answer based on India-specific conditions.
            </p>

            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, borderRadius: 8, overflow: "hidden", border: "1px solid #D0D7DE" }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Criteria", "Mono-PERC (Standard)", "Bifacial Mono-PERC", "B2B Verdict"].map((th) => (
                      <th key={th} style={{ padding: "12px 16px", textAlign: "left", color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: 12, letterSpacing: "0.04em" }}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ALMM availability", "Very high — most brands", "Growing — limited brands", { text: "Mono-PERC wins", color: "#1A7F37" }],
                    ["Govt tender compliance", "100% compliant", "Compliant where specified", { text: "Mono-PERC wins", color: "#1A7F37" }],
                    ["Price (ex-factory)", "Rs.18–22/Wp", "Rs.22–28/Wp", { text: "Mono-PERC wins", color: "#1A7F37" }],
                    ["Efficiency", "21.0–22.5%", "22.0–23.5% (front only)", { text: "Bifacial slight edge", color: "#92700A" }],
                    ["Energy yield gain", "Baseline", "+8–15% in ideal conditions", { text: "Bifacial wins (if soil reflectance ≥ 20%)", color: "#92700A" }],
                    ["Hot climate performance", "Good", "Marginally better (glass-glass)", { text: "Bifacial slight edge", color: "#92700A" }],
                    ["PM-KUSUM A compatibility", "Universal", "Project-specific approval needed", { text: "Mono-PERC wins", color: "#1A7F37" }],
                    ["EPC contractor preference", "Universal — all EPC", "Large utility EPC only", { text: "Mono-PERC wins", color: "#1A7F37" }],
                  ].map(([criteria, mono, bifacial, verdict], i) => (
                    <tr key={criteria} style={{ background: i % 2 === 1 ? "#F8FAFC" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "#1C2128", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", lineHeight: 1.5 }}>{criteria}</td>
                      <td style={{ padding: "12px 16px", color: "#444C56", borderBottom: "1px solid #D0D7DE", verticalAlign: "top" }}>{mono}</td>
                      <td style={{ padding: "12px 16px", color: "#444C56", borderBottom: "1px solid #D0D7DE", verticalAlign: "top" }}>{bifacial}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", fontWeight: 700, color: verdict.color }}>{verdict.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="success" icon="✓" title="B2B recommendation for 2025: Mono-PERC 550–575 Wp for all government projects">
              For EPC contractors executing PM-KUSUM, Nagarpalika rooftop, and PSU projects in 2025 — Mono-PERC 550–575 Wp is the right specification. It is universally ALMM-available, government tender compliant, competitively priced, and has the most mature domestic supply chain. Bifacial is a valid upgrade for open-land utility projects above 50 MW where the additional LCOE benefit justifies the premium and the project timeline allows for technical evaluation.
            </Callout>
          </Section>

          {/* ── S11: RED FLAGS ── */}
          <Section id="s11" num="SECTION 11" title="Red Flags: When to Reject a Solar Panel Supplier">
            <p style={p}>
              After years of B2B solar procurement intelligence across India, these are the signals that should immediately trigger a supplier rejection or at minimum a deep-dive audit before any purchase order is placed.
            </p>
            <Callout variant="danger" icon="✗" title="Immediate rejection: ALMM listing cannot be independently verified">
              If a vendor claims ALMM listing but the specific model number and Wp variant cannot be found on the current MNRE ALMM list downloaded directly from mnre.gov.in — reject immediately. Do not accept screenshots, PDFs, or letters from the vendor as proof. Verify on the MNRE website yourself.
            </Callout>

            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, borderRadius: 8, overflow: "hidden", border: "1px solid #D0D7DE" }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Red Flag", "Why It Matters", "Action"].map((th) => (
                      <th key={th} style={{ padding: "12px 16px", textAlign: "left", color: "rgba(255,255,255,0.9)", fontWeight: 600, fontSize: 12, letterSpacing: "0.04em" }}>{th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Price significantly below market rate (Rs.14/Wp or less)", "Sub-market pricing in 2025 indicates either non-ALMM panels, false wattage rating, or factory seconds being sold as Grade A", { text: "Reject", color: "#CF222E" }],
                    ["Cannot provide original IEC certificates on request", "Certificate fraud or expired certifications are a documented issue in Indian solar supply chain", { text: "Reject", color: "#CF222E" }],
                    ["Refuses third-party pre-shipment inspection", "Legitimate manufacturers welcome third-party inspection. Refusal signals quality control concerns", { text: "Reject", color: "#CF222E" }],
                    ["Factory address differs from ALMM listing", "Indicates possible use of contract manufacturing or re-labelling of imported panels as domestic", { text: "Reject", color: "#CF222E" }],
                    ["100% advance payment required", "Market norm is 20–30% advance. 100% advance demand removes all procurement leverage if quality is substandard", { text: "Negotiate", color: "#92700A" }],
                    ["Cannot provide EL imaging from factory QC", "Any modern solar panel factory runs EL testing. \"We don't have EL equipment\" for a manufacturer claiming ALMM listing is a serious concern", { text: "Audit first", color: "#92700A" }],
                    ["No track record of delivery to remote project sites", "Logistics to Khavda, Jaisalmer, or Barmer is a different challenge from delivery to Ahmedabad. No remote delivery track record = significant execution risk", { text: "Pilot order only", color: "#92700A" }],
                    ["Warranty not in writing — only verbal commitment", "A verbal warranty is completely unenforceable. Any vendor unwilling to put warranty terms in writing has no intention of honouring them", { text: "Reject", color: "#CF222E" }],
                  ].map(([flag, why, action], i) => (
                    <tr key={flag} style={{ background: i % 2 === 1 ? "#F8FAFC" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "#1C2128", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", lineHeight: 1.55 }}>{flag}</td>
                      <td style={{ padding: "12px 16px", color: "#444C56", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", lineHeight: 1.55 }}>{why}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #D0D7DE", verticalAlign: "top", fontWeight: 700, color: action.color }}>{action.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── S12: FAQ ── */}
          <Section id="s12" num="SECTION 12" title="FAQ — B2B Solar Procurement Questions">
            <p style={p}>
              The most common questions from procurement managers, EPC contractors, and RESCO developers procuring solar panels for government and commercial projects in India.
            </p>
            <FaqItem
              question="What certifications are mandatory for solar panels in Indian government projects?"
              answer="Solar panels for government projects must have IEC 61215 (design qualification), IEC 61730 Part 1 and Part 2 (safety qualification), BIS CRS registration, and must be on the MNRE ALMM Part-I list. All four are mandatory — no exceptions. Additionally, for DCR projects, the panel must be manufactured in India with minimum domestic value addition as per MNRE guidelines."
            />
            <FaqItem
              question="What is the standard solar panel specification for government tenders in India 2025?"
              answer="The universal specification in 2024-25 is: Mono-PERC crystalline silicon, 550–575 Wp, 144 half-cut cells, minimum 21% efficiency, ALMM Part-I listed, IEC 61215 and IEC 61730 certified, BIS CRS registered, positive power tolerance (+0/+5W), temperature coefficient (Pmax) ≤ -0.35%/°C, and a 25-year linear performance warranty with maximum 0.45%/year degradation. This specification appears in 100% of government solar tenders in 2024-25."
            />
            <FaqItem
              question="How do I verify ALMM listing for a specific solar panel model?"
              answer="Go directly to mnre.gov.in and download the current ALMM list (updated quarterly). Search for the manufacturer name and specific model number — including the watt-peak variant. A 555 Wp model and a 560 Wp model from the same manufacturer may have different ALMM status. Never rely on a vendor's certificate or marketing material — always verify on the official MNRE website."
            />
            <FaqItem
              question="What is an acceptable annual degradation rate for Mono-PERC panels in India?"
              answer="The industry standard for Mono-PERC panels is: first-year degradation maximum 2.5%, then maximum 0.45%/year linear degradation, with minimum 80% of rated power output at Year 25. For RESCO projects with 25-year PPAs, a degradation rate of 0.40%/year vs 0.45%/year results in approximately 1.25% more power output at Year 25 — equivalent to roughly 12–15 additional panels worth of output on a 1 MW project."
            />
            <FaqItem
              question="Should I choose Mono-PERC or Bifacial panels for PM-KUSUM projects?"
              answer="For PM-KUSUM Component A projects in 2025, specify Mono-PERC 550–575 Wp. Bifacial panels offer 8–15% yield gain in ideal conditions (high albedo ground, single-axis tracking, optimal tilt), but PM-KUSUM projects are predominantly fixed-tilt on ground cover that doesn't maximise bifacial gain. Additionally, ALMM availability for bifacial models is more limited, and bifacial panels carry a 20–30% price premium that rarely generates sufficient additional revenue to justify in tariff-based RESCO projects."
            />
            <FaqItem
              question="What price should I expect to pay for ALMM-listed Mono-PERC 550–575 Wp panels in 2025?"
              answer="Ex-factory pricing for ALMM-listed Mono-PERC 550–575 Wp panels from established Indian manufacturers was approximately Rs.18–22 per Wp in early 2025, depending on order volume and payment terms. Add Rs.0.50–1.50/Wp for logistics to remote Gujarat or Rajasthan sites. Be very cautious of pricing below Rs.16/Wp — at that level, panel quality, ALMM compliance, or both are likely to be compromised."
            />
            <FaqItem
              question="How many panels should I flash-test on goods receipt?"
              answer="Use AQL Level II sampling. For a lot of 1,000 panels, inspect approximately 80 panels using I-V flash testing. For a lot of 5,000 panels, inspect approximately 200 panels. Reject the entire lot if more than 1% of sampled panels fall more than 3% below their nameplate Wp rating. For EL imaging, test a minimum 5% sample — approximately 50 panels per 1,000-panel lot."
            />
          </Section>

          {/* ── MAIN CTA ── */}
          <div className="bg-headupb2b" style={{
            borderRadius: 12, padding: "52px 48px", margin: "60px 0 0",
            textAlign: "center", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "relative" }}>
              <span style={{
                display: "inline-block", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#FF6B35", border: "1px solid rgba(255,107,53,0.3)",
                padding: "5px 14px", borderRadius: 4, marginBottom: 20,
              }}>
                HeadsUp B2B · Solar Intelligence Platform
              </span>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 4vw, 36px)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: 16, fontWeight: 700 }}>
                Find Solar Panel Suppliers Winning Government Tenders — Before Your Competitor Does
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.65 }}>
                HeadsUp B2B tracks live solar tender award data across India — so you always know which EPC contractors just won a project, what specs they need, and how to reach the procurement contact.
              </p>
              <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
                {["Live GEM & BidAssist award alerts", "ALMM-brand tracking by state", "EPC contractor contact database", "PM-KUSUM project pipeline", "Gujarat & Rajasthan focus"].map((f) => (
                  <span key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                    <span style={{ color: "#FF8C5A", fontWeight: 700 }}>✓</span> {f}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="block text-center text-white font-bold text-[13px] px-4 py-[11px] rounded-[7px] no-underline transition-opacity hover:opacity-90"
                  onClick={() => setShowRequestQuote(true)}
                  style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
                >
                  Request a Quote →
                </button>
              </div>
              <p style={{ marginTop: 20, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                No credit card required · Used by 200+ solar EPC contractors &amp; panel suppliers across India
              </p>
            </div>
          </div>

          {/* ── ARTICLE FOOTER ── */}
          <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid #D0D7DE", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#768390" }}>Published April 2025 · HeadsUp B2B Solar Research</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Solar B2B", "ALMM", "Mono-PERC", "EPC India", "PM-KUSUM", "Procurement", "IEC 61215"].map((tag) => (
                <a key={tag} href="#" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 10px", border: "1px solid #D0D7DE", borderRadius: 4, color: "#768390", textDecoration: "none" }}>
                  {tag}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      {showRequestQuote && (
        <GetInTouch onClose={() => setShowRequestQuote(false)} />
      )}
    </>
  );
}