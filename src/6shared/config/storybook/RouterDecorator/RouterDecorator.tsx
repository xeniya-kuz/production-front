import '1app/styles/index.scss'
import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// export const StyleDecorator = (story: () => StoryFn) => story()
export const RouterDecorator = (Story: StoryFn): JSX.Element =>
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
