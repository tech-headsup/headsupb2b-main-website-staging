"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SOLAR_KITS } from "./data";

export default function SolarKitsSection() {
  const [kitIndex, setKitIndex] = useState(0);
  const [kitsPerView, setKitsPerView] = useState(3);
  const [kitPaused, setKitPaused] = useState(false);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setKitsPerView(1);
      else if (w < 1024) setKitsPerView(2);
      else setKitsPerView(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const slideCount = Math.max(1, Math.ceil(SOLAR_KITS.length / kitsPerView));
  const maxKitIndex = slideCount - 1;

  useEffect(() => {
    if (kitIndex > maxKitIndex) setKitIndex(0);
  }, [kitIndex, maxKitIndex]);

  useEffect(() => {
    if (kitPaused || maxKitIndex === 0) return;
    const id = setInterval(() => {
      setKitIndex((i) => (i >= maxKitIndex ? 0 : i + 1));
    }, 3500);
    return () => clearInterval(id);
  }, [kitPaused, maxKitIndex]);

  return (
    <section className="section section-tight-top">
      <div className="kits-container">
        <div className="sec-header">
          <h2>Solar Kits</h2>
          <p>Ready-to-install Project kits</p>
        </div>
        <div
          className="kits-carousel"
          onMouseEnter={() => setKitPaused(true)}
          onMouseLeave={() => setKitPaused(false)}
        >
          <div className="kits-viewport">
            <div
              className="kits-track"
              style={{
                transform: `translateX(-${kitIndex * 100}%)`,
              }}
            >
              {SOLAR_KITS.map((kit) => (
                <div
                  key={kit.title}
                  className="kit-slot"
                  style={{ flex: `0 0 ${100 / kitsPerView}%` }}
                >
                  <Link
                    href={`/solar-hub/kit/${kit.slug}`}
                    className="kit-card"
                  >
                    <div className={`kit-img ${kit.image ? "has-image" : ""}`}>
                      {kit.image ? (
                        <Image
                          src={kit.image}
                          alt={kit.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{
                            objectFit: "contain",
                            padding: 6,
                            transform: kit.imgScale ? `scale(${kit.imgScale})` : undefined,
                          }}
                        />
                      ) : (
                        <span className="kit-img-label">KIT IMAGE</span>
                      )}
                    </div>
                    <div className="kit-body">
                      <div className="kit-power">{kit.power}</div>
                      <h4 className="kit-title">{kit.fullTitle || kit.title}</h4>
                      <p className="kit-desc">{kit.desc}</p>
                      <span className="kit-view">View Kit</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="kit-dots">
          {Array.from({ length: maxKitIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`kit-dot ${kitIndex === i ? "active" : ""}`}
              onClick={() => setKitIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
