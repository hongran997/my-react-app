// 练习2：创建一个待办事项列表

// 难度：初级

// 创建一个简单的待办事项列表
// 输入框添加新任务
// 显示所有任务
// 可以删除任务
// 可以标记任务为已完成

// 这个练习将帮助你理解：
// 数组状态管理
// 列表渲染

import { Fragment, useState, useRef } from "react"

export default function TodoList() {

  const inputRef = useRef<HTMLInputElement>(null);

  const [list, setList] = useState([
    { id: 1, text: '洗碗', done: false },
    { id: 2, text: '刷牙', done: false },
    { id: 3, text: '洗衣服', done: false},
  ]);

  const handleAdd = () => { 
    if (inputRef?.current?.value) { 
      const item = {id: list[list.length-1].id + 1, text: inputRef?.current?.value, done: false}
      setList([...list, item]);
      inputRef.current.value = '';
    }
  }

  const handleToggle = (id: number) => {
    const item = list.find(item => item.id === id);
    if (item) { 
      item.done = !item?.done;
      setList([...list]);
    }
  }

  const handleDelete = (id: number) => { 
    setList(list.filter(item => item.id !== id));
  }

  return (
    <Fragment>
      <h5>初级：TODO</h5>
      <input ref={ inputRef }></input>
      <button onClick={ handleAdd }>添加TODO</button>
      <ul>
          { 
            list.map(item => (
              <li key={`${item.id}-${item.text}`}>
                <input type="checkbox" checked={item.done} onChange={ () => handleToggle(item.id)}></input>
                {item.text}
                <button onClick={() => handleDelete(item.id)}>-</button>
              </li>
            ))
          }
      </ul>
    </Fragment>
  )
}