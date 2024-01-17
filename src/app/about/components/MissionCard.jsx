const MissionCard = ({ point }) => (
  <div className="text-left group  rounded-md p-2 md:p-4 xl:p-6">
    <div class="group inline-block text-5xl stroke-secondary group-hover:text-primary ">{point.icon}</div>

    <h3 className="text-2xl md:text-xl text-secondary font-semibold mt-2 md:mt-4 mb-2">
      {point.title}
    </h3>
    <p className="text-text-secondary text-lg md:text-sm">{point.description}</p>
  </div>
);

export default MissionCard;
