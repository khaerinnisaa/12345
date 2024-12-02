import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import Bunga from "../../assets/bunga.png";

const CardDate = (props) => {
  return (
    <Box sx={{ backgroundColor: "#6D5C4D" }}>
      <Card 
        sx={{
          marginTop: "-60px",
          width: "98vw",
          position: "absolute",
          background: "none",
          border: "none",
          boxShadow: "none",
          //   backgroundColor: "aqua",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{ maxWidth: "350px" }}
          component="img"
          //   height="140"
          image={Bunga}
          alt="green iguana"
        />
      </Card> {props.resepsi}
      <Stack pt={14} sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Josefin Sans",
            fontSize: "32px",
            color: "white",
            fontWeight: 600,
          }}
        >
          {props.jadwal}
        </Typography>
        <Typography
          mt={1}
          sx={{
            fontFamily: "Bonheur Royale",
            fontSize: "52px",
            color: "white",
            // fontWeight: 400,
          }}
        >
          Save The Date
        </Typography>
      </Stack>
      <Box mt={4} pb={12} sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "42px",
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            {props.hari}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "22px",
              fontWeight: 600,
              
            }}
          >
            Days
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "42px",
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            {props.jam}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            Hours
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "42px",
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            {props.menit}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            Minutes
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "42px",
              fontWeight: 900,
              textAlign: "center"

            }}
          >
            {props.detik}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "white",
              fontSize: "22px",
              fontWeight: 600,
            }}
          >
            Seconds
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default CardDate;
