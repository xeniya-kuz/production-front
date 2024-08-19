import { type Country } from '5entities/Country'
import { type Currency } from '5entities/Currency'
export interface Profile {
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}
