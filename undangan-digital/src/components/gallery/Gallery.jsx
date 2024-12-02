import { Box, CardMedia, Stack, Typography } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Bg5 from "../../assets/bg5.png";
import Foto10 from "../../assets/foto10.png";
import "../gallery/Gallery.css";
import Bg6 from "../../assets/bg6.png";
import Bunga5 from "../../assets/bunga5.png";
import Foto7 from "../../assets/foto7.png";
import Foto8 from "../../assets/foto8.png";
import Foto9 from "../../assets/foto9.png";
import luffy from "../../assets/luffy.webp";
import bunga4 from "../../assets/bunga4.png";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import lagu from "../../assets/"

// import './App.css';
// import { dataDigitalBestSeller } from './data';

const Gallery = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          // centerMode: false,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      //   linkDefault: imgGirl,
    }));
  };

  const dataDigitalBestSeller = [
    { Image: Foto7 },
    { Image: Foto8 },
    { Image: Foto9 },
    { Image: Foto7 },
    { Image: Foto8 },
    { Image: Foto9 },
  ];
  return (
    <Box
      sx={{
        backgroundImage: `url(${Bg5})`,
        maxWidth: "100vw",
        paddingBottom: "200px",
      }}
    >
      {/* gallery */}
      <Stack sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Josefin Sans",
            color: "#6D5C4D",
            fontSize: "32px",
            fontWeight: 900,
            marginTop: "80px",
          }}
        >
          Gallery
        </Typography>
        <Typography
          sx={{
            fontFamily: "Bonheur Royale",
            color: "#6D5C4D",
            fontSize: "32px",
          }}
        >
          Pria & Wanita
        </Typography>
        <Box
          sx={{
            maxWidth: { xs: "85%", sm: "90%", md: "80%", lg: "80%" },
            margin: "auto",
          }}
        >
          <Stack
            sx={{
              maxWidth: { xs: "140px", sm: "150px", md: "190px", lg: "200px" },
              position: "absolute",
              zIndex: 1,
              marginLeft: {
                xs: "-30px",
                sm: "-30px",
                md: "-10px",
                lg: "-10px",
              },
              marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "-5px" },
            }}
          >
            <CardMedia component="img" src={bunga4} />
          </Stack>
          <Slider {...settings}>
            {dataDigitalBestSeller.map((item, index) => (
              <div className="card carousel-image" key={index}>
                <div className="card-top  ">
                  <Stack
                    sx={{
                      width: {
                        xs: "140px",
                        sm: "200px",
                        md: "270px",
                        lg: "300px",
                      },
                      height: {
                        xs: "200px",
                        sm: "350px",
                        md: "340px",
                        lg: "340px",
                      },
                      margin: "auto",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "25px",
                        width: "100%",
                        height: "100%",
                      }}
                      src={item.Image}
                      alt=""
                      onError={handleErrorImage}
                    />
                  </Stack>
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      </Stack>
      {/* video */}
      <Stack
        sx={{
          marginTop: { xs: "-300px", sm: "-30px", md: "-40px", lg: "-50px" },
          marginBottom: "-100px",
        }}
      >
        <Stack sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              color: "#6D5C4D",
              fontSize: "32px",
              fontWeight: 600,
            }}
          >
            The Wedding Video
          </Typography>
        </Stack>
        <Stack mt={2}>
          <Card
            className="gallery"
            variant="soft"
            component="li"
            sx={{
              width: { xs: "70vw", sm: 450, md: 600, lg: 590 },
              height: { xs: 150, sm: 250, md: 350, lg: 350 },
              margin: "0 auto",
              boxShadow: "none",
              filter: "none",
            }}
          >
            <CardCover>
              <video style={{}} autoPlay loop muted poster={Bg6}>
                <source src={""} type="video/mp4" />
              </video>
            </CardCover>
            <CardContent>
              <Typography
                width={"103%"}
                level="h6"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 6, sm: 18, md: 23 }}
                ml={{ xs: "-3px", sm: 2, md: 2, lg: 3 }}
                // bgcolor={"red"}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "absolute",
                }}
              >
                <CardMedia
                  className="bunga5"
                  sx={{
                    maxWidth: { xs: 140, sm: 150, md: 220, lg: 230 },
                    // maxHeight: "10",
                  }}
                  component="img"
                  // height="390"
                  image={Bunga5}
                  alt="green iguana"
                />
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Gallery;
