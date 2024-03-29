import { useDispatch, useSelector } from "react-redux";
import { setTransferParams, transfetItem } from '../../store/slices/items';
import { Element } from "./Element";

export function Group({ array, groupId, groups }) {
  const dispatch = useDispatch();
  const { transfer } = useSelector(state => state.entities.items);

  const setTargetGroup = (e) => {
    e.preventDefault();
    transfer.group !== groupId && dispatch(setTransferParams({ 'group': groupId }));
  }

  const resetTargetGroup = (e) => {
    dispatch(transfetItem());
    // console.log('group...Drop...', transfer);
  }

  return (
    <div  className="ElementGroup"
          onDragOver={setTargetGroup} 
          onDrop={resetTargetGroup} >

      Group - { groups[groupId] }
      
      { array.map( n => <Element key={n?.id ?? n} n={n} /> ) }

    </div>
  );
}