import { PageLoader } from '@/3widgets/PageLoader'
import { routeConfig } from '../config/routeConfig'
import { type JSX, memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { RequirePermission } from './RequirePermission'
import { type AppRoutesProps } from '@/1app/types/router'

const AppRouter = (): JSX.Element => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <>{route.element}</>

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.isPrivate === true ? (
                        <RequireAuth>
                            <RequirePermission roles={route.roles}>
                                {element}
                            </RequirePermission>
                        </RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        )
    }, [])

    return (
        // без Suspense будут ошибки в консоли
        // Нужно, потому что у нас компоненты подгружаются асинхронно (чанки=lazy loading)
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    )
}
export default memo(AppRouter)
