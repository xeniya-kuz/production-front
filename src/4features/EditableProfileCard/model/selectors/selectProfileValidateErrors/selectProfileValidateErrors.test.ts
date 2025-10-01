import { type StateSchema } from '@/1app/providers/StoreProvider'
import { selectProfileValidateErrors } from './selectProfileValidateErrors'
import { ValidateProfileError } from '../../const/validate'

describe('selectProfileValidateErrors', () => {
    test('should return validate errors', () => {
        const validateErrors = [ValidateProfileError.NAME]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        }
        expect(selectProfileValidateErrors(state as StateSchema)).toEqual(
            validateErrors,
        )
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(selectProfileValidateErrors(state as StateSchema)).toBe(
            undefined,
        )
    })
})
