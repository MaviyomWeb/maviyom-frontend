import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Container from "./Container";

import Link from "next/link";

const Test = () => {
  return (
    <section className="mt-5 md:mt-0 pb-10 md:pb-20 bg-white">
      <Container>
        <>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#152432] text-center font-semibold leading-[1.45]">
              Why Choose Maviyom
            </h2>
            <p className=" text-[#5d6165] text-center text-base leading-5 mt-2 ">
              Unmatched Aerial Excellence
            </p>

            <div className=" text-center">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>
            <div className="relative mt-4 md:mt-8 grid   max-w-[1250px] gap-2 md:gap-5  lg:mx-auto lg:grid-cols-2 lg:gap-40">
              <div className="content grid  gap-2 md:gap-5 pb-10 ">
                <h3 className="text-[26px]  md:text-3xl lg:text-4xl font-bold text-[#1b243f]">
                  Our Pledge: Exceptional Drones & Expertise
                </h3>
                <p className="text-lg md:text-base my-2 md:my-0 text-gray-600  ">
                  At Maviyom Aviation, we're elevating drone technology new
                  heights with relentless innovation and unwavering quality. We
                  design specialized solutions for diverse sectors, integrating
                  an eco-friendly mindset with progressive development. Our
                  commitment is to the customer, the community, and the global
                  stage, ensuring adherence to strict regulatory standards.
                  <span className="block">
                    Join us at the forefront of drone innovation – where your
                    vision takes flight.
                  </span>
                </p>

                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <span>
                      <IoIosCheckmarkCircle className="text-2xl font-bold fill-primary" />
                    </span>
                    <p className="font-medium text-text">Design Excellence</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <IoIosCheckmarkCircle className="text-2xl font-bold fill-primary" />
                    </span>
                    <p className="font-medium text-text">
                      Engineered with Intent
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <IoIosCheckmarkCircle className="text-2xl font-bold fill-primary" />
                    </span>
                    <p className="font-medium text-text">Impactful Reach</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <IoIosCheckmarkCircle className="text-2xl font-bold fill-primary" />
                    </span>
                    <p className="font-medium text-text">Forward Momentum</p>
                  </li>
                </ul>

                <div className="mt-4 md:mt-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center text-secondary border-2 border-secondary     px-6 py-3   rounded-[30px] whitespace-nowrap tracking-widest capitalize text-sm font-semibold  transition-all ease-in-out duration-200 hover:text-white hover:bg-[#0D0C22]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="flex flex-grow relative pl-10  ">
                <img
                  src="/agri-25L.png"
                  alt="about"
                  className="h-80 md:h-full w-full rounded-md   object-cover  "
                />
                <div className="absolute bottom-0  left-0 z-10 bg-secondary w-full max-w-[180px] md:max-w-[260px] px-[5%]    py-[5%] border-[5px] border-white   rounded-2xl ">
                  <h3 className="  text-[#f8f8f8]  text-xl  font-semibold ">
                    Join us in shaping the future of drone innovation
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      </Container>
    </section>
  );
};

export default Test;
