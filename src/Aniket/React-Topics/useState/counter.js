import React, { useState } from "react";
import { sculptureList } from "./data";

export function Counter() {
  const [index, setIndex] = useState(0);
  const [showMore, setshowMore] = useState(false);
  const [text, setText] = useState("");
  const [liked, setLiked] = useState(true);
  const [age, setAge] = useState(20);

  let sculpture = sculptureList[index];

  function nextClick() {
    setIndex(index + 1);

    setshowMore(false);
  }
  function previousClick() {
    setIndex(index - 1);
    setshowMore(false);
  }

  function showDetails() {
    setshowMore(!showMore);
  }

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleTick(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <button onClick={previousClick} disabled={index == 0}>
        Previous
      </button>
      <button onClick={nextClick} disabled={index == sculptureList.length - 1}>
        Next
      </button>
      <h1>
        {sculpture.name} by {sculpture.artist}
      </h1>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button
        style={{ display: "block", marginBottom: 10 }}
        onClick={showDetails}
      >
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt}></img>
      <input
        style={{ display: "block", marginTop: 30 }}
        value={text}
        onChange={handleChange}
        placeholder="Enter your name:"
      />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello, {text} you age {age} years old. 😊
      </p>

      <button onClick={() => setText("")}>Reset</button>

      <label>
        <input type="checkbox" checked={liked} onChange={handleTick} />I liked
        this
      </label>
      <p>You {liked ? "liked" : "did not liked"} this.</p>
    </>
  );
}
