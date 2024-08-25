import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'
import { Currency } from '5entities/Currency'
import { Country } from '5entities/Country'
import { ValidateProfileError } from '../../types'

const profile = {
  first: 'Trevor',
  lastname: 'Smith',
  age: 20,
  username: 'tra-ta-ta',
  city: 'San Francisco',
  currency: Currency.EUR,
  country: Country.Armenia
}

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editedProfile: profile
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profile }))

    const result = await thunk.callThunk()

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editedProfile: profile
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER])
  })

  test('validate lastname error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editedProfile: { ...profile, lastname: '' }
      }
    })

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.NAME])
  })
})
