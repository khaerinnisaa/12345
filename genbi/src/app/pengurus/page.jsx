"use client";
import Navbar from "@/components/navbar/Navbar";
import {
  Card,
  Container,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Skeleton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PengurusLogic from "./PengurusLogic";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import { motion } from "framer-motion";

export default function Pengurus() {
  const { value, func } = PengurusLogic();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        // marginTop: 5,
      },
    },
  };
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
    <div>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <Navbar />
      </motion.div>
      <Toolbar />
      <Container maxWidth="lg">
        <Stack sx={{ mt: 10 }}>
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{ alignItems: "center" }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "30px",
                fontWeight: 800,
                opacity: "0.7",
              }}
            >
              Pengurus GenBI UINAM
            </Typography>
            <FormControl sx={{ fontFamily: "myFont" }}>
              {value.kabinet && (
                <Stack>
                  <Select
                    sx={{
                      height: 40,
                      width: 250,
                      fontFamily: "myFont",
                      textAlign: "center",
                      borderRadius: "100px",
                      mt: 2,
                      opacity: "0.7",
                      fontWeight: 500,
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                    }}
                    onChange={func.handleCategory}
                    displayEmpty
                    value={value.selectedKabinet}
                    input={
                      <OutlinedInput sx={{ mt: 2, backgroundColor: "red" }} />
                    }
                    renderValue={(selected) => {
                      if (selected === undefined) {
                        return <em>Pilih Kabinet</em>;
                      }
                      return selected;
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {value.kabinet.map((res) => (
                      <MenuItem
                        key={res.id}
                        sx={{ fontFamily: "myFont" }}
                        value={res.id}
                      >
                        {res.name}
                      </MenuItem>
                    ))}
                    {value.kabinet.length === 0 && (
                      <MenuItem sx={{ fontFamily: "myFont" }}>
                        Kabinet Belum ada
                      </MenuItem>
                    )}
                  </Select>
                </Stack>
              )}
            </FormControl>
          </Stack>
          {/* presidium */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Presidium
            </Typography>
            <Stack
              sx={{
                // mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.presidium &&
                value.presidium.map((item) => {
                  console.log(item, "tessssss");
                  return (
                    <Card
                      key={item.id}
                      sx={{
                        boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "12px",
                        minWidth: "307px",
                        height: "431px",
                        textAlign: "center",
                        my: 2,

                        container: "",
                      }}
                    >
                      {!value.imageLoaded.includes(item.id) && (
                        <Skeleton
                          variant="rounded"
                          width={280}
                          height={278}
                          sx={{
                            borderRadius: "8px",
                            margin: "10px auto 0px auto",
                          }}
                        />
                      )}
                      <Image
                        width={280}
                        height={278}
                        src={item.image}
                        alt={item.name}
                        onLoadingComplete={() => func.handleImageLoad(item.id)}
                        onError={() => func.handleImageLoad(item.id)} // Agar skeleton tetap hilang jika ada error
                        style={{
                          borderRadius: "8px",
                          marginTop: "12px",
                          opacity: !value.imageLoaded.includes(item.id)
                            ? "0"
                            : "1",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "myFont",
                          fontWeight: 600,
                          mt: 1,
                          px: 2,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontFamily: "myFont", mt: 1, px: 2 }}>
                        {item.position}
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                      >
                        {item.major}
                      </Typography>
                    </Card>
                  );
                })}
            </Stack>
          </Stack>
          {/* Deputi Pendidikan */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Deputi Pendidikan
            </Typography>
            <Stack
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.pendidikan &&
                value.pendidikan.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      sx={{
                        boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                        borderRadius: "12px",
                        minWidth: "307px",
                        height: "431px",
                        textAlign: "center",
                        my: 2,
                      }}
                    >
                      {!value.imageLoaded.includes(item.id) && (
                        <Skeleton
                          variant="rounded"
                          width={280}
                          height={278}
                          sx={{
                            borderRadius: "8px",
                            margin: "10px auto 0px auto",
                          }}
                        />
                      )}
                      <Image
                        style={{
                          borderRadius: "8px",
                          marginTop: "12px",
                          opacity: !value.imageLoaded.includes(item.id)
                            ? "0"
                            : "1",
                        }}
                        width={280}
                        height={278}
                        src={item.image}
                        alt={item.name}
                        onLoadingComplete={() => func.handleImageLoad(item.id)}
                        onError={() => func.handleImageLoad(item.id)}
                      />
                      <Typography
                        sx={{
                          fontFamily: "myFont",
                          fontWeight: 600,
                          mt: 1,
                          px: 2,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography sx={{ fontFamily: "myFont", mt: 1 }}>
                        {item.position}
                      </Typography>
                      <Typography
                        sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                      >
                        {item.major}
                      </Typography>
                    </Card>
                  );
                })}
            </Stack>
          </Stack>
          {/* Deputi Kewirausahaan */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Deputi Kewirausahaan
            </Typography>
            <Stack
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.kewirausahaan &&
                value.kewirausahaan.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      minWidth: "307px",
                      height: "431px",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    {!value.imageLoaded.includes(item.id) && (
                      <Skeleton
                        variant="rounded"
                        width={280}
                        height={278}
                        sx={{
                          borderRadius: "8px",
                          margin: "10px auto 0px auto",
                        }}
                      />
                    )}
                    <Image
                      style={{
                        borderRadius: "8px",
                        marginTop: "12px",
                        opacity: !value.imageLoaded.includes(item.id)
                          ? "0"
                          : "1",
                      }}
                      width={280}
                      height={278}
                      src={item.image}
                      alt={item.name}
                      onLoadingComplete={() => func.handleImageLoad(item.id)}
                      onError={() => func.handleImageLoad(item.id)}
                    />
                    <Typography
                      sx={{
                        fontFamily: "myFont",
                        fontWeight: 600,
                        mt: 1,
                        px: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "myFont", mt: 1 }}>
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                    >
                      {item.major}
                    </Typography>
                  </Card>
                ))}
            </Stack>
          </Stack>
          {/* Deputi Lingkungan Hidup */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Deputi Lingkungan Hidup
            </Typography>
            <Stack
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.lingkunganHidup &&
                value.lingkunganHidup.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      minWidth: "307px",
                      height: "431px",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    {!value.imageLoaded.includes(item.id) && (
                      <Skeleton
                        variant="rounded"
                        width={280}
                        height={278}
                        sx={{
                          borderRadius: "8px",
                          margin: "10px auto 0px auto",
                        }}
                      />
                    )}
                    <Image
                      style={{
                        borderRadius: "8px",
                        marginTop: "12px",
                        opacity: !value.imageLoaded.includes(item.id)
                          ? "0"
                          : "1",
                      }}
                      width={280}
                      height={278}
                      src={item.image}
                      alt={item.name}
                      onLoadingComplete={() => func.handleImageLoad(item.id)}
                      onError={() => func.handleImageLoad(item.id)}
                    />
                    <Typography
                      sx={{
                        fontFamily: "myFont",
                        fontWeight: 600,
                        mt: 1,
                        px: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "myFont", mt: 1 }}>
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                    >
                      {item.major}
                    </Typography>
                  </Card>
                ))}
            </Stack>
          </Stack>
          {/* Deputi Kesehatan */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Deputi Kesehatan
            </Typography>
            <Stack
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.kesehatan &&
                value.kesehatan.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      minWidth: "307px",
                      height: "431px",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    {!value.imageLoaded.includes(item.id) && (
                      <Skeleton
                        variant="rounded"
                        width={280}
                        height={278}
                        sx={{
                          borderRadius: "8px",
                          margin: "10px auto 0px auto",
                        }}
                      />
                    )}
                    <Image
                      style={{
                        borderRadius: "8px",
                        marginTop: "12px",
                        opacity: !value.imageLoaded.includes(item.id)
                          ? "0"
                          : "1",
                      }}
                      width={280}
                      height={278}
                      src={item.image}
                      alt={item.name}
                      onLoadingComplete={() => func.handleImageLoad(item.id)}
                      onError={() => func.handleImageLoad(item.id)}
                    />
                    <Typography
                      sx={{
                        fontFamily: "myFont",
                        fontWeight: 600,
                        mt: 1,
                        px: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "myFont", mt: 1 }}>
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                    >
                      {item.major}
                    </Typography>
                  </Card>
                ))}
            </Stack>
          </Stack>
          {/* Deputi Public Relations */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Deputi Public Relations
            </Typography>
            <Stack
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.publicRelation &&
                value.publicRelation.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      minWidth: "307px",
                      height: "431px",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    {!value.imageLoaded.includes(item.id) && (
                      <Skeleton
                        variant="rounded"
                        width={280}
                        height={278}
                        sx={{
                          borderRadius: "8px",
                          margin: "10px auto 0px auto",
                        }}
                      />
                    )}
                    <Image
                      style={{
                        borderRadius: "8px",
                        marginTop: "12px",
                        opacity: !value.imageLoaded.includes(item.id)
                          ? "0"
                          : "1",
                      }}
                      width={280}
                      height={278}
                      src={item.image}
                      alt={item.name}
                      onLoadingComplete={() => func.handleImageLoad(item.id)}
                      onError={() => func.handleImageLoad(item.id)}
                    />
                    <Typography
                      sx={{
                        fontFamily: "myFont",
                        fontWeight: 600,
                        mt: 1,
                        px: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "myFont", mt: 1 }}>
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                    >
                      {item.major}
                    </Typography>
                  </Card>
                ))}
            </Stack>
          </Stack>
          {/* Deputi Multimedia Management */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Deputi Multimedia Management
            </Typography>
            <Stack
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.multimediaManagement &&
                value.multimediaManagement.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      minWidth: "307px",
                      height: "431px",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    {!value.imageLoaded.includes(item.id) && (
                      <Skeleton
                        variant="rounded"
                        width={280}
                        height={278}
                        sx={{
                          borderRadius: "8px",
                          margin: "10px auto 0px auto",
                        }}
                      />
                    )}
                    <Image
                      style={{
                        borderRadius: "8px",
                        marginTop: "12px",
                        opacity: !value.imageLoaded.includes(item.id)
                          ? "0"
                          : "1",
                      }}
                      width={280}
                      height={278}
                      src={item.image}
                      alt={item.name}
                      onLoadingComplete={() => func.handleImageLoad(item.id)}
                      onError={() => func.handleImageLoad(item.id)}
                    />
                    <Typography
                      sx={{
                        fontFamily: "myFont",
                        fontWeight: 600,
                        mt: 1,
                        px: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "myFont", mt: 1 }}>
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                    >
                      {item.major}
                    </Typography>
                  </Card>
                ))}
            </Stack>
          </Stack>
          {/* Deputi Pengembangan SDM */}
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            sx={{
              alignItems: "center",
              mt: 2,
              borderBottom: "2px solid rgba(0, 0, 0, 0.1)",
              pb: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "myFont",
                fontSize: "24px",
                fontWeight: 600,
                opacity: "0.7",
              }}
            >
              Deputi Pengembangan SDM
            </Typography>
            <Stack
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "row",
                gap: 4,
                maxWidth: { xs: "85%", md: "100%" },
                px: 2,
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {value.pengembangansdm &&
                value.pengembangansdm.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      boxShadow: "0px 2px 7px 7px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      minWidth: "307px",
                      height: "431px",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    {!value.imageLoaded.includes(item.id) && (
                      <Skeleton
                        variant="rounded"
                        width={280}
                        height={278}
                        sx={{
                          borderRadius: "8px",
                          margin: "10px auto 0px auto",
                        }}
                      />
                    )}
                    <Image
                      style={{
                        borderRadius: "8px",
                        marginTop: "12px",
                        opacity: !value.imageLoaded.includes(item.id)
                          ? "0"
                          : "1",
                      }}
                      width={280}
                      height={278}
                      src={item.image}
                      alt={item.name}
                      onLoadingComplete={() => func.handleImageLoad(item.id)}
                      onError={() => func.handleImageLoad(item.id)}
                    />
                    <Typography
                      sx={{
                        fontFamily: "myFont",
                        fontWeight: 600,
                        mt: 1,
                        px: 2,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "myFont", mt: 1 }}>
                      {item.position}
                    </Typography>
                    <Typography
                      sx={{ fontFamily: "myFont", fontSize: "14px", mt: 1 }}
                    >
                      {item.major}
                    </Typography>
                  </Card>
                ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
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
