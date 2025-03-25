import { useState } from 'react';
import useTimeout from '../Hooks/useTimeout';

export default function TestUseTimeout() {
  
  const [count, setCount] = useState(0);

  // useTimeout(() => { console.log(count)}, 1000)

  const handleClick = function () { 
    setCount(count+1);
  }

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  )
}