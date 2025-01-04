import React, { useState } from "react";
export function CounterInsideDiv() {
  const [showsecondCounter, setshowsecondCounter] = useState(true);
  const [isFancy, setisFancy] = useState(false);
  // let result = <Counter />;

  return (
    <div>
      <Counter />
      {showsecondCounter ? <Counter isFancy_={isFancy} /> : null}
      <label>
        <input
          type="checkbox"
          onChange={() => setshowsecondCounter(!showsecondCounter)}
        ></input>
        Render the second counter
      </label>
      <label>
        <input type="checkbox" onChange={() => setisFancy(!isFancy)}></input>
        Make it Fancy
      </label>
    </div>
  );
}

function Counter({ isFancy_ }) {
  const [score, setScore] = useState(0);

  function IncreaseCounter() {
    setScore(score + 1);
  }
  return (
    <div style={{ backgroundColor: isFancy_ ? "red" : null }}>
      <h1>{score}</h1>
      <button onClick={IncreaseCounter}> ADD</button>
    </div>
  );
}
