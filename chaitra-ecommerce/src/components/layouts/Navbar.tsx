import React from "react";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router";
import { logout, setUser } from "../../redux/features/userSlice";

function Navbar() {
  const reduxUser = useSelector((store: RootState) => store.user.value);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("q value", searchParams.get("q")); // http://localhost:5173/products?q=mouse  // i want the value of q
  // i am getting null value

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.searchTerm.value;

    if (location.pathname == "/products") {
      console.log("heree11111");
      // http://localhost:5173/products?q=mouse&perPage=10
      // setSearchParams({
      //   q: e.target.searchTerm.value,
      // });
      setSearchParams((prev) => {
        let urlParms = new URLSearchParams(prev);
        urlParms.set("q", e.target.searchTerm.value);
        return urlParms;
      });
    } else {
      console.log("heree22222");

      navigate("/products?q=" + e.target.searchTerm.value);
      // navigate("/products");
    }

    console.log(searchParams.get("q")); // http://localhost:5173/products?q=mouse  // i want the value of q
  };

  return (
    <div>
      <div className="container my-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-primary-dark font-josefin text-[34px] font-semibold"
        >
          Hekto
        </Link>
        {/* <a href="/" className="text-[34px] font-semibold text-primary-dark">
            Hekto
          </a> */}
        <ul className="flex gap-9 capitalize">
          <li className="text-secondary">
            Home <ChevronDown size={16} className="inline-block" />
          </li>
          <li>
            {" "}
            <Link to={"/products"}>products</Link>
          </li>
          <li>
            <Link to={"/carts"}>Carts</Link>
          </li>
          {reduxUser && (
            <>
              <li>
                <Link to={"/orders"}>orders</Link>
              </li>
              <li>
                <Link to={"/carts"}>Carts</Link>
              </li>
            </>
          )}
          {reduxUser && reduxUser.isSeller && (
            <>
              <li>
                <Link to={"/seller/products"}>My Products</Link>
              </li>
            </>
          )}
        </ul>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input name="searchTerm" className="border-2 border-[#E7E6EF]" />
          <button className="bg-secondary px-3 py-2 text-white">
            <Search className="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
