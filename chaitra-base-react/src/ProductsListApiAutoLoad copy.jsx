import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/ui/Button";

let apiFetched = false;

/* 
  COMPONENT lIFECYCLE
    - componentDidMount
    - componentDidUpdate
    - componentDidUnmount


  useEffect


*/

export default function ProductsListApiAutoLoad() {
  console.log("render | re-render");
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  console.log({ apiFetched });

  if (!apiFetched) {
    apiFetched = true;
    axios
      .get("https://dummyjson.com/products/search?q=" + searchTitle)
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log("useEffect: component did mount");
    
    // console.log("useEffect: component did updated");
  });

  return (
    <div className="ml-8">
      <p>Product List fetched from API</p>
      <br />

      <form onSubmit={handleSubmit}>
        <input
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="border"
          type="text"
          placeholder="title"
        />
      </form>

      <ul className="pl-8 mt-12 list-disc">
        {products.map((el) => {
          return <li>{el.title}</li>;
        })}
      </ul>
      {products.length == 0 && <p>NO products found.</p>}
    </div>
  );
}
