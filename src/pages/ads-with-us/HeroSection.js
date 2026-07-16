import FloatingCard from "./FloatingCard";
import GenericForm from "./GenericForm";
import ModalPopUp from "./ModalPopUp";
import { useState } from "react";

const HeroSection = ({ productOptions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="flex flex-col l:flex-row items-center 
                      py-8 ms:py-10 mm:py-12 ml:py-14 t:py-16 l:py-20 ll:py-24 imac:py-28 4k:py-32 qhd:py-36
                      px-4 ms:px-5 mm:px-6 ml:px-7 t:px-8 l:px-10 ll:px-12 imac:px-16 4k:px-20 qhd:px-24
                      bg-white"
    >
      {/* Left Side */}
      <div
        className="l:w-1/2 text-center l:text-left 
                    max-w-full ms:max-w-sm mm:max-w-md ml:max-w-lg t:max-w-2xl l:max-w-none"
      >
        <div
          className="text-headupb2b font-semibold 
                      text-sm ms:text-base mm:text-lg ml:text-xl t:text-xl l:text-xl ll:text-2xl imac:text-3xl 4k:text-4xl qhd:text-5xl
                      mb-2 ms:mb-3 mm:mb-4 ml:mb-4 t:mb-4 l:mb-4 ll:mb-5 imac:mb-6 4k:mb-7 qhd:mb-8"
        >
          High‑Performance Advertising
        </div>

        <h1
          className="font-bold leading-tight 
                     text-2xl ms:text-3xl mm:text-3xl ml:text-4xl t:text-4xl l:text-5xl ll:text-6xl imac:text-7xl 4k:text-8xl qhd:text-9xl
                     mb-4 ms:mb-5 mm:mb-6 ml:mb-6 t:mb-6 l:mb-6 ll:mb-8 imac:mb-10 4k:mb-12 qhd:mb-14"
        >
          Reach <span className="text-headupb2b">50,000+</span> Infra{" "}
          <span className="text-headupb2b">Decision Makers</span> Monthly
        </h1>

        <p
          className="text-gray-700 font-medium leading-relaxed
                    text-base ms:text-lg mm:text-xl ml:text-xl t:text-xl l:text-xl ll:text-2xl imac:text-3xl 4k:text-4xl qhd:text-5xl
                    mb-2 ms:mb-3 mm:mb-5 ml:mb-5 t:mb-5 l:mb-5 ll:mb-6 imac:mb-10 4k:mb-12 qhd:mb-14"
        >
          <strong>
            Let's put your brand in front of the right businesses.
          </strong>
        </p>

        <p
          className="text-gray-700 leading-relaxed
                    text-sm ms:text-base mm:text-base ml:text-base t:text-base l:text-base ll:text-lg imac:text-xl 4k:text-2xl qhd:text-3xl
                    mb-6 ms:mb-7 mm:mb-8 ml:mb-8 t:mb-8 l:mb-8 ll:mb-10 imac:mb-12 4k:mb-14 qhd:mb-16"
        >
          With Headsup B2B's <strong>targeted advertising,</strong> get connected to a focused,
          <strong> pan-India </strong>audience of{" "}
          <strong>purchase-ready</strong> industrial and construction
          professionals, driving real results for your campaigns.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="bg-headupb2b text-white py-3 px-6 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-black hover:border border-headupb2b"
            onClick={() => setIsModalOpen(true)}
          >
            Show Interest
          </button>

          <a
            href="mailto:tanshi@headsupcorporation.com,raviranjan@headsupb2b.com"
            className="w-full ms:w-auto"
          >
            <button className="border border-headupb2b text-headupb2b py-3 px-6 rounded-full text-base md:text-lg font-medium hover:text-black">
              Talk to our Expert
            </button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="l:w-1/2 
                    mt-8 ms:mt-10 mm:mt-12 ml:mt-12 t:mt-12 l:mt-0
                    w-full max-w-sm ms:max-w-md mm:max-w-lg ml:max-w-xl t:max-w-2xl l:max-w-none"
      >
        <FloatingCard />
      </div>

      {/* Modal */}
      <div >
        <ModalPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <GenericForm productOptions={productOptions} setIsModalOpen={setIsModalOpen} />
        </ModalPopUp>
      </div>
    </section>
  );
};

export default HeroSection;
