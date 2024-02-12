import { type StateSchema } from '1app/providers/StoreProvider'
import { type LoginSchema } from '../../types/loginSchema'

// лучше делить селекторы на мельчайшие части стэйтаб иначе будут лишние перерисовки
export const selectLoginState = (state: StateSchema): LoginSchema => state.loginForm
