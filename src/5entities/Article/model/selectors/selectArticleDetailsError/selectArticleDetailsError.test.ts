import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectArticleDetailsError } from './selectArticleDetailsError'

describe('selectArticleDetailsError', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: 'Ошибка' }
    }
    expect(selectArticleDetailsError(state as StateSchema)).toEqual('Ошибка')
  })
}
)
