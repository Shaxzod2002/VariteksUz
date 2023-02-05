import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";
import Menu from "./Menu";
import SocialMedia from "../SocialMedia";
export default function Navbar() {
  const [checkMenu, setCheckMenu] = useState(false);
  const [checkCannabisProduction, setCheckCannabisProduction] = useState(false);
  const navbar = useRef(null);
  const lenguage = localStorage.getItem("lenguage")
    ? localStorage.getItem("lenguage")
    : "ru";
  const cannabisProductionActive = () => {
    checkCannabisProduction
      ? setCheckCannabisProduction(false)
      : setCheckCannabisProduction(true);
  };
  const cannabisProductionNotActive = () => {
    setCheckCannabisProduction(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuActive = () => {
    checkMenu ? setCheckMenu(false) : setCheckMenu(true);
  };

  window.addEventListener("scroll", (event) => {
    navbar.current.classList.toggle(
      "active",
      event.target.defaultView.scrollY > 300
    );
  });
  return (
    <Box
      ref={navbar}
      className={
        "navbar fixed z-50 top-0 w-full min-h-[100px] flex justify-between items-center bg-white/40 "
      }
      paddingX={2}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLink
          to={"/"}
          className="sm:flex hidden"
          onClick={cannabisProductionNotActive}
        >
          <img src={Logo} alt="variteks" className="md:w-[200px] w-[150px]" />
        </NavLink>
        <a href="tel:+90 212 544 30 50">
          <Button
            variant="contained"
            color={"error"}
            sx={{ paddingY: "5px" }}
            className="capitalize"
          >
            {lenguage === "ru" ? "свяжитесь с нами" : "Buyurtma berish"}
          </Button>
        </a>
      </Box>
      <Box
        className={
          "menu md:flex items-center md:w-[65%] w-full justify-between px-2 " +
          (checkMenu ? "flex" : "hidden")
        }
      >
        <NavLink
          to={"/"}
          onClick={cannabisProductionNotActive}
          className="md:hidden flex py-4"
        >
          <img src={Logo} alt="variteks" className="w-[150px]" />
        </NavLink>
        <Menu
          data={{
            cannabisProductionActive,
            checkCannabisProduction,
            cannabisProductionNotActive,
            menuActive,
          }}
        />
        <Box className="flex gap-2 items-center py-2">
          <Box>
            <NavLink
              to={"/search"}
              className="nav-link"
              onClick={cannabisProductionNotActive}
            >
              <SearchIcon />
            </NavLink>
          </Box>
          <SocialMedia size={30} />
          <select
            className="duration-300 w-[80px] min-h-[30px] border border-[#c53631] hover:bg-[#c53631] rounded-md text-lg py-[3px] border-none text-black hover:text-white cursor-pointer"
            onChange={(event) => {
              location.reload();
              localStorage.setItem("lenguage", event.target.value);
            }}
          >
            <option>
              {localStorage.getItem("lenguage") === "ru" ? "Язык" : "Til"}
            </option>
            <option value="ru">Rus</option>
            <option value="uz">Uzb</option>
          </select>
        </Box>
      </Box>
      <Box
        className="cursor-pointer md:hidden flex w-[40px] h-[40px] rounded-[12px] bg-[#c53631] text-white items-center justify-center"
        onClick={() => {
          if (checkCannabisProduction) {
            setCheckCannabisProduction(false);
          } else {
            menuActive();
          }
        }}
      >
        <MenuIcon />
      </Box>
    </Box>
  );
}
