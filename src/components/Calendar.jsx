import React, { useState } from 'react';

const Calendar = ({ selectedDate, onDateChange }) => {
  const [date, setDate] = useState(selectedDate);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div>
      <h2>Choose Repair Date</h2>
      <input type="date" value={date} onChange={(e) => handleDateChange(e.target.value)} />
    </div>
  );
};

export default Calendar;
