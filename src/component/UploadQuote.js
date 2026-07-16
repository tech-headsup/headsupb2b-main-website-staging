import React, { useState } from "react";
import { Upload } from "lucide-react";
import FormField from "./Form/FormField";
import { getDemoPhone } from "@/Utils/demoDefaults";

const UploadQuote = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState(getDemoPhone());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors({ ...errors, name: "" });
    }
  };

  const handleContactChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setContactNo(value);
    if (errors.contactNo) {
      setErrors({ ...errors, contactNo: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!contactNo) {
      newErrors.contactNo = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(contactNo)) {
      newErrors.contactNo = "Invalid contact number";
    }

    if (!selectedFile) {
      newErrors.file = "Please select a file to upload";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendUploadQuoteMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contactNo,
          message: note,
          fileName: selectedFile?.name || "",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Quote uploaded successfully!");
        setSelectedFile(null);
        setNote("");
        setName("");
        setContactNo("");
        setErrors({});
      } else {
        throw new Error(result.error || "Failed to upload quote");
      }
    } catch (error) {
      console.error("Error uploading quote:", error);
      alert(`Error uploading quote: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUploadFileClick = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl w-full">
      {/* Form Content */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-3.5 md:space-y-4">
        {/* Name Field */}
        <FormField label="Name" required error={errors.name}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* Contact Number Field */}
        <FormField
          label="Contact Number"
          required
          error={errors.contactNo}
        >
          <input
            type="text"
            value={contactNo}
            onChange={handleContactChange}
            placeholder="10-digit number"
            inputMode="numeric"
            maxLength={10}
            className="w-full px-2.5 py-1 border-2 border-gray-300 mt-2 rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors outline-none placeholder:text-sm"
          />
        </FormField>

        {/* File Upload Section */}
        <div className="space-y-1.5 sm:space-y-2">
          <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900">
            Attach Quotation <span className="text-red-500">*</span>
          </label>
          <div
            className={`w-full p-2.5 sm:p-3 md:p-4 border-2 border-dashed ${
              errors.file ? "border-red-500" : "border-gray-300"
            } rounded-lg md:rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center gap-1.5 sm:gap-2 cursor-pointer transition-colors`}
            onClick={handleUploadFileClick}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => e.key === "Enter" && handleUploadFileClick()}
          >
            <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
            <span className="text-gray-600 text-xs sm:text-xs md:text-sm truncate">
              {selectedFile ? selectedFile.name : "Select file"}
            </span>
          </div>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="hidden"
            aria-label="File upload"
          />
          {errors.file && (
            <p className="text-red-500 text-[9px] sm:text-xs mt-1">
              {errors.file}
            </p>
          )}
          <p className="text-[9px] sm:text-xs text-gray-500">
            PDF, DOC, DOCX, JPG, PNG
          </p>
        </div>

        {/* Notes Section */}
        <div className="space-y-1.5 sm:space-y-2">
          <label className="block text-xs sm:text-sm md:text-base font-semibold text-gray-900">
            Requirements (Optional)
          </label>
          <div className="w-full border-2 border-gray-300 rounded-lg md:rounded-xl bg-white overflow-hidden">
            <textarea
              value={note}
              onChange={handleNoteChange}
              rows="2"
              className="w-full resize-none border-none outline-none p-2 sm:p-2.5 md:p-3 text-gray-700 text-xs sm:text-xs md:text-sm bg-transparent placeholder-gray-400"
              placeholder="Add notes..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-1.5 sm:pt-2 md:pt-3">
          <button
            onClick={handleFormSubmit}
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-1.5 px-3 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm md:text-base ${
              isSubmitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-headupb2b hover:bg-headupb2b/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent"></div>
                <span>Uploading...</span>
              </>
            ) : (
              <span>Submit Quote</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadQuote;
