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
  color: "#0D4A2F",
  margin: "36px 0 12px",
};

export default function RajasthanSolarMarketPage() {
  return (
    <>
      <Head>
        <title>Rajasthan Solar Market 2025: PM-KUSUM & RESCO Opportunities | HeadsUp B2B</title>
        <meta
          name="description"
          content="Rajasthan solar market 2025 guide for B2B vendors — PM-KUSUM A project pipeline, JVVNL & AVVNL tenders, RESCO developer profiles, and district-wise opportunity mapping."
        />
        <meta
          name="keywords"
          content="Rajasthan solar market 2025, PM-KUSUM Rajasthan, RESCO solar projects India, JVVNL solar tender 2025, Jaisalmer solar project, Barmer solar RESCO, Bikaner solar EPC, AVVNL solar tender, solar panel supplier Rajasthan, PM-KUSUM Component A, RESCO model India"
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/rajasthan-solar-market"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Rajasthan Solar Market 2025: PM-KUSUM & RESCO Opportunities | HeadsUp B2B"
        />
        <meta
          property="og:description"
          content="Rajasthan solar market 2025 guide for B2B vendors — PM-KUSUM A project pipeline, JVVNL & AVVNL tenders, RESCO developer profiles, and district-wise opportunity mapping."
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/rajasthan-solar-market"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/Pmkusum.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rajasthan Solar Market 2025: PM-KUSUM & RESCO Opportunities"
        />
        <meta
          name="twitter:description"
          content="The definitive B2B intelligence guide to Rajasthan's booming solar market — JVVNL & AVVNL pipelines, RESCO developer profiles, and real award data from 2024-25."
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/Pmkusum.webp"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .rsm-b2b-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .rsm-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .rsm-toc-grid {
            grid-template-columns: 1fr !important;
            gap: 4px 0 !important;
          }
          .rsm-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .rsm-district-grid {
            grid-template-columns: 1fr !important;
          }
          .rsm-b2b-grid {
            grid-template-columns: 1fr !important;
          }
          .rsm-body {
            padding: 0 20px 80px !important;
          }
          .rsm-body table {
            font-size: 13px !important;
          }
          .rsm-body table th,
          .rsm-body table td {
            padding: 10px 12px !important;
          }
        }
        @media (max-width: 480px) {
          .rsm-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .rsm-body {
            padding: 0 16px 64px !important;
          }
          .rsm-body table th,
          .rsm-body table td {
            padding: 8px 10px !important;
            font-size: 12.5px !important;
          }
        }
      `}</style>

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
        <div className="bg-headupb2b"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* gradient stripe */}
          <div
            style={{
              height: 5,
              background:
                "linear-gradient(90deg, #22A05A 0%, #D97706 50%, #22A05A 100%)",
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 28,
              }}
            >
            </div>
            <span className="inline-block bg-blue-500 text-white text-[11px] font-semibold tracking-[0.12em] uppercase px-[14px] py-[5px] rounded-[2px] mb-7"
              style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
            >
              SOLAR MARKET INTELLIGENCE · INDIA · APRIL 2025
            </span>

            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(30px, 4.5vw, 52px)",
                color: "#FFFFFF",
                lineHeight: 1.18,
                marginBottom: 22,
                maxWidth: 700,
                fontWeight: 700,
              }}
            >
              Rajasthan Solar Market 2025: PM-KUSUM & RESCO Opportunities
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
              The definitive B2B intelligence guide to Rajasthan&apos;s booming solar
              market — covering JVVNL &amp; AVVNL tender pipelines, RESCO developer
              profiles, district-wise opportunity mapping, and real award data from
              2024–25 for solar vendors and EPC companies.
            </p>

            {/* pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "22 min read",
                "Updated April 2025",
                "B2B Solar Vendors & EPC",
                "Rajasthan Focus",
              ].map((label) => (
                <span
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: "6px 14px",
                    borderRadius: 100,
                    letterSpacing: "0.03em",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#22A05A",
                      flexShrink: 0,
                    }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── PAGE BODY ── */}
        <div
          className="rsm-body"
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "0 32px 100px",
          }}
        >
          {/* ── TOC ── */}
          <nav
            style={{
              background: "#FFFFFF",
              border: "1px solid #DDE8DB",
              borderTop: "4px solid #5E3F99",
              padding: "32px 36px",
              margin: "52px 0 60px",
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
              What&apos;s in this guide
            </div>
            <ol
              className="rsm-toc-grid"
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
                ["#why-rajasthan", "Why Rajasthan leads India's solar market"],
                ["#pm-kusum-scale", "PM-KUSUM in Rajasthan: scale & structure"],
                ["#resco", "The RESCO model: how projects are financed"],
                ["#discoms", "JVVNL & AVVNL: key awarding authorities"],
                ["#district-map", "District-wise opportunity map"],
                ["#award-data", "Real award data: who won what (2024–25)"],
                ["#materials", "Materials & components required"],
                ["#project-flow", "How a JVVNL PM-KUSUM project flows"],
                ["#b2b-opportunities", "B2B opportunities by company type"],
                ["#how-to-enter", "How to enter the supply chain"],
                ["#challenges", "Challenges & risk factors"],
                ["#faq", "FAQ: B2B vendor questions answered"],
              ].map(([href, label], i) => (
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
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── S1: Why Rajasthan ── */}
          <Section id="why-rajasthan" title="Why Rajasthan Leads India's Solar Market">
            <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 28 }}>
              Rajasthan is not merely participating in India&apos;s solar revolution
              — it is leading it. With the highest solar irradiance in the country,
              over 3.5 lakh sq km of land much of it ideal for ground-mounted solar,
              and a state government that has placed solar at the centre of its
              rural electrification policy, Rajasthan is the single most active B2B
              opportunity zone in Indian solar in 2025.
            </p>
            <p style={p}>
              For B2B solar companies — panel manufacturers, mounting structure
              fabricators, inverter distributors, cable vendors, RMS providers, and
              civil contractors — the question is no longer{" "}
              <em>whether</em> to enter the Rajasthan solar market. The question is{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                how to enter it strategically
              </strong>{" "}
              before the next wave of PM-KUSUM RESCO awards closes the procurement
              window.
            </p>

            {/* Blockquote */}
            <blockquote
              style={{
                borderLeft: "4px solid #22A05A",
                background: "#F0FAF5",
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
                  color: "#0D4A2F",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                &ldquo;Rajasthan has everything a solar market needs: desert land
                at near-zero cost, the highest irradiance in India, a government
                committed to PM-KUSUM, and DISCOMs motivated to cut their
                agricultural subsidy burden through RESCO projects.&rdquo;
              </p>
              <cite
                style={{
                  display: "block",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#1A7A4A",
                  marginTop: 12,
                }}
              >
                — HeadsUp B2B Solar Research, April 2025
              </cite>
            </blockquote>

            {/* Stat strip */}
            <div
              className="rsm-stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 1,
                background: "#DDE8DB",
                border: "1px solid #DDE8DB",
                borderRadius: 6,
                overflow: "hidden",
                margin: "36px 0",
              }}
            >
              {[
                { num: "5.5–6.5", unit: "", desc: "kWh/m²/day irradiance — highest in India" },
                { num: "10,000", unit: " MW", desc: "PM-KUSUM A target — Rajasthan leads implementation" },
                { num: "270", unit: " Days", desc: "Standard JVVNL RESCO contract construction period" },
                { num: "₹3.10", unit: "/kWh", desc: "Typical RESCO tariff in Rajasthan 2024–25" },
                { num: "25", unit: " Yrs", desc: "PPA duration — long-term B2B supply potential" },
              ].map(({ num, unit, desc }) => (
                <div
                  key={desc}
                  style={{
                    background: "#FFFFFF",
                    padding: "24px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 26,
                      color: "#0D4A2F",
                      lineHeight: 1,
                      marginBottom: 6,
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ color: "#22A05A" }}>{num}</span>
                    {unit}
                  </div>
                  <div style={{ fontSize: 11.5, color: "#6B7468", lineHeight: 1.5 }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <h3 style={h3Style}>What makes Rajasthan different from other solar states?</h3>
            <p style={p}>
              Unlike Gujarat — where large utility-scale projects (100 MW to 600 MW
              EPC contracts) dominate — Rajasthan&apos;s PM-KUSUM pipeline is
              characterised by{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                hundreds of small, distributed RESCO projects
              </strong>{" "}
              — typically 500 kW to 2 MW each — spread across remote agricultural
              districts. Instead of supplying one ₹500 Cr project with a single
              large EPC contractor, you are supplying twenty ₹25 Cr projects with
              twenty different regional RESCO developers. The total market size is
              comparable, but the sales approach, relationship-building strategy,
              and logistics requirements are completely different.
            </p>
          </Section>

          <Rule />

          {/* ── S2: PM-KUSUM in Rajasthan ── */}
          <Section id="pm-kusum-scale" title="PM-KUSUM in Rajasthan: Scale & Structure">
            <p style={p}>
              Rajasthan is one of the most advanced states in PM-KUSUM
              implementation, having issued and awarded a significantly higher
              volume of Component A tenders than any other state as of April 2025.
              The state&apos;s three distribution companies —{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                Jodhpur Vidyut Vitran Nigam (JVVNL)
              </strong>
              ,{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                Ajmer Vidyut Vitran Nigam (AVVNL)
              </strong>
              , and{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                Jaipur Vidyut Vitran Nigam (JVVNL Jaipur)
              </strong>{" "}
              — are each independently implementing PM-KUSUM across their service
              territories, creating three parallel procurement pipelines.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Component", "Description", "Target (Rajasthan)", "Model", "Key DISCOM"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "PM-KUSUM A",
                      "Grid-connected ground-mounted solar plants up to 2 MW on barren / agricultural land",
                      "Largest share of 10,000 MW national target",
                      "RESCO (25-yr PPA) + EPC mode",
                      "JVVNL Jodhpur",
                    ],
                    [
                      "PM-KUSUM B",
                      "Solarisation of individual off-grid agricultural pumps (3–10 HP)",
                      "State share of 20 lakh pumps nationally",
                      "Subsidy-based direct procurement",
                      "All three DISCOMs",
                    ],
                    [
                      "PM-KUSUM C",
                      "Grid-connected pump solarisation — surplus power sold to DISCOM",
                      "State share of 15 lakh pumps nationally",
                      "Net metering + tariff purchase",
                      "All three DISCOMs",
                    ],
                  ].map(([comp, desc, target, model, disc], i) => (
                    <tr key={comp} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{comp}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{desc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{target}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{model}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{disc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⚡" title="Component A is where 80% of B2B equipment procurement happens in Rajasthan">
              PM-KUSUM Component A ground-mounted solar plants require the full
              equipment stack — panels, mounting structures, inverters, cables,
              junction boxes, earthing, RMS, and civil foundations. Components B
              and C create demand for solar pump systems and net-metering
              equipment, but the highest-value, most repeatable B2B procurement
              opportunity in Rajasthan is Component A.
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: RESCO Model ── */}
          <Section id="resco" title="The RESCO Model: How Rajasthan's Projects Are Financed">
            <p style={p}>
              The dominant procurement model for PM-KUSUM A in Rajasthan is the{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                RESCO (Renewable Energy Service Company) model
              </strong>
              . Under this structure, a private developer wins a tender by quoting
              the lowest tariff per unit (kWh) of electricity they will sell to the
              DISCOM — this is why many Rajasthan PM-KUSUM contracts show a value
              of ₹0 (RESCO Tariff) in tender databases. The government pays nothing
              upfront. The RESCO developer finances the entire project and recovers
              its investment through 25 years of electricity sales.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Aspect", "Standard EPC (Govt Funded)", "RESCO (PM-KUSUM A Rajasthan)"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Project finance", "Government / DISCOM funds", "RESCO developer private finance"],
                    ["Plant ownership", "DISCOM / Govt from day 1", "RESCO for 25 years, then transfer"],
                    ["Tender metric", "Lowest EPC price (₹)", "Lowest tariff offered (₹/kWh)"],
                    ["Contract duration", "6 months – 2 years (build)", "25 years (build + operate + transfer)"],
                    ["Vendor relationship", "Short-term supply to EPC", "Long-term supply + spares to RESCO"],
                    ["O&M responsibility", "Separate O&M contractor", "RESCO bears full 25-year O&M cost"],
                    ["Risk to contractor", "Delivery & performance", "Financing + generation + O&M for 25 yrs"],
                  ].map(([aspect, epc, resco], i) => (
                    <tr key={aspect} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{aspect}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{epc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{resco}</td>
                    </tr>
                  ))}
                  <tr style={{ background: "#FFFFFF" }}>
                    <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, verticalAlign: "top" }}>B2B panel priority</td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="green">Price-competitive</Badge></td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="blue">Long-term reliability + 30yr warranty</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⚠" title="RESCO developers evaluate you on 25-year reliability — not just today's price">
              Because a RESCO company operates the plant for 25 years under a PPA,
              every rupee of unexpected O&amp;M cost comes out of their return on
              investment. RESCO developers in Rajasthan will pay a 5–10% premium
              for panels with better degradation warranties, inverters with longer
              MTBF ratings, and cables with proven outdoor life. Your B2B pitch to
              RESCO developers must lead with lifetime value — not upfront price.
            </Callout>
          </Section>

          <Rule />

          {/* ── S4: DISCOMs ── */}
          <Section id="discoms" title="JVVNL & AVVNL: The Key Awarding Authorities">
            <p style={p}>
              Three distribution companies govern solar procurement in Rajasthan
              under PM-KUSUM. Understanding each DISCOM&apos;s service territory
              and procurement focus helps B2B vendors target the right EPC
              contractors and RESCO developers in their target geography.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["DISCOM", "Service Territory", "PM-KUSUM Focus Districts", "Procurement Volume", "Website"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["JVVNL (Jodhpur)", "Western Rajasthan", "Jaisalmer, Barmer, Bikaner, Jalor, Jodhpur, Nagaur", "Highest — most active RESCO awarder in India", "jvvnl.com"],
                    ["AVVNL (Ajmer)", "Central Rajasthan", "Sirohi (Abu Road), Pali, Ajmer, Bhilwara, Chittorgarh", "High — EPC + RESCO mix", "avvnl.com"],
                    ["JVVNL (Jaipur)", "Eastern Rajasthan", "Sri Ganganagar, Hanumangarh, Sikar, Churu, Jhunjhunu", "High — RESCO + large EPC projects", "jvvnjaipur.com"],
                  ].map(([d, t, f, v, w], i) => (
                    <tr key={d} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{d}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{t}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{f}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{v}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S5: District Map ── */}
          <Section id="district-map" title="District-wise Opportunity Map">
            <p style={p}>
              Solar opportunity in Rajasthan is highly concentrated in specific
              districts — driven by land availability, irradiance levels,
              agricultural load density, and DISCOM procurement priorities. Below
              are the most active districts in 2024–25 based on actual tender award
              data.
            </p>

            <div
              className="rsm-district-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {[
                { district: "Jaisalmer", auth: "JVVNL Jodhpur", model: "RESCO 25yr", winner: "Atri Sunpower + Lal Singh & Co.", contract: "₹0 (RESCO Tariff)" },
                { district: "Barmer", auth: "JVVNL Jodhpur", model: "RESCO 25yr", winner: "Bhagwana Ram Choudhary & Co.", contract: "₹0 (RESCO Tariff)" },
                { district: "Bikaner", auth: "JVVNL Jodhpur", model: "RESCO 25yr", winner: "Bhawani Construction Company", contract: "₹0 (RESCO Tariff)" },
                { district: "Jalor", auth: "JVVNL Jodhpur", model: "RESCO 25yr", winner: "Solar Pulse (Noida)", contract: "₹0 (RESCO Tariff)" },
                { district: "Sri Ganganagar", auth: "JVVNL Jaipur", model: "RESCO 25yr", winner: "Ganesham Energy Solutions", contract: "₹0 (RESCO Tariff)" },
                { district: "Sirohi (Abu Road)", auth: "AVVNL Ajmer", model: "EPC 270 days", winner: "Bhanwariya Infra Projects", contract: "N/A (EPC)" },
                { district: "Jodhpur City", auth: "JVVNL Jodhpur", model: "EPC 270 days", winner: "Ganesh Ram Patel", contract: "₹2.91/kWh tariff" },
                { district: "Sikar / Churu", auth: "JVVNL Jaipur", model: "RESCO", winner: "Multiple RESCO bidders", contract: "Active pipeline 2025" },
              ].map(({ district, auth, model, winner, contract }) => (
                <div
                  key={district}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "4px solid #1A7A4A",
                    borderRadius: "0 6px 6px 0",
                    padding: "18px 20px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, gap: 10, flexWrap: "wrap" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#181C18", lineHeight: 1.3 }}>{district}</div>
                    <Badge variant={model.startsWith("RESCO") ? "blue" : "green"}>{model}</Badge>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#22A05A", marginBottom: 10 }}>
                    {auth}
                  </div>
                  <div style={{ fontSize: 12, color: "#6B7468", marginBottom: 4 }}>Winner</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#181C18", marginBottom: 10, lineHeight: 1.45 }}>{winner}</div>
                  <div style={{ fontSize: 12, color: "#6B7468", marginBottom: 4 }}>Contract</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: "#0D4A2F" }}>{contract}</div>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S6: Award Data ── */}
          <Section id="award-data" title="Real Award Data: Who Won What in Rajasthan (2024–25)">
            <p style={p}>
              The following award data represents verified tender results from
              Rajasthan&apos;s PM-KUSUM pipeline in 2024–25 — sourced from JVVNL,
              AVVNL, and BidAssist tender notifications. This is the exact
              procurement intelligence B2B solar vendors need to identify active
              buyers and initiate timely outreach.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Project Description", "Bid Winner", "Location", "Model", "Authority"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["PM-KUSUM A — Jaisalmer Division (EPC + 25yr O&M)", "Atri Sunpower Pvt Ltd", "Jaisalmer, RJ", "RESCO", "JVVNL Jodhpur"],
                    ["PM-KUSUM A — Jaisalmer Lot 107 (EPC + 25yr O&M)", "Lal Singh & Construction Company", "Jaisalmer, RJ", "RESCO", "JVVNL Jodhpur"],
                    ["PM-KUSUM A — Barmer Division (EPC + 25yr O&M)", "M/s Bhagwana Ram Choudhary & Co.", "Barmer, RJ", "RESCO", "JVVNL Jodhpur"],
                    ["PM-KUSUM A — Bikaner Division (EPC + 25yr O&M)", "Bhawani Construction Company", "Bikaner, RJ", "RESCO", "JVVNL Jodhpur"],
                    ["PM-KUSUM A — Jalor Division (EPC + 25yr O&M)", "Solar Pulse", "Jalor, RJ", "RESCO", "JVVNL Jodhpur"],
                    ["PM-KUSUM A — Sri Ganganagar (EPC + 25yr O&M)", "Ganesham Energy Solutions", "Sri Ganganagar, RJ", "RESCO", "JVVNL Jaipur"],
                    ["PM-KUSUM A — Abu Road & Reodar Divisions", "Bhanwariya Infra Projects Pvt Ltd", "Sirohi, RJ", "EPC 270d", "AVVNL Ajmer"],
                    ["PM-KUSUM A — Jodhpur City Divisions (CD-I to IV)", "Ganesh Ram Patel", "Jodhpur, RJ", "EPC 270d", "JVVNL Jodhpur"],
                  ].map(([proj, win, loc, model, auth], i) => (
                    <tr key={proj + i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{proj}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{win}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{loc}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={model === "RESCO" ? "blue" : "green"}>{model}</Badge>
                      </td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{auth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⏱" title="These companies are your primary B2B customers in Rajasthan right now">
              Every company in the award table above has won a PM-KUSUM contract
              and is actively sourcing equipment. The RESCO developers have a
              270-day delivery obligation from award date — meaning procurement is
              happening now. Contact each company within 2 weeks of award to
              maximise your window before procurement is finalised.
            </Callout>
          </Section>

          <Rule />

          {/* ── S7: Materials ── */}
          <Section id="materials" title="Materials & Components Required in Rajasthan Projects">
            <p style={p}>
              Every PM-KUSUM A project in Rajasthan requires the same core
              materials — confirmed from multiple JVVNL and AVVNL tender
              specifications. This consistency makes Rajasthan an excellent B2B
              target: qualify for one project and your product fits all others.
            </p>

            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                border: "1px solid #DDE8DB",
                borderRadius: 6,
                overflow: "hidden",
                margin: "24px 0",
                padding: 0,
              }}
            >
              {[
                "Mono-PERC Solar Panels (550–575 Wp, ALMM-listed)",
                "Solar Mounting Structures (Hot-Dip Galvanised, HDG)",
                "Grid-Tie Inverters (ALMM Part-II listed)",
                "DC Solar Cables (TUV-certified, UV-resistant)",
                "AC Armoured Cables (for grid connection)",
                "Array Junction Boxes — AJB (IP65+)",
                "DC Distribution Boards — DCDB",
                "AC Distribution Boards — ACDB",
                "Earthing Kit (copper bonded rods)",
                "Lightning Arrestors (IEC 62305)",
                "Remote Monitoring System — RMS (MNRE mandatory)",
                "RCC Pedestal Foundations",
                "Cable Trays (Hot-Dip Galvanised)",
                "Module Cleaning System",
                "33/11 kV Evacuation Line Infrastructure",
                "Safety Signages & Danger Boards",
                "PPE Kits (construction phase)",
              ].map((item, i) => (
                <li
                  key={item}
                  style={{
                    padding: "12px 18px",
                    fontSize: 14,
                    color: "#3A4238",
                    borderBottom: "1px solid #DDE8DB",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: i % 2 === 1 ? "#F0FAF5" : "#FFFFFF",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22A05A",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Callout variant="blue" icon="ℹ" title="RMS is non-negotiable — and it is an underserved B2B niche in Rajasthan">
              Remote Monitoring Systems are mandatory in 100% of PM-KUSUM A
              projects per MNRE guidelines. Every RESCO developer and EPC
              contractor in Rajasthan needs an MNRE-compliant RMS solution. Yet
              there are very few organised RMS vendors serving remote Jaisalmer or
              Barmer sites. For IoT hardware vendors and monitoring software
              companies, this is the highest-margin, lowest-competition B2B
              opportunity in the entire Rajasthan solar supply chain.
            </Callout>
          </Section>

          <Rule />

          {/* ── S8: Project Flow ── */}
          <Section id="project-flow" title="How a JVVNL PM-KUSUM Project Flows: Tender to 25-Year Operation">
            <p style={p}>
              Understanding the exact project lifecycle allows B2B vendors to time
              their outreach precisely — the procurement window opens immediately
              after Award of Contract (AOC) and closes within 6–8 weeks as RESCO
              developers finalise their supplier lists.
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
                  title: "JVVNL / AVVNL Issues PM-KUSUM A Tender",
                  desc: "DISCOM publishes tender on its website, BidAssist, and GEM portal — specifying capacity, location, tariff ceiling, and technical requirements including ALMM compliance.",
                },
                {
                  num: 2,
                  title: "RESCO Developers Submit Bids",
                  desc: "Developers submit technical and financial bids. The lowest tariff quote (₹/kWh) from a technically compliant bidder wins. Developers simultaneously approach vendors for pre-bid equipment pricing.",
                },
                {
                  num: 3,
                  title: "Award of Contract (AOC) — Your B2B Window Opens",
                  desc: "AOC is issued to the winning developer. This is the trigger: contact the developer within 10 days. They now have confirmed 25-year revenue and will finalise equipment procurement within 6–8 weeks.",
                },
                {
                  num: 4,
                  title: "Site Survey & Design Finalisation (Weeks 1–4)",
                  desc: "RESCO developer conducts site survey, finalises plant layout, and prepares detailed engineering. Equipment RFQs are sent to vendors. This is when your quote must be on the table.",
                },
                {
                  num: 5,
                  title: "Equipment Procurement (Weeks 4–10)",
                  desc: "Purchase orders issued to panel, inverter, BOS, and civil contractors. Phased delivery schedule agreed. Advance payments made. Regional stocking capability at this stage determines who wins orders.",
                },
                {
                  num: 6,
                  title: "Construction & Installation (Weeks 10–40)",
                  desc: "Civil works, mounting structures, panels, electrical systems installed. Progress monitored against 270-day contract timeline. LD clock is running — delivery delays are extremely costly.",
                },
                {
                  num: 7,
                  title: "Commissioning, Grid Sync & 25-Year O&M",
                  desc: "Plant commissioned, PR tested, synchronised with DISCOM grid. Commercial operation begins. 25-year PPA tariff payments start. RESCO developer begins long-term O&M — creating ongoing spares demand.",
                },
              ].map(({ num, title, desc }) => (
                <div
                  key={num}
                  style={{ position: "relative", marginBottom: 32 }}
                >
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
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontSize: 14.5,
                      color: "#6B7468",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S9: B2B Opportunities ── */}
          <Section id="b2b-opportunities" title="B2B Opportunities by Company Type">
            <p style={p}>
              Rajasthan&apos;s PM-KUSUM RESCO pipeline creates structured,
              repeatable B2B demand across nine distinct product and service
              categories. Here is how different types of companies can position
              themselves — with realistic deal sizes from actual project data.
            </p>

            <div
              className="rsm-b2b-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {[
                {
                  label: "Manufacturer",
                  title: "Solar Panel Supplier",
                  desc: "ALMM-listed Mono-PERC 550–575 Wp. Target RESCO developers within 10 days of AOC. Pitch 30-year warranty for 25-year RESCO projects.",
                  size: "₹30 L – ₹3 Cr per project",
                },
                {
                  label: "Fabricator",
                  title: "Mounting Structure Maker",
                  desc: "HDG fixed-tilt structures. Regional fab in Jodhpur / Bikaner area wins on delivery time vs distant suppliers.",
                  size: "₹10 L – ₹80 L per project",
                },
                {
                  label: "Manufacturer",
                  title: "Inverter Distributor",
                  desc: "ALMM Part-II listed string inverters. DISCOMs require remote monitoring capability built-in.",
                  size: "₹8 L – ₹60 L per project",
                },
                {
                  label: "Supplier",
                  title: "Cable & Wire Vendor",
                  desc: "TUV-certified DC cables and armoured AC cables. Regional stock in Jaipur or Jodhpur critical for 2–3 week delivery.",
                  size: "₹3 L – ₹35 L per project",
                },
                {
                  label: "Technology",
                  title: "RMS / Monitoring Vendor",
                  desc: "MNRE-compliant RMS mandatory in all projects. Near-zero competition in organised RMS space for remote Rajasthan sites.",
                  size: "₹1.5 L – ₹12 L per project",
                },
                {
                  label: "Services",
                  title: "EPC / Civil Contractor",
                  desc: "Bid as prime RESCO developer or civil subcontractor. Regional contractors with remote site earthworks experience are in high demand.",
                  size: "₹25 L – ₹20 Cr per project",
                },
                {
                  label: "Component",
                  title: "Electrical Panel Maker",
                  desc: "AJB, DCDB, ACDB panels in every project. IP65+ enclosures. Local Rajasthan manufacturers win on 2-week lead time.",
                  size: "₹1.5 L – ₹15 L per project",
                },
                {
                  label: "O&M Service",
                  title: "Long-Term O&M Provider",
                  desc: "RESCO companies need O&M partners for 25-year contracts across dispersed rural Rajasthan sites. Module cleaning + inverter maintenance.",
                  size: "₹1.5 L – ₹15 L per site/yr",
                },
                {
                  label: "Pump Vendor",
                  title: "Solar Pump Manufacturer",
                  desc: "PM-KUSUM Component B creates large pump procurement. State nodal agencies award bulk supply contracts for 3–10 HP solar pumps.",
                  size: "₹1.5 L – ₹4 L per pump",
                },
              ].map(({ label, title, desc, size }) => (
                <div
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderRadius: 8,
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#22A05A",
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </div>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#6B7468",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                  <span
                    style={{
                      marginTop: 12,
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#0D4A2F",
                      background: "#D6F0E2",
                      padding: "4px 10px",
                      borderRadius: 4,
                      display: "inline-block",
                    }}
                  >
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S10: How to Enter ── */}
          <Section id="how-to-enter" title="How to Enter the Rajasthan Solar Supply Chain">
            <p style={p}>
              Knowing Rajasthan is a large market is not enough. Here is a
              practical, 5-step strategy for B2B solar vendors to start generating
              real orders — based on what actually works.
            </p>

            <h3 style={h3Style}>Monitor JVVNL & AVVNL award data weekly</h3>
            <p style={p}>
              Subscribe to BidAssist alerts for Rajasthan PM-KUSUM tenders. Check
              JVVNL (jvvnl.com) and AVVNL (avvnl.com) websites weekly for new AOC
              publications. When an AOC is issued, you have a 10-day window before
              the developer&apos;s procurement team is flooded with calls.
            </p>

            <h3 style={h3Style}>Build a Rajasthan RESCO developer database</h3>
            <p style={p}>
              Create a contact list from award data: company name, HO address,
              director name, project location. The companies in Section 6 are your
              starting point. Add every new award to this database — RESCO
              developers who win one project typically bid for 3–5 more in the
              same DISCOM territory.
            </p>

            <h3 style={h3Style}>Get ALMM-listed for panels and inverters</h3>
            <p style={p}>
              Without ALMM Part-I (panels) or Part-II (inverters) listing from
              MNRE, you cannot supply any PM-KUSUM project above 10 kW. This is
              non-negotiable. Begin the process immediately if not already done —
              it takes 3–6 months including factory inspection.
            </p>

            <h3 style={h3Style}>Establish regional stock in Jodhpur or Bikaner</h3>
            <p style={p}>
              Most active RESCO projects are in western Rajasthan — Jaisalmer,
              Barmer, Bikaner. Vendors who maintain regional stock in Jodhpur or
              Bikaner can offer 2–3 week delivery vs 6–8 weeks from distant
              factories. This delivery advantage consistently wins orders over
              lower-priced competitors.
            </p>

            <h3 style={h3Style}>Create a PM-KUSUM specific product offer</h3>
            <p style={p}>
              Develop a one-page technical datasheet showing how your product
              meets JVVNL/AVVNL specifications exactly: ALMM listing reference,
              IEC certifications, watt-peak confirmation, temperature coefficient,
              IP rating, warranty terms. RESCO developers evaluate 10–15 vendors
              simultaneously — vendors who reduce their evaluation workload win
              orders faster.
            </p>

            <Callout variant="green" icon="💡" title="Time your first contact within 10 days of AOC — not after">
              Award data is public on BidAssist and DISCOM websites. The RESCO
              developers who won PM-KUSUM contracts last month are actively
              finalising their vendor list right now. A call that references their
              specific project, district, and capacity — within the first 10 days
              of AOC — is 5x more likely to result in a meeting than a cold
              outreach with no project context.
            </Callout>
          </Section>

          <Rule />

          {/* ── S11: Challenges ── */}
          <Section id="challenges" title="Challenges & Risk Factors in Rajasthan Solar">
            <p style={p}>
              Rajasthan offers immense B2B opportunity, but vendors entering the
              market must plan for distinct geographic, financial, and regulatory
              risks. Here is what to anticipate — and how to mitigate it.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Challenge", "Impact on B2B Vendor", "Mitigation Strategy"].map((th) => (
                      <th
                        key={th}
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          fontSize: 12.5,
                          letterSpacing: "0.04em",
                        }}
                      >
                        {th}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Extreme summer temperatures (50°C+)",
                      "Panel and cable packaging degrades in transit; storage at remote sites requires shaded warehousing",
                      "Use heat-resistant outer packaging; schedule deliveries before April or after September",
                    ],
                    [
                      "Poor road connectivity to remote sites",
                      "Last-mile delivery from Jodhpur to Jaisalmer / Barmer adds 3–4 days and ₹0.80–1.20/Wp to logistics cost",
                      "Partner with regional logistics companies experienced in Thar Desert routes",
                    ],
                    [
                      "RESCO developer financial risk",
                      "Some small RESCO developers lack project finance capacity; default risk if PPA is not executed",
                      "Verify DISCOM-executed PPA before extending credit; prioritise developers with 2+ completed projects",
                    ],
                    [
                      "Quarterly ALMM list updates",
                      "Panel or inverter model may be delisted mid-project if manufacturer fails to renew certifications",
                      "Monitor MNRE ALMM list monthly; ensure supply contracts specify ALMM compliance liability",
                    ],
                    [
                      "Competitive tender pricing pressure",
                      "RESCO tariff bids are highly competitive (₹2.80–3.20/kWh) — developers squeeze BOS costs to win",
                      "Differentiate on warranty and reliability for long-term RESCO savings rather than price alone",
                    ],
                    [
                      "Dust and sand ingress",
                      "IP ratings for RMS, junction boxes, and inverters must be IP65 minimum; IP68 preferred in Thar region",
                      "Specify IP68 for all outdoor electrical equipment; verify with third-party test certificates",
                    ],
                  ].map(([c, i_, m], idx) => (
                    <tr key={c} style={{ background: idx % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{c}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{i_}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{m}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S12: FAQ ── */}
          <Section id="faq" title="FAQ: B2B Vendor Questions Answered">
            <h3 style={h3Style}>
              Q: Which DISCOM is the most active for PM-KUSUM tenders in Rajasthan?
            </h3>
            <p style={p}>
              JVVNL Jodhpur is the most active PM-KUSUM Component A awarding
              authority in India as of 2025. It has awarded the highest volume of
              RESCO contracts in western Rajasthan districts — Jaisalmer (multiple
              lots), Barmer, Bikaner, and Jalor. AVVNL Ajmer is second, with
              active procurement in Sirohi, Pali, and central Rajasthan. JVVNL
              Jaipur covers eastern districts including Sri Ganganagar and
              Hanumangarh.
            </p>

            <h3 style={h3Style}>
              Q: What is the typical contract period for PM-KUSUM A projects in Rajasthan?
            </h3>
            <p style={p}>
              The construction period is 270 days from the date of Award of
              Contract (AOC) for both RESCO and EPC mode projects. Under the RESCO
              model, this 270-day construction period is followed by a 25-year
              Power Purchase Agreement (PPA) during which the RESCO developer is
              responsible for full operation and maintenance. The developer&apos;s
              financial return depends entirely on plant performance over this
              25-year period.
            </p>

            <h3 style={h3Style}>
              Q: Can a small B2B vendor from outside Rajasthan win supply orders?
            </h3>
            <p style={p}>
              Yes — and many already do. Solar Pulse, a RESCO developer that won a
              PM-KUSUM contract in Jalor, is headquartered in Noida, UP. Ganesham
              Energy Solutions (Sri Ganganagar winner) is based in Jaipur. B2B
              vendors from Gujarat, Maharashtra, and UP regularly supply Rajasthan
              projects. The key requirements are: ALMM listing, ability to deliver
              to remote sites within 2–3 weeks, and competitive landed pricing to
              western Rajasthan sites.
            </p>

            <h3 style={h3Style}>
              Q: What is the typical RESCO tariff in Rajasthan PM-KUSUM 2025?
            </h3>
            <p style={p}>
              Winning RESCO tariffs in Rajasthan have ranged from ₹2.80 to ₹3.20
              per kWh in 2024–25, with ₹3.10/kWh being the most commonly cited
              market rate. The tariff ceiling set by DISCOMs is typically
              ₹3.50–4.00/kWh — bids below this ceiling qualify for financial
              evaluation. Lower winning tariffs create more pressure on equipment
              costs, which is why B2B vendors must offer their most competitive
              pricing for RESCO procurement.
            </p>

            <h3 style={h3Style}>
              Q: How do I find out which Rajasthan PM-KUSUM projects were recently awarded?
            </h3>
            <p style={p}>
              The most reliable methods are: (1) BidAssist — archives all
              Rajasthan PM-KUSUM award notifications with contractor names and
              project details; (2) JVVNL website (jvvnl.com) — publishes AOC
              notices in the tender section; (3) AVVNL website (avvnl.com) —
              similar AOC publication; (4) HeadsUp B2B — provides weekly curated
              Rajasthan solar award alerts with contractor contact information for
              B2B sales teams.
            </p>

            <h3 style={h3Style}>
              Q: What materials are specified in every Rajasthan PM-KUSUM A tender?
            </h3>
            <p style={p}>
              Without exception, every PM-KUSUM A tender in Rajasthan specifies:
              Mono-PERC solar panels (550–575 Wp, ALMM-listed), HDG solar mounting
              structures, ALMM-listed grid-tie inverters, TUV-certified DC solar
              cables, AC armoured cables, IP65 AJB / DCDB / ACDB boxes, earthing
              kits, lightning arrestors, and an MNRE-compliant Remote Monitoring
              System (RMS). The RMS is mandatory and must transmit real-time data
              to both the DISCOM and the state nodal agency.
            </p>
          </Section>

          {/* ── CTA ── */}
          <div
            className="bg-headupb2b"
            style={{
              borderRadius: 8,
              padding: "52px 40px",
              textAlign: "center",
              marginTop: 72,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "#FFFFFF",
                paddingTop: 0,
                fontSize: 28,
                marginBottom: 14,
                fontWeight: 700,
              }}
            >
              Find Rajasthan Solar Project Leads Today
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 500,
                margin: "0 auto 30px",
                fontSize: 16,
              }}
            >
              HeadsUp B2B tracks live JVVNL, AVVNL &amp; PM-KUSUM award data —
              updated weekly. Know who won, what they need, and how to reach them.
            </p>
            <a
              
              style={{
                display: "inline-block",
                background: "#00d4f5",
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 34px",
                borderRadius: 4,
                textDecoration: "none",
                letterSpacing: "0.03em",
              }}
            >
              Access Rajasthan Solar Leads →
            </a>
          </div>

          {/* ── ARTICLE FOOTER ── */}
          <div
            style={{
              marginTop: 60,
              paddingTop: 24,
              borderTop: "1px solid #DDE8DB",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 13, color: "#6B7468" }}>
              Published April 2025 · HeadsUp Corporation Solar Research Series
            </span>
            {/* <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["PM-KUSUM Rajasthan", "RESCO Projects", "JVVNL Solar", "Jaisalmer Solar", "Barmer Solar", "Bikaner Solar", "B2B Solar India", "ALMM", "HeadsUp B2B"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      border: "1px solid #DDE8DB",
                      borderRadius: 3,
                      color: "#6B7468",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
