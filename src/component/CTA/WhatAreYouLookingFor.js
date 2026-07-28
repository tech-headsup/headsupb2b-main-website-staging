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
        <div className="text-center lg:text-left pt-6 sm:pt-8 md:pt-6 lg:pt-3 xl:pt-4 pb-6 sm:pb-8 md:pb-8 lg:pb-6 xl:pb-8 bg-[#4A3772] text-white col-span-1 lg:col-span-2 rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl px-3 sm:px-4 md:px-6 lg:px-4 xl:px-6 2xl:pl-10 flex flex-col md:flex-row lg:flex-col justify-between items-center md:items-center lg:items-stretch gap-6">
          <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-3">
            <CustomText
              text={"what are"}
              className={`section_heading text-white ll:text-[45px] text-center md:text-left ll:pl-4`}
            />
            <CustomText
              text={"you looking"}
              className={`section_heading text-white ll:text-[45px] text-center md:text-left ll:pl-4`}
            />

            <CustomText
              text={"for?"}
              className={`section_heading text-white ll:text-[45px] text-center md:text-left ll:pl-4`}
            />
          </div>
          <div className="flex justify-center items-end">
            <Image
              src={Query}
              width={260}
              height={260}
              className="w-40 sm:w-48 md:w-52 lg:w-32 xl:w-36 2xl:w-44 h-auto"
              alt="Query illustration"
            />
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
