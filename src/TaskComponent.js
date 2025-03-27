import React, { useState } from "react";

const TaskComponent = ({ task, tasks, onDeleteTask }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    const sortedTasks = [...tasks].sort();
    setIsSorted(!isSorted);
  };

  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="task-component">
      <h3>Random Task: {task}</h3>
      
      <div className="task-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
          className="task-search"
        />
        <button onClick={handleSort} className="sort-button">
          {isSorted ? "Reverse Sort" : "Sort A-Z"}
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button 
              onClick={() => onDeleteTask(index)}
              className="delete-button"
              aria-label={`Delete task: ${task}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;