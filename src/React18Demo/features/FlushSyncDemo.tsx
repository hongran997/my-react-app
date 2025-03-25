import { flushSync } from "react-dom";
import { useState } from 'react';

export default function FlushSyncDemo() { 
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);

  const handleClickWithFlushSync = () => { 
    flushSync(() => { 
      setCount(count + 1);
    })
    console.log('first render');
    flushSync(() => { 
      setCount1(count1 + 1);
    }) 
    console.log('second render');
  }

  const handleClickWithoutFlushSync = () => { 
    setCount(count + 1);
    console.log('first render');
    setCount1(count1 + 1);
    console.log('second render');    
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count1: {count1}</p>
      <button onClick={ handleClickWithoutFlushSync}>加一 withoutFlushSync</button>
      <button onClick={ handleClickWithFlushSync}>加一 with FlushSync</button>
    </div>
  )
}