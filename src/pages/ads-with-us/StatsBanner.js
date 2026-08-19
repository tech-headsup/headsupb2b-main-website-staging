import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import GenericForm from "./GenericForm"; // Uncomment and adjust path as needed
import ModalPopUp from "./ModalPopUp"; // Uncomment and adjust path as needed

const sliderData = [
  { img: "/B2b ad banner website - 2026-01.jpg", altKey: "ads.stats.happyAdvertisers" },
  { img: "/B2b ad banner website - 2026-02.jpg", altKey: "ads.stats.revenue" },
  { img: "/B2b ad banner website - 2026-03.jpg", altKey: "ads.stats.roas" },
];

const StatsBanner = ({productOptions}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Replace with your actual toast implementation
  const toast = {
    success: (message) => {
    },
    error: (message) => {
    }
  };

  return (
    <>
      <div className="bg-white py-8 -mx-10 mt-6 md:mt-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ el: ".stats-dots", clickable: true }}
              className="stats-swiper w-full h-[28vw] md:h-[32vw] lg:h-[34vw] max-h-[440px]"
            >
              {sliderData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={handleImageClick}
                    className="cursor-pointer hover:opacity-90 transition-opacity duration-200 w-full h-full"
                  >
                    <img
                      src={item.img}
                      alt={t(item.altKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="stats-dots flex justify-center gap-2 mt-6"></div>
        </div>
      </div>

      {/* Modal with Form */}
      <ModalPopUp
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <GenericForm
          setIsModalOpen={setIsModalOpen}
          toast={toast}
          productOptions={productOptions}
        />
      </ModalPopUp>

      <style jsx global>{`
        .stats-dots .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 !important;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .stats-dots .swiper-pagination-bullet-active {
          background: #5E3F99;
          transform: scale(1.15);
        }
      `}</style>
    </>
  );
};

export default StatsBanner;