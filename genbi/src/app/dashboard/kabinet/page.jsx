"use client";
import Appbar from "@/components/appbar/Appbar";
import { themePagination } from "@/components/pagination/Pagination";
import { StyledTableCell, StyledTableRow } from "@/components/tabel/Tabel";
import { Data, DataAdmin } from "@/values/Constant";
import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MobileStepper,
  Modal,
  OutlinedInput,
  Pagination,
  Paper,
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
// import Pagination from "@mui/material/Pagination";
import Image from "next/image";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import CustomButton from "@/components/button/CustomButton";
import { RiDeleteBin5Fill } from "react-icons/ri";
import PersonIcon from "@mui/icons-material/Person";
import DetailKegiatan from "@/assets/detailKegiatan.svg";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import IconImage from "@/assets/image.svg";
import RichTextEditor from "@/components/richTextEditor/RichTextEditor";
import Hapus from "@/assets/delete.png";
import { ButtonStyle } from "@/components/button/Button";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FooterDashboard from "@/components/footer/FooterDashboard";
import SearchIcon from "@mui/icons-material/Search";
import PeriodeLogic from "./KabinetLogic";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Snackbar from "@/components/snackbar/Snackbar";
import ModalSukses from "@/components/modal/ModalSukses";
import { useDrawer } from "@/contexts/DrawerContext";

export default function Periode() {
  const { value, func } = PeriodeLogic();
  const { loadingRoute, loadingDetail } = useDrawer();

  return (
    <Box>
      <Appbar
        judul={"kabinet"}
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
                      <TableCell
                        sx={{
                          fontFamily: "MyFont",
                          width: "400px",
                        }}
                      >
                        Nama Kabinet
                      </TableCell>
                      <TableCell sx={{ fontFamily: "MyFont", width: "350px" }}>
                        Periode Kepengurusan
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
                      value.data.map((row) => {
                        return (
                          <StyledTableRow key={row.id}>
                            <StyledTableCell>{row.name}</StyledTableCell>
                            <StyledTableCell>{row.period}</StyledTableCell>
                            <StyledTableCell>
                              <Stack
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-around",
                                }}
                              >
                                {loadingDetail === true &&
                                value.selectedId === row.id ? (
                                  <CircularProgress
                                    size={"20px"}
                                    sx={{
                                      color: "#23176D",
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
                                      func.handleDetailClick(row.id)
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
                                  onClick={() => func.handleEdit(row.id)}
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
                                  onClick={() => func.openModalDelete(row.id)}
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
                Periode
              </Typography>
              <Grid container spacing={2}>
                {/* nama kepengurusan  */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Nama Kabinet
                  </Typography>
                  <OutlinedInput
                    sx={{
                      mt: 1,
                      fontFamily: "myFont",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                    placeholder="Masukkan Nama Kabinet"
                    value={value.name || ""}
                    onChange={(e) => value.setName(e.target.value)}
                  ></OutlinedInput>
                  <Typography
                    sx={{
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                      mt: 2,
                    }}
                  >
                    * Periode Kepengurusan
                  </Typography>
                  <OutlinedInput
                    sx={{
                      mt: 1,
                      fontFamily: "myFont",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                    placeholder="Masukkan Periode Kepengurusan"
                    value={value.period}
                    onChange={(e) => value.setPeriod(e.target.value)}
                  ></OutlinedInput>
                </Grid>
              </Grid>
              {/* button */}
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
                      size={18}
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
      <FooterDashboard mt={value.selectedDetail ? 33 : 4} />
    </Box>
  );
}
