import React from "react";
import "./Button.css";

const Button = ({ content, link }) => {
  return (
    <a className="button" href={link}>
      {content}
    </a>
  );
};

export default Button;
