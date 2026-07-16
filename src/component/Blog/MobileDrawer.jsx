import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import GetInTouch from "@/component/Blog/GetInTouch";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport is mobile sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023); // Same breakpoint as lg in Tailwind
    };

    // Initial check
    checkMobile();

    // Listen for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle body scroll lock when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Only render on mobile devices
  if (!isMobile) return null;

  return (
    <>
      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Toggle button - always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#654EA3] hover:bg-[#33195b] text-white p-2 rounded-l-md shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
        aria-label={isOpen ? "Close contact form" : "Open contact form"}
      >
        {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-[300px] h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Get In Touch</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>
          <GetInTouch />
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
