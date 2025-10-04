import { type FeatureFlags } from '@/6shared/types/featureFlags'
import { type UserRole } from '../const/userRole'

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
}

export interface UserSchema {
    authData?: User
    _mounted: boolean
}
