import { type StateSchema } from '@/1app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'
import { selectScroll } from '../selectScroll/selectScroll'

export const selectScrollByPath = createSelector(
    selectScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0,
)
