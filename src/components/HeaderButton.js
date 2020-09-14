import React from "react";

export default (props) => (
  <div class="inline">
    <a href={props.link} target="_blank">
      <button class="infobtn infobtnmarginmid" type="button">
        {props.name}
        <div class="logo inline">{props.logo}</div>
      </button>
    </a>
  </div>
);
