// import { unstable_noStore as noStore } from "next/cache";

import Container from "./Container";
import ProductsCarousel from "./ProductsCarousel";

import { fetchDataFromApi } from "../../utils/api";

const fetchProducts = async () => {
  // noStore();
  const products = await fetchDataFromApi("/api/products?populate=*");

  if (!products) {
    throw new Error("Products Not Found");
  }

  return products;
};

const OurProducts1 = async () => {
  const products = await fetchProducts();
  return (
    <>
      <section className=" md:pb-20">
        <Container>
          <div className="mb-5 md:mb-10">
            <h2 className="text-[32px]  sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
              Our Products
            </h2>

            <div className=" text-center">
              <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>

              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>

              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
          <ProductsCarousel products={products} />
        </Container>
      </section>
    </>
  );
};

export default OurProducts1;
