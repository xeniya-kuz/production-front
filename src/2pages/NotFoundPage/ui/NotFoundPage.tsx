import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { type JSX, memo } from 'react'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = memo(function NotFoundPage ({ className }: NotFoundPageProps): JSX.Element {
  const { t } = useTranslation()
  return (
      <main className={classNames(styles.notFoundPage, [className])}>
          {t('Страница не найдена')}
      </main>
  )
})
