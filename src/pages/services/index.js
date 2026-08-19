"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { sendVendorOnboarding } from "@/Contants/APIEndpoint";
import { getDemoPhone } from "@/Utils/demoDefaults";

const SERVICE_ITEMS = [
  { key: "painting", icon: "/Ondemand/Painting.png" },
  { key: "electrical", icon: "/Ondemand/Electrical.png" },
  { key: "plumbing", icon: "/Ondemand/Plumbing.png" },
  { key: "hvac", icon: "/Ondemand/AC.png" },
  { key: "fire", icon: "/Ondemand/Fire.png", iconSize: 18 },
  { key: "amc", icon: "/Ondemand/ACM.png" },
  { key: "solar", icon: "/Ondemand/Solar.png" },
  { key: "bess", icon: "/Ondemand/BESS.png", iconSize: 14 },
  { key: "landscaping", icon: "/Ondemand/Contract.png" },
];

const AUDIENCE_CARDS = [
  { icon: "/worker.png", key: "contractors" },
  { icon: "/drawing-tools.png", key: "architects" },
  { icon: "/facility-management.png", key: "facility" },
  { icon: "/industrial-park.png", key: "industrial" },
];

const VENDOR_BENEFITS = [
  { icon: "/Grow-your-business/1.png", key: "pipeline" },
  { icon: "/Grow-your-business/2.png", key: "payments" },
  { icon: "/Grow-your-business/3.png", key: "ratings" },
  { icon: "/Grow-your-business/4.png", key: "onboarding" },
  { icon: "/Grow-your-business/5.png", key: "hardware" },
];

const VENDOR_TYPE_KEYS = [
  "serviceProvider",
  "hardware",
  "fabrication",
  "solarEpc",
  "multiTrade",
];

const SERVICE_CATEGORY_KEYS = [
  "painting",
  "electrical",
  "plumbing",
  "hvac",
  "fire",
  "civil",
  "interior",
  "solar",
  "bess",
  "amc",
  "hardware",
  "multiTrade",
  "other",
];

const TEAM_SIZE_KEYS = ["small", "medium", "large", "xlarge"];

const HERO_STATS = [
  { value: "₹210 Cr+", labelKey: "services.stats.revenue" },
  { value: "2,200+", labelKey: "services.stats.transactions" },
  { value: "8 Cr+", labelKey: "services.stats.partners" },
  { valueKey: "services.stats.panIndia", labelKey: "services.stats.coverage" },
];

const initialForm = {
  businessName: "",
  contactPerson: "",
  contactNo: "",
  email: "",
  city: "",
  serviceArea: "",
  vendorType: "",
  serviceCategory: "",
  teamSize: "",
  experience: "",
};

export default function ServicesPage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ ...initialForm, contactNo: getDemoPhone() });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }
  const [hoveredStat, setHoveredStat] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const required = ["businessName", "contactPerson", "contactNo", "email"];
    const missing = required.find((k) => !form[k].trim());
    if (missing) {
      setStatus({ type: "error", message: t("services.vendor.form.errors.required") });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ type: "error", message: t("services.vendor.form.errors.invalidEmail") });
      return;
    }

    setSubmitting(true);
    try {
      await axios.post("/api/sendVendorMail", form);
      setStatus({ type: "success", message: t("services.vendor.form.successMessage") });
      setForm({ ...initialForm, contactNo: getDemoPhone() });
    } catch (err) {
      setStatus({ type: "error", message: t("services.vendor.form.errors.unknown") });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{t("services.metaTitle")}</title>
        <meta name="description" content={t("services.metaDescription")} />
        <link rel="canonical" href="https://www.headsupb2b.com/services" />
      </Head>

      <div className="services-page">
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">

                <h1>
                  {t("services.hero.headline1")}
                  <br />
                  <span className="gradient-text">{t("services.hero.headline2")}</span>
                </h1>
                <p className="subtitle">
                  {t("services.hero.subtitle")}
                </p>
                <div className="hero-btns">
                  <a href="#services" className="btn-glow">
                    {t("services.hero.exploreCta")}
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="#vendor-form" className="btn-outline">
                    {t("services.hero.vendorCta")}
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <Image
                  src="/servicepagebanner.png"
                  alt="Headsup B2B Services"
                  width={1100}
                  height={1100}
                  priority
                  style={{ height: "auto", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* HERO STATS */}
        <section className="stats-section">
          <div className="container">
            <div className="hero-stats-wrap">
              <div className="hero-stats" style={{ background: "#e8e4f7" }}>
                {HERO_STATS.map((stat, i) => (
                  <div
                    key={stat.labelKey}
                    onMouseEnter={() => setHoveredStat(i)}
                    onMouseLeave={() => setHoveredStat(null)}
                    className="hero-stat"
                    style={{
                      background: hoveredStat === i ? "#4A3772" : "transparent",
                      borderRadius: hoveredStat === i ? "14px" : "0",
                    }}
                  >
                    <span
                      className="hero-stat-val"
                      style={{
                        color: hoveredStat === i ? "#ffffff" : "#4A3772",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {stat.valueKey ? t(stat.valueKey) : stat.value}
                    </span>
                    <span
                      className="hero-stat-lbl"
                      style={{
                        color: hoveredStat === i ? "rgba(255,255,255,0.85)" : "#4A3772",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {t(stat.labelKey)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUILT FOR */}
        <section className="section section-tight-top section-tight-bottom">
          <div className="container">
            <div className="sec-header">
              <h2>{t("services.builtFor.heading")}</h2>
              <p>
                {t("services.builtFor.subtitle")}
              </p>
            </div>
            <div className="audience-grid">
              {AUDIENCE_CARDS.map(({ icon, key }) => {
                const title = t(`services.builtFor.${key}`);
                return (
                  <div key={key} className="audience-card">
                    <div className="audience-card-icon">
                      <Image
                        src={icon}
                        alt={title}
                        width={64}
                        height={64}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h4>{title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section section-no-top section-tight-bottom" id="services">
          <div className="container">
            <div className="sec-header">
              <h2>{t("services.onDemand.heading")}</h2>
              <p>
                {t("services.onDemand.subtitle")}
              </p>
            </div>
            <div className="services-grid">
              {SERVICE_ITEMS.map(({ icon, key, iconSize = 22 }) => {
                const title = t(`services.onDemand.items.${key}.title`);
                const desc = t(`services.onDemand.items.${key}.desc`);
                return (
                  <div
                    key={key}
                    className="border border-[#e5e5e5] rounded-2xl p-5 sm:p-6 flex flex-col gap-3 bg-white transition-all duration-200 hover:shadow-[0_8px_30px_rgba(74,55,114,0.1)] hover:border-[#c5b8e8]"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f0eef8] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <Image
                        src={icon}
                        alt={title}
                        width={iconSize}
                        height={iconSize}
                        style={{ objectFit: "contain", display: "block" }}
                      />
                    </div>
                    <p
                      className="text-[17px] font-bold text-[#111] leading-snug"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-sm text-[#666] leading-relaxed flex-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {desc}
                    </p>
                    <button
                      onClick={() => {
                        window.location.href = "tel:+919911902943";
                      }}
                      className="w-fit rounded-lg px-5 py-2.5 font-bold text-[14px] text-black border-none cursor-pointer transition-all duration-200 hover:bg-[#00b8d9] hover:-translate-y-px"
                      style={{ background: "#80EBF7", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {t("services.onDemand.talkToUs")}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section-no-top section-tight-bottom">
          <div className="container">
            <div className="how-wrap">
              <div className="sec-header">
                <h2>{t("services.how.heading")}</h2>
                <p>
                  {t("services.how.subtitle")}
                </p>
              </div>
              <div className="steps-row">
                {[1,2,3,4].map((n) => (
                  <div key={n} className="step-item">
                    <div className="step-num">{n}</div>
                    <h4>{t(`services.how.step${n}.title`)}</h4>
                    <p>{t(`services.how.step${n}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VENDOR FORM */}
        <section className="section section-tight-top section-tight-bottom" id="vendor-form">
          <div className="container">
            <div className="vendor-section">
              <div className="v-left">
                <h2>
                  {t("services.vendor.headline1")}
                  <br />
                  <span className="hl">{t("services.vendor.headline2")}</span>
                </h2>
                <p>
                  {t("services.vendor.description")}
                </p>
                <div className="v-benefits">
                  {VENDOR_BENEFITS.map(({ icon, key }) => {
                    const title = t(`services.vendor.benefits.${key}.title`);
                    const desc = t(`services.vendor.benefits.${key}.desc`);
                    return (
                      <div key={key} className="v-benefit">
                        <div className="vb-icon">
                          <Image
                            src={icon}
                            alt={title}
                            width={28}
                            height={28}
                            style={{ objectFit: "contain", width: "70%", height: "70%" }}
                          />
                        </div>
                        <div className="vb-text">
                          <h5>{title}</h5>
                          <p>{desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <form className="v-form" onSubmit={handleSubmit} noValidate>
                <h3>{t("services.vendor.form.heading")}</h3>
                <p>
                  {t("services.vendor.form.subtitle")}
                </p>
                <div className="f-row">
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.businessName")}</label>
                    <input
                      type="text"
                      placeholder={t("services.vendor.form.placeholders.businessName")}
                      value={form.businessName}
                      onChange={handleChange("businessName")}
                    />
                  </div>
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.contactPerson")}</label>
                    <input
                      type="text"
                      placeholder={t("services.vendor.form.placeholders.contactPerson")}
                      value={form.contactPerson}
                      onChange={handleChange("contactPerson")}
                    />
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.phone")}</label>
                    <input
                      type="tel"
                      placeholder={t("services.vendor.form.placeholders.phone")}
                      value={form.contactNo}
                      onChange={handleChange("contactNo")}
                    />
                  </div>
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.email")}</label>
                    <input
                      type="email"
                      placeholder={t("services.vendor.form.placeholders.email")}
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.city")}</label>
                    <input
                      type="text"
                      placeholder={t("services.vendor.form.placeholders.city")}
                      value={form.city}
                      onChange={handleChange("city")}
                    />
                  </div>
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.serviceArea")}</label>
                    <input
                      type="text"
                      placeholder={t("services.vendor.form.placeholders.serviceArea")}
                      value={form.serviceArea}
                      onChange={handleChange("serviceArea")}
                    />
                  </div>
                </div>
                <div className="f-row">
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.vendorType")}</label>
                    <select value={form.vendorType} onChange={handleChange("vendorType")}>
                      <option value="">{t("services.vendor.form.placeholders.vendorType")}</option>
                      {VENDOR_TYPE_KEYS.map((k) => (
                        <option key={k} value={t(`services.vendor.form.vendorTypes.${k}`)}>
                          {t(`services.vendor.form.vendorTypes.${k}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="f-group">
                    <label>{t("services.vendor.form.labels.serviceCategory")}</label>
                    <select value={form.serviceCategory} onChange={handleChange("serviceCategory")}>
                      <option value="">{t("services.vendor.form.placeholders.serviceCategory")}</option>
                      {SERVICE_CATEGORY_KEYS.map((k) => (
                        <option key={k} value={t(`services.vendor.form.serviceCategories.${k}`)}>
                          {t(`services.vendor.form.serviceCategories.${k}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="f-group">
                  <label>{t("services.vendor.form.labels.teamSize")}</label>
                  <select value={form.teamSize} onChange={handleChange("teamSize")}>
                    <option value="">{t("services.vendor.form.placeholders.teamSize")}</option>
                    {TEAM_SIZE_KEYS.map((k) => (
                      <option key={k} value={t(`services.vendor.form.teamSizes.${k}`)}>
                        {t(`services.vendor.form.teamSizes.${k}`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="f-group">
                  <label>{t("services.vendor.form.labels.experience")}</label>
                  <textarea
                    rows={3}
                    placeholder={t("services.vendor.form.placeholders.experience")}
                    value={form.experience}
                    onChange={handleChange("experience")}
                  />
                </div>
                {status && (
                  <div className={`form-status form-status-${status.type}`}>
                    {status.message}
                  </div>
                )}
                <button type="submit" className="btn-submit-glow" disabled={submitting}>
                  {submitting ? t("services.vendor.form.submitting") : t("services.vendor.form.submit")}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* TRUST METRICS */}
        {/* <section className="section section-tight-top">
          <div className="container">
            <div className="trust-row">
              <div className="trust-item">
                <div className="t-num">
                  ₹210<span>Cr+</span>
                </div>
                <div className="t-lbl">FY26 Revenue</div>
              </div>
              <div className="trust-item">
                <div className="t-num">
                  2,200<span>+</span>
                </div>
                <div className="t-lbl">Transactions Executed</div>
              </div>
              <div className="trust-item">
                <div className="t-num">
                  19<span>+</span>
                </div>
                <div className="t-lbl">Years Combined Experience</div>
              </div>
              <div className="trust-item">
                <div className="t-num">
                  T<span>+1</span><span style={{ color: "#00d4f5" }}>*</span>
                </div>
                <div className="t-lbl">Supplier Payment Cycle</div>
              </div>
            </div>
          </div>
        </section> */}
      </div>

      <style jsx global>{`
        .services-page {
          --bg: #ffffff;
          --bg-card: #ffffff;
          --bg-elevated: #f4f1fa;
          --bg-glass: rgba(255, 255, 255, 0.75);
          --teal: #5e3f99;
          --teal-dim: rgba(94, 63, 153, 0.1);
          --teal-glow: rgba(94, 63, 153, 0.28);
          --amber: #5e3f99;
          --amber-dim: rgba(94, 63, 153, 0.1);
          --purple: #5e3f99;
          --purple-dim: rgba(94, 63, 153, 0.1);
          --rose: #5e3f99;
          --rose-dim: rgba(94, 63, 153, 0.1);
          --sky: #5e3f99;
          --sky-dim: rgba(94, 63, 153, 0.1);
          --lime: #5e3f99;
          --lime-dim: rgba(94, 63, 153, 0.1);
          --white: #1a1a1a;
          --gray-100: #2a2a2a;
          --gray-300: #404040;
          --gray-500: #6b6b6b;
          --gray-700: #9a9a9a;
          --border: rgba(94, 63, 153, 0.14);
          --border-hover: rgba(94, 63, 153, 0.3);

          font-family: "Montserrat", sans-serif;
          background: var(--bg);
          color: var(--gray-300);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        /* Vendor section keeps the dark purple panel — re-override so descendants render white */
        .services-page .vendor-section {
          --white: #ffffff;
          --gray-100: #ffffff;
          --gray-300: #ffffff;
          --gray-500: #ffffff;
          --gray-700: rgba(255, 255, 255, 0.55);
          --teal: #b2a9c6;
          --teal-dim: rgba(178, 169, 198, 0.18);
          --teal-glow: rgba(178, 169, 198, 0.4);
          --bg-card: #4a3175;
          --bg-elevated: #553890;
          --border: rgba(255, 255, 255, 0.14);
          --border-hover: rgba(255, 255, 255, 0.24);
          color: #ffffff;
        }
        .services-page * {
          box-sizing: border-box;
        }
        .services-page .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }
        @media (min-width: 768px) {
          .services-page .container {
            padding: 0 48px;
          }
        }
        @media (min-width: 1024px) {
          .services-page .container {
            padding: 0 32px;
          }
        }

        .services-page .hero {
          margin-top: 0;
          min-height: auto;
          padding: 72px 0 48px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .services-page .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(178, 169, 198, 0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(94, 63, 153, 0.1) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(178, 169, 198, 0.1) 0%, transparent 60%);
        }
        .services-page .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: services-float 20s ease-in-out infinite;
        }
        .services-page .orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(178, 169, 198, 0.18);
          top: 10%;
          left: -5%;
          animation-delay: 0s;
        }
        .services-page .orb-2 {
          width: 300px;
          height: 300px;
          background: rgba(94, 63, 153, 0.08);
          top: 60%;
          right: -5%;
          animation-delay: -7s;
        }
        .services-page .orb-3 {
          width: 250px;
          height: 250px;
          background: rgba(178, 169, 198, 0.14);
          bottom: 10%;
          left: 40%;
          animation-delay: -14s;
        }
        @keyframes services-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.95); }
        }

        .services-page .hero-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          align-items: center;
          gap: 40px;
          width: 100%;
        }
        .services-page .hero-content {
          position: relative;
          z-index: 2;
        }
        .services-page .hero-image {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          outline: none;
          background: transparent;
        }
        .services-page .hero-image img {
          width: 115% !important;
          max-width: 115%;
          height: auto;
          transform: translateX(2%);
          border: none;
          outline: none;
          box-shadow: none;
          display: block;
        }
        .services-page .hero-image span,
        .services-page .hero-image > * {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          background: transparent !important;
        }
        @media (max-width: 1280px) {
          .services-page .hero-image img {
            width: 105% !important;
            max-width: 105%;
            transform: translateX(0);
          }
        }
        @media (max-width: 1024px) {
          .services-page .hero {
            height: auto;
            min-height: auto;
            padding: 72px 0 40px;
          }
          .services-page .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .services-page .hero-image {
            order: 2;
          }
          .services-page .hero-image img {
            width: 100% !important;
            max-width: 560px;
            transform: none;
            margin: 0 auto;
          }
          .services-page .hero-content {
            text-align: center;
          }
          .services-page .hero .subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .services-page .hero-btns {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .services-page .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--teal-dim);
          border: 1px solid rgba(94, 63, 153, 0.25);
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: #5e3f99;
          margin-bottom: 32px;
          animation: services-slideUp 0.7s ease-out;
        }
        .services-page .hero-pill .live-dot {
          width: 8px;
          height: 8px;
          background: var(--teal);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--teal);
          animation: services-blink 2s infinite;
        }
        @keyframes services-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .services-page .hero h1 {
          font-family: "Montserrat", sans-serif;
          font-size: 60px;
          font-weight: 900;
          line-height: 1;
          color: var(--white);
          letter-spacing: -1.5px;
          margin-bottom: 22px;
          animation: services-slideUp 0.7s ease-out 0.1s both;
        }
        .services-page .hero h1 .gradient-text {
          color: #5e3f99;
        }
        .services-page .hero .subtitle {
          font-size: 16px;
          line-height: 1.65;
          color: var(--gray-300);
          max-width: 580px;
          margin-bottom: 32px;
          animation: services-slideUp 0.7s ease-out 0.2s both;
        }
        .services-page .hero-btns {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 14px;
          animation: services-slideUp 0.7s ease-out 0.3s both;
          max-width: 700px;
        }
        @media (min-width: 640px) {
          .services-page .hero-btns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }
        .services-page .btn-glow,
        .services-page .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 13px 20px;
          border-radius: 10px;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          text-decoration: none;
          white-space: normal;
          text-align: center;
          line-height: 1.3;
          transition: all 0.3s;
          cursor: pointer;
        }
        .services-page .btn-glow {
          background: #00d4f5;
          color: #ffffff;
          font-weight: 700;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
          letter-spacing: 0.3px;
        }
        .services-page .btn-glow:hover {
          background: #00bcd9;
          box-shadow: 0 8px 28px rgba(0, 212, 245, 0.45), 0 4px 12px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .services-page .btn-outline {
          background: #00d4f5;
          border: none;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
          letter-spacing: 0.3px;
        }
        .services-page .btn-outline:hover {
          background: #00bcd9;
          box-shadow: 0 8px 28px rgba(0, 212, 245, 0.45), 0 4px 12px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .services-page .stats-section {
          padding: 48px 0 24px;
        }
        .services-page .hero-stats-wrap {
          display: flex;
          justify-content: center;
        }
        .services-page .hero-stats {
          display: flex;
          align-items: stretch;
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          max-width: 1280px;
        }
        .services-page .hero-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding: 24px 20px;
          cursor: default;
          transition: background 0.2s ease, border-radius 0.2s ease;
        }
        .services-page .hero-stat-val {
          font-size: 32px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
          white-space: nowrap;
          transition: color 0.2s ease;
        }
        .services-page .hero-stat-lbl {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.3;
          white-space: pre-line;
          transition: color 0.2s ease;
        }

        @keyframes services-slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .services-page .audience-bar {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 40px 0;
          background: #faf8ff;
        }
        .services-page .audience-row {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .services-page .audience-label {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--teal);
          white-space: nowrap;
          min-width: 90px;
        }
        .services-page .audience-chips {
          display: flex;
          gap: 12px;
          flex: 1;
          flex-wrap: wrap;
        }
        .services-page .audience-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 20px;
          flex: 1;
          min-width: 170px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .services-page .audience-chip:hover {
          border-color: var(--border-hover);
          transform: translateY(-2px);
        }
        .services-page .chip-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .services-page .chip-icon.c1,
        .services-page .chip-icon.c2,
        .services-page .chip-icon.c3,
        .services-page .chip-icon.c4 {
          background: rgba(94, 63, 153, 0.18);
        }
        .services-page .audience-chip h5 {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--white);
          margin: 0;
        }
        .services-page .audience-chip p {
          font-size: 11px;
          color: var(--gray-500);
          margin: 1px 0 0;
        }

        .services-page .section {
          padding: 120px 0;
        }
        .services-page .section-no-top {
          padding-top: 0;
        }
        .services-page .section-tight-top {
          padding-top: 20px;
        }
        .services-page .section-tight-bottom {
          padding-bottom: 40px;
        }
        .services-page .sec-header {
          text-align: center;
          margin-bottom: 72px;
        }
        .services-page .sec-tag {
          display: inline-block;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 16px;
        }
        .services-page .sec-header h2 {
          font-family: "Montserrat", sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -1.5px;
          margin: 0 0 16px;
          line-height: 1.1;
        }
        .services-page .sec-header p {
          font-size: 17px;
          color: var(--gray-300);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .services-page .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .services-page .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .services-page .services-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        .services-page .audience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .services-page .audience-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          cursor: default;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .services-page .audience-card:hover {
          box-shadow: 0 8px 30px rgba(74, 55, 114, 0.1);
          border-color: #c5b8e8;
        }
        .services-page .audience-card-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          flex-shrink: 0;
        }
        .services-page .audience-card h4 {
          font-family: "Montserrat", sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #111111;
          margin: 0;
          line-height: 1.3;
          width: 100%;
        }
        @media (max-width: 768px) {
          .services-page .audience-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 480px) {
          .services-page .audience-grid {
            grid-template-columns: 1fr;
          }
        }
        .services-page .s-card {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          cursor: default;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .services-page .s-card:hover {
          box-shadow: 0 8px 30px rgba(74, 55, 114, 0.1);
          border-color: #c5b8e8;
        }
        .services-page .s-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          flex-shrink: 0;
        }
        .services-page .s-card h3 {
          font-family: "Montserrat", sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #111111;
          margin: 0;
          line-height: 1.3;
          width: 100%;
        }
        .services-page .s-card p {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          color: #555555;
          line-height: 1.55;
          margin: 0;
          width: 100%;
        }

        .services-page .how-wrap {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 72px 56px;
        }
        .services-page .steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .services-page .steps-row::before {
          content: "";
          position: absolute;
          top: 32px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(94, 63, 153, 0.18), var(--teal), rgba(94, 63, 153, 0.18), transparent);
        }
        .services-page .step-item {
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .services-page .step-num {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          font-weight: 800;
          color: #1a1a2e;
          background: #80EBF7;
          box-shadow: 0 8px 24px rgba(128, 235, 247, 0.35);
          transition: transform 0.3s;
        }
        .services-page .step-num.alt {
          background: var(--bg-elevated);
          border: 2px solid rgba(94, 63, 153, 0.35);
          color: var(--white);
          box-shadow: none;
        }
        .services-page .step-item:hover .step-num {
          transform: scale(1.1);
        }
        .services-page .step-item h4 {
          font-family: "Montserrat", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 8px;
        }
        .services-page .step-item p {
          font-size: 13px;
          color: var(--gray-300);
          line-height: 1.55;
          margin: 0;
        }

        .services-page .vendor-section {
          background: linear-gradient(160deg, #4a3175 0%, #5e3f99 50%, #3a2a5f 100%);
          border: 1px solid rgba(178, 169, 198, 0.22);
          border-radius: 28px;
          padding: 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          position: relative;
          overflow: hidden;
        }
        .services-page .vendor-section::before {
          content: "";
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(178, 169, 198, 0.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .services-page .vendor-section::after {
          content: "";
          position: absolute;
          bottom: -150px;
          left: -150px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .services-page .v-left {
          position: relative;
          z-index: 2;
          padding-top: 12px;
        }
        @media (max-width: 1100px) {
          .services-page .v-left {
            padding-top: 0;
          }
        }
        .services-page .v-left h2 {
          font-family: "Montserrat", sans-serif;
          font-size: 44px;
          font-weight: 800;
          color: var(--white);
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0 0 20px;
        }
        .services-page .v-left h2 .hl {
          color: var(--teal);
        }
        .services-page .v-left > p {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.7;
          margin: 0 0 36px;
        }
        .services-page .v-benefits {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .services-page .v-benefit {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .services-page .vb-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #00d4f5;
          box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
        }
        .services-page .vb-text h5 {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 2px;
        }
        .services-page .vb-text p {
          font-size: 13px;
          color: #ffffff;
          line-height: 1.5;
          margin: 0;
        }

        .services-page .v-form {
          position: relative;
          z-index: 2;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          padding: 24px 40px;
        }
        .services-page .v-form h3 {
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 6px;
        }
        .services-page .v-form > p {
          font-size: 13px;
          color: #555555;
          margin: 0 0 28px;
        }
        .services-page .f-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .services-page .f-group {
          margin-bottom: 12px;
        }
        .services-page .v-form .f-group label {
          display: block;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #1f2937;
          letter-spacing: 0;
          text-transform: none;
          margin-bottom: 4px;
        }
        .services-page .v-form .f-group input,
        .services-page .v-form .f-group select,
        .services-page .v-form .f-group textarea {
          width: 100%;
          background: #ffffff;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          padding: 8px 16px;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          color: #1f2937;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .services-page .v-form .f-group textarea {
          padding: 12px 16px;
        }
        .services-page .v-form .f-group input::placeholder,
        .services-page .v-form .f-group textarea::placeholder {
          color: #9ca3af;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
        }
        .services-page .v-form .f-group select:invalid,
        .services-page .v-form .f-group select option[value=""] {
          font-size: 12px;
          color: #9ca3af;
        }
        .services-page .v-form .f-group input:focus,
        .services-page .v-form .f-group select:focus,
        .services-page .v-form .f-group textarea:focus {
          border-color: transparent;
          box-shadow: 0 0 0 2px #4b5563;
        }
        .services-page .v-form .f-group select {
          appearance: none;
          padding-right: 36px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%235E3F99' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
        .services-page .v-form .f-group select option {
          background: #ffffff;
          color: #1a1a1a;
        }
        .services-page .btn-submit-glow {
          width: 100%;
          background: #00d4f5;
          color: #ffffff;
          padding: 15px 32px;
          border: none;
          border-radius: 10px;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 6px;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 15px rgba(0, 212, 245, 0.35);
        }
        .services-page .btn-submit-glow:hover {
          background: #00bcd9;
          box-shadow: 0 8px 28px rgba(0, 212, 245, 0.5);
          transform: translateY(-2px);
        }
        .services-page .btn-submit-glow:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .services-page .form-status {
          font-size: 13px;
          padding: 12px 14px;
          border-radius: 8px;
          margin-bottom: 14px;
          line-height: 1.5;
        }
        .services-page .form-status-success {
          background: rgba(0, 212, 245, 0.12);
          border: 1px solid rgba(0, 212, 245, 0.45);
          color: #066b7d;
        }
        .services-page .form-status-error {
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.45);
          color: #b1233b;
        }

        .services-page .trust-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .services-page .trust-item {
          text-align: center;
          padding: 36px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .services-page .trust-item:hover {
          border-color: var(--border-hover);
          transform: translateY(-4px);
        }
        .services-page .trust-item .t-num {
          font-family: "Montserrat", sans-serif;
          font-size: 42px;
          font-weight: 900;
          color: var(--white);
          letter-spacing: -2px;
        }
        .services-page .trust-item .t-num span {
          color: var(--teal);
        }
        .services-page .trust-item .t-lbl {
          font-size: 13px;
          color: var(--gray-500);
          font-weight: 700;
          margin-top: 4px;
        }

        @media (max-width: 1100px) {
          .services-page .hero h1 {
            font-size: 52px;
          }
          .services-page .vendor-section {
            grid-template-columns: 1fr;
            padding: 56px 40px;
          }
        }
        @media (max-width: 768px) {
          .services-page .hero-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .services-page .hero-stat {
            flex: none;
            width: auto;
            padding: 18px 12px;
            min-width: 0;
          }
          .services-page .hero-stat-val {
            white-space: normal;
            word-break: break-word;
          }
          .services-page .hero-stat-val {
            font-size: 22px;
          }
          .services-page .hero-stat-lbl {
            font-size: 12px;
          }
          .services-page .hero {
            min-height: auto;
            height: auto;
            padding: 64px 0 32px;
            margin-top: 0;
          }
          .services-page .hero-grid {
            gap: 24px;
          }
          .services-page .hero h1 {
            font-size: 36px;
            letter-spacing: -1px;
            margin-bottom: 16px;
          }
          .services-page .hero .subtitle {
            font-size: 15px;
            margin-bottom: 24px;
          }
          .services-page .sec-header h2 {
            font-size: 32px;
          }
          .services-page .section {
            padding: 80px 0;
          }
          .services-page .steps-row {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .services-page .steps-row::before {
            display: none;
          }
          .services-page .vendor-section {
            padding: 40px 24px;
            border-radius: 20px;
          }
          .services-page .v-left h2 {
            font-size: 30px;
          }
          .services-page .f-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .services-page .how-wrap {
            padding: 48px 24px;
            border-radius: 16px;
          }
          .services-page .trust-row {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .services-page .trust-item {
            padding: 24px 12px;
          }
          .services-page .trust-item .t-num {
            font-size: 28px;
            letter-spacing: -1px;
          }
          .services-page .trust-item .t-lbl {
            font-size: 12px;
            line-height: 1.35;
          }
          .services-page .audience-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .services-page .audience-chips {
            flex-direction: column;
          }
        }
        @media (max-width: 480px) {
          .services-page .trust-row {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .services-page .trust-item {
            padding: 20px 10px;
          }
          .services-page .trust-item .t-num {
            font-size: 22px;
            letter-spacing: -0.5px;
          }
          .services-page .trust-item .t-num span {
            font-size: 16px;
          }
          .services-page .trust-item .t-lbl {
            font-size: 11px;
          }
          .services-page .hero h1 {
            font-size: 32px;
          }
          .services-page .sec-header h2 {
            font-size: 26px;
          }
          .services-page .sec-header p {
            font-size: 15px;
          }
          .services-page .v-left h2 {
            font-size: 26px;
          }
          .services-page .v-form {
            padding: 24px 20px;
          }
          .services-page .vendor-section {
            padding: 32px 18px;
          }
          .services-page .btn-glow,
          .services-page .btn-outline {
            padding: 14px 24px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
