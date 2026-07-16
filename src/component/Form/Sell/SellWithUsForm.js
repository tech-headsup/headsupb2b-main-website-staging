import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import Ripples from "react-ripples";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { getDemoPhone } from "@/Utils/demoDefaults";
import FormField from "../FormField";

export default function SellWithUsForm({
  setShow,
  categoryProductOptions,
  className,
}) {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);
  const selectRef = useRef(null);

  const categoryOptions = categoryProductOptions || [];

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    contactNo: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]{10}$/, "Invalid contact number"),
    email: Yup.string()
      .email("Invalid email"),
    category: Yup.object()
      .nullable()
      .required("Please select a category"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message cannot exceed 500 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      contactNo: getDemoPhone(),
      email: "",
      category: null,
      message: "",
    },
  });

  const onSubmit = (data) => {
    const formattedData = {
      name: data.name,
      contactNo: data.contactNo,
      email: data.email,
      category: data.category?.value || "",
      message: data.message || "",
      source: "Sell With Us",
    };

    setLoading(true);

    fetch("/api/sendWebsiteLeadMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formattedData,
        adsSource: "Organic Lead",
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(`API failed with status: ${response.status}`);
        }
      })
      .then((emailData) => {
        reset();
        setLoading(false);
        toast.success("Thank you! We'll contact you soon.");
        setShow?.(false);
        selectRef.current?.clearValue();
        Router.push("/thank-you");
      })
      .catch((error) => {
        console.error("API Error:", error);
        toast.error(`Something went wrong: ${error.message}`);
        setLoading(false);
      });
  };

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
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            maxLength={10}
          />
        </FormField>

        {/* Email Field */}
        <FormField
          label="Email"
          error={errors.email?.message}
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Category Field */}
        <FormField
          label="Select Category"
          required
          error={errors.category?.message}
        >
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                ref={selectRef}
                options={[
                  ...(categoryOptions || []),
                  { value: "other", label: "Other" },
                ]}
                onChange={(selected) => {
                  field.onChange(selected);
                }}
                placeholder="Select category"
                styles={selectStyles}
                classNamePrefix="react-select"
              />
            )}
          />
        </FormField>

        {/* Message Field */}
        <FormField
          label="Message (Optional)"
          error={errors.message?.message}
        >
          <div className="w-full border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 overflow-hidden transition-colors">
            <textarea
              {...register("message")}
              rows="3"
              className="w-full resize-none border-none outline-none px-2.5 py-1 text-gray-700 text-sm bg-transparent placeholder-gray-400 placeholder:text-sm"
              placeholder="Add notes..."
              maxLength={500}
            />
          </div>
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