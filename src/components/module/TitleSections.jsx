import React from 'react'

function TitleSections({title,titleEn}) {
  return (
    <div className='flex items-start flex-col justify-start mt-10 px-4 md:px-0'>
        <h4 className='text-white text-2xl font-bold'>{title}</h4>
        <div className='flex mt-1 items-center justify-start'>
        <span className='w-[10px] h-[10px] rounded-full bg-white'></span>
        <span className='uppercase mr-2 text-1xl text-[#5F5F5F]'>{titleEn}</span>
        </div>
    </div>
  )
}

export default TitleSections