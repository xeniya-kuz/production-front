import { type StateSchema } from '1app/providers/StoreProvider'
import { selectEditedProfile } from './selectEditedProfile'
import { Currency } from '5entities/Currency'

describe('selectEditedProfile', () => {
  test('should edited profile', () => {
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
        editedProfile: profile
      }
    }
    expect(selectEditedProfile(state as StateSchema)).toEqual(profile)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectEditedProfile(state as StateSchema)).toBe(undefined)
  })
}
)
