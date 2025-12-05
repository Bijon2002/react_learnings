// src/components/Todo.jsx
import { useState } from "react";
import "./Todo.css"; // we’ll create styles next

export default function Todo() {
    console.log("Todo component loaded");

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  // Remove task
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-card">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask} className="neon-btn">Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task, i) => (
          <li key={i} className="todo-item">
            {task} 
            <button onClick={() => removeTask(i)} className="remove-btn">×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
