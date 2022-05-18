import { useState } from "react";
import { Element } from "./Element";

export function Group({ array, groupId, groups }) {
  const [overGroup, setOverGroup] = useState(null);

  const showItem = ({ target }) => {
    target.className === "ElementGroup" && setOverGroup(groupId);
  }

  const clearItem = ({ target }) => {
    target.className === "ElementGroup" && setOverGroup(null);
  }

  return (
    <div className="ElementGroup" onDragEnter={showItem} onDragLeave={clearItem} >
      { groups[groupId] }
      { array.map( n => <Element key={n?.id ?? n} n={n} overGroup={overGroup} /> ) }
    </div>
  );
}