import React from "react";

const Vision = () => {
  return (
    <>
      <div className="mt-5 md:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-10 py-10 md:pb-20  ">
        <div
          className={` grid place-content-center rounded bg-gray-100 p-6 sm:p-8
    
    `}
        >
          <h2
            className={`relative text-4xl md:text-5xl font-bold text-[#1b243f] after:absolute after:left-0 after:top-full after:h-[3px]
after:w-[40px] after:rounded-3xl after:bg-primary after:content-['']   
          
    `}
          >
            Our Vision
          </h2>
          <p
            className={`mt-5  text-lg md:text-[17px]  leading-7 text-[#1b243f]
            `}
          >
            Maviyom Aviation is on a journey to become a respected name in drone
            technology, advancing the frontiers of aerial innovation. We are
            dedicated to delivering sophisticated yet accessible solutions that
            serve both industrial and commercial needs. Our commitment to
            sustainable practices guides our pursuit of excellence, ensuring we
            provide not just products, but a full spectrum of support and
            services. In our quest for continual improvement, we aim to
            contribute meaningful advancements, set attainable benchmarks, and
            positively impact the way we live and work with drone technology.
          </p>
        </div>

        <div className="img-container h-full sm:h-[400px] lg:h-full   overflow-hidden rounded-md">
          <img
            src="/businessman-big-office.jpg"
            alt="deigns"
            className="h-full w-full object-right object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Vision;
