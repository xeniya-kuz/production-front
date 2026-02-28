import { useAppDispatch, useTheme } from '@/shared/lib/hooks'
import IconThemeDeprecated from '@/shared/assets/icons/theme-light.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated, IconColors } from '@/shared/ui/deprecated/Icon'
import { type FC, type JSX, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ThemeSwitcher.module.scss'
import { saveJsonSettings } from '@/entities/User'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ThemeIcon from '@/shared/assets/icons/theme.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
    className,
}: ThemeSwitcherProps): JSX.Element {
    const dispatch = useAppDispatch()
    const { toggleTheme } = useTheme()
    const { t } = useTranslation('buttons')

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            void dispatch(saveJsonSettings({ theme: newTheme }))
        })
    }, [toggleTheme, dispatch])

    const Deprecated: FC = () => (
        <ButtonDeprecated
            className={classNames(styles.themeSwitcher, [className])}
            onClick={onToggleHandler}
            theme={ButtonTheme.CLEAR}
            title={t('change-theme')}
        >
            <IconDeprecated
                Svg={IconThemeDeprecated}
                color={IconColors.INVERTED_PRIMARY_FILL}
                width={40}
                height={40}
            />
        </ButtonDeprecated>
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={ThemeIcon}
                    clickable
                    onClick={onToggleHandler}
                    title={t('change-theme')}
                />
            }
            off={<Deprecated />}
        />
    )
})
