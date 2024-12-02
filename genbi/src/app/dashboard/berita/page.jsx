"use client";
import Appbar from "@/components/appbar/Appbar";
import { themePagination } from "@/components/pagination/Pagination";
import { StyledTableCell, StyledTableRow } from "@/components/tabel/Tabel";
import {
  Alert,
  Box,
  Card,
  CircularProgress,
  Grid,
  Modal,
  OutlinedInput,
  Pagination,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import CustomButton from "@/components/button/CustomButton";
import { RiDeleteBin5Fill } from "react-icons/ri";
import BeritaLogic from "./BeritaLogic";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import IconImage from "@/assets/image.svg";
import RichTextEditor from "@/components/richTextEditor/RichTextEditor";
import { ButtonStyle } from "@/components/button/Button";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import FooterDashboard from "@/components/footer/FooterDashboard";
import Snackbar from "@/components/snackbar/Snackbar";
import ModalSukses from "@/components/modal/ModalSukses";
import { useDrawer } from "@/contexts/DrawerContext";

export default function Berita() {
  const { value, func } = BeritaLogic();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const { loadingDetail } = useDrawer();
  return (
    <Box>
      <Appbar
        judul={"Berita"}
        onClick={func.handleModalOpen}
        value={value.searchQuery}
        onChange={(e) => value.setSearchQuery(e.target.value)}
      />
      {value.loadingGet === true ? (
        <Stack sx={{ alignItems: "center", height: "100vh" }}>
          <CircularProgress
            sx={{ margin: "auto", color: "#23176D" }}
            size={"50px"}
          />
        </Stack>
      ) : (
        <>
          {/* tabel */}
          <Card sx={{ mt: 2 }}>
            <div id="print-content">
              <TableContainer
                sx={{ px: 5, fontFamily: "MyFont" }}
                component={Paper}
              >
                <Table>
                  <TableHead sx={{ fontFamily: "MyFont" }}>
                    <TableRow>
                      <TableCell sx={{ fontFamily: "MyFont", width: "350px" }}>
                        Gambar
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "MyFont",
                          width: "400px",
                        }}
                      >
                        Judul
                      </TableCell>
                      <TableCell sx={{ fontFamily: "MyFont", width: "350px" }}>
                        Tanggal Rilis
                      </TableCell>
                      {/* <TableCell sx={{ fontFamily: "MyFont",, width: "350px" }}>
                      Deskripsi kegiatan
                    </TableCell> */}
                      <TableCell
                        sx={{
                          fontFamily: "MyFont",
                          width: "170px",
                          textAlign: "center",
                        }}
                      >
                        Aksi
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ fontFamily: "MyFont" }}>
                    {value.data &&
                      value.data.map((row, index) => {
                        return (
                          <StyledTableRow key={index}>
                            <StyledTableCell>
                              <Image
                                src={row.image}
                                width={150}
                                height={150}
                                alt={row.title}
                                style={{
                                  borderRadius: "8px",
                                  opacity: !value.imageLoaded.includes(row.id)
                                    ? "0"
                                    : "1",
                                }}
                                onLoadingComplete={() =>
                                  func.handleImageLoad(row.id)
                                }
                                onError={() => func.handleImageLoad(row.id)}
                              />
                              {!value.imageLoaded.includes(row.id) && (
                                <Skeleton
                                  variant="rounded"
                                  width={150}
                                  height={150}
                                />
                              )}
                            </StyledTableCell>
                            <StyledTableCell>{row.title}</StyledTableCell>
                            <StyledTableCell>{row.published}</StyledTableCell>
                            <StyledTableCell>
                              <Stack
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-around",
                                }}
                              >
                                {loadingDetail === true &&
                                value.selectedSlug === row.slug ? (
                                  <CircularProgress
                                    size={"20px"}
                                    sx={{
                                      color: "#23176D",
                                      // backgroundColor: "#E6E6FA",
                                    }}
                                  />
                                ) : (
                                  <CustomButton
                                    bg={"#E6E6FA"}
                                    hover={"#D3D3D3"}
                                    color={"#23176D"}
                                    label={
                                      <VisibilityIcon
                                        style={{ fontSize: "18px" }}
                                      />
                                    }
                                    onClick={() =>
                                      func.handleDetailClick(row.slug)
                                    }
                                  />
                                )}
                                <CustomButton
                                  bg={"#999999"}
                                  color={"#FFFFFF"}
                                  hover={"#666666"}
                                  label={
                                    <CreateIcon style={{ fontSize: "18px" }} />
                                  }
                                  onClick={() => func.handleEdit(row.slug)}
                                />
                                <CustomButton
                                  bg={"#FFD5CC"}
                                  color={"red"}
                                  hover={"#F8BBD0"}
                                  label={
                                    <RiDeleteBin5Fill
                                      style={{ fontSize: "18px" }}
                                    />
                                  }
                                  onClick={() => func.openModalDelete(row.slug)}
                                />
                              </Stack>
                            </StyledTableCell>
                          </StyledTableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <Card sx={{ px: 4, py: 4 }}>
              <Stack
                display={"flex"}
                direction={"row"}
                sx={{ justifyContent: "space-between" }}
              >
                <Typography sx={{ fontFamily: "MyFont" }}>
                  Menampilkan 1 - 10 dari {value.totalItems} Data
                </Typography>
                {/* pagination */}
                <ThemeProvider theme={themePagination}>
                  <Pagination
                    sx={{ color: "#FFC400" }}
                    count={Math.ceil(value.totalItems / 10)}
                    page={value.page}
                    onChange={func.handleChangePage}
                  />
                </ThemeProvider>
              </Stack>
            </Card>
          </Card>

          {/* modal tambah data */}
          <Modal open={value.openModal} onClose={func.handleCloseModal}>
            <Stack sx={func.styleModal}>
              <Typography
                sx={{
                  width: "115px",
                  fontFamily: "myFont",
                  fontWeight: 600,
                  fontSize: "20px",
                  // borderBottom: "1px solid #7CD4A7",
                }}
              >
                Berita
              </Typography>
              {/* gambar */}
              <Stack
                onDrop={func.handleDrop}
                onDragOver={func.handleDragOver}
                sx={{ mt: 2 }}
              >
                <Typography
                  sx={{
                    fontFamily: "myFont",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  * Gambar
                </Typography>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack
                    sx={{
                      border: "1px dashed #576974",
                      borderRadius: "8px",
                      width: "160px",
                      mt: 1,
                    }}
                  >
                    <Image
                      src={IconImage}
                      width={50}
                      style={{
                        // width: "50px",
                        // margin: "0 auto",
                        margin: "auto",
                        marginTop: "22px",
                      }}
                      alt="ta"
                    />
                    <Typography
                      sx={{
                        width: "80%",
                        alignSelf: "center",
                        fontFamily: "myFont",
                        color: "#576974",
                        textAlign: "center",
                      }}
                    >
                      Tarik dan lepas foto di sini
                    </Typography>

                    <ButtonStyle
                      sx={{
                        my: 2,
                        width: "80%",
                        borderRadius: "8px",
                        alignSelf: "center",
                        backgroundColor: "#23176D",
                        "&:hover": { backgroundColor: "#23176D" },
                      }}
                      onClick={func.handleChooseFileClick}
                    >
                      <input
                        type="file"
                        // accept="image/*"
                        style={{ display: "none" }}
                        onChange={func.handleImageChange}
                        // value={value.image}
                      />
                      Pilih File
                    </ButtonStyle>
                  </Stack>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {value.previewImage ? (
                      <Stack sx={{ position: "relative" }}>
                        <Image
                          style={{ borderRadius: "8px" }}
                          src={value.previewImage}
                          alt={value.title}
                          width={200}
                          height={200}
                        />
                        <Stack
                          sx={{
                            position: "absolute",
                            alignSelf: "end",
                            cursor: "pointer",
                            p: 1,
                          }}
                        >
                          <RiDeleteBin5Fill
                            onClick={func.removeImage}
                            color="red"
                            size={"20px"}
                          />
                        </Stack>
                      </Stack>
                    ) : (
                      <p style={{ fontFamily: "myFont" }}></p>
                    )}
                  </Stack>
                </Stack>
              </Stack>
              <Grid container spacing={2}>
                {/* judul  */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Judul Berita
                  </Typography>
                  <OutlinedInput
                    sx={{
                      mt: 1,
                      fontFamily: "myFont",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                    placeholder="Masukkan Judul Berita"
                    value={value.title}
                    onChange={(e) => value.setTitle(e.target.value)}
                  ></OutlinedInput>
                </Grid>
              </Grid>
              {/* deskripsi  */}
              <Stack sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "myFont",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  * Deskripsi Berita
                </Typography>

                <RichTextEditor
                  value={value.content}
                  onChange={(e) => value.setContent(e)}
                />
              </Stack>

              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ButtonStyle
                  sx={{
                    mt: 2,
                    backgroundColor: "red",
                    "&:hover": { backgroundColor: "red" },
                  }}
                  onClick={func.handleCloseModal}
                >
                  Batal
                </ButtonStyle>
                <ButtonStyle
                  sx={{
                    mt: 2,
                    backgroundColor: "#23176D",
                    "&:hover": { backgroundColor: "#23176D" },
                  }}
                  onClick={func.handleSave}
                >
                  Save
                  {value.loading === true && (
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
          </Modal>

          {/* modal hapus */}
          <Modal open={value.modalDelete} onClose={func.handleCloseModal}>
            <Stack sx={func.styleModalDelete}>
              <Stack sx={{ alignSelf: "center" }}>
                {/* <Image
              style={{
                width: "125px",
                height: "125px",
                mt: 1,
                alignSelf: "center",
              }}
              src={Hapus}
              alt="succes"
            /> */}
                <Stack
                  sx={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "125px",
                    height: "125px",
                    alignSelf: "center",
                  }}
                >
                  <PriorityHighIcon
                    sx={{ color: "#FFFFFF", fontSize: "90px", margin: "auto" }}
                  />
                </Stack>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    fontFamily: "myFont",
                    fontSize: "14px",
                    fontWeight: 400,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  Anda yakin ingin menghapus?
                </Typography>
                <Stack
                  sx={{
                    // width: "250px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // backgroundColor: "aqua",
                  }}
                >
                  <ButtonStyle
                    onClick={func.handleCloseModal}
                    sx={{
                      my: 2,
                      backgroundColor: "red",
                      "&:hover": { backgroundColor: "red" },
                    }}
                  >
                    Batal
                  </ButtonStyle>
                  <ButtonStyle
                    onClick={func.handleDelete}
                    sx={{
                      my: 2,
                      backgroundColor: "#23176D",
                      "&:hover": { backgroundColor: "#23176D" },
                    }}
                  >
                    Iya
                    {value.loading === true && (
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
            </Stack>
          </Modal>
          {/* modal succes */}
          {value.modalSucces === true && (
            <ModalSukses
              open={value.modalSucces}
              onClick={func.handleCloseModalSucces}
            />
          )}
          {/* Snackbar */}
          <Snackbar
            open={value.snackbar.open}
            // autoHideDuration={5000}
            onClose={func.closeSnackbar}
            // anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={func.closeSnackbar}
              severity="error"
              variant="filled"
              sx={{ width: "100%", fontFamily: "myFont" }}
            >
              {value.snackbar.message}
            </Alert>
          </Snackbar>
        </>
      )}

      {/* footer */}
      <FooterDashboard mt={value.selectedDetail ? 2 : 4} />
    </Box>
  );
}
