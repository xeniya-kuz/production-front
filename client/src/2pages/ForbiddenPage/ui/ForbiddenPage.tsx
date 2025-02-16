import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/3widgets/Page'

export const ForbiddenPage = memo(function ForbiddenPage
(): JSX.Element {
  const { t } = useTranslation()

  return (
      <Page>
          {t('errors:no-access-page')}
      </Page>

  )
})
