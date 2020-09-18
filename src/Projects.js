import React, { useState } from "react";
import "./App.css";
import ProjectTags from "./components/ProjectTags";
import ProjectPanels from "./components/ProjectPanels";
function Projects() {
  // Tags to dislay
  const allTags = new Set([
    "python",
    "javascript",
    "docker",
    "android",
    "java",
    "accessibility",
    "figma",
    "react",
  ]);
  const [activeTags, setActiveTags] = useState(allTags);

  return (
    <div className="Projects leftmargin">
      <ProjectTags
        activeTags={activeTags}
        allTags={allTags}
        updateActiveTags={(tags) => {
          setActiveTags(tags);
        }}
      />
      <ProjectPanels activeTags={activeTags} />
    </div>
  );
}

export default Projects;
