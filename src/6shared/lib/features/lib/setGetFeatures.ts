import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/6shared/const/localstorage'
import { type FeatureFlags } from '@/6shared/types/featureFlags'

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
}

let featureFlags: FeatureFlags = {
    ...defaultFeatures,
}

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
