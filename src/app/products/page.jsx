import Container from "@/components/Container";
import React from "react";

import ProductCard3 from "@/components/ProductCard3";
import { fetchDataFromApi } from "../../../utils/api";

const fetchProducts = async () => {
  // noStore();
  const products = await fetchDataFromApi("/api/products?populate=*");

  if (!products) {
    throw new Error("Products Not Found");
  }

  return products;
};

const Products = async () => {
  const products = await fetchProducts();

  return (
    <div className="relative isolate z-0 bg-white  pb-10 md:pb-20  pt-10">
      <Container>
        <div className=" mb-10">
          <h2 className="text-[32px]  sm:text-4xl md:text-5xl text-secondary text-center font-semibold leading-[1.45]">
            Our Products
          </h2>

          <div className=" text-center">
            <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>

            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>

            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
          </div>
        </div>
        <div className="bg-gray">
          <div class="grid md:grid-cols-2 gap-y-5 xs:gap-y-10 md:gap-y-8 gap-x-16  max-w-5xl mx-auto ">
            {products?.data?.map((product) => {
              return <ProductCard3 key={product?.id} data={product} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
