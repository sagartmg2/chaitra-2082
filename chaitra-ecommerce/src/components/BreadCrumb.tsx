import { Circle, Dot } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";

// @ts-ignore
export default function BreadCrumb({
  title,
  urls,
}: {
  title?: string;
  urls?: { title: string; link: string }[];
}) {
  const location = useLocation();

  let pathname = location.pathname; // /products/5
  let pathnameArr = pathname.split("/"); // ["","products","5"]
  pathnameArr = pathnameArr.splice(1); // ["products","5"]

  return (
    <div className="bg-primary-lighter">
      <div className="container py-[40px] sm:py-[48px] md:py-[56px] lg:py-[64px] xl:py-[80px] 2xl:py-[96px]">
        <p className="font-josefin text-primary-dark text-4xl font-bold capitalize">
          {title || pathnameArr[0]}
        </p>
        <ul className="mt-2 flex gap-4 capitalize">
          <li>
            <Link to="/" className="hover:text-secondary">Home </Link>
          </li>
          <li>
            <Dot className="text-secondary inline-block" size={24} />
          </li>

          {urls ? (
            <>
              {urls.map((el, index) => {
                return (
                  <li key={index}>
                    <Link to={el.link}>{el.title}</Link>
                  </li>
                );
              })}
            </>
          ) : (
            <>
              {pathnameArr.map((el, index) => {
                return (
                  <li key={index}>
                    <Link className="hover:text-secondary" to="/">{el}</Link>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
