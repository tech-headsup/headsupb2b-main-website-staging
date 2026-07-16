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

export default function SolarCertificationsGuidePage() {
  return (
    <>
      <Head>
        <title>Understanding BIS, IEC, and ALMM Certifications for Solar Equipment in India</title>
        <meta
          name="description"
          content="A compliance primer for procurement managers, EPC firms, and contractors sourcing solar panels, inverters, and BoS components under India's evolving regulatory framework."
        />
        <meta
          name="keywords"
          content="BIS Certification, ALMM, IEC Standards, Solar Compliance, EPC Procurement, MNRE, Solar India, Solar PV Modules"
        />
        <link
          rel="canonical"
          href="https://www.headsupb2b.com/research/understanding-bis-iec-almm-certifications-solar-equipment-india"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Understanding BIS, IEC, and ALMM Certifications for Solar Equipment in India"
        />
        <meta
          property="og:description"
          content="A compliance primer for procurement managers, EPC firms, and contractors sourcing solar panels, inverters, and BoS components under India's evolving regulatory framework."
        />
        <meta
          property="og:url"
          content="https://www.headsupb2b.com/research/understanding-bis-iec-almm-certifications-solar-equipment-india"
        />
        <meta property="og:site_name" content="Headsup B2B" />
        <meta
          property="og:image"
          content="https://www.headsupb2b.com/solar-certifications.webp"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Understanding BIS, IEC, and ALMM Certifications for Solar Equipment in India"
        />
        <meta
          name="twitter:description"
          content="A compliance primer for procurement managers, EPC firms, and contractors sourcing solar panels, inverters, and BoS components in India."
        />
        <meta
          name="twitter:image"
          content="https://www.headsupb2b.com/solar-certifications.webp"
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
              TECHNICAL GUIDE · MAY 2025 · 9 MIN READ
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
              Understanding BIS, IEC, and ALMM Certifications for Solar Equipment in India
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.62)",
                maxWidth: 640,
                lineHeight: 1.65,
                marginBottom: 40,
              }}
            >
              A compliance primer for procurement managers, EPC firms, and
              contractors sourcing solar panels, inverters, and BoS components
              under India&apos;s evolving regulatory framework.
            </p>

            {/* pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                "BIS Certification",
                "ALMM",
                "IEC Standards",
                "Solar Compliance",
                "EPC Procurement",
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
            <p style={{ fontSize: 15, color: "#1E3A5F", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ fontWeight: 700 }}>Who this is for:</strong>{" "}
              Procurement managers, EPC project leads, and contractors sourcing
              solar equipment for government-funded or utility-scale projects in
              India.
            </p>
          </div>

          {/* ── INTRO ── */}
          <p style={{ ...p, fontSize: 20, fontWeight: 300, marginBottom: 22 }}>
            If you&apos;ve ever received a shipment of solar panels only to
            discover they aren&apos;t on the ALMM list — or worse, failed a
            project audit because your inverters lacked BIS certification — you
            already know the cost of getting compliance wrong. For contractors
            and EPC firms operating in India&apos;s rapidly expanding solar
            sector, certifications are no longer paperwork formalities. They are
            hard procurement gates that determine whether your project gets
            approved, funded, and commissioned.
          </p>
          <p style={p}>
            Yet the certification landscape remains poorly understood. Most
            procurement teams know the acronyms — BIS, IEC, ALMM — but few have
            a clear picture of what each requires, which products they apply to,
            and how they interact with each other. This guide changes that.
          </p>

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
                ["#three-pillars", "The three certification pillars"],
                ["#bis", "BIS Certification explained"],
                ["#iec", "IEC Standards: the international benchmark"],
                ["#almm", "ALMM: the procurement gate"],
                ["#almm-verify", "ALMM verification steps"],
                ["#interact", "How BIS, IEC & ALMM interact"],
                ["#risks", "Common procurement risks"],
                ["#checklist", "Pre-order compliance checklist"],
                ["#procurement-partner", "What this means for procurement"],
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

          {/* ── S1: Three Pillars ── */}
          <Section id="three-pillars" title="The Three Certification Pillars of Solar Procurement in India">
            <p style={p}>
              India&apos;s solar compliance framework rests on three distinct
              but interconnected pillars. Each operates at a different level —
              national standards, international benchmarks, and project
              eligibility — and procurement teams must understand all three to
              avoid costly mistakes.
            </p>

            {/* Three pillar cards */}
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
                  tag: "BIS",
                  tagBg: "#1A7A4A",
                  title: "Bureau of Indian Standards",
                  desc: "India's mandatory quality mark for solar photovoltaic modules sold domestically. Governed by IS 14286 and IS 16077 standards. Required for all panels sold in India.",
                  icon: "🏛",
                },
                {
                  tag: "IEC",
                  tagBg: "#1E3A5F",
                  title: "International Electrotechnical Commission",
                  desc: "International performance and safety standards for solar modules (IEC 61215, 61730) and inverters (IEC 62109). Widely accepted globally and required for export-linked projects.",
                  icon: "🌐",
                },
                {
                  tag: "ALMM",
                  tagBg: "#D97706",
                  title: "Approved List of Models and Manufacturers",
                  desc: "MNRE's approved sourcing list mandatory for government-funded projects. Covers solar PV modules (List I) and cells (List II). Renewed periodically — always verify current status.",
                  icon: "📋",
                },
              ].map(({ tag, tagBg, title, desc, icon }) => (
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
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
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
                        fontSize: 15,
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
                    <p style={{ fontSize: 13.5, color: "#6B7468", lineHeight: 1.6, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p style={p}>
              These three frameworks operate at different levels — national
              standards, international benchmarks, and project eligibility — but
              they are deeply interconnected. A panel that carries IEC
              certification does not automatically qualify for ALMM listing. A
              BIS-marked product may still be ineligible for a government
              project if it&apos;s not on the ALMM list. Understanding the
              overlap — and the gaps — is where procurement decisions get made
              or broken.
            </p>
          </Section>

          <Rule />

          {/* ── S2: BIS ── */}
          <Section id="bis" title="BIS Certification: India's Quality Baseline">
            <p style={p}>
              The Bureau of Indian Standards is India&apos;s national standards
              body, operating under the Ministry of Consumer Affairs. For solar
              photovoltaic modules, BIS certification under the Quality Control
              Order (QCO) has been mandatory since April 2022. This means any
              solar PV module — whether domestically manufactured or imported —
              must carry the BIS Standard Mark (ISI mark) to be legally sold in
              India.
            </p>

            <h3 style={h3Style}>Which standards apply?</h3>
            <p style={p}>
              Solar PV modules fall under two key Indian Standards:{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                IS 14286
              </strong>{" "}
              (for crystalline silicon terrestrial PV modules) and{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                IS 16077
              </strong>{" "}
              (for thin film modules). These standards are technically aligned
              with IEC 61215 and IEC 61730, meaning a module certified to the
              international standard has a pathway to BIS — but must still
              complete the Indian certification process separately.
            </p>

            <h3 style={h3Style}>What does BIS certification involve?</h3>
            <p style={p}>
              Manufacturers — domestic or foreign — must apply to BIS, submit
              product samples for testing at a BIS-recognised lab, and undergo a
              factory audit. Foreign manufacturers also need a local Authorised
              Indian Representative (AIR). Once certified, the manufacturer can
              affix the ISI mark on products, but is subject to ongoing BIS
              surveillance audits.
            </p>

            <Callout variant="amber" icon="⚠" title="PROCUREMENT ALERT — BIS QCO: What Changed in 2022–24">
              <ul style={{ margin: "8px 0 0", paddingLeft: 20, lineHeight: 1.7 }}>
                <li>Since April 2022, all solar PV modules sold in India must carry BIS certification — no exceptions</li>
                <li>Imports without BIS certification are subject to seizure at customs</li>
                <li>The QCO now covers a broader list of electrical equipment including certain inverter components</li>
                <li>BIS licence must be valid and active — check the BIS Care portal before placing orders</li>
                <li>Non-certified products: contractor liability in case of project audit failure</li>
              </ul>
            </Callout>
          </Section>

          <Rule />

          {/* ── S3: IEC ── */}
          <Section id="iec" title="IEC Standards: The International Benchmark">
            <p style={p}>
              The International Electrotechnical Commission (IEC) sets the
              global baseline for solar equipment performance and safety. For
              procurement teams, two standards are most directly relevant:{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                IEC 61215
              </strong>{" "}
              (design qualification and type approval for crystalline silicon
              modules) and{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                IEC 61730
              </strong>{" "}
              (module safety qualification). For solar inverters,{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                IEC 62109
              </strong>{" "}
              governs safety.
            </p>
            <p style={p}>
              IEC certifications are issued by accredited testing laboratories
              worldwide — CPRI, NABL-accredited labs in India, as well as
              international bodies like TÜV Rheinland, UL, and Bureau Veritas.
            </p>
            <p style={p}>
              Unlike BIS, IEC certification is not a legal mandate for domestic
              sale in India — but it is practically mandatory for any serious
              procurement, because:
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 24px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "BIS's IS 14286 and IS 16077 are technically harmonised with IEC standards — IEC test reports significantly expedite BIS certification",
                "Most EPC contracts and project financing covenants specify IEC-certified equipment as a minimum requirement",
                "ALMM listing implicitly requires IEC certification as part of the technical qualification process",
                "Insurance and warranty claims on non-IEC-certified equipment are routinely denied",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: "3px solid #22A05A",
                    padding: "12px 18px",
                    fontSize: 14.5,
                    color: "#3A4238",
                    lineHeight: 1.6,
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

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
                &ldquo;IEC certification is not just a quality signal —
                it&apos;s the technical foundation on which BIS compliance and
                ALMM eligibility are built. Treat it as the starting point, not
                an optional add-on.&rdquo;
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
                — Headsup B2B Technical Advisory
              </cite>
            </blockquote>

            <h3 style={h3Style}>Key IEC Standards — Quick Reference</h3>

            <div style={{ overflowX: "auto", margin: "20px 0 28px" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 14,
                }}
              >
                <thead>
                  <tr className="bg-headupb2b">
                    {["Standard", "Covers", "Applies To", "Mandatory?"].map(
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
                    ["IEC 61215", "Design qualification & type approval", "Crystalline silicon modules", "De facto", "green"],
                    ["IEC 61730", "Module safety qualification", "All PV modules", "De facto", "green"],
                    ["IEC 62109", "Safety for power converters", "Solar inverters", "De facto", "green"],
                    ["IEC 61724", "System monitoring & performance", "Solar PV systems", "Optional", "amber"],
                    ["IEC 62548", "PV array design requirements", "System design", "Optional", "amber"],
                  ].map(([std, covers, applies, mand, badgeVar], i) => (
                    <tr key={std} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 16px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{std}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{covers}</td>
                      <td style={{ padding: "12px 16px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{applies}</td>
                      <td style={{ padding: "12px 16px", borderBottom: "1px solid #DDE8DB", verticalAlign: "top" }}>
                        <Badge variant={badgeVar}>{mand}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S4: ALMM ── */}
          <Section id="almm" title="ALMM: The Procurement Gate for Government Projects">
            <p style={p}>
              The{" "}
              <strong style={{ color: "#181C18", fontWeight: 600 }}>
                Approved List of Models and Manufacturers (ALMM)
              </strong>{" "}
              is MNRE&apos;s instrument for ensuring that solar panels used in
              government-funded projects meet quality standards and traceability
              requirements. Introduced in 2021 and made mandatory for all
              projects funded by SECI, NTPC, state DISCOMs, and other government
              agencies, ALMM is arguably the most operationally significant
              certification for EPC contractors in India today.
            </p>
            <p style={p}>
              ALMM is maintained in two parts: List I covers solar PV modules,
              and List II covers solar cells. Manufacturers — domestic or
              foreign — must apply to MNRE with technical documentation, quality
              certifications, and manufacturing capacity evidence. Listings are
              reviewed and updated periodically, and manufacturers can be
              suspended or delisted if quality standards slip.
            </p>

            <h3 style={h3Style}>What ALMM means for your procurement</h3>
            <p style={p}>
              If your project receives any central government funding — whether
              directly through SECI/NTPC tenders or through schemes like
              PM-KUSUM, RESCO, or state government solar programmes tied to
              central budgets — you must source panels exclusively from
              ALMM-listed manufacturers. There are no exceptions and no waivers.
            </p>

            <Callout variant="red" icon="🚨" title="HIGH RISK — Using non-ALMM panels in a government project can result in:">
              <ul style={{ margin: "8px 0 0", paddingLeft: 20, lineHeight: 1.7 }}>
                <li>Project disqualification or tender cancellation</li>
                <li>Forfeiture of performance bank guarantee</li>
                <li>Full material replacement at contractor cost before commissioning</li>
                <li>Blacklisting from future SECI/NTPC tenders</li>
                <li>Loan disbursement hold by project financing banks</li>
              </ul>
            </Callout>
          </Section>

          <Rule />

          {/* ── S5: ALMM Verify ── */}
          <Section id="almm-verify" title="ALMM — Key Things Procurement Teams Must Verify">
            <p style={p}>
              ALMM compliance is not a one-time check at bid stage. The list
              changes, listings expire, and model-level details matter. Here are
              the five non-negotiable verification steps every procurement team
              must build into their workflow.
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
                  title: "Verify ALMM listing status at time of order — not just at bid",
                  desc: "MNRE updates the ALMM list periodically. A manufacturer listed at bid stage may be suspended or removed by the time you place the order. Always check the live MNRE portal before issuing a PO.",
                },
                {
                  num: 2,
                  title: "Confirm the specific model, not just the manufacturer",
                  desc: "ALMM listing is model-specific. A manufacturer may be listed for a 400W panel but not a 545W variant. Your PO must reference the exact model number on the ALMM list.",
                },
                {
                  num: 3,
                  title: "Check domestic manufacturing capacity vs. your project volume",
                  desc: "India's ALMM-listed domestic capacity is growing but not unlimited. During peak project cycles, lead times for ALMM panels from top manufacturers can stretch 10–14 weeks. Plan procurement timelines accordingly.",
                },
                {
                  num: 4,
                  title: "Get a written ALMM compliance declaration from your supplier",
                  desc: "A verbal assurance is not sufficient. Require a written confirmation with the ALMM model listing reference and an undertaking of compliance as part of your supply agreement.",
                },
                {
                  num: 5,
                  title: "Understand ALMM exemptions — they are narrow",
                  desc: "Privately funded projects (no government equity, grant, or subsidy) are currently exempt from ALMM. However, if project financing involves any government bank or scheme with a government nexus, ALMM typically applies. When in doubt, apply it.",
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

          {/* ── S6: How they interact ── */}
          <Section id="interact" title="How BIS, IEC, and ALMM Interact: A Practical Map">
            <p style={p}>
              Understanding how the three frameworks relate to each other is
              essential for building a compliant procurement checklist.
              Here&apos;s how they stack:
            </p>

            <div style={{ overflowX: "auto", margin: "28px 0" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr className="bg-headupb2b">
                    {["Product", "BIS Required?", "IEC Expected?", "ALMM Required?", "Notes"].map(
                      (th) => (
                        <th
                          key={th}
                          style={{
                            padding: "12px 14px",
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
                    ["Solar PV Modules", "Yes", "Yes", "Govt projects", "All three required for government projects"],
                    ["Solar Cells", "Partial", "Yes", "ALMM List II", "ALMM List II for cells used in govt projects"],
                    ["Solar Inverters", "Check QCO", "IEC 62109", "No", "BIS QCO scope expanding — verify current status"],
                    ["DC Cables", "Yes", "Recommended", "No", "BIS IS 694 / IS 1554 applicable"],
                    ["Mounting Structures", "No", "No", "No", "Structural design specs per project requirements"],
                    ["Batteries / BESS", "Evolving", "IEC 62619", "No", "Regulations tightening rapidly — check latest MoP guidelines"],
                  ].map(([prod, bis, iec, almm, notes], i) => (
                    <tr key={prod} style={{ background: i % 2 === 1 ? "#F4F1FA" : "#FFFFFF" }}>
                      <td style={{ padding: "12px 14px", color: "#181C18", fontWeight: 600, borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{prod}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{bis}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{iec}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{almm}</td>
                      <td style={{ padding: "12px 14px", color: "#3A4238", borderBottom: "1px solid #DDE8DB", verticalAlign: "top", lineHeight: 1.55 }}>{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Rule />

          {/* ── S7: Common Risks ── */}
          <Section id="risks" title="Common Procurement Risks Around Certifications">
            <p style={p}>
              Even well-prepared procurement teams trip up on certification
              details. The risks below are the most common — and the most
              costly — failure modes seen across solar EPC projects in India.
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
                  level: "HIGH RISK",
                  levelVar: "red",
                  title: "Ordering panels not on the current ALMM list",
                  desc: "The ALMM list changes. A manufacturer listed 3 months ago may have been delisted. Always verify before PO issuance.",
                },
                {
                  level: "HIGH RISK",
                  levelVar: "red",
                  title: "Accepting IEC certificates without checking expiry",
                  desc: "IEC certifications have validity periods. An expired certificate does not guarantee current product compliance. Demand valid, in-scope certificates.",
                },
                {
                  level: "MEDIUM RISK",
                  levelVar: "amber",
                  title: "Confusing model-level vs. manufacturer-level ALMM listing",
                  desc: "Your specific panel wattage/model must be listed, not just the brand. A 540W panel is not covered by a 400W listing.",
                },
                {
                  level: "MEDIUM RISK",
                  levelVar: "amber",
                  title: "Assuming BIS-marked products are automatically ALMM listed",
                  desc: "BIS and ALMM are separate processes. A BIS mark does not confer ALMM status. Both must be independently verified.",
                },
                {
                  level: "MEDIUM RISK",
                  levelVar: "amber",
                  title: "Not updating BOQs when ALMM panel specs change mid-project",
                  desc: "If your preferred ALMM model is delisted mid-procurement, you may need to re-engineer mounting structures and inverter sizing.",
                },
                {
                  level: "HIGH RISK",
                  levelVar: "red",
                  title: "Relying on supplier verbal assurance for compliance",
                  desc: "Always get written compliance declarations with certificate numbers, model references, and validity dates as part of the supply contract.",
                },
              ].map(({ level, levelVar, title, desc }) => (
                <div
                  key={title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #DDE8DB",
                    borderLeft: `4px solid ${levelVar === "red" ? "#C0392B" : "#D97706"}`,
                    borderRadius: "0 6px 6px 0",
                    padding: "18px 20px",
                  }}
                >
                  <div style={{ marginBottom: 8 }}>
                    <Badge variant={levelVar}>{level}</Badge>
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#181C18",
                      marginBottom: 8,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </div>
                  <p style={{ fontSize: 13.5, color: "#6B7468", lineHeight: 1.6, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Rule />

          {/* ── S8: Checklist ── */}
          <Section id="checklist" title="A Procurement Compliance Checklist for Solar Equipment">
            <p style={p}>
              Before any solar equipment purchase order leaves your desk, the
              seven items below must be verified, documented, and contractually
              guaranteed. This is the minimum standard for risk-free
              procurement.
            </p>

            <Callout variant="green" icon="✅" title="PRE-ORDER COMPLIANCE CHECKLIST — Before issuing any solar equipment purchase order, verify:">
              <ul style={{ margin: "10px 0 0", paddingLeft: 0, listStyle: "none", lineHeight: 1.7 }}>
                {[
                  ["BIS", "Manufacturer holds a valid, current BIS licence for the specific product category (check BIS Care portal)"],
                  ["IEC Modules", "Valid IEC 61215 and IEC 61730 certificates with scope covering the exact panel model and wattage"],
                  ["IEC Inverters", "Valid IEC 62109-1 and IEC 62109-2 certificates from accredited lab"],
                  ["ALMM", "Panel manufacturer and specific model listed on current MNRE ALMM List I (check mnre.gov.in)"],
                  ["Certificate Validity", "All certificates are current — not expired, not suspended"],
                  ["Written Declaration", "Supplier has provided a signed compliance declaration referencing certificate numbers"],
                  ["Contract Clause", "Supply agreement includes a warranty of compliance and remedy clause for non-compliant supply"],
                ].map(([label, text]) => (
                  <li
                    key={label}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      padding: "8px 0",
                      borderBottom: "1px dashed #9FD4BC",
                    }}
                  >
                    <span style={{ color: "#22A05A", fontSize: 14, marginTop: 2 }}>▸</span>
                    <div>
                      <strong style={{ color: "#0D4A2F", fontWeight: 700 }}>{label}:</strong>{" "}
                      <span>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Callout>
          </Section>

          <Rule />

          {/* ── S9: Procurement Partner ── */}
          <Section id="procurement-partner" title="What This Means for Your Procurement Partner">
            <p style={p}>
              Managing certification compliance manually — checking multiple
              portals, cross-referencing model numbers, validating certificate
              expiry dates across dozens of SKUs — is time-consuming and
              error-prone. For a project with 5,000+ panels, the compliance
              verification task alone can take a procurement team days.
            </p>
            <p style={p}>
              The structural advantage of sourcing through a verified B2B
              procurement platform is that certification compliance is built
              into the sourcing layer. Suppliers are pre-qualified against BIS,
              IEC, and ALMM requirements before they appear in your sourcing
              results. Model-level ALMM verification is done as part of the
              product listing process. Your team focuses on project execution —
              not portal-checking.
            </p>
            <p style={p}>
              As India&apos;s solar pipeline accelerates toward 500 GW, the
              volume of projects — and the regulatory scrutiny on each — will
              only increase. Building certification compliance into your
              procurement process is not a compliance burden. It is the
              foundation of risk-free project delivery.
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
                &ldquo;The contractors who consistently deliver on time are the
                ones who solved compliance upstream — in procurement — rather
                than discovering problems at commissioning.&rdquo;
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
                — Headsup B2B Procurement Research, 2025
              </cite>
            </blockquote>
          </Section>

          <Rule />

          {/* ── S10: Key Takeaways ── */}
          <Section id="takeaways" title="Key Takeaways">
            <p style={p}>
              The five points below summarise the core compliance posture every
              EPC contractor and procurement team must operate from in India in
              2025–26.
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
                {
                  num: "1",
                  title: "BIS is mandatory for all solar PV modules sold in India.",
                  desc: "No ISI mark means the product cannot legally be sold or installed. Check the BIS Care portal before every order.",
                },
                {
                  num: "2",
                  title: "IEC certification is the technical backbone.",
                  desc: "While not a standalone legal mandate, it is practically required by every serious project, financier, and insurer. Demand it as a minimum.",
                },
                {
                  num: "3",
                  title: "ALMM is non-negotiable for government-funded projects.",
                  desc: "Always verify the specific model on the live MNRE ALMM list — not just the manufacturer name — before issuing a PO.",
                },
                {
                  num: "4",
                  title: "The three frameworks are complementary, not interchangeable.",
                  desc: "A BIS mark does not mean ALMM-listed. An IEC certificate does not confer BIS compliance. Each must be independently verified.",
                },
                {
                  num: "5",
                  title: "Build compliance verification into your procurement workflow.",
                  desc: "Manual verification at scale is a risk. Pre-qualified supplier networks with built-in certification checks are the procurement standard for competitive EPC firms in 2025–26.",
                },
              ].map(({ num, title, desc }) => (
                <div
                  key={num}
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
                    {num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#181C18",
                        marginBottom: 6,
                        lineHeight: 1.35,
                      }}
                    >
                      {title}
                    </div>
                    <p style={{ fontSize: 14.5, color: "#6B7468", lineHeight: 1.65, margin: 0 }}>
                      {desc}
                    </p>
                  </div>
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
              }}
            >
              Source Certified Solar Equipment with Confidence
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                maxWidth: 540,
                margin: "0 auto 30px",
                fontSize: 16,
              }}
            >
              Headsup B2B lists only BIS-compliant, IEC-certified, and
              ALMM-verified solar equipment — so your team can procure fast and
              audit-ready.
            </p>
            <Link
              href="/renewable-energy-solutions/solar-charge-controllers"
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
              Explore Solar Products →
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
                  Procurement Intelligence · headsupb2b.com
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["BIS Certification", "ALMM", "IEC Standards", "Solar Compliance", "EPC Procurement", "MNRE", "Solar India"].map(
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