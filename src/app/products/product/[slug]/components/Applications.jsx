import { IoIosCheckmarkCircle } from "react-icons/io";

const Applications = ({ data: { attributes: product, id } }) => {
  return (
    <div className="mt-8 md:mt-16 px-4 w-full max-w-4xl mx-auto pb-10 md:pb-0">
      <h2 className="heading text-[28px] md:text-4xl xl:text-5xl text-secondary  font-dmSans  md:leading-5 font-medium text-center mb-4 md:mb-8 ">
        Applications of {product?.title}
      </h2>
      <div className="text-[#5b6278] font-sans   border-b-2 border-[#e7eaee] ">
        <div>
          <ul className="md:ml-5 list-disc   grid md:grid-cols-2 gap-x-5 gap-y-2 md:gap-y-4  ">
            {product?.Applications?.applications?.map((usage, index) => {
              return (
                <>
                  <li
                    className="flex items-center gap-x-3 flex-grow  "
                    key={index}
                  >
                    <span>
                      <IoIosCheckmarkCircle className="text-2xl font-bold fill-primary" />
                    </span>
                    <p className="font-medium md:text-lg  text-secondary">
                      {usage}
                    </p>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Applications;
