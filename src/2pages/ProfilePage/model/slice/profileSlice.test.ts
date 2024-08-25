import { Currency } from '5entities/Currency'
import { ValidateProfileError, type ProfileSchema } from '../types'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services'

const profile = {
  first: 'Trevor',
  lastname: 'Smith',
  age: 20,
  username: 'tra-ta-ta',
  city: 'San Francisco',
  currency: Currency.EUR
}

describe('profileSlice', () => {
  test('setReadonly', async () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true })
  })

  test('cancelEdit', async () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: [],
      editedProfile: undefined,
      profile
    }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      editedProfile: profile,
      profile
    })
  })

  test('updateProfile', async () => {
    const state: DeepPartial<ProfileSchema> = {
      editedProfile: profile
    }

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ currency: Currency.USD })
    )).toEqual({
      editedProfile: { ...profile, currency: Currency.USD }
    })
  })

  test('updateProfileData pending', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.NAME]
    }

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      validateErrors: undefined,
      isLoading: true
    })
  })

  test('updateProfileData fulfilled', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      profile: { ...profile, currency: Currency.USD },
      editedProfile: { ...profile, currency: Currency.USD }
    }

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(profile, '')
    )).toEqual({
      isLoading: false,
      profile,
      editedProfile: profile,
      readonly: true
    })
  })
})
