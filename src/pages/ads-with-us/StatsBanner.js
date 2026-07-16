// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// // import GenericForm from "./GenericForm";
// // import ModalPopUp from "./ModalPopUp";
// const sliderData = [
//   { img: "/B2b ad banner website - 2025-01.jpg", alt: "Happy Advertisers" },
//   { img: "/B2b ad banner website - 2025-02.jpg", alt: "Revenue Generated" },
//   { img: "/B2b ad banner website - 2025-03.jpg", alt: "Average ROAS" },
// ];

// const StatsBanner = () => (
//   <div className="max-w-4xl mx-auto px-3 ms:mt-12 ">
//     <Swiper
//       modules={[Autoplay]}
//       slidesPerView={1}
//       loop={true}
//       autoplay={{ delay: 5000, disableOnInteraction: false }}
//       className="w-full h-[20vh] t:h-[50vh] rounded-2xl overflow-hidden"
//     >
//       {sliderData.map((item, index) => (
//         <SwiperSlide key={index}>
//           <a>
//             <img
//               src={item.img}
//               alt={item.alt}
//               className="w-full object-contain rounded-2xl"
//             />
//           </a>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </div>
// );

// export default StatsBanner;



import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import GenericForm from "./GenericForm"; // Uncomment and adjust path as needed
import ModalPopUp from "./ModalPopUp"; // Uncomment and adjust path as needed

const sliderData = [
  { img: "/B2b ad banner website - 2026-01.jpg", alt: "Happy Advertisers" },
  { img: "/B2b ad banner website - 2026-02.jpg", alt: "Revenue Generated" },
  { img: "/B2b ad banner website - 2026-03.jpg", alt: "Average ROAS" },
];

const StatsBanner = ({productOptions}) => {
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
      // Add your actual toast success implementation here
      // e.g., toast.success(message) if using react-toastify
    },
    error: (message) => {
      // Add your actual toast error implementation here
      // e.g., toast.error(message) if using react-toastify
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-3 ms:mt-12">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full h-[20vh] t:h-[50vh] rounded-2xl overflow-hidden"
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={handleImageClick}
                className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full object-contain rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
    </>
  );
};

export default StatsBanner;