import Container from "@/components/Container";
import { IndustriesData } from "@/constants";
import React from "react";
import DroneFeaturesTest from "./components/DroneFeaturesTest";

const IndustryInfo = () => {
  const industryData = IndustriesData[0];

  //   if (!industryData) {
  //     return null; // Handle case where industryData is not provided
  //   }

  return (
    <div className="relative isolate z-0pb-5    ">
      <div className="h-[464px]">
        <img
          src={industryData.imageBanner}
          alt={industryData.title}
          className="w-full h-full object-cover"
        />
      </div>
      <Container>
        <div className=" relative mx-auto max-w-6xl mt-7 ">
          <h2 className="text-3xl xs:text-4xl font-semibold  text-center  tracking-tight text-secondary sm:text-5xl">
            {industryData.title}
          </h2>

          <div className=" text-center">
            <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
          </div>
          <p className="mt-4 text-lg text-center leading-8 text-gray-600">
            {industryData.intro}
          </p>

          <div className="mt-10">
            <h3 className="text-[32px] text-center sm:text-4xl text-secondary  font-semibold leading-[1.45]">
              Types of Drones:
            </h3>
            {industryData.sections && (
              <div>
                {industryData.sections.map((section, index) => {
                  return <DroneFeaturesTest section={section} key={index} />;
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndustryInfo;
