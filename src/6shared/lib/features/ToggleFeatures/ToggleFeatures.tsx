import { memo, type ReactElement } from 'react'
import { type FeatureFlags } from '../../../types/featureFlags'
import { getFeatureFlag } from '../setGetFeatures'

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
