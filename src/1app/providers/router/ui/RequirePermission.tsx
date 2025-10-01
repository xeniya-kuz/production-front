import { type UserRole, selectUserRoles } from '@/5entities/User'
import { getRouteForbidden } from '@/6shared/const/router'
import { type JSX, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

interface RequirePermissionProps {
    children: JSX.Element
    roles: UserRole[] | undefined
}

export const RequirePermission = ({
    children,
    roles,
}: RequirePermissionProps): JSX.Element => {
    const location = useLocation()
    const userRoles = useSelector(selectUserRoles)

    const hasRequiredRoles = useMemo(() => {
        if (roles === undefined) {
            return true
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole)
            return hasRole
        })
    }, [roles, userRoles])

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}
