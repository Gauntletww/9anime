import React from "react";
import TopAnime from "./TopAnime";

function Side() {
  const btns = [
    "Genre",
    "Country",
    "Season",
    "Year",
    "Type",
    "Status",
    "Langugae",
    "Sort",
  ];
  return (
    <div className="side_bar">
      <div className="filter">
        <p>Quick filter</p>
        <div className="filter_items">
        {btns.map((ele) => {
          return (
            <button className="filter_btns" key={crypto.randomUUID()}>
              {ele}
              <span>{ele !== "Sort" ? ` All` : ` Default`}</span>
              <i className="fas fa-angle-down ml-1"></i>
            </button>
          );
        })}
        </div>
        <input type="text" placeholder="Search..." className="filter_search"/>
        <button className="search_filter">
        <i className="fas fa-filter mr-1"></i> Filter
        </button>
      </div>
    <TopAnime/>
    </div>
  );
}

export default Side;
