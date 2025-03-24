import React, {createContext, useState, useContext, useEffect, ReactNode} from 'react'
import {Appearance, useColorScheme} from 'react-native'
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native'

import {lightTheme, darkTheme, Theme} from '@/themes'
import {ThemeContextType} from '@/contexts/interfaces/theme'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  let colorScheme = useColorScheme()

  const [theme, setTheme] = useState<Theme>(colorScheme === 'dark' ? darkTheme : lightTheme)

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme: newColorScheme}) => setTheme(newColorScheme === 'dark' ? darkTheme : lightTheme))
    return () => subscription.remove()
  }, [])

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme))

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
