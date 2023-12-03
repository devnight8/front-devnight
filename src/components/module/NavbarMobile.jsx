"use client";
import Link from "next/link";
import {IoClose} from "react-icons/io5";

function NavbarMobile({setShowMenu,showMeno}) {
const closeHander = ()=>{
    setShowMenu(!showMeno);
}
  return (
    <div className="w-[75%] absolute bg-black right-0 top-0  bottom-0 z-40">
      <nav className="flex relative">
        <ul className="flex flex-col [&>li]:my-3 [&>li]:mx-3 mt-5 p-2">
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/courses">دوره ها</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/blogs">مقالات</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/">درباره ما</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
        <IoClose
          className="text-white absolute left-5 top-5 text-2xl"
          onClick={closeHander}
        />
      </nav>
    </div>
  );
}

export default NavbarMobile;
