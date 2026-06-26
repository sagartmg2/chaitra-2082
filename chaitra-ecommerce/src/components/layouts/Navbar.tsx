import React from "react";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logout, setUser } from "../../redux/features/userSlice";


function Navbar() {
  console.log("render | re-render NAVBAR");
  const reduxUser = useSelector((store: RootState) => store.user.value);
  return (
    <div>
      <div className="container flex items-center justify-between my-5">
        <Link
          to="/"
          className="text-[34px] font-semibold text-primary-dark font-josefin"
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
          {reduxUser && (
            <>
              <li>Orders</li>
              <li>carts</li>
            </>
          )}
          {reduxUser && reduxUser.isSeller && (
            <>
              <li>My Products</li>
            </>
          )}
        </ul>
        <form className="flex items-center">
          <input className=" border-[#E7E6EF] border-2 " />
          <button className="text-white bg-secondary py-2 px-3">
            <Search className="" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
