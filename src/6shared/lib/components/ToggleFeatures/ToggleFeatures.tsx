import { type FeatureFlags } from '@/6shared/types/featureFlags'
import { memo, type ReactElement } from 'react'
import { getFeatureFlag } from '../../features'

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags
    on: ReactElement
    off: ReactElement
}

export const ToggleFeatures = memo(function ToggleFeatures(
    props: ToggleFeaturesProps,
): ReactElement {
    const { feature, on, off } = props

    if (getFeatureFlag(feature)) {
        return on
    }

    return off
})
