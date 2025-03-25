import AsyncErrorExample from "./AsyncErrorExample";
import ErrorBoundary from "./ErrorBoundary"
import { useState } from 'react';
import BuggerCounter from "./BuggerCounter";

export default function ErrorHandlingDemo() { 
  const [isRender, setIsRender] = useState(false);

  const handleToggle = () => { 
    setIsRender(true);
  }

  return (
    <ErrorBoundary>
      <BuggerCounter></BuggerCounter>

      <button onClick={handleToggle}>是否渲染AsyncErrorExample组件</button>
      { 
        isRender ? <AsyncErrorExample /> : null
      }
      
    </ErrorBoundary>
  )
}