import React from "react";
import "./Donation.css";
const Donation = () => {
  return (
    <div className="donation">
      <div className="d-img">
        <img src="./images/donate3.jpg" alt="Child Pic" />
      </div>
      <div className="content3">
        <p className="t">Donation For Orphan Kids</p>
        <p className="quote">
          It's not how much we give but how much love we put in giving
        </p>
        <p className="name">-Mother Teresa</p>
        <button className="btn4">
          <i className="fas fa-heart"></i>Become a Donar
        </button>
      </div>
    </div>
  );
};

export default Donation;
