import { type LoginSchema } from '4features/AuthByUsername'
import { type UserSchema } from '5entities/User'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
  user: UserSchema
  loginForm: LoginSchema
}
