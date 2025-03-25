import React from 'react';

// 错误：处理渲染错误
export default class ErrorBoundary extends React.Component{ 

  constructor(props) { 
    super(props);
    this.state = {hasError: false}
  }

  static getDerivedStateFromError() { 
    return { hasError: true };
  }

  componentDidCatch() { 
    // 上传或者打印
  }

  render() { 
    if (this.state.hasError) {
      return <p>Something went wrong!</p>
    } else { 
      return this.props.children
    }
  }
}