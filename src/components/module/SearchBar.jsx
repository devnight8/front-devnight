import React from 'react'

function SearchBar() {

  return (
    <div className='absolute flex flex-col top-20 left-0 w-full right-0 z-50 bg-black py-44 px-10 rounded text-white items-center space-y-5'>
      <span>توی دوره ها جستجو کن و دورت رو پیدا کن رفیق</span>
        <input type="text" placeholder="در جستجوی دوره" className="p-2 py-4 border-none bg-gray-900 w-full md:w-1/2 mx-auto block outline-none text-white placeholder:text-white/50 rounded font-light" />
    </div>
  )
}

export default SearchBar