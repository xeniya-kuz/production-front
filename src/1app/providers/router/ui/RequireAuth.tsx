import { selectUserAuthData } from '@/5entities/User'
import { getRouteMain } from '@/6shared/const/router'
import { type JSX } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({
    children,
}: {
    children: JSX.Element
}): JSX.Element {
    const location = useLocation()
    const auth = useSelector(selectUserAuthData)

    if (auth === undefined) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return (
            <Navigate
                to={getRouteMain()}
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}
