"use client";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react"
function DashBoard() {
  return (
    <div className="container">
      <div className="fixed top-18 right-0 h-screen bg-black/10 w-1/4 flex text-white justify-right px-4 py-4">
        <ul>
          <li className="my-3">
            <Link href="#">صفحه اصلی </Link>
          </li>
        
          <li className="my-3">
            <Link href="#">خرید ها</Link>
          </li>
          <li className="my-3">
            <Link href="#">آدرس ها </Link>
          </li>
          <li className="my-3">
            <Link href="#">لایسنس ها</Link>
          </li>
          <li className="my-3">
          <button onClick={() => signOut()}>خروج از حساب کاربری</button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default DashBoard;
