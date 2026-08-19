"use client";
import { useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import B2BImage from "@/assets/images/B2B image.png";

const TRIGGER_RATIO = 0.72;

export default function PanIndiaText() {
  const { t } = useTranslation();

  const heading = t("home.panIndia.heading");
  const para1 = t("home.panIndia.para1");
  const para2 = t("home.panIndia.para2");

  const hWords = useMemo(() => heading.split(" "), [heading]);
  const p1Words = useMemo(() => para1.split(" "), [para1]);
  const p2Words = useMemo(() => para2.split(" "), [para2]);

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
  }, [applyColors, hWords, p1Words, p2Words]);

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
    <div className="-mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-28">
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 mt-2 sm:mt-3">
    <div className="rounded-2xl overflow-hidden">
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
        className="flex flex-col items-center text-center px-5 sm:px-10 md:px-20 pb-6 sm:pb-8 pt-4 md:pt-6"
        style={{ background: "#4A3772" }}
      >
        {/* Heading */}
        <h2
          className="font-bold leading-snug mb-5 max-w-5xl"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          }}
        >
          {hWords.map((w, i) => wordSpan(w, hRefs, i, hWords.length))}
        </h2>

        {/* Paragraph 1 */}
        <p
          className="leading-relaxed max-w-5xl mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
          }}
        >
          {p1Words.map((w, i) => wordSpan(w, p1Refs, i, p1Words.length))}
        </p>

        {/* Paragraph 2 */}
        <p
          className="leading-relaxed max-w-5xl"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)",
          }}
        >
          {p2Words.map((w, i) => wordSpan(w, p2Refs, i, p2Words.length))}
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}
