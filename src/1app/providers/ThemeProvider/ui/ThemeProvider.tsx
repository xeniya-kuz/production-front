import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/6shared/lib/context/ThemeContext'
import { Theme } from '@/6shared/const/themes'
import { useJsonSettings } from '@/5entities/User'

interface ThemeProviderProps {
    // для тестирования
    initialTheme?: Theme
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const { theme: defaultTheme } = useJsonSettings()

    const [theme, setTheme] = useState<Theme>(initialTheme ?? Theme.LIGHT)
    const [isThemeInited, setIsThemeInited] = useState(false)

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme)
            setIsThemeInited(true)
        }
    }, [defaultTheme, isThemeInited])

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
