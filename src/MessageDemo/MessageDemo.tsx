import Child from './Child';
import { ThemeProvider } from './ThemeContext';
import TestThemeContext from './TestThemeContext';
import ReduxDemo from './ReduxDemo/ReduxDemo';
  
export default function MessageDemo() { 


  const handleMessageFromChild = (count: number) => { 
    console.log('Parent Said: I received a count from Child: ' + count);
  }

  return (
    <div>
      <h3>props通信</h3>
      <Child message="Hello, Child" postMessage={handleMessageFromChild} />

      <h3>context通信</h3>
      <ThemeProvider>
        <TestThemeContext />
      </ThemeProvider>
      
      <h3>Redux 示例</h3>
      <ReduxDemo />
    </div>
  ) 
}