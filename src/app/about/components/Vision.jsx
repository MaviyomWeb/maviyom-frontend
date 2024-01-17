import React from "react";

const Vision = () => {
  return (
    <>
      <div className="mt-4 md:mt-10 grid justify-between  md:grid-cols-2 lg:gap-10 py-10 md:py-20 ">
        <div
          className={`content grid gap-5  pb-10  
          space-y-3  p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800
    
    `}
        >
          <h2
            className={`relative text-3xl md:text-5xl font-bold text-[#1b243f] after:absolute after:left-0 after:top-full after:h-[3px]
after:w-[40px] after:rounded-3xl after:bg-primary after:content-['']   
          
    `}
          >
            Our Vision
          </h2>
          <p
            className={`  font-poppins  leading-7 text-[#1b243f] 
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

        <div className="img-container h-[280px] md:h-[400px] w-full max-w-[768px] overflow-hidden rounded-md">
          <img
            src="/businessman-big-office.jpg"
            alt="deigns"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Vision;
