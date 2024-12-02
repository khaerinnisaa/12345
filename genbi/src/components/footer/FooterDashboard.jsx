import { Box, Card, Typography } from "@mui/material";
import React from "react";

export default function FooterDashboard({mt}) {
  return (
    <Box sx={{ mt: mt }}>
      <Card
        sx={{
          height: "50px",
          alignContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "myFont",
            fontWeight: 500,
            ml: 4,
          }}
        >
          Created by <span style={{ color: "#23176D" }}>GenBI UINAM</span>
        </Typography>
      </Card>
    </Box>
  );
}
