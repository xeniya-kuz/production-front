import { StoreProvider, type StateSchema } from '1app/providers/StoreProvider'
import { articlesPageReducer } from '2pages/ArticlesPage'
import { profileReducer } from '2pages/ProfilePage'
import { articleCommentsReducer } from '4features/AddArticleCommentForm'
import { articleRecommendationsReducer } from '4features/ArticleRecommendations'
import { articlesPageFiltersReducer } from '4features/ArticlesPageFilters'
import { loginReducer } from '4features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsReducer } from '5entities/Article'
import { commentFormReducer } from '5entities/CommentForm'
import { type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { type StoryFn } from '@storybook/react'

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  commentForm: commentFormReducer,
  articleComments: articleCommentsReducer,
  articlesPage: articlesPageReducer,
  articlesPageFilters: articlesPageFiltersReducer,
  articleRecommendations: articleRecommendationsReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
  function StoreDecorator (StoryComponent: StoryFn) {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent/>
        </StoreProvider>
    )
  }
