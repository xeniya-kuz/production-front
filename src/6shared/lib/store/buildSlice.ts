import {
    type ActionCreatorsMapObject,
    bindActionCreators,
    type CaseReducerActions,
    createSlice,
    type CreateSliceOptions,
    type Slice,
    type SliceCaseReducers,
} from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useAppDispatch } from '../hooks'

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(
    options: CreateSliceOptions<State, CaseReducers, Name>,
): Slice<State, CaseReducers, Name> & {
    useActions: () => CaseReducerActions<CaseReducers, Name>
} {
    const slice = createSlice(options)

    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch()

        return useMemo(
            () =>
                bindActionCreators(
                    slice.actions as unknown as ActionCreatorsMapObject,
                    dispatch,
                ) as typeof slice.actions,
            [dispatch],
        )
    }

    return {
        ...slice,
        useActions,
    }
}
