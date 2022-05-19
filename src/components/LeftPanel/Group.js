import { useDispatch, useSelector } from "react-redux";
import { setTransferParams } from '../../store/slices/items';
import { Element } from "./Element";

export function Group({ array, groupId, groups }) {
  const dispatch = useDispatch();
  const { transfer } = useSelector(state => state.entities.items);

  const setTargetGroup = (e) => {
    e.preventDefault();
    transfer.group !== groupId && dispatch(setTransferParams({ 'group': groupId }));
    return false;
  }

  return (
    <div className="ElementGroup" onDragOver={setTargetGroup} >
      { groups[groupId] }
      { array.map( n => <Element key={n?.id ?? n} n={n} /> ) }
    </div>
  );
}