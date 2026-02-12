import { useState } from "react";

export default function TaskInput({ onAddTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    onAddTask(input);
    setInput("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
