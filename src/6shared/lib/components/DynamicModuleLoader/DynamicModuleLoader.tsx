import { type ReduxStoreWithManager } from '1app/providers/StoreProvider'
import { type StateSchemaKey } from '1app/providers/StoreProvider/config/StateSchema'
import { type Reducer } from '@reduxjs/toolkit'
import { useEffect, type ReactNode } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicLoaderComponentProps {
  reducers: ReducerList
  children?: ReactNode
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({ reducers, children, removeAfterUnmount }: DynamicLoaderComponentProps): JSX.Element => {
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([title, reducer]: ReducerListEntry) => {
      store.reducerManager?.add(title, reducer)
      dispatch({ type: `@INIT ${title} reducer` })
    })

    return () => {
      if (removeAfterUnmount === true) {
        Object.entries(reducers).forEach(([title, reducer]: ReducerListEntry) => {
          store.reducerManager?.remove(title)
          dispatch({ type: `@DESTROY ${title} reducer` })
        })
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <>{children}</>
  )
}
