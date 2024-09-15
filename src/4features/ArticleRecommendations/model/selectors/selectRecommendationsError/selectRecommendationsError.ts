import { type StateSchema } from '1app/providers/StoreProvider'

export const selectRecommendationsError = (state: StateSchema): string | undefined => state.articleRecommendations?.error
