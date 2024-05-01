import React, { useState } from 'react';
import './Sheduler.css';
import { Link } from 'react-router-dom'; // Import Link from React Router
import CalendarComponent from './calender';


const TaskSchedulerPage = ({ onAddTask }) => {
  const [tasks, setTasks] = useState([]); // Define tasks state and setTasks function

  const handleAddTasks = () => {
    // Add tasks to the parent component
    onAddTask(tasks);
    // Clear tasks
    setTasks([]);
  };

  return (
    <div className="task-scheduler-container">
      <h2>Task Scheduler</h2>
      <Link to="/" className="close-button">Close</Link> {/* Navigate to land screen using Link */}
      <CalendarComponent />
      {/* Rest of your TaskSchedulerPage component */}
    </div>
  );
};

export default TaskSchedulerPage;
