/* eslint-disable react/display-name */
import React from 'react'
import { useJsonSettings } from '@/5entities/User'
import ThemeProvider from './ThemeProvider'

export const withTheme = function (Component: React.ComponentType) {
    return () => {
        const { theme: defaultTheme } = useJsonSettings()
        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Component />
            </ThemeProvider>
        )
    }
}
