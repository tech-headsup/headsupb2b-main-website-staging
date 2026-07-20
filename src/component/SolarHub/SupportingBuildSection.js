import BundleCarousel from "@/component/Carousel/BundleCarousel";

export default function SupportingBuildSection({ bundles }) {
  if (!bundles || bundles.length === 0) return null;

  return (
    <>
      <div className="flex flex-col w-full items-center text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <h2
          className="section_heading mt-0 pl-0 text-center text-3xl md:text-[40px] font-extrabold text-[#111]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Supporting Every Build
        </h2>
        <p className="w-full mt-3 mb-6 text-[#666] text-base md:text-lg text-center">
          Explore our Customised Bundles, combining all your project needs for better rates!
        </p>
      </div>
      <section className="section section-no-top pt-0" style={{ paddingBottom: 16 }}>
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <BundleCarousel bundles={bundles} equalSlides />
        </div>
      </section>
    </>
  );
}
