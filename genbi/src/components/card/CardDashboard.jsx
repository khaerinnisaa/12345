import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MovingIcon from "@mui/icons-material/Moving";

export default function CardDashboard({
  judul,
  bgJudul,
  hover,
  clrJudul,
  total,
  icon: IconComponent,
}) {
  return (
    <Card
      sx={{
        width: "250px",
        borderRadius: "8px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          px: 2,
          pt: 1,
        }}
      >
        <Typography sx={{fontFamily: "MyFont",}}>{judul}</Typography>
        <Stack
          sx={{
            backgroundColor: bgJudul,
            width: "55px",
            height: "55px",
            borderRadius: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: hover, // Warna saat di-hover
            },
          }}
        >
          <IconComponent
            sx={{
              color: clrJudul,
              fontSize: "35px",
              margin: "auto",
            }}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          px: 2,
          pt: 4,
        }}
      >
        <MovingIcon sx={{ color: "#00B69B", fontSize: "26px" }} />
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: "bold",
            marginRight: "14px",
            fontFamily: "MyFont",
          }}
        >
          {total}
        </Typography>
      </Stack>
    </Card>
  );
}
