import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logout, setUser } from "../../redux/features/userSlice";
import Navbar from "./Navbar";
type propsType = {
  isLoggedIn: boolean;
};

function Header() {
  const reduxUser = useSelector((store: RootState) => store.user.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(setUser(null));
    dispatch(logout());
  };

  return (
    <>
      <header>
        <div className="bg-primary-light">
          <div className="container flex justify-between py-4  text-white ">
            <div>
              <span className="mr-3">mer@gamil.com</span>
              <span>+977 9840234234</span>
            </div>
            <div className="flex">
              {reduxUser ? (
                <>
                  <span className="mr-4">{reduxUser.firstName}</span>
                  <button onClick={handleLogout}>logout</button>
                </>
              ) : (
                <>
                  <Link to="/login">login</Link>
                </>
              )}
              &nbsp;
              <div className="relative">
                <ShoppingCart />
                <span className=" absolute -top-4 -right-7  w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white">1</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
