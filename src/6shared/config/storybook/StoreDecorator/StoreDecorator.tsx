import { StoreProvider, type StateSchema } from '1app/providers/StoreProvider'
import { articleDetailsCommentsReducer } from '2pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice'
import { profileReducer } from '2pages/ProfilePage/model/slice/profileSlice'
import { addCommentFormReducer } from '4features/AddCommentForm/model/slice/addCommentFormSlice'
import { loginReducer } from '4features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsReducer } from '5entities/Article/model/slice/articleDetailsSlice'
import { type ReducersList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { type StoryFn } from '@storybook/react'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  function StoreDecorator (StoryComponent: StoryFn) {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent/>
        </StoreProvider>
    )
  }
