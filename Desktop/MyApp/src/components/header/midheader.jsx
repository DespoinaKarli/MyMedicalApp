import React from "react";
import "../../style/midheader.css";
import SaveDraft from "../../assets/save-draft.png";
import CheckMark from "../../assets/check-mark.png";

const Midheader = () => {
  return (
    <div className="MidHeaderContainer">
      <div className="SaveDraftContainer">
        {/* <button className="SaveDraftButton">Save Draft</button> */}
        Save Draft
        <img src={SaveDraft} alt="" className="SaveDraftImg MidHeaderImg" />
      </div>
      <div className="ConfirmSubmitContainer">
        {/* <button className="ConfirmSubmitButton">Confirm & Submit</button> */}
        Confirm & Submit
        <img src={CheckMark} alt="" className="CheckMarkImg MidHeaderImg" />
      </div>
      <div className="StatusContainer">
        <button className="StatusButton">Status:Draft</button>
      </div>
    </div>
  );
};

export default Midheader;
