import './style.css'
import { Group } from './Group';
import { useSelector } from 'react-redux';

function App() {
  const { list, groups } = useSelector(state => state.entities.items);

  let arr1 = list.filter(n => n.group === 1);
  let arr2 = list.filter(n => n.group === 2);
  let arr3 = list.filter(n => n.group === 3);

  return (
    <div className="LeftPanel">
      <input className="ElementSearch" type="text" placeholder='Поиск' />
      <Group array={arr1} groupId="1" groups={groups} />
      <Group array={arr2} groupId="2" groups={groups} />
      <Group array={arr3} groupId="3" groups={groups} />
    </div>
  );
}

export default App;