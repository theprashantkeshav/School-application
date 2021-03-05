import React from "react";
import { cardItem } from "./items";
import "./Card2.css";

const Card2 = () => {
  return (
    <div className="card2">
      {cardItem.map((item, index) => {
        return (
          <div className="card-content">
            <i className={`card-icon ${item.logoClass}`}></i>
            <p className="title">{item.title}</p>
            <p className="content">{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card2;
