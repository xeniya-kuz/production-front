export {
    selectEditedProfile,
    selectProfileError,
    selectProfileIsLoading,
    selectProfileReadonly,
    selectProfileData,
    selectProfileValidateErrors,
} from './model/selectors'

export {
    updateProfileData,
    fetchProfileData,
    validateProfileErrorsTranslations,
} from './model/services'

export { profileMock } from './model/const/mocks'
export type { Profile, ProfileSchema } from './model/types/profile'
export { profileActions, profileReducer } from './model/slice'
