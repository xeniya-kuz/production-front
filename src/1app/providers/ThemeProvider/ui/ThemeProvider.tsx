import { type FC, type ReactNode, useMemo, useState } from 'react'
import { ThemeContext } from '@/6shared/lib/context/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/6shared/const/localstorage'
import { Theme } from '@/6shared/const/themes'

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

interface ThemeProviderProps {
    // для тестирования
    initialTheme?: Theme
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

    // потому что ссылка на объект меняется на каждом рендере
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
