import { useState, useMemo } from 'react';

export default function UseMemoDemo() { 
  const [number, setNumber] = useState(0);
  const handleChange = (e) => { 
    setNumber(e.target.value);
  }
  const doubleNumber = useMemo(() => {
    console.log('正在计算中');
    return number * 2;
  }, [number]);

  return (
    <div>
      <h5>UseMemoDemo</h5>
      <input value={number} onChange={handleChange}></input>
      <p>计算结果：{ doubleNumber}</p>
    </div>
  );
}