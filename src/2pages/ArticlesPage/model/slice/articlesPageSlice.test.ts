import { type Article, ArticleView } from '5entities/Article'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { articlesMock } from '6shared/const/mocks/article'
import { createEntityAdapter } from '@reduxjs/toolkit'

describe('articlesPageSlice', () => {
  jest.mock('@reduxjs/toolkit')
  const articlesAdapter = jest.mocked(createEntityAdapter<Article>({
    selectId: (article) => article.id
  }))

  test('setView', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {}

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      articlesPageActions.setView(ArticleView.LIST)
    )).toEqual({ view: ArticleView.LIST })
  })

  test('setPage', async () => {
    const state: DeepPartial<ArticlesPageSchema> = { page: 1 }

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      articlesPageActions.setPage(2)
    )).toEqual({ page: 2 })
  })

  test('fetchArticlesList pending', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      error: 'error',
      isLoading: false
    }

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.pending
    )).toEqual({
      error: undefined,
      isLoading: true
    })
  })

  test('fetchArticlesList fulfilled', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      hasMore: false,
      entities: {},
      ids: []
    }

    const entities: any = {}
    articlesMock.forEach(article => {
      entities[article.id] = article
    })

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.fulfilled(articlesMock, '', { page: 1 }, articlesAdapter)
    )).toEqual({
      isLoading: false,
      ids: ['0', '1', '2'],
      hasMore: true,
      entities
    })
  })

  test('fetchArticlesList rejected', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      error: undefined
    }

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.rejected(null, fetchArticlesList.rejected.type, { page: 2 }, 'error')
    )).toEqual({
      isLoading: false,
      error: 'error'
    })
  })
})
