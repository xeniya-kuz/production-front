import { BugButton } from '@/1app/providers/ErrorBoundary/ui/BugButton'
import { Page } from '@/3widgets/Page'
import { type JSX, memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = memo(function MainPage (): JSX.Element {
  const { t } = useTranslation()

  return (
      <Page data-testid='MainPage'>
          {t('Главная страница')}
          <div><BugButton/></div>
      </Page>
  )
})

export default MainPage
