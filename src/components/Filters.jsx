import React from "react";
import { MdCancel } from "react-icons/md";
import "./Filters.css";

function Filters() {
  const list = [
    "Contractual",
    "Agriculture, Fishing & Forestry",
    "Entry Level",
  ];
  return (
    <div className="filter-parent">
      <div className="filter-div">
        {list.map((i) => (
          <div key={i} className="filter-single">
            {i}
            <MdCancel className="clear-icon" />
          </div>
        ))}
        +3 more
      </div>
      <button className="clear">clear</button>
    </div>
  );
}

export default Filters;
