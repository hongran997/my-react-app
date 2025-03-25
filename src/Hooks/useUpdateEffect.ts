import { DependencyList, useRef, useEffect, EffectCallback } from 'react';

export default function useUpdateEffect(fn: EffectCallback, deps: DependencyList) { 
  const isFirstRender = useRef(true);

  useEffect(() => { 
    if (isFirstRender.current) { 
      isFirstRender.current = false;
      return;
    }
    if (!isFirstRender.current) { 
      fn();
    }
  }, deps)
}