import { classNames } from '6shared/lib/classNames/classNames'
import { useTheme } from '1app/providers/ThemeProvider'
import { Navbar } from '3widgets/Navbar'
import { Sidebar } from '3widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { PageLoader } from '3widgets/PageLoader'
import { AppRouter } from './providers/router'
import { userActions } from '5entities/User'
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch'

export default function App (): JSX.Element {
  const dispatch = useAppDispatch()
  const { theme } = useTheme()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
      <div className={classNames('app', [theme])}>
          {/* Здесь Suspense нужен, т.к. переводы из i18n будут подгружаться чанками */}
          <Suspense fallback={<PageLoader/>}>
              <Navbar />
              <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}
