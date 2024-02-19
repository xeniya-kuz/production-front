import { classNames } from '6shared/lib/classNames/classNames'
import { Theme, useTheme } from '1app/providers/ThemeProvider'
import IconLight from '6shared/assets/icons/theme-light.svg'
import IconDark from '6shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(
  function ThemeSwitcher ({ className }: ThemeSwitcherProps): JSX.Element {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
          className={classNames('', [className])}
          onClick={toggleTheme}
          theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT && <IconLight />}
            {theme === Theme.DARK && <IconDark />}
        </Button>
    )
  })
