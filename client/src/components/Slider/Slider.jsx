import React, { useEffect, useState } from "react";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./Slider.scss";
import useFetch from "../../hooks/useFetch";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/img/Slider_1.jpg",
    "/img/Slider_2.jpg",
    "/img/Slider_3.jpg"
];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className='slider'>
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
