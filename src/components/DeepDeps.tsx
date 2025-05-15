import { useState, useCallback, useEffect } from 'react';

export default function DeepDeps() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const onBtnClick = useCallback(() => { 
    setValue1(prev => prev + 1);
  }, [value1])

  const setValueFn = useCallback(() => {
    setValue2(value1)
  }, [value1]);


  useEffect(() => {
    setValueFn();
  }, [setValueFn])
  
  return (
    <div>
      <label>{value1} / {value2}</label>
      <button onClick={onBtnClick}>点击</button>
    </div>
  )
}