import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import GarisA from "../../assets/garisA.png";
import GarisB from "../../assets/garisB.png";
import Bg2 from "../../assets/bg2.png";
import Foto1 from "../../assets/foto1.png";
import Foto2 from "../../assets/foto2.png";
import Bgfoto from "../../assets/bgfoto.png";
import "../gettingMeried/Getting.css";
import { Height } from "@mui/icons-material";
import luffy from "../../assets/luffy.webp"

const Getting = () => {
  return (
    <Box sx={{ backgroundImage: `url(${Bg2})` ,marginTop: {xs: "-8px",sm: "0px",md: "0px",lg: "0px"}}}>
      <CardMedia
        component="img"
        // height="194"
        image={GarisA}
        alt="Paella dish"
      />
      <Typography
        mt={8}
        className="fs4"
        sx={{
          fontSize: "32px",
          textAlign: "center",
          color: "#6D5C4D",
          fontWeight: "600",
          lineHeight: "32px",
          fontFamily: "Josefin Sans",
        }}
      >
        We Are Getting Married
      </Typography>
      <Grid mt={2} container spacing={2}>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-end",
                lg: "flex-end",
              },
              // backgroundColor: "aqua",
              height: "317px",
            }}
          >
            <Stack
              sx={{
                // backgroundImage: `url(${Bgfoto})`,
                // backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "370px",
              }}
            >
              <Stack sx={{}}>
                <CardMedia
                  sx={{
                    justifyContent: "flex-end",
                    alignSelf: "center",
                    maxHeight: "260px",
                    maxWidth: "260px",
                    marginTop: "15px",
                    borderRadius: "50%"
                  }}
                  component="img"
                  image={Foto1}
                  alt="Paella dish"
                />
                <CardMedia
                  sx={{
                    justifyContent: "flex-end",
                    position: 'absolute',
                    alignSelf: "center",
                    maxHeight: "345px",
                    maxWidth: "350px",
                    marginTop: "-30px"

                    // position: "static",
                    // marginTop: "5vh"
                    // backgroundColor: "red"
                  }}
                  component="img"
                  //   height="100"
                  //   width="100"
                  image={Bgfoto}
                  alt="Paella dish"
                />
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid mt={2} xs={12} sm={12} md={3} lg={3}>
          <Box
            sx={{
              textAlign: "center",

              // backgroundColor: "red",
            }}
          >
            <Typography
              fontFamily="Bonheur Royale"
              className="fs1"
              fontWeight={400}
              color="#6D5C4D"
              fontSize="40px"
            >
              Pria
            </Typography>
            <Typography
              className="fs4"
              fontWeight={600}
              color="#6D5C4D"
              fontSize="20px"
              fontFamily="Josefin Sans"
            >
              Nama Lengkap Pria
            </Typography>
            <Typography
              className="fs4"
              fontWeight={500}
              color="#6D5C4D"
              fontSize="20px"
              fontFamily="Josefin Sans"
              sx={{
                marginLeft: { xs: "18px", sm: "0px", md: "0px", lg: "0px" },
              }}
            >
              Anak Pertama dari Keluarga Bapak Pria & Ibu Pria
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        className="fs2"
        sx={{
          textAlign: "center",
          fontSize: "90px",
          fontWeight: "400",
          color: "#6D5C4D",
          fontFamily: "Pinyon Script",
          marginTop: "-20px"
        }}
      >
        &
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid mt={2} xs={12} sm={12} md={6} lg={3}>
          <Box
            sx={{
              textAlign: "center",

              // backgroundColor: "red",
            }}
          >
            <Typography
              className="fs1"
              fontWeight={400}
              color="#6D5C4D"
              fontSize="40px"
              fontFamily="Josefin Sans"
            >
              Wanita
            </Typography>
            <Typography
              className="fs4"
              fontWeight={600}
              color="#6D5C4D"
              fontSize="20px"
              fontFamily="Josefin Sans"
            >
              Nama Lengkap Wanita
            </Typography>
            <Typography
             className="fs4"
             fontWeight={500}
             color="#6D5C4D"
             fontSize="20px"
             fontFamily="Josefin Sans"
             sx={{
               marginLeft: { xs: "20px", sm: "0px", md: "0px", lg: "0px" },
               textAlign: "center"
             }}
            >
              Anak Pertama dari Keluarga Bapak Wanita & Ibu Wanita
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "flex-end",
                lg: "flex-end",
              },
              // backgroundColor: "aqua",
              height: "317px",
            }}
          >
            <Stack sx={{}}>
                <CardMedia
                  sx={{
                    justifyContent: "flex-end",
                    alignSelf: "center",
                    maxHeight: "260px",
                    maxWidth: "260px",
                    marginTop: "15px",
                    borderRadius: "50%"
                  }}
                  component="img"
                  image={Foto2}
                  alt="Paella dish"
                />
                <CardMedia
                  sx={{
                    justifyContent: "flex-end",
                    position: 'absolute',
                    alignSelf: "center",
                    maxHeight: "345px",
                    maxWidth: "350px",
                    marginTop: "-30px"

                    // position: "static",
                    // marginTop: "5vh"
                    // backgroundColor: "red"
                  }}
                  component="img"
                  //   height="100"
                  //   width="100"
                  image={Bgfoto}
                  alt="Paella dish"
                />
              </Stack>
          </Box>
        </Grid>
      </Grid>
      <CardMedia
        component="img"
        // height="80"
        image={GarisB}
        alt="Paella dish"
      />
    </Box>
  );
};

export default Getting;
