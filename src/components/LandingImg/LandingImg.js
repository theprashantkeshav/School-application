import React from "react";
import "./LandingImg.css";
import Button from "../Button/Button";

const LandingImg = () => {
  return (
    <div className="landing">
      <h1>MAGNUS</h1>
      <p>Be a part of Our History</p>
      {/* <div className="color-overlay"></div> */}
      <Button content="Take A Tour" link="#" />
    </div>
  );
};

export default LandingImg;
