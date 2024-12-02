import { Box, CardMedia, Grid, Stack, Typography } from "@mui/material";
import Cincin from "../../assets/cincin.png";
import Gelas from "../../assets/gelas.png";
import Maps from "../../assets/maps.png";
import Audio from "../../assets/audio.png";
import lagu from "../../assets/lagu.mp3"
import "../navbar/Navbar.css";


const Navbar = (props) => {
  return (
    <Box
      className="margin"
      sx={{
        position: "fixed",
        zIndex: 10,
        // marginTop: { xs: "80vh" },
        // backgroundColor: "blue",
        width: "100vw",
      }}
    >
      <Stack
        mb={4}
        sx={{
          display: "flex",
          maxWidth: { xs: "90vw", sm: "90vw", md: "90vw", lg: "90vw" },
          alignItems: "end",
        }}
      >
        {/* <button style={{ backgroundColor: "red" }} onClick={() => playSound()}> */}
          <CardMedia  onClick={props.onClick}
            sx={{
              maxWidth: { xs: "40px", sm: "40px", md: "50px", lg: "50px" },
              position: {
                xs: "static",
                sm: "static",
                md: "absolute",
                lg: "absolute",
              },
              marginTop: { xs: "-20px", sm: "0px", md: "80px", lg: "81px" },
              cursor: "pointer",
            }}
            component="img"
            src={Audio}
            alt=""
          />
        {/* </button> */}
      </Stack>
      <Stack
        sx={
          {
            // width: "80%",
            // backgroundColor: "red",
          }
        }
      >
        <Stack
          sx={{
            // backgroundColor: "aqua",
            width: { xs: "80%", sm: "80%", md: "50%", lg: "50%" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "0 auto",
            background:
              " linear-gradient(180deg, rgba(109, 92, 77, 0.8) 38.67%, rgba(176, 162, 147, 0.8) 167.24%)",
            boxShadow: "0px 12px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            paddingY: "5px",
            marginTop: { xs: "0px", sm: "0px", md: "40px", lg: "40px" },
          }}
        >
          <CardMedia onClick={props.akad}
            sx={{
              maxWidth: { xs: "50px", sm: "60px", md: "60px", lg: "60px" },
              cursor: "pointer"
            }}
            component="img"
            src={Cincin}
            alt=""
          />
          <CardMedia onClick={props.resepsi}
            sx={{
              maxWidth: { xs: "50px", sm: "60px", md: "60px", lg: "60px" },
              cursor: "pointer"
            }}
            component="img"
            src={Gelas}
            alt=""
          />
          <CardMedia  onClick={props.maps}
            sx={{
              maxWidth: { xs: "50px", sm: "60px", md: "60px", lg: "60px" },
              cursor: "pointer"
            }}
            component="img"
            src={Maps}
            alt=""
          />
        </Stack>
      </Stack>
    </Box>

    // <Box

    //   sx={{
    //     position: "absolute",
    //     zIndex: 10
    //     //  height: { xs: "21%", sm: "21%", md: "30%", lg: "50%"
    //     // direction: "row",
    //   }}
    // >
    //   <Grid
    //   // bgcolor={"aqua"}
    //     // className="audio"
    //     item
    //     xs={12}
    //     sm={12}
    //     md={12}
    //     lg={12}
    //     sx={{
    //       width: "90vw",
    //       position: {
    //         xs: "fixed",
    //         sm: "fixed",
    //         md: "fixed",
    //         lg: "fixed",
    //       },
    //       // marginTop: { xs: "0%", sm: "0%", md: "auto", lg: "auto" },
    //     }}
    //   >
    //     <Stack >
    //       <CardMedia
    //         // className="audio1"
    //         sx={{
    //           maxHeight: "45px",
    //           maxWidth: {xs: "35px",sm: "35px",md: "45px",lg: "45px"},
    //           position: {xs: "absolute",sm: "static",md: "absolute",lg: "absolute"},
    //           marginTop: {xs: "-50px",sm: "-50px",md: "-90px",lg: "-86px"},
    //           borderRadius: "50%",
    //           alignSelf: "end",
    //         }}
    //         component="img"
    //         // height="194"
    //         image={Audio}
    //         alt="Paella dish"
    //       />
    //     </Stack>
    //   </Grid>
    //   <Grid
    //     // bgcolor="blue"
    //     className="mt"
    //     container
    //     sx={{
    //       display: "flex",
    //       // paddingTop: "auto",
    //       // height: { xs: "18vh", sm: "0vh", md: "0vh", lg: "0vh" },
    //       // marginTop: "auto"
    //       // marginTop: { xs: "center", sm: "center", md: "0vh", lg: "0px" },
    //       position: "fixed",
    //       // justifyContent: "center",
    //     }}
    //   >
    //     <Grid
    //       // bgcolor={"red"}
    //       // className="menu"
    //       item
    //       xs={12}
    //       sm={12}
    //       md={12}
    //       lg={12}
    //       sx={{
    //         display: "flex",
    //         justifyContent: "center",
    //         // height: { xs: "8vh", sm: "10vh", md: "10vh", lg: "10vh" },
    //         // margin: { xs: "", sm: "auto", md: "", lg: "0px" },
    //         marginTop: { xs: "50px", sm: "0px", md: " -90px", lg: "-50px" },
    //       }}
    //     >
    //       <Stack
    //         className="menu"
    //         sx={{
    //           width: { xs: "80vw", sm: "70vw", md: "40vw", lg: "40vw" },
    //           paddingY: "5px",
    //           background:
    //             "linear-gradient(180deg, rgba(109, 92, 77, 0.8) 38.67%, rgba(176, 162, 147, 0.8) 167.24%)",
    //           boxShadow: "0px 12px 10px rgba(0, 0, 0, 0.1)",
    //           borderRadius: "10px",
    //           display: "flex",
    //           flexDirection: "row",
    //           justifyContent: "space-around",
    //         }}
    //       >
    //         <CardMedia
    //           sx={{
    //             maxHeight: "50px",
    //             maxWidth: "50px",
    //           }}
    //           component="img"
    //           // height="194"
    //           image={Cincin}
    //           alt="Paella dish"
    //         />
    //         <CardMedia
    //           sx={{
    //             maxHeight: "50px",
    //             maxWidth: "50px",
    //           }}
    //           component="img"
    //           // height="194"
    //           image={Gelas}
    //           alt="Paella dish"
    //         />
    //         <CardMedia
    //           sx={{
    //             maxHeight: "50px",
    //             maxWidth: "50px",
    //           }}
    //           component="img"
    //           // height="194"
    //           image={Maps}
    //           alt="Paella dish"
    //         />
    //       </Stack>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default Navbar;
