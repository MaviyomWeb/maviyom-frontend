const MissionCard = ({ point }) => (
  <div className="text-left   rounded-md p-2 md:p-4 xl:p-6">
    <div className=" inline-block text-5xl stroke-secondary  ">
      {point.icon}
    </div>

    <h3 className="text-2xl md:text-xl text-secondary font-semibold mt-2 md:mt-4 mb-2">
      {point.title}
    </h3>
    <p className="text-gray-600 text-lg md:text-base">
      {point.description}
    </p>
  </div>
);

export default MissionCard;
