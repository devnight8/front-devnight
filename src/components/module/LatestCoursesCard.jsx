"use client";
import React, {useState} from "react";
import product01 from "@/public/images/product01.png";
import Image from "next/image";
import {HiHeart} from "react-icons/hi2";
function LatestCoursesCard() {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked((liked) => !liked);
  };

  return (
    <section className="bg-gradient-to-l from-[#373737] to-[#2c384900] px-4 my-24 relative">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-evenly md:gap-2 relative -top-10">
        <div className="bg-gradient-to-t from-[#000] group to-[#2C3849] rounded-md p-4 relative flex items-center justify-center flex-col">
          <button
            className="self-end p-1 bg-white/10 rounded-full text-3xl "
            onClick={likeHandler}>
            <HiHeart
              className={
                liked
                  ? "relative top-[2px] text-red-500 hover:scale-105 transition-all"
                  : "relative  top-[1px] text-white/20 hover:scale-105 transition-all"
              }
            />
          </button>
          <div className="relative mb-5 mt-10">
            <Image
              className="w-full h-auto rounded-md "
              src={product01}
              alt="product"
              width={1000}
              height={1000}
            />
            <div className="flex items-start flex-col bottom-2 right-2 justify-start absolute w-fit ">
              <span className="my-2 bg-gradient-to-l from-[#450497] to-[#320072] px-2 py-1 text-white text-sm rounded-md">
                پروژه محور
              </span>
              <h3 className="text-white font-bold inline-block w-fit ">
                دوره جامع المنتور به صورت حرفه ای
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-start w-full text-right">
            <span className="text-white/25 font-light"> هزینه دوره: </span>
            <span className="text-white mx-1"> 198000 تومان </span>
          </div>
          <div className="flex items-center justify-start mb-9 w-full text-right">
            <span className="text-white/25 font-light">استاد:</span>
            <span className="text-white mx-1">دونایت</span>
          </div>
          <button className="bg-gradient-to-l from-[#0A3B8A] to-[#040C18]  py-2 text-white relative self-center top-6 px-4 rounded-md group-hover:-translate-y-1 transition-all ease duration-700">
            مشاهده دوره
          </button>
        </div>
        <div className="bg-gradient-to-t from-[#000] group to-[#2C3849] rounded-md p-4 relative flex items-center justify-center flex-col">
        <button
            className="self-end p-1 bg-white/10 rounded-full text-3xl "
            onClick={likeHandler}>
            <HiHeart
              className={
                liked
                  ? " relative top-[2px] text-red-500 hover:scale-105 transition-all "
                  : "relative  top-[1px] text-white/20 hover:scale-105 transition-all"
              }
            />
          </button>
          <div className="relative mb-5 mt-10">
            <Image
              className="w-full h-auto rounded-md "
              src={product01}
              alt="product"
              width={1000}
              height={1000}
            />
            <div className="flex items-start flex-col bottom-2 right-2 justify-start absolute w-fit ">
              <span className="my-2 bg-gradient-to-l from-[#450497] to-[#320072] px-2 py-1 text-white text-sm rounded-md">
                پروژه محور
              </span>
              <h3 className="text-white font-bold inline-block w-fit ">
                دوره جامع المنتور به صورت حرفه ای
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-start w-full text-right">
            <span className="text-white/25 font-light"> هزینه دوره: </span>
            <span className="text-white mx-1"> 198000 تومان </span>
          </div>
          <div className="flex items-center justify-start mb-9 w-full text-right">
            <span className="text-white/25 font-light">استاد:</span>
            <span className="text-white mx-1">دونایت</span>
          </div>
          <button className="bg-gradient-to-l from-[#0A3B8A] to-[#040C18]  py-2 text-white relative self-center top-6 px-4 rounded-md group-hover:-translate-y-1 transition-all ease duration-700">
            مشاهده دوره
          </button>
        </div>
        <div className="bg-gradient-to-t from-[#000] group to-[#2C3849] rounded-md p-4 relative flex items-center justify-center flex-col">
        <button
            className="self-end p-1 bg-white/10 rounded-full text-3xl "
            onClick={likeHandler}>
            <HiHeart
              className={
                liked
                  ? " relative top-[2px] text-red-500 hover:scale-105 transition-all "
                  : "relative  top-[1px] text-white/20 hover:scale-105 transition-all"
              }
            />
          </button>
          <div className="relative mb-5 mt-10">
            <Image
              className="w-full h-auto rounded-md "
              src={product01}
              alt="product"
              width={1000}
              height={1000}
            />
            <div className="flex items-start flex-col bottom-2 right-2 justify-start absolute w-fit ">
              <span className="my-2 bg-gradient-to-l from-[#450497] to-[#320072] px-2 py-1 text-white text-sm rounded-md">
                پروژه محور
              </span>
              <h3 className="text-white font-bold inline-block w-fit ">
                دوره جامع المنتور به صورت حرفه ای
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-start w-full text-right">
            <span className="text-white/25 font-light"> هزینه دوره: </span>
            <span className="text-white mx-1"> 198000 تومان </span>
          </div>
          <div className="flex items-center justify-start mb-9 w-full text-right">
            <span className="text-white/25 font-light">استاد:</span>
            <span className="text-white mx-1">دونایت</span>
          </div>
          <button className="bg-gradient-to-l from-[#0A3B8A] to-[#040C18]  py-2 text-white relative self-center top-6 px-4 rounded-md group-hover:-translate-y-1 transition-all ease duration-700">
            مشاهده دوره
          </button>
        </div>
        <div className="bg-gradient-to-t from-[#000] group to-[#2C3849] rounded-md p-4 relative flex items-center justify-center flex-col">
        <button
            className="self-end p-1 bg-white/10 rounded-full text-3xl "
            onClick={likeHandler}>
            <HiHeart
              className={
                liked
                  ? " relative top-[2px] text-red-500 hover:scale-105 transition-all "
                  : "relative  top-[1px] text-white/20 hover:scale-105 transition-all"
              }
            />
          </button>
          <div className="relative mb-5 mt-10">
            <Image
              className="w-full h-auto rounded-md "
              src={product01}
              alt="product"
              width={1000}
              height={1000}
            />
            <div className="flex items-start flex-col bottom-2 right-2 justify-start absolute w-fit ">
              <span className="my-2 bg-gradient-to-l from-[#450497] to-[#320072] px-2 py-1 text-white text-sm rounded-md">
                پروژه محور
              </span>
              <h3 className="text-white font-bold inline-block w-fit ">
                دوره جامع المنتور به صورت حرفه ای
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-start w-full text-right">
            <span className="text-white/25 font-light"> هزینه دوره: </span>
            <span className="text-white mx-1"> 198000 تومان </span>
          </div>
          <div className="flex items-center justify-start mb-9 w-full text-right">
            <span className="text-white/25 font-light">استاد:</span>
            <span className="text-white mx-1">دونایت</span>
          </div>
          <button className="bg-gradient-to-l from-[#0A3B8A] to-[#040C18]  py-2 text-white relative self-center top-6 px-4 rounded-md group-hover:-translate-y-1 transition-all ease duration-700">
            مشاهده دوره
          </button>
        </div>
      </div>
    </section>
  );
}

export default LatestCoursesCard;
