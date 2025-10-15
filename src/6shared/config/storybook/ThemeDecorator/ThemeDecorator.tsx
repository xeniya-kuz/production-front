import { ThemeProvider } from '@/1app/providers/ThemeProvider'
import { type Theme } from '@/6shared/const/themes'
import { type StoryContext, type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) =>
    function ThemeDecorator(
        StoryComponent: StoryFn<any>,
        context: StoryContext<any>,
    ) {
        return (
            // initialTheme для тестирования
            <ThemeProvider initialTheme={theme}>
                <div
                    className={`app ${theme}`}
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {StoryComponent(context.args, context)}
                </div>
            </ThemeProvider>
        )
    }
