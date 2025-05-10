import { useMemo , DependencyList} from 'react';

// 所以useCallback 是 useMeme的一个特殊用例，useMemo 可以返回一个具体的值，也可以返回一个函数
export default function useMockCallback(fn: Function, dependencies: DependencyList) {
  const memoizedCallback = useMemo(() => {
    return fn();
  }, dependencies);

  return memoizedCallback;
}