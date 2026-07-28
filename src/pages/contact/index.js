import { Gradient } from "@/Contants/constant";
import ContactForm from "@/component/Form/Contact/Form";
import CustomText from "@/component/Text/CustomText";
import Image from "next/image";
import React, { useState } from "react";
import Ripples from "react-ripples";
import Buy from "@/assets/images/svg/buy.svg";
import Sell from "@/assets/images/svg/sell.svg";
import Expert from '@/assets/images/svg/contacts-expert.svg';


import {
  getAllCategoryProductOptionsData,
  sendEmailToBuy,
  sendEmailToSell,
} from "@/Contants/APIEndpoint";
import { NextSeo } from "next-seo";
import Head from "next/head";
import contactSchema from "@/schemas/contactSchema"; // ← LocalBusiness JSON-LD for contact page
import CommonFormForHome from "@/component/Form/CommonFormForHome";
import SellWithUsForm from "@/component/Form/Sell/SellWithUsForm";
import CommonModal from "@/component/Modal/CommonModal";
import UploadQuote from "@/component/UploadQuote";
import { useRouter } from "next/router";

export default function index({ categoryProductOptions }) {

  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);
  const [activeTab, setActiveTab] = useState("new");

    const router = useRouter();

  const dynamicCanonicalUrl = `https://www.headsupb2b.com/contact`;

  const handleCallUs = () => {
    router.push("tel:+919582342280");
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8 pt-10 md:pt-8 lg:pt-10 ll:pt-16 pb-16 md:pb-10 lg:pb-12">
      <NextSeo
        title="Contact Us | HeadsupB2B"
        description="Contact for Construction Sand, Aggregates, Bricks, Stone, Metal Beam Crash Barriers, Metals and Steels, TMT, Electronic Products and Price | Call Now 9097476155"
        canonical={dynamicCanonicalUrl}
        openGraph={{
          type: "website",
          url: "https://www.headsupb2b.com/contact",
          title: "Contact Us | HeadsupB2B",
          description:
            "Contact for Construction Sand, Aggregates, Bricks, Stone, Metal Beam Crash Barriers, Metals and Steels, TMT, Electronic Products and Price | Call Now +918595736388",
          site_name: "Headsup B2B",
          images: [
            {
              url: "https://www.headsupb2b.com/logo-dark.webp",
              alt: "Contact Headsup B2B - Raw Materials Supplier India",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@headsupb2b",
          handle: "@headsupb2b",
        }}
      />

      {/* LocalBusiness JSON-LD schema (source: B2B schema contact.pdf) */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: contactSchema }}
          key="contact-localbusiness-jsonld"
        />
      </Head>

      <div className="pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ll:gap-10">
          {/* Buy Card */}
          <div className="p-4 md:p-5 lg:p-6 bg-purple text-center rounded-xl md:rounded-2xl shadow-xl flex flex-col justify-between h-full">
            <div className="my-3 flex justify-center">
              <span className="bg-white p-5 md:p-6 rounded-full flex items-center justify-center w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px]">
                <Image src={Buy} alt="Buy" width={70} />
              </span>
            </div>
            <div className="my-3">
              <CustomText
                text={"Want to Buy?"}
                className={"text-headupb2b text-2xl md:text-2xl lg:text-3xl ll:text-4xl font-bold"}
              />
            </div>
            <div className="my-3">
              <Ripples
                className={`${Gradient} rounded-md hover:scale-105 delay`}
              >
                <label
                  className="text-white py-2 px-4 text-base md:text-lg lg:text-xl cursor-pointer"
                  onClick={() => setShowBuyModal(true)}
                >
                  Click here
                </label>
              </Ripples>
            </div>
          </div>

          {/* Sell Card */}
          <div className="p-4 md:p-5 lg:p-6 bg-purple text-center rounded-xl md:rounded-2xl shadow-xl flex flex-col justify-between h-full">
            <div className="my-3 flex justify-center">
              <span className="bg-white p-5 md:p-6 rounded-full flex items-center justify-center w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px]">
                <Image src={Sell} alt="Sell" width={70} />
              </span>
            </div>
            <div className="my-3">
              <CustomText
                text={"Want to Sell?"}
                className={"text-headupb2b text-2xl md:text-2xl lg:text-3xl ll:text-4xl font-bold"}
              />
            </div>
            <div className="my-3">
              <Ripples
                className={`${Gradient} rounded-md hover:scale-105 delay`}
              >
                <label
                  className="text-white py-2 px-4 text-base md:text-lg lg:text-xl cursor-pointer"
                  onClick={() => setShowSellModal(true)}
                >
                  Click here
                </label>
              </Ripples>
            </div>
          </div>

          {/* Expert Card */}
          <div className="p-4 md:p-5 lg:p-6 bg-purple text-center rounded-xl md:rounded-2xl shadow-xl flex flex-col justify-between h-full">
            <div className="my-3 flex justify-center">
              <span className="bg-white p-5 md:p-6 rounded-full flex items-center justify-center w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px]">
                <Image src={Expert} alt="Expert" width={70} />
              </span>
            </div>
            <div className="my-3">
              <CustomText
                text={"Get in Touch with Sachin"}
                className={"text-headupb2b text-2xl md:text-2xl lg:text-3xl ll:text-4xl font-bold leading-tight"}
              />
            </div>
            <div className="my-3">
              <Ripples
                className={`${Gradient} rounded-md hover:scale-105 delay`}
              >
                <label
                  className="text-white py-2 px-4 text-base md:text-lg lg:text-xl cursor-pointer"
                  onClick={handleCallUs}
                >
                  Call Us
                </label>
              </Ripples>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-headupb2b rounded-lg md:rounded-2xl">
        <ContactForm />
      </div>

      {/* Buy Modal with Tabs */}
      {showBuyModal && (
        <CommonModal
          isOpen={showBuyModal}
          onClose={() => {
            setShowBuyModal(false);
            setActiveTab("new");
          }}
          title="Want to Buy"
          closeOnBackdropClick={true}
          size="lg"
        >
          {/* Tab Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 px-2 sm:px-4 py-2.5 sm:py-3">
            <button
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all ${
                activeTab === "new"
                  ? "bg-[#4A3772] text-white shadow-md"
                  : "bg-slate-200 text-gray-700 hover:bg-slate-300"
              }`}
              onClick={() => setActiveTab("new")}
            >
              New Quote
            </button>
            <button
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all ${
                activeTab === "upload"
                  ? "bg-[#4A3772] text-white shadow-md"
                  : "bg-slate-200 text-gray-700 hover:bg-slate-300"
              }`}
              onClick={() => setActiveTab("upload")}
            >
              Upload Quote
            </button>
          </div>

          {/* Content Area */}
          <div className="overflow-y-auto">
            {activeTab === "upload" ? (
              <div className="w-full flex justify-center p-2 sm:p-3 md:p-4">
                <UploadQuote autoOpen={true} />
              </div>
            ) : (
              <div className="w-full">
                <CommonFormForHome
                  setShow={() => setShowBuyModal(false)}
                  endPoint={sendEmailToBuy}
                  type="buy"
                  categoryProductOptions={categoryProductOptions}
                />
              </div>
            )}
          </div>
        </CommonModal>
      )}

      {/* Sell Modal */}
      {showSellModal && (
        <CommonModal
          isOpen={showSellModal}
          onClose={() => setShowSellModal(false)}
          title="Sell With Us"
          closeOnBackdropClick={true}
          size="xl"
        >
          <SellWithUsForm
            endPoint={sendEmailToSell}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      )}
    </div>
  );
}

const transformCategoriesResponse = (categories) => {
  return categories?.map((category) => ({
    label: category?.name,
    value: category?.name,
    products: (category?.products || [])?.map((product) => ({
      label: product?.name,
      value: product?.name,
    })),
  }));
};

export async function getStaticProps() {
  let categoryProductOptionsData = await fetch(
    getAllCategoryProductOptionsData
  );
  categoryProductOptionsData = await categoryProductOptionsData?.json();
  let categoryProductOptions = transformCategoriesResponse(
    categoryProductOptionsData?.data
  );

  return {
    props: {
      categoryProductOptions,
    },
    revalidate: 300,
  };
}