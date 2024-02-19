import { BugButton } from '1app/providers/ErrorBoundary/ui/BugButton'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = memo(function MainPage (): JSX.Element {
  const { t } = useTranslation()

  return (
      <>
          {t('Главная страница')}
          <div><BugButton/></div>
      </>
  )
})

export default MainPage
