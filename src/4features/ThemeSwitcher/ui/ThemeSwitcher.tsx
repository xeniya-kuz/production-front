import { useTheme } from '@/1app/providers/ThemeProvider'
import IconTheme from '@/6shared/assets/icons/theme.svg'
import { classNames } from '@/6shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/6shared/ui/Button/Button'
import { Icon, IconColors } from '@/6shared/ui/Icon/Icon'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(
  function ThemeSwitcher ({ className }: ThemeSwitcherProps): JSX.Element {
    const { toggleTheme } = useTheme()
    const { t } = useTranslation('buttons')

    return (
        <Button
            className={classNames(styles.themeSwitcher, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            title={t('change-theme')}
        >
            <Icon Svg={IconTheme} color={IconColors.INVERTED_PRIMARY_FILL} />
        </Button>
    )
  })
