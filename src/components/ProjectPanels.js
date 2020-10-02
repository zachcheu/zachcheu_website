import React from "react";
import Panel from "./Panel";

function ProjectPanels(props) {
  function projectFilter(tags) {
    for (var i = 0; i < tags.length; i++) {
      if (props.activeTags.size === 0 || props.activeTags.has(tags[i])) {
        console.log(props.activeTags);
        return true;
      }
    }
    return false;
  }

  function displayProjectPanels() {
    var filterProjects = props.projects.filter((p) => projectFilter(p.tags));
    filterProjects = filterProjects.sort((a, b) => (a.name > b.name ? 1 : -1));
    return filterProjects.map((p) => (
      <Panel
        key={p.name}
        name={p.name}
        description={p.description}
        tags={p.tags}
        imgUri={p.imgUri}
        imgAlt={p.imgAlt}
        link={p.link}
      />
    ));
  }
  return (
    <div className="projects">
      <h3>Projects:</h3>
      <div className="panels">{displayProjectPanels()}</div>
    </div>
  );
}

export default ProjectPanels;
