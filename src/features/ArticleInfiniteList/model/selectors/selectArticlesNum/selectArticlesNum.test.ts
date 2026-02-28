import { type StateSchema } from '@/app/providers/StoreProvider'
import { selectArticlesNum } from './selectArticlesNum'

describe('selectArticlesNum', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            articleInfiniteList: { page: 2 },
        }
        expect(selectArticlesNum(state as StateSchema)).toBe(2)
    })
})
