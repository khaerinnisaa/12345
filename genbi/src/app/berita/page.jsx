"use client";

import { ButtonStyle } from "@/components/button/Button";
import Navbar from "@/components/navbar/Navbar";
import { BeritaPage, BeritaTerbaru } from "@/values/Constant";
import {
  Card,
  Grid,
  Stack,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  ThemeProvider,
  Pagination,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import BeritaLogic from "./BeritaLogic";
import Footer from "@/components/footer/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import "./berita.css";
import { themePaginationPublic } from "@/components/pagination/PaginationPublic";
import { useDrawer } from "@/contexts/DrawerContext";

export default function Berita() {
  const { loadingRoute } = useDrawer();
  const { value, func } = BeritaLogic();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  // animasi
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Create chunks of 9 items
  const chunks = [];
  const chunksMobile = [];
  // tampilan desktop
  for (let i = 0; i < BeritaPage.length; i += 9) {
    chunks.push(BeritaPage.slice(i, i + 9)); // menentukan item perpage
  }
  // tampilan mobile
  for (let i = 0; i < BeritaPage.length; i += 5) {
    chunksMobile.push(BeritaPage.slice(i, i + 5)); // menentukan item perpage
  }

  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Navbar />
      </motion.div>
      <Toolbar />
      <Container maxWidth="lg">
        <Stack
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInVariants}
          sx={{
            mt: { xs: 2, md: 10 },
            display: value.selectedDetail ? "none" : "flex",
          }}
        >
          <Typography
            sx={{
              fontFamily: "myFont",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: 700,
              color: "#4D4D4D",
            }}
          >
            Berita Terbaru <br /> GenBI UINAM
          </Typography>
          {/* tampilan desktop */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              // display: { xs: "none", md: "block" },
            }}
          >
            <Grid container spacing={2}>
              {value.data &&
                value.data.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.slug}>
                    <Card
                      className="card"
                      component={motion.div}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInVariants}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "12px",
                        width: "330px",
                        margin: "auto",
                        my: 4,
                        height: "420px",
                      }}
                    >
                      <Image
                        width={279}
                        height={187}
                        src={item.image}
                        alt={item.title}
                        style={{ margin: "auto", borderRadius: "8px" }}
                        onLoadingComplete={() => value.setImageLoaded(true)}
                        onError={() => value.setImageLoaded(true)}
                      />
                      {!value.imageLoaded && (
                        <Skeleton variant="rounded" width={279} height={187} />
                      )}
                      <Stack sx={{ padding: 2 }}>
                        <Typography
                          sx={{ fontFamily: "myFont", fontWeight: 600 }}
                        >
                          {func.limitText(item.title, 35)}
                        </Typography>
                        <span
                          style={{ textAlign: "justify" }}
                          dangerouslySetInnerHTML={{
                            __html: `${func.limitText(item.content, 110)}`,
                          }}
                        />
                        <ButtonStyle
                          sx={{
                            width: "172px",
                            backgroundColor: "#999999",
                            alignSelf: "center",
                            borderRadius: "100px",
                            "&:hover": { backgroundColor: "#007AFF" },
                          }}
                          onClick={() => func.handleDetail(item.slug)}
                        >
                          Baca Selengkapnya
                          {loadingRoute === true &&
                            item.slug === value.selectedSlug && (
                              <CircularProgress
                                size={"20px"}
                                sx={{ color: "#FFFFFF" }}
                              />
                            )}
                        </ButtonStyle>
                      </Stack>
                    </Card>
                  </Grid>
                ))}
            </Grid>
            {/* pagination */}
            <Stack sx={{ alignItems: "center", mt: 2 }}>
              <ThemeProvider theme={themePaginationPublic}>
                <Pagination
                  variant="outlined"
                  shape="rounded"
                  sx={{
                    color: "#FFC400",
                  }}
                  count={value.totalPage}
                  page={value.page}
                  onChange={func.handleChangePage}
                  siblingCount={0}
                />
              </ThemeProvider>
            </Stack>
          </Box>
        </Stack>
      </Container>
      {/* footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Footer mt={{ xs: 4, md: 10 }} />
      </motion.div>
    </div>
  );
}
