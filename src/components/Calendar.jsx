import React, { useState } from 'react';



const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <tr>
        {daysOfWeek.map((day, index) => (
          <td key={index} className="day-of-week">
            {day}
          </td>
        ))}
      </tr>
    );
  };

  const renderDaysInMonth = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    const daysArray = [];
    let dayCount = 1;

    // Fill the first row with empty cells until the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<td key={`empty-${i}`} className="day empty"></td>);
    }

    // Fill the rest of the row with days
    for (let i = firstDay; i < 7; i++) {
      daysArray.push(<td key={`day-${dayCount}`} className="day">{dayCount}</td>);
      dayCount++;
    }

    // Add remaining rows
    const rows = [<tr key="row-0">{daysArray}</tr>];
    while (dayCount <= days) {
      const week = [];
      for (let i = 0; i < 7 && dayCount <= days; i++) {
        week.push(<td key={`day-${dayCount}`} className="day">{dayCount}</td>);
        dayCount++;
      }
      rows.push(<tr key={`row-${rows.length}`}>{week}</tr>);
    }

    return rows;
  };

  const renderMonthAndYear = () => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  };

  return (
    <div className="calendar1">
      <div className="header1">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <span>{renderMonthAndYear()}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <table className="calendar-table">
        <thead>
          {renderDaysOfWeek()}
        </thead>
        <tbody>
          {renderDaysInMonth()}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;