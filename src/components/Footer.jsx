import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "../Api/Axios";
import parse from "html-react-parser";

export default function Footer() {
  const [contact, setContact] = useState([]);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";

  useEffect(() => {
    const getContact = async (url) => {
      setContact(await (await Axios.get(url)).data);
    };
    getContact(lenguage === "ru" ? "contact/ru/" : "contact/uz/");
  }, []);

  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={"w-full min-h-[100px] p-4"}>
      <Box className="flex flex-wrap gap-4 justify-start">
        {contact.map((item, id) => {
          return (
            <Box className="text-white w-[300px] max-w-[95%]" key={id + 1}>
              <h3 className="text-white font-semibold">
                {lenguage === "ru" ? "Контакты" : "Kontaktlar"}
              </h3>
              {parse(item.address)}
              <Box className="py-3">
                <h3>
                  {lenguage === "ru" ? "Variteks Medikal" : "Variteks Medikal"}
                </h3>
                <Box className="flex flex-col gap-1 items-start">
                  <a href={`tel:${item.mobile_phone}`}>{item.mobile_phone}</a>
                  <a href={`tel:${item.facts_phone}`}>{item.facts_phone}</a>
                  <a href="mailto:info@variteks.com">info@variteks.com</a>
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box className="flex flex-col gap-2 items-start w-[300px] max-w-[95%]">
          <h3>{lenguage === "ru" ? "Корпоративный" : "Korporativ"}</h3>
          <Link to={"/about"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "О нас" : "Biz haqimizda"}
          </Link>
          <Link to={"/certificate"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "Сертификаты" : "Sertifikatlar"}
          </Link>
          <Link to={"/personne-management"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Управление-персоналом"
              : "Xodimlarni boshqarish"}
          </Link>
          <Link to={"/blog"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "Блог" : "Blog"}
          </Link>
        </Box>
        <Box className="flex flex-col gap-2 items-start w-[300px] max-w-[95%]">
          <h3>
            {lenguage === "ru" ? "Наша Продукция" : "Bizning ishlab chiqarish"}
          </h3>
          <Link to={"/category/1"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Ортопедические Издели"
              : "Ortopedik mahsulotlar"}
          </Link>
          <Link to={"/category/2"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Антиварикозные Изделия"
              : "Varikozga qarshi mahsulotlar"}
          </Link>
          <Link to={"/category/3"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Липосакционные корсеты"
              : "Liposaktsiya korsetlari"}
          </Link>
          <Link to={"/category/4"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "На заказ" : "Buyurtmaga"}
          </Link>
        </Box>
        <Box className="flex flex-col gap-2 items-start w-[300px] max-w-[95%]">
          <a
            className="download"
            download={"footer.png"}
            href={"../../images/Footer/bg.png"}
          >
            {lenguage === "ru" ? "Каталог" : "Katalog"}
          </a>
        </Box>
      </Box>
      <Box
        sx={{ width: "100%", textAlign: "center", color: "white" }}
        paddingY={2}
      >
        <p>
          {lenguage === "ru"
            ? "Copryright © Variteks 2023 | Защита авторских прав."
            : "Mualliflik huquqi © Variteks 2023 | Mualliflik huquqi himoyasi."}
        </p>
      </Box>
    </footer>
  );
}
