import React, { useState } from "react";
import axios from "axios";
import Button from "./components/ui/Button";

function ProductsListApi() {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = () => {
    axios.get("https://dummyjson.com/products/search?q=phone").then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
    });
  };
  
  return (
    <div>
      <p>Product List fetched from API</p>
      <Button onClick={fetchProducts}> fetch all products</Button>

      <form>
        <input className="border" type="text" placeholder="title" />
        <Button>Search</Button>
      </form>

      <ul className="pl-8 mt-12 list-disc">
        {products.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProductsListApi;
