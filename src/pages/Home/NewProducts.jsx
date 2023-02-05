import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Axios } from "../../Api/Axios";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Loading from "../../components/Loading";
import { Button } from "@mui/material";
export default function NewProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getProduct = async (url) => {
      setProduct(await (await Axios.get(url)).data);
      setLoading(true);
    };
    getProduct(
      lenguage === "ru" ? "category/ru/product/" : "category/uz/product/"
    );
  }, []);

  const newProduct = product.filter((item) => item.product.new_product);
  return (
    <>
      {loading ? (
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
          className="min-h-0 mySwiper"
        >
          {newProduct.map((item, id) => {
            return (
              <SwiperSlide
                className="w-[240px] max-w-full min-h-0 flex flex-col items-center justify-center gap-2"
                key={id + 1}
              >
                <Box className="swiper-img-image overflow-hidden rounded-lg">
                  <img
                    src={`https://azamjon.pythonanywhere.com/${item.image[0].image}`}
                    className="duration-300 w-full hover:scale-[1.2]"
                    alt={item.image[0].id}
                  />
                </Box>
                <h3 className="text-[23px] text-center font-bold text-red-600">
                  {item.product.name.slice(0, 8)}
                </h3>
                <Link
                  to={`/product/${item.product.id}`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                    });
                  }}
                  className="pt-4"
                >
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{ fontSize: "20px" }}
                  >
                    {lenguage === "ru" ? "Подробности" : "Tafsilotlar"}
                  </Button>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Loading />
      )}
    </>
  );
}
