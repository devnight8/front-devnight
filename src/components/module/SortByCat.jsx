"use client"
import { useState } from "react";


function SortByCat({data}) {
  const pro = data
  const [filterd,setFilterd] = useState([])
  const filterHandler = (category)=>{
    const filterPro = pro.filter(item =>{
      console.log(item)
    })
  }
  return (
    <div className="mt-3">
      {data.map((item) => (
       <div id={item.category.id} className="flex items-center justify-start  gap-x-2">
        <input type="checkbox" value={item.category.name} id={item.category.id} onChange={filterHandler} />
        <label htmlFor={item.category.id}>{item.category.name}</label>
       </div>
      ))}
    </div>
  );
}

export default SortByCat;
