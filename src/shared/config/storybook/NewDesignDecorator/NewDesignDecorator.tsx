import {
    getAllFeatureFlags,
    setFeatureFlags,
} from '@/shared/lib/features/lib/setGetFeatures'
import { type StoryContext, type StoryFn } from '@storybook/react'
import { type JSX } from 'react'

export const NewDesignDecorator = (
    StoryComponent: StoryFn<any>,
    context: StoryContext<any>,
): JSX.Element => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true })
    return StoryComponent(context.args, context)
}
