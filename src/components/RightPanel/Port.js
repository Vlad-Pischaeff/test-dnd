import { useDispatch, useSelector } from 'react-redux';
import { removeItemPort } from '../../store/slices/items';

export const Port = ({ port, index, type }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.entities);
  const { selected } = items;
  const item = isFinite(selected) ? items.list[selected] : {};

  const removePort = () => {
    dispatch(removeItemPort({ id: item.id, type, portNum: index }));
  }

  return (
    <div className="Port">
      <p>{port.name}</p>
      <div className="DelPort" onClick={removePort}>+</div>
    </div>
  );
}