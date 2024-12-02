"use client";

import React, { useEffect, useState } from "react";
import { useDrawer } from "@/contexts/DrawerContext";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
  Stack,
  Toolbar,
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
import { motion } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fetchData, fetchDataPublic } from "@/service/api";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function BeritaPage({ params, searchParams }) {
  const { setLoadingRoute } = useDrawer();
  const router = useRouter();
  const { slug } = params;
  const [news, setNews] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    async function fetchBeritaData() {
      try {
        fetchDataPublic(`/public/news/${slug}`).then((res) => {
          console.log(res, "res bang");
          setNews(res.data);
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setLoadingRoute(false);
      }
    }

    fetchBeritaData();
    getData();
  }, [slug]);

  //   get data berita terbaru
  const getData = async () => {
    fetchDataPublic(`/public/latest-news`).then((res) => {
      setData(res.data);
    });
  };

  // ketika berita terbaru diklik
  const handleDetail = (slug) => {
    router.push(`/berita/${slug}`);
  };
  // ketika button kembali diklik
  const handleDetailClose = () => {
    router.push("/berita");
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

  // animasi
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <>
      <Head>
        {/* Metadata Open Graph */}
        <meta property="og:title" content={news?.title || "Genbi UINAM"} />
        <meta
          property="og:description"
          content={news?.content?.substring(0, 150) || "Deskripsi singkat"}
        />
        <meta property="og:image" content={news?.image || "/icon.png"} />
        <meta property="og:type" content="Berita GenBi UINAM" />
        <meta
          property="og:url"
          content={`https://genbiuinam.org/berita/${slug}`}
        />
      </Head>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Navbar />
      </motion.div>
      <Toolbar />
      <Container maxWidth="lg">
        {/* // detail berita */}

        <Stack
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          {news && (
            <>
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: "myFont",
                  fontSize: "30px",
                  fontWeight: 600,
                  borderBottom: "3px solid rgba(0, 0, 0, 0.1)",
                  opacity: "0.7",
                }}
              >
                {news.title}
              </Typography>
              {/* tampilan image desktop */}
              <Stack
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants}
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Image
                  style={{
                    borderRadius: "8px",
                    marginTop: "20px",
                  }}
                  width={526}
                  height={369}
                  src={news.image}
                  alt={news.title}
                  onLoadingComplete={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <Skeleton variant="rounded" width={526} height={369} />
                )}
              </Stack>
              {/* tampilan image mobile */}
              <Stack
                component={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInVariants}
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Image
                  style={{
                    borderRadius: "8px",
                    marginTop: "20px",
                  }}
                  width={308}
                  height={202}
                  src={news.image}
                  alt={news.title}
                />
              </Stack>
              <span
                style={{ textAlign: "justify", marginTop: "20px" }}
                dangerouslySetInnerHTML={{
                  __html: `${news.content}`,
                }}
              />
            </>
          )}
          {/* berita terbaru */}
          <Card
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              mt: 6,
              alignSelf: "center",
              width: { xs: "319px", md: "921px" },
              border: "4px solid rgba(0, 0, 0, 0.06)",
              borderRadius: "22px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "30px",
                fontWeight: 600,
                opacity: "0.7",
                paddingY: 2,
                borderBottom: "4px solid rgba(0, 0, 0, 0.06)",
                textAlign: "center",
              }}
            >
              Berita Terbaru
            </Typography>
            <Stack sx={{ my: 2 }}>
              {data &&
                data.map((item) => {
                  return (
                    <Stack
                      sx={{
                        width: "85%",
                        margin: "auto",
                      }}
                      key={item.slug}
                      onClick={() => handleDetail(item.slug)}
                    >
                      <Typography
                        sx={{
                          fontFamily: "myFont",
                          fontWeight: 600,
                          mt: 2,
                          cursor: "pointer",
                          textAlign: "justify",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontFamily: "myFont" }}>
                        {item.published} . {item.reading_time + " " + "Menit"}
                      </Typography>
                    </Stack>
                  );
                })}
            </Stack>
          </Card>
        </Stack>
      </Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Footer mt={{ xs: 4, md: 10 }} />
      </motion.div>
    </>
  );
}
