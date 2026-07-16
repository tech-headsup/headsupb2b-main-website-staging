"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
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
  const partners = SOLAR_PARTNERS_RESPONSE?.doc?.[0]?.partner || [];

  return (
    <section className="section section-no-top" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="tp-wrap">
          <h2 className="tp-heading">Our Trusted Partners</h2>
          <p className="tp-sub">Sourced from India&apos;s leading manufacturers</p>
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
            <h2 className="tp-heading">Certifications</h2>
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
