import React from "react";
import "../../style/midsidebar.css";

const Midsidebar = () => {
  return (
    <div className="MidsidebarContainer">
      <div className="MidTop">
        <p className="MidTopSummary">Your current summary</p>
        <p className="MidTopDaysSelected">
          Preferred days selected <span>5</span>
        </p>
      </div>
      <div className="MidBottom">
        <p className="MidBottomReminder">Heads up</p>
        <p className="MidBottomMinimumDuty">
          You haven't set your minimum duty count yet.
        </p>
      </div>
    </div>
  );
};

export default Midsidebar;
