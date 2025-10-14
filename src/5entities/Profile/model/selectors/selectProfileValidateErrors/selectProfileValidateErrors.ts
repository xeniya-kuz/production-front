import { type StateSchema } from '@/1app/providers/StoreProvider'
import { type ValidateProfileError } from '../../const/validate'

export const selectProfileValidateErrors = (
    state: StateSchema,
): ValidateProfileError[] | undefined => state.profile?.validateErrors
