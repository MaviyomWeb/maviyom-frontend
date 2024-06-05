const CTA = () => {
  return (
    <section className="pb-8 md:pb-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full  md:max-w-2xl">
          <h2
            style={{ lineHeight: 1.25 }}
            className="font-bold   text-center text-secondary text-2xl sm:text-3xl lg:text-[2.6rem] "
          >
            Navigate the Future with Maviyom Aviation
          </h2>
          <p className="sm:mx-auto mt-3 sm:max-w-xl  text-center text-base leading-relaxed text-gray-600">
            Connect with us today for comprehensive information and expert
            guidance on revolutionizing your drone experience.
          </p>
        </div>

        {/* <div className=" mt-8 flex justify-center">
          <TouchButton />
        </div> */}
      </div>
    </section>
  );
};

export default CTA;
