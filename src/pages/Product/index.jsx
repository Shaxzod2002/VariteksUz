import React, { useEffect, useState } from "react";
import { Axios } from "../../Api/Axios";
import { useLocation } from "react-router-dom";
import parser from "html-react-parser";
import Loading from "../../components/Loading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Socialmedia from "../../components/SocialMedia";
import { Box } from "@mui/system";
const API_URL = "https://azamjon.pythonanywhere.com/";
export default function Product() {
  const [productItem, setProductItem] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getProduct = async (url) => {
      const response = await Axios.get(url);
      setProductItem(await response.data);
      setLoading(true);
    };
    getProduct(
      lenguage === "ru"
        ? `category/ru/product/${location.pathname.split("/")[2]}`
        : `category/uz/product/${location.pathname.split("/")[2]}`
    );
  });
  if (!productItem) return null;
  return (
    <>
      <div className="product-category md:block hidden"></div>
      {loading ? (
        <div className="w-full min-h-screen md:pt-8 pt-[120px] py-6 px-4">
          <div
            key={productItem.product.id}
            className="md:w-[60%] w-full min-h-0 mx-auto py-5"
          >
            <h2 className="md:text-5xl text-2xl font-bold">
              {productItem.product.name}
            </h2>
            <div className="my-5 w-full flex md:flex-row flex-col md:justify-start justify-center items-center gap-4">
              <div className="w-[400px] max-w-[90%] h-full border-2 border-red-500 rounded-lg overflow-hidden relative">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  loop={true}
                  autoplay={true}
                  className="mySwiper swiperMain"
                >
                  {productItem["main-image"] &&
                    productItem["main-image"].map((item) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <img
                            className="w-full"
                            src={`https://azamjon.pythonanywhere.com${item.image}`}
                            alt={item.id}
                          />
                          {!productItem.product.is_active && (
                            <Box className="absolute top-0 left-0 w-full h-[510px] bg-black/70 flex justify-center items-center">
                              <h1 className="bg-black w-full text-white text-center uppercase">
                                The product is not available
                              </h1>
                            </Box>
                          )}
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <div className="w-[400px] max-w-[90%] md:min-h-[450px] min-h-0 gap-4 flex flex-col justify-between">
                <h3 className="text-red-500 text-2xl font-semibold">
                  {lenguage === "ru" ? "Показания" : "Indications"}
                </h3>
                <p>{parser(productItem.product.text)}</p>
                <img
                  className="w-[300px] max-w-[90%]"
                  src={`https://azamjon.pythonanywhere.com${productItem["post-image"][0].image}`}
                  alt={productItem["post-image"][0].id}
                />
                <Socialmedia size={40} />
              </div>
            </div>
            {productItem["features"] && (
              <Box className="w-full py-4">
                <h1 className="md:text-5xl text-3xl text-[#c53631] font-bold">
                  {lenguage === "ru"
                    ? "Характеристики изделия"
                    : "Product characteristics"}
                </h1>
                <Box className="w-full flex flex-wrap gap-4 justify-start pt-8">
                  {productItem["features"].map((item) => {
                    return (
                      <Box
                        className="flex justify-center items-center gap-3 flex-col w-[200px] text-center"
                        key={item.id}
                      >
                        <img src={API_URL + item.image} alt={item.id} />
                        <Box className="flex flex-col justify-center">
                          <h2 className="font-bold">{item.name}</h2>
                          <p>{item.text}</p>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            )}
            {productItem["product-detail"].length !== 0 && (
              <Box className="w-full py-4">
                <h1 className="md:text-5xl text-3xl text-[#c53631] font-bold">
                  {lenguage === "ru"
                    ? "Информация о продукте"
                    : "Product information"}
                </h1>
                <Box className="w-full flex flex-wrap gap-4 justify-start pt-8">
                  {productItem["product-detail"].map((item) => {
                    return (
                      <Box
                        className="flex justify-center items-center gap-3 flex-col w-[200px] text-center"
                        key={item.id}
                      >
                        <img src={API_URL + item.image} alt={item.id} />
                        <Box className="flex flex-col justify-center">
                          <h2 className="font-bold">{item.name}</h2>
                          <p>{item.text}</p>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-full min-h-[50vh] justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  );
}
