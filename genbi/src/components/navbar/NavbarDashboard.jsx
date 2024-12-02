import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  Stack,
  Typography,
  Divider,
  Grid,
  CircularProgress,
} from "@mui/material";

import { menuDashboard } from "@/values/Constant";
import "./page.css";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import DashboardLogic from "./NavbarDashboardLogic";
import { useDrawer } from "@/contexts/DrawerContext";
import { useParams } from "next/navigation";

export default function NavbarDashboard() {
  const { value, func } = DashboardLogic();
  const { drawerWidth, mt, open, loadingRoute } = useDrawer();
  const { slug } = useParams();

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(1.5),

      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
      marginTop: `${mt}px`,
      ...(open && {
        transition: theme.transitions.create("marginTop", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginTop: 0,
      }),
    })
  );

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: "flex-end",
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHeader> */}
        <Stack
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              mt: 2,
              fontWeight: 900,
              color: "#23176D",
              fontFamily: "MyFont",
              cursor: "pointer",
            }}
            onClick={func.handleClick}
          >
            GENBI UINAM
          </Typography>
          <Image
            src={Logo}
            width={150}
            height={150}
            style={{
              borderRadius: "50%",
              alignSelf: "center",
              marginTop: 6,
              cursor: "pointer",
            }}
            alt="tes"
            onClick={func.handleClick}
          />
        </Stack>
        {/* </DrawerHeader> */}
        {/* <Divider /> */}
        <Stack sx={{ width: "100%" }}>
          {menuDashboard.map((val) => {
            const activeRoutes = [
              "/dashboard/berita",
              "/dashboard/kabinet",
              "/dashboard/pengurus",
              "/dashboard/admin",
            ];

            const isActive =
              val.router === value.pathname ||
              (value.pathname.startsWith(val.router) &&
                activeRoutes.includes(val.router));

            return (
              <Stack
                sx={{ cursor: "pointer" }}
                key={val.title}
                onClick={() => func.handleMenuClick(val)}
              >
                <Grid
                  gap={2}
                  container
                  direction="row"
                  sx={{
                    alignContent: "center",
                    alignSelf: "center",
                    background: isActive ? "#23176D" : "#fff",
                    width: "200px",
                    padding: "8px",
                    borderRadius: "8px",
                    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    mt: 2,
                    "&:active": {
                      backgroundColor: "#23176D",
                    },
                  }}
                >
                  <Grid item xs={2} sx={{ marginLeft: "10px" }}>
                    <Typography
                      sx={{
                        width: "32px",
                        height: "30px",
                        textAlign: "center",
                        fontFamily: "MyFont",
                        borderRadius: "12px",
                        color: isActive ? "#FFFFFF" : "#576974",
                        "&:active": {
                          color: "white",
                        },
                      }}
                    >
                      {val.icon}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: isActive ? "#FFFFFF" : "#576974",
                        fontFamily: "MyFont",
                        fontWeight: 500,
                        fontSize: "16px",
                        pt: "4px",
                        "&:active": {
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      {val.title}
                      {loadingRoute === true && isActive && (
                        <CircularProgress
                          size={"20px"}
                          sx={{ color: "white" }}
                        />
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            );
          })}
        </Stack>
      </Drawer>
      <Main open={open}></Main>
    </Box>
  );
}
