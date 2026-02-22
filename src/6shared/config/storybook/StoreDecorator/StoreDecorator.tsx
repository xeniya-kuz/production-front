import { StoreProvider, type StateSchema } from '@/1app/providers/StoreProvider'
import { articlesPageFiltersReducer } from '@/3widgets/ArticlesFilters'
import { articleCommentsReducer } from '@/4features/ArticleComments'
import { articleInfiniteListReducer } from '@/4features/ArticleInfiniteList'
import { loginReducer } from '@/4features/AuthByUsername'
import { articleDetailsReducer } from '@/5entities/Article'
import { commentFormReducer } from '@/5entities/CommentForm'
import { profileReducer } from '@/5entities/Profile'
import { type ReducerList } from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
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
