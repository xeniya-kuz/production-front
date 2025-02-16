import { bindActionCreators, createSlice, type CreateSliceOptions, type SliceCaseReducers } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useAppDispatch } from '../hooks'

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
    >
(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options)

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch()
    // @ts-expect-error - types error
    return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch])
  }

  return {
    ...slice,
    useActions
  }
}
