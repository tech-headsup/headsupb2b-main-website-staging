import React, { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import {
  adsWithUs,
} from "@/Contants/APIEndpoint";
import * as yup from "yup";
import { useRouter } from "next/router";
import { getDemoPhone } from "@/Utils/demoDefaults";

const GenericForm = ({
  productOptions,
  inputs,
  buttons,
  onSubmit,
  schema,
  setIsModalOpen,
  toast,
}) => {
  const { t } = useTranslation();

  // --- DEFAULT STATE MANAGEMENT ---
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- DEFAULT DATA FETCHING ---

  const router = useRouter();

  // --- DEFAULT FORM SUBMISSION HANDLER ---
  const handleDefaultFormSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const result = await submitFormData(formData);

      if (toast) {
        toast.success(t("ads.form.toast.success"));
      }

      if (setIsModalOpen) {
        setIsModalOpen(false);
      }
      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);

      if (toast) {
        toast.error(t("ads.form.toast.error", { message: error.message }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- DEFAULT FORM SCHEMA ---
  const defaultFormSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(t("ads.form.errors.nameRequired")),
        contactNo: yup
          .string()
          .required(t("ads.form.errors.contactRequired"))
          .matches(/^\d{10}$/, t("ads.form.errors.contactInvalid")),
        email: yup.string().email(t("ads.form.errors.emailInvalid")).required(t("ads.form.errors.emailRequired")),
        budget: yup
          .number()
          .typeError(t("ads.form.errors.budgetNumber"))
          .positive(t("ads.form.errors.budgetPositive"))
          .required(t("ads.form.errors.budgetRequired")),

        additionalComments: yup.string(),
      }),
    [t]
  );

  // --- DEFAULT FORM FIELDS ---
  const defaultInputs = [
    {
      key: "name",
      label: t("ads.form.labels.name"),
      type: "text",
      placeholder: t("ads.form.placeholders.name"),
    },
    {
      key: "contactNo",
      label: t("ads.form.labels.contactNo"),
      type: "tel",
      placeholder: t("ads.form.placeholders.contactNo"),
    },
    {
      key: "email",
      label: t("ads.form.labels.email"),
      type: "email",
      placeholder: t("ads.form.placeholders.email"),
    },
    {
      key: "budget",
      label: t("ads.form.labels.budget"),
      type: "number",
      placeholder: t("ads.form.placeholders.budget"),
    },
    {
      key: "product",
      label: t("ads.form.labels.product"),
      type: "select",
      placeholder: t("ads.form.placeholders.product"),
      options: productOptions,
      isLoading: false,
      disabled: false,
    },
    {
      key: "additionalComments",
      label: t("ads.form.labels.additionalComments"),
      type: "textarea",
      placeholder: t("ads.form.placeholders.additionalComments"),
    },
  ];

  // --- DEFAULT BUTTONS ---
  const defaultButtons = [
    {
      type: "submit",
      label: isSubmitting ? t("ads.form.buttons.submitting") : t("ads.form.buttons.submit"),
      disabled: isSubmitting,
      className:
        "bg-headupb2b text-white",
    },
    // {
    //   type: "button",
    //   label: "Cancel",
    //   onClick: () => {
    //     if (setIsModalOpen) {
    //       setIsModalOpen(false);
    //     }
    //   },
    //   className: "bg-gray-500 hover:bg-gray-600 text-white",
    // },
  ];

  // --- USE PROPS OR DEFAULTS ---
  const finalInputs = inputs || defaultInputs;
  const finalButtons = buttons || defaultButtons;
  const finalSchema = schema || defaultFormSchema;
  const finalOnSubmit = onSubmit || handleDefaultFormSubmit;

  // --- FORM SETUP ---
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(finalSchema),
    defaultValues: { contactNo: getDemoPhone() },
  });

  // --- CUSTOM LOADING SPINNER ---
  const LoadingSpinner = () => (
    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-400"></div>
  );

  // --- RENDER FORM ---
  return (
    <form
      className="text-gray-800 w-full"
      onSubmit={handleSubmit(finalOnSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
      {finalInputs.map((input, index) => {
        const key = input.Key || input.key || index;
        const fullWidth = input.type === "textarea" || input.type === "select";

        return (
          <div key={key} className={fullWidth ? "md:col-span-2" : ""}>
            <label className="block mb-1 font-medium">
              {input.label}
              {input.isLoading && (
                <span className="ml-2 inline-flex items-center">
                  <LoadingSpinner />
                </span>
              )}
            </label>

            {input.type === "select" ? (
              <Controller
                name={key}
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <Select
                      {...field}
                      isDisabled={input?.disabled}
                      isLoading={input?.isLoading}
                      options={productOptions}
                      placeholder={input.placeholder || t("ads.form.selectAnOption")}
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption?.value || null);
                      }}
                      value={
                        productOptions?.find(
                          (option) => option?.value === field?.value
                        ) || null
                      }
                      classNames={{
                        control: (state) =>
                          `border border-gray-300 rounded-md ${
                            input.isLoading ? "bg-gray-50" : ""
                          } ${state.isFocused ? "ring-2 ring-orange-400" : ""}`,
                        placeholder: () =>
                          `text-sm ${input.isLoading ? "text-orange-500" : "text-gray-400"}`,
                      }}
                      loadingMessage={() => t("ads.form.loadingOptions")}
                    />

                    {input.isLoading && (
                      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                        <LoadingSpinner />
                      </div>
                    )}
                  </div>
                )}
              />
            ) : input.type === "textarea" ? (
              <div className="relative">
                <textarea
                  {...register(key)}
                  placeholder={input.placeholder}
                  className={`w-full border border-gray-300 rounded-md px-4 py-2 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-sm ${
                    input.disabled ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  disabled={input.disabled}
                />
                {input.isLoading && (
                  <div className="absolute right-3 top-3">
                    <LoadingSpinner />
                  </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <input
                  {...register(key)}
                  type={input.type}
                  placeholder={input.placeholder}
                  className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-sm ${
                    input.disabled ? "bg-gray-100 cursor-not-allowed" : ""
                  }`}
                  disabled={input.disabled}
                />
                {input.isLoading && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <LoadingSpinner />
                  </div>
                )}
              </div>
            )}

            {errors?.[key] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[key]?.message}
              </p>
            )}
          </div>
        );
      })}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-3">
        {finalButtons.map((btn, idx) => (
          <button
            key={idx}
            type={btn.type || "button"}
            onClick={btn.onClick}
            disabled={btn.disabled}
            className={`${
              btn.className || ""
            } px-6 py-3 rounded-lg text-lg font-semibold transition w-full sm:w-auto flex items-center justify-center gap-2`}
          >
            {btn.disabled && btn.type === "submit" && <LoadingSpinner />}
            {btn.label}
          </button>
        ))}
      </div>
    </form>
  );
};

// --- HELPER FUNCTIONS ---

const submitFormData = async (formData) => {
  const response = await fetch("/api/sendAdsMail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(
      `API failed with status: ${response.status}. Message: ${errorData}`
    );
  }

  return response.json();
};

export default GenericForm;
