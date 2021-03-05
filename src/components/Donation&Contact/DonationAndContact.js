import React from "react";
import Donation from "./Donation/Donation";
import ContactUs from "./ContactUs/ContactUs";
import "./DonationAndContact.css";

const DonationAndContact = () => {
  return (
    <div className="d-n-c">
      <Donation />
      <ContactUs />
    </div>
  );
};

export default DonationAndContact;
