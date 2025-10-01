import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectEditedProfile } from './selectEditedProfile'
import { profileMock } from '@/5entities/Profile'

describe('selectEditedProfile', () => {
    test('should edited profile', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                editedProfile: profileMock,
            },
        }
        expect(selectEditedProfile(state as StateSchema)).toEqual(profileMock)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectEditedProfile(state as StateSchema)).toBe(undefined)
    })
})
