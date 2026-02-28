import { type StateSchema } from '@/app/providers/StoreProvider'
import { selectArticlesType } from './selectArticlesType'
import { ArticleType } from '@/entities/Article'

describe('selectArticlesType', () => {
    test('success', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPageFilters: { type: ArticleType.IT },
        }
        expect(selectArticlesType(state as StateSchema)).toBe(ArticleType.IT)
    })
})
