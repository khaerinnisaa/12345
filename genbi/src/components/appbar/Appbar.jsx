"use client";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonIcon from "@mui/icons-material/Person";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
// import { drawerWidth } from "@/values/Constant";
import { useDrawer } from "@/contexts/DrawerContext";
import { usePathname } from "next/navigation";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";

export default function Appbar({ judul, onClick, onChange, value }) {
  //   const { value, func } = NavbarDashboardLogic();
  const pathname = usePathname();
  const { drawerWidth, mt, open, handleDrawerOpen, handleDrawerClose } =
    useDrawer();

  // const AppBar = styled(MuiAppBar, {
  //   shouldForwardProp: (prop) => prop !== "open",
  // })(({ theme, open }) => ({
  //   transition: theme.transitions.create(["margin", "width"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   ...(open && {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: `${drawerWidth}px`,
  //     transition: theme.transitions.create(["margin", "width"], {
  //       easing: theme.transitions.easing.easeOut,
  //       duration: theme.transitions.duration.enteringScreen,
  //     }),
  //   }),
  // }));

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        width: open ? `calc(100% - ${drawerWidth}px) ` : "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        px: 2,
        height: "64px",
        boxShadow: "none",
      }}
    >
      {/* <Toolbar> */}
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <IconButton onClick={handleDrawerOpen} edge="start">
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        {/* search */}
        <Stack
          sx={{
            alignSelf: "center",
            display: pathname === "/dashboard" ? "none" : "flex",
          }}
        >
          <FormControl
            sx={{ m: 1, width: "300px", fontFamily: "myFont" }}
            variant="outlined"
            size="small"
            fullWidth
          >
            <OutlinedInput
              sx={{
                fontFamily: "myFont",
                borderRadius: "18px",
                backgroundColor: "#F8F8FF",
              }}
              value={value}
              onChange={onChange}
              placeholder="Search"
              // id="outlined-adornment-password"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="toggle password visibility">
                    <SearchIcon sx={{ color: "rgba(0,0,0, 0.3)" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
      </Stack>
      {pathname === "/dashboard" ? (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
            gap: 2,
          }}
        >
          <PersonIcon sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "30px" }} />
          <Typography
            sx={{
              color: "black",
              alignSelf: "center",
              fontWeight: "bold",
              fontFamily: "myFont",
            }}
          >
            Admin
          </Typography>
        </Stack>
      ) : (
        <Stack
          sx={{
            alignSelf: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#23176D",
              color: "#FFFFFF",
              textTransform: "none",
              gap: 1,
              px: 2,
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "#23176D",
              },
            }}
            onClick={onClick}
          >
            <AddBoxIcon />
            <Typography sx={{ fontFamily: "myFont", fontWeight: 500 }}>
              Tambah Data
            </Typography>
          </Button>
        </Stack>
      )}
      {/* </Toolbar> */}
    </AppBar>
  );
}
