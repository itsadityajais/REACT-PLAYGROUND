import React, { useState } from "react";
export function CounterInsideDiv() {
  const [showsecondCounter, setshowsecondCounter] = useState(true);
  const [isFancy, setisFancy] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      {isFancy ? <Counter isFancy_={true} /> : <Counter isFancy_={false} />}
      <label>
        <input type="checkbox" onChange={() => setisFancy(!isFancy)}></input>
        Make it Fancy
      </label>

      {showsecondCounter ? <Counter /> : null}
      <label>
        <input
          type="checkbox"
          onChange={() => setshowsecondCounter(!showsecondCounter)}
        ></input>
        Render the second counter
      </label>

      {isPaused ? <p>See you later!</p> : <Counter />}
      <label>
        <input type="checkbox" onChange={() => setIsPaused(!isPaused)}></input>
        Take a break
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
