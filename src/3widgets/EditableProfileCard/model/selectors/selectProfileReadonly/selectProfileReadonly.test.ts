import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectProfileReadonly } from './selectProfileReadonly'

describe('selectProfileReadonly', () => {
    test('should return profile readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        }
        expect(selectProfileReadonly(state as StateSchema)).toBe(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectProfileReadonly(state as StateSchema)).toBe(undefined)
    })
})
