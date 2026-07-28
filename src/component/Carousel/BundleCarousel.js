import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CallSVG from "@/assets/images/svg/CallSVG";
import ChatSVG from "@/assets/images/svg/ChatSVG";

const BundleContent = ({ bundleData, bundleIndex }) => {
  return (
    <div className="flex flex-col items-center w-full mt-5 border border-[#4A3772] rounded-2xl">
      <div className="w-full">
        {/* Main Content Grid - Modified */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 sm:gap-6 md:gap-8 p-3 sm:p-4 md:p-8">
          {/* Left Column - Takes 2/5 width on md+ */}
          <div className="md:col-span-3 flex flex-col items-center justify-start">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 w-full">
              {/* <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full bg-[#4A3772] text-white flex flex-shrink-0 items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold">
                {bundleIndex + 1}
              </div> */}
              <h2 className="text-lg sm:text-xl md:text-2xl text-[#4A3772] font-bold break-words">
                {bundleData?.name}
              </h2>
            </div>

            <div className="bundle-image-container flex items-center justify-center w-full h-full mb-4 md:mb-0">
              <img
                src={bundleData?.svg?.url}
                alt={bundleData?.name}
                className="bundle-image object-contain max-w-full"
              />
            </div>
          </div>

          {/* Right Column - Takes 3/5 width on md+ with constrained content width */}
          <div className="md:col-span-4 hidden md:flex h-full flex-col justify-between">
            <div className="max-w-lg lg:max-w-xl xl:max-w-2xl w-full pl-3">
              <div className="flex flex-wrap gap-2 mb-6">
                {bundleData?.idealFor?.map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#EEE4FF] w-fit font-bold px-10 py-2 rounded-full text-xs sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-3">
                  Key Products Included
                </h3>
                <div
                  className="text-base text-gray-600 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: bundleData?.keyProductsIncluded,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content - Unchanged */}
        <div className="md:hidden px-3 sm:px-4 py-4">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Ideal For:
            </h3>
            <div className="flex flex-wrap gap-2">
              {bundleData?.idealFor?.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#EEE4FF] font-bold px-2.5 py-1 rounded-full text-[10px] sm:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Unchanged */}
        <div className="bg-[#4A3772] rounded-b-2xl py-3 sm:py-4 md:py-6 px-3 sm:px-4 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-white order-1 sm:order-none">
              Get in touch with us
            </h3>
            <div className="flex gap-2 sm:gap-3 md:gap-4">
              <Link
                href="tel:+919911902943"
                className="items-center flex bg-[#80EBF7] hover:bg-[#6dd9e5] text-[#4A3772] px-3 w-fit sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-colors"
              >
                <span className="inline-block w-5 h-5 mr-2">
                  <CallSVG />
                </span>
                Call us
              </Link>
              <Link
                href="https://wa.me/+918595736388"
                target="_blank"
                className="flex items-center bg-[#80EBF7] hover:bg-[#6dd9e5] text-[#4A3772] px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-colors"
              >
                <span className="inline-block w-6 h-6 mr-2">
                  <ChatSVG />
                </span>
                Chat with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BundleCarousel({ bundles, equalSlides = false }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoHeight={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className={`mySwiper pb-12 md:pb-16 ${equalSlides ? "mySwiper--equal" : ""}`}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: equalSlides ? 1 : 1.2,
            spaceBetween: 50,
            centeredSlides: equalSlides ? true : false,
          },
        }}
      >
        {bundles?.map((bundleData, bundleIndex) => (
          <SwiperSlide key={bundleData?.name}>
            <BundleContent
              key={bundleData?.name}
              bundleData={bundleData}
              bundleIndex={bundleIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .mySwiper .swiper-pagination {
          bottom: 0 !important;
          position: relative !important;
          margin-top: 1rem;
          text-align: left !important;
          padding-left: 0 !important;
        }

        /* Mobile + Tablet - center aligned */
        @media (max-width: 1023px) {
          .mySwiper .swiper-pagination {
            text-align: center !important;
            padding-left: 0 !important;
          }
        }

        /* Tablet and Desktop - left aligned with offset */
        @media (min-width: 1024px) {
          .mySwiper .swiper-pagination {
            text-align: left !important;
            padding-left: 42.33% !important;
          }
        }

        /* Solar Hub variant - dots centered on all breakpoints */
        .mySwiper--equal .swiper-pagination {
          text-align: center !important;
          padding-left: 0 !important;
        }
        @media (min-width: 1024px) {
          .mySwiper--equal .swiper-pagination {
            text-align: center !important;
            padding-left: 0 !important;
          }
        }

        .mySwiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #4A3772;
          opacity: 0.5;
        }
        
        .mySwiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #4A3772;
        }

        /* Image container and image constraints */
        .bundle-image-container {
          max-height: 300px;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .bundle-image-container {
            max-height: 400px;
          }
        }

        .bundle-image {
          max-height: 300px;
          width: auto;
          height: auto;
        }

        @media (min-width: 768px) {
          .bundle-image {
            max-height: 350px;
          }
        }

        @media (min-width: 3840px) {
          .bundle-image-container {
            max-width: 30%;
          }
        }
      `}</style>
    </>
  );
}
