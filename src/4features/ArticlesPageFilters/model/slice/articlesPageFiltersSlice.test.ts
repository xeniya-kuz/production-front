import { ArticleSortField, ArticleType, ArticleView } from '5entities/Article'
import { type ArticlesPageFiltersSchema } from '../types/articlesPageFiltersSchema'
import { articlesPageFiltersActions, articlesPageFiltersReducer } from './articlesPageFiltersSlice'

describe('articleInfiniteListReducer', () => {
  test('setView', async () => {
    const state: DeepPartial<ArticlesPageFiltersSchema> = {}

    expect(articlesPageFiltersReducer(
      state as ArticlesPageFiltersSchema,
      articlesPageFiltersActions.setView(ArticleView.LIST)
    )).toEqual({ view: ArticleView.LIST })
  })

  test('setOrder', async () => {
    const state: DeepPartial<ArticlesPageFiltersSchema> = {}

    expect(articlesPageFiltersReducer(
      state as ArticlesPageFiltersSchema,
      articlesPageFiltersActions.setOrder('asc')
    )).toEqual({ order: 'asc' })
  })

  test('setSearch', async () => {
    const state: DeepPartial<ArticlesPageFiltersSchema> = {}

    expect(articlesPageFiltersReducer(
      state as ArticlesPageFiltersSchema,
      articlesPageFiltersActions.setSearch('search')
    )).toEqual({ search: 'search' })
  })

  test('setSort', async () => {
    const state: DeepPartial<ArticlesPageFiltersSchema> = {}

    expect(articlesPageFiltersReducer(
      state as ArticlesPageFiltersSchema,
      articlesPageFiltersActions.setSort(ArticleSortField.CREATED)
    )).toEqual({ sort: ArticleSortField.CREATED })
  })

  test('setType', async () => {
    const state: DeepPartial<ArticlesPageFiltersSchema> = {}

    expect(articlesPageFiltersReducer(
      state as ArticlesPageFiltersSchema,
      articlesPageFiltersActions.setType(ArticleType.IT)
    )).toEqual({ type: ArticleType.IT })
  })
})
