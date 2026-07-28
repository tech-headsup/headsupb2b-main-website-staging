import FloatingCard from "./FloatingCard";
import GenericForm from "./GenericForm";
import ModalPopUp from "./ModalPopUp";
import { useState } from "react";

const HeroSection = ({ productOptions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white -mx-10 -mt-10 mb-10">
    <section
      className="flex flex-col l:flex-row items-center gap-8 l:gap-12
                      max-w-[1280px] mx-auto
                      pt-16 pb-8 t:pt-[72px] t:pb-10 l:pt-[72px] l:pb-12 ll:pt-2
                      px-4 t:px-8 l:px-8
                      bg-white"
    >
      {/* Left Side */}
      <div className="w-full l:w-1/2 text-center l:text-left">
        <div
          className="text-headupb2b font-semibold
                      text-sm mm:text-base l:text-lg ll:text-xl
                      mb-2 mm:mb-3 l:mb-4"
        >
          High‑Performance Advertising
        </div>

        <h1
          className="font-bold leading-tight
                     text-2xl mm:text-3xl t:text-4xl l:text-5xl ll:text-6xl
                     mb-4 mm:mb-5 l:mb-6"
        >
          Reach <span className="text-headupb2b">50,000+</span> Infra{" "}
          <span className="text-headupb2b">Decision Makers</span> Monthly
        </h1>

        <p
          className="text-gray-700 font-medium leading-relaxed
                    text-base mm:text-lg l:text-xl ll:text-2xl
                    mb-3 mm:mb-4 l:mb-5"
        >
          <strong>
            Let's put your brand in front of the right businesses.
          </strong>
        </p>

        <p
          className="text-gray-700 leading-relaxed
                    text-sm mm:text-base ll:text-lg
                    mb-6 mm:mb-7 l:mb-8"
        >
          With Headsup B2B's <strong>targeted advertising,</strong> get connected to a focused,
          <strong> pan-India </strong>audience of{" "}
          <strong>purchase-ready</strong> industrial and construction
          professionals, driving real results for your campaigns.
        </p>
        <div className="flex flex-col ms:flex-row flex-wrap gap-3 ms:gap-4 justify-center l:justify-start">
          <button
            className="w-full ms:w-auto bg-headupb2b text-white py-3 px-6 rounded-full text-base l:text-lg font-medium hover:bg-white hover:text-black hover:border border-headupb2b transition"
            onClick={() => setIsModalOpen(true)}
          >
            Show Interest
          </button>

          <a
            href="mailto:tanshi@headsupcorporation.com,raviranjan@headsupb2b.com"
            className="w-full ms:w-auto"
          >
            <button className="w-full ms:w-auto border border-headupb2b text-headupb2b py-3 px-6 rounded-full text-base l:text-lg font-medium hover:text-black transition">
              Talk to our Expert
            </button>
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full l:w-1/2 mt-2 l:mt-0 max-w-md t:max-w-xl l:max-w-none mx-auto">
        <FloatingCard />
      </div>

      {/* Modal */}
      <div >
        <ModalPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <GenericForm productOptions={productOptions} setIsModalOpen={setIsModalOpen} />
        </ModalPopUp>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
