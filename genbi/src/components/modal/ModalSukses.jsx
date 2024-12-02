import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Sukses from "@/assets/sukses.svg";
import CustomButton from "../button/CustomButton";

export default function ModalSukses({ open, onClick }) {
  const styleModalSucces = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    outline: "none",
  };
  return (
    <Modal
      open={open}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalSucces}>
        <Stack sx={{ alignSelf: "center" }}>
          <Image
            width={125}
            height={125}
            style={{
              marginTop: 1,
              alignSelf: "center",
            }}
            src={Sukses}
          />
          <Typography
            id="modal-modal-title"
            sx={{
              fontFamily: "myfont",
              fontSize: "24px",
              fontWeight: 500,
              textAlign: "center",
              mt: 2,
            }}
          >
            Sukses!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              fontFamily: "myfont",
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
              mt: 1,
            }}
          >
            Berhasil menyimpan data
          </Typography>
          <Button
            onClick={onClick}
            variant="contained"
            sx={{
              width: "185px",
              alignSelf: "center",
              mt: 2,
              borderRadius: "8px",
              height: "32px",
              color: "#FFFFFF",
              fontSize: "16px",
              textTransform: "none",
              backgroundColor: "#23176D",
              fontFamily: "myFont",
              "&:hover": {
                backgroundColor: "#23176D",
                opacity: "0.8",
              },
            }}
          >
            Oke
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
