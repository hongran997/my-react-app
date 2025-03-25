import { useState, useDeferredValue } from 'react';

export default function UseDeferredValueDemo() {
  const [text, setText] = useState('');
  const deferredValue = useDeferredValue(text);

  const handleChange = (e) => { 
    setText(e.target.value);
  }

  return (
    <div>
      请输入：<input onChange={handleChange}></input>
      预览：{deferredValue || '正在输入。。。'}
      { 
        text !== deferredValue && <p>更新中。。。</p>
      }
    </div>
  )
}