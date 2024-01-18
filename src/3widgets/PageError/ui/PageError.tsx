import { classNames } from '6shared/lib/classNames/classNames'
import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '6shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
  const { t } = useTranslation()

  const reloadPage = (): void => {
    location.reload()
  }

  return (
      <div className={classNames(styles.pageError, [className])}>
          <p>{t('Произошла непредвиденная ошибка')}</p>
          <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
      </div>
  )
}
