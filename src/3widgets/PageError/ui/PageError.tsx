import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import {
    Button as ButtonDeprecated,
    type ButtonProps as ButtonDeprecatedProps,
} from '@/6shared/ui/deprecated/Button'
import {
    Button as ButtonRedesigned,
    type ButtonProps as ButtonRedesignedProps,
} from '@/6shared/ui/redesigned/Button'
import { type JSX, memo } from 'react'
import { toggleFeatures, ToggleFeatures } from '@/6shared/lib/features'
import { useTheme } from '@/6shared/lib/hooks'
import { Text as TextRedesigned } from '@/6shared/ui/redesigned/Text'

import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text'
import { VStack } from '@/6shared/ui/redesigned/Stack'

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
        on: () => 'app_redesigned',
        off: () => 'app',
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
