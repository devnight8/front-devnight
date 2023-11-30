"use client";

import React, {useContext} from "react";
import {BlogContext} from "src/context/BlogContextProvider";
import CardBlog from "../module/CardBlog";

function BlogsPage() {
  const blogs = useContext(BlogContext);

  const blogSlice = blogs?.slice(0, 12);
  return (
    <section className="bg-gradient-to-l gap-x-4 my-24 relative flex">
      <div className="hidden md:flex flex-col w-1/4 bg-black/10 p-4 rounded-md text-white min-h-screen ">
        <span>دسته بندی بر اساس</span>
        <ul className="mt-4 space-y-2 text-white/30">
          <li className="hover:text-white cursor-pointer transition-all">
            مقالات فرانت اند
          </li>
          <li className="hover:text-white cursor-pointer transition-all">
            مقالات بک اند
          </li>
        </ul>
      </div>
      <div className="w-full grid grid-cols-1 bg-black/10 p-4  min-h-screen text-white sm:grid-cols-2 gap-6 lg:grid-cols-3 md:gap-6  md:w-3/4 justify-evenly">
        {blogSlice?.map((item) => (
          <CardBlog key={item.id} title={item.title} createdAt={item.created_at} slug={item.slug} />
        ))}
      </div>
    </section>
  );
}

export default BlogsPage;
