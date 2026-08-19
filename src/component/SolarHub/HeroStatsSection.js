"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const HERO_STATS = [
  { value: "11,000+ MT", labelKey: "solar.stats.structures" },
  { value: "40+ MW", labelKey: "solar.stats.mandate" },
  { value: "10+ ", labelKey: "solar.stats.tier1" },
  { value: "Up to 61 Days*", labelKey: "solar.stats.credit" },
];

export default function HeroStatsSection() {
  const { t } = useTranslation();
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section className="stats-section">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-8">
        <div className="hero-stats-wrap">
          <div className="hero-stats !max-w-none" style={{ background: "#e8e4f7" }}>
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
                  {stat.value}
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
  );
}
