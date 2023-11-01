"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/DEVNIGHT.svg";
import Navbar from "./Navbar";
import {HiOutlineBars3BottomRight} from "react-icons/hi2";
import { useRouter } from "next/navigation";




function Header() {

const router = useRouter();

const loginHandler = ()=>{
  
router.push("/auth/signup");

}


  return (
    <header className="flex items-center mx-2 md:mx-0 justify-between py-5 border-b border-b-white/5">
        <div className="md:hidden">
          <HiOutlineBars3BottomRight className="text-white text-2xl"/>
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
          <button onClick={loginHandler} className="bg-black py-2 px-4 text-[14px] md:py-3 md:px-5 rounded-md md:text-md text-white hover:bg-primary transition-all">ثبت نام و ورود</button>
      </div>
    </header>
  );
}

export default Header;
