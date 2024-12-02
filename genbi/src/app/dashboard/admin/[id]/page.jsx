"use client";
import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Card,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Appbar from "@/components/appbar/Appbar";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonIcon from "@mui/icons-material/Person";
import FooterDashboard from "@/components/footer/FooterDashboard";
import { detail } from "@/service/api";
import Cookies from "js-cookie";

export default function Page({ params }) {
  const token = Cookies.get("token");
  const { id } = params;
  const [admins, setAdmins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // async function fetchKabinetData() {
    //   try {
    //     const res = await fetch(
    //       `https://be-genbi.4mmar.cloud/api/admin/admins/${id}`,
    //       {
    //         next: { revalidate: 10 },
    //       }
    //     );
    //     if (!res.ok) {
    //       throw new Error("Gagal memuat data kabinet");
    //     }
    //     const data = await res.json();
    //     setAdmins(data);
    //   } catch (err) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // fetchKabinetData();

    getData();
  }, [id]);

  const getData = async () => {
    try {
      const data = await detail(`/admin/admins/${id}`, token);
      setAdmins(data);
    } catch {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Stack sx={{ alignItems: "center", height: "100vh" }}>
        <CircularProgress
          sx={{ margin: "auto", color: "#23176D" }}
          size={"50px"}
        />
      </Stack>
    );
  if (error) return <p>Error: {error}</p>;
  return (
    <Box mt={2}>
      <Appbar />
      <Card>
        <Stack
          sx={{
            py: 2,
            pl: 4,
            display: "flex",
            gap: 2,
            flexDirection: "row",
          }}
        >
          <Link href={"/dashboard/admin"}>
            <PersonIcon
              sx={{ margin: "auto", color: "#D1D3E2", cursor: "pointer" }}
            />
          </Link>

          <Link href={"/dashboard/admin"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontFamily: "myFont ",
                color: "#D1D3E2",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Admin
            </Typography>
          </Link>
          <Typography sx={{ mt: "4px", ml: "-4px" }}>
            <ArrowForwardIosIcon sx={{ color: "#576974", fontSize: "18px" }} />
          </Typography>
          <Typography
            sx={{
              fontFamily: "myFont ",
              color: "#576974",
              ml: "-5px",
              mt: "2px",
              fontWeight: 500,
            }}
          >
            Detail Admin
          </Typography>
        </Stack>
      </Card>
      {/* detail page */}
      <Card
        sx={{
          mt: 2,
          p: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontFamily: "myFont ",
                mt: 2,
              }}
            >
              Nama
            </Typography>
            <Typography
              sx={{
                fontFamily: "myFont ",
                mt: 2,
              }}
            >
              User Name
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontFamily: "myFont ",
                mt: 2,
              }}
            >
              : {admins.data.name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "myFont ",
                mt: 2,
              }}
            >
              : {admins.data.username}
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <FooterDashboard mt={4} />
    </Box>
  );
}
