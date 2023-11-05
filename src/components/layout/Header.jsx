"use client";

import Image from "next/image";
import logo from "@/public/images/DEVNIGHT.svg";
import Navbar from "../module/Navbar";
import {HiOutlineBars3BottomRight} from "react-icons/hi2";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Link from "next/link";


function Header() {
  const {data} = useSession();


  return (
    <header className="flex items-center mx-2 md:mx-0 justify-between py-5 border-b border-b-white/5 ">
      <div className="md:hidden">
        <HiOutlineBars3BottomRight className="text-white text-2xl" />
      </div>
      <div>
        <Link href="/">
          <Image
            className="w-[100px] md:w-[130px]"
            src={logo}
            width={300}
            height={300}
            alt="logo"
          />
        </Link>
      </div>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div>
        {data ? (
          <Link 
          href="/dashboard"
            className="bg-black py-2 px-4 text-[14px] md:py-3 md:px-5 rounded-md md:text-md text-white hover:bg-primary transition-all">
           حساب کاربری
          </Link >
        ) : (
          <Link 
          href="/signup"
            className="bg-black py-2 px-4 text-[14px] md:py-3 md:px-5 rounded-md md:text-md text-white hover:bg-primary transition-all">
            ثبت نام و ورود
          </Link >
        )}
      </div>
    </header>
  );
}

export default Header;
