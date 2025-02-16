import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticlesError } from './selectArticlesError'

describe('selectArticlesError', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articleInfiniteList: { error: 'error' }
    }
    expect(selectArticlesError(state as StateSchema)).toBe('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticlesError(state as StateSchema)).toBe(undefined)
  })
})
