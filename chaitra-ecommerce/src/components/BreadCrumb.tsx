import React from "react";
import { Link } from "react-router";

// @ts-ignore
export default function BreadCrumb({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <div className="bg-primary-lighter">
      <div className="container py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[80px] 2xl:py-[96px]">
        <p className="font-josefin text-primary-dark text-4xl font-bold">
          {title}
        </p>
        <ul className="mt-2 flex gap-4">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to={url}>{title}</Link>
            {/* <Link to="/products">Carts</Link> */}
          </li>
          <li>porduct name</li>
          {/* <li>
            <Link to="/login" className="text-secondary">
              My Account{" "}
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
