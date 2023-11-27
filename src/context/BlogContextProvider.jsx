"use client";
import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import toast, {Toaster} from "react-hot-toast";

export const BlogContext = createContext();

function BlogContextProvider({children}) {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("https://json.xstack.ir/api/v1/posts").then((res) => {
          const data = res.data.data;
          setBlog(data);
        });
      } catch (error) {
        toast.error("مشکلی در سرور به وجود آمده است");
      }
    };
    fetchData();
  }, []);
  return (
    <BlogContext.Provider value={blog}>
      {children}
      <Toaster />
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;
