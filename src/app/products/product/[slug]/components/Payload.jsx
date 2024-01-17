import Image from "next/image";
import PayloadCamera from "./PayloadCamera";

const Payload = ({ data: { attributes: product, id } }) => {
  return (
    <div>
      <div className="content md:w-9/12 md:mx-auto mt-10">
        {/* Payload */}
        <div className="drone-payload mt-16 px-4 w-full">
          <h2 className="heading text-3xl xl:text-5xl text-secondary   text-center font-bold  font-dmSans leading-5 mb-10">
            Payload
          </h2>
          <div className="mb-10 ">
            {/* PAyload Camera */}
            <PayloadCamera product={product} />
          </div>
        </div>
      </div>
      <div className="mt-3 flex  items-center justify-center flex-wrap  w-full gap-7 md:gap-10">
        {product?.payload_related_images?.data?.map((item) => (
          <div
            className="w-full max-w-[160px] md:max-w-[240px]  "
            key={item?.id}
          >
            <img
              src={item?.attributes?.url}
              alt={product?.title}
              className=" h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payload;
