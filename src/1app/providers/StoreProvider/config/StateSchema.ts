import { type PageSchema } from '3widgets/Page'
import { type ArticleCommentsSchema } from '4features/ArticleComments'
import { type ArticleInfiniteListSchema } from '4features/ArticleInfiniteList'
import { type ArticlesPageFiltersSchema } from '4features/ArticlesPageFilters'
import { type LoginSchema } from '4features/AuthByUsername'
import { type ProfileSchema } from '4features/EditableProfileCard'
import { type ArticleDetailsSchema } from '5entities/Article'
import { type CommentFormSchema } from '5entities/CommentForm'
import { type UserSchema } from '5entities/User'
import { type rtkApi } from '6shared/api/rtkApi'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { type AxiosInstance } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
  user: UserSchema
  page: PageSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редьюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleComments?: ArticleCommentsSchema
  commentForm?: CommentFormSchema
  articleInfiniteList?: ArticleInfiniteListSchema
  articlesPageFilters?: ArticlesPageFiltersSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema, AnyAction, [ThunkMiddlewareFor<StateSchema>]> {
  reducerManager?: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
