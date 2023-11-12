import React from "react";
import logoFoter from "@/public/images/Devnigh-logo.webp";
import {AiOutlineWhatsApp} from "react-icons/Ai";
import {PiTelegramLogoThin} from "react-icons/Pi";
import {PiInstagramLogoLight} from "react-icons/Pi";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer
      id="footer"
      className=" bg-[#2B2B2B] ">
      <section className="container m-auto grid grid-cols-1 md:grid-cols-4 justify-items-center  py-20 border-t border-white/10 ">
        <div>
          <Image
            className="w-[130px] max-w-full h-auto mb-3 "
            src={logoFoter}
            width={5000}
            height={5000}
            alt="logo footer"
          />
          <p className="text-white mb-3 ">
            ما در دِونایت تمام تلاشمون اینه که بهترین دوره ها رو تقدیم شما کنیم
            چون میدونیم شما بهترینید .
          </p>
          <span className="text-white mb-3 block font-thin">
            برنامه نویسی تو شب قشنگ تره
          </span>
          <div className="flex gap-x-2">
            <AiOutlineWhatsApp className="text-white text-2xl hover:scale-105 transition-all" />
            <PiTelegramLogoThin className="text-white text-2xl hover:scale-105 transition-all" />
            <PiInstagramLogoLight className="text-white text-2xl hover:scale-105 transition-all" />
          </div>
        </div>
        <div>
          <h3 className="text-white text-xl font-extrabold mb-3">
            آخرین مطالب
          </h3>
          <ul className="">
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">PHP چیست و چه کاربردی دارد</Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">بک اند Back-End چیست</Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">ری‌اکت (React) چیست </Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">پرکاربردترین تگ‌های HTML</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-extrabold mb-3">
            ارتباط با ما
          </h3>

          <ul className="">
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">PHP چیست و چه کاربردی دارد</Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">بک اند Back-End چیست</Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">ری‌اکت (React) چیست </Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">پرکاربردترین تگ‌های HTML</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-extrabold mb-3">
            ارتباط با ما
          </h3>

          <ul className="">
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">PHP چیست و چه کاربردی دارد</Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">بک اند Back-End چیست</Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">ری‌اکت (React) چیست </Link>
            </li>
            <li className="text-[#5F5F5F] mb-3 hover:text-white transition-all">
              <Link href="/">پرکاربردترین تگ‌های HTML</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
