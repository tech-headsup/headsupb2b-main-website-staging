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

export default function CommonFormForHomeBackup({
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

  const animatedComponents = makeAnimated();

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    contactNo: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]{10}$/, "Invalid contact number"),
    email: Yup.string()
      .email("Invalid email"),
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
  const [hasGst, setHasGst] = useState(null);

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
    <div className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 w-full gap-x-2 gap-y-1 sm:gap-y-1.5">
          {/* Name Field */}
          <div className="my-0 sm:my-0.5">
            <input
              {...register("name")}
              type="text"
              placeholder="Name*"
              className="outline-none rounded-lg text-black text-xs sm:text-sm w-full px-2 sm:px-2.5 py-2 border border-[#B6B6B6] font-medium placeholder:text-[10px] sm:placeholder:text-xs placeholder:font-medium placeholder:text-gray-500"
            />
            {errors.name && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Contact Number Field */}
          <div className="my-0 sm:my-0.5">
            <input
              {...register("contactNo")}
              maxLength={10}
              type="text"
              placeholder="Contact*"
              className="outline-none rounded-lg text-black text-xs sm:text-sm w-full px-2 sm:px-2.5 py-2 border border-[#B6B6B6] font-medium placeholder:text-[10px] sm:placeholder:text-xs placeholder:font-medium placeholder:text-gray-500"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
            {errors.contactNo && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.contactNo.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="my-0 sm:my-0.5">
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="outline-none rounded-lg text-black text-xs sm:text-sm w-full px-2 sm:px-2.5 py-2 border border-[#B6B6B6] font-medium placeholder:text-[10px] sm:placeholder:text-xs placeholder:font-medium placeholder:text-gray-500"
            />
            {errors.email && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Category Select */}
          <div className="my-0 sm:my-0.5">
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
                  placeholder={
                    <div className="text-gray-500 text-[10px] sm:text-xs font-medium">
                      Category*
                    </div>
                  }
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "#C5B8E8",
                      minHeight: "40px",
                      height: "auto",
                      borderRadius: "0.5rem",
                      fontSize: "0.8rem",
                      fontWeight: "400",
                      padding: "0px",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                      textTransform: "capitalize",
                      padding: "2px 0",
                    }),
                    option: (
                      styles,
                      { data, isDisabled, isFocused, isSelected }
                    ) => {
                      const blue = "#4A3772";
                      return {
                        ...styles,
                        backgroundColor: isFocused ? blue : "white",
                        color: isFocused ? "white" : "black",
                        textTransform: "capitalize",
                        fontSize: "0.8rem",
                        padding: "4px 8px",
                      };
                    },
                  }}
                />
              )}
            />
            {errors.category && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.category.message}
              </span>
            )}
          </div>

          {/* Product Select */}
          <div className="my-0 sm:my-0.5">
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
                  placeholder={
                    <div className="text-gray-500 text-[10px] sm:text-xs font-medium">
                      Products*
                    </div>
                  }
                  isMulti
                  components={animatedComponents}
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: "#C5B8E8",
                      minHeight: "40px",
                      height: "auto",
                      borderRadius: "0.5rem",
                      fontSize: "0.8rem",
                      padding: "0px",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                      backgroundColor: "white",
                      padding: "2px 0",
                    }),
                    option: (
                      styles,
                      { data, isDisabled, isFocused, isSelected }
                    ) => {
                      const blue = "#4A3772";
                      return {
                        ...styles,
                        backgroundColor: isFocused ? blue : "white",
                        color: isFocused ? "white" : "black",
                        fontSize: "0.8rem",
                        padding: "4px 8px",
                      };
                    },
                  }}
                />
              )}
            />
            {errors.product && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.product.message}
              </span>
            )}
          </div>

          {/* Specification Field */}
          <div className="my-0 sm:my-0.5">
            <input
              {...register("spec")}
              type="text"
              placeholder="Specification"
              className="outline-none rounded-lg text-black text-xs sm:text-sm w-full px-2 sm:px-2.5 py-2 border border-[#B6B6B6] font-medium placeholder:text-[10px] sm:placeholder:text-xs placeholder:font-medium placeholder:text-gray-500"
            />
            {errors.spec && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.spec.message}
              </span>
            )}
          </div>

          {/* Quantity Field */}
          <div className="my-0 sm:my-0.5">
            <input
              {...register("quantity")}
              type="text"
              placeholder="Quantity*"
              className="outline-none rounded-lg text-black text-xs sm:text-sm w-full px-2 sm:px-2.5 py-2 border border-[#B6B6B6] font-medium placeholder:text-[10px] sm:placeholder:text-xs placeholder:font-medium placeholder:text-gray-500"
            />
            {errors.quantity && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.quantity.message}
              </span>
            )}
          </div>

          {/* Delivery Address Field */}
          <div className="my-0 sm:my-0.5">
            <input
              {...register("addressDeliveryLocation")}
              type="text"
              placeholder="Delivery Address*"
              className="outline-none rounded-lg text-black text-xs sm:text-sm w-full px-2 sm:px-2.5 py-2 border border-[#B6B6B6] font-medium placeholder:text-[10px] sm:placeholder:text-xs placeholder:font-medium placeholder:text-gray-500"
            />
            {errors.addressDeliveryLocation && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.addressDeliveryLocation.message}
              </span>
            )}
          </div>

          {/* Pincode Field */}
          <div className="my-0 sm:my-0.5 col-span-2">
            <input
              {...register("pincode")}
              type="text"
              placeholder="Pincode*"
              className="outline-none rounded-lg text-black text-xs sm:text-sm w-full px-2 sm:px-2.5 py-2 border border-[#B6B6B6] font-medium placeholder:text-[10px] sm:placeholder:text-xs placeholder:font-medium placeholder:text-gray-500"
            />
            {errors.pincode && (
              <span className="text-red-500 text-[9px] sm:text-[10px]">
                {errors.pincode.message}
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-3 sm:mt-4">
          <Ripples>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#80EBF7] font-bold text-[#4A3772] text-base sm:text-base px-4 sm:px-8 py-3 sm:py-3 md:py-3 tracking-wider rounded-lg hover:text-white hover:bg-[#4A3772] transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {messageSent && <div id="messageSent"></div>}
          </Ripples>
        </div>
      </form>

      <Toaster
        position="top-center"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "text-xs sm:text-sm",
          duration: 7000,
          style: {},
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "5E3F99",
            },
          },
        }}
      />
    </div>
  );
}