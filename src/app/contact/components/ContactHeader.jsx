import Image from "next/image";
import React from "react";

const ContactHeader = () => {
  return (
    <section className="Contact Us hero-banner ">
      <div className="relative h-[200px] md:h-[350px]">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <Image
            src="/Contact-bg.png"
            alt="Contact"
            width={500}
            height={350}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div
          className="content relative h-full w-full  flex items-center justify-center gap-5 px-1 font-poppins text-[#f8f9fa]
       "
        >
          <h2 className="text-[40px]  md:text-[48px] lg:text-[56px]  xl:text-[64px] text-center font-semibold  leading-[1.1]   ">
            Contact Us
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
