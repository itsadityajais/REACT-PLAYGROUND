import React, { useState } from "react";
import data from "./data";

export function Accordian() {
  const [selected, setSelected] = useState();
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState();

  function handleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  function handleMultiSelection(id) {
    let temp = [];
  }

  function renderAccordian() {
    let result = [];
    result = data.map((item) => {
      return (
        <div
          onClick={
            enableMultiSelection
              ? () => handleMultiSelection(item.id)
              : () => handleSelection(item.id)
          }
        >
          {item.question}
          <span> + </span>
          {selected == item.id ? <div>{item.answer}</div> : null}
        </div>
      );
    });
    return result;
  }

  return (
    <div>
      <h1>Accordian</h1>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Multiple Selection
      </button>
      {renderAccordian()}
    </div>
  );
}
