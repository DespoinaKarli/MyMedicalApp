import React from "react";
import lock from "../../assets/lock.png";
function Secondpage() {
  return (
    <div>
      <div className="greeting-container">
        <div className="header-container">
          <h1 className="greeting-text">Your Schedule, Doctor!</h1>
          <div className="read-only">
            <p className="read-only-text">Read-only</p>
            <img src={lock} alt="lockImg" className="lock-icon" />
          </div>
        </div>
        <div>
          <select name="" id="">
            <option value="My Schedule">My Schedule</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
