"use client";
import React, {useContext, useEffect, useState} from "react";
import Card from "../module/Card";
import SortByCat from "../module/SortByCat";
import {ProductContext} from "src/context/ProductContextProvider";

function CoursesPage() {
  const products = useContext(ProductContext);
  const [displayed, setDisplated] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  
  useEffect(() => {
    if (!query) return products;
    const filterdProducts = products.filter((p) => p.category.name === query);
    return setDisplated(filterdProducts);
  }, [query]);


  useEffect(() => {
    setDisplated(products);
  }, [products]);


  return (
    <>
      <section className="bg-gradient-to-l gap-x-4 my-24 relative flex">
        <div className="hidden md:flex flex-col w-1/4 bg-black/10 p-4  min-h-screen rounded-md text-white ">
          <span>دسته بندی بر اساس</span>
          <SortByCat query={query} setQuery={setQuery} />
        </div>
        <div className="w-full grid grid-cols-1 bg-black/10 p-4 min-h-screen sm:grid-cols-2 gap-6 lg:grid-cols-3 md:gap-6  md:w-3/4 justify-evenly">
          {displayed?.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              catagory={item.category.name}
              price={item.price}
              iamge={item.image}
              createdAt={item.created_at}
              slug={item.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesPage;
