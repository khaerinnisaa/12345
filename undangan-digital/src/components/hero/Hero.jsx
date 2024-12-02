import "../hero/Hero.css";
import Image from "../../assets/bgHome.png";
import Bingkai from "../../assets/bingkai.png";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <Box
      // className="tes"
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: {
          xs: "39% 0px",
          sm: "39% 0px",
          md: "39% 0px",
          lg: "center",
        },
        backgroundSize: "cover",
        // maxHeight: "100vh",
        height: {xs: "101vh",sm: "100vh",md: "100vh",lg: "100vh"},
        paddingTop: "-70px,"
      }}
    >
      <Box
        className="coba"
        sx={{ height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh",background: "rgba(0, 0, 0, 0.8) "} }}
      >
        <Grid
        className="pading"
          container
          sx={{
            paddingTop: { xs: "120px", sm: "20vh", md: "20vh", lg: "20vh" },
          }}
        >
          <Grid
            flexDirection="column"
            sx={{ margin: { xs: "0px", sm: "0px", md: "auto", lg: "auto" } }}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Typography
              className="typo fs3"
              sx={{
                color: "#B0A293",
                fontSize: {xs: '35px',sm: '60px',md: '40px',lg: '40px'},
                fontWeight: 700,
                lineHeight: "54px",
                textAlign: { xs: "center", sm: "center", md: "end", lg: "end" },
                marginTop: { xs: "0", sm: "0", md: "0px", lg: "0px" },
                // marginTop: "center",
                fontFamily: "Cinzel",
                // backgroundColor: "aqua"
              }}
            >
              THE WEDDING OF
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography color={"red"}>
              <CardMedia
                sx={{
                  maxHeight: {xs: "350px",sm: "500px",md: "350px",lg: "350px"},
                  maxWidth: {xs: "350px",sm: "500px",md: "350px",lg: "350px"},
                  margin: { xs: "0 auto", md: "0", lg: "0" },
                }}
                component="img"
                // height="194"
                image={Bingkai}
                alt="Paella dish"
              />
              <Typography
                // className="fs2"
                className="pria"
                sx={{
                  position: "absolute",
                  marginTop: {xs: "-240px",sm: "-340px",md: "-240px",lg: "-240px"},
                  marginLeft: {
                    xs: "31vw",
                    sm: "37vw",
                    md: "100px",
                    lg: "100px",
                  },
                  fontSize: {xs:"45px",sm: "60px",md: "45px",lg: "45px"},
                  fontFamily: "Pinyon Script",
                  color: "#B0A293",
                }}
              >
                Pria
              </Typography>
              <Typography
                // className="fs2"
                sx={{
                  position: "absolute",
                  marginTop: {xs: "-215px",sm: "-305px",md: "-215px",lg: "-215px"},
                  marginLeft: {
                    xs: "45vw",
                    sm: "46vw",
                    md: "155px",
                    lg: "155px",
                  },
                  fontSize: {xs: "60px",sm: "90px",md: "60px",lg: "60px"},
                  color: "#B0A293",
                  fontFamily: "Pinyon Script",
                }}
              >
                &
              </Typography>
              <Typography
                className="fs1"
                sx={{
                  position: "absolute",
                  marginTop: {xs: "-150px",sm: '-200px',md: "-150px",lg: "-150px"},
                  marginLeft: {
                    xs: "43vw",
                    sm: "45vw",
                    md: "150px",
                    lg: "150px",
                  },
                  fontSize: {xs:"45px",sm: "60px",md: "45px",lg: "45px"},
                  color: "#B0A293",
                  fontFamily: "Bonheur Royale",
                }}
              >
                Wanita
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        {/* <Navbar /> */}
      </Box>
    </Box>
  );
};

export default Hero;
