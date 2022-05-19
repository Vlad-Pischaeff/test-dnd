import './style.css'
import { Group } from './Group';
import { useSelector } from 'react-redux';

function App() {
  const { list, groups } = useSelector(state => state.entities.items);

  let keys = Object.keys(groups);

  return (
    <div className="LeftPanel">
      <input className="ElementSearch" type="text" placeholder='Поиск' />
      {
        keys.map(key => {
          let array = list.filter(n => n.group === +key);
          return <Group key={key} array={array} groupId={key} groups={groups} />;
        })
      }
    </div>
  );
}

export default App;