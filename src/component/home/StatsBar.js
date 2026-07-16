"use client";
import { useState } from "react";

const STATS = [
  { value: "500+", label: "Projects\nDelivered" },
  { value: "20+", label: "States\nServed" },
  { value: "1000+", label: "Verified\nSuppliers" },
  { value: "250+", label: "Clients &\nPartners" },
  { value: "1000+", label: "Product\nSKUs" },
];

export default function StatsBar() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full px-4 md:px-12 lg:px-36 pt-8 bg-white">
      <div
        className="grid grid-cols-3 lg:flex lg:items-stretch rounded-2xl overflow-hidden"
        style={{ background: "#e8e4f7" }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.value}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="md:flex-1 flex flex-col items-center justify-center text-center px-5 py-6 md:px-7 md:py-8 cursor-default transition-all duration-200"
            style={{
              background: hovered === i ? "#4A3772" : "transparent",
              borderRadius: hovered === i ? "14px" : "0",
            }}
          >
            <span
              className="text-3xl md:text-[42px] font-extrabold leading-none mb-2"
              style={{
                color: hovered === i ? "#ffffff" : "#4A3772",
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {stat.value}
            </span>
            <span
              className="text-sm md:text-[16px] font-medium leading-snug whitespace-pre-line pr-5"
              style={{
                color: hovered === i ? "rgba(255,255,255,0.85)" : "#4A3772",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}