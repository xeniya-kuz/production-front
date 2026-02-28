import { StoreProvider, type StateSchema } from '@/app/providers/StoreProvider'
import { articlesPageFiltersReducer } from '@/widgets/ArticlesFilters'
import { articleCommentsReducer } from '@/features/ArticleComments'
import { articleInfiniteListReducer } from '@/features/ArticleInfiniteList'
import { loginReducer } from '@/features/AuthByUsername'
import { articleDetailsReducer } from '@/entities/Article'
import { commentFormReducer } from '@/entities/CommentForm'
import { profileReducer } from '@/entities/Profile'
import { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { type Decorator } from '@storybook/react'

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    commentForm: commentFormReducer,
    articleComments: articleCommentsReducer,
    articleInfiniteList: articleInfiniteListReducer,
    articlesPageFilters: articlesPageFiltersReducer,
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
): Decorator<object> =>
    function StoreDecorator(Story) {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        )
    }
