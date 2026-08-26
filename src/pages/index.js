"use client";
import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import {
  getAllCategoryData,
  sendEmailToBuy,
  sendEmailToSell,
} from "@/Contants/APIEndpoint";
import FAQSchema from "@/schemas/faqSchema";
// import indexSchema from "@/schemas/indexSchema"; // ← old home schema (replaced by b2bSchema)
import b2bSchema from "@/schemas/b2bSchema"; // ← new: Organization + WebSite + LocalBusiness
import FAQDataProps from "@/Contants/FAQScript/FAQData";
import query from "@/Query/indexQuery";

// Above-the-fold sections — eager so they SSR for SEO/LCP
import HeroSection from "@/component/home/HeroSection";
import StatsBar from "@/component/home/StatsBar";
import MainCategory from "@/component/Category/MainCategory";
import ClientPartnerSwitch from "@/component/Switch/ClientPartner/ClientPartnerSwitch";
import { Response } from "@/component/Switch/ClientPartner/response";
import LoanBanner from "@/component/Form/LoanBanner";

// Below-the-fold sections — dynamic so their JS doesn't block initial paint.
// ssr:true preserves SEO content in HTML; only the JS is split into a separate chunk.
const NewsPressRelease = dynamic(() => import("@/component/home/Newspressrelease"));
const WhoWeServe = dynamic(() => import("@/component/home/WhoWeServe"));
const WhyHeadsupB2B = dynamic(() => import("@/component/home/WhyHeadsupB2B"));
const HowItWorks = dynamic(() => import("@/component/home/HowItWorks"));
const RequirementToExecution = dynamic(() => import("@/component/home/RequirementToExecution"));
const TestimonialsCarousel = dynamic(() => import("@/component/home/TestimonialsCarousel"));
const CTABanner = dynamic(() => import("@/component/home/CTABanner"));
const PanIndiaText = dynamic(() => import("@/component/home/PanIndiaText"));
const FAQs = dynamic(() => import("@/component/FAQ/FAQs"));
const CallAndChat = dynamic(() => import("@/component/CTA/CallAndChat"));

// Modals + forms — dynamic-imported so they're not in the initial JS bundle
const CommonModal = dynamic(() => import("@/component/Modal/CommonModal"), { ssr: false });
const SellWithUsForm = dynamic(() => import("@/component/Form/Sell/SellWithUsForm"), { ssr: false });
const WhatAreYouLookingFor = dynamic(() => import("@/component/Form/WhatAreYouLookingFor"), { ssr: false });
const UploadQuote = dynamic(() => import("@/component/UploadQuote"), { ssr: false });
const CommonForm = dynamic(() => import("@/component/Form/CommonForm"), { ssr: false });
const CreditForm = dynamic(() => import("@/component/Form/CreditForm"), { ssr: false });

const endpoint = "https://gql.hashnode.com";

export default function index({ data, initialDataa, categoryProductOptions }) {
  const { t } = useTranslation();
  const canonical = "https://www.headsupb2b.com/";

  function schema() {
    // return { __html: indexSchema }; // ← old home schema (commented out)
    return { __html: b2bSchema };
  }

  const [showSellWithUsFrom, setShowSellWithUsFrom] = useState(false);
  const [showGetQuoteModal, setShowGetQuoteModal] = useState(false);
  const [showUploadQuoteModal, setShowUploadQuoteModal] = useState(false);
  const [getInstantQuoteModal, setgetInstantQuoteModal] = useState(false);
  const [showCreditModal, setShowCreditModal] = useState(false); // ← added

  const router = useRouter();

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Script
        id="b2b-org-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={schema()}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={FAQSchema()}
      />
      <NextSeo
        title="Building Construction Raw Materials Supplier In Delhi"
        description="Building Construction Raw Materials supplier in Delhi NCR - Headsup B2B is best place to buy building materials, bricks, aggregate, stone dust, jamuna sand, concrete, steel, tiles in Delhi NCR."
        keywords="building material suppliers in delhincr, order building materials online, building materials online Delhi"
        canonical={canonical}
        openGraph={{
          type: "website",
          url: "https://www.headsupb2b.com/",
          title: "Building Construction Raw Materials Supplier In Delhi",
          description:
            "Building Construction Raw Materials supplier in Delhi NCR - Headsup B2B is best place to buy building materials, bricks, aggregate, stone dust, jamuna sand, concrete, steel, tiles in Delhi NCR.",
          site_name: "Headsup B2B",
          images: [
            {
              url: "https://www.headsupb2b.com/og-homepage.jpg",
              alt: "Building Construction Raw Materials Supplier - Headsup B2B",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@headsupb2b",
          handle: "@headsupb2b",
        }}
      />

      {/* 1. HERO */}
      <HeroSection
        onGetQuote={() => setgetInstantQuoteModal(true)}
        onUploadQuote={() => setShowUploadQuoteModal(true)}
      />

      {/* 2b. LOAN BANNER — same as category page, opens credit form */}
      <div className="page-container">
        <button
          onClick={() => setShowCreditModal(true)}
          className="flex items-center justify-center w-full mt-4 md:mt-6 px-4"
        >
          <LoanBanner />
        </button>
      </div>

      {/* 2. STATS */}
      <StatsBar />


      {/* 3. MAIN CATEGORIES */}
      <div className="page-container">
        <div className="section-top relative">
          <MainCategory initialDataa={initialDataa} />
        </div>
      </div>

      {/* 3b. CLIENT PARTNER SWITCH */}
      <div className="page-container">
        <div className="section-top">
          <ClientPartnerSwitch
            twoRows
            partnerCompanyList={Response?.doc?.[0]?.partner}
          />
        </div>
      </div>

      {/* 3c. NEWS & PRESS RELEASE — moved here right after Trusted Partners */}
      <div className="page-container">
        <NewsPressRelease />
      </div>

      {/* 4. WHO WE SERVE */}
      <WhoWeServe />

      {/* 5. WHY HEADSUP B2B */}
      <WhyHeadsupB2B onContactUs={() => setShowGetQuoteModal(t("home.modals.contactToday"))} showCreditNote />

      {/* 6. HOW IT WORKS */}
      {/* <HowItWorks onSubmit={() => setShowGetQuoteModal(t("home.modals.submitToday"))} /> */}

      {/* 6. REQUIREMENT TO EXECUTION (from services page) */}
      <RequirementToExecution />

      {/* 7. TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* 8. KNOWLEDGE HUB — removed (blog disabled) */}
      <div className="page-container">
        {/* <div className="section-top">
          <div className="text-center mb-10">
            <h2 className="hub-title">Knowledge Hub</h2>
          </div>
          <Blog from={"home"} blogData={data?.publication?.posts?.edges} />
        </div> */}

        {/* 9. CTA */}
        <CTABanner onGetQuote={() => setgetInstantQuoteModal(true)} />

        <div className="section-gap">
          <CallAndChat />
        </div>

        <PanIndiaText />

        <div className="faq-gap" style={{ paddingBottom: "2.5rem" }}>
          <FAQs FAQData={FAQDataProps} />
        </div>
      </div>

      {/* ── MODALS ─────────────────────────────────────────────── */}

      {/* Credit / Loan form — identical to category page */}
      {showCreditModal && (
        <CommonModal
          isOpen={showCreditModal}
          onClose={() => setShowCreditModal(false)}
          title={t("home.modals.credit.title")}
          subTitle={t("home.modals.credit.subtitle")}
          size="xl"
        >
          <CreditForm close={() => setShowCreditModal(false)} />
        </CommonModal>
      )}

      {getInstantQuoteModal && (
        <CommonModal
          isOpen={getInstantQuoteModal}
          title={t("home.modals.quote.title")}
          onClose={() => setgetInstantQuoteModal(false)}
          size="xl"
        >
          <CommonForm
            setShow={setgetInstantQuoteModal}
            endPoint={sendEmailToBuy}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      )}

      {showGetQuoteModal && (
        <CommonModal
          isOpen={showGetQuoteModal}
          onClose={() => setShowGetQuoteModal(false)}
          title={showGetQuoteModal || t("home.modals.raiseRequest")}
          closeOnBackdropClick={true}
          size="xl"
        >
          <WhatAreYouLookingFor categoryProductOptions={categoryProductOptions} />
        </CommonModal>
      )}

      {showUploadQuoteModal && (
        <CommonModal
          isOpen={showUploadQuoteModal}
          onClose={() => setShowUploadQuoteModal(false)}
          title={t("home.modals.uploadQuote.title")}
          subTitle={t("home.modals.uploadQuote.subtitle")}
          closeOnBackdropClick={true}
          size="md"
        >
          <UploadQuote />
        </CommonModal>
      )}

      {showSellWithUsFrom && (
        <CommonModal
          isOpen={showSellWithUsFrom}
          onClose={() => setShowSellWithUsFrom(false)}
          title={t("home.modals.sellWithUs.title")}
          closeOnBackdropClick={true}
          size="xl"
        >
          <SellWithUsForm
            setShow={setShowSellWithUsFrom}
            endPoint={sendEmailToSell}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      )}
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const transformCategoriesResponse = (data) => {
  if (!data || !Array.isArray(data)) return [];
  return data.map((category) => ({
    label: category?.name,
    value: category?.name,
    products: (category?.subCategories || []).flatMap((subCategory) =>
      (subCategory?.products || []).map((product) => ({
        label: product?.name,
        value: product?.name,
        subCategory: subCategory?.name,
      }))
    ),
  }));
};

export async function getStaticProps() {
  const initialData = await fetch(getAllCategoryData).then((res) => res.json());
  const client = new GraphQLClient(endpoint, {
    headers: { authorization: "Bearer YOUR_AUTH_TOKEN" },
  });
  const variables = { host: "headsupb2b.hashnode.dev", first: 20, after: null };
  let data;
  try {
    data = await client.request(query, variables);
  } catch (error) {
    console.warn("Hashnode GraphQL fetch failed (homepage blog posts skipped)");
    data = null;
  }
  let allCategoryData = await fetch(getAllCategoryData);
  allCategoryData = await allCategoryData?.json();
  const categoryProductOptions = transformCategoriesResponse(allCategoryData?.data);
  return {
    props: { data, initialDataa: initialData?.data, categoryProductOptions },
    revalidate: 600,
  };
}
