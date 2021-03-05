import React from "react";
import { eventItems } from "./EventItems";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  return (
    <div className="u-event">
      <div className="e-header">
        <h1>Upcoming Events</h1>
        <a href="#" className="view-e">
          View All Events
        </a>
      </div>

      <div className="u-e-box">
        {eventItems.map((item, index) => {
          return (
            <div>
              <div className="u-e-img">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="u-e-content">
                <p className="e-date">{item.date}</p>
                <p className="e-month"> {item.month}</p>
                <p className="e-title">{item.title}</p>
                <p className="e-time">
                  <i className={item.clockIcon}></i>
                  {item.time}
                </p>
                <p className="e-place">
                  <i className={item.mapIcon}></i>
                  {item.place}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
