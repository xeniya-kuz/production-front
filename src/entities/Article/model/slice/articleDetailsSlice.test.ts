import { articleMock } from '../const/mocks'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer } from './articleDetailsSlice'

describe('articleDetailsSlice', () => {
    test('fetchArticleById pending', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error',
        }

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        })
    })

    test('fetchArticleById fulfilled', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        }

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(
                    articleMock,
                    fetchArticleById.fulfilled.type,
                    '',
                ),
            ),
        ).toEqual({
            isLoading: false,
            article: articleMock,
        })
    })

    test('fetchArticleById rejected', async () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            error: undefined,
        }

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.rejected(
                    null,
                    fetchArticleById.rejected.type,
                    '',
                    'error',
                ),
            ),
        ).toEqual({
            isLoading: false,
            error: 'error',
        })
    })
})
