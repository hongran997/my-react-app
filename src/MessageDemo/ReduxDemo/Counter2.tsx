import { useAppSelector } from "./reduxHooks"

export default function Counter2() {
  const count = useAppSelector(state => state.counter.value);
  return (
    <div>
      <p>我是count2 组件</p>
      <span>count: {count}</span>
    </div>
  )
}