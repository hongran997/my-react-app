import { useState, useTransition } from 'react';

export default function TransitionDemo() { 
    const [input, setInput] = useState('');
    const [list, setList] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInput(value);
      // startTransition 是一个函数，用来标记一个状态更新为过渡状态
      startTransition(() => { 
        const list = Array(100).fill(value);
        setList(list);
      })
    }
  
    return (
      <div>
        <input type="text" onChange={ handleChange}></input>
        <div>
          { 
            isPending ? <p>loading</p> : <ul>
              { 
                list.map((item, index) => (<li key={index}> { item}</li>))
              }
            </ul>
          }
        </div>
      </div>
    )
}