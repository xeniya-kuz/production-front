import { validateProfileErrorsTranslations } from '../../model/services'
import { selectProfileValidateErrors } from '../../model/selectors'
import { Text, TextTheme } from '@/6shared/ui/Text/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export const EditableProfileErrors = memo(function Errors
(): JSX.Element {
  const { t } = useTranslation('alert')
  const validateErrors = useSelector(selectProfileValidateErrors)

  return (
      <>
          {validateErrors?.length !== undefined &&
              validateErrors?.map(err =>
                  <Text
                      key={err}
                      theme={TextTheme.ERROR}
                      text={t(validateProfileErrorsTranslations[err])}
                      data-testid='editableProfileErrors'
                  />
              )
            }
      </>
  )
})
