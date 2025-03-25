import { createContext, SetStateAction, Dispatch, useState } from "react"

export const ThemeContext = createContext<{ theme: string, setTheme: Dispatch<SetStateAction<string>> }>({ theme: 'light', setTheme: () => { } })

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return <ThemeContext.Provider value={{theme, setTheme}}>{ children }</ThemeContext.Provider>
}

export const ThemeStyle = {
  light: {
    backgroundColor: '#ffffff', 
    color: '#333333',
  },
  dark: {
    backgroundColor: '#333333',
    color: '#ffffff',
  }
}