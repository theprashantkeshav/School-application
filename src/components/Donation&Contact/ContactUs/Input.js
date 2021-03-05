import React from "react";
import "./Input.css";

const input = ({ type, placeholder, name }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default input;
