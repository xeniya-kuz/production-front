import { type Theme } from '1app/providers/ThemeProvider'
import { type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) =>
  function InnerDecorator (StoryComponent: StoryFn) {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    )
  }
