import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { SOLAR_KITS } from "@/component/SolarHub/data";
import CommonModal from "@/component/Modal/CommonModal";
import CommonForm from "@/component/Form/CommonForm";
import { sendEmailToBuy } from "@/Contants/APIEndpoint";

const TABS = [
  { id: "specs", label: "Product Specifications" },
  { id: "details", label: "Product Details" },
  { id: "how", label: "How It Works" },
];

export default function KitDetailPage({ kit }) {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(null);
  const [activeTab, setActiveTab] = useState("specs");
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  if (router.isFallback || !kit) {
    return (
      <div className="kit-page">
        <div className="kit-container">
          <p>Loading kit…</p>
        </div>
        <KitDetailStyles />
      </div>
    );
  }

  const gallery = kit.gallery && kit.gallery.length > 0 ? kit.gallery : [];
  const mainImage =
    activeImage !== null && gallery[activeImage]
      ? gallery[activeImage]
      : kit.image;

  return (
    <>
      <Head>
        <title>{`${kit.fullTitle} | Headsup B2B Solar Hub`}</title>
        <meta name="description" content={kit.longDescription} />
      </Head>

      <div className="kit-page">
        <div className="kit-container">
          <div className="kit-hero">
            <div className="kit-gallery">
              <div className="kit-main-image">
                {mainImage ? (
                  <Image
                    src={mainImage}
                    alt={kit.fullTitle}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "contain", padding: 24 }}
                    priority
                  />
                ) : null}
              </div>
              <div
                className="kit-thumbs"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(
                    gallery.length,
                    5
                  )}, 1fr)`,
                }}
              >
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`kit-thumb ${
                      activeImage === i ? "is-active" : ""
                    }`}
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="120px"
                      style={{ objectFit: "contain", padding: 8 }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="kit-info">
              <div className="kit-badge">
                <span className="kit-badge-dot" />
                Authorised Seller &amp; Pan India Shipping
              </div>
              <h1 className="kit-heading">{kit.fullTitle}</h1>
              <p className="kit-lead">{kit.longDescription}</p>

              <div className="kit-highlights">
                {kit.highlights?.map((h) => (
                  <div key={h.label} className="kit-highlight">
                    <div className="kit-highlight-lbl">{h.label}</div>
                    <div className="kit-highlight-val">{h.value}</div>
                  </div>
                ))}
              </div>

              <div className="kit-cta-row">
                <button
                  type="button"
                  className="kit-cta kit-cta-primary"
                  onClick={() => setShowQuoteModal(true)}
                >
                  Get a Quote
                </button>
                <a href="tel:+917210199772" className="kit-cta kit-cta-outline">
                  Call Us
                </a>
              </div>

              {kit.features && kit.features.length > 0 && (
                <ul className="kit-features">
                  {kit.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="kit-tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`kit-tab ${activeTab === t.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="kit-tab-panel">
            {activeTab === "specs" && (
              <div>
                <h3 className="kit-specs-title">{kit.fullTitle}</h3>
                <div className="kit-table-wrap">
                <table className="kit-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Component</th>
                      <th>Specifications</th>
                      <th>Brand</th>
                      <th>Qty</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(kit.specsTable || []).map((row, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{row.component}</td>
                        <td>{row.specifications}</td>
                        <td>{row.brand}</td>
                        <td>{row.qty}</td>
                        <td>{row.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            )}

            {activeTab === "details" && (
              <div className="kit-details-card">
                {(kit.details || []).map((row) => (
                  <div key={row.label} className="kit-details-row">
                    <div className="kit-details-label">{row.label}</div>
                    <div className="kit-details-value">{row.value}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "how" && (
              <div className="kit-how-grid">
                {(kit.howItWorksSteps || []).map((s) => (
                  <div key={s.step} className="kit-how-card">
                    <div className="kit-how-step">{s.step}</div>
                    <h4 className="kit-how-title">{s.title}</h4>
                    <p className="kit-how-desc">{s.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showQuoteModal && (
        <CommonModal
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
          title={`Get a Quote — ${kit.title}`}
          closeOnBackdropClick={true}
          size="xl"
        >
          <CommonForm
            setShow={setShowQuoteModal}
            endPoint={sendEmailToBuy}
            categoryProductOptions={[]}
          />
        </CommonModal>
      )}

      <KitDetailStyles />
    </>
  );
}

function KitDetailStyles() {
  return (
    <style jsx global>{`
      .kit-page {
        font-family: "Montserrat", sans-serif;
        background: #ffffff;
        color: #2a2a2a;
        padding: 96px 0 80px;
      }
      .kit-page * {
        box-sizing: border-box;
      }
      .kit-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 48px;
      }
      .kit-crumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: #6b6b6b;
        margin-bottom: 24px;
      }
      .kit-crumbs a {
        color: #5e3f99;
        text-decoration: none;
        font-weight: 600;
      }
      .kit-crumbs a:hover {
        text-decoration: underline;
      }

      .kit-hero {
        display: flex;
        gap: 48px;
        align-items: stretch;
        background: #ffffff;
        border-radius: 20px;
        padding: 8px;
      }
      .kit-gallery {
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .kit-info {
        flex: 1 1 0;
        min-width: 0;
      }
      .kit-main-image {
        position: relative;
        width: 100%;
        flex: 1 1 0;
        min-height: 0;
        background: #ffffff;
        border: 1px solid #e8e8e8;
        border-radius: 16px;
        overflow: hidden;
      }
      .kit-thumbs {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }
      .kit-thumb {
        position: relative;
        aspect-ratio: 1 / 1;
        background: #ffffff;
        border: 1px solid #e8e8e8;
        border-radius: 12px;
        padding: 0;
        cursor: pointer;
        overflow: hidden;
        transition: border-color 0.2s ease, transform 0.2s ease;
      }
      .kit-thumb:hover {
        border-color: #c5b8e8;
      }
      .kit-thumb.is-active {
        border-color: #5e3f99;
        box-shadow: 0 0 0 2px rgba(94, 63, 153, 0.18);
      }

      .kit-info {
        padding: 12px 0;
      }
      .kit-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 600;
        color: #0e6b7a;
        background: #e8fafc;
        border: 1px solid #b8eef4;
        padding: 6px 14px;
        border-radius: 999px;
        margin-bottom: 14px;
      }
      .kit-badge-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #14a3b8;
      }
      .kit-heading {
        font-family: "Montserrat", sans-serif;
        font-size: 34px;
        font-weight: 800;
        color: #111;
        line-height: 1.2;
        letter-spacing: -0.6px;
        margin: 0 0 16px;
      }
      .kit-lead {
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        line-height: 1.6;
        color: #555;
        margin: 0 0 24px;
      }

      .kit-highlights {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        background: #f4f1fa;
        border-radius: 12px;
        padding: 18px 12px;
        margin-bottom: 24px;
      }
      .kit-highlight {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        padding: 4px 8px;
        border-right: 1px solid rgba(94, 63, 153, 0.12);
        gap: 10px;
      }
      .kit-highlight:last-child {
        border-right: none;
      }
      .kit-highlight-lbl {
        font-family: "Montserrat", sans-serif;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 1.4px;
        color: #6b6b6b;
        text-transform: uppercase;
        line-height: 1.25;
        min-height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .kit-highlight-val {
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        font-weight: 800;
        color: #111;
        letter-spacing: -0.2px;
        line-height: 1.1;
      }

      .kit-cta-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        margin-bottom: 16px;
      }
      .kit-cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 13px 24px;
        border-radius: 8px;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.2px;
        text-decoration: none;
        cursor: pointer;
        border: 1.5px solid transparent;
        transition: background 0.2s ease, transform 0.2s ease,
          box-shadow 0.2s ease;
      }
      .kit-cta-primary {
        background: #5e3f99;
        color: #ffffff;
      }
      .kit-cta-primary:hover {
        background: #4a3175;
        transform: translateY(-1px);
      }
      .kit-cta-outline {
        background: #ffffff;
        color: #5e3f99;
        border-color: #5e3f99;
      }
      .kit-cta-outline:hover {
        background: #f4f1fa;
      }

      .kit-features {
        list-style: none;
        padding: 0;
        margin: 8px 0 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px 28px;
        font-family: "DM Sans", sans-serif;
        font-size: 13px;
        color: #444;
      }
      .kit-features li {
        position: relative;
        padding-left: 0;
      }
      .kit-features li + li::before {
        content: "·";
        position: absolute;
        left: -16px;
        color: #b9b9b9;
      }

      .kit-tabs {
        display: flex;
        gap: 32px;
        border-bottom: 1px solid #e5e5e5;
        margin: 56px 0 24px;
      }
      .kit-tab {
        background: transparent;
        border: none;
        padding: 12px 0;
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        font-weight: 700;
        color: #a0a0a0;
        cursor: pointer;
        position: relative;
        transition: color 0.2s ease;
      }
      .kit-tab:hover {
        color: #5e3f99;
      }
      .kit-tab.is-active {
        color: #111;
      }
      .kit-tab.is-active::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        height: 2px;
        background: #5e3f99;
      }

      .kit-tab-panel {
        margin-top: 8px;
      }
      .kit-specs-title {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        font-weight: 800;
        color: #111;
        margin: 0 0 16px;
        letter-spacing: -0.3px;
      }
      .kit-table-wrap {
        overflow-x: auto;
        border-radius: 12px;
        border: 1px solid #e5e5e5;
      }
      .kit-table {
        width: 100%;
        border-collapse: collapse;
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
        background: #ffffff;
      }
      .kit-table thead th {
        background: #4a3175;
        color: #ffffff;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.3px;
        text-align: left;
        padding: 14px 18px;
      }
      .kit-table tbody td {
        padding: 16px 18px;
        border-top: 1px solid #eeeaf7;
        color: #333;
        vertical-align: middle;
      }
      .kit-table tbody tr:nth-child(even) td {
        background: #faf8ff;
      }
      .kit-table tbody td:first-child {
        color: #6b6b6b;
        width: 60px;
      }
      .kit-table tbody td:nth-child(2) {
        font-weight: 700;
        color: #111;
      }

      .kit-copy {
        font-family: "DM Sans", sans-serif;
        font-size: 15px;
        line-height: 1.7;
        color: #444;
        background: #ffffff;
        padding: 12px 4px;
      }

      .kit-how-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      .kit-how-card {
        background: #ffffff;
        border: 1px solid #eeeaf7;
        border-radius: 16px;
        padding: 24px 24px 22px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: box-shadow 0.2s ease, border-color 0.2s ease,
          transform 0.2s ease;
      }
      .kit-how-card:hover {
        border-color: #c5b8e8;
        box-shadow: 0 8px 30px rgba(74, 55, 114, 0.08);
        transform: translateY(-2px);
      }
      .kit-how-step {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #d7f5f9;
        color: #0e6b7a;
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
      }
      .kit-how-title {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #111;
        margin: 0;
        line-height: 1.35;
      }
      .kit-how-desc {
        font-family: "DM Sans", sans-serif;
        font-size: 13px;
        color: #6b6b6b;
        line-height: 1.55;
        margin: 0;
      }
      @media (max-width: 900px) {
        .kit-how-grid {
          grid-template-columns: 1fr;
        }
      }

      .kit-details-card {
        border: 1px solid #eeeaf7;
        border-radius: 16px;
        background: #ffffff;
        overflow: hidden;
      }
      .kit-details-row {
        display: grid;
        grid-template-columns: 220px 1fr;
        align-items: stretch;
      }
      .kit-details-row + .kit-details-row {
        border-top: 1px solid #f1edfa;
      }
      .kit-details-label {
        background: #faf8ff;
        border-right: 1px solid #eeeaf7;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #1a1a2e;
        letter-spacing: 0.2px;
        padding: 22px 28px;
        display: flex;
        align-items: center;
      }
      .kit-details-value {
        background: #ffffff;
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        color: #6b6b6b;
        line-height: 1.5;
        padding: 22px 28px;
        display: flex;
        align-items: center;
      }
      @media (max-width: 640px) {
        .kit-details-row {
          grid-template-columns: 130px 1fr;
        }
        .kit-details-label,
        .kit-details-value {
          padding: 16px 16px;
          font-size: 13px;
        }
      }

      @media (max-width: 1024px) {
        .kit-hero {
          flex-direction: column;
          gap: 32px;
        }
      }
      @media (max-width: 768px) {
        .kit-page {
          padding: 72px 0 56px;
        }
        .kit-container {
          padding: 0 20px;
        }
        .kit-heading {
          font-size: 26px;
        }
        .kit-highlights {
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 0;
        }
        .kit-highlight {
          border-right: none;
          border-bottom: 1px solid rgba(94, 63, 153, 0.12);
          padding-bottom: 12px;
        }
        .kit-highlight:nth-last-child(-n + 2) {
          border-bottom: none;
          padding-bottom: 0;
        }
        .kit-cta-row {
          grid-template-columns: 1fr;
        }
        .kit-tabs {
          gap: 20px;
          overflow-x: auto;
        }
        .kit-tab {
          white-space: nowrap;
          font-size: 14px;
        }
        .kit-table thead th,
        .kit-table tbody td {
          padding: 12px 12px;
          font-size: 12px;
        }
      }
    `}</style>
  );
}

export async function getStaticPaths() {
  return {
    paths: SOLAR_KITS.map((k) => ({ params: { slug: k.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const kit = SOLAR_KITS.find((k) => k.slug === params.slug) || null;
  if (!kit) {
    return { notFound: true };
  }
  return {
    props: { kit },
    revalidate: 600,
  };
}
