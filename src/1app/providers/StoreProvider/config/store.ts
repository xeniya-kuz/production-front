import { userReducer } from '5entities/User'
import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type CombinedState, type Reducer } from 'redux'
import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { $api } from '6shared/api/api'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    // ...asyncReducers,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArg = {
    api: $api
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    // для тестирования
    preloadedState: initialState,
    // чтобы не экспортировать везде $api
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        }
      })

  })

  // @ts-expect-error - temporary
  store.reducerManager = reducerManager

  return store
}

export const store = createReduxStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
