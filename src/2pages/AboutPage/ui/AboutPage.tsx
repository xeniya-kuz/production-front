import { Page } from '3widgets/Page'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = memo(function AboutPage (): JSX.Element {
  // about.json
  const { t } = useTranslation('about')

  return <Page>{t('about-us')}</Page>
})

export default AboutPage
