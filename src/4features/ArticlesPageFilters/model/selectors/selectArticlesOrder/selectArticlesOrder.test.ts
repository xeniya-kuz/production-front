import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticlesOrder } from './selectArticlesOrder'

describe('selectArticlesOrder', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPageFilters: { order: 'desc' },
        }
        expect(selectArticlesOrder(state as StateSchema)).toBe('desc')
    })
})
