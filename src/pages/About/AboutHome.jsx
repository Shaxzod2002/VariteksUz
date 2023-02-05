import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Loading from "../../components/Loading";
import { Axios } from "../../Api/Axios";
import { Box } from "@mui/system";
const API_URL = "https://azamjon.pythonanywhere.com";
export default function AboutHome() {
  const [home, setHome] = useState({});
  const [loading, setLoading] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getHome = async (url) => {
      setHome(await (await Axios.get(url)).data);
      setLoading(true);
    };
    getHome(lenguage === "ru" ? "about/ru/home/" : "about/uz/home/");
  }, []);

  const StarGroup = ({ stars }) => {
    for (let i = 0; i < stars.length; i++) {
      return <StarIcon />;
    }
  };

  return (
    <>
      {loading ? (
        <>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            breakpoints={{
              400: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              600: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
            modules={[Pagination, Navigation]}
            navigation={{ clickable: true }}
            className="md:w-[80%] w-full mx-auto min-h-0 mySwiper"
          >
            {home.comment.map((item) => {
              return (
                <SwiperSlide
                  className="w-[240px] max-w-full min-h-[200px] flex flex-col items-center justify-between gap-2"
                  key={item.id}
                >
                  <img
                    className="w-[50px] h-[50px] object-cover rounded-full"
                    src={API_URL + item.image}
                    alt={item.name}
                  />
                  <div className="">
                    <StarGroup stars={item.stars} />
                  </div>
                  <p>{item.text.slice(0, 300)}</p>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box className="mt-20 mb-4 md:w-[80%] w-full mx-auto min-h-[100px] flex flex-col justify-center items-center gap-4">
            <Box className="relative w-full h-[4px] bg-gray-400 flex justify-center items-center">
              <h1 className="absolute -top-10">
                {lenguage === "ru" ? "НАШИ ПАРТНЕРЫ" : "BIZNING HAMKORLIK"}
              </h1>
              <Box className="w-[30%] h-[4px] bg-blue-500"></Box>
            </Box>
            <Box className="flex flex-wrap w-full gap-2">
              {home["partner-image"].map((item) => {
                return (
                  <Box key={item.id}>
                    <img src={API_URL + item.image} alt={item.id} />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box className="mt-20 mb-4 md:w-[80%] w-full mx-auto min-h-[100px] flex flex-col justify-center items-center gap-4">
            <Box className="relative w-full h-[4px] bg-gray-400 flex justify-center items-center">
              <h1 className="absolute -top-10">
                {lenguage === "ru" ? "НАМ ДОВЕРЯЮТ" : "BIZGA ISHONCHIDAN"}
              </h1>
              <Box className="w-[30%] h-[4px] bg-blue-500"></Box>
            </Box>
            <Box className="flex flex-wrap w-full gap-2">
              {home["support-image"].map((item) => {
                return (
                  <Box key={item.id}>
                    <img src={API_URL + item.image} alt={item.id} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
