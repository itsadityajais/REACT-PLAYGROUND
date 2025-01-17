import React, { useState } from "react";
export function ScoreBoard() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {/* {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />} // If we dont change the key...the state will be preserved and show in Sarah score also. */}

      {isPlayerA ? (
        <Counter key="1" person="Taylor" />
      ) : (
        <Counter key="2" person="Sarah" />
      )}

      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);

  function UpdateScore() {
    setScore(score + 1);
  }
  return (
    <div>
      <h3>
        {person}'s score: {score}
      </h3>
      <button onClick={UpdateScore}>Add Score</button>
    </div>
  );
}
