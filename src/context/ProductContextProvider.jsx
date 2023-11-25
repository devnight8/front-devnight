"use client";

import React, {createContext, useEffect, useState} from "react";
import toast, { Toaster } from "react-hot-toast";

export const ProductContext = createContext();

function ProductContextProvider({children}) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://json.xstack.ir/api/v1/products");
        const data = await res?.json();
        setProduct(data.data);
      } catch (error) {
        toast.error("مشکلی در سرور به وجود آمده است");
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
      <Toaster/>
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
