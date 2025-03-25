import { useState, useEffect } from 'react';

export default function useDebounce<T>(value: T, wait: number = 1000) { 

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => { 
    let timer = setTimeout(() => {
      setDebouncedValue(value);
    }, wait);
    return () => { 
      clearTimeout(timer);
    }
  }, [value, wait])

  return debouncedValue
}