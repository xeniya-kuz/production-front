import { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '6shared/config/routeConfig/routeConfig'
import { PageLoader } from '3widgets/PageLoader'
import { useSelector } from 'react-redux'
import { selectUserAuthData } from '5entities/User'

const AppRouter = (): JSX.Element => {
  const isAuth = Boolean(useSelector(selectUserAuthData))

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => isAuth ? route : route.isPrivate !== true)
  }, [isAuth])

  return (
  // без Suspense будут ошибки в консоли
  // Нужно, потому что у нас компоненты подгружаются асинхронно (чанки=lazy loading)
      <Suspense fallback={<PageLoader/>}>
          <Routes>
              {routes.map(({ element, path }) => (
                  <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
              ))}
          </Routes>
      </Suspense>
  )
}
export default memo(AppRouter)
