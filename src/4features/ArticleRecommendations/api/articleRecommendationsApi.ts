import { rtkApi } from '6shared/api/rtkApi'

const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const useArticleRecommendations = articleRecommendationsApi.useGetArticleRecommendationsQuery
