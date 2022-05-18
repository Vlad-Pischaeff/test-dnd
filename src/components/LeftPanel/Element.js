import { useDispatch, useSelector } from "react-redux";
import { selectItem } from '../../store/slices/items';

export function Element({ n }) {
  const dispatch = useDispatch();
  const { selected } = useSelector(state => state.entities.items);
  const itemClass = selected === n.id - 1 
                      ? "Element active"
                      : "Element";

  const chooseItem = index => {
    dispatch(selectItem({ id: index }));
  }

  return (
    <div  className={itemClass} 
          onClick={() => chooseItem(n.id)}>
      {n?.name ?? `name${n.id}`}
    </div>
  );
}