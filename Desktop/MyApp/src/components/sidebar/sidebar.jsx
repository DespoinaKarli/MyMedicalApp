import React from "react";
import sun from "../../assets/sun.png";
import "../../../src/style/sidebar.css";
import Midsidebar from "./midsidebar";
import Midheader from "../header/midheader";
import Headerright from "../header/headerright";
import Sidebarbottom from "./sidebarbottom";
import Calendar from "../body/calendar";
import Secondpage from "../second page/secondpage";

const sidebar = () => {
  return (
    <div className="SidebarContainer">
      <div className="MidHeaderSidebar">
        {/* timer box */}
        <div className="SubContainer">
          <div className="countdownContainer">
            <div className="SunIcon">
              <img className="SunImage" src={sun} alt="sunIcon" />
            </div>
            <div className="countdown">
              <p>8 days</p>
              <p>2 hours</p>
              <p>9 minutes</p>
            </div>
          </div>
          <div className="countdownText">
            <p>Left to submit your schedule</p>
          </div>
        </div>
        {/* Buttons for sumbit */}
        <div className="MidHeaderButtons">
          <Midheader />
        </div>
        {/* Add Special Note */}
        <div>
          <Headerright />
        </div>
      </div>
      <div className="Bellow-Header">
        <div className="Middle-Bottom-Sidebar">
          {/* View Schedule box */}
          <div className="ScheduleBox">
            <p> View current schedule</p>
            <button className="ScheduleButton" goNext={Secondpage}>
              View Schedule
            </button>
          </div>
          {/* Current summary */}
          <div>
            <Midsidebar />
          </div>
          {/* Set Monthly Targets */}
          <div>
            <Sidebarbottom />
          </div>
        </div>
        {/* Calendar */}
        <div className="Calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default sidebar;
