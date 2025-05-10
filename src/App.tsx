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
import ResizableText from "./components/ResizableText";
import ImageGallery from "./components/ImageGallery";
import Counter from "./components/Counter";

// 导入图片资源
// import img1 from './assets/2020-11-05_154523.png';
// import img2 from './assets/2020-11-05_154535.png';
// import img3 from './assets/2020-11-05_154621.png';
// import img4 from './assets/2020-11-05_154624.png';
// import img5 from './assets/2020-11-05_154634.png';
// import img6 from './assets/2020-11-05_154636.png';
// import img7 from './assets/2020-11-05_154639.png';
// import img8 from './assets/2020-11-05_154656.png';
// import avatar from './assets/avator.png';
// import music from './assets/music.png';

function App() {

  // useEffect(() => { 
    // const root = document.getElementById('root');
    // console.log('root', root);
    // console.log('document', document);
  // })

  // const handleClick = (e: React.MouseEvent) => { 
  //   console.log('event.target', e.target);
  //   console.log('event currentTarget', e.currentTarget); // 绑定事件的元素
  //   console.log('event bubbles up to', e.nativeEvent.currentTarget);
  // }

  // const images = useMemo(() => {  
  //   return [
  //     { src: img1, alt: 'Image 1' },
  //     { src: img2, alt: 'Image 2' },
  //     { src: img3, alt: 'Image 3' },
  //     { src: img4, alt: 'Image 4' },
  //     { src: img5, alt: 'Image 5' },
  //     { src: img6, alt: 'Image 6' },
  //     { src: img7, alt: 'Image 7' },
  //     { src: img8, alt: 'Image 8' },
  //     { src: avatar, alt: 'Avatar' },
  //     { src: music, alt: 'Music' }
  //   ];
  // }, []);

  return (
    <div>
      {/* 测试冒泡的元素 */}
      {/* <div>
        <button onClick={ handleClick}>点击</button>
      </div> */}

      {/* <h2>测试一些面试中遇到的一些功能组件</h2> */}
      {/* <ResizableText>这是一段会根据容器宽度自动调整对齐方式的文本内容</ResizableText> */}
      {/* <ImageGallery images={images} /> */}
      {/* <Counter seconds={1000000} /> */}
      
      {/* <h2>复杂Hooks的使用</h2>
      <CommonHooks /> */}

      {/* <h2>从入门到精通</h2> */}
      {/* <From0To1 /> */}

      {/* <h2>性能优化</h2>
      <PerformanceDemo /> */}

      {/* <h2>测试动画</h2>
      <TransitionDemo /> */}

      {/* <h2>CSS 样式</h2>
      <CSSDemo /> */}

      {/* <h2>React 18 新特性</h2>
      <React18Demo /> */}

      {/* <h2>路由学习</h2>
      <RouterDemo /> */}

      {/* <h2>错误边界示例</h2>
      <ErrorHandingDemo /> */}

      {/* <h2>通信</h2>
      <MessageDemo /> */}

      {/* <h2>测试Hooks</h2>
      <TestHooks /> */}
    </div>
  );
}

export default App;
