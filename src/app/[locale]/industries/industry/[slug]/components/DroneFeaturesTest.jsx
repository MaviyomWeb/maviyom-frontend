// Import necessary React and Tailwind CSS components
import Link from "next/link";
import React from "react";
import { FaRegHandPointDown } from "react-icons/fa6";
import { MdOutlineCheck } from "react-icons/md";

const DroneFeaturesTest = ({ section, index }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          {index + 1}. {section?.title}
        </h1>
        <p className="text-text-secondary text-lg font-medium">
          {section?.desc}
        </p>
        <div className="mt-5 h-96 ">
          <img
            src={section?.image}
            alt=""
            className="h-full w-full object-cover "
          />
        </div>
      </div>

      {section?.features?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
          {section?.features?.map((item, index) => {
            return (
              <FeatureCard
                title={item.title}
                description={item.description}
                key={index}
              />
            );
          })}
        </div>
      )}

      {section?.specificationsList?.length > 0 && (
        <div>
          <h4 className="text-3xl text-center font-bold text-blue-600 mb-4">
            Key Features
          </h4>
          <p className="text-text-secondary  text-lg text-center   font-medium ">
            Here are the remarkable features of the{" "}
            <span className="text-xl ml-1 font-semibold text-secondary">
              {section?.title}:
            </span>
          </p>
          <ul className="  mt-4 text-justify ">
            {section?.specificationsList?.map((specification, index) => (
              <li className="my-[5px] flex items-center gap-2" key={index}>
                <span>
                  <MdOutlineCheck className="text-xl text-primary" />
                </span>
                <p className="inline md:text-lg">{specification}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8">
        <p className="text-gray-700 text-[17px] text-center">
          {section?.conclusion}
        </p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Link
          href="/contact-us"
          className=" inline-flex whitespace-nowrap text-white bg-primary  font-medium px-6 py-[10px] rounded-lg"
        >
          Enquire Now
        </Link>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

const FeatureCard = ({ title, description, key }) => {
  return (
    <div className="p-4 text-center" key={key}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-8 mb-4 inline-block"
        viewBox="0 0 682.667 682.667"
      >
        <defs>
          <clipPath id="a" clipPathUnits="userSpaceOnUse">
            <path d="M0 512h512V0H0Z" data-original="#000000" />
          </clipPath>
        </defs>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-miterlimit="10"
          strokeWidth="40"
          clip-path="url(#a)"
          transform="matrix(1.33 0 0 -1.33 0 682.667)"
        >
          <path
            d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
            data-original="#000000"
          />
          <path
            d="M178 271.894 233.894 216 334 316.105"
            data-original="#000000"
          />
        </g>
      </svg>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default DroneFeaturesTest;
