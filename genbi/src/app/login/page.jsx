"use client";
import {
  Box,
  OutlinedInput,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./login.css";
import { ButtonStyle } from "@/components/button/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Snackbar from "@/components/snackbar/Snackbar";
import { postData } from "@/service/api";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();

    //initialize formData
    const formData = new FormData();

    //append data to formData
    formData.append("username", username);
    formData.append("password", password);

    //send data to server
    postData(`/login`, formData)
      .then((response) => {
        //set token on cookies
        Cookies.set("token", response.token);
        setLoading(true);
        //redirect to dashboard
        router.push("/dashboard");
      })
      .catch((error) => {
        console.error("Gagal menambahkan data:", error);
        let pesanError = "Terjadi kesalahan saat menambah data";

        if (error.response) {
          pesanError = error.response.data.message || pesanError;
        }

        setSnackbar({
          open: true,
          message: pesanError,
        });
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  // snackbar
  // handle close snackbar
  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ open: false, message: "" });
  };
  // snackbar end

  //hook useEffect
  useEffect(() => {
    //check token
    // if (Cookies.get("token")) {
    //   //redirect page dashboard
    //   router.push("/dashboard");
    // }
  }, []);

  // ketika button login di klik
  // const handleClikLogin = (e) => {
  //   e.preventDefault();
  //   handleLogin(username, password);
  // };

  // lihat password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className="bg">
      <Stack
        sx={{
          width: 530,
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: 24,
          p: 4,
          alignItems: "center",
        }}
      >
        <h1 style={{ fontFamily: "myFont" }}>Silahkan Login</h1>
        <Typography sx={{ fontFamily: "myFont", fontSize: "18px" }}>
          Silahkan masukkan username dan password untuk melanjutkan
        </Typography>
        <Stack sx={{ width: "100%", mt: 2 }}>
          <Typography
            sx={{
              fontFamily: "myFont",
              fontSize: "18px",
              fontWeight: 500,
              alignSelf: "flex-start",
            }}
          >
            * Username
          </Typography>
          <OutlinedInput
            sx={{
              mt: 1,
              fontFamily: "myFont",
              width: "100%",
              borderRadius: "12px",
            }}
            placeholder="Masukkan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></OutlinedInput>
          <Typography
            sx={{
              fontFamily: "myFont",
              fontSize: "18px",
              fontWeight: 500,
              alignSelf: "flex-start",
              mt: 2,
            }}
          >
            * Password
          </Typography>
          <OutlinedInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mt: 1,
              fontFamily: "myFont",
              width: "100%",
              borderRadius: "12px",
            }}
            placeholder="Masukkan Password"
            name="password"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          ></OutlinedInput>
          <ButtonStyle
            sx={{
              backgroundColor: "#4880FF",
              mt: 4,
              width: "80%",
              alignSelf: "center",
              "&:hover": {
                backgroundColor: "#4880FF",
              },
            }}
            onClick={loginHandler}
          >
            Login{" "}
            {loading === true && (
              <CircularProgress
                size={20}
                sx={{
                  color: "#FFFFFF",
                  // marginLeft: "20px",
                }}
              />
            )}
          </ButtonStyle>
        </Stack>
      </Stack>
      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        // autoHideDuration={5000}
        onClose={closeSnackbar}
        // anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={closeSnackbar}
          severity="error"
          variant="filled"
          sx={{ width: "100%", fontFamily: "myFont" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
