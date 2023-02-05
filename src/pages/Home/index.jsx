import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Axios } from "../../Api/Axios";
import TopSlider from "./TopSlider";
import parse from "html-react-parser";
import MainImage from "../../images/Home-Page/main.png";
import CategoryImage from "../../images/Home-Page/category-image.jpg";
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
  return (
    <>
      <TopSlider />
      <Box className="w-full flex md:flex-row flex-col min-h-0 pt-4">
        <Box className="md:w-1/2 w-full md:pl-10 pl-2 py-4 flex flex-col gap-3">
          <h1 className="text-4xl font-bold">
            {lenguage === "ru" ? "Кто такой Варитекс" : "Varitex kim"}
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
            <Button variant="contained" color="error">
              {lenguage === "ru"
                ? "Дополнительная Информация"
                : "Qo'shimcha ma'lumot"}
            </Button>
          </Link>
        </Box>
        <Box className="md:w-1/2 w-full flex justify-end">
          <img src={MainImage} className="max-w-[90%]" alt="main" />
        </Box>
      </Box>
      <Box>
        <img src={CategoryImage} className="w-full" alt="bg" />
      </Box>
      <Box className="w-full flex md:flex-row flex-col">
        <Box className="md:w-1/2 w-full md:pl-10 pl-2 flex flex-col gap-3 md:pt-8 py-4">
          <h1 className="lg:text-5xl text-3xl font-bold text-[#c53631]">
            {lenguage === "ru" ? "Новая продукция" : "Yangi mahsulotlar"}
          </h1>
          <p className="lg:text-lg w-[400px] max-w-[90%]">
            {lenguage === "ru"
              ? "Наша научно-исследовательская деятельность продолжается непрерывно, чтобы наши продукты оставались актуальными и не отставали от сегодняшнего времени, когда изменения и развитие ускоряются во всех областях. Разрабатывая существующие и разрабатывая новые продукты, мы руководствуемся принципом совместной поддержки и комфорта. Превращение некоторых наших маленьких штрихов в большие преимущества делает нас счастливыми и дает нам мотивацию на будущее."
              : "Mahsulotlarimiz dolzarb bo‘lib qolishi va barcha sohalarda o‘zgarishlar va rivojlanish jadallashib borayotgan bugungi zamon bilan hamnafas bo‘lishini ta’minlash uchun tadqiqot va ishlanmalarimiz uzluksiz davom etmoqda. Mavjud mahsulotlarni ishlab chiqish va yangi mahsulotlarni ishlab chiqishda biz birgalikda qo'llab-quvvatlash va qulaylik tamoyiliga amal qilamiz. Kichik teginishlarimizni katta foydaga aylantirish bizni xursand qiladi va kelajakka undaydi."}
          </p>
        </Box>
        <Box className="md:w-1/2 w-full py-5">
          <NewProducts />
        </Box>
      </Box>
    </>
  );
}
