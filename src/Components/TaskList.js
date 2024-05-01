import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { db, collection, getDocs, updateDoc, doc, orderBy, query } from './FirebaseConfig'; // Updated imports

import './TaskList.css'; // Import CSS file for TaskList component

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasksCollectionRef = collection(db, 'tasks');
        const q = query(tasksCollectionRef, orderBy('taskDate')); // Ordering tasks by date
        const querySnapshot = await getDocs(q);
        const taskData = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          taskData.push({
            id: doc.id,
            date: data.taskDate ? formatDate(data.taskDate.toDate()) : 'N/A',
            task: data.task || 'N/A',
            status: data.status || 'Pending'
          });
        });
        setTasks(taskData);
      } catch (error) {
        console.error('Error fetching tasks: ', error);
      }
    };

    fetchTasks();
  }, []);

  const handleCompleteTask = async (taskId) => {
    try {
      const taskRef = doc(db, 'tasks', taskId);
      await updateDoc(taskRef, { status: 'Completed' });
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error completing task: ', error);
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="task-list-container">
      <h2 className="task-list-heading">Task List</h2>
      <Table striped bordered hover className="task-table">
        <thead>
          <tr>
            <th>Si. No</th>
            <th>Date</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.date}</td>
              <td>{task.task}</td>
              <td>{task.status}</td>
              <td>
                {task.status === 'Pending' && (
                  <Button variant="success" onClick={() => handleCompleteTask(task.id)}>Completed</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
