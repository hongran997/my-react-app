import { useState, useTransition } from 'react';

export default function TransitionDemo() { 
    const [input, setInput] = useState('');
    const [list, setList] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInput(value);
      startTransition(() => { 
        const list = Array(1000).fill(value);
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