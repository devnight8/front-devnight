"use client";

import {useState} from "react";
import Image from "next/image";
import {HiHeart} from "react-icons/hi2";
import {BiBasket} from "react-icons/bi";
import Link from "next/link";

function CardBlog({id, title,slug,createdAt}) {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked((liked) => !liked);
  };
  return (
    <>
      <div className="bg-gradient-to-t from-[#000]  to-[#2C3849] group rounded-md p-4 relative flex items-center justify-center flex-col ">
        <div className="self-end flex gap-x-2">

          <button
            className="self-end p-1 bg-white/5 rounded-full text-3xl "
            onClick={likeHandler}>
            <HiHeart
              className={
                liked
                  ? "relative text-[26px] top-[1px] text-red-500 hover:scale-105 transition-all"
                  : "relative text-[26px]  top-[1px] text-white/20 hover:scale-105 transition-all"
              }
            />
          </button>
        </div>
        <div className="relative mb-5 mt-10 w-full before:absolute before:bg-gradient-to-t from-[#00000021]  to-transparent before:w-full before:h-full before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-10 h-14">
          {/* <Image
            className="w-full  rounded-md h-[200px] object-cover relative overflow-hidden "
            src={iamge}
            alt="product"
            width={1000}
            height={1000}
          /> */}
          <div className="flex items-start flex-col bottom-2 right-2 justify-start absolute w-fit z-10 ">
            {/* <span className="my-2 bg-gradient-to-l from-[#450497] to-[#320072] px-2 py-1 text-white text-sm rounded-md cursor-pointer">
              {catagory}
            </span> */}
            <p className="text-white font-bold inline-block w-fit cursor-pointer p   leading-7">
              {title}
            </p>
          </div>
        </div>

        {/* <div className="flex items-center justify-start w-full text-right">
          <span className="text-white/25 font-light"> هزینه دوره: </span>
          <span className="text-white mx-1"> {price} تومان </span>
        </div> */}
        <div className="flex items-center justify-start mb-3 w-full text-right">
          <span className="text-white/25 font-light">تاریخ انتشار:</span>
          <span className="text-white mx-1">
            {new Date(createdAt).toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <Link
          href={`blogs/${slug}`}
          className="bg-gradient-to-l from-[#0A3B8A] to-[#040C18] py-2 text-white relative self-center top-6 px-4 rounded-md  transition-all ease duration-700">
          ادامه مطلب
        </Link>
      </div>
    </>
  );
}

export default CardBlog;
