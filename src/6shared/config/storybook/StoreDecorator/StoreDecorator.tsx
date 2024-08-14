import { StoreProvider, type StateSchema } from '1app/providers/StoreProvider'
import { loginReducer } from '4features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from '5entities/Profile'
import { type ReducerList } from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { type StoryFn } from '@storybook/react'

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
  function StoreDecorator (StoryComponent: StoryFn) {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent/>
        </StoreProvider>
    )
  }
