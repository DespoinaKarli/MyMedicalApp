import React from "react";
import "../../style/calendar.css";

function Calendar() {
  //   const [selectedDay, setSelectedDay] = useState(null);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  return (
    <div className="Calendar-Container">
      {/* TOP OF THE CALENDAR */}
      <div className="Calendar-Header">
        <div className="Header-Left">October 2025</div>
        <div className="Header-Right">
          <button className="Arrow-Button">◀</button>
          <button className="Arrow-Button">▶</button>
          <select name="" id="" className="Month-Select">
            <option value="">Select month</option>
          </select>
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
        {days.map((day) => (
          <div
            className="Days-Box"
            key={day}
            // onClick={() => setSelectedDay(day)}
          >
            <span className="Days-Number"> {day} </span>
            <span className="Tag"> OnDuty </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
