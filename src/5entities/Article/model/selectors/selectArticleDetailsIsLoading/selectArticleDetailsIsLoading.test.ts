import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticleDetailsIsLoading } from './selectArticleDetailsIsLoading'

describe('selectArticleDetailsIsLoading', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: { isLoading: true },
        }
        expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(
            true,
        )
    })
})
