import { type StateSchema } from '1app/providers/StoreProvider'
import { isUserAdmin, selectUserRoles } from './selectUserRoles'
import { UserRole } from '../../const/userRole'

describe('selectUserRoles', () => {
  test('success', () => {
    const roles = [UserRole.ADMIN]
    const state: DeepPartial<StateSchema> = {
      user: { authData: { roles } }
    }
    expect(isUserAdmin(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = { }
    expect(selectUserRoles(state as StateSchema)).toBe(undefined)
  })
}
)
