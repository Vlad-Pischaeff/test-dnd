import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItem } from '../../store/slices/items';

export function Element({ n }) {
  const dispatch = useDispatch();
  const { selected } = useSelector(state => state.entities.items);
  const [ overItem, setOverItem ] = useState({ id: null, pos: null });
  const itemClass = selected === n.id - 1 
                      ? "Element active"
                      : "Element";
  const refItem = useRef();

  const chooseItem = index => {
    dispatch(selectItem({ id: index }));
  }

  const dragItem = (n, e) => {
    refItem.current.style.opacity = 0.6;
  }

  const hoverItem = (n, e) => {
    const { offsetTop, offsetHeight } = refItem.current;
    if ( offsetTop + offsetHeight/2 > e.clientY) {
      console.log('client...', n.id, 'before...');
      setOverItem({ id: n.id, pos: 'before' });
    } else {
      console.log('client...', n.id, 'after...');
      setOverItem({ id: n.id, pos: 'after' });
    }
    // console.log('DragOver...', 
    //   n.id, 
    //   refItem.current.offsetTop,
    //   'height', refItem.current.offsetHeight,
    //   refItem.current.offsetLeft,
    //   'width', refItem.current.offsetWidth,
    //   e.clientY);
  }

  const dropItem = (n, e) => {
    refItem.current.style.opacity = 1;
  }

  return (
    <div  className={itemClass} draggable="true" ref={refItem}
          onClick={() => chooseItem(n.id)}
          onDragStart={e => dragItem(n, e)}
          // onDragOver={e => hoverItem(n, e)}
          onDragEnd={e => dropItem(n, e)}
          >
      {n?.name ?? `name${n.id}`}
    </div>
  );
}