import { useEffect, useState } from "react";
import { Element } from "./Element";

export function Group({ array, groupId, groups }) {
  const [targetGroup, setTargetGroup] = useState(null);

  useEffect(() => {
    console.log('target...', targetGroup);
  }, [targetGroup]);

  const showItem = ({ target }) => {
    target.className === "ElementGroup" && setTargetGroup(groupId);
  }

  const clearItem = ({ target }) => {
    console.log('clearItem...');
    target.className === "ElementGroup" && setTargetGroup(null);
  }

  return (
    <div className="ElementGroup" onDragEnter={showItem} onDragLeave={clearItem} >
      { groups[groupId] }
      { array.map( n => <Element key={n?.id ?? n} n={n} targetGroup={targetGroup} /> ) }
    </div>
  );
}