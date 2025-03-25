import { useState } from 'react';

export default function Child(props: { message: string, postMessage: (count: number) => void }) {

  const [count, setCount] = useState(0);

  const handleClick = () => { 
    setCount(count + 1);
    props.postMessage(count);
  }

  return (
    <div>
      <p>Child Said: I 收到来自父组件的消息message： {props.message}</p>
      <button onClick={ handleClick}>发送消息给父组件</button>
    </div >
  )
}