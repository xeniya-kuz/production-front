import { type Profile } from '../../types/profile'
import { ValidateProfileError } from '../../const/validate'

export const validateProfileData = (
    profile?: Profile,
): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA]
    }

    const { firstname, lastname, age, country } = profile
    const errors: ValidateProfileError[] = []

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.NAME)
    }

    if (!age || (!Number.isInteger(age) && age > 0 && age < 200)) {
        errors.push(ValidateProfileError.AGE)
    }

    if (!country) {
        errors.push(ValidateProfileError.COUNTRY)
    }

    return errors
}

export const validateProfileErrorsTranslations = {
    [ValidateProfileError.NAME]: 'errors:name',
    [ValidateProfileError.AGE]: 'errors:age',
    [ValidateProfileError.NO_DATA]: 'errors:no-data',
    [ValidateProfileError.COUNTRY]: 'errors:country',
    [ValidateProfileError.SERVER]: 'errors:server',
}
