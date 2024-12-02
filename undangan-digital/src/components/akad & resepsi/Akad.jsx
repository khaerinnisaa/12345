import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import Bg4 from "../../assets/bg4.png";
import Bunga2 from "../../assets/bunga2.png";
import Bunga3 from "../../assets/bunga3.png";
import Foto6 from "../../assets/foto6.png"
import luffy from "../../assets/luffy.webp"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Akad = (props) => {
  return (
    <Box sx={{ backgroundImage: `url(${Bg4})` }}>
      <CardMedia ref={props.resepsi}
        sx={{
          maxWidth: { xs: "330px", sm: "400px", md: "650px", lg: "650px" },
          
        }}
        component="img"
        //   height="140"
        image={Bunga3}
        alt="green iguana"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Stack  sx={{ textAlign: "end", marginRight: {xs: "30px",sm: "30px",md: "0px", lg: "0px"} }}>
            <Typography ref={props.akad} 
              sx={{
                fontFamily: "Josefin Sans",
                color: "#6D5C4D",
                fontSize: "40px",
                fontWeight: 900,
                marginY: "20px",
              }}
            >
              Akad Nikah
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                color: "#6D5C4D",
                fontSize: "20px",
                display: "flex",
                justifyContent: "flex-end",
                marginY: "10px",
              }}
            >
              3 Maret 2023
              <Typography sx={{ paddingTop: "3px", marginLeft: "10px" }}>
                <CalendarMonthIcon />
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                color: "#6D5C4D",
                fontSize: "20px",
                display: "flex",
                justifyContent: "flex-end",
                marginY: "10px",
              }}
            >
              7:30 - 09:00 WITA
              <Typography sx={{ paddingTop: "3px", marginLeft: "10px" }}>
                <AccessTimeIcon />
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                color: "#6D5C4D",
                fontSize: "20px",
                display: "flex",
                justifyContent: "flex-end",
                marginY: "10px",
              }}
            >
              Four Points by Sheraton Makassar
              <Typography sx={{ paddingTop: "3px", marginLeft: "10px" }}>
                <ApartmentIcon />
              </Typography>
            </Typography>
            <Stack mt={4} sx={{ alignItems: "end" }}>
              <Typography sx={{ width: "160px" }}>
                <Button
                  sx={{
                    color: "#6D5C4D",
                    border: "1px solid #6D5C4D",
                    textTransform: "none",
                    fontFamily: "lato",
                    fontSize: "16px",
                  }}
                  fullWidth
                  href="#"
                  variant="outlined"
                >
                  View location
                </Button>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid  item xs={12} sm={12} md={4} lg={4}>
          <Stack sx={{ display : 'flex',alignItems: "center", }}>
            <CardMedia
              sx={{
                maxWidth: "350px",
                borderRadius: "25px"
              }}
              component="img"
                // height="390"
              image={Foto6}
              alt="green iguana"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
        <Stack sx={{ marginLeft: {xs: "30px",sm: "30px",md: "0px", lg: "0px"} }}>
            <Typography
              sx={{
                fontFamily: "Josefin Sans",
                color: "#6D5C4D",
                fontSize: "40px",
                fontWeight: 900,
                marginY: "20px",
              }}
            >
              Resepsi
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                color: "#6D5C4D",
                fontSize: "20px",
                display: "flex",
                marginY: "10px",
              }}
            >
              3 Maret 2023
              <Typography sx={{ paddingTop: "3px", marginLeft: "10px" }}>
                <CalendarMonthIcon />
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                color: "#6D5C4D",
                fontSize: "20px",
                display: "flex",
                marginY: "10px",
              }}
            >
              7:30 - 09:00 WITA
              <Typography sx={{ paddingTop: "3px", marginLeft: "10px" }}>
                <AccessTimeIcon />
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                color: "#6D5C4D",
                fontSize: "20px",
                display: "flex",
                marginY: "10px",
              }}
            >
              Four Points by Sheraton Makassar
              <Typography sx={{ paddingTop: "3px", marginLeft: "10px" }}>
                <ApartmentIcon />
              </Typography>
            </Typography>
            <Stack mt={4} sx={{ alignItems: "" }}>
              <Typography ref={props.maps} sx={{ width: "160px" }}>
                <Button
                  sx={{
                    color: "#6D5C4D",
                    border: "1px solid #6D5C4D",
                    textTransform: "none",
                    fontFamily: "lato",
                    fontSize: "16px",
                  }}
                  fullWidth
                  href="#"
                  variant="outlined"
                >
                  View location
                </Button>
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Stack sx={{ alignItems: "end" }}>
        <CardMedia
          sx={{
            maxWidth: { xs: "330px", sm: "400px", md: "650px", lg: "650px" },
            marginBottom: { xs: "-22px", sm: "-22px", md: "", lg: "-35px" },
          }}
          component="img"
          //   height="140"
          image={Bunga2}
          alt="green iguana"
        />
      </Stack>
    </Box>
  );
};

export default Akad;
