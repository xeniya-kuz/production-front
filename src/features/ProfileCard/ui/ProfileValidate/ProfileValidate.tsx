import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DATA_TEST_ID } from '@/shared/const/tests'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import {
    selectProfileValidateErrors,
    validateProfileErrorsTranslations,
} from '@/entities/Profile'

export const ProfileValidate = memo(function Errors(): JSX.Element {
    const { t } = useTranslation('alert')
    const validateErrors = useSelector(selectProfileValidateErrors)

    return (
        <>
            {validateErrors?.length &&
                validateErrors?.map((err) => (
                    <ToggleFeatures
                        key={err}
                        feature="isAppRedesigned"
                        on={
                            <Text
                                variant="error"
                                text={t(validateProfileErrorsTranslations[err])}
                                data-testid={DATA_TEST_ID.editableProfileErrors}
                            />
                        }
                        off={
                            <TextDeprecated
                                key={err}
                                theme={TextTheme.ERROR}
                                text={t(validateProfileErrorsTranslations[err])}
                                data-testid={DATA_TEST_ID.editableProfileErrors}
                            />
                        }
                    />
                ))}
        </>
    )
})
