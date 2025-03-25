import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
// ReactDom.render(<App />, rootElement);
const root = ReactDom.createRoot(rootElement as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>)
// root.render(<App />);


// 错误：处理全局错误
window.addEventListener('error', function (event) { 
  console.log('Something went wrong, catched By onerror event listener', event);
})

// 错误：处理异步代码Promise 错误
window.addEventListener('unhandledrejection', function (event) { 
  console.log('未处理的Promise 拒绝:', event.reason);
})