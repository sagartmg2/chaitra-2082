import React from "react";
import Header from "../components/layouts/Header";
import BreadCrumb from "../components/BreadCrumb";

export default function Login() {
  return (
    <>
      <BreadCrumb />
      <div className="container">
        <form>
          <p>Login</p>
          <p>Please login using account detail bellow.</p>

          <input className="border py-3.5 px-4" placeholder="email address" />
          <input className="border py-3.5 px-4" placeholder="password" />

          <p>Forgot your password?</p>

          <button className="bg-secondary py-3.5 text-white px-[190px]">Sign IN</button>

          <p>Don’t have an Account?Create account</p>
        </form>
      </div>
    </>
  );
}
