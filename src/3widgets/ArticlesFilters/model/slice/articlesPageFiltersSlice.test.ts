import { ArticleSortField, ArticleType } from '@/5entities/Article'
import { type ArticlesPageFiltersSchema } from '../types/articlesPageFiltersSchema'
import {
    articlesFiltersActions,
    articlesFiltersReducer,
} from './articlesPageFiltersSlice'

describe('articleInfiniteListReducer', () => {
    test('setOrder', async () => {
        const state: DeepPartial<ArticlesPageFiltersSchema> = {}

        expect(
            articlesFiltersReducer(
                state as ArticlesPageFiltersSchema,
                articlesFiltersActions.setOrder('asc'),
            ),
        ).toEqual({ order: 'asc' })
    })

    test('setSearch', async () => {
        const state: DeepPartial<ArticlesPageFiltersSchema> = {}

        expect(
            articlesFiltersReducer(
                state as ArticlesPageFiltersSchema,
                articlesFiltersActions.setSearch('search'),
            ),
        ).toEqual({ search: 'search' })
    })

    test('setSort', async () => {
        const state: DeepPartial<ArticlesPageFiltersSchema> = {}

        expect(
            articlesFiltersReducer(
                state as ArticlesPageFiltersSchema,
                articlesFiltersActions.setSort(ArticleSortField.CREATED),
            ),
        ).toEqual({ sort: ArticleSortField.CREATED })
    })

    test('setType', async () => {
        const state: DeepPartial<ArticlesPageFiltersSchema> = {}

        expect(
            articlesFiltersReducer(
                state as ArticlesPageFiltersSchema,
                articlesFiltersActions.setType(ArticleType.IT),
            ),
        ).toEqual({ type: ArticleType.IT })
    })
})
