"use client";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonStyle = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  width: "45%",
  borderRadius: "8px",
  textTransform: "none",
  fontFamily: "myFont",
  "&:hover": {
    // boxShadow:
    //   "0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)",
    opacity: 0.8,
  },
}));

export { ButtonStyle };
