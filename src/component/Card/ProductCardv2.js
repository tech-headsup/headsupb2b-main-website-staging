import React, { useState } from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import Modal from "../Modal/Modal";
import CommonForm from "../Form/CommonForm";
import { sendEmailToBuy } from "@/Contants/APIEndpoint";
import CommonModal from "../Modal/CommonModal";


export default function ProductCardv2({ product, categoryName, categoryProductOptions }) {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");

  const handleNavigate = () => {
    setShow(true);
  };
  const handleClick = () => {
    setSelected(product?.name);
  };

  const handleCallUs = () => {
    router.push("tel:+919911902943");
  };

  return (
  <div className="py-3 px-3 flex flex-col items-center justify-between rounded-2xl overflow-hidden border border-[#B6B6B6] font-semibold">


      <div>
        {/* Header Section */}
        <div className="bg-white px-1 pb-2 w-full">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-[#4A3772] leading-tight">
              {product?.name}
            </h3>

            {/* Marketing Labels */}

            <div className="flex flex-col gap-2">
              {product?.marketingLabels?.map((item) => {
                return (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 bg-[#FFD8D8] text-[#4A3772] px-3 py-1.5 rounded-full text-xs font-bold shadow-md"
                  >
                    <Star className="w-3.5 h-3.5 fill-[#4A3772]" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Image */}
        <div className="pb-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group w-full h-[144px]">
            <img
              src={`${product?.image?.url}`}
              alt="Primary Bars"
              className="w-full h-52 object-fit transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="px-1 pb-4">
          <div className="space-y-2">
            {product?.specifications?.map((item) => {
              return (
                <div
                  key={item?.name}
                  className="flex items-start text-[#4A3772]"
                >
                  <span className="w-36 flex-shrink-0 text-xs mr-3">
                    {item?.name}
                  </span>
                  <span className="text-xs">{item?.value}</span>
                </div>
              );
            })}
          </div>
        </div>      
      </div>

      <div className="flex flex-col items-start w-full">
        {/* Price */}
        <div className="px-1 pb-2 w-full">
          <p className="text-[#777676] text-[13px] font-montserrat">
            Price available on Request
          </p>
        </div>
        {/* Action Buttons */}
        <div className="px-1 pb-3 flex gap-3 w-full">
          <Button
            className=" bg-[#80EBF7] text-[#4A3772] text-[12px] ll:text-[14px] w-10/12 font-bold py-1.5 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:text-white"
            onClick={() => {
              handleNavigate();
              handleClick();
            }}
          >
            {/* <span className="w-3 h-3 mr-2 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0">
              <GetInstantQuoteSVG />
              </span> */}
            Get Instant Quote
          </Button>
          <Button
            className=" bg-white w-1/3 hover:bg-gray-50 text-[#4A3772 text-[12px] ll:text-[14px] font-bold py-1.5 rounded-xl border border-black transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            onClick={handleCallUs}
          >
            {/* <img
            src={GetInstantQuoteSVG?.src}
            className="w-2 h-2 flex-shrink-0"
            alt="get_instant_quote"
            /> */}
            Call Us
          </Button>
        </div>
      {show ? (
        <CommonModal
          isOpen={show}
          title={`Raise a Request for ${categoryName}`}
          onClose={() => {
            setShow(false);
          }}
          size="xl"
        >
          <CommonForm
            setShow={setShow}
            endPoint={sendEmailToBuy}
            categoryName={categoryName}
            productName={selected}
            categoryProductOptions={categoryProductOptions}
          />
        </CommonModal>
      ) : null}
      </div>
    </div>
  );
}
