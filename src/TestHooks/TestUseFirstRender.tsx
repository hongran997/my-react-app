import { useState } from 'react';
import useFirstRender from '../Hooks/useIsFirstRender';

export default function TestUseFirstRender() { 
  const [count, setCount] = useState(0);

  const isFirstRender = useFirstRender();
  
  const handleClick = function () { 
    setCount(count + 1);
  }
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleClick}>+1</button>
      <p>isFirstRender: { isFirstRender.toString()}</p>
    </div>
  )
}