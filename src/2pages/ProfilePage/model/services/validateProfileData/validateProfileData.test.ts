import { Country } from '5entities/Country'
import { ValidateProfileError } from '../../types'
import { validateProfileData } from './validateProfileData'
import { Currency } from '5entities/Currency'

const profile = {
  first: 'Trevor',
  lastname: 'Smith',
  age: 20,
  username: 'tra-ta-ta',
  city: 'San Francisco',
  currency: Currency.EUR,
  country: Country.Armenia
}

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(profile)

    expect(result).toEqual([])
  })

  test('no first name', async () => {
    const result = validateProfileData({ ...profile, first: '' })

    expect(result).toEqual([ValidateProfileError.NAME])
  })

  test('no country', async () => {
    const result = validateProfileData({ ...profile, country: undefined })

    expect(result).toEqual([ValidateProfileError.COUNTRY])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...profile, age: 0 })

    expect(result).toEqual([ValidateProfileError.AGE])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidateProfileError.NAME,
      ValidateProfileError.AGE,
      ValidateProfileError.COUNTRY])
  })

  test('no data', async () => {
    const result = validateProfileData()

    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })
})
