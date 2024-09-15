import { type StateSchema } from '1app/providers/StoreProvider'

export const selectRecommendationsIsLoading = (state: StateSchema): boolean | undefined => state.articleRecommendations?.isLoading
