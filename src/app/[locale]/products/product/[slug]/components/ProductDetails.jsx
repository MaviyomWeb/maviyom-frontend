import Link from "next/link";

import DroneSpecsTable from "@/components/DroneSpecsTable";
import Image from "next/image";

const translations = {
  en: {
    specifications: "Specifications",
    enquireNow: "Enquire Now",
  },
  hi: {
    specifications: "स्पेसिफिकेशन्स",
    enquireNow: "अभी पूछें",
  },
};

const ProductDetails = ({
  data: { attributes: product, id },
  locale,
  productAllDetails,
}) => {
  const { specifications, enquireNow } = translations[locale];

  return (
    <div>
      <div className={`  max-w-[824px] mx-auto `}>
        <Image
          className={`w-full h-full  bg-gray-50 object-cover   ${
            product?.title === "Maviyom 25L"
              ? "w-[300px] sm:w-[600px] h-[240px] mx-auto"
              : ""
          }`}
          src={
            productAllDetails?.attributes?.product_image?.data?.attributes?.url
          }
          alt={product?.title}
          width={600}
          height={340}
        />
      </div>
      <div className="content md:w-4/5 lg:w-4/6 2xl:w-4/5 md:mx-auto">
        <div className="drone-info">
          <h2 className="heading text-3xl md:text-4xl xl:text-5xl text-secondary  font-dmSans  md:leading-5  text-center font-semibold  mt-7   mb-4">
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
            {specifications}
          </h2>
          <div className="mb-10 ">
            <div>
              <DroneSpecsTable
                specs={product?.specifications?.droneSpecs}

              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="/contact-us"
              className=" inline-flex items-center whitespace-nowrap text-white bg-primary hover:opacity-80  font-medium px-6 py-[10px] rounded-lg"
            >
              {enquireNow}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
