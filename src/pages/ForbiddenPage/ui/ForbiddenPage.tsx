import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { DATA_TEST_ID } from '@/shared/const/tests'

export const ForbiddenPage = memo(function ForbiddenPage(): JSX.Element {
    const { t } = useTranslation()

    return (
        <Page data-testid={DATA_TEST_ID.forbiddenPage}>
            {t('errors:no-access-page')}
        </Page>
    )
})
