"use client";

import React, { useState } from "react";

import { droneLists } from "@/constants";
import ProductCard3 from "./ProductCard3";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Products = () => {
  const [toggleState, setToggleState] = useState(1);

  const updateToggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container  ">
      <div className="mt-7 flex items-center gap-4 md:gap-8 justify-center">
        <button
          onClick={() => updateToggleTab(1)}
          className={`border  border-secondary whitespace-nowrap font-medium leading-[1.45] text-sm  xs:text-base p-2  xs:py-2 xs:px-4 flex items-center justify-center rounded-md 
              ${
                toggleState === 1
                  ? "text-white bg-secondary"
                  : "text-secondary "
              }
              `}
        >
          Rotatory Wings
        </button>
        <button
          onClick={() => updateToggleTab(2)}
          className={`border border-secondary whitespace-nowrap font-medium leading-[1.45] text-sm  xs:text-base p-2  xs:py-2 xs:px-4 flex items-center justify-center rounded-md 
              ${
                toggleState === 2
                  ? "text-white bg-secondary"
                  : "text-secondary "
              }
              `}
        >
          Fixed Wings
        </button>
      </div>
      {/* <div className=" h-[1px] w-full  bg-secondary"></div> */}

      <div className="product-list mt-10">
        <div
          className={`${
            toggleState === 1 ? "flex" : "hidden"
          } items-center justify-center flex-wrap  xs:gap-10 tablet:gap-7 lg:gap-16  `}
        >
          {droneLists.map((content, index) => {
            return <ProductCard3 key={index} content={content} />;
          })}
        </div>

        {/* <div
          className={`${
            toggleState === 2 ? "flex" : "hidden"
          } items-center justify-center flex-wrap xs:gap-10 tablet:gap-7 lg:gap-16  `}
        >
          {Array(4)
            .fill(1)
            .map((item, index) => (
              <ProductCard key={index} />
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default Products;
