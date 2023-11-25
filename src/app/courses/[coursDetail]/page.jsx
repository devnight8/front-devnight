"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

function CoursDetail({params: {coursDetail}}) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://json.xstack.ir/api/v1/product/${coursDetail}`
        );
        const data = await res?.json();
        const {name, price, description, image, view} = data;
        console.log(name);
        setProduct(data);
      } catch (error) {
        toast.error("مشکلی در سرور به وجود آمده است");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center w-full text-white my-10 space-y-4 px-2 md:px-0">
      <div className="bg-black/10 w-full p-3 rounded">{product.name}</div>
      <div className="flex  w-full gap-x-4">
        <div className="bg-black/10 flex-1 p-3 rounded flex gap-x-4">
          <div>
            <Image
              className="w-[500px] rounded"
              src={product.image}
              width={1000}
              height={1000}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <h1>{product.name}</h1>
            <span>تعداد بازدید : {product.view}</span>
          </div>
        </div>
        <div className="bg-black/10 w-1/4 p-3 rounded">
          {product.price} تومان
        </div>
      </div>
      <div className="bg-black/10 w-full p-3 rounded min-h-screen">
        <h3 className="mb-6 text-xl">درباره محصول {product.name}</h3>
        <p className="leading-8 font-light text-white/50"> {product.description}</p>
      </div>
    </div>
  );
}

export default CoursDetail;
