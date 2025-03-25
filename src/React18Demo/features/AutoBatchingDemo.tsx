import { useState } from 'react';

export default function AutoBatchingDemo() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => { 
    setCount(count => count + 1);
    setFlag(flag => !flag);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <p>Flag: {flag.toString()}</p>
      <button onClick={handleClick}>更新state</button>
    </div>
  )
}