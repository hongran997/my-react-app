import { useId, useState } from 'react';

export default function UseIdDemo() { 
  const id = useId();
  const [count, setCount] = useState(0);

  const handleClick = () => { 
    setCount(preCount => preCount + 1);
  }
  
  return (
    <div>
      <section>
        <label htmlFor={`${id} - username`}>username</label>
        <input id={`${id} - username`}></input><p>{`${id} - username` }</p>
      </section>
      <section>
        <label htmlFor={`${id} - password`}>password</label>
        <input id={`${id} - password`}></input><p>{`${id} - password` }</p>
      </section>
      <button onClick={handleClick}>watch whether id changed</button>
      count: { count }
    </div>
    
  )
}