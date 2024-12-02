"use client";
import { Box, Card, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import CardDashboard from "@/components/card/CardDashboard";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import Appbar from "@/components/appbar/Appbar";
import DashboardLogic from "./DashboardLogic";

export default function Dashboard() {
  const { value } = DashboardLogic();
  return (
    <Box>
      <Appbar judul={"Dashboard"} />
      {value.loadingGet === true ? (
        <Stack sx={{ alignItems: "center", height: "100vh" }}>
          <CircularProgress
            sx={{ margin: "auto", color: "#23176D" }}
            size={"50px"}
          />
        </Stack>
      ) : (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            pt: "100px",
          }}
        >
          <CardDashboard
            judul={"Total Anggota"}
            bgJudul={"#E8F5E9"}
            hover={"#C8E6C9"}
            clrJudul={"#4CAF50"}
            total={value.total}
            icon={GroupsIcon}
          />
          <CardDashboard
            judul={"Anggota Laki-laki"}
            bgJudul={"#E3F2FD"}
            hover={"#BBDEFB"}
            clrJudul={"#4D9DE0"}
            total={value.male}
            icon={ManIcon}
          />
          <CardDashboard
            judul={"Anggota Perempuan"}
            bgJudul={"#FCE4EC"}
            hover={"#F8BBD0"}
            clrJudul={"#FF69B4"}
            total={value.female}
            icon={WomanIcon}
          />
        </Stack>
      )}
    </Box>
  );
}
