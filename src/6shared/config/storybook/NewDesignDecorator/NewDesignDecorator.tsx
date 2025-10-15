import {
    getAllFeatureFlags,
    setFeatureFlags,
} from '@/6shared/lib/features/lib/setGetFeatures'
import { type StoryContext, type StoryFn } from '@storybook/react'
import { type JSX } from 'react'

export const NewDesignDecorator = (
    StoryComponent: StoryFn<any>,
    context: StoryContext<any>,
): JSX.Element => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true })
    return (
        <div
            className="app_redesigned"
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {StoryComponent(context.args, context)}
        </div>
    )
}
