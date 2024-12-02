import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineItemClasses,
  timelineOppositeContentClasses,
} from "@mui/lab";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Bg3 from "../../assets/bg3.png";
import Foto3 from "../../assets/foto3.png";
import Foto4 from "../../assets/foto4.png";
import Foto5 from "../../assets/foto5.png";
import luffy from "../../assets/luffy.webp";

import React from "react";
import { layoutGenerator } from "react-break";
import { Margin } from "@mui/icons-material";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnMobile = layout.is("mobile");
const OnAtLeastTablet = layout.isAtLeast("tablet");
const OnAtMostPhablet = layout.isAtMost("phablet");
const OnDesktop = layout.is("desktop");

const Story = () => {
  return (
    <div>
      <OnMobile>
        <Box
          sx={{
            backgroundImage: `url(${Bg3})`,
            marginTop: "-15px",
            paddingBottom: "50px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: "34px",
              fontWeight: 600,
              textAlign: "center",
              color: "#6D5C4D",
              paddingTop: "50px",
            }}
          >
            Our Love Story
          </Typography>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    margin: "0",
                    background: "none",
                    border: "2px solid #6D5C4D",
                  }}
                >
                  <FavoriteIcon
                    sx={{ width: "19px", height: "19px", color: "#6D5C4D" }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: "#6D5C4D" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Stack
                    sx={{
                      maxHeight: "140px",
                      maxWidth: "210px",
                      // backgroundColor: "aqua",
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: "100%",
                        height: "100%",
                        // paddingRight: "40px",
                        borderRadius: "18px",
                        // borderTopRightRadius: "58px"
                      }}
                      component="img"
                      // height="194"
                      image={Foto3}
                      alt="Paella dish"
                    />
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#6D5C4D",
                      margin: "auto",
                      marginLeft: "5vw",
                    }}
                  >
                    2015
                  </Typography>
                </Stack>
                <Typography
                  sx={{ fontFamily: "Bonheur Royale", fontSize: "32px" }}
                >
                  First Date
                </Typography>
                <Typography
                  sx={{ fontFamily: "Josefin Sans", fontWeight: 600 }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    margin: "0",
                    background: "none",
                    border: "2px solid #6D5C4D",
                  }}
                >
                  <FavoriteIcon
                    sx={{ width: "19px", height: "19px", color: "#6D5C4D" }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: "#6D5C4D" }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Stack
                    sx={{
                      maxHeight: "140px",
                      maxWidth: "210px",
                      // backgroundColor: "aqua",
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: "100%",
                        height: "100%",
                        // paddingRight: "40px",
                        borderRadius: "18px",
                        // borderTopRightRadius: "58px"
                      }}
                      component="img"
                      // height="194"
                      image={Foto4}
                      alt="Paella dish"
                    />
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#6D5C4D",
                      margin: "auto",
                      marginLeft: "5vw",
                    }}
                  >
                    2020
                  </Typography>
                </Stack>
                <Typography
                  sx={{ fontFamily: "Bonheur Royale", fontSize: "32px" }}
                >
                  Engagement
                </Typography>
                <Typography
                  sx={{ fontFamily: "Josefin Sans", fontWeight: 600 }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    margin: "0",
                    background: "none",
                    border: "2px solid #6D5C4D",
                  }}
                >
                  <FavoriteIcon
                    sx={{ width: "19px", height: "19px", color: "#6D5C4D" }}
                  />
                </TimelineDot>
                {/* <TimelineConnector sx={{ backgroundColor: "#6D5C4D" }} /> */}
              </TimelineSeparator>
              <TimelineContent>
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Stack
                    sx={{
                      maxHeight: "140px",
                      maxWidth: "210px",
                      // backgroundColor: "aqua",
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: "100%",
                        height: "100%",
                        // paddingRight: "40px",
                        borderRadius: "18px",
                        // borderTopRightRadius: "58px"
                      }}
                      component="img"
                      // height="194"
                      image={Foto5}
                      alt="Paella dish"
                    />
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "32px",
                      fontWeight: "bold",
                      color: "#6D5C4D",
                      margin: "auto",
                      marginLeft: "5vw",
                    }}
                  >
                    2023
                  </Typography>
                </Stack>
                <Typography
                  sx={{ fontFamily: "Bonheur Royale", fontSize: "32px" }}
                >
                  Wedding
                </Typography>
                <Typography
                  sx={{ fontFamily: "Josefin Sans", fontWeight: 600 }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </OnMobile>
      {/* laptop */}
      <OnDesktop>
        <Box
          sx={{
            backgroundImage: `url(${Bg3})`,
            paddingTop: "-15px",
            paddingBottom: "40px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Josefin Sans",
              fontSize: "34px",
              fontWeight: 600,
              textAlign: "center",
              color: "#6D5C4D",
              paddingY: "40px",
            }}
          >
            Our Love Story
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                mt={3}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Stack
                  sx={{
                    maxHeight: "300px",
                    width: "350px",
                    paddingRight: "40px",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "100%",
                      height: "100%",

                      borderRadius: "25px",
                    }}
                    component="img"
                    // height="194"
                    image={Foto5}
                    alt="Paella dish"
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    margin: "0",
                    background: "none",
                    border: "1px solid #6D5C4D",
                  }}
                >
                  <FavoriteIcon
                    sx={{ width: "19px", height: "19px", color: "#6D5C4D" }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: "#6D5C4D" }} />
              </TimelineSeparator>
              <TimelineContent mt={3}>
                <Stack sx={{ paddingLeft: "40px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "rgba(109, 92, 77, 0.7)",
                    }}
                  >
                    2015
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Bonheur Royale",
                      fontSize: "32px",
                      fontWeight: "400",
                      color: "#6D5C4D",
                    }}
                  >
                    First Date
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#6D5C4D",
                      maxWidth: "350px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                mt={3}
                sx={
                  {
                      display: "flex",
                      // justifyContent: "end",
                  }
                }
              >
                 <Stack
                  sx={{
                    maxHeight: "280px",
                    width: "355px",
                    marginLeft: "35px"
                    // paddingRight: "40px",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "25px",
                    }}
                    component="img"
                    // height="194"
                    image={Foto4}
                    alt="Paella dish"
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    margin: "0",
                    background: "none",
                    border: "1px solid #6D5C4D",
                  }}
                >
                  <FavoriteIcon
                    sx={{ width: "19px", height: "19px", color: "#6D5C4D" }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: "#6D5C4D" }} />
              </TimelineSeparator>
              <TimelineContent mt={3}>
                <Stack sx={{ paddingRight: "40px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "rgba(109, 92, 77, 0.7)",
                    }}
                  >
                    2020
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Bonheur Royale",
                      fontSize: "32px",
                      fontWeight: "400",
                      color: "#6D5C4D",
                    }}
                  >
                    Engagement
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#6D5C4D",
                      marginLeft: "220px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                mt={3}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Stack
                  sx={{
                    maxHeight: "300px",
                    width: "350px",
                    paddingRight: "40px",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "100%",
                      height: "100%",

                      borderRadius: "25px",
                    }}
                    component="img"
                    // height="194"
                    image={Foto3}
                    alt="Paella dish"
                  />
                </Stack>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    margin: "0",
                    background: "none",
                    border: "1px solid #6D5C4D",
                  }}
                >
                  <FavoriteIcon
                    sx={{ width: "19px", height: "19px", color: "#6D5C4D" }}
                  />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: "#6D5C4D" }} />
              </TimelineSeparator>
              <TimelineContent mt={3}>
                <Stack sx={{ paddingLeft: "40px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "rgba(109, 92, 77, 0.7)",
                    }}
                  >
                    2023
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Bonheur Royale",
                      fontSize: "32px",
                      fontWeight: "400",
                      color: "#6D5C4D",
                    }}
                  >
                    Wedding
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#6D5C4D",
                      maxWidth: "350px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Aenean commodo ligula
                    eget dolor.
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </OnDesktop>
    </div>
  );
};

export default Story;
