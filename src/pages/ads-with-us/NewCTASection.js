import { useState } from "react";
import GenericForm from "./GenericForm";
import ModalPopUp from "./ModalPopUp";
const NewCTASection = ( { productOptions} ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelTalkToOurExpert = () => {};
  return (
    <section className="bg-[#f9fbfc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-[30px] shadow-xl px-6 sm:px-10 md:px-16 py-10 sm:py-12 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          How Does It Work?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed break-all max-w-full">
          Submit your query and we will connect with you within{" "}
          <strong>24-48 hours.</strong>
          <br />
          <br />
        </p>

        {/* Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-headupb2b hover:bg-lightHeadsup hover:text-black transition text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md w-full sm:w-auto"
          >
            Download Our Proposal Deck
          </button>
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
