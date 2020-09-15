import React, { useState } from "react";
import "./App.css";
import ProjectTags from "./components/ProjectTags";

function Projects() {
  // Tags to dislay
  const allTags = new Set(["python", "javascript"]);
  const [activeTags, setTags] = useState(allTags);
  return (
    <div className="Projects">
      <ProjectTags
        activeTags={["python"]}
        allTags={allTags}
        handleTags={(newTags) => {
          setTags(newTags);
        }}
      />
    </div>
  );
}

export default Projects;
