import Image from "next/image";

/** Create a product page
 * create a header
 * create a button that requests data
 * store the data in my state (react state)
 * request data
 * output the data
 */

export default function ProductPage() {
  return (
    <div className="bg-emerald-500">
      <header className="border-4 border-white p-4 mt-4">
        <h1 className="text-7xl mt-4 mb-4">Welcome to my product page!</h1>
        <button className="rounded-md bg-black p-4">Fetch Products</button>
      </header>
    </div>
  );
}
