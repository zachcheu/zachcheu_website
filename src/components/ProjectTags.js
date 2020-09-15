import React from "react";
import Tag from "./Tag";
function ProjectTags(props) {
  const inactiveTags = new Set(props.allTags);
  props.activeTags.forEach(Set.prototype.delete, inactiveTags);
  return (
    <div>
      {console.log(props)}
      {[...props.activeTags].map((tag, i) => (
        <Tag key={tag} value={tag} isActive={true} toggle={props.handleTags} />
      ))}
      {[inactiveTags].map((tag, i) => (
        <Tag key={tag} value={tag} isActive={false} toggle={props.handleTags} />
      ))}
    </div>
  );
}

export default ProjectTags;
