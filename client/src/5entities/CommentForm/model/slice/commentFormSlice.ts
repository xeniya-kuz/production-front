import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type CommentFormSchema } from '../types/CommentForm'

const initialState: CommentFormSchema = {
  error: undefined,
  isLoading: false,
  comment: undefined
}

export const commentFormSlice = createSlice({
  name: 'commentForm',
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload
    }
  }
})

export const { actions: commentFormActions } = commentFormSlice
export const { reducer: commentFormReducer } = commentFormSlice
