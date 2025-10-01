import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticlesLimit } from './selectArticlesLimit'

describe('selectArticlesLimit', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            articleInfiniteList: { limit: 5 },
        }
        expect(selectArticlesLimit(state as StateSchema)).toBe(5)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectArticlesLimit(state as StateSchema)).toBe(undefined)
    })
})
