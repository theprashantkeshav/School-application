import React from "react";
import { newsItems } from "./NewsItems";
import "./News.css";

const News = () => {
  return (
    <div className="news">
      <div className="n-header">
        <h1>News & Updates</h1>
        <a href="#" className="read-n">
          Read All News
        </a>
      </div>

      <div className="n-box">
        {newsItems.map((item, index) => {
          return (
            <div>
              <div className="n-img">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="n-content">
                <p className="n-date">{item.date}</p>
                <p className="n-title">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
