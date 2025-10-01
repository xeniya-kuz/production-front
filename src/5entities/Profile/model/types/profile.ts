import { type Country } from '@/5entities/CountryDropdown'
import { type Currency } from '@/5entities/CurrencyDropdown'

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
