"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarMenu } from "@/values/Constant";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // ketika logo dan Genbi UINAM di klik
  const handleClick = () => {
    if (pathname !== "/") {
      setLoading(true);
      router.push("/");
    }
  };

  // ketika menu navbar d klik
  const handleOnclickMenu = async (item) => {
    setAnchorElNav(null);

    if (item !== "" && item !== pathname) {
      setLoading(true);
      router.push(item);
    } else {
      try {
        // router.push("/");
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* tampilan desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Image
                src={Logo}
                width={55}
                height={55}
                alt="Picture of the author"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              />
              <Typography
                variant="h6"
                mt={"10px"}
                sx={{
                  fontWeight: 700,
                  color: "#23176D",
                  fontFamily: "myFont",
                }}
                onClick={handleClick}
              >
                GENBI UINAM
              </Typography>
            </Box>

            {/* navbar tampilan desktop */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: { xs: "none", md: "40%", lg: "35%" },
                justifyContent: "space-between",
                paddingTop: "15px",
              }}
            >
              {NavbarMenu.map((page) => {
                const activeRoutes = ["/berita", "/pengurus", "/tentang_kami"];

                const isActive =
                  page.router === pathname ||
                  (pathname.startsWith(page.router) &&
                    activeRoutes.includes(page.router));
                return (
                  <Typography
                    key={page.id}
                    onClick={() => handleOnclickMenu(page.router)}
                    sx={{
                      borderBottom: isActive ? "3px #007AFF solid" : "none",
                      cursor: "pointer",
                      height: "25px",
                      color: "#000000",
                      fontFamily: "myFont",
                      opacity: "0.8",
                      fontWeight: isActive ? 600 : 500,
                      "&:hover": {
                        borderBottom: "3px #007AFF solid",
                      },
                    }}
                  >
                    {page.title}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          {/*tampilan mobile */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            {/* logo tampilan mobile */}
            <div style={{ marginTop: "5px" }}>
              <Image
                src={Logo}
                width={40}
                height={40}
                alt="Picture of the author"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div style={{ marginTop: "7px" }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#23176D",
                  fontWeight: "bold",
                  mt: "3px",
                  fontFamily: "myFont",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                GENBI UINAM
              </Typography>
            </div>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                // color="b/"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {NavbarMenu.map((page) => {
                  const activeRoutes = [
                    "/berita",
                    "/pengurus",
                    "/tentang_kami",
                  ];

                  const isActive =
                    page.router === pathname ||
                    (pathname.startsWith(page.router) &&
                      activeRoutes.includes(page.router));
                  return (
                    <MenuItem
                      key={page.id}
                      onClick={() => handleOnclickMenu(page.router)}
                    >
                      <Typography
                        textAlign="center"
                        sx={{
                          borderBottom: isActive ? "2px #23176D solid" : "none",
                          fontFamily: "myFont",
                        }}
                      >
                        {page.title}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
      {loading === true && <LinearProgress />}
    </AppBar>
  );
}
export default Navbar;
