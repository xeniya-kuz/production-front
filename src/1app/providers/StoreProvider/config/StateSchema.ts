import { type LoginSchema } from '4features/AuthByUsername'
import { type ProfileSchema } from '5entities/Profile'
import { type UserSchema } from '5entities/User'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
  user: UserSchema

  // Асинхронные редьюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

// export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
//   reducerManager: ReducerManager
// }

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema, AnyAction, [ThunkMiddlewareFor<StateSchema>]> {
  reducerManager?: ReducerManager
}
