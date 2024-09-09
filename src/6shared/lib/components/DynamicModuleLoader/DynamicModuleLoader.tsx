import { type ReduxStoreWithManager } from '1app/providers/StoreProvider'
import { type StateSchemaKey } from '1app/providers/StoreProvider/config/StateSchema'
import { useAppDispatch } from '6shared/lib/hooks'
import { type Reducer } from '@reduxjs/toolkit'
import { useEffect, type ReactNode } from 'react'
import { useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicLoaderComponentProps {
  reducers: ReducersList
  children?: ReactNode
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({ reducers, children, removeAfterUnmount = true }: DynamicLoaderComponentProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    const mountedReducers = store.reducerManager?.getReducerMap()

    Object.entries(reducers).forEach(([title, reducer]) => {
      const mounted = Boolean(mountedReducers?.[title as StateSchemaKey])
      if (!mounted) {
        store.reducerManager?.add(title as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${title} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([title]) => {
          store.reducerManager?.remove(title as StateSchemaKey)
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
