"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { TentangKami } from "@/values/Constant";
import { Container, Grid, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import bgHeader from "@/assets/header.png";
import Pilar from "@/assets/pilar.png";
import { useDrawer } from "@/contexts/DrawerContext";

export default function Tentang() {
  const { setLoadingRoute } = useDrawer();
  // animasi
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  useEffect(() => {
    setLoadingRoute(false);
  }, []);
  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Navbar />
      </motion.div>
      <Toolbar />
      <Stack sx={{ mt: { xs: 2, md: 10 } }}>
        <Container maxWidth="lg">
          {/* tentang genbib uinam */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                opacity: "0.7",
              }}
            >
              Tentang GenBI UINAM
            </Typography>
          </Stack>
          {/* generasi baru indonesia(genbi) */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{ py: 3 }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#000000",
                opacity: "0.7",
                borderBottom: "2px solid #D9D9D9",
              }}
            >
              Generasi Baru Indonesia (GenBI)
            </Typography>
            <Typography
              sx={{
                fontFamily: "myFont",
                mt: 1,
                opacity: "0.7",
                textAlign: "justify",
                fontWeight: 500,
              }}
            >
              Generasi Baru Indonesia, yang dikenal dengan singkatan GenBI,
              adalah komunitas mahasiswa penerima Beasiswa Bank Indonesia.
              Komunitas ini didirikan pada 11 November 2011, dan terdiri dari
              mahasiswa-mahasiswa dari berbagai Perguruan Tinggi Negeri (PTN)
              dan Perguruan Tinggi Swasta (PTS) di seluruh Indonesia. Sebagai
              bagian dari keluarga besar Bank Indonesia, GenBI memiliki peran
              penting dalam mendukung pengembangan generasi muda Indonesia yang
              unggul dan kompetitif.
            </Typography>
          </Stack>
          {/* GenBI Komisariat UIN Alauddin Makassar */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{ py: 3 }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#000000",
                opacity: "0.7",
                borderBottom: "2px solid #D9D9D9",
              }}
            >
              GenBI Komisariat UIN Alauddin Makassar
            </Typography>
            <Typography
              sx={{
                fontFamily: "myFont",
                mt: 1,
                opacity: "0.7",
                textAlign: "justify",
                fontWeight: 500,
              }}
            >
              GenBi Komisariat UIN Alauddin Makassar adalah salah satu bagian
              dari GenBI yang berada di bawah naungan Bank Indonesia Kantor
              Perwakilan Wilayah Sulawesi Selatan. Komisariat ini telah aktif
              sejak tahun 2013 dan telah melibatkan banyak mahasiswa melalui
              program unggulan dan reguler. Kegiatan yang dilaksanakan oleh
              GenBI Komisariat UIN Aladuddin Makassar mencakup berbagai program
              pemberdayaan masyarakat, yang tidak hanya bermanfaat bagi
              masyaakat, tetapi juga memaksimalkan potensi sumber daya manusia
              yang kreatif dan berkomitmen untuk memberikan kontribusi positif
              bagi negeri.
            </Typography>
          </Stack>
          {/* Visi dan Misi */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{ py: { xs: 4, md: 8 } }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "30px",
                fontWeight: "bold",
                color: "#000000",
                opacity: "0.7",
                mb: 1,
              }}
            >
              Visi dan Misi
            </Typography>
            <Grid container spacing={2} columnGap={6}>
              {/* image */}
              <Grid
                xs={12}
                md={3.5}
                lg={3.5}
                sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
              >
                <Stack
                  component={motion.div}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInVariants}
                  sx={{
                    py: "8%",
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
              </Grid>
              {/* visi */}
              <Grid xs={12} md={4.5} lg={3.5}>
                <Stack
                  sx={{
                    gap: 2,
                    mt: { xs: 4, md: 2, lg: 0 },
                    pl: { xs: 2, md: 2, lg: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "myFont",
                      fontWeight: "bold",
                      opacity: "0.7",
                      fontSize: "24px",
                    }}
                  >
                    Visi
                  </Typography>
                  <Typography
                    sx={{
                      lineHeight: "40px",
                      fontFamily: "myFont",
                      opacity: "0.7",
                      fontWeight: 500,
                      textAlign: "justify",
                    }}
                  >
                    Menjadikan GenBI UIN Alauddin Makassar sebagai wadah dalam
                    membantuk generasi yang inovatif, integritas, dan kreatif.
                    Memiliki kepekaan yang tinggi terhadap perubahan zaman
                    melalui kolaborasi yang inklusif dan menjadi garda terdepan
                    dalam mengakselerasi peningkatan mutu sumber daya Indonesia
                  </Typography>
                </Stack>
              </Grid>
              {/* misi */}
              <Grid xs={12} md={6.5} lg={4}>
                <Stack
                  sx={{
                    gap: 2,
                    pl: { xs: 2, md: 0, lg: 0 },
                    mt: { xs: 4, md: 2, lg: 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "myFont",
                      fontWeight: "bold",
                      opacity: "0.7",
                      fontSize: "24px",
                    }}
                  >
                    Misi
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontFamily: "myFont",
                      opacity: "0.7",
                      fontWeight: 500,
                    }}
                  >
                    1. Menginisiasi program kerja yang berorientasi pada inovasi
                    dan kreativitas dengan melibatkan berbagai lapisan-lapisan
                    masyarakat sehingga tercapainya bentuk Pemberdayaan
                    masyarakat.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontFamily: "myFont",
                      opacity: "0.7",
                      fontWeight: 500,
                    }}
                  >
                    2. Mengoptimalkan media informasi dan globalisasi serta
                    mengimplementasikan nilai-nilai krestif dalam berbagai
                    program kerja sehingga dapat meningkatkan eksistensi GenBI
                    UIN Alauddin Makassar.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontFamily: "myFont",
                      opacity: "0.7",
                      fontWeight: 500,
                    }}
                  >
                    3. Menghadirkan program kerja kolaboratif dengan berbagai
                    pihak guna terciptanya bentuk solidaritas dan sinergitas
                    secara inklusif.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontFamily: "myFont",
                      opacity: "0.7",
                      fontWeight: 500,
                    }}
                  >
                    4. Mendorong kreatifitas melalui pelatihan-pelatihan
                    berkelanjutan pada SDM sehingga terciptanya inovasi dalam
                    berbagai aspek yang memberikan dampak terhadap komunitas mau
                    pun bangsa dan Negara.
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "justify",
                      fontFamily: "myFont",
                      opacity: "0.7",
                      fontWeight: 500,
                    }}
                  >
                    5. Mengoptimalkan peran serta tupoksi setiap struktur guna
                    tercapainya peningkatan kinerja setiap SDM dalam menjalankan
                    tugas dan tangggung jawabnya.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
        {/* 3 pilar GenBI */}
        <Stack
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          sx={{ py: 3, backgroundColor: "#007AFF", color: "#fff" }}
        >
          <Typography
            sx={{
              fontFamily: "myFont",
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: { xs: "unset", md: "center" },
              px: { xs: 2, md: 0 },
            }}
          >
            3 Pilar GenBI
          </Typography>
          {/* Frontliners Bank Indonesia */}
          <Grid container spacing={2} columnGap={5} mt={2}>
            <Grid xs={12} md={5} sx={{ display: { xs: "none", md: "block" } }}>
              <Stack sx={{ alignItems: "end" }}>
                <img src={Pilar.src} alt="3pilar" style={{ width: "298px" }} />
              </Stack>
            </Grid>
            <Grid xs={12} md={6} sx={{ px: { xs: 4, md: 0 } }}>
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "myFont",
                    mt: 1,
                    fontWeight: "bold",
                  }}
                >
                  Frontliners Bank Indonesia
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "myFont",
                  }}
                >
                  Mengkomunikasikan kelembagaan dan berbagai kebijakan Bank
                  Indonesia kepada sesama mahasiswa dan masyarakat umum
                </Typography>
              </Stack>
              {/* Agents of Change */}
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "myFont",
                    mt: 1,
                    fontWeight: "bold",
                  }}
                >
                  Agents of Change
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "myFont",
                  }}
                >
                  Menjadi agen perubahan dan role model di kalangan pelajar,
                  mahasiswa, dan masyarakat
                </Typography>
              </Stack>
              {/* Future Leaders */}
              <Stack>
                <Typography
                  sx={{
                    fontFamily: "myFont",
                    mt: 1,
                    fontWeight: "bold",
                  }}
                >
                  Future Leaders
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "myFont",
                  }}
                >
                  Menjadi pemimpin masa depan di berbagai bidang dan tingkatan.
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "myFont",
                  mt: 3,
                  display: { xs: "none", md: "block" },
                }}
              >
                Sapaan akrab kepada anggota GenBI adalah: GenBIers. Mari menjadi
                bagian dari perubahan positif dan inspirasi bagi bangsa melalui
                kegiatan pemberdayaan masyarakat maupun yang berkaitan langsung
                dengan Bank Indonesia bersama GenBI UINAM.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        {/* 7 deputi genbi uinam */}
        <Container maxWidth="lg">
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{ mt: { xs: 2, md: 4 } }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bold",
                opacity: "0.7",
              }}
            >
              7 Deputi GenBI UINAM
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "center", mt: 1 }}
            >
              {TentangKami.map((item) => (
                <Grid item xs={12} md={4} key={item.id}>
                  <Stack
                    component={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInVariants}
                    sx={{
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Image
                      style={{}}
                      // width={170}
                      src={item.gambar}
                      alt="tentang-kami"
                    />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Stack>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
      >
        <Footer mt={4} />
      </motion.div>
    </div>
  );
}
