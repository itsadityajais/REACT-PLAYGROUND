import React, { useState } from "react";
import "./todolistApp.css";

export function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTaskItem, setNewTaskItem] = useState("");

  function handleInputChange(e) {
    setNewTaskItem(e.target.value);
  }

  function handleClick() {
    addTask();
    clearTaskItems();
  }

  function addTask() {
    let temp = [];
    for (let i = 0; i < tasks.length; i++) {
      temp.push(tasks[i]);
    }
    temp.push(newTaskItem);
    setTasks(temp);
  }
  function clearTaskItems() {
    setNewTaskItem("");
  }

  function deleteTask(index) {
    let temp = [];
    for (let i = 0; i < tasks.length; i++) {
      temp.push(tasks[i]);
    }
    temp.splice(index, 1);
    setTasks(temp);
  }

  function moveTaskUp(index) {
    let temp = [];
    for (let i = 0; i < tasks.length; i++) {
      temp.push(tasks[i]);
    }
    if (index === 0) return;
    let tempVar = temp[index];
    temp[index] = temp[index - 1];
    temp[index - 1] = tempVar;
    setTasks(temp);
  }
  function moveTaskDown(index) {
    let temp = [];
    for (let i = 0; i < tasks.length; i++) {
      temp.push(tasks[i]);
    }
    if (index === tasks.length - 1) return;
    let tempVar = temp[index];
    temp[index] = temp[index + 1];
    temp[index + 1] = tempVar;
    setTasks(temp);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="to-do-list">
      <h1> To-Do-List</h1>
      <div>
        <div className="input-div">
          <input
            type="text"
            placeholder="Enter a Task.."
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            value={newTaskItem}
          ></input>
          <button className="add-button" onClick={handleClick}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((item, index) => (
            <li>
              {item}
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
