import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import getProductOptions, {
  getCategoryOptions,
} from "@/Contants/Functions/getProductOptions";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import Ripples from "react-ripples";
import * as Yup from "yup";
import makeAnimated from "react-select/animated";
import { useRouter } from "next/router";
import { isGadSourcePresent } from "@/Utils/urlHelpers";
import { addWebsiteLead } from "@/Contants/APIEndpoint";
import { getDemoPhone } from "@/Utils/demoDefaults";
import FormField from "./FormField";

// Select Styles - matching CommonForm
const selectStyles = {
  control: (base, state) => ({
    ...base,
    paddingLeft: "0.625rem",
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
    }
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
  singleValue: (base) => ({
    ...base,
    fontSize: "0.875rem",
    color: "#111827",
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
  }),
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

export default function CommonFormForHome({
  setShow,
  setShowAnimationBuy,
  setShowAnimationSell,
  categoryName,
  productName,
  categorySlug,
  productSlug,
  type,
  show = true,
  initialData,
  categoryProductOptions,
}) {
  const Router = useRouter();

  const selectedCategoryName = categoryName !== undefined ? categoryName : "";
  const selectedProduct =
    productName?.categoryName !== undefined ? productName?.categoryName : "";
  const categoryOptions = categoryProductOptions;

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
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { contactNo: getDemoPhone() },
  });

  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productOptions, setProductOptions] = useState(
    categorySlug ? getProductOptions(categorySlug, initialData) : []
  );
  const [messageSent, setMessageSent] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    if (selectedCategoryName && selectedCategory === null) {
      const defaultCategory = categoryOptions?.find(
        (option) => option?.value === categorySlug
      );

      if (defaultCategory) {
        setSelectedCategory(defaultCategory);
        setValue("category", defaultCategory);
      }
    }
  }, [selectedCategory, setValue, categoryOptions]);

  useEffect(() => {
    if (selectedCategory) {
      const category = selectedCategory;
      setProductOptions(category?.products);
      setValue("product", []);
    }
  }, [selectedCategory, setValue, initialData]);

  useEffect(() => {
    if (productOptions?.length > 0 && selectedProduct) {
      const defaultProduct = productOptions?.find(
        (option) =>
          option?.label?.toLowerCase() === selectedProduct?.toLowerCase()
      );
      if (defaultProduct) {
        setSelectedProducts([defaultProduct]);
        setValue("product", [defaultProduct]);
      }
    }
  }, [productOptions, selectedProduct, setValue]);

  const onSubmit = (data) => {
    const gadSourceValue = isGadSourcePresent();
    
    if (data?.category) {
      data.category = data?.category?.value;
    }
    if (data?.product && data?.product?.length > 0) {
      data.product = data?.product?.map((product) => product?.value).join(", ");
    }

    data.adsSource = gadSourceValue ? "Ads Lead" : "Organic Lead";
    setLoading(true);

    fetch(addWebsiteLead, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`CRM API failed with status: ${response.status}`);
        }
      })
      .then((crmResponse) => {
        return fetch("/api/sendWebsiteLeadMail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: Router?.asPath || "" }),
        });
      })
      .then((emailResponse) => emailResponse.json())
      .then((emailData) => {
        reset();
        setLoading(false);
        setSelectedProducts([]);
        setSelectedCategory(null);
        toast.success("Lead saved and mail sent successfully");
        setShow?.("");
        selectRef.current?.clearValue();

        if (type === "buy") {
          setShowAnimationBuy?.(true);
          setShowAnimationSell?.(false);
        } else if (type === "sell") {
          setShowAnimationSell?.(true);
          setShowAnimationBuy?.(false);
        }

        setMessageSent(true);
        Router.push("/thank-you");
      })
      .catch((error) => {
        console.error("API Error:", error);
        toast.error(`Something went wrong: ${error.message}`);
        setLoading(false);
      });
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl w-full">
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

        {/* Email Field */}
        <FormField
          label="Email"
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            type="text"
            placeholder="Enter your email"
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
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
                  options={categoryOptions}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption);
                    handleCategoryChange(selectedOption);
                  }}
                  defaultValue={categoryOptions?.find(
                    (option) => option?.value === categorySlug
                  )}
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
                  ref={selectRef}
                  options={productOptions}
                  onChange={(selectedOption) => {
                    field.onChange(selectedOption);
                    setSelectedProducts(selectedOption);
                  }}
                  placeholder="Select products"
                  isMulti
                  components={animatedComponents}
                  isDisabled={!selectedCategory || productOptions.length === 0}
                  styles={selectStyles}
                  classNamePrefix="react-select"
                />
              )}
            />
          </FormField>
        </div>

        {/* Specification Field */}
        <FormField
          label="Specification"
          error={errors.spec?.message}
        >
          <input
            {...register("spec")}
            type="text"
            placeholder="Enter specification"
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Quantity Field */}
        <FormField
          label="Quantity"
          required
          error={errors.quantity?.message}
        >
          <input
            {...register("quantity")}
            type="text"
            placeholder="Enter quantity"
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Delivery Address Field */}
        <FormField
          label="Delivery Address"
          required
          error={errors.addressDeliveryLocation?.message}
        >
          <input
            {...register("addressDeliveryLocation")}
            type="text"
            placeholder="Enter delivery address"
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

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