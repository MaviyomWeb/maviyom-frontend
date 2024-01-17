import { teamMembers } from "@/constants";
import React from "react";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <>
      <div className=" mb-10">
        <h2 className="text-[32px]  sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
          Our Dedicated Team
        </h2>

        <div className=" text-center">
          <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>

          <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>

          <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
        </div>
      </div>

      <div class="mt-12 grid gap-8 text-center sm:grid-cols-2  lg:grid-cols-4">
        {teamMembers.map((member, index) => {
          return <TeamCard key={index} member={member} />;
        })}
      </div>
    </>
  );
};

export default OurTeam;
