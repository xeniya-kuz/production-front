import { type Article } from '@/5entities/Article'
import { rtkApi } from '@/6shared/api/rtkApi'

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
})

export const useArticleRecommendations =
    articleRecommendationsApi.useGetArticleRecommendationsQuery
