"use client";
import Image from "next/image";
import { useState } from "react";

/** Create a product page
 * create a header
 * create a button that requests data
 * store the data in my state (react state)
 * request data
 * output the data
 */

export default function ProductPage() {

  const [products, setProducts] = useState(null);
  const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

  async function fetchProducts() {
    const response = await fetch(API_ENDPOINT);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setProducts();
  }

  const ProductList = () => {
    return (
      <div className="border-4 border-white p-4 mt-4">
        Products will go here
      </div>
    )
  }

  return (
    <div className="bg-emerald-500">
      <header className="border-4 border-white p-4 mt-4">
        <h1 className="text-7xl mt-4 mb-4">Welcome to my product page!</h1>
        <button onClick={fetchProducts} className="rounded-md bg-black p-4">Fetch Products</button>
      </header>
      <ProductList />
    </div>
  );
}
