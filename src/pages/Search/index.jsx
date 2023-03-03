import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function Search() {
  const [search, setSearch] = useState("");
  const searchArray = search.split(" ");
  let searchString = "";
  for (let i = 0; i < searchArray.length; i++) {
    searchString = searchString + "+" + searchArray[i];
  }
  searchString = searchString.slice(1);
  localStorage.setItem("search", searchString);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  return (
    <div className="min-h-screen search flex justify-center items-center">
      <form
        action="/search-products/1"
        className="flex w-[500px] max-w-[90%] justify-between items-center border-b-2 border-white"
      >
        <input
          required
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder={lenguage === "ru" ? "Поиск" : "Search"}
          className="bg-transparent p-2 placeholder:text-white text-2xl outline-none border-none text-white"
        />
        <FaSearch className="text-2xl text-white" />
      </form>
    </div>
  );
}
