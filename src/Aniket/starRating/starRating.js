import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export function StarRating() {
  const [star, setStar] = useState(0);

  function handleClick(index) {
    setStar(index);
  }

  function generateStar() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          size="60"
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleClick(i)}
          onMouseLeave={() => handleClick(i)}
          style={{
            color: star >= i ? "red" : "black",
            cursor: "pointer",
            transition: "color 0.2s ease",
          }}
        />
      );
    }
    return stars;
  }
  return (
    <div>
      <h1>Give rating to my coding skills:</h1>
      {generateStar()}
    </div>
  );
}
