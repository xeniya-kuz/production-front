import { selectUserRoles } from '5entities/User/model/selectors/selectUserRoles/selectUserRoles'
import { type UserRole } from '5entities/User/model/types/user'
import { routePaths } from '6shared/config/routeConfig/routeConfig'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

interface RequirePermissionProps {
  children: JSX.Element
  roles: UserRole[] | undefined
}

export const RequirePermission = ({ children, roles }: RequirePermissionProps): JSX.Element => {
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
    return <Navigate to={routePaths.forbidden} state={{ from: location }} replace />
  }

  return children
}
