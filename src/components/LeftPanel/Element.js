import { useDispatch, useSelector } from "react-redux";
import { selectItem } from '../../store/slices/items';

export function Element({ n }) {
  const dispatch = useDispatch();
  const { selected } = useSelector(state => state.entities.items);

  const _Click = index => {
    dispatch(selectItem({ id: index }));
  }

  return (
    <div className={selected.id === n.id ? "Element active": "Element"} onClick={() => _Click(n.id)}>{n?.name ?? `name${n.id}`}</div>
  );
}