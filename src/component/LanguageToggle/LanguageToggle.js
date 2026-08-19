"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", label: "EN", full: "English" },
  { code: "hi", label: "हिं", full: "हिंदी" },
];

export default function LanguageToggle({ compact = false }) {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        style={{ width: compact ? 78 : 100, height: 36 }}
      />
    );
  }

  const current = i18n.resolvedLanguage === "hi" ? "hi" : "en";
  const next = current === "en" ? LANGS[1] : LANGS[0];

  const onClick = () => {
    i18n.changeLanguage(next.code);
    try {
      localStorage.setItem("i18nextLng", next.code);
    } catch (_) {}
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t("nav.switchLanguage")}
      title={t("nav.switchLanguage")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 36,
        padding: compact ? "0 12px" : "0 14px",
        borderRadius: 999,
        border: "1.5px solid #4A3772",
        background: "#fff",
        color: "#4A3772",
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontFamily: "'Montserrat', sans-serif",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#4A3772";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "#4A3772";
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span>{compact ? next.label : next.full}</span>
    </button>
  );
}
