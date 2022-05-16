import './style.css'

function App() {
  let arr = new Array(20).fill(1).map((n, i) => i + 1);

  return (
    <div className="LeftPanel">
      <input className="ElementSearch" type="text" placeholder='Поиск' />
      {
        arr.map( n => <div key={n} className="Element">{n}</div>)
      }
    </div>
  );
}

export default App;