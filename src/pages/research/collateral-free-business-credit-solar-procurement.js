"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import GetInTouch from "@/component/Form/Contact/GetInTouch";


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
        <div style={{ fontSize: 14, margin: 0, lineHeight: 1.6, ...s.body }}>
          {children}
        </div>
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

export default function CollateralFreeCreditPage() {
    const [showRequestQuote, setShowRequestQuote] = useState(false);
  return (
    
    <>
      <Head>
        <title>Collateral-Free Business Credit for Solar Procurement</title>
        <meta
          name="description"
          content="Working capital gaps are the silent killer of solar project margins. Here is how contractors, EPC firms, and developers can use collateral-free procurement credit to source better, faster — without stretching their balance sheet."
        />
        <meta
          name="keywords"
          content="Collateral-free credit, Solar procurement finance, EPC working capital, B2B procurement credit, Solar project financing, Trade credit India"
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/collateral-free-business-credit-solar-procurement"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Collateral-Free Business Credit for Solar Procurement"
        />
        <meta
          property="og:description"
          content="Working capital gaps are the silent killer of solar project margins. Here is how contractors, EPC firms, and developers can use collateral-free procurement credit."
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/collateral-free-business-credit-solar-procurement"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/collateral-free-credit.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Collateral-Free Business Credit for Solar Procurement"
        />
        <meta
          name="twitter:description"
          content="How contractors, EPC firms, and developers can use collateral-free procurement credit to protect project margins."
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/collateral-free-credit.webp"
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
              HEADSUP B2B · FINANCE &amp; CREDIT · MAY 2025 · 5 MIN READ
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
              Collateral-Free Business Credit for Solar Procurement
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.62)",
                maxWidth: 660,
                lineHeight: 1.65,
                marginBottom: 40,
                fontStyle: "italic",
              }}
            >
              Working capital gaps are the silent killer of solar project
              margins. Here is how contractors, EPC firms, and developers can use
              collateral-free procurement credit to source better, faster —
              without stretching their balance sheet.
            </p>

            {/* pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "5 min read",
                "May 2025",
                "For Contractors, EPC & Developers",
                "B2B Procurement Finance",
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
          {/* ── Who this is for ── */}
          <div
            style={{
              background: "#E8F0FA",
              border: "1px solid #A8C4E8",
              borderRadius: 6,
              padding: "20px 24px",
              margin: "52px 0 28px",
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>📋</span>
            <p style={{ fontSize: 15, color: "#1E3A5F", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
              <strong style={{ fontWeight: 700, fontStyle: "normal" }}>Who this is for:</strong>{" "}
              Contractors, EPC firms, and solar project developers managing
              procurement-to-payment gaps who want to understand how
              collateral-free credit can unlock procurement efficiency and
              protect project margins.
            </p>
          </div>

          {/* ── INTRO ── */}
          <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 22 }}>
            You have won the tender. The project is live. The procurement plan
            is ready. Then reality hits — you need to pay INR 2 crore for solar
            panels before your first milestone payment arrives, 60 days from
            now. Your bank overdraft is maxed. Your NBFC loan is still being
            processed. Your supplier payment terms are T+15.
          </p>
          <p style={p}>
            This is not an edge case. It is the operating reality for thousands
            of contractors and EPC firms executing solar projects across India.
            Working capital gaps — the lag between procurement spend and
            milestone receipts — are the most common and most underestimated
            financial risk in renewable energy projects. The good news:
            collateral-free business credit, purpose-built for B2B procurement,
            is reshaping how contractors manage this challenge.
          </p>

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
              { num: "60–90", unit: " Days", desc: "Avg. procurement-to-milestone gap" },
              { num: "40–60", unit: "%", desc: "Project cost front-loaded to equipment" },
              { num: "₹15 Cr", unit: "+", desc: "Working capital exposure for mid-size EPC" },
              { num: "60", unit: " Days", desc: "Credit window on Headsup B2B" },
            ].map(({ num, unit, desc }) => (
              <div
                key={desc}
                style={{
                  background: "#FFFFFF",
                  padding: "24px 18px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 28,
                    color: "#0D4A2F",
                    lineHeight: 1.15,
                    marginBottom: 12,
                    fontWeight: 700,
                    minHeight: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
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

          {/* ── TOC ── */}
          <nav
            style={{
              background: "#FFFFFF",
              border: "1px solid #DDE8DB",
              borderTop: "4px solid #5E3F99",
              padding: "32px 36px",
              margin: "32px 0 60px",
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
                ["#working-capital-problem", "The working capital problem"],
                ["#what-is-procurement-credit", "What is procurement credit?"],
                ["#real-economics", "The real economics & savings"],
                ["#who-qualifies", "Who qualifies for it"],
                ["#strategic-uses", "5 strategic ways to use it"],
                ["#takeaways", "Key takeaways"],
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

          {/* ── S1: Working Capital Problem ── */}
          <Section id="working-capital-problem" title="The Working Capital Problem in Solar Projects">
            <p style={p}>
              Solar project economics are structurally misaligned with
              procurement cash flows. Milestone payments from the developer or
              DISCOM typically arrive in weeks 14–18, but equipment procurement
              must happen in weeks 4–8 — a 10-week cash gap on a single project.
              Run three concurrently and you are looking at a INR 7–9 crore hole
              in your working capital, funded entirely by your own balance sheet
              or expensive short-term debt.
            </p>

            {/* Real-world scenario blockquote */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DDE8DB",
                borderLeft: "4px solid #D97706",
                borderRadius: "0 8px 8px 0",
                padding: "28px 32px",
                margin: "32px 0",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#D97706",
                  marginBottom: 14,
                }}
              >
                Real-World Scenario
              </div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 19,
                  fontStyle: "italic",
                  color: "#181C18",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                &ldquo;We had three projects running simultaneously — 2 MW in
                Gujarat, 1.5 MW in Rajasthan, and a rooftop project in Pune. Our
                combined equipment procurement bill was INR 8.2 crore due in the
                same 3-week window. Our bank overdraft limit was INR 3 crore. We
                either delayed procurement, compromised on supplier quality, or
                stretched our balance sheet. None of these options were
                good.&rdquo;
              </p>
            </div>
          </Section>

          <Rule />

          {/* ── S2: What is Procurement Credit ── */}
          <Section id="what-is-procurement-credit" title="What Is Collateral-Free Procurement Credit?">
            <p style={p}>
              Procurement credit is a financing facility that lets businesses
              purchase equipment now and pay later, without pledging physical
              assets as security. Unlike a bank loan, it is embedded directly
              into the procurement transaction: place your order, receive your
              goods, and settle within an agreed window — typically 30, 45, or
              60 days. For solar procurement this means sourcing panels,
              inverters, cables, and balance-of-system components at the right
              time, aligned with project timelines, without waiting for
              milestone payments or drawing down expensive credit lines.
            </p>

            {/* Comparison Table */}
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
                    {["Traditional Financing", "Procurement Credit"].map(
                      (th) => (
                        <th
                          key={th}
                          style={{
                            padding: "14px 18px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.95)",
                            fontWeight: 600,
                            fontSize: 12.5,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
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
                    [
                      "Requires property or fixed asset collateral",
                      "No collateral required — assessed on business cash flows and order history",
                    ],
                    [
                      "NBFC loans take 2–4 weeks to process and disburse",
                      "Activated at point of purchase — no separate loan application",
                    ],
                    [
                      "Working capital loans carry 14–18% annual interest",
                      "Competitive credit cost built into procurement economics",
                    ],
                    [
                      "Fixed limit — does not scale with project volume",
                      "Scales with order volume and platform track record",
                    ],
                    [
                      "Cash flow risk: funds arrive before suppliers are confirmed",
                      "Pay only when milestone payments arrive — aligned cash flow",
                    ],
                  ].map(([trad, proc], i) => (
                    <tr key={i} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#6B7468",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.6,
                          width: "50%",
                        }}
                      >
                        {trad}
                      </td>
                      <td
                        style={{
                          padding: "14px 18px",
                          color: "#0D4A2F",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.6,
                          fontWeight: 500,
                          width: "50%",
                        }}
                      >
                        {proc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S3: Real Economics ── */}
          <Section id="real-economics" title="The Real Economics: What Procurement Credit Saves">
            <p style={p}>
              The savings from procurement credit are not theoretical. The table
              below works through the math on a typical 2 MW ground-mount solar
              project — the kind of contract being awarded across Rajasthan,
              Gujarat, and UP every week.
            </p>

            {/* Project Economics Card */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #DDE8DB",
                borderRadius: 8,
                overflow: "hidden",
                margin: "28px 0",
              }}
            >
              <div
                className="bg-headupb2b"
                style={{
                  padding: "16px 24px",
                  color: "#FFFFFF",
                  fontSize: 12.5,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Project Economics — 2 MW Ground-Mount Solar
              </div>
              <div style={{ padding: "8px 0" }}>
                {[
                  ["Total project value", "₹6.0 crore", false],
                  ["Equipment procurement cost (panels, inverters, BoS)", "₹3.2 crore", false],
                  ["Procurement-to-milestone gap", "55 days", false],
                  ["Cost of short-term NBFC loan at 18% p.a. for 55 days", "₹8.7 lakh", false],
                  ["Cost of 60-day procurement credit facility", "₹4.5 lakh", false],
                  ["Finance cost saving on this project", "₹4.2 lakh", true],
                ].map(([label, value, highlight]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 24px",
                      borderBottom: "1px dashed #DDE8DB",
                      background: highlight ? "#F0FAF5" : "transparent",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14.5,
                        color: highlight ? "#0D4A2F" : "#3A4238",
                        fontWeight: highlight ? 700 : 400,
                        lineHeight: 1.5,
                        paddingRight: 16,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: highlight ? 22 : 18,
                        fontWeight: 700,
                        color: highlight ? "#22A05A" : "#181C18",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p style={p}>
              That INR 4.2 lakh saving drops directly to project margin on a
              single project. For a contractor running 8–10 projects per year
              this compounds into INR 30–40 lakh in annual margin improvement,
              purely from optimising procurement finance.
            </p>
          </Section>

          <Rule />

          {/* ── S4: Who Qualifies ── */}
          <Section id="who-qualifies" title="Who Qualifies for Collateral-Free Procurement Credit?">
            <p style={p}>
              The eligibility framework is significantly more accessible than
              traditional bank lending. Contractors with 1–3 years of operating
              history and even INR 50 lakh turnover can access meaningful credit
              limits — limits that scale with usage and repayment track record,
              not just historical revenue.
            </p>

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
                    {["Business Profile", "Credit Limit", "Key Requirements"].map(
                      (th) => (
                        <th
                          key={th}
                          style={{
                            padding: "12px 16px",
                            textAlign: "left",
                            color: "rgba(255,255,255,0.95)",
                            fontWeight: 600,
                            fontSize: 12.5,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
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
                    [
                      "Established EPC (5+ yrs, ₹5 Cr+ turnover)",
                      "₹1–5 crore",
                      "GST returns, ITR, bank statements",
                      "green",
                    ],
                    [
                      "Mid-size contractor (3–5 yrs, ₹1–5 Cr)",
                      "₹25 L – 1 crore",
                      "GST, 2-year ITR, order book",
                      "blue",
                    ],
                    [
                      "New EPC company (1–3 years)",
                      "₹10–25 lakh",
                      "GST registration, project LOI/PO",
                      "amber",
                    ],
                    [
                      "Solar developer / IPP",
                      "₹2–10 crore",
                      "Project documents, financials",
                      "green",
                    ],
                  ].map(([profile, limit, req, badgeVar], i) => (
                    <tr key={profile} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td
                        style={{
                          padding: "14px 16px",
                          color: "#181C18",
                          fontWeight: 600,
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.55,
                        }}
                      >
                        {profile}
                      </td>
                      <td
                        style={{
                          padding: "14px 16px",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                        }}
                      >
                        <Badge variant={badgeVar}>{limit}</Badge>
                      </td>
                      <td
                        style={{
                          padding: "14px 16px",
                          color: "#3A4238",
                          borderBottom: "1px solid #DDE8DB",
                          verticalAlign: "top",
                          lineHeight: 1.55,
                        }}
                      >
                        {req}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S5: 5 Strategic Ways ── */}
          <Section id="strategic-uses" title="5 Strategic Ways to Use Procurement Credit">
            <p style={p}>
              Knowing that procurement credit exists is one thing — deploying it
              for measurable margin gain is another. Below are the five
              strategies leading EPC firms use to extract real value from a
              collateral-free credit facility.
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
                  title: "Front-load procurement",
                  desc: "Lock in panel and inverter prices at project start while keeping own capital available for civil work and labour costs that do not qualify for trade credit.",
                },
                {
                  num: 2,
                  title: "Run concurrent projects without capital constraints",
                  desc: "With INR 50 lakh of own working capital and INR 2 crore in procurement credit, a contractor can execute INR 2.5 crore of concurrent procurement — a 5x effective capital multiplier.",
                },
                {
                  num: 3,
                  title: "Negotiate better prices by committing faster",
                  desc: "A pre-approved credit limit lets you issue purchase orders within hours rather than waiting for bank disbursements — giving you negotiating leverage that cash-constrained competitors simply do not have.",
                },
                {
                  num: 4,
                  title: "Avoid emergency procurement at premium prices",
                  desc: "Without credit headroom, contractors defer procurement until milestone payments arrive, then face rushed sourcing at whatever price the market offers. A standing facility eliminates this margin leak.",
                },
                {
                  num: 5,
                  title: "Protect supplier relationships",
                  desc: "Delayed payments erode your position in supplier queues. A credit facility that guarantees on-time payment — even when your own milestone receipts are delayed — protects your sourcing priority for future projects.",
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
                      lineHeight: 1.4,
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

          {/* ── S6: Key Takeaways ── */}
          <Section id="takeaways" title="Key Takeaways">
            <p style={p}>
              The five points below summarise the strategic case for building
              collateral-free procurement credit into every solar project
              workflow.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                margin: "28px 0",
              }}
            >
              {[
                "Working capital gaps are structural in solar projects — plan for them proactively, not reactively.",
                "Collateral-free credit is a procurement tool, not a last resort. Leading EPC firms use it to procure smarter and protect margins across their project portfolio.",
                "The economics are compelling: the cost of well-structured procurement credit is almost always lower than expensive NBFC debt, deferred procurement, or quality-compromised sourcing.",
                "Eligibility is more accessible than most contractors think. One or more years of operating history and clean GST filings is typically sufficient — no property pledge required.",
                "Platform-embedded credit is the future of B2B procurement finance, integrating verified sourcing, quality assurance, and financing into a single workflow.",
              ].map((text, i) => (
                <div
                  key={i}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderRadius: 8,
                    padding: "20px 22px",
                    display: "flex",
                    gap: 18,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 32,
                      fontWeight: 700,
                      color: "#22A05A",
                      lineHeight: 1,
                      flexShrink: 0,
                      minWidth: 32,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    style={{
                      fontSize: 15.5,
                      color: "#3A4238",
                      lineHeight: 1.65,
                      margin: 0,
                      paddingTop: 4,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
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
                lineHeight: 1.25,
              }}
            >
              Access Up to 60-Day Collateral-Free Credit on Solar Procurement
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 580,
                margin: "0 auto 24px",
                fontSize: 16,
              }}
            >
              Headsup B2B offers integrated procurement credit for contractors,
              EPC firms, and developers — no collateral, no delays, embedded
              directly in your sourcing workflow.
            </p>
            <div
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 13,
                marginBottom: 30,
                letterSpacing: "0.03em",
              }}
            >
              500+ projects delivered &nbsp;│&nbsp; 1,000+ verified suppliers
              &nbsp;│&nbsp; Pan-India fulfilment
            </div>
            <button
              type="button"
              onClick={() => setShowRequestQuote(true)}
              style={{
                display: "inline-block",
                background: "#00d4f5",
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 34px",
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              Apply for Procurement Credit →
            </button>
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
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                className="bg-headupb2b"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                HB
              </div>
              <div>
                <div style={{ fontSize: 13.5, color: "#181C18", fontWeight: 600 }}>
                  Headsup B2B Editorial Team
                </div>
                <div style={{ fontSize: 12, color: "#6B7468" }}>
                  Finance &amp; Credit · headsupb2b.com
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Procurement Credit", "Working Capital", "Solar Finance", "EPC", "B2B Credit", "Trade Finance", "India Solar"].map(
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

      {showRequestQuote && (
                <GetInTouch onClose={() => setShowRequestQuote(false)} />
            )}
    </>
  );
}