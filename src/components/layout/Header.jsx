import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/DEVNIGHT.svg";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="">
      <div>
        <Link href="/">
          <Image
            className="w-[160px]"
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
          <button>ثبت نام و ورود</button>
      </div>
    </header>
  );
}

export default Header;
