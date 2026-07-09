import React from "react";
import { Link } from "react-router";

function SellerProducts() {
  return (
    <div className="container">
      <Link className="bg-secondary inline-block text-white px-8 py-4" to="/seller/add-product">Add Product</Link>

      <pre>

        <p> fetch from api:  /api/seller/products</p>
      </pre>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
      <div>SellerProducts 1</div>
    </div>
  );
}

export default SellerProducts;
