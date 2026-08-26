import { useState } from "react";
import GenericForm from "./GenericForm";
import ModalPopUp from "./ModalPopUp";
import { useTranslation, Trans } from "react-i18next";

const NewCTASection = ( { productOptions} ) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="ads-cta" className="bg-[#f9fbfc] -mx-10 mt-6 md:mt-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 py-8 md:py-10 lg:py-12">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-14 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center text-[#111] mb-2 md:mb-3 lg:mb-4 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {t("ads.howItWorks.heading")}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-5 md:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto">
            <Trans i18nKey="ads.howItWorks.description" components={{ strong: <strong /> }} />
          </p>

          {/* Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#80EBF7] transition text-[#1a1a2e] font-semibold text-sm md:text-base lg:text-lg px-5 md:px-8 py-2.5 md:py-3.5 lg:py-4 rounded-full shadow-md w-full sm:w-auto"
          >
            {t("ads.howItWorks.cta")}
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
