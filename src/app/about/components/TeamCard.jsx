import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div class="rounded-md bg-white px-2 py-4 ">
      {/* <img
        src="https://readymadeui.com/team-5.webp"
        class="inline-block h-36 w-36 rounded-full"
      /> */}
      <div class="mt-4 flex flex-col ">
        <h4 class="text-secondary font-poppins mb-[10px] text-center font-medium uppercase">
          {member.role}
        </h4>
        <h3 class="text-secondary font-poppins text-center text-lg font-semibold">
          {member.name}
        </h3>
        <p class="text-secondary mt-2 line-clamp overflow-hidden text-ellipsis text-justify text-sm font-normal leading-5">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
