import React, { useState } from "react";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import CategoryLink from "./CategoryLink";

export default function Menu({ data }) {
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  return (
    <Box className="menu-links h-full flex items-center gap-3">
      <NavLink
        to="/about"
        className={"nav-link"}
        onClick={() => {
          data.cannabisProductionNotActive();
          data.menuActive();
        }}
      >
        {lenguage === "ru" ? "О нас" : "Biz haqimizda"}
      </NavLink>
      <button
        className="nav-link"
        onClick={() => {
          data.cannabisProductionActive();
        }}
      >
        {lenguage === "ru" ? "Наша продукция" : "Bizning mahsulotimiz"}
      </button>
      <CategoryLink data={data} />
      <NavLink
        to={"/blog"}
        className={"nav-link"}
        onClick={() => {
          data.cannabisProductionNotActive();
          data.menuActive();
        }}
      >
        {lenguage === "ru" ? "Блог" : "Blog"}
      </NavLink>
      <button className="nav-link relative contact z-10">
        {lenguage === "ru" ? "Контакты" : "Kontaktlar"}
        <Box
          width={"250px"}
          className="contact-pages left-0 flex flex-col items-start text-left gap-1 font-normal absolute top-full py-3 px-1 bg-white shadow-lg shadow-gray-400 rounded-md scale-0"
        >
          <NavLink
            to={"/contact-us"}
            onClick={() => {
              data.cannabisProductionNotActive();
              data.menuActive();
            }}
            className="hover:text-[#c53631] contact-page-link"
          >
            {lenguage === "ru" ? "Связаться с нами" : "Biz bilan bog'lanish"}
          </NavLink>
          <NavLink
            to={"/personne-management"}
            onClick={() => {
              data.cannabisProductionNotActive();
              data.menuActive();
            }}
            className="hover:text-[#c53631] contact-page-link"
          >
            {lenguage === "ru"
              ? "Управление-персоналом"
              : "Xodimlarni boshqarish"}
          </NavLink>
        </Box>
      </button>
    </Box>
  );
}
