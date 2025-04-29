import { useState, useEffect, useLayoutEffect, useCallback } from 'react';

export default function UseLayoutEffectDemo() { 
  const [count, setCount] = useState(0);
  const [layoutCount, setLayoutCount] = useState(0);

  // useEffect 是在渲染后执行，是异步的，不会阻塞浏览器渲染，可能会导致页面闪烁。
  useEffect(() => {
    console.log('useEffect 执行');
    if (count === 0) {
      setCount(Math.ceil(Math.random() * 10));
    }
  }, [count]);

  // useLayoutEffect 是在渲染前执行，是同步的，会阻塞，不会导致页面闪烁。
  useLayoutEffect(() => { 
    console.log('useLayoutEffect 执行');
    if (layoutCount == 0) { 
      setLayoutCount(Math.ceil(Math.random() * 10));
    }
  }, [layoutCount])
  
  
  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  const resetLayoutCount = useCallback(() => {
    setLayoutCount(0);
  }, []);
  
  return (
    <div>
      <h5>Effect演示</h5>
      <p>Count: {count}</p>
      <button onClick={resetCount}>重置Count</button>
      <p>Layout: {layoutCount}</p>
      <button onClick={resetLayoutCount}>重置LayoutCount</button>
    </div>
  )
}


/*
useEffect 是在渲染后执行，是异步的，不会阻塞浏览器渲染，可能会导致页面闪烁。
useLayoutEffect 是在渲染钱执行，是同步的，会阻塞，不会导致页面闪烁

如果是跟dom相关的操作，要求避免页面闪烁，可以放在useLayoutEffect中执行
其他情况下可以使用useEffect.
*/