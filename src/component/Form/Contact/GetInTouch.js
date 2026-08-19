"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Ripples from "react-ripples";
import { useTranslation } from "react-i18next";

import CustomText from "@/component/Text/CustomText";
import { sendEmailToGetInTouch } from "@/Contants/APIEndpoint";
import { isGadSourcePresent } from "@/Utils/urlHelpers";
import { getDemoPhone } from "@/Utils/demoDefaults";

function GetInTouch({ onClose, title }) {
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [isJobMentioned, setIsJobMentioned] = useState(false);

  /* ───────── VALIDATION ───────── */
  const schema = yup.object().shape({
    name: yup.string().required(t("getInTouch.errors.nameRequired")),
    contactNo: yup
      .string()
      .required(t("getInTouch.errors.contactRequired"))
      .matches(/^[0-9]{10}$/, t("getInTouch.errors.contactInvalid")),
    email: yup
      .string()
      .email(t("getInTouch.errors.emailInvalid"))
      .required(t("getInTouch.errors.emailRequired")),
    address: yup.string(),
    message: yup.string(),
  });

  /* ───────── FORM ───────── */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { contactNo: getDemoPhone() },
  });

  /* ───────── SUBMIT ───────── */
  const onSubmit = async (formData) => {
    setIsLoading(true);

    const gadSourceValue = isGadSourcePresent();

    try {
      const updatedFormData = {
        ...formData,
        adsSource: gadSourceValue ? "Ads Lead" : "Organic Lead",
        source: typeof window !== "undefined" ? window.location.pathname : "/contact",
      };

      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) throw new Error("Network error");

      reset();
      toast.success(t("getInTouch.toast.success"));

      onClose(); // ✅ modal close
      router.push("/thank-you");

    } catch (error) {
      console.error(error);
      toast.error(t("getInTouch.toast.failure"));
    } finally {
      setIsLoading(false);
    }
  };

  const placeholders = {
    name: t("getInTouch.placeholders.name"),
    contactNo: t("getInTouch.placeholders.contactNo"),
    email: t("getInTouch.placeholders.email"),
    address: t("getInTouch.placeholders.address"),
  };

  /* ───────── UI ───────── */
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#8c6ec4] p-6 rounded-xl w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl"
        >
          ✕
        </button>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Heading */}
          <div className="mb-4">
            <CustomText
              text={title ? title : t("getInTouch.defaultHeading")}
              className="text-lg text-white"
            />
          </div>

          {/* Inputs */}
          {["name", "contactNo", "email", "address"].map((field) => (
            <div key={field} className="my-3">
              <input
                {...register(field)}
                placeholder={`${placeholders[field]}${field !== "address" ? "*" : ""}`}
                className="bg-transparent text-white placeholder:text-white w-full border-b mb-1 outline-none"
                maxLength={field === "contactNo" ? 10 : undefined}
                onInput={
                  field === "contact No"
                    ? (e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      }
                    : undefined
                }
              />
              {errors[field] && (
                <span className="text-red-200 text-sm">
                  {errors[field].message}
                </span>
              )}
            </div>
          ))}

          {/* Message */}
          <div className="my-3">
            <label htmlFor="message" className="sr-only">
              {t("getInTouch.placeholders.message")}
            </label>
            <textarea
              {...register("message")}
              id="message"
              placeholder={t("getInTouch.placeholders.message")}
              className="bg-transparent text-white placeholder:text-white w-full border rounded-lg p-2 outline-none"
              rows={3}
            ></textarea>
          </div>

          {/* Job Warning */}
          {isJobMentioned && (
            <p className="text-white text-sm mt-1">
              {t("getInTouch.jobWarning")}{" "}
              <a
                className="underline"
                href="/careers"
                target="_blank"
              >
                {t("getInTouch.careersLink")}
              </a>
            </p>
          )}

          {/* Submit */}
          <div className="text-center mt-4">
            <Ripples className="bg-white rounded-md hover:scale-105 transition-transform">
              <button
                type="submit"
                disabled={isLoading || isJobMentioned}
                className="text-[#4A3772] py-2 px-8 font-medium text-lg"
              >
                {isLoading ? t("getInTouch.sending") : t("getInTouch.send")}
              </button>
            </Ripples>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
