import { classNames } from '@/shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import {
    Button as ButtonDeprecated,
    type ButtonProps as ButtonDeprecatedProps,
} from '@/shared/ui/deprecated/Button'
import {
    Button as ButtonRedesigned,
    type ButtonProps as ButtonRedesignedProps,
} from '@/shared/ui/redesigned/Button'
import { type JSX, memo } from 'react'
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features'
import { useTheme } from '@/shared/lib/hooks'
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text'

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import {
    DEPRECATED_CLASSNAME,
    REDESIGNED_CLASSNAME,
} from '@/shared/const/general'

interface PageErrorProps {
    className?: string
}

export const PageError = memo(function PageError({
    className,
}: PageErrorProps): JSX.Element {
    const { t } = useTranslation()
    const { theme } = useTheme()

    const reloadPage = (): void => {
        location.reload()
    }

    const Button = (
        props: ButtonDeprecatedProps & ButtonRedesignedProps,
    ): JSX.Element => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ButtonRedesigned {...props} />}
            off={<ButtonDeprecated {...props} />}
        />
    )

    const Text = (props: { text: string }): JSX.Element => (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<TextRedesigned {...props} />}
            off={<TextDeprecated {...props} />}
        />
    )

    const appStyles = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => REDESIGNED_CLASSNAME,
        off: () => DEPRECATED_CLASSNAME,
    })

    return (
        <VStack
            gap="16"
            className={classNames(styles.pageError, [
                className,
                appStyles,
                theme,
            ])}
        >
            <Text text={t('Произошла непредвиденная ошибка')} />
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </VStack>
    )
})
