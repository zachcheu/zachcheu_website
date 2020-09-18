import React from "react";
import "../App.css";

export default ({ name, description, tags, imgUri, link }) => (
  <div className="inline panel" onClick={() => window.open(link, "mywindow")}>
    {console.log(name)}
    <img src={imgUri} className="panelImage"></img>
    <div className="projectDetails">
      <b>{name}: </b>
      {description}
      <br />
      <br />
      <div className="projectTags">Tags: [{tags.join(", ")}]</div>
    </div>
  </div>
);
