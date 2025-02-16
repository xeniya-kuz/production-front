// eslint-disable-next-line fsd-path-checker-sia355/layer-imports
import '@/1app/styles/index.scss'
import { type StoryFn } from '@storybook/react'
import { type JSX } from 'react'

// export const StyleDecorator = (story: () => StoryFn) => story()
export const StyleDecorator = (Story: StoryFn): JSX.Element => <Story/>
