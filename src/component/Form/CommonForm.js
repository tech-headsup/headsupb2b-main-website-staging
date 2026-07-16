import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Ripples from "react-ripples";
import { isGadSourcePresent } from "@/Utils/urlHelpers";
import { getDemoPhone } from "@/Utils/demoDefaults";
import { addWebsiteLead } from "@/Contants/APIEndpoint";
import FormField from "./FormField";

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contactNo: Yup.string()
    .required("Contact number is required")
    .matches(/^[0-9]{10}$/, "Invalid contact number"),
  email: Yup.string().email("Invalid email"),
  category: Yup.object().required("Please select a category"),
  product: Yup.array().of(Yup.object()).required("Please select a product"),
  gstNumber: Yup.string().when("hasGst", {
    is: true,
    then: Yup.string().matches(/^\d{15}$/, "Invalid GST number"),
  }),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^[1-9][0-9]{5}$/, "Invalid pincode"),
});

// Select Styles
const selectStyles = {
  control: (base, state) => ({
    ...base,
    // padding: "0.625rem",
    paddingLeft:"0.625rem",
    // height:"38px",
    border: "2px solid #d1d5db",
    borderColor: state.isFocused ? "#d1d5db" : "#d1d5db",
    marginTop: "0.5rem",
    borderRadius: "0.75rem",
    backgroundColor: "#f9fafb",
    minHeight: "auto",
    fontSize: "0.875rem",
    outline: "none",
    boxShadow: "none",
    transition: "background-color 0.2s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f3f4f6",
    },
    "&:focus": {
      borderColor: "#d1d5db",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0",
  }),
  input: (base) => ({
    ...base,
    margin: "0",
    padding: "0",
  }),
  indicatorsContainer: (base) => ({
    ...base,
    paddingRight: "4px",
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "0.875rem",
    padding: "8px 12px",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#4A3772"
      : state.isFocused
      ? "#f3f4f6"
      : "white",
    color: state.isSelected ? "white" : "#111827",
  }),
  // Ensure full text shows for single value (when not multi)
  singleValue: (base) => ({
    ...base,
    fontSize: "0.875rem",
    color: "#111827",
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
  }),
  // Ensure full text shows for multi values (chips)
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#e5e7eb",
    borderRadius: "0.375rem",
  }),
  multiValueLabel: (base) => ({
    ...base,
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
  }),
};

const animatedComponents = makeAnimated();

export default function CommonForm({
  setShow,
  setShowAnimationBuy,
  setShowAnimationSell,
  categoryName,
  productName,
  categorySlug,
  productSlug,
  categoryProductOptions,
}) {
  const router = useRouter();
  const selectRef = useRef(null);

  // State Management
  const [loading, setLoading] = useState(false);
  const [hasGst, setHasGst] = useState(null);

  // Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      contactNo: getDemoPhone(),
      email: "",
      category: null,
      product: [],
      gstNumber: "",
      pincode: "",
    },
  });

  const selectedCategory = watch("category");
  const selectedProducts = watch("product");

  // Memoized initial category
  const initialCategory = useMemo(
    () =>
      categoryProductOptions?.find(
        (option) => option.value === categoryName
      ) || null,
    [categoryName, categoryProductOptions]
  );

  // Memoized category options with "Other"
  const categoryOptionsWithOther = useMemo(
    () => [...(categoryProductOptions || []), { value: "other", label: "Other" }],
    [categoryProductOptions]
  );

  // Get product options for current category
  const currentProductOptions = useMemo(() => {
    if (!selectedCategory) return [];
    return selectedCategory.value === "other"
      ? [{ value: "other", label: "Other" }]
      : selectedCategory.products || [];
  }, [selectedCategory]);

  // Set initial category
  useEffect(() => {
    if (initialCategory) {
      setValue("category", initialCategory);
    } else if (categorySlug) {
      const defaultCategory = categoryProductOptions?.find(
        (option) => option.value === categorySlug
      );
      if (defaultCategory) {
        setValue("category", defaultCategory);
      }
    }
  }, [categorySlug, initialCategory, categoryProductOptions, setValue]);

  // Set initial products
  useEffect(() => {
    if (currentProductOptions.length === 0) return;

    let defaultProducts = [];

    // Try matching by productName
    if (productName) {
      defaultProducts = currentProductOptions.filter(
        (option) => option.label === productName
      );
    }

    // Fallback to productSlug
    if (defaultProducts.length === 0 && productSlug) {
      defaultProducts = currentProductOptions.filter((option) =>
        productSlug.includes(option.value)
      );
    }

    if (defaultProducts.length > 0) {
      setValue("product", defaultProducts);
    }
  }, [currentProductOptions, productName, productSlug, setValue]);

  // Handle category change
  const handleCategoryChange = useCallback(
    (selected) => {
      setValue("category", selected);
      setValue(
        "product",
        selected?.value === "other"
          ? [{ value: "other", label: "Other" }]
          : []
      );
    },
    [setValue]
  );

  // Centralized API call
  const makeApiCall = useCallback(
    async (url, data) => {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API failed with status: ${response.status}`);
      }

      return response.json();
    },
    []
  );

  // Handle form submission
  const onSubmit = useCallback(
    async (data) => {
      setLoading(true);

      try {
        const formattedData = {
          ...data,
          category: data.category?.value || "",
          adsSource: isGadSourcePresent() ? "Ads Lead" : "Organic Lead",
          product: data.product?.some((p) => p.value === "other")
            ? "Other"
            : data.product?.map((p) => p.value).join(", ") || "",
        };

        await makeApiCall(addWebsiteLead, formattedData);

        // Mailer notification (mailer-service template)
        await makeApiCall("/api/sendWebsiteLeadMail", {
          ...formattedData,
          source: router?.asPath || "",
        });

        reset();
        toast.success("Lead saved and mail sent successfully");
        if (typeof setShow === "function") setShow("");
        selectRef.current?.clearValue();
        if (typeof setShowAnimationBuy === "function") setShowAnimationBuy(true);
        if (typeof setShowAnimationSell === "function") setShowAnimationSell(true);
        router.push("/thank-you");
      } catch (error) {
        console.error("API Error:", error);
        toast.error(`Something went wrong: ${error.message}`);
      } finally {
        setLoading(false);
      }
    },
    [
      reset,
      setShow,
      setShowAnimationBuy,
      setShowAnimationSell,
      router,
      makeApiCall,
    ]
  );

  return (
    <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl w-full shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
        {/* Name Field */}
        <FormField
          label="Name"
          required
          error={errors.name?.message}
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Enter your name"
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Contact Number Field */}
        <FormField
          label="Contact Number"
          required
          error={errors.contactNo?.message}
        >
          <input
            {...register("contactNo")}
            type="text"
            placeholder="10-digit number"
            inputMode="numeric"
            maxLength={10}
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          />
        </FormField>

        {/* Category and Product */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          {/* Category Dropdown */}
          <FormField
            required
            label="Select Category"
            error={errors.category?.message}
          >
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  ref={selectRef}
                  options={categoryOptionsWithOther}
                  onChange={handleCategoryChange}
                  placeholder="Select category"
                  styles={selectStyles}
                  classNamePrefix="react-select"
                />
              )}
            />
          </FormField>

          {/* Product Dropdown */}
          <FormField
            required
            label="Select Product"
            error={errors.product?.message}
          >
            <Controller
              name="product"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={currentProductOptions}
                  value={field.value}
                  isMulti={selectedProducts?.[0]?.value !== "other"}
                  components={animatedComponents}
                  onChange={(selected) => field.onChange(selected)}
                  placeholder="Select products"
                  isDisabled={!selectedCategory || currentProductOptions.length === 0}
                  styles={selectStyles}
                  classNamePrefix="react-select"
                />
              )}
            />
          </FormField>
        </div>

        {/* GST Question */}
        <div className="w-full pt-1">
          <label className="text-sm font-semibold block mb-2">
            Do you have a GST number?
          </label>
          <div className="flex gap-2 sm:gap-3">
            {[true, false].map((value) => (
              <button
                key={value}
                type="button"
                className={`flex-1 px-2.5 py-3 text-sm font-medium rounded-xl transition-colors ${
                  hasGst === value
                    ? "bg-[#4A3772] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setHasGst(value)}
              >
                {value ? "Yes" : "No"}
              </button>
            ))}
          </div>
        </div>

        {/* GST Number Input */}
        {hasGst === true && (
          <FormField
            label="GST Number"
            error={errors.gstNumber?.message}
            animated
          >
            <Controller
              name="gstNumber"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter 15-digit GST number"
                  inputMode="numeric"
                  className="w-full px-2.5 py-1 text-xs sm:text-sm border border-gray-300 rounded focus:border-[#4A3772] focus:ring-1 focus:ring-[#4A3772]"
                />
              )}
            />
          </FormField>
        )}

        {/* GST Status Message */}
        {hasGst === false && (
          <div className="w-full p-2.5 sm:p-3 bg-blue-50 rounded animate-fadeIn">
            <label className="text-xs sm:text-sm font-semibold block mb-1">
              GST Status
            </label>
            <p className="text-gray-700 text-xs sm:text-sm">
              You have indicated that you don't have a GST number.
            </p>
          </div>
        )}

        {/* Pincode Field */}
        <FormField
          label="Pincode"
          required
          error={errors.pincode?.message}
        >
          <input
            {...register("pincode")}
            type="text"
            placeholder="6-digit pincode"
            inputMode="numeric"
            maxLength={6}
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
          />
        </FormField>

        {/* Submit Button */}
        <div className="pt-2 w-full">
          <Ripples>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-b from-[#402A6F] to-[#4A3772] text-white px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm tracking-wider rounded-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </Ripples>
        </div>
      </form>

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: { fontSize: "0.875rem" },
        }}
      />
    </div>
  );
}
