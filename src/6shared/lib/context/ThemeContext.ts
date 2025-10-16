import { createContext } from 'react'
import { Theme } from '@/6shared/const/themes'
import { LOCAL_STORAGE_THEME_KEY } from '@/6shared/const/localstorage'

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as
    | Theme
    | undefined

export interface ThemeContextProps {
    theme: Theme
    setTheme?: (theme: Theme) => void
}
export const ThemeContext = createContext<ThemeContextProps>({
    theme: fallbackTheme ?? Theme.DARK,
})
