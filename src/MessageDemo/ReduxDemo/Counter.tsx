import { useAppDispatch, useAppSelector } from './reduxHooks';
import { increment, decrement, incrementByAmount } from './counterSlice';

export default function Counter() { 
  const count = useAppSelector(state => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={ () => dispatch(increment()) }>+</button>
      <button onClick={ () => dispatch(decrement())}>-</button>
      <button onClick={ () => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}