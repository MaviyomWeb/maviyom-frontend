import Image from "next/image";
import React from "react";
import { fetchDataFromApi } from "../../../../utils/api";
import ButtonPrevious from "./components/ButtonPrevious";
import Content from "./components/Content";

const fetchBlogDetail = async (slug) => {
  try {
    // noStore();
    const product = await fetchDataFromApi(
      `/api/blogs?populate=*&filters[slug][$eq]=${slug}`
    );

    if (!product) {
      throw new Error("Blog Not Found");
    }

    return product;
  } catch (error) {
    // Handle the error here or re-throw it to be handled by the component using this function
    throw new Error("Error fetching products: " + error.message);
  }
};

const Blog = async ({ params }) => {
  const res = await fetchBlogDetail(params.slug);
  const blog = res?.data[0]?.attributes;
  console.log(blog);

  return (
    <div className="relative bg-white isolate z-0 pb-10 md:pb-20 ">
      <div className="w-[89%] max-w-screen-md mx-auto  mt-2">
        <ButtonPrevious />
        <div className="mt-2 mb-3 w-full h-96 relative">
          <Image
            src={blog?.banner?.data?.attributes?.url}
            alt="cover"
            fill
            className="h-full w-full object-cover  rounded-xl  "
          />
        </div>
        <Content blog={blog} />
      </div>
    </div>
  );
};

export default Blog;
