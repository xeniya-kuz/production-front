/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Profile } from '5entities/Profile'
import { ValidateProfileError } from '../../types'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if (profile === undefined) {
    return [ValidateProfileError.NO_DATA]
  }

  const { first, lastname, age, country } = profile
  const errors: ValidateProfileError[] = []

  if (!first || !lastname) {
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
  [ValidateProfileError.SERVER]: 'errors:server'
}
