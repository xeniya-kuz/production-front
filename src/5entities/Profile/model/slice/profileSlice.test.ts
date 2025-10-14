import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services'
import { type ProfileSchema } from '../types/profile'
import { ValidateProfileError } from '../const/validate'
import { profileMock } from '../const/mocks'
import { Currency } from '@/5entities/CurrencyDropdown'

describe('profileSlice', () => {
    test('setReadonly', async () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({ readonly: true })
    })

    test('cancelEdit', async () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [],
            editedProfile: undefined,
            profile: profileMock,
        }

        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            editedProfile: profileMock,
            profile: profileMock,
        })
    })

    test('updateProfile', async () => {
        const state: DeepPartial<ProfileSchema> = {
            editedProfile: profileMock,
        }

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ currency: Currency.USD }),
            ),
        ).toEqual({
            editedProfile: { ...profileMock, currency: Currency.USD },
        })
    })

    test('updateProfileData pending', async () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.NAME],
        }

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            validateErrors: undefined,
            isLoading: true,
        })
    })

    test('updateProfileData fulfilled', async () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            profile: { ...profileMock, currency: Currency.USD },
            editedProfile: { ...profileMock, currency: Currency.USD },
        }

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(profileMock, ''),
            ),
        ).toEqual({
            isLoading: false,
            profile: profileMock,
            editedProfile: profileMock,
            readonly: true,
        })
    })
})
