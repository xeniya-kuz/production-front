// eslint-disable-next-line fsd-path-checker-sia355/layer-imports
import '@/1app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
)
