import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { Axios } from "../../Api/Axios";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";

export default function SearchProduct() {
  const [searchProduct, setSearchProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getSearchProduct = async (url) => {
      const response = await Axios.get(url);
      setSearchProduct(await response.data);
      setLoading(true);
    };
    getSearchProduct(
      lenguage === "ru"
        ? `/category/ru/product/?search=${localStorage.getItem("search")}`
        : `/category/uz/product/?search=${localStorage.getItem("search")}`
    );
  }, []);
  const windowScrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };
  const [curentPage, setCurentPage] = useState(1);
  const productPerPage = 8;
  const indexOfLastPage = curentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const curentProduct = searchProduct.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (pageNumber) => setCurentPage(pageNumber);
  if (!searchProduct) return null;
  return (
    <>
      <div className="product-category md:block hidden"></div>
      <div className="md:w-[70%] w-[95%] mx-auto flex flex-col gap-4 md:pt-4 pb-4 pt-[120px]">
        <h1 className="md:text-5xl text-3xl font-bold">
          {lenguage === "ru" ? "Найденные продукты" : "Topilgan Mahsulotlar"}
        </h1>
        <div className="w-full flex flex-wrap my-6 lg:justify-start justify-center items-center gap-4">
          {loading ? (
            <>
              {curentProduct.map((product) => (
                <Link
                  key={product.product.id}
                  to={`/product/${product.product.id}`}
                  onClick={windowScrollTo}
                  className="flex flex-col items-center justify-start gap-3 w-[200px] rounded-xl min-h-[400px]"
                >
                  <img
                    src={`https://azamjon.pythonanywhere.com${product.image[0].image}`}
                    className="w-full rounded-xl border-2 border-red-500"
                    alt={product.image[0].id}
                  />
                  <div className="flex flex-col text-center items-center justify-center">
                    <h3 className="text-2xl font-semibold">
                      {product.product.name}
                    </h3>
                  </div>
                </Link>
              ))}
              <Pagination
                paginate={paginate}
                totalProduct={searchProduct.length}
                productPerPage={productPerPage}
              />
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
