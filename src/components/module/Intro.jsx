import Image from 'next/image'
import React from 'react'
import introLeftImg from "@/public/images/left-hero.png"
import Link from 'next/link'
function Intro() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between mt-8 px-4 md:px-0'>
        <div className=' flex flex-col items-center md:items-start md:w-1/2 mb-6 md:mb-0'>
            <h1 className="text-white text-4xl lg:text-6xl text-center md:text-right leading-tight font-bold"><span className='text-primary'>دِونایت</span> | آموزش آسان برنامه نویـــــــــــــــــــــــسی</h1>
            <p className='text-white text-2xl  lg:text-3xl my-4 font-thin md:text-right'>برنامه نویسی تو شب قشنگــ ـتره</p>
            <div className='mt-5'>
                <Link href="/courses" className='bg-primary text-white ml-3 border border-transparent hover:bg-blue-800 transition-all rounded-md py-2 px-3'>دیدن دوره ها </Link>
                <button className='border border-primary text-primary hover:text-blue-300  hover:border-blue-300  rounded-md py-2 px-3 transition-all'>مشاوره رایگان</button>
            </div>
        </div>
        <div className='md:w-1/2 relative after:content[""] after:absolute after:bg-gradient-to-l from-[#2E2E2E]  after:w-full after:h-full after:top-0 after:bottom-0 after:z-30'>
            <Image className='w-full bg-contain' src={introLeftImg} alt='intro image left' width={2000} height={2000}/>
        </div>
    </section>
  )
}

export default Intro