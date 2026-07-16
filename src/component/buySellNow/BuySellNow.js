"use client";

import { sendEmailToBuy, sendEmailToSell } from "@/Contants/APIEndpoint";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomText from "@/component/Text/CustomText";
import { sendEmailToGetInTouch } from "@/Contants/APIEndpoint";
import toast, { Toaster } from "react-hot-toast";
import CommonFormForHome from "@/component/Form/CommonFormForHome";
import { useRouter } from "next/router";
import CommonFormForHomeBackup from "../Form/CommonFromHomeBackup";
import { getDemoPhone } from "@/Utils/demoDefaults";
import { DrawerClose } from "@/components/ui/drawer";
import { X } from "lucide-react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  contactNo: yup
    .string()
    .required("Contact number is required")
    .matches(/^[0-9]{10}$/, "Invalid contact number"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string(),
  message: yup.string(),
});

function BuySellNow({categoryProductOptions}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { contactNo: getDemoPhone() },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState("show");
  const [type, setType] = useState("buy"); // Set "buy" as default
  const [showAnimationBuy, setShowAnimationBuy] = useState(true); // Default animation for "Buy"
  const [showAnimationSell, setShowAnimationSell] = useState(false);
  const [currentEndpoint, setCurrentEndpoint] = useState(sendEmailToBuy); // Default endpoint
  const router = useRouter();

  // Update endpoint whenever type changes
  useEffect(() => {
    if (type === "buy") {
      setCurrentEndpoint(sendEmailToBuy);
      setShowAnimationBuy(true);
      setShowAnimationSell(false);
    } else if (type === "sell") {
      setCurrentEndpoint(sendEmailToSell);
      setShowAnimationBuy(false);
      setShowAnimationSell(true);
    }
  }, [type]);

  const handleButtonClick = (buttonType) => {
    setShow("show");
    setType(buttonType);
    reset(); // Reset form when switching between buy/sell

    // Reset both animation states
    setShowAnimationBuy(false);
    setShowAnimationSell(false);

    // Set the appropriate animation state based on button type
    if (buttonType === "buy") {
      setShowAnimationBuy(true);
      setCurrentEndpoint(sendEmailToBuy);
    } else if (buttonType === "sell") {
      setShowAnimationSell(true);
      setCurrentEndpoint(sendEmailToSell);
    }
  };

  const onSubmit = async (formData) => {
    if (!currentEndpoint) {
      toast.error("Please select buy or sell first");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(currentEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      reset();
      toast.success("Mail sent successfully");

      // Reset states after successful submission
      setShowAnimationBuy(false);
      setShowAnimationSell(false);
      setShow("");
      setType("buy"); // Reset to default state
      setCurrentEndpoint(sendEmailToBuy);
      setShowAnimationBuy(true);

      router.push("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-xl w-full max-w-md max-h-[85vh] overflow-y-auto scroll-m-8 relative mt-20 sm:mt-24">
        <DrawerClose asChild>
          <button
            type="button"
            aria-label="Close"
            className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-[#4A3772] transition-colors"
          >
            <X size={18} />
          </button>
        </DrawerClose>
        <h2 className="text-lg sm:text-xl font-bold text-[#4A3772] text-center">
          Tell Us Your Requirement
        </h2>
        <div className="flex gap-2 sm:gap-3 mb-2 mt-3 px-4 sm:px-10">
          <button
            type="button"
            onClick={() => handleButtonClick("buy")}
            className={`flex-1 py-1.5 px-4 rounded-full font-semibold border transition-colors ${type === "buy"
                ? "bg-[#4A3772] text-white border-[#4A3772]"
                : "bg-white text-black border-[#4A3772]"
              }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick("sell")}
            className={`flex-1 py-1.5 px-4 rounded-full font-semibold border transition-colors ${type === "sell"
                ? "bg-[#4A3772] text-white border-[#4A3772]"
                : "bg-white text-black border-[#4A3772]"
              }`}
          >
            Sell
          </button>
        </div>
        {/* <div className=""> */}
        <CommonFormForHomeBackup
          setShow={setShow}
          endPoint={currentEndpoint}
          setShowAnimationBuy={setShowAnimationBuy}
          setShowAnimationSell={setShowAnimationSell}
          showAnimationBuy={showAnimationBuy}
          showAnimationSell={showAnimationSell}
          onSubmit={onSubmit}
          isLoading={isLoading}
          type={type}
          categoryProductOptions={categoryProductOptions}
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default BuySellNow;
