import { useDispatch, useSelector } from 'react-redux';
import { addItemPort, removeItemPort } from '../../store/slices/items';
import { Port } from './Port';

export const PortGroup = ({ type, item, isNotEmpty }) => {
  const dispatch = useDispatch();

  const showInputs = () => {
    return isNotEmpty
      ? item.inputs.map((n, i) => <Port key={i} index={i} type='inputs' port={n} />)
      : <div></div>;
  }

  const addPort = () => {
    if (isNotEmpty) {
      const length = item[type].length + 1;
      type === 'inputs'
        ? dispatch(addItemPort({ id: item.id, type, name: `input ${length}`}))
        : dispatch(addItemPort({ id: item.id, type, name: `output ${length}`}));
    }
  }

  return (
    <div className='PortGroup'>
      inputs
      { showInputs() }
      <span className="AddPort" onClick={addPort}>+</span>
    </div>
  );
}