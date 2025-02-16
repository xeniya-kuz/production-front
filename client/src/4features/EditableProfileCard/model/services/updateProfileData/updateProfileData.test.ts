import { TestAsyncThunk } from '@/6shared/lib/tests/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../../const/validate'
import { profileMock } from '@/5entities/Profile'

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editedProfile: profileMock
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileMock }))

    const result = await thunk.callThunk()

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileMock)
  })

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editedProfile: profileMock
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
        editedProfile: { ...profileMock, lastname: '' }
      }
    })

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.NAME])
  })
})
