import { type FeatureFlags } from '@/6shared/types/featureFlags'

let featureFlags: FeatureFlags = {}

//! Фичи в ходе сессии не меняются, их необязательно делать реактивными
export function setFeatureFlags(newFeatureFlags?: FeatureFlags): void {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags): boolean | undefined {
    return featureFlags[flag]
}

export function getAllFeatureFlags(): FeatureFlags {
    return featureFlags
}
