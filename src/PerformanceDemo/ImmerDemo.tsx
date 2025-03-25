import { isDraft, produce } from 'immer';
import { useRef } from 'react';
import { useImmer } from 'use-immer';

export default function ImmerDemo() {
  const baseState = { name: 'xiaohong', age: 12 };

  const nextState = produce(baseState, draft => {
    draft.age += 1,
      draft.name = 'xiaoming';
  })

  // console.log(baseState);
  // console.log(nextState);

  // 对象
  // const [user, updateUser] = useImmer({
  //   name: 'John',
  //   age: 12,
  //   preference: {
  //     theme: 'light',
  //     notifications: true,
  //   }
  // })

  // const handleToggleTheme = () => { 
  //   updateUser(draft => { draft.preference.theme = draft.preference.theme === 'light' ? 'dark' : 'light' });
  // }

  // const handleIncrementAge = () => { 
  //   updateUser(draft => { draft.age += 1})
  // }
  
  
  // 数组
  // const [todos, updateTodos] = useImmer([
  //   { id: 1, text: 'Learn Immer', done: false },
  //   { id: 2, text: 'Use Immer', done: false }]);
  
  // const inputRef = useRef<HTMLInputElement>(null);
  
  // const addTodo = () => { 
  //   if (!inputRef.current?.value) return;
  //   const item = { id: todos.length + 1, text: inputRef.current?.value, done: false };
  //   updateTodos(draft => { draft.push(item) });
  //   inputRef.current.value = '';
  // }

  // const handleToggle = function(id: number) { 
  //   updateTodos(draft => {
  //     const item = draft.find(item => item.id === id);
  //     if (item) { 
  //       item.done = !item.done;
  //     }
  //   })
  // }

  // const handleDelete = function (id: number) { 
  //   updateTodos(draft => { 
  //     const index = draft.findIndex(item => item.id === id);
  //     if (index > -1) { 
  //       draft.splice(index, 1);
  //     }
  //   })
  // }
  
  // 复杂数据结构
  // const [state, setState] = useImmer({
  //   organization: {
  //     name: 'Acme Corp',
  //     departments: {
  //       engineering: {
  //         teams: [
  //           {
  //             id: 1,
  //             name: 'Frontend',
  //             members: [
  //               { id: 1, name: 'John' },
  //               { id: 2, name: 'Jane' }
  //             ]
  //           }
  //         ]
  //       }
  //     }
  //   }
  // });

  // const handleAddTeam = () => { 
  //   setState(draft => { 
  //     let team = draft.organization.departments.engineering.teams.find(item => item.id === 1);
  //     if (team) { 
  //       const newM = { id: team.members.length + 1, name: 'Hongran' };
  //       team.members.push(newM);
  //     }
  //   })
  // }

  // console.log(state);

  // const handleUpdateTeam = () => { 
  //   setState(draft => { 
  //     let team = draft.organization.departments.engineering.teams.find(item => item.id == 1);
  //     if (team) { 
  //       let toUpdateM = team.members.find(item => item.name == 'John');
  //       if (toUpdateM) { 
  //         toUpdateM.name = 'Tom';
  //       }
  //     }
  //   })
  // }

  // console.log(state);
  
  // 条件更新
  const [userList, setUserlist] = useImmer({
    users: [
      { id: 1, name: 'John', active: true },
      { id: 2, name: 'Jane', active: false},
    ]
  })

  const handleToggleName = () => { 
    setUserlist(draft => { 
      draft.users.forEach(item => { 
        if (item.active) { 
          item.name = 'New ' + item.name;
        }
      })
    })
  }


  return (
    <div>
      <h6>ImmerDemo</h6>
      {/* 对象 */}
      {/* <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.preference.theme}</p>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <button onClick={handleIncrementAge}>Increment Age</button> */}
      {/* 数组 */}
      {/* 请输入：<input ref={ inputRef }></input>
      <button onClick={addTodo}>添加新的TODO</button>
      <ul>
        { 
          todos.map(item => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={ () => handleToggle(item.id) }></input>
              {item.text}
              <button onClick={() => handleDelete(item.id)}>-</button>
            </li>
          ))
        }
      </ul> */}
      {/* redux */}
      {/* 复杂数据结构 */}
      {/* <button onClick={handleAddTeam}>添加Team</button> 
      <button onClick={handleUpdateTeam}>更新Team</button> */}
      {/* 条件更新 */}
      <ul>
        { 
          userList.users.map((item, index) => (
            <li key={index}>{item.name}<button onClick={ handleToggleName }>Toggle</button></li>
          ))
        }
      </ul>
    </div>
  )
}