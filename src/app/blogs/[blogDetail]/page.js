"use client";

import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";

function BlogDetail({params: {blogDetail}}) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://json.xstack.ir/api/v1/post/${blogDetail}`
        );
        const data = await res?.json();

        setBlog(data);
      } catch (error) {
        toast.error("مشکلی در سرور به وجود آمده است");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="text-white">
      {blog.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
}

export default BlogDetail;
