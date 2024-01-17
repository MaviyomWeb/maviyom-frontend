import { Hero_Specs } from "@/constants";
import Image from "next/image";
import React from "react";
import Container from "./Container";

const Specs = () => {
  return (
    <>
      <section
        className="section service pb-0 md:pb-20  bg-white"
        aria-label="service"
      >
        <Container>
          <div className=" mx-auto  grid  sm:grid-cols-service-sm xl:grid-cols-3 2xl:grid-cols-service-2xl gap-2 xs:gap-6 xl:gap-[50px]   md:items-start  ">
            <div className="title-wrapper xl:col-span-3 2xl:col-auto  xl:pr-[100px] 2xl:pr-0">
              <p className="section-subtitle font-medium uppercase text-[#1d69e7]">
                What We Serve
              </p>

              <h2 className="h2 title section-title my-3 lg:mt-5 lg:mb-4 xl:mb-3 2xl:my-3 text-secondary text-[36px] sm:text-3xl md:text-4xl lg:text-5xl    font-semibold ">
                Elevate Your Operations
              </h2>
              <p className="section-text text-lg md:text-base text-[#5d6165]  mb-5 xl:mb-3  leading-7">
                Harness our drones' advanced capabilities for superior
                performance and reliability in every mission.
              </p>
            </div>

            {Hero_Specs.map((spec) => {
              return (
                <div
                  key={spec.id}
                  className={` relative px-6 py-5 md:p-5     rounded-md border flex flex-col items-start  justify-center gap-1 md:gap-2  `}
                >
                  <span className="absolute top-[10%] right-[10%] bg-text-primary px-3 py-1 text-sm font-medium text-gray-100 rounded-full">
                    {spec.desc}
                  </span>
                  <div className="h-16  ">
                    <Image
                      style={{ width: "auto" }}
                      src={spec.image}
                      alt={spec.title}
                      height={64}
                      width={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h3 className="inline-flex items-center text-[19px] text-secondary  my-3 font-semibold">
                      {spec.title}
                    </h3>

                    <p className="section-text md:text-[14px] font-medium text-[#5d6165]  leading-6">
                      {spec.info}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Specs;
