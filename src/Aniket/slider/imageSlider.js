import { images } from "../constants/BE-images";
import React, { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function previousImage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  function goToImage(index) {
    setCurrentIndex(index);
  }

  const indicators = [];
  for (let i = 0; i < images.length; i++) {
    indicators.push(
      <div
        onClick={() => goToImage(i)}
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: currentIndex == i ? "red" : "gray",
        }}
      ></div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Image Slider</h1>
      <div
        style={{ position: "relative", display: "inline-block", width: "50%" }}
      >
        <img
          style={{ width: "100%" }}
          src={images[currentIndex]}
          alt="slider"
        />

        {/* Previous Button */}
        <IoIosArrowDropleftCircle
          size={40}
          onClick={previousImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            color: currentIndex == 0 ? "gray" : "red",
            padding: "10px",
            cursor: "pointer",
          }}
        />

        {/* Next Button */}
        <IoIosArrowDroprightCircle
          size={40}
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "50%",
            left: "92%",
            transform: "translateY(-50%)",
            color: currentIndex == images.length - 1 ? "gray" : "red",
            padding: "10px",
            cursor: "pointer",
          }}
        />

        {/* Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "5px",
          }}
        >
          {indicators}
        </div>
      </div>
    </div>
  );
}
