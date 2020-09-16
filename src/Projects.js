import React, { useState } from "react";
import "./App.css";
import ProjectTags from "./components/ProjectTags";

function Projects() {
  // Tags to dislay
  const allTags = new Set(["python", "javascript", "docker"]);
  const [activeTags, setActiveTags] = useState(allTags);

  return (
    <div className="Projects">
      <ProjectTags
        activeTags={activeTags}
        allTags={allTags}
        updateActiveTags={(tags) => {
          setActiveTags(tags);
        }}
      />
      {[...activeTags].map((tag) => (
        <h1>{tag}</h1>
      ))}
    </div>
  );
}

export default Projects;
