import Link from "next/link";

import DroneSpecsTable from "@/components/DroneSpecsTable";

const ProductDetails = ({ data: { attributes: product, id } }) => {
  return (
    <div>
      <div className={`  max-w-[824px] mx-auto `}>
        <img
          className={`w-full h-full  bg-gray-50 object-cover   ${
            product?.title === "Maviyom 25L" ? "h-[192px]" : ""
          }`}
          src={product?.product_image?.data?.attributes?.url}
          alt={product?.title}
        />
      </div>
      <div className="content md:w-4/6 md:mx-auto">
        <div className="drone-info">
          <h2 className="heading text-3xl md:text-4xl xl:text-5xl text-secondary  font-dmSans  md:leading-5  text-center font-semibold  mt-7   mb-5">
            {product?.title}
          </h2>
          <div>
            <p className=" md:text-center text-lg  text-[#4d535e]   md:leading-8 mb-3 md:mb-4 ">
              {product?.description}
            </p>
          </div>
        </div>

        {/* Drone Specs */}
        <div className="drone-specifications mt-8 md:mt-16  w-full flex flex-col items-center justify-center">
          <h2 className="heading text-3xl md:text-4xl xl:text-5xl text-secondary  font-dmSans  leading-5 font-semibold   mb-5 md:mb-7">
            Specifications
          </h2>
          <div className="mb-10 ">
            <div>
              <DroneSpecsTable specs={product?.specifications?.droneSpecs} />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="/contact"
              className=" inline-flex items-center whitespace-nowrap text-white bg-primary hover:opacity-80  font-medium px-6 py-[10px] rounded-lg"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
