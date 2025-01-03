import React, { useState, useEffect } from "react";

export function CounterUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(`Updating Document title `);
    document.title = `Clicked:${count} times`;
  }, [count]);

  function incCounter() {
    setCount(count + 1);
  }

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button onClick={incCounter}>Clicked {count} times</button>
    </>
  );
}

export function MouseLocation() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mousePosition = (e) => {
    console.log("mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mousePosition);
  }, []);
  return (
    <>
      <h3>
        Mouse co-ordinates: X- {x}, Y={y}
      </h3>
    </>
  );
}

export function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}
