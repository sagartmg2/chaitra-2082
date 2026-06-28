import React from "react";
import { useLocation } from "react-router";
import BreadCrumb from "../../components/BreadCrumb";

function ProductDetail() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <BreadCrumb  />
      <div className="container">
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
            <p>product detail</p>
      </div>
    </div>
  );
}

export default ProductDetail;
