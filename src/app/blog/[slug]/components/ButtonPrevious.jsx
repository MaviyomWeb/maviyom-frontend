"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ButtonPrevious = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-lg  text-black font-medium transition-all duration-200 ease-in-out cursor-pointer hover:underline"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        class="css-1ykfz6g"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="48"
          d="M328 112 184 256l144 144"
        ></path>
      </svg>{" "}
      Back
    </button>
  );
};

export default ButtonPrevious;
