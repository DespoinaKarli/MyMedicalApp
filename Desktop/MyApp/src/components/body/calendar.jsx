import React, { useState, useRef, useCallback, useMemo } from "react";
import "../../style/calendar.css";

// MONTH NAMES
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// NUMBER OF DAYS PER MONTH
const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(9); // 0 = Jan, 9 = October
  const [selectedYear] = useState(2025);
  const [showMonthModal, setShowMonthModal] = useState(false);

  const modalRef = useRef(null);

  // Handle clicking a day
  const handleDayClick = useCallback((dayObj) => {
    if (!dayObj.currentMonth) return; // prevent clicking shaded days
    setSelectedDay(dayObj.day);
  }, []);

  // Open/close month modal
  const toggleMonthModal = (e) => {
    e.stopPropagation();
    setShowMonthModal(!showMonthModal);
  };

  // Close modals when clicking outside
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedDay(null);
      setShowMonthModal(false);
    }
  };

  // Generate 5-row days grid (35 cells)
  const daysGrid = useMemo(() => {
    const totalDays = getDaysInMonth(selectedMonth, selectedYear);

    const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    // Previous month
    const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
    const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
    const prevMonthDays = getDaysInMonth(prevMonth, prevYear);

    const prevDays = Array.from({ length: adjustedFirstDay }, (_, i) => ({
      day: prevMonthDays - adjustedFirstDay + i + 1,
      currentMonth: false,
    }));

    const currentDays = Array.from({ length: totalDays }, (_, i) => ({
      day: i + 1,
      currentMonth: true,
    }));

    const totalGrid = prevDays.length + currentDays.length;
    const nextDays = Array.from({ length: 35 - totalGrid }, (_, i) => ({
      day: i + 1,
      currentMonth: false,
    }));

    return [...prevDays, ...currentDays, ...nextDays];
  }, [selectedMonth, selectedYear]);

  return (
    <div className="Calendar-Container" onClick={handleOutsideClick}>
      {/* TOP OF THE CALENDAR */}
      <div className="Calendar-Header">
        <div className="Header-Left">
          {MONTHS[selectedMonth]} {selectedYear}
        </div>

        <div className="Header-Right" style={{ position: "relative" }}>
          <button className="Arrow-Button">◀</button>
          <button className="Arrow-Button">▶</button>

          <div
            onClick={toggleMonthModal}
            className="Month-Select"
            style={{ cursor: "pointer" }}
          >
            Select month
          </div>

          {/* MONTH DROPDOWN UNDER INPUT */}
          {showMonthModal && (
            <div className="Month-Dropdown" ref={modalRef}>
              {MONTHS.map((m, i) => (
                <div
                  key={i}
                  className="Month-Dropdown-Item"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMonth(i);
                    setShowMonthModal(false);
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* WEEKDAYS */}
      <div className="Weekdays">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((w) => (
          <div key={w}>{w}</div>
        ))}
      </div>

      {/* CALENDAR GRID */}
      <div className="Days-Grid">
        {daysGrid.map((dayObj, index) => (
          <div
            key={index}
            className="Days-Box"
            style={{
              background: dayObj.currentMonth ? "#fff" : "#f8f8f8",
              cursor: dayObj.currentMonth ? "pointer" : "not-allowed",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleDayClick(dayObj);
            }}
          >
            <span className="Days-Number">{dayObj.day}</span>
            {dayObj.currentMonth && <span className="Tag">OnDuty</span>}
          </div>
        ))}
      </div>

      {/* DAY MODAL */}
      {selectedDay !== null && (
        <div className="Overlay">
          <div className="Modal-Box" ref={modalRef}>
            <h2>
              {selectedDay} {MONTHS[selectedMonth]} {selectedYear}
            </h2>
            <p>This is your schedule for day {selectedDay}.</p>
            <button className="Close-Btn" onClick={() => setSelectedDay(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
