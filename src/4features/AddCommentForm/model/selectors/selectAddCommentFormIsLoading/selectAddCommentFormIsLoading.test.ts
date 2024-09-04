import { type StateSchema } from '1app/providers/StoreProvider'
import { selectAddCommentFormIsLoading } from './selectAddCommentFormIsLoading'

describe('selectAddCommentFormIsLoading', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: { isLoading: true }
    }
    expect(selectAddCommentFormIsLoading(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectAddCommentFormIsLoading(state as StateSchema)).toBe(undefined)
  })
}
)
