import Link from "next/link";

import React from "react";

function Navbar() {


  return (
    <div>
      <nav className="hidden md:flex">
        <ul className="flex [&>li]:mx-3">
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/courses">دوره ها</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/">مقالات</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/">درباره ما</Link>
          </li>
          <li className="text-white/25 hover:text-white xl:text-md">
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
