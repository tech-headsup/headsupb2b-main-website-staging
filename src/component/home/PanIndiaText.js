"use client";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import B2BImage from "@/assets/images/B2B image.png";

const HEADING =
  "One-Stop Pan India Supplier for Complete Industrial & Infrastructure Solutions";

const PARA1 =
  "Headsup B2B is a trusted one-stop platform for sourcing a wide range of industrial, construction, infrastructure, and renewable energy products. We supply high-quality metal solutions, electrical cables and equipment, road safety systems, building materials, industrial automation, petro-chemical products, renewable energy solutions, industrial safety equipment, biomass fuels, and agro-commodities. Our portfolio covers everything from TMT bars, AAC blocks, pipes, cables, crash barriers, and waterproofing to solar panels, lithium-ion batteries, docking solutions, access control systems, and cleanroom equipment.";

const PARA2 =
  "Backed by a strong network of verified manufacturers and suppliers, Headsup B2B ensures consistent quality, competitive pricing, and reliable delivery along with customised financing solutions for all round business support. Whether for small developments or large-scale industrial and infrastructure projects, we simplify procurement by delivering complete B2B supply solutions under one roof!";

const H_WORDS  = HEADING.split(" ");
const P1_WORDS = PARA1.split(" ");
const P2_WORDS = PARA2.split(" ");

const TRIGGER_RATIO = 0.72;

export default function PanIndiaText() {
  const hRefs  = useRef([]);
  const p1Refs = useRef([]);
  const p2Refs = useRef([]);
  const allRefs = useRef([]);

  useEffect(() => {
    allRefs.current = [
      ...hRefs.current,
      ...p1Refs.current,
      ...p2Refs.current,
    ];
  });

  const applyColors = useCallback(() => {
    const trigger = window.innerHeight * TRIGGER_RATIO;
    allRefs.current.forEach((el) => {
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      el.style.color = top < trigger
        ? "rgba(255,255,255,1)"
        : "rgba(255,255,255,0.2)";
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", applyColors, { passive: true });
    applyColors();
    return () => window.removeEventListener("scroll", applyColors);
  }, [applyColors]);

  const wordSpan = (word, refs, i, total) => (
    <span
      key={i}
      ref={(el) => { refs.current[i] = el; }}
      style={{
        color: "rgba(255,255,255,0.2)",
        transition: "color 0.25s ease",
        display: "inline",
      }}
    >
      {word}{i < total - 1 ? " " : ""}
    </span>
  );

  return (
    <div className="rounded-2xl overflow-hidden mt-6 sm:mt-8">
      {/* Image */}
      <div className="w-full">
        <Image
          src={B2BImage}
          alt="Pan India Infrastructure"
          width={B2BImage.width}
          height={B2BImage.height}
          className="w-full h-auto block"
        />
      </div>

      {/* Purple section */}
      <div
        className="flex flex-col items-center text-center px-5 sm:px-10 md:px-20 pb-12 sm:pb-16 pt-8 md:pt-12"
        style={{ background: "#4A3772" }}
      >
        {/* Heading — increased from clamp(1.3rem, 2.8vw, 2rem) */}
        <h2
          className="font-bold leading-snug mb-8 max-w-5xl"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          }}
        >
          {H_WORDS.map((w, i) => wordSpan(w, hRefs, i, H_WORDS.length))}
        </h2>

        {/* Paragraph 1 — increased from clamp(0.9rem, 1.5vw, 1.1rem) */}
        <p
          className="leading-relaxed max-w-5xl mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
          }}
        >
          {P1_WORDS.map((w, i) => wordSpan(w, p1Refs, i, P1_WORDS.length))}
        </p>

        {/* Paragraph 2 — same size as para 1 */}
        <p
          className="leading-relaxed max-w-5xl"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
          }}
        >
          {P2_WORDS.map((w, i) => wordSpan(w, p2Refs, i, P2_WORDS.length))}
        </p>
      </div>
    </div>
  );
}
