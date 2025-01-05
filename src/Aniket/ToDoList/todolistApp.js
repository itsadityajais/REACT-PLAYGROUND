import React, { useState } from "react";

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

  return (
    <div>
      <h1> To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task.."
          onChange={handleInputChange}
          value={newTaskItem}
        ></input>
        <button onClick={handleClick}>Add</button>
        <ol>
          {tasks.map((item, index) => (
            <li>
              {item}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
