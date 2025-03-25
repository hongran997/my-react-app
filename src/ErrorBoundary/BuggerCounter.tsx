import { useState } from 'react';

export default function BuggerCounter() { 
  const [count, setCount] = useState(0);

  // 错误：事件处理器中的错误
  const handleAdd = function () { 
    try {

    } catch (err) {

    } finally { 

    }
  }

  return (
    <div>
      <p>count: {count1}</p>
      <button onClick={handleAdd}>add 1</button>
    </div>
  )
}