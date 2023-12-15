"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const router = usePathname();

  return (
    <div>
      <nav className="hidden md:flex">
        <ul className="flex [&>li]:mx-3">
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link
              className={router == "/" ? "text-white" : ""}
              href="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link
              className={router == "/courses" ? "text-white" : ""}
              href="/courses">
              دوره ها
            </Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link
              className={router == "/blogs" ? "text-white" : ""}
              href="/blogs">
              مقالات
            </Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link
              className={router == "/about-us" ? "text-white" : ""}
              href="/about-us">
              درباره ما
            </Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link
              className={router == "/contact-us" ? "text-white" : ""}
              href="/contact-us">
              تماس با ما
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
