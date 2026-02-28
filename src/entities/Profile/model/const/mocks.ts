// иначе cypress ругается
import { Currency } from '@/entities/CurrencyDropdown/model/const/currency'
import { type Profile } from '../types/profile'
import { Country } from '@/entities/CountryDropdown/model/const/country'
import Avatar from '@/shared/assets/tests/avatar.jpg'

export const profileMock: Profile = {
    id: '3',
    firstname: 'Test',
    lastname: 'User',
    age: 20,
    username: 'test user',
    city: 'San Francisco',
    currency: Currency.EUR,
    country: Country.Armenia,
    avatar: Avatar,
}
