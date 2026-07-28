"use client";

import Head from "next/head";
import { useState } from "react";
import { sendEmailToSell, sendEmailToBuy } from "@/Contants/APIEndpoint";
import CommonModal from "@/component/Modal/CommonModal";
import SellWithUsForm from "@/component/Form/Sell/SellWithUsForm";
import CommonForm from "@/component/Form/CommonForm";
import HeroSection from "./HeroSection";
import HeroStatsSection from "./HeroStatsSection";
import OurProductsSection from "./OurProductsSection";
import SolarKitsSection from "./SolarKitsSection";
import SupportingBuildSection from "./SupportingBuildSection";
import HowItWorksSection from "./HowItWorksSection";
import TrustedPartnersSection from "./TrustedPartnersSection";
import KnowledgeCenterSection from "./KnowledgeCenterSection";
import CtaCardsSection from "./CtaCardsSection";
import FaqSection from "./FaqSection";
import SolarHubStyles from "./SolarHubStyles";
import WhyHeadsupB2B from "@/component/home/WhyHeadsupB2B";
import UploadQuote from "@/component/UploadQuote";

export default function SolarHub({
  knowledgeArticles = [],
  solarCategoryData = null,
  categoryProductOptions = [],
}) {
  const [showSellModal, setShowSellModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showUploadQuoteModal, setShowUploadQuoteModal] = useState(false);

  return (
    <>
      <Head>
        <title>Headsup B2B Services | Infrastructure Execution, MEP, Solar, BESS & AMC</title>
        <meta
          name="description"
          content="Headsup B2B delivers procurement-backed execution services for infrastructure projects, including painting, MEP, HVAC, fire fighting, solar, BESS. Pure B2B."
        />
      </Head>

      <div className="services-page">
        <HeroSection
          onOpenSellModal={() => setShowUploadQuoteModal(true)}
          onOpenQuoteModal={() => setShowQuoteModal(true)}
        />
        <HeroStatsSection />
        <SolarKitsSection />
        <OurProductsSection
          categoryData={solarCategoryData}
          categoryProductOptions={categoryProductOptions}
        />
         <HowItWorksSection />
        <SupportingBuildSection bundles={solarCategoryData?.bundles?.bundles} />
        <WhyHeadsupB2B onContactUs={() => setShowSellModal(true)} heading="Why Choose Us?" />
        <TrustedPartnersSection />
        <KnowledgeCenterSection knowledgeArticles={knowledgeArticles} />
        <FaqSection />
        <CtaCardsSection
          onOpenSellModal={() => setShowUploadQuoteModal(true)}
          onOpenQuoteModal={() => setShowQuoteModal(true)}
        />
      </div>

      <SolarHubStyles />

      {showSellModal && (
        <CommonModal
          isOpen={showSellModal}
          onClose={() => setShowSellModal(false)}
          title="Sell With Us"
          closeOnBackdropClick={true}
          size="xl"
        >
          <SellWithUsForm
            setShow={setShowSellModal}
            endPoint={sendEmailToSell}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      )}

      {showQuoteModal && (
        <CommonModal
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
          title="Get a Quote"
          closeOnBackdropClick={true}
          size="xl"
        >
          <CommonForm
            setShow={setShowQuoteModal}
            endPoint={sendEmailToBuy}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      )}

      {showUploadQuoteModal && (
        <CommonModal
          isOpen={showUploadQuoteModal}
          onClose={() => setShowUploadQuoteModal(false)}
          title="Have an Existing Product Quote?"
          subTitle="Upload Below and Unlock Better Pricing!"
          closeOnBackdropClick={true}
          size="md"
        >
          <UploadQuote />
        </CommonModal>
      )}
    </>
  );
}
