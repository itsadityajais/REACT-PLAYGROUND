import React, { useState } from "react";

export function CounterInsideDiv() {
  const [showsecondCounter, setshowsecondCounter] = useState(true);
  let result = <Counter />;

  return (
    <div>
      {result}
      {showsecondCounter ? result : null}
      <label>
        <input
          type="checkbox"
          onChange={() => setshowsecondCounter(!showsecondCounter)}
        ></input>
        Render the second counter
      </label>
    </div>
  );
}
function Counter() {
  const [score, setScore] = useState(0);

  function IncreaseCounter() {
    setScore(score + 1);
  }
  return (
    <>
      <h1>{score}</h1>
      <button onClick={IncreaseCounter}> ADD</button>
    </>
  );
}
