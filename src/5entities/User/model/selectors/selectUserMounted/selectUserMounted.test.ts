import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectUserMounted } from './selectUserMounted'

describe('selectUserMounted', () => {
  test('success', () => {
    const state: DeepPartial<StateSchema> = {
      user: { _mounted: true }
    }
    expect(selectUserMounted(state as StateSchema)).toBe(true)
  })
}
)
