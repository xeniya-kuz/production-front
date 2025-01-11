import { type JSX, type ReactNode } from 'react'
import { Provider } from 'react-redux'
// import { store } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'
import { type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps): JSX.Element => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )

  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}
