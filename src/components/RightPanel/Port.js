import { useDispatch } from 'react-redux';
import { removeItemPort } from '../../store/slices/items';

export const Port = ({ port, index, type, item }) => {
  const dispatch = useDispatch();

  const removePort = () => {
    dispatch(removeItemPort({ id: item.id, type, portNum: index }));
  }

  return (
    <div className="Port">
      <p>{ port }</p>
      <div className="DelPort-wrap" onClick={removePort}>
        <div className="DelPort">+</div>
      </div>
    </div>
  );
}