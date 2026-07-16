import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { getDemoPhone } from "@/Utils/demoDefaults";
const SEND_MAIL_ENDPOINT = "/api/sendMail";
// Define schema using yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  contactNo: yup
    .string()
    .required("Contact number is required")
    .matches(/^[0-9]{10}$/, "Invalid contact number"),
  email: yup.string().email("Invalid email"),
});

export default function GetInTouch() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { contactNo: getDemoPhone() },
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = async (formData) => {

    const enhancedFormData = {
      ...formData,
      source: router.asPath, // Add the page source as its own field
      adsSource: "Organic Lead",
    };
    setLoading(true);
    try {
      const response = await fetch(SEND_MAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enhancedFormData),
      });
      const data = await response.json();
      if (data.success) {
        setMessageSent(true);
        reset();
        router.push("/thank-you");
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className=" bg-headupb2b rounded-xl mt-6 p-4 ">
      <div className="bg-[#8c6ec4] p-6 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h2 className={`text-2xl text-white text-center font-semibold`}>
              Get In Touch
            </h2>
          </div>
          <div className="rounded-xl">
            <div className="my-3">
              <input
                {...register("name")}
                placeholder="Name*"
                className="bg-transparent text-white placeholder:text-white placehoder:px-[-4px] w-full border-b mb-2 outline-none"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="my-3">
              <input
                {...register("contactNo")}
                placeholder="Contact No*"
                className="bg-transparent text-white placeholder:text-white placehoder:px-[-4px] w-full border-b mb-2 outline-none"
              />
              {errors.contactNo && (
                <span className="text-red-500">{errors.contactNo.message}</span>
              )}
            </div>
            <div className="my-3">
              <input
                {...register("address")}
                placeholder="Address"
                className="bg-transparent text-white placeholder:text-white placehoder:px-[-4px] w-full border-b mb-2 outline-none"
              />
            </div>
            <div className="my-3">
              <input
                {...register("email")}
                placeholder="Email"
                className="bg-transparent text-white placeholder:text-white placehoder:px-[-4px] w-full border-b mb-2 outline-none"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="my-3">
              <h2 className={`text-lg text-white`}>Message</h2>
            </div>
            <textarea
              {...register("message")}
              className="bg-transparent text-white placeholder:text-white w-full border rounded-lg outline-none p-4"
              rows={3}
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-headupb2b py-2 px-8 font-medium text-xl rounded-md hover:scale-105 delay"
              >
                {loading ? "Sending..." : "Send"}
              </button>
              {messageSent && <div id="messageSent"></div>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
