import React from "react";
import "../App.css";
export default ({ value, isActive, toggle }) => (
  <div>
    {isActive ? (
      <button className="tagActive">{value}</button>
    ) : (
      <button className="tagInactive">{value}</button>
    )}
  </div>
);
