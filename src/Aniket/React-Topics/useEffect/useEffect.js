import React, { useState, useEffect } from "react";

export function CounterUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked:${count} times`;
  }, [count]);

  function incCounter() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={incCounter}>Clicked {count} times</button>
    </>
  );
}
// export function MyComponent() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     console.log("EVENT LISTENER ADDED");

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       console.log("EVENT LISTENER REMOVED");
//     };
//   }, []);

//   useEffect(() => {
//     document.title = `Size: ${width} x ${height}`;
//   }, [width, height]);

//   function handleResize() {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   }

//   return (
//     <>
//       <p>Window Width: {width}px</p>
//       <p>Window Height: {height}px</p>
//     </>
//   );
// }
