import './style.css'
// import { Group } from './Group';
import { useDispatch, useSelector } from 'react-redux';
import { addItemPort } from '../../store/slices/items';

function App() {
  const dispatch = useDispatch();
  const { items  } = useSelector(state => state.entities);
  const { selected, groups } = items;
  const item = items.list[selected];
  const groupName = groups[item.group];

  const showInputs = () => {
    return isFinite(selected)
      ? item.inputs.map((n, i) => 
          <div key={i} className="Port">
            <p>{n.name}</p>
            <div className="DelItem">+</div>
          </div>)
      : <div></div>;
  }

  const showOutputs = () => {
    return isFinite(selected)
      ? item.outputs.map((n, i) => 
          <div key={i} className="Port">
            <p>{n.name}</p>
            <div className="DelItem">+</div>
          </div>)
      : <div></div>;
  }

  const _Click = type => {
    if (isFinite(selected)) {
      const length = item[type].length + 1;
      type === 'inputs'
        ? dispatch(addItemPort({ id: item.id, type, name: `input ${length}`}))
        : dispatch(addItemPort({ id: item.id, type, name: `output ${length}`}));
    }
  }

  return (
    <div className="LeftPanel">
      <p>Name{ isFinite(selected) ? item.name : '' }</p>
      <p>Group id #{ isFinite(selected) ? groupName : '' }</p>
      
      <div className='ElementGroup'>
        inputs
        { showInputs() }
        <span className="AddItem" onClick={() => _Click('inputs')}>+</span>
      </div>

      <div className='ElementGroup'>
        outputs
        { showOutputs() }
        <span className="AddItem" onClick={() => _Click('outputs')}>+</span>
      </div>
    </div>
  );
}

export default App;