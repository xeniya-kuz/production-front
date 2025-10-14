import { Text as TextDeprecated, TextTheme } from '@/6shared/ui/deprecated/Text'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DATA_TEST_ID } from '@/6shared/const/tests'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Text } from '@/6shared/ui/redesigned/Text'
import {
    selectProfileValidateErrors,
    validateProfileErrorsTranslations,
} from '@/5entities/Profile'

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
