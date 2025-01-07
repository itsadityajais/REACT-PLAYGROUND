import { useEffect, useState } from "react";

export function UseEffectLogic() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  //Variation: 1  ->Runs on Every Render
  // useEffect(() => {
  //   alert("I will run on each Render");
  // });

  //Variation: 2  ->Runs only on 1st Render
  // useEffect(() => {
  //   alert("I will run on only 1st Render");
  // }, []);

  //Variation: 3  ->Runs every time count is updated
  // useEffect(() => {
  //   alert("I will run everytime count is updated");
  // }, [count]);

  //Variation: 4  ->Multiple Dependencies
  // useEffect(() => {
  //   alert("I will run everytime when count/total is updated");
  // }, [count, total]);

  //Variation: 5  ->Lets add cleanup function
  useEffect(() => {
    alert("Count is updated");
    return () => {
      alert("Count is unmounted from UI");
    };
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClickTotal() {
    setTotal(total + 1);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={handleClick}>Update Count!</button>
      <br />
      Count is:{count}
      <br />
      <button onClick={handleClickTotal}>Update Total!</button>
      <br />
      Total is:{total}
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export function CounterUseEffect() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");
//   useEffect(() => {
//     console.log(`Updating Document title `);
//     document.title = `Clicked:${count} times`;
//   }, [count]);

//   function incCounter() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <input type="text" onChange={(e) => setName(e.target.value)}></input>
//       <button onClick={incCounter}>Clicked {count} times</button>
//     </>
//   );
// }

// export function MouseLocation() {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [display, setDisplay] = useState(true);
//   const mousePosition = (e) => {
//     console.log("mouse Event");
//     setX(e.clientX);
//     setY(e.clientY);
//   };

//   useEffect(() => {
//     console.log("Use Effect called");
//     window.addEventListener("mousemove", mousePosition);
//   }, []);

//   return (
//     <>
//       <button onClick={() => setDisplay(!display)}>Toggle Display</button>
//       {display && (
//         <h3>
//           Mouse co-ordinates: X- {x}, Y={y}
//         </h3>
//       )}
//     </>
//   );
// }

// export function WindowSize() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
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
