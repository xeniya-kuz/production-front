import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type PageSchema } from '../types/PageSchema'

const initialState: PageSchema = {
  scroll: {}
}

export const PageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[payload.path] = payload.position
    }
  }
})

export const { actions: pageActions } = PageSlice
export const { reducer: pageReducer } = PageSlice
