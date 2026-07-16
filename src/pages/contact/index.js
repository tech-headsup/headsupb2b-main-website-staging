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
    <div className="ms:px-6 ms:pt-10 ms:pb-20 t:pt-8 ll:mt-16 t:mx-14 imac:mx-56 t:pb-8 l:pb-10">
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

      <div className="t:pb-12">
        <div className="grid ms:grid-cols-1 t:grid-cols-3 ms:gap-4 t:gap-10">
          {/* Buy Card */}
          <div className="p-2 bg-purple text-center rounded-lg shadow-xl flex flex-col justify-between h-full">
            <div className="my-3 flex justify-center">
              <span className="bg-white p-6 rounded-full flex items-center justify-center w-[120px] h-[120px]">
                <Image src={Buy} className="" width={70} />
              </span>
            </div>
            <div className="my-3">
              <CustomText
                text={"Want to Buy?"}
                className={"text-headupb2b ms:text-[24px] text-5xl font-bold"}
              />
            </div>
            <div className="my-3">
              <Ripples
                className={`${Gradient} rounded-md hover:scale-105 delay`}
              >
                <label
                  className="text-white py-2 px-4 text-xl cursor-pointer"
                  onClick={() => setShowBuyModal(true)}
                >
                  Click here
                </label>
              </Ripples>
            </div>
          </div>

          {/* Sell Card */}
          <div className="p-2 bg-purple text-center rounded-lg shadow-xl flex flex-col justify-between h-full">
            <div className="my-3 flex justify-center">
              <span className="bg-white p-6 rounded-full flex items-center justify-center w-[120px] h-[120px]">
                <Image src={Sell} className="" width={70} />
              </span>
            </div>
            <div className="my-3">
              <CustomText
                text={"Want to Sell?"}
                className={"text-headupb2b ms:text-[24px] text-5xl font-bold"}
              />
            </div>
            <div className="my-3">
              <Ripples
                className={`${Gradient} rounded-md hover:scale-105 delay`}
              >
                <label
                  className="text-white py-2 px-4 text-xl cursor-pointer"
                  onClick={() => setShowSellModal(true)}
                >
                  Click here
                </label>
              </Ripples>
            </div>
          </div>

          {/* Expert Card */}
          <div className="p-2 bg-purple text-center rounded-lg shadow-xl flex flex-col justify-between h-full">
            <div className="my-3 flex justify-center">
              <span className="bg-white p-6 rounded-full flex items-center justify-center w-[120px] h-[120px]">
                <Image src={Expert} className="" width={70} />
              </span>
            </div>
            <div className="my-3">
              <CustomText
                text={"Get in Touch with Sachin"}
                className={"text-headupb2b ms:text-[24px] text-5xl font-bold text-wrap"}
              />
            </div>
            <div className="my-3">
              <Ripples
                className={`${Gradient} rounded-md hover:scale-105 delay`}
              >
                <label
                  className="text-white py-2 px-4 text-xl cursor-pointer"
                  onClick={handleCallUs}
                >
                  Call Us
                </label>
              </Ripples>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-headupb2b rounded-lg">
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