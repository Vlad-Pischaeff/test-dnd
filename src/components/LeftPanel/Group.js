export function Group({ array, name }) {

  return (
    <div className="ElementGroup">
      {name}
      {
        array.map( n => <div key={n} className="Element">{n}</div>)
      }
    </div>
  );
}