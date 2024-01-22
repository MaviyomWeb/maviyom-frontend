"use client";

import axios from "axios";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import Input from "./Input";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    organizationName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateConfig = {
    fullName: [{ required: true, message: "Please enter your Name" }],
    phoneNumber: [
      { required: true, message: "Please enter your Number" },
      {
        pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
        message: "Please enter a valid number",
      },
    ],
    email: [
      { required: true, message: "Please enter your Mail Id" },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Please enter a valid email address",
      },
    ],
  };

  const validate = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      // Check if there is a validation configuration for the current key
      if (validateConfig[key]) {
        validateConfig[key].some((rule) => {
          if (rule.required && !value) {
            errorData[key] = rule.message;
            return true;
          }

          if (rule.pattern && !rule.pattern.test(value)) {
            errorData[key] = rule.message;
            return true;
          }

          return false;
        });
      }
    });

    setErrors(errorData);

    return errorData;
  };

  const notify = () => {
    toast.success("Message sent successfully!", {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateResult = validate(contactDetails);

    if (Object.keys(validateResult).length) return;

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const data = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      template_params: {
        from_name: contactDetails.fullName,
        from_email: contactDetails.email,
        from_organization: contactDetails.organizationName,
        from_phoneNumber: contactDetails.phoneNumber,
        to_name: "Akshay Verma",
        message: contactDetails.message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );

      notify();

      // After Sending Message successfully
      setContactDetails({
        fullName: "",
        email: "",
        phoneNumber: "",
        organizationName: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5 mt-8">
        <Input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          value={contactDetails.fullName}
          onChange={handleInput}
          error={errors.fullName}
        />

        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={contactDetails.email}
          onChange={handleInput}
          error={errors.email}
        />

        <Input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          value={contactDetails.phoneNumber}
          onChange={handleInput}
          error={errors.phoneNumber}
        />

        <Input
          type="text"
          name="organizationName"
          id="organizationName"
          placeholder="Organization Name"
          value={contactDetails.organizationName}
          onChange={handleInput}
        />

        <textarea
          name="message"
          value={contactDetails.message}
          onChange={handleInput}
          placeholder="Message"
          className="flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
          cols={3}
        ></textarea>
      </div>
      <button
        type="submit"
        className="mt-8 flex items-center justify-center md:text-sm w-full rounded px-4 py-2.5 font-semibold bg-secondary text-white hover:opacity-90 "
      >
        Reach Out Now
        <IoIosSend className="text-xl fill-white ml-2" />
      </button>
      <ToastContainer />
    </form>
  );
};

export default ContactForm;
