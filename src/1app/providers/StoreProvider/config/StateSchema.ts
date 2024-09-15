import { type ArticleDetailsCommentsSchema } from '2pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from '2pages/ArticlesPage'
import { type ProfileSchema } from '2pages/ProfilePage'
import { type PageSchema } from '3widgets/Page'
import { type AddCommentFormSchema } from '4features/AddCommentForm'
import { type ArticleRecommendationsSchema } from '4features/ArticleRecommendations'
import { type ArticlesPageFiltersSchema } from '4features/ArticlesPageFilters/model/types/articlesPageFiltersSchema'
import { type LoginSchema } from '4features/AuthByUsername'
import { type ArticleDetailsSchema } from '5entities/Article'
import { type UserSchema } from '5entities/User'
import { type AnyAction, type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { type AxiosInstance } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
  user: UserSchema
  page: PageSchema

  // Асинхронные редьюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articlesPageFilters?: ArticlesPageFiltersSchema
  articleRecommendations?: ArticleRecommendationsSchema
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
