import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItem, setTransferParams, transfetItem } from '../../store/slices/items';

export function Element({ n }) {
  const dispatch = useDispatch();
  const { selected, transfer } = useSelector(state => state.entities.items);
  const itemClass = selected === n.id ? "Element active" : "Element";
  const refItem = useRef();

  const chooseItem = index => {
    dispatch(selectItem({ id: index }));
  }

  const startDragItem = (n) => {
    refItem.current.style.opacity = 0.6;
    dispatch(setTransferParams({ source: n.id }));
  }

  const endDragItem = () => {
    refItem.current.style.opacity = 1;
  }

  const hoverItem = (n, e) => {
    e.preventDefault();
    const { offsetTop, offsetHeight } = refItem.current;
    offsetTop + offsetHeight/2 > e.clientY
      ? (transfer.position !== 'before' && dispatch(setTransferParams({ target: n.id, position: 'before' })))
      : (transfer.position !== 'after' && dispatch(setTransferParams({ target: n.id, position: 'after' })));
  }

  const dropItem = (n, e) => {
    e.stopPropagation();
    console.log('dropItem...', transfer);
    if (transfer.group) {
      dispatch(transfetItem());
    }
  }

  return (
    <div  className={itemClass} draggable="true" ref={refItem}
          onClick={() => chooseItem(n.id)}
          onDragStart={() => startDragItem(n)}
          onDragEnd={endDragItem}
          onDragOver={e => hoverItem(n, e)}
          onDrop={e => dropItem(n, e)}
          >
      {n?.name ?? `name${n.id}`}
    </div>
  );
}