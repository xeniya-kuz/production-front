import { createContext } from 'react'
import { Theme } from '../model/const/themes'

export interface ThemeContextProps {
  theme: Theme
  setTheme?: (theme: Theme) => void
}
export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.LIGHT })

export const LOCAL_STORAGE_THEME_KEY = 'theme'
