import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Axios } from "../../../Api/Axios";
import Loading from "../../Loading";

export default function CategoryLink({ data }) {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  useEffect(() => {
    const getCategory = async (url) => {
      setCategory(await (await Axios.get(url)).data);
    };
    getCategory(
      lenguage === "ru" ? "category/ru/category/" : "category/uz/category/"
    );
  }, []);
  useEffect(() => {
    const getSubcategory = async (url) => {
      setSubcategory(await (await Axios.get(url)).data);
      setLoading(true);
    };
    getSubcategory(
      lenguage === "ru"
        ? "category/ru/subcategory/"
        : "category/uz/subcategory/"
    );
  }, []);
  return (
    <Box
      className={
        "fixed top-[100px] left-0 w-full h-screen overflow-y-auto z-20 bg-white " +
        (data.checkCannabisProduction ? "" : "hidden")
      }
    >
      {loading ? (
        <Box
          className="category-menu w-full min-h-[60px] flex justify-center items-start gap-4 py-4 flex-wrap"
          paddingX={4}
        >
          {category.map((item) => {
            return (
              <Box key={item.id}>
                <NavLink
                  to={
                    item.id === 1
                      ? `/category/1`
                      : item.id === 2
                      ? `/category/2`
                      : item.id === 3
                      ? "/category/3"
                      : "/category/4"
                  }
                  className=" w-[250px] category inline-block text-left border-b-2 rounded-b-none hover:rounded-[4px] border-[#c53631]"
                  onClick={() => {
                    data.cannabisProductionActive();
                    data.menuActive();
                  }}
                >
                  {item.name}
                </NavLink>
                <Box className="mt-4 w-[250px]">
                  {subcategory.map(
                    (sub) =>
                      sub.category.id === item.id && (
                        <Box key={sub.id}>
                          <NavLink
                            to={`/category-page/${sub.id}/1`}
                            className="duration-300 text-[16px] subcategory"
                            onClick={() => {
                              data.cannabisProductionActive();
                              data.menuActive();
                            }}
                          >
                            {sub.name}
                          </NavLink>
                        </Box>
                      )
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Loading />
      )}
    </Box>
  );
}
