import Link from "next/link";
import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Payload from "./Payload";

const PayloadCamera = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={product?.payload_image?.data?.attributes?.url}
        alt={product?.title}
      />

      <div className="mt-4 flex items-center justify-center">
        <Link
          href="/payload"
          className="px-6 py-2   font-medium text-text-primary rounded-3xl flex items-center justify-center transition-all duration-150 ease-in-out hover:text-white hover:bg-primary"
        >
          Know More
          <span>
            <MdOutlineKeyboardArrowRight className="text-3xl" />
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center flex-wrap ">
        {product?.payload_features?.features?.map((feature, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{feature}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default PayloadCamera;
