import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import Loading from "../../components/Loading";

const LiposuctionCorsets = () => {
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  const location = useLocation();
  const [subcategory, setSubcategory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getSubCategory = async (url) => {
      const response = await Axios.get(url);
      setSubcategory(await response.data);
      setLoading(true);
    };
    getSubCategory(
      lenguage === "ru"
        ? "category/ru/subcategory/"
        : "category/uz/subcategory/"
    );
  }, []);
  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const filterSubcategory = subcategory.filter((item) =>
    item.category.id === Number(location.pathname.split("/")[2]) ? item : null
  );
  return (
    <>
      <div className="liposuction-corsets-bg lg:block hidden"></div>
      {loading ? (
        <div className="w-full min-h-0 py-5 md:pt-8 pt-20">
          <div className="md:w-[70%] w-[90%] mx-auto md:pl-0 pl-3">
            <h1 className="md:text-4xl text-2xl font-bold">
              {lenguage === "ru"
                ? "КОРСЕТЫ ДЛЯ ЛИПОСАКЦИИ"
                : "LIPOSAKSIYA UCHUN KORSELAR"}
            </h1>
            <p className="text-[18px]">
              {lenguage === "ru"
                ? "Обеспечивают контролируемое давление на зону воздействия. Обеспечивают комфорт параллельно с эффективным сжатием, благодаря дышащей ткани, швам и форме. Обеспечивают микромассажный эффект на тело,благодаря разнонаправленной эластичной ткани. Используются после операций по липосакции в таких областях, как живот, бедра,спина,икры,руки и лицо.Способствуют уменьшению отеков после операции,придают форму линиям тела, и ускоряют процесс заживления.В наших изделиях для липосакции мы используем оригинальную лайкру."
                : "Ta'sir qilingan hududga nazorat ostida bosim o'tkazing. Nafas oluvchi mato, tikuv va shakl tufayli samarali siqilish bilan birga qulaylikni ta'minlaydi. Ular ko'p yo'nalishli elastik mato tufayli tanaga mikro-massaj ta'sirini ta'minlaydi. Qorin, son, orqa, boldir, qo'l va yuz kabi sohalarda liposaktsiya operatsiyalaridan keyin qo'llaniladi.Jarrohlikdan keyin shishishni kamaytirishga, tananing chiziqlarini shakllantirishga va shifo jarayonini tezlashtirishga yordam beradi.Liposaktsiya uchun mahsulotlarimizda biz foydalanamiz. original Lycra."}
            </p>
          </div>
          <div className="md:w-[70%] w-[90%] mx-auto min-h-0 py-5">
            <h3 className="md:text-4xl text-2xl font-bold md:text-left text-center">
              {lenguage === "ru"
                ? "Брюшные Корсеты"
                : "Qorin bo'shlig'i korsetlari"}
            </h3>
            <div className="w-full flex flex-wrap my-6 md:justify-start justify-center items-center gap-5">
              {filterSubcategory.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  onClick={windowScrollTo}
                  className="flex flex-col items-center justify-between gap-3 w-[200px] rounded-xl min-h-[300px]"
                >
                  <img
                    src={item.image}
                    className="w-full h-[250px] rounded-xl border-2 border-red-500"
                    alt={item.id}
                  />
                  <div className="w-full flex flex-col text-center items-center justify-start">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default LiposuctionCorsets;