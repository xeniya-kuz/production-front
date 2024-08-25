import { type StateSchema } from '1app/providers/StoreProvider'
import { selectProfileData } from './selectProfileData'
import { Currency } from '5entities/Currency'

describe('selectProfileData', () => {
  test('should return profile data', () => {
    const profile = {
      first: 'Trevor',
      lastname: 'Smith',
      age: 20,
      username: 'tra-ta-ta',
      city: 'San Francisco',
      currency: Currency.EUR
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        profile, isLoading: false
      }
    }
    expect(selectProfileData(state as StateSchema)).toEqual(profile)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectProfileData(state as StateSchema)).toBe(undefined)
  })
}
)
