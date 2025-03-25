import { Fragment , useState} from "react";

import './innerStyle.css'; //全局生效

import './innerStyle.module.css'; // webpack 配置之后，仅在当前组件生效

import { TitleDiv, ArticleSpan } from './style.js';

export default function InnerStyle() {
  
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <Fragment>
      <div style={{ flex: 1, border: '1px solid red' }}>行内样式 - Hello World!</div>
      <div className="title">module 样式 - 不生效，还没配webpack</div>
      <div className="desc">全局 样式</div>
      <hr />
      <TitleDiv>css-in-js 我是title</TitleDiv>
      <ArticleSpan>css-in-js 我是文章</ArticleSpan>
      <hr />
      <div style={{ display: `${isDisplay ? 'block' : 'none'}` }}>不显示</div>
      <button onClick={ () => setIsDisplay(value => !value)}>{ isDisplay ? '隐藏' : '显示'}</button>
    </Fragment>
    
    
  )
}