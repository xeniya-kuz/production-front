import { type StateSchema } from '1app/providers/StoreProvider'

export const selectAddCommentFormText = (state: StateSchema): string | undefined => state.addCommentForm?.comment
