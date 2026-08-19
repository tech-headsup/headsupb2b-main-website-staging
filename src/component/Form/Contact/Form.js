"use client";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomText from "@/component/Text/CustomText";
import Image from "next/image";
import ContactUsImage from "@/assets/images/contact.png";
import Ripples from "react-ripples";
import { useTranslation } from "react-i18next";
import { sendEmailToGetInTouch } from "@/Contants/APIEndpoint";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Map from "@/component/Map/Map";
import { isGadSourcePresent } from "@/Utils/urlHelpers";
import { getDemoPhone } from "@/Utils/demoDefaults";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const FIELDS = [
  { key: "name", labelKey: "contact.form.name" },
  { key: "contactNo", labelKey: "contact.form.contactNo" },
  { key: "email", labelKey: "contact.form.email" },
  { key: "address", labelKey: "contact.form.address" },
];

export default function ContactForm() {
  const { t } = useTranslation();

  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(t("contact.form.errors.nameRequired")),
        contactNo: yup
          .string()
          .required(t("contact.form.errors.contactRequired"))
          .matches(/^[0-9]{10}$/, t("contact.form.errors.contactInvalid")),
        email: yup
          .string()
          .email(t("contact.form.errors.emailInvalid"))
          .required(t("contact.form.errors.emailRequired")),
        address: yup.string(),
        message: yup.string(),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { contactNo: getDemoPhone() },
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Watch the message field to detect "job"
  const messageValue = watch("message");
  const isJobMentioned = /\bjob\b/i.test(messageValue || "");

  const onSubmit = async (formData) => {
    setIsLoading(true);
    const gadSourceValue = isGadSourcePresent();

    try {
      const updatedFormData = {
        ...formData,
        adsSource: gadSourceValue ? "Ads Lead" : "Organic Lead",
        source: router?.asPath || "/contact",
      };
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      reset();
      toast.success(t("contact.form.toast.success"));
      router.push("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || t("contact.form.toast.failure"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 lg:p-10 4k:min-h-[800px]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 relative">
          <div className="flex flex-col text-white">
            <CustomText
              text={t("contact.form.ourLocation")}
              className="font-bold text-2xl 4k:text-6xl"
            />
            <Map />
          </div>
        </div>
        <div className="lg:col-span-3">
          <CustomText
            text={t("contact.form.getInTouch")}
            className="font-bold text-2xl 4k:text-6xl text-white"
          />

          <div className="bg-[#8c6ec4] p-6 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-6">
                <CustomText
                  text={t("contact.form.sendMessage")}
                  className="text-lg text-white"
                />
              </div>
              {FIELDS.map(({ key, labelKey }) => {
                const label = t(labelKey);
                const isOptional = key === "address";
                return (
                  <div key={key} className="my-3">
                    <label htmlFor={key} className="sr-only">
                      {label}
                    </label>
                    <input
                      {...register(key)}
                      id={key}
                      placeholder={`${label}${isOptional ? "" : "*"}`}
                      className="bg-transparent text-white placeholder:text-white w-full border-b mb-2 outline-none"
                      aria-invalid={errors[key] ? "true" : "false"}
                      maxLength={key === "contactNo" ? 10 : undefined}
                      onInput={
                        key === "contactNo"
                          ? (e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                            }
                          : undefined
                      }
                    />
                    {errors[key] && (
                      <span className="text-red-500">
                        {errors[key].message}
                      </span>
                    )}
                  </div>
                );
              })}
              <div className="my-3">
                <label htmlFor="message" className="text-lg text-white">
                  {t("contact.form.message")}
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  className="bg-transparent text-white placeholder:text-white w-full border mb-2 rounded-lg outline-none p-2"
                  rows={2}
                ></textarea>
                {isJobMentioned && (
                  <p className="text-white text-sm mt-1">
                    {t("contact.form.jobNotAllowed")}{" "}
                    <a
                      className="decoration underline hover:cursor-pointer"
                      href="https://www.headsupb2b.com/careers"
                      target="_blank"
                    >
                      {t("contact.form.clickHere")}
                    </a>{" "}
                    {t("contact.form.forCareer")}
                  </p>
                )}
              </div>

              <div className="text-center">
                <Ripples className="bg-white rounded-md hover:scale-105 transition-transform">
                  <button
                    type="submit"
                    className="text-[#4A3772] py-2 px-8 font-medium text-xl"
                    disabled={isLoading || isJobMentioned}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner mr-2"></span>
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      t("contact.form.send")
                    )}
                  </button>
                </Ripples>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
