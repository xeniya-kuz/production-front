import { type Country } from '@/5entities/CountryDropdown'
import { type Currency } from '@/5entities/CurrencyDropdown'
import { type ValidateProfileError } from '../const/validate'

export interface Profile {
    firstname?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
    id?: string
}

export interface ProfileSchema {
    profile?: Profile
    editedProfile?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
