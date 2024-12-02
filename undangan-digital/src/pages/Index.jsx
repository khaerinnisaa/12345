import Getting from "../components/gettingMeried/Getting";
import Hero from "../components/hero/Hero";
import { Box } from "@mui/material";
import Story from "../components/story/Story";
import TheDate from "./TheDate";
import Akad from "../components/akad & resepsi/Akad";
import Gallery from "../components/gallery/Gallery";
import Navbar from "../components/navbar/Navbar";
import mysound from "../assets/lagu.mp3"
import useSound from "use-sound";
import { useRef } from "react";
import { useState } from "react";

const Index = () => {
  const [play, setPlay] = useState(true)
  const [playSound, {stop}] = useSound(mysound);

  const onClick = () => {
    if(play){
      playSound()
    } else{
      stop()
    }

    setPlay(!play)
  }

  const goAkad = useRef(null);
  const toResepsi = useRef(null);
  const goMaps = useRef(null);

  function akad(ref) {
    goAkad.current.scrollIntoView({
      behavior: "smooth",
      // block: "nearest",
      inline: "center",
      // top: ref.offsetTop,
      // bottom: ref.offsetBottom,
    });
  }

  function pergi(ref) {
    toResepsi.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      // inline: "center",
      // top: ref.offsetTop,
      // bottom: ref.offsetBottom,
    });
  }

  function maps(ref) {
    goMaps.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      // inline: "center",
      // top: ref.offsetTop,
      // bottom: ref.offsetBottom,
    });
  }

  return (
    <Box>
      <Navbar onClick={onClick} akad={akad} resepsi={pergi} maps={maps}/>
      <Hero />
      <Getting />
      <Story />
      <TheDate  />
      <Akad  akad={goAkad} maps={goMaps} resepsi={toResepsi}/>
      <Gallery />
      {/* <Tes /> */}
    </Box>
  );
};

export default Index;
