import { useDispatch} from 'react-redux';
import { addItemPort } from '../../store/slices/items';

export const ButtonAddPort = ({ item, type }) => {
  const dispatch = useDispatch();

  const addPort = type => {
    if (item?.id) {
      const length = item[type].length + 1;
      const name = type === 'inputs' ? `input ${length}` : `output ${length}`;
      dispatch(addItemPort({ id: item.id, type, name }));
    }
  }

  return (
    <>
      <span className="AddPort" onClick={() => addPort(type)}>+</span>
    </>
  );
}