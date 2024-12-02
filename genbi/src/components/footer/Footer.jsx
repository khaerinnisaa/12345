"use client";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useRouter } from "next/navigation";
import { RiTiktokFill } from "react-icons/ri";
// import { FacebookRounded } from "@mui/icons-material";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer({ mt }) {
  const router = useRouter();
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "rgba(221, 221, 221, 0.2)", mt: mt, py: 4 }}
    >
      <Grid item xs={12} md={4}>
        <Stack
          sx={{
            gap: 3,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 900,
              fontFamily: "MyFont",
              opacity: "0.7",
            }}
          >
            GenBI UINAM
          </Typography>
          <Image src={Logo} width={100} height={100} alt="logo" />
        </Stack>
      </Grid>
      <Grid item xs={12} md={2} sx={{ alignContent: "center" }}>
        <Stack sx={{ gap: { xs: 1, md: 4 }, px: { xs: 4, md: 0 } }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "MyFont",
              fontSize: { xs: "20px", md: "16px" },
              my: { xs: 2, md: 0 },
              opacity: "0.7",
            }}
          >
            Sosial Media
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "MyFont",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={() => router.push("https://www.instagram.com/genbiuinam/")}
          >
            Instagram
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "MyFont",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={() => router.push("https://www.tiktok.com/@genbiuinam")}
          >
            Tiktok
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "MyFont",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={() =>
              router.push(
                "https://web.facebook.com/profile.php?id=100088944174924"
              )
            }
          >
            Facebook Page
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "MyFont",
              opacity: "0.9",
              cursor: "pointer",
            }}
            onClick={() =>
              router.push("https://www.youtube.com/@genbiuinam7589")
            }
          >
            Youtube Channel
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack sx={{ gap: { xs: 1, md: 4 }, px: { xs: 4, md: 0 } }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "MyFont",
              fontSize: { xs: "20px", md: "16px" },
              my: { xs: 2, md: 0 },
              opacity: "0.7",
            }}
          >
            Alamat
          </Typography>
          <Typography sx={{ fontFamily: "MyFont", opacity: "0.9" }}>
            Jl. H.M. Yasin Limpo, Romangpolong, Kec. Somba Opu, Kabupaten Gowa,
            Sulawesi Selatan
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={2}>
        <Stack sx={{ gap: { xs: 1, md: 4 }, px: { xs: 4, md: 0 } }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "MyFont",
              fontSize: { xs: "20px", md: "16px" },
              my: { xs: 2, md: 0 },
              opacity: "0.7",
            }}
          >
            Hubungi Kami
          </Typography>
          <Typography sx={{ fontFamily: "MyFont", opacity: "0.9" }}>
            uinamgenbi@gmail.com
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
        <Typography sx={{ fontFamily: "MyFont", opacity: "0.9" }}>
          Ikuti kami di
        </Typography>
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Stack
            sx={{
              backgroundColor: "#000000",
              opacity: "0.7",
              borderRadius: "50px",
              width: "48px",
              height: "48px",
              cursor: "pointer",
              "&:hover": {
                opacity: "0.3",
              },
            }}
          >
            <InstagramIcon
              onClick={() =>
                router.push("https://www.instagram.com/genbiuinam/")
              }
              sx={{ margin: "auto", fontSize: "30px", color: "#FFFFFF" }}
            />
          </Stack>
          <Stack
            sx={{
              backgroundColor: "#000000",
              opacity: "0.7",
              borderRadius: "50px",
              width: "48px",
              height: "48px",
              cursor: "pointer",
              "&:hover": {
                opacity: "0.3",
              },
            }}
            onClick={() => router.push("https://www.tiktok.com/@genbiuinam")}
          >
            <RiTiktokFill
              style={{ margin: "auto", fontSize: "30px", color: "#FFFFFF" }}
            />
          </Stack>
          <Stack
            sx={{
              backgroundColor: "#000000",
              opacity: "0.7",
              borderRadius: "50px",
              width: "48px",
              height: "48px",
              cursor: "pointer",
              "&:hover": {
                opacity: "0.3",
              },
            }}
          >
            <YouTubeIcon
              sx={{ margin: "auto", fontSize: "30px", color: "#FFFFFF" }}
              onClick={() =>
                router.push("https://www.youtube.com/@genbiuinam7589")
              }
            />
          </Stack>
          <Stack
            sx={{
              backgroundColor: "#000000",
              opacity: "0.7",
              borderRadius: "50px",
              width: "48px",
              height: "48px",
              cursor: "pointer",
              "&:hover": {
                opacity: "0.3",
              },
            }}
          >
            <FacebookRoundedIcon
              sx={{ margin: "auto", fontSize: "30px", color: "#FFFFFF" }}
              onClick={() =>
                router.push(
                  "https://web.facebook.com/profile.php?id=100088944174924"
                )
              }
            />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
