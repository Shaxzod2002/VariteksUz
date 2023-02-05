import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Pagination({ totalProduct, productPerPage, paginate }) {
  const pageNumbers = [];
  const location = useLocation();
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="w-full min-h-[60px] flex justify-center gap-4 items-center">
      {pageNumbers.length > 1
        ? pageNumbers.map((number) => (
            <NavLink
              to={`/category-page/${location.pathname.split("/")[2]}/${number}`}
              key={number}
              onClick={() => {
                window.scrollTo({
                  top: 50,
                  behavior: "smooth",
                });
                paginate(number);
              }}
              className="pagitation duration-300 w-[40px] h-[40px] flex cursor-pointer justify-center bg-white border border-[#c53631] text-black items-center hover:bg-[#d0d0d0]"
            >
              {number}
            </NavLink>
          ))
        : null}
    </div>
  );
}
