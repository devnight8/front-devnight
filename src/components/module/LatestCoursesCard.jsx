"use client";
import {useContext} from "react";
import Card from "./Card";
import {ProductContext} from "src/context/ProductContextProvider";

function LatestCoursesCard() {
  const products = useContext(ProductContext);

  const productsItems = products?.slice(0, 4);
  return (
    <section className="bg-gradient-to-l from-[#373737] to-[#2c384900] px-4 my-24 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 justify-evenly md:gap-2 md:gap-y-5 relative -top-10">
        {productsItems?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
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
  );
}

export default LatestCoursesCard;
