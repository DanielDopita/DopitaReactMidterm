import React, { useState, useEffect } from "react";

const TaskComponent = ({ task, tasks, onDeleteTask }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [displayedTasks, setDisplayedTasks] = useState([...tasks]);

  // Update displayedTasks when tasks prop changes
  useEffect(() => {
    filterAndSortTasks(searchTerm, isSorted);
  }, [tasks]); // Add tasks to dependency array

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterAndSortTasks(term, isSorted);
  };

  const handleSort = () => {
    const newSortState = !isSorted;
    setIsSorted(newSortState);
    filterAndSortTasks(searchTerm, newSortState);
  };

  const filterAndSortTasks = (term, shouldSort) => {
    let result = [...tasks]; // Always start with fresh tasks from props
    
    // Filter first
    if (term) {
      result = result.filter(t => t.toLowerCase().includes(term));
    }
    
    // Then sort if needed (works with any number of tasks)
    if (shouldSort) {
      result = [...result].sort(); // Create new array before sorting
    }
    
    setDisplayedTasks(result);
  };

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
        <button 
          onClick={handleSort} 
          className="sort-button"
          disabled={displayedTasks.length <= 1} // Disable if 1 or fewer tasks
        >
          {isSorted ? "Unsort" : "Sort A-Z"}
        </button>
      </div>

      <ul className="task-list">
        {displayedTasks.map((task, index) => (
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