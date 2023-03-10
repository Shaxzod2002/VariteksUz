import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "../Api/Axios";
import parse from "html-react-parser";
import logo from "../images/logo-light.webp"
export default function Footer() {
  const [contact, setContact] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";

  useEffect(() => {
    const getContact = async (url) => {
      setContact(await (await Axios.get(url)).data);
    };
    getContact(lenguage === "ru" ? "contact/ru/" : "contact/uz/");
  }, []);

  useEffect(() => {
    const getCatalog = async (url) => {
      setCatalog(await (await Axios.get(url)).data);
    };
    getCatalog("about/ru/downlad/");
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
        <Box className="flex flex-col gap-2 items-start w-[250px] max-w-[95%]">
          <img src={logo} alt="Varitek Uz" />
        </Box>
        <Box className="flex flex-col gap-2 items-start w-[250px] max-w-[95%]">
          <h3>{lenguage === "ru" ? "Корпоративный" : "Corporate"}</h3>
          <Link to={"/about"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "О нас" : "About us"}
          </Link>
          <Link to={"/certificate"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "Сертификаты" : "Certificates"}
          </Link>
          <Link to={"/personne-management"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Управление-персоналом"
              : "Personnel management"}
          </Link>
          <Link to={"/blog"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "Блог" : "Blog"}
          </Link>
        </Box>
        <Box className="flex flex-col gap-2 items-start w-[250px] max-w-[95%]">
          <h3>{lenguage === "ru" ? "Наша Продукция" : "Our production"}</h3>
          <Link to={"/category/1"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Ортопедические Издели"
              : "Orthopedic products"}
          </Link>
          <Link to={"/category/2"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Антиварикозные Изделия"
              : "Anti varicose products"}
          </Link>
          <Link to={"/category/3"} onClick={windowScrollTo}>
            {lenguage === "ru"
              ? "Липосакционные корсеты"
              : "Liposuction corsets"}
          </Link>
          <Link to={"/category/4"} onClick={windowScrollTo}>
            {lenguage === "ru" ? "На заказ" : "To order"}
          </Link>
        </Box>
        <Box className="flex flex-col gap-2 items-start w-[250px] max-w-[95%]">
          <h3>{lenguage === "ru" ? "Каталог" : "Catalog"}</h3>
          {catalog.map((item) => {
            return (
              <a
                href={item.file_pdf}
                target={"_blank"}
                key={item.id}
                download={item.file_pdf}
              >
                {item.name}
              </a>
            );
          })}
        </Box>
        {contact.map((item, id) => {
          return (
            <Box className="text-white w-[250px] max-w-[95%]" key={id + 1}>
              <h3 className="text-white font-semibold">
                {lenguage === "ru" ? "Контакты" : "Contacts"}
              </h3>
              {parse(item.address)}
              <Box className="py-3">
                <h3>
                  {lenguage === "ru" ? "Variteks Medikal" : "Variteks medikal"}
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
      </Box>
      <Box
        sx={{ width: "100%", textAlign: "center", color: "white" }}
        paddingY={2}
      >
        <p>
          {lenguage === "ru"
            ? "Copryright © Variteks 2023 | Защита авторских прав."
            : "Copryright © Variteks 2023 | All Rights Reserved."}
        </p>
      </Box>
    </footer>
  );
}
