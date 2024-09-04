import { type StateSchema } from '1app/providers/StoreProvider'

export const selectAddCommentFormIsLoading = (state: StateSchema): boolean | undefined => state.addCommentForm?.isLoading
