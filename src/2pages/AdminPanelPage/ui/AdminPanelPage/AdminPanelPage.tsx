import { type JSX, memo } from 'react'
import { Page } from '@/3widgets/Page'
import { useTranslation } from 'react-i18next'

const AdminPanelPage = memo(function AdminPanelPage
(): JSX.Element {
  const { t } = useTranslation('profile')

  return (
      <Page data-testid='AdminPanelPage'>
          {t('admin-panel')}
      </Page>
  )
})

export default AdminPanelPage
