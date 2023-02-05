import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Loading from "../../components/Loading";
import { Axios } from "../../Api/Axios";

export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState([]);
  const [loading, setLoading] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getaboutUs = async (url) => {
      setAboutUs(await (await Axios.get(url)).data);
      setLoading(true);
    };
    getaboutUs(lenguage === "ru" ? "about/ru/about-us/" : "about/uz/about-us/");
  }, []);
  return (
    <Box>
      {loading ? (
        aboutUs.map((item) => {
          return (
            <Box
              key={item.id}
              className="md:w-[80%] w-full mx-auto md:pt-8 pb-4 pt-[100px] md:pl-0 pl-4"
            >
              <h1 className="md:text-5xl text-2xl font-bold">{item.title}</h1>
              {parse(item.text)}
            </Box>
          );
        })
      ) : (
        <Loading />
      )}
    </Box>
  );
}
