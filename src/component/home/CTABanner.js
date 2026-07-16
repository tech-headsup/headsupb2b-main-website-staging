export default function CTABanner({ onGetQuote }) {
  return (
    <div
      className="rounded-2xl flex flex-col items-center justify-center text-center px-4 py-10 sm:px-8 sm:py-14 md:py-16 mt-10 sm:mt-16 md:mt-20"
      style={{ background: "#4A3772" }}
    >
      <h2
        className="text-xl sm:text-2xl md:text-[36px] font-bold text-white mb-6 md:mb-8 leading-snug"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Ready to Simplify Your B2B Procurement?
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <button
          className="w-full sm:w-auto rounded-full px-8 py-3 font-bold text-sm sm:text-base text-white border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "#00d4f5", fontFamily: "'DM Sans', sans-serif", boxShadow: "0 4px 15px rgba(0,212,245,0.35)" }}
          onClick={onGetQuote}
        >
          Get a Quote
        </button>
        <button
          className="w-full sm:w-auto rounded-full px-8 py-3 font-bold text-sm sm:text-base text-[#111] bg-white border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          onClick={() => { window.location.href = "tel:+919911902943"; }}
        >
          Talk to our team
        </button>
      </div>
    </div>
  );
}