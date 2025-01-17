import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectProfileData } from './selectProfileData'
import { profileMock } from '@/6shared/const/mocks/profile'

describe('selectProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        profile: profileMock, isLoading: false
      }
    }
    expect(selectProfileData(state as StateSchema)).toEqual(profileMock)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectProfileData(state as StateSchema)).toBe(undefined)
  })
}
)
