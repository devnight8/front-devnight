import React from "react";
import {BiSearch} from "react-icons/bi";

function SearchBar() {
  return (
    <div className="absolute flex flex-col top-20 left-0 w-full right-0 z-50 bg-black py-44 px-10 rounded text-white items-center space-y-5">
      <span className="text-[13px] md:text-2xl">توی دوره ها جستجو کن و دورت رو پیدا کن رفیق</span>
      <div className="p-2 py-4 flex border-none bg-gray-900 w-full md:w-1/2 mx-auto  outline-none text-white placeholder:text-white/50 rounded font-light relative">
        <input
          type="text"
          placeholder="در جستجوی دوره"
          className="outline-none w-full h-full text-white placeholder:text-white/50 bg-gray-900"
        />
        <BiSearch className="text-white text-2xl cursor-pointer left-0" />
      </div>
    </div>
  );
}

export default SearchBar;
