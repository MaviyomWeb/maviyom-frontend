import Image from "next/image";
import Link from "next/link";

const ProductCard3 = ({ data: { attributes: product, id } }) => {
  return (
    <div className="px-5 pt-5 pb-2 cursor-pointer overflow-hidden rounded-md  shadow-shadow-1 transition duration-500 hover:scale-105 ">
      <div className="w-full max-w-96 mx-auto">
        <Image
          src={product?.product_image?.data?.attributes?.url}
          alt={product?.title}
          width={400}
          height={200}
          placeholder="blur"
          blurDataURL="/1x1-ffffffff.png"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="bg-white p-4 space-y-4 flex flex-col items-center justify-center">
        <h2 className="text-center text-secondary  capitalize text-3xl font-semibold ">
          {product?.title}
        </h2>
        <p className=" text-sm text-center text-text-secondary leading-5 line-clamp-2">
          {product?.short_description}
        </p>

        <Link
          href={`/products/product/${product?.slug}`}
          className="flex max-w-max mx-auto place-content-center mt-3 xs:mt-5 mb-2 items-center justify-center whitespace-nowrap border-2 border-secondary text-secondary hover:text-white hover:bg-secondary  font-medium px-4 py-2 rounded-full transition-all ease-in-out duration-200"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard3;
