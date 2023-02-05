import { Box } from "@mui/material";
import React from "react";
import Image from "../../images/Home-Page/category-image.jpg";
export default function OrthopedicProducts() {
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  return (
    <>
      <Box className="orthopedic-products-bg md:block hidden"></Box>
      <Box className="flex flex-col gap-4 md:pt-8 pb-4 pt-[120px] pl-0 md:w-[80%] w-full mx-auto">
        <h1 className="md:text-5xl text-3xl font-bold md:pl-0 pl-4">
          {lenguage === "ru"
            ? "Ортопедических Изделий"
            : "Ortopedik mahsulotlar"}
        </h1>
        <img src={Image} className="w-full" alt="Theme" />
      </Box>
    </>
  );
}
