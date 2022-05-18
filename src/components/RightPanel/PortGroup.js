import { Port } from './Port';
import { ButtonAddPort } from './ButtonAddPort';

export const PortGroup = ({ type, item }) => {
  
  const showPorts = () => {
    return item?.id
      ? item[type].map((port, i) => 
          <div key={i}>
            <Port index={i} type={type} port={port} item={item} />
          </div>)
      : <div></div>;
  }

  return (
    <div className='PortGroup'>
      <p>{ type }</p>
      { showPorts() }
      <ButtonAddPort item={item} type={type}/>
    </div>
  );
}