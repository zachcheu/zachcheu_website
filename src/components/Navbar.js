import React from "react";
import { Link } from "react-router-dom";
export default () => (
  <nav className="nav-default">
    <div className="nav-name-left">
      <Link to="/">Home</Link>
    </div>
    <div className="nav-links-right">
      <div></div>
      <div className="nav-link">
        <Link to="/blog">Blog</Link>
      </div>
      <div className="nav-link">
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  </nav>
);
