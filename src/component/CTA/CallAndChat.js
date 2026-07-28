import React from "react";
import CustomText from "../Text/CustomText";
import Link from "next/link";
import { Gradient, GradientText } from "@/Contants/constant";
import CallSVG from "@/assets/images/svg/CallSVG";
import ChatSVG from "@/assets/images/svg/ChatSVG";

export default function CallAndChat() {

  return (
    <div className="-mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20 xl:-mx-28">
    <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-8">
    <div className="grid ms:grid-cols-1 t:grid-cols-2 ms:gap-2 ll:grid-cols-2 ll:gap-4">
      <Link href="tel:+917210199772">
        <div
          className={`bg-[#80EBF7] text-[#4A3772] ms:py-2 t:py-4 ll:py-8 ll:px-34 flex justify-center rounded-2xl  cursor-pointer items-center`}
        >
          <div className="flex flex-row hover:scale-x-105  transaction-delay">
            <div className="mx-1 flex items-center ">
              <span className="w-7 h-7 ll:w-10 ll:h-10 inline-block mr-2">
                <CallSVG color={"#4A3772"} />{" "}
              </span>
              <CustomText
                text={"Call  us"}
                className={
                  "ms:text-sm mm:text-md md:text-xl ll:text-4xl cursor-pointer font-bold"
                }
              />
            </div>
          </div>
        </div>
      </Link>
      <Link href="https://wa.me/+918595736388" target="_blank">
        <div
          className={`ms:py-2 t:py-4 ll:py-8 ll:px-34 flex justify-center rounded-2xl bg-[#80EBF7] text-[#4A3772] cursor-pointer items-center`}
        >
          <div className="flex flex-row hover:scale-x-105  transaction-delay">
            <div className="mx-1 flex items-center">
              <span className="w-7 h-7 ll:w-10 ll:h-10 inline-block mr-2">
                <ChatSVG color={"#4A3772"} />
              </span>
              <CustomText
                text={"Chat with  us"}
                className={
                  "ms:text-sm mm:text-md md:text-xl ll:text-4xl cursor-pointer font-bold"
                }
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
    </div>
    </div>
  );
}
