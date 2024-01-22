import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-16 items-center relative overflow-hidden p-5 md:p-10  shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white text-secondary mt-6 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-lg:before:hidden ">
        <div>
          <h2 className="text-3xl text-secondary font-bold">Get In Touch</h2>
          <p className="text-lg md:text-base text-text-secondary mt-3 ">
            Ready to take your ventures sky-high with cutting-edge drone
            solutions? Connect with Maviyom Aviation Pvt. Ltd.
          </p>

          {/* Contact Form */}
          <ContactForm />

          <ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
            <li className="flex items-center hover:text-blue-500">
              <HiOutlineEnvelope className="text-xl " />
              <span  className="text-current lg:text-sm text-secondary ml-3">
                <strong>info@maviyom.com</strong>
              </span>
            </li>
            <li className="flex items-center text-current hover:text-blue-500">
              <IoCallOutline className="text-xl " />
              <span  className="text-current lg:text-sm text-secondary ml-3">
                <strong>(+91) 981 069 9680</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="hidden h-full w-full   lg:block  z-10">
          <img
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
