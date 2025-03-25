import { useState } from 'react';
import useDebounce from '../Hooks/useDebounce';

export default function TestUseDebounce() { 
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 1000);

  const handleChange = (e) => { 
    setValue(e.target.value);
  }

  return (
    <div>
      请输入姓名：<input onChange={handleChange}></input>
      <p>debounced value: { debouncedValue }</p>
    </div>
  )
}