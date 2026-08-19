"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { SOLAR_PARTNERS_RESPONSE } from "./solarPartners";

const CERTIFICATIONS = [
  "IEC 61215",
  "IEC 61730",
  "IEC 62109",
  "IEC 62509",
  "IEC 62133",
  "IS 1651",
  "BIS",
  "MNRE",
  "TÜV",
];

export default function TrustedPartnersSection() {
  const { t } = useTranslation();
  const partners = SOLAR_PARTNERS_RESPONSE?.doc?.[0]?.partner || [];

  return (
    <section className="section section-no-top" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="tp-container">
        <div className="tp-wrap">
          <h2 className="tp-heading">{t("solar.trusted.heading")}</h2>
          <p className="tp-sub">{t("solar.trusted.subtitle")}</p>
          <div className="tp-marquee">
            <Marquee pauseOnHover speed={40} gradient={false}>
              {partners.map((ele, i) => (
                <div key={`${ele._id}-${i}`} className="tp-logo-slot">
                  <Image
                    src={ele.imageUrl}
                    alt="Brand"
                    height={35}
                    width={90}
                    style={{
                      maxHeight: 35,
                      maxWidth: 90,
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="tp-certs">
            <h2 className="tp-heading">{t("solar.trusted.certifications")}</h2>
            <div className="tp-certs-list">
              {CERTIFICATIONS.map((c) => (
                <span key={c} className="tp-cert-chip">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
