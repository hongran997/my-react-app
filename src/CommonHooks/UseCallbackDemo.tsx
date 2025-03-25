
import { useCallback, useState } from 'react';

export default function UseCallbackDemo() { 

  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello');

  const handleCount = useCallback(() => {
    console.log('usecallbackfn');
    setCount(prev => prev + 1);
  }, []);

  const handleText = () => { 
    setText(prev => prev + 'more');
  }

  return (
    <div>
      <h5>UseCallbackDemo</h5>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={handleCount}>count+1</button>
      <button onClick={handleText}>text+1</button>
    </div>
  );
}