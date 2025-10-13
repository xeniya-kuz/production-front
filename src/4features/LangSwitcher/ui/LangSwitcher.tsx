import { classNames } from '@/6shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button'
import { type JSX, memo } from 'react'
import styles from './LangSwitcher.module.scss'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Button } from '@/6shared/ui/redesigned/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = memo(function LangSwitcher({
    className,
    short = false,
}: LangSwitcherProps): JSX.Element {
    const { t, i18n } = useTranslation()

    const onToggle = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch(
            (err) => {
                console.error(err)
            },
        )
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    variant="clear"
                    className={classNames(styles.langSwitcherRedesigned, [
                        className,
                    ])}
                    onClick={onToggle}
                    title="Сменить язык"
                >
                    {t('Короткий язык').toUpperCase()}
                </Button>
            }
            off={
                <ButtonDeprecated
                    className={classNames(styles.langSwitcher, [className])}
                    onClick={onToggle}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </ButtonDeprecated>
            }
        />
    )
})
