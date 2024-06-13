import Link from "next/link";
import React from "react";
import { MdArrowForward, MdArrowRight } from "react-icons/md";
import BlogCard from "./BlogCard";
import Container from "./Container";

import { fetchDataFromApi } from "../../utils/api";

const fetchBlogs = async () => {
  try {
    // noStore();
    const blogs = await fetchDataFromApi("/api/blogs?populate=*");

    if (!blogs) {
      throw new Error("Blogs Not Found");
    }

    return blogs;
  } catch (error) {
    // Handle the error here or re-throw it to be handled by the component using this function
    throw new Error("Error fetching products: " + error.message);
  }
};

const Blogs = async () => {
  const blogs = await fetchBlogs();
  return (
    <section className=" pb-10 md:pb-20  bg-white">
      <Container>
        <>
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] text-[#152432] text-center font-semibold leading-[1.45]">
            Welcome to our Blog
          </h2>
          <p className=" text-gray-600 text-center text-lg leading-5 mt-3 ">
            Explore the latest in drone technology and innovation!
          </p>

          <div className=" text-center">
            <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-blue-500"></span>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8  ">
              {blogs?.data?.map((blog) => {
                return <BlogCard key={blog?.id} blog={blog?.attributes} />;
              })}
            </div>
          </div>
        </>

        <div className="mt-6 flex justify-end ">
          <Link
            href="/blog"
            className="text-primary font-semibold flex items-center gap-1 transition-all duration-200 hover:underline "
          >
            View All
            <MdArrowForward size={24} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
