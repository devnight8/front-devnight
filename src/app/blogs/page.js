import BlogsPage from "@/components/template/BlogsPage";
import React from "react";
import BlogContextProvider from "src/context/BlogContextProvider";

function page() {
  return (
    <BlogContextProvider>
      <BlogsPage />
    </BlogContextProvider>
  );
}

export default page;
