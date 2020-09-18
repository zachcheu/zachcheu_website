import React, { useState } from "react";
import Panel from "./Panel";

const projects = [
  {
    name: "Polar Drive",
    description:
      "Android application that uses phone sensors to measure driving efficiency and safety",
    tags: ["android", "java"],
    imgUri:
      "https://storage.googleapis.com/website-images-zachcheu/polar_drive.png",
    link: "http://polardrive.weebly.com/",
  },
  {
    name: "Access Period",
    description: "Group project App mockup ",
    tags: ["accessibility", "figma"],
    imgUri:
      "https://storage.googleapis.com/website-images-zachcheu/access_period.png",
    link:
      "https://drive.google.com/file/d/1BdXqB_AWHV65n6wVyeDG8A8bVVJvBcge/view?usp=sharing",
  },
  {
    name: "Personal Website",
    description: "Personal Website Portfolio",
    tags: ["accessibility", "figma"],
    imgUri:
      "https://storage.googleapis.com/website-images-zachcheu/squareProfile.png",
    link:
      "https://drive.google.com/file/d/1BdXqB_AWHV65n6wVyeDG8A8bVVJvBcge/view?usp=sharing",
  },
];

function ProjectPanels(props) {
  const [loading, setLoading] = useState(true);
  function projectFilter(tags) {
    for (var i = 0; i < tags.length; i++) {
      if (props.activeTags.has(tags[i])) {
        console.log(props.activeTags);
        return true;
      }
    }
    return false;
  }

  function displayProjectPanels() {
    var filterProjects = projects.filter((p) => projectFilter(p.tags));
    console.log("Projects:", filterProjects);
    return filterProjects.map((p) => (
      <Panel
        key={p.name}
        name={p.name}
        description={p.description}
        tags={p.tags}
        imgUri={p.imgUri}
        link={p.link}
      />
    ));
  }
  return (
    <div className="projects">
      <h3>Projects: </h3>
      <div className="panels">{displayProjectPanels()}</div>
    </div>
  );
}

export default ProjectPanels;
