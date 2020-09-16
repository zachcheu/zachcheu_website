import React, { useState } from "react";
import Tag from "./Tag";
function ProjectTags(props) {
  console.log("ProjectTags: ", props);

  const inactiveTags = new Set(props.allTags);
  [...props.activeTags].forEach(Set.prototype.delete, inactiveTags);
  const [currActiveTags, setActiveTags] = useState(props.activeTags);
  const [order, setOrder] = useState([...props.activeTags, ...inactiveTags]);

  const toggleTag = (tag) => {
    console.log(tag);
    let newTags = new Set([...currActiveTags]);
    newTags.has(tag) ? newTags.delete(tag) : newTags.add(tag);
    console.log("Active: ", currActiveTags);
    setActiveTags(newTags);
  };

  return (
    <div>
      {console.log(order)}
      {[...order].map((tag) => (
        <Tag
          key={tag}
          value={tag}
          isActive={currActiveTags.has(tag)}
          toggle={() => {
            toggleTag(tag);
          }}
        />
      ))}
      <button onClick={() => props.updateActiveTag(currActiveTags)}>
        Update
      </button>
    </div>
  );
}

export default ProjectTags;
