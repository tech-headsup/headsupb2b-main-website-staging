import React, { useState } from "react";
import { Download } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Ripples from "react-ripples";
import FormField from "./Form/FormField";
import { getDemoPhone } from "@/Utils/demoDefaults";

const DownloadBrochure = ({ cataloguePdfURL, categoryName, onClose }) => {
  const [formData, setFormData] = useState({ name: "", contact: getDemoPhone() });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendBrochureMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          contactNo: formData.contact.trim(),
          categoryName: categoryName || "",
          cataloguePdfURL: cataloguePdfURL || "",
        }),
      });

      if (!response.ok) throw new Error("Failed to send email");

      await response.json();
      await handleDownload();

      onClose();
      setFormData({ name: "", contact: "" });

      toast.success(
        "Lead saved and mail sent successfully. Thanks for downloading the brochure — happy exploring!",
        { duration: 5000 }
      );
    } catch (error) {
      toast.error(`Something went wrong: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async () => {
    if (cataloguePdfURL) {
      const link = document.createElement("a");
      link.href = cataloguePdfURL;
      link.download = `${categoryName || "category"}-brochure.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      {/* Form content */}
      <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl w-full shadow-2xl">
        <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
          {/* Name field */}
          <FormField
            label="Name"
            required
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
              className="w-full p-2.5 sm:p-3 md:p-4 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none"
            />
          </FormField>

          {/* Contact field */}
          <FormField
            label="Contact Number"
            required
          >
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              placeholder="Enter your contact number"
              inputMode="numeric"
              className="w-full p-2.5 sm:p-3 md:p-4 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              maxLength={10}
            />
          </FormField>

          {/* Submit button */}
          <div className="pt-2 w-full">
            <Ripples>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-b from-[#402A6F] to-[#4A3772] text-white px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm tracking-wider rounded-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </>
                )}
              </button>
            </Ripples>
          </div>
        </form>
      </div>

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: { fontSize: "0.875rem" },
        }}
      />
    </>
  );
};

export default DownloadBrochure;
