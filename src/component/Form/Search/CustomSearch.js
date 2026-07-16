import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { regexBasedProductSearch } from "@/Contants/APIEndpoint";

export default function CustomSearch({ variant = "default" }) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [placeholderText, setPlaceholderText] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const router = useRouter();

  const isHero = variant === "hero";

  // ── Highlight matching text ──────────────────────────────────────────────
  const highlightText = (text, query) => {
    if (!query.trim() || !text) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={index} className="bg-yellow-300 text-gray-900 font-semibold px-0.5 rounded">
              {part}
            </mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  const containsQuery = (text, query) => {
    if (!query.trim() || !text) return false;
    return text.toLowerCase().includes(query.toLowerCase());
  };

  const sortedSearchResults = [...searchResults].sort((a, b) => {
    const query = search.toLowerCase();
    const aProductMatch = containsQuery(a.productName, query);
    const bProductMatch = containsQuery(b.productName, query);
    if (aProductMatch && !bProductMatch) return -1;
    if (!aProductMatch && bProductMatch) return 1;
    const aSubCatMatch = containsQuery(a.subCategoryName, query);
    const bSubCatMatch = containsQuery(b.subCategoryName, query);
    if (aSubCatMatch && !bSubCatMatch) return -1;
    if (!aSubCatMatch && bSubCatMatch) return 1;
    const aCatMatch = containsQuery(a.categoryName, query);
    const bCatMatch = containsQuery(b.categoryName, query);
    if (aCatMatch && !bCatMatch) return -1;
    if (!aCatMatch && bCatMatch) return 1;
    return 0;
  });

  // ── Typewriter effect ────────────────────────────────────────────────────
  useEffect(() => {
    const placeholderStrings = [
      "Metal Solutions",
      "Electrical Solutions",
      "Road Safety Solutions",
      "Building Materials",
      "Industrial Automation Solutions",
      "Petro-Chemical Solutions",
      "Renewable Solutions",
      "Industrial Safety Solutions",
      "Biomass",
      "Agro-Commodities",
    ];
    let currentStringIndex = 0;
    let currentCharIndex = 0;
    let forward = true;

    const typewriterEffect = () => {
      setPlaceholderText((prev) => {
        const currentString = placeholderStrings[currentStringIndex];
        if (forward) {
          if (currentCharIndex < currentString.length) {
            currentCharIndex++;
            return currentString.substring(0, currentCharIndex);
          } else {
            forward = false;
            setTimeout(() => typewriterEffect(), 1000);
            return currentString;
          }
        } else {
          if (currentCharIndex > 0) {
            currentCharIndex--;
            return currentString.substring(0, currentCharIndex);
          } else {
            forward = true;
            currentStringIndex = (currentStringIndex + 1) % placeholderStrings.length;
            setTimeout(() => typewriterEffect(), 500);
            return "";
          }
        }
      });
    };

    const interval = setInterval(typewriterEffect, 150);
    return () => clearInterval(interval);
  }, []);

  // ── Focus on mount (default variant only) ───────────────────────────────
  useEffect(() => {
    if (!isHero) inputRef.current?.focus();
  }, [isHero]);

  // ── Outside click ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // ── Debounced search ─────────────────────────────────────────────────────
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (search.trim().length > 0) {
        setLoading(true);
        try {
          const response = await fetch(
            `${regexBasedProductSearch}?q=${encodeURIComponent(search.trim())}&fuzzyLevel=2`
          );
          const data = await response.json();
          if (data.success && data.data) {
            setSearchResults(data.data);
            setIsOpen(true);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.error("Search error:", error);
          setSearchResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setSearchResults([]);
        setIsOpen(false);
      }
    }, 100);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const handleResultClick = () => {
    setIsOpen(false);
    setSearch("");
  };

  const groupedResults = sortedSearchResults.reduce((acc, item) => {
    const catId = item.categoryId;
    if (catId && !acc[catId]) {
      acc[catId] = {
        categoryId: item.categoryId,
        categoryName: item.categoryName,
        categorySlug: item.categorySlug,
        items: [],
      };
    }
    if (catId) acc[catId].items.push(item);
    return acc;
  }, {});

  // ── Dropdown — inlined JSX variable (NOT a component) to preserve scroll ──
  const dropdownJSX = isOpen ? (
    <div
      className={`absolute top-full z-30 mt-3 rounded-2xl py-4 shadow-2xl max-h-96 overflow-y-auto ${
        isHero ? "left-4 right-4" : "left-0 right-0"
      }`}
      style={{
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(74,55,114,0.12)",
      }}
    >
      {loading ? (
        <div className="p-5 text-center text-gray-400 text-sm">Searching...</div>
      ) : searchResults.length > 0 ? (
        <>
          {/* Category badges */}
          <div className="flex flex-wrap gap-2 px-4 pb-3">
            {Object.values(groupedResults).map((group) => (
              <Link
                key={group.categoryId}
                href={`/${group.categorySlug}`}
                onClick={handleResultClick}
                className="text-xs px-3 py-1 rounded-full font-semibold transition-colors duration-150"
                style={{
                  background: "rgba(74,55,114,0.08)",
                  color: "#4A3772",
                  border: "1px solid rgba(74,55,114,0.2)",
                }}
              >
                {group.categoryName} ({group.items.length})
              </Link>
            ))}
          </div>
          <hr className="mx-4 border-gray-100 mb-1" />

          {/* Product results */}
          {sortedSearchResults.map((result, index) => (
            <Link
              key={index}
              href={`/${result.categorySlug}/${result.subCategorySlug || "all"}/${result.productId}`}
              passHref
            >
              <div
                className="px-4 py-3 flex items-start gap-3 hover:bg-purple-50/60 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0"
                onClick={handleResultClick}
              >
                <Image
                  src={result.productImage || "/placeholder-image.jpg"}
                  alt={result.productName}
                  width={52}
                  height={52}
                  className="object-cover rounded-lg flex-shrink-0"
                  unoptimized
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                    {highlightText(result.productName, search)}
                  </h4>
                  <p className="text-xs font-medium mt-0.5" style={{ color: "#4A3772" }}>
                    {highlightText(result.subCategoryName || "All Products", search)}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {highlightText(result.categoryName, search)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <div className="p-8 text-center text-gray-400">
          <p className="text-sm font-medium">No products found for "{search}"</p>
          <p className="text-xs mt-1">Try different keywords</p>
        </div>
      )}
    </div>
  ) : null;

  // ── Hero variant (home page) ─────────────────────────────────────────────
  if (isHero) {
    return (
      <div ref={wrapperRef} className="relative w-full max-w-[640px] mx-auto px-4">
        <div
          className="relative flex items-center gap-3 rounded-full px-5 py-3.5 transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1.5px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="rgba(255,255,255,0.55)"
            className="w-5 h-5 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.15 10.15Z"
            />
          </svg>

          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your requirement here"
            className="w-full bg-transparent border-none outline-none text-white text-[15px] font-medium placeholder-white/40"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />

          {search && (
            <button
              onClick={() => { setSearch(""); setIsOpen(false); }}
              className="flex-shrink-0 text-white/40 hover:text-white/80 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {dropdownJSX}
      </div>
    );
  }

  // ── Default variant (all other pages) ───────────────────────────────────
  return (
    <div ref={wrapperRef} className="relative w-full max-w-[400px]">
      <div className="bg-slate-100 relative flex min-h-[50px] w-full grow items-center gap-1 rounded-3xl px-4">
        <div className="w-[24px] h-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-black/50"
          >
            <path d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder={`Search for ${placeholderText || "products..."}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
          className="paragraph-regular w-full text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        />
      </div>
      {dropdownJSX}
    </div>
  );
}
