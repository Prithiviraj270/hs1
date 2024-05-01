// CalendarComponent.js
import React from 'react';
import Calendar from 'react-calendar'; // Import the calendar library
import 'react-calendar/dist/Calendar.css';
import TaskScheduler from './Sheduler';


const CalendarComponent = ({ handleClose }) => {
  // State to store the selected date
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
      <TaskScheduler date={selectedDate} handleClose={handleClose} />
    </div>
  );
};

export default CalendarComponent;
