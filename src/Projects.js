import React, { useState } from "react";
import "./App.css";
import ProjectTags from "./components/ProjectTags";

function Projects() {
  // Tags to dislay
  const allTags = new Set(["python", "javascript"]);
  const [activeTags, setTags] = useState(allTags);
  const toggleTag = (tag) => {
    console.log(tag);
    let newTags = new Set([...activeTags]);
    newTags.has(tag) ? newTags.delete(tag) : newTags.add(tag);
    console.log("Active: ", activeTags);
    setTags(newTags);
  };
  return (
    <div className="Projects">
      <ProjectTags
        activeTags={activeTags}
        allTags={allTags}
        toggleTag={(tag) => {
          toggleTag(tag);
        }}
      />
    </div>
  );
}

export default Projects;
