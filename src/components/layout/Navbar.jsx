import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="text-white">
        <ul className="flex [&>li]:mx-3">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/">دروه ها</Link>
          </li>
          <li>
            <Link href="/">مقالات</Link>
          </li>
          <li>
            <Link href="/">درباره ما</Link>
          </li>
          <li>
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
