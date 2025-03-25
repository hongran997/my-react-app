import { useEffect, useRef , useCallback} from 'react';

export default function useTimeout(fn: () => void, wait = 1000) {
  const fnRef = useRef(fn);

  useEffect(() => { 
    fnRef.current = fn;
  }, [fn])

  const timerRef = useRef<NodeJS.Timeout>()

  const clear = useCallback(() => { 
    clearInterval(timerRef.current);
  }, [])

  const reset = useCallback(() => { 
    clear();
    timerRef.current = setInterval(() => { fnRef.current() }, wait)
  }, [wait, clear])

  useEffect(() => { 
    reset();
  }, [wait, reset])


  return { clear, reset };
}