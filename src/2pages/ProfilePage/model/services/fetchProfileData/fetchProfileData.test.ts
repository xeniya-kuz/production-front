import { TestAsyncThunk } from '6shared/lib/tests/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'
import { Currency } from '5entities/Currency'

const profile = {
  first: 'Trevor',
  lastname: 'Smith',
  age: 20,
  username: 'tra-ta-ta',
  city: 'San Francisco',
  currency: Currency.EUR
}

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }))

    const result = await thunk.callThunk('1')

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profile)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
