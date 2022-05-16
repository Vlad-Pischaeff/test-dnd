// import './style.css'
// import { Group } from './Group';
import { useSelector } from 'react-redux';

function App() {
  const { items } = useSelector(state => state.entities);

  return (
    <div className="LeftPanel">
      <div>{JSON.stringify(items.selected)}</div>
    </div>
  );
}

export default App;