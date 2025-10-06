import { useCallback, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Theme } from '@/6shared/const/themes'

interface UseThemeResult {
    toggleTheme: (saveAction: (theme: Theme) => void) => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = useCallback(
        (saveAction: (theme: Theme) => void): void => {
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
            saveAction?.(newTheme)
        },
        [setTheme, theme],
    )

    return { theme, toggleTheme }
}
