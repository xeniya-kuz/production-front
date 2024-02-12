import { StoreProvider, type StateSchema } from '1app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StoryFn } from '@storybook/react'

export const StoreDecorator = (state: DeepPartial<StateSchema>) =>
  function StoreDecorator (StoryComponent: StoryFn) {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent/>
        </StoreProvider>
    )
  }
