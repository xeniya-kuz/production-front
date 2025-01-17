import { Country } from '@/4features/CountryDropdown'
import { Currency } from '@/4features/CurrencyDropdown'
import { type Profile } from '@/5entities/Profile'

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
