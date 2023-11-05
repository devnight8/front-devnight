"use client";
import {signOut} from "next-auth/react";
import Link from "next/link";

function DashboardSidbarLayout({children, session}) {
  const emailUser = session?.user.email;
  return (
    <div className="text-white flex my-4">
      <div className="sticky w-[300px] bg-black/10 rounded  h-screen flex text-white justify-right px-4 py-4">
        <ul className="w-full">
          <div className="my-4 bg-white/10 p-4 rounded flex justify-between items-center">
            <span> ایمیل شما : </span>
            <span className=" text-[14px]">{emailUser}</span>
          </div>
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <Link href="#">صفحه اصلی </Link>
          </li>
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <Link href="#">خرید ها</Link>
          </li>
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <Link href="/dashboard/license">لایسنس ها</Link>
          </li>
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <button onClick={() => signOut()}>خروج از حساب کاربری</button>
          </li>
        </ul>
      </div>
      <div className="bg-black/10 flex-1 p-4 mx-3 rounded">{children}</div>
    </div>
  );
}

export default DashboardSidbarLayout;
