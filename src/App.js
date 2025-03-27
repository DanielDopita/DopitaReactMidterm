import './App.css';
import React, { useState } from "react";
import Greeting from "./Greeting";
import UserInfo from "./UserInfo";
import TaskComponent from "./TaskComponent";
import Counter from "./Counter";
import TaskForm from "./TaskForm";

const App = () => {
  const initialTasks = [
    "Learn React",
    "Build a project",
    "Read docs",
    "Practice coding",
    "Write tests"
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const [randomTask, setRandomTask] = useState("");

  const getRandomTask = () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    setRandomTask(randomTask);
    return randomTask;
  };

  const handleAlert = () => {
    alert("Hello from the UserInfo component!");
  };

  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, newTask.name]);
    if (!randomTask) {
      setRandomTask(newTask.name);
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const newTasks = tasks.filter((_, index) => index !== indexToDelete);
      setTasks(newTasks);
      // Update random task if it was the deleted one
      if (randomTask === tasks[indexToDelete]) {
        setRandomTask(newTasks.length > 0 
          ? newTasks[Math.floor(Math.random() * newTasks.length)] 
          : "");
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <section className="component-section">
          <Greeting username="Alice" />
        </section>

        <section className="component-section">
          <UserInfo handleClick={handleAlert} />
        </section>

        <section className="component-section">
          <TaskComponent 
            task={randomTask || getRandomTask()} 
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
          />
        </section>

        <section className="component-section">
          <Counter />
        </section>

        <section className="component-section">
          <TaskForm onAddTask={handleAddTask} />
        </section>
      </header>
    </div>
  );
};

export default App;