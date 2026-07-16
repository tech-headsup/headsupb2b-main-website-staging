import React from "react";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer/Footer";
import { useRouter } from "next/router";
import BuySellDrawer from "@/component/BuySellDrawer/BuySellDrawer";

export default function Layout({ children, categoryProductOptions }) {
  return (
    // ⚠️ Do NOT add overflow-hidden here — it breaks IntersectionObserver
    // and position:sticky on child components
    <div style={{ overflowX: "clip" }}>
      <Header categoryProductOptions={categoryProductOptions} />

      <main className="pt-[75px] md:pt-[80px]">
        {children}
      </main>

      {/* Floating BuySell drawer */}
      <div className="fixed bottom-[-1px] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-6 md:right-12 lg:right-24 xl:right-32 z-[9999]">
        <BuySellDrawer categoryProductOptions={categoryProductOptions} />
      </div>

      <Footer />
    </div>
  );
}