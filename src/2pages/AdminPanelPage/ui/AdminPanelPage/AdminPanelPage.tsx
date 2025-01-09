import { classNames } from '6shared/lib/classNames/classNames'
import styles from './AdminPanelPage.module.scss'
import { memo } from 'react'
import { Page } from '3widgets/Page'
import { useTranslation } from 'react-i18next'

interface AdminPanelPageProps {
  className?: string
}

const AdminPanelPage = memo(function AdminPanelPage
({ className }: AdminPanelPageProps): JSX.Element {
  const { t } = useTranslation('profile')

  return (
      <Page className={classNames(styles.adminpanelpage, [className])}>
          {t('admin-panel')}
      </Page>
  )
})

export default AdminPanelPage
