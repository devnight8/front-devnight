"use client";

import {useContext} from "react";
import {ProductContext} from "src/context/ProductContextProvider";

function SortByCat() {
  const products = useContext(ProductContext);
  return (
    <div className="mt-3">
      {products.map((item, index) => (
        <div key={index} className="flex items-center justify-start  gap-x-2">
          <input
            type="checkbox"
            value={item.category.name}
            id={item.category.id}
          />
          <label htmlFor={item.category.id}>{item.category.name}</label>
        </div>
      ))}
    </div>
  );
}

export default SortByCat;
