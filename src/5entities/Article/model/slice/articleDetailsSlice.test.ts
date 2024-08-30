import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { ArticleType } from '../types/article'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer } from './articleDetailsSlice'

const article =
    {
      id: '1',
      title: 'Javascript news',
      subtitle: 'Что нового в JS за 2022 год?',
      img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      views: 1022,
      createdAt: '26.02.2022',
      blocks: [],
      type: [ArticleType.IT]
    }

describe('articleDetailsSlice', () => {
  test('fetchArticleById pending', async () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'error'
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending
    )).toEqual({
      isLoading: true,
      error: undefined
    })
  })

  test('fetchArticleById fulfilled', async () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(article, fetchArticleById.fulfilled.type, '')
    )).toEqual({
      isLoading: false,
      article
    })
  })

  test('fetchArticleById rejected', async () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: undefined
    }

    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.rejected(null, fetchArticleById.rejected.type, '', 'error')
    )).toEqual({
      isLoading: false,
      error: 'error'
    })
  })
})
