import { type JSX, memo } from 'react'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'
import { DATA_TEST_ID } from '@/shared/const/tests'

const AdminPanelPage = memo(function AdminPanelPage(): JSX.Element {
    const { t } = useTranslation('profile')

    return (
        <Page data-testid={DATA_TEST_ID.adminPanelPage}>
            {t('admin-panel')}
        </Page>
    )
})

export default AdminPanelPage
