import { ThemeProvider, type Theme } from '1app/providers/ThemeProvider'
import { type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) =>
  function InnerDecorator (StoryComponent: StoryFn) {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        </ThemeProvider>
    )
  }
