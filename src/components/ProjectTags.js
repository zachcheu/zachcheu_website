import React, { useState } from "react";
import Tag from "./Tag";
import { FaCheck, FaRegWindowClose } from "react-icons/fa";

function eqSet(s1, s2) {
  if (s1.size !== s2.size) return false;
  for (var a of s2) if (!s1.has(a)) return false;
  return true;
}

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

  const clearTags = () => {
    setActiveTags(new Set());
  };

  return (
    <span className="">
      <h3 className="inline">Tags:</h3>
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

      <div>
        {
          <button className="updateTag" onClick={clearTags}>
            Clear <FaRegWindowClose className="updateLogo" />
          </button>
        }
        {eqSet(currActiveTags, props.activeTags) ? (
          <button className="updateTag">
            Update <FaCheck className="updateLogo" />
          </button>
        ) : (
          <button className="updateTag updateTagDiff" onClick={updateTags}>
            Update <FaCheck className="updateLogo" />
          </button>
        )}
      </div>
    </span>
  );
}

export default ProjectTags;
