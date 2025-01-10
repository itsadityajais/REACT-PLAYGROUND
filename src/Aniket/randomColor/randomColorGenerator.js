import React, { useEffect, useState } from "react";
export function RandomColor() {
  const [color, setColor] = useState("");
  const [colorType, setColorType] = useState("hex");

  function generateRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    //hex color is of 6 digit
    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[generateRandom(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleRandomRgbColor() {
    const r = generateRandom(256);
    const g = generateRandom(256);
    const b = generateRandom(256);
    console.log(`rgb${r},${g},${b}`);
    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (colorType == "hex") handleRandomHexColor();
    return () => {
      handleRandomRgbColor();
    };
  }, [colorType]);

  return (
    <div
      style={{
        background: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button
        onClick={
          colorType == "hex" ? handleRandomHexColor : handleRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div>
        <h1>{colorType == "rgb" ? "RGB Color" : "HEX Color"}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
