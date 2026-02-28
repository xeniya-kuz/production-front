import { type PageSchema } from '@/widgets/Page'
import { type ArticleCommentsSchema } from '@/features/ArticleComments'
import { type ArticleInfiniteListSchema } from '@/features/ArticleInfiniteList'
import { type ArticlesPageFiltersSchema } from '@/widgets/ArticlesFilters'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ArticleDetailsSchema } from '@/entities/Article'
import { type CommentFormSchema } from '@/entities/CommentForm'
import { type UserSchema } from '@/entities/User'
import { type rtkApi } from '@/shared/api/rtkApi'
import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { type AxiosInstance } from 'axios'
import { type ProfileSchema } from '@/entities/Profile'

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
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager
    extends EnhancedStore<
        StateSchema,
        AnyAction,
        [ThunkMiddlewareFor<StateSchema>]
    > {
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
