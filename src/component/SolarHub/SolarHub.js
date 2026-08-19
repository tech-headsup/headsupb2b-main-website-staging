"use client";

import Head from "next/head";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [showSellModal, setShowSellModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showUploadQuoteModal, setShowUploadQuoteModal] = useState(false);

  return (
    <>
      <Head>
        <title>{t("solar.meta.title")}</title>
        <meta name="description" content={t("solar.meta.description")} />
        <link rel="canonical" href="https://www.headsupb2b.com/solar-hub" />
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
        <WhyHeadsupB2B onContactUs={() => setShowSellModal(true)} heading={t("solar.whyHeading")} showCreditNote />
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
          title={t("solar.modals.sell")}
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
          title={t("solar.modals.quote")}
          closeOnBackdropClick={true}
          size="xl"
        >
          <CommonForm
            setShow={setShowQuoteModal}
            endPoint={sendEmailToBuy}
            categoryProductOptions={categoryProductOptions}
            gstRequired
          />
        </CommonModal>
      )}

      {showUploadQuoteModal && (
        <CommonModal
          isOpen={showUploadQuoteModal}
          onClose={() => setShowUploadQuoteModal(false)}
          title={t("solar.modals.uploadTitle")}
          subTitle={t("solar.modals.uploadSubtitle")}
          closeOnBackdropClick={true}
          size="md"
        >
          <UploadQuote />
        </CommonModal>
      )}
    </>
  );
}
