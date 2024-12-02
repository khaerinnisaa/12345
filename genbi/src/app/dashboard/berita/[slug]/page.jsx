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
import DetailKegiatan from "@/assets/detailKegiatan.svg";
import Footer from "@/components/footer/Footer";
import FooterDashboard from "@/components/footer/FooterDashboard";
import { detail, fetchData } from "@/service/api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function BeritaPage({ params }) {
  const token = Cookies.get("token");
  const { slug } = params;
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // async function fetchBeritaData() {
    //   try {
    //     const res = await fetch(
    //       `https://be-genbi.4mmar.cloud/api/admin/news/${slug}`,
    //       {
    //         next: { revalidate: 10 },
    //       }
    //     );
    //     if (!res.ok) {
    //       throw new Error("Gagal memuat data berita");
    //     }
    //     const data = await res.json();
    //     setNews(data);
    //   } catch (err) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    // fetchBeritaData();
    getData();
  }, [slug]);

  const router = useRouter();

  const getData = async () => {
    try {
      const data = await detail(`/admin/news/${slug}`, token);
      setNews(data);
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
          <Link href={"/dashboard/berita"}>
            <Image
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
              alt="tes"
              src={DetailKegiatan}
            />
          </Link>

          <Link href={"/dashboard/berita"} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontFamily: "myFont ",
                color: "#D1D3E2",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Berita
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
            Detail Berita
          </Typography>
        </Stack>
      </Card>
      {/* detail */}
      <Card sx={{ mt: 2, p: 4 }}>
        <Stack sx={{ alignItems: "center" }}>
          <Image
            style={{
              margin: "auto",
              borderRadius: "8px",
            }}
            width={400}
            height={400}
            src={news.data.image}
            alt={news.data.title}
            onLoadingComplete={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <Skeleton variant="rounded" width={400} height={400} />
          )}
        </Stack>

        <Stack>
          <Typography
            sx={{
              fontFamily: "myFont ",
              mt: 2,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {news.data.title}
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography sx={{ fontFamily: "myFont", mt: 2 }}>
              {news.data.published} -
            </Typography>
            <span
              style={{ marginLeft: "4px" }}
              dangerouslySetInnerHTML={{
                __html: `${news.data.content}`,
              }}
            />
          </Stack>
        </Stack>
      </Card>
      <FooterDashboard mt={4} />
    </Box>
  );
}
