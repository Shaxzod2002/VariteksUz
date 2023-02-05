import { Box } from "@mui/material";
import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  const style = {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Box sx={style}>
      <ReactLoading
        type="spinningBubbles"
        color="#000"
        width={"80px"}
        height={"80px"}
      />
    </Box>
  );
}
