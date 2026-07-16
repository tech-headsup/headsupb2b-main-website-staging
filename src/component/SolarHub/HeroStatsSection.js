"use client";

import { useState } from "react";
import { HERO_STATS } from "./data";

export default function HeroStatsSection() {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="hero-stats-wrap">
          <div className="hero-stats" style={{ background: "#e8e4f7" }}>
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.value}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
                className="hero-stat"
                style={{
                  background: hoveredStat === i ? "#4A3772" : "transparent",
                  borderRadius: hoveredStat === i ? "14px" : "0",
                }}
              >
                <span
                  className="hero-stat-val"///
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
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
