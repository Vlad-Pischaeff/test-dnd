import { useDispatch } from "react-redux";
import { selectItem } from '../../store/slices/items';

export function Element({ n }) {
  const dispatch = useDispatch();

  const _Click = index => {
    dispatch(selectItem({ id: index }));
  }

  return (
    <div className="Element" onClick={() => _Click(n.id)}>{n?.name ?? `name${n.id}`}</div>
  );
}