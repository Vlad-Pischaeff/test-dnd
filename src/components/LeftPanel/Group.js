import { Element } from "./Element";

export function Group({ array, name }) {

  return (
    <div className="ElementGroup">
      { name }
      { array.map( n => <Element key={n?.id ?? n} n={n} /> ) }
    </div>
  );
}