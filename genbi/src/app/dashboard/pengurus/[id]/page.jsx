"use client";

import React, { useEffect, useState } from "react";
import { useDrawer } from "@/contexts/DrawerContext";
import {
  Backdrop,
  Box,
  Card,
  CircularProgress,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Appbar from "@/components/appbar/Appbar";
import Link from "next/link";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import FooterDashboard from "@/components/footer/FooterDashboard";
import { detail } from "@/service/api";
import Cookies from "js-cookie";

export default function PengurusPage({ params }) {
  const token = Cookies.get("token");
  const { kabinetId } = useDrawer();
  const { id } = params;
  const [pengurus, setPengurus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // async function fetchPengurusData() {
    //   try {
    //     const res = await fetch(
    //       `https://be-genbi.4mmar.cloud/api/admin/members/${id}`,
    //       {
    //         next: { revalidate: 10 },
    //       }
    //     );
    //     if (!res.ok) {
    //       throw new Error("Gagal memuat data pengurus");
    //     }
    //     const data = await res.json();
    //     setPengurus(data);
    //   } catch (err) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // fetchPengurusData();

    getData();
  }, [id]);

  const getData = async () => {
    try {
      const data = await detail(`/admin/members/${id}`, token);
      setPengurus(data);
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
    <div>
      <Box sx={{ mt: 2 }}>
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
            <Link href={"/dashboard/pengurus"}>
              <GroupsIcon
                sx={{ margin: "auto", color: "#D1D3E2", cursor: "pointer" }}
              />
            </Link>

            <Link
              href={"/dashboard/pengurus"}
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  fontFamily: "myFont ",
                  color: "#D1D3E2",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                Pengurus
              </Typography>
            </Link>
            <Typography sx={{ mt: "4px", ml: "-4px" }}>
              <ArrowForwardIosIcon
                sx={{ color: "#576974", fontSize: "18px" }}
              />
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
              Detail Pengurus
            </Typography>
          </Stack>
        </Card>

        <Box
          sx={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Card
            sx={{
              paddingX: 4,
              paddingY: 3,
              textAlign: "left",
            }}
            className="album-description"
          >
            <Stack>
              <Image
                style={{
                  margin: "auto",
                  borderRadius: "8px",
                }}
                width={300}
                height={300}
                src={pengurus.data.image}
                alt={pengurus.data.name}
                onLoadingComplete={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <Skeleton variant="rounded" width={300} height={300} />
              )}
            </Stack>

            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>Nama </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  : {pengurus.data.name}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  Jenis Kelamin{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  : {pengurus.data.gender}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>Alamat </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  : {pengurus.data.address}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>Jurusan </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  : {pengurus.data.major}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>jabatan </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  : {pengurus.data.position}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>Divisi </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  : {pengurus.data.division}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  Periode Kepengurusan{" "}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontFamily: "myFont" }}>
                  : {pengurus.data.cabinet}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <FooterDashboard mt={4} />
      </Box>
    </div>
  );
}
