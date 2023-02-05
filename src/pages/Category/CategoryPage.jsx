import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";

export default function CategoryPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";

  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    const getProduct = async (url) => {
      const response = await Axios.get(url);
      setProduct(await response.data);
      setLoading(true);
    };
    getProduct(
      lenguage === "ru" ? `category/ru/product/` : `category/uz/product/`
    );
  }, []);
  let subcategory = product.filter(
    (item) =>
      item.product.sub_category.id ===
        Number(
          location.pathname.slice(
            location.pathname.length - 3,
            location.pathname.length - 2
          )
        ) && item
  );
  const [curentPage, setCurentPage] = useState(1);
  const productPerPage = 6;
  const indexOfLastPage = curentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const curentProduct = subcategory.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (pageNumber) => setCurentPage(pageNumber);
  return (
    <>
      <div className="product-category md:block hidden"></div>
      {curentProduct.length > 0 ? (
        <>
          {loading ? (
            <div className="md:w-[70%] w-full md:pt-8 pt-[120px] mx-auto min-h-0 py-5">
              <h1 className="md:text-4xl text-2xl font-bold md:text-left text-center">
                {lenguage === "ru"
                  ? "Брюшные Корсеты"
                  : "Qorin bo'shlig'i korsetlari"}
              </h1>
              <div className="flex flex-wrap my-6 md:justify-start justify-center items-center gap-8">
                {curentProduct.map((item) => (
                  <Link
                    key={item.product.id}
                    to={`/product/${item.product.id}`}
                    onClick={windowScrollTo}
                    className="flex flex-col items-center justify-start gap-3 w-[200px] rounded-xl min-h-[400px]"
                  >
                    <img
                      src={`https://azamjon.pythonanywhere.com${item.image[0].image}`}
                      className="w-full rounded-xl border-2 border-red-500"
                      alt={item.image[0].id}
                    />
                    <div className="flex flex-col text-center items-center justify-center">
                      <h3 className="text-xl font-semibold">
                        {item.product.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
              <Pagination
                paginate={paginate}
                totalProduct={subcategory.length}
                productPerPage={productPerPage}
              />
            </div>
          ) : (
            <Loading />
          )}
        </>
      ) : (
        <Box className="w-full flex justify-center">
          <h1 className="font-bold text-[#c53631]">
            {lenguage === "ru" ? "Товары не найдены" : "Mahsulotlar topilmadi"}
          </h1>
        </Box>
      )}
    </>
  );
}
