import { allIndustries } from "@/constants";
import Link from "next/link";
import React from "react";

const IndustriesList = () => {
  return (
    <div className="relative isolate z-0pb-10 md:pb-20 ">
      <div className="mt-20 mb-10">
        <h2 className="text-[32px] sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
          Industries We Cater
        </h2>

        <div className=" text-center">
          <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
          <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
          <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
        </div>
      </div>
      <section className="overflow-hidden">
        <div className="flex flex-col gap-16">
          {allIndustries.map((item) => {
            return (
              <Link
                href="/industries/industry/1"
                className="mx-auto max-w-7xl px-5 "
                key={item.id}
              >
                <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                  <img
                    alt=""
                    className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                    src={item.imageSrc}
                  />
                  <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                    <h2 className="my-4 text-3xl font-semibold text-secondary">
                      {item.title}
                    </h2>

                    <p className="leading-relaxed text-text-primary">
                      {item.detail}
                    </p>

                    <div className="flex items-center justify-between">
                      <button className="flex max-w-max place-content-center mt-3 xs:mt-5 mb-2 items-center justify-center whitespace-nowrap text-white bg-secondary  font-medium px-4 py-2 rounded-lg">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default IndustriesList;
