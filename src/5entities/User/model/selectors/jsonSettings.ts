import { buildSelector } from '@/6shared/lib/store'
import { type JsonSettings } from '../types/jsonSettings'

const defaultJsonSettings: JsonSettings = {}

export const [useJsonSettings, getJsonSettings] = buildSelector((state) => {
    console.log('user', state.user)
    return state.user.authData?.jsonSettings ?? defaultJsonSettings
})
