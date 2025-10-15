import { setFeatureFlags } from '@/6shared/lib/features'
import { type FeatureFlags } from '@/6shared/types/featureFlags'
import { type JSX, type ReactNode } from 'react'

export const FeaturesFlagsDecorator = (features: FeatureFlags) =>
    function FeaturesFlagsDecorator(
        StoryComponent: () => ReactNode,
    ): JSX.Element {
        setFeatureFlags(features)
        return <StoryComponent />
    }
