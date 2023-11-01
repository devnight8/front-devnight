"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState} from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="flex items-center flex-col justify-center min-h-screen group-hover">
      <section
        id="form-signup"
        className="bg-[#3F3F3F] w-[500px] flex flex-col items-center  px-4 py-5 rounded text-center text-white">
        <h2 className="text-4xl font-bold mb-5">
          <span className="text-primary"> دونایت</span> | برنامه نویس شب
        </h2>
        <span>برنامه نویسی تو شب قشنگـ ـتره</span>
        <div className="my-4 w-full relative ">
          <label
            htmlFor="email"
            className="absolute right-2 px-2 -top-4 bg-[#3F3F3F]">
            ایمیل
          </label>
          <input
            className="w-full p-3 outline-none bg-transparent border border-white/20 rounded"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
        </div>
        <div className="my-4 w-full relative">
          <label
            htmlFor="password"
            className="absolute right-2 px-2 -top-4 bg-[#3F3F3F]">
            رمز عبور
          </label>
          <input
            className="w-full p-3 outline-none bg-transparent border border-white/20 rounded"
            type="password"
            placeholder="123456789"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>
        <button
          type="submit"
          // onClick={clickHandler}
          className="bg-primary w-1/2 mb-5 p-2 rounded-md text-lg">
         ورود به سایت
        </button>

        <span>حساب کاربری ندارید ؟<Link className="mx-2 bg-primary p-1 rounded-md" href="/auth/signup">ثبت نام </Link></span>

      </section>
    
    </form>
  )
}

export default Login