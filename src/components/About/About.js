import React from "react";
import Button from "../Button/Button";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className=" about">
        <div className="title">
          <h1 className="t-1">Magnus International</h1>
          <h1 className="t-2">Why Choose Magnus?</h1>
        </div>
        <div className="content">
          <p className="p-1">
            Magnus International was established by XYZ in 2020 for the public
            benefit and it is recognized globally. Throughout our great history,
            Magnus has offered access to a wide range of academic opportunities.
            As a world leader in higher education, the University has pioneered
            change in the sector.
          </p>
          <p className="p-2">
            Magnus International Alumni Association is excited to announce the
            arrival of Magnus Alumni Connect. This is a new community building
            platform for MGS's alumni. It is the only place online where you can
            find, and connect with, all 20,000 MGS’s alumni. All alumni are
            automatically enrolled!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
