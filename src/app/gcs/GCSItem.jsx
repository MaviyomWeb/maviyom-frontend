import DroneSpecsTable from "@/components/DroneSpecsTable";
import React from "react";

const GCSItem = ({ GCS_Detail }) => {

  return (
    <div className="">
      <h3 className="heading text-4xl md:text-[38px] lg:text-[56px]  xl:text-[64px] text-primary text-center font-semibold  font-grotesk leading-[1.1]">
        GCS- {GCS_Detail.GCS_Number}
      </h3>
      <div
        className={`flex flex-col  lg:flex-row items-center  lg:items-start justify-center gap-8 md:gap-16 mt-5 md:mt-10 ${
          GCS_Detail.GCS_Number === "1" ? "flex-wrap" : ""
        }`}
      >
        <div className="flex flex-col lg:flex-row jus items-center gap-10 ">
          {GCS_Detail.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`GCS ${GCS_Detail.GCS_Number} Image ${index + 1}`}
              className="w-full h-full max-w-[300px] object-cover "
            />
          ))}
        </div>

        {/* Specs */}
        <div className="">
          <DroneSpecsTable specs={GCS_Detail.droneSpecs} />
        </div>
      </div>
      {GCS_Detail.GCS_Number === "1" && (
        <figure className="hidden sm:block my-5 md:mt-16 md:mb-0 h-full w-full  max-w-[900px] mx-auto">
          <img
            src="/GCS_safe_return.png"
            alt="GCS Specs"
            className="h-full w-full object-cover"
          />
        </figure>
      )}
    </div>
  );
};

export default GCSItem;
