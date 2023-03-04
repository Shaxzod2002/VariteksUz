import { Box } from "@mui/material";
import React from "react";
import categoryImageRus from "../../images/Home-Page/variteksrus.jpg";
import categoryImageEng from "../../images/Home-Page/varitekseng.jpg";
import { Link } from "react-router-dom";
export default function OrthopedicProducts() {
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Box className="orthopedic-products-bg md:block hidden"></Box>
      <Box className="flex flex-col gap-4 md:pt-8 pt-[120px] pl-0 w-full mx-auto">
        <h1 className="md:text-5xl text-3xl font-bold md:pl-0 pl-4 md:w-[90%] mx-auto">
          {lenguage === "ru" ? "Ортопедических Изделий" : "Orthopedic Products"}
        </h1>
        <Box className="relative">
          <img
            src={lenguage === "ru" ? categoryImageRus : categoryImageEng}
            className="w-full"
            alt="bg"
          />
          <Link
            to={"/search"}
            className="w-[300px] absolute top-10 left-1/2 bg-[#a20000] text-white p-3 -translate-x-1/2 rounded-lg text-center"
            onClick={windowScrollTo}
          >
            {lenguage === "ru" ? "Поиск" : "Search"}
          </Link>
          <img
            src={lenguage === "ru" ? categoryImageRus : categoryImageEng}
            className="w-full"
            alt="bg"
          />
          <Link
            className="home-category-link absolute top-[33.7%] left-[50.7%]"
            to={"/category-page/9/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[42%] left-[49.2%]"
            to={"/category-page/1/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[40.6%] left-[54.2%]"
            to={"/category-page/16/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[45.8%] left-[45.2%]"
            to={"/category-page/8/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[54.7%] left-[34.3%]"
            to={"/category-page/17/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[57.3%] left-[48.6%]"
            to={"/category-page/15/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[59.8%] left-[53%]"
            to={"/category-page/2/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[62.8%] left-[53%]"
            to={"/category-page/23/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[69.5%] left-[49%]"
            to={"/category/2"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[74.5%] left-[54.2%]"
            to={"/category-page/3/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[78.2%] left-[47.5%]"
            to={"/category/2"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[81.2%] left-[54%]"
            to={"/category-page/33/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[87%] left-[45.4%]"
            to={"/category-page/19/1"}
            onClick={windowScrollTo}
          ></Link>
          <Link
            className="home-category-link absolute top-[88.5%] left-[54.7%]"
            to={"/category-page/18/1"}
            onClick={windowScrollTo}
          ></Link>
        </Box>
      </Box>
    </>
  );
}
