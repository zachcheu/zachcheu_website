import React, { useState } from "react";
import Tag from "./Tag";

function ProjectTags(props) {
  let currInactiveTags = new Set(props.allTags);
  [...props.activeTags].forEach(Set.prototype.delete, currInactiveTags);
  const [currActiveTags, setActiveTags] = useState(props.activeTags);
  const [order, setOrder] = useState([
    ...[...props.activeTags].sort(),
    ...[...currInactiveTags].sort(),
  ]);

  const toggleTag = (tag) => {
    let newTags = new Set([...currActiveTags]);
    newTags.has(tag) ? newTags.delete(tag) : newTags.add(tag);
    setActiveTags(newTags);
  };

  const updateTags = () => {
    let currInactiveTags = new Set(props.allTags);
    const currActiveTagsList = [...currActiveTags].sort();
    currActiveTagsList.forEach(Set.prototype.delete, currInactiveTags);
    console.log("updateTags Active: ", currActiveTags);
    console.log("updateTags Inactive: ", currInactiveTags);
    setOrder([...currActiveTagsList, ...[...currInactiveTags].sort()]);
    props.updateActiveTags(currActiveTags);
  };

  return (
    <div>
      {console.log("Order:", order)}
      {order.map((tag) => (
        <Tag
          key={tag}
          value={tag}
          isActive={currActiveTags.has(tag)}
          toggle={() => {
            toggleTag(tag);
          }}
        />
      ))}
      <button onClick={updateTags}>Update</button>
    </div>
  );
}

export default ProjectTags;
