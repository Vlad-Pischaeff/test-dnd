import './style.css'
import { Group } from './Group';

function App() {
  let arr1 = new Array(5).fill(1).map((n, i) => i + 1);
  let arr2 = new Array(5).fill(1).map((n, i) => i + 1);
  let arr3 = new Array(5).fill(1).map((n, i) => i + 1);

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