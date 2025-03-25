import { useAppSelector } from "./reduxHooks";

export default function TodoList() { 
  const todos = useAppSelector(state => state.todo.value);

  return (
    <div>
      <h5>Todo List</h5>
      <ul>
        { 
          todos.map(todo => (
            <li key={todo}>
              {todo}
            </li>
          ))
        }
      </ul>
    </div>
  )
}