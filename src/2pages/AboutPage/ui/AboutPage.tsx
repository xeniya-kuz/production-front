import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = memo(function AboutPage (): JSX.Element {
  // about.json
  const { t } = useTranslation('about')

  return <main>{t('about-us')}</main>
})

export default AboutPage
