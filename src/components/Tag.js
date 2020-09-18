import React from "react";
import "../App.css";
export default ({ value, isActive, toggle }) => (
  <div className="inline">
    {isActive ? (
      <button className="tag tagActive" onClick={toggle}>
        {value}
      </button>
    ) : (
      <button className="tag tagInactive" onClick={toggle}>
        {value}
      </button>
    )}
  </div>
);
