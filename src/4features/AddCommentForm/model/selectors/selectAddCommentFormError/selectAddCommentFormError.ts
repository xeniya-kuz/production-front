import { type StateSchema } from '1app/providers/StoreProvider'

export const selectAddCommentFormError = (state: StateSchema): string | undefined => state.addCommentForm?.error
