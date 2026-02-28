import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk'
import { userMock } from '../const/mocks'
import { type JsonSettings } from '../types/jsonSettings'
import { saveJsonSettings } from './saveJsonSettings'

describe('saveJsonSettings', () => {
    const newSettings: JsonSettings = { isArticlesPageWasOpened: true }

    test('should reject when no user data in store', async () => {
        const thunk = new TestAsyncThunk(saveJsonSettings, {
            user: { _mounted: true },
        })

        const result = await thunk.callThunk(newSettings)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('No user data')
    })

    test('should return jsonSettings when API succeeds', async () => {
        const responseSettings: JsonSettings = { isArticlesPageWasOpened: true }
        const thunk = new TestAsyncThunk(saveJsonSettings, {
            user: { authData: userMock, _mounted: true },
        })
        thunk.dispatch.mockReturnValue({
            // TODO: комментарии
            unwrap: async () =>
                await Promise.resolve({
                    ...userMock,
                    jsonSettings: responseSettings,
                }),
        })

        const result = await thunk.callThunk(newSettings)

        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(responseSettings)
    })

    test('should reject when response has no jsonSettings', async () => {
        const thunk = new TestAsyncThunk(saveJsonSettings, {
            user: { authData: userMock, _mounted: true },
        })
        thunk.dispatch.mockReturnValue({
            unwrap: async () => await Promise.resolve({ ...userMock }),
        })

        const result = await thunk.callThunk(newSettings)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('No json settings')
    })

    test('should reject when API call fails', async () => {
        const thunk = new TestAsyncThunk(saveJsonSettings, {
            user: { authData: userMock, _mounted: true },
        })
        // TODO: комментарии
        thunk.dispatch.mockReturnValue({
            unwrap: async () =>
                await Promise.reject(new Error('Network error')),
        })

        const result = await thunk.callThunk(newSettings)

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('')
    })
})
