import React from "react";
import axios from "axios";
import Button from "./components/ui/Button";

function ProductsListApi() {
  axios.get("https://dummyjson.com/products").then((res) => {
    console.log(res.data);
  });

  return (
    <div>
      <Button> fetch products</Button>
      <p>Product List fetched from API</p>
    </div>
  );
}

export default ProductsListApi;
