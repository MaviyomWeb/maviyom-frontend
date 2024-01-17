import { droneSpecs } from "@/constants";
import React from "react";

const DroneSpecsTable = ({ specs }) => {
  return (
    <table className=" text-sm text-left rtl:text-right text-gray-500 break-words  border-collapse shadow-[10px_10px_0px_0px_#1d69e7]  ">
      <tbody>
        {specs.map((spec, index) => (
          <tr
            key={index}
            className={`border-2 border-primary ${
              index % 2 == 0 ? "bg-[#e8f0fdab] " : ""
            }`}
          >
            <th
              scope="row"
              className="px-2 sm:px-6 py-2 md:py-3 font-medium text-secondary  text-sm xs:text-base md:text-[17px]  "
            >
              {spec.label}:
            </th>
            <td className=" px-2 sm:px-6 py-2 md:py-3 text-text-secondary text-sm xs:text-base md:text-[17px] ">
              {spec.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DroneSpecsTable;
