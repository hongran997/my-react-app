import Counter from './Counter';
import Counter2 from './Counter2';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import { store } from './store';

export default function ReduxDemo() { 
  return (
    <Provider store={ store }>
      <Counter />
      <Counter2 />
      <TodoList />
    </Provider>
  )
}