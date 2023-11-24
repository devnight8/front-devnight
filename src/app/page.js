"use client";
import HomePage from "@/components/template/HomePage";
import {createContext} from "react";

export const ProductContext = createContext();

export default async function Home() {
  const res = await fetch("https://json.xstack.ir/api/v1/products");
  const data = await res.json();
  return (
    <section>
      <ProductContext.Provider value={data.data}>
        <HomePage />
      </ProductContext.Provider>
    </section>
  );
}
