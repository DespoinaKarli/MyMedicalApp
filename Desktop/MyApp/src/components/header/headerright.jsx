import React from "react";
import Thunder from "../../assets/thunder.png";
import "../../style/headerright.css";
const Headerright = () => {
  return (
    <div>
      <div className="Container">
        <div className="UpperPart">
          <div className="SpecialNote">
            <p>Add your special note here</p>
            <img src={Thunder} alt="" className="thunderimg" />
          </div>
          <div className="SomethingImportant">
            <p>Tell us something important</p>
          </div>
        </div>
        <div className="WriteText">
          <input type="text" placeholder="Type here..." />
        </div>
      </div>
    </div>
  );
};

export default Headerright;
