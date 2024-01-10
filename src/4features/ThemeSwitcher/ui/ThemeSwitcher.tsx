import { classNames } from '6shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from '1app/providers/ThemeProvider'
import IconLight from '6shared/assets/icons/theme-light.svg'
import IconDark from '6shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from '6shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
      <Button
      className={classNames(styles.themeSwitcher, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
          {theme === Theme.LIGHT && <IconLight />}
          {theme === Theme.DARK && <IconDark />}
      </Button>
  )
}
