import React from "react";

export default function Progress(props) {
  return (
    <div className="progress">
      {[...Array(10)].map((x, index) => {
        return (
          <div
            className={`progress_${
              props.progress_bar === index ? "active" : "items"
            }`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}
