import { useContext } from 'react';
import { ThemeContext, ThemeStyle } from './ThemeContext';

export default function TestThemeContext() {

  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => { 
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  console.log(theme);

  return (
    <div style={{...ThemeStyle[theme as keyof typeof ThemeStyle]}}>
      <p>当前主题： {theme}</p>
      <button onClick={handleThemeChange}> 切换主题</button>
    </div>
    
  )
}