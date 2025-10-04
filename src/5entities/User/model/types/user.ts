import { type FeatureFlags } from '@/6shared/types/featureFlags'
import { type UserRole } from '../const/userRole'
import { type JsonSettings } from './jsonSettings'

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
    features?: FeatureFlags
    jsonSettings?: JsonSettings
}

export interface UserSchema {
    authData?: User
    _mounted: boolean
}
