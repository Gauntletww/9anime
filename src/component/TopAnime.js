import React, { useState } from "react";
import Today from "./Today";
import Week from "./Week";
import Month from "./Month";
export default function TopAnime() {
  const obj = {
    Today: Today,
    Week: Week,
    Month: Month,
  };
  const [top, setTop] = useState(Today);
  const handle_btn = (event, text) => {
    setTop(obj[text]);
    const btns = document.querySelectorAll(".times_anime_top_inactive");
    btns.forEach((btn) => {
      btn.classList.remove("times_anime_top_active");
    });
    event.target.classList.toggle("times_anime_top_active");
  };
  return (
    <div className="top_anime_container">
      <div className="times">
        <h2>Top anime</h2>
        <div className="times_btns">
          {["Today", "Week", "Month"].map((item, index) => {
            return (
              <button
                className={`${
                  index !== 0
                    ? "times_anime_top_inactive"
                    : "times_anime_top_inactive times_anime_top_active"
                }`}
                onClick={(e) => handle_btn(e, item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="top_anime_list">
        {top.map((item, index) => {
          if (index === 0) {
            return (
              <div className="top_anime" key={item.id}>
                <span className="top_number">{item.id}</span>
                <img src={item.image} alt="top_anime" loading="lazy" />
                <div className="top_title">{item.title}</div>
                <div className="top_views">
                  <i className="fa fa-eye" aria-hidden="true"></i>
                  {item.views}
                </div>
              </div>
            );
          } else {
            return (
              <div className="other_place" key={item.id}>
                <span className="other_number">{item.id}</span>
                <img src={item.image} alt="top_anime" loading="lazy" />
                <div className="other_title_views">
                  {item.title}
                  <div className="other_views">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    {item.views}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
