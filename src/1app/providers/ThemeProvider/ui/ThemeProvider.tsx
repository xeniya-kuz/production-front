import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/6shared/lib/context/ThemeContext'
import { Theme } from '@/6shared/const/themes'
import { useJsonSettings } from '@/5entities/User'
import { LOCAL_STORAGE_THEME_KEY } from '@/6shared/const/localstorage'

interface ThemeProviderProps {
    // для тестирования
    initialTheme?: Theme
    children: ReactNode
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as
    | Theme
    | undefined

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const { theme: defaultTheme } = useJsonSettings()

    const [theme, setTheme] = useState<Theme>(
        initialTheme ?? fallbackTheme ?? Theme.LIGHT,
    )
    const [isThemeInited, setIsThemeInited] = useState(false)

    // TODO: оптимизировать, это непрозрачно
    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme)
            setIsThemeInited(true)
        }
    }, [defaultTheme, isThemeInited])

    useEffect(() => {
        // document.body.className = theme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

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
