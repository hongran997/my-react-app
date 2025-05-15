import { useState, useCallback, useEffect } from 'react';
export default function DeepCounter() {
  
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);


  const onBtnClick = useCallback(() => { 
    setValue1(prev => prev + 1);
  }, [value1])

  // 这两种写法相同，都会在value1更新后，更新value2, 更新的时候取的是最新的value1值。
  // useEffect(() => { setValue2(value1), console.log(value1) }, [value1])
  // useEffect(() => setValue2(value1), [value1])


  // 这两种写法的话，value2会在value1更新后，更新value2, 更新的时候取的是旧的value1值。
  // 所以并不能起到更新value2的作用
  // useEffect(() => {
  //   return () => setValue2(value1)
  // }, [value1])

  // useEffect(() => {
  //   return () => { 
  //     setValue2(value1);
  //   }
  // }, [value1])
  
  // useEffect(() => {
  //   return setValue2(value1);
  //   // 这样写的话，和 setValue2(value1) 是一样的，相当于第7阶段，会立刻执行
  //   // 这个钩子没有清理函数， setValue2(value1) 返回的是undefined
  //   // 如果要使用清理函数，必须返回一个函数
  // }, [value1])
  
  useEffect(() => { 
    console.log('1');
    // useEffect 的清理函数只会在组件卸载或者依赖项发生变化导致页面重新渲染时执行
    return () => {
      console.log('2');
    }
    // return console.log('2');
  }, [value1])


  // 1. 状态变化 setValue1
  // 2. useLayoutEffect 清理函数
  // 3. useEffect 清理函数
  // 4. 组件渲染
  // 5. useLayoutEffect函数
  // 6. 页面绘制
  // 7. useEffect函数

  // 页面再更新

  return (
    <div>
      <label>{value1} / {value2}</label>
      <button onClick={onBtnClick}>点击</button>
    </div>
  )
}