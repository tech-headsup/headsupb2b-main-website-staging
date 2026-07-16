import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import makeAnimated from "react-select/animated";
import { useRouter } from "next/router";
import { isGadSourcePresent } from "@/Utils/urlHelpers";
import { addWebsiteLead } from "@/Contants/APIEndpoint";
import { getDemoPhone } from "@/Utils/demoDefaults";

const FormField = ({ label, required, error, children }) => (
  <div className="space-y-1 sm:space-y-1.5">
    <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-red-500 text-[9px] sm:text-xs mt-0.5">{error}</p>
    )}
  </div>
);

const inputClass =
  "w-full px-2.5 py-1.5 border-2 border-gray-300 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors outline-none placeholder:text-sm text-sm text-gray-800 font-medium focus:border-[#4A3772]";

const selectStyles = {
  control: (base) => ({
    ...base,
    borderWidth: "2px",
    borderColor: "#D1D5DB",
    borderRadius: "0.5rem",
    backgroundColor: "#F9FAFB",
    minHeight: "36px",
    fontSize: "0.875rem",
    fontWeight: "500",
    boxShadow: "none",
    "&:hover": { backgroundColor: "#F3F4F6", borderColor: "#D1D5DB" },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1F2937",
    fontWeight: "500",
    fontSize: "0.875rem",
    textTransform: "capitalize",
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "#4A3772" : "white",
    color: isFocused ? "white" : "#1F2937",
    textTransform: "capitalize",
    fontSize: "0.875rem",
    padding: "6px 10px",
    cursor: "pointer",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9CA3AF",
    fontSize: "0.875rem",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

export default function WhatAreYouLookingFor({ initialData, categoryProductOptions }) {
  const Router = useRouter();
  const animatedComponents = makeAnimated();
  const selectRef = useRef(null);

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    contactNo: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]{10}$/, "Invalid contact number"),
    email: Yup.string().email("Invalid email"),
    category: Yup.object().required("Category is required"),
    product: Yup.array().min(1, "Select at least one product"),
    spec: Yup.string(),
    quantity: Yup.string().required("Quantity is required"),
    addressDeliveryLocation: Yup.string().required("Delivery address is required"),
    pincode: Yup.string()
      .required("Pincode is required")
      .matches(/^[1-9][0-9]{5}$/, "Invalid pincode"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
  } = useForm({ resolver: yupResolver(schema), defaultValues: { contactNo: getDemoPhone() } });

  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productOptions, setProductOptions] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      setProductOptions(selectedCategory?.products || []);
      setValue("product", []);
      setSelectedProducts([]);
      selectRef.current?.clearValue();
    }
  }, [selectedCategory, setValue]);

  const onSubmit = (data) => {
    const gadSourceValue = isGadSourcePresent();

    if (data?.category) data.category = data.category.value;
    if (data?.product?.length > 0)
      data.product = data.product.map((p) => p.value).join(", ");

    data.adsSource = gadSourceValue ? "Ads Lead" : "Organic Lead";
    setLoading(true);

    fetch(addWebsiteLead, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status !== 200) throw new Error(`CRM API failed: ${res.status}`);
        return res.json();
      })
      .then(() =>
        fetch("/api/sendWebsiteLeadMail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: Router?.asPath || "" }),
        })
      )
      .then((r) => r.json())
      .then(() => {
        reset();
        setLoading(false);
        setSelectedProducts([]);
        setSelectedCategory(null);
        selectRef.current?.clearValue();
        toast.success("Your enquiry has been submitted!");
        Router.push("/thank-you");
      })
      .catch((err) => {
        toast.error(`Something went wrong: ${err.message}`);
        setLoading(false);
      });
  };

  return (
    <div className="w-full">
      {/* Form Body */}
      <div className="p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-3.5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Row: Name + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-3 sm:mb-3.5">
            <FormField label="Name" required error={errors.name?.message}>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className={inputClass}
              />
            </FormField>

            <FormField label="Contact Number" required error={errors.contactNo?.message}>
              <input
                {...register("contactNo")}
                type="text"
                placeholder="10-digit number"
                maxLength={10}
                inputMode="numeric"
                className={inputClass}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </FormField>
          </div>

          {/* Email */}
          <div className="mb-3 sm:mb-3.5">
            <FormField label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your email"
                className={inputClass}
              />
            </FormField>
          </div>

          {/* Row: Category + Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-3 sm:mb-3.5">
            <FormField label="Category" required error={errors.category?.message}>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={categoryProductOptions}
                    onChange={(opt) => {
                      field.onChange(opt);
                      setSelectedCategory(opt);
                    }}
                    placeholder="Select category"
                    styles={selectStyles}
                  />
                )}
              />
            </FormField>

            <FormField label="Products" required error={errors.product?.message}>
              <Controller
                name="product"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    ref={selectRef}
                    options={productOptions}
                    onChange={(opt) => {
                      field.onChange(opt);
                      setSelectedProducts(opt);
                    }}
                    placeholder="Select products"
                    isMulti
                    components={animatedComponents}
                    styles={selectStyles}
                  />
                )}
              />
            </FormField>
          </div>

          {/* Specification */}
          <div className="mb-3 sm:mb-3.5">
            <FormField label="Specification" error={errors.spec?.message}>
              <input
                {...register("spec")}
                type="text"
                placeholder="e.g. size, grade, model"
                className={inputClass}
              />
            </FormField>
          </div>

          {/* Row: Quantity + Pincode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-3 sm:mb-3.5">
            <FormField label="Quantity" required error={errors.quantity?.message}>
              <input
                {...register("quantity")}
                type="text"
                placeholder="e.g. 100 units"
                className={inputClass}
              />
            </FormField>

            <FormField label="Pincode" required error={errors.pincode?.message}>
              <input
                {...register("pincode")}
                type="text"
                placeholder="6-digit pincode"
                maxLength={6}
                inputMode="numeric"
                className={inputClass}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </FormField>
          </div>

          {/* Delivery Address */}
          <div className="mb-3 sm:mb-3.5">
            <FormField
              label="Delivery Address"
              required
              error={errors.addressDeliveryLocation?.message}
            >
              <div className="w-full border-2 border-gray-300 rounded-lg md:rounded-xl bg-white overflow-hidden focus-within:border-[#4A3772]">
                <textarea
                  {...register("addressDeliveryLocation")}
                  rows={2}
                  placeholder="Enter delivery address..."
                  className="w-full resize-none border-none outline-none p-2 sm:p-2.5 text-gray-700 text-xs sm:text-sm bg-transparent placeholder-gray-400"
                />
              </div>
            </FormField>
          </div>

          {/* Submit */}
          <div className="pt-1.5 sm:pt-2 md:pt-3">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-1.5 px-3 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-200 text-xs sm:text-sm md:text-base ${
                loading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#4A3772] hover:bg-[#3a2c5a] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Enquiry</span>
              )}
            </button>
          </div>
        </form>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          className: "text-xs sm:text-sm",
          duration: 5000,
          success: { duration: 3000 },
        }}
      />
    </div>
  );
}