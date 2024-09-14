import { type Country } from '4features/CountryDropdown'
import { type Currency } from '4features/CurrencyDropdown'

export interface Profile {
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
  id?: string
}
