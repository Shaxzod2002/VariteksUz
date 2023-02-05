import { Box } from "@mui/material";
import React from "react";
import AboutCard from "./AboutCard";
import AboutUs from "./AboutUs";
import AboutHome from "./AboutHome";
import Maps from "../../components/Maps";

export default function About() {
  return (
    <>
      <Box className="about-bg md:flex hidden"></Box>
      <AboutUs />
      <AboutCard />
      <AboutHome />
    </>
  );
}
