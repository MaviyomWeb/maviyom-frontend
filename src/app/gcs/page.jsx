import Container from "@/components/Container";
import DroneSpecsTable from "@/components/DroneSpecsTable";
import React from "react";
import GCSItem from "./GCSItem";

import { GCS_Details } from "@/constants";

const GCS = () => {
  return (
    <div className="relative isolate w-full z-0 bg-white     ">
      <section className="Ground control hero-banner ">
        <div className="relative h-64 md:h-[350px]">
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <img
              src="https://maviyom.com/wp-content/uploads/2023/07/GCS-1.png?id=2411"
              alt="GCS"
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Overlay */}
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-black/30 "></div>
          {/* Content */}
          <div
            className="content relative h-full w-full  flex items-center justify-center gap-5 px-1 font-poppins text-[#f8f9fa]
       "
          >
            <h2 className="text-3xl md:text-[48px] lg:text-[56px]  xl:text-[64px] text-center font-semibold  leading-[1.1]   ">
              Ground Control System
            </h2>
          </div>
        </div>
      </section>

      <section className="GCS">
        <Container>
          <div className="GCS mt-8   md:w-[89%] mx-auto  ">
            {GCS_Details.map((GCS_Detail, index) => (
              <div key={index} className="pb-16 md:pb-20 ">
                <GCSItem GCS_Detail={GCS_Detail} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GCS;
