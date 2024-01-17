import React from "react";

const PolicySection = ({ title, content }) => {
  return (
    <div className="mt-7 ">
      <p className=" text-lg  left-7  text-text-primary">
        <strong>{title}:</strong>
      </p>
      <ul className=" list-disc mt-3  text-[#67768e]">
        {content.map((item, index) => (
          <li key={index} className="my-[5px]">
            <p className="inline  text-[17px] leading-7 ">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PolicySection;
