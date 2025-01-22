import { Currency } from '@/5entities/CurrencyDropdown'
import { type Profile } from '../types/profile'
import { Country } from '@/5entities/CountryDropdown'

export const profileMock: Profile = {
  firstname: 'Trevor',
  lastname: 'Smith',
  age: 20,
  username: 'tra-ta-ta',
  city: 'San Francisco',
  currency: Currency.EUR,
  country: Country.Armenia,
  id: '1'
}
