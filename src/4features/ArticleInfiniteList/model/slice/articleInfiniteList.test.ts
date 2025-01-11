import { type Article } from '5entities/Article'
import { type ArticleInfiniteListSchema } from '../types/articleInfiniteListSchema'
import { articleInfiniteListActions, articleInfiniteListReducer } from './articleInfiniteListSlice'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { articlesMock } from '6shared/const/mocks/article'
import { createEntityAdapter } from '@reduxjs/toolkit'

describe('articleInfiniteListReducer', () => {
  jest.mock('@reduxjs/toolkit')
  const articlesAdapter = jest.mocked(createEntityAdapter<Article>({
    selectId: (article) => article.id
  }))

  test('setPage', async () => {
    const state: DeepPartial<ArticleInfiniteListSchema> = { page: 1 }

    expect(articleInfiniteListReducer(
      state as ArticleInfiniteListSchema,
      articleInfiniteListActions.setPage(2)
    )).toEqual({ page: 2 })
  })

  // test('fetchArticlesList pending', async () => {
  //   const state: DeepPartial<ArticleInfiniteListSchema> = {
  //     error: 'error',
  //     isLoading: false
  //   }

  //   expect(articleInfiniteListReducer(
  //     state as ArticleInfiniteListSchema,
  //     fetchArticlesList.pending
  //   )).toEqual({
  //     error: undefined,
  //     isLoading: true
  //   })
  // })

  test('fetchArticlesList fulfilled', async () => {
    const state: DeepPartial<ArticleInfiniteListSchema> = {
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

    expect(articleInfiniteListReducer(
      state as ArticleInfiniteListSchema,
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
    const state: DeepPartial<ArticleInfiniteListSchema> = {
      isLoading: true,
      error: undefined,
      page: 2
    }

    expect(articleInfiniteListReducer(
      state as ArticleInfiniteListSchema,
      fetchArticlesList.rejected(null, fetchArticlesList.rejected.type, {}, 'error')
    )).toEqual({
      isLoading: false,
      error: 'error',
      page: 2
    })
  })
})
