import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticleDetails } from './selectArticleDetails'
import { articleMock } from '../../const/mocks'

describe('selectArticleDetails', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { article: articleMock }
    }
    expect(selectArticleDetails(state as StateSchema)).toEqual(articleMock)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectArticleDetails(state as StateSchema)).toBe(undefined)
  })
}
)
