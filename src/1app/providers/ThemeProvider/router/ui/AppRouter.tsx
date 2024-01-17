import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '6shared/config/routeConfig/routeConfig'
import { PageLoader } from '3widgets/PageLoader'

const AppRouter = (): JSX.Element => {
  return (
  // без Suspense будут ошибки в консоли
  // Нужно, потому что у нас компоненты подгружаются асинхронно (чанки=lazy loading)
      <Suspense fallback={<PageLoader/>}>
          <Routes>
              {Object.values(routeConfig).map(({ element, path }) => (
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
export default AppRouter
