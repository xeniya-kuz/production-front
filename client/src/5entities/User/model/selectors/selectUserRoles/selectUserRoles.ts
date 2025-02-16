import { type StateSchema } from '@/1app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { UserRole } from '../../const/userRole'

export const selectUserRoles = (state: StateSchema): UserRole[] | undefined => state.user?.authData?.roles

export const isUserAdmin = createSelector(selectUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)))
export const isUserManager = createSelector(selectUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)))
