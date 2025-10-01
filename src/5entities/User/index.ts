export { userMock } from './model/const/mocks'

export { UserRole } from './model/const/userRole'
export { selectUserRoles } from './model/selectors/selectUserRoles/selectUserRoles'

export { userReducer, userActions } from './model/slice/userSlice'

export type { UserSchema, User } from './model/types/user'

export { selectUserAuthData } from './model/selectors/selectUserAuthData/selectUserAuthData'
export { selectUserMounted } from './model/selectors/selectUserMounted/selectUserMounted'
export {
    isUserAdmin,
    isUserManager,
} from './model/selectors/selectUserRoles/selectUserRoles'
