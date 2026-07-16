import React, { useEffect, useState } from "react";
import CustomText from "../Text/CustomText";
import { getLanguage } from "@/storage/storage";
import Query from "@/assets/images/svg/Query form.svg";
import Image from "next/image";
import { sendEmailToBuy } from "@/Contants/APIEndpoint";
import CommonFormForHomeBackup from "../Form/CommonFromHomeBackup";

export default function WhatAreYouLookingFor({ initialData, categoryProductOptions }) {
  const [currentLanguage, setCurrentLanguage] = useState(null);

  useEffect(() => {
    if (currentLanguage === null) {
      let cl = getLanguage();
      if (cl === undefined || cl === null) {
        setCurrentLanguage("en");
      } else {
        setCurrentLanguage(cl);
      }
    }
  }, []);

  return (
    <div className="shadow-lg rounded-2xl">
      <div className="grid grid-cols-1 rounded-b-2xl lg:grid-cols-6">
        <div className="text-center lg:text-left py-6 sm:py-8 md:py-10 lg:py-8 xl:py-10 bg-[#4A3772] text-white col-span-1 lg:col-span-2 relative rounded-tl-2xl rounded-tr-2xl ll:rounded-tr-none rounded-bl-2xl px-3 sm:px-4 md:px-6 lg:px-4 xl:px-6 2xl:pl-10">
          <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-3">
            <CustomText
              text={"what are"}
              className={`section_heading text-white ll:text-[45px] text-left ll:pl-4`}
            />
            <CustomText
              text={"you looking"}
              className={`section_heading text-white ll:text-[45px] text-left ll:pl-4`}
            />

            <CustomText
              text={"for?"}
              className={`section_heading text-white ll:text-[45px] text-left ll:pl-4`}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 md:flex justify-center hidden lg:flex">
            <div className="flex justify-center items-center">
              <Image
                src={Query}
                width={260}
                height={260}
                className="lg:w-64 xl:w-80 2xl:w-96"
                alt="Query illustration"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D96B] py-2.5 sm:py-3 md:py-4 lg:py-3 xl:py-4 col-span-1 lg:col-span-4 rounded-b-2xl sm:rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl px-2 sm:px-3 md:px-4 lg:px-2 xl:px-4">
          <CommonFormForHomeBackup
            endPoint={sendEmailToBuy}
            initialData={initialData}
            categoryProductOptions={categoryProductOptions}
          />
        </div>
      </div>
    </div>
  );
}
