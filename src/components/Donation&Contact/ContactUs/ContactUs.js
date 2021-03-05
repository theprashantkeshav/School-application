import React from "react";
import "./ContactUs.css";
import Input from "./Input";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="titles">
        <h3>Contact Us</h3>
        <p>We will reach Out to you soon</p>
      </div>
      <Input type="text" placeholder="Full Name" name="Fname" />
      <Input type="email" placeholder="Email Address" name="Email" />
      <Input type="tel" placeholder="Mobile Number" name="Number" />
      <textarea placeholder="Message" rows="3" cols="30" />
      <div>
        <button className="btn3" href="#">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
