import { useAppDispatch, useTheme } from '@/6shared/lib/hooks'
import IconThemeDeprecated from '@/6shared/assets/icons/theme-light.svg'
import { classNames } from '@/6shared/lib/classNames/classNames'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/6shared/ui/deprecated/Button'
import {
    Icon as IconDeprecated,
    IconColors,
} from '@/6shared/ui/deprecated/Icon'
import { type FC, type JSX, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ThemeSwitcher.module.scss'
import { saveJsonSettings } from '@/5entities/User'
import { ToggleFeatures } from '@/6shared/lib/features'
import { Icon } from '@/6shared/ui/redesigned/Icon'
import ThemeIcon from '@/6shared/assets/icons/theme.svg'

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
                />
            }
            off={<Deprecated />}
        />
    )
})
