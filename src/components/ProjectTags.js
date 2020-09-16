import React from "react";
import Tag from "./Tag";
function ProjectTags(props) {
  const inactiveTags = new Set(props.allTags);
  console.log("ProjectTags: ", props);
  [...props.activeTags].forEach(Set.prototype.delete, inactiveTags);

  return (
    <div>
      {console.log("Render")}
      {[...props.activeTags].map((tag, i) => (
        <Tag
          key={tag}
          value={tag}
          isActive={true}
          toggle={() => {
            props.toggleTag(tag);
          }}
        />
      ))}
      {[...inactiveTags].map((tag, i) => (
        <Tag
          key={tag}
          value={tag}
          isActive={false}
          toggle={() => {
            props.toggleTag(tag);
          }}
        />
      ))}
    </div>
  );
}

export default ProjectTags;
