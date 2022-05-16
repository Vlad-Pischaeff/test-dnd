import './style.css'
import { Group } from './Group';
import { useSelector } from 'react-redux';

function App() {
  const { items } = useSelector(state => state.entities);

  let arr1 = items.list.filter(n => n.group === 1);
  let arr2 = items.list.filter(n => n.group === 2);
  let arr3 = items.list.filter(n => n.group === 3);
  // console.log('items...', items, arr1, arr2, arr3);
  return (
    <div className="LeftPanel">
      <input className="ElementSearch" type="text" placeholder='Поиск' />
      <Group array={arr1} name="Group Input" />
      <Group array={arr2} name="Group Standard" />
      <Group array={arr3} name="Group Output" />
    </div>
  );
}

export default App;