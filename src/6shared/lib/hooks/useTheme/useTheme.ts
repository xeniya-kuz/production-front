import { useCallback, useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Theme } from '@/6shared/const/themes'
import { LOCAL_STORAGE_THEME_KEY } from '@/6shared/const/localstorage'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            document.body.className = theme
        }
    }, [theme])

    const toggleTheme = useCallback((): void => {
        let newTheme: Theme
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                newTheme = Theme.DARK
                break
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }, [setTheme, theme])

    return { theme, toggleTheme }
}
