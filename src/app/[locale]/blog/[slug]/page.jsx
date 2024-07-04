import Image from "next/image";
import React from "react";
import { fetchDataFromApi } from "../../../../../utils/api";
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
  const { locale, slug } = params;

  const res = await fetchBlogDetail(slug);

  const blog =
    locale === "en"
      ? res?.data[0]
      : res?.data[0]?.attributes?.localizations?.data[0];

  const blogAllDetails = res?.data[0]


  return (
    <div className="relative bg-white isolate z-0 pb-10 md:pb-20 ">
      <div className="w-[89%] max-w-screen-md mx-auto  mt-2">
        <ButtonPrevious locale={locale} />
        <div className="mt-2 mb-3 w-full h-96 relative">
          <Image
            src={blogAllDetails?.attributes?.banner?.data?.attributes?.url}
            alt="cover"
            fill
            className="h-full w-full object-cover  rounded-xl  "
          />
        </div>
        <Content data={blog} />
      </div>
    </div>
  );
};

export default Blog;
