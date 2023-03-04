import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";
import Logo from "../../images/logo.png";
export default function CategoryPage() {
  const [product, setProduct] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
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

    const getSubCategory = async (url) => {
      const res = await Axios.get(url);
      setSubCategory(await res.data);
      setSubLoading(true);
    };
    getSubCategory(
      lenguage === "ru"
        ? `category/ru/subcategory/`
        : `category/uz/subcategory/`
    );
  }, []);
  let subcategory = product.filter(
    (item) =>
      item.product.sub_category.id ===
        Number(location.pathname.split("/")[2]) && item
  );
  const [curentPage, setCurentPage] = useState(1);
  const productPerPage = 6;
  const indexOfLastPage = curentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const curentProduct = subcategory.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (pageNumber) => setCurentPage(pageNumber);

  const filterSubCategory = subCategory.filter(
    (item) => item.id === Number(location.pathname.split("/")[2])
  );
  return (
    <>
      <div className="product-category md:block hidden"></div>
      {loading ? (
        <>
          {curentProduct.length > 0 ? (
            <div className="md:w-[70%] w-full md:pt-8 pt-[120px] mx-auto min-h-[50vh] py-5">
              {subLoading ? (
                <>
                  {filterSubCategory.map((item) => {
                    return (
                      <h1 className="md:text-4xl text-2xl font-bold md:text-left text-center">
                        {item.name}
                      </h1>
                    );
                  })}
                </>
              ) : (
                <Loading />
              )}
              <div className="flex flex-wrap my-6 md:justify-start justify-center items-center gap-8">
                {curentProduct.map((item) => (
                  <Link
                    key={item.product.id}
                    to={`/product/${item.product.id}`}
                    onClick={windowScrollTo}
                    className="flex flex-col items-center justify-start gap-3 w-[200px] rounded-xl min-h-[400px]"
                  >
                    <img
                      src={
                        item.image[0]
                          ? `https://azamjon.pythonanywhere.com${item.image[0].image}`
                          : Logo
                      }
                      className="w-full rounded-xl border-2 border-red-500"
                      alt={item.image[0].id}
                    />
                    <div className="flex flex-col text-center items-center justify-center">
                      <h3 className="text-xl font-semibold">
                        {item.product && item.product.name}
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
            <Box className="w-full flex justify-center min-h-[50vh]">
              <h1 className="font-bold text-[#c53631]">
                {lenguage === "ru"
                  ? "Товары не найдены"
                  : "No goods were found"}
              </h1>
            </Box>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
