// import './style.css'
// import { Group } from './Group';
import { useSelector } from 'react-redux';

function App() {
  const { selected, groups } = useSelector(state => state.entities.items);

  const showInputs = () => {
    return selected?.inputs
      ? selected.inputs.map((n, i) => <div key={i} className="Element">{n.name}</div>)
      : <div></div>;
  }

  const showOutputs = () => {
    return selected?.outputs
      ? selected.outputs.map((n, i) => <div key={i} className="Element">{n.name}</div>)
      : <div></div>;
  }

  return (
    <div className="LeftPanel">
      <p>{selected.name}</p>
      <p>Group id #{groups[selected.group]}</p>
      <div className='ElementGroup'>
        inputs
        { showInputs() }
      </div>
      <div className='ElementGroup'>
        outputs
        { showOutputs() }
      </div>
    </div>
  );
}

export default App;