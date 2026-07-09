import React from "react";
import Header from "../components/layouts/Header";
import Banner from "../assets/banner.png";
import Banner2 from "../assets/banner-2.jpg";
// import Slider from "react-slick";

import _Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = (_Slider as any).default;

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className=""></div>
      <Slider {...settings}>
        {[
          {
            banner: Banner,
          },
          {
            banner: Banner2,
          },
        ].map((el) => {
          return (
            <div className="relative">
              <img src={el.banner} className="w-full h-[700px]" />
              <div
                className="absolute top-1/2 left-0 w-full"
                // style={{ transform: "translateY(-50%)" }}
              >
                <div className="container pl-15">
                  <p className="font-josefin text-[24px] font-bold sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
                    New Furniture Collection
                  </p>
                  <p className="font-josefin text-[24px] font-bold sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
                    Trends in 2020
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* <img src="../src/assets/banner.png" /> */}

      <div>
        <div className="container grid grid-cols-4">
          {[1, 2, 3, 4].map((el) => {
            return (
              <div className="border p-5">
                <p>poructs</p>
                <button>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
