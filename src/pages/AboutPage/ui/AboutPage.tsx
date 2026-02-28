import { Page } from '@/widgets/Page'
import { DATA_TEST_ID } from '@/shared/const/tests'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = memo(function AboutPage(): JSX.Element {
    // about.json
    const { t } = useTranslation('about')

    return <Page data-testid={DATA_TEST_ID.aboutPage}>{t('about-us')}</Page>
})

export default AboutPage
