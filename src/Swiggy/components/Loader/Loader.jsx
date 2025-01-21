import React, { useState, useEffect } from "react";

function Loader() {
  const messages = [
    "Just a second, almost there 🚀...",
    "Loading awesomeness for you ✨...",
    "Hang tight, good things take time ⏳...",
    "Brewing the perfect code ☕...",
    "Coding magic in progress 🪄...",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setCurrentMessage(messages[index]);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        fontFamily: "Arial, sans-serif",
        color: "black",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #ffa500",
          borderTop: "5px solid transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        {currentMessage}
      </p>
    </div>
  );
}

// Add keyframes for the spin animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(style);

export default Loader;
