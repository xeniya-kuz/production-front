import { StoreProvider, type StateSchema } from '@/1app/providers/StoreProvider'
import { articleCommentsReducer } from '@/4features/ArticleComments'
import { articleInfiniteListReducer } from '@/4features/ArticleInfiniteList'
import { articlesPageFiltersReducer } from '@/3widgets/ArticlesFilters'
import { loginReducer } from '@/4features/AuthByUsername'
import { articleDetailsReducer } from '@/5entities/Article'
import { commentFormReducer } from '@/5entities/CommentForm'
import { type ReducerList } from '@/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { type JSX, type ReactNode } from 'react'
import { type StoryFn } from '@storybook/react'
import { profileReducer } from '@/5entities/Profile'

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
) =>
    function StoreDecorator(StoryComponent: () => ReactNode): JSX.Element {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
    }
