import { classNames } from '6shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '6shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short = false }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const onToggle = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((err) => {
      console.error(err)
    })
  }

  return (
      <Button
      className={classNames('', [className])}
      onClick={onToggle}
      theme={ButtonTheme.CLEAR}
    >
          {t(short ? 'Короткий язык' : 'Язык')}
      </Button>
  )
}
