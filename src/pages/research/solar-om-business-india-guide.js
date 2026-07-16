"use client";

import Head from "next/head";
import Link from "next/link";

/* ─── Reusable Section wrapper ─── */
function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-6">
      <h2
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "32px",
          color: "#181C18",
          lineHeight: 1.2,
          marginBottom: "22px",
          paddingTop: "56px",
          fontWeight: 700,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Callout variants ─── */
function Callout({ variant = "green", icon, title, children }) {
  const map = {
    green: {
      wrap: { background: "#F0FAF5", border: "1px solid #9FD4BC", borderRadius: 6 },
      title: { color: "#0D4A2F" },
      body: { color: "#0D4A2F" },
    },
    amber: {
      wrap: { background: "#FEF3C7", border: "1px solid #F5D48A", borderRadius: 6 },
      title: { color: "#7A4800" },
      body: { color: "#8A5500" },
    },
    blue: {
      wrap: { background: "#E8F0FA", border: "1px solid #A8C4E8", borderRadius: 6 },
      title: { color: "#1E3A5F" },
      body: { color: "#284F7A" },
    },
    red: {
      wrap: { background: "#FDECEA", border: "1px solid #F5B8B2", borderRadius: 6 },
      title: { color: "#C0392B" },
      body: { color: "#9A2E24" },
    },
    purple: {
      wrap: { background: "#F4F1FA", border: "1px solid #C9B8E8", borderRadius: 6 },
      title: { color: "#5E3F99" },
      body: { color: "#46306F" },
    },
  };
  const s = map[variant];
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: "20px 24px",
        margin: "28px 0",
        alignItems: "flex-start",
        ...s.wrap,
      }}
    >
      <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <strong
          style={{ display: "block", fontSize: 14, marginBottom: 5, ...s.title }}
        >
          {title}
        </strong>
        <p style={{ fontSize: 14, margin: 0, lineHeight: 1.6, ...s.body }}>
          {children}
        </p>
      </div>
    </div>
  );
}

/* ─── Badge ─── */
function Badge({ variant, children }) {
  const map = {
    green: { background: "#D6F0E2", color: "#0D4A2F" },
    blue: { background: "#E8F0FA", color: "#1E3A5F" },
    amber: { background: "#FEF3C7", color: "#7A4800" },
    red: { background: "#FDECEA", color: "#C0392B" },
    purple: { background: "#F4F1FA", color: "#5E3F99" },
  };
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 9px",
        borderRadius: 3,
        letterSpacing: "0.03em",
        ...map[variant],
      }}
    >
      {children}
    </span>
  );
}

/* ─── HR Rule ─── */
function Rule() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #DDE8DB",
        margin: "0",
      }}
    />
  );
}

/* ─── Shared paragraph style ─── */
const p = {
  marginBottom: 18,
  color: "#3A4238",
  fontSize: 17,
  lineHeight: 1.78,
};

const h3Style = {
  fontSize: 18,
  fontWeight: 600,
  color: "#5E3F99",
  margin: "36px 0 12px",
};

export default function SolarOMBusinessGuidePage() {
  return (
    <>
      <Head>
        <title> How to Build a Solar O&M Business in India | Complete Guide 2025</title>
        <meta
          name="description"
          content="Learn how to start and grow a profitable solar O&M business in India. Covers licensing, team building, pricing, tools, contracts, and scaling strategies for 2025 and beyond."
        />
        <meta
          name="keywords"
          content="Solar O&M India, Solar Operations Maintenance, Performance Ratio, RESCO, ALMM, India solar 2025, MNRE, BESS O&M"
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/solar-om-business-india-guide"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="How to Build a Solar O&M Business in India | Complete Guide 2025"
        />
        <meta
          property="og:description"
          content="Learn how to start and grow a profitable solar O&M business in India. Covers licensing, team building, pricing, tools, contracts, and scaling strategies for 2025 and beyond."
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/solar-om-business-india-guide"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta property="og:image" content="https://www.headsupb2b.com/O&M-Business-in-India.webp" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="How to Build a Solar O&M Business in India | Complete Guide 2025"
        />
        <meta
          name="twitter:description"
          content="Learn how to start and grow a profitable solar O&M business in India. Covers licensing, team building, pricing, tools, contracts, and scaling strategies for 2025 and beyond."
        />
        <meta name="twitter:image" content="https://www.headsupb2b.com/O&M-Business-in-India.webp" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&family=DM+Sans:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#F7FAF7",
          color: "#181C18",
          fontSize: 17,
          lineHeight: 1.78,
        }}
      >
        {/* ── HERO ── */}
        <div className="bg-headupb2b" style={{ position: "relative", overflow: "hidden" }}>
          {/* gradient stripe */}
          <div
            style={{
              height: 5,
              background:
                "linear-gradient(90deg, #5E3F99 0%, #F2B705 50%, #5E3F99 100%)",
            }}
          />
          <div
            style={{
              padding: "72px 40px 68px",
              maxWidth: 860,
              margin: "0 auto",
              position: "relative",
            }}
          >
            <span
              className="inline-block text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
              style={{
                background: "#00d4f5",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 15px rgba(0,212,245,0.35)",
              }}
            >
              HEADSUP B2B FOUNDER&apos;S PLAYBOOK 
            </span>

            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(30px, 4.5vw, 52px)",
                color: "#FFFFFF",
                lineHeight: 1.18,
                marginBottom: 22,
                maxWidth: 720,
                fontWeight: 700,
              }}
            >
              How to build a{" "}
              <span style={{ fontStyle: "italic", color: "#F2B705" }}>
                solar O&amp;M business
              </span>{" "}
              in India.
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.62)",
                maxWidth: 620,
                lineHeight: 1.65,
                marginBottom: 40,
              }}
            >
              India crossed 150.26 GW of installed solar capacity in March 2026 — adding
              a record 44.61 GW in a single fiscal year. Behind every megawatt is a
              25-year operations and maintenance annuity. This is the founder&apos;s
              guide to capturing it.
            </p>

            {/* meta strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, auto)",
                gap: 36,
                paddingTop: 26,
                borderTop: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              {[
                ["Published", "15 Sep 2025"],
                ["Updated", "05 May 2026"],
                ["Read time", "22 minutes"],
                ["Verified", "MNRE · PIB · IRENA · Mercom · JMK"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div
                    style={{
                      fontSize: 10.5,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 600,
                      marginBottom: 6,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                      fontWeight: 500,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PAGE BODY ── */}
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 32px 100px",
          }}
        >
          {/* ── HEADLINE STAT STRIP ── */}
          <div style={{ marginTop: 56, marginBottom: 12 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#5E3F99",
                marginBottom: 12,
              }}
            >
              The 2026 Picture, In Four Numbers
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#6B7468",
                lineHeight: 1.6,
                marginBottom: 20,
              }}
            >
              Every figure in this guide is drawn from official MNRE/PIB releases or
              peer-reviewed industry research published between November 2025 and May
              2026.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "#DDE8DB",
              border: "1px solid #DDE8DB",
              borderRadius: 6,
              overflow: "hidden",
              marginBottom: 36,
            }}
          >
            {[
              { label: "SOLAR INSTALLED", num: "150.26", unit: " GW", desc: "MNRE · 31 Mar 2026" },
              { label: "FY26 ADDITIONS", num: "44.61", unit: " GW", desc: "Record annual addition" },
              { label: "2030 TARGET", num: "500", unit: " GW", desc: "COP26 non-fossil pledge" },
              { label: "O&M PRICING", num: "3.5–7", unit: " ₹L/MW/yr", desc: "Industry benchmark · 2026" },
            ].map(({ label, num, unit, desc }) => (
              <div
                key={label}
                style={{
                  background: "#FFFFFF",
                  padding: "22px 18px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "#5E3F99",
                    marginBottom: 10,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 28,
                    color: "#181C18",
                    lineHeight: 1,
                    marginBottom: 8,
                    fontWeight: 700,
                  }}
                >
                  <span style={{ color: "#5E3F99" }}>{num}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#3A4238" }}>{unit}</span>
                </div>
                <div style={{ fontSize: 11.5, color: "#6B7468", lineHeight: 1.5 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>

          {/* ── TOC ── */}
          <nav
            style={{
              background: "#FFFFFF",
              border: "1px solid #DDE8DB",
              borderTop: "4px solid #5E3F99",
              padding: "32px 36px",
              margin: "20px 0 60px",
              borderRadius: 2,
            }}
          >
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6B7468",
                marginBottom: 18,
              }}
            >
              Inside this guide
            </div>
            <ol
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "6px 40px",
                listStyle: "none",
                padding: 0,
                margin: 0,
                counterReset: "toc",
              }}
            >
              {[
                ["#market", "The 2026 landscape", "Market segments & opportunity"],
                ["#legal", "Legal & registration", "Entity, GST, licences, ISO"],
                ["#team", "Building the core team", "Roles, salaries, hiring channels"],
                ["#tools", "Tools & technology stack", "Thermal, I-V, SCADA, cleaning"],
                ["#pricing", "Pricing your O&M services", "Fixed-rate & performance-based"],
                ["#gtm", "Winning the first contract", "GTM playbook"],
                ["#contracts", "Contract essentials", "PR clauses, SLAs, exclusions"],
                ["#scaling", "Scaling the business", "5-stage roadmap to 250 MW"],
                ["#challenges", "Challenges & solutions", "Operational risk mitigation"],
                ["#outlook", "Outlook & FAQ", "The sun is still rising"],
              ].map(([href, label, sub], i) => (
                <li key={href} style={{ counterIncrement: "toc" }}>
                  <a
                    href={href}
                    style={{
                      textDecoration: "none",
                      fontSize: 14,
                      color: "#3A4238",
                      display: "flex",
                      gap: 10,
                      alignItems: "baseline",
                      padding: "5px 0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        color: "#5E3F99",
                        minWidth: 20,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span style={{ fontWeight: 600, color: "#181C18" }}>{label}</span>
                      <span style={{ color: "#6B7468", fontSize: 13 }}> — {sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── S1: Market ── */}
          <Section id="market" title="01 / Understanding the Indian solar O&M landscape in 2026">
            <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 28 }}>
              India&apos;s renewable energy story has stopped being a forecast and become
              a fact. As of 31 March 2026, the country&apos;s cumulative installed solar
              capacity stood at 150.26 GW, comprising 110.43 GW of utility-scale, 25.73 GW
              of rooftop, and 14.10 GW under PM-KUSUM and off-grid programmes.
            </p>
            <p style={p}>
              FY 2025-26 alone added{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>44.61 GW</strong> —
              the highest single-year solar addition in Indian history, and 87% higher
              than the previous record.
            </p>
            <p style={p}>
              That installed base is the addressable market for solar Operations &amp;
              Maintenance (O&amp;M). Every MW that gets commissioned needs cleaning,
              monitoring, fault response, performance reporting, and warranty management
              for the next 25 years. India&apos;s 500 GW non-fossil capacity target by
              2030 — a COP26 commitment — translates to roughly 350+ GW of additional
              solar capacity that will need O&amp;M services over the next four years.
            </p>

            <Callout variant="purple" icon="📚" title="Sources">
              Press Information Bureau release dated 1 April 2026 (Hon&apos;ble Minister
              Pralhad Joshi); MNRE physical progress dashboard; IRENA Renewable Energy
              Statistics 2026.
            </Callout>

            <h3 style={h3Style}>What solar O&amp;M actually covers</h3>
            <p style={p}>
              O&amp;M is not a single service — it is a bundle of technical, operational,
              financial, and analytical activities performed across a plant&apos;s 25-year
              design life. Most successful Indian players specialise in one or two of the
              following before broadening scope:
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                [
                  "Preventive maintenance",
                  "scheduled module cleaning, torque checks on mounting structures, thermal imaging of strings and combiners, vegetation management, and tracker calibration on single-axis sites.",
                ],
                [
                  "Corrective maintenance",
                  "emergency response to inverter trips, string faults, DC arc events, AJB failures, and lightning incidents — usually under a 4-hour SLA for critical events.",
                ],
                [
                  "Performance monitoring",
                  "24×7 SCADA monitoring, generation-loss analysis, Performance Ratio (PR) tracking, soiling-loss measurement, and IEC 61724-compliant reporting.",
                ],
                [
                  "Asset management",
                  "insurance coordination, warranty claim management with module/inverter OEMs, regulatory and DISCOM compliance, REC accounting, financial MIS for lenders.",
                ],
                [
                  "Technical due diligence",
                  "pre-acquisition audits, lender's engineer services, end-of-EPC-warranty inspections, refinancing TDD.",
                ],
              ].map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "16px 20px",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: 14,
                      color: "#5E3F99",
                      marginBottom: 4,
                      fontWeight: 600,
                    }}
                  >
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14.5, color: "#3A4238", lineHeight: 1.65 }}>
                    {body}
                  </span>
                </li>
              ))}
            </ul>

            <h3 style={h3Style}>The four customer segments</h3>
            <p style={p}>
              Choose one segment to enter first. Trying to serve all four with the same
              team destroys margins.
            </p>

            <div style={{ overflowX: "auto", margin: "24px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Segment", "Plant Size", "Key Buying Criterion", "Difficulty"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Residential rooftop (PM Surya Ghar)", "1–10 kW", "Price & convenience", "Low", "green"],
                    ["Commercial rooftop (C&I)", "10 kW – 1 MW", "4-hour SLA, monitoring", "Low–Medium", "green"],
                    ["Industrial / open-access", "500 kW – 5 MW", "Safety certs, PR guarantee", "Medium", "amber"],
                    ["Utility-scale ground-mount", "5 MW – 500 MW+", "SCADA, balance sheet, portfolio", "High", "red"],
                    ["Agri-solar / PM-KUSUM", "5 kW – 2 MW", "Rural presence, low cost-to-serve", "Medium", "amber"],
                  ].map(([seg, size, criterion, diff, badgeVar], i) => (
                    <tr key={seg} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{seg}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{size}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{criterion}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={badgeVar}>{diff}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={p}>
              The largest single-segment opportunity right now is{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                industrial rooftop and C&amp;I open-access
              </strong>
              , which contributed disproportionately to FY26 capacity additions thanks to
              the ISTS waiver deadline of 30 June 2025. The fastest-growing segment is{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                residential rooftop
              </strong>{" "}
              — over 22.7 lakh PM Surya Ghar households were energised in FY26 alone,
              creating a massive long-tail O&amp;M market.
            </p>
          </Section>

          <Rule />

          {/* ── S2: Legal ── */}
          <Section id="legal" title="02 / Legal setup & business registration in India">
            <p style={p}>
              Get the legal foundation right. It protects you from liability, unlocks
              corporate contracts, and lets you bid on government and PSU tenders. Most
              successful O&amp;M businesses register as a Private Limited Company or LLP —
              avoid sole proprietorship if you plan to scale or raise capital.
            </p>

            {/* Numbered steps */}
            <div style={{ position: "relative", paddingLeft: 48, margin: "32px 0" }}>
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 8,
                  bottom: 8,
                  width: 2,
                  background: "#DDE8DB",
                }}
              />
              {[
                {
                  num: 1,
                  title: "Incorporate the entity",
                  desc: "Register a Pvt. Ltd. or LLP via the MCA21 portal. Cost: ₹6,000–15,000. Timeline: 7–15 working days. Add NIC codes 3314 ('Repair and maintenance of electronic equipment') and 3510 ('Electric power generation, transmission and distribution') in your MoA — this future-proofs you for BESS, EV, and hybrid O&M.",
                },
                {
                  num: 2,
                  title: "GST registration",
                  desc: "Mandatory once turnover exceeds ₹20 lakh (₹10 lakh in special category states). Solar O&M services attract 18% GST under SAC 998719. Note that the concessional rates that apply to solar PV equipment supply do not automatically extend to standalone O&M services — get a CA opinion if your contract bundles supply with services.",
                },
                {
                  num: 3,
                  title: "Electrical contractor license",
                  desc: "Required to execute any electrical work above 250V. Issued by your State Electrical Inspectorate. Form A or Form B depending on the state. This is the single biggest gating item for new O&M companies — start the application before incorporation if possible, since processing takes 60–90 days.",
                },
                {
                  num: 4,
                  title: "Statutory registrations",
                  desc: "Shops & Establishment Act certificate, Professional Tax (state-specific), PF and ESIC registration. Once you cross 20 contract workers, you also need registration under the Contract Labour (Regulation & Abolition) Act, 1970.",
                },
                {
                  num: 5,
                  title: "Optional but recommended",
                  desc: "ISO 9001:2015 (quality management) and ISO 45001 (occupational health and safety) are not legally mandatory but are pre-qualification filters for almost every IPP, PSU, and Tier-1 corporate tender. Budget ₹1.5–3 lakh and 4–6 months for both.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{ position: "relative", marginBottom: 32 }}>
                  <div
                    className="bg-headupb2b"
                    style={{
                      position: "absolute",
                      left: -48,
                      top: 0,
                      width: 32,
                      height: 32,
                      color: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 700,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      background: "#5E3F99",
                    }}
                  >
                    {num}
                  </div>
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                      paddingTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {title}
                  </h4>
                  <p style={{ fontSize: 14.5, color: "#6B7468", lineHeight: 1.65, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <Callout variant="green" icon="💡" title="Pro tip: lock in your brand and bank infrastructure early">
              When registering, also reserve domain names, trademark your brand under
              Class 37 (construction and repair services) and Class 42 (technological
              services), and open a current account at a bank that accepts MNRE/DISCOM
              cheques without 21-day clearing holds.
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: Team ── */}
          <Section id="team" title="03 / Building the core solar O&M team">
            <p style={p}>
              Your team is your product. In O&amp;M, clients aren&apos;t just buying a
              service — they are buying confidence that their ₹4 crore (per MW) asset is
              in safe hands. Hire slowly, train relentlessly, and invest in retention. The
              single most expensive mistake in this business is a single avoidable
              inverter failure caused by under-trained technicians.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {["Role", "Qualification", "Salary Range (Gross Monthly, INR)"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Head of O&M", "B.E./B.Tech Electrical + 8–12 yrs", "1,50,000 – 3,00,000"],
                    ["O&M Manager", "B.E./B.Tech Electrical + 5 yrs", "60,000 – 1,30,000"],
                    ["Site Supervisor", "Diploma EE + 2–4 yrs", "25,000 – 45,000"],
                    ["Field Technician", "ITI Electrician + Solar cert.", "14,000 – 25,000"],
                    ["SCADA / Monitoring Analyst", "B.E. + SCADA software skills", "35,000 – 70,000"],
                    ["Drone Pilot (DGCA-certified)", "RPC + Thermography training", "30,000 – 55,000"],
                    ["HSE Officer", "NEBOSH IGC / ADIS", "35,000 – 60,000"],
                    ["Accounts & Contracts Exec.", "B.Com / MBA Finance", "22,000 – 45,000"],
                  ].map(([role, qual, sal], i) => (
                    <tr key={role} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{role}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{qual}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{sal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>Where to find solar O&amp;M talent</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                [
                  "NISE (National Institute of Solar Energy)",
                  "NISE-certified Suryamitra technicians command a 15–20% premium and are preferred by Adani, NTPC, ReNew, Greenko, and JSW Energy.",
                ],
                [
                  "ITI & polytechnic colleges",
                  "Tie up with institutes in Rajasthan, Gujarat, Tamil Nadu, and Uttar Pradesh for a fresher pipeline. The top three FY26 capacity-addition states (Rajasthan, Gujarat, Maharashtra) account for 79% of large-scale solar additions.",
                ],
                [
                  "Skill Council for Green Jobs (SCGJ)",
                  "NSDC-aligned programs for solar installation and maintenance — 200+ training partners across India.",
                ],
                [
                  "Ex-EPC technicians",
                  "Former technicians from Tata Power Solar, Waaree, Adani Solar, Vikram Solar, and Sterling & Wilson are highly valuable lateral hires.",
                ],
                [
                  "Specialised job platforms",
                  "SolarQuarter Jobs, Mercom Careers, EQ Magazine, Naukri, and LinkedIn.",
                ],
              ].map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "14px 18px",
                  }}
                >
                  <strong style={{ display: "block", fontSize: 14, color: "#5E3F99", marginBottom: 4, fontWeight: 600 }}>
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14, color: "#3A4238", lineHeight: 1.6 }}>{body}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Rule />

          {/* ── S4: Tools ── */}
          <Section id="tools" title="04 / Equipment, tools & technology stack">
            <p style={p}>
              Underinvesting in tools is the fastest way to deliver substandard service
              and lose contracts. Here&apos;s a recommended toolkit by stage of growth —
              start with the &ldquo;Critical&rdquo; tier, add &ldquo;High&rdquo; tier by 5
              MW, and &ldquo;Medium&rdquo; tier by 25 MW under management.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {["Category", "Tool / Software", "Approx. Cost (INR)", "Priority"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Thermal Imaging", "FLIR E6 / E8 / Si240 (320×240 res min.)", "1.5–4 L", "Critical", "red"],
                    ["I-V Curve Tracer", "Solmetric PVA-1500HE / Seaward PV200", "2.5–6 L", "Critical", "red"],
                    ["Insulation Tester", "Megger MIT515 / Fluke 1587 FC", "35,000–80,000", "Critical", "red"],
                    ["Earth Resistance Tester", "Kyoritsu 4105A / Fluke 1625-2", "25,000–1.2 L", "Critical", "red"],
                    ["Drone (Thermal + RGB)", "DJI Matrice 30T / Mavic 3T", "3–8 L", "High", "amber"],
                    ["SCADA / Monitoring", "Solarman, AlsoEnergy, SolarEdge, Skytron", "₹500–2,500/site/yr", "Critical", "red"],
                    ["Field Service ERP", "FieldAware, ServiceMax, Zoho FSM", "₹6,000–18,000/mo", "High", "amber"],
                    ["Robotic Cleaning", "Ecoppia / Skytron / Sun Brush Mobil", "1.2–1.5 L/MW capex", "High", "amber"],
                    ["EL Imaging Camera", "Hukseflux / on-demand service hire", "8–15 L (own) / ₹40k/day (rent)", "Medium", "blue"],
                  ].map(([cat, tool, cost, pri, badgeVar], i) => (
                    <tr key={cat} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{cat}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{tool}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{cost}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={badgeVar}>{pri}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>The build-vs-buy decision on robotic cleaning</h3>
            <p style={p}>
              Module cleaning typically accounts for{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>30–40%</strong> of
              total O&amp;M cost on a manual-labour basis. Industry data from Rajasthan
              utility plants shows that semi-automatic robotic cleaning costs roughly{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                ₹1.50 L/MW DC/yr
              </strong>{" "}
              versus{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                ₹1.20 L/MW DC/yr
              </strong>{" "}
              for fully automatic robotic systems — a 60–70% reduction over manual
              brush-and-water cleaning. The capex on robots pays back in 18–30 months on
              plants above 5 MW DC.
            </p>
          </Section>

          <Rule />

          {/* ── S5: Pricing ── */}
          <Section id="pricing" title="05 / Pricing your solar O&M services">
            <p style={p}>
              Pricing is where most new O&amp;M businesses fail. Underprice to win the
              contract and you bleed cash from month three. Overprice and you lose every
              bid. Indian solar O&amp;M pricing has consolidated around two dominant
              models in 2026.
            </p>

            <h3 style={h3Style}>Model A: Fixed annual rate (per MWp)</h3>
            <p style={p}>
              The most common structure. You charge a flat annual fee per megawatt-peak of
              installed capacity. Predictable for both parties, preferred by institutional
              investors and lenders.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {["Plant Size", "Market Range", "Suggested Year-1 Quote"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Residential (1–10 kWp)", "₹15,000–25,000 per system/yr", "₹18,000/system/yr"],
                    ["Small commercial (10–100 kWp)", "₹8,000–14,000/kWp/yr", "₹10,000/kWp/yr"],
                    ["Mid commercial (100 kWp – 1 MWp)", "₹5,000–9,000/kWp/yr", "₹6,500/kWp/yr"],
                    ["Industrial (1–10 MW)", "₹4–6 L/MW/yr", "₹4.5 L/MW/yr"],
                    ["Utility-scale (10–100 MW)", "₹3.5–5 L/MW/yr", "₹4.0 L/MW/yr"],
                    ["Mega-scale (>100 MW)", "₹2.5–4 L/MW/yr", "Negotiated, ~₹3 L"],
                  ].map(([plant, range, quote], i) => (
                    <tr key={plant} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{plant}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{range}</td>
                      <td style={{ padding: "12px 16px", color: "#5E3F99", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{quote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="purple" icon="📚" title="Sources">
              Mercom India Solar Market Leaderboard 2026; Saur Energy industry survey;
              Solar Mango pricing benchmarks; Headsup B2B internal tender database (FY26).
            </Callout>

            <h3 style={h3Style}>Model B: Performance-Based Contract (PBC)</h3>
            <p style={p}>
              Increasingly popular with sophisticated IPPs and PE-backed asset owners. You
              guarantee a minimum Performance Ratio (typically 75–82% for tropical Indian
              sites) or a minimum CUF. If the plant under-performs, you pay liquidated
              damages. If it over-performs, you share in the upside (typically 20–40% of
              incremental kWh value).
            </p>
            <p style={p}>
              PBC contracts command a{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>15–25% premium</strong>{" "}
              over fixed-rate contracts, but require genuine confidence in your monitoring
              quality, response times, and module-cleaning frequency. They are not for
              first-year businesses.
            </p>

            {/* Blockquote */}
            <blockquote
              style={{
                borderLeft: "4px solid #5E3F99",
                background: "#F4F1FA",
                padding: "24px 30px",
                margin: "36px 0",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 21,
                  fontStyle: "italic",
                  color: "#46306F",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                &ldquo;Get the PR clause wrong, and a single hot summer of soiling losses
                can wipe out two years of margin. PBC contracts are a tax on weak
                operators and a moat for great ones.&rdquo;
              </p>
              <cite
                style={{
                  display: "block",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#5E3F99",
                  marginTop: 12,
                }}
              >
                — O&amp;M Operating Principle
              </cite>
            </blockquote>
          </Section>

          <Rule />

          {/* ── S6: GTM ── */}
          <Section id="gtm" title="06 / Winning your first solar O&M contract">
            <p style={p}>
              The hardest part of any service business is the first paying client. Here is
              a playbook that has worked for credible new entrants in the last 24 months.
            </p>

            <div style={{ position: "relative", paddingLeft: 48, margin: "32px 0" }}>
              <div
                style={{
                  position: "absolute",
                  left: 15,
                  top: 8,
                  bottom: 8,
                  width: 2,
                  background: "#DDE8DB",
                }}
              />
              {[
                {
                  num: 1,
                  title: "Target expiring EPC warranties",
                  desc: "Most Indian solar plants ship with a 1–2 year EPC O&M warranty bundled in. When that expires, the developer needs an O&M partner — fast. Build a database of plants commissioned 18–24 months ago in your target geography. SECI, NTPC, and CTU connectivity gazette notifications are public; cross-reference with state DISCOM commissioning records.",
                },
                {
                  num: 2,
                  title: "Offer a free first audit",
                  desc: "Conduct a no-cost 1-day performance audit for a prospective client. Show them the lost generation, hot-spot count, soiling-loss percentage, and PR gap. Let the data sell your service. Conversion rates on this approach are typically 25–40%.",
                },
                {
                  num: 3,
                  title: "Start with a paid pilot",
                  desc: "Propose a 3-month paid pilot on 10–20% of their portfolio at a 30% discount to your fair price. Deliver exceptional results. Convert to a full multi-year contract at standard price.",
                },
                {
                  num: 4,
                  title: "Become an EPC sub-contractor",
                  desc: "Companies like Tata Power Solar, Waaree, Vikram Solar, and Sterling & Wilson commission far more capacity than they want to operate themselves. Becoming the preferred O&M sub-contractor for 2–3 EPC firms in your region is a sustainable lead engine.",
                },
                {
                  num: 5,
                  title: "Register on government tender portals",
                  desc: "Register on the Central Public Procurement Portal (CPPP), GeM (Government e-Marketplace), and your state DISCOM vendor portals. PSU rooftop solar O&M tenders (schools, hospitals, government offices) are an under-served, low-competition entry point.",
                },
                {
                  num: 6,
                  title: "Build trust signals on LinkedIn and YouTube",
                  desc: "Publish monthly performance reports (anonymised), thermal imaging case studies, and PR-improvement stories. Solar asset managers and PE investors actively scout for credible, technically-deep operators on these channels.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{ position: "relative", marginBottom: 32 }}>
                  <div
                    style={{
                      position: "absolute",
                      left: -48,
                      top: 0,
                      width: 32,
                      height: 32,
                      color: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 700,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                      background: "#5E3F99",
                    }}
                  >
                    {num}
                  </div>
                  <h4
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                      paddingTop: 4,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {title}
                  </h4>
                  <p style={{ fontSize: 14.5, color: "#6B7468", lineHeight: 1.65, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S7: Contracts ── */}
          <Section id="contracts" title="07 / Solar O&M contract essentials">
            <p style={p}>
              A poorly drafted contract is a time bomb. Every solar O&amp;M agreement
              must clearly define the following clauses — get a solar-experienced lawyer
              (not a general corporate lawyer) to draft your master template.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                [
                  "Scope of work",
                  "a granular schedule — cleaning frequency (minimum monthly in dust-prone states like Rajasthan, fortnightly during summer), inspection intervals, monitoring parameters, and reporting cadence.",
                ],
                [
                  "Performance guarantee & liquidated damages",
                  "minimum PR (typically 75–80%) or generation guarantee (in kWh), with a clear LD formula. Cap LDs at 10% of annual contract value.",
                ],
                [
                  "Response-time SLAs",
                  "define 'Critical' (4-hour on-site response), 'Major' (24 hours), and 'Minor' (72 hours) categories.",
                ],
                [
                  "Exclusions",
                  "explicitly list events outside your control — grid curtailment, force majeure, client-side LT/HT failures, module manufacturing defects, and insurance-covered events.",
                ],
                [
                  "Spare parts responsibility",
                  "specify who buys, stocks, and pays for replacement parts. Most modern contracts use a 'client-furnished' model with a minimum stocking obligation on the operator.",
                ],
                [
                  "Insurance",
                  "mandate your own third-party liability (₹5 Cr minimum), workmen's compensation, and professional indemnity insurance.",
                ],
                [
                  "Termination clause",
                  "reasonable notice period (90 days for convenience, 30 days for cause), with cure rights and protection against arbitrary termination.",
                ],
                [
                  "Annual price escalation",
                  "CPI-linked or fixed at 4–6% per annum, applicable from year 2 onwards.",
                ],
                [
                  "Confidentiality & data ownership",
                  "SCADA data, generation data, and fault logs belong to the client; you have a perpetual right to use anonymised data for internal benchmarking.",
                ],
                [
                  "Dispute resolution",
                  "Indian arbitration seat, single arbitrator, English language, governed by the Arbitration and Conciliation Act, 1996 (as amended).",
                ],
              ].map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "14px 18px",
                  }}
                >
                  <strong style={{ display: "block", fontSize: 14, color: "#5E3F99", marginBottom: 4, fontWeight: 600 }}>
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14, color: "#3A4238", lineHeight: 1.6 }}>{body}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Rule />

          {/* ── S8: Scaling ── */}
          <Section id="scaling" title="08 / Scaling your solar O&M business">
            <p style={p}>
              Once you have 5–10 MW under management and positive operating cash flow, the
              business begins to compound. Solar O&amp;M has excellent unit economics at
              scale — fixed costs (SCADA software, regional management overhead, training
              infrastructure) don&apos;t grow proportionally with the portfolio.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {["Stage", "Capacity", "Strategic Focus"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Stage 1 — Survival", "0–5 MW", "Win first 3 contracts, build SOPs, achieve operating breakeven"],
                    ["Stage 2 — Operational stability", "5–25 MW", "Hire regional managers, deploy SCADA, ISO certifications"],
                    ["Stage 3 — Geographic expansion", "25–100 MW", "Enter 2–3 new states, specialise teams by service line"],
                    ["Stage 4 — Technology leverage", "100–250 MW", "AI-driven predictive maintenance, drone fleet, EL fleet"],
                    ["Stage 5 — Strategic capital", "250 MW+", "PE/strategic investor, BESS & EV diversification, IPO-ready"],
                  ].map(([stage, cap, focus], i) => (
                    <tr key={stage} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{stage}</td>
                      <td style={{ padding: "12px 16px", color: "#5E3F99", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{cap}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={h3Style}>Strategic growth levers</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 28px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                [
                  "Geographic expansion",
                  "start in one state, master it, then expand to adjacent solar-rich states. The Rajasthan → Gujarat → Maharashtra corridor accounted for 79% of FY26 large-scale solar additions.",
                ],
                [
                  "Service diversification",
                  "add Battery Energy Storage System (BESS) O&M, EV charging station maintenance, and wind-solar hybrid O&M. India added 6.05 GW of wind in FY26 — also a record.",
                ],
                [
                  "Technology investment",
                  "deploy AI-driven predictive maintenance to reduce truck rolls by 30–40% and improve net margins by 300–500 bps.",
                ],
                [
                  "Acquisitions",
                  "acquire smaller regional O&M players in new geographies rather than building from scratch — typically faster and cheaper at 0.6–1.2x annual revenue multiples for sub-25-MW players.",
                ],
                [
                  "Growth capital",
                  "at 100+ MW under management, you become fundable for ESG-mandated PE funds, family offices, and impact investors at 10–14% cost of equity.",
                ],
              ].map(([title, body]) => (
                <li
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #5E3F99",
                    borderRadius: "0 6px 6px 0",
                    padding: "14px 18px",
                  }}
                >
                  <strong style={{ display: "block", fontSize: 14, color: "#5E3F99", marginBottom: 4, fontWeight: 600 }}>
                    {title}:
                  </strong>
                  <span style={{ fontSize: 14, color: "#3A4238", lineHeight: 1.6 }}>{body}</span>
                </li>
              ))}
            </ul>

            <h3 style={h3Style}>Top solar O&amp;M players in India · 2026</h3>
            <p style={p}>
              According to Mercom&apos;s India Solar Market Leaderboard 2026, the top
              five third-party O&amp;M providers —{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                Inox Green Energy Services, Mitarsh Energy, Jakson Green, Inspire Clean
                Energy, and Sterling &amp; Wilson
              </strong>{" "}
              — collectively account for roughly 86% of contracted O&amp;M capacity. The
              top five renewable developers (who self-operate most of their assets) are{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                Adani (40.5 GW), ReNew (22.9 GW), NTPC (16.9 GW), Greenko (15.4 GW), and
                JSW Energy (15.12 GW)
              </strong>
              , based on cumulative installed and pipeline capacity per JMK Research.
            </p>
          </Section>

          <Rule />

          {/* ── S9: Challenges ── */}
          <Section id="challenges" title="09 / Key challenges & how to overcome them">
            <p style={p}>
              Top operational challenges in Indian solar O&amp;M and proven mitigations:
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr>
                    {["Challenge", "Root Cause", "Mitigation"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.95)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                          background: "#5E3F99",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Skilled-technician shortage", "Industry growth outpacing training", "In-house academy + NISE Suryamitra hiring"],
                    ["Delayed client payments", "60–120-day cycles, DISCOM arrears", "30-day terms, factoring, escrow on PSU"],
                    ["Scope creep", "Vague contracts; post-signature additions", "Granular SOW + change-order rate cards"],
                    ["Equipment theft & vandalism", "Remote sites, weak security", "IoT geofencing, CCTV, guard partnerships"],
                    ["Module degradation disputes", "OEMs deny warranty on PR shortfall", "EL imaging at year 3 + 5; documented evidence"],
                    ["Price undercutting", "Commoditisation of basic O&M", "Differentiate on data & PBC structures"],
                    ["DISCOM net-metering disputes", "State-level policy inconsistencies", "Specialised regulatory team for top 5 states"],
                  ].map(([ch, rc, mit], i) => (
                    <tr key={ch} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{ch}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{rc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{mit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S10: Outlook ── */}
          <Section id="outlook" title="10 / The sun is still rising">
            <p style={{ ...p, fontSize: 19, fontWeight: 300 }}>
              India&apos;s solar revolution is a 25-year mega-trend, and O&amp;M
              businesses will be the operating backbone of this clean-energy economy for
              every one of those years.
            </p>
            <p style={p}>
              From 150 GW today to a 500 GW non-fossil target by 2030, every additional
              megawatt creates a 25-year recurring O&amp;M annuity. The opportunity is
              enormous, the entry barriers are manageable, and the recurring-revenue
              model is a founder&apos;s dream.
            </p>
            <p style={p}>
              Start small. Obsess over service quality. Build systems before scale. Hire
              technicians, not just managers. The entrepreneurs who build credible,
              technology-driven, contract-disciplined O&amp;M businesses today will be
              the energy infrastructure companies of the 2030s. The sun isn&apos;t
              setting on this opportunity — it&apos;s just clearing morning haze.
            </p>
          </Section>

          <Rule />

          {/* ── FAQ ── */}
          <Section id="faq" title="Frequently asked questions">
            <p style={p}>
              Quick answers to the questions founders, CFOs, and asset managers ask most
              often before launching or contracting a solar O&amp;M business in India.
            </p>

            {[
              {
                q: "What is India's installed solar capacity in 2026?",
                a: "India's cumulative installed solar capacity reached 150.26 GW as of 31 March 2026, comprising 110.43 GW of utility-scale, 25.73 GW of rooftop, and 14.10 GW of KUSUM and off-grid projects (MNRE). FY 2025-26 saw record additions of 44.61 GW.",
              },
              {
                q: "What is the typical solar O&M cost per MW in India?",
                a: "Indian solar O&M contracts typically price at ₹3.5 lakh to ₹7 lakh per MW per year for utility-scale ground-mount projects. Rooftop projects are priced at ₹5,000–15,000 per kWp annually. Pricing depends on plant size, location (dust load), tracker vs fixed-tilt, scope, and whether the contract includes spare parts.",
              },
              {
                q: "What is the GST rate on solar O&M services in India?",
                a: "Solar O&M services attract 18% GST under SAC 998719 (maintenance and repair services of other equipment). The concessional rates that apply to solar PV equipment supply do not extend to standalone O&M services. Bundled supply-and-O&M contracts have specific valuation rules — get a CA opinion before structuring.",
              },
              {
                q: "Who are the top solar O&M companies in India in 2026?",
                a: "Per Mercom's India Solar Market Leaderboard 2026, the top five third-party solar O&M providers are Inox Green Energy Services, Mitarsh Energy, Jakson Green, Inspire Clean Energy, and Sterling & Wilson — together accounting for roughly 86% of contracted O&M capacity. Most utility-scale developers (Adani, ReNew, NTPC, Greenko, JSW Energy) self-operate their assets through in-house O&M arms.",
              },
              {
                q: "What licences are required to start a solar O&M business in India?",
                a: "You need: company incorporation (Pvt. Ltd. or LLP), GST registration, an Electrical Contractor License from the State Electrical Inspectorate, Shops & Establishment registration, Professional Tax registration, and PF/ESIC registrations. ISO 9001 and ISO 45001 are not mandatory but are pre-qualification filters for almost every IPP and PSU tender.",
              },
              {
                q: "How much capital do I need to start a solar O&M business in India?",
                a: "A serviceable solar O&M business with capacity to handle 5–10 MW can be launched with ₹15–25 lakh in startup capital. This covers tools (thermal camera, I-V tracer, insulation tester), monitoring software, vehicle, and 90 days of working capital for payroll and statutory deposits. Going beyond 25 MW requires an additional ₹40–60 lakh.",
              },
              {
                q: "What is Performance Ratio (PR) in solar O&M?",
                a: "Performance Ratio is the ratio of actual energy output to theoretical maximum output under the same irradiance, expressed as a percentage. Indian utility-scale solar plants target a PR of 75–82%; rooftop plants typically 70–78%. PR is the most common contractual KPI in performance-based O&M contracts, calculated per IEC 61724.",
              },
              {
                q: "Is solar O&M a profitable business in India?",
                a: "Yes. Mature solar O&M businesses in India typically operate at 18–25% EBITDA margins once they cross 50 MW under management. The revenue model is recurring annuity-style with 3–5 year contract durations, CPI-linked escalation, and minimal customer churn. The Indian third-party solar O&M market is growing roughly 18–22% CAGR through 2030.",
              },
              {
                q: "What is the difference between fixed-rate and performance-based O&M contracts?",
                a: "A fixed annual rate contract charges a flat fee per MW (₹3.5–7 L/MW/yr). A performance-based contract (PBC) guarantees a minimum PR or kWh output, with liquidated damages for underperformance and bonus sharing for overperformance. PBC contracts command a 15–25% pricing premium but require strong monitoring discipline.",
              },
              {
                q: "Do solar O&M businesses cover battery storage (BESS) too?",
                a: "Increasingly, yes. With India targeting 47 GW of BESS by 2032 and several utility tenders (NTPC, DVC, POWERGRID, OREDA) for hybrid solar+BESS plants in 2025-26, leading O&M operators are adding BESS-specific capabilities — battery management system (BMS) monitoring, thermal runaway detection, cycle-life optimisation, and HVAC management. BESS O&M typically prices at 15–25% premium to solar O&M.",
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #DDE8DB",
                  borderRadius: 6,
                  padding: "20px 24px",
                  marginBottom: 14,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#5E3F99",
                    margin: "0 0 10px",
                    display: "flex",
                    gap: 10,
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#5E3F99", flexShrink: 0 }}>
                    Q.
                  </span>
                  {q}
                </h3>
                <p style={{ fontSize: 14.5, color: "#3A4238", lineHeight: 1.7, margin: 0 }}>
                  {a}
                </p>
              </div>
            ))}
          </Section>

          <Rule />

          {/* ── SOURCES ── */}
          <Section id="sources" title="Sources & references">
            <p style={p}>
              Every data point in this guide is sourced from official government releases,
              industry research firms, and verified market data published between November
              2025 and May 2026.
            </p>

            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: "24px 0 0",
                counterReset: "src",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "Press Information Bureau, Government of India. \"India Ranks Third Globally in Renewable Energy Installed Capacity\" — release dated 1 April 2026, Ministry of New and Renewable Energy.",
                "Ministry of New and Renewable Energy (MNRE). Physical Progress Dashboard — cumulative achievements as on 31 March 2026.",
                "JMK Research & Analytics. Annual India Solar Report Card – FY2026 — April 2026.",
                "pv magazine India. \"India Hits 150 GW Solar Milestone\" — 10 April 2026.",
                "pv magazine India. \"India Installs Record 45 GW Solar Capacity in FY2026\" — 10 April 2026.",
                "Mercom India Research. India Solar Market Leaderboard 2026 — top O&M service providers.",
                "IRENA Renewable Energy Statistics 2026 — data as of December 2025.",
                "Saur Energy International. \"India's Solar O&M Market: Domination of New Evolving Technologies\" — pricing benchmarks.",
                "Solar Mango. O&M cost benchmarks for utility-scale solar plants in India.",
                "Central Electricity Regulatory Commission (CERC). Terms and Conditions for Tariff Regulations — O&M cost norms.",
                "Ministry of Finance / CBIC. GST rate notifications applicable to solar PV equipment and O&M services.",
                "IEC 61724-1:2021 — Photovoltaic system performance — Part 1: Monitoring.",
                "SaurEnergy. \"India Adds 38 GW of Solar Capacity in First 11 Months of FY26\" — 11 March 2026.",
                "Energetica India. \"MNRE Hosts 'Run for Sun' Marathon as Rooftop Installations Hit Record\" — 4 May 2026.",
              ].map((src, i) => (
                <li
                  key={i}
                  style={{
                    counterIncrement: "src",
                    display: "flex",
                    gap: 14,
                    alignItems: "baseline",
                    fontSize: 13.5,
                    color: "#3A4238",
                    lineHeight: 1.6,
                    paddingBottom: 10,
                    borderBottom: "1px dashed #DDE8DB",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#5E3F99",
                      minWidth: 24,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span>{src}</span>
                </li>
              ))}
            </ol>
          </Section>

          {/* ── CTA ── */}
          {/* Hero quote */}
            <blockquote
              style={{
                background: "#181C18",
                borderRadius: 8,
                padding: "44px 38px",
                margin: "44px 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -20,
                  fontSize: 200,
                  fontFamily: "'Montserrat', sans-serif",
                  color: "rgba(242,183,5,0.15)",
                  lineHeight: 1,
                  fontWeight: 700,
                }}
              >
                &rdquo;
              </div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 28,
                  color: "#FFFFFF",
                  lineHeight: 1.35,
                  margin: 0,
                  fontWeight: 700,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                The sun isn&apos;t setting.
                <br />
                <span style={{ color: "#F2B705", fontStyle: "italic" }}>
                  It&apos;s just clearing morning haze.
                </span>
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  marginTop: 22,
                  marginBottom: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                India&apos;s solar revolution is a 25-year mega-trend. Every megawatt
                installed is a 25-year operations and maintenance annuity waiting to be
                earned. The founders who build credible, technology-driven,
                contract-disciplined O&amp;M businesses today will be the energy
                infrastructure companies of the 2030s.
              </p>
            </blockquote>

          {/* ── DISCLAIMER ── */}
          <div
            style={{
              marginTop: 30,
              fontSize: 12,
              color: "#6B7468",
              lineHeight: 1.6,
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            © 2026 Headsup Corporation Pvt. Ltd. · Last updated 5 May 2026
            <br />
            For informational purposes only. Consult qualified advisors before commercial
            decisions.
          </div>
        </div>
      </div>
    </>
  );
}