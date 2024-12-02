import { Alert, Snackbar } from "@mui/material";
import React from "react";

export default function Page(props) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={5000}
      onClose={props.onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      // sx={{ width: "60%" }}
    >
      {/* <Alert
        onClose={props.onCloseAlert}
        // severity="error"
        variant="filled"
        sx={{ width: "100%", fontFamily: "Poppins" }}
      > */}
        {props.children}
      {/* </Alert> */}
    </Snackbar>
  );
}
