import { IoIosCheckmarkCircle } from "react-icons/io";

const Applications = ({ data: { attributes: product, id } }) => {
  return (
    <>
      <div className="mt-8 md:mt-16 px-4 w-full max-w-4xl  mx-auto pb-10 md:pb-0">
        <h2 className="heading text-[28px] md:text-4xl xl:text-5xl text-secondary  font-dmSans  md:leading-5 font-medium text-center mb-4 md:mb-8 ">
          Applications of {product?.title}
        </h2>
        <div className="text-[#5b6278] font-sans    ">
          <div>
            <ul className="md:ml-5 list-disc   grid 964Screen:grid-cols-2 gap-x-5 gap-y-2 md:gap-y-4  ">
              {product?.Applications?.applications?.map((usage, index) => {
                return (
                  <li className="flex items-center" key={index}>
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-primary stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-3 md:ml-4 text-gray-700 font-medium text-lg ">
                      {usage}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
