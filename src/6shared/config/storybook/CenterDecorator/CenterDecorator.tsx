import { type Decorator } from '@storybook/react'
import {
    getAllFeatureFlags,
    setFeatureFlags,
} from '@/6shared/lib/features/lib/setGetFeatures'

export const CenterDecorator: Decorator = (Story, context) => {
    const isRedesigned = context.globals?.design !== 'deprecated'
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: isRedesigned })

    return (
        <div
            className={isRedesigned ? 'app_redesigned' : 'app'}
            style={{
                width: '100%',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Story />
        </div>
    )
}
