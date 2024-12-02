"use client";
import Appbar from "@/components/appbar/Appbar";
import { themePagination } from "@/components/pagination/Pagination";
import { StyledTableCell, StyledTableRow } from "@/components/tabel/Tabel";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Card,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  MobileStepper,
  Modal,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  Skeleton,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import CustomButton from "@/components/button/CustomButton";
import { RiDeleteBin5Fill } from "react-icons/ri";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import IconImage from "@/assets/image.svg";
import { ButtonStyle } from "@/components/button/Button";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import PengurusLogic from "./PengurusLogic";
import FooterDashboard from "@/components/footer/FooterDashboard";
import ModalSukses from "@/components/modal/ModalSukses";
import { all } from "axios";
import { useDrawer } from "@/contexts/DrawerContext";

export default function Pengurus() {
  const { value, func } = PengurusLogic();
  const { loadingDetail } = useDrawer();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <Box>
      <Appbar
        judul={"Pengurus"}
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
          {/* tabel data pengurus */}
          <Card sx={{ mt: 2 }}>
            <div id="print-content">
              <TableContainer
                sx={{ px: 5, fontFamily: "MyFont" }}
                component={Paper}
              >
                <Stack
                  display={"flex"}
                  direction={"row"}
                  sx={{
                    py: 3,
                    justifyContent: "end",
                    borderBottom: "1px solid rgba(232, 232, 232, 0.87)",
                    width: "95%",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  {/* menu */}
                  <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                    {value.kabinet && (
                      <Stack>
                        <Select
                          sx={{ height: 30, width: 230, fontFamily: "myFont" }}
                          onChange={func.handleCategory}
                          displayEmpty
                          value={value.selectedKabinet}
                          input={<OutlinedInput />}
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
                {/* list */}
                <Table>
                  <TableHead sx={{ fontFamily: "MyFont" }}>
                    <TableRow>
                      <TableCell sx={{ fontFamily: "MyFont", width: "350px" }}>
                        Gambar
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "MyFont",
                          width: "350px",
                        }}
                      >
                        Nama Lengkap
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "MyFont",
                          width: "350px",
                        }}
                      >
                        Alamat
                      </TableCell>
                      <TableCell sx={{ fontFamily: "MyFont", width: "350px" }}>
                        Jabatan
                      </TableCell>
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
                            <StyledTableCell>
                              {!value.imageLoaded.includes(row.id) && (
                                <Skeleton
                                  variant="rounded"
                                  width={150}
                                  height={150}
                                />
                              )}
                              <Image
                                src={row.image}
                                width={150}
                                height={150}
                                alt={row.name}
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
                            </StyledTableCell>
                            <StyledTableCell sx={{ fontFamily: "myFont" }}>
                              {row.name}
                            </StyledTableCell>
                            <StyledTableCell>{row.address}</StyledTableCell>
                            <StyledTableCell>
                              {[
                                "Kordinator Deputi",
                                "Sekretaris Deputi",
                                "Staf Deputi",
                              ].includes(row.position)
                                ? `${row.position} ${row.division.replace(
                                    "Deputi ",
                                    ""
                                  )}`
                                : row.position}
                              {/* {row.position} */}
                            </StyledTableCell>
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
                                        style={{ fontSize: "20px" }}
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
                Pengurus
              </Typography>
              {/* gambar */}
              <Stack
                // onDrop={func.handleDrop}
                // onDragOver={func.handleDragOver}
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
                      // value={value.image}
                    >
                      <input
                        type="file"
                        accept="image/*"
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
                {/* nama  */}
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Nama Lengkap
                  </Typography>
                  <OutlinedInput
                    sx={{
                      mt: 1,
                      fontFamily: "myFont",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                    size="small"
                    placeholder="Masukkan Nama Lengkap"
                    value={value.name}
                    onChange={(e) => value.setName(e.target.value)}
                  ></OutlinedInput>
                  {/* jurusan */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Jurusan
                  </Typography>
                  <OutlinedInput
                    sx={{
                      mt: 1,
                      fontFamily: "myFont",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                    size="small"
                    placeholder="Masukkan Jurusan"
                    value={value.major}
                    onChange={(e) => value.setMajor(e.target.value)}
                  ></OutlinedInput>
                  {/* alamat */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Alamat
                  </Typography>
                  <OutlinedInput
                    sx={{
                      mt: 1,
                      fontFamily: "myFont",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                    size="small"
                    placeholder="Masukkan Alamat"
                    value={value.address}
                    onChange={(e) => value.setAddress(e.target.value)}
                  ></OutlinedInput>
                  {/* jenis kelamin */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Jenis Kelamin
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={["laki-laki", "perempuan"]}
                    size="small"
                    sx={{
                      mt: "5px",
                      borderRadius: "12px",
                      fontFamily: "myFont",
                    }}
                    value={value.gender}
                    onChange={(event, v) => {
                      value.setGender(v);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{ fontFamily: "myFont", borderRadius: "12px" }}
                        InputProps={{
                          ...params.InputProps,
                          style: { fontFamily: "myFont" },
                        }}
                        placeholder={"Pilih Jenis Kelamin"}
                      />
                    )}
                  />

                  {/* jabatan */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Jabatan
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    size="small"
                    sx={{
                      mt: "5px",
                      borderRadius: "12px",
                      fontFamily: "myFont",
                    }}
                    options={value.dataJabatan || []}
                    value={
                      (value.dataJabatan &&
                        value.dataJabatan.find(
                          (option) => option.id === value.position
                        )) ||
                      value.position
                    }
                    onChange={(event, v) => {
                      value.setPosition(v ? v.id : "");
                    }}
                    getOptionLabel={(option) => option.name || value.position}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{ fontFamily: "myFont", borderRadius: "12px" }}
                        InputProps={{
                          ...params.InputProps,
                          style: { fontFamily: "myFont" },
                        }}
                        placeholder={"Pilih Jabatan"}
                      />
                    )}
                  />
                  {/* divisi */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Divisi
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    size="small"
                    sx={{
                      mt: "5px",
                      borderRadius: "12px",
                      fontFamily: "myFont",
                    }}
                    options={value.dataDivisi || []}
                    value={
                      value.dataDivisi?.find(
                        (option) => option.id === value.division
                      ) ||
                      value.dataDivisi?.find(
                        (option) => option.id === parseInt(value.division)
                      ) ||
                      value.division
                    }
                    onChange={(event, v) => {
                      value.setDivision(v ? v.id : "");
                    }}
                    getOptionLabel={(option) => option.name || value.division}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{
                          fontFamily: "myFont",
                          borderRadius: "12px",
                        }}
                        InputProps={{
                          ...params.InputProps,
                          style: { fontFamily: "myFont" },
                        }}
                        placeholder={"Pilih Divisi"}
                      />
                    )}
                  />
                  {/* periode kepengurusan */}
                  <Typography
                    sx={{
                      mt: 2,
                      fontFamily: "myFont",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    * Periode Kepengurusan
                  </Typography>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    size="small"
                    sx={{
                      mt: "5px",
                      borderRadius: "12px",
                      fontFamily: "myFont",
                    }}
                    options={value.kabinet || []}
                    value={
                      (value.kabinet &&
                        value.kabinet.find(
                          (option) => option.id === value.cabinet
                        )) ||
                      value.cabinet
                    }
                    onChange={(event, v) => {
                      value.setCabinet(v ? v.id : "");
                    }}
                    getOptionLabel={(option) => option.name || value.cabinet}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{
                          fontFamily: "myFont",
                          borderRadius: "12px",
                        }}
                        InputProps={{
                          ...params.InputProps,
                          style: { fontFamily: "myFont" },
                        }}
                        placeholder={"Pilih Periode Kepengurusan"}
                      />
                    )}
                  />
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
            autoHideDuration={5000}
            onClose={func.closeSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
          {/*  footer */}
          <FooterDashboard mt={4} />
        </>
      )}
    </Box>
  );
}
