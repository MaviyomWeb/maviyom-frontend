import PolicySection from "./PolicySection";

const PolicyDetails = ({ title, info, sections }) => {
  return (
    <section className="max-w-[75rem] mx-auto">
      <h2
        className={`mt-20 md:mt-28 relative text-3xl md:text-[2rem]   font-roboto capitalize font-semibold leading-10 md:leading-[1.2]   text-secondary  mb-3 md:mb-6  
          
    `}
      >
        {title}
      </h2>

      <div className="break-words ">
        <p className="mb-6 text-[#67768e] text-[17px] leading-7 ">{info}</p>

        {sections.map((section, index) => (
          <PolicySection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </section>
  );
};

export default PolicyDetails;
