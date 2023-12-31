"use client";
import {signOut} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import toast, {Toaster} from "react-hot-toast";

function DashboardSidbarLayout({children, session}) {
  const emailUser = session?.user.email;
  const router = useRouter();

  const signOutHandler = () => {
    toast.success("با موفقیت خارج شدید");
    setInterval(() => {
      signOut();
      router.push("/");
    }, 1500);
  };
  return (
    <div className="text-white flex my-4">
      <div className="sticky w-[300px] bg-black/10 rounded  h-screen flex text-white justify-right px-4 py-4">
        <ul className="w-full">
          <div className="my-4 bg-white/10 p-4 rounded flex justify-between items-center">
            <span className="text-sm"> ایمیل شما : </span>
            <span className="text-[14px]">{emailUser}</span>
          </div>
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <Link href="/dashboard">پیشخوان</Link>
          </li>
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <Link href="#">خرید ها</Link>
          </li>
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <Link href="/dashboard/license">لایسنس ها</Link>
          </li>
          {/* <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <Link href="/dashboard/add">ثبت دوره جدید</Link>
          </li> */}
          <li className="my-4 hover:bg-white/10 p-3 cursor-pointer rounded">
            <button onClick={signOutHandler}>خروج از حساب کاربری</button>
          </li>
        </ul>
        <Toaster />
      </div>
      <div className="bg-black/10 flex-1 p-4 mx-3 rounded">{children}</div>
    </div>
  );
}

export default DashboardSidbarLayout;
