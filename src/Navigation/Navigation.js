"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import LogoDark from "../../public/logo-dark.webp";
import CommonModal from "@/component/Modal/CommonModal";
import SellWithUsForm from "@/component/Form/Sell/SellWithUsForm";
import { sendEmailToSell } from "@/Contants/APIEndpoint";
import NewsTicker from "@/component/home/NewsTicker";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/solar-hub", label: "Solar Hub" },
  { href: "/ads-with-us", label: "Advertise with us" },
  { href: "/news-press-release", label: "Newsroom" },
  { href: "/blog", label: "Blogs" },
  { href: "/careers", label: "Career" },
  { href: "/contact", label: "Contact us" },
  // { href: "/research", label: "Research" },
];

/**
 * Props
 * ─────────────────────────────────────────────────────────────
 * rawCategories  – array from getAllCategoryData API:
 *   [{ name, slug, subCategories: [{ name, slug }] }]
 *
 * categoryProductOptions – existing transformed array (kept for
 *   modals/forms that still need it, NOT used for the dropdown)
 *
 * scrolled – boolean from Header scroll tracking
 */
export default function Navigation({
  rawCategories = [],
  categoryProductOptions = [],
  scrolled = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catMobileOpen, setCatMobileOpen] = useState(false);
  const [mobileCatExpanded, setMobileCatExpanded] = useState(null);
  const [showSellWithUsForm, setShowSellWithUsForm] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [hoveredCat, setHoveredCat] = useState(null);
  const catTimeoutRef = useRef(null);

  const openCat = () => {
    clearTimeout(catTimeoutRef.current);
    setCatOpen(true);
    if (!hoveredCat && rawCategories.length > 0) {
      setHoveredCat(rawCategories[0].slug);
    }
  };
  const closeCat = () => {
    catTimeoutRef.current = setTimeout(() => setCatOpen(false), 150);
  };

  const activeCategory =
    rawCategories.find((c) => c.slug === hoveredCat) || rawCategories[0];
  const activeSubcategories = activeCategory?.subCategories || [];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#ffffff",
          boxShadow: scrolled
            ? "0 2px 16px rgba(0,0,0,0.10)"
            : "0 1px 0px rgba(0,0,0,0.07)",
        }}
      >
        <NewsTicker />
        <div className="flex items-center justify-between max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 py-3.5 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-dark.webp"
              alt="HeadsUp B2B"
              width={145}
              height={38}
              priority
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* ── Desktop nav (lg and up) ── */}
          <ul className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 list-none m-0 p-0">

            {/* Categories dropdown */}
            <li className="relative" onMouseEnter={openCat} onMouseLeave={closeCat}>
              <button
                className="flex items-center gap-1 text-[12px] xl:text-[14px] font-medium text-[#222] hover:text-[#4A3772] transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                onClick={() => setCatOpen((v) => !v)}
              >
                Categories
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  style={{
                    opacity: 0.5,
                    transform: catOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {catOpen && rawCategories.length > 0 && (
                <div
                  className="absolute top-full left-0 mt-3 flex rounded-2xl overflow-hidden z-50"
                  style={{
                    background: "#fff",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.14)",
                    minWidth: activeSubcategories.length > 0 ? 520 : 280,
                    maxHeight: "70vh",
                  }}
                  onMouseEnter={openCat}
                  onMouseLeave={closeCat}
                >
                  {/* Left: category list */}
                  <div className="py-3 flex-shrink-0 overflow-y-auto" style={{ width: 280 }}>
                    {rawCategories.map((cat) => {
                      const isActive = cat.slug === (hoveredCat || rawCategories[0]?.slug);
                      const hasSubs = cat.subCategories?.length > 0;
                      return (
                        <div
                          key={cat.slug}
                          className="flex items-center justify-between cursor-pointer transition-colors duration-150"
                          style={{
                            background: isActive ? "#f3f0ff" : "transparent",
                            borderLeft: isActive ? "3px solid #4A3772" : "3px solid transparent",
                          }}
                          onMouseEnter={() => setHoveredCat(cat.slug)}
                        >
                          <Link
                            href={`/${cat.slug}`}
                            className="flex-1 text-[14px] font-medium no-underline px-5 py-3"
                            style={{
                              color: isActive ? "#4A3772" : "#222",
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                            onClick={() => setCatOpen(false)}
                          >
                            {cat.name}
                          </Link>
                          {hasSubs && (
                            <svg
                              width="14" height="14" viewBox="0 0 24 24" fill="none"
                              stroke={isActive ? "#4A3772" : "#bbb"} strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"
                              className="flex-shrink-0 mr-4"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Right: subcategories */}
                  {activeSubcategories.length > 0 && (
                    <div
                      className="py-4 px-4 flex-1 overflow-y-auto"
                      style={{
                        background: "#faf9ff",
                        borderLeft: "1px solid #ede9ff",
                        minWidth: 220,
                      }}
                    >
                      <p
                        className="text-[11px] font-bold uppercase tracking-widest mb-3 px-1"
                        style={{ color: "#9b8ec4", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {activeCategory?.name}
                      </p>
                      {activeSubcategories.map((sub) => (
                        <Link
                          key={sub.slug}
                          href={`/${activeCategory?.slug}/${sub.slug}`}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-[13px] font-medium no-underline transition-colors duration-150 hover:bg-[#ede9ff]"
                          style={{ color: "#333", fontFamily: "'DM Sans', sans-serif" }}
                          onClick={() => setCatOpen(false)}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "#7C6FED" }}
                          />
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>

            {/* Other nav links */}
            {NAV_LINKS.map(({ href, label }) => {
              const isSolarHub = href === "/solar-hub";
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      isSolarHub
                        ? "text-[12px] xl:text-[14px] font-semibold no-underline text-[#1a1a2e] bg-[#FFD84D] rounded-full px-3 xl:px-4 py-1.5 hover:bg-[#FFCA1F] transition-colors duration-200 whitespace-nowrap"
                        : "text-[12px] xl:text-[14px] font-medium no-underline text-[#222] hover:text-[#4A3772] transition-colors duration-200 whitespace-nowrap"
                    }
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs (lg and up) */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <button
              // className="text-[#4A3772] font-semibold text-[14px] bg-transparent border-none cursor-pointer hover:text-[#4A3772] transition-colors whitespace-nowrap"

              className="rounded-full px-4 xl:px-6 py-2 font-bold text-[13px] xl:text-[14px] border-none cursor-pointer transition-all hover:-translate-y-px whitespace-nowrap"
              style={{ background: "#80EBF7", color: "#1a1a2e" }}
              onClick={() => setShowSellWithUsForm(true)}
            >
              Sell with us
            </button>
            {/* <button
              className="rounded-full px-6 py-2 font-bold text-[14px] border-none cursor-pointer transition-all hover:-translate-y-px whitespace-nowrap"
              style={{ background: "#80EBF7", color: "#1a1a2e" }}
            >
              Login
            </button> */}
          </div>

          {/* Mobile + Tablet hamburger (below lg) */}
          <div className="flex lg:hidden items-center">
            <button
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="block w-5 h-0.5 bg-[#333] rounded transition-all duration-200"
                style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span className="block w-5 h-0.5 bg-[#333] rounded transition-all duration-200"
                style={{ opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-0.5 bg-[#333] rounded transition-all duration-200"
                style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          </div>
        </div>

        {/* ── Mobile + Tablet dropdown (below lg) ── */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 px-6 py-4 bg-white max-h-[80vh] overflow-y-auto">
            <div className="mb-2">
              <button
                className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-[#4A3772] bg-transparent border-none cursor-pointer"
                onClick={() => setCatMobileOpen((v) => !v)}
              >
                Categories
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: catMobileOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {catMobileOpen && (
                <div className="pl-2 flex flex-col gap-1 mt-1">
                  {rawCategories.map((cat) => {
                    const subs = cat.subCategories || [];
                    const isExpanded = mobileCatExpanded === cat.slug;
                    return (
                      <div key={cat.slug} className="border-b border-gray-50 last:border-0">
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/${cat.slug}`}
                            className="flex-1 block py-2.5 text-sm font-medium no-underline text-[#333] hover:text-[#4A3772]"
                            onClick={() => setMenuOpen(false)}
                          >
                            {cat.name}
                          </Link>
                          {subs.length > 0 && (
                            <button
                              className="p-2 bg-transparent border-none cursor-pointer"
                              onClick={() => setMobileCatExpanded(isExpanded ? null : cat.slug)}
                            >
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                style={{ transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </button>
                          )}
                        </div>
                        {isExpanded && subs.length > 0 && (
                          <div className="pl-4 pb-2 flex flex-col gap-0.5">
                            {subs.map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/${cat.slug}/${sub.slug}`}
                                className="flex items-center gap-2 py-1.5 text-xs no-underline text-[#666] hover:text-[#4A3772]"
                                onClick={() => setMenuOpen(false)}
                              >
                                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#7C6FED" }} />
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <ul className="flex flex-col gap-1 list-none m-0 p-0 border-t border-gray-100 pt-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="block py-2.5 text-sm font-medium no-underline text-[#222] hover:text-[#4A3772] transition-colors"
                    onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <button
                className="w-full rounded-full px-7 py-2.5 font-bold text-sm border-none cursor-pointer"
                style={{ background: "#80EBF7", color: "#1a1a2e" }}
                onClick={() => {
                  setMenuOpen(false);
                  setShowSellWithUsForm(true);
                }}
              >
                Sell with us
              </button>
            </div>
          </div>
        )}
      </header>

      {showSellWithUsForm && (
        <CommonModal
          isOpen={showSellWithUsForm}
          onClose={() => setShowSellWithUsForm(false)}
          title="Sell With Us"
          closeOnBackdropClick={true}
          size="xl"
        >
          <SellWithUsForm
            setShow={setShowSellWithUsForm}
            endPoint={sendEmailToSell}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      )}
    </>
  );
}