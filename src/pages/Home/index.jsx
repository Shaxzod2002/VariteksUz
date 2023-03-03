import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Axios } from "../../Api/Axios";
import TopSlider from "./TopSlider";
import parse from "html-react-parser";
import MainImage from "../../images/Home-Page/main.png";
import categoryImageRus from "../../images/Home-Page/variteksrus.jpg";
import categoryImageEng from "../../images/Home-Page/varitekseng.jpg";
import { Link } from "react-router-dom";
import NewProducts from "./NewProducts";
import Loading from "../../components/Loading";
export default function Home() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const aboutUs = async (url) => {
      setAbout(await (await Axios.get(url)).data);
      setLoading(true);
    };
    aboutUs(lenguage === "ru" ? "about/ru/about-us/" : "about/uz/about-us/");
  }, []);

  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <TopSlider />
      <Box className="w-full flex lg:flex-row flex-col min-h-0 pt-4 md:justify-end">
        <Box className="lg:w-1/2 w-full md:pl-10 pl-4 py-8 flex flex-col gap-3">
          <h1 className="text-6xl font-bold">
            {lenguage === "ru" ? "Кто такой Варитекс" : "WHO IS VARITEKS"}
            <span className="text-[#c53631]">?</span>
          </h1>
          {loading ? (
            about.map((item) => {
              return parse(item.text);
            })
          ) : (
            <Loading />
          )}
          <Link to={"/about"}>
            <Button variant="contained" sx={{ fontSize: "25px" }} color="error">
              {lenguage === "ru"
                ? "Дополнительная Информация"
                : "More Information"}
            </Button>
          </Link>
        </Box>
        <Box className="lg:w-[40%] w-full flex justify-end">
          <img
            src={MainImage}
            className="max-w-[90%] object-cover"
            alt="main"
          />
        </Box>
      </Box>
      <Box className="relative">
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
          to={"/category-page/18/1"}
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
          to={"/category-page/123/1"}
          onClick={windowScrollTo}
        ></Link>
        <Link
          className="home-category-link absolute top-[74.5%] left-[54.2%]"
          to={"/category-page/3/1"}
          onClick={windowScrollTo}
        ></Link>
        <Link
          className="home-category-link absolute top-[78.2%] left-[47.5%]"
          to={"/category-page/123/1"}
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
      <Box className="w-full flex md:flex-row flex-col gap-4">
        <Box className="md:w-1/2 w-full md:pl-10 pl-2 flex flex-col gap-3 md:pt-8 py-4 items-end">
          <Box className="w-[600px] mt-[50px]">
            <h1 className="lg:text-6xl text-3xl font-extrabold text-[#c53631]">
              {lenguage === "ru" ? "Новая продукция" : "NEW PRODUCTS"}
            </h1>
            <p className="lg:text-[20px] max-w-[90%]">
              {lenguage === "ru"
                ? "Наша научно-исследовательская деятельность продолжается непрерывно, чтобы наши продукты оставались актуальными и не отставали от сегодняшнего времени, когда изменения и развитие ускоряются во всех областях. Разрабатывая существующие и разрабатывая новые продукты, мы руководствуемся принципом совместной поддержки и комфорта. Превращение некоторых наших маленьких штрихов в большие преимущества делает нас счастливыми и дает нам мотивацию на будущее."
                : "Our R&D activities are in progress continuously in order to keep our products up-to-date and catch the age in today's world where change and development is accelerating in every field. While designing new products and developing our existing products we act with the principle of offering support and comfort together. The fact that some of our small touches turn into great benefits blisses us out and motivate us for the future."}
            </p>
          </Box>
        </Box>
        <Box className="md:w-1/2 w-full py-5">
          <NewProducts />
        </Box>
      </Box>
    </>
  );
}
