"use client";
import Navbar from "@/components/navbar/Navbar";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Skeleton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import bgHeader from "@/assets/header.png";
import bgAbout from "@/assets/about.png";
import Image from "next/image";
import { BerandaLogic } from "./berandaLogic";
import Footer from "@/components/footer/Footer";
import { BeritaTerbaru } from "@/values/Constant";
import { ButtonStyle } from "@/components/button/Button";
import { motion } from "framer-motion";
import "./beranda.css";
import { useDrawer } from "@/contexts/DrawerContext";

export default function Home() {
  const { loadingRoute } = useDrawer();
  const { value, func } = BerandaLogic();

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
    <Box>
      {/* header */}
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Navbar />
      </motion.div>
      <Toolbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Stack
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              sx={{ py: { xs: "5%", md: "21%" }, gap: { xs: 2, md: 4 } }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                }}
              >
                Selamat Datang <br /> di Website GenBI UINAM
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: { xs: "none", md: "flex" },
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                }}
              >
                Generasi Baru Indonesia (GenBI) adalah komunitas <br />{" "}
                mahasiswa penerima beasiswa Bank Indonesia yang tersebar di
                seluruh Indonesia
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: { xs: "flex", md: "none" },
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                  textAlign: "justify",
                }}
              >
                Generasi Baru Indonesia (GenBI) adalah komunitas mahasiswa
                penerima beasiswa Bank Indonesia yang tersebar di seluruh
                Indonesia
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            {/* tampilan desktop */}
            <Stack
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              sx={{
                py: "8%",
                alignItems: { xs: "normal", md: "center" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#007AFF",
                  width: { xs: "154px", md: "290px" },
                  height: { xs: "118px", md: "223px" },
                  borderRadius: "15px",
                  fontFamily: "MyFont",
                }}
              >
                <Image
                  className="image1"
                  src={bgHeader}
                  alt="Picture of the author"
                  style={{
                    width: "296px",
                    height: "377px",
                    borderRadius: "15px",
                    marginTop: "25px",
                    marginLeft: "25px",
                  }}
                />
              </Typography>
            </Stack>
            {/* tampilan mobile */}
            <Stack
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              className="stack-image1"
              sx={{
                mt: "-15px",
                // alignItems: { xs: "center", md: "center" },
                display: { xs: "flex", md: "none" },
                // marginLeft: "15%",
                // margin: "auto",
                width: "85%",
              }}
            >
              <Typography
                className="bg-image1"
                sx={{
                  backgroundColor: "#007AFF",
                  width: { xs: "190px", md: "290px" },
                  height: { xs: "160px", md: "223px" },
                  borderRadius: "15px",
                  fontFamily: "MyFont",
                  margin: "auto",
                }}
              >
                <Image
                  className="image1"
                  src={bgHeader}
                  alt="Picture of the author"
                  style={{
                    width: "200px",
                    height: "260px",
                    borderRadius: "15px",
                    marginTop: "25px",
                    marginLeft: "25px",
                  }}
                />
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Tentang genbi */}
        {/* tampilan desktop */}
        <Grid
          container
          spacing={2}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid item xs={12} md={6.5}>
            {/* tampilan desktop */}
            <Stack
              sx={{
                py: "14%",
                // display: "flex",
              }}
            >
              <Typography
                sx={{
                  backgroundColor: "#007AFF",
                  width: "290px",
                  height: "223px",
                  borderRadius: "15px",
                  fontFamily: "MyFont",
                }}
              >
                <Image
                  className="image2"
                  src={bgAbout}
                  alt="Picture of the author"
                  // width={524}
                  style={{
                    width: "550px",
                    height: "343px",
                    borderRadius: "15px",
                    marginTop: "35px",
                    marginLeft: "35px",
                  }}
                />
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Stack
              sx={{
                py: { xs: "5%", md: "21%" },
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                }}
              >
                Tentang GenBI
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: { xs: "none", md: "flex" },
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                  textAlign: "justify",
                }}
              >
                GenBI Komisariat UIN Alauddin Makassar adalah salah satu bagian
                dari GenBI yang berada di bawah naungan Bank Indonesia Kantor
                Perwakilan Wilayah Sulawesi Selatan. Komisariat ini telah aktif
                sejak tahun 2013 dan telah melibatkan banyak mahasiswa melalui
                program unggulan dan reguler. Kegiatan yang dilaksanakan oleh
                GenBI Komisariat UIN Alauddin Makassar mencakup berbagai program
                pemberdayaan masyarakat, yang tidak hanya bermanfaat bagi
                masyarakat, tetapi juga memaksimalkan potensi sumber daya
                manusia yang kreatif dan berkomitmen untuk memberikan kontribusi
                positif bagi negeri.
              </Typography>
              {/* <Typography
                sx={{
                  fontSize: "16px",
                  display: { xs: "none", md: "flex" },
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                  textAlign: "justify",
                }}
              >
                Sapaan akrab kepada anggota GenBi adalah: GenBiers. Mari menjadi
                bagian dari perubahan positif dan inspirasi bagi bangsa melalui
                GenBi!
              </Typography> */}
              <Button
                variant="contained"
                sx={{
                  width: "185px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontWeight: 400,
                  fontFamily: "MyFont",
                }}
                onClick={func.onClickTentang}
              >
                Baca Selengkapnya
                {loadingRoute === true && (
                  <CircularProgress size={"20px"} sx={{ color: "#FFFFFF" }} />
                )}
              </Button>
            </Stack>
          </Grid>
        </Grid>
        {/* tampilan mobile */}
        <Grid
          container
          spacing={2}
          mt={12}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Grid item xs={12} md={7}>
            <Stack
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              sx={{ gap: 2 }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#4D4D4D",
                  mt: "19%",
                  fontFamily: "MyFont",
                }}
              >
                Tentang GenBI
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  display: { xs: "flex", md: "none" },
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                  textAlign: "justify",
                }}
              >
                GenBI Komisariat UIN Alauddin Makassar adalah salah satu bagian
                dari GenBI yang berada di bawah naungan Bank Indonesia Kantor
                Perwakilan Wilayah Sulawesi Selatan. Komisariat ini telah aktif
                sejak tahun 2013 dan telah melibatkan banyak mahasiswa melalui
                program unggulan dan reguler. Kegiatan yang dilaksanakan oleh
                GenBI Komisariat UIN Alauddin Makassar mencakup berbagai program
                pemberdayaan masyarakat, yang tidak hanya bermanfaat bagi
                masyarakat, tetapi juga memaksimalkan potensi sumber daya
                manusia yang kreatif dan berkomitmen untuk memberikan kontribusi
                positif bagi negeri.
              </Typography>
              {/* <Typography
                sx={{
                  fontSize: "16px",
                  display: { xs: "flex", md: "none" },
                  color: "#4D4D4D",
                  fontFamily: "MyFont",
                  textAlign: "justify",
                }}
              >
                Sapaan akrab kepada anggota GenBI adalah: GenBIers. Mari menjadi
                bagian dari perubahan positif dan inspirasi bagi
                bangsa melalui GenBI!
              </Typography> */}
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} mt={2}>
            {/* tampilan mobile */}
            <Stack
              className="stack-image2"
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              sx={{
                display: { xs: "flex", md: "none" },
                // marginLeft: "10%",
              }}
            >
              <Typography
                className="bg-image2"
                sx={{
                  backgroundColor: "#007AFF",
                  width: { xs: "190px", md: "290px" },
                  height: { xs: "140px", md: "223px" },
                  borderRadius: "15px",
                  // margin: "auto",
                  marginLeft: "7%",
                }}
              >
                <Image
                  className="image2"
                  src={bgAbout}
                  alt="Picture of the author"
                  style={{
                    width: "270px",
                    height: "200px",
                    borderRadius: "15px",
                    marginTop: "25px",
                    marginLeft: "25px",
                  }}
                />
              </Typography>
              <Button
                className="button-image2"
                variant="contained"
                sx={{
                  width: "185px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontWeight: 400,
                  mt: "100px",
                  alignSelf: "center",
                  fontFamily: "MyFont",
                }}
                onClick={func.onClickTentang}
              >
                Baca Selengkapnya
                {loadingRoute === true && (
                  <CircularProgress size={"20px"} sx={{ color: "#FFFFFF" }} />
                )}
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* Berita Terbaru */}
        <Stack
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          sx={{ mt: { xs: 8, md: 12 } }}
        >
          <Typography
            sx={{
              fontFamily: "myFont",
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 700,
              color: "#4D4D4D",
            }}
          >
            Berita Terbaru <br /> GenBI UINAM
          </Typography>

          {/* skeleton */}
          {value.loading === true ? (
            <Grid container spacing={{ xs: 4, md: 2 }} sx={{}}>
              <Grid item xs={12} md={4} sx={{}}>
                <Skeleton
                  sx={{ margin: "auto", borderRadius: "8px" }}
                  variant="rounded"
                  width={320}
                  height={393}
                />
              </Grid>
              <Grid item xs={12} md={4} sx={{}}>
                <Skeleton
                  sx={{ margin: "auto", borderRadius: "8px" }}
                  variant="rounded"
                  width={320}
                  height={393}
                />
              </Grid>
              <Grid item xs={12} md={4} sx={{}}>
                <Skeleton
                  sx={{ margin: "auto", borderRadius: "8px" }}
                  variant="rounded"
                  width={320}
                  height={393}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={{ xs: 4, md: 2 }} sx={{}}>
              {value.data &&
                value.data.slice(0, 3).map((item) => (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ margin: "auto" }}
                    key={item.slug}
                  >
                    <Card
                      className="card-berita"
                      component={motion.div}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={fadeInVariants}
                      // key={item.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "12px",
                        width: "320px",
                        margin: "auto",
                        mt: 4,
                      }}
                    >
                      <Image
                        width={279}
                        height={187}
                        src={item.image}
                        alt={item.title}
                        style={{
                          marginTop: "20px",
                          borderRadius: "8px",
                          alignSelf: "center",
                        }}
                      />
                      <Stack sx={{ p: 2 }}>
                        <Typography
                          sx={{ fontFamily: "myFont", fontWeight: 600 }}
                        >
                          {func.limitText(item.title, 35)}
                        </Typography>
                        <span
                          style={{ textAlign: "justify" }}
                          dangerouslySetInnerHTML={{
                            __html: `${func.limitText(item.content, 114)}`,
                          }}
                        />
                        <ButtonStyle
                          onClick={() => func.handleDetailClick(item.slug)}
                          sx={{
                            width: "172px",
                            backgroundColor: "#999999",
                            alignSelf: "center",
                            borderRadius: "100px",
                            "&:hover": { backgroundColor: "#007AFF" },
                          }}
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
              <Stack sx={{ width: "100%" }}>
                <ButtonStyle
                  sx={{
                    mt: 6,
                    width: "172px",
                    backgroundColor: "#007AFF",
                    borderRadius: "100px",
                    alignSelf: "center",
                    ml: { xs: 4, md: 3 },
                    "&:hover": { backgroundColor: "#007AFF" },
                  }}
                  onClick={func.onClickBerita}
                >
                  Berita Lainnya
                  {loadingRoute === true && value.selectedSlug === null && (
                    <CircularProgress size={"20px"} sx={{ color: "#FFFFFF" }} />
                  )}
                </ButtonStyle>
              </Stack>
            </Grid>
          )}
        </Stack>
      </Container>
      {/* footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Footer mt={12} />
      </motion.div>
    </Box>
  );
}
