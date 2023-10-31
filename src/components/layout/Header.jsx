import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/DEVNIGHT.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex items-center justify-between py-5 border-b border-b-white/5">
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
      <div>
        <Navbar />
      </div>
      <div>
          <button className="bg-black py-2 px-4 text-[14px] md:py-3 md:px-5 rounded-md md:text-md text-white hover:bg-primary transition-all">ثبت نام و ورود</button>
      </div>
    </header>
  );
}

export default Header;
