import { useState } from "react";
import GenericForm from "./GenericForm";
import ModalPopUp from "./ModalPopUp";
const NewCTASection = ( { productOptions} ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelTalkToOurExpert = () => {};
  return (
    <section className="bg-[#f9fbfc] -mx-10 mt-8 md:mt-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 py-8 md:py-10 lg:py-16">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-14 text-center">
          {/* Heading */}
          <h2 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-900 mb-2 md:mb-3 lg:mb-4 leading-tight">
            How Does It Work?
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-5 md:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto">
            Submit your query and we will connect with you within{" "}
            <strong>24-48 hours.</strong>
          </p>

          {/* Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-headupb2b hover:bg-white hover:text-headupb2b hover:border border-headupb2b transition text-white font-semibold text-sm md:text-base lg:text-lg px-5 md:px-8 py-2.5 md:py-3.5 lg:py-4 rounded-full shadow-md w-full sm:w-auto"
          >
            Download Our Proposal Deck
          </button>
        </div>
      </div>
      <div>
        <ModalPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <GenericForm productOptions={productOptions} setIsModalOpen={setIsModalOpen} />
        </ModalPopUp>
      </div>
    </section>
  );
};

export default NewCTASection;
