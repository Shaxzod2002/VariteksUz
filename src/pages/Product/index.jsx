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
              <div className="w-[400px] max-w-[90%] h-full border-2 border-red-500 rounded-lg overflow-hidden">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  loop={true}
                  autoplay={true}
                  className="mySwiper swiperMain"
                >
                  {productItem["main-image"].map((item) => {
                    return (
                      <SwiperSlide>
                        <img
                          className="w-full"
                          src={`https://azamjon.pythonanywhere.com${item.image}`}
                          alt={item.id}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="w-[400px] max-w-[90%] h-[450px] flex flex-col justify-between">
                <h3 className="text-red-500 text-2xl font-semibold">
                  {lenguage === "ru" ? "Показания" : "Ko'rsatkichlar"}
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
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
