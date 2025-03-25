import { useState, useEffect } from 'react';
import useUpdateEffect from '../Hooks/useUpdateEffect';

export default function TestUseUpdateEffect() { 
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  useEffect(() => { 
    setCount1(count1 + 1);
  }, [count])

  useUpdateEffect(() => { 
    setCount2(count2 + 1);
  }, [count])

  const handleClick = () => { 
    setCount(count + 1);
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>Use Effect: count1: {count1}</p>
      <p>Use Update Effect: count2: { count2 }</p>
      <button onClick={ handleClick}>add 1</button>
    </div>
  )
}