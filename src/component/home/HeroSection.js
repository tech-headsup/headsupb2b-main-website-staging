import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CustomSearch from "@/component/Form/Search/CustomSearch";
import PosterImage from "@/assets/images/Home-Banner-image-8.webp";

export default function HeroSection({ onGetQuote, onUploadQuote }) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="relative w-full mt-[-75px] md:mt-[-80px]">

      {/* ── Poster image — LCP element, always mounted so container height stays stable (prevents CLS during video swap) ── */}
      <Image
        src={PosterImage}
        alt=""
        aria-hidden="true"
        priority
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 1600px"
        quality={65}
        placeholder="blur"
        className="w-full h-auto block bg-[#291570] ms:pt-80 t:pt-64 ll:pt-80"
        style={{
          opacity: videoLoaded && isDesktop ? 0 : 1,
          transition: "opacity 0.6s ease",
        }}
      />

      {/* ── Video — desktop only, absolutely overlaid on the poster so it never changes container height ── */}
      {isDesktop && (
        <video
          ref={videoRef}
          src="/B2B website banner (online-video-cutter.com).webm"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setVideoLoaded(true)}
          className="block bg-[#291570]"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      )}

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,5,48,0.55) 0%, rgba(14,5,48,0.25) 40%, rgba(14,5,48,0.0) 70%)",
        }}
      />

      {/* ── Content: pinned to top, clears navbar ── */}
      <div
        className="absolute inset-x-0 top-0 z-10 flex flex-col items-center"
        style={{ paddingTop: "clamp(160px, 14vw, 180px)" }}
      >
        {/* Search bar */}
        <div className="w-full flex justify-center px-4 mb-4 sm:mb-5 md:mb-6">
          <CustomSearch variant="hero" />
        </div>

        {/* Headline */}
        <h1
          className="text-center font-extrabold text-white leading-tight px-4 mb-3 sm:mb-4"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(1.45rem, 4.5vw, 3.2rem)",
            maxWidth: "min(92vw, 880px)",
          }}
        >
          Sourcing, Fulfilment, Financing
        </h1>

        {/* Sub-headline */}
        <p
          className="text-center px-5 mb-3 sm:mb-4"
          style={{
            color: "rgba(225,220,245,0.93)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.82rem, 2vw, 1.2rem)",
            maxWidth: "min(88vw, 680px)",
            lineHeight: 1.65,
          }}
        >
          We are your one stop business partner for all your sourcing and
          financing needs, supporting you every step of the way!
        </p>

        {/* Trust badge */}
        <p
          className="text-center font-semibold px-4 mb-5 sm:mb-7 md:mb-8"
          style={{
            color: "#00d4f5",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.7rem, 1.5vw, 0.92rem)",
          }}
        >
          Trusted by Contractors, EPCs, Developers &amp; Industrial Buyers
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-6 w-full sm:w-auto items-center">
          <button
            onClick={onGetQuote}
            className="rounded-full font-bold text-white border-none cursor-pointer tracking-wide transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
            style={{
              background: "linear-gradient(135deg, #00d4f5 0%, #00b4d8 100%)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.82rem, 1.6vw, 1rem)",
              padding: "clamp(10px, 1.8vw, 14px) clamp(22px, 3.5vw, 38px)",
            }}
          >
            Get a Quote
          </button>
          <button
            onClick={onUploadQuote}
            className="rounded-full font-bold text-white bg-transparent cursor-pointer transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5 w-full sm:w-auto"
            style={{
              border: "2px solid rgba(255,255,255,0.65)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.82rem, 1.6vw, 1rem)",
              padding: "clamp(10px, 1.8vw, 14px) clamp(22px, 3.5vw, 38px)",
            }}
          >
            Upload Quote
          </button>
        </div>
      </div>
    </div>
  );
}