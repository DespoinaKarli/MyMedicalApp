import React from "react";
import calendar from "../assets/calendar picture.png";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="greetingSection">
        <h1 className="greetingDoctor">Hello,Doctor!</h1>
      </div>
      <div className="reminder-section">
        <p>Do not forget to submit you desired schedule.</p>
        <img className="calendarIcon" src={calendar} alt="calendar icon" />
      </div>
    </div>
  );
};

export default Header;
