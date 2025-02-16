import { type StateSchema } from '@/1app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

type Selector<T> = (selector: StateSchema) => T
type Result<T> = [() => T, Selector<T>]
export function buildSelector<T> (selector: Selector<T>): Result<T> {
  const useSelectHook = () => {
    return useSelector(selector)
  }

  return [useSelectHook, selector]
}
