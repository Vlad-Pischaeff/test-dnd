import './style.css'
import { useSelector } from 'react-redux';
import { PortGroup } from './PortGroup';

function App() {
  const { items  } = useSelector(state => state.entities);
  const { selected, groups } = items;
  const isItemChosen = isFinite(selected);
  const item = isItemChosen ? items.list.find(n => n.id === selected) : {};
  const groupName = groups[item.group];

  return (
    <div className="LeftPanel">
      <p>Name { isItemChosen ? item.name : '' }</p>
      <p>Group id #{ isItemChosen ? groupName : '' }</p>
      <PortGroup item={item} type='inputs'/>
      <PortGroup item={item} type='outputs'/>
    </div>
  );
}

export default App;