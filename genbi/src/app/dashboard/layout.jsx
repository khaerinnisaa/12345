"use client";
import NavbarDashboard from "@/components/navbar/NavbarDashboard";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { fetchData } from "@/service/api";
import { Box, CssBaseline } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { resolve } from "styled-jsx/css";

const LayoutDashboard = ({ children }) => {
  const drawerWidth = 10;
  const token = Cookies.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push(`/login`);
    }
    autoLogoutTimer();
  }, []);

  // auto logout ketika sudah login selama 23 jam
  const autoLogoutTimer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 82800000));
    router.push(`/login`);
  };

  return (
    <section
      style={{
        display: "flex",
        backgroundColor: `#F5F6FA`,
        minHeight: "100vh",
        // fontFamily: "Poppins",
      }}
    >
      {/* <DrawerProvider> */}
        <CssBaseline />
        <NavbarDashboard />

        <Box
          // component="main"
          sx={{
            mt: drawerWidth,
            flexGrow: 1,
            paddingRight: 2,
          }}
        >
          {children}
        </Box>
      {/* </DrawerProvider> */}
    </section>
  );
};

export default LayoutDashboard;
