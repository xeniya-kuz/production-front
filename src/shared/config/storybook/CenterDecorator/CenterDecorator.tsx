import { type Decorator } from '@storybook/react'
import {
    getAllFeatureFlags,
    setFeatureFlags,
} from '@/shared/lib/features/lib/setGetFeatures'
import {
    DEPRECATED_CLASSNAME,
    REDESIGNED_CLASSNAME,
} from '@/shared/const/general'

export const CenterDecorator: Decorator = (Story, context) => {
    const isRedesigned = context.globals?.design !== 'deprecated'
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: isRedesigned })

    return (
        <div
            className={
                isRedesigned ? REDESIGNED_CLASSNAME : DEPRECATED_CLASSNAME
            }
            style={{
                width: '100%',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    height: 'stretch',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Story />
            </div>
        </div>
    )
}
