import React from "react";
import Card from "../module/Card";
import SortByCat from "../module/SortByCat";

function CoursesPage({data})
{
const productSlice = data?.slice(0,12)

  return (
    <>
      <section className="bg-gradient-to-l gap-x-4 my-24 relative flex">
        <div className="hidden md:flex flex-col w-1/4 bg-black/10 p-4 rounded-md text-white ">
            <span>دسته بندی بر اساس</span>
            <SortByCat data={data}/>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 md:gap-6  md:w-3/4 justify-evenly">
          {productSlice?.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              catagory={item.category.name}
              price={item.price}
              iamge={item.image}
              createdAt={item.created_at}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesPage;
