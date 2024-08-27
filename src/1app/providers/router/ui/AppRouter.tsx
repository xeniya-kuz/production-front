import { PageLoader } from '3widgets/PageLoader'
import { type AppRoutesProps, routeConfig } from '6shared/config/routeConfig/routeConfig'
import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'

const AppRouter = (): JSX.Element => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <div className="page-wrapper">
        {route.element}
    </div>

    return (
        <Route
          key={route.path}
          path={route.path}
          element={(route.isPrivate === true) ? <RequireAuth>{element}</RequireAuth> : element }
        />
    )
  }, [])

  return (
  // без Suspense будут ошибки в консоли
  // Нужно, потому что у нас компоненты подгружаются асинхронно (чанки=lazy loading)
      <Suspense fallback={<PageLoader/>}>
          <Routes>
              {Object.values(routeConfig).map(renderWithWrapper)}
          </Routes>
      </Suspense>
  )
}
export default memo(AppRouter)
