import Link from "next/link";
import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { MdArrowRight } from "react-icons/md";

const AboutHero = () => {
  return (
    <div className="flex flex-wrap flex-grow flex-shrink flex-auto  items-center pt-4 964Screen:pt-10 pb-10 964Screen:pb-20">
      <div
        className={`content 964Screen:w-1/2 964Screen:pr-[32px] lg:pr-[64px] xl:pr-[100px] flex flex-col
         
    
    `}
      >
        <h4 className="relative uppercase text-base text-primary font-semibold tracking-[0.3px] mb-2 964Screen:mb-4">
          About Company
        </h4>
        <h2
          className={` relative text-3xl 964Screen:text-4xl lg:text-4xl  xl:text-5xl font-deca capitalize font-semibold leading-10 964Screen:leading-[54px]  tracking-[-.92px] text-[#1b243f] mb-3 964Screen:mb-5
          
    `}
        >
          Maviyom Aviation: Elevating Innovation
        </h2>
        <p
          className={` text-gray-800 pb-5 text-lg xs:text-lg md:text-base
            `}
        >
          At Maviyom Aviation, we are committed to transcending the ordinary.
          Our aim is not merely to provide efficient and effective services but
          to do so with elegance and precision, ensuring an unparalleled
          experience for our clients.
        </p>

        <ul className=" flex flex-col gap-3 ">
          <li className="flex    gap-3 ">
            <span className="border-t-2 border-transparent">
              <HiCheckBadge size={24} className=" fill-primary " />
            </span>
            <span className="font-medium text-[#0f110f] text-lg 964Screen:text-base  font-poppins ">
              Forefront of Drone Innovation
            </span>
          </li>

          <li className="flex    gap-3 ">
            <span className="border-t-2 border-transparent">
              <HiCheckBadge size={24} className="fill-primary " />
            </span>
            <span className="font-medium text-[#0f110f] text-lg 964Screen:text-base  font-poppins ">
              Revolutionizing Industries
            </span>
          </li>
          <li className="flex   gap-3 ">
            <span className="border-t-2 border-transparent">
              <HiCheckBadge size={24} className="fill-primary  " />
            </span>
            <span className="font-medium text-[#0f110f] text-lg 964Screen:text-base  font-poppins ">
              Global Ambition in Drone Excellence
            </span>
          </li>
        </ul>
        <div className="mt-6">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center   text-white bg-[#0D0C22]  px-6 py-3  964Screen:px-[1.875rem] 964Screen:py-4 rounded-[30px] hover:opacity-90 active:opacity-90"
          >
            <span className="whitespace-nowrap tracking-widest capitalize text-sm font-semibold">
              Discover More
            </span>

            <span className="text-xl">
              <MdArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="hidden 964Screen:block 964Screen:w-1/2">
        <div className="img-container  w-full h-[300px]  964Screen:h-[400px] xl:h-[444px] max-w-[728px] border-4 border-white overflow-hidden rounded-2xl">
          <img
            src="/about-hero-img.webp"
            alt="deigns"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
