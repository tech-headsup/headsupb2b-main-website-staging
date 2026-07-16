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

export default function PmKusumGuidePage() {
  return (
    <>
      <Head>
        <title>What is PM-KUSUM? A Complete B2B Guide for Solar Companies</title>
        <meta
          name="description"
          content="India's largest rural solar scheme explained for B2B solar companies. Learn how PM-KUSUM works, what components are procured, and how to enter the supply chain."
        />
        <meta
          name="keywords"
          content="PM-KUSUM, solar B2B, RESCO model, solar EPC India, Rajasthan solar, Gujarat solar, ALMM, solar procurement"
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/what-is-pm-kusum"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="What is PM-KUSUM? A Complete B2B Guide for Solar Companies"
        />
        <meta
          property="og:description"
          content="India's largest rural solar scheme explained for B2B solar companies. Learn how PM-KUSUM works, what components are procured, and how to enter the supply chain."
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/what-is-pm-kusum"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/pmkusum.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What is PM-KUSUM? A Complete B2B Guide for Solar Companies"
        />
        <meta
          name="twitter:description"
          content="India's largest rural solar scheme explained for B2B solar companies."
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/pmkusum.webp"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap"
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
            {/* breadcrumb */}
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
              SOLAR INDUSTRY GUIDE · B2B EDITION · APRIL 2026
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
              What is PM-KUSUM? A Complete B2B Guide for Solar Companies
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
              India&apos;s largest rural solar scheme is generating thousands of crores
              in procurement every year. Here is everything a solar B2B company needs
              to know — from how the scheme works to where the orders come from.
            </p>

            {/* pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "18 min read",
                "Updated April 2026",
                "For Solar Vendors & EPC Contractors",
                "Rajasthan & Gujarat Focus",
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
                ["#what-is", "What is PM-KUSUM?"],
                ["#three-components", "The three components (A, B, C)"],
                ["#resco", "RESCO model explained"],
                ["#key-buyers", "Key buyers & awarding authorities"],
                ["#materials", "Materials & components procured"],
                ["#how-projects-flow", "How a PM-KUSUM project flows"],
                ["#rajasthan", "Rajasthan: the biggest market"],
                ["#gujarat", "Gujarat PM-KUSUM pipeline"],
                ["#b2b-opportunities", "B2B opportunities by company type"],
                ["#how-to-enter", "How to enter the PM-KUSUM supply chain"],
                ["#almm", "ALMM compliance"],
                ["#faq", "Key questions B2B vendors ask"],
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

          {/* ── S1: What is PM-KUSUM ── */}
          <Section id="what-is" title="What is PM-KUSUM?">
            <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 28 }}>
              PM-KUSUM — Pradhan Mantri Kisan Urja Suraksha evam Utthaan
              Mahabhiyan — is the Government of India&apos;s flagship scheme to
              bring solar energy to rural India, with a specific focus on farmers,
              agricultural feeders, and decentralised renewable energy.
            </p>
            <p style={p}>
              Launched by the Ministry of New and Renewable Energy (MNRE) in 2019
              and substantially expanded since, PM-KUSUM is one of the most
              consequential solar procurement programmes in the world by installed
              capacity target. The scheme aims to add{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                30.8 GW of solar capacity
              </strong>{" "}
              through three distinct components, transforming how electricity reaches
              India&apos;s 600+ million rural population.
            </p>
            <p style={p}>
              For B2B solar companies — whether you manufacture panels, supply
              mounting structures, fabricate junction boxes, or provide EPC services
              — PM-KUSUM is not a policy document to file away. It is an active
              procurement pipeline generating hundreds of tenders and thousands of
              crores in equipment orders every quarter, particularly in Rajasthan,
              Gujarat, Madhya Pradesh, and Uttar Pradesh.
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
                &ldquo;PM-KUSUM is the single largest driver of decentralised
                solar procurement in India. Every village-level solar plant
                requires the same components as a utility-scale project — just at
                a smaller scale, multiplied across hundreds of locations.&rdquo;
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
                — B2B Solar Research, 2025–26
              </cite>
            </blockquote>

            {/* Stat strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
                background: "#DDE8DB",
                border: "1px solid #DDE8DB",
                borderRadius: 6,
                overflow: "hidden",
                margin: "36px 0",
              }}
            >
              {[
                { num: "30.8", unit: " GW", desc: "Total solar capacity target under PM-KUSUM" },
                { num: "₹34,000", unit: " Cr", desc: "Central government financial support committed" },
                { num: "25", unit: " Yrs", desc: "Standard Power Purchase Agreement (PPA) duration under RESCO mode" },
                { num: "20+", unit: " States", desc: "States actively implementing PM-KUSUM projects" },
              ].map(({ num, unit, desc }) => (
                <div
                  key={num}
                  style={{
                    background: "#FFFFFF",
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 30,
                      color: "#0D4A2F",
                      lineHeight: 1,
                      marginBottom: 6,
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ color: "#22A05A" }}>{num}</span>
                    {unit}
                  </div>
                  <div style={{ fontSize: 12, color: "#6B7468", lineHeight: 1.5 }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S2: Three Components ── */}
          <Section id="three-components" title="The Three Components of PM-KUSUM">
            <p style={p}>
              PM-KUSUM is structured into three distinct components — A, B, and C
              — each targeting a different segment of rural solar deployment. Each
              creates different supply chain dynamics for B2B vendors.
            </p>

            {/* Component Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 16,
                margin: "32px 0",
              }}
            >
              {[
                {
                  tag: "Component A",
                  tagBg: "#1A7A4A",
                  title: "Decentralised Ground-Mounted Solar",
                  desc: "Grid-connected renewable power plants up to 2 MW on barren or uncultivable land owned by farmers, cooperatives, panchayats, or farmer producer organisations.",
                  kvs: [
                    ["Target capacity", "10,000 MW"],
                    ["Project size", "500 kW – 2 MW"],
                    ["Model", "RESCO / EPC"],
                    ["Key states", "Rajasthan, Gujarat"],
                  ],
                },
                {
                  tag: "Component B",
                  tagBg: "#1E3A5F",
                  title: "Solar Powered Agriculture Pumps",
                  desc: "Solarisation of individual off-grid diesel or electric agricultural pumps. Reduces electricity cost for farmers to near zero.",
                  kvs: [
                    ["Target pumps", "20 Lakh units"],
                    ["Pump range", "3 HP – 10 HP"],
                    ["Panel per pump", "2.5–5 kWp"],
                    ["Subsidy", "60% central + state"],
                  ],
                },
                {
                  tag: "Component C",
                  tagBg: "#D97706",
                  title: "Solarisation of Grid Pumps",
                  desc: "Existing grid-connected pumps get solar panels. Farmers consume solar power and sell surplus electricity to the DISCOM at a predetermined tariff.",
                  kvs: [
                    ["Target pumps", "15 Lakh units"],
                    ["Revenue", "Surplus power sale"],
                    ["Grid type", "Existing DISCOM"],
                    ["Feeder solar", "Also covered"],
                  ],
                },
              ].map(({ tag, tagBg, title, desc, kvs }) => (
                <div
                  key={tag}
                  style={{
                    border: "1px solid #DDE8DB",
                    borderRadius: 8,
                    overflow: "hidden",
                    background: "#FFFFFF",
                  }}
                >
                  <div
                    style={{
                      padding: "18px 20px 14px",
                      borderBottom: "1px solid #DDE8DB",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        padding: "3px 9px",
                        borderRadius: 3,
                        display: "inline-block",
                        marginBottom: 10,
                        background: tagBg,
                      }}
                    >
                      {tag}
                    </span>
                    <h4
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#181C18",
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {title}
                    </h4>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <p style={{ fontSize: 13.5, color: "#6B7468", lineHeight: 1.6, margin: "0 0 10px" }}>
                      {desc}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {kvs.map(([k, v]) => (
                        <div
                          key={k}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "baseline",
                            fontSize: 12.5,
                            padding: "5px 0",
                            borderBottom: "1px dashed #DDE8DB",
                          }}
                        >
                          <span style={{ color: "#6B7468" }}>{k}</span>
                          <span style={{ fontWeight: 600, color: "#181C18", fontSize: 13 }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Callout variant="green" icon="💡" title="B2B tip: which component matters most for equipment suppliers?">
              Component A drives the largest individual project values (₹2 Cr – ₹30
              Cr per cluster) and requires the most complete BOS procurement —
              panels, structures, inverters, cables, RMS, and civil works. Component
              B creates high-volume, smaller-value orders for solar pump
              manufacturers. Most B2B equipment vendors will find their largest
              opportunities in Component A.
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: RESCO ── */}
          <Section id="resco" title="The RESCO Model: Zero-Upfront Solar Explained">
            <p style={p}>
              The most distinctive feature of PM-KUSUM Component A is the{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                RESCO (Renewable Energy Service Company) model
              </strong>
              . Under RESCO, the developer finances, designs, installs, and
              operates the solar plant at zero upfront cost to the landowner or
              government body — recovering its investment by selling electricity to
              the DISCOM at a fixed tariff over a 25-year Power Purchase Agreement
              (PPA).
            </p>
            <p style={p}>
              This is why many PM-KUSUM tenders in Rajasthan show a contract amount
              of{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                ₹0 (Tariff-based RESCO)
              </strong>
              . The government is not paying for the plant — it is guaranteeing a
              purchase price, which enables the RESCO developer to raise private
              financing.
            </p>

            {/* RESCO flow diagram */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DDE8DB",
                borderRadius: 8,
                padding: "28px 24px",
                margin: "28px 0",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6B7468",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                How the RESCO Model Works
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {[
                  { label: "DISCOM / Govt", sub: "Guarantees fixed tariff for 25 yrs", color: "#1E3A5F", bg: "#E8F0FA" },
                  { label: "RESCO Developer", sub: "Finances, builds & owns the plant", color: "#1A7A4A", bg: "#F0FAF5" },
                  { label: "Solar Plant", sub: "Generates electricity & revenue", color: "#D97706", bg: "#FEF3C7" },
                  { label: "Farmer / Land", sub: "Earns land lease at zero cost", color: "#0D4A2F", bg: "#D6F0E2" },
                ].map(({ label, sub, color, bg }, i, arr) => (
                  <>
                    <div
                      key={label}
                      style={{
                        background: bg,
                        border: `1px solid ${color}22`,
                        borderRadius: 8,
                        padding: "16px 14px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 6 }}>{label}</div>
                      <div style={{ fontSize: 11, color: "#6B7468", lineHeight: 1.45 }}>{sub}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div key={`arrow-${i}`} style={{ fontSize: 18, color: "#22A05A", textAlign: "center" }}>→</div>
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* EPC vs RESCO Table */}
            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr className="bg-headupb2b">
                    {["Aspect", "Standard EPC Model", "RESCO Model (PM-KUSUM A)"].map(
                      (th) => (
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
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Who finances?", "Government / authority", "RESCO developer (private)"],
                    ["Who owns plant?", "Government from day one", "RESCO for 25 yrs, then transfers"],
                    ["Contract amount", "Fixed lump sum (e.g. ₹25 Cr)", "Tariff per unit (e.g. ₹3.10/kWh)"],
                    ["Risk on contractor", "Delivery & performance", "Financing + 25 yrs of performance"],
                    ["B2B vendor sells to", "EPC contractor (upfront)", "RESCO developer (upfront + spares)"],
                    ["O&M responsibility", "Separate O&M contract", "RESCO for full 25-year term"],
                  ].map(([aspect, epc, resco], i) => (
                    <tr key={aspect} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{aspect}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{epc}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{resco}</td>
                    </tr>
                  ))}
                  {/* Last row with badges */}
                  <tr style={{ background: "#FFFFFF" }}>
                    <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, verticalAlign: "top" }}>B2B opportunity size</td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="green">Large upfront orders</Badge></td>
                    <td style={{ padding: "12px 16px", verticalAlign: "top" }}><Badge variant="blue">Upfront + 25-yr spares</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="amber" icon="⚠" title="Important for B2B vendors: RESCO developers prioritise 25-year reliability">
              Because a RESCO company owns and operates the plant for 25 years, they
              evaluate equipment on long-term reliability and warranty terms — not
              just upfront price. A panel manufacturer offering a 30-year linear
              performance warranty will consistently beat a cheaper competitor with a
              10-year warranty. Adjust your B2B pitch and technical documentation
              accordingly.
            </Callout>
          </Section>

          <Rule />

          {/* ── S4: Key Buyers ── */}
          <Section id="key-buyers" title="Key Buyers & Awarding Authorities">
            <p style={p}>
              PM-KUSUM projects are awarded by state DISCOMs, nodal agencies, and
              renewable energy departments. Knowing who awards contracts in your
              target state tells you which EPC companies to approach — because award
              data reveals who just won a project and is about to start procurement.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {[
                {
                  state: "Rajasthan",
                  name: "JVVNL (Jodhpur Division)",
                  desc: "The most active PM-KUSUM Component A authority in India. Awarded dozens of RESCO contracts in Jaisalmer, Barmer, Bikaner, Jalor, and Jodhpur in 2024–25. Real contractors from your Excel data won here.",
                },
                {
                  state: "Gujarat",
                  name: "GUVNL",
                  desc: "Gujarat's state utility awards solar capacity under competitive bidding. Coal India's 300 MW was procured through GUVNL. Also implements PM-KUSUM for farmer and feeder solarisation statewide.",
                },
                {
                  state: "Rajasthan",
                  name: "AVVNL (Ajmer Division)",
                  desc: "Covers central Rajasthan. Awarded EPC contracts in Sirohi (Abu Road & Reodar Divisions). Bhanwariya Infra Projects won a KUSUM EPC contract here worth ₹270-day delivery in August 2025.",
                },
                {
                  state: "Multi-State",
                  name: "NTPC / SECI Central",
                  desc: "SECI and NTPC implement PM-KUSUM aggregation schemes on behalf of multiple states, pooling demand for larger competitive bids. Great entry point for larger-scale B2B suppliers.",
                },
                {
                  state: "Uttar Pradesh",
                  name: "UPNEDA / State DISCOMs",
                  desc: "UP has a large pipeline of Component A and B projects. Active in Gorakhpur, Lucknow, and western UP districts. Brisk Associates won a solar+infrastructure contract worth ₹1.9 Cr in Gorakhpur.",
                },
                {
                  state: "Rajasthan",
                  name: "JVVNL (Jaipur Division)",
                  desc: "Handles eastern Rajasthan PM-KUSUM A, including Sri Ganganagar. Ganesham Energy Solutions (Jaipur) won a RESCO contract here in April 2025. Both EPC and RESCO models are used.",
                },
              ].map(({ state, name, desc }) => (
                <div
                  key={name}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "4px solid #1A7A4A",
                    borderRadius: "0 6px 6px 0",
                    padding: "18px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#22A05A",
                      marginBottom: 4,
                    }}
                  >
                    {state}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {name}
                  </div>
                  <p style={{ fontSize: 13, color: "#6B7468", lineHeight: 1.55, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S5: Materials ── */}
          <Section id="materials" title="Materials & Components Procured">
            <p style={p}>
              Every PM-KUSUM Component A project requires a standard set of
              materials and components — virtually identical across all states. This
              consistency makes PM-KUSUM an excellent B2B market: once you qualify
              for one project, your specifications match dozens more. The list below
              is derived directly from actual project award data across Rajasthan and
              Gujarat.
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
                "Mono-PERC Solar Panels (550–575 Wp)",
                "Solar Mounting Structures (Hot-Dip Galvanised)",
                "Grid-Tie Inverters (ALMM-listed)",
                "DC Solar Cables (TUV-certified, flame-retardant)",
                "AC Armoured Cables (for grid connection)",
                "Array Junction Boxes (AJB)",
                "DC Distribution Boards (DCDB)",
                "AC Distribution Boards (ACDB)",
                "Earthing Kit (copper bonded rods)",
                "Lightning Arrestors (IEC 62305)",
                "Remote Monitoring System (RMS) — Mandatory",
                "RCC Pedestal Foundations",
                "Cable Trays (Hot-Dip Galvanised)",
                "Module Cleaning System",
                "33/11 kV Evacuation Line Infrastructure",
                "Safety Signages & Danger Boards",
                "PPE Kits (construction phase)",
                "Solar Water Pump (Component B only)",
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

            <Callout variant="blue" icon="ℹ" title="RMS is mandatory in every PM-KUSUM A project — and often overlooked by vendors">
              Remote Monitoring Systems (RMS) are a non-negotiable MNRE requirement.
              The RMS must transmit real-time plant performance data to both the
              DISCOM and state nodal agency. This creates a recurring B2B opportunity
              for IoT hardware vendors, data logger manufacturers, and monitoring
              software providers. Every project needs one — and they require ongoing
              maintenance and data plans across the full 25-year RESCO term.
            </Callout>
          </Section>

          <Rule />

          {/* ── S6: How Projects Flow ── */}
          <Section id="how-projects-flow" title="How a PM-KUSUM Project Flows: Tender to Commissioning">
            <p style={p}>
              Understanding the project lifecycle helps B2B vendors time their
              engagement correctly. The window between award and procurement is often
              just 4–8 weeks — vendors who are pre-qualified must be ready to respond
              immediately when a contract is signed.
            </p>

            {/* Steps */}
            <div style={{ position: "relative", paddingLeft: 48, margin: "32px 0" }}>
              {/* vertical line */}
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
                  title: "Tender Issuance",
                  desc: "DISCOM or state nodal agency publishes tender specifying capacity, tariff ceiling (RESCO), location, and technical requirements on BidAssist, GEM portal, and DISCOM website.",
                },
                {
                  num: 2,
                  title: "Technical & Financial Bid Submission",
                  desc: "EPC contractors or RESCO developers submit bids. For RESCO, lowest tariff per kWh from a technically compliant bidder wins. For EPC, lowest lump sum project cost.",
                },
                {
                  num: 3,
                  title: "Award of Contract (AOC)",
                  desc: "Winning company receives AOC — the critical trigger for B2B vendors to initiate contact. The contractor has confirmed revenue and begins procurement planning within days of signing.",
                },
                {
                  num: 4,
                  title: "Survey, Design & Procurement",
                  desc: "Contractor conducts detailed site survey, finalises plant layout, and issues RFQs to equipment vendors. For a 1–2 MW PM-KUSUM plant, procurement typically takes 4–10 weeks.",
                },
                {
                  num: 5,
                  title: "Civil Works & Installation",
                  desc: "RCC foundations cast, mounting structures erected, panels installed, electrical systems connected. Construction typically takes 90–150 days of the 270-day contract period.",
                },
                {
                  num: 6,
                  title: "Grid Synchronisation & Commissioning",
                  desc: "Plant synchronised with DISCOM grid, performance ratio (PR) test conducted, plant handed over for commercial operation. The 25-year PPA begins from commissioning date.",
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

          {/* ── S7: Rajasthan ── */}
          <Section id="rajasthan" title="Rajasthan: India's Most Active PM-KUSUM Market">
            <p style={p}>
              Rajasthan has emerged as the single most active state for PM-KUSUM
              Component A — driven by among the world&apos;s highest solar irradiance,
              vast tracts of barren land, a supportive state government, and DISCOMs
              actively pursuing tariff-based RESCO contracts to reduce their
              agricultural power subsidy burden.
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["District / Division", "DISCOM", "Model", "Winning Company (2024–25)"].map(
                      (th) => (
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
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Jaisalmer", "JVVNL Jodhpur", "RESCO", "Atri Sunpower Pvt Ltd"],
                    ["Jaisalmer (Lot-107)", "JVVNL Jodhpur", "RESCO", "Lal Singh & Construction Co."],
                    ["Barmer", "JVVNL Jodhpur", "RESCO", "Bhagwana Ram Choudhary & Co."],
                    ["Bikaner", "JVVNL Jodhpur", "RESCO", "Bhawani Construction Company"],
                    ["Jalor", "JVVNL Jodhpur", "RESCO", "Solar Pulse (Noida)"],
                    ["Sri Ganganagar", "JVVNL / Jaipur", "RESCO", "Ganesham Energy Solutions"],
                    ["Sirohi (Abu Road)", "AVVNL", "EPC", "Bhanwariya Infra Projects Pvt. Ltd."],
                    ["Jodhpur City Divs", "JVVNL Jodhpur", "EPC", "Ganesh Ram Patel"],
                  ].map(([district, discom, model, winners], i) => (
                    <tr key={district + i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{district}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{discom}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={model === "RESCO" ? "blue" : "green"}>{model}</Badge>
                      </td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{winners}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={p}>
              What this data tells B2B vendors is clear: there are dozens of
              small-to-medium solar contractors across Rajasthan actively executing
              PM-KUSUM projects and sourcing equipment. The procurement decisions are
              being made by company founders and project managers — not by large
              corporate procurement departments. Relationship-based sales works
              extremely well in this segment.
            </p>
          </Section>

          <Rule />

          {/* ── S8: Gujarat ── */}
          <Section id="gujarat" title="Gujarat PM-KUSUM & Solar Pipeline">
            <p style={p}>
              Gujarat presents a different but equally substantial B2B opportunity.
              While Rajasthan leads in PM-KUSUM A RESCO volume, Gujarat leads in
              larger utility-scale projects using the same equipment stack. The
              Khavda Renewable Energy Park in Kutch is becoming one of the world&apos;s
              largest solar parks — GSECL, NTPC, and Coal India have all awarded
              large EPC contracts there, with individual awards reaching ₹1,217 Cr.
            </p>
            <p style={p}>
              Gujarat also has an active rooftop solar pipeline through its
              Nagarpalika (municipal body) network. In 2024–25, Anklav Nagarpalika
              (Anand), Santrampur Nagarpalika (Mahisagar), Ranavav Nagarpalika
              (Porbandar), and others awarded rooftop solar contracts in the ₹1.4 Cr
              – ₹2.2 Cr range, representing consistent repeat demand for rooftop
              solar vendors.
            </p>

            {/* Gujarat Projects Table — NEW from PDF */}
            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Project / Authority", "Location", "Contract Value", "Awardee"].map(
                      (th) => (
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
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["100 MW Solar (CIL Balance Work)", "Banaskantha, Gujarat", "₹485 Cr", "Kosol Energie Pvt Ltd"],
                    ["300 MW Solar (CIL via GUVNL)", "Kachchh, Gujarat", "₹1,217 Cr", "NABARD (bidder)"],
                    ["600 MW BOS (NTPC Khavda)", "Kachchh, Gujarat", "₹136 Cr", "Phaloudi Constructions"],
                    ["100 MW BOS (GSECL Khavda)", "Vadodara, Gujarat", "₹119 Cr", "GHV India Pvt Ltd"],
                    ["10 MW Floating Solar (ONGC)", "Surat, Gujarat", "₹25.88 Cr", "Purshotam Profiles Pvt Ltd"],
                    ["Rooftop Solar (Nagarpalika)", "Anand, Gujarat", "₹1.40 Cr", "SS Enterprise"],
                    ["Rooftop Solar (Nagarpalika)", "Bharuch, Gujarat", "₹2.20 Cr", "SS Enterprise"],
                  ].map(([project, location, value, awardee], i) => (
                    <tr key={project + i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{project}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{location}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", fontWeight: 600 }}>{value}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>{awardee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="green" icon="🌞" title="Gujarat Nagarpalika tenders: a hidden but high-volume B2B market">
              Individual Nagarpalika contracts are small (₹1–3 Cr), but Gujarat has
              162 Nagarpalikas — many actively procuring rooftop solar through state
              schemes linked to PM-KUSUM. A vendor empanelled as a preferred supplier
              to 20–30 Nagarpalikas has a predictable, recurring revenue pipeline
              that is far less competitive than utility-scale bidding.
            </Callout>
          </Section>

          <Rule />

          {/* ── S9: B2B Opportunities ── */}
          <Section id="b2b-opportunities" title="B2B Opportunities by Company Type">
            <p style={p}>
              PM-KUSUM creates structured procurement demand across a wide range of
              product and service categories. Here is how different types of B2B
              companies can position themselves within the PM-KUSUM supply chain —
              with realistic deal size estimates based on actual project data.
            </p>

            <div
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
                  desc: "Highest-value procurement item. Must be ALMM-listed. Mono-PERC 550–575 Wp is the dominant spec. Target RESCO developers and EPC contractors immediately after award.",
                  size: "₹50 L – ₹5 Cr per project",
                },
                {
                  label: "Fabricator",
                  title: "Mounting Structure Maker",
                  desc: "HDG fixed-tilt structures for ground-mounted plants. High volume, repeat orders. Regional fabricators with fast delivery outcompete distant suppliers.",
                  size: "₹15 L – ₹1.5 Cr per project",
                },
                {
                  label: "Manufacturer",
                  title: "Inverter Distributor",
                  desc: "String inverters for most PM-KUSUM A plants (up to 2 MW). Must be ALMM-listed. DISCOMs specify remote monitoring capability as a built-in requirement.",
                  size: "₹10 L – ₹80 L per project",
                },
                {
                  label: "Supplier",
                  title: "Cable & Wire Vendor",
                  desc: "DC solar cables and AC armoured cables in large quantities. TUV-certified DC cables mandatory. Regional distributors with stock availability win on delivery speed.",
                  size: "₹5 L – ₹50 L per project",
                },
                {
                  label: "Technology",
                  title: "RMS / Monitoring Vendor",
                  desc: "Mandatory for all PM-KUSUM A projects. Vendors offering turnkey RMS (hardware + SIM + cloud) with MNRE-compliant data formats have very little competition.",
                  size: "₹2 L – ₹15 L per project",
                },
                {
                  label: "Services",
                  title: "EPC / Civil Contractor",
                  desc: "Bid as a prime RESCO developer or civil subcontractor. Regional civil contractors with earthworks and foundation experience are in high demand across Rajasthan and Gujarat.",
                  size: "₹50 L – ₹30 Cr per project",
                },
                {
                  label: "Component",
                  title: "Electrical Panel Maker",
                  desc: "AJB, DCDB, and ACDB panels required in every PM-KUSUM plant. IP65-rated enclosures with MNRE-compliant specs. Local manufacturers can offer 2–3 week lead times.",
                  size: "₹2 L – ₹20 L per project",
                },
                {
                  label: "Pump",
                  title: "Solar Pump Manufacturer",
                  desc: "Component B of PM-KUSUM targets 20 lakh solar pumps nationally. State nodal agencies award bulk pump supply contracts. This is a high-volume, government-subsidised market.",
                  size: "₹1.5 L – ₹4 L per pump",
                },
                {
                  label: "O&M",
                  title: "Long-Term O&M Provider",
                  desc: "RESCO companies need O&M partners for 25-year contracts. Module cleaning, inverter maintenance, spares supply, and remote monitoring management are all sub-contracted.",
                  size: "₹2 L – ₹20 L per site/year",
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
          <Section id="how-to-enter" title="How to Enter the PM-KUSUM Supply Chain">
            <p style={p}>
              Knowing PM-KUSUM is a large market is not enough. Here is a practical,
              step-by-step approach for B2B solar companies to start generating real
              orders — based on what actually works.
            </p>

            <h3 style={h3Style}>Monitor award data weekly</h3>
            <p style={p}>
              Set up weekly reviews of PM-KUSUM project awards on BidAssist, GEM
              portal, and state DISCOM websites. When a contract is awarded, you have
              a 4–8 week window before procurement closes. Award data gives you the
              contractor name, company contact, location, and scope — everything for
              a targeted outreach call.
            </p>

            <h3 style={h3Style}>Build a target contractor database</h3>
            <p style={p}>
              Create a database of PM-KUSUM EPC contractors and RESCO developers who
              have won projects in your target states. Include company name, website,
              HO address, project location, and contract value. This becomes your
              primary B2B prospecting list — constantly updated as new awards come in.
            </p>

            <h3 style={h3Style}>Get ALMM-listed if applicable</h3>
            <p style={p}>
              If you manufacture panels or inverters, ALMM registration is mandatory
              for any government project including PM-KUSUM. Without it, you cannot
              supply regardless of price or quality. ALMM requires IEC certifications,
              BIS compliance, and MNRE factory inspection — treat it as a
              non-negotiable prerequisite.
            </p>

            <h3 style={h3Style}>Create a PM-KUSUM specific product datasheet</h3>
            <p style={p}>
              EPC contractors evaluating vendors need to confirm spec compliance
              quickly. Create a single-page datasheet mapping your product specs to
              PM-KUSUM requirements — Wp rating, temperature coefficient, mounting
              hole spacing, IP rating. This removes friction from the procurement
              decision.
            </p>

            <h3 style={h3Style}>Offer regional stocking and fast delivery</h3>
            <p style={p}>
              PM-KUSUM projects are typically in rural Rajasthan, Gujarat, or UP —
              far from major industrial hubs. Contractors in Barmer or Jaisalmer
              cannot wait 8 weeks. Vendors who maintain regional stock or offer 2–3
              week delivery to remote sites consistently win orders over cheaper
              alternatives.
            </p>

            <Callout variant="green" icon="💡" title="The best time to call a PM-KUSUM contractor is within 10 days of award">
              Award data is public. The contractors who won PM-KUSUM projects last
              month are actively sourcing equipment right now. A well-timed call —
              referencing the specific project, location, and capacity — within the
              first two weeks of an AOC is dramatically more effective than cold
              outreach to a contractor with no active project in hand.
            </Callout>
          </Section>

          <Rule />

          {/* ── S11: ALMM ── */}
          <Section id="almm" title="ALMM Compliance: The Gateway to Government Solar">
            <p style={p}>
              The{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                Approved List of Models and Manufacturers (ALMM)
              </strong>{" "}
              maintained by MNRE is the single most important compliance requirement
              for B2B vendors supplying solar panels and inverters to government
              projects — including all PM-KUSUM projects above 10 kW.
            </p>

            {/* ALMM Requirements Table — NEW from PDF */}
            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Requirement", "Solar Panels (ALMM Part-I)", "Inverters (ALMM Part-II)"].map(
                      (th) => (
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
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Key certifications", "IEC 61215, IEC 61730", "IEC 62109-1, IEC 62109-2, IEC 61727"],
                    ["Domestic compliance", "BIS CRS registration required", "CEA grid interconnection standards"],
                    ["Factory inspection", "MNRE inspection required", "MNRE inspection required"],
                    ["Domestic content", "Minimum value-add required", "No domestic content mandate"],
                    ["Listing frequency", "Updated quarterly by MNRE", "Updated quarterly by MNRE"],
                    ["Consequence of non-listing", "Cannot supply to any PM-KUSUM project", "Cannot supply to any PM-KUSUM project"],
                  ].map(([req, panels, inverters], i) => (
                    <tr key={req} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{req}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{panels}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{inverters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Callout variant="red" icon="⚠" title="Non-ALMM products are completely ineligible — this is a hard block, not a preference">
              EPC contractors and RESCO developers who use non-ALMM panels or
              inverters in PM-KUSUM projects risk contract termination,
              disqualification from future tenders, and recovery of government
              subsidies already disbursed. No matter how competitive your pricing, if
              you are not on the ALMM, you will not receive orders. For panel and
              inverter manufacturers, ALMM listing must be treated as a
              non-negotiable prerequisite — begin the process immediately if not
              already done.
            </Callout>
          </Section>

          <Rule />

          {/* ── S12: FAQ ── */}
          <Section id="faq" title="Key Questions B2B Vendors Ask About PM-KUSUM">
            <h3 style={h3Style}>
              Q: Can small B2B companies participate in PM-KUSUM supply chains?
            </h3>
            <p style={p}>
              Yes — and this is one of PM-KUSUM&apos;s most important characteristics
              for the B2B market. Because the scheme is implemented through hundreds
              of small (1–5 MW) projects awarded to regional EPC contractors and
              RESCO developers, small and medium vendors can compete very effectively.
              A regional cable manufacturer or local mounting structure fabricator can
              win orders from PM-KUSUM contractors in ways that would be impossible
              in large PSU utility-scale procurement.
            </p>

            <h3 style={h3Style}>
              Q: Do PM-KUSUM projects require domestic manufacturing?
            </h3>
            <p style={p}>
              For solar panels and inverters — yes. ALMM-listed domestic products are
              required. For other components (cables, junction boxes, earthing,
              mounting structures), there is no mandatory domestic sourcing
              requirement, though DISCOMs often prefer vendors with Indian
              manufacturing in their evaluation criteria.
            </p>

            <h3 style={h3Style}>
              Q: How do I find which RESCO companies are active in my target state?
            </h3>
            <p style={p}>
              Monitor BidAssist and GEM portal award notifications for PM-KUSUM
              tenders in your target state. Award data includes the contractor&apos;s
              company name, website, registered office address, and specific project
              details. BidAssist archives historical award data, allowing you to build
              a complete list of all companies that have won PM-KUSUM projects in a
              state over the past 2–3 years.
            </p>

            <h3 style={h3Style}>
              Q: What is the typical contract period for PM-KUSUM A projects?
            </h3>
            <p style={p}>
              The construction period is typically 270 days from the date of award
              for RESCO projects. EPC-mode projects may have shorter construction
              periods (120–180 days) depending on capacity. The overall project tenure
              — including O&amp;M — is 25 years under RESCO and 5 years under most
              government-funded EPC models.
            </p>

            <h3 style={h3Style}>
              Q: What is the minimum order quantity for panel supply to PM-KUSUM?
            </h3>
            <p style={p}>
              There is no formal MOQ set by MNRE, but practically a 1 MW PM-KUSUM
              plant requires approximately 1,600–1,800 panels (at 550–575 Wp). For
              small panel manufacturers, a single PM-KUSUM project can represent 3–6
              months of production capacity — making each award a significant B2B
              opportunity.
            </p>

            <h3 style={h3Style}>
              Q: What happens to B2B vendors after a 25-year RESCO contract ends?
            </h3>
            <p style={p}>
              At the end of the 25-year PPA, the solar plant is typically transferred
              to the landowner or the PPA is renegotiated. For B2B vendors, the end
              of the RESCO period creates potential equipment replacement cycles. More
              immediately, the 25-year O&amp;M obligation creates recurring demand for
              replacement modules, inverter parts, cable repair kits, and monitoring
              upgrades throughout the contract period.
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
              Find Your Next PM-KUSUM Customer Today
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 500,
                margin: "0 auto 30px",
                fontSize: 16,
              }}
            >
              We track PM-KUSUM award data across Rajasthan, Gujarat, UP & 15+
              states — updated weekly. Know who won, what they need, and how to
              reach them.
            </p>
            <Link
              href="#"
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
              Access PM-KUSUM Lead Database →
            </Link>
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
              Published April 2026 · B2B Solar Research Series
            </span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["PM-KUSUM", "RESCO", "Solar B2B", "Rajasthan", "Gujarat", "ALMM", "MNRE", "EPC", "India Renewables"].map(
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}