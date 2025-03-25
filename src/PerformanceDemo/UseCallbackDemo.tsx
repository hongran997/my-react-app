import { useCallback, useState } from "react"

function ChildComponent({ onClick}) {
  return (
    <div>
      <h5>ChildComponent</h5>
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => { 
    console.log('Button Clicked');
  }, [])

  return (
    <div>
      <h5>UseCallbackDemo</h5>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ChildComponent onClick={ handleClick } />
    </div>
  )
}
