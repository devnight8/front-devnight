"use client";

import Image from "next/image";
import logo from "@/public/images/DEVNIGHT.svg";
import Navbar from "../module/Navbar";
import {HiOutlineBars3BottomRight} from "react-icons/hi2";
import {BiBasket} from "react-icons/bi";

import {useSession} from "next-auth/react";
import Link from "next/link";
import NavbarMobile from "../module/NavbarMobile";
import {useState} from "react";

function Header() {
  const {data} = useSession();
  const [showMeno, setShowMenu] = useState(false);
  return (
    <header className="flex items-center mx-2 md:mx-0 justify-between py-5 border-b border-b-white/5 ">
      <div className="md:hidden">
        <HiOutlineBars3BottomRight
          className="text-white text-2xl"
          onClick={()=>setShowMenu(!showMeno)}
        />
      </div>
      {!showMeno ? null : <NavbarMobile showMeno={showMeno} setShowMenu={setShowMenu} />}
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
          <div className="flex items-center gap-x-4">
            <Link href="/cart" className="relative">
              <BiBasket className="text-white text-2xl " />
              <span className="absolute bg-red-500 text-white rounded-full p-[4px] flex items-center justify-center -top-2 right-0 w-4 h-4 text-[12px]">
                0
              </span>
            </Link>
            <Link
              href="/dashboard"
              className="bg-black py-2 px-4 text-[14px] md:py-3 md:px-5 rounded-md md:text-md text-white hover:bg-primary transition-all">
              حساب کاربری
            </Link>
          </div>
        ) : (
          <Link
            href="/signup"
            className="bg-black py-2 px-4 text-[14px] md:py-3 md:px-5 rounded-md md:text-md text-white hover:bg-primary transition-all">
            ثبت نام و ورود
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
