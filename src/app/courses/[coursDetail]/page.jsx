"use client";

import BreadCrumb from "@/components/module/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {HiChevronLeft} from "react-icons/hi2";
import {ThreeDots, Triangle} from "react-loader-spinner";

function CoursDetail({params: {coursDetail}}) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://json.xstack.ir/api/v1/product/${coursDetail}`
        );
        const data = await res?.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        toast.error("مشکلی در سرور به وجود آمده است");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center w-full text-white my-10 space-y-4 px-2 md:px-0">
      <div className="bg-black/10 w-full p-3 rounded flex gap-x-4 items-center">
        <BreadCrumb /> <HiChevronLeft /> {product.name}
      </div>
      <div className="flex flex-col md:flex-row w-full gap-x-4">
        <div className="bg-black/10 flex-col md:flex-row flex-1 p-3 rounded flex gap-x-4">
          {loading ? (
            <Triangle
              height="80"
              width="80"
              radius="9"
              color="#3B82F6"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <div className="h-1/2">
              <Image
                className="w-full md:w-[500px] h-[300px] object-cover rounded"
                src={product.image}
                width={1000}
                height={1000}
                alt={product.name}
              />
            </div>
          )}
          <div className="flex flex-col gap-y-3 mt-4 md:mt-0">
            <h1>{product.name}</h1>
            <span>تعداد بازدید : {product.view}</span>
          </div>
        </div>
        <div className="bg-black/10 w-full space-y-4 mt-4 md:mt-0 md:w-1/4 p-3 rounded flex flex-col items-center ">
          <div className=""> {product.price} تومان</div>
          <Link
            href="#"
            className="bg-primary px-6 py-2 rounded text-center hover:bg-blue-800 transition-all w-full">
            خرید محصول
          </Link>
        </div>
      </div>
      <div className="bg-black/10 w-full p-3 rounded min-h-screen">
        <h3 className="mb-6 text-xl mt-2">درباره محصول {product.name}</h3>
        <p className="leading-8 font-light text-white/50 text-justify">
          {product.description}
          {product.description}
          {product.description}
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default CoursDetail;
