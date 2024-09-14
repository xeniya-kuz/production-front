import { type Article } from '5entities/Article'
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

  test('setPage', async () => {
    const state: DeepPartial<ArticlesPageSchema> = { page: 1 }

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      articlesPageActions.setPage(2)
    )).toEqual({ page: 2 })
  })

  // test('fetchArticlesList pending', async () => {
  //   const state: DeepPartial<ArticlesPageSchema> = {
  //     error: 'error',
  //     isLoading: false
  //   }

  //   expect(articlesPageReducer(
  //     state as ArticlesPageSchema,
  //     fetchArticlesList.pending
  //   )).toEqual({
  //     error: undefined,
  //     isLoading: true
  //   })
  // })

  test('fetchArticlesList fulfilled', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      hasMore: false,
      entities: {},
      ids: [],
      page: 1,
      limit: 2
    }

    const entities: any = {}
    articlesMock.forEach(article => {
      entities[article.id] = article
    })

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.fulfilled(articlesMock, '', {}, articlesAdapter)
    )).toEqual({
      isLoading: false,
      ids: ['0', '1', '2'],
      hasMore: true,
      entities,
      page: 1,
      limit: 2
    })
  })

  test('fetchArticlesList rejected', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      error: undefined,
      page: 2
    }

    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.rejected(null, fetchArticlesList.rejected.type, {}, 'error')
    )).toEqual({
      isLoading: false,
      error: 'error',
      page: 2
    })
  })
})
