import React from "react";
import "../../style/sidebarbottom.css";

function Sidebarbottom() {
  return (
    <div className="SidebarbottonContainer">
      {/* Upper Part Text */}
      <div className="UpperPart">
        <p className="MonthlyTargetsText">Set monthly targets </p>
        <p className="KeepItSimple">
          Keep it simple: Minimum and Maximum for Weekdays and Weekends.
        </p>
      </div>
      {/* OnDuty Boxes */}
      <div className="OnDuty">
        <div className="OnDutyText">onDuty</div>
        <div>
          <div className="WeekdaysBoxOnDuty">
            <div className="WeekdaysTextOnDuty">
              <p>WeekDays</p>
            </div>
            <div className="MinimumOnDuty">
              <p>Minimum</p>
              <input type="text" className="MinimumOnDutyInput" />
            </div>
            <div className="MaximumOnDuty">
              <p>Maximum</p>
              <input type="text" className="MaximumOnDutyInput" />
            </div>
          </div>

          <div>
            <div className="WeekendsBoxOnDuty">
              <div className="WeekendsTextOnDuty">
                <p>Weekends</p>
              </div>
              <div className="MinimumOnDuty">
                <p>Minimum</p>
                <input type="text" className="MinimumOnDutyInput" />
              </div>
              <div className="MaximumOnDuty">
                <p>Maximum</p>
                <input type="text" className="MaximumOnDutyInput" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OnCall Boxes */}
      <div className="OnCall">
        <div className="OnCallText"> onCall </div>
        <div>
          <div className="WeekdaysBoxOnCall">
            <div className="WeekdaysTextOnCall">
              <p>WeekDays</p>
            </div>
            <div className="MinimumOnCall">
              <p>Minimum</p>
              <input type="text" className="MinimumOnCallInput" />
            </div>
            <div className="MaximumOnCall">
              <p>Maximum</p>
              <input type="text" className="MaximumOnCallInput" />
            </div>
          </div>
        </div>
        <div>
          <div className="WeekendsBoxOnCall">
            <div className="WeekendsTextOnCall">
              <p>Weekends</p>
            </div>
            <div className="MinimumOnCall">
              <p>Minimum</p>
              <input type="text" className="MinimumOnCallInput" />
            </div>
            <div className="MaximumOnCall">
              <p>Maximum</p>
              <input type="text" className="MaximumOnCallInput" />
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM PART TEXT */}
      <div className="BottomPart">
        <button className="BottomPartButtom">View Schedule</button>
      </div>
    </div>
  );
}

export default Sidebarbottom;
