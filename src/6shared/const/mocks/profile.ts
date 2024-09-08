import { Country } from '5entities/Country'
import { Currency } from '5entities/Currency'
import { type Profile } from '5entities/Profile'

export const profileMock: Profile = {
  first: 'Trevor',
  lastname: 'Smith',
  age: 20,
  username: 'tra-ta-ta',
  city: 'San Francisco',
  currency: Currency.EUR,
  country: Country.Armenia
}
