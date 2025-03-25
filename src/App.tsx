import { useState, useMemo, useRef, useContext, useEffect } from "react";
import MessageDemo from './MessageDemo/MessageDemo';
import RouterDemo from './RouterDemo/index';
import PerformanceDemo from './PerformanceDemo/index';
import ErrorHandingDemo from './ErrorBoundary/ErrorHandlingDemo';
import React18Demo from './React18Demo';
import CSSDemo from './CSSDemo';
import TransitionDemo from './TransitionDemo';
import TestHooks from './TestHooks';
import From0To1 from './From0To1/index';
import CommonHooks from "./CommonHooks";

function App() {

  useEffect(() => { 
    const root = document.getElementById('root');
    // console.log('root', root);
    // console.log('document', document);
  })

  const handleClick = (e: React.MouseEvent) => { 
    console.log('event.target', e.target);
    console.log('event currentTarget', e.currentTarget); // 绑定事件的元素
    console.log('event bubbles up to', e.nativeEvent.currentTarget);
  }

  return (
    <div>
      {/* 测试冒泡的元素 */}
      {/* <div>
        <button onClick={ handleClick}>点击</button>
      </div> */}
      
      <h2>复杂Hooks的使用</h2>
      {/* <CommonHooks /> */}

      <h2>从入门到精通</h2>
      <From0To1 />
      

      <h2>性能优化</h2>
      {/* <PerformanceDemo /> */}

      <h2>测试动画</h2>
      {/* <TransitionDemo /> */}

      <h2>CSS 样式</h2>
      {/* <CSSDemo /> */}

      <h2>React 18 新特性</h2>
      {/* <React18Demo /> */}

      <h2>路由学习</h2>
      {/* <RouterDemo /> */}

      <h2>错误边界示例</h2>
      {/* <ErrorHandingDemo /> */}

      <h2>通信</h2>
      {/* <MessageDemo /> */}

      <h2>测试Hooks</h2>
      {/* <TestHooks /> */}
    </div>
  );
}

export default App;
