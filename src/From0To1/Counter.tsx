// 练习1：创建一个简单的计数器
// 难度：入门
// 创建一个包含以下功能的计数器：
// 显示当前数字
// 有"+1"和"-1"按钮
// 一个"重置"按钮
// 这个练习将帮助你理解：
// useState Hook的基本使用
// 事件处理
// 基本的JSX语法
import { useState, Fragment } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <h5>入门：Counter</h5>
      <p>Count: {count}
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>重置</button></p>
    </Fragment>
  )
}