import Layout from "@/components/Layout"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";


export default function Home() {
    const {data: session}= useSession();
    const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalCashOn, setTotalCashOn] = useState(0);
  const router = useRouter();
  useEffect(() => {
    axios
      .get("/api/categories")
      .then((response) => {
        console.log(response.data);
        setTotalCategories(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("/api/products")
      .then((response) => {
        console.log(response.data);
        setTotalProducts(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("/api/orders")
      .then((response) => {
        console.log(response.data);
        setTotalOrders(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("/api/cashorders")
      .then((response) => {
        console.log(response.data);
        setTotalCashOn(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 return <Layout>
    <div className="text-blue-900 flex justify-between">
  <div>
    <h2 className="text-xl">
      Hello, <b> {session?.user?.name} </b>
    </h2>
    <p className="text-sm mt-2 text-gray-600">
      Welcome to Root Bangladesh Admin Panel.
    </p>
  </div>
  <div className="flex bg-gray-300 gap-1 text-black rounded-md overflow-hidden">
    <img src={session?.user?.image} alt="" className="w-8 h-8" />
    <span className="px-2">{session?.user?.name}</span>
  </div>
</div>
<div className="mt-8 flex-col">
  <div className="w-1/2">
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-medium mb-4">Total Categories</h3>
      <div className="text-3xl font-bold mb-6">{totalCategories}</div>
      <div className="text-right">
        <button
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => router.push("/categories")}
        >
          View Categories
        </button>
      </div>
    </div>
  </div>
  <div className="w-1/2 mt-4">
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-medium mb-4">Total Products</h3>
      <div className="text-3xl font-bold mb-6">{totalProducts}</div>
      <div className="text-right">
        <button
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => router.push("/Products")}
        >
          View Products
        </button>
      </div>
    </div>
  </div>
  <div className="w-1/2 mt-4">
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-medium mb-4">Total Cash On Delivery</h3>
      <div className="text-3xl font-bold mb-6">{totalCashOn}</div>
      <div className="text-right">
        <button
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => router.push("/cashondelivery")}
        >
          View Products
        </button>
      </div>
    </div>
  </div>
  <div className="w-1/2 mt-4">
    <div className="bg-white rounded-md shadow-md p-4">
      <h3 className="text-lg font-medium mb-4">Total Orders</h3>
      <div className="text-3xl font-bold mb-6">{totalOrders}</div>
      <div className="text-right">
        <button
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => router.push("/orders")}
        >
          View Products
        </button>
      </div>
    </div>
  </div>
</div>

 
 </Layout>
}
