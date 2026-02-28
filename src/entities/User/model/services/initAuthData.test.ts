import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { userMock } from '../const/mocks'
import { initAuthData } from './initAuthData'

describe('initAuthData', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    test('should reject when no userId in localStorage', async () => {
        const thunk = new TestAsyncThunk(initAuthData)
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null)

        const result = await thunk.callThunk(undefined as void)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('No user id')
    })

    test('should return user data when userId exists and API succeeds', async () => {
        const thunk = new TestAsyncThunk(initAuthData)
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(userMock.id)
        thunk.dispatch.mockReturnValue({
            unwrap: async () => await Promise.resolve(userMock),
        })

        const result = await thunk.callThunk(undefined as void)

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userMock)
    })

    test('should reject when API call fails', async () => {
        const thunk = new TestAsyncThunk(initAuthData)
        // TODO: добавить комментарии
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(userMock.id)
        // TODO: добавить комментарии
        thunk.dispatch.mockReturnValue({
            // TODO: добавить комментарии
            unwrap: async () => await Promise.reject(new Error('Server error')),
        })

        const result = await thunk.callThunk(undefined as void)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('')
    })
})
