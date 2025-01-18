import { type Rating } from '@/5entities/Rating'
import { rtkApi } from '@/6shared/api/rtkApi'

interface GetArticleRating {
  userId: string
  articleId: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetArticleRating>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      })
    }),
    rateArticle: build.mutation<Rating[], GetArticleRating & Rating>({
      query: (args) => ({
        url: '/article-ratings',
        method: 'POST',
        body: args
      })
    })
  })
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
