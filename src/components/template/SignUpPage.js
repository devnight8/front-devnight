"use client";

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import {ThreeDots} from "react-loader-spinner";
function SignUpPage() {
  const [username, setuserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const clickHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({nickname, username, email, password}),
      headers: {"content-Type": "application/json"},
    });
    const data = await res.json();
    setLoading(false);
    console.log(data);
    if (!nickname) {
      toast.error("نام و نام خانوادگی خود را وارد کنید");
      return;
    }
    if (!username) {
      toast.error("نام کاربری خود را وارد کنید");
      return;
    }
    if (!email) {
      toast.error("ایمیل خود را وارد کنید");
      return;
    }

    if (!email.includes("@")) {
      toast.error("ایمیل معتبر وارد کنید");
      return;
    }

    if (!password) {
      toast.error("رمز عبور خود را وارد کنید");
      return;
    }

    if (res.status === 201) {
      toast.success("ثبت نام شما با موفقیت انجام شد");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      toast.error(data.error);
    }
  };

  return (
    <form
      method="post"
      className="flex items-center flex-col justify-center min-h-screen group-hover">
      <section
        id="form-signup"
        className="bg-[#3F3F3F] w-[500px] flex flex-col items-center  px-4 py-5 rounded text-center text-white">
        <h2 className="text-3xl font-bold mb-5">
          <span className="text-primary"> دونایت</span> | برنامه نویس شب
        </h2>
        <span>برنامه نویسی تو شب قشنگـ ـتره</span>
        <div className="my-4 w-full relative">
          <label
            htmlFor="nickname"
            className="absolute right-2 px-2 -top-4 bg-[#3F3F3F] ">
            نام و نام خانوادگی{" "}
          </label>
          <input
            className="w-full p-3 outline-none focus-visible::bg-primary bg-transparent border border-white/20 rounded"
            type="text"
            placeholder="علی محمدی"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="my-4 w-full relative">
          <label
            htmlFor="username"
            className="absolute right-2 px-2 -top-4 bg-[#3F3F3F] ">
            نام کاربری
          </label>
          <input
            className="w-full p-3 outline-none focus-visible::bg-primary bg-transparent border border-white/20 rounded"
            type="text"
            placeholder="devnight"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
            name="userName"
            id="username"
          />
        </div>
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
            type="text"
            value={password}
            placeholder="123456789"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
        </div>
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3B82F6"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <button
            type="submit"
            onClick={clickHandler}
            className="bg-primary w-1/2 mb-5 p-2 rounded-md text-lg">
            ثبت نام
          </button>
        )}

        <span>
          حساب کاربری دارید ؟
          <Link className="mx-2 my-3 bg-primary p-1 rounded-md" href="/login">
            ورود
          </Link>
        </span>

        <Toaster />
      </section>
    </form>
  );
}

export default SignUpPage;
