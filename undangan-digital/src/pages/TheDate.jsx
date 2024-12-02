import CardDate from "../components/date/CardDate";
import React, { useState, useEffect } from "react";
// import React from 'react';
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import Hero from "../components/hero/Hero";
import { Box } from "@mui/material";
import Getting from "../components/gettingMeried/Getting";
import Story from "../components/story/Story";
import Selesai from "../components/date/Selesai";

const TheDate = (props) => {
  const [countdown, setCountdown] = useState({});

  const bulans = [
     "januari"  ,
     "february" ,
     "maret",
     "april" ,
     "mei" ,
      "juni" ,
     "juli" ,
     "agustus" ,
     "september" ,
     "oktober",
     "november",
     "desember",
    ];
  // console.log(bulans)
  const [date, setDate] = useState({
    tanggal: "13",
    bulan: "08",
    tahun: "2023",
    jam: "01:00:00",
  
  });
  // console.log(date.bulans)
  

  const targetDate = new Date(
    `${date.tahun}-${date.bulan}-${date.tanggal}T${date.jam}`
  ).getTime();
  // const targetDate = new Date("2023-06-12T00:12:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      // setDate()
      setDate(date);
      // setDate(targetDate)

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        // const hours = Math.floor(distance / (100 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <Selesai jadwal={` ${date.tanggal} ${bulans[parseInt(date.bulan)-1]} ${date.tahun} `} />
      );
    } else {
      // Render a countdown
      return (
        <CardDate
          jadwal={` ${date.tanggal} ${bulans[parseInt(date.bulan)-1]} ${date.tahun} `}
          hari={countdown.days}
          jam={countdown.hours}
          menit={countdown.minutes}
          detik={countdown.seconds}
        />
      );
    }
  };
  // ReactDOM.render(
  //   <Box>
  //     <Hero />
  //     <Getting />
  //     <Story />
  //     <Countdown date={targetDate} renderer={renderer} />
  //   </Box>,
  //   document.getElementById("root")
  // );
  return (
    <Countdown  date={targetDate} renderer={renderer} />
    // document.getElementById("root")
  )
};

export default TheDate;
