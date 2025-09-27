import { classNames } from '@/6shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { type JSX, memo } from 'react'
import { DATA_TEST_ID } from '@/6shared/const/tests'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = memo(function NotFoundPage ({ className }: NotFoundPageProps): JSX.Element {
  const { t } = useTranslation()
  return (
      <main data-testid={DATA_TEST_ID.notFoundPage} className={classNames(styles.notFoundPage, [className])}>
          {t('Страница не найдена')}
      </main>
  )
})
