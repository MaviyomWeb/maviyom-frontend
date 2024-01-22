import React from "react";
import MissionCard from "./MissionCard";

const missionPoints = [
  {
    title: "Catalyzing Industrial Evolution",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M16.25 12.5V3.75L5 17.5H13.75L13.75 26.25L25 12.5L16.25 12.5Z"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    description:
      "User-centric drone solutions designed to enhance productivity, safety, and strategic growth.",
  },
  {
    title: "Architecting Tomorrow's Tech",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M5 5V11.25H5.7269M24.9226 13.75C24.3075 8.81711 20.0995 5 15 5C10.8033 5 7.21036 7.58521 5.7269 11.25M5.7269 11.25H11.25M25 25V18.75H24.2731M24.2731 18.75C22.7896 22.4148 19.1967 25 15 25C9.90048 25 5.69249 21.1829 5.07737 16.25M24.2731 18.75H18.75"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    description:
      "Pioneering advanced UAV solutions for a sustainable and secure future.",
  },
  {
    title: "Fostering Synergy and Insight",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M12.0795 21.25H17.9206M15.0001 3.75V5M22.955 7.04505L22.0711 7.92893M26.2501 14.9999H25.0001M5.00012 14.9999H3.75012M7.92899 7.92893L7.0451 7.04505M10.5806 19.4194C8.13986 16.9787 8.13986 13.0214 10.5806 10.5806C13.0214 8.13983 16.9787 8.13983 19.4195 10.5806C21.8602 13.0214 21.8602 16.9787 19.4195 19.4194L18.7356 20.1033C17.9445 20.8944 17.5001 21.9674 17.5001 23.0862V23.75C17.5001 25.1307 16.3808 26.25 15.0001 26.25C13.6193 26.25 12.5001 25.1307 12.5001 23.75V23.0862C12.5001 21.9674 12.0556 20.8944 11.2645 20.1033L10.5806 19.4194Z"
          stroke="#0F172A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    description:
      "Fusing creativity with collaboration to drive educational and technological breakthroughs in UAV development",
  },
  {
    title: "Driving Change Through Innovation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-tools"
        width="36"
        height="36"
        viewBox="0 0 30 30"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
        <polyline points="12 8 7 3 3 7 8 12"></polyline>
        <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
        <polyline points="16 12 21 17 17 21 12 16"></polyline>
        <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
      </svg>
    ),
    description:
      "Delivering UAV innovations for humanitarian efforts and complex problem-solving.",
  },
];

const Mission = () => {
  return (
    <>
      <div className="bg-white font-sans  flex max-lg:flex-col p-4 md:p-10 my-8 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <div className="lg:max-w-md mx-auto">
          <h2
            className="relative text-4xl md:text-5xl font-bold text-[#1b243f] after:absolute after:left-0 after:top-full after:h-[3px]
after:w-[40px] after:rounded-3xl after:bg-primary after:content-[''] "
          >
            Our <em>Mission</em>
          </h2>
          <p className="text-text-secondary text-lg md:text-sm my-7">
            We are dedicated to elevating the potential of industries and
            individuals with cutting-edge drone (UAV) technology. Our pursuit is
            to not just innovate, but to redefine possibilities. .
          </p>
          <img
            src="/mission-img.jpg"
            alt=""
            className="w-full h-64 sm:h-96   xl:h-full object-cover "
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8 max-md:max-w-lg mx-auto">
          {missionPoints.map((point, index) => (
            <MissionCard point={point} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mission;
