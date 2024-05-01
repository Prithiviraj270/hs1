import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import './TaskManager.css';
import { db, collection, addDoc, Timestamp } from './FirebaseConfig';

export default function TaskManager() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [newTaskDescription, setNewTaskDescription] = React.useState('');
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setNewTaskDescription('');
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (newTaskDescription.trim() !== '') {
      try {
        const tasksCollectionRef = collection(db, 'tasks');
        const taskDate = selectedDate ? Timestamp.fromDate(selectedDate) : null;
        await addDoc(tasksCollectionRef, {
          createdAt: Timestamp.now(),
          task: newTaskDescription,
          taskDate: taskDate
        });
        alert(`Task added successfully!`);
        setSelectedDate(null);
        setNewTaskDescription('');
      } catch (error) {
        console.error('Error adding task: ', error);
        alert('An error occurred while adding the task.');
      }
    } else {
      alert('Please enter a task description.');
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="task-manager-container">
      <h2>Task Manager</h2>
      <div className="date-picker-container">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select a date"
        />
      </div>
      {selectedDate && (
        <form onSubmit={handleAddTask}>
          <div className="task-input-container">
            <input
              type="text"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
              placeholder="Enter task description"
            />
            <button type="submit">Add Task</button>
          </div>
        </form>
      )}
      <button className="close-button" onClick={handleClose}>Close</button>
    </div>
  );
}
