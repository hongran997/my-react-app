import { useState } from 'react';

export default function AutoBatchingDemo() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => { 
    // 第一种方式：
    setCount(count => count + 1);
    setFlag(flag => !flag);
    setCount(count => count + 1);

    // 第二种方式：通过ref, 并行

    // 第三种方式：通过useEffect

    // 第四种方式：通过flushSync

  }
  return (
    <div>
      <p>Count: {count}</p>
      <p>Flag: {flag.toString()}</p>
      <button onClick={handleClick}>更新state</button>
    </div>
  )
}