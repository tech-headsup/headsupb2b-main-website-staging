"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { isGadSourcePresent } from "@/Utils/urlHelpers";
import { getDemoPhone } from "@/Utils/demoDefaults";
import { addWebsiteLead } from "@/Contants/APIEndpoint";
import Ripples from "react-ripples";
import FormField from "./FormField";

export default function CreditForm({ close }) {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    contactNo: Yup.string()
      .required("Phone is required")
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
    email: Yup.string().email("Invalid email"),
    companyName: Yup.string().required("Company Name is required"),
    creditAmount: Yup.string().required("Required credit amount is required"),
    gstNumber: Yup.string(),
    requirement: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      contactNo: getDemoPhone(),
      companyName: "",
      creditAmount: "",
      gstNumber: "",
      requirement: "",
    },
  });

  const onSubmit = (data) => {
    const gadSourceValue = isGadSourcePresent();
    const formattedData = {
      ...data,
      adsSource: gadSourceValue ? "Ads Lead" : "Organic Lead",
    };

    setLoading(true);

    fetch(addWebsiteLead, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedData),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error(`CRM API failed: ${res.status}`);
      })
      .then(() => {
        return fetch("/api/sendCreditMail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedData),
        });
      })
      .then((res) => res.json())
      .then(() => {
        reset();
        setLoading(false);
        toast.success("Lead saved & mail sent ✅");
        close?.();
        Router.push("/thank-you");
      })
      .catch((err) => {
        toast.error(`Something went wrong: ${err.message}`);
        setLoading(false);
      });
  };

  return (
    <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
        {/* Name */}
        <FormField label="Name" required error={errors.name?.message}>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Contact Number */}
        <FormField
          label="Contact Number"
          required
          error={errors.contactNo?.message}
        >
          <input
            type="tel"
            placeholder="10-digit number"
            inputMode="numeric"
            maxLength={10}
            {...register("contactNo")}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Email */}
        <FormField label="Email" error={errors.email?.message}>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Company Name */}
        <FormField required label="Company Name">
          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyName")}
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Credit Amount and GST Number in same row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Required Credit Amount */}
          <FormField
            label="Required Credit Amount"
            required
            error={errors.creditAmount?.message}
          >
            <select
              {...register("creditAmount")}
              className="w-full px-2.5 py-1.5 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors outline-none text-sm"
            >
              <option value="">Select credit amount</option>
              <option value="5 Lacs to 50 Lacs">5 Lacs to 50 Lacs</option>
              <option value="50 Lacs to 1 CR">50 Lacs to 1 CR</option>
              <option value="1 CR to 5 CR">1 CR to 5 CR</option>
              <option value="More than 5 CR">More than 5 CR</option>
            </select>
          </FormField>

          {/* GST Number */}
          <FormField label="GST Number (Optional)">
            <input
              type="text"  
              placeholder="Enter GST number"
              {...register("gstNumber")}
              className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
            />
          </FormField>
        </div>

        {/* Requirement */}
        <FormField label="Your Requirement (Optional)">
          <div className="w-full border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 overflow-hidden transition-colors">
            <textarea
              placeholder="Enter your requirement"
              {...register("requirement")}
              rows="3"
              className="w-full resize-none border-none outline-none px-2.5 py-1 text-gray-700 text-sm bg-transparent placeholder-gray-400 placeholder:text-sm"
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
