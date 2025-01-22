import { createContext } from 'react'
import { Theme } from '@/6shared/const/themes'

export interface ThemeContextProps {
  theme: Theme
  setTheme?: (theme: Theme) => void
}
export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.LIGHT })
