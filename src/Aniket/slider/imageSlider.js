import { images } from "../constants/BE-images";
import React, { useState } from "react";
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
    <div>
      <h1>Image Slider</h1>
      <div>{indicators}</div>
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      <br />
      <img style={{ width: "50%" }} src={images[currentIndex]} />
      <div>
        <div
          onClick={() => goToImage(0)}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: currentIndex == 0 ? "red" : "gray",
          }}
        ></div>
        <div
          onClick={() => goToImage(1)}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "gray",
          }}
        ></div>
        <div
          onClick={() => goToImage(2)}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "gray",
          }}
        ></div>
        <div
          onClick={() => goToImage(3)}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "gray",
          }}
        ></div>
        <div
          onClick={() => goToImage(4)}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "gray",
          }}
        ></div>
      </div>
    </div>
  );
}
